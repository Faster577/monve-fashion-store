import { SEO } from '../components/common/SEO';
import { Marquee } from '../components/animations/Marquee';
import { HeroSection } from './home/HeroSection';
import { NewCollectionSection } from './home/NewCollectionSection';
import { FeaturedProductsSection } from './home/FeaturedProductsSection';
import { BrandEditorialSection } from './home/BrandEditorialSection';
import { CategoriesSection } from './home/CategoriesSection';
import { BrandStatementSection } from './home/BrandStatementSection';
import { NewsletterSection } from './home/NewsletterSection';

export function HomePage() {
  return (
    <>
      <SEO
        title="MONVÉ — Эстетика вне времени"
        description="MONVÉ — современный премиальный бренд одежды. Меньше лишнего. Больше тебя."
      />
      <HeroSection />
      <Marquee text="MONVÉ — ЭСТЕТИКА В КАЖДОЙ ДЕТАЛИ — СТИЛЬ ВНЕ ВРЕМЕНИ — MONVÉ —" />
      <NewCollectionSection />
      <FeaturedProductsSection />
      <BrandEditorialSection />
      <CategoriesSection />
      <BrandStatementSection />
      <NewsletterSection />
    </>
  );
}
