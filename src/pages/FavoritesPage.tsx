import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductCard } from '../components/products/ProductCard';
import { useFavoritesStore } from '../store/favoritesStore';
import { products } from '../data/products';

export function FavoritesPage() {
  const ids = useFavoritesStore((s) => s.ids);
  const favoriteProducts = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <SEO
        title="Избранное — MONVÉ"
        description="Сохранённые товары MONVÉ."
      />
      <div className="pt-24 md:pt-28 pb-20 px-5 md:px-8 max-w-[1440px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Главная', to: '/' },
            { label: 'Избранное' },
          ]}
        />

        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] tracking-wide mb-10">
          Избранное
        </h1>

        {favoriteProducts.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto">
            <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] tracking-wide">
              Здесь пока нет избранного
            </p>
            <p className="mt-4 font-body text-sm text-taupe">
              Сохраняй вещи, которые тебе понравились, чтобы вернуться к ним
              позже.
            </p>
            <Link
              to="/catalog"
              className="inline-flex mt-10 px-8 py-4 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {favoriteProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
