import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { Product } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import { useFavoritesStore } from '../../store/favoritesStore';
import { OptimizedImage } from '../common/OptimizedImage';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [secondaryReady, setSecondaryReady] = useState(false);
  const [secondaryFailed, setSecondaryFailed] = useState(false);
  const reduced = useReducedMotion();
  const isFavorite = useFavoritesStore((s) => s.isFavorite(product.id));
  const toggle = useFavoritesStore((s) => s.toggle);

  const primary = product.images[0];
  const secondary = product.images[1];
  const hasDistinctSecondary = Boolean(secondary && secondary !== primary);

  const onSecondaryReady = useCallback(() => setSecondaryReady(true), []);
  const onSecondaryFail = useCallback(() => {
    setSecondaryFailed(true);
    setSecondaryReady(false);
  }, []);

  /** Crossfade only when a distinct secondary image has loaded successfully */
  const canCrossfade =
    hasDistinctSecondary && secondaryReady && !secondaryFailed;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: '0px 0px -20px 0px' }}
      transition={{
        duration: reduced ? 0 : 0.45,
        delay: reduced ? 0 : Math.min(index * 0.04, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-beige">
          {/* Base layer — always visible so the container never goes empty */}
          <OptimizedImage
            src={primary}
            alt={product.name}
            className={`absolute inset-0 z-0 w-full h-full transition-transform duration-500 ease-out ${
              canCrossfade ? 'group-hover:scale-105' : ''
            }`}
            width={600}
            height={800}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            fadeIn
          />

          {/* Hover layer — fades in above primary only when ready */}
          {hasDistinctSecondary && secondary && !secondaryFailed && (
            <OptimizedImage
              src={secondary}
              alt=""
              className={`absolute inset-0 z-[1] w-full h-full transition-[opacity,transform] duration-500 ease-out pointer-events-none opacity-0 scale-105 ${
                canCrossfade
                  ? 'group-hover:opacity-100 group-hover:scale-100'
                  : ''
              }`}
              width={600}
              height={800}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              fadeIn={false}
              loading="eager"
              onReady={onSecondaryReady}
              onFail={onSecondaryFail}
            />
          )}

          {(product.isNew || product.isBestseller) && (
            <span className="absolute top-3 left-3 z-[2] font-body text-[10px] tracking-[0.16em] uppercase bg-ivory/90 text-graphite px-2.5 py-1">
              {product.isNew ? 'Новинка' : 'Бестселлер'}
            </span>
          )}

          <span
            className={`
              absolute bottom-0 inset-x-0 z-[2] py-3 text-center
              font-body text-[11px] tracking-[0.18em] uppercase
              bg-graphite text-ivory
              transition-transform duration-300 ease-out
              translate-y-full group-hover:translate-y-0
              max-md:translate-y-0 max-md:py-2
              [@media(hover:none)]:translate-y-0
              ${hovered ? 'translate-y-0' : ''}
            `}
          >
            Смотреть
          </span>
        </div>

        <div className="mt-3.5 md:mt-4 pr-1">
          <h3 className="font-body text-sm text-graphite tracking-wide leading-snug">
            {product.name}
          </h3>
          <p className="mt-1 font-body text-sm text-taupe">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggle(product.id);
        }}
        className="absolute top-3 right-3 z-10 p-2 bg-ivory/80 backdrop-blur-sm hover:bg-ivory transition-colors"
        aria-label={
          isFavorite
            ? `Убрать ${product.name} из избранного`
            : `Добавить ${product.name} в избранное`
        }
      >
        <Heart
          size={18}
          className={`transition-all duration-300 ${
            isFavorite
              ? 'fill-graphite text-graphite scale-110'
              : 'text-graphite/70'
          }`}
        />
      </button>
    </motion.article>
  );
}
