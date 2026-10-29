import React, { useState } from 'react';

const WP_UPLOADS = 'https://4melankatours.com/wp-content/uploads/';

const BRAND_FALLBACKS: Record<string, string> = {
  'logo.webp': 'https://4melankatours.com/wp-content/uploads/2024/05/cropped-logo-1.png',
  'kura-cutout.webp': 'https://4melankatours.com/wp-content/uploads/2024/08/with-kura-in-kalpitiya-2.webp',
  'kura-face.webp': 'https://4melankatours.com/wp-content/uploads/2024/08/with-kura-in-kalpitiya-2.webp',
  'tripadvisor-2023.webp': 'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png',
  'tripadvisor-2024.webp': 'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png',
  'tripadvisor-2025.webp': 'https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png',
};

const DEFAULT_HERO_FALLBACK =
  'https://4melankatours.com/wp-content/uploads/2024/06/ella-banner-5.webp';

export function normalizeImageUrl(src?: string): string {
  if (!src) return DEFAULT_HERO_FALLBACK;
  if (src.startsWith('http://') || src.startsWith('https://')) return src;

  for (const [key, url] of Object.entries(BRAND_FALLBACKS)) {
    if (src.endsWith(key)) return url;
  }

  const idx = src.indexOf('assets/img/');
  if (idx > -1) {
    const rel = src.slice(idx + 11);
    if (rel.startsWith('hero/')) {
      return DEFAULT_HERO_FALLBACK;
    }
    return WP_UPLOADS + rel;
  }
  return src;
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
  const [errored, setErrored] = useState<boolean>(false);

  React.useEffect(() => {
    setImgSrc(normalizeImageUrl(src));
    setErrored(false);
  }, [src]);

  const handleError = () => {
    if (!errored && fallbackSrc && imgSrc !== fallbackSrc) {
      setErrored(true);
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
