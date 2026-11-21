import { Link } from 'react-router-dom';

const brandLinks = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/catalog?sort=newest', label: 'Новинки' },
  { to: '/catalog?featured=1', label: 'Коллекции' },
  { to: '/about', label: 'О бренде' },
];

const customerLinks = [
  { to: '/delivery', label: 'Доставка и оплата' },
  { to: '/returns', label: 'Возврат и обмен' },
  { to: '/faq', label: 'Частые вопросы' },
  { to: '/contacts', label: 'Контакты' },
];

const legalLinks = [
  { to: '/privacy', label: 'Политика конфиденциальности' },
  { to: '/terms', label: 'Пользовательское соглашение' },
];

const socialLinks = [
  { href: '#', label: 'Telegram' },
  { href: '#', label: 'VK' },
  { href: '#', label: 'Pinterest' },
];

export function Footer() {
  return (
    <footer className="bg-beige border-t border-graphite/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-display text-3xl tracking-[0.3em] text-graphite"
            >
              MONVÉ
            </Link>
            <p className="mt-5 font-body text-sm text-taupe leading-relaxed max-w-xs">
              Современный взгляд на повседневный стиль.
            </p>
            <p className="mt-6 font-display text-lg italic text-graphite/80">
              Меньше лишнего. Больше тебя.
            </p>
          </div>

          <div>
            <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-taupe mb-5">
              Навигация
            </h3>
            <ul className="space-y-3">
              {brandLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-graphite hover:opacity-60 transition-opacity"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-taupe mb-5">
              Покупателям
            </h3>
            <ul className="space-y-3">
              {customerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-graphite hover:opacity-60 transition-opacity"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] tracking-[0.2em] uppercase text-taupe mb-5">
              Соцсети
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-graphite hover:opacity-60 transition-opacity"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${l.label} (скоро)`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-body text-xs text-taupe hover:text-graphite transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-graphite/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-body text-xs text-taupe">
            © {new Date().getFullYear()} MONVÉ. Демонстрационный проект.
          </p>
          <p className="font-body text-xs text-taupe">
            Все цены указаны в российских рублях.
          </p>
        </div>
      </div>
    </footer>
  );
}
