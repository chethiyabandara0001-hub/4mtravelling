export interface DestinationFeature {
  kicker: string;
  title: string;
  paragraphs: string[];
  images: { src: string; alt: string }[];
}

export interface DestinationAttraction {
  image: string;
  alt: string;
  number: string;
  title: string;
  description: string;
}

export interface DestinationPick {
  name: string;
  url: string;
}

export interface DestinationData {
  slug: string;
  name: string;
  province: string;
  provinceShort: string;
  categorySlug: string;
  countLabel: string;
  description: string;
  lead: string;
  heroImage: string;
  cardImage: string;
  metaChips: string[];
  introParagraphs: string[];
  features: DestinationFeature[];
  attractions: DestinationAttraction[];
  hotels: DestinationPick[];
  restaurants: DestinationPick[];
  relatedTourSlugs: string[];
}

export const DESTINATIONS: DestinationData[] = [
  {
    "slug": "anuradhapura",
    "name": "Anuradhapura “The Ancient Heart of Sri Lanka”",
    "province": "North Central Province",
    "provinceShort": "North Central",
    "categorySlug": "north-central-province",
    "countLabel": "20 attractions",
    "description": "Discover Anuradhapura’s rich history and UNESCO sites for an unforgettable cultural adventure in Sri Lanka.",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/Anuradhapura-travel.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/Anuradhapura-travel.webp",
    "metaChips": [
      "Anuradhapura, Sri Lanka",
      "North Central Province",
      "Archeological City"
    ],
    "introParagraphs": [
      "Anuradhapura is a historic city and UNESCO World Heritage Site, known as the first ancient capital of Sri Lanka. It is famous for its well-preserved ruins, sacred temples, and impressive stupas such as Ruwanwelisaya and Jetavanaramaya. The city is also home to the revered Sri Maha Bodhi, one of the oldest recorded trees in the world. With its rich history and spiritual significance, Anuradhapura offers a unique glimpse into Sri Lanka’s ancient civilization."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Anuradhapura Archaeological City",
        "paragraphs": [
          "Anuradhapura, a UNESCO World Heritage site in Sri Lanka, is a significant historical treasure. Founded in the 4th century BC, it served as the island’s first capital for over 1,300 years. The site features ruins of palaces, monasteries, and intricate sculptures, as well as towering stupas like Ruwanwelisaya and Jetavanaramaya. The sacred Sri Maha Bodhi tree, grown from a cutting of the tree where Buddha attained enlightenment, attracts pilgrims worldwide. Explore its vast archaeological treasures and experience the enduring heritage of Sri Lanka."
        ],
        "images": []
      },
      {
        "kicker": "Explore",
        "title": "Wilpattu National Park",
        "paragraphs": [
          "Wilpattu National Park, Sri Lanka’s largest and oldest wildlife reserve, is renowned for its unique landscape with “willus” (natural lakes). The park spans over 1,300 square kilometers and offers an immersive wildlife experience for nature enthusiasts and photographers. Visitors can spot elusive leopards, elephants, and a variety of bird species, as well as sloth bears, deer, water buffalo, and crocodiles. The park’s remote and tranquil environment ensures an authentic encounter with nature, allowing visitors to step closer to the wild."
        ],
        "images": []
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ISURUMUNIYA_ROCK_TEMPLE-scaled.jpeg",
        "alt": "Isurumuniya, Anuradhapura",
        "number": "01",
        "title": "Isurumuniya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ruwan.webp",
        "alt": "Ruwanweliseya, Anuradhapura",
        "number": "02",
        "title": "Ruwanweliseya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/jetha-1.jpeg",
        "alt": "Jethawanaramaya, Anuradhapura",
        "number": "03",
        "title": "Jethawanaramaya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/samadhi-e1714914280753.jpeg",
        "alt": "Samadhi Statue, Anuradhapura",
        "number": "04",
        "title": "Samadhi Statue",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Thuparamaya.webp",
        "alt": "Thuparamaya, Anuradhapura",
        "number": "05",
        "title": "Thuparamaya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Moonstone.jpeg",
        "alt": "Moonstone, Anuradhapura",
        "number": "06",
        "title": "Moonstone",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Abhayagiriya-scaled-e1714914394741.jpeg",
        "alt": "Abhayagiriya, Anuradhapura",
        "number": "07",
        "title": "Abhayagiriya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Kuttam-Pokuna-e1714914328388.jpg",
        "alt": "Twin Pond, Anuradhapura",
        "number": "08",
        "title": "Twin Pond",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Lankaramaya-1-e1714914071952.webp",
        "alt": "Lankaramaya, Anuradhapura",
        "number": "09",
        "title": "Lankaramaya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/09/46b63222-de90-4a61-b409-6f9cdb8b1eab.webp",
        "alt": "Refactory, Anuradhapura",
        "number": "10",
        "title": "Refactory",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/09/LK94009812-01-E.webp",
        "alt": "Lovamahapaya, Anuradhapura",
        "number": "11",
        "title": "Lovamahapaya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/09/TLClk_Mirisavatiya-CSP2531852-1.webp",
        "alt": "Mirisawetiya, Anuradhapura",
        "number": "12",
        "title": "Mirisawetiya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/LK94007573-04-E-1-edited.jpeg",
        "alt": "Basawakkulama Wewa, Anuradhapura",
        "number": "13",
        "title": "Basawakkulama Wewa",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/elephant-pond-anuradhapura-sri-lanka-Amazingsrilanka-edited.jpeg",
        "alt": "Elephant Pond, Anuradhapura",
        "number": "14",
        "title": "Elephant Pond",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/MIHINTHALAYA-5-edited.jpg",
        "alt": "Mihinthalaya, Anuradhapura",
        "number": "15",
        "title": "Mihinthalaya",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kalawewa.jpeg",
        "alt": "Kalawewa Tank, Anuradhapura",
        "number": "16",
        "title": "Kalawewa Tank",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/stone-bridge.jpeg",
        "alt": "Stone Bridge, Anuradhapura",
        "number": "17",
        "title": "Stone Bridge",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nachchaduwa-09-1024x576-1-edited.webp",
        "alt": "Nachchaduwa Tank, Anuradhapura",
        "number": "18",
        "title": "Nachchaduwa Tank",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Purana-Gama-edited.jpg",
        "alt": "Puranagama, Anuradhapura",
        "number": "19",
        "title": "Puranagama",
        "description": "Anuradhapura"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kaludiya-Pokuna-edited.jpg",
        "alt": "Blackwater Pond, Anuradhapura",
        "number": "20",
        "title": "Blackwater Pond",
        "description": "Anuradhapura"
      }
    ],
    "hotels": [
      {
        "name": "Eco Black & White",
        "url": ""
      },
      {
        "name": "Lolu Village Resort",
        "url": ""
      },
      {
        "name": "Aryana Boutique Hotel",
        "url": ""
      },
      {
        "name": "Kumbura Resort",
        "url": ""
      },
      {
        "name": "Lakeside Nuwarawewa",
        "url": ""
      },
      {
        "name": "Forest Rock Garden",
        "url": ""
      },
      {
        "name": "Mankada Resort",
        "url": ""
      },
      {
        "name": "Herritage Hotel",
        "url": ""
      },
      {
        "name": "Serenity Villa",
        "url": ""
      },
      {
        "name": "Alakamanda Hotel",
        "url": ""
      },
      {
        "name": "Serene View Guest",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Ambula Restaurant",
        "url": ""
      },
      {
        "name": "Gemi Gedara",
        "url": ""
      },
      {
        "name": "Greenway Restaurant",
        "url": ""
      },
      {
        "name": "Cafe Mist",
        "url": ""
      },
      {
        "name": "Golden Mango Indian",
        "url": ""
      },
      {
        "name": "Little Paradise",
        "url": ""
      },
      {
        "name": "Kafe",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "heritage-tour-in-srilanka",
      "culture-tour-in-srilanka",
      "ramayana-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "arugambay",
    "name": "Arugambay “Sri Lanka’s Surfing Paradise”",
    "province": "Eastern Province",
    "provinceShort": "Eastern",
    "categorySlug": "eastern-province",
    "countLabel": "8 attractions",
    "description": "Arugambay is a world famous coastal destination known for its golden beaches and exceptional surfing conditions. Popular among both beginners and...",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/arugambay1.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/arugambay1.webp",
    "metaChips": [
      "Arugambay, Sri Lanka",
      "Eastern Province",
      "Beach City"
    ],
    "introParagraphs": [
      "Arugambay is a world famous coastal destination known for its golden beaches and exceptional surfing conditions. Popular among both beginners and experienced surfers, it offers consistent waves and a relaxed, laid back atmosphere. Beyond surfing, visitors can enjoy stunning sunsets, wildlife nearby, and vibrant local culture, making Arugam Bay a perfect getaway for beach lovers and adventure seekers alike."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Windsurfing in Arugambay",
        "paragraphs": [
          "Arugambay, a popular surfing destination on Sri Lanka’s east coast, offers exceptional conditions for windsurfers due to its consistent wind patterns and clear waters. Suitable for all skill levels, the bay features main surf points like Main Point, Whiskey Point, and Peanut Farm. The vibrant coastal community adds to the charm, offering beachfront cafes and a laid-back atmosphere for travelers. Arugam Bay is the ultimate windsurfing destination, offering unforgettable adventures and lasting memories for both beginners and experienced surfers."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/653x490.jpg",
            "alt": "wind-surfing-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1587681914.jpg",
            "alt": "wind surf srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/caption-4.jpg",
            "alt": "wind-surfing-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/caption-5.jpg",
            "alt": "wind-surfing-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/planning-dream-trip-indonesia-bali1-2.jpg",
            "alt": "wind-surfing-srilanka"
          }
        ]
      },
      {
        "kicker": "Explore",
        "title": "Kumana and Lahugala National Parks",
        "paragraphs": [
          "Explore Sri Lanka’s hidden gems, Kumana and Lahugala National Parks, for unique wildlife experiences. Kumana is known for its rich birdlife, including rare and migratory birds like the painted stork, pelican, and black-necked stork. The park’s lush mangroves, lagoons, and waterways provide a picturesque setting for birdwatching. Lahugala, located near Kumana, is a sanctuary for the majestic Sri Lankan elephant. The park’s three main tanks, Lahugala, Kitulana, and Sengamuwa, attract herds of elephants, providing visitors with remarkable sightings. The park also houses leopards, deer, and numerous bird species. Both parks offer a serene and less crowded alternative to popular tourist destinations."
        ],
        "images": []
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/croco-pond-edited.jpeg",
        "alt": "Crocodile Pond, Arugambay",
        "number": "01",
        "title": "Crocodile Pond",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/CrocodileRock_Mob_800x1000-edited.jpeg",
        "alt": "Crocodile Rock, Arugambay",
        "number": "02",
        "title": "Crocodile Rock",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kudumbigala-Climb-slider-7-edited.jpg",
        "alt": "Kudumbigala Monastary, Arugambay",
        "number": "03",
        "title": "Kudumbigala Monastary",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/muhudu-maha-viharaya1-edited.jpg",
        "alt": "Muhudumaha Viharaya, Arugambay",
        "number": "04",
        "title": "Muhudumaha Viharaya",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Peanut-Farm-Beach-edited.jpg",
        "alt": "Peanut Farm Beach, Arugambay",
        "number": "05",
        "title": "Peanut Farm Beach",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/sangaman-kanda-02-edited.webp",
        "alt": "Sangamankanda Point, Arugambay",
        "number": "06",
        "title": "Sangamankanda Point",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/whiskey.jpeg",
        "alt": "Whiskey Point, Arugambay",
        "number": "07",
        "title": "Whiskey Point",
        "description": "Arugambay"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/night-camping-and-surfing-at-elephant-rock-11-edited.jpg",
        "alt": "Night Life, Arugambay",
        "number": "08",
        "title": "Night Life",
        "description": "Arugambay"
      }
    ],
    "hotels": [
      {
        "name": "Roccos Resort",
        "url": ""
      },
      {
        "name": "Pod Bay Resort",
        "url": ""
      },
      {
        "name": "Golden Beach Resort",
        "url": ""
      },
      {
        "name": "Guitar Bay",
        "url": ""
      },
      {
        "name": "Lagoon Cabanas",
        "url": ""
      },
      {
        "name": "Stay Golden",
        "url": ""
      },
      {
        "name": "Oruwa Boutique Villa",
        "url": ""
      },
      {
        "name": "Jetwing Surf",
        "url": ""
      },
      {
        "name": "Whiskey point Resort",
        "url": ""
      },
      {
        "name": "Bay Vista Hotel",
        "url": ""
      },
      {
        "name": "Garden Cottage",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Friends Food Cafe",
        "url": ""
      },
      {
        "name": "Curry Leaves Indian",
        "url": ""
      },
      {
        "name": "Leafe & Vine",
        "url": ""
      },
      {
        "name": "Mr Fisherman",
        "url": ""
      },
      {
        "name": "Maleena Italian",
        "url": ""
      },
      {
        "name": "Tandoori Hut",
        "url": ""
      },
      {
        "name": "Funky De Bar",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "batticaloa",
    "name": "Batticaloa",
    "province": "Eastern Province",
    "provinceShort": "Eastern",
    "categorySlug": "eastern-province",
    "countLabel": "12 attractions",
    "description": "Discover Sri Lanka’s enchanting coastal city. Explore Pasikudah, Kallady & Kalkudah beaches, Batticaloa Fort, and the famous Singing Fish Lagoon.",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Batticaloa-Beach.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Batticaloa-Beach.jpg",
    "metaChips": [
      "Batticaloa, Sri Lanka",
      "Eastern Province",
      "Beach City"
    ],
    "introParagraphs": [
      "Batticaloa is a charming coastal city known for its serene lagoons, sandy beaches, and rich cultural heritage. Often called the “Land of the Singing Fish,” it is famous for the unique musical sounds heard in the Lagoon. Visitors can explore historic sites like the dutch Fort, enjoy fresh seafood, and experience the city’s peaceful atmosphere, making it a relaxing and culturally rich destination."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Discover the Pristine Beauty of Pasikudah, Kallady, and Kalkudah Beaches",
        "paragraphs": [
          "Pasikudah, Kallady, and Kalkudah beaches in Sri Lanka are known for their tranquil waters, golden sands, and natural beauty. Pasikudah Beach, with its shallow coastline and crystal-clear waters, is perfect for swimming, water sports, snorkeling, and diving. Kallady Beach, near Batticaloa, offers a unique blend of natural beauty and cultural experiences, with picturesque sunsets and a serene atmosphere. The nearby Batticaloa Lagoon is home to the famous Singing Fish phenomenon. Kalkudah Beach, adjacent to Pasikudah, offers a quieter experience with a pristine shoreline and calm waters. These beaches offer a serene retreat for travelers seeking adventure, relaxation, or cultural exploration. Visit these beaches to experience Sri Lanka’s coastal charm."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2017-11-21.jpg",
            "alt": "pasikudah beach"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/3941-1.jpg",
            "alt": "batticaloa beach"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/beach2.jpeg",
            "alt": "pasikudah beach"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/beach1-1.jpeg",
            "alt": "boats batticaloa"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/beach-6.jpeg",
            "alt": "pasikudah beach"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/7995096-passikudah.webp",
            "alt": "pasikudah beach"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/beach3.jpeg",
            "alt": "pasikudah beach"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/10-A-Kalladi-Bridge-05-edited.jpg",
        "alt": "Kalladi Bridge, Batticaloa",
        "number": "01",
        "title": "Kalladi Bridge",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/32224041699206661-edited.jpg",
        "alt": "Light House, Batticaloa",
        "number": "02",
        "title": "Light House",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Batticaloa_Gate_Batticaloa-edited-scaled.jpeg",
        "alt": "Batticaloa Gate, Batticaloa",
        "number": "03",
        "title": "Batticaloa Gate",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/fort-duch.jpeg",
        "alt": "Dutch Fort, Batticaloa",
        "number": "04",
        "title": "Dutch Fort",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Screenshot-2024-05-07-at-09.04.09-edited.png",
        "alt": "Buffalo Island, Batticaloa",
        "number": "05",
        "title": "Buffalo Island",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/bat.webp",
        "alt": "Sunrise View Point, Batticaloa",
        "number": "06",
        "title": "Sunrise View Point",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri170C044D94971B254.jpg",
        "alt": "Heritage Museum, Batticaloa",
        "number": "07",
        "title": "Heritage Museum",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/D0DyD_kUUAA7d7O-edited.jpg",
        "alt": "Eco Park, Batticaloa",
        "number": "08",
        "title": "Eco Park",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/thoppigala-edited.jpg",
        "alt": "Thoppigala Heritage Center, Batticaloa",
        "number": "09",
        "title": "Thoppigala Heritage Center",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Punnani-anicut.webp",
        "alt": "Punnani Anicut, Batticaloa",
        "number": "10",
        "title": "Punnani Anicut",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pondukalchenai-bridge-edited.jpg",
        "alt": "Pondukalchenai Bridge, Batticaloa",
        "number": "11",
        "title": "Pondukalchenai Bridge",
        "description": "Batticaloa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/coconut-cultural-park-1-edited.jpg",
        "alt": "Coconut Culture Park, Batticaloa",
        "number": "12",
        "title": "Coconut Culture Park",
        "description": "Batticaloa"
      }
    ],
    "hotels": [
      {
        "name": "East Lagoon Resort",
        "url": ""
      },
      {
        "name": "Sea View Resort",
        "url": ""
      },
      {
        "name": "Sunny Fish Resort",
        "url": ""
      },
      {
        "name": "New Sunrise Hotel",
        "url": ""
      },
      {
        "name": "The Cove",
        "url": ""
      },
      {
        "name": "Aki Villa",
        "url": ""
      },
      {
        "name": "Coco Ville",
        "url": ""
      },
      {
        "name": "Malu Malu Resort",
        "url": ""
      },
      {
        "name": "Shakthi Vaani Resort",
        "url": ""
      },
      {
        "name": "Amaya Beach",
        "url": ""
      },
      {
        "name": "Amethyst Resort",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Riviera Crab",
        "url": ""
      },
      {
        "name": "Sri Krishna Vegetarian",
        "url": ""
      },
      {
        "name": "Kiri Bjojan Restaurant",
        "url": ""
      },
      {
        "name": "Gama Gama Chinese & Indian",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "culture-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "belihuloya",
    "name": "Belihuloya “A Serene Mountain Getaway in Sri Lanka”",
    "province": "Sabaragamuwa Province",
    "provinceShort": "Sabaragamuwa",
    "categorySlug": "sabaragamuwa-province",
    "countLabel": "8 attractions",
    "description": "Belihuloya is a scenic hillside destination known for its cool climate, lush greenery, and natural beauty. Surrounded by mountains, waterfalls, and rivers, it",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/portrait_LO-Belihuloya_A1.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/portrait_LO-Belihuloya_A1.jpg",
    "metaChips": [
      "Belihuloya, Sri Lanka",
      "Sabaragamuwa Province",
      "Mountainouse City"
    ],
    "introParagraphs": [
      "Belihuloya is a scenic hillside destination known for its cool climate, lush greenery, and natural beauty. Surrounded by mountains, waterfalls, and rivers, it is perfect for hiking, camping, and nature exploration. Located near the Horton Plains National Park, Belihuloya offers a peaceful escape for travelers seeking adventure and relaxation in Sri Lanka’s highlands."
    ],
    "features": [],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/baker-edited.jpeg",
        "alt": "Baker’s Bend, Belihuloya",
        "number": "01",
        "title": "Baker’s Bend",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/bambarakanda-falls-in-sri-lanka-compress-edited.jpg",
        "alt": "Bamarakanda Falls, Belihuloya",
        "number": "02",
        "title": "Bamarakanda Falls",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/devil-edited.jpeg",
        "alt": "Devil’s Staircase, Belihuloya",
        "number": "03",
        "title": "Devil’s Staircase",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nonpareil-01-edited.jpg",
        "alt": "Nanperial Falls, Belihuloya",
        "number": "04",
        "title": "Nanperial Falls",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/samanala-edited.jpeg",
        "alt": "Samanalawewa Reservoir, Belihuloya",
        "number": "05",
        "title": "Samanalawewa Reservoir",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/canoeing4-edited.jpg",
        "alt": "Canoeing & Kayaking, Belihuloya",
        "number": "06",
        "title": "Canoeing & Kayaking",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Pahanthuda-Waterfall-Pahanthudawa-Waterfall-edited.jpg",
        "alt": "Pahanthudawa Falls, Belihuloya",
        "number": "07",
        "title": "Pahanthudawa Falls",
        "description": "Belihuloya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/suratalee-edited.jpeg",
        "alt": "Surathalee Falls, Belihuloya",
        "number": "08",
        "title": "Surathalee Falls",
        "description": "Belihuloya"
      }
    ],
    "hotels": [
      {
        "name": "River Garden Resort",
        "url": ""
      },
      {
        "name": "Sennya Resort",
        "url": ""
      },
      {
        "name": "Hideout Villa",
        "url": ""
      },
      {
        "name": "Eagle Wings Bungalow",
        "url": ""
      },
      {
        "name": "Forest Heaven Resort",
        "url": ""
      },
      {
        "name": "Treehouse Chalets",
        "url": ""
      },
      {
        "name": "Hilanders Holiday",
        "url": ""
      },
      {
        "name": "Terico Resort",
        "url": ""
      },
      {
        "name": "Citrine River Res",
        "url": ""
      },
      {
        "name": "Landa Holidays",
        "url": ""
      },
      {
        "name": "Windy Hills Bungalow",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Pearl Restaurant",
        "url": ""
      },
      {
        "name": "Gimanhala",
        "url": ""
      },
      {
        "name": "Kebab Spread",
        "url": ""
      },
      {
        "name": "Cafe Ninety Nine",
        "url": ""
      },
      {
        "name": "Bee Honey",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "hillside-honeymoon-tour-in-srilanka"
    ]
  },
  {
    "slug": "bentota",
    "name": "Bentota “The Jewel of Sri Lanka’s Southern Coast”",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "7 attractions",
    "description": "Bentota is a popular coastal destination known for its pristine beaches, luxury resorts, and exciting water sports. Located along the scenic Bentota River, it",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/aerial-view-bentota-beach-secret-600nw-2354914557.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/aerial-view-bentota-beach-secret-600nw-2354914557.webp",
    "metaChips": [
      "Bentota, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Bentota is a popular coastal destination known for its pristine beaches, luxury resorts, and exciting water sports. Located along the scenic Bentota River, it offers activities such as boat safaris, jet skiing, and windsurfing. With its blend of relaxation and adventure, Bentota is an ideal getaway for beach lovers and holidaymakers."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "The Ultimate Water Sports Bentota",
        "paragraphs": [
          "Bentota, Sri Lanka’s premier water sports destination, offers a blend of golden beaches, calm lagoons, and Indian Ocean waters. It offers a variety of water activities, including jet ski riding, wakeboarding, snorkeling and diving, and banana boat and tube rides. The calm waters of the Bentota River provide an exciting yet safe environment for these activities. Wakeboarding combines surfing and waterskiing, while snorkeling and diving explore colorful coral reefs, exotic marine life, and underwater caves. Banana boat and tube rides are fun-filled group activities, perfect for a laugh and excitement. Bentota’s water sports facilities are top-notch, with experienced instructors and quality equipment."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/b2.jpg",
            "alt": "water sports bentota"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/15865918985_bf6842092f_b_20191021180446.jpg",
            "alt": "water sports bentota"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/f3.jpg",
            "alt": "water sports bentota"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/bentota-water-sports4.jpg",
            "alt": "water sports bentota"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1.png",
            "alt": "water sports bentota"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2.jpeg",
            "alt": "water sports bentota"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/e4.jpg",
            "alt": "fishing tour srilanka"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Traditional Ayurvedic Treatments",
        "paragraphs": [
          "Ayurvedic treatments are a holistic wellness practice rooted in Sri Lanka’s heritage. Ayurveda, meaning “the science of life,” balances the mind, body, and spirit through natural therapies and herbal remedies. These treatments are tailored to individual needs, including massages, herbal steam baths, and detoxifying rituals. Shirodhara is a calming treatment, while Panchakarma is a comprehensive detoxification program. Herbal steam baths and Abhyanga are therapeutic full-body massages. These treatments are performed in serene settings, allowing individuals to unwind and reconnect with nature. Ayurvedic treatments offer a transformative journey towards holistic health and wellness, providing relief from stress, chronic ailments, and relaxation."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Massageuntensilien.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ayurveda-and-panchakarma.jpg",
            "alt": "Ayurvedic Therapies in Srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ayurveda-steam-bath-640x360-1.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/benifits_of_Ayurveda_massage.webp",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/massage_Large.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/HELA.webp",
            "alt": "ceylon herbs"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Healing-and-Harmony-with-Ayurveda-Therapies.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Madu River Boat Safari",
        "paragraphs": [
          "Experience the Madu River Boat Safari, a unique blend of adventure, wildlife, and scenic beauty in Sri Lanka. Cruise through lush mangrove forests, witnessing the biodiversity of the pristine ecosystem. Observe bird species like kingfishers, herons, and cormorants, as well as endemic reptiles, butterflies, and monkeys. Visit the Kothduwa Temple, a small Buddhist shrine, and experience the traditional fish therapy. The Madu River is also home to prawn farms and cinnamon plantations, offering insight into local livelihoods. Learn about traditional methods of cinnamon peeling and prawn farming, and appreciate the region’s cultural heritage. This safari promises an enriching and memorable experience for nature lovers and adventure seekers."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/LK94009488-11-E.webp",
            "alt": "madu river srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/madu-ganga.webp",
            "alt": "madu river srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Madu-River-Baot-Safari-2.jpg",
            "alt": "madu river srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/8526800159_05d7242a71_b.jpg",
            "alt": "madu river cinnamon srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/IMG_1816.jpg",
            "alt": "madu river srilanka"
          },
          {
            "src": "https://4melankatours.com/wp-content/uploads/2024/05/go24ojqbn0qtf2f81jm3sowfuoc6_shutterstock_1274576008.avif",
            "alt": "madu river srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sathapaha-duwa-madu-river-balapitiya.jpg",
            "alt": "Madu River Boat Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/madhu-and-bentota-river-safari-bey-1090X610.jpg",
            "alt": "Madu River Boat Safari"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kande-Viharaya-Temple-edited.jpg",
        "alt": "Kande Vihara Temple, Bentota",
        "number": "01",
        "title": "Kande Vihara Temple",
        "description": "Bentota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/116283551brief_garden-edited.jpg",
        "alt": "Brief Garden, Bentota",
        "number": "02",
        "title": "Brief Garden",
        "description": "Bentota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/214212377-group-of-little-sea-turtles-closeup-edited-1.jpg",
        "alt": "Sea Turtle Hatchery, Bentota",
        "number": "03",
        "title": "Sea Turtle Hatchery",
        "description": "Bentota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ventura.jpeg",
        "alt": "Bentota Beach, Bentota",
        "number": "04",
        "title": "Bentota Beach",
        "description": "Bentota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/490a35cd07db30e55a8392dc86b038b7-edited.jpg",
        "alt": "Mask Factory, Bentota",
        "number": "05",
        "title": "Mask Factory",
        "description": "Bentota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/photo5jpg.jpg",
        "alt": "Spice Garden, Bentota",
        "number": "06",
        "title": "Spice Garden",
        "description": "Bentota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/induruwa-edited.webp",
        "alt": "Induruwa Beach, Bentota",
        "number": "07",
        "title": "Induruwa Beach",
        "description": "Bentota"
      }
    ],
    "hotels": [
      {
        "name": "Pink Land",
        "url": ""
      },
      {
        "name": "Earl’s Reef",
        "url": ""
      },
      {
        "name": "Muthumuni Resort",
        "url": ""
      },
      {
        "name": "Club Bentota",
        "url": ""
      },
      {
        "name": "Centara Resort",
        "url": ""
      },
      {
        "name": "Ekho Surf",
        "url": ""
      },
      {
        "name": "Thaala Bentota",
        "url": ""
      },
      {
        "name": "Serendib Beach",
        "url": ""
      },
      {
        "name": "Temple Tree Resort",
        "url": ""
      },
      {
        "name": "Nilwala",
        "url": ""
      },
      {
        "name": "Kurumba Villas",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Amal Villa",
        "url": ""
      },
      {
        "name": "Kandoori",
        "url": ""
      },
      {
        "name": "Boiling Lob",
        "url": ""
      },
      {
        "name": "Sea View Beach",
        "url": ""
      },
      {
        "name": "Malli’s Seafood",
        "url": ""
      },
      {
        "name": "Rana Seafood",
        "url": ""
      },
      {
        "name": "Islanda Seafood",
        "url": ""
      },
      {
        "name": "The Wave",
        "url": ""
      },
      {
        "name": "The Cuisine Delight",
        "url": ""
      },
      {
        "name": "The Catamaran",
        "url": ""
      },
      {
        "name": "Beach Club Induruwa",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "beachside-honeymoon-tour-in-srilanka",
      "hillside-honeymoon-tour-in-srilanka",
      "nature-tour-in-srilanka",
      "leisure-tour-in-srilanka"
    ]
  },
  {
    "slug": "colombo",
    "name": "Colombo “The commercial Heart of Sri Lanka”",
    "province": "Western Province",
    "provinceShort": "Western",
    "categorySlug": "western-province",
    "countLabel": "16 attractions",
    "description": "Colombo is the vibrant commercial capital of Sri Lanka, blending modern city life with rich colonial heritage. From bustling markets and luxury shopping malls",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/colombo-sri-lanka-aerial-view.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/colombo-sri-lanka-aerial-view.webp",
    "metaChips": [
      "Colombo, Sri Lanka",
      "Western Province",
      "Capital City"
    ],
    "introParagraphs": [
      "Colombo is the vibrant commercial capital of Sri Lanka, blending modern city life with rich colonial heritage. From bustling markets and luxury shopping malls to historic landmarks like Galle Face Green, the city offers something for every traveler. With its lively atmosphere, diverse cuisine, and coastal charm, Colombo is the perfect gateway to explore the island."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Sri Lanka’s Gifts and Souvenirs, A Treasure Trove for Foreign Travellers",
        "paragraphs": [
          "Sri Lanka, a beautiful and culturally rich island, Colombo offers a variety of gifts and souvenirs for foreign travelers. The vibrant markets and boutiques in the country are filled with exquisite items that capture the essence of Sri Lankan artistry. Silks and batiks are popular souvenirs, showcasing the island’s rich textile heritage. Wood carvings and traditional masks reflect Sri Lanka’s exceptional craftsmanship and cultural traditions. Handmade crafts like pottery, jewellery, and woven baskets provide a tangible connection to the island’s traditions and make for cherished souvenirs. Bringing home a piece of Sri Lanka means carrying a story of its rich culture and artistry."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/8713528824_626454ebe9_b.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/alluring-ornaments.jpeg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_beb1c3155e.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/lesterlost-travel-handmade-crafts-sri-lanka-wood-carving-buddha-statues-1.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/travel-melodies-demon-masks-as-souvenirs-from-sri-lanka.jpg",
            "alt": "demon-masks-as-souvenirs-from-sri-lanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-handicrafts.jpg",
            "alt": "sri-lanka-handicrafts"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Sri Lanka’s Gems and Jewellery, A Sparkling Legacy",
        "paragraphs": [
          "Discover the enchanting world of Sri Lanka’s gems and jewellery, renowned for their exceptional quality and timeless beauty. As one of the world’s leading gem producers, Sri Lanka offers a dazzling array of precious stones, including sapphires, rubies, and emeralds, each uniquely sourced from the island’s rich earth. Our exquisite jewellery collections are crafted by skilled artisans who blend traditional techniques with contemporary designs, creating stunning pieces that capture the essence of Sri Lankan elegance. Whether you seek a statement piece or a delicate accessory, our gems and jewellery make for perfect keepsakes and gifts, allowing you to carry a piece of Sri Lanka’s sparkling legacy with you. Explore our collections in Colombo and find your own slice of paradise, elegantly immortalised in our fine jewellery."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2015.12.14-29-408-Sri-Lanka-Ratnapura-1.jpg",
            "alt": "gem mining srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/MG_8185_DxO.jpg",
            "alt": "gem mining srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-gem-industry-image-three-1-op.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gem-jewellery-exports-sri-lanka-l.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gems.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gemstone-4.gif",
            "alt": "srilanka-gem-industry"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/800x750-5-edited.jpg",
        "alt": "Independance Square, Colombo",
        "number": "01",
        "title": "Independance Square",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/1420373773-edited.jpg",
        "alt": "Gangarama Temple, Colombo",
        "number": "02",
        "title": "Gangarama Temple",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Crowisland-edited.jpg",
        "alt": "Crows Island, Colombo",
        "number": "03",
        "title": "Crows Island",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/151111407Srilanka_colombo_viharamahadevi_park.jpg",
        "alt": "Viharamahadevi Park, Colombo",
        "number": "04",
        "title": "Viharamahadevi Park",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/155467368Srilanka_colombo_national_museum.jpg",
        "alt": "National Museum, Colombo",
        "number": "05",
        "title": "National Museum",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ba255b_8b8c13ce6df24be78f53551ee514ba3fmv2-edited.webp",
        "alt": "St’ Anthonys Church, Colombo",
        "number": "06",
        "title": "St’ Anthonys Church",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/eaf7d6db-cb53-4d91-8b0a-95627ec50eab61d7a72be478210965_Pettah_Floating_Market_4-edited.jpg",
        "alt": "Floating Market, Colombo",
        "number": "07",
        "title": "Floating Market",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pettah-market-colombo-edited.jpg",
        "alt": "Pettah Market, Colombo",
        "number": "08",
        "title": "Pettah Market",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Galle-Face-Green-edited.jpg",
        "alt": "Galle Face, Colombo",
        "number": "09",
        "title": "Galle Face",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Jami-Ul-Alfar-Mosque-edited.jpg",
        "alt": "Red Mosque, Colombo",
        "number": "10",
        "title": "Red Mosque",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/LK94009944-04-E-edited.webp",
        "alt": "Beira Lake, Colombo",
        "number": "11",
        "title": "Beira Lake",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-kailasanathar-hindu-temple-colombo-sri-lanka-DY85KD.jpg",
        "alt": "Kailasanatharam Kovil, Colombo",
        "number": "12",
        "title": "Kailasanatharam Kovil",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/6903794340_efa3986351_c-edited.jpg",
        "alt": "Lotus Theater, Colombo",
        "number": "13",
        "title": "Lotus Theater",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Port-City-2-edited.jpg",
        "alt": "Port City, Colombo",
        "number": "14",
        "title": "Port City",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/lotus-tower-edited.jpg",
        "alt": "Lotus Tower, Colombo",
        "number": "15",
        "title": "Lotus Tower",
        "description": "Colombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Homepage.jpg-edited.webp",
        "alt": "Casino, Colombo",
        "number": "16",
        "title": "Casino",
        "description": "Colombo"
      }
    ],
    "hotels": [
      {
        "name": "Kingsbury",
        "url": ""
      },
      {
        "name": "Ramada",
        "url": ""
      },
      {
        "name": "Steuart By Citrus",
        "url": ""
      },
      {
        "name": "Fairway",
        "url": ""
      },
      {
        "name": "Galle Face",
        "url": ""
      },
      {
        "name": "GranBell",
        "url": ""
      },
      {
        "name": "Marino Beach",
        "url": ""
      },
      {
        "name": "Cinnamon Red",
        "url": ""
      },
      {
        "name": "Mandarina",
        "url": ""
      },
      {
        "name": "Ocean Edge",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "The Gallery Cafe",
        "url": ""
      },
      {
        "name": "Ministry Of Crabs",
        "url": ""
      },
      {
        "name": "Graze Kitchen",
        "url": ""
      },
      {
        "name": "Isso Prawn Crazy",
        "url": ""
      },
      {
        "name": "Flower Drum",
        "url": ""
      },
      {
        "name": "Shanmugaas Vegetarian",
        "url": ""
      },
      {
        "name": "Dindigul Thalappakatti",
        "url": ""
      },
      {
        "name": "Sri Vihar Indian",
        "url": ""
      },
      {
        "name": "Elite Indian",
        "url": ""
      },
      {
        "name": "Indian Kitchen",
        "url": ""
      },
      {
        "name": "Cafe Japan",
        "url": ""
      },
      {
        "name": "Nihonbashi By Dharshan",
        "url": ""
      },
      {
        "name": "Zen Japanese",
        "url": ""
      },
      {
        "name": "Moon River Chinese",
        "url": ""
      },
      {
        "name": "Nara Thai",
        "url": ""
      },
      {
        "name": "Curry Pot",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "culture-tour-in-srilanka",
      "ramayana-tour-in-srilanka"
    ]
  },
  {
    "slug": "ella",
    "name": "Ella “A Tranquil Mountain Escape in Sri Lanka”",
    "province": "Uva Province",
    "provinceShort": "Uva",
    "categorySlug": "uva-province",
    "countLabel": "12 attractions",
    "description": "Ella is a picturesque hill country destination known for its cool climate, lush tea plantations, and breathtaking views. Popular attractions like Nine Arches",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ella-banner-5.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ella-banner-5.webp",
    "metaChips": [
      "Ella, Sri Lanka",
      "Uva Province",
      "Adventurous City"
    ],
    "introParagraphs": [
      "Ella is a picturesque hill country destination known for its cool climate, lush tea plantations, and breathtaking views. Popular attractions like Nine Arches Bridge and Elle rock offer unforgettable experiences for hikers and nature lovers. With its relaxed vibe and stunning landscapes, Elle is a must visit spot for travelers seeking both adventure and tranquility."
    ],
    "features": [],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/experiance-header-mob-4-edited.jpg",
        "alt": "Nine Arch Bridge, Ella",
        "number": "01",
        "title": "Nine Arch Bridge",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mini-adams-peak-2-5-edited.jpg",
        "alt": "Mini Adams Peak, Ella",
        "number": "02",
        "title": "Mini Adams Peak",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Ella-Rock-how-to-hike-it-yourself-17-edited.jpg",
        "alt": "Ellerock, Ella",
        "number": "03",
        "title": "Ellerock",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ella-demodara-loop-sri-lanka-600nw-2233141953-edited.webp",
        "alt": "Rail Loop, Ella",
        "number": "04",
        "title": "Rail Loop",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ellewala-falls-edited.jpg",
        "alt": "Ellewala Falls, Ella",
        "number": "05",
        "title": "Ellewala Falls",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kital-edited.jpeg",
        "alt": "kithalelle Falls, Ella",
        "number": "06",
        "title": "kithalelle Falls",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Feature-Image-2.jpg",
        "alt": "Mega Zip Line, Ella",
        "number": "07",
        "title": "Mega Zip Line",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kombukara-Nature-Pool-and-Secret-Waterfall-1-1-edited.jpg",
        "alt": "Kombukara Nature Pool, Ella",
        "number": "08",
        "title": "Kombukara Nature Pool",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mahamewna-edited.jpeg",
        "alt": "Mahamewnawa Temple, Ella",
        "number": "09",
        "title": "Mahamewnawa Temple",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Dowa-Temple-Ella-edited.jpg",
        "alt": "Dowa Temple, Ella",
        "number": "10",
        "title": "Dowa Temple",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/06-A-TREK-01-edited.jpg",
        "alt": "Rawana Cave, Ella",
        "number": "11",
        "title": "Rawana Cave",
        "description": "Ella"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Nil-Diya-Pokuna-edited.jpg",
        "alt": "Blue Water Pond, Ella",
        "number": "12",
        "title": "Blue Water Pond",
        "description": "Ella"
      }
    ],
    "hotels": [
      {
        "name": "Barns Hills",
        "url": ""
      },
      {
        "name": "Ambiente",
        "url": ""
      },
      {
        "name": "Elle Edge Resort",
        "url": ""
      },
      {
        "name": "Heaven’s Edge",
        "url": ""
      },
      {
        "name": "Glorious Nature",
        "url": ""
      },
      {
        "name": "Elle River Front",
        "url": ""
      },
      {
        "name": "Arana Eco Lodge",
        "url": ""
      },
      {
        "name": "Mountain Heavens",
        "url": ""
      },
      {
        "name": "The Peak",
        "url": ""
      },
      {
        "name": "Mount Heaven",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Cafe Chill",
        "url": ""
      },
      {
        "name": "AK Ristoro Italian",
        "url": ""
      },
      {
        "name": "Chef House Italian Chinese",
        "url": ""
      },
      {
        "name": "Spice Elle",
        "url": ""
      },
      {
        "name": "Matey Hut",
        "url": ""
      },
      {
        "name": "Kauma’s Boat Kitchen",
        "url": ""
      },
      {
        "name": "Dosa Cafe",
        "url": ""
      },
      {
        "name": "Ellarch Pizza",
        "url": ""
      },
      {
        "name": "Barns By Starbeans",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "hillside-honeymoon-tour-in-srilanka",
      "culture-tour-in-srilanka",
      "adventure-tour-in-srilanka",
      "ramayana-tour-in-srilanka"
    ]
  },
  {
    "slug": "galle",
    "name": "Galle “A colonial Coastal Gem of Sri Lanka”",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "14 attractions",
    "description": "Galle is a historic coastal city renowned for its colonial charm and stunning seaside views. The iconic dutch Fort, a UNESCO World Heritage Site, features",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/Galle-Fort-Banner-1920x800-1.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/Galle-Fort-Banner-1920x800-1.webp",
    "metaChips": [
      "Galle, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Galle is a historic coastal city renowned for its colonial charm and stunning seaside views. The iconic dutch Fort, a UNESCO World Heritage Site, features cobblestone streets, boutique shops, and well-preserved Dutch-era architecture. With its blend of history, culture, and ocean beauty, Galle is a captivating destination for travelers."
    ],
    "features": [],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/fort-edited.jpeg",
        "alt": "Dutch Fort, Galle",
        "number": "01",
        "title": "Dutch Fort",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Dicr9DNXUAAXk1F-edited.jpg",
        "alt": "Cricket Stadium, Galle",
        "number": "02",
        "title": "Cricket Stadium",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Dalawella-Beach-edited.jpg",
        "alt": "Dalawella Beach, Galle",
        "number": "03",
        "title": "Dalawella Beach",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/jungle-edited.jpeg",
        "alt": "Jungle Beach, Galle",
        "number": "04",
        "title": "Jungle Beach",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/unawa-edited.jpeg",
        "alt": "Unawatuna Beach, Galle",
        "number": "05",
        "title": "Unawatuna Beach",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Talpe-beach-edited.jpg",
        "alt": "Thalpe Beach, Galle",
        "number": "06",
        "title": "Thalpe Beach",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/fishing-edited.jpeg",
        "alt": "Stilt Fishing, Galle",
        "number": "07",
        "title": "Stilt Fishing",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ezgif.com-gif-maker-1-edited.jpg",
        "alt": "Japanese Peace Pagoda, Galle",
        "number": "08",
        "title": "Japanese Peace Pagoda",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/frog-rock-1B231158697366-edited.webp",
        "alt": "Frog Rock, Galle",
        "number": "09",
        "title": "Frog Rock",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/under-edited.jpeg",
        "alt": "Underwater Museum, Galle",
        "number": "10",
        "title": "Underwater Museum",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/madol-duwa-koggala-is-edited.jpg",
        "alt": "Madol Duwa, Galle",
        "number": "11",
        "title": "Madol Duwa",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/11/1608307127-edited.webp",
        "alt": "Leisure world Water Park, Galle",
        "number": "12",
        "title": "Leisure world Water Park",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/sooriya-handlooms-edited.webp",
        "alt": "Handloom Mill, Galle",
        "number": "13",
        "title": "Handloom Mill",
        "description": "Galle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/tea-plantations-thumb-edited.webp",
        "alt": "Walahanduwa Tea Factory, Galle",
        "number": "14",
        "title": "Walahanduwa Tea Factory",
        "description": "Galle"
      }
    ],
    "hotels": [
      {
        "name": "Ocean Breeze",
        "url": ""
      },
      {
        "name": "Radisson Blue",
        "url": ""
      },
      {
        "name": "Hotel Herritage",
        "url": ""
      },
      {
        "name": "Closenberg",
        "url": ""
      },
      {
        "name": "The Entrance",
        "url": ""
      },
      {
        "name": "The Herritage",
        "url": ""
      },
      {
        "name": "Mango House",
        "url": ""
      },
      {
        "name": "Hotel Welteverden",
        "url": ""
      },
      {
        "name": "CocoBay Unawatuna",
        "url": ""
      },
      {
        "name": "Happy Beach",
        "url": ""
      },
      {
        "name": "Sea View Unawatuna",
        "url": ""
      },
      {
        "name": "Wave Beach Resort",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Bara Beach",
        "url": ""
      },
      {
        "name": "Ocean Bristo",
        "url": ""
      },
      {
        "name": "The Bungalow",
        "url": ""
      },
      {
        "name": "Kabala Sunset",
        "url": ""
      },
      {
        "name": "Happy Banana",
        "url": ""
      },
      {
        "name": "Indian Hut Dutch Fort",
        "url": ""
      },
      {
        "name": "Indian Hut",
        "url": ""
      },
      {
        "name": "Coconut Style",
        "url": ""
      },
      {
        "name": "Luuma Beach",
        "url": ""
      },
      {
        "name": "One Love",
        "url": ""
      },
      {
        "name": "Wasantha’s",
        "url": ""
      },
      {
        "name": "La Boheme Italian",
        "url": ""
      },
      {
        "name": "Taavetti Beach",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "beachside-honeymoon-tour-in-srilanka",
      "culture-tour-in-srilanka",
      "ramayana-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "hambantota",
    "name": "Hambantota “Sri Lanka’s Emerging Coastal Hub”",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "7 attractions",
    "description": "Hambantota is a rapidly developing coastal destination known for its natural beauty and wildlife attractions. Surrounded by national parks like Yala National",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/Hambantota-Banner3-2-6715.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/Hambantota-Banner3-2-6715.webp",
    "metaChips": [
      "Hambantota, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Hambantota is a rapidly developing coastal destination known for its natural beauty and wildlife attractions. Surrounded by national parks like Yala National Park and Bundala National Park, it offers excellent opportunities for safari adventures and birdwatching. With its peaceful beaches and growing infrastructure, Hambantota is an emerging hotspot for eco-tourism and exploration."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Bundala National Park Safari, A Bird Watcher’s Paradise",
        "paragraphs": [
          "Bundala National Park, located on Sri Lanka’s southern coast, is a UNESCO Biosphere Reserve with a rich birdlife of over 200 species. During the migratory season from September to March, thousands of birds flock to the park’s wetlands. The park also hosts elephants, spotted deer, crocodiles, and reptiles. The park’s unique mix of coastal lagoons, sand dunes, and scrub forests creates a picturesque backdrop for wildlife viewing. A guided jeep safari is the best way to explore the park, with morning and late afternoon safaris offering the best chances of spotting wildlife. Bundala promises an unforgettable adventure for nature lovers and bird watchers."
        ],
        "images": []
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/bird.jpeg",
        "alt": "Bird Research Center, Hambantota",
        "number": "01",
        "title": "Bird Research Center",
        "description": "Hambantota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/27bf83fb-2244-4a07-9ecc-e52f4057627d-edited.webp",
        "alt": "Ridiyagama Safari Park, Hambantota",
        "number": "02",
        "title": "Ridiyagama Safari Park",
        "description": "Hambantota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/12227629_10206829829278952_2915318017552258791_n-edited.webp",
        "alt": "Tomb Of Andare, Hambantota",
        "number": "03",
        "title": "Tomb Of Andare",
        "description": "Hambantota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/dry-edited.webp",
        "alt": "Dryzone Botanical Garden, Hambantota",
        "number": "04",
        "title": "Dryzone Botanical Garden",
        "description": "Hambantota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/image_8abe0984a5-edited.jpg",
        "alt": "Saltern, Hambantota",
        "number": "05",
        "title": "Saltern",
        "description": "Hambantota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mahapalessa-hot-springs-940_orig-edited.jpg",
        "alt": "Madunagala Hot Springs, Hambantota",
        "number": "06",
        "title": "Madunagala Hot Springs",
        "description": "Hambantota"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Martello-Tower-edited.jpg",
        "alt": "Martello Tower, Hambantota",
        "number": "07",
        "title": "Martello Tower",
        "description": "Hambantota"
      }
    ],
    "hotels": [
      {
        "name": "Ceylonta Beach Resort",
        "url": ""
      },
      {
        "name": "Ladja Beach Resort",
        "url": ""
      },
      {
        "name": "Shangri-La Hambantota",
        "url": ""
      },
      {
        "name": "The Peacock Beach Resort",
        "url": ""
      },
      {
        "name": "Bundala flamingo cottages",
        "url": ""
      },
      {
        "name": "Malala Retreat",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Nonagama Village",
        "url": ""
      },
      {
        "name": "Ulpotha Club house",
        "url": ""
      },
      {
        "name": "Lantharuma",
        "url": ""
      },
      {
        "name": "Batch Restaurant",
        "url": ""
      },
      {
        "name": "Saltern face Restaurant",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "ramayana-tour-in-srilanka"
    ]
  },
  {
    "slug": "haputale",
    "name": "Haputale “A Scenic Hill Town in Sri Lanka”",
    "province": "Uva Province",
    "provinceShort": "Uva",
    "categorySlug": "uva-province",
    "countLabel": "6 attractions",
    "description": "Haputale is a serene hill country retreat known for its misty landscapes, rolling tea plantations, and panoramic mountain views. Visitors can enjoy",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Haputale.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Haputale.webp",
    "metaChips": [
      "Haputale, Sri Lanka",
      "Uva Province",
      "Mountainous City"
    ],
    "introParagraphs": [
      "Haputale is a serene hill country retreat known for its misty landscapes, rolling tea plantations, and panoramic mountain views. Visitors can enjoy attractions like Lipton’s Seat and lush hiking trails that offer a peaceful escape into nature. its perfect for travelers seeking Tranquillity, scenic beauty, and a taste of Sri Lanka’s highland charm."
    ],
    "features": [],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/The-Enchanting-Beauty-of-Liptons-Seat-1080x628-1-edited.jpg",
        "alt": "Lipton’s Seat, Haputale",
        "number": "01",
        "title": "Lipton’s Seat",
        "description": "Haputale"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/WoC-Adisham-Bungalow-edited.png",
        "alt": "Adishm Bungalow, Haputale",
        "number": "02",
        "title": "Adishm Bungalow",
        "description": "Haputale"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/16495320872_2544326cb0_k_20190709065532-edited.jpg",
        "alt": "Thangamale Sanctuary, Haputale",
        "number": "03",
        "title": "Thangamale Sanctuary",
        "description": "Haputale"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Olive-view-point.jpeg",
        "alt": "Olive View Point, Haputale",
        "number": "04",
        "title": "Olive View Point",
        "description": "Haputale"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/prabawa-edited.jpeg",
        "alt": "Prabhawa View Point, Haputale",
        "number": "05",
        "title": "Prabhawa View Point",
        "description": "Haputale"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/lake-richmand-haputale-1-edited.jpg",
        "alt": "Lake Richmond, Haputale",
        "number": "06",
        "title": "Lake Richmond",
        "description": "Haputale"
      }
    ],
    "hotels": [
      {
        "name": "Vantage Hills",
        "url": ""
      },
      {
        "name": "Bloomsdale Country House",
        "url": ""
      },
      {
        "name": "Olympus Plaza",
        "url": ""
      },
      {
        "name": "Nilowin Glenanore",
        "url": ""
      },
      {
        "name": "Clouds Holiday",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Gemi Suwanda",
        "url": ""
      },
      {
        "name": "Mint Of the Mist",
        "url": ""
      },
      {
        "name": "Olive View Point",
        "url": ""
      },
      {
        "name": "Lettuce & Cabbage",
        "url": ""
      },
      {
        "name": "Cafe Polo",
        "url": ""
      },
      {
        "name": "Golden Hill Tea",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "adventure-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "hikkaduwa",
    "name": "Hikkaduwa “A Coral Paradise in Sri Lanka”",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "7 attractions",
    "description": "Hikkaduwa is a vibrant beach town famous for its golden sands, crystal clear waters, and lively surf culture. Visitors can enjoy Snorkelling over Colourful",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/hikkaduwa-beach-sri-lanka.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/hikkaduwa-beach-sri-lanka.jpg",
    "metaChips": [
      "Hikkaduwa, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Hikkaduwa is a vibrant beach town famous for its golden sands, crystal clear waters, and lively surf culture. Visitors can enjoy Snorkelling over Colourful coral reefs, exploring the Coral Sanctuary, or simply relaxing along the coastline. With its mix of adventure, nightlife, and seaside charm, its a top destination for beach lovers and water sports enthusiasts."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Diving and Snorkelling, Explore Sri Lanka’s Underwater Wonderland",
        "paragraphs": [
          "Hikkaduwa, a renowned destination on Sri Lanka’s southwest coast, offers an unforgettable underwater experience for divers of all levels. With clear turquoise waters and thriving coral reefs, it offers a kaleidoscope of marine life. Beginners can enjoy shallow Snorkelling along coral reefs, while certified divers can explore deeper waters and underwater landscapes at sites like Coral Gardens and Kirala Gala. Hikkaduwa places a strong emphasis on marine conservation and ecotourism, ensuring responsible diving and sustainable tourism practices to preserve the natural beauty for future generations."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Adang-Snorkel-1.jpeg",
            "alt": "diving snorkelling srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Coral-Reef-Hikkaduwa1.webp",
            "alt": "diving snorkelling srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Cover-for-Snorkeling-in-Hikkaduwa.webp",
            "alt": "diving snorkelling srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/01-1.jpg",
            "alt": "diving snorkelling srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/pigeon-island-what-to-do.jpg",
            "alt": "diving snorkelling srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/inora-travel-lanka-pigeon-island-5.jpg",
            "alt": "diving snorkelling srilanka"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Discover Meetiyagoda’s Moonstone Mine, Unveiling Sri Lanka’s Gemstone Treasure",
        "paragraphs": [
          "Meetiyagoda’s moonstone mine in Sri Lanka’s southern region is a must visit destination for gemstone enthusiasts and cultural explorers. The mine is known for its iridescent glow and spiritual significance, and visitors can witness the geological formation and craftsmanship of skilled artisans. The mine offers a wide selection of moonstone Jewellery and artifacts, and guided tours provide insights into the mining process and cultural significance of moonstones. The enchanting experience of nature’s beauty and cultural heritage makes a must visit destination for gemstone enthusiasts."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/img_5543e2-scaled.jpg",
            "alt": "moonstones srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/3.jpg",
            "alt": "moonstones srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/meetiyagoda-04-900_orig.jpg",
            "alt": "moonstones srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Moonstonecabochons.jpeg",
            "alt": "moonstones srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/DSC_2772-1-1024x614-1.jpg",
            "alt": "moonstones srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/DSC_2728-1-1024x576-1.jpg",
            "alt": "moonstones srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1605998165918.webp",
            "alt": "moonstones srilanka"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/hikkaduwa-beach-sri-lanka-edited.jpg",
        "alt": "Hikkaduwa Beach, Hikkaduwa",
        "number": "01",
        "title": "Hikkaduwa Beach",
        "description": "Hikkaduwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/8-hikkaduwa-sri-lanka-turtle-beach-boats-boote-strand-palmen-things-to-do-sehenswurdigkeiten-beaches-strande.jpeg",
        "alt": "Turtle Beach, Hikkaduwa",
        "number": "02",
        "title": "Turtle Beach",
        "description": "Hikkaduwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nari-edited.jpeg",
        "alt": "Narigama Beach, Hikkaduwa",
        "number": "03",
        "title": "Narigama Beach",
        "description": "Hikkaduwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/360_F_489486816_CoiBK4ypUOxXsBihX7OnJdj0zOfeDrDy-edited.jpg",
        "alt": "Seenigama Temple, Hikkaduwa",
        "number": "04",
        "title": "Seenigama Temple",
        "description": "Hikkaduwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/1603-TsunamimemorialnearHikkaduwaSriLanka16Jun2019-3-edited.jpg",
        "alt": "Tsunami Monument, Hikkaduwa",
        "number": "05",
        "title": "Tsunami Monument",
        "description": "Hikkaduwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/TsunamiMemorial-3-edited.jpg",
        "alt": "Tsunami Temple, Hikkaduwa",
        "number": "06",
        "title": "Tsunami Temple",
        "description": "Hikkaduwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/LK94008328-02-E-edited.jpeg",
        "alt": "Tsunami Museum, Hikkaduwa",
        "number": "07",
        "title": "Tsunami Museum",
        "description": "Hikkaduwa"
      }
    ],
    "hotels": [
      {
        "name": "Hikkaduwa Beach",
        "url": ""
      },
      {
        "name": "Garden On Sea",
        "url": ""
      },
      {
        "name": "Coral Sands",
        "url": ""
      },
      {
        "name": "Hikka Tranz",
        "url": ""
      },
      {
        "name": "Coral Rock By Bansie",
        "url": ""
      },
      {
        "name": "Hikka Sandy Pearl",
        "url": ""
      },
      {
        "name": "Nippon Villa Beach",
        "url": ""
      },
      {
        "name": "Hikka Regent",
        "url": ""
      },
      {
        "name": "At Ease",
        "url": ""
      },
      {
        "name": "Sapphire Seas",
        "url": ""
      },
      {
        "name": "Ocean Edge",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Home Grown Rice & Curry",
        "url": ""
      },
      {
        "name": "Top Secret",
        "url": ""
      },
      {
        "name": "Mama’s",
        "url": ""
      },
      {
        "name": "Mambo’s",
        "url": ""
      },
      {
        "name": "Spaghetti Italian",
        "url": ""
      },
      {
        "name": "Canal View",
        "url": ""
      },
      {
        "name": "Salty Swamis",
        "url": ""
      },
      {
        "name": "Differente Italiyan",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "beachside-honeymoon-tour-in-srilanka"
    ]
  },
  {
    "slug": "jaffna",
    "name": "Jaffna “A Cultural and Historical Gem in Northern Sri Lanka”",
    "province": "Northern Province",
    "provinceShort": "Northern",
    "categorySlug": "northern-province",
    "countLabel": "12 attractions",
    "description": "Jaffna is a culturally rich city known for its unique Tamil heritage, historic temples, and vibrant local markets. Visitors can explore landmarks like the",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Jaffna-Fort-Sri-Lanka-1-edited.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Jaffna-Fort-Sri-Lanka-1-edited.jpg",
    "metaChips": [
      "Jaffna, Sri Lanka",
      "Northern Province",
      "Cultural City"
    ],
    "introParagraphs": [
      "Jaffna is a culturally rich city known for its unique Tamil heritage, historic temples, and vibrant local markets. Visitors can explore landmarks like the dutch Fort and the scenic Nagadeepa temple. With its distinctive cuisine, Colourful festivals, and coastal beauty, and it offers an authentic and memorable Sri Lankan experience."
    ],
    "features": [],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/IMG_8446-edited.jpg",
        "alt": "Nagadeepa Temple, Jaffna",
        "number": "01",
        "title": "Nagadeepa Temple",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kadurugoda-vihara-03.jpg",
        "alt": "Kadurugoda Temple, Jaffna",
        "number": "02",
        "title": "Kadurugoda Temple",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Jaffna-Fort-Sri-Lanka-1-edited.jpg",
        "alt": "Dutch Fort, Jaffna",
        "number": "03",
        "title": "Dutch Fort",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/2-Fort-Hammenhiel-Jaffna-Sri-Lanka-edited.jpg",
        "alt": "Hammenhiel Fort, Jaffna",
        "number": "04",
        "title": "Hammenhiel Fort",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/2019-12-18-edited.jpg",
        "alt": "Casurina Beach, Jaffna",
        "number": "05",
        "title": "Casurina Beach",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/20190611_aralipointmonument_10-edited.jpg",
        "alt": "Arali Point, Jaffna",
        "number": "06",
        "title": "Arali Point",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Elephant-Pass-War-Memorial-edited.jpg",
        "alt": "Elephantpass War Monument, Jaffna",
        "number": "07",
        "title": "Elephantpass War Monument",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Keerimalai-Hot-Springs-1-edited.jpg",
        "alt": "Keeramalei Hot Springs, Jaffna",
        "number": "08",
        "title": "Keeramalei Hot Springs",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/market-edited.jpeg",
        "alt": "General Market, Jaffna",
        "number": "09",
        "title": "General Market",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Nallur_Kandasamy_front_entrance-edited.jpg",
        "alt": "Nallur Kovil, Jaffna",
        "number": "10",
        "title": "Nallur Kovil",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nilavarai-well-edited.jpg",
        "alt": "Bottomless Well, Jaffna",
        "number": "11",
        "title": "Bottomless Well",
        "description": "Jaffna"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pedro-edited.jpeg",
        "alt": "Point Pedro, Jaffna",
        "number": "12",
        "title": "Point Pedro",
        "description": "Jaffna"
      }
    ],
    "hotels": [
      {
        "name": "Green Grass",
        "url": ""
      },
      {
        "name": "Jetwing Jaffna",
        "url": ""
      },
      {
        "name": "The Thinnai",
        "url": ""
      },
      {
        "name": "Gate Trees",
        "url": ""
      },
      {
        "name": "Jafna Herritage",
        "url": ""
      },
      {
        "name": "Thambu Illam",
        "url": ""
      },
      {
        "name": "Village Hotel",
        "url": ""
      },
      {
        "name": "Flamingo Villa",
        "url": ""
      },
      {
        "name": "Pebbles Beach SLAF",
        "url": ""
      },
      {
        "name": "Thalsewana Army Resort",
        "url": ""
      },
      {
        "name": "Fox Resort",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Rio Ice Cream",
        "url": ""
      },
      {
        "name": "Mangos Indian Veg",
        "url": ""
      },
      {
        "name": "Peninsula Jetwing",
        "url": ""
      },
      {
        "name": "Akshathai/Nila",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "ramayana-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "kalpitiya",
    "name": "Kalpitiya “The Kite Surf Paradise in Sri Lanka”",
    "province": "Northern Province",
    "provinceShort": "Northern",
    "categorySlug": "northern-province",
    "countLabel": "8 attractions",
    "description": "Kalpitiya is a stunning coastal destination on Sri Lanka’s northwest peninsula, known for its long sandy beaches, calm lagoons, and rich marine life. It’s a",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kalpitiya-Dri-Lanka-drone-scaled-1.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kalpitiya-Dri-Lanka-drone-scaled-1.webp",
    "metaChips": [
      "Kalpitiya, Sri Lanka",
      "Northern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Kalpitiya is a stunning coastal destination on Sri Lanka’s northwest peninsula, known for its long sandy beaches, calm lagoons, and rich marine life. It’s a top spot for adventure seekers, offering world class kitesurfing, dolphin watching excursions, and snorkeling at the nearby Bar Reef Marine Sanctuary. With its peaceful atmosphere, striking natural beauty, and range of water based activities, and is perfect for nature lovers and thrill seekers alike."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Kite Surfing In Kalpitiya",
        "paragraphs": [
          "Kalpitiya, Sri Lanka’s top water sports destination, offers an adrenaline rush for kitesurfers. With ideal wind conditions and stunning coastal beauty, it’s the perfect setting for beginners and seasoned surfers. The lagoon and coastal waters provide a thrilling environment for beginners, while the open sea offers challenging waves for advanced surfers. The stunning landscapes, including golden beaches, palm trees, and marine life, add to the excitement. Professional instructors and top-notch equipment rentals ensure a safe and exhilarating kite surfing experience. Kalpitiya is a must-visit for water sports lovers, offering a blend of wind, waves, and natural beauty for an unforgettable adventure."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kite-surfing.jpg",
            "alt": "kite-surfing-kalpitiya-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image-2.jpg",
            "alt": "kite-surfing-kalpitiya-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/KIteboarding_Zanzibar.jpg",
            "alt": "kite-surfing-kalpitiya-srilanka"
          },
          {
            "src": "https://4melankatours.com/wp-content/uploads/2024/05/kitesurf-koh-samui.avif",
            "alt": "kite-surfing-kalpitiya-srilanka"
          },
          {
            "src": "https://4melankatours.com/wp-content/uploads/2024/05/0fc69089794ddc6014a87f0828f0d704.avif",
            "alt": "kite-surfing-kalpitiya-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1_AWCYtU1Uuay6cwK2AbAc0g.jpg",
            "alt": "kite-surfing-kalpitiya-srilanka"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-dolphins-watching.webp",
        "alt": "Dolphin Watching, Kalpitiya",
        "number": "01",
        "title": "Dolphin Watching",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/1596701992_shutterstock_77584978-edited-scaled.webp",
        "alt": "Diving & Snokerling, Kalpitiya",
        "number": "02",
        "title": "Diving & Snokerling",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kalpitiya-edited.jpg",
        "alt": "Kalpitiya Beach, Kalpitiya",
        "number": "03",
        "title": "Kalpitiya Beach",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/depositphotos_134770618-stock-photo-mannar-donkey-in-kalpitiya-sri-edited.webp",
        "alt": "Donkey Point, Kalpitiya",
        "number": "04",
        "title": "Donkey Point",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Annes-National-Shrine-edited.jpg",
        "alt": "Thalawila Church, Kalpitiya",
        "number": "05",
        "title": "Thalawila Church",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/image_e5f6c46d03-edited.jpg",
        "alt": "Dutch Port, Kalpitiya",
        "number": "06",
        "title": "Dutch Port",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/image-3-edited.jpg",
        "alt": "Colombo Face, Kalpitiya",
        "number": "07",
        "title": "Colombo Face",
        "description": "Kalpitiya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/klpitiya-lagoon-edited.jpg",
        "alt": "Lagoon Safari, Kalpitiya",
        "number": "08",
        "title": "Lagoon Safari",
        "description": "Kalpitiya"
      }
    ],
    "hotels": [
      {
        "name": "Ruwala Resort",
        "url": ""
      },
      {
        "name": "Elements Beach",
        "url": ""
      },
      {
        "name": "Blue Lagoon Resort",
        "url": ""
      },
      {
        "name": "Capital Wind",
        "url": ""
      },
      {
        "name": "De Silva Resort",
        "url": ""
      },
      {
        "name": "Ocean View Resort",
        "url": ""
      },
      {
        "name": "Hiru Resort",
        "url": ""
      },
      {
        "name": "Kite Surfing Lanka",
        "url": ""
      },
      {
        "name": "Kitelantis",
        "url": ""
      },
      {
        "name": "Valampuri Kite Resort",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Ocean Breeze",
        "url": ""
      },
      {
        "name": "The Rascals Italian",
        "url": ""
      },
      {
        "name": "Atara Lagoon",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "kandy",
    "name": "Kandy “The Cultural Heart of Sri Lanka”",
    "province": "Central Province",
    "provinceShort": "Central",
    "categorySlug": "central-province",
    "countLabel": "12 attractions",
    "description": "Kandy is a scenic hill city renowned for its rich cultural heritage and lush surroundings. Famous for the sacred Temple of the Tooth Relic. Kandy offers",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kandy-Sri-Lanka-_1_.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Kandy-Sri-Lanka-_1_.webp",
    "metaChips": [
      "Kandy, Sri Lanka",
      "Central Province",
      "Cultural City"
    ],
    "introParagraphs": [
      "Kandy is a scenic hill city renowned for its rich cultural heritage and lush surroundings. Famous for the sacred Temple of the Tooth Relic. Kandy offers visitors a blend of history, spirituality, and natural beauty with its picturesque lake, botanical gardens, and vibrant cultural festivals. It is a must-visit destination for travelers seeking both tradition and tranquility."
    ],
    "features": [
      {
        "kicker": "Discover",
        "title": "Sri Lanka’s Gifts and Souvenirs, A Treasure Trove for Foreign Travellers",
        "paragraphs": [
          "Sri Lanka, a beautiful and culturally rich island, offers a variety of gifts and souvenirs for foreign travelers. The vibrant markets and boutiques in the country are filled with exquisite items that capture the essence of Sri Lankan artistry. Silks and batiks are popular souvenirs, showcasing the island’s rich textile heritage. Wood carvings and traditional masks reflect Sri Lanka’s exceptional craftsmanship and cultural traditions. Handmade crafts like pottery, jewellery, and woven baskets provide a tangible connection to the island’s traditions and make for cherished souvenirs. Bringing home a piece of Sri Lanka means carrying a story of its rich culture and artistry."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/8713528824_626454ebe9_b.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/alluring-ornaments.jpeg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_beb1c3155e.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/lesterlost-travel-handmade-crafts-sri-lanka-wood-carving-buddha-statues-1.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/travel-melodies-demon-masks-as-souvenirs-from-sri-lanka.jpg",
            "alt": "demon-masks-as-souvenirs-from-sri-lanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-handicrafts.jpg",
            "alt": "sri-lanka-handicrafts"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Sri Lanka’s Gems and Jewellery, A Sparkling Legacy",
        "paragraphs": [
          "Discover the enchanting world of Sri Lanka’s gems and jewellery, renowned for their exceptional quality and timeless beauty. As one of the world’s leading gem producers, Sri Lanka offers a dazzling array of precious stones, including sapphires, rubies, and emeralds, each uniquely sourced from the island’s rich earth. Our exquisite jewellery collections are crafted by skilled artisans who blend traditional techniques with contemporary designs, creating stunning pieces that capture the essence of Sri Lankan elegance. Whether you seek a statement piece or a delicate accessory, our gems and jewellery make for perfect keepsakes and gifts, allowing you to carry a piece of Sri Lanka’s sparkling legacy with you. Explore our collections and find your own slice of paradise, elegantly immortalised in our fine jewellery."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2015.12.14-29-408-Sri-Lanka-Ratnapura-1.jpg",
            "alt": "gem mining srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/MG_8185_DxO.jpg",
            "alt": "gem mining srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-gem-industry-image-three-1-op.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gem-jewellery-exports-sri-lanka-l.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gems.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gemstone-4.gif",
            "alt": "srilanka-gem-industry"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Traditional Ayurvedic Treatments",
        "paragraphs": [
          "Ayurvedic treatments are a holistic wellness practice rooted in Sri Lanka’s heritage. Ayurveda, meaning “the science of life,” balances the mind, body, and spirit through natural therapies and herbal remedies. These treatments are tailored to individual needs, including massages, herbal steam baths, and detoxifying rituals. Shirodhara is a calming treatment, while Panchakarma is a comprehensive detoxification program. Herbal steam baths and Abhyanga are therapeutic full-body massages. These treatments are performed in serene settings, allowing individuals to unwind and reconnect with nature. Ayurvedic treatments offer a transformative journey towards holistic health and wellness, providing relief from stress, chronic ailments, and relaxation."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Massageuntensilien.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ayurveda-and-panchakarma.jpg",
            "alt": "Ayurvedic Therapies in Srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ayurveda-steam-bath-640x360-1.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/benifits_of_Ayurveda_massage.webp",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/massage_Large.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/HELA.webp",
            "alt": "ceylon herbs"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Healing-and-Harmony-with-Ayurveda-Therapies.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/temple-sacred-tooth-relic-kandy-sri-lanka-edited.jpg",
        "alt": "Temple Tooth, Kandy",
        "number": "01",
        "title": "Temple Tooth",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Botanical_Garden_of_Peradeniya_03-scaled.jpg",
        "alt": "Royal Botanical Garden, Kandy",
        "number": "02",
        "title": "Royal Botanical Garden",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Bahirawakanda-Temple-edited.jpg",
        "alt": "Bahirawakanda Temple, Kandy",
        "number": "03",
        "title": "Bahirawakanda Temple",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Nelligala-International-Buddhist-Center-edited.jpg",
        "alt": "Nelligala Temple, Kandy",
        "number": "04",
        "title": "Nelligala Temple",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kandy-lake-kandy-unesco-world-heritage-site-central-province-sri-lanka-asia-RHPLF17307-edited.jpg",
        "alt": "Kandy Lake, Kandy",
        "number": "05",
        "title": "Kandy Lake",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/2a14ecdd3002ddc5caffeb945d70b154-edited.png",
        "alt": "Kandyan Dance, Kandy",
        "number": "06",
        "title": "Kandyan Dance",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/EYtsAp_X0AAsapi-edited.jpg",
        "alt": "View Point, Kandy",
        "number": "07",
        "title": "View Point",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/uda-edited.jpeg",
        "alt": "Udwaththakele Sanctuary, Kandy",
        "number": "08",
        "title": "Udwaththakele Sanctuary",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/GIRAGAMA-TEA-FACTORY-1-edited.png",
        "alt": "Giragama Tea Factory, Kandy",
        "number": "09",
        "title": "Giragama Tea Factory",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/cover-for-Ceylon-Tea-Museum-edited.webp",
        "alt": "Tea Museum, Kandy",
        "number": "10",
        "title": "Tea Museum",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Hanthana-Mountain-Range-1-edited.jpg",
        "alt": "Hanthana Mountain Range, Kandy",
        "number": "11",
        "title": "Hanthana Mountain Range",
        "description": "Kandy"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/2023-03-23-edited.webp",
        "alt": "Bird Park, Kandy",
        "number": "12",
        "title": "Bird Park",
        "description": "Kandy"
      }
    ],
    "hotels": [
      {
        "name": "King Of Kandy",
        "url": ""
      },
      {
        "name": "Cinnamon Citadel",
        "url": ""
      },
      {
        "name": "Lakewood Residence",
        "url": ""
      },
      {
        "name": "Hotel Tourmaline",
        "url": ""
      },
      {
        "name": "Kandyan Villa",
        "url": ""
      },
      {
        "name": "Oak Ray Regency",
        "url": ""
      },
      {
        "name": "Skyloft Kandy",
        "url": ""
      },
      {
        "name": "View 360",
        "url": ""
      },
      {
        "name": "Grand Kandyan",
        "url": ""
      },
      {
        "name": "Amaya Hills",
        "url": ""
      },
      {
        "name": "Golden Crown",
        "url": ""
      },
      {
        "name": "Heaven Seven",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Jaide Regency",
        "url": ""
      },
      {
        "name": "Senani By OakRay",
        "url": ""
      },
      {
        "name": "Dindigul Thalappakatti",
        "url": ""
      },
      {
        "name": "Balaji Pure Vegetarian",
        "url": ""
      },
      {
        "name": "Sri Krishna Dosai",
        "url": ""
      },
      {
        "name": "Indian Summer",
        "url": ""
      },
      {
        "name": "Duriyanzila",
        "url": ""
      },
      {
        "name": "Premium Outlet Cafe",
        "url": ""
      },
      {
        "name": "Idikada Village Ambuluwawa",
        "url": ""
      },
      {
        "name": "Honey Pot",
        "url": ""
      },
      {
        "name": "Fire Plate",
        "url": ""
      },
      {
        "name": "Theva Cuisine",
        "url": ""
      },
      {
        "name": "Brix Golden Crown",
        "url": ""
      },
      {
        "name": "Tavern 29 Rooftop Bar",
        "url": ""
      },
      {
        "name": "Cocoba Pub",
        "url": ""
      },
      {
        "name": "Bommu Rooftop Radissons",
        "url": ""
      },
      {
        "name": "Sky Lounge",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "heritage-tour-in-srilanka",
      "hillside-honeymoon-tour-in-srilanka",
      "leisure-tour-in-srilanka",
      "culture-tour-in-srilanka"
    ]
  },
  {
    "slug": "kitulgala",
    "name": "Kitulgala",
    "province": "Sabaragamuwa Province",
    "provinceShort": "Sabaragamuwa",
    "categorySlug": "sabaragamuwa-province",
    "countLabel": "4 attractions",
    "description": "Kitulgala is a scenic adventure destination famous for its lush rainforests and the Kelani River. Known as the birthplace of Sri Lanka’s white water rafting",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/kitulgala.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Kitulgala-rafting-Colombo-shore-excursions.jpg",
    "metaChips": [
      "Kitulgala, Sri Lanka",
      "Sabaragamuwa Province",
      "Adventurouse City"
    ],
    "introParagraphs": [
      "Kitulgala is a scenic adventure destination famous for its lush rainforests and the Kelani River. Known as the birthplace of Sri Lanka’s white water rafting scene, it also offers trekking, birdwatching, and nature excursions. With its blend of thrilling activities and serene natural beauty, and perfect for adventure seekers and nature lovers alike."
    ],
    "features": [
      {
        "kicker": "Discover",
        "title": "White Water Rafting",
        "paragraphs": [
          "Kitulgala, Sri Lanka’s premier adventure destination, offers an exhilarating white water rafting experience on the Kelani River, renowned for its stunning scenery and challenging rapids. The journey spans approximately 5 Kilometres, offering a blend of adrenaline-pumping action and serene paddling. Under the guidance of experienced instructors, you’ll receive a safety briefing and all necessary equipment. The journey passes by picturesque landscapes, including rainforests, cliffs, and natural pools. Kitulgala’s white water rafting is not just about the thrill; it’s an opportunity to immerse yourself in the natural beauty and vibrant ecosystem of the region. After the adventure, explore nearby waterfalls, birdwatch, or take a dip in the river’s refreshing waters."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/a3.jpg",
            "alt": "water-rafting-kitulgala-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Water_rafting.jpg",
            "alt": "water-rafting-kitulgala-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/81.jpg",
            "alt": "water-rafting-kitulgala-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/activity-canyoning-1024x651.jpg",
            "alt": "water-rafting-kitulgala-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/e4-1.jpg",
            "alt": "water-rafting-kitulgala-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Kitulgala-rafting-Colombo-shore-excursions.jpg",
            "alt": "water-rafting-kitulgala-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/11111.jpeg",
            "alt": "water-rafting-kitulgala-srilanka"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/77-edited.png",
        "alt": "Makandawa Forest Reserve, Kitulgala",
        "number": "01",
        "title": "Makandawa Forest Reserve",
        "description": "Kitulgala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/LK831D0100-04-E-1280-720-edited.jpg",
        "alt": "Belilena Cave, Kitulgala",
        "number": "02",
        "title": "Belilena Cave",
        "description": "Kitulgala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/suspension-bridge-edited.jpg",
        "alt": "Suspention Bridge, Kitulgala",
        "number": "03",
        "title": "Suspention Bridge",
        "description": "Kitulgala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/cycling1-edited.webp",
        "alt": "MTB Park, Kitulgala",
        "number": "04",
        "title": "MTB Park",
        "description": "Kitulgala"
      }
    ],
    "hotels": [
      {
        "name": "Plantation",
        "url": ""
      },
      {
        "name": "The Tree House",
        "url": ""
      },
      {
        "name": "Wanakaset",
        "url": ""
      },
      {
        "name": "Paradise Garden",
        "url": ""
      },
      {
        "name": "Forest Edge",
        "url": ""
      },
      {
        "name": "Kitulgala Ebony",
        "url": ""
      },
      {
        "name": "Kithulvilla",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Plantation Rest",
        "url": ""
      },
      {
        "name": "Balancio",
        "url": ""
      },
      {
        "name": "Jungle River Cafe",
        "url": ""
      },
      {
        "name": "Kithulvilla",
        "url": ""
      },
      {
        "name": "Wanawadula",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "nature-tour-in-srilanka"
    ]
  },
  {
    "slug": "mahiyanganaya",
    "name": "Mahiyanganaya “A Historical and Cultural Treasure in Sri Lanka”",
    "province": "Uva Province",
    "provinceShort": "Uva",
    "categorySlug": "uva-province",
    "countLabel": "10 attractions",
    "description": "Mahiyanganaya is a tranquil destination known for its scenic landscapes, sacred sites, and cultural heritage of indigenous people. It is home to the revered",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/18-Bend-Road-edited.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/18-Bend-Road-edited.jpg",
    "metaChips": [
      "Mahiyanganaya, Sri Lanka",
      "Uva Province",
      "Mountainous City"
    ],
    "introParagraphs": [
      "Mahiyanganaya is a tranquil destination known for its scenic landscapes, sacred sites, and cultural heritage of indigenous people. It is home to the revered muthiyanganaya temple and offers visitors peaceful rivers, lush paddy fields, and opportunities for nature walks. Perfect for travelers seeking spirituality, serenity, and a glimpse into rural Sri Lankan life."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Maduruoya National Park, Mahiyanganaya",
        "paragraphs": [
          "MaduruOya National Park in eastern Sri Lanka is a hidden gem known for its rich biodiversity and stunning landscapes. The park is perfect for nature enthusiasts and adventure seekers, offering a unique opportunity to explore Sri Lanka’s untouched wilderness. The park is home to a diverse array of wildlife, including elephants, leopards, sloth bears, sambar deer, water buffalo, and reptiles like crocodiles and water monitors. Over 100 bird species, including the Sri Lanka junglefowl, painted stork, kingfishers, and eagles, can be observed in the park’s diverse habitats. The park’s landscapes include dense forests, open grasslands, and serene water bodies, including the expansive MaduruOya Reservoir. Guided by knowledgeable experts, visitors can learn about local ecology, wildlife Behaviours, and conservation efforts. also holds significant cultural heritage, with ancient ruins and rock inscriptions scattered throughout the park."
        ],
        "images": []
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sora.jpeg",
        "alt": "Sorabora Tank, Mahiyanganaya",
        "number": "01",
        "title": "Sorabora Tank",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/280201725-edited.jpg",
        "alt": "Mapakada Tank, Mahiyanganaya",
        "number": "02",
        "title": "Mapakada Tank",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/18-Bend-Road-edited.jpg",
        "alt": "18 Bends Road, Mahiyanganaya",
        "number": "03",
        "title": "18 Bends Road",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Besama-Natural-Pool-Welanpela-Exterior-edited.jpeg",
        "alt": "Besama Nature Pool, Mahiyanganaya",
        "number": "04",
        "title": "Besama Nature Pool",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/img4.jpg",
        "alt": "Vadda Village, Mahiyanganaya",
        "number": "05",
        "title": "Vadda Village",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kaluwa-edited.webp",
        "alt": "Kaluwa Wetunu Falls, Mahiyanganaya",
        "number": "06",
        "title": "Kaluwa Wetunu Falls",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Rathna-Ella-Fall-edited.jpg",
        "alt": "Rathna Falls, Mahiyanganaya",
        "number": "07",
        "title": "Rathna Falls",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/seethakotuwa5-edited.jpg.webp",
        "alt": "Seetakotuwa Ella, Mahiyanganaya",
        "number": "08",
        "title": "Seetakotuwa Ella",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/LSL_B2_Muthiyangana-Raja-Maha-Vihara_800x1000-edited.jpg",
        "alt": "Muthiyangana Temple, Mahiyanganaya",
        "number": "09",
        "title": "Muthiyangana Temple",
        "description": "Mahiyanganaya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/willuwa-copy-edited.webp",
        "alt": "Willuwa Lake & Temple, Mahiyanganaya",
        "number": "10",
        "title": "Willuwa Lake & Temple",
        "description": "Mahiyanganaya"
      }
    ],
    "hotels": [
      {
        "name": "Mapakada Village",
        "url": ""
      },
      {
        "name": "Mounts Edge Regency",
        "url": ""
      },
      {
        "name": "Kevans Casa",
        "url": ""
      },
      {
        "name": "New Rest House",
        "url": ""
      },
      {
        "name": "Tikiri Villa",
        "url": ""
      },
      {
        "name": "National Holiday",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "688",
        "url": ""
      },
      {
        "name": "Adaviya",
        "url": ""
      },
      {
        "name": "Cafe D",
        "url": ""
      },
      {
        "name": "Merger King",
        "url": ""
      },
      {
        "name": "Samagi",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "mannar",
    "name": "Mannar “A Historical and Natural Gem in Sri Lanka”",
    "province": "Northern Province",
    "provinceShort": "Northern",
    "categorySlug": "northern-province",
    "countLabel": "12 attractions",
    "description": "Mannar is a serene coastal city known for its unique landscapes, historic sites, and abundant birdlife. Famous for the Adam’s Bridge (Rama’s Bridge) and the",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mannar-island-1.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mannar-island-1.webp",
    "metaChips": [
      "Mannar, Sri Lanka",
      "Northern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Mannar is a serene coastal city known for its unique landscapes, historic sites, and abundant birdlife. Famous for the Adam’s Bridge (Rama’s Bridge) and the nearby sanctuaries, and it offers opportunities for wildlife watching, exploring ancient forts, and enjoying quiet beaches. It’s an ideal destination for travelers seeking history, nature, and Tranquillity."
    ],
    "features": [],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/horizon-far-away-edited.jpg",
        "alt": "Yodhawewa Tank, Mannar",
        "number": "01",
        "title": "Yodhawewa Tank",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/02.jpg",
        "alt": "Dutch Fort, Mannar",
        "number": "02",
        "title": "Dutch Fort",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/488-edited.jpeg",
        "alt": "Madu Church, Mannar",
        "number": "03",
        "title": "Madu Church",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ac5b696c-6345-4ca7-af9d-8a13dc33164887091f1645d938ad30_31294170688_d48520901b_b.jpg",
        "alt": "Baobab Tree, Mannar",
        "number": "04",
        "title": "Baobab Tree",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Donkey-Clinic-and-Education-Center-edited.jpg",
        "alt": "Donkey Clinic, Mannar",
        "number": "05",
        "title": "Donkey Clinic",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/doric-edited.jpeg",
        "alt": "Doric Bungalow, Mannar",
        "number": "06",
        "title": "Doric Bungalow",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/mannar.jpeg",
        "alt": "Bird Sanctuary, Mannar",
        "number": "07",
        "title": "Bird Sanctuary",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/FKle0eHX0AASxn2-edited.jpeg",
        "alt": "Bird Watching Tower, Mannar",
        "number": "08",
        "title": "Bird Watching Tower",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/keeri.jpeg",
        "alt": "Keeri Beach, Mannar",
        "number": "09",
        "title": "Keeri Beach",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mannar03-edited.jpg",
        "alt": "Islet Path, Mannar",
        "number": "10",
        "title": "Islet Path",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/mannar-02-900_orig-edited.jpg",
        "alt": "Light House, Mannar",
        "number": "11",
        "title": "Light House",
        "description": "Mannar"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/depositphotos_134770618-stock-photo-mannar-donkey-in-kalpitiya-sri-edited-1.webp",
        "alt": "Donkey Farm, Mannar",
        "number": "12",
        "title": "Donkey Farm",
        "description": "Mannar"
      }
    ],
    "hotels": [
      {
        "name": "Pesalai Beach View",
        "url": ""
      },
      {
        "name": "Shell Coast Resort",
        "url": ""
      },
      {
        "name": "Coccos Garden",
        "url": ""
      },
      {
        "name": "Victory’s Residence",
        "url": ""
      },
      {
        "name": "Hotel Agape",
        "url": ""
      },
      {
        "name": "Rawana Cottage",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Shri Rudram",
        "url": ""
      },
      {
        "name": "Palmyrah House",
        "url": ""
      },
      {
        "name": "BN",
        "url": ""
      },
      {
        "name": "Ammasi",
        "url": ""
      },
      {
        "name": "Aaha",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "culture-tour-in-srilanka",
      "ramayana-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "mirissa",
    "name": "Mirissa “A Tropical Paradise on the Southern Coast of Sri Lanka”",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "9 attractions",
    "description": "Mirissa is a stunning beach destination known for its golden sands, turquoise waters, and vibrant nightlife. Famous for whale watching, surfing, and relaxing",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/17cb571e-b0645bd4-mirissa-whale-watching_850x460_acf_cropped.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/17cb571e-b0645bd4-mirissa-whale-watching_850x460_acf_cropped.jpg",
    "metaChips": [
      "Mirissa, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Mirissa is a stunning beach destination known for its golden sands, turquoise waters, and vibrant nightlife. Famous for whale watching, surfing, and relaxing by the shore, it also offers charming cafes and scenic viewpoints. and it is the perfect getaway for beach lovers, adventure seekers, and those looking to unwind in a tropical paradise."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Whales and Dolphins Watching, Sri Lanka’s Premier Marine Adventure",
        "paragraphs": [
          "Mirissa, a popular destination for whales and dolphins in Sri Lanka, offers an unforgettable experience for nature enthusiasts, photographers, and those seeking a thrilling ocean adventure. Nestled along the island’s southern coast is known for its stunning blue whales, sperm whales, fin whales, and orcas. Experienced guides provide insightful commentary and responsible viewing practices, respecting the natural Behaviour of these magnificent creatures. Dolphin watching is also a thrilling experience, with acrobatic spinner dolphins leaping and spinning alongside your boat. The best time for whale watching and dolphin watching in Mirissa is from November to April, during the peak season. Eco friendly tours prioritize marine conservation and education, ensuring a rewarding and unforgettable experience for visitors."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/7c.jpg",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/145.jpg",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/whale-watching-in-Mirissa-scaled-1.webp",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/whales-1149978_1920-1024x685-1.jpg",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/whale-3.jpg",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Mirissa-Whale-Watching-Udawalwe-15-650x470-1.jpg",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/r0-0-1200-600-w1200-h678-fmax.jpg",
            "alt": "whales-dolphines-watching-mirissa-srilanka"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Wind Surfing Experience Thrills on Sri Lanka’s Southern Coast",
        "paragraphs": [
          "mirissa offers an unforgettable wind surfing adventure for beginners and experienced surfers. With consistent winds throughout the year and steady breezes from the southwest monsoon from November to April, Mirissa provides clear, warm waters and gentle waves. Experienced instructors offer lessons for all skill levels, covering balance, technique, and safety measures. Equipment rentals are available for top-quality boards and sails. Mirissa’s stunning coastline with golden sands and turquoise waters provides a tranquil yet adventurous atmosphere. The vibrant wind surfing community invites enthusiasts to share tips, stories, and passion for the sport. Join local surf clubs or participate in events and competitions to showcase the skills and camaraderie of surfers from around the world. Mirissa is a Favourite destination for surfers seeking wind, waves, and adventure in Sri Lanka’s tropical paradise."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/653x490.jpg",
            "alt": "wind-surfing-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1587681914.jpg",
            "alt": "wind surf srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/caption-4.jpg",
            "alt": "wind-surfing-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/caption-5.jpg",
            "alt": "wind-surfing-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/planning-dream-trip-indonesia-bali1-2.jpg",
            "alt": "wind-surfing-srilanka"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/COCONUTHILL-10-of-12-scaled-689x517-1.jpg",
        "alt": "Coconut Tree Hills, Mirissa",
        "number": "01",
        "title": "Coconut Tree Hills",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Mirissa-beach-edited.jpg",
        "alt": "Beach, Mirissa",
        "number": "02",
        "title": "Beach",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/parrot-rock-from-mirissa-edited.jpg",
        "alt": "Parrot Rock, Mirissa",
        "number": "03",
        "title": "Parrot Rock",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/secret-edited.webp",
        "alt": "Srecret Beach, Mirissa",
        "number": "04",
        "title": "Srecret Beach",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/parawi.jpeg",
        "alt": "Paravi Duwa, Mirissa",
        "number": "05",
        "title": "Paravi Duwa",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/8c-edited.jpg",
        "alt": "Diving & Snorkeling, Mirissa",
        "number": "06",
        "title": "Diving & Snorkeling",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Polhena-Beach-Matara-edited.jpg",
        "alt": "Polhena Beach, Mirissa",
        "number": "07",
        "title": "Polhena Beach",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/spa-edited.jpeg",
        "alt": "Ayurvedic Spa, Mirissa",
        "number": "08",
        "title": "Ayurvedic Spa",
        "description": "Mirissa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/white-tea-edited.webp",
        "alt": "Hadungoda White Tea Plantation, Mirissa",
        "number": "09",
        "title": "Hadungoda White Tea Plantation",
        "description": "Mirissa"
      }
    ],
    "hotels": [
      {
        "name": "Marriot Resort",
        "url": ""
      },
      {
        "name": "Randiya Seaview",
        "url": ""
      },
      {
        "name": "Turtle Bay Beach",
        "url": ""
      },
      {
        "name": "Sea World",
        "url": ""
      },
      {
        "name": "Villa Athulya",
        "url": ""
      },
      {
        "name": "Palace",
        "url": ""
      },
      {
        "name": "Malima Weligambay",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Petti Petti",
        "url": ""
      },
      {
        "name": "Secret Beach Bar",
        "url": ""
      },
      {
        "name": "Tiki Bar",
        "url": ""
      },
      {
        "name": "Fish Point",
        "url": ""
      },
      {
        "name": "Catamaran",
        "url": ""
      },
      {
        "name": "Kurumba Bay",
        "url": ""
      },
      {
        "name": "Eye Beach",
        "url": ""
      },
      {
        "name": "W&D",
        "url": ""
      },
      {
        "name": "Curry Gedara",
        "url": ""
      },
      {
        "name": "Bar Rumba",
        "url": ""
      },
      {
        "name": "Margherita Italian",
        "url": ""
      },
      {
        "name": "Tandoori Chicken",
        "url": ""
      },
      {
        "name": "Brizo Beach",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "beachside-honeymoon-tour-in-srilanka",
      "adventure-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "negombo",
    "name": "Negombo",
    "province": "Western Province",
    "provinceShort": "Western",
    "categorySlug": "western-province",
    "countLabel": "8 attractions",
    "description": "Negombo is a lively coastal city known for its golden beaches, bustling fish markets, and rich colonial heritage. Located close to the international airport,",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Neg-1.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Neg-1.jpg",
    "metaChips": [
      "Negombo, Sri Lanka",
      "Western Province",
      "Coastal City"
    ],
    "introParagraphs": [],
    "features": [
      {
        "kicker": "Explore",
        "title": "Negombo “The Little Rome of Sri Lanka”",
        "paragraphs": [
          "Negombo is a lively coastal city known for its golden beaches, bustling fish markets, and rich colonial heritage. Located close to the international airport, it offers easy access to boat rides along the Lagoon and fresh seafood experiences. With its mix of relaxation, culture, and seaside charm, and its an ideal first stop for travelers exploring Sri Lanka."
        ],
        "images": []
      },
      {
        "kicker": "Discover",
        "title": "Lagoon Boat Safari, Explore Sri Lanka’s Mangroves Sanctuary",
        "paragraphs": [
          "negombo Lagoon is a serene coastal sanctuary in Sri Lanka, known for its rich biodiversity and scenic beauty. Visitors can explore its winding waterways, surrounded by lush mangroves, birdlife, and traditional fishing villages. The lagoon offers a peaceful setting for nature enthusiasts and photographers. Species like kingfishers, herons, and egrets nest in the mangroves, while exotic water monitors and reptiles bask in the sun. Explore local fishing communities and learn about their traditional methods. Various safari experiences, including guided boat tours and kayaking excursions, cater to different interests. Negombo Lagoon promises an enriching and tranquil experience, perfect for relaxation, wildlife encounters, and cultural immersion."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Boat-Ride-3.jpg",
            "alt": "Boat-Ride-negombo-lagoon"
          },
          {
            "src": "https://4melankatours.com/wp-content/uploads/2024/05/b55849b3-803a-4c9e-b15e-4dfc04671030.avif",
            "alt": "Boat-Ride-negombo-lagoon"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/0355w12000940qqiq0FA5.jpg",
            "alt": "Boat-Ride-negombo-lagoon"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/824d5b58-3fed-4bf8-9b68-f4bead1cfb50.jpg",
            "alt": "Boat-Ride-negombo-lagoon"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1487244007gallery31.jpg",
            "alt": "Boat-Ride-negombo-lagoon"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/boat-safari-at-the-negombo.jpg",
            "alt": "Boat-Ride-negombo-lagoon"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/aguru-edited.jpeg",
        "alt": "Agurukaramulla Temple, Negombo",
        "number": "01",
        "title": "Agurukaramulla Temple",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/image_5c65623deb-edited.jpg",
        "alt": "Katuwapitiya Church, Negombo",
        "number": "02",
        "title": "Katuwapitiya Church",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/snow.webp",
        "alt": "Lady Snow Church, Negombo",
        "number": "03",
        "title": "Lady Snow Church",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/beach-edited.jpeg",
        "alt": "Negombo Beach, Negombo",
        "number": "04",
        "title": "Negombo Beach",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/hamilton.jpeg",
        "alt": "Hamilton Canal, Negombo",
        "number": "05",
        "title": "Hamilton Canal",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/negombo-fish-market.jpg",
        "alt": "Fish Market, Negombo",
        "number": "06",
        "title": "Fish Market",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/waterpark-edited.jpeg",
        "alt": "Water Park, Negombo",
        "number": "07",
        "title": "Water Park",
        "description": "Negombo"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/serenity-massage-edited.webp",
        "alt": "Ayurvedic Spa, Negombo",
        "number": "08",
        "title": "Ayurvedic Spa",
        "description": "Negombo"
      }
    ],
    "hotels": [
      {
        "name": "Amagi Aria",
        "url": ""
      },
      {
        "name": "Jetwing Blue",
        "url": ""
      },
      {
        "name": "Camelot",
        "url": ""
      },
      {
        "name": "Ayur Ayur",
        "url": ""
      },
      {
        "name": "Pledge Scape",
        "url": ""
      },
      {
        "name": "Earl’s Regent",
        "url": ""
      },
      {
        "name": "Golden Star",
        "url": ""
      },
      {
        "name": "Merryland Beach Villa",
        "url": ""
      },
      {
        "name": "Hotel J",
        "url": ""
      },
      {
        "name": "Topaz",
        "url": ""
      },
      {
        "name": "Jasmin Villa Ayurveda",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Maantraa",
        "url": ""
      },
      {
        "name": "Honey Beach",
        "url": ""
      },
      {
        "name": "Dutch Trails",
        "url": ""
      },
      {
        "name": "Tuk Tuk Wine & Dine",
        "url": ""
      },
      {
        "name": "King Coconut",
        "url": ""
      },
      {
        "name": "La Pizzeria",
        "url": ""
      },
      {
        "name": "Shri Raghavaas",
        "url": ""
      },
      {
        "name": "Lords",
        "url": ""
      },
      {
        "name": "Bacco Italian",
        "url": ""
      },
      {
        "name": "Rodeo Pub",
        "url": ""
      },
      {
        "name": "Leonardo Italian",
        "url": ""
      },
      {
        "name": "Ocean Floor",
        "url": ""
      },
      {
        "name": "Jazz Lagoon",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "culture-tour-in-srilanka",
      "adventure-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "nuwaraeliya",
    "name": "Nuwaraeliya “The Little England of Sri Lanka”",
    "province": "Central Province",
    "provinceShort": "Central",
    "categorySlug": "central-province",
    "countLabel": "16 attractions",
    "description": "Nuwaraeliya is a picturesque hill station known as “Little England” for its colonial charm, cool climate, and lush tea plantations. Visitors can enjoy scenic",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/140958556Nuwara_Eliya_Gregory_Lake-edited.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/140958556Nuwara_Eliya_Gregory_Lake-edited.jpg",
    "metaChips": [
      "Nuwaraeliya, Sri Lanka",
      "Central Province",
      "Mountainous City"
    ],
    "introParagraphs": [
      "Nuwaraeliya is a picturesque hill station known as “Little England” for its colonial charm, cool climate, and lush tea plantations. Visitors can enjoy scenic landscapes, waterfalls, and attractions like the Gregory Lake and vibrant flower gardens. Nuwaraeliya is perfect for travelers seeking relaxation, nature, and a refreshing escape into Sri Lanka’s highlands."
    ],
    "features": [
      {
        "kicker": "Discover",
        "title": "Ceylon Tea Plantation in Nuwaraeliya",
        "paragraphs": [
          "Visit Sri Lanka’s tea plantations, where centuries-old tea cultivation techniques are perfected. The picturesque highlands offer stunning views of rolling hills, mountains, and valleys. Discover the history and process of tea production, including the meticulous plucking of tea leaves, withering, rolling, fermenting, and drying. Visit a tea factory to witness the machinery and craftsmanship involved in producing various types of tea, including white and black. Engage with knowledgeable guides to learn about different grades, flavors, and factors contributing to Ceylon tea’s unique taste and aroma. Stroll through scenic gardens and capture stunning photographs of emerald green landscapes. Enjoy a freshly brewed Ceylon tea at an estate tea house, Savouring the rich flavors and aromatic nuances of one of the world’s finest teas."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/LABOOKELLIE-TEA-FACTORY-min.jpg",
            "alt": "Ceylon Tea Plantation in Nuwaraeliya"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1_J7a01-pOMXHYjKfyWPpIOQ.jpg",
            "alt": "tea-plantation-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1333687-nuwara-eliya-tea-estate.webp",
            "alt": "tea-plantation-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_536f2ca27e.webp",
            "alt": "tea-plantation-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/nuwara-eliya-tea-estate.jpg",
            "alt": "tea-plantation-srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/808_main.jpg",
            "alt": "tea-plantation-srilanka"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/140958556Nuwara_Eliya_Gregory_Lake-edited.jpg",
        "alt": "Gregory Lake & Park, Nuwaraeliya",
        "number": "01",
        "title": "Gregory Lake & Park",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/boat-ride-in-gregory-lake-edited.jpg",
        "alt": "Boat Ride, Nuwaraeliya",
        "number": "02",
        "title": "Boat Ride",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/galways.jpeg",
        "alt": "Galways Land Park, Nuwaraeliya",
        "number": "03",
        "title": "Galways Land Park",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Nuwara_Eliya_Post_Office_2-edited.jpg",
        "alt": "Pink Post Office, Nuwaraeliya",
        "number": "04",
        "title": "Pink Post Office",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Strawberry-Fields-002-credit-Twenty20-edited.jpg",
        "alt": "Strawberry Farm, Nuwaraeliya",
        "number": "05",
        "title": "Strawberry Farm",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/moon-edited.jpeg",
        "alt": "Moon Plains, Nuwaraeliya",
        "number": "06",
        "title": "Moon Plains",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/piduru-edited.webp",
        "alt": "Piduruthalagala, Nuwaraeliya",
        "number": "07",
        "title": "Piduruthalagala",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Seetha-Amman-Temple-edited.jpg",
        "alt": "Seetha Temple, Nuwaraeliya",
        "number": "08",
        "title": "Seetha Temple",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/139349460lovers-leap-waterfall.jpg",
        "alt": "Lovers Leap Falls, Nuwaraeliya",
        "number": "09",
        "title": "Lovers Leap Falls",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/bomburu-ella-dscf4066-1200_orig-edited.jpg",
        "alt": "Bomburu Falls, Nuwaraeliya",
        "number": "10",
        "title": "Bomburu Falls",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/devon-waterfalls-in-sri-lanka-s-central-highlands-940_orig-edited.jpg",
        "alt": "Devon Falls, Nuwaraeliya",
        "number": "11",
        "title": "Devon Falls",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/St.-Clair-Major-waterfall-edited.jpg",
        "alt": "St’ Clairs Falls, Nuwaraeliya",
        "number": "12",
        "title": "St’ Clairs Falls",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/140958692Nuwara_Eliya_Harton_Plains-edited.jpg",
        "alt": "Horton Plains, Nuwaraeliya",
        "number": "13",
        "title": "Horton Plains",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Hike-to-Single-Tree-Hills-in-Nuwara-Eliya-edited.jpg",
        "alt": "Single Tree Hills, Nuwaraeliya",
        "number": "14",
        "title": "Single Tree Hills",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nuwara-eliya-and-tea-edited.jpg",
        "alt": "Ambewela Farms, Nuwaraeliya",
        "number": "15",
        "title": "Ambewela Farms",
        "description": "Nuwaraeliya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nanu-edited.jpeg",
        "alt": "Nanuoya Falls, Nuwaraeliya",
        "number": "16",
        "title": "Nanuoya Falls",
        "description": "Nuwaraeliya"
      }
    ],
    "hotels": [
      {
        "name": "St’ Andrews",
        "url": ""
      },
      {
        "name": "Villa Moonlight",
        "url": ""
      },
      {
        "name": "Araliya Green",
        "url": ""
      },
      {
        "name": "The Grand",
        "url": ""
      },
      {
        "name": "Tea Plant",
        "url": ""
      },
      {
        "name": "Pensive Villa",
        "url": ""
      },
      {
        "name": "Gregorys Bungalow",
        "url": ""
      },
      {
        "name": "Grosvenor Hotel",
        "url": ""
      },
      {
        "name": "Santuary Hills",
        "url": ""
      },
      {
        "name": "Galaxy Grand",
        "url": ""
      },
      {
        "name": "Royal Pearl Hills",
        "url": ""
      },
      {
        "name": "Moon Plains Apartments",
        "url": ""
      },
      {
        "name": "Hotel Grand Turf",
        "url": ""
      },
      {
        "name": "Forest Hills",
        "url": ""
      },
      {
        "name": "Blackberry Cottage",
        "url": ""
      },
      {
        "name": "Single Tree Mount",
        "url": ""
      },
      {
        "name": "Blue Meadows",
        "url": ""
      },
      {
        "name": "Plazzo Lake Gregory",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Grand Indian",
        "url": ""
      },
      {
        "name": "Ambal’s Pure Vegetarian",
        "url": ""
      },
      {
        "name": "Indian summer",
        "url": ""
      },
      {
        "name": "Natural View Point",
        "url": ""
      },
      {
        "name": "Ramboda Inn",
        "url": ""
      },
      {
        "name": "Themparadu",
        "url": ""
      },
      {
        "name": "Araliya Food Court",
        "url": ""
      },
      {
        "name": "Restaurant Guru",
        "url": ""
      },
      {
        "name": "Mount Frost",
        "url": ""
      },
      {
        "name": "Matara Ambula",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "hillside-honeymoon-tour-in-srilanka",
      "leisure-tour-in-srilanka",
      "culture-tour-in-srilanka",
      "adventure-tour-in-srilanka"
    ]
  },
  {
    "slug": "pinnawala",
    "name": "Pinnawala “Home to Sri Lanka’s Elephants”",
    "province": "Sabaragamuwa Province",
    "provinceShort": "Sabaragamuwa",
    "categorySlug": "sabaragamuwa-province",
    "countLabel": "4 attractions",
    "description": "Pinnawala is famous for its iconic Elephant Orphanage, where visitors can watch elephants being cared for and bathed in the river. Surrounded by lush",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pinnawala-1.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pinnawala-1.webp",
    "metaChips": [
      "Pinnawala, Sri Lanka",
      "Sabaragamuwa Province",
      "Adventurouse City"
    ],
    "introParagraphs": [
      "Pinnawala is famous for its iconic Elephant Orphanage, where visitors can watch elephants being cared for and bathed in the river. Surrounded by lush greenery, and offers a unique wildlife experience and is a must visit destination for families and animal lovers exploring Sri Lanka."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Elephant Activities at Elephant orphanage",
        "paragraphs": [
          "Pinnawala Elephant Orphanage in Sri Lanka offers a unique opportunity for tourists to interact with elephants in a nurturing environment. The orphanage provides a guided tour, highlighting its mission to rescue, rehabilitate, and care for orphaned and injured elephants. Visitors can participate in feeding sessions, witnessing daily bathing rituals, and participate in educational programs and interactive sessions. The orphanage also offers observation points where elephants can roam freely and engage in their natural Behaviours. The orphanage ensures all activities are conducted ethically, Prioritising the well being and natural behaviour of the elephants. By visiting Pinnawala, visitors not only enjoy a unique and memorable experience but also support vital conservation efforts. By creating lasting memories and contributing to the welfare of Sri Lanka’s beloved elephants, visitors can create lasting memories and contribute to the welfare of these majestic creatures."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/LK601P2900-01-E-1280-720.webp",
            "alt": "Elephant Activities at Elephant orphanage"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/7477172314_f00fd90791_b.jpg",
            "alt": "Elephant Activities at Elephant orphanage"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/7477175844_9757f52a25.jpg",
            "alt": "Elephant Activities at Elephant orphanage"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ed4a7e5752a4f8c047335032fa65b151.jpg",
            "alt": "Elephant Activities at Elephant orphanage"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/feeding-an-elephant-in-sri-lanka-scaled.jpg",
            "alt": "Elephant Activities at Elephant orphanage"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/LK71400100-05-E.webp",
            "alt": "Elephant Activities at Elephant orphanage"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/e9dkd5z0yxrocktlxkyp.jpg",
            "alt": "Elephant Activities at Elephant orphanage"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/house-in-ape-gama-edited.webp",
        "alt": "Old Vllage, Pinnawala",
        "number": "01",
        "title": "Old Vllage",
        "description": "Pinnawala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/image0296-edited.webp",
        "alt": "Balana Fort, Pinnawala",
        "number": "02",
        "title": "Balana Fort",
        "description": "Pinnawala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Kurulu-Kele.jpg",
        "alt": "Kurulukele Bird Sanctuary, Pinnawala",
        "number": "03",
        "title": "Kurulukele Bird Sanctuary",
        "description": "Pinnawala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pinnawala-zoo-edited.jpg",
        "alt": "Open Zoo, Pinnawala",
        "number": "04",
        "title": "Open Zoo",
        "description": "Pinnawala"
      }
    ],
    "hotels": [
      {
        "name": "Villa Pinnawala",
        "url": ""
      },
      {
        "name": "Elephant Bay",
        "url": ""
      },
      {
        "name": "Aarya Hotel",
        "url": ""
      },
      {
        "name": "Hotel Ralidiya",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Chingari",
        "url": ""
      },
      {
        "name": "Grand Royal",
        "url": ""
      },
      {
        "name": "Alimankada",
        "url": ""
      },
      {
        "name": "Wadiya",
        "url": ""
      },
      {
        "name": "Relidiya Cafe",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "nature-tour-in-srilanka"
    ]
  },
  {
    "slug": "polonnaruwa",
    "name": "Polonnaruwa “The Ancient City of Kings”",
    "province": "North Central Province",
    "provinceShort": "North Central",
    "categorySlug": "north-central-province",
    "countLabel": "23 attractions",
    "description": "Polonnaruwa is an ancient city known as the 2nd kindom of sri lanka and UNESCO World Heritage Site, renowned for its well preserved ruins and historic",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/UNESCO-World-Heritage-Site-Brahmanic-Monuments-Polonnaruwa-Sri-Lanka-1-1.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/UNESCO-World-Heritage-Site-Brahmanic-Monuments-Polonnaruwa-Sri-Lanka-1-1.webp",
    "metaChips": [
      "Polonnaruwa, Sri Lanka",
      "North Central Province",
      "Archeological City"
    ],
    "introParagraphs": [
      "Polonnaruwa is an ancient city known as the 2nd kindom of sri lanka and UNESCO World Heritage Site, renowned for its well preserved ruins and historic monuments. Visitors can explore impressive structures like the Gal Vihara and ancient palaces, reflecting the grandeur of Sri Lanka’s medieval civilization. With its rich history and cultural significance, Polonnaruwa is a must visit destination for history enthusiasts and heritage travelers."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Polonnaruwa Archaeological City",
        "paragraphs": [
          "Polonnaruwa, Sri Lanka’s medieval capital and a UNESCO World Heritage site, is a fascinating destination for history enthusiasts, cultural explorers, and those seeking inspiration. The site boasts well-preserved ruins and archaeological sites, including the Royal Palace Complex, which was once King Parakramabahu I’s residence. Visitors can explore the Audience Hall and the Kumara Pokuna, the iconic Royal Bath. The Gal Vihara, a masterpiece of ancient Sinhalese sculpture, showcases the artistic and spiritual zenith of Polonnaruwa’s golden age. The sacred Quadrangle houses important religious monuments, while the Parakrama Samudra, a man-made reservoir, reflects King Parakramabahu I’s vision of sustainable agriculture and water management."
        ],
        "images": []
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/5984625_orig.jpg",
        "alt": "Gal Vihara, Polonnaruwa",
        "number": "01",
        "title": "Gal Vihara",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1-6.jpeg",
        "alt": "Lankathilaka Image House, Polonnaruwa",
        "number": "02",
        "title": "Lankathilaka Image House",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/92507517-nelum-pokuna-lotus-pond-are-the-baths-in-polonnaruwa-ancient-city-sri-lanka-1.jpg",
        "alt": "Lotus Pond, Polonnaruwa",
        "number": "03",
        "title": "Lotus Pond",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/11427361644_dcbbe092de_b-1.jpg",
        "alt": "Parakramabahu Statue, Polonnaruwa",
        "number": "04",
        "title": "Parakramabahu Statue",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Council-Chamber-of-King-Parakramabahu-1.jpg",
        "alt": "Council Chamber, Polonnaruwa",
        "number": "05",
        "title": "Council Chamber",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gal.jpeg",
        "alt": "Stone Book, Polonnaruwa",
        "number": "06",
        "title": "Stone Book",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/TLClk_Rankoth-Vihara-CSP8282775-1-1.jpg",
        "alt": "Rankoth Wehera, Polonnaruwa",
        "number": "07",
        "title": "Rankoth Wehera",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/thiwanka-pilimage-1.jpeg",
        "alt": "Thiwanka Image House, Polonnaruwa",
        "number": "08",
        "title": "Thiwanka Image House",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Satmahal-Prasada-Polonnaruwa-2-1.webp",
        "alt": "Sath Mahal Prasada, Polonnaruwa",
        "number": "09",
        "title": "Sath Mahal Prasada",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Pothgul-Vehera-Polonnaruwa-1.jpg",
        "alt": "Pothgul Wehera, Polonnaruwa",
        "number": "10",
        "title": "Pothgul Wehera",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Pabalu-Vehera-Polonnaruwa-6-1.webp",
        "alt": "Pabalu Wehera, Polonnaruwa",
        "number": "11",
        "title": "Pabalu Wehera",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/NissankalataMandapayacanstockphoto14905583-1-1.jpg",
        "alt": "Nissanka Latha Mandapaya, Polonnaruwa",
        "number": "12",
        "title": "Nissanka Latha Mandapaya",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/watadage-1.jpeg",
        "alt": "Watadage, Polonnaruwa",
        "number": "13",
        "title": "Watadage",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/09/TLClk_Royal-Palace-Parak-CSP4492114-1.webp",
        "alt": "Royal Palace, Polonnaruwa",
        "number": "14",
        "title": "Royal Palace",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2026/05/Kumara-pond.jpg",
        "alt": "Kumara Pond, Polonnaruwa",
        "number": "15",
        "title": "Kumara Pond",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/parakrama-edited.jpg",
        "alt": "Parakrama Samudra, Polonnaruwa",
        "number": "16",
        "title": "Parakrama Samudra",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_d22eb107ab.jpg",
        "alt": "Parakrama Samudra Spillway, Polonnaruwa",
        "number": "17",
        "title": "Parakrama Samudra Spillway",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/p1000704.webp",
        "alt": "Angammedilla Anicut, Polonnaruwa",
        "number": "18",
        "title": "Angammedilla Anicut",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/giritale-resevoir-940_1_orig-edited-1.jpg",
        "alt": "Girithale Lake, Polonnaruwa",
        "number": "19",
        "title": "Girithale Lake",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/polonnaruwa-parakrama-1.webp",
        "alt": "Parakrama Samudra Boat Ride, Polonnaruwa",
        "number": "20",
        "title": "Parakrama Samudra Boat Ride",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/Buddha-Statue-Giritale-Tank-Sri-Lanka-edited-1.jpg",
        "alt": "Girithale Buddha Statue, Polonnaruwa",
        "number": "21",
        "title": "Girithale Buddha Statue",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/Manampitiya-Bridge-edited.webp",
        "alt": "Manampitiya Bridge, Polonnaruwa",
        "number": "22",
        "title": "Manampitiya Bridge",
        "description": "Polonnaruwa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/Ancient-Technology-Museum-edited.webp",
        "alt": "Technology Meuseum, Polonnaruwa",
        "number": "23",
        "title": "Technology Meuseum",
        "description": "Polonnaruwa"
      }
    ],
    "hotels": [
      {
        "name": "Ekho Lake House",
        "url": ""
      },
      {
        "name": "Deer Park",
        "url": ""
      },
      {
        "name": "Sudu Araliya",
        "url": ""
      },
      {
        "name": "Miracle Resort",
        "url": ""
      },
      {
        "name": "Hotel Lake Park",
        "url": ""
      },
      {
        "name": "Hotel Mahanuge",
        "url": ""
      },
      {
        "name": "Honey Tree",
        "url": ""
      },
      {
        "name": "Hotel Viverra",
        "url": ""
      },
      {
        "name": "Agbo Hotel",
        "url": ""
      },
      {
        "name": "The Lake",
        "url": ""
      },
      {
        "name": "Thidas Arana",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Jaga Food",
        "url": ""
      },
      {
        "name": "Saruketha",
        "url": ""
      },
      {
        "name": "Priyamali Gedara",
        "url": ""
      },
      {
        "name": "Gemi Gedara",
        "url": ""
      },
      {
        "name": "Pabalu Mandapa",
        "url": ""
      },
      {
        "name": "Rajadhani Indian",
        "url": ""
      },
      {
        "name": "Thidas Arana",
        "url": ""
      },
      {
        "name": "Ambarawa",
        "url": ""
      },
      {
        "name": "Kawalan",
        "url": ""
      },
      {
        "name": "Waandora Gedara Giritale",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "heritage-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "riverston",
    "name": "Riverston “Misty Highlands of Sri Lanka”",
    "province": "Central Province",
    "provinceShort": "Central",
    "categorySlug": "central-province",
    "countLabel": "8 attractions",
    "description": "Riverston is a scenic hill country destination known for its misty mountains, lush forests, and breathtaking viewpoints. Ideal for hiking and nature",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Riverstone.jpeg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Riverstone.jpeg",
    "metaChips": [
      "Riverston, Sri Lanka",
      "Central Province",
      "Adventurouse City"
    ],
    "introParagraphs": [
      "Riverston is a scenic hill country destination known for its misty mountains, lush forests, and breathtaking viewpoints. Ideal for hiking and nature exploration, it offers stunning panoramas, waterfalls, and serene landscapes. its perfect for travelers seeking adventure, Tranquillity, and a close connection with Sri Lanka’s highland beauty."
    ],
    "features": [
      {
        "kicker": "Discover",
        "title": "Hiking and Trekking in pitawala pathana, Sri Lanka",
        "paragraphs": [
          "this is a hidden gem in Sri Lanka, offers a unique hiking and trekking experience. Peak hike takes you through lush landscapes and verdant forests, offering panoramic views of the Knuckles Mountain Range and distant waterfalls. The Sera Ella Falls trail is moderately challenging, with stunning views of the waterfalls. The Pitawala Pathana grasslands provide a diverse range of flora and fauna, with sweeping views of the “Mini World’s End” cliff drop. The Knuckles Conservation Forest, a UNESCO World Heritage site, offers a challenging trek through rich biodiversity, rare bird species, endemic plants, and pristine rivers. Riverston’s rugged terrain and dense forest canopy create an immersive trekking experience. It’s an ideal destination for outdoor enthusiasts seeking adventure and a deep connection with nature."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/tourismsrilanka-hiking-trekking-in-sri-lanka-tourism.jpg",
            "alt": "Trekking_Tour_in_Kandy_Knuckles"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1-1.jpg",
            "alt": "riverston-pitawala-treck"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/trekking3_637425423968969156.jpg",
            "alt": "Trekking_Tour_in_Kandy_Knuckles"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1487827857knokels_traking_1.jpg",
            "alt": "riverston-pitawala-treck"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/trekking-sinharaja-1024x768-1.jpg",
            "alt": "trekking-sinharaja"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Trekking_Tour_in_Kandy_Knuckles_Feachured_60b26beeb3-scaled.jpg",
            "alt": "Trekking_Tour_in_Kandy_Knuckles"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Peregrine_Adventures-sri-lanka_group-hiking-landscape.jpg",
            "alt": "Trekking_Tour_in_Kandy_Knuckles"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/trekking1_637425423968031811.jpg",
            "alt": "Trekking_Tour_in_Kandy_Knuckles"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/riverston-hiking-9537-e1507788213753.jpg",
            "alt": "Trekking_Tour_in_Kandy_Knuckles"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Riverstone.jpeg",
        "alt": "View Point, Riverston",
        "number": "01",
        "title": "View Point",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/pitawala-pathana0-6-edited.jpeg",
        "alt": "Pitawala Pathana, Riverston",
        "number": "02",
        "title": "Pitawala Pathana",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/sera-ella-falls-edited.jpg",
        "alt": "Sera Ella Fall, Riverston",
        "number": "03",
        "title": "Sera Ella Fall",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Bambarakiri-Ella-waterfall-edited.jpg",
        "alt": "Bambarakiri Ella Fall, Riverston",
        "number": "04",
        "title": "Bambarakiri Ella Fall",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/klebokka.jpeg",
        "alt": "Kelebokka View Point, Riverston",
        "number": "05",
        "title": "Kelebokka View Point",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Pitawala-mini-end-edited.jpeg",
        "alt": "Mini Worlds End, Riverston",
        "number": "06",
        "title": "Mini Worlds End",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/manigala-edited.jpeg",
        "alt": "Manigala, Riverston",
        "number": "07",
        "title": "Manigala",
        "description": "Riverston"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/du.jpeg",
        "alt": "Duwili Ella Falls, Riverston",
        "number": "08",
        "title": "Duwili Ella Falls",
        "description": "Riverston"
      }
    ],
    "hotels": [
      {
        "name": "Knuckles Reach",
        "url": ""
      },
      {
        "name": "Riverston Grand",
        "url": ""
      },
      {
        "name": "Knuckles Travelodge",
        "url": ""
      },
      {
        "name": "Alki Bungalows",
        "url": ""
      },
      {
        "name": "Manigala Holiday Resort",
        "url": ""
      },
      {
        "name": "Mountain Villa",
        "url": ""
      },
      {
        "name": "Crystal Riverston Deck",
        "url": ""
      },
      {
        "name": "Hideaway",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Ranweli",
        "url": ""
      },
      {
        "name": "Riverstone Mankada",
        "url": ""
      },
      {
        "name": "Isiwara",
        "url": ""
      },
      {
        "name": "Gemi Kamatha",
        "url": ""
      },
      {
        "name": "Kiyaso",
        "url": ""
      },
      {
        "name": "Yummy In Tummy Kapolla",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "sigiriya",
    "name": "Sigiriya “The Lion Rock kingdom of Sri Lanka”",
    "province": "Central Province",
    "provinceShort": "Central",
    "categorySlug": "central-province",
    "countLabel": "8 attractions",
    "description": "Sigiriya is home to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site famed for its ancient frescoes, impressive gardens, and remarkable",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/sigiriya.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Beauty_of_Sigiriya_by_Binuka-edited.jpg",
    "metaChips": [
      "Sigiriya, Sri Lanka",
      "Central Province",
      "Archeological City"
    ],
    "introParagraphs": [
      "Sigiriya is home to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site famed for its ancient frescoes, impressive gardens, and remarkable history. Surrounded by lush landscapes, Sigiriya offers visitors a unique blend of adventure, culture, and breathtaking views, making it a must visit destination in Sri Lanka."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Minneriya, Kaudulla or Eco National Park Safari",
        "paragraphs": [
          "Experience an unforgettable wildlife adventure through Minneriya, Kaudulla, and Eco National Parks in Sri Lanka. Minneriya National Park is known for its “Gathering” and is home to one of the world’s largest elephant congregations. The park also hosts a variety of wildlife, including leopards, sloth bears, deer, and bird species. Kaudulla National Park, located near Minneriya, attracts large herds of elephants during the dry season. Its diverse ecosystem supports other animals like sambar deer, wild boar, and birds. Eco National Park, also known as Hurulu Eco Park, offers a more intimate and tranquil experience with dense forests and grasslands. It is renowned for its conservation efforts and eco-tourism, ensuring sustainable practices and environmental protection. Each park offers unique charm and wildlife encounters, making it a must-do adventure for nature lovers."
        ],
        "images": []
      },
      {
        "kicker": "Discover",
        "title": "Traditional Ayurvedic Treatments",
        "paragraphs": [
          "Ayurvedic treatments are a holistic wellness practice rooted in Sri Lanka’s heritage. Ayurveda, meaning “the science of life,” balances the mind, body, and spirit through natural therapies and herbal remedies. These treatments are tailored to individual needs, including massages, herbal steam baths, and detoxifying rituals. Shirodhara is a calming treatment, while Panchakarma is a comprehensive detoxification program. Herbal steam baths and Abhyanga are therapeutic full-body massages. These treatments are performed in serene settings, allowing individuals to unwind and reconnect with nature. Ayurvedic treatments offer a transformative journey towards holistic health and wellness, providing relief from stress, chronic ailments, and relaxation."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Massageuntensilien.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ayurveda-and-panchakarma.jpg",
            "alt": "Ayurvedic Therapies in Srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ayurveda-steam-bath-640x360-1.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/benifits_of_Ayurveda_massage.webp",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/massage_Large.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/HELA.webp",
            "alt": "ceylon herbs"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Healing-and-Harmony-with-Ayurveda-Therapies.jpg",
            "alt": "ayurveda-and-panchakarma srilanka"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Sri Lanka’s Gems and Jewellery, A Sparkling Legacy",
        "paragraphs": [
          "Discover the enchanting world of Sri Lanka’s gems and jewellery, renowned for their exceptional quality and timeless beauty. As one of the world’s leading gem producers, Sri Lanka offers a dazzling array of precious stones, including sapphires, rubies, and emeralds, each uniquely sourced from the island’s rich earth. Our exquisite jewellery collections are crafted by skilled artisans who blend traditional techniques with contemporary designs, creating stunning pieces that capture the essence of Sri Lankan elegance. Whether you seek a statement piece or a delicate accessory, our gems and jewellery make for perfect keepsakes and gifts, allowing you to carry a piece of Sri Lanka’s sparkling legacy with you. Explore our collections and find your own slice of paradise, elegantly immortalised in our fine jewellery."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2015.12.14-29-408-Sri-Lanka-Ratnapura-1.jpg",
            "alt": "gem mining srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/MG_8185_DxO.jpg",
            "alt": "gem mining srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-gem-industry-image-three-1-op.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gem-jewellery-exports-sri-lanka-l.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gems.jpg",
            "alt": "srilanka-gem-industry"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/gemstone-4.gif",
            "alt": "srilanka-gem-industry"
          }
        ]
      },
      {
        "kicker": "Explore",
        "title": "Sri Lanka’s Gifts and Souvenirs, A Treasure Trove for Foreign Travellers",
        "paragraphs": [
          "Sri Lanka, a beautiful and culturally rich island, offers a variety of gifts and souvenirs for foreign travelers. The vibrant markets and boutiques in the country are filled with exquisite items that capture the essence of Sri Lankan artistry. Silks and batiks are popular souvenirs, showcasing the island’s rich textile heritage. Wood carvings and traditional masks reflect Sri Lanka’s exceptional craftsmanship and cultural traditions. Handmade crafts like pottery, jewellery, and woven baskets provide a tangible connection to the island’s traditions and make for cherished souvenirs. Bringing home a piece of Sri Lanka means carrying a story of its rich culture and artistry."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/8713528824_626454ebe9_b.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/alluring-ornaments.jpeg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_beb1c3155e.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/lesterlost-travel-handmade-crafts-sri-lanka-wood-carving-buddha-statues-1.jpg",
            "alt": "wood carving ornaments srilanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/travel-melodies-demon-masks-as-souvenirs-from-sri-lanka.jpg",
            "alt": "demon-masks-as-souvenirs-from-sri-lanka"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sri-lanka-handicrafts.jpg",
            "alt": "sri-lanka-handicrafts"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Traditional Village Tour in Hiriwadunna",
        "paragraphs": [
          "Experience the rustic charm and cultural richness of Sri Lanka with a traditional village tour in Hiriwadunna. This idyllic village is nestled amidst serene landscapes and lush greenery, offering a glimpse into the authentic way of life in rural Sri Lanka. Walk through the village, guided by friendly locals, and enjoy the natural beauty of the area. Take a traditional catamaran ride or enjoy a leisurely bullock cart ride along village paths. Delve into Sri Lankan cuisine with a hands-on cooking demonstration led by village women. Witness cultural performances featuring traditional dance and music, and engage with locals to gain insights into their customs and crafts."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Sigiriya-Authentic-Village-Walk.jpg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/03.jpg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/07.jpg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/7e.jpg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/village-walk-in-habarana-and-sigiriya-01.jpg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/WhatsApp-Image-2023-07-05-at-01.59.54-720x480-1.jpeg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_ae9414c457.jpg",
            "alt": "Traditional Village Tour in Hiriwadunna"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sigiriya-870x555-1-870x555-1.webp",
            "alt": "Traditional Village Tour in Hiriwadunna"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Beauty_of_Sigiriya_by_Binuka-edited.jpg",
        "alt": "Lions Rock, Sigiriya",
        "number": "01",
        "title": "Lions Rock",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Pidurangala-Rock_Sri-Lanka-1024x683-1-edited.jpeg",
        "alt": "Pidurangala Rock, Sigiriya",
        "number": "02",
        "title": "Pidurangala Rock",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/caption-6-edited.jpg",
        "alt": "Hot Air Ballooning, Sigiriya",
        "number": "03",
        "title": "Hot Air Ballooning",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/dambulla-temple-1-edited.jpg",
        "alt": "Golden Cave Temple, Sigiriya",
        "number": "04",
        "title": "Golden Cave Temple",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/ibban.jpeg",
        "alt": "Ibbankatuwa Tomb, Sigiriya",
        "number": "05",
        "title": "Ibbankatuwa Tomb",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kanda-edited.jpeg",
        "alt": "Kandalama Lake, Sigiriya",
        "number": "06",
        "title": "Kandalama Lake",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/propha-edited.jpeg",
        "alt": "Popham’s Arboretum, Sigiriya",
        "number": "07",
        "title": "Popham’s Arboretum",
        "description": "Sigiriya"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Thalakote-Wewa-edited.jpg",
        "alt": "Thalkote Lake, Sigiriya",
        "number": "08",
        "title": "Thalkote Lake",
        "description": "Sigiriya"
      }
    ],
    "hotels": [
      {
        "name": "Lavish Resort",
        "url": ""
      },
      {
        "name": "Sigiriya King’s Resort",
        "url": ""
      },
      {
        "name": "Jetwing Wil Uyana",
        "url": ""
      },
      {
        "name": "Sigiriya Village",
        "url": ""
      },
      {
        "name": "Aliya Resort",
        "url": ""
      },
      {
        "name": "Muthu Village",
        "url": ""
      },
      {
        "name": "Amelia Resort",
        "url": ""
      },
      {
        "name": "Habarana Farm Cottage",
        "url": ""
      },
      {
        "name": "Wewa Addara",
        "url": ""
      },
      {
        "name": "Lankapura Herritage",
        "url": ""
      },
      {
        "name": "Sapphire Garden Hotel",
        "url": ""
      },
      {
        "name": "Goddess Garden",
        "url": ""
      },
      {
        "name": "Jungle Hut Resort",
        "url": ""
      },
      {
        "name": "Sigiriya Sky Home",
        "url": ""
      },
      {
        "name": "Rock Shade Chalets",
        "url": ""
      },
      {
        "name": "Hotel Sigiriya",
        "url": ""
      },
      {
        "name": "Sigiri Asna Resort",
        "url": ""
      },
      {
        "name": "Ehelagala Lake Resort",
        "url": ""
      },
      {
        "name": "Ambasewana Resort Tree House",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Gedara Restaurant",
        "url": ""
      },
      {
        "name": "Ceyloni",
        "url": ""
      },
      {
        "name": "The Kitchen",
        "url": ""
      },
      {
        "name": "Rastarant",
        "url": ""
      },
      {
        "name": "Dewata Villas",
        "url": ""
      },
      {
        "name": "Curry & Rice",
        "url": ""
      },
      {
        "name": "Chill & Cofee",
        "url": ""
      },
      {
        "name": "Sakura Village",
        "url": ""
      },
      {
        "name": "Coconut Shade",
        "url": ""
      },
      {
        "name": "Kenoli",
        "url": ""
      },
      {
        "name": "Chooty",
        "url": ""
      },
      {
        "name": "Mom’s Kitchen",
        "url": ""
      },
      {
        "name": "Inspire Pub",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "heritage-tour-in-srilanka",
      "leisure-tour-in-srilanka",
      "ramayana-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "sinharaja",
    "name": "Sinharaja “A Verdant Jewel of Biodiversity”",
    "province": "Sabaragamuwa Province",
    "provinceShort": "Sabaragamuwa",
    "categorySlug": "sabaragamuwa-province",
    "countLabel": "22 attractions",
    "description": "Sinharaja Forest Reserve is a UNESCO World Heritage rainforest renowned for its incredible biodiversity and lush greenery. Home to rare endemic species of",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Sinharaja-slider01.webp",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Sinharaja-slider01.webp",
    "metaChips": [
      "Sinharaja, Sri Lanka",
      "Sabaragamuwa Province",
      "Tropical Rain Forest"
    ],
    "introParagraphs": [
      "Sinharaja Forest Reserve is a UNESCO World Heritage rainforest renowned for its incredible biodiversity and lush greenery. Home to rare endemic species of flora and fauna, it offers visitors immersive nature walks, birdwatching, and trekking experiences. its a paradise for nature lovers and eco tourists seeking adventure and Tranquillity in Sri Lanka’s pristine wilderness."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Sinharaja",
        "paragraphs": [],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/87.jpg",
            "alt": "Sinharaja"
          }
        ]
      },
      {
        "kicker": "Explore",
        "title": "Bird Watching, Hiking, and Trekking in Rainforest",
        "paragraphs": [
          "a UNESCO World Heritage site in Sri Lanka, is a pristine rainforest known for its rich biodiversity and lush greenery. With over 150 bird species, including 20 endemic species like the Sri Lanka Blue Magpie, Red-faced Malkoha, and Green-billed Coucal, visitors can spot these magnificent birds in their natural habitat. The forest offers hiking and trekking experiences, with the Kudawa and Morningside trails being popular. The Kudawa and Morningside trails take you through dense foliage, streams, and hidden waterfalls, while the Kudawa and Morningside trails offer stunning views of the forest. The forest also houses several rare plant species, making it a botanical treasure trove for nature enthusiasts. Whether you’re a bird watcher, hiker, or nature lover, Sinharaja Rainforest promises an unforgettable experience."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/cc.jpg",
            "alt": "Bird Watching, Hiking, and Trekking in Rainforest"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/binara002.jpg",
        "alt": "Binara Flower, Sinharaja",
        "number": "01",
        "title": "Binara Flower",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Crepe-Ginger-.jpeg",
        "alt": "Crepe Ginger, Sinharaja",
        "number": "02",
        "title": "Crepe Ginger",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Blue-Magpie-.webp",
        "alt": "Blue Magpie, Sinharaja",
        "number": "03",
        "title": "Blue Magpie",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Green-Pit-Viper-.jpeg",
        "alt": "Green Pit Viper, Sinharaja",
        "number": "04",
        "title": "Green Pit Viper",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Paradise-Flycatcher--e1778445502470.jpeg",
        "alt": "Paradise Flycatcher, Sinharaja",
        "number": "05",
        "title": "Paradise Flycatcher",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Marbled-Frogmouth--scaled.jpeg",
        "alt": "Marbled Frogmouth, Sinharaja",
        "number": "06",
        "title": "Marbled Frogmouth",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Loris-.webp",
        "alt": "Loris, Sinharaja",
        "number": "07",
        "title": "Loris",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Jungle-Fowl-.jpeg",
        "alt": "Jungle Fowl, Sinharaja",
        "number": "08",
        "title": "Jungle Fowl",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/DSC_3288.jpg",
        "alt": "Purple Face Langur, Sinharaja",
        "number": "09",
        "title": "Purple Face Langur",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Layards-Parrot.jpeg",
        "alt": "Layards Parrot, Sinharaja",
        "number": "10",
        "title": "Layards Parrot",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Giant-Wood-Spider.jpeg",
        "alt": "Jiant Wood Spider, Sinharaja",
        "number": "11",
        "title": "Jiant Wood Spider",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Malabar-trogon.webp",
        "alt": "Malabar Trogon, Sinharaja",
        "number": "12",
        "title": "Malabar Trogon",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Green-billed-coucal.jpeg",
        "alt": "Green Billed Coucal, Sinharaja",
        "number": "13",
        "title": "Green Billed Coucal",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Yellow-fronted-barbet.jpeg",
        "alt": "Yellow Fronted Barbet, Sinharaja",
        "number": "14",
        "title": "Yellow Fronted Barbet",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Sri-Lanka-wood-pigeon.jpeg",
        "alt": "Wood Pigeon, Sinharaja",
        "number": "15",
        "title": "Wood Pigeon",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Sri-Lanka-grey-hornbill.jpg",
        "alt": "Grey Hornbill, Sinharaja",
        "number": "16",
        "title": "Grey Hornbill",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/site_0405_0001-1200-630-20150608104702.jpg",
        "alt": "Crestless Lizard, Sinharaja",
        "number": "17",
        "title": "Crestless Lizard",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/geta-edited.jpeg",
        "alt": "Getabaru Temple, Sinharaja",
        "number": "18",
        "title": "Getabaru Temple",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kekunaella-01-edited.jpg",
        "alt": "Kekuna Ella Falls, Sinharaja",
        "number": "19",
        "title": "Kekuna Ella Falls",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Olu-Dola-edited.jpg",
        "alt": "Olu Dola Stream, Sinharaja",
        "number": "20",
        "title": "Olu Dola Stream",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/patna.jpeg",
        "alt": "Patna Sliding Rock, Sinharaja",
        "number": "21",
        "title": "Patna Sliding Rock",
        "description": "Sinharaja"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/sath.jpeg",
        "alt": "Sathmala Falls, Sinharaja",
        "number": "22",
        "title": "Sathmala Falls",
        "description": "Sinharaja"
      }
    ],
    "hotels": [
      {
        "name": "360 Rainforest",
        "url": ""
      },
      {
        "name": "Rainforest Mount Lodge",
        "url": ""
      },
      {
        "name": "Sinharaja Forest Gate",
        "url": ""
      },
      {
        "name": "Rainforest Chalets",
        "url": ""
      },
      {
        "name": "Rainforest Nature House",
        "url": ""
      },
      {
        "name": "Sinharaja Eco Lodge",
        "url": ""
      },
      {
        "name": "Vini Villa",
        "url": ""
      },
      {
        "name": "Blue Magpie",
        "url": ""
      },
      {
        "name": "Kurulu Ella Resort",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Gemi Sewana",
        "url": ""
      },
      {
        "name": "River Breeze",
        "url": ""
      },
      {
        "name": "Jungle Bar",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "beachside-honeymoon-tour-in-srilanka",
      "nature-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "tangalle",
    "name": "Tangalle",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "8 attractions",
    "description": "Tangalle is a serene coastal destination known for its golden beaches, calm waters, and laid back atmosphere. Visitors can relax on unspoiled shores, explore",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/tangalle.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/08/tangalle.webp",
    "metaChips": [
      "Tangalle, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Tangalle is a serene coastal destination known for its golden beaches, calm waters, and laid back atmosphere. Visitors can relax on unspoiled shores, explore nearby lagoons, or enjoy turtle watching at local conservation sites. its perfect for travelers seeking a peaceful beach getaway surrounded by natural beauty."
    ],
    "features": [
      {
        "kicker": "Discover",
        "title": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways",
        "paragraphs": [
          "Tangalle, a coastal paradise in southern Sri Lanka, offers a serene environment for canoeing and kayaking enthusiasts. The tranquil mangrove-lined rivers and lagoons, surrounded by coconut palms and tropical vegetation, provide a relaxing environment for all skill levels. Diverse wildlife, including kingfishers, herons, and parrots, can be observed along the riverbanks. Local fishing villages and communities offer insights into traditional Sri Lankan lifestyles and customs. Engaging with friendly locals and learning about their fishing techniques and cultural heritage enhances the experience. Tangalle offers a variety of canoeing and kayaking routes, catering to different preferences and interests. This rejuvenating outdoor adventure offers relaxation, wildlife encounters, and cultural immersion in Sri Lanka’s natural beauty."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/65.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kayak-1.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/90.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/childkayaking.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/rekawa-lagoon-canoeing11.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/15.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/7f.jpg",
            "alt": "Canoeing & Kayaking in Tangalle Sri Lanka, Explore Serene Waterways"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/goyam.jpeg",
        "alt": "Goyambokka Beach, Tangalle",
        "number": "01",
        "title": "Goyambokka Beach",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Hiriketiya-Beach-8-scaled-1-edited.jpg",
        "alt": "Hiriketiya Beach, Tangalle",
        "number": "02",
        "title": "Hiriketiya Beach",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/hoomaniya-blow-hole-in-southern-sri-lanka-title-photo_orig-edited.jpg",
        "alt": "Blow Hole, Tangalle",
        "number": "03",
        "title": "Blow Hole",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kalamatiya16.jpg",
        "alt": "Kalametiya Bird Sanctuary, Tangalle",
        "number": "04",
        "title": "Kalametiya Bird Sanctuary",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/impressive-archway-ticketing-edited.jpg",
        "alt": "Bataatha Agro Park, Tangalle",
        "number": "05",
        "title": "Bataatha Agro Park",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kudawella-beach-in-southern.jpg",
        "alt": "Kudawella Beach, Tangalle",
        "number": "06",
        "title": "Kudawella Beach",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/wewuru.jpeg",
        "alt": "Wewurukannala Temple, Tangalle",
        "number": "07",
        "title": "Wewurukannala Temple",
        "description": "Tangalle"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/The-Tombolo-of-Blue-Beach-Island-edited.webp",
        "alt": "Blue Beach Island, Tangalle",
        "number": "08",
        "title": "Blue Beach Island",
        "description": "Tangalle"
      }
    ],
    "hotels": [
      {
        "name": "Anantara Peace Heaven",
        "url": ""
      },
      {
        "name": "Mango Tree",
        "url": ""
      },
      {
        "name": "Amanwella Resort",
        "url": ""
      },
      {
        "name": "Golden Pearl",
        "url": ""
      },
      {
        "name": "Panorama Beach",
        "url": ""
      },
      {
        "name": "Mangrow Beach Cabanas",
        "url": ""
      },
      {
        "name": "Ganesh Garden",
        "url": ""
      },
      {
        "name": "Eagle Nest Cabanas",
        "url": ""
      },
      {
        "name": "Lagoon Gate",
        "url": ""
      },
      {
        "name": "Sooriya Resort",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Doctor’s Bar",
        "url": ""
      },
      {
        "name": "The Tree’s",
        "url": ""
      },
      {
        "name": "The Breeze",
        "url": ""
      },
      {
        "name": "Moon River",
        "url": ""
      },
      {
        "name": "Tangalle Rice & Curry",
        "url": ""
      },
      {
        "name": "Banyan Tree",
        "url": ""
      },
      {
        "name": "The Lounge",
        "url": ""
      },
      {
        "name": "Charissa Beach Club",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "beachside-honeymoon-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "tissa-yala",
    "name": "Tissa - Yala “The Gateway to Sri Lanka’s Wildlife and History”",
    "province": "Southern Province",
    "provinceShort": "Southern",
    "categorySlug": "southern-province",
    "countLabel": "7 attractions",
    "description": "Tissamaharama is a gateway to Sri Lanka’s wildlife and heritage, located near the famous Yala National Park and Bundala National Park. Known for its serene",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Tissamaharama_Stupa.jpeg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Tissamaharama_Stupa.jpeg",
    "metaChips": [
      "Tissa - Yala, Sri Lanka",
      "Southern Province",
      "Cultural City"
    ],
    "introParagraphs": [
      "Tissamaharama is a gateway to Sri Lanka’s wildlife and heritage, located near the famous Yala National Park and Bundala National Park. Known for its serene reservoirs and historic temples, Tissamaharama offers a blend of nature, culture, and adventure, making it an ideal base for safari tours and eco tourism."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Yala National Park Safari, Explore Sri Lanka’s Wildlife Sanctuary",
        "paragraphs": [
          "in Sri Lanka this is a premier wildlife sanctuary known for its diverse ecosystem and abundant wildlife. Visitors can encounter exotic species like Asian elephants, leopards, sloth bears, and Colourful bird species. its a home to the highest density of leopards in the world, making it a popular spot for wildlife enthusiasts and photographers. The park’s varied terrain, including dry forests, grasslands, coastal lagoons, and rocky outcrops, supports a unique array of flora and fauna. Open safari jeeps provide excellent viewing opportunities, and the park’s conservation efforts aim to preserve its natural biodiversity and protect endangered species. Support eco-friendly tourism practices by following park guidelines and respecting wildlife habitats. it offers an unforgettable safari experience for wildlife enthusiasts, nature lovers, and adventure seekers."
        ],
        "images": []
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/tissa-wewa-edited.jpeg",
        "alt": "Tissa Wewa, Tissa - Yala",
        "number": "01",
        "title": "Tissa Wewa",
        "description": "Tissa - Yala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/yodha.jpeg",
        "alt": "Yodha Wewa, Tissa - Yala",
        "number": "02",
        "title": "Yodha Wewa",
        "description": "Tissa - Yala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Tissamaharama_Stupa.jpeg",
        "alt": "Tissa Temple, Tissa - Yala",
        "number": "03",
        "title": "Tissa Temple",
        "description": "Tissa - Yala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kirinda1-edited.jpg",
        "alt": "Kirinda Temple, Tissa - Yala",
        "number": "04",
        "title": "Kirinda Temple",
        "description": "Tissa - Yala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/kiri-edited.webp",
        "alt": "Kirinda Beach, Tissa - Yala",
        "number": "05",
        "title": "Kirinda Beach",
        "description": "Tissa - Yala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/nidangala.jpeg",
        "alt": "Nidangala Beach, Tissa - Yala",
        "number": "06",
        "title": "Nidangala Beach",
        "description": "Tissa - Yala"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2025/01/ultimate-bird-watching-tour-of-sri-lanka-51.webp",
        "alt": "Owls, Bats & Bird Watching, Tissa - Yala",
        "number": "07",
        "title": "Owls, Bats & Bird Watching",
        "description": "Tissa - Yala"
      }
    ],
    "hotels": [
      {
        "name": "Leoperd Trails",
        "url": ""
      },
      {
        "name": "Uga Chena Huts",
        "url": ""
      },
      {
        "name": "Cinnamon Wild Yala",
        "url": ""
      },
      {
        "name": "Kaaya Eco Resort",
        "url": ""
      },
      {
        "name": "Kethaka Aga",
        "url": ""
      },
      {
        "name": "Tringa Villas",
        "url": ""
      },
      {
        "name": "Arana",
        "url": ""
      },
      {
        "name": "Koragaha Lodge",
        "url": ""
      },
      {
        "name": "My Village",
        "url": ""
      },
      {
        "name": "Elephant Reach",
        "url": ""
      },
      {
        "name": "Villa Safari",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Chef Lady",
        "url": ""
      },
      {
        "name": "Smokey Kitchen",
        "url": ""
      },
      {
        "name": "Smoothy Bun",
        "url": ""
      },
      {
        "name": "Home Food",
        "url": ""
      },
      {
        "name": "The Flavours",
        "url": ""
      },
      {
        "name": "Yala Wadiya",
        "url": ""
      },
      {
        "name": "Spicy Hut",
        "url": ""
      },
      {
        "name": "Yala Addara",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "culture-tour-in-srilanka"
    ]
  },
  {
    "slug": "trincomalee",
    "name": "Trincomalee “The Coastal Gem”",
    "province": "Eastern Province",
    "provinceShort": "Eastern",
    "categorySlug": "eastern-province",
    "countLabel": "12 attractions",
    "description": "Trincomalee is a beautiful coastal city famous for its pristine beaches, deep water harbour, and historic sites. Visitors can explore attractions like the",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/trincomalee-fort-frederik-koneswaram-temple.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/trincomalee-fort-frederik-koneswaram-temple.jpg",
    "metaChips": [
      "Trincomalee, Sri Lanka",
      "Eastern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Trincomalee is a beautiful coastal city famous for its pristine beaches, deep water harbour, and historic sites. Visitors can explore attractions like the Koneswaram Temple, enjoy snorkeling and diving in crystal clear waters, or relax along scenic shores. Trincomalee is a perfect destination for culture, adventure, and seaside relaxation."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Explore the Wonders of Pigeon Island National Park in Trincomalee",
        "paragraphs": [
          "Pigeon Island National Park in Trincomalee, Sri Lanka, is a renowned marine sanctuary known for its vibrant coral reefs and diverse marine life. The park, consisting of two islands, offers a unique underwater experience for snorkelers and scuba divers. Large Pigeon Island, with its picturesque beach and rocky outcrops, is perfect for relaxing and bird watching. Small Pigeon Island offers panoramic ocean views and offers a rugged terrain for exploration. The park’s status as a protected area ensures the preservation of its unique biodiversity for future generations. Visitors can enjoy the natural wonders of Pigeon Island National Park, whether diving into the underwater world or relaxing on the pristine beaches, making it an unforgettable experience in Sri Lanka’s coastal paradise."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image-4.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/1024px-The_Beauty_of_Pigeon_Island_-_Beautiful_Ocean.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/getlstd-property-photo-1.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image-1-1.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/image_dcd04b0a1f.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/maxresdefault.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/PIGEON-ISLAND.webp",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Pigeon_Island_National_Park_Trincomalee-scaled.jpg",
            "alt": "Explore the Wonders of Pigeon Island National Park in Trincomalee"
          }
        ]
      },
      {
        "kicker": "Discover",
        "title": "Whales and Dolphins Watching, An Unforgettable Marine Adventure",
        "paragraphs": [
          "Trincomalee, a popular destination in Sri Lanka, offers an unforgettable marine adventure for whales and dolphin watching. The deep blue waters of the region provide the perfect habitat for various species, including blue whales, sperm whales, fin whales, and occasional orcas. Dolphin watching is equally thrilling, with spinner dolphins often seen leaping and frolicking in the waves. The best time for whale and dolphin watching is from March to August, when sea conditions are optimal. Expert guides and boat operators ensure a safe and responsible viewing experience, prioritizing the well-being of the animals. This extraordinary experience promises to be a highlight of your visit to Sri Lanka, offering unforgettable memories."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Whale-and-Dolphing-watch-Trincomalee.jpg",
            "alt": "Whales and Dolphins Watching, An Unforgettable Marine Adventure"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/3-768x512-1.jpeg",
            "alt": "Whales and Dolphins Watching, An Unforgettable Marine Adventure"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/146.jpg",
            "alt": "Whales and Dolphins Watching, An Unforgettable Marine Adventure"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/dolphin01.webp",
            "alt": "Whales and Dolphins Watching, An Unforgettable Marine Adventure"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/e3.jpg",
            "alt": "Whales and Dolphins Watching, An Unforgettable Marine Adventure"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Sri-Lanka-Travel-Packages-1-scaled-1-1000x750-1.jpg",
            "alt": "Whales and Dolphins Watching, An Unforgettable Marine Adventure"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/buddhist-temple-fort-frederick-close-600nw-1661938183-edited.webp",
        "alt": "Gokanna Temple, Trincomalee",
        "number": "01",
        "title": "Gokanna Temple",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/trincomalee-fort-frederik-koneswaram-temple-edited.jpg",
        "alt": "Thirukoneshwaram Kovil, Trincomalee",
        "number": "02",
        "title": "Thirukoneshwaram Kovil",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/nila-edited.jpeg",
        "alt": "Nilaweli Beach, Trincomalee",
        "number": "03",
        "title": "Nilaweli Beach",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/uppu-edited.jpeg",
        "alt": "Uppuweli Beach, Trincomalee",
        "number": "04",
        "title": "Uppuweli Beach",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/fedderic-edited.jpeg",
        "alt": "Fort Fedderic, Trincomalee",
        "number": "05",
        "title": "Fort Fedderic",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Commonwealth_War_Graves_Trincomalee_Sri_Lanka_3-edited.jpg",
        "alt": "War Cemetery, Trincomalee",
        "number": "06",
        "title": "War Cemetery",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/kanniyahotsprings_20190701233953.jpg",
        "alt": "Kanniya Hot Springs, Trincomalee",
        "number": "07",
        "title": "Kanniya Hot Springs",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Marble-Beach-edited.jpg",
        "alt": "Marble Beach, Trincomalee",
        "number": "08",
        "title": "Marble Beach",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/Maritime-and-Naval-History-Museum-edited.jpg",
        "alt": "Maritime Museum, Trincomalee",
        "number": "09",
        "title": "Maritime Museum",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/orrs-hill.jpeg",
        "alt": "Orr’s Hill Army Museum, Trincomalee",
        "number": "10",
        "title": "Orr’s Hill Army Museum",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/c83opt-2b-0a-2b0ad2121fb0a19ed61a84f58c58034f-edited.jpg",
        "alt": "Navy Underwater Museum, Trincomalee",
        "number": "11",
        "title": "Navy Underwater Museum",
        "description": "Trincomalee"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/what-to-do-in-trincomalee-ravanas-cleft-edited.jpg",
        "alt": "Lover’s Leap / Rawana Cleft, Trincomalee",
        "number": "12",
        "title": "Lover’s Leap / Rawana Cleft",
        "description": "Trincomalee"
      }
    ],
    "hotels": [
      {
        "name": "Uga Jungle Beach",
        "url": ""
      },
      {
        "name": "Amaranthe Bay",
        "url": ""
      },
      {
        "name": "Sober Island Resort",
        "url": ""
      },
      {
        "name": "JKab Beach Resort",
        "url": ""
      },
      {
        "name": "Trinco Blue",
        "url": ""
      },
      {
        "name": "Sea Lotus Park",
        "url": ""
      },
      {
        "name": "108 Palms Beach",
        "url": ""
      },
      {
        "name": "Jungle Bay Resort",
        "url": ""
      },
      {
        "name": "Antheia Beach Resort",
        "url": ""
      },
      {
        "name": "Vitamin Sea",
        "url": ""
      },
      {
        "name": "Mithra Paradise",
        "url": ""
      },
      {
        "name": "Hotel Coral Bay",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Snack Bar Hawai",
        "url": ""
      },
      {
        "name": "JKab sea foods",
        "url": ""
      },
      {
        "name": "Foodie Boy Cafe",
        "url": ""
      },
      {
        "name": "Ceylon Sea Food",
        "url": ""
      },
      {
        "name": "Rice N Curry",
        "url": ""
      },
      {
        "name": "Dutch Bank Cafe",
        "url": ""
      },
      {
        "name": "Annapoorani Veg",
        "url": ""
      },
      {
        "name": "Blue Sand Beach",
        "url": ""
      },
      {
        "name": "Nina",
        "url": ""
      },
      {
        "name": "New Tonic’s",
        "url": ""
      },
      {
        "name": "Memo’s Beach Cafe",
        "url": ""
      },
      {
        "name": "Hybrid",
        "url": ""
      },
      {
        "name": "Yaalu Maalu Beach",
        "url": ""
      },
      {
        "name": "Leo Cafe",
        "url": ""
      },
      {
        "name": "La Bashi Cafe",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "culture-tour-in-srilanka",
      "ramayana-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  },
  {
    "slug": "udawalawa",
    "name": "Udawalawa “A Wildlife Heaven in Sri Lanka”",
    "province": "Sabaragamuwa Province",
    "provinceShort": "Sabaragamuwa",
    "categorySlug": "sabaragamuwa-province",
    "countLabel": "8 attractions",
    "description": "The Leaf Udawalawa",
    "lead": "",
    "heroImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/hero/udawalawa.jpg",
    "cardImage": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2_udawalawe-safari-elephant-transit-home-visit-with-lunch-from-hambantota-harbor.jpg",
    "metaChips": [
      "Udawalawa, Sri Lanka",
      "Sabaragamuwa Province",
      "Adventurous City"
    ],
    "introParagraphs": [
      "Udawalawe is a nature lover’s paradise, best known for the Udawalawe National Park, a sanctuary famous for wild elephants gathering and diverse wildlife. Visitors can enjoy safari tours, birdwatching, and scenic landscapes, making Udawalawe an ideal destination for eco tourism and wildlife adventures."
    ],
    "features": [
      {
        "kicker": "Explore",
        "title": "Udawalawe National Park Safari",
        "paragraphs": [
          "Udawalawe National Park in Sri Lanka is a popular destination for wildlife enthusiasts and photographers. The park is known for its abundant wildlife and stunning landscapes, including a large population of elephants. Visitors can observe elephants bathing, feeding, and socializing at the Udawalawe Reservoir. The park also features a diverse array of fauna, including leopards, sloth bears, sambar deer, water buffalo, and crocodiles. Over 200 bird species can be seen, including the colorful peacock, crested serpent eagle, and kingfishers and hornbills. The park’s landscape is a mix of grasslands, forests, and wetlands, providing a picturesque backdrop for the safari. Guides offer insights into the park’s ecology and wildlife behavior. Traveling in a comfortable 4×4 vehicle ensures optimal viewing and photography. Udawalawe National Park plays a vital role in wildlife conservation and protection, contributing to Sri Lanka’s natural heritage preservation."
        ],
        "images": [
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/2_udawalawe-safari-elephant-transit-home-visit-with-lunch-from-hambantota-harbor.jpg",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/3a.jpg",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/13-hawk-eagle.jpg",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/33.jpg",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/IMG_2224.webp",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Half-Day-Tours-Udawalawe-National-Park-Safari.jpg",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/unnamed.png",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Wild-Boar-Yala.jpg",
            "alt": "Udawalawe National Park Safari"
          },
          {
            "src": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Red-Wattled-Lap-Wing-at-Udawalawe-National-Park-20-1024x1024-1.jpg",
            "alt": "Udawalawe National Park Safari"
          }
        ]
      }
    ],
    "attractions": [
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/eyJrZXkiOiIzMDAwMzk2Yi02ZTYyLTRkZjItODgwYi02NDQ2ODI1OGI2Y2QuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwfX19-edited.webp",
        "alt": "Elephant Transit Home, Udawalawa",
        "number": "01",
        "title": "Elephant Transit Home",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/dam-edited.webp",
        "alt": "Udawalawa Dam, Udawalawa",
        "number": "02",
        "title": "Udawalawa Dam",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/IMG_8216.jpg",
        "alt": "Chandrika Lake, Udawalawa",
        "number": "03",
        "title": "Chandrika Lake",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/view-to-penisula-at-udawalawe-reservoir-udawalawa-national-park-sri-lanka-CVF01330-edited.jpg",
        "alt": "Udawalawa Resovoure, Udawalawa",
        "number": "04",
        "title": "Udawalawa Resovoure",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/Royal_Palace_Maduwanwela_Walawwa_-_%E0%B6%B8%E0%B6%A9%E0%B7%94%E0%B7%80%E0%B6%B1%E0%B7%8A%E0%B7%80%E0%B7%99%E0%B6%BD_%E0%B7%80%E0%B6%BD%E0%B7%80%E0%B7%8A%E0%B7%80_2012_-_panoramio-scaled.jpg",
        "alt": "Maduwanwela Palace, Udawalawa",
        "number": "05",
        "title": "Maduwanwela Palace",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/7936427056_406c96e084_b-edited.jpg",
        "alt": "Sankapala Temple, Udawalawa",
        "number": "06",
        "title": "Sankapala Temple",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/gem-mine-ratnapura-sri-lanka-unidentified-precious-39619431-edited.webp",
        "alt": "Gem Mining, Udawalawa",
        "number": "07",
        "title": "Gem Mining",
        "description": "Udawalawa"
      },
      {
        "image": "https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/05/village-garden.jpg",
        "alt": "Ceylone 1850, Udawalawa",
        "number": "08",
        "title": "Ceylone 1850",
        "description": "Udawalawa"
      }
    ],
    "hotels": [
      {
        "name": "Plumeria Luxury Villas",
        "url": ""
      },
      {
        "name": "Elephant Trail",
        "url": ""
      },
      {
        "name": "Hotel Athgira",
        "url": ""
      },
      {
        "name": "The Leaf Udawalawa",
        "url": ""
      },
      {
        "name": "Nildiya Mankada",
        "url": ""
      },
      {
        "name": "Baby Elephant Green House",
        "url": ""
      },
      {
        "name": "Forest Edge",
        "url": ""
      },
      {
        "name": "Doola River Edge",
        "url": ""
      },
      {
        "name": "Royal Tusker",
        "url": ""
      },
      {
        "name": "Jungle Paradise",
        "url": ""
      },
      {
        "name": "Waraka Resort",
        "url": ""
      },
      {
        "name": "Wild Safari Clay House",
        "url": ""
      }
    ],
    "restaurants": [
      {
        "name": "Riverside Eco Restaurant",
        "url": ""
      },
      {
        "name": "Kadulla Family Rest",
        "url": ""
      }
    ],
    "relatedTourSlugs": [
      "adventure-tour-in-srilanka",
      "all-ceylon-tour-in-srilanka"
    ]
  }
];
