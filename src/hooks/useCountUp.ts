'use client';

import { useEffect, useState } from 'react';
import { useInView } from './useInView';

export function useCountUp(target: number, duration = 1200, decimals = 0) {
  const { ref, inView } = useInView<HTMLElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setValue(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return { ref, display };
}
