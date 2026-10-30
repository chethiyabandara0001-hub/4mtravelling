import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { SmartImage } from '../components/shared/SmartImage';
import { CtaBand } from '../components/shared/CtaBand';

const PROVINCE_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'central-province', label: 'Central' },
  { key: 'southern-province', label: 'Southern' },
  { key: 'eastern-province', label: 'Eastern' },
  { key: 'western-province', label: 'Western' },
  { key: 'north-central-province', label: 'North Central' },
  { key: 'northern-province', label: 'Northern' },
  { key: 'uva-province', label: 'Uva' },
  { key: 'sabaragamuwa-province', label: 'Sabaragamuwa' },
];

export const DestinationsPage: React.FC = () => {
  const { destinations: DESTINATIONS, resortRegions: RESORT_REGIONS } = useCMS();
  const [activeProvince, setActiveProvince] = useState<string>('all');

  const filteredDestinations =
    activeProvince === 'all'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.categorySlug === activeProvince);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src="https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/destinations.jpg"
          fallbackSrc="https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Beauty_of_Sigiriya_by_Binuka-edited.jpg"
          alt="Destinations in Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ol className="flex items-center gap-2 text-xs text-white/60 mb-3">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">Destinations</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">
            Explore the beautiful places…
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Destinations in <em className="italic font-normal text-[#f5c56b]">Sri Lanka</em>
          </h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Whether you envision lounging on golden beaches, embarking on wildlife safaris,
            exploring ancient cities, or riding scenic mountain trains through misty tea estates —
            explore all 29 destinations curated by Kura.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#f5c56b]" /> 29 destinations
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Compass className="w-3.5 h-3.5 text-[#f5c56b]" /> 9 provinces
            </span>
          </div>
        </div>
      </section>

      {/* Filterable Destinations Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {PROVINCE_FILTERS.map((pf) => {
              const cnt =
                pf.key === 'all'
                  ? DESTINATIONS.length
                  : DESTINATIONS.filter((d) => d.categorySlug === pf.key).length;
              return (
                <button
                  key={pf.key}
                  type="button"
                  onClick={() => setActiveProvince(pf.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition border ${
                    activeProvince === pf.key
                      ? 'bg-[#141413] text-[#f5c56b] border-[#141413]'
                      : 'bg-white text-[#3d3a36] border-black/10 hover:border-black/30'
                  }`}
                >
                  {pf.label} <span className="opacity-60 ml-1">{cnt}</span>
                </button>
              );
            })}
            <Link
              to="/miscellaneous-attractions"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#faf6ee] text-[#c88a2b] border border-[#c88a2b]/30 hover:bg-[#c88a2b] hover:text-white transition"
            >
              Miscellaneous Attractions →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredDestinations.map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative h-72 rounded-t-full rounded-b-3xl overflow-hidden shadow-md bg-[#141413]"
              >
                <SmartImage
                  src={dest.cardImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-center text-white">
                  <small className="block text-[10px] uppercase tracking-wider text-[#f5c56b]">
                    {dest.provinceShort}
                  </small>
                  <b className="font-serif text-lg block leading-tight mt-0.5">{dest.name}</b>
                  <span className="text-xs text-white/70">{dest.countLabel}</span>
                </div>
              </Link>
            ))}

            {activeProvince === 'all' && (
              <Link
                to="/miscellaneous-attractions"
                className="group relative h-72 rounded-t-full rounded-b-3xl overflow-hidden shadow-md bg-[#141413]"
              >
                <SmartImage
                  src="https://4melankatours.com/wp-content/uploads/2024/06/Adams-Peak-3-edited.jpg"
                  alt="Miscellaneous attractions"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-center text-white">
                  <small className="block text-[10px] uppercase tracking-wider text-[#f5c56b]">
                    Hidden gems
                  </small>
                  <b className="font-serif text-lg block leading-tight mt-0.5">Miscellaneous</b>
                  <span className="text-xs text-white/70">13 lonely attractions</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 7 Resort Regions Overview */}
      <section className="py-16 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="font-hand text-2xl text-[#c88a2b] block">How the island works</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
              Sri Lanka’s <em className="italic font-normal text-[#c88a2b]">resort regions</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESORT_REGIONS.map((reg) => (
              <div
                key={reg.title}
                className="bg-white rounded-3xl p-7 border border-black/5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#141413]">{reg.title}</h3>
                  <p className="text-xs text-[#5c5852] mt-2 leading-relaxed">{reg.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-black/5 flex flex-wrap gap-2">
                  {reg.cities.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/destinations/${c.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold bg-[#faf6ee] hover:bg-[#141413] text-[#141413] hover:text-[#f5c56b] px-3 py-1.5 rounded-full transition"
                    >
                      {c.name} <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};
