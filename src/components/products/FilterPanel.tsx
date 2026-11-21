import type { CatalogFilters, ProductCategory } from '../../types';
import { CATEGORY_LABELS } from '../../types';
import { ALL_COLORS, ALL_SIZES, PRICE_RANGE } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';

type FilterPanelProps = {
  filters: CatalogFilters;
  onChange: (next: Partial<CatalogFilters>) => void;
  onClear: () => void;
  resultCount: number;
  className?: string;
};

const categories: Array<ProductCategory | 'all'> = [
  'all',
  'women',
  'men',
  'outerwear',
  'accessories',
];

export function FilterPanel({
  filters,
  onChange,
  onClear,
  resultCount,
  className = '',
}: FilterPanelProps) {
  const toggleSize = (size: string) => {
    const sizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onChange({ sizes });
  };

  const toggleColor = (colorId: string) => {
    const colors = filters.colors.includes(colorId)
      ? filters.colors.filter((c) => c !== colorId)
      : [...filters.colors, colorId];
    onChange({ colors });
  };

  const clothingSizes = ALL_SIZES.filter((s) =>
    /^(XS|S|S\/M|M|L|L\/XL|XL|XXL|ONE SIZE)$/.test(s)
  );
  const numericSizes = ALL_SIZES.filter((s) => /^\d+$/.test(s));

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-body text-xs tracking-[0.16em] uppercase text-taupe">
          Найдено: {resultCount}
        </p>
        <button
          type="button"
          onClick={onClear}
          className="font-body text-xs tracking-wide text-graphite underline underline-offset-4 hover:opacity-60 shrink-0"
        >
          Сбросить всё
        </button>
      </div>

      <fieldset>
        <legend className="font-body text-xs tracking-[0.16em] uppercase text-graphite mb-3">
          Категория
        </legend>
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer group py-0.5"
            >
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => onChange({ category: cat })}
                className="accent-graphite"
              />
              <span className="font-body text-sm text-graphite group-hover:opacity-70">
                {CATEGORY_LABELS[cat]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-body text-xs tracking-[0.16em] uppercase text-graphite mb-3">
          Цена
        </legend>
        <div className="space-y-3">
          <input
            type="range"
            min={PRICE_RANGE.min}
            max={PRICE_RANGE.max}
            step={100}
            value={filters.priceMax}
            onChange={(e) =>
              onChange({ priceMax: Number(e.target.value) })
            }
            aria-label="Максимальная цена"
          />
          <div className="flex justify-between font-body text-xs text-taupe">
            <span>{formatPrice(PRICE_RANGE.min)}</span>
            <span>до {formatPrice(filters.priceMax)}</span>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-body text-xs tracking-[0.16em] uppercase text-graphite mb-3">
          Размер
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {clothingSizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => toggleSize(size)}
              className={`min-w-[36px] px-2 py-1.5 font-body text-xs border transition-colors ${
                filters.sizes.includes(size)
                  ? 'bg-graphite text-ivory border-graphite'
                  : 'border-graphite/25 text-graphite hover:border-graphite'
              }`}
              aria-pressed={filters.sizes.includes(size)}
            >
              {size}
            </button>
          ))}
        </div>
        {numericSizes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {numericSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                className={`min-w-[36px] px-2 py-1.5 font-body text-xs border transition-colors ${
                  filters.sizes.includes(size)
                    ? 'bg-graphite text-ivory border-graphite'
                    : 'border-graphite/25 text-graphite hover:border-graphite'
                }`}
                aria-pressed={filters.sizes.includes(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </fieldset>

      <fieldset>
        <legend className="font-body text-xs tracking-[0.16em] uppercase text-graphite mb-3">
          Цвет
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {ALL_COLORS.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => toggleColor(color.id)}
              className={`w-7 h-7 border-2 transition-transform ${
                filters.colors.includes(color.id)
                  ? 'border-graphite scale-110'
                  : 'border-transparent hover:scale-105'
              }`}
              style={{
                backgroundColor: color.hex,
                boxShadow:
                  color.hex === '#FFFFFF' || color.hex === '#FAF8F3'
                    ? 'inset 0 0 0 1px #ccc'
                    : undefined,
              }}
              aria-label={color.name}
              aria-pressed={filters.colors.includes(color.id)}
              title={color.name}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
}
