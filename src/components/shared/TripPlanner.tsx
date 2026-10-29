import React, { useState } from 'react';
import { Send, Mail, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

const DEST_OPTIONS = [
  'Colombo',
  'Negombo',
  'Sigiriya',
  'Kandy',
  'Nuwaraeliya',
  'Ella',
  'Yala / Tissa',
  'Mirissa',
  'Galle',
  'Bentota',
  'Trincomalee',
  'Arugambay',
  'Anuradhapura',
  'Polonnaruwa',
  'Jaffna',
  'Udawalawa',
  'Kitulgala',
  'Pinnawala',
  'Kalpitiya',
  'Sinharaja',
  'Let Kura suggest',
];

const ACTIVITY_OPTIONS = [
  'Wildlife Safari',
  'Scenic Train Ride',
  'Whale / Dolphin Watching',
  'Cultural & UNESCO Sites',
  'Tea Factory Visit',
  'Hiking & Waterfalls',
  'White Water Rafting',
  'Beach & Surfing',
  'Ayurvedic Spa',
  'Local Food & Cooking',
];

interface TripPlannerProps {
  defaultTourName?: string;
  defaultDestination?: string;
  headingKicker?: string;
  headingTitle?: string;
  headingAccent?: string;
  subtitle?: string;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({
  defaultTourName = '',
  defaultDestination = '',
  headingKicker = 'Customize or book',
  headingTitle = 'Plan your trip',
  headingAccent = 'with Kura',
  subtitle = 'Tell Kura your dates, group size and wishes — he will reply personally with a tailored itinerary and quote.',
}) => {
  const [step, setStep] = useState<number>(1);
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [selectedTour, setSelectedTour] = useState(defaultTourName || 'Custom Round Tour');
  const [selectedDests, setSelectedDests] = useState<string[]>(
    defaultDestination ? [defaultDestination] : ['Sigiriya', 'Kandy', 'Ella', 'Mirissa']
  );
  const [selectedActs, setSelectedActs] = useState<string[]>([
    'Wildlife Safari',
    'Scenic Train Ride',
    'Cultural & UNESCO Sites',
  ]);
  const [packageType, setPackageType] = useState('All-inclusive package (Vehicle + Hotels + Activities)');
  const [hotelTier, setHotelTier] = useState('4 Star / Boutique');
  const [vehicle, setVehicle] = useState('Hybrid Car (1–3 pax) · $80/day');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [notes, setNotes] = useState('');

  const toggleItem = (list: string[], setList: (v: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const buildSummaryText = () => {
    const lines = [
      `Ayubowan Kura! 🙏 I would like to plan a trip to Sri Lanka.`,
      ``,
      `*Tour / Base:* ${selectedTour}`,
      `*Arrival:* ${arrival || 'Flexible'} | *Departure:* ${departure || 'Flexible'}`,
      `*Travellers:* ${adults} Adults, ${children} Children`,
      `*Destinations:* ${selectedDests.join(', ') || 'Open to suggestions'}`,
      `*Activities:* ${selectedActs.join(', ') || 'Open to suggestions'}`,
      `*Package Type:* ${packageType}`,
      `*Hotel Preference:* ${hotelTier}`,
      `*Vehicle:* ${vehicle}`,
      `*Name:* ${name || 'Guest'} (${country || 'International'})`,
      `*Contact:* ${email || '-'} / ${phone || '-'}`,
      notes ? `*Special Notes:* ${notes}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    buildSummaryText()
  )}`;

  const mailtoHref = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
    `Sri Lanka Trip Inquiry - ${name || 'Guest'} (${selectedTour})`
  )}&body=${encodeURIComponent(buildSummaryText())}`;

  return (
    <section id="planner" className="py-16 md:py-24 bg-[#f5efe1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-hand text-2xl text-[#b8860b] block mb-1">{headingKicker}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#141413]">
            {headingTitle} <em className="italic font-normal text-[#c88a2b]">{headingAccent}</em>
          </h2>
          <p className="text-[#5c5852] mt-3">{subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden">
          {/* Step Header */}
          <div className="grid grid-cols-4 border-b border-black/10 bg-[#faf6ee]">
            {[
              { n: 1, label: 'When & who?' },
              { n: 2, label: 'Where & what?' },
              { n: 3, label: 'Hotels & car' },
              { n: 4, label: 'Send to Kura' },
            ].map((s) => (
              <button
                key={s.n}
                type="button"
                onClick={() => setStep(s.n)}
                className={`py-4 px-2 text-center text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 ${
                  step === s.n
                    ? 'bg-[#141413] text-[#f5c56b]'
                    : step > s.n
                    ? 'text-[#1e6b52] hover:bg-black/5'
                    : 'text-[#6e6a63] hover:bg-black/5'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    step === s.n
                      ? 'bg-[#f5c56b] text-[#141413]'
                      : step > s.n
                      ? 'bg-[#1e6b52] text-white'
                      : 'bg-black/10 text-[#141413]'
                  }`}
                >
                  {step > s.n ? <Check className="w-3.5 h-3.5" /> : s.n}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-10">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#141413]">
                    Step 1 — Your travel dates & group
                  </h3>
                  <p className="text-sm text-[#6e6a63] mt-1">
                    Approximate dates are fine if you haven’t booked flights yet.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c88a2b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c88a2b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Adults (12+ yrs)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="40"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c88a2b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="20"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c88a2b]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                    Preferred Tour Package or Style
                  </label>
                  <select
                    value={selectedTour}
                    onChange={(e) => setSelectedTour(e.target.value)}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c88a2b]"
                  >
                    {defaultTourName && <option value={defaultTourName}>{defaultTourName}</option>}
                    <option value="Custom Round Tour">Custom Tailor-Made Round Tour</option>
                    <option value="Kura’s Heritage (7 Days · from $560)">Kura’s Heritage (7 Days · from $560)</option>
                    <option value="Kura’s Beachside Honeymoon (10 Days · from $800)">
                      Kura’s Beachside Honeymoon (10 Days · from $800)
                    </option>
                    <option value="Kura’s Hillside Honeymoon (10 Days · from $800)">
                      Kura’s Hillside Honeymoon (10 Days · from $800)
                    </option>
                    <option value="Kura’s Nature (10 Days · from $800)">Kura’s Nature (10 Days · from $800)</option>
                    <option value="Kura’s Leisure (10 Days · from $800)">Kura’s Leisure (10 Days · from $800)</option>
                    <option value="Kura’s Culture (12 Days · from $960)">Kura’s Culture (12 Days · from $960)</option>
                    <option value="Kura’s Adventure (12 Days · from $960)">
                      Kura’s Adventure (12 Days · from $960)
                    </option>
                    <option value="Kura’s Ramayana Trail (16 Days · from $1280)">
                      Kura’s Ramayana Trail (16 Days · from $1280)
                    </option>
                    <option value="Kura’s All Ceylon (28 Days · from $2240)">
                      Kura’s All Ceylon (28 Days · from $2240)
                    </option>
                    <option value="Single Day Tour from BIA / Colombo">Single Day Tour from BIA / Colombo</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#141413]">
                    Step 2 — Places & experiences you’d love
                  </h3>
                  <p className="text-sm text-[#6e6a63] mt-1">
                    Tap any destinations and activities you want Kura to include.
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-2">
                    Destinations
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DEST_OPTIONS.map((dest) => {
                      const active = selectedDests.includes(dest);
                      return (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => toggleItem(selectedDests, setSelectedDests, dest)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
                            active
                              ? 'bg-[#141413] text-[#f5c56b] border-[#141413]'
                              : 'bg-[#faf6ee] text-[#3d3a36] border-black/10 hover:border-black/30'
                          }`}
                        >
                          {active ? '✓ ' : '+ '}
                          {dest}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-2">
                    Activities & Interests
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ACTIVITY_OPTIONS.map((act) => {
                      const active = selectedActs.includes(act);
                      return (
                        <button
                          key={act}
                          type="button"
                          onClick={() => toggleItem(selectedActs, setSelectedActs, act)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
                            active
                              ? 'bg-[#1e6b52] text-white border-[#1e6b52]'
                              : 'bg-[#faf6ee] text-[#3d3a36] border-black/10 hover:border-black/30'
                          }`}
                        >
                          {active ? '✓ ' : '+ '}
                          {act}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#141413]">
                    Step 3 — Package type, hotels & vehicle
                  </h3>
                  <p className="text-sm text-[#6e6a63] mt-1">
                    Choose All-Inclusive or Vehicle-Only with your preferred comfort level.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Package Option
                    </label>
                    <select
                      value={packageType}
                      onChange={(e) => setPackageType(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white"
                    >
                      <option value="All-inclusive package (Vehicle + Hotels + Activities)">
                        All-inclusive (Vehicle + Hotels + Activities)
                      </option>
                      <option value="Vehicle & Driver-Guide Only (Guests book own hotels)">
                        Vehicle Only (Private Car + Driver-Guide)
                      </option>
                      <option value="Custom Mix (Vehicle + Selected Hotels/Activities)">
                        Custom Mix
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Hotel Category
                    </label>
                    <select
                      value={hotelTier}
                      onChange={(e) => setHotelTier(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white"
                    >
                      <option value="3 Star / Cozy Guesthouses">3★ Standard / Cozy Stays</option>
                      <option value="4 Star / Boutique">4★ Comfort / Boutique</option>
                      <option value="5 Star / Luxury Resorts">5★ Luxury Resorts</option>
                      <option value="I will book my own hotels">I will book my own hotels</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Preferred Vehicle
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm bg-white"
                    >
                      <option value="Hybrid Car (1–3 pax) · $80/day">Hybrid Car (Prius / Axio / Fit Shuttle) · $80/day</option>
                      <option value="Compact SUV (Honda Vezel) · $90/day">Compact SUV (Honda Vezel) · $90/day</option>
                      <option value="6 Seater Van (Toyota KDH Flat Roof) · $120/day">
                        6 Seater Van (Toyota KDH Flat Roof) · $120/day
                      </option>
                      <option value="9 Seater Van (Toyota KDH Highroof) · $150/day">
                        9 Seater Van (Toyota KDH Highroof) · $150/day
                      </option>
                      <option value="24 Seater Mini Bus (Toyota Coaster) · $200/day">
                        24 Seater Mini Bus (Toyota Coaster) · $200/day
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#141413]">
                    Step 4 — Your contact details
                  </h3>
                  <p className="text-sm text-[#6e6a63] mt-1">
                    Send your plan directly to Kura on WhatsApp (fastest response) or via Email.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United Kingdom, India, Australia"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7700 900000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c5852] mb-1.5">
                    Any Special Wishes or Questions?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Flight times, dietary needs, honeymoon surprises, child seats..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm"
                  />
                </div>

                <div className="bg-[#faf6ee] rounded-2xl p-4 border border-black/10 text-xs text-[#4a4742] space-y-1">
                  <div className="font-bold text-[#141413] text-sm mb-1">Trip Summary for Kura:</div>
                  <div>
                    <b>Tour:</b> {selectedTour} · <b>Group:</b> {adults} Adults, {children} Children
                  </div>
                  <div>
                    <b>Destinations:</b> {selectedDests.join(', ')}
                  </div>
                  <div>
                    <b>Package:</b> {packageType} · <b>Vehicle:</b> {vehicle}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Send to Kura on WhatsApp
                  </a>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2a2927] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition"
                  >
                    <Mail className="w-4 h-4" />
                    Send via Email
                  </a>
                </div>
              </div>
            )}

            {/* Step Footer Controls */}
            <div className="mt-8 pt-5 border-t border-black/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#141413] hover:text-[#c88a2b] transition"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous step
                </button>
              ) : (
                <span className="text-xs text-[#6e6a63]">
                  No obligation · Free personalized quote
                </span>
              )}

              {step < 4 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition"
                >
                  Next step <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
