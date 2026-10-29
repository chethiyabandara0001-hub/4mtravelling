import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  MessageCircle,
} from 'lucide-react';
import { HERO_SLIDES, REVIEWS, FLEET, SITE_CONFIG } from '../data/siteConfig';
import { TOURS } from '../data/tours';
import { DESTINATIONS } from '../data/destinations';
import { BLOGS } from '../data/blogs';
import { useCurrency } from '../context/CurrencyContext';
import { SmartImage } from '../components/shared/SmartImage';
import { TripPlanner } from '../components/shared/TripPlanner';
import { CtaBand } from '../components/shared/CtaBand';

const multiDayTours = TOURS.filter((t) => t.type === 'multi-day');
const dayTours = TOURS.filter((t) => t.type === 'day');

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const [slideIdx, setSlideIdx] = useState(0);
  const [quickStyle, setQuickStyle] = useState('/tour-packages');
  const [quickDest, setQuickDest] = useState('');
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickDest) {
      navigate(`/destinations/${quickDest}`);
    } else {
      navigate(quickStyle || '/tour-packages');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#141413] text-white overflow-hidden">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === slideIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <SmartImage
              src={s.image}
              alt={s.alt}
              className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/45 to-black/40" />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-[#f5c56b] text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              🏆 TripAdvisor Travelers’ Choice · Best of the Best 2023, 2024 & 2025
            </span>
            <span className="font-hand text-3xl text-[#f5c56b] block mb-1">
              Ayubowan! Welcome to Sri Lanka…
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Say Hi as Guests,{' '}
              <em className="italic font-normal text-[#f5c56b]">Bye as Friends</em>
            </h1>
            <p className="text-white/85 text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
              Private round tours, single-day trips from BIA Airport, and luxury chauffeur-guided
              transfers across Sri Lanka — personally planned and supervised by{' '}
              <strong className="text-white">Chaminda Kuruwita (KuRa)</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/tour-packages"
                className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition shadow-lg"
              >
                Explore 18 tour packages <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#planner"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition"
              >
                Build custom trip
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Kura
              </a>
            </div>
          </div>

          {/* Quick Trip Finder Bar */}
          <form
            onSubmit={handleQuickSearch}
            className="mt-12 bg-white/95 backdrop-blur-md text-[#141413] p-4 sm:p-5 rounded-3xl shadow-2xl max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
          >
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6e6a63] mb-1">
                Tour Style
              </label>
              <select
                value={quickStyle}
                onChange={(e) => setQuickStyle(e.target.value)}
                className="w-full rounded-xl border border-black/15 px-3 py-2.5 text-sm font-medium bg-white"
              >
                <option value="/tour-packages">All 18 Tour Packages</option>
                {multiDayTours.map((t) => (
                  <option key={t.slug} value={`/${t.slug}`}>
                    {t.title} ({t.durationLabel})
                  </option>
                ))}
                {dayTours.map((t) => (
                  <option key={t.slug} value={`/${t.slug}`}>
                    {t.title} (Day Tour)
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6e6a63] mb-1">
                Or Jump to a Destination
              </label>
              <select
                value={quickDest}
                onChange={(e) => setQuickDest(e.target.value)}
                className="w-full rounded-xl border border-black/15 px-3 py-2.5 text-sm font-medium bg-white"
              >
                <option value="">Any of 29 Destinations</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} ({d.provinceShort})
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#141413] hover:bg-[#2a2927] text-[#f5c56b] font-semibold py-3 px-5 rounded-xl text-sm inline-flex items-center justify-center gap-2 transition"
            >
              Show Itinerary <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#f5efe1] border-b border-black/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-medium text-[#3d3a36]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#1e6b52] shrink-0" />
            <span>SLTDA Registered ({SITE_CONFIG.sltdaReg})</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#c88a2b] shrink-0" />
            <span>5.0★ Rated across TripAdvisor & Google</span>
          </div>
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-5 h-5 text-[#c88a2b] shrink-0" />
            <span>Only $150 Advance · Balance on Arrival</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-[#1e6b52] shrink-0" />
            <span>100% Private Vehicles & English Guides</span>
          </div>
        </div>
      </section>

      {/* Ayubowan & Founder Kura Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-hand text-2xl text-[#c88a2b] block">
                Ayubowan — May you live long!
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413]">
                Discover the Pearl of the Indian Ocean{' '}
                <em className="italic font-normal text-[#c88a2b]">with a local friend</em>
              </h2>
              <p className="text-[#4a4742] leading-relaxed">
                Sri Lanka packs misty tea mountains, ancient UNESCO kingdoms, leopard-filled
                national parks, golden surf beaches, and warm island hospitality into one compact
                island. At <strong>4Me Lanka Tours</strong>, we don’t run crowded bus tours — every
                journey is private, flexible, and crafted around your pace.
              </p>
              <p className="text-[#4a4742] leading-relaxed">
                Founded by <strong>Chaminda Kuruwita (KuRa)</strong>, who has welcomed travellers in
                Sri Lanka’s tourism industry since 2013, our philosophy is simple:{' '}
                <em>“Say Hi as Guests, Bye as Friends.”</em> From spontaneous roadside king-coconut
                stops to hand-picked boutique stays, Kura and his team supervise every mile of your
                trip.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="bg-[#f5efe1] p-4 rounded-2xl border border-black/5">
                  <Sparkles className="w-5 h-5 text-[#c88a2b] mb-2" />
                  <h4 className="font-serif font-bold text-base text-[#141413]">Our Vision</h4>
                  <p className="text-xs text-[#5c5852] mt-1">
                    To be Sri Lanka’s most trusted friend-recommended private travel host.
                  </p>
                </div>
                <div className="bg-[#f5efe1] p-4 rounded-2xl border border-black/5">
                  <Compass className="w-5 h-5 text-[#1e6b52] mb-2" />
                  <h4 className="font-serif font-bold text-base text-[#141413]">Our Mission</h4>
                  <p className="text-xs text-[#5c5852] mt-1">
                    Deliver safe, stress-free, authentic island journeys tailored to every guest.
                  </p>
                </div>
                <div className="bg-[#f5efe1] p-4 rounded-2xl border border-black/5">
                  <CheckCircle2 className="w-5 h-5 text-[#c88a2b] mb-2" />
                  <h4 className="font-serif font-bold text-base text-[#141413]">Our Promise</h4>
                  <p className="text-xs text-[#5c5852] mt-1">
                    Honest pricing, spotless AC vehicles, and 24/7 personal care from Kura.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#141413]">
                <SmartImage
                  src="https://4melankatours.com/wp-content/uploads/2024/08/with-kura-in-kalpitiya-2.webp"
                  alt="Chaminda Kuruwita (KuRa) with guests in Sri Lanka"
                  className="w-full h-[420px] object-cover"
                />
                <div className="p-6 bg-gradient-to-t from-black via-black/90 to-transparent text-white">
                  <span className="font-hand text-xl text-[#f5c56b]">Meet your host</span>
                  <h3 className="font-serif text-2xl font-bold">Chaminda Kuruwita (KuRa)</h3>
                  <p className="text-xs text-white/75 mt-1">
                    Founder & Lead Tour Coordinator · SLTDA Registered · In tourism since 2013
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Services */}
      <section className="py-16 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">We offer…</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Everything arranged,{' '}
                <em className="italic font-normal text-[#c88a2b]">nothing to worry about</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852] max-w-md">
              Pick only what you need — car, hotels, activities — or let us take care of it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Priority service',
                title: 'Transportation',
                text: 'Travel in comfort with our modern vehicle fleet and friendly chauffeurs. From airport transfers to city tours and multi-day tours, we guarantee safety, punctuality, and ease as you explore Sri Lanka.',
                motto: '“Your journey, our promise”',
                img: 'https://4melankatours.com/wp-content/uploads/2024/07/360_F_519958037_3c3tR6XwMl52jiIeU5DlkGCglPXJWxZM.webp',
              },
              {
                tag: 'On your selection',
                title: 'Hotel bookings',
                text: 'Choose from handpicked accommodations — luxury resorts, cozy hideaways, or budget-friendly stays. Whether you prefer beachfront bliss or mountain serenity, we’ll match your style and budget.',
                motto: '“Comfort, choice, and charm”',
                img: 'https://4melankatours.com/wp-content/uploads/2024/07/hotel-room-2-scaled.webp',
              },
              {
                tag: 'As your request',
                title: 'Activities',
                text: 'Immerse yourself in Sri Lanka’s rich heritage and natural wonders. From cultural tours and village visits to wildlife safaris, boat rides, and water sports, our expert guides make every moment memorable.',
                motto: '“Explore more, experience more”',
                img: 'https://4melankatours.com/wp-content/uploads/2024/07/bigstock-Two-hikers-enjoying-sunrise-fr-47984279-1024x682-1.webp',
              },
            ].map((svc) => (
              <article
                key={svc.title}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <SmartImage
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#faf6ee] text-[#c88a2b] px-3 py-1 rounded-full border border-[#c88a2b]/25">
                      {svc.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#141413] mt-3">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#5c5852] mt-2 leading-relaxed">{svc.text}</p>
                  </div>
                  <div className="font-hand text-xl text-[#1e6b52] mt-4 pt-3 border-t border-black/5">
                    {svc.motto}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">
                Explore the beautiful places…
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Sri Lanka’s top <em className="italic font-normal text-[#c88a2b]">destinations</em>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-[#5c5852] hidden sm:block">
                29 destinations, hand-picked hotels & restaurants by Kura.
              </p>
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2a2927] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition"
              >
                View all 29 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESTINATIONS.slice(0, 12).map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative h-64 rounded-t-full rounded-b-2xl overflow-hidden shadow-md bg-[#141413]"
              >
                <SmartImage
                  src={dest.cardImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 inset-x-3 text-center text-white">
                  <small className="block text-[10px] uppercase tracking-wider text-[#f5c56b]">
                    {dest.provinceShort}
                  </small>
                  <b className="font-serif text-base block leading-tight">{dest.name}</b>
                  <span className="text-[11px] text-white/70">{dest.countLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Multi-Day Theme Tours */}
      <section className="py-16 md:py-24 bg-[#141413] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#f5c56b] block">
                KuRa’s popular tours…
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Choose your <em className="italic font-normal text-[#f5c56b]">adventure</em>
              </h2>
            </div>
            <p className="text-sm text-white/70 max-w-md">
              9 multi-day theme tours — every one private and 100% customizable around your dates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {multiDayTours.map((tour) => (
              <Link
                key={tour.slug}
                to={`/${tour.slug}`}
                className="group bg-[#1e1d1b] rounded-3xl overflow-hidden border border-white/10 hover:border-[#f5c56b]/50 transition flex flex-col shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <SmartImage
                    src={tour.posterImage || tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-[#f5c56b] text-xs font-bold px-3 py-1 rounded-full">
                    {tour.durationLabel}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f5c56b] transition">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-white/65 mt-2 line-clamp-2">
                      {tour.routeStops.length > 0
                        ? tour.routeStops.join(' · ')
                        : tour.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <small className="text-[11px] text-white/50 block">Vehicle package from</small>
                      <b className="font-serif text-2xl text-[#f5c56b]">
                        {formatPrice(tour.priceUsd)}
                      </b>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#f5c56b]">
                      View itinerary <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Day Tours from BIA */}
      <section className="py-16 md:py-20 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">Short on time?</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Day tours <em className="italic font-normal text-[#c88a2b]">from BIA Airport</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852] max-w-md">
              9 private single-day excursions — ideal for transit travellers or short stays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dayTours.map((tour) => (
              <Link
                key={tour.slug}
                to={`/${tour.slug}`}
                className="group bg-white rounded-2xl p-4 shadow-sm border border-black/5 hover:shadow-md transition flex items-center gap-4"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <SmartImage
                    src={tour.posterImage || tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold uppercase text-[#1e6b52]">
                    Day Tour · ~1 Day
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#141413] truncate group-hover:text-[#c88a2b] transition">
                    {tour.title.replace(/In Sri Lanka/i, '').trim()}
                  </h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-[#6e6a63]">
                      From <b className="text-[#141413] text-sm">{formatPrice(tour.priceUsd)}</b>
                    </span>
                    <span className="text-xs font-semibold text-[#c88a2b] inline-flex items-center gap-1">
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Band */}
      <section className="py-14 bg-[#141413] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="font-hand text-2xl text-[#f5c56b] block">Numbers say…</span>
            <h2 className="font-serif text-3xl font-bold">
              Trusted by travellers <em className="italic font-normal text-[#f5c56b]">worldwide</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {SITE_CONFIG.stats.map((st) => (
              <div
                key={st.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <b className="font-serif text-4xl md:text-5xl text-[#f5c56b] block">{st.count}</b>
                <span className="text-xs uppercase tracking-widest text-white/70 mt-1 block">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">Clients say…</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Guests who left <em className="italic font-normal text-[#c88a2b]">as friends</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852]">
              Rated 5.0★ across TripAdvisor, Google and Facebook (86+ verified reviews).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="lg:col-span-4 bg-[#141413] text-white rounded-3xl p-7 shadow-xl">
              <div className="flex items-center gap-1 text-[#f5c56b] text-lg">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="font-serif text-5xl font-bold mt-2">5.0</div>
              <p className="text-xs text-white/65 mt-1">Overall rating · based on 86 reviews</p>
              <div className="mt-5 space-y-2 text-xs border-y border-white/10 py-4">
                <div className="flex justify-between">
                  <span>TripAdvisor</span>
                  <b className="text-[#f5c56b]">5.0 ★</b>
                </div>
                <div className="flex justify-between">
                  <span>Google Reviews</span>
                  <b className="text-[#f5c56b]">5.0 ★</b>
                </div>
                <div className="flex justify-between">
                  <span>Facebook</span>
                  <b className="text-[#f5c56b]">5.0 ★</b>
                </div>
              </div>
              <p className="text-xs text-white/80 mt-4 leading-relaxed">
                <strong className="block text-[#f5c56b] mb-1">
                  Exceptional tour experience with Kura
                </strong>
                Kura consistently receives high praise for his hospitality, flexibility, and deep
                local knowledge of Sri Lanka.
              </p>
              <a
                href={SITE_CONFIG.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-semibold py-3 rounded-full transition"
              >
                Read all on TripAdvisor <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </aside>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {REVIEWS.slice(0, 6).map((rev, idx) => {
                const isExp = expandedReview === idx;
                return (
                  <article
                    key={rev.author}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 rounded-full bg-[#1e6b52] text-white font-bold text-sm flex items-center justify-center">
                            {rev.initial}
                          </span>
                          <div>
                            <b className="text-sm block text-[#141413]">{rev.author}</b>
                            <span className="text-[11px] text-[#6e6a63]">
                              {rev.date} · <span className="text-[#c88a2b]">★★★★★</span>
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] bg-[#faf6ee] px-2.5 py-1 rounded-full text-[#6e6a63] font-medium">
                          {rev.source}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#141413]">{rev.title}</h4>
                      <p
                        className={`text-xs text-[#4a4742] mt-2 leading-relaxed ${
                          isExp ? '' : 'line-clamp-4'
                        }`}
                      >
                        {rev.text}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setExpandedReview(isExp ? null : idx)}
                      className="mt-3 text-xs font-semibold text-[#c88a2b] hover:underline self-start"
                    >
                      {isExp ? 'Show less' : 'Read more'}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-16 bg-[#f5efe1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">
                KuRa’s vehicle fleet…
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
                Modern, clean &{' '}
                <em className="italic font-normal text-[#c88a2b]">air-conditioned</em>
              </h2>
            </div>
            <p className="text-sm text-[#5c5852]">
              Every vehicle includes an experienced English-speaking driver-guide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLEET.map((car) => (
              <div
                key={car.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 flex flex-col justify-between"
              >
                <div className="h-44 bg-[#faf6ee] overflow-hidden">
                  <SmartImage
                    src={car.image}
                    alt={car.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <b className="font-serif text-base text-[#141413] block">{car.name}</b>
                    <small className="text-xs text-[#6e6a63]">{car.type}</small>
                  </div>
                  <div className="text-right">
                    <b className="font-serif text-lg text-[#1e6b52]">
                      {formatPrice(car.pricePerDayUsd)}
                    </b>
                    <small className="text-[11px] text-[#6e6a63] block">/day</small>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/contact-us#transfer"
              className="bg-[#141413] text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#22211f] transition"
            >
              <span className="font-hand text-xl text-[#f5c56b]">Need a transfer?</span>
              <h3 className="font-serif text-xl font-bold mt-1">Book an airport pickup</h3>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#f5c56b]">
                Request now <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-hand text-2xl text-[#c88a2b] block">Simple & transparent</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
              How booking <em className="italic font-normal text-[#c88a2b]">works</em>
            </h2>
            <p className="text-sm text-[#5c5852] mt-2">
              No large upfront deposits, no surprises. You pay most of your tour after you arrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: '01',
                title: 'Tell us your wishes',
                text: 'Pick a suggested itinerary, modify one, or ask for something completely unique.',
              },
              {
                n: '02',
                title: 'Get your plan',
                text: 'Kura shapes the route, hotels and activities around your pace, interests and budget.',
              },
              {
                n: '03',
                title: `Confirm with ${formatPrice(150)}`,
                text: 'Once everything is agreed, a $150 non-refundable advance secures your car and driver-guide.',
              },
              {
                n: '04',
                title: 'Arrive & enjoy',
                text: 'Your driver-guide welcomes you at the airport and stays with you until departure.',
              },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs"
              >
                <span className="font-serif text-3xl font-bold text-[#c88a2b]">{s.n}</span>
                <h3 className="font-serif text-xl font-bold text-[#141413] mt-2">{s.title}</h3>
                <p className="text-xs text-[#5c5852] mt-2 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#141413] text-white rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <b className="font-serif text-xl text-[#f5c56b] block">
                {formatPrice(150)} advance
              </b>
              <small className="text-xs text-white/70">on booking confirmation</small>
            </div>
            <div className="sm:border-x border-white/10">
              <b className="font-serif text-xl text-[#f5c56b] block">60% of balance</b>
              <small className="text-xs text-white/70">due upon arrival in Sri Lanka</small>
            </div>
            <div>
              <b className="font-serif text-xl text-[#f5c56b] block">40% of balance</b>
              <small className="text-xs text-white/70">the day before departure</small>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Stories Preview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="font-hand text-2xl text-[#c88a2b] block">Island journal…</span>
              <h2 className="font-serif text-3xl font-bold text-[#141413]">
                Culture, festivals & <em className="italic font-normal text-[#c88a2b]">travel tips</em>
              </h2>
            </div>
            <Link
              to="/blogs"
              className="text-sm font-semibold text-[#c88a2b] hover:underline inline-flex items-center gap-1"
            >
              All 19 articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOGS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs hover:shadow-md transition flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <SmartImage
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#c88a2b]">{post.date}</span>
                    <h3 className="font-serif text-lg font-bold text-[#141413] mt-1 group-hover:text-[#c88a2b] transition">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#5c5852] mt-2 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#141413]">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 4-Step Trip Planner */}
      <TripPlanner />

      {/* Bottom CTA */}
      <CtaBand showEmail />
    </div>
  );
};
