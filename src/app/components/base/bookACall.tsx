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
      if (widgetRef.current) {
        // You can adjust the widget's height if needed, but it may not be necessary
        widgetRef.current.style.height = `${widgetRef.current.offsetHeight}px`;
      }
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.calendly}>
      <div className={styles.window}>
        {/* Close button triggering onClose */}
        <button className={styles.closeButton} onClick={onClose}>×</button>

        {/* Calendly widget */}
        <div className={styles.widget} ref={widgetRef}>
          <InlineWidget url="https://calendly.com/admin-quf_/30min" />
        </div>
      </div>
    </div>
  );
};

export default BookCalendly;
