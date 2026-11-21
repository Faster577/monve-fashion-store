import { Link } from 'react-router-dom';
import { Reveal } from '../../components/animations/Reveal';
import { OptimizedImage } from '../../components/common/OptimizedImage';

export function BrandEditorialSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1" direction="left">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80"
                alt="Философия бренда MONVÉ — осознанный стиль"
                className="absolute inset-0 w-full h-full object-cover"
                width={1200}
                height={1500}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
            <Reveal direction="right">
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-wide text-graphite">
                Меньше лишнего.
                <br />
                Больше тебя.
              </h2>
              <p className="mt-8 font-body text-sm md:text-base text-taupe leading-relaxed">
                MONVÉ — это философия осознанного стиля. Мы верим, что настоящая
                выразительность не требует лишних деталей. Она проявляется в
                силуэте, фактуре и ощущении уверенности.
              </p>
              <Link
                to="/about"
                className="inline-flex mt-10 px-8 py-3.5 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
              >
                Познакомиться с брендом
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
