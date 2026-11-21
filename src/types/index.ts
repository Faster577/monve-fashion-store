export type ProductCategory =
  | 'women'
  | 'men'
  | 'outerwear'
  | 'accessories';

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type ProductSize = string;

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  images: string[];
  sizes: ProductSize[];
  colors: ProductColor[];
  tags: string[];
  featured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  popularity: number;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: ProductColor;
  quantity: number;
};

export type FavoriteItem = {
  productId: string;
};

export type SortOption =
  | 'popular'
  | 'newest'
  | 'price-asc'
  | 'price-desc';

export type CatalogFilters = {
  category: ProductCategory | 'all';
  priceMin: number;
  priceMax: number;
  sizes: string[];
  colors: string[];
  search: string;
  sort: SortOption;
};

export type CheckoutFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  comment: string;
};

export type OrderSummary = {
  orderNumber: string;
  items: CartItem[];
  total: number;
  customer: CheckoutFormData;
  createdAt: string;
};

export const CATEGORY_LABELS: Record<ProductCategory | 'all', string> = {
  all: 'Все',
  women: 'Женская одежда',
  men: 'Мужская одежда',
  outerwear: 'Верхняя одежда',
  accessories: 'Аксессуары',
};

export const SORT_LABELS: Record<SortOption, string> = {
  popular: 'Сначала популярные',
  newest: 'Сначала новые',
  'price-asc': 'Сначала дешевле',
  'price-desc': 'Сначала дороже',
};
