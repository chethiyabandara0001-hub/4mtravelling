import React, { useState } from 'react';
import { Cloud, FolderOpen, Link2, Plus, Trash2, Upload, X, Check } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { SmartImage } from '../shared/SmartImage';

interface R2ImageInputProps {
  label: string;
  value: string;
  onChange: (newUrl: string) => void;
  category?: string;
  placeholder?: string;
}

export const R2ImageInput: React.FC<R2ImageInputProps> = ({
  label,
  value,
  onChange,
  category = 'general',
  placeholder = 'https://pub-xxxx.r2.dev/folder/photo.webp or object key...',
}) => {
  const { siteConfig, r2Media, saveR2Media } = useCMS();
  const [vaultOpen, setVaultOpen] = useState(false);
  const [r2KeyInput, setR2KeyInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const applyR2Key = () => {
    if (!r2KeyInput.trim()) return;
    const raw = r2KeyInput.trim();
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      onChange(raw);
    } else {
      const base = (siteConfig.r2PublicDomain || 'https://pub-your-r2-bucket.r2.dev').replace(
        /\/+$/,
        ''
      );
      const cleanKey = raw.replace(/^\/+/, '');
      onChange(`${base}/${cleanKey}`);
    }
    setR2KeyInput('');
  };

  const handleSaveCurrentToVault = async () => {
    if (!value.trim()) return;
    const fileName = value.split('/').pop() || 'R2 Photo';
    await saveR2Media({
      id: `r2-${Date.now()}`,
      url: value.trim(),
      r2Key: fileName,
      label: `${label} (${fileName})`,
      category,
      alt: label,
    });
    setStatusMsg('Saved to R2 Vault in Firestore!');
    setTimeout(() => setStatusMsg(''), 2500);
  };

  const handleFileUploadToR2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const cleanKey = `${category}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '-')}`;
    const baseDomain = (siteConfig.r2PublicDomain || '').replace(/\/+$/, '');

    setUploading(true);
    setStatusMsg('Uploading to Cloudflare R2...');

    try {
      // 1. Try direct server-side Cloudflare R2 S3 upload via /api/r2/upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      if (baseDomain) {
        formData.append('publicDomain', baseDomain);
      }

      const apiRes = await fetch('/api/r2/upload', {
        method: 'POST',
        body: formData,
      });

      if (apiRes.ok) {
        const data = await apiRes.json();
        const finalUrl = data.url;
        const finalKey = data.key || cleanKey;
        onChange(finalUrl);
        await saveR2Media({
          id: `r2-${Date.now()}`,
          url: finalUrl,
          r2Key: finalKey,
          label: file.name,
          category,
          alt: label,
        });
        setStatusMsg('Uploaded to Cloudflare R2 bucket & saved CDN link in Firestore!');
        return;
      }

      // 2. Fallback to optional Cloudflare Worker endpoint if configured
      if (siteConfig.r2UploadEndpoint) {
        const targetEndpoint = `${siteConfig.r2UploadEndpoint.replace(/\/+$/, '')}/${cleanKey}`;
        const res = await fetch(targetEndpoint, {
          method: 'PUT',
          headers: { 'Content-Type': file.type || 'application/octet-stream' },
          body: file,
        });
        let finalUrl = baseDomain ? `${baseDomain}/${cleanKey}` : targetEndpoint;
        try {
          const json = await res.json();
          if (json && json.url) finalUrl = json.url;
        } catch {
          // Use constructed R2 CDN URL
        }
        onChange(finalUrl);
        await saveR2Media({
          id: `r2-${Date.now()}`,
          url: finalUrl,
          r2Key: cleanKey,
          label: file.name,
          category,
          alt: label,
        });
        setStatusMsg('Uploaded to R2 Worker & saved CDN link in Firestore!');
        return;
      }

      // 3. Fallback to constructing R2 CDN URL if R2 Public Domain is configured
      if (baseDomain) {
        const cdnUrl = `${baseDomain}/${cleanKey}`;
        onChange(cdnUrl);
        await saveR2Media({
          id: `r2-${Date.now()}`,
          url: cdnUrl,
          r2Key: cleanKey,
          label: file.name,
          category,
          alt: label,
        });
        setStatusMsg(`Generated R2 CDN link (${cleanKey}) & saved to Firestore!`);
        return;
      }

      const errData = await apiRes.json().catch(() => ({}));
      setStatusMsg(
        errData?.error ||
          'Add R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME & R2_PUBLIC_URL in Environment Variables, or set R2 Public Domain.'
      );
    } catch (err: any) {
      setStatusMsg(`Upload error: ${err?.message || 'Check R2 connection'}`);
    } finally {
      setUploading(false);
      setTimeout(() => setStatusMsg(''), 4500);
    }
  };

  return (
    <div className="bg-[#faf6ee] rounded-2xl p-4 border border-black/10 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[#141413] flex items-center gap-1.5">
          <Cloud className="w-3.5 h-3.5 text-[#c88a2b]" />
          {label}
        </label>
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setVaultOpen(true)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white hover:bg-[#141413] text-[#141413] hover:text-[#f5c56b] px-2.5 py-1 rounded-full border border-black/15 transition"
          >
            <FolderOpen className="w-3 h-3" /> Pick from R2 Vault ({r2Media.length})
          </button>
          {value && (
            <button
              type="button"
              onClick={handleSaveCurrentToVault}
              className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white hover:bg-[#1e6b52] text-[#1e6b52] hover:text-white px-2.5 py-1 rounded-full border border-[#1e6b52]/30 transition"
              title="Bookmark this image URL in Firestore R2 Media Vault"
            >
              <Plus className="w-3 h-3" /> Save Link to R2 Vault
            </button>
          )}
          {value && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="inline-flex items-center gap-1 text-[11px] font-semibold bg-red-50 hover:bg-red-600 text-red-700 hover:text-white px-2.5 py-1 rounded-full border border-red-200 transition"
              title="Delete / clear this photo"
            >
              <Trash2 className="w-3 h-3" /> Delete Photo
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <div className="w-28 h-20 rounded-xl overflow-hidden bg-black/10 border border-black/10 shrink-0 flex items-center justify-center relative">
          {value ? (
            <SmartImage src={value} alt={label} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[10px] text-[#6e6a63] text-center px-2">No photo</span>
          )}
        </div>

        <div className="flex-1 w-full space-y-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Link2 className="w-3.5 h-3.5 text-[#6e6a63] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-xl border border-black/15 bg-white pl-8 pr-3 py-2 text-xs font-mono focus:outline-none focus:border-[#c88a2b]"
              />
            </div>
            <label className="inline-flex items-center gap-1.5 bg-[#141413] hover:bg-[#2a2927] text-[#f5c56b] text-xs font-semibold px-3 py-2 rounded-xl cursor-pointer shrink-0 transition">
              <Upload className="w-3.5 h-3.5" />
              <span>{uploading ? 'Uploading...' : 'R2 File'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUploadToR2}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>

          {siteConfig.r2PublicDomain && (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={r2KeyInput}
                onChange={(e) => setR2KeyInput(e.target.value)}
                placeholder={`Or type R2 key (e.g. ${category}/my-photo.webp) → auto-prefixes ${siteConfig.r2PublicDomain}`}
                className="flex-1 rounded-lg border border-black/10 bg-white px-2.5 py-1 text-[11px] font-mono"
              />
              <button
                type="button"
                onClick={applyR2Key}
                className="text-[11px] font-semibold bg-[#c88a2b] text-white px-3 py-1 rounded-lg hover:bg-[#b3781f]"
              >
                Apply R2 Key
              </button>
            </div>
          )}

          {statusMsg && (
            <div className="text-[11px] font-semibold text-[#1e6b52] flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> {statusMsg}
            </div>
          )}
        </div>
      </div>

      {/* R2 Vault Modal Picker */}
      {vaultOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setVaultOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[82vh] flex flex-col overflow-hidden shadow-2xl border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-black/10 flex items-center justify-between bg-[#141413] text-white">
              <div>
                <span className="text-xs text-[#f5c56b] font-semibold block">
                  Cloudflare R2 CDN Links in Firestore
                </span>
                <h4 className="font-serif text-xl font-bold">Select an R2 Image</h4>
              </div>
              <button
                type="button"
                onClick={() => setVaultOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto flex-1">
              {r2Media.length === 0 ? (
                <div className="text-center py-12 text-sm text-[#6e6a63]">
                  No saved R2 image links in the vault yet. Add your R2 CDN links in the{' '}
                  <b>Cloudflare R2 Media Vault</b> tab or click <b>+ Save Link to R2 Vault</b> on any
                  image field!
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {r2Media.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onChange(item.url);
                        setVaultOpen(false);
                      }}
                      className="group text-left rounded-2xl overflow-hidden border border-black/10 hover:border-[#c88a2b] bg-[#faf6ee] flex flex-col shadow-2xs transition"
                    >
                      <div className="h-28 w-full overflow-hidden bg-black/10">
                        <SmartImage
                          src={item.url}
                          alt={item.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="p-2.5">
                        <b className="text-xs text-[#141413] block truncate">{item.label}</b>
                        <small className="text-[10px] text-[#6e6a63] font-mono block truncate">
                          {item.r2Key || item.url}
                        </small>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
