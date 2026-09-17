'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * Defers fetching the video source (multi-MB files) until the element is
 * about to enter the viewport, instead of every autoplaying <video> on the
 * page downloading at once on initial load.
 */
export default function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay={shouldLoad}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={className}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
