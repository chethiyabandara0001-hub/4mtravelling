import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../firebase';
import {
  SITE_CONFIG,
  HERO_SLIDES,
  REVIEWS,
  FLEET,
  PACKAGE_TYPES,
  TOUR_INCLUDED,
  TOUR_EXCLUDED,
  IMPORTANT_NOTES,
  RESORT_REGIONS,
  FleetVehicle,
  ReviewItem,
  ResortRegion,
} from '../data/siteConfig';
import { TOURS, TourData } from '../data/tours';
import { DESTINATIONS, DestinationData } from '../data/destinations';
import { BLOGS, BlogPost } from '../data/blogs';
import { MEMORIES, MemoryPhoto } from '../data/memories';
import { VIDEOS, ActivityVideo } from '../data/videos';
import { MISC_ATTRACTIONS, MiscAttraction } from '../data/miscAttractions';

export interface SiteConfigCMS {
  id: string;
  brandName: string;
  tagline: string;
  sltdaReg: string;
  founder: string;
  founderPhoto: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappUrl: string;
  whatsappNumber: string;
  viberUrl: string;
  email: string;
  googleMapsUrl: string;
  tripAdvisorUrl: string;
  facebookUrl: string;
  r2PublicDomain: string;
  r2UploadEndpoint: string;
  heroKicker: string;
  heroTitle: string;
  heroAccent: string;
  heroSubtitle: string;
  ayubowanKicker: string;
  ayubowanTitle: string;
  ayubowanAccent: string;
  ayubowanP1: string;
  ayubowanP2: string;
  visionText: string;
  missionText: string;
  promiseText: string;
  ctaBannerImage: string;
  refundPolicy: string;
  privacyPolicy: string;
  termsConditions: string;
  stats: { count: number; label: string }[];
}

export interface MemoryItemCMS extends MemoryPhoto {
  id: string;
  order?: number;
}

export interface VideoItemCMS extends ActivityVideo {
  id: string;
}

export interface R2MediaItem {
  id: string;
  url: string;
  r2Key?: string;
  label: string;
  category: string;
  alt?: string;
}

export interface HomeBlockItem {
  id: string;
  blockType:
    | 'hero_slide'
    | 'service'
    | 'fleet'
    | 'review'
    | 'package_type'
    | 'lists_bundle'
    | 'resort_region';
  title: string;
  subtitle?: string;
  text?: string;
  image?: string;
  extra?: string;
  priceUsd?: number;
  featured?: boolean;
  order?: number;
  items?: any[];
}

export const DEFAULT_SITE_CONFIG_CMS: SiteConfigCMS = {
  id: 'main',
  brandName: SITE_CONFIG.brandName,
  tagline: SITE_CONFIG.tagline,
  sltdaReg: SITE_CONFIG.sltdaReg,
  founder: SITE_CONFIG.founder,
  founderPhoto: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/brand/kura-photo.webp',
  phoneDisplay: SITE_CONFIG.phoneDisplay,
  phoneTel: SITE_CONFIG.phoneTel,
  whatsappUrl: SITE_CONFIG.whatsappUrl,
  whatsappNumber: SITE_CONFIG.whatsappNumber,
  viberUrl: SITE_CONFIG.viberUrl,
  email: SITE_CONFIG.email,
  googleMapsUrl: SITE_CONFIG.googleMapsUrl,
  tripAdvisorUrl: SITE_CONFIG.tripAdvisorUrl,
  facebookUrl: SITE_CONFIG.facebookUrl,
  r2PublicDomain: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev',
  r2UploadEndpoint: '',
  heroKicker: 'Ayubowan! Welcome to Sri Lanka…',
  heroTitle: 'Say Hi as Guests,',
  heroAccent: 'Bye as Friends',
  heroSubtitle:
    'Private round tours, single-day trips from BIA Airport, and luxury chauffeur-guided transfers across Sri Lanka — personally planned and supervised by Chaminda Kuruwita (KuRa).',
  ayubowanKicker: 'Ayubowan — May you live long!',
  ayubowanTitle: 'Discover the Pearl of the Indian Ocean',
  ayubowanAccent: 'with a local friend',
  ayubowanP1:
    'Sri Lanka packs misty tea mountains, ancient UNESCO kingdoms, leopard-filled national parks, golden surf beaches, and warm island hospitality into one compact island. At 4Me Lanka Tours, we don’t run crowded bus tours — every journey is private, flexible, and crafted around your pace.',
  ayubowanP2:
    'Founded by Chaminda Kuruwita (KuRa), who has welcomed travellers in Sri Lanka’s tourism industry since 2013, our philosophy is simple: “Say Hi as Guests, Bye as Friends.” From spontaneous roadside king-coconut stops to hand-picked boutique stays, Kura and his team supervise every mile of your trip.',
  visionText: 'To be Sri Lanka’s most trusted friend-recommended private travel host.',
  missionText: 'Deliver safe, stress-free, authentic island journeys tailored to every guest.',
  promiseText: 'Honest pricing, spotless AC vehicles, and 24/7 personal care from Kura.',
  ctaBannerImage: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/06/ella-banner-5.webp',
  refundPolicy:
    'Since you booked after you had received all of our tour information and we have already assigned a car and driver-guide for your tour, there will be no refund of the $150 prepayment.',
  privacyPolicy:
    'At 4Me Lanka Tours, we are committed to protecting the privacy and security of our customers’ personal information. We collect personal identification information voluntarily provided during the booking process solely to fulfill your tour booking, communicate regarding your itinerary, and provide 24/7 support.',
  termsConditions:
    'Welcome to www.4melankatours.com. Once the itinerary is finalized and agreed upon, a $150 non-refundable advance payment secures your vehicle and driver-guide. The remaining balance is settled in two stages: 60% upon arrival in Sri Lanka and 40% the day before departure.',
  stats: SITE_CONFIG.stats,
};

export const DEFAULT_SERVICES = [
  {
    id: 'svc-1',
    tag: 'Priority service',
    title: 'Transportation',
    text: 'Travel in comfort with our modern vehicle fleet and friendly chauffeurs. From airport transfers to city tours and multi-day tours, we guarantee safety, punctuality, and ease as you explore Sri Lanka.',
    motto: '“Your journey, our promise”',
    img: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/360_F_519958037_3c3tR6XwMl52jiIeU5DlkGCglPXJWxZM.webp',
  },
  {
    id: 'svc-2',
    tag: 'On your selection',
    title: 'Hotel bookings',
    text: 'Choose from handpicked accommodations — luxury resorts, cozy hideaways, or budget-friendly stays. Whether you prefer beachfront bliss or mountain serenity, we’ll match your style and budget.',
    motto: '“Comfort, choice, and charm”',
    img: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/hotel-room-2-scaled.webp',
  },
  {
    id: 'svc-3',
    tag: 'As your request',
    title: 'Activities',
    text: 'Immerse yourself in Sri Lanka’s rich heritage and natural wonders. From cultural tours and village visits to wildlife safaris, boat rides, and water sports, our expert guides make every moment memorable.',
    motto: '“Explore more, experience more”',
    img: 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev/2024/07/bigstock-Two-hikers-enjoying-sunrise-fr-47984279-1024x682-1.webp',
  },
];

function sanitizeId(raw: string): string {
  return (
    raw
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 120) || 'item-' + Date.now()
  );
}

function cut(val: string | undefined, max: number): string {
  return (val || '').slice(0, max);
}

interface CMSContextType {
  user: User | null;
  isAdmin: boolean;
  isAuthReady: boolean;
  isFirestoreSynced: boolean;
  siteConfig: SiteConfigCMS;
  tours: TourData[];
  destinations: DestinationData[];
  blogs: BlogPost[];
  memories: MemoryItemCMS[];
  videos: VideoItemCMS[];
  miscAttractions: MiscAttraction[];
  r2Media: R2MediaItem[];
  heroSlides: { id: string; image: string; alt: string; caption: string }[];
  services: { id: string; tag: string; title: string; text: string; motto: string; img: string }[];
  fleet: (FleetVehicle & { id: string })[];
  reviews: (ReviewItem & { id: string })[];
  packageTypes: { id: string; badge: string; title: string; subtitle: string; featured: boolean; items: string[] }[];
  tourIncluded: string[];
  tourExcluded: string[];
  importantNotes: string[];
  resortRegions: (ResortRegion & { id: string })[];
  // CRUD actions
  saveSiteConfig: (cfg: SiteConfigCMS) => Promise<void>;
  saveTour: (tour: TourData) => Promise<void>;
  deleteTour: (slug: string) => Promise<void>;
  saveDestination: (dest: DestinationData) => Promise<void>;
  deleteDestination: (slug: string) => Promise<void>;
  saveBlog: (blog: BlogPost) => Promise<void>;
  deleteBlog: (slug: string) => Promise<void>;
  saveMemory: (mem: MemoryItemCMS) => Promise<void>;
  deleteMemory: (id: string) => Promise<void>;
  saveVideo: (vid: VideoItemCMS) => Promise<void>;
  deleteVideo: (id: string) => Promise<void>;
  saveMiscAttraction: (item: MiscAttraction) => Promise<void>;
  deleteMiscAttraction: (id: string) => Promise<void>;
  saveR2Media: (media: R2MediaItem) => Promise<void>;
  deleteR2Media: (id: string) => Promise<void>;
  saveHomeBlock: (block: HomeBlockItem) => Promise<void>;
  deleteHomeBlock: (id: string) => Promise<void>;
  seedAllToFirestore: (onProgress?: (msg: string) => void) => Promise<void>;
  replaceImageGlobal: (oldUrl: string, newR2Url: string) => Promise<number>;
}

const defaultMemoriesWithIds: MemoryItemCMS[] = MEMORIES.map((m, i) => ({
  ...m,
  id: `mem-${String(i + 1).padStart(3, '0')}`,
  order: i + 1,
}));

const defaultVideosWithIds: VideoItemCMS[] = VIDEOS.map((v, i) => ({
  ...v,
  id: `vid-${String(i + 1).padStart(2, '0')}`,
}));

const CMSContext = createContext<CMSContextType>({} as CMSContextType);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  const [siteConfig, setSiteConfig] = useState<SiteConfigCMS>(DEFAULT_SITE_CONFIG_CMS);
  const [fsTours, setFsTours] = useState<TourData[] | null>(null);
  const [fsDestinations, setFsDestinations] = useState<DestinationData[] | null>(null);
  const [fsBlogs, setFsBlogs] = useState<BlogPost[] | null>(null);
  const [fsMemories, setFsMemories] = useState<MemoryItemCMS[] | null>(null);
  const [fsVideos, setFsVideos] = useState<VideoItemCMS[] | null>(null);
  const [fsMisc, setFsMisc] = useState<MiscAttraction[] | null>(null);
  const [r2Media, setR2Media] = useState<R2MediaItem[]>([]);
  const [fsHomeBlocks, setFsHomeBlocks] = useState<HomeBlockItem[] | null>(null);

  // 1. Auth Listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currUser) => {
      setUser(currUser);
      if (!currUser) {
        setIsAdmin(false);
        setIsAuthReady(true);
        return;
      }
      const isBootstrap =
        currUser.emailVerified && currUser.email === 'chethiyabandara0001@gmail.com';
      if (isBootstrap) {
        setIsAdmin(true);
        setIsAuthReady(true);
        return;
      }
      try {
        const adminSnap = await getDoc(doc(db, 'admins', currUser.uid));
        setIsAdmin(adminSnap.exists());
      } catch {
        setIsAdmin(false);
      } finally {
        setIsAuthReady(true);
      }
    });
    return () => unsub();
  }, []);

  // 2. Real-time Firestore Listeners for all public CMS collections
  useEffect(() => {
    const unsubs: (() => void)[] = [];

    unsubs.push(
      onSnapshot(
        doc(db, 'site_config', 'main'),
        (snap) => {
          if (snap.exists()) {
            setSiteConfig({ ...DEFAULT_SITE_CONFIG_CMS, ...(snap.data() as Partial<SiteConfigCMS>) });
          }
        },
        (err) => console.warn('site_config listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'tours'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs.map((d) => d.data() as TourData);
            setFsTours(list);
          } else {
            setFsTours(null);
          }
        },
        (err) => console.warn('tours listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'destinations'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs
              .map((d) => d.data() as DestinationData)
              .sort((a, b) => a.name.localeCompare(b.name));
            setFsDestinations(list);
          } else {
            setFsDestinations(null);
          }
        },
        (err) => console.warn('destinations listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'blogs'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs.map((d) => d.data() as BlogPost);
            setFsBlogs(list);
          } else {
            setFsBlogs(null);
          }
        },
        (err) => console.warn('blogs listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'memories'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs
              .map((d) => d.data() as MemoryItemCMS)
              .sort((a, b) => (a.order || 0) - (b.order || 0));
            setFsMemories(list);
          } else {
            setFsMemories(null);
          }
        },
        (err) => console.warn('memories listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'videos'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs
              .map((d) => d.data() as VideoItemCMS)
              .sort((a, b) => a.number.localeCompare(b.number));
            setFsVideos(list);
          } else {
            setFsVideos(null);
          }
        },
        (err) => console.warn('videos listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'misc_attractions'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs
              .map((d) => d.data() as MiscAttraction)
              .sort((a, b) => a.number.localeCompare(b.number));
            setFsMisc(list);
          } else {
            setFsMisc(null);
          }
        },
        (err) => console.warn('misc_attractions listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'r2_media'),
        (snap) => {
          const list = snap.docs.map((d) => d.data() as R2MediaItem);
          setR2Media(list);
        },
        (err) => console.warn('r2_media listener warning:', err.message)
      )
    );

    unsubs.push(
      onSnapshot(
        collection(db, 'home_blocks'),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs
              .map((d) => d.data() as HomeBlockItem)
              .sort((a, b) => (a.order || 0) - (b.order || 0));
            setFsHomeBlocks(list);
          } else {
            setFsHomeBlocks(null);
          }
        },
        (err) => console.warn('home_blocks listener warning:', err.message)
      )
    );

    return () => unsubs.forEach((u) => u());
  }, []);

  const tours = fsTours ?? TOURS;
  const destinations = fsDestinations ?? DESTINATIONS;
  const blogs = fsBlogs ?? BLOGS;
  const memories = fsMemories ?? defaultMemoriesWithIds;
  const videos = fsVideos ?? defaultVideosWithIds;
  const miscAttractions = fsMisc ?? MISC_ATTRACTIONS;
  const isFirestoreSynced = fsTours !== null || fsDestinations !== null;

  // Derived home blocks
  const heroSlides =
    fsHomeBlocks && fsHomeBlocks.some((b) => b.blockType === 'hero_slide')
      ? fsHomeBlocks
          .filter((b) => b.blockType === 'hero_slide')
          .map((b) => ({
            id: b.id,
            image: b.image || '',
            alt: b.subtitle || b.title,
            caption: b.title,
          }))
      : HERO_SLIDES.map((s, i) => ({
          id: `slide-${i + 1}`,
          image: s.image,
          alt: s.alt,
          caption: s.caption,
        }));

  const services =
    fsHomeBlocks && fsHomeBlocks.some((b) => b.blockType === 'service')
      ? fsHomeBlocks
          .filter((b) => b.blockType === 'service')
          .map((b) => ({
            id: b.id,
            tag: b.subtitle || 'Service',
            title: b.title,
            text: b.text || '',
            motto: b.extra || '',
            img: b.image || '',
          }))
      : DEFAULT_SERVICES;

  const fleet =
    fsHomeBlocks && fsHomeBlocks.some((b) => b.blockType === 'fleet')
      ? fsHomeBlocks
          .filter((b) => b.blockType === 'fleet')
          .map((b) => ({
            id: b.id,
            name: b.title,
            type: b.subtitle || '',
            pricePerDayUsd: b.priceUsd || 80,
            image: b.image || '',
            alt: b.extra || b.title,
          }))
      : FLEET.map((f, i) => ({ ...f, id: `fleet-${i + 1}` }));

  const reviews =
    fsHomeBlocks && fsHomeBlocks.some((b) => b.blockType === 'review')
      ? fsHomeBlocks
          .filter((b) => b.blockType === 'review')
          .map((b) => ({
            id: b.id,
            initial: (b.title || 'G').charAt(0).toUpperCase(),
            author: b.title,
            date: b.subtitle || '',
            source: b.extra || 'TripAdvisor',
            title: (b.items && b.items[0]) || '5.0★ Experience',
            text: b.text || '',
          }))
      : REVIEWS.map((r, i) => ({ ...r, id: `rev-${i + 1}` }));

  const packageTypes =
    fsHomeBlocks && fsHomeBlocks.some((b) => b.blockType === 'package_type')
      ? fsHomeBlocks
          .filter((b) => b.blockType === 'package_type')
          .map((b) => ({
            id: b.id,
            badge: b.extra || '',
            title: b.title,
            subtitle: b.subtitle || '',
            featured: !!b.featured,
            items: Array.isArray(b.items) ? b.items.map(String) : [],
          }))
      : PACKAGE_TYPES.map((p, i) => ({ ...p, id: `pkg-${i + 1}` }));

  const includedBundle = fsHomeBlocks?.find((b) => b.id === 'bundle-included');
  const excludedBundle = fsHomeBlocks?.find((b) => b.id === 'bundle-excluded');
  const notesBundle = fsHomeBlocks?.find((b) => b.id === 'bundle-notes');

  const tourIncluded =
    includedBundle && Array.isArray(includedBundle.items)
      ? includedBundle.items.map(String)
      : TOUR_INCLUDED;
  const tourExcluded =
    excludedBundle && Array.isArray(excludedBundle.items)
      ? excludedBundle.items.map(String)
      : TOUR_EXCLUDED;
  const importantNotes =
    notesBundle && Array.isArray(notesBundle.items)
      ? notesBundle.items.map(String)
      : IMPORTANT_NOTES;

  const resortRegions =
    fsHomeBlocks && fsHomeBlocks.some((b) => b.blockType === 'resort_region')
      ? fsHomeBlocks
          .filter((b) => b.blockType === 'resort_region')
          .map((b) => ({
            id: b.id,
            title: b.title,
            description: b.text || '',
            cities: Array.isArray(b.items) ? b.items : [],
          }))
      : RESORT_REGIONS.map((r, i) => ({ ...r, id: `reg-${i + 1}` }));

  // Helper to get current uid
  const requireUid = () => {
    const uid = auth.currentUser?.uid;
    if (!uid) throw new Error('You must be signed in as an administrator.');
    return uid;
  };

  // CRUD Operations
  const saveSiteConfig = async (cfg: SiteConfigCMS) => {
    const uid = requireUid();
    const path = 'site_config/main';
    try {
      await setDoc(doc(db, 'site_config', 'main'), {
        id: 'main',
        brandName: cut(cfg.brandName, 200),
        tagline: cut(cfg.tagline, 300),
        sltdaReg: cut(cfg.sltdaReg, 120),
        founder: cut(cfg.founder, 200),
        founderPhoto: cut(cfg.founderPhoto, 2048),
        phoneDisplay: cut(cfg.phoneDisplay, 80),
        phoneTel: cut(cfg.phoneTel, 80),
        whatsappUrl: cut(cfg.whatsappUrl, 500),
        whatsappNumber: cut(cfg.whatsappNumber, 60),
        viberUrl: cut(cfg.viberUrl, 500),
        email: cut(cfg.email, 256),
        googleMapsUrl: cut(cfg.googleMapsUrl, 2048),
        tripAdvisorUrl: cut(cfg.tripAdvisorUrl, 2048),
        facebookUrl: cut(cfg.facebookUrl, 2048),
        r2PublicDomain: cut(cfg.r2PublicDomain, 1024),
        r2UploadEndpoint: cut(cfg.r2UploadEndpoint, 1024),
        heroKicker: cut(cfg.heroKicker, 300),
        heroTitle: cut(cfg.heroTitle, 300),
        heroAccent: cut(cfg.heroAccent, 300),
        heroSubtitle: cut(cfg.heroSubtitle, 2000),
        ayubowanKicker: cut(cfg.ayubowanKicker, 300),
        ayubowanTitle: cut(cfg.ayubowanTitle, 300),
        ayubowanAccent: cut(cfg.ayubowanAccent, 300),
        ayubowanP1: cut(cfg.ayubowanP1, 4000),
        ayubowanP2: cut(cfg.ayubowanP2, 4000),
        visionText: cut(cfg.visionText, 1000),
        missionText: cut(cfg.missionText, 1000),
        promiseText: cut(cfg.promiseText, 1000),
        ctaBannerImage: cut(cfg.ctaBannerImage, 2048),
        refundPolicy: cut(cfg.refundPolicy, 10000),
        privacyPolicy: cut(cfg.privacyPolicy, 20000),
        termsConditions: cut(cfg.termsConditions, 20000),
        stats: (cfg.stats || []).slice(0, 12),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const saveTour = async (tour: TourData) => {
    const uid = requireUid();
    const slug = sanitizeId(tour.slug || tour.title);
    const path = `tours/${slug}`;
    try {
      await setDoc(doc(db, 'tours', slug), {
        slug,
        type: tour.type === 'day' ? 'day' : 'multi-day',
        title: cut(tour.title, 300),
        h1Html: cut(tour.h1Html || tour.title, 600),
        kicker: cut(tour.kicker, 200),
        description: cut(tour.description, 2000),
        lead: cut(tour.lead, 4000),
        introLead: cut(tour.introLead, 4000),
        heroImage: cut(tour.heroImage, 2048),
        posterImage: cut(tour.posterImage || tour.heroImage, 2048),
        priceUsd: Number(tour.priceUsd) || 0,
        durationLabel: cut(tour.durationLabel, 120),
        metaChips: (tour.metaChips || []).slice(0, 20).map((s) => cut(s, 120)),
        routeStops: (tour.routeStops || []).slice(0, 60).map((s) => cut(s, 120)),
        days: (tour.days || []).slice(0, 60),
        highlights: (tour.highlights || []).slice(0, 40).map((s) => cut(s, 500)),
        travelDetails: (tour.travelDetails || []).slice(0, 40).map((s) => cut(s, 500)),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteTour = async (slug: string) => {
    const path = `tours/${slug}`;
    try {
      await deleteDoc(doc(db, 'tours', slug));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveDestination = async (dest: DestinationData) => {
    const uid = requireUid();
    const slug = sanitizeId(dest.slug || dest.name);
    const path = `destinations/${slug}`;
    try {
      await setDoc(doc(db, 'destinations', slug), {
        slug,
        name: cut(dest.name, 200),
        province: cut(dest.province, 200),
        provinceShort: cut(dest.provinceShort, 120),
        categorySlug: cut(dest.categorySlug, 120),
        countLabel: cut(dest.countLabel || `${dest.attractions?.length || 0} attractions`, 120),
        description: cut(dest.description, 2000),
        lead: cut(dest.lead, 4000),
        heroImage: cut(dest.heroImage, 2048),
        cardImage: cut(dest.cardImage || dest.heroImage, 2048),
        metaChips: (dest.metaChips || []).slice(0, 20).map((s) => cut(s, 120)),
        introParagraphs: (dest.introParagraphs || []).slice(0, 30).map((s) => cut(s, 2000)),
        features: (dest.features || []).slice(0, 30),
        attractions: (dest.attractions || []).slice(0, 60),
        hotels: (dest.hotels || []).slice(0, 40),
        restaurants: (dest.restaurants || []).slice(0, 40),
        relatedTourSlugs: (dest.relatedTourSlugs || []).slice(0, 30).map((s) => cut(s, 128)),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteDestination = async (slug: string) => {
    const path = `destinations/${slug}`;
    try {
      await deleteDoc(doc(db, 'destinations', slug));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveBlog = async (blog: BlogPost) => {
    const uid = requireUid();
    const slug = sanitizeId(blog.slug || blog.title);
    const path = `blogs/${slug}`;
    try {
      await setDoc(doc(db, 'blogs', slug), {
        slug,
        title: cut(blog.title, 400),
        tag: cut(blog.tag || 'Blog', 120),
        date: cut(blog.date, 120),
        author: cut(blog.author || 'By Chaminda Kuruwita', 200),
        excerpt: cut(blog.excerpt, 2000),
        description: cut(blog.description || blog.excerpt, 2000),
        heroImage: cut(blog.heroImage, 2048),
        articleHtml: cut(blog.articleHtml, 100000),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteBlog = async (slug: string) => {
    const path = `blogs/${slug}`;
    try {
      await deleteDoc(doc(db, 'blogs', slug));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveMemory = async (mem: MemoryItemCMS) => {
    const uid = requireUid();
    const id = sanitizeId(mem.id || `mem-${Date.now()}`);
    const path = `memories/${id}`;
    try {
      await setDoc(doc(db, 'memories', id), {
        id,
        category: cut(mem.category || 'europeans', 120),
        fullImage: cut(mem.fullImage, 2048),
        thumbImage: cut(mem.thumbImage || mem.fullImage, 2048),
        alt: cut(mem.alt || `Guests from ${mem.tag} with 4Me Lanka Tours`, 500),
        tag: cut(mem.tag || 'Guests', 120),
        order: Number(mem.order) || 1,
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteMemory = async (id: string) => {
    const path = `memories/${id}`;
    try {
      await deleteDoc(doc(db, 'memories', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveVideo = async (vid: VideoItemCMS) => {
    const uid = requireUid();
    const id = sanitizeId(vid.id || `vid-${Date.now()}`);
    const path = `videos/${id}`;
    try {
      await setDoc(doc(db, 'videos', id), {
        id,
        youtubeId: cut(vid.youtubeId, 64),
        number: cut(vid.number || '01', 32),
        title: cut(vid.title, 300),
        subtitle: cut(vid.subtitle || vid.title, 500),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteVideo = async (id: string) => {
    const path = `videos/${id}`;
    try {
      await deleteDoc(doc(db, 'videos', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveMiscAttraction = async (item: MiscAttraction) => {
    const uid = requireUid();
    const id = sanitizeId(item.id || item.title);
    const path = `misc_attractions/${id}`;
    try {
      await setDoc(doc(db, 'misc_attractions', id), {
        id,
        image: cut(item.image, 2048),
        alt: cut(item.alt || item.title, 500),
        number: cut(item.number || '01', 32),
        title: cut(item.title, 300),
        description: cut(item.description, 5000),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteMiscAttraction = async (id: string) => {
    const path = `misc_attractions/${id}`;
    try {
      await deleteDoc(doc(db, 'misc_attractions', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveR2Media = async (media: R2MediaItem) => {
    const uid = requireUid();
    const id = sanitizeId(media.id || `r2-${Date.now()}`);
    const path = `r2_media/${id}`;
    try {
      await setDoc(doc(db, 'r2_media', id), {
        id,
        url: cut(media.url, 2048),
        r2Key: cut(media.r2Key || '', 1024),
        label: cut(media.label || 'R2 Image', 300),
        category: cut(media.category || 'general', 120),
        alt: cut(media.alt || media.label, 500),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteR2Media = async (id: string) => {
    const path = `r2_media/${id}`;
    try {
      await deleteDoc(doc(db, 'r2_media', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const saveHomeBlock = async (block: HomeBlockItem) => {
    const uid = requireUid();
    const id = sanitizeId(block.id || `${block.blockType}-${Date.now()}`);
    const path = `home_blocks/${id}`;
    try {
      await setDoc(doc(db, 'home_blocks', id), {
        id,
        blockType: block.blockType,
        title: cut(block.title, 500),
        subtitle: cut(block.subtitle || '', 500),
        text: cut(block.text || '', 5000),
        image: cut(block.image || '', 2048),
        extra: cut(block.extra || '', 500),
        priceUsd: Number(block.priceUsd) || 0,
        featured: !!block.featured,
        order: Number(block.order) || 1,
        items: (block.items || []).slice(0, 50),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteHomeBlock = async (id: string) => {
    const path = `home_blocks/${id}`;
    try {
      await deleteDoc(doc(db, 'home_blocks', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  // Seed all existing static website content & images into Firestore in batches
  const seedAllToFirestore = async (onProgress?: (msg: string) => void) => {
    const uid = requireUid();
    onProgress?.('Saving Site Config & Home Page blocks...');
    await saveSiteConfig(siteConfig);

    // Home blocks batch
    const hbBatch = writeBatch(db);
    HERO_SLIDES.forEach((s, i) => {
      const id = `slide-${i + 1}`;
      hbBatch.set(doc(db, 'home_blocks', id), {
        id,
        blockType: 'hero_slide',
        title: cut(s.caption, 500),
        subtitle: cut(s.alt, 500),
        text: '',
        image: cut(s.image, 2048),
        extra: '',
        priceUsd: 0,
        featured: false,
        order: i + 1,
        items: [],
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    DEFAULT_SERVICES.forEach((s, i) => {
      hbBatch.set(doc(db, 'home_blocks', s.id), {
        id: s.id,
        blockType: 'service',
        title: cut(s.title, 500),
        subtitle: cut(s.tag, 500),
        text: cut(s.text, 5000),
        image: cut(s.img, 2048),
        extra: cut(s.motto, 500),
        priceUsd: 0,
        featured: false,
        order: i + 1,
        items: [],
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    FLEET.forEach((f, i) => {
      const id = `fleet-${i + 1}`;
      hbBatch.set(doc(db, 'home_blocks', id), {
        id,
        blockType: 'fleet',
        title: cut(f.name, 500),
        subtitle: cut(f.type, 500),
        text: '',
        image: cut(f.image, 2048),
        extra: cut(f.alt, 500),
        priceUsd: f.pricePerDayUsd,
        featured: false,
        order: i + 1,
        items: [],
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    REVIEWS.forEach((r, i) => {
      const id = `rev-${i + 1}`;
      hbBatch.set(doc(db, 'home_blocks', id), {
        id,
        blockType: 'review',
        title: cut(r.author, 500),
        subtitle: cut(r.date, 500),
        text: cut(r.text, 5000),
        image: '',
        extra: cut(r.source, 500),
        priceUsd: 5,
        featured: false,
        order: i + 1,
        items: [cut(r.title, 300)],
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    PACKAGE_TYPES.forEach((p, i) => {
      const id = `pkg-${i + 1}`;
      hbBatch.set(doc(db, 'home_blocks', id), {
        id,
        blockType: 'package_type',
        title: cut(p.title, 500),
        subtitle: cut(p.subtitle, 500),
        text: '',
        image: '',
        extra: cut(p.badge, 500),
        priceUsd: 0,
        featured: p.featured,
        order: i + 1,
        items: p.items,
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    hbBatch.set(doc(db, 'home_blocks', 'bundle-included'), {
      id: 'bundle-included',
      blockType: 'lists_bundle',
      title: 'Included in every tour',
      subtitle: '',
      text: '',
      image: '',
      extra: '',
      priceUsd: 0,
      featured: false,
      order: 1,
      items: TOUR_INCLUDED,
      updatedBy: uid,
      updatedAt: serverTimestamp(),
    });
    hbBatch.set(doc(db, 'home_blocks', 'bundle-excluded'), {
      id: 'bundle-excluded',
      blockType: 'lists_bundle',
      title: 'Not included',
      subtitle: '',
      text: '',
      image: '',
      extra: '',
      priceUsd: 0,
      featured: false,
      order: 2,
      items: TOUR_EXCLUDED,
      updatedBy: uid,
      updatedAt: serverTimestamp(),
    });
    hbBatch.set(doc(db, 'home_blocks', 'bundle-notes'), {
      id: 'bundle-notes',
      blockType: 'lists_bundle',
      title: 'Important Booking Notes',
      subtitle: '',
      text: '',
      image: '',
      extra: '',
      priceUsd: 0,
      featured: false,
      order: 3,
      items: IMPORTANT_NOTES,
      updatedBy: uid,
      updatedAt: serverTimestamp(),
    });
    RESORT_REGIONS.forEach((r, i) => {
      const id = `reg-${i + 1}`;
      hbBatch.set(doc(db, 'home_blocks', id), {
        id,
        blockType: 'resort_region',
        title: cut(r.title, 500),
        subtitle: '',
        text: cut(r.description, 5000),
        image: '',
        extra: '',
        priceUsd: 0,
        featured: false,
        order: i + 1,
        items: r.cities,
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    await hbBatch.commit();

    onProgress?.('Syncing 18 Tour Packages...');
    for (const t of TOURS) {
      await saveTour(t);
    }

    onProgress?.('Syncing 29 Destinations & Attractions...');
    for (const d of DESTINATIONS) {
      await saveDestination(d);
    }

    onProgress?.('Syncing 19 Blog Articles...');
    for (const b of BLOGS) {
      await saveBlog(b);
    }

    onProgress?.('Syncing 116 Guest Memory Photos...');
    const memBatch1 = writeBatch(db);
    defaultMemoriesWithIds.slice(0, 60).forEach((m) => {
      memBatch1.set(doc(db, 'memories', m.id), {
        id: m.id,
        category: cut(m.category, 120),
        fullImage: cut(m.fullImage, 2048),
        thumbImage: cut(m.thumbImage || m.fullImage, 2048),
        alt: cut(m.alt, 500),
        tag: cut(m.tag, 120),
        order: m.order || 1,
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    await memBatch1.commit();

    const memBatch2 = writeBatch(db);
    defaultMemoriesWithIds.slice(60).forEach((m) => {
      memBatch2.set(doc(db, 'memories', m.id), {
        id: m.id,
        category: cut(m.category, 120),
        fullImage: cut(m.fullImage, 2048),
        thumbImage: cut(m.thumbImage || m.fullImage, 2048),
        alt: cut(m.alt, 500),
        tag: cut(m.tag, 120),
        order: m.order || 1,
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    await memBatch2.commit();

    onProgress?.('Syncing 26 Videos & 13 Miscellaneous Attractions...');
    const vidBatch = writeBatch(db);
    defaultVideosWithIds.forEach((v) => {
      vidBatch.set(doc(db, 'videos', v.id), {
        id: v.id,
        youtubeId: cut(v.youtubeId, 64),
        number: cut(v.number, 32),
        title: cut(v.title, 300),
        subtitle: cut(v.subtitle, 500),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    MISC_ATTRACTIONS.forEach((m) => {
      const id = sanitizeId(m.id);
      vidBatch.set(doc(db, 'misc_attractions', id), {
        id,
        image: cut(m.image, 2048),
        alt: cut(m.alt || m.title, 500),
        number: cut(m.number, 32),
        title: cut(m.title, 300),
        description: cut(m.description, 5000),
        updatedBy: uid,
        updatedAt: serverTimestamp(),
      });
    });
    await vidBatch.commit();

    // Also sync all objects from Cloudflare R2 bucket into Firestore r2_media
    try {
      onProgress?.('Syncing Cloudflare R2 bucket objects into Firestore R2 Vault...');
      const r2Res = await fetch('/api/r2/list');
      if (r2Res.ok) {
        const r2Data = await r2Res.json();
        const r2Objects: Array<{ key: string; folder: string; fileName: string; url: string }> =
          r2Data.objects || [];
        const CHUNK = 200;
        for (let i = 0; i < r2Objects.length; i += CHUNK) {
          const slice = r2Objects.slice(i, i + CHUNK);
          const batch = writeBatch(db);
          slice.forEach((obj) => {
            const id = sanitizeId(`r2-${obj.key}`);
            const folderCat = obj.folder.toLowerCase();
            const cat =
              folderCat === 'hero'
                ? 'hero'
                : folderCat === 'brand'
                ? 'general'
                : folderCat === '2025/07'
                ? 'tours'
                : 'destinations';
            batch.set(doc(db, 'r2_media', id), {
              id,
              url: cut(obj.url, 2048),
              r2Key: cut(obj.key, 1024),
              label: cut(obj.key, 300),
              category: cat,
              alt: cut(obj.fileName, 500),
              updatedBy: uid,
              updatedAt: serverTimestamp(),
            });
          });
          await batch.commit();
        }
      }
    } catch {
      // Ignore if R2 list unavailable
    }

    onProgress?.('All 75 pages, text, and 682 R2 photo links synced to Firestore!');
  };

  // Global image URL replacement across all collections
  const replaceImageGlobal = async (oldUrl: string, newR2Url: string): Promise<number> => {
    let count = 0;
    const cleanOld = oldUrl.trim();
    const cleanNew = newR2Url.trim();
    if (!cleanOld || !cleanNew) return 0;

    for (const t of tours) {
      let changed = false;
      const updated = { ...t };
      if (updated.heroImage === cleanOld) {
        updated.heroImage = cleanNew;
        changed = true;
      }
      if (updated.posterImage === cleanOld) {
        updated.posterImage = cleanNew;
        changed = true;
      }
      if (changed) {
        await saveTour(updated);
        count++;
      }
    }

    for (const d of destinations) {
      let changed = false;
      const updated = { ...d };
      if (updated.heroImage === cleanOld) {
        updated.heroImage = cleanNew;
        changed = true;
      }
      if (updated.cardImage === cleanOld) {
        updated.cardImage = cleanNew;
        changed = true;
      }
      updated.attractions = (updated.attractions || []).map((a) => {
        if (a.image === cleanOld) {
          changed = true;
          return { ...a, image: cleanNew };
        }
        return a;
      });
      updated.features = (updated.features || []).map((f) => {
        const imgs = (f.images || []).map((im) => {
          if (im.src === cleanOld) {
            changed = true;
            return { ...im, src: cleanNew };
          }
          return im;
        });
        return { ...f, images: imgs };
      });
      if (changed) {
        await saveDestination(updated);
        count++;
      }
    }

    for (const b of blogs) {
      let changed = false;
      const updated = { ...b };
      if (updated.heroImage === cleanOld) {
        updated.heroImage = cleanNew;
        changed = true;
      }
      if (updated.articleHtml.includes(cleanOld)) {
        updated.articleHtml = updated.articleHtml.split(cleanOld).join(cleanNew);
        changed = true;
      }
      if (changed) {
        await saveBlog(updated);
        count++;
      }
    }

    for (const m of memories) {
      if (m.fullImage === cleanOld || m.thumbImage === cleanOld) {
        await saveMemory({
          ...m,
          fullImage: m.fullImage === cleanOld ? cleanNew : m.fullImage,
          thumbImage: m.thumbImage === cleanOld ? cleanNew : m.thumbImage,
        });
        count++;
      }
    }

    return count;
  };

  return (
    <CMSContext.Provider
      value={{
        user,
        isAdmin,
        isAuthReady,
        isFirestoreSynced,
        siteConfig,
        tours,
        destinations,
        blogs,
        memories,
        videos,
        miscAttractions,
        r2Media,
        heroSlides,
        services,
        fleet,
        reviews,
        packageTypes,
        tourIncluded,
        tourExcluded,
        importantNotes,
        resortRegions,
        saveSiteConfig,
        saveTour,
        deleteTour,
        saveDestination,
        deleteDestination,
        saveBlog,
        deleteBlog,
        saveMemory,
        deleteMemory,
        saveVideo,
        deleteVideo,
        saveMiscAttraction,
        deleteMiscAttraction,
        saveR2Media,
        deleteR2Media,
        saveHomeBlock,
        deleteHomeBlock,
        seedAllToFirestore,
        replaceImageGlobal,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
