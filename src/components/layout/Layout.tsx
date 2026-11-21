import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SearchOverlay } from './SearchOverlay';
import { CartDrawer } from './CartDrawer';
import { MobileMenu } from './MobileMenu';
import { IntroAnimation } from './IntroAnimation';
import { NotificationToast } from '../common/NotificationToast';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <IntroAnimation />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <SearchOverlay />
      <CartDrawer />
      <MobileMenu />
      <NotificationToast />
    </>
  );
}
