import { useEffect, useRef, useState } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  /** Soft fade from transparent after load. Disable when a parent controls opacity. */
  fadeIn?: boolean;
  onReady?: () => void;
  onFail?: () => void;
};

function isImageReady(img: HTMLImageElement | null): boolean {
  return Boolean(img && img.complete && img.naturalWidth > 0);
}

/**
 * Fade-in uses an inline style only until load completes so it does not fight
 * Tailwind opacity utilities. Cached images are detected via img.complete.
 */
export function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes,
  fadeIn = true,
  onReady,
  onFail,
}: OptimizedImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const onReadyRef = useRef(onReady);
  const onFailRef = useRef(onFail);
  onReadyRef.current = onReady;
  onFailRef.current = onFail;

  const markReady = () => {
    setLoaded(true);
    onReadyRef.current?.();
  };

  useEffect(() => {
    setFailed(false);
    setLoaded(false);

    const img = ref.current;
    if (isImageReady(img)) {
      markReady();
      return;
    }

    // Cached / decode race: re-check after paint if onLoad already fired
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (!cancelled && isImageReady(ref.current)) {
        markReady();
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [src]);

  if (failed) {
    return (
      <div
        className={`bg-beige flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
        style={{ width, height }}
      >
        <span className="font-display text-taupe text-sm tracking-widest">
          MONVÉ
        </span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      sizes={sizes}
      decoding="async"
      onLoad={() => markReady()}
      onError={() => {
        setFailed(true);
        onFailRef.current?.();
      }}
      className={`object-cover ${fadeIn ? 'transition-opacity duration-500' : ''} ${className}`}
      style={fadeIn && !loaded ? { opacity: 0 } : undefined}
    />
  );
}
