import { useCallback } from 'react';
import { useSmoothScroll } from '@/contexts/SmoothScrollContext';

export const useSmoothScrollTo = () => {
  const { lenis } = useSmoothScroll();

  const scrollTo = useCallback((target: string | HTMLElement, options?: {
    offset?: number;
    duration?: number;
  }) => {
    const element = typeof target === 'string' 
      ? document.querySelector(target) as HTMLElement
      : target;

    if (!element) {
      console.warn(`Element not found: ${target}`);
      return;
    }

    const offset = options?.offset || 0;
    const duration = options?.duration || 1.2;

    if (lenis) {
      // Calculate absolute position relative to document top
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - offset;

      lenis.scrollTo(targetPosition, {
        duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      // Fallback for mobile or when lenis is not initialized
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, [lenis]);

  return { scrollTo };
}; 