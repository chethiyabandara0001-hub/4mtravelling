import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useCMS } from '../context/CMSContext';
import { SmartImage } from '../components/shared/SmartImage';

export const ContactPage: React.FC = () => {
  const { formatPrice } = useCurrency();
  const { siteConfig: SITE_CONFIG, fleet: FLEET } = useCMS();
  const [activeTab, setActiveTab] = useState<'tour' | 'transfer'>('tour');

  // Round Tour Form State
  const [tName, setTName] = useState('');
  const [tCountry, setTCountry] = useState('');
  const [tEmail, setTEmail] = useState('');
  const [tPhone, setTPhone] = useState('');
  const [tArrival, setTArrival] = useState('');
  const [tDeparture, setTDeparture] = useState('');
  const [tAdults, setTAdults] = useState('2');
  const [tChildren, setTChildren] = useState('0');
  const [tPackage, setTPackage] = useState('All-inclusive package');
  const [tVehicle, setTVehicle] = useState('Hybrid Car ($80/day)');
  const [tMessage, setTMessage] = useState('');

  // Transfer Form State
  const [trName, setTrName] = useState('');
  const [trPhone, setTrPhone] = useState('');
  const [trDate, setTrDate] = useState('');
  const [trTime, setTrTime] = useState('');
  const [trPickup, setTrPickup] = useState('BIA Airport (Katunayake)');
  const [trDropoff, setTrDropoff] = useState('');
  const [trPax, setTrPax] = useState('2');
  const [trVehicle, setTrVehicle] = useState('Hybrid Car');
  const [trNotes, setTrNotes] = useState('');

  const buildTourWhatsApp = () => {
    const msg = [
      `Ayubowan Kura! 🙏 Custom Tour Inquiry:`,
      `*Name:* ${tName || 'Guest'} (${tCountry || '-'})`,
      `*Contact:* ${tEmail || '-'} / ${tPhone || '-'}`,
      `*Dates:* ${tArrival || 'Flexible'} to ${tDeparture || 'Flexible'}`,
      `*Guests:* ${tAdults} Adults, ${tChildren} Children`,
      `*Package:* ${tPackage}`,
      `*Vehicle:* ${tVehicle}`,
      tMessage ? `*Notes:* ${tMessage}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const buildTransferWhatsApp = () => {
    const msg = [
      `Ayubowan Kura! 🙏 Airport / Point-to-Point Transfer Request:`,
      `*Name:* ${trName || 'Guest'} (${trPhone || '-'})`,
      `*Date & Time:* ${trDate || '-'} at ${trTime || '-'}`,
      `*Pick-up:* ${trPickup}`,
      `*Drop-off:* ${trDropoff || '-'}`,
      `*Passengers:* ${trPax} | *Vehicle:* ${trVehicle}`,
      trNotes ? `*Flight / Notes:* ${trNotes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#141413] text-white py-20 md:py-28 overflow-hidden">
        <SmartImage
          src="https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/contact-us.jpg"
          fallbackSrc="https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ella-banner-5.webp"
          alt="Contact 4Me Lanka Tours"
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
            <li className="text-[#f5c56b]">Contact Us</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">Say Ayubowan</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Let’s plan your <em className="italic font-normal text-[#f5c56b]">Sri Lankan journey</em>
          </h1>
          <p className="text-white/85 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Have a question, want a custom itinerary, or need an airport pickup? Reach out directly
            to Kura — we are open 24/7 and reply personally to every message.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <Clock className="w-3.5 h-3.5 text-[#f5c56b]" /> Open 24/7
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f5c56b]" /> {SITE_CONFIG.sltdaReg}
            </span>
          </div>
        </div>
      </section>

      {/* Contact Channels + Inquiry Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-hand text-2xl text-[#c88a2b] block">Direct channels</span>
            <h2 className="font-serif text-3xl font-bold text-[#141413] mb-4">Talk to Kura</h2>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/10 hover:border-[#25D366] shadow-xs transition"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </span>
              <div>
                <small className="text-xs text-[#6e6a63] block">Fastest response · 24/7</small>
                <b className="font-serif text-lg text-[#141413]">WhatsApp: {SITE_CONFIG.phoneDisplay}</b>
              </div>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/10 hover:border-[#c88a2b] shadow-xs transition"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#c88a2b]/15 text-[#c88a2b] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </span>
              <div>
                <small className="text-xs text-[#6e6a63] block">Direct voice call</small>
                <b className="font-serif text-lg text-[#141413]">{SITE_CONFIG.phoneDisplay}</b>
              </div>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/10 hover:border-[#c88a2b] shadow-xs transition"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#1e6b52]/15 text-[#1e6b52] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <small className="text-xs text-[#6e6a63] block">Email inquiries</small>
                <b className="font-serif text-lg text-[#141413]">{SITE_CONFIG.email}</b>
              </div>
            </a>

            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/10 hover:border-[#c88a2b] shadow-xs transition"
            >
              <span className="w-12 h-12 rounded-2xl bg-black/5 text-[#141413] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </span>
              <div>
                <small className="text-xs text-[#6e6a63] block">Registered office</small>
                <b className="font-serif text-base text-[#141413]">
                  Colombo, Sri Lanka · {SITE_CONFIG.sltdaReg}
                </b>
              </div>
            </a>
          </div>

          {/* Right Column: Tabbed Booking / Transfer Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-xl">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-black/10 pb-4">
              <button
                type="button"
                onClick={() => setActiveTab('tour')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'tour'
                    ? 'bg-[#141413] text-[#f5c56b]'
                    : 'bg-[#faf6ee] text-[#4a4742] hover:bg-black/10'
                }`}
              >
                Customized Round Tour / Day Tour
              </button>
              <button
                type="button"
                id="transfer"
                onClick={() => setActiveTab('transfer')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                  activeTab === 'transfer'
                    ? 'bg-[#141413] text-[#f5c56b]'
                    : 'bg-[#faf6ee] text-[#4a4742] hover:bg-black/10'
                }`}
              >
                Airport / Point-to-Point Transfer
              </button>
            </div>

            {activeTab === 'tour' ? (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  Request a Custom Tour Quote
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={tName}
                      onChange={(e) => setTName(e.target.value)}
                      placeholder="Full name"
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      value={tCountry}
                      onChange={(e) => setTCountry(e.target.value)}
                      placeholder="Your country"
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={tEmail}
                      onChange={(e) => setTEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={tPhone}
                      onChange={(e) => setTPhone(e.target.value)}
                      placeholder="+44 7700 900000"
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      value={tArrival}
                      onChange={(e) => setTArrival(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={tDeparture}
                      onChange={(e) => setTDeparture(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Adults
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={tAdults}
                      onChange={(e) => setTAdults(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={tChildren}
                      onChange={(e) => setTChildren(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Package Option
                    </label>
                    <select
                      value={tPackage}
                      onChange={(e) => setTPackage(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white"
                    >
                      <option value="All-inclusive package">All-inclusive (Vehicle + Hotels + Tickets)</option>
                      <option value="Vehicle & Driver Only">Vehicle & Driver-Guide Only</option>
                      <option value="Single Day Tour">Single Day Tour from BIA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Preferred Vehicle
                    </label>
                    <select
                      value={tVehicle}
                      onChange={(e) => setTVehicle(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white"
                    >
                      {FLEET.map((f) => (
                        <option key={f.name} value={`${f.name} ($${f.pricePerDayUsd}/day)`}>
                          {f.name} ({f.type}) · {formatPrice(f.pricePerDayUsd)}/day
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Places, Activities & Special Notes
                  </label>
                  <textarea
                    rows={4}
                    value={tMessage}
                    onChange={(e) => setTMessage(e.target.value)}
                    placeholder="Tell Kura which destinations, activities or hotel styles you prefer..."
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={buildTourWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition shadow-md"
                  >
                    <Send className="w-4 h-4" /> Send via WhatsApp
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}?subject=Sri Lanka Tour Inquiry&body=${encodeURIComponent(
                      tMessage
                    )}`}
                    className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2a2927] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition"
                  >
                    <Mail className="w-4 h-4" /> Send via Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  Book an Airport or Hotel Transfer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={trName}
                      onChange={(e) => setTrName(e.target.value)}
                      placeholder="Full name"
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={trPhone}
                      onChange={(e) => setTrPhone(e.target.value)}
                      placeholder="+94 / International number"
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Pick-up Date
                    </label>
                    <input
                      type="date"
                      value={trDate}
                      onChange={(e) => setTrDate(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Pick-up Time
                    </label>
                    <input
                      type="time"
                      value={trTime}
                      onChange={(e) => setTrTime(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Pick-up Location
                    </label>
                    <input
                      type="text"
                      value={trPickup}
                      onChange={(e) => setTrPickup(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Drop-off Destination / Hotel
                    </label>
                    <input
                      type="text"
                      value={trDropoff}
                      onChange={(e) => setTrDropoff(e.target.value)}
                      placeholder="e.g. Galle, Kandy, Ella, Colombo..."
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Passengers
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={trPax}
                      onChange={(e) => setTrPax(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Vehicle Type
                    </label>
                    <select
                      value={trVehicle}
                      onChange={(e) => setTrVehicle(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white"
                    >
                      {FLEET.map((f) => (
                        <option key={f.name} value={f.name}>
                          {f.name} ({f.type})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Flight Number & Luggage Notes
                  </label>
                  <textarea
                    rows={3}
                    value={trNotes}
                    onChange={(e) => setTrNotes(e.target.value)}
                    placeholder="e.g. Flight UL 504 arriving at 14:20, 3 large suitcases..."
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                  />
                </div>
                <a
                  href={buildTransferWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition shadow-md"
                >
                  <Send className="w-4 h-4" /> Request Transfer on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden border border-black/10 shadow-md h-80 bg-[#faf6ee]">
            <iframe
              title="4Me Lanka Tours Colombo Location"
              src="https://www.google.com/maps?q=7.1368067,79.8777909&z=14&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
