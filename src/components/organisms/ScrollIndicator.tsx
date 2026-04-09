'use client'
import React, { useEffect, useState } from 'react';
import { useSmoothScroll } from '@/contexts/SmoothScrollContext';
import styles from '@/styles/components/organisms/ScrollIndicator.module.scss';

const ScrollIndicator: React.FC = () => {
  const { lenis } = useSmoothScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;

    const updateScrollProgress = (scrollTop: number) => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      const next = Math.min(100, Math.max(0, progress));
      setScrollProgress((prev) => (Math.abs(prev - next) < 0.2 ? prev : next));
    };

    const scheduleUpdate = (value: number) => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateScrollProgress(value);
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

  useEffect(() => {
    progressRef.current?.style.setProperty("--scroll-progress", `${scrollProgress}%`);
  }, [scrollProgress]);

  return (
    <div className={styles.scrollIndicator}>
      <div ref={progressRef} className={styles.progressBar} />
    </div>
  );
};

export default ScrollIndicator; 
