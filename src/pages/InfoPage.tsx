import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Reveal } from '../components/animations/Reveal';

type InfoSection = {
  title: string;
  paragraphs: string[];
};

type InfoPageProps = {
  title: string;
  seoTitle: string;
  seoDescription: string;
  sections: InfoSection[];
};

export function InfoPage({
  title,
  seoTitle,
  seoDescription,
  sections,
}: InfoPageProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="pt-24 md:pt-28 pb-20 px-5 md:px-8 max-w-3xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Главная', to: '/' },
            { label: title },
          ]}
        />
        <Reveal>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-wide mb-12">
            {title}
          </h1>
        </Reveal>
        <div className="space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <h2 className="font-display text-2xl tracking-wide mb-4">
                {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="font-body text-sm text-taupe leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

export function DeliveryPage() {
  return (
    <InfoPage
      title="Доставка и оплата"
      seoTitle="Доставка и оплата — MONVÉ"
      seoDescription="Информация о доставке и оплате заказов MONVÉ."
      sections={[
        {
          title: 'Доставка по России',
          paragraphs: [
            'Мы доставляем заказы по всей России. Срок доставки обычно составляет 2–5 рабочих дней в зависимости от региона.',
            'Бесплатная доставка при заказе от 10 000 ₽. При меньшей сумме стоимость доставки рассчитывается при оформлении.',
          ],
        },
        {
          title: 'Оплата',
          paragraphs: [
            'На этом демонстрационном сайте оплата не проводится. В реальном магазине доступны банковские карты и другие безопасные способы оплаты.',
          ],
        },
      ]}
    />
  );
}

export function ReturnsPage() {
  return (
    <InfoPage
      title="Возврат и обмен"
      seoTitle="Возврат и обмен — MONVÉ"
      seoDescription="Условия возврата и обмена товаров MONVÉ."
      sections={[
        {
          title: 'Срок возврата',
          paragraphs: [
            'Ты можешь вернуть или обменять товар в течение 14 дней с момента получения, если вещь сохранила товарный вид, бирки и упаковку.',
          ],
        },
        {
          title: 'Как оформить возврат',
          paragraphs: [
            'Свяжись с нами через страницу контактов, укажи номер заказа и причину возврата. Мы подскажем удобный способ отправки.',
            'На демонстрационном сайте возврат не обрабатывается — это информационная страница.',
          ],
        },
      ]}
    />
  );
}

export function FAQPage() {
  return (
    <InfoPage
      title="Частые вопросы"
      seoTitle="Частые вопросы — MONVÉ"
      seoDescription="Ответы на частые вопросы о MONVÉ."
      sections={[
        {
          title: 'Как выбрать размер?',
          paragraphs: [
            'На странице каждого товара указаны доступные размеры. Если сомневаешься, ориентируйся на описание посадки или напиши нам.',
          ],
        },
        {
          title: 'Это настоящий магазин?',
          paragraphs: [
            'Нет. MONVÉ — демонстрационный портфолио-проект премиального fashion e-commerce. Заказы и оплата не обрабатываются.',
          ],
        },
        {
          title: 'Как ухаживать за вещами?',
          paragraphs: [
            'Рекомендации по уходу указаны на бирках изделий. В целом мы советуем бережную стирку и сушку вдали от прямого тепла.',
          ],
        },
      ]}
    />
  );
}

export function ContactsPage() {
  return (
    <InfoPage
      title="Контакты"
      seoTitle="Контакты — MONVÉ"
      seoDescription="Связаться с MONVÉ."
      sections={[
        {
          title: 'Связь с нами',
          paragraphs: [
            'Электронная почта: hello@monve.demo',
            'Телефон: +7 (000) 000-00-00',
            'Это демонстрационные контакты портфолио-проекта.',
          ],
        },
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <InfoPage
      title="Политика конфиденциальности"
      seoTitle="Политика конфиденциальности — MONVÉ"
      seoDescription="Политика конфиденциальности MONVÉ."
      sections={[
        {
          title: 'Какие данные мы храним',
          paragraphs: [
            'На демонстрационном сайте данные корзины и избранного сохраняются только в твоём браузере (localStorage).',
            'Формы оформления и рассылки не отправляют данные на сервер.',
          ],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <InfoPage
      title="Пользовательское соглашение"
      seoTitle="Пользовательское соглашение — MONVÉ"
      seoDescription="Пользовательское соглашение MONVÉ."
      sections={[
        {
          title: 'О проекте',
          paragraphs: [
            'Сайт MONVÉ создан как портфолио-проект. Все товары, цены и заказы носят демонстрационный характер.',
            'Использование сайта означает согласие с тем, что реальные покупки и платежи здесь недоступны.',
          ],
        },
      ]}
    />
  );
}
