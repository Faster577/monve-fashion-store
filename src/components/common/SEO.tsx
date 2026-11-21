import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description?: string;
};

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      ensureMeta('name', 'description', description);
      ensureMeta('property', 'og:description', description);
    }
    ensureMeta('property', 'og:title', title);
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:locale', 'ru_RU');
    ensureMeta('name', 'twitter:card', 'summary_large_image');
  }, [title, description]);

  return null;
}
