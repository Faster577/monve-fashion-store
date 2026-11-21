import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../utils/formatPrice';

export function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.getSubtotal());

  return (
    <>
      <SEO title="Корзина — MONVÉ" description="Твоя корзина MONVÉ." />
      <div className="pt-24 md:pt-28 pb-20 px-5 md:px-8 max-w-[1440px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Главная', to: '/' },
            { label: 'Корзина' },
          ]}
        />

        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] tracking-wide mb-10">
          Корзина
        </h1>

        {items.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto">
            <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] tracking-wide">
              Твоя корзина пока пуста
            </p>
            <p className="mt-4 font-body text-sm text-taupe">
              Кажется, самое время найти что-то особенное.
            </p>
            <Link
              to="/catalog"
              className="inline-flex mt-10 px-8 py-4 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ul className="lg:col-span-8 space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.size}-${item.color.id}`}
                  className="flex gap-4 md:gap-6 pb-6 border-b border-graphite/10"
                >
                  <Link to={`/product/${item.slug}`} className="shrink-0">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      className="w-24 md:w-32 h-32 md:h-40 object-cover"
                      width={128}
                      height={160}
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex justify-between gap-3">
                      <Link
                        to={`/product/${item.slug}`}
                        className="font-body text-sm md:text-base text-graphite hover:opacity-70"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.productId, item.size, item.color.id)
                        }
                        className="text-taupe hover:text-graphite"
                        aria-label={`Удалить ${item.name}`}
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <p className="mt-1 font-body text-xs text-taupe">
                      {item.color.name} / {item.size}
                    </p>
                    <p className="mt-2 font-body text-sm">
                      {formatPrice(item.price)}
                    </p>
                    <div className="mt-auto pt-4 flex items-center gap-3">
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
                        className="p-1.5 border border-graphite/20"
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
                        className="p-1.5 border border-graphite/20"
                        aria-label="Увеличить количество"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="lg:col-span-4">
              <div className="bg-beige/60 p-6 md:p-8 sticky top-28">
                <h2 className="font-display text-xl tracking-wide mb-6">
                  Итого
                </h2>
                <div className="flex justify-between font-body text-sm mb-2">
                  <span className="text-taupe">Подытог</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between font-body text-sm mb-6">
                  <span className="text-taupe">Доставка</span>
                  <span>
                    {subtotal >= 10000 ? 'Бесплатно' : 'Рассчитывается'}
                  </span>
                </div>
                <div className="flex justify-between font-body text-base font-medium border-t border-graphite/15 pt-4 mb-8">
                  <span>К оплате</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center py-4 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
                >
                  Оформить заказ
                </Link>
                <Link
                  to="/catalog"
                  className="flex w-full items-center justify-center mt-3 py-3 font-body text-xs tracking-[0.14em] uppercase text-taupe hover:text-graphite transition-colors"
                >
                  Продолжить покупки
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
