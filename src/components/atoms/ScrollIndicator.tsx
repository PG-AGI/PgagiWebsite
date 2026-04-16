'use client'
import React, { useEffect } from 'react';
import { useSmoothScroll } from '@/contexts/SmoothScrollContext';
import styles from '@/styles/components/atoms/ScrollIndicator.module.scss';

const ScrollIndicator: React.FC = () => {
  const { lenis } = useSmoothScroll();
  const progressRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    let lastFraction = -1;

    const updateProgress = (scrollTop: number) => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = documentHeight > 0
        ? Math.min(1, Math.max(0, scrollTop / documentHeight))
        : 0;

      // Skip DOM write if change is imperceptible (<0.2%)
      if (Math.abs(fraction - lastFraction) < 0.002) return;
      lastFraction = fraction;

      progressRef.current?.style.setProperty('--scroll-progress-fraction', String(fraction));
    };

    const scheduleUpdate = (scrollTop: number) => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateProgress(scrollTop);
      });
    };

    if (lenis) {
      const onLenisScroll = () => scheduleUpdate(lenis.scroll);
      lenis.on('scroll', onLenisScroll);
      onLenisScroll();
      return () => {
        lenis.off('scroll', onLenisScroll);
        if (frame !== null) cancelAnimationFrame(frame);
      };
    }

    const onWindowScroll = () => scheduleUpdate(window.scrollY || window.pageYOffset);
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    onWindowScroll();

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [lenis]);

  return (
    <div className={styles.scrollIndicator}>
      <div ref={progressRef} className={styles.progressBar} />
    </div>
  );
};

export default ScrollIndicator;
