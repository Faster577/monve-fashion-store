import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.55]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] md:h-[100svh] md:min-h-[640px] overflow-hidden bg-graphite"
    >
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&q=85"
          alt="Модель в минималистичной одежде MONVÉ — новая коллекция осень–зима 2026"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/65 via-graphite/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-graphite/25" />
      </motion.div>

      <div className="relative z-10 min-h-[100svh] md:h-full max-w-[1440px] mx-auto px-5 md:px-8 flex flex-col justify-end pb-10 sm:pb-16 md:pb-24 pt-28">
        <div className="max-w-xl w-full">
          <motion.p
            className="font-body text-[10px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] uppercase text-ivory/80"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Новая коллекция / Осень–зима 2026
          </motion.p>

          <motion.h1
            className="mt-3 sm:mt-5 font-display text-[clamp(2.35rem,8.5vw,5.5rem)] leading-[1.05] tracking-wide text-ivory"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Стиль начинается
            <br />
            с простоты
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 font-body text-sm md:text-base text-ivory/80 max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Одежда, в которой каждая деталь имеет значение.
          </motion.p>

          <motion.div
            className="mt-7 sm:mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/catalog?sort=newest"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 bg-ivory text-graphite font-body text-xs tracking-[0.18em] uppercase hover:bg-beige transition-colors duration-300"
            >
              Смотреть коллекцию
            </Link>
          </motion.div>

          <motion.p
            className="mt-8 sm:mt-12 font-body text-[10px] tracking-[0.2em] sm:tracking-[0.24em] uppercase text-ivory/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            MONVÉ — эстетика вне времени.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
