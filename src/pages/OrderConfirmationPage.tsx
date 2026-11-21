import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { formatPrice } from '../utils/formatPrice';
import type { OrderSummary } from '../types';

export function OrderConfirmationPage() {
  const order = useMemo(() => {
    try {
      const raw = sessionStorage.getItem('monve-last-order');
      return raw ? (JSON.parse(raw) as OrderSummary) : null;
    } catch {
      return null;
    }
  }, []);

  return (
    <>
      <SEO
        title="Заказ оформлен — MONVÉ"
        description="Спасибо за твой выбор."
      />
      <div className="pt-28 md:pt-36 pb-24 px-5 md:px-8 max-w-2xl mx-auto text-center">
        <p className="font-body text-[10px] tracking-[0.28em] uppercase text-taupe mb-4">
          Демонстрационный заказ
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide leading-tight text-graphite">
          Спасибо за твой выбор.
        </h1>
        <p className="mt-6 font-body text-sm md:text-base text-taupe leading-relaxed">
          Твой заказ успешно оформлен. Мы подготовили все детали и рады, что
          MONVÉ станет частью твоего стиля.
        </p>
        <p className="mt-4 font-body text-xs text-taupe/80">
          Это демонстрация процесса оформления. Реальный заказ в систему
          исполнения не отправлялся.
        </p>

        {order && (
          <div className="mt-12 text-left bg-beige/50 p-6 md:p-8">
            <div className="flex justify-between items-baseline mb-6">
              <p className="font-body text-xs tracking-[0.16em] uppercase text-taupe">
                Номер заказа
              </p>
              <p className="font-display text-xl tracking-wide">
                {order.orderNumber}
              </p>
            </div>
            <ul className="space-y-3 border-t border-graphite/10 pt-5">
              {order.items.map((item) => (
                <li
                  key={`${item.productId}-${item.size}-${item.color.id}`}
                  className="flex justify-between gap-4 font-body text-sm"
                >
                  <span>
                    {item.name}
                    <span className="text-taupe">
                      {' '}
                      · {item.color.name} / {item.size} × {item.quantity}
                    </span>
                  </span>
                  <span className="shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-6 pt-4 border-t border-graphite/10 font-body text-base font-medium">
              <span>Итого</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        )}

        <Link
          to="/"
          className="inline-flex mt-12 px-8 py-4 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </>
  );
}
