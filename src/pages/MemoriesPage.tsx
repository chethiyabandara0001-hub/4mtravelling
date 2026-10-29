import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users } from 'lucide-react';
import { MEMORIES } from '../data/memories';
import { SmartImage } from '../components/shared/SmartImage';
import { Lightbox, LightboxItem } from '../components/shared/Lightbox';
import { CtaBand } from '../components/shared/CtaBand';

const MEMORY_FILTERS = [
  { key: 'all', label: 'All', count: MEMORIES.length },
  { key: 'indians', label: 'Indians', count: 23 },
  { key: 'europeans', label: 'Europeans', count: 41 },
  { key: 'chinese-japanese', label: 'Chinese & Japanese', count: 13 },
  { key: 'mid-easterns', label: 'Mid Easterns', count: 11 },
  { key: 'americans', label: 'Americans', count: 9 },
  { key: 'australians', label: 'Australians', count: 9 },
  { key: 'south-asians', label: 'South Asians', count: 10 },
];

export const MemoriesPage: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const filtered =
    activeCat === 'all' ? MEMORIES : MEMORIES.filter((m) => m.category === activeCat);

  const lightboxItems: LightboxItem[] = filtered.map((m) => ({
    src: m.fullImage,
    caption: `Guests from ${m.tag} with 4Me Lanka Tours`,
    alt: m.alt,
  }));

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src="https://4melankatours.com/wp-content/uploads/2024/08/with-kura-in-kalpitiya-2.webp"
          alt="Guest memories with 4Me Lanka Tours"
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
            <li className="text-[#f5c56b]">Memories</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">
            Guests who became friends
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Cherished memories,{' '}
            <em className="italic font-normal text-[#f5c56b]">capturing the spirit</em> of our tours
          </h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Our gallery showcases unforgettable moments from our tours with guests worldwide,
            capturing the joy, friendship, excitement, and beauty of Sri Lanka’s journeys.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Users className="w-3.5 h-3.5 text-[#f5c56b]" /> {MEMORIES.length} moments
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Globe className="w-3.5 h-3.5 text-[#f5c56b]" /> Guests from 24 countries
            </span>
          </div>
        </div>
      </section>

      {/* Filter & Masonry Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {MEMORY_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => {
                  setActiveCat(f.key);
                  setLbIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition border ${
                  activeCat === f.key
                    ? 'bg-[#141413] text-[#f5c56b] border-[#141413]'
                    : 'bg-white text-[#3d3a36] border-black/10 hover:border-black/30'
                }`}
              >
                {f.label} <span className="opacity-60 ml-1">{f.count}</span>
              </button>
            ))}
          </div>

          <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
            {filtered.map((mem, idx) => (
              <button
                key={mem.fullImage + idx}
                type="button"
                onClick={() => setLbIndex(idx)}
                className="group relative block w-full rounded-2xl overflow-hidden bg-[#faf6ee] shadow-sm break-inside-avoid"
              >
                <SmartImage
                  src={mem.thumbImage || mem.fullImage}
                  alt={mem.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                  {mem.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your memory could be"
        accent="next"
        description="Join hundreds of guests from around the world who said hi as guests and bye as friends."
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
