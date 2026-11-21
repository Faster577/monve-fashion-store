import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';

const CatalogPage = lazy(() =>
  import('./pages/CatalogPage').then((m) => ({ default: m.CatalogPage }))
);
const ProductPage = lazy(() =>
  import('./pages/ProductPage').then((m) => ({ default: m.ProductPage }))
);
const CartPage = lazy(() =>
  import('./pages/CartPage').then((m) => ({ default: m.CartPage }))
);
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage').then((m) => ({ default: m.FavoritesPage }))
);
const CheckoutPage = lazy(() =>
  import('./pages/CheckoutPage').then((m) => ({ default: m.CheckoutPage }))
);
const OrderConfirmationPage = lazy(() =>
  import('./pages/OrderConfirmationPage').then((m) => ({
    default: m.OrderConfirmationPage,
  }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const DeliveryPage = lazy(() =>
  import('./pages/InfoPage').then((m) => ({ default: m.DeliveryPage }))
);
const ReturnsPage = lazy(() =>
  import('./pages/InfoPage').then((m) => ({ default: m.ReturnsPage }))
);
const FAQPage = lazy(() =>
  import('./pages/InfoPage').then((m) => ({ default: m.FAQPage }))
);
const ContactsPage = lazy(() =>
  import('./pages/InfoPage').then((m) => ({ default: m.ContactsPage }))
);
const PrivacyPage = lazy(() =>
  import('./pages/InfoPage').then((m) => ({ default: m.PrivacyPage }))
);
const TermsPage = lazy(() =>
  import('./pages/InfoPage').then((m) => ({ default: m.TermsPage }))
);

function PageLoader() {
  return (
    <div className="pt-32 pb-20 flex justify-center" role="status">
      <p className="font-body text-sm tracking-[0.16em] uppercase text-taupe">
        Загрузка...
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="pt-32 pb-20 px-5 text-center">
      <h1 className="font-display text-3xl">Страница не найдена</h1>
      <p className="mt-3 font-body text-taupe">
        Возможно, адрес указан неверно.
      </p>
      <a
        href="/"
        className="inline-block mt-8 px-6 py-3 bg-graphite text-ivory font-body text-xs tracking-[0.16em] uppercase"
      >
        На главную
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="product/:slug" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route path="about" element={<AboutPage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="returns" element={<ReturnsPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
