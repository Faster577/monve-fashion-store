import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useUiStore } from '../../store/uiStore';
import { useCartStore } from '../../store/cartStore';
import { useFavoritesStore } from '../../store/favoritesStore';

const leftNav = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/catalog?sort=newest', label: 'Новинки' },
  { to: '/catalog?featured=1', label: 'Коллекции' },
  { to: '/about', label: 'О бренде' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const setSearchOpen = useUiStore((s) => s.setSearchOpen);
  const setCartOpen = useUiStore((s) => s.setCartOpen);
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);
  const cartCount = useCartStore((s) => s.getTotalItems());
  const favCount = useFavoritesStore((s) => s.getCount());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-400
        ${scrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-graphite/10 shadow-[0_1px_0_rgba(41,39,36,0.04)]'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 h-16 md:h-[72px] grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 md:gap-x-4">
        {/* Mobile menu */}
        <div className="flex md:hidden justify-self-start">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 -ml-2"
            aria-label="Открыть меню"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Desktop left nav — nowrap + flexible column so labels stay on one line */}
        <nav
          className="hidden md:flex items-center justify-self-start gap-4 lg:gap-6 xl:gap-8 min-w-0"
          aria-label="Основная навигация"
        >
          {leftNav.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `font-body text-[11px] lg:text-xs tracking-[0.16em] uppercase whitespace-nowrap shrink-0 transition-opacity hover:opacity-60 ${
                  isActive ? 'opacity-100' : 'opacity-80'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logo */}
        <Link
          to="/"
          className="justify-self-center font-display text-[clamp(1.25rem,2.5vw,1.75rem)] tracking-[0.22em] sm:tracking-[0.3em] md:tracking-[0.35em] text-graphite hover:opacity-80 transition-opacity whitespace-nowrap"
          aria-label="MONVÉ — на главную"
        >
          MONVÉ
        </Link>

        {/* Right actions */}
        <div className="justify-self-end flex items-center gap-1 md:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden md:flex p-2 hover:opacity-60 transition-opacity"
            aria-label="Поиск"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <Link
            to="/favorites"
            className="hidden md:flex relative p-2 hover:opacity-60 transition-opacity"
            aria-label={`Избранное${favCount ? `, ${favCount}` : ''}`}
          >
            <Heart size={20} strokeWidth={1.5} />
            <AnimatePresence>
              {favCount > 0 && (
                <motion.span
                  key={favCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 flex items-center justify-center bg-graphite text-ivory text-[9px] font-body rounded-full"
                >
                  {favCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative p-2 hover:opacity-60 transition-opacity"
            aria-label={`Корзина${cartCount ? `, ${cartCount}` : ''}`}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 flex items-center justify-center bg-graphite text-ivory text-[9px] font-body rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
}
