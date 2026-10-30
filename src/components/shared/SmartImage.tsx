import React, { useState } from 'react';

export const R2_PUBLIC_BASE = 'https://pub-48e2848968a246d29fc587cde2d660e8.r2.dev';
const WP_UPLOADS = 'https://4melankatours.com/wp-content/uploads/';

const BRAND_R2_MAP: Record<string, string> = {
  'logo.webp': `${R2_PUBLIC_BASE}/brand/logo.webp`,
  'kura-cutout.webp': `${R2_PUBLIC_BASE}/brand/kura-photo.webp`,
  'kura-photo.webp': `${R2_PUBLIC_BASE}/brand/kura-photo.webp`,
  'kura-face.webp': `${R2_PUBLIC_BASE}/brand/kura-face.webp`,
  'tripadvisor-2023.webp': `${R2_PUBLIC_BASE}/brand/tripadvisor-2023.webp`,
  'tripadvisor-2024.webp': `${R2_PUBLIC_BASE}/brand/tripadvisor-2024.webp`,
  'tripadvisor-2025.webp': `${R2_PUBLIC_BASE}/brand/tripadvisor-2025.webp`,
};

const DEFAULT_HERO_FALLBACK = `${R2_PUBLIC_BASE}/2024/06/ella-banner-5.webp`;

export function normalizeImageUrl(src?: string): string {
  if (!src) return DEFAULT_HERO_FALLBACK;
  if (src.startsWith(R2_PUBLIC_BASE)) return src;

  for (const [key, url] of Object.entries(BRAND_R2_MAP)) {
    if (src.endsWith(key)) return url;
  }

  const wpIdx = src.indexOf('wp-content/uploads/');
  if (wpIdx > -1) {
    const rel = src.slice(wpIdx + 'wp-content/uploads/'.length);
    return `${R2_PUBLIC_BASE}/${rel}`;
  }

  const idx = src.indexOf('assets/img/');
  if (idx > -1) {
    const rel = src.slice(idx + 11);
    return `${R2_PUBLIC_BASE}/${rel}`;
  }

  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  return `${R2_PUBLIC_BASE}/${src.replace(/^\/+/, '')}`;
}

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc = DEFAULT_HERO_FALLBACK,
  alt = '',
  className = '',
  ...rest
}) => {
  const resolved = normalizeImageUrl(src);
  const [imgSrc, setImgSrc] = useState<string>(resolved);
  const [fallbackStage, setFallbackStage] = useState<number>(0);

  React.useEffect(() => {
    setImgSrc(normalizeImageUrl(src));
    setFallbackStage(0);
  }, [src]);

  const handleError = () => {
    if (fallbackStage === 0 && imgSrc.startsWith(R2_PUBLIC_BASE)) {
      // Try original WordPress uploads URL if an R2 key was resized/renamed
      const rel = imgSrc.slice(R2_PUBLIC_BASE.length + 1);
      setFallbackStage(1);
      setImgSrc(`${WP_UPLOADS}${rel}`);
    } else if (fallbackStage < 2 && fallbackSrc && imgSrc !== fallbackSrc) {
      setFallbackStage(2);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...rest}
    />
  );
};
