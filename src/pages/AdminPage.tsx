import React, { useState, useEffect } from 'react';
import {
  Cloud,
  Database,
  FileText,
  Globe,
  Image as ImageIcon,
  LogIn,
  LogOut,
  MapPin,
  Compass,
  Plus,
  RefreshCw,
  Save,
  Settings,
  ShieldCheck,
  Sparkles,
  Trash2,
  Video,
  Check,
  Search,
  Copy,
  Replace,
  Upload,
} from 'lucide-react';
import { useCMS, SiteConfigCMS, MemoryItemCMS, VideoItemCMS } from '../context/CMSContext';
import { signInWithGoogle, signOutUser } from '../firebase';
import { R2ImageInput } from '../components/admin/R2ImageInput';
import { SmartImage } from '../components/shared/SmartImage';
import { TourData } from '../data/tours';
import { DestinationData } from '../data/destinations';
import { BlogPost } from '../data/blogs';
import { MiscAttraction } from '../data/miscAttractions';

type AdminTab =
  | 'r2'
  | 'site'
  | 'tours'
  | 'destinations'
  | 'blogs'
  | 'memories'
  | 'videos_misc';

export const AdminPage: React.FC = () => {
  const {
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
  } = useCMS();

  const [activeTab, setActiveTab] = useState<AdminTab>('r2');
  const [bannerMsg, setBannerMsg] = useState<string>('');
  const [syncing, setSyncing] = useState<boolean>(false);
  const [confirmDeleteKey, setConfirmDeleteKey] = useState<string | null>(null);

  const notify = (msg: string) => {
    setBannerMsg(msg);
    setTimeout(() => setBannerMsg(''), 4000);
  };

  // --- Local States for Editors ---
  // 1. Site Config
  const [cfgDraft, setCfgDraft] = useState<SiteConfigCMS>(siteConfig);
  useEffect(() => {
    setCfgDraft(siteConfig);
  }, [siteConfig]);

  // Included / Excluded / Important Notes textareas
  const [incText, setIncText] = useState(tourIncluded.join('\n'));
  const [excText, setExcText] = useState(tourExcluded.join('\n'));
  const [notesText, setNotesText] = useState(importantNotes.join('\n'));
  useEffect(() => {
    setIncText(tourIncluded.join('\n'));
    setExcText(tourExcluded.join('\n'));
    setNotesText(importantNotes.join('\n'));
  }, [tourIncluded, tourExcluded, importantNotes]);

  // 2. R2 Media Vault States & Direct S3 API Connection
  const [newR2Url, setNewR2Url] = useState('');
  const [newR2Key, setNewR2Key] = useState('');
  const [newR2Label, setNewR2Label] = useState('');
  const [newR2Category, setNewR2Category] = useState('tours');
  const [bulkR2Urls, setBulkR2Urls] = useState('');
  const [oldImgUrl, setOldImgUrl] = useState('');
  const [newGlobalR2Url, setNewGlobalR2Url] = useState('');
  const [r2Filter, setR2Filter] = useState('all');
  const [r2ServerStatus, setR2ServerStatus] = useState<{
    configured: boolean;
    bucketName: string | null;
    publicUrl: string | null;
    missingVars: string[];
  } | null>(null);
  const [r2UploadingDirect, setR2UploadingDirect] = useState(false);
  const [r2UploadProgress, setR2UploadProgress] = useState<{
    current: number;
    total: number;
    currentPath: string;
  } | null>(null);
  const [r2SyncingBucket, setR2SyncingBucket] = useState(false);
  const [r2InspectedFolders, setR2InspectedFolders] = useState<Record<string, number> | null>(null);
  const [r2InspectedObjects, setR2InspectedObjects] = useState<
    Array<{ key: string; folder: string; fileName: string; size: number; url: string }>
  >([]);
  const [autoMatchingR2, setAutoMatchingR2] = useState(false);

  const fetchR2Status = async () => {
    try {
      const res = await fetch('/api/r2/status');
      if (res.ok) {
        const data = await res.json();
        setR2ServerStatus(data);
        if (data.publicUrl && !siteConfig.r2PublicDomain) {
          setCfgDraft((prev) => ({ ...prev, r2PublicDomain: data.publicUrl }));
        }
      }
    } catch {
      // Ignore if offline
    }
  };

  useEffect(() => {
    fetchR2Status();
  }, []);

  const handleDirectR2MultiUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawFiles = e.target.files;
    if (!rawFiles || rawFiles.length === 0) return;

    const validFiles: File[] = [];
    for (let i = 0; i < rawFiles.length; i++) {
      const f = rawFiles[i];
      if (f.type.startsWith('image/') || /\.(webp|jpg|jpeg|png|gif|svg|avif)$/i.test(f.name)) {
        validFiles.push(f);
      }
    }

    if (validFiles.length === 0) {
      notify('No image files found in the selected folder.');
      return;
    }

    setR2UploadingDirect(true);
    setR2UploadProgress({ current: 0, total: validFiles.length, currentPath: 'Starting batch...' });
    let uploadedCount = 0;
    const BATCH_SIZE = 15;

    try {
      for (let start = 0; start < validFiles.length; start += BATCH_SIZE) {
        const chunk = validFiles.slice(start, start + BATCH_SIZE);
        const relPaths = chunk.map((f) => (f as any).webkitRelativePath || '');
        const firstPath = relPaths[0] || chunk[0].name;

        setR2UploadProgress({
          current: uploadedCount,
          total: validFiles.length,
          currentPath: firstPath,
        });

        const formData = new FormData();
        chunk.forEach((f) => formData.append('files', f));
        formData.append('relativePaths', JSON.stringify(relPaths));
        formData.append('category', newR2Category);
        if (cfgDraft.r2PublicDomain) {
          formData.append('publicDomain', cfgDraft.r2PublicDomain);
        }

        const res = await fetch('/api/r2/upload-batch', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          notify(err.error || 'R2 batch upload failed. Check R2_* environment variables.');
          break;
        }

        const data = await res.json();
        const uploadedItems: Array<{ key: string; url: string; fileName: string }> =
          data.uploaded || [];

        await Promise.all(
          uploadedItems.map((item, idx) => {
            const folderCat = item.key.includes('/')
              ? item.key.split('/')[0].toLowerCase()
              : newR2Category;
            return saveR2Media({
              id: `r2-${Date.now()}-${start + idx}`,
              url: item.url,
              r2Key: item.key,
              label: item.key,
              category: ['hero', 'tours', 'destinations', 'blogs', 'memories', 'fleet'].includes(
                folderCat
              )
                ? folderCat
                : newR2Category,
              alt: item.fileName,
            });
          })
        );

        uploadedCount += uploadedItems.length;
        setR2UploadProgress({
          current: uploadedCount,
          total: validFiles.length,
          currentPath: firstPath,
        });
      }

      if (uploadedCount > 0) {
        notify(
          `Uploaded ${uploadedCount} / ${validFiles.length} photo(s) to Cloudflare R2 & saved CDN links in Firestore!`
        );
      }
    } finally {
      setR2UploadingDirect(false);
      setR2UploadProgress(null);
      e.target.value = '';
    }
  };

  const handleSyncObjectsFromR2Bucket = async () => {
    setR2SyncingBucket(true);
    try {
      const domainParam = cfgDraft.r2PublicDomain
        ? `?publicDomain=${encodeURIComponent(cfgDraft.r2PublicDomain)}`
        : '';
      const res = await fetch(`/api/r2/list${domainParam}`);
      const data = await res.json();
      if (!res.ok) {
        notify(data.error || 'Could not list R2 bucket objects.');
        return;
      }
      const objects: Array<{
        key: string;
        folder: string;
        fileName: string;
        size: number;
        url: string;
      }> = data.objects || [];
      setR2InspectedFolders(data.folders || {});
      setR2InspectedObjects(objects);

      const existingUrls = new Set(r2Media.map((m) => m.url));
      let imported = 0;
      for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        const finalUrl = cfgDraft.r2PublicDomain
          ? `${cfgDraft.r2PublicDomain.replace(/\/+$/, '')}/${obj.key}`
          : obj.url;
        if (!existingUrls.has(finalUrl)) {
          const parts = obj.key.split('/');
          const cat = parts.length > 1 ? parts[0].toLowerCase() : 'general';
          const fileName = parts[parts.length - 1] || obj.key;
          await saveR2Media({
            id: `r2-sync-${Date.now()}-${i}`,
            url: finalUrl,
            r2Key: obj.key,
            label: obj.key,
            category: ['hero', 'tours', 'destinations', 'blogs', 'memories', 'fleet'].includes(cat)
              ? cat
              : 'general',
            alt: fileName,
          });
          imported++;
        }
      }
      notify(
        `Inspected ${objects.length} file(s) across ${Object.keys(data.folders || {}).length} folder(s) in R2 (${imported} new saved to Firestore)!`
      );
    } catch (err: any) {
      notify(`R2 Sync Error: ${err?.message || 'Check connection'}`);
    } finally {
      setR2SyncingBucket(false);
    }
  };

  const handleAutoMatchR2ToWebsite = async () => {
    if (r2InspectedObjects.length === 0 && r2Media.length === 0) {
      notify('Please click "Inspect & Sync Folders from R2 Bucket" first.');
      return;
    }
    setAutoMatchingR2(true);
    try {
      // Build lookup maps by filename and by relative path (e.g. 2025/01/photo.webp)
      const byFileName = new Map<string, string>();
      const bySuffix = new Map<string, string>();

      const sourceList =
        r2InspectedObjects.length > 0
          ? r2InspectedObjects.map((o) => ({ key: o.key, url: o.url }))
          : r2Media.map((m) => ({ key: m.r2Key || m.url, url: m.url }));

      for (const item of sourceList) {
        const cleanKey = item.key.replace(/^\/+/, '');
        const fName = cleanKey.split('/').pop()?.toLowerCase() || '';
        if (fName) byFileName.set(fName, item.url);
        bySuffix.set(cleanKey.toLowerCase(), item.url);
      }

      const matchUrl = (currentUrl: string): string => {
        if (!currentUrl) return currentUrl;
        const clean = currentUrl.split('?')[0];
        const lower = clean.toLowerCase();
        // Check if suffix matches (e.g. 2025/01/foo.webp)
        for (const [sfx, r2Url] of bySuffix.entries()) {
          if (sfx.length > 4 && lower.endsWith(sfx)) {
            return r2Url;
          }
        }
        const fName = lower.split('/').pop() || '';
        if (fName && byFileName.has(fName)) {
          return byFileName.get(fName)!;
        }
        return currentUrl;
      };

      let updatedDocs = 0;

      for (const t of tours) {
        const heroImage = matchUrl(t.heroImage);
        const posterImage = matchUrl(t.posterImage || t.heroImage);
        if (heroImage !== t.heroImage || posterImage !== (t.posterImage || t.heroImage)) {
          await saveTour({ ...t, heroImage, posterImage });
          updatedDocs++;
        }
      }

      for (const d of destinations) {
        const heroImage = matchUrl(d.heroImage);
        const cardImage = matchUrl(d.cardImage);
        const attractions = (d.attractions || []).map((a) => ({ ...a, image: matchUrl(a.image) }));
        if (
          heroImage !== d.heroImage ||
          cardImage !== d.cardImage ||
          JSON.stringify(attractions) !== JSON.stringify(d.attractions)
        ) {
          await saveDestination({ ...d, heroImage, cardImage, attractions });
          updatedDocs++;
        }
      }

      for (const b of blogs) {
        const heroImage = matchUrl(b.heroImage);
        const articleHtml = (b.articleHtml || '').replace(
          /(<img[^>]+src=["'])([^"']+)(["'])/gi,
          (_full, p1, srcVal, p3) => `${p1}${matchUrl(srcVal)}${p3}`
        );
        if (heroImage !== b.heroImage || articleHtml !== b.articleHtml) {
          await saveBlog({ ...b, heroImage, articleHtml });
          updatedDocs++;
        }
      }

      for (const m of memories) {
        const fullImage = matchUrl(m.fullImage);
        const thumbImage = matchUrl(m.thumbImage || m.fullImage);
        if (fullImage !== m.fullImage || thumbImage !== (m.thumbImage || m.fullImage)) {
          await saveMemory({ ...m, fullImage, thumbImage });
          updatedDocs++;
        }
      }

      for (const a of miscAttractions) {
        const image = matchUrl(a.image);
        if (image !== a.image) {
          await saveMiscAttraction({ ...a, image });
          updatedDocs++;
        }
      }

      const nextCfg = {
        ...siteConfig,
        founderPhoto: matchUrl(siteConfig.founderPhoto),
        ctaBannerImage: matchUrl(siteConfig.ctaBannerImage),
      };
      if (JSON.stringify(nextCfg) !== JSON.stringify(siteConfig)) {
        await saveSiteConfig(nextCfg);
        updatedDocs++;
      }

      notify(
        updatedDocs > 0
          ? `Matched & updated ${updatedDocs} website document(s) in Firestore with your R2 folder photos!`
          : 'All matching filenames are already up to date with your R2 links!'
      );
    } finally {
      setAutoMatchingR2(false);
    }
  };

  // 3. Tour Editor State
  const [selectedTourSlug, setSelectedTourSlug] = useState<string>(tours[0]?.slug || '');
  const [tourDraft, setTourDraft] = useState<TourData | null>(tours[0] || null);
  const [tourSearch, setTourSearch] = useState('');

  useEffect(() => {
    const found = tours.find((t) => t.slug === selectedTourSlug);
    if (found) setTourDraft(JSON.parse(JSON.stringify(found)));
  }, [selectedTourSlug, tours]);

  // 4. Destination Editor State
  const [selectedDestSlug, setSelectedDestSlug] = useState<string>(destinations[0]?.slug || '');
  const [destDraft, setDestDraft] = useState<DestinationData | null>(destinations[0] || null);
  const [destSearch, setDestSearch] = useState('');

  useEffect(() => {
    const found = destinations.find((d) => d.slug === selectedDestSlug);
    if (found) setDestDraft(JSON.parse(JSON.stringify(found)));
  }, [selectedDestSlug, destinations]);

  // 5. Blog Editor State
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>(blogs[0]?.slug || '');
  const [blogDraft, setBlogDraft] = useState<BlogPost | null>(blogs[0] || null);
  const [insertR2BlogImg, setInsertR2BlogImg] = useState('');

  useEffect(() => {
    const found = blogs.find((b) => b.slug === selectedBlogSlug);
    if (found) setBlogDraft(JSON.parse(JSON.stringify(found)));
  }, [selectedBlogSlug, blogs]);

  // 6. Memories Editor State
  const [memFilter, setMemFilter] = useState('all');
  const [newMemUrl, setNewMemUrl] = useState('');
  const [newMemCat, setNewMemCat] = useState('europeans');
  const [newMemTag, setNewMemTag] = useState('Europeans');
  const [bulkMemUrls, setBulkMemUrls] = useState('');
  const [editingMem, setEditingMem] = useState<MemoryItemCMS | null>(null);

  // 7. Videos & Misc Attractions State
  const [editingVideo, setEditingVideo] = useState<VideoItemCMS | null>(null);
  const [editingMisc, setEditingMisc] = useState<MiscAttraction | null>(null);

  const handleSyncAll = async () => {
    setSyncing(true);
    try {
      await seedAllToFirestore((msg) => setBannerMsg(msg));
    } finally {
      setSyncing(false);
    }
  };

  if (!isAuthReady) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-2">
          <RefreshCw className="w-8 h-8 text-[#c88a2b] animate-spin mx-auto" />
          <p className="text-sm text-[#5c5852]">Checking Firebase Authentication...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-black/10 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#141413] text-[#f5c56b] flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <span className="font-hand text-2xl text-[#c88a2b] block">4Me Lanka Tours CMS</span>
            <h1 className="font-serif text-3xl font-bold text-[#141413] mt-1">
              Admin Panel & R2 Media Manager
            </h1>
            <p className="text-sm text-[#5c5852] mt-2 leading-relaxed">
              Sign in with your administrator Google account to edit any text across the website
              (saved in Firebase Firestore) and add, change, or delete any Cloudflare R2 photo link.
            </p>
          </div>

          {user && !isAdmin && (
            <div className="bg-red-50 text-red-800 text-xs p-4 rounded-2xl border border-red-200">
              Signed in as <b>{user.email}</b>, which does not have administrator permissions.
              Please sign in with <b>chethiyabandara0001@gmail.com</b>.
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => signInWithGoogle()}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#141413] hover:bg-[#2a2927] text-[#f5c56b] font-semibold py-3.5 px-6 rounded-full text-sm transition shadow-lg"
            >
              <LogIn className="w-4 h-4" /> Sign in with Google Admin
            </button>
            {user && (
              <button
                type="button"
                onClick={() => signOutUser()}
                className="text-xs font-semibold text-[#6e6a63] hover:text-[#141413]"
              >
                Sign out ({user.email})
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5efe1] pb-24">
      {/* Top Admin Header */}
      <div className="bg-[#141413] text-white border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#1e6b52] text-white px-3 py-0.5 rounded-full">
                <Database className="w-3 h-3" /> Firestore + Cloudflare R2 CMS
              </span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  isFirestoreSynced
                    ? 'bg-[#25D366]/20 text-[#25D366]'
                    : 'bg-[#c88a2b]/25 text-[#f5c56b]'
                }`}
              >
                {isFirestoreSynced ? '● Live Firestore Active' : '○ Ready to Sync Initial Data'}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
              4Me Lanka Tours — Complete Website & R2 Photo Admin
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleSyncAll}
              disabled={syncing}
              className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] disabled:opacity-50 text-white text-xs font-bold px-4 py-2.5 rounded-full transition shadow"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
              {syncing
                ? 'Syncing to Firestore...'
                : isFirestoreSynced
                ? 'Re-Sync Defaults to Firestore'
                : 'Sync All 75 Pages to Firestore Now'}
            </button>
            <button
              type="button"
              onClick={() => signOutUser()}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3.5 py-2.5 rounded-full transition"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Floating Status Toast */}
      {bannerMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141413] text-[#f5c56b] border border-[#c88a2b] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-bold">
          <Check className="w-4 h-4 text-[#25D366]" />
          <span>{bannerMsg}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-black/10 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto gap-1 py-2.5">
          {[
            { id: 'r2', label: `R2 Photo Vault (${r2Media.length})`, icon: Cloud },
            { id: 'site', label: 'Site, Home & Policies', icon: Settings },
            { id: 'tours', label: `Tours (${tours.length})`, icon: Compass },
            { id: 'destinations', label: `Destinations (${destinations.length})`, icon: MapPin },
            { id: 'blogs', label: `Blogs (${blogs.length})`, icon: FileText },
            { id: 'memories', label: `Memories (${memories.length})`, icon: ImageIcon },
            {
              id: 'videos_misc',
              label: `Videos (${videos.length}) & Misc (${miscAttractions.length})`,
              icon: Video,
            },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as AdminTab)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${
                  activeTab === t.id
                    ? 'bg-[#141413] text-[#f5c56b] shadow'
                    : 'text-[#4a4742] hover:bg-black/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* =====================================================
            TAB 1: CLOUDFLARE R2 MEDIA VAULT & GLOBAL PHOTO REPLACER
           ===================================================== */}
        {activeTab === 'r2' && (
          <div className="space-y-8">
            {/* R2 Domain & Direct S3 Connection Config */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase text-[#c88a2b]">
                      Cloudflare R2 + Firestore Integration
                    </span>
                    {r2ServerStatus?.configured ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#1e6b52]/15 text-[#1e6b52] px-3 py-0.5 rounded-full">
                        ● R2 S3 Bucket Connected ({r2ServerStatus.bucketName})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#c88a2b]/20 text-[#966213] px-3 py-0.5 rounded-full">
                        ○ R2 CDN Link Mode (Add R2_* env vars for 1-click S3 bucket upload & inspection)
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#141413] mt-1">
                    Cloudflare R2 Storage, Folder Upload & Inspector
                  </h2>
                  <p className="text-xs text-[#5c5852] mt-1">
                    Upload folders or files directly to your Cloudflare R2 bucket, inspect all
                    folders in R2, and automatically match & save their R2 CDN links in Firebase
                    Firestore.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex items-center gap-2 bg-[#1e6b52] hover:bg-[#17533f] text-white text-xs font-bold px-4 py-2.5 rounded-full cursor-pointer transition shadow-xs">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{r2UploadingDirect ? 'Uploading...' : 'Upload Files to R2'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleDirectR2MultiUpload}
                      disabled={r2UploadingDirect}
                      className="hidden"
                    />
                  </label>
                  <label className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-4 py-2.5 rounded-full cursor-pointer transition shadow-xs">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{r2UploadingDirect ? 'Uploading Folder...' : 'Upload Entire Folder to R2'}</span>
                    <input
                      type="file"
                      {...({ webkitdirectory: '', directory: '' } as any)}
                      multiple
                      onChange={handleDirectR2MultiUpload}
                      disabled={r2UploadingDirect}
                      className="hidden"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handleSyncObjectsFromR2Bucket}
                    disabled={r2SyncingBucket}
                    className="inline-flex items-center gap-1.5 bg-[#faf6ee] hover:bg-black/5 text-[#141413] border border-black/15 text-xs font-bold px-4 py-2.5 rounded-full transition"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${r2SyncingBucket ? 'animate-spin' : ''}`} />
                    {r2SyncingBucket ? 'Inspecting R2...' : 'Inspect & Sync Folders from R2 Bucket'}
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      await saveSiteConfig(cfgDraft);
                      notify('Saved Cloudflare R2 domain settings to Firestore!');
                    }}
                    className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2a2927] text-[#f5c56b] text-xs font-bold px-5 py-2.5 rounded-full transition"
                  >
                    <Save className="w-3.5 h-3.5" /> Save R2 Config
                  </button>
                </div>
              </div>

              {r2UploadProgress && (
                <div className="bg-[#141413] text-white rounded-2xl p-4 space-y-2 shadow-lg">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#f5c56b]">
                      ⚡ Parallel Batch Uploading to R2: {r2UploadProgress.current} /{' '}
                      {r2UploadProgress.total} images (
                      {Math.round(
                        (r2UploadProgress.current / Math.max(1, r2UploadProgress.total)) * 100
                      )}
                      %)
                    </span>
                    <span className="font-mono text-[11px] text-white/70 truncate max-w-xs">
                      {r2UploadProgress.currentPath}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#25D366] transition-all duration-200"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.round(
                            (r2UploadProgress.current / Math.max(1, r2UploadProgress.total)) * 100
                          )
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {r2InspectedFolders && (
                <div className="bg-[#faf6ee] rounded-2xl p-4 border border-black/10 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <b className="text-xs text-[#141413] uppercase tracking-wider block">
                        R2 Bucket Folder Inspection ({r2InspectedObjects.length} images found across{' '}
                        {Object.keys(r2InspectedFolders).length} folders)
                      </b>
                      <span className="text-[11px] text-[#5c5852]">
                        Click Auto-Match below to automatically link any matching image filenames or
                        folder paths across all Tours, Destinations, Blogs & Memories in Firestore.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleAutoMatchR2ToWebsite}
                      disabled={autoMatchingR2}
                      className="inline-flex items-center gap-1.5 bg-[#1e6b52] hover:bg-[#17533f] text-white text-xs font-bold px-4 py-2 rounded-full transition"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {autoMatchingR2
                        ? 'Auto-Matching...'
                        : '1-Click Auto-Match R2 Folder Photos to Website'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(r2InspectedFolders).map(([folderName, count]) => (
                      <span
                        key={folderName}
                        className="inline-flex items-center gap-1.5 bg-white border border-black/10 rounded-xl px-3 py-1.5 text-xs font-mono text-[#141413]"
                      >
                        📁 <b>{folderName}</b>{' '}
                        <span className="text-[#c88a2b] font-bold">({count})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#4a4742] mb-1">
                    Cloudflare R2 Public Bucket / Custom CDN Domain
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.r2PublicDomain}
                    onChange={(e) =>
                      setCfgDraft({ ...cfgDraft, r2PublicDomain: e.target.value })
                    }
                    placeholder="https://pub-xxxxxxxxxxxx.r2.dev or https://cdn.4melankatours.com"
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#4a4742] mb-1">
                    Optional R2 Direct Upload Worker / Presigned Endpoint
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.r2UploadEndpoint}
                    onChange={(e) =>
                      setCfgDraft({ ...cfgDraft, r2UploadEndpoint: e.target.value })
                    }
                    placeholder="https://r2-uploader.your-worker.workers.dev (optional)"
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Built-in Step-by-Step Cloudflare R2 Setup Guide */}
              <details className="bg-[#faf6ee] rounded-2xl p-4 border border-black/10 text-xs text-[#3d3a36]">
                <summary className="cursor-pointer font-bold text-[#141413] flex items-center justify-between">
                  <span>📘 Step-by-Step Guide: How to Connect Your Cloudflare R2 Bucket (Direct S3 API or Public Domain)</span>
                  <span className="text-[#c88a2b] underline">Click to expand guide</span>
                </summary>
                <div className="mt-4 space-y-4 leading-relaxed border-t border-black/10 pt-4">
                  <div>
                    <b className="text-[#141413] block">1. Create a Cloudflare R2 Bucket & Enable Public Access</b>
                    <p>
                      Go to <a href="https://dash.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-[#c88a2b] underline">dash.cloudflare.com</a> → <b>R2 Object Storage</b> → click <b>Create bucket</b> (e.g. <code>4me-lanka-media</code>).
                      <br />Open the bucket's <b>Settings</b> tab → scroll to <b>R2.dev subdomain</b> (click <b>Allow Access</b>) or connect a <b>Custom Domain</b> to get your public URL (e.g. <code>https://pub-xxxxxxxxxxxx.r2.dev</code>). Paste that URL into <b>Cloudflare R2 Public Bucket / Custom CDN Domain</b> above and click <b>Save R2 Config</b>.
                    </p>
                  </div>
                  <div>
                    <b className="text-[#141413] block">2. Connect Direct S3 API Uploads & Bucket Sync (Built-in Server Integration)</b>
                    <p>
                      In Cloudflare Dashboard → <b>R2 Object Storage</b> → click <b>Manage R2 API Tokens</b> (top right) → <b>Create API token</b> with <b>Object Read & Write</b> permissions. Copy your credentials and add these 5 environment variables in the AI Studio <b>Secrets / Environment Variables</b> panel:
                    </p>
                    <pre className="mt-2 bg-[#141413] text-[#f5c56b] p-3 rounded-xl overflow-x-auto font-mono text-[11px]">
{`R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
R2_BUCKET_NAME=4me-lanka-media
R2_PUBLIC_URL=https://pub-xxxxxxxxxxxx.r2.dev`}
                    </pre>
                    <p className="mt-1">
                      Once those environment variables are set, every <b>R2 File</b> upload button across the Admin Panel and the <b>Upload Files to R2 Bucket</b> / <b>Sync Objects from R2 Bucket</b> buttons above will talk directly to your R2 bucket and automatically save the CDN URLs in Firebase Firestore!
                    </p>
                  </div>
                </div>
              </details>
            </div>

            {/* Add New R2 Image Links (Single or Bulk) + Global Photo Replacer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#141413] flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#c88a2b]" /> Register R2 Image CDN Link in Firestore
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#5c5852] mb-1">
                      Label / Title
                    </label>
                    <input
                      type="text"
                      value={newR2Label}
                      onChange={(e) => setNewR2Label(e.target.value)}
                      placeholder="e.g. Ella Nine Arch Sunrise"
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#5c5852] mb-1">
                      Folder / Category
                    </label>
                    <select
                      value={newR2Category}
                      onChange={(e) => setNewR2Category(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs bg-white"
                    >
                      <option value="hero">Hero & Banners</option>
                      <option value="tours">Tours</option>
                      <option value="destinations">Destinations & Attractions</option>
                      <option value="blogs">Blogs</option>
                      <option value="memories">Guest Memories</option>
                      <option value="fleet">Vehicle Fleet</option>
                      <option value="general">General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#5c5852] mb-1">
                    R2 Object Key (optional, auto-builds URL if R2 Public Domain is set)
                  </label>
                  <input
                    type="text"
                    value={newR2Key}
                    onChange={(e) => {
                      const k = e.target.value;
                      setNewR2Key(k);
                      if (cfgDraft.r2PublicDomain && k) {
                        const base = cfgDraft.r2PublicDomain.replace(/\/+$/, '');
                        setNewR2Url(`${base}/${k.replace(/^\/+/, '')}`);
                      }
                    }}
                    placeholder="e.g. destinations/ella-nine-arch.webp"
                    className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#5c5852] mb-1">
                    Full Cloudflare R2 CDN Image URL
                  </label>
                  <input
                    type="text"
                    value={newR2Url}
                    onChange={(e) => setNewR2Url(e.target.value)}
                    placeholder="https://pub-xxxx.r2.dev/destinations/ella-nine-arch.webp"
                    className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs font-mono"
                  />
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    if (!newR2Url.trim()) return;
                    const fileName = newR2Url.split('/').pop() || 'R2 Photo';
                    await saveR2Media({
                      id: `r2-${Date.now()}`,
                      url: newR2Url.trim(),
                      r2Key: newR2Key.trim() || fileName,
                      label: newR2Label.trim() || fileName,
                      category: newR2Category,
                      alt: newR2Label.trim() || fileName,
                    });
                    setNewR2Url('');
                    setNewR2Key('');
                    setNewR2Label('');
                    notify('Saved R2 CDN link to Firestore!');
                  }}
                  className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-5 py-2.5 rounded-full transition"
                >
                  <Plus className="w-4 h-4" /> Save R2 Link to Vault
                </button>

                <div className="pt-4 border-t border-black/10 space-y-2">
                  <label className="block text-[11px] font-bold uppercase text-[#5c5852]">
                    Bulk Paste R2 CDN URLs (One URL per line)
                  </label>
                  <textarea
                    rows={3}
                    value={bulkR2Urls}
                    onChange={(e) => setBulkR2Urls(e.target.value)}
                    placeholder="https://pub-xxxx.r2.dev/photo1.webp&#10;https://pub-xxxx.r2.dev/photo2.webp"
                    className="w-full rounded-xl border border-black/15 p-3 text-xs font-mono"
                  />
                  <button
                    type="button"
                    onClick={async () => {
                      const lines = bulkR2Urls
                        .split('\n')
                        .map((l) => l.trim())
                        .filter(Boolean);
                      for (let i = 0; i < lines.length; i++) {
                        const url = lines[i];
                        const fileName = url.split('/').pop() || `Photo ${i + 1}`;
                        await saveR2Media({
                          id: `r2-${Date.now()}-${i}`,
                          url,
                          r2Key: fileName,
                          label: fileName,
                          category: newR2Category,
                          alt: fileName,
                        });
                      }
                      setBulkR2Urls('');
                      notify(`Imported ${lines.length} R2 CDN links to Firestore!`);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#141413] text-[#f5c56b] text-xs font-bold px-4 py-2 rounded-full"
                  >
                    <Plus className="w-3.5 h-3.5" /> Bulk Save All to Firestore
                  </button>
                </div>
              </div>

              {/* Global Photo Replacer */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#141413] flex items-center gap-2">
                    <Replace className="w-5 h-5 text-[#1e6b52]" /> Global Photo Replacer (Swap Any
                    Existing Photo with R2)
                  </h3>
                  <p className="text-xs text-[#5c5852] leading-relaxed">
                    Want to replace an existing photo everywhere it appears across Tours,
                    Destinations, Attractions, Blogs, and Memories at once? Paste the old image URL
                    and your new Cloudflare R2 CDN link below.
                  </p>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#5c5852] mb-1">
                      Existing Image URL to Replace
                    </label>
                    <input
                      type="text"
                      value={oldImgUrl}
                      onChange={(e) => setOldImgUrl(e.target.value)}
                      placeholder="https://4melankatours.com/wp-content/uploads/..."
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs font-mono"
                    />
                  </div>
                  <R2ImageInput
                    label="New Cloudflare R2 Image URL"
                    value={newGlobalR2Url}
                    onChange={setNewGlobalR2Url}
                    category="general"
                  />
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    if (!oldImgUrl.trim() || !newGlobalR2Url.trim()) return;
                    const count = await replaceImageGlobal(oldImgUrl, newGlobalR2Url);
                    notify(`Updated ${count} items across Firestore with the new R2 image link!`);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1e6b52] hover:bg-[#17533f] text-white text-xs font-bold py-3 px-5 rounded-full transition"
                >
                  <Replace className="w-4 h-4" /> Replace Photo Across Entire Website
                </button>
              </div>
            </div>

            {/* R2 Media Vault Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  Saved R2 CDN Links in Firestore ({r2Media.length})
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['all', 'hero', 'tours', 'destinations', 'blogs', 'memories', 'fleet', 'general'].map(
                    (cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setR2Filter(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                          r2Filter === cat
                            ? 'bg-[#141413] text-[#f5c56b]'
                            : 'bg-[#faf6ee] text-[#4a4742]'
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {r2Media.length === 0 ? (
                <div className="text-center py-12 bg-[#faf6ee] rounded-2xl border border-black/5 text-sm text-[#6e6a63]">
                  Your R2 Vault is currently empty. Upload files to R2 above, sync your bucket, or
                  add R2 CDN links!
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {r2Media
                    .filter((m) => r2Filter === 'all' || m.category === r2Filter)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#faf6ee] rounded-2xl overflow-hidden border border-black/10 flex flex-col justify-between"
                      >
                        <div>
                          <div className="h-40 bg-black/10 relative overflow-hidden">
                            <SmartImage
                              src={item.url}
                              alt={item.label}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-black/75 text-[#f5c56b] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <div className="p-3.5 space-y-2">
                            <input
                              type="text"
                              value={item.label}
                              onChange={(e) =>
                                saveR2Media({ ...item, label: e.target.value })
                              }
                              className="w-full rounded-lg border border-black/10 bg-white px-2.5 py-1 text-xs font-bold"
                            />
                            <input
                              type="text"
                              value={item.url}
                              onChange={(e) =>
                                saveR2Media({ ...item, url: e.target.value })
                              }
                              className="w-full rounded-lg border border-black/10 bg-white px-2.5 py-1 text-[11px] font-mono"
                            />
                          </div>
                        </div>
                        <div className="px-3.5 pb-3.5 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(item.url);
                              notify('Copied R2 CDN URL to clipboard!');
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white px-2.5 py-1 rounded-lg border border-black/10 hover:bg-black/5"
                          >
                            <Copy className="w-3 h-3" /> Copy Link
                          </button>
                          <button
                            type="button"
                            onClick={async () => {
                              if (r2ServerStatus?.configured && item.r2Key) {
                                await fetch(
                                  `/api/r2/object?key=${encodeURIComponent(item.r2Key)}`,
                                  { method: 'DELETE' }
                                ).catch(() => {});
                              }
                              await deleteR2Media(item.id);
                              notify('Deleted R2 image & removed link from Firestore.');
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-red-50 text-red-700 px-2.5 py-1 rounded-lg border border-red-200 hover:bg-red-600 hover:text-white transition"
                          >
                            <Trash2 className="w-3 h-3" /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================
            TAB 2: SITE SETTINGS, HOME PAGE & LEGAL POLICIES
           ===================================================== */}
        {activeTab === 'site' && (
          <div className="space-y-8">
            {/* Brand, Contact, Hero & Ayubowan Text */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#c88a2b] block">
                    Global Text & Branding
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#141413]">
                    Brand Info, Home Hero, Founder Story & Legal Policies
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    await saveSiteConfig(cfgDraft);
                    notify('Saved Site Settings, Home Text & Policies to Firestore!');
                  }}
                  className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-6 py-3 rounded-full shadow transition"
                >
                  <Save className="w-4 h-4" /> Save All Site Text & Photos
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.brandName}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, brandName: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.tagline}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, tagline: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    SLTDA Registration
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.sltdaReg}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, sltdaReg: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Phone Display
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.phoneDisplay}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, phoneDisplay: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    WhatsApp Number (digits only)
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.whatsappNumber}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, whatsappNumber: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Email Address
                  </label>
                  <input
                    type="text"
                    value={cfgDraft.email}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, email: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Hero Headlines */}
              <div className="pt-4 border-t border-black/10 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#141413]">
                  Home Page Hero Text
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Hero Script Kicker
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.heroKicker}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, heroKicker: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Hero Main Title
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.heroTitle}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, heroTitle: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Hero Italic Gold Accent
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.heroAccent}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, heroAccent: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Hero Subtitle Paragraph
                  </label>
                  <textarea
                    rows={2}
                    value={cfgDraft.heroSubtitle}
                    onChange={(e) => setCfgDraft({ ...cfgDraft, heroSubtitle: e.target.value })}
                    className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Ayubowan & Founder Kura */}
              <div className="pt-4 border-t border-black/10 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#141413]">
                  Ayubowan Welcome & Founder Kura Section
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Welcome Kicker
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.ayubowanKicker}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, ayubowanKicker: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Welcome Title
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.ayubowanTitle}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, ayubowanTitle: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Welcome Italic Accent
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.ayubowanAccent}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, ayubowanAccent: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Paragraph 1
                    </label>
                    <textarea
                      rows={3}
                      value={cfgDraft.ayubowanP1}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, ayubowanP1: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Paragraph 2
                    </label>
                    <textarea
                      rows={3}
                      value={cfgDraft.ayubowanP2}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, ayubowanP2: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Our Vision
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.visionText}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, visionText: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Our Mission
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.missionText}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, missionText: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Our Promise
                    </label>
                    <input
                      type="text"
                      value={cfgDraft.promiseText}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, promiseText: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3.5 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <R2ImageInput
                    label="Founder Kura Portrait Photo (R2 CDN URL)"
                    value={cfgDraft.founderPhoto}
                    onChange={(url) => setCfgDraft({ ...cfgDraft, founderPhoto: url })}
                    category="hero"
                  />
                  <R2ImageInput
                    label="CTA Banner Background Photo (R2 CDN URL)"
                    value={cfgDraft.ctaBannerImage}
                    onChange={(url) => setCfgDraft({ ...cfgDraft, ctaBannerImage: url })}
                    category="hero"
                  />
                </div>
              </div>

              {/* Legal Policies */}
              <div className="pt-4 border-t border-black/10 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#141413]">
                  Terms, Refund & Privacy Policy Text
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Refund Policy
                    </label>
                    <textarea
                      rows={4}
                      value={cfgDraft.refundPolicy}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, refundPolicy: e.target.value })}
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Privacy Policy
                    </label>
                    <textarea
                      rows={4}
                      value={cfgDraft.privacyPolicy}
                      onChange={(e) => setCfgDraft({ ...cfgDraft, privacyPolicy: e.target.value })}
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Terms & Conditions
                    </label>
                    <textarea
                      rows={4}
                      value={cfgDraft.termsConditions}
                      onChange={(e) =>
                        setCfgDraft({ ...cfgDraft, termsConditions: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Slides Manager */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  Home Hero Slideshow Photos ({heroSlides.length})
                </h3>
                <button
                  type="button"
                  onClick={async () => {
                    const id = `slide-${Date.now()}`;
                    await saveHomeBlock({
                      id,
                      blockType: 'hero_slide',
                      title: 'New Sri Lanka Hero Slide',
                      subtitle: 'Sri Lanka',
                      image: '',
                      order: heroSlides.length + 1,
                    });
                    notify('Added new Hero Slide!');
                  }}
                  className="inline-flex items-center gap-1.5 bg-[#141413] text-[#f5c56b] text-xs font-bold px-4 py-2 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Hero Slide
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {heroSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={slide.caption}
                        onChange={(e) =>
                          saveHomeBlock({
                            id: slide.id,
                            blockType: 'hero_slide',
                            title: e.target.value,
                            subtitle: slide.alt,
                            image: slide.image,
                            order: idx + 1,
                          })
                        }
                        className="flex-1 rounded-lg border border-black/15 bg-white px-3 py-1.5 text-xs font-bold"
                        placeholder="Slide Caption"
                      />
                      <button
                        type="button"
                        onClick={() => deleteHomeBlock(slide.id)}
                        className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-600 hover:text-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <R2ImageInput
                      label={`Slide #${idx + 1} R2 Photo`}
                      value={slide.image}
                      onChange={(url) =>
                        saveHomeBlock({
                          id: slide.id,
                          blockType: 'hero_slide',
                          title: slide.caption,
                          subtitle: slide.alt,
                          image: url,
                          order: idx + 1,
                        })
                      }
                      category="hero"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Services Manager */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  Priority Services Cards ({services.length})
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    saveHomeBlock({
                      id: `svc-${Date.now()}`,
                      blockType: 'service',
                      title: 'New Service',
                      subtitle: 'Custom Service',
                      text: 'Service description...',
                      extra: '“Your journey, our promise”',
                      image: '',
                      order: services.length + 1,
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-[#141413] text-[#f5c56b] text-xs font-bold px-4 py-2 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Service Card
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {services.map((svc, idx) => (
                  <div
                    key={svc.id}
                    className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-2.5"
                  >
                    <div className="flex justify-between gap-2">
                      <input
                        type="text"
                        value={svc.tag}
                        onChange={(e) =>
                          saveHomeBlock({
                            id: svc.id,
                            blockType: 'service',
                            title: svc.title,
                            subtitle: e.target.value,
                            text: svc.text,
                            extra: svc.motto,
                            image: svc.img,
                            order: idx + 1,
                          })
                        }
                        className="w-full rounded-lg border border-black/15 bg-white px-2.5 py-1 text-xs"
                        placeholder="Badge tag"
                      />
                      <button
                        type="button"
                        onClick={() => deleteHomeBlock(svc.id)}
                        className="p-1.5 rounded-lg bg-red-50 text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={svc.title}
                      onChange={(e) =>
                        saveHomeBlock({
                          id: svc.id,
                          blockType: 'service',
                          title: e.target.value,
                          subtitle: svc.tag,
                          text: svc.text,
                          extra: svc.motto,
                          image: svc.img,
                          order: idx + 1,
                        })
                      }
                      className="w-full rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-sm font-bold"
                      placeholder="Service Title"
                    />
                    <textarea
                      rows={3}
                      value={svc.text}
                      onChange={(e) =>
                        saveHomeBlock({
                          id: svc.id,
                          blockType: 'service',
                          title: svc.title,
                          subtitle: svc.tag,
                          text: e.target.value,
                          extra: svc.motto,
                          image: svc.img,
                          order: idx + 1,
                        })
                      }
                      className="w-full rounded-lg border border-black/15 bg-white p-2 text-xs"
                    />
                    <R2ImageInput
                      label={`${svc.title} Photo`}
                      value={svc.img}
                      onChange={(url) =>
                        saveHomeBlock({
                          id: svc.id,
                          blockType: 'service',
                          title: svc.title,
                          subtitle: svc.tag,
                          text: svc.text,
                          extra: svc.motto,
                          image: url,
                          order: idx + 1,
                        })
                      }
                      category="hero"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Fleet & Guest Reviews */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Fleet */}
              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-[#141413]">
                    Vehicle Fleet ({fleet.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      saveHomeBlock({
                        id: `fleet-${Date.now()}`,
                        blockType: 'fleet',
                        title: 'New Vehicle',
                        subtitle: 'AC Vehicle',
                        priceUsd: 90,
                        image: '',
                        order: fleet.length + 1,
                      })
                    }
                    className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Vehicle
                  </button>
                </div>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                  {fleet.map((car, idx) => (
                    <div
                      key={car.id}
                      className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-2.5"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={car.name}
                          onChange={(e) =>
                            saveHomeBlock({
                              id: car.id,
                              blockType: 'fleet',
                              title: e.target.value,
                              subtitle: car.type,
                              priceUsd: car.pricePerDayUsd,
                              image: car.image,
                              extra: car.alt,
                              order: idx + 1,
                            })
                          }
                          className="rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold"
                          placeholder="Vehicle Name"
                        />
                        <input
                          type="text"
                          value={car.type}
                          onChange={(e) =>
                            saveHomeBlock({
                              id: car.id,
                              blockType: 'fleet',
                              title: car.name,
                              subtitle: e.target.value,
                              priceUsd: car.pricePerDayUsd,
                              image: car.image,
                              extra: car.alt,
                              order: idx + 1,
                            })
                          }
                          className="rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs"
                          placeholder="Category"
                        />
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={car.pricePerDayUsd}
                            onChange={(e) =>
                              saveHomeBlock({
                                id: car.id,
                                blockType: 'fleet',
                                title: car.name,
                                subtitle: car.type,
                                priceUsd: Number(e.target.value) || 0,
                                image: car.image,
                                extra: car.alt,
                                order: idx + 1,
                              })
                            }
                            className="w-full rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold"
                            placeholder="USD/day"
                          />
                          <button
                            type="button"
                            onClick={() => deleteHomeBlock(car.id)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <R2ImageInput
                        label={`${car.name} Photo`}
                        value={car.image}
                        onChange={(url) =>
                          saveHomeBlock({
                            id: car.id,
                            blockType: 'fleet',
                            title: car.name,
                            subtitle: car.type,
                            priceUsd: car.pricePerDayUsd,
                            image: url,
                            extra: car.alt,
                            order: idx + 1,
                          })
                        }
                        category="fleet"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-[#141413]">
                    Guest Reviews ({reviews.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      saveHomeBlock({
                        id: `rev-${Date.now()}`,
                        blockType: 'review',
                        title: 'Guest Name',
                        subtitle: '2025',
                        extra: 'TripAdvisor',
                        items: ['5.0★ Unforgettable Tour'],
                        text: 'Review text...',
                        order: reviews.length + 1,
                      })
                    }
                    className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Review
                  </button>
                </div>
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                  {reviews.map((rev, idx) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-2"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={rev.author}
                          onChange={(e) =>
                            saveHomeBlock({
                              id: rev.id,
                              blockType: 'review',
                              title: e.target.value,
                              subtitle: rev.date,
                              extra: rev.source,
                              items: [rev.title],
                              text: rev.text,
                              order: idx + 1,
                            })
                          }
                          className="rounded-lg border border-black/15 bg-white px-2.5 py-1 text-xs font-bold"
                          placeholder="Author"
                        />
                        <input
                          type="text"
                          value={rev.date}
                          onChange={(e) =>
                            saveHomeBlock({
                              id: rev.id,
                              blockType: 'review',
                              title: rev.author,
                              subtitle: e.target.value,
                              extra: rev.source,
                              items: [rev.title],
                              text: rev.text,
                              order: idx + 1,
                            })
                          }
                          className="rounded-lg border border-black/15 bg-white px-2.5 py-1 text-xs"
                          placeholder="Date"
                        />
                        <div className="flex gap-1">
                          <input
                            type="text"
                            value={rev.source}
                            onChange={(e) =>
                              saveHomeBlock({
                                id: rev.id,
                                blockType: 'review',
                                title: rev.author,
                                subtitle: rev.date,
                                extra: e.target.value,
                                items: [rev.title],
                                text: rev.text,
                                order: idx + 1,
                              })
                            }
                            className="w-full rounded-lg border border-black/15 bg-white px-2.5 py-1 text-xs"
                            placeholder="Source"
                          />
                          <button
                            type="button"
                            onClick={() => deleteHomeBlock(rev.id)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={rev.title}
                        onChange={(e) =>
                          saveHomeBlock({
                            id: rev.id,
                            blockType: 'review',
                            title: rev.author,
                            subtitle: rev.date,
                            extra: rev.source,
                            items: [e.target.value],
                            text: rev.text,
                            order: idx + 1,
                          })
                        }
                        className="w-full rounded-lg border border-black/15 bg-white px-2.5 py-1 text-xs font-semibold"
                        placeholder="Review Headline"
                      />
                      <textarea
                        rows={2}
                        value={rev.text}
                        onChange={(e) =>
                          saveHomeBlock({
                            id: rev.id,
                            blockType: 'review',
                            title: rev.author,
                            subtitle: rev.date,
                            extra: rev.source,
                            items: [rev.title],
                            text: e.target.value,
                            order: idx + 1,
                          })
                        }
                        className="w-full rounded-lg border border-black/15 bg-white p-2 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Included, Excluded & 13 Important Booking Notes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-[#141413]">
                  Tour Included / Not Included & Important Booking Notes (1 per line)
                </h3>
                <button
                  type="button"
                  onClick={async () => {
                    await saveHomeBlock({
                      id: 'bundle-included',
                      blockType: 'lists_bundle',
                      title: 'Included in every tour',
                      items: incText
                        .split('\n')
                        .map((s) => s.trim())
                        .filter(Boolean),
                      order: 1,
                    });
                    await saveHomeBlock({
                      id: 'bundle-excluded',
                      blockType: 'lists_bundle',
                      title: 'Not included',
                      items: excText
                        .split('\n')
                        .map((s) => s.trim())
                        .filter(Boolean),
                      order: 2,
                    });
                    await saveHomeBlock({
                      id: 'bundle-notes',
                      blockType: 'lists_bundle',
                      title: 'Important Booking Notes',
                      items: notesText
                        .split('\n')
                        .map((s) => s.trim())
                        .filter(Boolean),
                      order: 3,
                    });
                    notify('Saved Included, Excluded & Booking Notes to Firestore!');
                  }}
                  className="inline-flex items-center gap-1.5 bg-[#c88a2b] text-white text-xs font-bold px-5 py-2.5 rounded-full"
                >
                  <Save className="w-3.5 h-3.5" /> Save Lists
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Included Items (1 per line)
                  </label>
                  <textarea
                    rows={8}
                    value={incText}
                    onChange={(e) => setIncText(e.target.value)}
                    className="w-full rounded-xl border border-black/15 p-3 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Excluded Items (1 per line)
                  </label>
                  <textarea
                    rows={8}
                    value={excText}
                    onChange={(e) => setExcText(e.target.value)}
                    className="w-full rounded-xl border border-black/15 p-3 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Important Booking Notes (1 per line)
                  </label>
                  <textarea
                    rows={8}
                    value={notesText}
                    onChange={(e) => setNotesText(e.target.value)}
                    className="w-full rounded-xl border border-black/15 p-3 text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            TAB 3: TOURS MANAGER (18 MULTI-DAY & DAY TOURS)
           ===================================================== */}
        {activeTab === 'tours' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sidebar List */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#141413]">
                  All Tours ({tours.length})
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    const newSlug = `custom-tour-${Date.now().toString().slice(-4)}`;
                    const blank: TourData = {
                      slug: newSlug,
                      type: 'multi-day',
                      title: 'New Custom Sri Lanka Tour',
                      h1Html: 'New Custom Sri Lanka Tour',
                      kicker: 'Private Round Tour',
                      description: 'Custom private tour across Sri Lanka.',
                      lead: 'Experience Sri Lanka with Kura.',
                      introLead: 'Detailed private itinerary tailored to your group.',
                      heroImage: '',
                      posterImage: '',
                      priceUsd: 800,
                      durationLabel: '10 Days',
                      metaChips: ['10 Days', 'Private Car & Guide'],
                      routeStops: ['Colombo', 'Sigiriya', 'Kandy', 'Ella'],
                      days: [
                        {
                          dayNumber: 'Day 01',
                          title: 'Arrival & Welcome',
                          subtitle: 'BIA Airport → Negombo',
                          paragraphs: ['Welcome at Bandaranaike International Airport by Kura.'],
                        },
                      ],
                      highlights: [],
                      travelDetails: [],
                    };
                    setTourDraft(blank);
                    setSelectedTourSlug(newSlug);
                  }}
                  className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> New Tour
                </button>
              </div>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#6e6a63] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={tourSearch}
                  onChange={(e) => setTourSearch(e.target.value)}
                  placeholder="Filter tours..."
                  className="w-full rounded-xl border border-black/15 pl-8 pr-3 py-2 text-xs"
                />
              </div>

              <div className="space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
                {tours
                  .filter((t) => t.title.toLowerCase().includes(tourSearch.toLowerCase()))
                  .map((t) => (
                    <button
                      key={t.slug}
                      type="button"
                      onClick={() => setSelectedTourSlug(t.slug)}
                      className={`w-full text-left p-3 rounded-2xl border transition flex items-center justify-between gap-2 ${
                        selectedTourSlug === t.slug
                          ? 'bg-[#141413] text-white border-[#141413]'
                          : 'bg-[#faf6ee] text-[#141413] border-black/5 hover:border-black/20'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-[#c88a2b] block">
                          {t.type} · ${t.priceUsd}
                        </span>
                        <b className="text-xs font-bold truncate block">{t.title}</b>
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            {/* Tour Detail Editor */}
            {tourDraft && (
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#6e6a63]">/{tourDraft.slug}</span>
                    <h2 className="font-serif text-2xl font-bold text-[#141413]">
                      {tourDraft.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        await saveTour(tourDraft);
                        notify(`Saved "${tourDraft.title}" to Firestore!`);
                      }}
                      className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow"
                    >
                      <Save className="w-4 h-4" /> Save Tour to Firestore
                    </button>
                    {confirmDeleteKey === `tour-${tourDraft.slug}` ? (
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteTour(tourDraft.slug);
                          setConfirmDeleteKey(null);
                          if (tours[0]) setSelectedTourSlug(tours[0].slug);
                          notify('Deleted tour from Firestore.');
                        }}
                        className="bg-red-600 text-white text-xs font-bold px-3.5 py-2.5 rounded-full"
                      >
                        Confirm Delete
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteKey(`tour-${tourDraft.slug}`)}
                        className="p-2.5 rounded-full bg-red-50 text-red-700 hover:bg-red-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Tour Title
                    </label>
                    <input
                      type="text"
                      value={tourDraft.title}
                      onChange={(e) => setTourDraft({ ...tourDraft, title: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={tourDraft.slug}
                      onChange={(e) => setTourDraft({ ...tourDraft, slug: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Tour Type
                    </label>
                    <select
                      value={tourDraft.type}
                      onChange={(e) =>
                        setTourDraft({
                          ...tourDraft,
                          type: e.target.value as 'multi-day' | 'day',
                        })
                      }
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs bg-white"
                    >
                      <option value="multi-day">Multi-Day Round Tour</option>
                      <option value="day">Single-Day Tour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      From Price (USD)
                    </label>
                    <input
                      type="number"
                      value={tourDraft.priceUsd}
                      onChange={(e) =>
                        setTourDraft({ ...tourDraft, priceUsd: Number(e.target.value) || 0 })
                      }
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Duration Label
                    </label>
                    <input
                      type="text"
                      value={tourDraft.durationLabel}
                      onChange={(e) =>
                        setTourDraft({ ...tourDraft, durationLabel: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Kicker Subtitle
                    </label>
                    <input
                      type="text"
                      value={tourDraft.kicker}
                      onChange={(e) => setTourDraft({ ...tourDraft, kicker: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <R2ImageInput
                    label="Tour Hero Banner Photo (R2 CDN URL)"
                    value={tourDraft.heroImage}
                    onChange={(url) => setTourDraft({ ...tourDraft, heroImage: url })}
                    category="tours"
                  />
                  <R2ImageInput
                    label="Tour Card Poster Photo (R2 CDN URL)"
                    value={tourDraft.posterImage}
                    onChange={(url) => setTourDraft({ ...tourDraft, posterImage: url })}
                    category="tours"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Hero Lead Text
                    </label>
                    <textarea
                      rows={3}
                      value={tourDraft.lead}
                      onChange={(e) => setTourDraft({ ...tourDraft, lead: e.target.value })}
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Intro Paragraph
                    </label>
                    <textarea
                      rows={3}
                      value={tourDraft.introLead}
                      onChange={(e) => setTourDraft({ ...tourDraft, introLead: e.target.value })}
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Route Stops (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={tourDraft.routeStops.join(', ')}
                      onChange={(e) =>
                        setTourDraft({
                          ...tourDraft,
                          routeStops: e.target.value
                            .split(',')
                            .map((s) => s.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Meta Chips (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={tourDraft.metaChips.join(', ')}
                      onChange={(e) =>
                        setTourDraft({
                          ...tourDraft,
                          metaChips: e.target.value
                            .split(',')
                            .map((s) => s.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                </div>

                {/* Day-by-Day Itinerary Editor */}
                <div className="pt-4 border-t border-black/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#141413]">
                      Day-by-Day Itinerary ({tourDraft.days.length} Days)
                    </h3>
                    <button
                      type="button"
                      onClick={() =>
                        setTourDraft({
                          ...tourDraft,
                          days: [
                            ...tourDraft.days,
                            {
                              dayNumber: `Day ${String(tourDraft.days.length + 1).padStart(
                                2,
                                '0'
                              )}`,
                              title: 'New Day Stop',
                              subtitle: '',
                              paragraphs: ['Describe activities for this day...'],
                            },
                          ],
                        })
                      }
                      className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Day
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                    {tourDraft.days.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-2"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                          <input
                            type="text"
                            value={d.dayNumber}
                            onChange={(e) => {
                              const next = [...tourDraft.days];
                              next[dIdx] = { ...d, dayNumber: e.target.value };
                              setTourDraft({ ...tourDraft, days: next });
                            }}
                            className="rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold"
                            placeholder="Day 01"
                          />
                          <input
                            type="text"
                            value={d.title}
                            onChange={(e) => {
                              const next = [...tourDraft.days];
                              next[dIdx] = { ...d, title: e.target.value };
                              setTourDraft({ ...tourDraft, days: next });
                            }}
                            className="sm:col-span-2 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold"
                            placeholder="Day Title"
                          />
                          <div className="flex gap-1">
                            <input
                              type="text"
                              value={d.subtitle}
                              onChange={(e) => {
                                const next = [...tourDraft.days];
                                next[dIdx] = { ...d, subtitle: e.target.value };
                                setTourDraft({ ...tourDraft, days: next });
                              }}
                              className="w-full rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs"
                              placeholder="Subtitle"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const next = tourDraft.days.filter((_, i) => i !== dIdx);
                                setTourDraft({ ...tourDraft, days: next });
                              }}
                              className="p-1.5 rounded-lg bg-red-50 text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <textarea
                          rows={3}
                          value={d.paragraphs.join('\n\n')}
                          onChange={(e) => {
                            const next = [...tourDraft.days];
                            next[dIdx] = {
                              ...d,
                              paragraphs: e.target.value
                                .split(/\n\n+/)
                                .map((p) => p.trim())
                                .filter(Boolean),
                            };
                            setTourDraft({ ...tourDraft, days: next });
                          }}
                          className="w-full rounded-lg border border-black/15 bg-white p-2.5 text-xs"
                          placeholder="Paragraphs (separate paragraphs with a blank line)..."
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day Tour Highlights & Travel Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/10">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Day Tour Highlights (1 per line)
                    </label>
                    <textarea
                      rows={5}
                      value={(tourDraft.highlights || []).join('\n')}
                      onChange={(e) =>
                        setTourDraft({
                          ...tourDraft,
                          highlights: e.target.value
                            .split('\n')
                            .map((s) => s.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Travel Details (1 per line)
                    </label>
                    <textarea
                      rows={5}
                      value={(tourDraft.travelDetails || []).join('\n')}
                      onChange={(e) =>
                        setTourDraft({
                          ...tourDraft,
                          travelDetails: e.target.value
                            .split('\n')
                            .map((s) => s.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================
            TAB 4: DESTINATIONS MANAGER (ALL 29 DESTINATIONS)
           ===================================================== */}
        {activeTab === 'destinations' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#141413]">
                  Destinations ({destinations.length})
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    const newSlug = `dest-${Date.now().toString().slice(-4)}`;
                    const blank: DestinationData = {
                      slug: newSlug,
                      name: 'New Destination',
                      province: 'Central Province',
                      provinceShort: 'Central',
                      categorySlug: 'central-province',
                      countLabel: '5 attractions',
                      description: 'Explore this destination with 4Me Lanka Tours.',
                      lead: 'Discover scenic beauty and culture.',
                      heroImage: '',
                      cardImage: '',
                      metaChips: ['Central Province'],
                      introParagraphs: ['Welcome to this beautiful Sri Lankan destination.'],
                      features: [],
                      attractions: [],
                      hotels: [],
                      restaurants: [],
                      relatedTourSlugs: [],
                    };
                    setDestDraft(blank);
                    setSelectedDestSlug(newSlug);
                  }}
                  className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> New Destination
                </button>
              </div>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#6e6a63] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={destSearch}
                  onChange={(e) => setDestSearch(e.target.value)}
                  placeholder="Search 29 destinations..."
                  className="w-full rounded-xl border border-black/15 pl-8 pr-3 py-2 text-xs"
                />
              </div>

              <div className="space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
                {destinations
                  .filter((d) => d.name.toLowerCase().includes(destSearch.toLowerCase()))
                  .map((d) => (
                    <button
                      key={d.slug}
                      type="button"
                      onClick={() => setSelectedDestSlug(d.slug)}
                      className={`w-full text-left p-3 rounded-2xl border transition flex items-center justify-between ${
                        selectedDestSlug === d.slug
                          ? 'bg-[#141413] text-white border-[#141413]'
                          : 'bg-[#faf6ee] text-[#141413] border-black/5'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#c88a2b] block">
                          {d.provinceShort} · {d.attractions.length} attractions
                        </span>
                        <b className="text-xs font-bold">{d.name}</b>
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            {destDraft && (
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#6e6a63]">
                      /destinations/{destDraft.slug}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#141413]">
                      {destDraft.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        await saveDestination(destDraft);
                        notify(`Saved destination "${destDraft.name}" to Firestore!`);
                      }}
                      className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow"
                    >
                      <Save className="w-4 h-4" /> Save Destination
                    </button>
                    {confirmDeleteKey === `dest-${destDraft.slug}` ? (
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteDestination(destDraft.slug);
                          setConfirmDeleteKey(null);
                          if (destinations[0]) setSelectedDestSlug(destinations[0].slug);
                          notify('Deleted destination from Firestore.');
                        }}
                        className="bg-red-600 text-white text-xs font-bold px-3.5 py-2.5 rounded-full"
                      >
                        Confirm Delete
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteKey(`dest-${destDraft.slug}`)}
                        className="p-2.5 rounded-full bg-red-50 text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={destDraft.name}
                      onChange={(e) => setDestDraft({ ...destDraft, name: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      value={destDraft.slug}
                      onChange={(e) => setDestDraft({ ...destDraft, slug: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Province Label
                    </label>
                    <input
                      type="text"
                      value={destDraft.province}
                      onChange={(e) => setDestDraft({ ...destDraft, province: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Province Filter Category
                    </label>
                    <select
                      value={destDraft.categorySlug}
                      onChange={(e) =>
                        setDestDraft({ ...destDraft, categorySlug: e.target.value })
                      }
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs bg-white"
                    >
                      <option value="western-province">Western Province</option>
                      <option value="southern-province">Southern Province</option>
                      <option value="central-province">Central Province</option>
                      <option value="uva-province">Uva Province</option>
                      <option value="sabaragamuwa-province">Sabaragamuwa Province</option>
                      <option value="north-western-province">North Western Province</option>
                      <option value="north-central-province">North Central Province</option>
                      <option value="northern-province">Northern Province</option>
                      <option value="eastern-province">Eastern Province</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <R2ImageInput
                    label="Destination Hero Image (R2 CDN URL)"
                    value={destDraft.heroImage}
                    onChange={(url) => setDestDraft({ ...destDraft, heroImage: url })}
                    category="destinations"
                  />
                  <R2ImageInput
                    label="Destination Card Thumbnail (R2 CDN URL)"
                    value={destDraft.cardImage}
                    onChange={(url) => setDestDraft({ ...destDraft, cardImage: url })}
                    category="destinations"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Hero Lead Text
                    </label>
                    <textarea
                      rows={3}
                      value={destDraft.lead}
                      onChange={(e) => setDestDraft({ ...destDraft, lead: e.target.value })}
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Intro Paragraphs (separate with blank line)
                    </label>
                    <textarea
                      rows={3}
                      value={destDraft.introParagraphs.join('\n\n')}
                      onChange={(e) =>
                        setDestDraft({
                          ...destDraft,
                          introParagraphs: e.target.value
                            .split(/\n\n+/)
                            .map((s) => s.trim())
                            .filter(Boolean),
                        })
                      }
                      className="w-full rounded-xl border border-black/15 p-3 text-xs"
                    />
                  </div>
                </div>

                {/* Attractions Editor (Add / Change / Delete Photo & Text) */}
                <div className="pt-4 border-t border-black/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#141413]">
                      Attractions in {destDraft.name} ({destDraft.attractions.length})
                    </h3>
                    <button
                      type="button"
                      onClick={() =>
                        setDestDraft({
                          ...destDraft,
                          attractions: [
                            ...destDraft.attractions,
                            {
                              number: String(destDraft.attractions.length + 1).padStart(2, '0'),
                              title: 'New Attraction',
                              description: 'Attraction description...',
                              image: '',
                              alt: 'New Attraction',
                            },
                          ],
                        })
                      }
                      className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Attraction
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[540px] overflow-y-auto pr-1">
                    {destDraft.attractions.map((attr, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-3"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-1">
                            <input
                              type="text"
                              value={attr.number}
                              onChange={(e) => {
                                const next = [...destDraft.attractions];
                                next[aIdx] = { ...attr, number: e.target.value };
                                setDestDraft({ ...destDraft, attractions: next });
                              }}
                              className="w-16 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold"
                            />
                            <input
                              type="text"
                              value={attr.title}
                              onChange={(e) => {
                                const next = [...destDraft.attractions];
                                next[aIdx] = { ...attr, title: e.target.value };
                                setDestDraft({ ...destDraft, attractions: next });
                              }}
                              className="flex-1 rounded-lg border border-black/15 bg-white px-3 py-1.5 text-xs font-bold"
                              placeholder="Attraction Title"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const next = destDraft.attractions.filter((_, i) => i !== aIdx);
                              setDestDraft({ ...destDraft, attractions: next });
                            }}
                            className="p-1.5 rounded-lg bg-red-50 text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <textarea
                          rows={2}
                          value={attr.description}
                          onChange={(e) => {
                            const next = [...destDraft.attractions];
                            next[aIdx] = { ...attr, description: e.target.value };
                            setDestDraft({ ...destDraft, attractions: next });
                          }}
                          className="w-full rounded-lg border border-black/15 bg-white p-2.5 text-xs"
                        />

                        <R2ImageInput
                          label={`Attraction #${attr.number} Photo (${attr.title})`}
                          value={attr.image}
                          onChange={(url) => {
                            const next = [...destDraft.attractions];
                            next[aIdx] = { ...attr, image: url };
                            setDestDraft({ ...destDraft, attractions: next });
                          }}
                          category="destinations"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Sections Editor */}
                <div className="pt-4 border-t border-black/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#141413]">
                      Feature Story Blocks ({destDraft.features.length})
                    </h3>
                    <button
                      type="button"
                      onClick={() =>
                        setDestDraft({
                          ...destDraft,
                          features: [
                            ...destDraft.features,
                            {
                              kicker: 'Highlight',
                              title: 'Feature Title',
                              paragraphs: ['Feature story paragraph...'],
                              images: [{ src: '', alt: 'Feature photo' }],
                            },
                          ],
                        })
                      }
                      className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Feature Block
                    </button>
                  </div>

                  {destDraft.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 space-y-3"
                    >
                      <div className="flex justify-between gap-2">
                        <input
                          type="text"
                          value={feat.kicker}
                          onChange={(e) => {
                            const next = [...destDraft.features];
                            next[fIdx] = { ...feat, kicker: e.target.value };
                            setDestDraft({ ...destDraft, features: next });
                          }}
                          className="w-1/3 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs"
                          placeholder="Kicker"
                        />
                        <input
                          type="text"
                          value={feat.title}
                          onChange={(e) => {
                            const next = [...destDraft.features];
                            next[fIdx] = { ...feat, title: e.target.value };
                            setDestDraft({ ...destDraft, features: next });
                          }}
                          className="flex-1 rounded-lg border border-black/15 bg-white px-2.5 py-1.5 text-xs font-bold"
                          placeholder="Feature Title"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = destDraft.features.filter((_, i) => i !== fIdx);
                            setDestDraft({ ...destDraft, features: next });
                          }}
                          className="p-1.5 rounded-lg bg-red-50 text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={feat.paragraphs.join('\n\n')}
                        onChange={(e) => {
                          const next = [...destDraft.features];
                          next[fIdx] = {
                            ...feat,
                            paragraphs: e.target.value
                              .split(/\n\n+/)
                              .map((s) => s.trim())
                              .filter(Boolean),
                          };
                          setDestDraft({ ...destDraft, features: next });
                        }}
                        className="w-full rounded-lg border border-black/15 bg-white p-2 text-xs"
                      />
                      <div className="space-y-2">
                        {feat.images.map((im, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2">
                            <div className="flex-1">
                              <R2ImageInput
                                label={`Feature Photo #${iIdx + 1}`}
                                value={im.src}
                                onChange={(url) => {
                                  const next = [...destDraft.features];
                                  const nextImgs = [...feat.images];
                                  nextImgs[iIdx] = { ...im, src: url };
                                  next[fIdx] = { ...feat, images: nextImgs };
                                  setDestDraft({ ...destDraft, features: next });
                                }}
                                category="destinations"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                const next = [...destDraft.features];
                                next[fIdx] = {
                                  ...feat,
                                  images: feat.images.filter((_, j) => j !== iIdx),
                                };
                                setDestDraft({ ...destDraft, features: next });
                              }}
                              className="p-2 rounded-lg bg-red-50 text-red-700 mt-2"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => {
                            const next = [...destDraft.features];
                            next[fIdx] = {
                              ...feat,
                              images: [...feat.images, { src: '', alt: feat.title }],
                            };
                            setDestDraft({ ...destDraft, features: next });
                          }}
                          className="text-xs font-bold text-[#c88a2b] hover:underline"
                        >
                          + Add Another Photo to Feature
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hotels & Restaurants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/10">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Kura’s Hotel Picks (Format: Name | URL, 1 per line)
                    </label>
                    <textarea
                      rows={5}
                      value={destDraft.hotels.map((h) => `${h.name} | ${h.url}`).join('\n')}
                      onChange={(e) =>
                        setDestDraft({
                          ...destDraft,
                          hotels: e.target.value
                            .split('\n')
                            .map((line) => {
                              const [name, url] = line.split('|').map((s) => s.trim());
                              return name ? { name, url: url || '#' } : null;
                            })
                            .filter(Boolean) as { name: string; url: string }[],
                        })
                      }
                      className="w-full rounded-xl border border-black/15 p-3 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Kura’s Restaurant Picks (Format: Name | URL, 1 per line)
                    </label>
                    <textarea
                      rows={5}
                      value={destDraft.restaurants.map((r) => `${r.name} | ${r.url}`).join('\n')}
                      onChange={(e) =>
                        setDestDraft({
                          ...destDraft,
                          restaurants: e.target.value
                            .split('\n')
                            .map((line) => {
                              const [name, url] = line.split('|').map((s) => s.trim());
                              return name ? { name, url: url || '#' } : null;
                            })
                            .filter(Boolean) as { name: string; url: string }[],
                        })
                      }
                      className="w-full rounded-xl border border-black/15 p-3 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================
            TAB 5: BLOGS MANAGER (ALL 19 ARTICLES)
           ===================================================== */}
        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-black/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#141413]">
                  Blog Posts ({blogs.length})
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    const newSlug = `sri-lanka-story-${Date.now().toString().slice(-4)}`;
                    const blank: BlogPost = {
                      slug: newSlug,
                      title: 'New Sri Lanka Blog Post',
                      tag: 'Culture & Tips',
                      date: new Date().toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      }),
                      author: 'By Chaminda Kuruwita',
                      excerpt: 'A guide to experiencing the best of Sri Lanka...',
                      description: 'A guide to experiencing the best of Sri Lanka...',
                      heroImage: '',
                      articleHtml: '<p>Write your article content here...</p>',
                    };
                    setBlogDraft(blank);
                    setSelectedBlogSlug(newSlug);
                  }}
                  className="inline-flex items-center gap-1 bg-[#141413] text-[#f5c56b] text-xs font-bold px-3.5 py-1.5 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> New Post
                </button>
              </div>

              <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                {blogs.map((b) => (
                  <button
                    key={b.slug}
                    type="button"
                    onClick={() => setSelectedBlogSlug(b.slug)}
                    className={`w-full text-left p-3 rounded-2xl border transition ${
                      selectedBlogSlug === b.slug
                        ? 'bg-[#141413] text-white border-[#141413]'
                        : 'bg-[#faf6ee] text-[#141413] border-black/5'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold text-[#c88a2b] block">
                      {b.tag} · {b.date}
                    </span>
                    <b className="text-xs font-bold line-clamp-1">{b.title}</b>
                  </button>
                ))}
              </div>
            </div>

            {blogDraft && (
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#6e6a63]">/{blogDraft.slug}</span>
                    <h2 className="font-serif text-2xl font-bold text-[#141413]">
                      {blogDraft.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        await saveBlog(blogDraft);
                        notify(`Saved blog "${blogDraft.title}" to Firestore!`);
                      }}
                      className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow"
                    >
                      <Save className="w-4 h-4" /> Save Article
                    </button>
                    {confirmDeleteKey === `blog-${blogDraft.slug}` ? (
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteBlog(blogDraft.slug);
                          setConfirmDeleteKey(null);
                          if (blogs[0]) setSelectedBlogSlug(blogs[0].slug);
                          notify('Deleted blog post from Firestore.');
                        }}
                        className="bg-red-600 text-white text-xs font-bold px-3.5 py-2.5 rounded-full"
                      >
                        Confirm Delete
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteKey(`blog-${blogDraft.slug}`)}
                        className="p-2.5 rounded-full bg-red-50 text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Article Title
                    </label>
                    <input
                      type="text"
                      value={blogDraft.title}
                      onChange={(e) => setBlogDraft({ ...blogDraft, title: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      value={blogDraft.slug}
                      onChange={(e) => setBlogDraft({ ...blogDraft, slug: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Tag / Category
                    </label>
                    <input
                      type="text"
                      value={blogDraft.tag}
                      onChange={(e) => setBlogDraft({ ...blogDraft, tag: e.target.value })}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Published Date & Author
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={blogDraft.date}
                        onChange={(e) => setBlogDraft({ ...blogDraft, date: e.target.value })}
                        className="rounded-xl border border-black/15 px-3 py-2 text-xs"
                        placeholder="Date"
                      />
                      <input
                        type="text"
                        value={blogDraft.author}
                        onChange={(e) => setBlogDraft({ ...blogDraft, author: e.target.value })}
                        className="rounded-xl border border-black/15 px-3 py-2 text-xs"
                        placeholder="Author"
                      />
                    </div>
                  </div>
                </div>

                <R2ImageInput
                  label="Blog Featured Hero Image (R2 CDN URL)"
                  value={blogDraft.heroImage}
                  onChange={(url) => setBlogDraft({ ...blogDraft, heroImage: url })}
                  category="blogs"
                />

                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Short Summary Excerpt
                  </label>
                  <textarea
                    rows={2}
                    value={blogDraft.excerpt}
                    onChange={(e) =>
                      setBlogDraft({
                        ...blogDraft,
                        excerpt: e.target.value,
                        description: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-black/15 p-3 text-xs"
                  />
                </div>

                {/* Insert R2 Image into Blog Body Helper */}
                <div className="bg-[#faf6ee] p-4 rounded-2xl border border-black/10 space-y-2">
                  <R2ImageInput
                    label="Insert an R2 Photo Inside Article Body"
                    value={insertR2BlogImg}
                    onChange={setInsertR2BlogImg}
                    category="blogs"
                  />
                  {insertR2BlogImg && (
                    <button
                      type="button"
                      onClick={() => {
                        const imgTag = `\n<figure class="my-6"><img src="${insertR2BlogImg}" alt="${blogDraft.title}" class="rounded-2xl w-full object-cover" /></figure>\n`;
                        setBlogDraft({
                          ...blogDraft,
                          articleHtml: blogDraft.articleHtml + imgTag,
                        });
                        setInsertR2BlogImg('');
                        notify('Appended R2 image tag to article body!');
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#141413] text-[#f5c56b] text-xs font-bold px-4 py-2 rounded-full"
                    >
                      <Plus className="w-3.5 h-3.5" /> Insert R2 Photo into Article Content
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                    Article Content (HTML / Text — you can also edit any &lt;img src="..."&gt; URLs
                    directly)
                  </label>
                  <textarea
                    rows={14}
                    value={blogDraft.articleHtml}
                    onChange={(e) => setBlogDraft({ ...blogDraft, articleHtml: e.target.value })}
                    className="w-full rounded-xl border border-black/15 p-3.5 text-xs font-mono leading-relaxed"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================
            TAB 6: GUEST MEMORIES GALLERY MANAGER (116 PHOTOS)
           ===================================================== */}
        {activeTab === 'memories' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Add Single Memory Photo */}
              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-xs space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#141413]">
                  Add New Guest Memory Photo (R2 Link)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Region Filter Category
                    </label>
                    <select
                      value={newMemCat}
                      onChange={(e) => {
                        const val = e.target.value;
                        setNewMemCat(val);
                        const labelMap: Record<string, string> = {
                          indians: 'Indians',
                          europeans: 'Europeans',
                          'chinese-japanese': 'Chinese & Japanese',
                          'mid-easterns': 'Mid Easterns',
                          americans: 'Americans',
                          australians: 'Australians',
                          'south-asians': 'South Asians',
                        };
                        setNewMemTag(labelMap[val] || 'Guests');
                      }}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs bg-white"
                    >
                      <option value="indians">Indians</option>
                      <option value="europeans">Europeans</option>
                      <option value="chinese-japanese">Chinese & Japanese</option>
                      <option value="mid-easterns">Mid Easterns</option>
                      <option value="americans">Americans</option>
                      <option value="australians">Australians</option>
                      <option value="south-asians">South Asians</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#5c5852] mb-1">
                      Display Badge Tag
                    </label>
                    <input
                      type="text"
                      value={newMemTag}
                      onChange={(e) => setNewMemTag(e.target.value)}
                      className="w-full rounded-xl border border-black/15 px-3 py-2 text-xs"
                    />
                  </div>
                </div>
                <R2ImageInput
                  label="Guest Memory R2 Image URL"
                  value={newMemUrl}
                  onChange={setNewMemUrl}
                  category="memories"
                />
                <button
                  type="button"
                  onClick={async () => {
                    if (!newMemUrl.trim()) return;
                    await saveMemory({
                      id: `mem-${Date.now()}`,
                      category: newMemCat,
                      fullImage: newMemUrl.trim(),
                      thumbImage: newMemUrl.trim(),
                      tag: newMemTag,
                      alt: `Guests from ${newMemTag} with 4Me Lanka Tours`,
                      order: memories.length + 1,
                    });
                    setNewMemUrl('');
                    notify('Added new Guest Memory photo to Firestore!');
                  }}
                  className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white text-xs font-bold px-5 py-2.5 rounded-full"
                >
                  <Plus className="w-4 h-4" /> Add Photo to Memories
                </button>
              </div>

              {/* Bulk Add R2 Memory URLs */}
              <div className="bg-white rounded-3xl p-6 border border-black/10 shadow-xs space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#141413]">
                  Bulk Add R2 Memory Photos (1 R2 URL per line)
                </h3>
                <p className="text-xs text-[#5c5852]">
                  Paste multiple Cloudflare R2 image URLs below to add them all to the selected
                  region (<b>{newMemTag}</b>) in one click.
                </p>
                <textarea
                  rows={5}
                  value={bulkMemUrls}
                  onChange={(e) => setBulkMemUrls(e.target.value)}
                  placeholder="https://pub-xxxx.r2.dev/memories/guest-1.webp&#10;https://pub-xxxx.r2.dev/memories/guest-2.webp"
                  className="w-full rounded-xl border border-black/15 p-3 text-xs font-mono"
                />
                <button
                  type="button"
                  onClick={async () => {
                    const urls = bulkMemUrls
                      .split('\n')
                      .map((u) => u.trim())
                      .filter(Boolean);
                    for (let i = 0; i < urls.length; i++) {
                      await saveMemory({
                        id: `mem-${Date.now()}-${i}`,
                        category: newMemCat,
                        fullImage: urls[i],
                        thumbImage: urls[i],
                        tag: newMemTag,
                        alt: `Guests from ${newMemTag} with 4Me Lanka Tours`,
                        order: memories.length + i + 1,
                      });
                    }
                    setBulkMemUrls('');
                    notify(`Added ${urls.length} R2 photos to Memories!`);
                  }}
                  className="inline-flex items-center gap-2 bg-[#141413] text-[#f5c56b] text-xs font-bold px-5 py-2.5 rounded-full"
                >
                  <Plus className="w-4 h-4" /> Bulk Add Photos to {newMemTag}
                </button>
              </div>
            </div>

            {/* Edit Modal for Selected Memory */}
            {editingMem && (
              <div className="bg-white rounded-3xl p-6 border-2 border-[#c88a2b] shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#141413]">
                    Editing Memory Photo ({editingMem.id})
                  </h4>
                  <button
                    type="button"
                    onClick={() => setEditingMem(null)}
                    className="text-xs font-bold text-[#6e6a63]"
                  >
                    Close
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <select
                    value={editingMem.category}
                    onChange={(e) => setEditingMem({ ...editingMem, category: e.target.value })}
                    className="rounded-xl border border-black/15 px-3 py-2 text-xs bg-white"
                  >
                    <option value="indians">Indians</option>
                    <option value="europeans">Europeans</option>
                    <option value="chinese-japanese">Chinese & Japanese</option>
                    <option value="mid-easterns">Mid Easterns</option>
                    <option value="americans">Americans</option>
                    <option value="australians">Australians</option>
                    <option value="south-asians">South Asians</option>
                  </select>
                  <input
                    type="text"
                    value={editingMem.tag}
                    onChange={(e) => setEditingMem({ ...editingMem, tag: e.target.value })}
                    className="rounded-xl border border-black/15 px-3 py-2 text-xs"
                    placeholder="Tag"
                  />
                  <input
                    type="text"
                    value={editingMem.alt}
                    onChange={(e) => setEditingMem({ ...editingMem, alt: e.target.value })}
                    className="rounded-xl border border-black/15 px-3 py-2 text-xs"
                    placeholder="Caption / Alt"
                  />
                </div>
                <R2ImageInput
                  label="Full R2 Image URL"
                  value={editingMem.fullImage}
                  onChange={(url) =>
                    setEditingMem({ ...editingMem, fullImage: url, thumbImage: url })
                  }
                  category="memories"
                />
                <button
                  type="button"
                  onClick={async () => {
                    await saveMemory(editingMem);
                    setEditingMem(null);
                    notify('Updated Guest Memory photo in Firestore!');
                  }}
                  className="inline-flex items-center gap-2 bg-[#c88a2b] text-white text-xs font-bold px-5 py-2.5 rounded-full"
                >
                  <Save className="w-4 h-4" /> Save Memory Changes
                </button>
              </div>
            )}

            {/* Memories Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-serif text-2xl font-bold text-[#141413]">
                  All Guest Memory Photos ({memories.length})
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { k: 'all', l: 'All' },
                    { k: 'indians', l: 'Indians' },
                    { k: 'europeans', l: 'Europeans' },
                    { k: 'chinese-japanese', l: 'Chinese & Japanese' },
                    { k: 'mid-easterns', l: 'Mid Easterns' },
                    { k: 'americans', l: 'Americans' },
                    { k: 'australians', l: 'Australians' },
                    { k: 'south-asians', l: 'South Asians' },
                  ].map((f) => (
                    <button
                      key={f.k}
                      type="button"
                      onClick={() => setMemFilter(f.k)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        memFilter === f.k
                          ? 'bg-[#141413] text-[#f5c56b]'
                          : 'bg-[#faf6ee] text-[#4a4742]'
                      }`}
                    >
                      {f.l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {memories
                  .filter((m) => memFilter === 'all' || m.category === memFilter)
                  .map((mem) => (
                    <div
                      key={mem.id}
                      className="bg-[#faf6ee] rounded-2xl overflow-hidden border border-black/10 flex flex-col justify-between"
                    >
                      <div className="h-36 bg-black/10 relative overflow-hidden">
                        <SmartImage
                          src={mem.thumbImage || mem.fullImage}
                          alt={mem.alt}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1.5 left-1.5 bg-black/75 text-white text-[10px] px-2 py-0.5 rounded-full">
                          {mem.tag}
                        </span>
                      </div>
                      <div className="p-2.5 flex items-center justify-between gap-1">
                        <button
                          type="button"
                          onClick={() => setEditingMem(mem)}
                          className="text-[11px] font-bold text-[#141413] hover:text-[#c88a2b] px-2 py-1 rounded bg-white border border-black/10"
                        >
                          Change R2 URL
                        </button>
                        <button
                          type="button"
                          onClick={async () => {
                            await deleteMemory(mem.id);
                            notify('Deleted photo from Memories.');
                          }}
                          className="p-1.5 rounded bg-red-50 text-red-700 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            TAB 7: VIDEOS (26) & MISCELLANEOUS ATTRACTIONS (13)
           ===================================================== */}
        {activeTab === 'videos_misc' && (
          <div className="space-y-8">
            {/* Miscellaneous Attractions (13 Hidden Gems) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#c88a2b] block">
                    Hidden Gems Page
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#141413]">
                    Miscellaneous Attractions ({miscAttractions.length})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditingMisc({
                      id: `misc-${Date.now()}`,
                      number: String(miscAttractions.length + 1).padStart(2, '0'),
                      title: 'New Hidden Gem Attraction',
                      description: 'Description of this attraction...',
                      image: '',
                      alt: 'New Hidden Gem Attraction',
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-[#141413] text-[#f5c56b] text-xs font-bold px-4 py-2 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Misc Attraction
                </button>
              </div>

              {editingMisc && (
                <div className="p-5 rounded-2xl bg-[#faf6ee] border-2 border-[#c88a2b] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <input
                      type="text"
                      value={editingMisc.number}
                      onChange={(e) =>
                        setEditingMisc({ ...editingMisc, number: e.target.value })
                      }
                      className="rounded-xl border border-black/15 bg-white px-3 py-2 text-xs font-bold"
                      placeholder="# Number"
                    />
                    <input
                      type="text"
                      value={editingMisc.title}
                      onChange={(e) =>
                        setEditingMisc({ ...editingMisc, title: e.target.value })
                      }
                      className="sm:col-span-3 rounded-xl border border-black/15 bg-white px-3 py-2 text-sm font-bold"
                      placeholder="Attraction Title"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={editingMisc.description}
                    onChange={(e) =>
                      setEditingMisc({ ...editingMisc, description: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/15 bg-white p-3 text-xs"
                    placeholder="Description"
                  />
                  <R2ImageInput
                    label="Attraction Photo (R2 CDN URL)"
                    value={editingMisc.image}
                    onChange={(url) => setEditingMisc({ ...editingMisc, image: url })}
                    category="destinations"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        await saveMiscAttraction(editingMisc);
                        setEditingMisc(null);
                        notify('Saved Miscellaneous Attraction to Firestore!');
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#c88a2b] text-white text-xs font-bold px-5 py-2 rounded-full"
                    >
                      <Save className="w-3.5 h-3.5" /> Save Attraction
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingMisc(null)}
                      className="text-xs font-semibold text-[#6e6a63] px-3 py-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {miscAttractions.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#faf6ee] border border-black/10 flex gap-4 items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-20 h-16 rounded-xl overflow-hidden bg-black/10 shrink-0">
                        <SmartImage
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-[#c88a2b]">#{item.number}</span>
                        <h4 className="font-serif font-bold text-base text-[#141413] truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#6e6a63] line-clamp-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => setEditingMisc(item)}
                        className="text-xs font-bold bg-white px-3 py-1.5 rounded-lg border border-black/15 hover:border-[#c88a2b]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteMiscAttraction(item.id);
                          notify('Deleted Misc Attraction.');
                        }}
                        className="p-1.5 rounded-lg bg-red-50 text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* To-Do Videos Manager */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#c88a2b] block">
                    To-Do Page
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#141413]">
                    To-Do YouTube Videos ({videos.length})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditingVideo({
                      id: `vid-${Date.now()}`,
                      number: String(videos.length + 1).padStart(2, '0'),
                      youtubeId: '',
                      title: `Sri Lanka Activity Video #${videos.length + 1}`,
                      subtitle: 'Activity & experience showcase',
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-[#141413] text-[#f5c56b] text-xs font-bold px-4 py-2 rounded-full"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Video
                </button>
              </div>

              {editingVideo && (
                <div className="p-5 rounded-2xl bg-[#faf6ee] border-2 border-[#c88a2b] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <input
                      type="text"
                      value={editingVideo.number}
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, number: e.target.value })
                      }
                      className="rounded-xl border border-black/15 bg-white px-3 py-2 text-xs font-bold"
                      placeholder="Number (e.g. 27)"
                    />
                    <input
                      type="text"
                      value={editingVideo.youtubeId}
                      onChange={(e) =>
                        setEditingVideo({ ...editingVideo, youtubeId: e.target.value })
                      }
                      className="rounded-xl border border-black/15 bg-white px-3 py-2 text-xs font-mono"
                      placeholder="YouTube ID (e.g. dQw4w9WgXcQ)"
                    />
                    <input
                      type="text"
                      value={editingVideo.title}
                      onChange={(e) =>
                        setEditingVideo({
                          ...editingVideo,
                          title: e.target.value,
                          subtitle: e.target.value,
                        })
                      }
                      className="sm:col-span-2 rounded-xl border border-black/15 bg-white px-3 py-2 text-xs font-bold"
                      placeholder="Video Title"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        await saveVideo(editingVideo);
                        setEditingVideo(null);
                        notify('Saved Video to Firestore!');
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#c88a2b] text-white text-xs font-bold px-5 py-2 rounded-full"
                    >
                      <Save className="w-3.5 h-3.5" /> Save Video
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingVideo(null)}
                      className="text-xs font-semibold text-[#6e6a63] px-3 py-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((vid) => (
                  <div
                    key={vid.id}
                    className="p-3 rounded-2xl bg-[#faf6ee] border border-black/10 flex flex-col justify-between gap-2"
                  >
                    <div>
                      <div className="aspect-video rounded-xl overflow-hidden bg-black mb-2 relative">
                        <img
                          src={`https://i.ytimg.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                          alt={vid.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 bg-black/75 text-[#f5c56b] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          #{vid.number}
                        </span>
                      </div>
                      <b className="text-xs text-[#141413] block truncate">{vid.title}</b>
                      <small className="text-[10px] font-mono text-[#6e6a63]">
                        ID: {vid.youtubeId}
                      </small>
                    </div>
                    <div className="flex justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => setEditingVideo(vid)}
                        className="text-xs font-bold bg-white px-2.5 py-1 rounded border border-black/15"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          await deleteVideo(vid.id);
                          notify('Deleted Video.');
                        }}
                        className="p-1.5 rounded bg-red-50 text-red-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
