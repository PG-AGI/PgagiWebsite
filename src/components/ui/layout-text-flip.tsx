'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import styles from './layout-text-flip.module.scss';

interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  intervalMs?: number;
  className?: string;
}

export function LayoutTextFlip({
  text = '',
  words,
  intervalMs = 2600,
  className = '',
}: LayoutTextFlipProps) {
  const prefersReducedMotion = useReducedMotion();
  const wordList = useMemo(() => (words.length ? words : ['']), [words]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || wordList.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordList.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs, wordList, prefersReducedMotion]);

  return (
    <span
      className={`${styles.flipRoot} ${prefersReducedMotion ? styles.prefersReducedMotion : ''} ${className}`}
    >
      {text && <span className={styles.staticText}>{text}</span>}
      <span className={styles.wordWrapper}>
        <AnimatePresence mode="wait">
          <motion.span
            key={wordList[index]}
            className={styles.word}
            initial={{ rotateX: -90, y: '100%', opacity: 0 }}
            animate={{ rotateX: 0, y: '0%', opacity: 1 }}
            exit={{ rotateX: 90, y: '-100%', opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {wordList[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

