export interface ReviewItem {
  initial: string;
  author: string;
  date: string;
  source: string;
  title: string;
  text: string;
}

export interface FleetVehicle {
  name: string;
  type: string;
  pricePerDayUsd: number;
  image: string;
  alt: string;
}

export interface ResortRegion {
  title: string;
  description: string;
  cities: { name: string; slug: string }[];
}

export const SITE_CONFIG = {
  brandName: '4Me Lanka Tours',
  tagline: 'Say Hi as Guests, Bye as Friends',
  sltdaReg: 'SLTDA/TD/CAVA/1758',
  founder: 'Chaminda Kuruwita (KuRa)',
  phoneDisplay: '+94 71 285 7705',
  phoneTel: 'tel:0094712857705',
  whatsappUrl: 'https://wa.me/94712857705',
  whatsappNumber: '94712857705',
  viberUrl: 'viber://chat?number=%2B94712857705',
  email: 'mailto@4melankatours.com',
  googleMapsUrl:
    'https://www.google.com/maps/place/4Me+Lanka+Tours/@7.1368167,79.8752159,17z/data=!4m6!3m5!1s0x3ae2f161cf1a70e7:0xf9e714d6ef994ef7!8m2!3d7.1368067!4d79.8777909!16s%2Fg%2F11s3bfz6f4',
  tripAdvisorUrl:
    'https://www.tripadvisor.com/Attraction_Review-g293962-d24182264-Reviews-4Me_Lanka_Tours-Colombo_Western_Province.html',
  facebookUrl: 'https://web.facebook.com/4melankatours/',
  stats: [
    { count: 258, label: 'Tours' },
    { count: 772, label: 'Guests' },
    { count: 24, label: 'Countries' },
    { count: 7, label: 'Years' },
  ],
};

export const CURRENCIES: Record<string, { code: string; symbol: string; rateFromUsd: number; label: string }> = {
  USD: { code: 'USD', symbol: '$', rateFromUsd: 1, label: 'USD — US Dollar' },
  LKR: { code: 'LKR', symbol: 'Rs ', rateFromUsd: 300, label: 'LKR — Sri Lankan Rupee' },
  INR: { code: 'INR', symbol: '₹', rateFromUsd: 84, label: 'INR — Indian Rupee' },
  EUR: { code: 'EUR', symbol: '€', rateFromUsd: 0.92, label: 'EUR — Euro' },
  GBP: { code: 'GBP', symbol: '£', rateFromUsd: 0.79, label: 'GBP — British Pound' },
  AUD: { code: 'AUD', symbol: 'A$', rateFromUsd: 1.52, label: 'AUD — Australian Dollar' },
  AED: { code: 'AED', symbol: 'AED ', rateFromUsd: 3.67, label: 'AED — UAE Dirham' },
  CNY: { code: 'CNY', symbol: '¥', rateFromUsd: 7.24, label: 'CNY — Chinese Yuan' },
  JPY: { code: 'JPY', symbol: '¥', rateFromUsd: 154, label: 'JPY — Japanese Yen' },
};

export const HERO_SLIDES = [
  {
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/home-1.jpg',
    alt: 'Nine Arch Bridge in Ella highland tea country',
    caption: 'Ella · Central Highlands',
  },
  {
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/home-2.jpg',
    alt: 'Sigiriya Lion Rock Fortress at sunrise',
    caption: 'Sigiriya · UNESCO Heritage',
  },
  {
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/home-3.jpg',
    alt: 'Wild elephants in Sri Lanka national park',
    caption: 'Udawalawa & Yala · Wildlife Safaris',
  },
  {
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/home-4.jpg',
    alt: 'Historic Galle Dutch Fort lighthouse by the Indian Ocean',
    caption: 'Galle Fort · Southern Coast',
  },
  {
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/home-5.jpg',
    alt: 'Tropical palm beach and ocean views in Mirissa',
    caption: 'Mirissa & Bentota · Golden Beaches',
  },
  {
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/home-6.jpg',
    alt: 'Sacred Buddhist stupas and ancient heritage of Sri Lanka',
    caption: 'Anuradhapura & Kandy · Sacred Heritage',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    initial: 'P',
    author: 'Patric H.',
    date: 'August 7',
    source: 'TripAdvisor',
    title: 'Amazing family holiday',
    text: 'We had an amazing 15 day trip around Sri Lanka thanks to Kura, our tour guide and driver. From the moment he picked us up at the airport, Kura was friendly, professional, flexible, and always happy to help. He made us feel safe and comfortable throughout the journey and shared fascinating insights into Sri Lanka’s history, culture, and local attractions, making every stop even more enjoyable. Travelling with a private driver gave us the freedom to explore at our own pace. We highly recommend Kura to anyone visiting Sri Lanka and looking for a reliable, knowledgeable, and genuinely caring private driver.',
  },
  {
    initial: 'G',
    author: 'Glenn H.',
    date: 'July 11',
    source: 'TripAdvisor',
    title: 'Kura number 1 driver',
    text: 'We just got back from almost 2 weeks in Sri Lanka and during that time we engaged Kura of 4Me Lanka Tours for 11 days. Kura was not only our driver but also our tour guide and advisor, our entertainment and by the end of the 11 days our friend. From unscheduled detours to off the beaten track moments, ad lib adventures, food stops and advice, Kura enhanced our trip no end. Kura was always punctual and entertaining with his humour and friendly easy going nature.',
  },
  {
    initial: 'N',
    author: 'NicoleB',
    date: 'July 9',
    source: 'TripAdvisor',
    title: 'Stop scrolling and book with 4Me Lanka Tours',
    text: 'If you’re scrolling through reviews trying to decide on a driver in Sri Lanka… stop looking! You’ve found him. We spent 11 incredible days travelling over 1,100 km around Sri Lanka with Kura. He was punctual, patient, funny, and incredibly easy to travel with. The best parts of our adventure were the hidden viewpoints, roadside fruit stalls, and spontaneous stops that we’d never have discovered on our own. He even knew I was a teacher and organised a school visit which was one of my highlights.',
  },
  {
    initial: 'M',
    author: 'Matheo L.',
    date: 'May 15',
    source: 'TripAdvisor',
    title: 'Tour of Sri Lanka',
    text: 'My girlfriend and I had a 7 day tour of Sri Lanka with 4Me Lanka Tours and it was easily the best service we’ve experienced on vacation. Kura was our tour coordinator and supervised everything from start to finish. He checked in with us daily, adapted the plan when we wanted to slow down, and gave great local insights you won’t find in guidebooks. Our driver, Amila, did a fantastic job too — safe, punctual, and knew the roads perfectly.',
  },
  {
    initial: 'K',
    author: 'Katherine E.',
    date: 'April 26',
    source: 'TripAdvisor',
    title: 'Excellent 8-day family tour',
    text: 'Our family just finished an 8 day tour in Sri Lanka with 4Me Lanka Tours and it was truly excellent from start to finish. A huge shoutout to our driver guide Sajith — professional, punctual, and incredibly knowledgeable, and amazing with the kids. We also want to thank Kura for the supervision and planning behind the scenes. Communication before the trip was clear, the itinerary was well balanced for a family, and everything ran on time with no hassles.',
  },
  {
    initial: 'P',
    author: 'Petrisse G.',
    date: 'April 22',
    source: 'TripAdvisor',
    title: 'Safe and smooth tour',
    text: 'Honestly one of the best drivers we’ve had on a holiday. The car was spotless and super comfortable for long drives, and we always felt safe, even on those winding hill roads. Kura was friendly, on time every day, and gave us great local tips without being pushy. The whole service from 4Me Lanka was smooth from booking to drop-off. Highly recommend if you want zero stress.',
  },
  {
    initial: 'L',
    author: 'Laxith P.',
    date: 'April 19',
    source: 'TripAdvisor',
    title: 'Exceptional service with Kura & 4Me Lanka Tours',
    text: 'From airport pickup to final drop-off, the service was professional and personal. Our itinerary was well paced with the perfect mix of culture, nature, and local food spots we’d never have found alone. Any small issue was fixed immediately on WhatsApp. Great value and genuinely caring people. If you’re visiting Sri Lanka, book them — you won’t regret it.',
  },
];

export const FLEET: FleetVehicle[] = [
  {
    name: 'Honda Fit Shuttle',
    type: 'Hybrid Car',
    pricePerDayUsd: 80,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/09/11965989_01-2.webp',
    alt: 'Private hybrid car hire Honda Fit Shuttle for Sri Lanka tours',
  },
  {
    name: 'Honda Vezel',
    type: 'Compact SUV',
    pricePerDayUsd: 90,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/vezel.jpg',
    alt: 'Compact SUV rental Honda Vezel for tourist trips Sri Lanka',
  },
  {
    name: 'Toyota Prius',
    type: 'Hybrid Car',
    pricePerDayUsd: 80,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/pr.webp',
    alt: 'Toyota Prius hybrid rental for comfortable Sri Lanka travel',
  },
  {
    name: 'Toyota Axio',
    type: 'Hybrid Car',
    pricePerDayUsd: 80,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/axio.jpeg',
    alt: 'Toyota Axio hybrid car for private tours Sri Lanka',
  },
  {
    name: 'Toyota KDH Flat Roof',
    type: '6 Seater Van',
    pricePerDayUsd: 120,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/WhatsApp-Image-2024-06-09-at-09.51.50.jpeg',
    alt: '6-seater tourist van rental Toyota KDH Flat Roof Sri Lanka',
  },
  {
    name: 'Toyota KDH Highroof',
    type: '9 Seater Van',
    pricePerDayUsd: 150,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/hr.webp',
    alt: '9-seater luxury tourist van Toyota KDH Highroof Sri Lanka',
  },
  {
    name: 'Toyota Coaster',
    type: '24 Seater Mini Bus',
    pricePerDayUsd: 200,
    image: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/toyota-coaster-hire-mini-bus-booking.jpg',
    alt: '24-seater mini bus rental for group tours Sri Lanka',
  },
];

export const PACKAGE_TYPES = [
  {
    badge: 'Most flexible',
    title: 'Vehicle only',
    subtitle: 'Private car or van with an English-speaking driver-guide.',
    featured: false,
    items: [
      'Private AC vehicle for the entire trip',
      'Fuel, highway tolls, parking & driver accommodation',
      'Unlimited mileage along the agreed itinerary',
      'You book your own hotels & entry tickets',
    ],
  },
  {
    badge: 'Most popular',
    title: 'All-inclusive package',
    subtitle: 'Everything arranged — just arrive and enjoy Sri Lanka.',
    featured: true,
    items: [
      'Private AC vehicle & English-speaking driver-guide',
      'Hand-picked hotels (3★ / 4★ / 5★ or boutique)',
      'Daily breakfast & dinner (half-board) or B&B',
      'All attraction tickets, safaris, train seats & activities',
    ],
  },
  {
    badge: 'Tailor-made',
    title: 'Custom mix',
    subtitle: 'Combine your own hotel bookings with our transport & activities.',
    featured: false,
    items: [
      'Modify any of our 9 theme tours or build from scratch',
      'Add specific safaris, train rides or water sports',
      'Pace adjusted for families, honeymooners or seniors',
      '24/7 on-trip WhatsApp support from Kura',
    ],
  },
];

export const TOUR_INCLUDED = [
  'Airport pick-up & drop-off',
  'Air-conditioned luxury vehicle for the entire tour',
  'English-speaking tourist driver-guide',
  'Fuel, highway tolls & parking charges',
  'Driver’s meals & accommodation',
  '24/7 support from Kura throughout your journey',
];

export const TOUR_EXCLUDED = [
  'Airfare & Sri Lanka Visa (ETA) fees',
  'Accommodation & meals (unless All-Inclusive is selected)',
  'Entrance tickets to cultural sites, parks & activities (unless All-Inclusive)',
  'Personal expenses, tips & travel insurance',
];

export const IMPORTANT_NOTES = [
  'To ensure a smooth and customized travel experience, we kindly request that you provide your arrival and departure details, along with your preferred destinations, hotels, and activities. Based on your preferences, we will create a personalized itinerary and travel plan tailored specifically for you.',
  'Once the itinerary is finalized and agreed upon by both parties, a non-refundable advance payment of $150 will be required to confirm the booking. The remaining balance can be settled in two stages: 60% upon arrival and the final 40% the day before departure.',
  'Our tour packages are available in two options: All-inclusive (covering transportation, hotel accommodations, and activity charges) or Vehicle-only, where guests manage their own hotel bookings and activity payments.',
  'If you prefer to book your own hotels, you are welcome to do so; however, please consult us before confirming your reservations so we can ensure the locations align with your travel route and schedule.',
  'All payments can be made in USD, EUR, or LKR, and receipts will be issued for every transaction.',
  'Please note that once the advance payment has been made to secure your vehicle, it becomes non-refundable.',
  'Any changes to the agreed itinerary during the tour may incur additional costs depending on distance and time.',
  'Entrance fees, personal expenses, tips, and meals not mentioned in the package are not included unless specified under the all-inclusive option.',
  'While we take every precaution to ensure your safety and comfort, we are not responsible for delays, cancellations, or losses caused by unforeseen circumstances such as weather conditions, traffic, or natural events.',
  'All guests are advised to carry valid travel documents, insurance, and necessary permits.',
  'During visits to cultural and religious sites, modest dress and respectful behavior are required.',
  'By confirming your booking and making the advance payment, you acknowledge that you have read, understood, and agreed to these terms and conditions.',
  'A single day tour typically lasts around 1 day, though it can be shorter or slightly longer depending on the distance to your chosen destination and your flight transit schedule.',
];

export const RESORT_REGIONS: ResortRegion[] = [
  {
    title: 'Colombo City & Greater Colombo Resort Region',
    description:
      'The Colombo and Greater Colombo Resort Region spreads along the entries of Mt. Lavinia in the south to Negombo to the north — with Colombo City as its center and primary attraction. Being the capital and prime harbor of Sri Lanka since the 18th century, Colombo became the focus point of commerce, trade, governance, arts, and vivid cultural expressions.',
    cities: [
      { name: 'Colombo', slug: 'colombo' },
      { name: 'Negombo', slug: 'negombo' },
    ],
  },
  {
    title: 'South Coast Resort Region',
    description:
      'Galle holds the crown for the South Coast region — historic forts, golden beaches, whale watching, surf breaks, and leopard safaris in Yala and Udawalawa.',
    cities: [
      { name: 'Bentota', slug: 'bentota' },
      { name: 'Hikkaduwa', slug: 'hikkaduwa' },
      { name: 'Galle', slug: 'galle' },
      { name: 'Mirissa', slug: 'mirissa' },
      { name: 'Tangalle', slug: 'tangalle' },
      { name: 'Tissa – Yala', slug: 'tissa-yala' },
      { name: 'Hambantota', slug: 'hambantota' },
      { name: 'Sinharaja', slug: 'sinharaja' },
      { name: 'Udawalawa', slug: 'udawalawa' },
    ],
  },
  {
    title: 'East Coast Resort Region',
    description:
      'Stretching from Trincomalee in the north to Arugam Bay in the south — calm turquoise bays, coral islands, historic Hindu temples and world-class surf points.',
    cities: [
      { name: 'Trincomalee', slug: 'trincomalee' },
      { name: 'Batticaloa', slug: 'batticaloa' },
      { name: 'Arugambay', slug: 'arugambay' },
    ],
  },
  {
    title: 'West Coast Resort Region',
    description:
      'Kalpitiya’s fourteen islands, lagoons and dolphin pods make the northwest coast Sri Lanka’s premier kitesurfing and marine wildlife frontier.',
    cities: [{ name: 'Kalpitiya', slug: 'kalpitiya' }],
  },
  {
    title: 'Up Country Resort Region',
    description:
      'Misty peaks, emerald tea estates, cascading waterfalls, colonial hill stations and the world-famous scenic train ride from Nanu Oya to Ella.',
    cities: [
      { name: 'Nuwaraeliya', slug: 'nuwaraeliya' },
      { name: 'Ella', slug: 'ella' },
      { name: 'Haputale', slug: 'haputale' },
      { name: 'Belihuloya', slug: 'belihuloya' },
      { name: 'Kitulgala', slug: 'kitulgala' },
      { name: 'Riverston', slug: 'riverston' },
    ],
  },
  {
    title: 'Ancient Cities Resort Region',
    description:
      'Over 2,500 years of royal capitals, towering stupas, sacred Bodhi trees, cave temples and rock fortresses across the Cultural Triangle.',
    cities: [
      { name: 'Kandy', slug: 'kandy' },
      { name: 'Anuradhapura', slug: 'anuradhapura' },
      { name: 'Polonnaruwa', slug: 'polonnaruwa' },
      { name: 'Sigiriya', slug: 'sigiriya' },
      { name: 'Pinnawala', slug: 'pinnawala' },
      { name: 'Mahiyanganaya', slug: 'mahiyanganaya' },
    ],
  },
  {
    title: 'Northern Resort Region',
    description:
      'Distinct Tamil heritage, colorful kovils, island causeways, baobab trees and untouched white-sand beaches in Jaffna and Mannar.',
    cities: [
      { name: 'Jaffna', slug: 'jaffna' },
      { name: 'Mannar', slug: 'mannar' },
    ],
  },
];

export const USEFUL_LINKS = [
  { label: 'Online Visa', url: 'https://eta.gov.lk/slvisa/' },
  { label: 'BIA Customs', url: 'https://www.airport.lk/passenger_guide/arrival_info/customs' },
  { label: 'SL Customs', url: 'https://www.customs.gov.lk/personal/travellers/' },
  { label: 'Immigration & Emigration', url: 'https://www.immigration.gov.lk/index_e.php' },
  { label: 'Exchange Rates', url: 'https://www.cbsl.gov.lk/rates-and-indicators/exchange-rates' },
  { label: 'SLTDA', url: 'https://www.sltda.gov.lk/en' },
  { label: 'Train Seats Booking', url: 'https://seatreservation.railway.gov.lk/mtktwebslr/' },
  { label: 'Drone Law', url: 'https://uavcoach.com/drone-laws-in-sri-lanka/' },
];
