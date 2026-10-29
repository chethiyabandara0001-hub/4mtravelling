import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { TourData, TOURS } from '../data/tours';
import { PACKAGE_TYPES, SITE_CONFIG } from '../data/siteConfig';
import { useCurrency } from '../context/CurrencyContext';
import { SmartImage } from '../components/shared/SmartImage';
import { TripPlanner } from '../components/shared/TripPlanner';

interface TourDetailPageProps {
  tour?: TourData;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ tour }) => {
  const { formatPrice } = useCurrency();
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 0: true, 1: true });

  if (!tour) {
    return <Navigate to="/tour-packages" replace />;
  }

  const isDayTour = tour.type === 'day';
  const relatedTours = TOURS.filter(
    (t) => t.type === tour.type && t.slug !== tour.slug
  ).slice(0, 3);

  const toggleAllDays = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    tour.days.forEach((_, idx) => {
      next[idx] = expand;
    });
    setOpenDays(next);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src={tour.heroImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-3">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/tour-packages" className="hover:text-white">
                Tour Packages
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">{tour.title}</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">{tour.kicker}</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">{tour.title}</h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            {tour.lead}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {tour.metaChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#f5c56b]" /> {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Sidebar */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Route Bar for Multi-Day Tours */}
          {tour.routeStops.length > 0 && (
            <div className="bg-[#f5efe1] rounded-2xl p-4 mb-10 flex flex-wrap items-center gap-2 border border-black/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c88a2b] mr-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Route:
              </span>
              {tour.routeStops.map((stop, idx) => (
                <React.Fragment key={`${stop}-${idx}`}>
                  <span className="text-xs font-semibold bg-white px-3 py-1 rounded-full text-[#141413] shadow-2xs">
                    {stop}
                  </span>
                  {idx < tour.routeStops.length - 1 && (
                    <span className="text-xs text-[#6e6a63]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Itinerary or Day Tour Highlights */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-base md:text-lg text-[#3d3a36] leading-relaxed">
                {tour.introLead}
              </p>

              {!isDayTour && tour.days.length > 0 && (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="font-hand text-2xl text-[#c88a2b] block">
                        Day-by-day plan
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-[#141413]">
                        Your {tour.days.length}-day{' '}
                        <em className="italic font-normal text-[#c88a2b]">itinerary</em>
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleAllDays(true)}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#faf6ee] hover:bg-[#f0e6d2] text-[#141413] border border-black/10 transition"
                      >
                        Expand all
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleAllDays(false)}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#faf6ee] hover:bg-[#f0e6d2] text-[#141413] border border-black/10 transition"
                      >
                        Collapse all
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {tour.days.map((day, idx) => {
                      const isOpen = !!openDays[idx];
                      return (
                        <div
                          key={day.dayNumber + idx}
                          className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-xs"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDays((prev) => ({ ...prev, [idx]: !prev[idx] }))
                            }
                            className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#faf6ee]/60 transition"
                          >
                            <div className="flex items-center gap-3.5">
                              <span className="px-3 py-1 rounded-full bg-[#141413] text-[#f5c56b] text-xs font-bold shrink-0">
                                {day.dayNumber}
                              </span>
                              <div>
                                <b className="font-serif text-lg text-[#141413] block">
                                  {day.title}
                                </b>
                                {day.subtitle && (
                                  <small className="text-xs text-[#6e6a63] block">
                                    {day.subtitle}
                                  </small>
                                )}
                              </div>
                            </div>
                            <ChevronDown
                              className={`w-5 h-5 text-[#6e6a63] shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-2 border-t border-black/5 space-y-3 text-sm text-[#4a4742] leading-relaxed">
                              {day.paragraphs.map((p, pIdx) => (
                                <p key={pIdx}>{p}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {isDayTour && (
                <div className="space-y-8">
                  {tour.highlights.length > 0 && (
                    <div className="bg-white rounded-3xl p-7 border border-black/10 shadow-xs">
                      <h3 className="font-serif text-2xl font-bold text-[#141413] mb-4">
                        Tour Highlights
                      </h3>
                      <ul className="space-y-3 text-sm text-[#3d3a36]">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#1e6b52] shrink-0 mt-1" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.travelDetails.length > 0 && (
                    <div className="bg-[#faf6ee] rounded-3xl p-7 border border-black/5">
                      <h3 className="font-serif text-2xl font-bold text-[#141413] mb-4">
                        Travel Details
                      </h3>
                      <ul className="space-y-2.5 text-sm text-[#3d3a36]">
                        {tour.travelDetails.map((td, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Clock className="w-4 h-4 text-[#c88a2b] shrink-0 mt-1" />
                            <span>{td}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Sticky Booking Card */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 bg-[#141413] text-white rounded-3xl p-7 shadow-2xl border border-white/10">
              <div className="pb-5 border-b border-white/10">
                <small className="text-xs text-white/65 block">
                  {isDayTour ? 'Private day tour · starting from' : `${tour.durationLabel} · starting from`}
                </small>
                <div className="font-serif text-4xl font-bold text-[#f5c56b] mt-1">
                  {formatPrice(tour.priceUsd)}
                </div>
                <small className="text-xs text-white/60 block mt-1">
                  Vehicle-only package · All-inclusive on request
                </small>
              </div>

              <ul className="py-5 space-y-2.5 text-xs text-white/85 border-b border-white/10">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" /> Private AC vehicle +
                  English-speaking driver
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" /> Airport pick-up & drop-off
                  included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" /> Fuel, tolls, parking &
                  driver’s stay
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" /> Add hotels & tickets for
                  All-Inclusive
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" /> Only {formatPrice(150)}{' '}
                  advance to confirm
                </li>
              </ul>

              <div className="pt-5 space-y-3">
                <a
                  href="#planner"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white font-semibold py-3.5 rounded-full text-sm transition"
                >
                  Book / Customize this tour <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    `Ayubowan Kura! I am interested in the ${tour.title} (from $${tour.priceUsd}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-3.5 rounded-full text-sm transition"
                >
                  <MessageCircle className="w-4 h-4" /> Ask Kura on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-14 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGE_TYPES.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-3xl p-6 border ${
                  pkg.featured
                    ? 'bg-[#141413] text-white border-[#c88a2b]'
                    : 'bg-white text-[#141413] border-black/10'
                }`}
              >
                <span className="text-xs font-bold text-[#c88a2b] uppercase">{pkg.badge}</span>
                <h3 className="font-serif text-xl font-bold mt-1">{pkg.title}</h3>
                <ul className="mt-4 space-y-2 text-xs">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="font-serif text-2xl font-bold text-[#141413] mb-6">
            Other {isDayTour ? 'day tours' : 'multi-day tours'} you might enjoy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTours.map((rt) => (
              <Link
                key={rt.slug}
                to={`/${rt.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-black/10 hover:shadow-md transition flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <SmartImage
                    src={rt.posterImage || rt.heroImage}
                    alt={rt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#141413]">{rt.title}</h4>
                    <span className="text-xs text-[#6e6a63]">{rt.durationLabel}</span>
                  </div>
                  <b className="font-serif text-xl text-[#1e6b52]">{formatPrice(rt.priceUsd)}</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-selected Trip Planner */}
      <TripPlanner
        defaultTourName={`${tour.title} (from $${tour.priceUsd})`}
        headingTitle={`Customize ${tour.title}`}
      />
    </div>
  );
};
