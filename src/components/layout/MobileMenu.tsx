import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';
import { useScrollLock } from '../../hooks/useScrollLock';

const links = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/catalog?sort=newest', label: 'Новинки' },
  { to: '/catalog?featured=1', label: 'Коллекции' },
  { to: '/about', label: 'О бренде' },
  { to: '/favorites', label: 'Избранное' },
  { to: '/cart', label: 'Корзина' },
];

export function MobileMenu() {
  const open = useUiStore((s) => s.mobileMenuOpen);
  const setOpen = useUiStore((s) => s.setMobileMenuOpen);

  useScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ivory flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-graphite/10">
            <span className="font-display text-xl tracking-[0.3em]">MONVÉ</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8">
            <ul className="space-y-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-[clamp(2rem,8vw,3.5rem)] tracking-wide text-graphite hover:text-taupe transition-colors block py-1"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <p className="px-8 pb-10 font-body text-xs tracking-[0.2em] uppercase text-taupe">
            Меньше лишнего. Больше тебя.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
