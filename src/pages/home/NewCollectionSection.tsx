import { Link } from 'react-router-dom';
import { Reveal } from '../../components/animations/Reveal';
import { OptimizedImage } from '../../components/common/OptimizedImage';

export function NewCollectionSection() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <div className="lg:col-span-5 lg:pb-16">
          <Reveal>
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-taupe">
              Коллекция
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.05] tracking-wide text-graphite">
              Новая глава
            </h2>
            <p className="mt-6 font-body text-sm md:text-base text-taupe leading-relaxed max-w-md">
              Коллекция, вдохновлённая свободой самовыражения и красотой
              простых вещей.
            </p>
            <Link
              to="/catalog?sort=newest"
              className="inline-flex mt-10 font-body text-xs tracking-[0.18em] uppercase border-b border-graphite pb-1 hover:opacity-60 transition-opacity"
            >
              Открыть коллекцию
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-5">
          <Reveal delay={0.1} className="col-span-2 md:col-span-1">
            <div className="relative aspect-[3/4] overflow-hidden bg-beige">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
                alt="Модель в пальто из новой коллекции MONVÉ"
                className="absolute inset-0 w-full h-full hover:scale-105 transition-transform duration-700"
                width={900}
                height={1200}
              />
            </div>
          </Reveal>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 md:gap-5">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
                  alt="Детали силуэта новой коллекции"
                  className="absolute inset-0 w-full h-full hover:scale-105 transition-transform duration-700"
                  width={800}
                  height={600}
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                  alt="Городской стиль MONVÉ"
                  className="absolute inset-0 w-full h-full hover:scale-105 transition-transform duration-700"
                  width={800}
                  height={600}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
