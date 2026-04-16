'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  /** Placeholder height while the section hasn't loaded yet. Prevents layout shift. */
  minHeight?: string;
  /** IntersectionObserver rootMargin — how far before the viewport to start loading. */
  rootMargin?: string;
}

// Module-level debounce: all 13 LazySection instances share one refresh call.
// Without this, every section mount fires its own ScrollTrigger.refresh(true),
// stacking 13 expensive layout recalculations as the user scrolls down.
let refreshTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleScrollTriggerRefresh() {
  if (refreshTimer) clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    refreshTimer = null;
    void import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh(true);
    });
  }, 150);
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

  // Single debounced refresh shared across all instances — fires once, 150ms
  // after the last section mounts, not once per section.
  useEffect(() => {
    if (!shouldRender) return;
    scheduleScrollTriggerRefresh();
  }, [shouldRender]);

  return (
    <div
      ref={ref}
      style={
        !shouldRender
          ? { minHeight }
          : {
              // Skip paint/layout for off-screen sections entirely
              contentVisibility: 'auto' as React.CSSProperties['contentVisibility'],
              containIntrinsicSize: `0 ${minHeight}`,
            }
      }
    >
      {shouldRender ? children : null}
    </div>
  );
}
