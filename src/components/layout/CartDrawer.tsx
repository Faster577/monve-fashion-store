import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus, X } from 'lucide-react';
import { useUiStore } from '../../store/uiStore';
import { useCartStore } from '../../store/cartStore';
import { useScrollLock } from '../../hooks/useScrollLock';
import { formatPrice } from '../../utils/formatPrice';
import { OptimizedImage } from '../common/OptimizedImage';
import { useEffect } from 'react';

export function CartDrawer() {
  const open = useUiStore((s) => s.cartOpen);
  const setOpen = useUiStore((s) => s.setCartOpen);
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.getSubtotal());

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
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-graphite/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <motion.aside
            className="fixed top-0 right-0 z-[85] h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Корзина"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-graphite/10">
              <h2 className="font-display text-2xl tracking-wide">Корзина</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Закрыть корзину"
              >
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                <p className="font-display text-2xl tracking-wide">
                  Твоя корзина пока пуста
                </p>
                <p className="mt-3 font-body text-sm text-taupe max-w-xs">
                  Кажется, самое время найти что-то особенное.
                </p>
                <Link
                  to="/catalog"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex px-8 py-3.5 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
                >
                  Перейти в каталог
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                  {items.map((item) => (
                    <li
                      key={`${item.productId}-${item.size}-${item.color.id}`}
                      className="flex gap-4"
                    >
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={() => setOpen(false)}
                        className="shrink-0"
                      >
                        <OptimizedImage
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-28 object-cover"
                          width={80}
                          height={112}
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={() => setOpen(false)}
                            className="font-body text-sm text-graphite hover:opacity-70"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(
                                item.productId,
                                item.size,
                                item.color.id
                              )
                            }
                            className="text-taupe hover:text-graphite transition-colors"
                            aria-label={`Удалить ${item.name}`}
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="mt-1 font-body text-xs text-taupe">
                          {item.color.name} / {item.size}
                        </p>
                        <p className="mt-1 font-body text-sm">
                          {formatPrice(item.price)}
                        </p>
                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.color.id,
                                item.quantity - 1
                              )
                            }
                            className="p-1 border border-graphite/20 hover:border-graphite transition-colors"
                            aria-label="Уменьшить количество"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-body text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.color.id,
                                item.quantity + 1
                              )
                            }
                            className="p-1 border border-graphite/20 hover:border-graphite transition-colors"
                            aria-label="Увеличить количество"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-graphite/10 px-6 py-5 space-y-4">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-taupe">Подытог</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <Link
                    to="/cart"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center py-3.5 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
                  >
                    Перейти в корзину
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center py-3.5 border border-graphite text-graphite font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite hover:text-ivory transition-colors"
                  >
                    Оформить заказ
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
