import { Link } from 'react-router-dom';
import { Reveal, Stagger, StaggerItem } from '../../components/animations/Reveal';
import { OptimizedImage } from '../../components/common/OptimizedImage';

const categories = [
  {
    to: '/catalog?category=women',
    label: 'Женская одежда',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80',
    alt: 'Женская коллекция MONVÉ',
  },
  {
    to: '/catalog?category=men',
    label: 'Мужская одежда',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
    alt: 'Мужская коллекция MONVÉ',
  },
  {
    to: '/catalog?category=outerwear',
    label: 'Верхняя одежда',
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=80',
    alt: 'Верхняя одежда MONVÉ',
  },
  {
    to: '/catalog?category=accessories',
    label: 'Аксессуары',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80',
    alt: 'Аксессуары MONVÉ',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-28 px-5 md:px-8 max-w-[1440px] mx-auto">
      <Reveal className="mb-12 md:mb-16 max-w-xl">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide leading-tight text-graphite">
          Твой стиль. Твои правила.
        </h2>
      </Reveal>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5" stagger={0.12}>
        {categories.map((cat) => (
          <StaggerItem key={cat.to}>
            <Link
              to={cat.to}
              className="group relative block aspect-[16/10] md:aspect-[3/2] overflow-hidden bg-beige"
            >
              <OptimizedImage
                src={cat.image}
                alt={cat.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={900}
                height={600}
              />
              <div className="absolute inset-0 bg-graphite/30 group-hover:bg-graphite/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5 sm:p-6 md:p-8">
                <h3 className="font-display text-[clamp(1.35rem,3.2vw,2.25rem)] leading-tight tracking-wide text-ivory">
                  {cat.label}
                </h3>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
