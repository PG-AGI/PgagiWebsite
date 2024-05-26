// Assuming BookCalendly.tsx needs the onClose prop

import React, { useEffect, useRef } from 'react';
import { InlineWidget } from 'react-calendly';
import styles from './bookCalendy.module.scss';

interface BookCalendlyProps {
  onClose: () => void;
}

const BookCalendly: React.FC<BookCalendlyProps> = ({ onClose }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const widgetElement = widgetRef.current;
      if (widgetElement) {
        const widgetHeight = widgetElement.offsetHeight;
        widgetElement.style.height = `${widgetHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.calendly}>
      <div className={styles.window}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.widget} ref={widgetRef}>
          <InlineWidget url="https://calendly.com/admin-quf_/30min" />
        </div>
      </div>
    </div>
  );
};

export default BookCalendly;
