'use client';

import { useEffect, useRef, useState } from 'react';

let sharedObserver: IntersectionObserver | null = null;
const pending = new Map<Element, () => void>();

function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const callback = pending.get(entry.target);
        if (!callback) continue;
        callback();
        pending.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );

  return sharedObserver;
}

// Every <Reveal> on the page used to create its own IntersectionObserver
// (dozens per page). A single shared observer tracking all of them is far
// cheaper for the browser to maintain and dispatch.
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = getSharedObserver();
    pending.set(node, () => setInView(true));
    observer.observe(node);

    return () => {
      pending.delete(node);
      observer.unobserve(node);
    };
  }, []);

  return { ref, inView };
}
