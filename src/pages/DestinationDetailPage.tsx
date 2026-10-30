import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Hotel,
  Sparkles,
  Utensils,
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useCMS } from '../context/CMSContext';
import { SmartImage } from '../components/shared/SmartImage';
import { Lightbox, LightboxItem } from '../components/shared/Lightbox';
import { CtaBand } from '../components/shared/CtaBand';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { formatPrice } = useCurrency();
  const { destinations: DESTINATIONS, tours: TOURS } = useCMS();
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const destIndex = DESTINATIONS.findIndex((d) => d.slug === slug);
  if (destIndex === -1) {
    return <Navigate to="/destinations" replace />;
  }

  const dest = DESTINATIONS[destIndex];
  const prevDest = DESTINATIONS[(destIndex - 1 + DESTINATIONS.length) % DESTINATIONS.length];
  const nextDest = DESTINATIONS[(destIndex + 1) % DESTINATIONS.length];

  const relatedTours = TOURS.filter((t) => dest.relatedTourSlugs.includes(t.slug));

  const featureLightboxItems: LightboxItem[] = dest.features.flatMap((f) =>
    f.images.map((im) => ({
      src: im.src,
      caption: f.title,
      alt: im.alt || f.title,
    }))
  );

  const lightboxItems: LightboxItem[] = [
    ...dest.attractions.map((a) => ({
      src: a.image,
      caption: `${a.number} — ${a.title}`,
      alt: a.alt || a.title,
    })),
    ...featureLightboxItems,
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src={dest.heroImage}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/45 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-3">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/destinations" className="hover:text-white">
                Destinations
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">{dest.name}</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">{dest.province}</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">{dest.name}</h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            {dest.lead}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {dest.metaChips.map((chip) => (
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

      {/* Intro & Feature Sections */}
      {(dest.introParagraphs.length > 0 || dest.features.length > 0) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
            {dest.introParagraphs.length > 0 && (
              <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg text-[#3d3a36] leading-relaxed">
                {dest.introParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}

            {dest.features.map((feat, fIdx) => {
              const hasImages = feat.images && feat.images.length > 0;
              const hasText = feat.paragraphs && feat.paragraphs.length > 0;
              return (
                <div
                  key={feat.title + fIdx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 border border-black/5 shadow-xs"
                >
                  {hasImages && (
                    <div
                      className={`${
                        hasText
                          ? 'lg:col-span-6 grid gap-3 ' +
                            (feat.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1')
                          : 'lg:col-span-12 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                      } ${hasText && fIdx % 2 === 1 ? 'lg:order-2' : ''}`}
                    >
                      {!hasText && (
                        <div className="col-span-full mb-1">
                          <span className="font-hand text-2xl text-[#c88a2b] block">
                            {feat.kicker}
                          </span>
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#141413]">
                            {feat.title}
                          </h3>
                        </div>
                      )}
                      {feat.images.map((im, iIdx) => (
                        <div
                          key={im.src + iIdx}
                          className="rounded-2xl overflow-hidden h-44 sm:h-52 bg-[#faf6ee]"
                        >
                          <SmartImage
                            src={im.src}
                            alt={im.alt || feat.title}
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {hasText && (
                    <div
                      className={`${hasImages ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-3 ${
                        hasImages && fIdx % 2 === 1 ? 'lg:order-1' : ''
                      }`}
                    >
                      <span className="font-hand text-2xl text-[#c88a2b] block">
                        {feat.kicker}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#141413]">
                        {feat.title}
                      </h3>
                      {feat.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-sm text-[#4a4742] leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Attractions Grid */}
      {dest.attractions.length > 0 && (
        <section className="py-16 bg-[#f5efe1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="font-hand text-2xl text-[#c88a2b] block">Must-see spots</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                  Top attractions in{' '}
                  <em className="italic font-normal text-[#c88a2b]">{dest.name}</em>
                </h2>
              </div>
              <p className="text-sm text-[#5c5852]">
                {dest.attractions.length} places worth stopping for — tap any photo to enlarge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dest.attractions.map((attr, idx) => (
                <article
                  key={attr.title + idx}
                  className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setLbIndex(idx)}
                    className="relative h-56 overflow-hidden group text-left"
                  >
                    <SmartImage
                      src={attr.image}
                      alt={attr.alt || attr.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#141413]/85 text-[#f5c56b] text-xs font-bold px-3 py-1 rounded-full">
                      {attr.number}
                    </span>
                  </button>
                  <div className="p-6 flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#141413]">{attr.title}</h3>
                    <p className="text-xs text-[#4a4742] mt-2 leading-relaxed">
                      {attr.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kura's Hotel & Restaurant Picks */}
      {(dest.hotels.length > 0 || dest.restaurants.length > 0) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <span className="font-hand text-2xl text-[#c88a2b] block">
                KuRa’s personal picks
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Where to stay & eat in{' '}
                <em className="italic font-normal text-[#c88a2b]">{dest.name}</em>
              </h2>
              <p className="text-sm text-[#5c5852] mt-1">
                Tried and trusted by our guests — we can book any of these as part of your tour.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dest.hotels.length > 0 && (
                <div className="bg-white rounded-3xl p-7 border border-black/10 shadow-xs">
                  <h3 className="font-serif text-2xl font-bold text-[#141413] flex items-center gap-2.5 mb-5">
                    <Hotel className="w-5 h-5 text-[#c88a2b]" /> Hotels & Stays
                  </h3>
                  <ul className="divide-y divide-black/5">
                    {dest.hotels.map((h) => (
                      <li key={h.name}>
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 flex items-center justify-between text-sm font-medium text-[#141413] hover:text-[#c88a2b] transition"
                        >
                          <span>{h.name}</span>
                          <ExternalLink className="w-4 h-4 opacity-50" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {dest.restaurants.length > 0 && (
                <div className="bg-white rounded-3xl p-7 border border-black/10 shadow-xs">
                  <h3 className="font-serif text-2xl font-bold text-[#141413] flex items-center gap-2.5 mb-5">
                    <Utensils className="w-5 h-5 text-[#1e6b52]" /> Restaurants & Cafes
                  </h3>
                  <ul className="divide-y divide-black/5">
                    {dest.restaurants.map((r) => (
                      <li key={r.name}>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 flex items-center justify-between text-sm font-medium text-[#141413] hover:text-[#1e6b52] transition"
                        >
                          <span>{r.name}</span>
                          <ExternalLink className="w-4 h-4 opacity-50" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-[#f5efe1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <span className="font-hand text-2xl text-[#c88a2b] block">Ready-made routes</span>
              <h2 className="font-serif text-3xl font-bold text-[#141413]">
                Tours that visit <em className="italic font-normal text-[#c88a2b]">{dest.name}</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTours.map((rt) => (
                <Link
                  key={rt.slug}
                  to={`/${rt.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <SmartImage
                      src={rt.posterImage || rt.heroImage}
                      alt={rt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <span className="absolute top-3 left-3 bg-[#141413]/85 text-[#f5c56b] text-xs font-bold px-3 py-1 rounded-full">
                      {rt.durationLabel}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#141413] group-hover:text-[#c88a2b]">
                        {rt.title}
                      </h3>
                      <p className="text-xs text-[#5c5852] mt-1 line-clamp-2">{rt.lead}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                      <span className="text-xs text-[#6e6a63]">
                        From <b className="text-base text-[#1e6b52]">{formatPrice(rt.priceUsd)}</b>
                      </span>
                      <span className="text-xs font-bold text-[#141413] inline-flex items-center gap-1">
                        Itinerary <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next Destination Navigation */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={`/destinations/${prevDest.slug}`}
            className="bg-white rounded-2xl p-5 border border-black/10 hover:border-[#c88a2b] transition flex items-center gap-3"
          >
            <ArrowLeft className="w-5 h-5 text-[#c88a2b]" />
            <div>
              <small className="text-xs text-[#6e6a63] block">Previous destination</small>
              <b className="font-serif text-lg text-[#141413]">{prevDest.name}</b>
            </div>
          </Link>
          <Link
            to={`/destinations/${nextDest.slug}`}
            className="bg-white rounded-2xl p-5 border border-black/10 hover:border-[#c88a2b] transition flex items-center justify-end gap-3 text-right"
          >
            <div>
              <small className="text-xs text-[#6e6a63] block">Next destination</small>
              <b className="font-serif text-lg text-[#141413]">{nextDest.name}</b>
            </div>
            <ArrowRight className="w-5 h-5 text-[#c88a2b]" />
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Want to include ${dest.name}`}
        accent="in your trip?"
        description={`Tell Kura your dates and group size — he will build a custom private itinerary visiting ${dest.name} and your favorite stops.`}
      />

      <Lightbox
        items={lightboxItems}
        currentIndex={lbIndex}
        onClose={() => setLbIndex(null)}
        onPrev={() =>
          setLbIndex((prev) =>
            prev === null ? null : (prev - 1 + lightboxItems.length) % lightboxItems.length
          )
        }
        onNext={() =>
          setLbIndex((prev) => (prev === null ? null : (prev + 1) % lightboxItems.length))
        }
      />
    </div>
  );
};
