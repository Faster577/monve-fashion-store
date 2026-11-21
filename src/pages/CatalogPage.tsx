import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { SlidersHorizontal, X } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductCard } from '../components/products/ProductCard';
import { FilterPanel } from '../components/products/FilterPanel';
import { products, PRICE_RANGE } from '../data/products';
import { filterProducts, countActiveFilters } from '../utils/filterProducts';
import type { CatalogFilters, ProductCategory, SortOption } from '../types';
import { CATEGORY_LABELS, SORT_LABELS } from '../types';
import { useScrollLock } from '../hooks/useScrollLock';

const defaultFilters = (): CatalogFilters => ({
  category: 'all',
  priceMin: PRICE_RANGE.min,
  priceMax: PRICE_RANGE.max,
  sizes: [],
  colors: [],
  search: '',
  sort: 'popular',
});

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<CatalogFilters>(() => {
    const initial = defaultFilters();
    const cat = searchParams.get('category') as ProductCategory | null;
    const sort = searchParams.get('sort') as SortOption | null;
    const q = searchParams.get('q');
    if (cat && cat in CATEGORY_LABELS) initial.category = cat;
    if (sort && sort in SORT_LABELS) initial.sort = sort;
    if (q) initial.search = q;
    return initial;
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useScrollLock(mobileFiltersOpen);

  useEffect(() => {
    const cat = searchParams.get('category') as ProductCategory | null;
    const sort = searchParams.get('sort') as SortOption | null;
    const q = searchParams.get('q');
    setFilters((prev) => ({
      ...prev,
      category: cat && cat in CATEGORY_LABELS ? cat : prev.category,
      sort: sort && sort in SORT_LABELS ? sort : prev.sort,
      search: q ?? prev.search,
    }));
  }, [searchParams]);

  useEffect(() => {
    if (!mobileFiltersOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileFiltersOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileFiltersOpen]);

  const filtered = useMemo(
    () => filterProducts(products, filters),
    [filters]
  );

  const featuredOnly = searchParams.get('featured') === '1';
  const displayProducts = featuredOnly
    ? filtered.filter((p) => p.featured)
    : filtered;

  const activeCount = countActiveFilters(filters);

  const updateFilters = (next: Partial<CatalogFilters>) => {
    setFilters((prev) => {
      const merged = { ...prev, ...next };
      const params = new URLSearchParams();
      if (merged.category !== 'all') params.set('category', merged.category);
      if (merged.sort !== 'popular') params.set('sort', merged.sort);
      if (merged.search.trim()) params.set('q', merged.search.trim());
      if (featuredOnly) params.set('featured', '1');
      setSearchParams(params, { replace: true });
      return merged;
    });
  };

  const clearFilters = () => {
    setFilters(defaultFilters());
    setSearchParams({}, { replace: true });
  };

  return (
    <>
      <SEO
        title="Каталог — MONVÉ"
        description="Каталог премиальной одежды MONVÉ. Женская и мужская коллекции, верхняя одежда и аксессуары."
      />
      <div className="pt-24 md:pt-28 pb-20 px-5 md:px-8 max-w-[1440px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Главная', to: '/' },
            { label: 'Каталог' },
          ]}
        />

        <div className="flex flex-col gap-4 mb-8 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] tracking-wide text-graphite leading-tight">
              Каталог
            </h1>
            <p className="mt-2 font-body text-sm text-taupe">
              {displayProducts.length}{' '}
              {displayProducts.length === 1
                ? 'товар'
                : displayProducts.length < 5
                  ? 'товара'
                  : 'товаров'}
              {filters.category !== 'all' &&
                ` · ${CATEGORY_LABELS[filters.category]}`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <label className="sr-only" htmlFor="catalog-search">
              Поиск
            </label>
            <input
              id="catalog-search"
              type="search"
              value={filters.search}
              onChange={(e) => updateFilters({ search: e.target.value })}
              placeholder="Поиск..."
              className="bg-transparent border border-graphite/20 px-3 py-2.5 font-body text-sm outline-none focus:border-graphite w-full sm:w-44 md:w-48 min-w-0"
            />

            <label className="sr-only" htmlFor="catalog-sort">
              Сортировка
            </label>
            <select
              id="catalog-sort"
              value={filters.sort}
              onChange={(e) =>
                updateFilters({ sort: e.target.value as SortOption })
              }
              className="bg-transparent border border-graphite/20 px-3 py-2.5 font-body text-sm outline-none focus:border-graphite cursor-pointer max-w-full"
            >
              {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {SORT_LABELS[key]}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2.5 border border-graphite/20 font-body text-sm"
            >
              <SlidersHorizontal size={16} />
              Фильтры
              {activeCount > 0 && (
                <span className="bg-graphite text-ivory text-[10px] px-1.5 py-0.5 rounded-full">
                  {activeCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Normal document scroll: sidebar sticky, grid grows with content */}
        <div className="lg:flex lg:items-start lg:gap-10">
          <aside
            className="
              hidden lg:block w-56 shrink-0
              sticky top-24
              max-h-[calc(100dvh-6.5rem)]
              overflow-y-auto overscroll-contain
              pr-1
            "
          >
            <FilterPanel
              filters={filters}
              onChange={updateFilters}
              onClear={clearFilters}
              resultCount={displayProducts.length}
            />
          </aside>

          <div className="min-w-0 flex-1">
            {displayProducts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-display text-2xl text-graphite">
                  Ничего не найдено
                </p>
                <p className="mt-3 font-body text-sm text-taupe">
                  Попробуй изменить фильтры или поисковый запрос.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-8 px-6 py-3 bg-graphite text-ivory font-body text-xs tracking-[0.16em] uppercase"
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:gap-x-6 md:gap-y-12">
                {displayProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-graphite/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              className="fixed bottom-0 inset-x-0 z-[75] h-[min(85dvh,100%)] max-h-[85dvh] bg-ivory rounded-t-2xl lg:hidden flex flex-col"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Фильтры"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-graphite/10 shrink-0">
                <h2 className="font-display text-xl">Фильтры</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Закрыть фильтры"
                  className="p-2"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="overflow-y-auto overscroll-contain px-5 py-6 flex-1 min-h-0">
                <FilterPanel
                  filters={filters}
                  onChange={updateFilters}
                  onClear={clearFilters}
                  resultCount={displayProducts.length}
                />
              </div>
              <div className="px-5 py-4 border-t border-graphite/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full py-3.5 bg-graphite text-ivory font-body text-xs tracking-[0.16em] uppercase"
                >
                  Показать {displayProducts.length}{' '}
                  {displayProducts.length === 1
                    ? 'товар'
                    : displayProducts.length < 5
                      ? 'товара'
                      : 'товаров'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
