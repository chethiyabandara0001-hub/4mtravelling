import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Mountain } from 'lucide-react';
import { MISC_ATTRACTIONS } from '../data/miscAttractions';
import { SmartImage } from '../components/shared/SmartImage';
import { CtaBand } from '../components/shared/CtaBand';

export const MiscAttractionsPage: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src="https://4melankatours.com/wp-content/uploads/2024/06/Adams-Peak-3-edited.jpg"
          alt="Miscellaneous attractions in Sri Lanka"
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
            <li>
              <Link to="/destinations" className="hover:text-white">
                Destinations
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">Miscellaneous</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">Hidden gems</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Miscellaneous attractions{' '}
            <em className="italic font-normal text-[#f5c56b]">beyond the main spots</em>
          </h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Sri Lanka is renowned for its iconic destinations like Colombo, Kandy, Galle, and Ella,
            but the island offers much more beyond these famous locales. Step off the beaten path to
            explore 13 remarkable attractions situated outside the main tourist hubs.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Compass className="w-3.5 h-3.5 text-[#f5c56b]" /> {MISC_ATTRACTIONS.length} lonely
              attractions
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Mountain className="w-3.5 h-3.5 text-[#f5c56b]" /> Beyond popular cities
            </span>
          </div>
        </div>
      </section>

      {/* Jump Chips & Attractions List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="font-hand text-xl text-[#c88a2b] block mb-2">Jump to…</span>
            <div className="flex flex-wrap gap-2">
              {MISC_ATTRACTIONS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-black/10 hover:border-[#c88a2b] text-[#141413] transition"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {MISC_ATTRACTIONS.map((item, idx) => (
              <article
                key={item.id}
                id={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-xs scroll-mt-24"
              >
                <div
                  className={`lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#faf6ee] ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <SmartImage
                    src={item.image}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`lg:col-span-7 space-y-3 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="font-serif text-3xl font-bold text-[#c88a2b]">
                    {item.number}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#141413]">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#4a4742] leading-relaxed">{item.description}</p>
                  <div className="pt-2">
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e6b52] hover:text-[#c88a2b] transition"
                    >
                      Add to my trip <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};
