'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/organisms/ErrorMessage.module.scss';

interface ErrorMessageProps {
  message: string;
  duration?: number; // Duration for how long the message will stay
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, duration = 5000, onClose }) => {
  const [progress, setProgress] = useState(100);
  const progressRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the timer to auto-dismiss the error message
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Decrease the progress bar over time
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, duration / 100); // Decrease every 1% of the total duration

    // Cleanup timer and interval when component unmounts
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);

  useEffect(() => {
    progressRef.current?.style.setProperty("--error-progress", `${progress}%`);
  }, [progress]);

  return (
    <div className={styles.errorMessage}>
      <span>{message}</span>
      <div className={styles.progressBar}>
        <div
          ref={progressRef}
          className={styles.innerProgressBar}
        ></div>
      </div>
    </div>
  );
};

export default ErrorMessage;
