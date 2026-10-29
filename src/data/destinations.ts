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
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Discover Anuradhapura&#x27;s rich history and UNESCO sites for an unforgettable cultural adventure in Sri Lanka.",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/07/Anuradhapura-travel.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/07/Anuradhapura-travel.webp",
    "metaChips": [
      "Anuradhapura, Sri Lanka",
      "North Central Province",
      "Archeological City"
    ],
    "introParagraphs": [
      "Anuradhapura is a historic city and UNESCO World Heritage Site, known as the first ancient capital of Sri Lanka. It is famous for its well-preserved ruins, sacred temples, and impressive stupas such as Ruwanwelisaya and Jetavanaramaya. The city is also home to the revered Sri Maha Bodhi, one of the oldest recorded trees in the world. With its rich history and spiritual significance, Anuradhapura offers a unique glimpse into Sri Lanka’s ancient civilization."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "arugambay",
    "name": "Arugambay “Sri Lanka’s Surfing Paradise”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Arugambay is a world famous coastal destination known for its golden beaches and exceptional surfing conditions. Popular among both beginners and...",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/arugambay1.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/arugambay1.webp",
    "metaChips": [
      "Arugambay, Sri Lanka",
      "Eastern Province",
      "Beach City"
    ],
    "introParagraphs": [
      "Arugambay is a world famous coastal destination known for its golden beaches and exceptional surfing conditions. Popular among both beginners and experienced surfers, it offers consistent waves and a relaxed, laid back atmosphere. Beyond surfing, visitors can enjoy stunning sunsets, wildlife nearby, and vibrant local culture, making Arugam Bay a perfect getaway for beach lovers and adventure seekers alike."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "batticaloa",
    "name": "Batticaloa",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Discover Sri Lanka’s enchanting coastal city. Explore Pasikudah, Kallady & Kalkudah beaches, Batticaloa Fort, and the famous Singing Fish Lagoon.",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/Batticaloa-Beach.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/Batticaloa-Beach.jpg",
    "metaChips": [
      "Batticaloa, Sri Lanka",
      "Eastern Province",
      "Beach City"
    ],
    "introParagraphs": [
      "Batticaloa is a charming coastal city known for its serene lagoons, sandy beaches, and rich cultural heritage. Often called the “Land of the Singing Fish,” it is famous for the unique musical sounds heard in the Lagoon. Visitors can explore historic sites like the dutch Fort, enjoy fresh seafood, and experience the city’s peaceful atmosphere, making it a relaxing and culturally rich destination."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "belihuloya",
    "name": "Belihuloya “A Serene Mountain Getaway in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Belihuloya is a scenic hillside destination known for its cool climate, lush greenery, and natural beauty. Surrounded by mountains, waterfalls, and rivers, it",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/portrait_LO-Belihuloya_A1.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/portrait_LO-Belihuloya_A1.jpg",
    "metaChips": [
      "Belihuloya, Sri Lanka",
      "Sabaragamuwa Province",
      "Mountainouse City"
    ],
    "introParagraphs": [
      "Belihuloya is a scenic hillside destination known for its cool climate, lush greenery, and natural beauty. Surrounded by mountains, waterfalls, and rivers, it is perfect for hiking, camping, and nature exploration. Located near the Horton Plains National Park, Belihuloya offers a peaceful escape for travelers seeking adventure and relaxation in Sri Lanka’s highlands."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "bentota",
    "name": "Bentota “The Jewel of Sri Lanka’s Southern Coast”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Bentota is a popular coastal destination known for its pristine beaches, luxury resorts, and exciting water sports. Located along the scenic Bentota River, it",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/aerial-view-bentota-beach-secret-600nw-2354914557.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/aerial-view-bentota-beach-secret-600nw-2354914557.webp",
    "metaChips": [
      "Bentota, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Bentota is a popular coastal destination known for its pristine beaches, luxury resorts, and exciting water sports. Located along the scenic Bentota River, it offers activities such as boat safaris, jet skiing, and windsurfing. With its blend of relaxation and adventure, Bentota is an ideal getaway for beach lovers and holidaymakers."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "colombo",
    "name": "Colombo “The commercial Heart of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Colombo is the vibrant commercial capital of Sri Lanka, blending modern city life with rich colonial heritage. From bustling markets and luxury shopping malls",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/colombo-sri-lanka-aerial-view.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/colombo-sri-lanka-aerial-view.webp",
    "metaChips": [
      "Colombo, Sri Lanka",
      "Western Province",
      "Capital City"
    ],
    "introParagraphs": [
      "Colombo is the vibrant commercial capital of Sri Lanka, blending modern city life with rich colonial heritage. From bustling markets and luxury shopping malls to historic landmarks like Galle Face Green, the city offers something for every traveler. With its lively atmosphere, diverse cuisine, and coastal charm, Colombo is the perfect gateway to explore the island."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "ella",
    "name": "Ella “A Tranquil Mountain Escape in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Ella is a picturesque hill country destination known for its cool climate, lush tea plantations, and breathtaking views. Popular attractions like Nine Arches",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/ella-banner-5.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/ella-banner-5.webp",
    "metaChips": [
      "Ella, Sri Lanka",
      "Uva Province",
      "Adventurous City"
    ],
    "introParagraphs": [
      "Ella is a picturesque hill country destination known for its cool climate, lush tea plantations, and breathtaking views. Popular attractions like Nine Arches Bridge and Elle rock offer unforgettable experiences for hikers and nature lovers. With its relaxed vibe and stunning landscapes, Elle is a must visit spot for travelers seeking both adventure and tranquility."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "galle",
    "name": "Galle “A colonial Coastal Gem of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Galle is a historic coastal city renowned for its colonial charm and stunning seaside views. The iconic dutch Fort, a UNESCO World Heritage Site, features",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/07/Galle-Fort-Banner-1920x800-1.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/07/Galle-Fort-Banner-1920x800-1.webp",
    "metaChips": [
      "Galle, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Galle is a historic coastal city renowned for its colonial charm and stunning seaside views. The iconic dutch Fort, a UNESCO World Heritage Site, features cobblestone streets, boutique shops, and well-preserved Dutch-era architecture. With its blend of history, culture, and ocean beauty, Galle is a captivating destination for travelers."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "hambantota",
    "name": "Hambantota “Sri Lanka’s Emerging Coastal Hub”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Hambantota is a rapidly developing coastal destination known for its natural beauty and wildlife attractions. Surrounded by national parks like Yala National",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/08/Hambantota-Banner3-2-6715.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/08/Hambantota-Banner3-2-6715.webp",
    "metaChips": [
      "Hambantota, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Hambantota is a rapidly developing coastal destination known for its natural beauty and wildlife attractions. Surrounded by national parks like Yala National Park and Bundala National Park, it offers excellent opportunities for safari adventures and birdwatching. With its peaceful beaches and growing infrastructure, Hambantota is an emerging hotspot for eco-tourism and exploration."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "haputale",
    "name": "Haputale “A Scenic Hill Town in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Haputale is a serene hill country retreat known for its misty landscapes, rolling tea plantations, and panoramic mountain views. Visitors can enjoy",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/Haputale.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/Haputale.webp",
    "metaChips": [
      "Haputale, Sri Lanka",
      "Uva Province",
      "Mountainous City"
    ],
    "introParagraphs": [
      "Haputale is a serene hill country retreat known for its misty landscapes, rolling tea plantations, and panoramic mountain views. Visitors can enjoy attractions like Lipton’s Seat and lush hiking trails that offer a peaceful escape into nature. its perfect for travelers seeking Tranquillity, scenic beauty, and a taste of Sri Lanka’s highland charm."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "hikkaduwa",
    "name": "Hikkaduwa “A Coral Paradise in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Hikkaduwa is a vibrant beach town famous for its golden sands, crystal clear waters, and lively surf culture. Visitors can enjoy Snorkelling over Colourful",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/hikkaduwa-beach-sri-lanka.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/hikkaduwa-beach-sri-lanka.jpg",
    "metaChips": [
      "Hikkaduwa, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Hikkaduwa is a vibrant beach town famous for its golden sands, crystal clear waters, and lively surf culture. Visitors can enjoy Snorkelling over Colourful coral reefs, exploring the Coral Sanctuary, or simply relaxing along the coastline. With its mix of adventure, nightlife, and seaside charm, its a top destination for beach lovers and water sports enthusiasts."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "jaffna",
    "name": "Jaffna “A Cultural and Historical Gem in Northern Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Jaffna is a culturally rich city known for its unique Tamil heritage, historic temples, and vibrant local markets. Visitors can explore landmarks like the",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/Jaffna-Fort-Sri-Lanka-1-edited.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/Jaffna-Fort-Sri-Lanka-1-edited.jpg",
    "metaChips": [
      "Jaffna, Sri Lanka",
      "Northern Province",
      "Cultural City"
    ],
    "introParagraphs": [
      "Jaffna is a culturally rich city known for its unique Tamil heritage, historic temples, and vibrant local markets. Visitors can explore landmarks like the dutch Fort and the scenic Nagadeepa temple. With its distinctive cuisine, Colourful festivals, and coastal beauty, and it offers an authentic and memorable Sri Lankan experience."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "kalpitiya",
    "name": "Kalpitiya “The Kite Surf Paradise in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Kalpitiya is a stunning coastal destination on Sri Lanka’s northwest peninsula, known for its long sandy beaches, calm lagoons, and rich marine life. It’s a",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/Kalpitiya-Dri-Lanka-drone-scaled-1.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/Kalpitiya-Dri-Lanka-drone-scaled-1.webp",
    "metaChips": [
      "Kalpitiya, Sri Lanka",
      "Northern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Kalpitiya is a stunning coastal destination on Sri Lanka’s northwest peninsula, known for its long sandy beaches, calm lagoons, and rich marine life. It’s a top spot for adventure seekers, offering world class kitesurfing, dolphin watching excursions, and snorkeling at the nearby Bar Reef Marine Sanctuary. With its peaceful atmosphere, striking natural beauty, and range of water based activities, and is perfect for nature lovers and thrill seekers alike."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "kandy",
    "name": "Kandy “The Cultural Heart of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Kandy is a scenic hill city renowned for its rich cultural heritage and lush surroundings. Famous for the sacred Temple of the Tooth Relic. Kandy offers",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/Kandy-Sri-Lanka-_1_.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/Kandy-Sri-Lanka-_1_.webp",
    "metaChips": [
      "Kandy, Sri Lanka",
      "Central Province",
      "Cultural City"
    ],
    "introParagraphs": [
      "Kandy is a scenic hill city renowned for its rich cultural heritage and lush surroundings. Famous for the sacred Temple of the Tooth Relic. Kandy offers visitors a blend of history, spirituality, and natural beauty with its picturesque lake, botanical gardens, and vibrant cultural festivals. It is a must-visit destination for travelers seeking both tradition and tranquility."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "kitulgala",
    "name": "Kitulgala",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Kitulgala is a scenic adventure destination famous for its lush rainforests and the Kelani River. Known as the birthplace of Sri Lanka’s white water rafting",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/Kitulgala-rafting-Colombo-shore-excursions.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/Kitulgala-rafting-Colombo-shore-excursions.jpg",
    "metaChips": [
      "Kitulgala, Sri Lanka",
      "Sabaragamuwa Province",
      "Adventurouse City"
    ],
    "introParagraphs": [
      "Kitulgala is a scenic adventure destination famous for its lush rainforests and the Kelani River. Known as the birthplace of Sri Lanka’s white water rafting scene, it also offers trekking, birdwatching, and nature excursions. With its blend of thrilling activities and serene natural beauty, and perfect for adventure seekers and nature lovers alike."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "mahiyanganaya",
    "name": "Mahiyanganaya “A Historical and Cultural Treasure in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Mahiyanganaya is a tranquil destination known for its scenic landscapes, sacred sites, and cultural heritage of indigenous people. It is home to the revered",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/18-Bend-Road-edited.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/18-Bend-Road-edited.jpg",
    "metaChips": [
      "Mahiyanganaya, Sri Lanka",
      "Uva Province",
      "Mountainous City"
    ],
    "introParagraphs": [
      "Mahiyanganaya is a tranquil destination known for its scenic landscapes, sacred sites, and cultural heritage of indigenous people. It is home to the revered muthiyanganaya temple and offers visitors peaceful rivers, lush paddy fields, and opportunities for nature walks. Perfect for travelers seeking spirituality, serenity, and a glimpse into rural Sri Lankan life."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "mannar",
    "name": "Mannar “A Historical and Natural Gem in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Mannar is a serene coastal city known for its unique landscapes, historic sites, and abundant birdlife. Famous for the Adam’s Bridge (Rama’s Bridge) and the",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/mannar-island-1.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/mannar-island-1.webp",
    "metaChips": [
      "Mannar, Sri Lanka",
      "Northern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Mannar is a serene coastal city known for its unique landscapes, historic sites, and abundant birdlife. Famous for the Adam’s Bridge (Rama’s Bridge) and the nearby sanctuaries, and it offers opportunities for wildlife watching, exploring ancient forts, and enjoying quiet beaches. It’s an ideal destination for travelers seeking history, nature, and Tranquillity."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "mirissa",
    "name": "Mirissa “A Tropical Paradise on the Southern Coast of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Mirissa is a stunning beach destination known for its golden sands, turquoise waters, and vibrant nightlife. Famous for whale watching, surfing, and relaxing",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/17cb571e-b0645bd4-mirissa-whale-watching_850x460_acf_cropped.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/17cb571e-b0645bd4-mirissa-whale-watching_850x460_acf_cropped.jpg",
    "metaChips": [
      "Mirissa, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Mirissa is a stunning beach destination known for its golden sands, turquoise waters, and vibrant nightlife. Famous for whale watching, surfing, and relaxing by the shore, it also offers charming cafes and scenic viewpoints. and it is the perfect getaway for beach lovers, adventure seekers, and those looking to unwind in a tropical paradise."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "negombo",
    "name": "Negombo",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Negombo is a lively coastal city known for its golden beaches, bustling fish markets, and rich colonial heritage. Located close to the international airport,",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/Neg-1.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/Neg-1.jpg",
    "metaChips": [
      "Negombo, Sri Lanka",
      "Western Province",
      "Coastal City"
    ],
    "introParagraphs": [],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "nuwaraeliya",
    "name": "Nuwaraeliya “The Little England of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Nuwaraeliya is a picturesque hill station known as “Little England” for its colonial charm, cool climate, and lush tea plantations. Visitors can enjoy scenic",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/140958556Nuwara_Eliya_Gregory_Lake-edited.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/140958556Nuwara_Eliya_Gregory_Lake-edited.jpg",
    "metaChips": [
      "Nuwaraeliya, Sri Lanka",
      "Central Province",
      "Mountainous City"
    ],
    "introParagraphs": [
      "Nuwaraeliya is a picturesque hill station known as “Little England” for its colonial charm, cool climate, and lush tea plantations. Visitors can enjoy scenic landscapes, waterfalls, and attractions like the Gregory Lake and vibrant flower gardens. Nuwaraeliya is perfect for travelers seeking relaxation, nature, and a refreshing escape into Sri Lanka’s highlands."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "pinnawala",
    "name": "Pinnawala “Home to Sri Lanka’s Elephants”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Pinnawala is famous for its iconic Elephant Orphanage, where visitors can watch elephants being cared for and bathed in the river. Surrounded by lush",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/pinnawala-1.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/pinnawala-1.webp",
    "metaChips": [
      "Pinnawala, Sri Lanka",
      "Sabaragamuwa Province",
      "Adventurouse City"
    ],
    "introParagraphs": [
      "Pinnawala is famous for its iconic Elephant Orphanage, where visitors can watch elephants being cared for and bathed in the river. Surrounded by lush greenery, and offers a unique wildlife experience and is a must visit destination for families and animal lovers exploring Sri Lanka."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "polonnaruwa",
    "name": "Polonnaruwa “The Ancient City of Kings”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Polonnaruwa is an ancient city known as the 2nd kindom of sri lanka and UNESCO World Heritage Site, renowned for its well preserved ruins and historic",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/UNESCO-World-Heritage-Site-Brahmanic-Monuments-Polonnaruwa-Sri-Lanka-1-1.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/UNESCO-World-Heritage-Site-Brahmanic-Monuments-Polonnaruwa-Sri-Lanka-1-1.webp",
    "metaChips": [
      "Polonnaruwa, Sri Lanka",
      "North Central Province",
      "Archeological City"
    ],
    "introParagraphs": [
      "Polonnaruwa is an ancient city known as the 2nd kindom of sri lanka and UNESCO World Heritage Site, renowned for its well preserved ruins and historic monuments. Visitors can explore impressive structures like the Gal Vihara and ancient palaces, reflecting the grandeur of Sri Lanka’s medieval civilization. With its rich history and cultural significance, Polonnaruwa is a must visit destination for history enthusiasts and heritage travelers."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "riverston",
    "name": "Riverston “Misty Highlands of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Riverston is a scenic hill country destination known for its misty mountains, lush forests, and breathtaking viewpoints. Ideal for hiking and nature",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/Riverstone.jpeg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/Riverstone.jpeg",
    "metaChips": [
      "Riverston, Sri Lanka",
      "Central Province",
      "Adventurouse City"
    ],
    "introParagraphs": [
      "Riverston is a scenic hill country destination known for its misty mountains, lush forests, and breathtaking viewpoints. Ideal for hiking and nature exploration, it offers stunning panoramas, waterfalls, and serene landscapes. its perfect for travelers seeking adventure, Tranquillity, and a close connection with Sri Lanka’s highland beauty."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "sigiriya",
    "name": "Sigiriya “The Lion Rock kingdom of Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Sigiriya is home to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site famed for its ancient frescoes, impressive gardens, and remarkable",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/Beauty_of_Sigiriya_by_Binuka-edited.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/Beauty_of_Sigiriya_by_Binuka-edited.jpg",
    "metaChips": [
      "Sigiriya, Sri Lanka",
      "Central Province",
      "Archeological City"
    ],
    "introParagraphs": [
      "Sigiriya is home to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site famed for its ancient frescoes, impressive gardens, and remarkable history. Surrounded by lush landscapes, Sigiriya offers visitors a unique blend of adventure, culture, and breathtaking views, making it a must visit destination in Sri Lanka."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "sinharaja",
    "name": "Sinharaja “A Verdant Jewel of Biodiversity”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Sinharaja Forest Reserve is a UNESCO World Heritage rainforest renowned for its incredible biodiversity and lush greenery. Home to rare endemic species of",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/06/Sinharaja-slider01.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/06/Sinharaja-slider01.webp",
    "metaChips": [
      "Sinharaja, Sri Lanka",
      "Sabaragamuwa Province",
      "Tropical Rain Forest"
    ],
    "introParagraphs": [
      "Sinharaja Forest Reserve is a UNESCO World Heritage rainforest renowned for its incredible biodiversity and lush greenery. Home to rare endemic species of flora and fauna, it offers visitors immersive nature walks, birdwatching, and trekking experiences. its a paradise for nature lovers and eco tourists seeking adventure and Tranquillity in Sri Lanka’s pristine wilderness."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "tangalle",
    "name": "Tangalle",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Tangalle is a serene coastal destination known for its golden beaches, calm waters, and laid back atmosphere. Visitors can relax on unspoiled shores, explore",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/08/tangalle.webp",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/08/tangalle.webp",
    "metaChips": [
      "Tangalle, Sri Lanka",
      "Southern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Tangalle is a serene coastal destination known for its golden beaches, calm waters, and laid back atmosphere. Visitors can relax on unspoiled shores, explore nearby lagoons, or enjoy turtle watching at local conservation sites. its perfect for travelers seeking a peaceful beach getaway surrounded by natural beauty."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "tissa-yala",
    "name": "Tissa - Yala “The Gateway to Sri Lanka’s Wildlife and History”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Tissamaharama is a gateway to Sri Lanka’s wildlife and heritage, located near the famous Yala National Park and Bundala National Park. Known for its serene",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/Tissamaharama_Stupa.jpeg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/Tissamaharama_Stupa.jpeg",
    "metaChips": [
      "Tissa - Yala, Sri Lanka",
      "Southern Province",
      "Cultural City"
    ],
    "introParagraphs": [
      "Tissamaharama is a gateway to Sri Lanka’s wildlife and heritage, located near the famous Yala National Park and Bundala National Park. Known for its serene reservoirs and historic temples, Tissamaharama offers a blend of nature, culture, and adventure, making it an ideal base for safari tours and eco tourism."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "trincomalee",
    "name": "Trincomalee “The Coastal Gem”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "Trincomalee is a beautiful coastal city famous for its pristine beaches, deep water harbour, and historic sites. Visitors can explore attractions like the",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/trincomalee-fort-frederik-koneswaram-temple.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/trincomalee-fort-frederik-koneswaram-temple.jpg",
    "metaChips": [
      "Trincomalee, Sri Lanka",
      "Eastern Province",
      "Coastal City"
    ],
    "introParagraphs": [
      "Trincomalee is a beautiful coastal city famous for its pristine beaches, deep water harbour, and historic sites. Visitors can explore attractions like the Koneswaram Temple, enjoy snorkeling and diving in crystal clear waters, or relax along scenic shores. Trincomalee is a perfect destination for culture, adventure, and seaside relaxation."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  },
  {
    "slug": "udawalawa",
    "name": "Udawalawa “A Wildlife Heaven in Sri Lanka”",
    "province": "Destination",
    "provinceShort": "Destination",
    "categorySlug": "",
    "countLabel": "0 attractions",
    "description": "The Leaf Udawalawa",
    "lead": "",
    "heroImage": "https://4melankatours.com/wp-content/uploads/2024/05/2_udawalawe-safari-elephant-transit-home-visit-with-lunch-from-hambantota-harbor.jpg",
    "cardImage": "https://4melankatours.com/wp-content/uploads/2024/05/2_udawalawe-safari-elephant-transit-home-visit-with-lunch-from-hambantota-harbor.jpg",
    "metaChips": [
      "Udawalawa, Sri Lanka",
      "Sabaragamuwa Province",
      "Adventurous City"
    ],
    "introParagraphs": [
      "Udawalawe is a nature lover’s paradise, best known for the Udawalawe National Park, a sanctuary famous for wild elephants gathering and diverse wildlife. Visitors can enjoy safari tours, birdwatching, and scenic landscapes, making Udawalawe an ideal destination for eco tourism and wildlife adventures."
    ],
    "features": [],
    "attractions": [],
    "hotels": [],
    "restaurants": [],
    "relatedTourSlugs": []
  }
];
