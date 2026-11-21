import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useUiStore } from '../../store/uiStore';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

export function IntroAnimation() {
  const introDone = useUiStore((s) => s.introDone);
  const setIntroDone = useUiStore((s) => s.setIntroDone);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (introDone) return;
    const t = setTimeout(
      () => setIntroDone(true),
      reduced ? 100 : 1800
    );
    return () => clearTimeout(t);
  }, [introDone, setIntroDone, reduced]);

  return (
    <AnimatePresence>
      {!introDone && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden="true"
        >
          <motion.span
            className="font-display text-[clamp(2.5rem,8vw,5rem)] tracking-[0.35em] text-graphite"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            MONVÉ
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
