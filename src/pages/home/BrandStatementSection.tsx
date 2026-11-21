import { motion, useReducedMotion } from 'motion/react';

export function BrandStatementSection() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-graphite text-ivory py-24 md:py-36 px-5 md:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.p
          className="font-display text-[clamp(2rem,7vw,5.5rem)] leading-[1.05] tracking-wide text-balance"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Не следуй за трендами.
          <br />
          Создавай свой стиль.
        </motion.p>
      </div>
    </section>
  );
}
