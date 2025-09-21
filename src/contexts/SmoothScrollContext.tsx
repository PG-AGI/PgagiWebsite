'use client'
import React, { createContext, useContext, useEffect, useRef } from 'react';

interface SmoothScrollContextType {
  lenis: any | null;
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
  const lenisRef = useRef<any | null>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let running = false;

    function raf(time: number) {
      if (!running) return;
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    function startLoop() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(raf);
    }

    function stopLoop() {
      running = false;
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    let didInit = false;

    async function initLenis() {
      if (didInit) return;
      didInit = true;
      try {
        const { default: Lenis } = await import('lenis');
        lenisRef.current = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // start RAF only when page is visible
        if (!document.hidden) startLoop();
      } catch (e) {
        // if import fails, leave lenisRef null
        // eslint-disable-next-line no-console
        console.error('Failed to load Lenis dynamically', e);
      }
    }

    // initialize after first user interaction or short timeout
    const events: Array<keyof DocumentEventMap> = ['pointerdown', 'wheel', 'touchstart', 'keydown'];
    const onFirstInteraction = () => {
      initLenis();
      events.forEach((ev) => document.removeEventListener(ev, onFirstInteraction as EventListener));
    };
    events.forEach((ev) => document.addEventListener(ev, onFirstInteraction as EventListener, { passive: true }));

    const timeoutId = window.setTimeout(() => initLenis(), 2000);

    function onVisibilityChange() {
      if (document.hidden) stopLoop();
      else startLoop();
    }

    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });

    // cleanup
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      events.forEach((ev) => document.removeEventListener(ev, onFirstInteraction as EventListener));
      clearTimeout(timeoutId);
      stopLoop();
      if (lenisRef.current && typeof lenisRef.current.destroy === 'function') {
        try {
          lenisRef.current.destroy();
        } catch {}
        lenisRef.current = null;
      }
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};