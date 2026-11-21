import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';
import { useScrollLock } from '../../hooks/useScrollLock';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';
import { OptimizedImage } from '../common/OptimizedImage';

export function SearchOverlay() {
  const open = useUiStore((s) => s.searchOpen);
  const setOpen = useUiStore((s) => s.setSearchOpen);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useScrollLock(open);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      )
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ivory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Поиск"
        >
          <div className="max-w-3xl mx-auto px-6 pt-24 md:pt-32">
            <div className="flex items-center gap-4 border-b border-graphite/20 pb-4">
              <Search size={22} className="text-taupe shrink-0" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по каталогу..."
                className="flex-1 bg-transparent font-body text-lg md:text-2xl text-graphite placeholder:text-taupe/60 outline-none"
                aria-label="Поиск товаров"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Закрыть поиск"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-8 max-h-[60vh] overflow-y-auto">
              {!query.trim() && (
                <p className="font-body text-sm text-taupe tracking-wide">
                  Начните вводить название товара
                </p>
              )}
              {query.trim() && results.length === 0 && (
                <p className="font-body text-sm text-taupe tracking-wide">
                  Ничего не найдено по запросу «{query}»
                </p>
              )}
              <ul className="space-y-1">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 p-3 hover:bg-beige/60 transition-colors"
                    >
                      <OptimizedImage
                        src={p.images[0]}
                        alt={p.name}
                        className="w-16 h-20 object-cover"
                        width={64}
                        height={80}
                      />
                      <div>
                        <p className="font-body text-sm text-graphite">
                          {p.name}
                        </p>
                        <p className="font-body text-sm text-taupe mt-0.5">
                          {formatPrice(p.price)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
