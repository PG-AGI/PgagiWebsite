'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  /** Placeholder height while the section hasn't loaded yet. Prevents layout shift. */
  minHeight?: string;
  /** IntersectionObserver rootMargin — how far before the viewport to start loading. */
  rootMargin?: string;
}

/**
 * Defers rendering (and thus chunk-loading) of below-fold sections until they
 * approach the viewport. Prevents GSAP and other heavy deps from loading upfront
 * when they're only needed much further down the page.
 */
export default function LazySection({
  children,
  minHeight = '400px',
  rootMargin = '500px',
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in view on mount (e.g. user refreshed mid-page), render immediately
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  // After content renders, signal layout change so ScrollTrigger recalculates positions
  useEffect(() => {
    if (shouldRender) {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
      });
    }
  }, [shouldRender]);

  return (
    <div ref={ref} style={!shouldRender ? { minHeight } : undefined}>
      {shouldRender ? children : null}
    </div>
  );
}
