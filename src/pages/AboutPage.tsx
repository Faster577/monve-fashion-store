import { Reveal, Stagger, StaggerItem } from '../components/animations/Reveal';
import { SEO } from '../components/common/SEO';
import { OptimizedImage } from '../components/common/OptimizedImage';

const values = [
  {
    title: 'Осознанность',
    text: 'Мы создаём вещи, которые живут дольше сезона. Каждая модель проходит отбор по качеству ткани, посадке и долговечности.',
  },
  {
    title: 'Минимализм',
    text: 'Чистые формы и сдержанная палитра позволяют собирать гардероб без лишнего шума — только то, что действительно нужно.',
  },
  {
    title: 'Индивидуальность',
    text: 'Стиль — это не следование правилам, а умение слышать себя. MONVÉ даёт пространство для собственного голоса.',
  },
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="О бренде — MONVÉ"
        description="MONVÉ — больше, чем одежда. Философия осознанного стиля."
      />
      <article className="pt-24 md:pt-28">
        <section className="px-5 md:px-8 max-w-[1440px] mx-auto pb-16 md:pb-24">
          <Reveal>
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-taupe mb-4">
              О бренде
            </p>
            <h1 className="font-display text-[clamp(2.25rem,6.5vw,5rem)] leading-[1.05] tracking-wide text-graphite max-w-4xl">
              MONVÉ — больше, чем одежда.
            </h1>
          </Reveal>
        </section>

        <section className="relative h-[50vh] min-h-[320px] md:h-[70vh] overflow-hidden bg-beige">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&q=80"
            alt="Атмосфера бренда MONVÉ"
            className="absolute inset-0 w-full h-full object-cover"
            width={1600}
            height={900}
            loading="eager"
          />
        </section>

        <section className="px-5 md:px-8 max-w-[1440px] mx-auto py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide leading-tight">
                История
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
              <p className="font-body text-base md:text-lg text-taupe leading-relaxed">
                Мы создаём пространство, в котором стиль становится продолжением
                личности. Вдохновляясь архитектурой, искусством и повседневной
                жизнью, мы выбираем чистые формы, выразительные силуэты и
                внимание к деталям.
              </p>
              <p className="mt-6 font-body text-base md:text-lg text-taupe leading-relaxed">
                Каждая коллекция — это диалог между функциональностью и
                эстетикой. Мы верим, что настоящая роскошь — в ощущении
                уверенности, когда надеваешь то, что создано именно для тебя.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-beige/50 py-20 md:py-28 px-5 md:px-8">
          <div className="max-w-[1440px] mx-auto">
            <Reveal className="mb-14">
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide">
                Наши ценности
              </h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8" stagger={0.12}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <h3 className="font-display text-2xl tracking-wide text-graphite">
                    {v.title}
                  </h3>
                  <p className="mt-4 font-body text-sm text-taupe leading-relaxed">
                    {v.text}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-32 px-5 md:px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba18a5ad?w=900&q=80"
                  alt="Материалы и фактуры MONVÉ"
                  className="absolute inset-0 w-full h-full object-cover"
                  width={900}
                  height={1200}
                />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:pt-20">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80"
                  alt="Пространство MONVÉ"
                  className="absolute inset-0 w-full h-full object-cover"
                  width={900}
                  height={1200}
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20 md:mt-28 text-center max-w-3xl mx-auto">
            <p className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-wide text-graphite">
              Меньше лишнего.
              <br />
              Больше тебя.
            </p>
          </Reveal>
        </section>
      </article>
    </>
  );
}
