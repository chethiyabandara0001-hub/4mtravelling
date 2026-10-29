import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search } from 'lucide-react';
import { BLOGS } from '../data/blogs';
import { SmartImage } from '../components/shared/SmartImage';
import { CtaBand } from '../components/shared/CtaBand';

export const BlogsPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = BLOGS.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src={BLOGS[0]?.heroImage}
          alt="Sri Lanka travel blogs"
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
            <li className="text-[#f5c56b]">Blogs</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">Blog</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Stories & guides from <em className="italic font-normal text-[#f5c56b]">the island</em>
          </h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Festivals, food, culture and practical travel tips — written by Kura and friends to help
            you understand Sri Lanka before you arrive.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#f5c56b]" /> {BLOGS.length} articles
            </span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-md mb-10 relative">
            <Search className="w-4 h-4 text-[#6e6a63] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search articles (e.g. train ride, tipping, monsoon, king coconut)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-black/15 bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#c88a2b]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post, idx) => (
              <Link
                key={post.slug}
                to={`/${post.slug}`}
                className={`group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition flex flex-col ${
                  idx === 0 && !query ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="h-60 overflow-hidden">
                  <SmartImage
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#6e6a63] mb-2">
                      <span className="bg-[#faf6ee] text-[#c88a2b] font-bold px-2.5 py-0.5 rounded-full">
                        {post.tag}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#141413] group-hover:text-[#c88a2b] transition">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#4a4742] mt-2 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#141413] group-hover:text-[#c88a2b]">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};
