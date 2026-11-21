import { Link } from 'react-router-dom';
import { Reveal } from '../../components/animations/Reveal';
import { ProductCard } from '../../components/products/ProductCard';
import { getFeaturedProducts } from '../../data/products';

export function FeaturedProductsSection() {
  const products = getFeaturedProducts(8);

  return (
    <section className="py-16 md:py-28 bg-beige/40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-lg mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide text-graphite">
            Выбор MONVÉ
          </h2>
          <p className="mt-4 font-body text-sm text-taupe leading-relaxed">
            Вещи, которые становятся частью твоей истории.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <Link
            to="/catalog"
            className="inline-flex px-8 py-3.5 border border-graphite font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite hover:text-ivory transition-colors duration-300"
          >
            Весь каталог
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
