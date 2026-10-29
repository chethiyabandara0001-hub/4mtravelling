import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Clock,
  ChevronDown,
  Phone,
  Menu,
  X,
  ArrowRight,
  ArrowUp,
  Calculator,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG, CURRENCIES, USEFUL_LINKS } from '../../data/siteConfig';
import { TOURS } from '../../data/tours';
import { DESTINATIONS } from '../../data/destinations';
import { useCurrency } from '../../context/CurrencyContext';
import { SmartImage } from '../shared/SmartImage';

const multiDayTours = TOURS.filter((t) => t.type === 'multi-day');
const dayTours = TOURS.filter((t) => t.type === 'day');

const PROVINCE_GROUPS = [
  { label: 'Western', slug: 'western-province' },
  { label: 'Southern', slug: 'southern-province' },
  { label: 'Central', slug: 'central-province' },
  { label: 'Uva', slug: 'uva-province' },
  { label: 'Sabaragamuwa', slug: 'sabaragamuwa-province' },
  { label: 'North Western', slug: 'north-western-province' },
  { label: 'North Central', slug: 'north-central-province' },
  { label: 'Northern', slug: 'northern-province' },
  { label: 'Eastern', slug: 'eastern-province' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { currency, setCurrency, formatPrice, isCalcOpen, setIsCalcOpen } = useCurrency();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [calcAmount, setCalcAmount] = useState<string>('100');
  const [calcFrom, setCalcFrom] = useState<string>('USD');
  const [calcTo, setCalcTo] = useState<string>('LKR');

  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const convertedCalcResult = () => {
    const num = parseFloat(calcAmount) || 0;
    const fromRate = CURRENCIES[calcFrom]?.rateFromUsd || 1;
    const toRate = CURRENCIES[calcTo]?.rateFromUsd || 1;
    const inUsd = num / fromRate;
    const res = inUsd * toRate;
    return res.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#1f1e1c]">
      {/* Topbar */}
      <div className="bg-[#0e0e0e] text-white/80 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#f5c56b] transition"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c88a2b]" /> Colombo, Sri Lanka
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#f5c56b] transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#c88a2b]" /> {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-[#c88a2b]/20 text-[#f5c56b] px-2.5 py-0.5 rounded-full font-medium">
              🏆 TripAdvisor Best of the Best 2023 · 2024 · 2025
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/70">
              <Clock className="w-3.5 h-3.5 text-[#25D366]" /> Open 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#141413]/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <SmartImage
              src="/assets/img/brand/logo.webp"
              alt="4Me Lanka Tours logo"
              className="w-11 h-11 rounded-full object-cover border border-[#c88a2b]/50"
            />
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight block leading-none text-white group-hover:text-[#f5c56b] transition">
                {SITE_CONFIG.brandName}
              </span>
              <small className="font-hand text-sm text-[#f5c56b] block mt-0.5">
                {SITE_CONFIG.tagline}
              </small>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                isActive('/') ? 'bg-white/15 text-[#f5c56b]' : 'text-white/85 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Tours Mega Menu */}
            <div className="relative group">
              <Link
                to="/tour-packages"
                className={`px-3.5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1 transition ${
                  isActive('/tour-packages')
                    ? 'bg-white/15 text-[#f5c56b]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                Tours <ChevronDown className="w-3.5 h-3.5 opacity-75" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full pt-2 w-[620px] z-50">
                <div className="bg-[#1b1a18] border border-white/15 rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-6 text-left">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#f5c56b] mb-3">
                      Multi-Day Theme Tours
                    </h5>
                    <div className="space-y-1.5">
                      {multiDayTours.map((t) => (
                        <Link
                          key={t.slug}
                          to={`/${t.slug}`}
                          className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg hover:bg-white/10 text-white/90 transition"
                        >
                          <span className="font-medium truncate">
                            {t.title.replace(/Tour In Srilanka/i, '').replace(/Kura’s /i, '').trim()}
                          </span>
                          <small className="text-[#f5c56b] ml-2 shrink-0">
                            from {formatPrice(t.priceUsd)}
                          </small>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#f5c56b] mb-3">
                      Single Day Tours from BIA
                    </h5>
                    <div className="space-y-1.5">
                      {dayTours.map((t) => (
                        <Link
                          key={t.slug}
                          to={`/${t.slug}`}
                          className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg hover:bg-white/10 text-white/90 transition"
                        >
                          <span className="font-medium truncate">
                            {t.title.replace(/In Sri Lanka/i, '').trim()}
                          </span>
                          <small className="text-white/60 ml-2 shrink-0">
                            {formatPrice(t.priceUsd)}
                          </small>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/75">
                    <span>Want something different? We tailor every itinerary.</span>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1 text-[#f5c56b] font-semibold hover:underline"
                    >
                      Customize <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Destinations Mega Menu */}
            <div className="relative group">
              <Link
                to="/destinations"
                className={`px-3.5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1 transition ${
                  isActive('/destinations')
                    ? 'bg-white/15 text-[#f5c56b]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                Destinations <ChevronDown className="w-3.5 h-3.5 opacity-75" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute -left-28 top-full pt-2 w-[780px] z-50">
                <div className="bg-[#1b1a18] border border-white/15 rounded-2xl p-6 shadow-2xl">
                  <div className="grid grid-cols-5 gap-4 text-left">
                    {PROVINCE_GROUPS.map((prov) => {
                      const provDests = DESTINATIONS.filter((d) => d.categorySlug === prov.slug);
                      return (
                        <div key={prov.slug}>
                          <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#f5c56b] mb-2">
                            {prov.label}
                          </h5>
                          <div className="space-y-1">
                            {provDests.map((d) => (
                              <Link
                                key={d.slug}
                                to={`/destinations/${d.slug}`}
                                className="block text-xs py-1 px-2 rounded hover:bg-white/10 text-white/85 transition"
                              >
                                {d.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    <div>
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#f5c56b] mb-2">
                        Hidden Gems
                      </h5>
                      <Link
                        to="/miscellaneous-attractions"
                        className="block text-xs py-1 px-2 rounded hover:bg-white/10 text-[#f5c56b] font-semibold transition"
                      >
                        13 Misc. Attractions →
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/75">
                    <span>29 hand-picked destinations across all 9 provinces of Sri Lanka</span>
                    <Link
                      to="/destinations"
                      className="inline-flex items-center gap-1 text-[#f5c56b] font-semibold hover:underline"
                    >
                      All 29 destinations <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/to-do"
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                isActive('/to-do') ? 'bg-white/15 text-[#f5c56b]' : 'text-white/85 hover:text-white'
              }`}
            >
              To Do
            </Link>
            <Link
              to="/memories"
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                isActive('/memories')
                  ? 'bg-white/15 text-[#f5c56b]'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Memories
            </Link>
            <Link
              to="/blogs"
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                isActive('/blogs') ? 'bg-white/15 text-[#f5c56b]' : 'text-white/85 hover:text-white'
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/contact-us"
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                isActive('/contact-us')
                  ? 'bg-white/15 text-[#f5c56b]'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center gap-2">
            {/* Currency Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
              <select
                aria-label="Currency selector"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-xs font-semibold text-white pl-2.5 pr-1 py-1.5 focus:outline-none cursor-pointer"
              >
                {Object.keys(CURRENCIES).map((code) => (
                  <option key={code} value={code} className="bg-[#1b1a18] text-white">
                    {code}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setIsCalcOpen(true)}
                title="Currency converter calculator"
                className="p-1.5 rounded-full hover:bg-white/15 text-[#f5c56b] transition"
                aria-label="Open currency converter"
              >
                <Calculator className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={SITE_CONFIG.phoneTel}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-[#f5c56b] px-2.5 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#c88a2b]" />
              {SITE_CONFIG.phoneDisplay}
            </a>

            <Link
              to="/contact-us"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition shadow"
            >
              Plan my trip <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="xl:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-[#141413] text-white h-full overflow-y-auto p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Link to="/" className="flex items-center gap-2.5" onClick={() => setDrawerOpen(false)}>
                  <SmartImage
                    src="/assets/img/brand/logo.webp"
                    alt=""
                    className="w-9 h-9 rounded-full"
                  />
                  <span className="font-serif font-bold text-lg">{SITE_CONFIG.brandName}</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full bg-white/10 text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                <Link
                  to="/"
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 font-medium"
                >
                  Home
                </Link>
                <details className="group rounded-xl bg-white/5 px-3 py-2">
                  <summary className="cursor-pointer font-medium py-1 flex items-center justify-between">
                    <span>Tour Packages (18)</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="mt-2 pl-2 space-y-1.5 border-l border-white/15 text-xs">
                    <Link to="/tour-packages" className="block py-1 text-[#f5c56b] font-bold">
                      All Tour Packages →
                    </Link>
                    {TOURS.map((t) => (
                      <Link
                        key={t.slug}
                        to={`/${t.slug}`}
                        className="block py-1 text-white/80 hover:text-white"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                </details>

                <details className="group rounded-xl bg-white/5 px-3 py-2">
                  <summary className="cursor-pointer font-medium py-1 flex items-center justify-between">
                    <span>Destinations (29)</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="mt-2 pl-2 space-y-1.5 border-l border-white/15 text-xs max-h-60 overflow-y-auto">
                    <Link to="/destinations" className="block py-1 text-[#f5c56b] font-bold">
                      All 29 Destinations →
                    </Link>
                    {DESTINATIONS.map((d) => (
                      <Link
                        key={d.slug}
                        to={`/destinations/${d.slug}`}
                        className="block py-1 text-white/80 hover:text-white"
                      >
                        {d.name} ({d.provinceShort})
                      </Link>
                    ))}
                    <Link
                      to="/miscellaneous-attractions"
                      className="block py-1 text-[#f5c56b] font-semibold"
                    >
                      Miscellaneous Attractions
                    </Link>
                  </div>
                </details>

                <Link
                  to="/to-do"
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 font-medium"
                >
                  To Do (26 Videos)
                </Link>
                <Link
                  to="/memories"
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 font-medium"
                >
                  Guest Memories (116)
                </Link>
                <Link
                  to="/blogs"
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 font-medium"
                >
                  Sri Lanka Blogs (19)
                </Link>
                <Link
                  to="/contact-us"
                  className="block py-2.5 px-3 rounded-xl hover:bg-white/10 font-medium"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2.5">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-full text-sm"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3 rounded-full text-sm"
              >
                <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Currency Converter Modal */}
      {isCalcOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsCalcOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-hand text-xl text-[#c88a2b] block">Quick tool</span>
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  Currency Converter
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCalcOpen(false)}
                className="p-2 rounded-full bg-black/5 hover:bg-black/10"
                aria-label="Close calculator"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#6e6a63] mb-5">
              Convert between USD, Sri Lankan Rupees (LKR) and major travel currencies. Selecting a
              display currency below also updates all tour prices across the site.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-base font-semibold"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    From
                  </label>
                  <select
                    value={calcFrom}
                    onChange={(e) => setCalcFrom(e.target.value)}
                    className="w-full rounded-xl border border-black/15 px-3 py-2.5 text-sm bg-white"
                  >
                    {Object.values(CURRENCIES).map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    To
                  </label>
                  <select
                    value={calcTo}
                    onChange={(e) => setCalcTo(e.target.value)}
                    className="w-full rounded-xl border border-black/15 px-3 py-2.5 text-sm bg-white"
                  >
                    {Object.values(CURRENCIES).map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="bg-[#faf6ee] rounded-2xl p-4 text-center border border-black/10">
                <div className="text-xs text-[#6e6a63]">Estimated Conversion</div>
                <div className="font-serif text-3xl font-bold text-[#141413] mt-1">
                  {CURRENCIES[calcTo]?.symbol}
                  {convertedCalcResult()} <span className="text-sm font-sans">{calcTo}</span>
                </div>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-[#6e6a63]">Site-wide price currency:</span>
                <div className="flex flex-wrap gap-1">
                  {['USD', 'EUR', 'GBP', 'INR', 'AUD', 'LKR'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCurrency(c)}
                      className={`px-2.5 py-1 rounded-full font-semibold ${
                        currency === c
                          ? 'bg-[#141413] text-[#f5c56b]'
                          : 'bg-black/5 text-[#141413] hover:bg-black/10'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id="main" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] text-white/80 pt-16 pb-24 md:pb-12 border-t border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div>
              <Link to="/" className="flex items-center gap-3">
                <SmartImage
                  src="/assets/img/brand/logo.webp"
                  alt=""
                  className="w-11 h-11 rounded-full"
                />
                <span className="font-serif text-xl font-bold text-white">
                  {SITE_CONFIG.brandName}
                </span>
              </Link>
              <p className="text-sm text-white/65 mt-4 leading-relaxed">
                A family-run, SLTDA registered travel company offering private round tours, day
                tours and airport transfers across Sri Lanka since 2019.
              </p>
              <div className="font-hand text-2xl text-[#f5c56b] mt-4">
                Say Hi as Guests,
                <br />
                Bye as Friends…
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#f5c56b] font-semibold">
                <span>🏆 TripAdvisor Travelers’ Choice 2023 · 2024 · 2025</span>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-[#f5c56b] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tour-packages" className="hover:text-[#f5c56b] transition">
                    Tour packages (18)
                  </Link>
                </li>
                <li>
                  <Link to="/destinations" className="hover:text-[#f5c56b] transition">
                    Destinations (29)
                  </Link>
                </li>
                <li>
                  <Link to="/miscellaneous-attractions" className="hover:text-[#f5c56b] transition">
                    Miscellaneous attractions
                  </Link>
                </li>
                <li>
                  <Link to="/to-do" className="hover:text-[#f5c56b] transition">
                    To do videos
                  </Link>
                </li>
                <li>
                  <Link to="/memories" className="hover:text-[#f5c56b] transition">
                    Guest memories
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-[#f5c56b] transition">
                    Sri Lanka blogs
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-[#f5c56b] transition">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-refund-privacy-policy"
                    className="hover:text-[#f5c56b] transition"
                  >
                    Terms & privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-4">Useful Links</h4>
              <ul className="space-y-2 text-sm">
                {USEFUL_LINKS.map((u) => (
                  <li key={u.label}>
                    <a
                      href={u.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#f5c56b] transition"
                    >
                      {u.label} <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-4">Open 24/7</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="flex items-center gap-2.5 hover:text-[#f5c56b] transition"
                  >
                    <Phone className="w-4 h-4 text-[#c88a2b] shrink-0" />
                    <span>Voice: {SITE_CONFIG.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-[#f5c56b] transition"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-2.5 hover:text-[#f5c56b] transition"
                  >
                    <Mail className="w-4 h-4 text-[#c88a2b] shrink-0" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 hover:text-[#f5c56b] transition"
                  >
                    <MapPin className="w-4 h-4 text-[#c88a2b] shrink-0 mt-1" />
                    <span>
                      Colombo, Sri Lanka
                      <br />
                      <small className="text-white/50">{SITE_CONFIG.sltdaReg}</small>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <span>
              © 2022–{new Date().getFullYear()} 4Me Lanka Tours. Powered by KuRa with SithK –
              LineWork Graphics.
            </span>
            <span>Ayubowan! 🙏</span>
          </div>
          <div className="font-serif text-[13vw] leading-none font-bold text-white/[0.03] select-none pointer-events-none text-center mt-4">
            Ayubowan
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp FAB (Desktop) */}
      <a
        href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
          'Ayubowan Kura! I would like to plan a trip to Sri Lanka.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-5 py-3 rounded-full shadow-xl transition"
      >
        <MessageCircle className="w-5 h-5" /> Chat with Kura
      </a>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 md:bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#141413] text-[#f5c56b] border border-white/15 shadow-lg flex items-center justify-center hover:bg-[#2a2927] transition"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Bottom Quick Bar */}
      <nav
        aria-label="Quick contact"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#141413]/95 backdrop-blur-md border-t border-white/15 grid grid-cols-3 text-xs font-semibold text-white"
      >
        <a
          href={SITE_CONFIG.phoneTel}
          className="py-3.5 flex items-center justify-center gap-1.5 border-r border-white/10"
        >
          <Phone className="w-4 h-4 text-[#f5c56b]" /> Call
        </a>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3.5 flex items-center justify-center gap-1.5 bg-[#25D366] text-white"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <Link
          to="/contact-us"
          className="py-3.5 flex items-center justify-center gap-1.5 bg-[#c88a2b] text-white"
        >
          Plan trip <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </nav>
    </div>
  );
};
