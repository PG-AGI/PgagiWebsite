'use client'
import React, { createContext, useContext, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MOBILE_BREAKPOINT,
  REDUCED_MOTION_QUERY,
  SCROLL_REFRESH_DEBOUNCE_MS,
} from '@/lib/motion';

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let refreshTimeout: number | null = null;
    const viewport = window.visualViewport;

    const scheduleRefresh = () => {
      if (refreshTimeout) window.clearTimeout(refreshTimeout);
      refreshTimeout = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, SCROLL_REFRESH_DEBOUNCE_MS);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') scheduleRefresh();
    };

    const handlePageShow = () => {
      scheduleRefresh();
    };

    window.addEventListener('resize', scheduleRefresh);
    window.addEventListener('orientationchange', scheduleRefresh);
    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    viewport?.addEventListener('resize', scheduleRefresh);

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const prefersReduced = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (prefersReduced || isMobile) {
      ScrollTrigger.normalizeScroll(false);
      scheduleRefresh();
      return () => {
        window.removeEventListener('resize', scheduleRefresh);
        window.removeEventListener('orientationchange', scheduleRefresh);
        window.removeEventListener('pageshow', handlePageShow);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        viewport?.removeEventListener('resize', scheduleRefresh);
        if (refreshTimeout) window.clearTimeout(refreshTimeout);
      };
    }

    const lenisInstance = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1.4,
      touchMultiplier: 1.8,
      autoRaf: false,
      infinite: false,
      syncTouch: false,
      syncTouchLerp: 0.1,
    });

    setLenis(lenisInstance);

    // Wire Lenis scroll events to keep ScrollTrigger positions updated
    lenisInstance.on('scroll', ScrollTrigger.update);

    // GSAP ticker drives Lenis — one RAF loop, no conflicts
    const update = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    scheduleRefresh();

    return () => {
      gsap.ticker.remove(update);
      lenisInstance.off('scroll', ScrollTrigger.update);
      lenisInstance.destroy();
      setLenis(null);
      window.removeEventListener('resize', scheduleRefresh);
      window.removeEventListener('orientationchange', scheduleRefresh);
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      viewport?.removeEventListener('resize', scheduleRefresh);
      if (refreshTimeout) window.clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};