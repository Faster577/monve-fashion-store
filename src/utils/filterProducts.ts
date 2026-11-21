import type { CatalogFilters, Product } from '../types';

export function filterProducts(
  products: Product[],
  filters: CatalogFilters
): Product[] {
  let result = [...products];

  if (filters.category !== 'all') {
    result = result.filter((p) => p.category === filters.category);
  }

  if (filters.search.trim()) {
    const q = filters.search.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  result = result.filter(
    (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
  );

  if (filters.sizes.length > 0) {
    result = result.filter((p) =>
      filters.sizes.some((s) => p.sizes.includes(s))
    );
  }

  if (filters.colors.length > 0) {
    result = result.filter((p) =>
      filters.colors.some((c) => p.colors.some((pc) => pc.id === c))
    );
  }

  switch (filters.sort) {
    case 'newest':
      result.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.popularity - a.popularity);
      break;
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'popular':
    default:
      result.sort((a, b) => b.popularity - a.popularity);
      break;
  }

  return result;
}

export function countActiveFilters(filters: CatalogFilters): number {
  let count = 0;
  if (filters.category !== 'all') count++;
  if (filters.sizes.length > 0) count += filters.sizes.length;
  if (filters.colors.length > 0) count += filters.colors.length;
  if (filters.search.trim()) count++;
  return count;
}
