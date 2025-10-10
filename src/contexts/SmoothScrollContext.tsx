'use client'
import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.innerWidth < 768;
    let rafId: number | null = null;
    let initialized = false;

    const init = () => {
      if (initialized) return;
      initialized = true;
      if (prefersReduced || isSmall || document.visibilityState !== 'visible') return;
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      removeStartupListeners();
    };

    const onFirstInteraction = () => init();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    const removeStartupListeners = () => {
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('wheel', onFirstInteraction, { capture: true } as any);
      window.removeEventListener('touchstart', onFirstInteraction, { capture: true } as any);
      window.removeEventListener('keydown', onFirstInteraction, { capture: true } as any);
      document.removeEventListener('visibilitychange', onVisibility);
    };

    // Initialize on first real interaction to avoid TBT at startup
    window.addEventListener('scroll', onFirstInteraction, { passive: true, once: true });
    window.addEventListener('wheel', onFirstInteraction, { passive: true, capture: true, once: true } as any);
    window.addEventListener('touchstart', onFirstInteraction, { passive: true, capture: true, once: true } as any);
    window.addEventListener('keydown', onFirstInteraction, { capture: true, once: true } as any);
    document.addEventListener('visibilitychange', onVisibility);

    // Fallback: idle init after a delay if no interaction happens
    const idleFallback = setTimeout(() => init(), 4000);

    return () => {
      clearTimeout(idleFallback);
      removeStartupListeners();
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}; 