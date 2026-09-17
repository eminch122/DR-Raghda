'use client';

import { useEffect } from 'react';

/**
 * Injects a stylesheet after hydration instead of via a render-blocking
 * <link> in <head>, so a large third-party CSS file (icon font, etc.)
 * doesn't delay first paint.
 */
export default function DeferredStylesheet({ href }: { href: string }) {
  useEffect(() => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }, [href]);

  return null;
}
