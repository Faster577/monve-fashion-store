import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../utils/formatPrice';
import { isValidEmail, isValidPhone, required } from '../utils/validation';
import type { CheckoutFormData, OrderSummary } from '../types';

type FieldErrors = Partial<Record<keyof CheckoutFormData, string>>;

const emptyForm: CheckoutFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  address: '',
  comment: '',
};

export function CheckoutPage() {
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const clearCart = useCartStore((s) => s.clearCart);

  const [form, setForm] = useState<CheckoutFormData>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const setField = (key: keyof CheckoutFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!required(form.firstName)) next.firstName = 'Укажи имя';
    if (!required(form.lastName)) next.lastName = 'Укажи фамилию';
    if (!required(form.phone)) next.phone = 'Укажи телефон';
    else if (!isValidPhone(form.phone))
      next.phone = 'Введи корректный номер телефона';
    if (!required(form.email)) next.email = 'Укажи электронную почту';
    else if (!isValidEmail(form.email))
      next.email = 'Введи корректный адрес электронной почты';
    if (!required(form.city)) next.city = 'Укажи город';
    if (!required(form.address)) next.address = 'Укажи адрес доставки';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const order: OrderSummary = {
      orderNumber: `MV-${Date.now().toString().slice(-8)}`,
      items: [...items],
      total: subtotal,
      customer: { ...form },
      createdAt: new Date().toISOString(),
    };

    sessionStorage.setItem('monve-last-order', JSON.stringify(order));
    clearCart();

    setTimeout(() => {
      navigate('/order-confirmation');
    }, 400);
  };

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 px-5 text-center">
        <SEO title="Оформление заказа — MONVÉ" />
        <h1 className="font-display text-3xl">Корзина пуста</h1>
        <p className="mt-3 font-body text-taupe">
          Добавь товары, чтобы оформить заказ.
        </p>
        <Link
          to="/catalog"
          className="inline-block mt-8 px-6 py-3 bg-graphite text-ivory font-body text-xs tracking-[0.16em] uppercase"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  const fields: Array<{
    key: keyof CheckoutFormData;
    label: string;
    type?: string;
    required?: boolean;
    full?: boolean;
  }> = [
    { key: 'firstName', label: 'Имя', required: true },
    { key: 'lastName', label: 'Фамилия', required: true },
    { key: 'phone', label: 'Телефон', type: 'tel', required: true },
    { key: 'email', label: 'Электронная почта', type: 'email', required: true },
    { key: 'city', label: 'Город', required: true },
    { key: 'address', label: 'Адрес доставки', required: true, full: true },
    { key: 'comment', label: 'Комментарий к заказу', full: true },
  ];

  return (
    <>
      <SEO
        title="Оформление заказа — MONVÉ"
        description="Оформи заказ в MONVÉ."
      />
      <div className="pt-24 md:pt-28 pb-20 px-5 md:px-8 max-w-[1440px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Главная', to: '/' },
            { label: 'Корзина', to: '/cart' },
            { label: 'Оформление' },
          ]}
        />

        <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] tracking-wide mb-10">
          Оформление заказа
        </h1>

        <p className="mb-8 font-body text-xs text-taupe bg-beige/60 px-4 py-3 max-w-2xl">
          Это демонстрационное оформление. Реальная оплата и отправка заказа не
          выполняются.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fields.map((field) => (
                <div
                  key={field.key}
                  className={field.full ? 'sm:col-span-2' : ''}
                >
                  <label
                    htmlFor={field.key}
                    className="block font-body text-xs tracking-[0.12em] uppercase text-graphite mb-2"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-taupe ml-1" aria-hidden>
                        *
                      </span>
                    )}
                  </label>
                  {field.key === 'comment' ? (
                    <textarea
                      id={field.key}
                      value={form[field.key]}
                      onChange={(e) => setField(field.key, e.target.value)}
                      rows={3}
                      className="w-full bg-transparent border border-graphite/25 px-4 py-3 font-body text-sm outline-none focus:border-graphite resize-y"
                    />
                  ) : (
                    <input
                      id={field.key}
                      type={field.type ?? 'text'}
                      value={form[field.key]}
                      onChange={(e) => setField(field.key, e.target.value)}
                      required={field.required}
                      className={`w-full bg-transparent border px-4 py-3 font-body text-sm outline-none focus:border-graphite ${
                        errors[field.key]
                          ? 'border-red-600'
                          : 'border-graphite/25'
                      }`}
                      aria-invalid={!!errors[field.key]}
                      aria-describedby={
                        errors[field.key] ? `${field.key}-error` : undefined
                      }
                    />
                  )}
                  {errors[field.key] && (
                    <p
                      id={`${field.key}-error`}
                      className="mt-1.5 font-body text-xs text-red-700"
                      role="alert"
                    >
                      {errors[field.key]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-beige/60 p-6 md:p-8 sticky top-28">
              <h2 className="font-display text-xl tracking-wide mb-6">
                Твой заказ
              </h2>
              <ul className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <li
                    key={`${item.productId}-${item.size}-${item.color.id}`}
                    className="flex gap-3"
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-18 object-cover"
                      width={56}
                      height={72}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm truncate">{item.name}</p>
                      <p className="font-body text-xs text-taupe mt-0.5">
                        {item.color.name} / {item.size} × {item.quantity}
                      </p>
                      <p className="font-body text-sm mt-1">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-body text-base font-medium border-t border-graphite/15 pt-4 mb-6">
                <span>Итого</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-graphite text-ivory font-body text-xs tracking-[0.18em] uppercase hover:bg-graphite/90 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Оформляем...' : 'Подтвердить заказ'}
              </button>
            </div>
          </aside>
        </form>
      </div>
    </>
  );
}
