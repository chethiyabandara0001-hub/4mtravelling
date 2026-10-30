export interface TourDay {
  dayNumber: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface TourData {
  slug: string;
  type: 'multi-day' | 'day';
  title: string;
  h1Html: string;
  kicker: string;
  description: string;
  lead: string;
  introLead: string;
  heroImage: string;
  posterImage: string;
  priceUsd: number;
  durationLabel: string;
  metaChips: string[];
  routeStops: string[];
  days: TourDay[];
  highlights: string[];
  travelDetails: string[];
}

export const TOURS: TourData[] = [
  {
    "slug": "heritage-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Heritage Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Heritage Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "This itinerary ensures a balanced mix of historical, cultural, and natural attractions, offering travelers a comprehensive and immersive experience of Sri",
    "lead": "7 Day Detailed Tour Itinerary",
    "introLead": "7 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/heritage-tour-in-srilanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Heritage.webp",
    "priceUsd": 0,
    "durationLabel": "7 days",
    "metaChips": [
      "7 days",
      "Private vehicle & driver",
      "From $560"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "beachside-honeymoon-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Beachside Honeymoon Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Beachside Honeymoon Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "Beachside Honeymoon Tour In Srilanka",
    "lead": "10 Day Detailed Tour Itinerary",
    "introLead": "10 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/beachside-honeymoon-tour-in-srilanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/HM3.webp",
    "priceUsd": 0,
    "durationLabel": "10 days",
    "metaChips": [
      "10 days",
      "Private vehicle & driver",
      "From $800"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "hillside-honeymoon-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Hillside Honeymoon Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Hillside Honeymoon Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "This itinerary gives honeymooners a comprehensive and immersive tour of Sri Lanka&#x27;s top attractions, with additional time to relax in the hotels&#x27; enchanting",
    "lead": "10 Day Detailed Tour Itinerary",
    "introLead": "10 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/cheap-honeymoon-destinations-hero_932x378.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/HM1-.webp",
    "priceUsd": 0,
    "durationLabel": "10 days",
    "metaChips": [
      "10 days",
      "Private vehicle & driver",
      "From $800"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "nature-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Nature Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Nature Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "Kura’s Nature Tour In Srilanka – 10 Day Detailed Tour Itinerary Day 1: Arrival at BIA and Visit to Pinnawala Arrival at BIA: Upon your arrival at Bandaranaike",
    "lead": "10 Day Detailed Tour Itinerary",
    "introLead": "10 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/1000_F_190696082_MGSpPDlteyvZpgbvpSsotreOTsOLQnYd.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Nature.webp",
    "priceUsd": 0,
    "durationLabel": "10 days",
    "metaChips": [
      "10 days",
      "Private vehicle & driver",
      "From $800"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "leisure-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Leisure Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Leisure Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "This itinerary offers a lot of time to be in leisure around the hotels, and you are free to choose which of the listed sights to see or avoid.",
    "lead": "10 Day Detailed Tour Itinerary",
    "introLead": "10 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/leisure-travel-1.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Leisure.webp",
    "priceUsd": 0,
    "durationLabel": "10 days",
    "metaChips": [
      "10 days",
      "Private vehicle & driver",
      "From $800"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "culture-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Culture Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Culture Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "Final Day: Depending on your flight schedule, spend your morning shopping or relaxing before transferring to Bandaranaike International Airport for departure.",
    "lead": "12 Day Detailed Tour Itinerary",
    "introLead": "12 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/culture-tour-in-srilanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Culture.webp",
    "priceUsd": 0,
    "durationLabel": "12 days",
    "metaChips": [
      "12 days",
      "Private vehicle & driver",
      "From $960"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "adventure-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Adventure Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">Adventure Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "This detailed itinerary ensures a thrilling adventure Tour In Srilanka with activities from water rafting to wildlife safaris, trekking, and water sports.",
    "lead": "12 Day Detailed Tour Itinerary",
    "introLead": "12 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/adventure-tour-in-srilanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Adventure.webp",
    "priceUsd": 0,
    "durationLabel": "12 days",
    "metaChips": [
      "12 days",
      "Private vehicle & driver",
      "From $960"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "ramayana-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s Ramayana Tour In SriLanka",
    "h1Html": "Kura’s <em class=\"accent\">Ramayana Tour In SriLanka</em>",
    "kicker": "Private tour",
    "description": "This itinerary blends spiritual exploration with breathtaking scenery, historical monuments, and cultural highlights of ramayanaya.",
    "lead": "Chilaw, Anuradhapura, Mannar, Jaffna, Trincomalee, Sigiriya, Kandy, Nuwaraeliya, Ella, Katharagama, Hambantota, Galle & Colombo",
    "introLead": "Chilaw, Anuradhapura, Mannar, Jaffna, Trincomalee, Sigiriya, Kandy, Nuwaraeliya, Ella, Katharagama, Hambantota, Galle & Colombo",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/trincomalee-dscf6797-1560panoramic_orig.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Ramayanaya.webp",
    "priceUsd": 0,
    "durationLabel": "16 days",
    "metaChips": [
      "16 days",
      "Private vehicle & driver",
      "From $1280"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "all-ceylon-tour-in-srilanka",
    "type": "multi-day",
    "title": "Kura’s All Ceylon Tour In Srilanka",
    "h1Html": "Kura’s <em class=\"accent\">All Ceylon Tour In Srilanka</em>",
    "kicker": "Private tour",
    "description": "This comprehensive itinerary provides a well-rounded exploration of Sri Lanka, combining cultural, historical, and natural attractions with ample",
    "lead": "28 Day Detailed Tour Itinerary",
    "introLead": "28 Day Detailed Tour Itinerary",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/all-ceylon-tour-in-srilanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/All-Ceylon.webp",
    "priceUsd": 0,
    "durationLabel": "28 days",
    "metaChips": [
      "28 days",
      "Private vehicle & driver",
      "From $2240"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "negombo-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s Negombo Day Tour in Sri Lanka",
    "h1Html": "Kura’s <em class=\"accent\">Negombo Day Tour in Sri Lanka</em>",
    "kicker": "Private tour",
    "description": "Explore the coastal beauty and historical charm of Negombo with Kura&#x27;s Negombo Day Tour. Starting from Bandaranaike International Airport (BIA), this tour",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/negombo-city-tour-desktop-large-1.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Negombo.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $30"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "colombo-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s Colombo Day Tour in Sri Lanka",
    "h1Html": "Kura’s <em class=\"accent\">Colombo Day Tour in Sri Lanka</em>",
    "kicker": "Private tour",
    "description": "Discover the vibrant city of Colombo with Kura&#x27;s Colombo Day Tour. Starting from Bandaranaike International Airport (BIA), this tour offers an immersive",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Colombo-Sri-Lanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Colombo.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $60"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "kitulgala-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s Kitulgala Day Tour in Sri Lanka",
    "h1Html": "Kura’s <em class=\"accent\">Kitulgala Day Tour in Sri Lanka</em>",
    "kicker": "Private tour",
    "description": "Dive into adventure and natural beauty with Kura&#x27;s Kitulgala Day Tour. Starting from Bandaranaike International Airport (BIA), this tour takes you to the",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/kitulgala-day-tour-in-sri-lanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Kitulgala.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $100"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "kandy-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s Kandy Day Tour in Sri Lanka",
    "h1Html": "Kura’s <em class=\"accent\">Kandy Day Tour in Sri Lanka</em>",
    "kicker": "Private tour",
    "description": "Explore the cultural heart of Sri Lanka with Kura&#x27;s Kandy Day Tour. Starting from Bandaranaike International Airport (BIA), this tour takes you on a journey",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kandy-Lake-1920.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Kandy.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $120"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "galle-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s Galle Day Tour in Sri Lanka",
    "h1Html": "Kura’s <em class=\"accent\">Galle Day Tour in Sri Lanka</em>",
    "kicker": "Private tour",
    "description": "Discover the historic charm and coastal beauty of Galle with Kura&#x27;s Galle Day Tour. Starting from Bandaranaike International Airport (BIA), this tour takes",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/tangalle.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Galle.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $150"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "sigiriya-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s Sigiriya Day Tour in Sri Lanka",
    "h1Html": "Kura’s <em class=\"accent\">Sigiriya Day Tour in Sri Lanka</em>",
    "kicker": "Private tour",
    "description": "Embark on an adventurous journey to Sigiriya, a UNESCO World Heritage Site, with Kura&#x27;s Sigiriya Day Tour. Starting from Bandaranaike International Airport",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/sigiriya-day-tour-in-sri-lanka.jpg",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Sigiriya.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $150"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "bentota-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s",
    "h1Html": "Kura’s <em class=\"accent\"></em>",
    "kicker": "Private tour",
    "description": "Kura&#x27;s Bentota Day Tour in Sri Lanka",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2026/04/b416b0be-1b1b-4750-85c1-b1d2e5022929-scaled.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Bentota.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $120"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "pinnawala-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s",
    "h1Html": "Kura’s <em class=\"accent\"></em>",
    "kicker": "Private tour",
    "description": "Kura&#x27;s Pinnawala Day Tour in Sri Lanka",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pinnawala-1-1024x303.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Pinnawala-copy.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $90"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  },
  {
    "slug": "kalpitiya-day-tour-in-sri-lanka",
    "type": "day",
    "title": "Kura’s",
    "h1Html": "Kura’s <em class=\"accent\"></em>",
    "kicker": "Private tour",
    "description": "Kura&#x27;s Kalpitiya Day Tour in Sri Lanka",
    "lead": "",
    "introLead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kalpitiya-Dri-Lanka-drone-scaled-1-1024x345.webp",
    "posterImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/07/Kalpitiya.webp",
    "priceUsd": 0,
    "durationLabel": "From BIA",
    "metaChips": [
      "From BIA",
      "Private vehicle & driver",
      "From $140"
    ],
    "routeStops": [],
    "days": [],
    "highlights": [],
    "travelDetails": []
  }
];
