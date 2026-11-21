import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OptimizedImage } from '../common/OptimizedImage';

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="space-y-3">
      <div
        className="relative aspect-[3/4] bg-beige overflow-hidden cursor-zoom-in"
        onClick={() => setZoomed(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setZoomed(true);
          }
        }}
        aria-label="Увеличить изображение"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={images[active]}
              alt={`${name} — фото ${active + 1}`}
              className="w-full h-full object-cover"
              width={900}
              height={1200}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-16 h-20 overflow-hidden border-2 transition-colors ${
                active === i ? 'border-graphite' : 'border-transparent'
              }`}
              aria-label={`Показать фото ${i + 1}`}
              aria-pressed={active === i}
            >
              <OptimizedImage
                src={img}
                alt=""
                className="w-full h-full object-cover"
                width={64}
                height={80}
              />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 z-[100] bg-graphite/90 flex items-center justify-center p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Увеличенное изображение"
          >
            <img
              src={images[active]}
              alt={`${name} — увеличенное фото`}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
