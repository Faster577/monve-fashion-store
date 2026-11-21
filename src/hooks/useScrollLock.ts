import { useEffect } from 'react';

/**
 * Locks document scroll without permanently altering layout.
 * Uses overflow on html+body (not position:fixed) to avoid sticky/catalog
 * scroll regressions after unlock.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;

    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (scrollbar > 0) {
      body.style.paddingRight = `${scrollbar}px`;
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };
  }, [locked]);
}
