import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowRight, Calendar, MessageCircle, User } from 'lucide-react';
import { BlogPost, BLOGS } from '../data/blogs';
import { SITE_CONFIG } from '../data/siteConfig';
import { SmartImage } from '../components/shared/SmartImage';

interface BlogDetailPageProps {
  post?: BlogPost;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const otherPosts = BLOGS.filter((b) => b.slug !== post.slug);

  return (
    <div>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-[#f5c56b] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src={post.heroImage}
          alt={post.title}
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
              <Link to="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">{post.title}</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">{post.tag}</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-1 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {post.date && (
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
                <Calendar className="w-3.5 h-3.5 text-[#f5c56b]" /> {post.date}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <User className="w-3.5 h-3.5 text-[#f5c56b]" /> {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body & Sidebar */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs">
            <div className="rounded-2xl overflow-hidden mb-8 max-h-96 bg-[#faf6ee]">
              <SmartImage
                src={post.heroImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="article-content space-y-4 text-[#3d3a36] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.articleHtml }}
            />

            {/* Author Box */}
            <div className="mt-10 pt-6 border-t border-black/10 flex items-center gap-4 bg-[#faf6ee] p-5 rounded-2xl">
              <SmartImage
                src="https://4melankatours.com/wp-content/uploads/2024/08/with-kura-in-kalpitiya-2.webp"
                alt="Chaminda Kuruwita (KuRa)"
                className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-[#c88a2b]"
              />
              <div>
                <b className="font-serif text-lg text-[#141413] block">
                  Chaminda Kuruwita (KuRa)
                </b>
                <p className="text-xs text-[#5c5852] mt-0.5">
                  Founder of 4Me Lanka Tours, SLTDA registered, welcoming guests in Sri Lanka
                  tourism since 2013.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-[#141413] text-white rounded-3xl p-7 shadow-xl">
              <span className="font-hand text-xl text-[#f5c56b] block">Inspired?</span>
              <h3 className="font-serif text-2xl font-bold mt-1">Experience it with Kura</h3>
              <p className="text-xs text-white/75 mt-2 leading-relaxed">
                Private round tours, single-day excursions and airport transfers — tailored to you.
              </p>
              <div className="mt-5 space-y-2.5">
                <Link
                  to="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white font-semibold py-3 rounded-full text-xs transition"
                >
                  Plan my trip <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-3 rounded-full text-xs transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Kura
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-[#141413] mb-3">More stories</h4>
              <div className="divide-y divide-black/5 max-h-96 overflow-y-auto pr-1">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    to={`/${op.slug}`}
                    className="block py-2.5 text-xs font-medium text-[#3d3a36] hover:text-[#c88a2b] transition"
                  >
                    {op.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Stories */}
      <section className="py-14 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="font-hand text-2xl text-[#c88a2b] block">Keep reading</span>
          <h2 className="font-serif text-3xl font-bold text-[#141413] mb-8">
            You may also <em className="italic font-normal text-[#c88a2b]">like</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.slice(0, 3).map((rp) => (
              <Link
                key={rp.slug}
                to={`/${rp.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs hover:shadow-md transition flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <SmartImage
                    src={rp.heroImage}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#c88a2b] font-semibold">{rp.date}</span>
                    <h3 className="font-serif font-bold text-lg text-[#141413] mt-1 group-hover:text-[#c88a2b]">
                      {rp.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#141413]">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
