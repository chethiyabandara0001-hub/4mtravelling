import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, Compass } from 'lucide-react';
import { VIDEOS } from '../data/videos';
import { SmartImage } from '../components/shared/SmartImage';
import { CtaBand } from '../components/shared/CtaBand';

export const ToDoPage: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src="https://4melankatours.com/wp-content/uploads/2024/07/bigstock-Two-hikers-enjoying-sunrise-fr-47984279-1024x682-1.webp"
          alt="Things to do in Sri Lanka"
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
            <li className="text-[#f5c56b]">To Do</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">Things to do</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            To do in Sri Lanka,{' '}
            <em className="italic font-normal text-[#f5c56b]">beyond the usual</em>
          </h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Sri Lanka offers an array of activities and shopping experiences that go beyond its
            well-known tourist spots. Watch our curated selection of 26 videos showcasing outdoor
            adventures like safaris, hiking, and water rafting, as well as unique cultural and
            shopping experiences.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Play className="w-3.5 h-3.5 text-[#f5c56b]" /> {VIDEOS.length} videos
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Compass className="w-3.5 h-3.5 text-[#f5c56b]" /> Activities & shopping
            </span>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">
                Watch & get inspired
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Activities & experiences{' '}
                <em className="italic font-normal text-[#c88a2b]">on video</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852]">
              Tap any video to play it. Tell Kura which ones you’d love to try — he will arrange
              them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {VIDEOS.map((vid) => (
              <button
                key={vid.youtubeId}
                type="button"
                onClick={() => setActiveVideoId(vid.youtubeId)}
                className="group relative rounded-2xl overflow-hidden bg-[#141413] shadow-md aspect-video text-left"
              >
                <img
                  src={`https://i.ytimg.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                  alt={vid.subtitle}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition flex items-center justify-center">
                  <span className="w-13 h-13 rounded-full bg-[#c88a2b] group-hover:bg-[#f5c56b] text-white group-hover:text-[#141413] flex items-center justify-center shadow-lg transition transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </span>
                </div>
                <span className="absolute top-2.5 left-2.5 bg-black/75 text-[#f5c56b] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  #{vid.number}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideoId(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Sri Lanka Activity Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <CtaBand />
    </div>
  );
};
