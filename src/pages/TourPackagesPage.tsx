import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, Compass, Clock, Sparkles } from 'lucide-react';
import { TOURS } from '../data/tours';
import {
  PACKAGE_TYPES,
  TOUR_INCLUDED,
  TOUR_EXCLUDED,
  IMPORTANT_NOTES,
} from '../data/siteConfig';
import { useCurrency } from '../context/CurrencyContext';
import { SmartImage } from '../components/shared/SmartImage';
import { TripPlanner } from '../components/shared/TripPlanner';

const multiDayTours = TOURS.filter((t) => t.type === 'multi-day');
const dayTours = TOURS.filter((t) => t.type === 'day');

export const TourPackagesPage: React.FC = () => {
  const { formatPrice } = useCurrency();

  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src="https://4melankatours.com/wp-content/uploads/2025/07/All-Ceylon.webp"
          alt="Tour packages in Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ol className="flex items-center gap-2 text-xs text-white/60 mb-3">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">Tour Packages</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">Private & tailor-made</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Tour packages <em className="italic font-normal text-[#f5c56b]">in Sri Lanka</em>
          </h1>
          <p className="text-white/80 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Nine multi-day theme tours and nine single-day trips from Bandaranaike International
            Airport. Follow one as-is, combine two, or let Kura build an itinerary from scratch
            around your dates, interests and budget.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Compass className="w-3.5 h-3.5 text-[#f5c56b]" /> 9 theme tours · 7–28 days
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Clock className="w-3.5 h-3.5 text-[#f5c56b]" /> 9 day tours from BIA
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#f5c56b]" /> 100% customizable
            </span>
          </div>
        </div>
      </section>

      {/* Multi-Day Theme Tours */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">
                Multi-day round tours
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                KuRa’s 9 <em className="italic font-normal text-[#c88a2b]">theme tours</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852] max-w-md">
              “From” prices cover a private AC car with an English-speaking driver-guide for the
              whole tour. All-inclusive hotel & activity quotes on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {multiDayTours.map((tour) => (
              <Link
                key={tour.slug}
                to={`/${tour.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <SmartImage
                    src={tour.posterImage || tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#141413]/85 text-[#f5c56b] text-xs font-bold px-3 py-1 rounded-full">
                    {tour.durationLabel}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#c88a2b]">{tour.kicker}</span>
                    <h3 className="font-serif text-2xl font-bold text-[#141413] mt-1 group-hover:text-[#c88a2b] transition">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-[#5c5852] mt-2 line-clamp-3">{tour.lead}</p>
                    {tour.routeStops.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {tour.routeStops.slice(0, 6).map((stop) => (
                          <span
                            key={stop}
                            className="text-[10px] bg-[#faf6ee] text-[#4a4742] px-2 py-0.5 rounded-full border border-black/5"
                          >
                            {stop}
                          </span>
                        ))}
                        {tour.routeStops.length > 6 && (
                          <span className="text-[10px] text-[#c88a2b] font-semibold px-1">
                            +{tour.routeStops.length - 6} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                    <div>
                      <small className="text-[11px] text-[#6e6a63] block">From</small>
                      <b className="font-serif text-2xl text-[#1e6b52]">
                        {formatPrice(tour.priceUsd)}
                      </b>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#141413] group-hover:text-[#c88a2b]">
                      Day-by-day plan <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Single-Day Tours from BIA */}
      <section id="day-tours" className="py-16 md:py-24 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">
                Short on time or in transit?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                9 day tours <em className="italic font-normal text-[#c88a2b]">from BIA Airport</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852] max-w-md">
              Picked up and dropped back at Bandaranaike International Airport (or your Colombo /
              Negombo hotel) in a single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTours.map((tour) => (
              <Link
                key={tour.slug}
                to={`/${tour.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <SmartImage
                    src={tour.posterImage || tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1e6b52] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Day Tour · ~1 Day
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#141413] group-hover:text-[#c88a2b] transition">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-[#5c5852] mt-2 line-clamp-2">{tour.lead}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between">
                    <div>
                      <small className="text-[11px] text-[#6e6a63] block">From</small>
                      <b className="font-serif text-2xl text-[#141413]">
                        {formatPrice(tour.priceUsd)}
                      </b>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#c88a2b]">
                      Highlights <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Ways to Book & Included/Excluded */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-hand text-2xl text-[#c88a2b] block">Two ways to travel</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
              All-inclusive or <em className="italic font-normal text-[#c88a2b]">vehicle only</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGE_TYPES.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-3xl p-7 border flex flex-col justify-between ${
                  pkg.featured
                    ? 'bg-[#141413] text-white border-[#c88a2b] shadow-xl'
                    : 'bg-white text-[#141413] border-black/10'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                      pkg.featured
                        ? 'bg-[#c88a2b] text-white'
                        : 'bg-[#faf6ee] text-[#c88a2b]'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-4">{pkg.title}</h3>
                  <p
                    className={`text-xs mt-1 ${
                      pkg.featured ? 'text-white/75' : 'text-[#5c5852]'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-xs">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Included / Excluded */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-[#faf6ee] rounded-3xl p-7 border border-black/5">
              <h4 className="font-serif text-xl font-bold text-[#141413] mb-4">
                Included in every tour
              </h4>
              <ul className="space-y-2.5 text-sm text-[#3d3a36]">
                {TOUR_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6b52] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#faf6ee] rounded-3xl p-7 border border-black/5">
              <h4 className="font-serif text-xl font-bold text-[#141413] mb-4">Not included</h4>
              <ul className="space-y-2.5 text-sm text-[#3d3a36]">
                {TOUR_EXCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 13 Booking Notes */}
          <div className="mt-14 bg-white rounded-3xl p-8 border border-black/10">
            <span className="font-hand text-2xl text-[#c88a2b] block">Good to know</span>
            <h3 className="font-serif text-2xl font-bold text-[#141413] mb-6">
              Important notes before you book
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {IMPORTANT_NOTES.map((note, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#faf6ee] text-xs text-[#4a4742] leading-relaxed"
                >
                  <span className="font-serif font-bold text-sm text-[#c88a2b] shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TripPlanner />
    </div>
  );
};
