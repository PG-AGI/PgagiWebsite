'use client'
import React, { useEffect, useState } from 'react';
import { useSmoothScroll } from '@/contexts/SmoothScrollContext';
import styles from './ScrollIndicator.module.scss';

const ScrollIndicator: React.FC = () => {
  const { lenis } = useSmoothScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    const updateScrollProgress = () => {
      const scrollTop = lenis.scroll;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    lenis.on('scroll', updateScrollProgress);

    return () => {
      lenis.off('scroll', updateScrollProgress);
    };
  }, [lenis]);

  return (
    <div className={styles.scrollIndicator}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollIndicator; 