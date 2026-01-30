import styles from './calendly.module.scss';
// import { InlineWidget } from "react-calendly";
// import BookCallModal from './base/bookCallModela';
// import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Calendly() {
  // const widgetRef = useRef<HTMLDivElement>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleBookCall = () => {
  //     setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //     setIsModalOpen(false);
  // };

  // useEffect(() => {
  //     const handleResize = () => {
  //         const widgetElement = widgetRef.current;
  //         if (widgetElement) {
  //             const widgetHeight = widgetElement.offsetHeight;
  //             widgetElement.style.height = `${widgetHeight}px`;
  //         }
  //     };

  //     handleResize();
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <section className={styles.calendly}>
      <div className={styles.backgroundImage}>
        <Image
          src="/landing/CTA-Background-New.jpg"
          alt="CTA Background"
          width={1920}
          height={1080}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>Let&apos;s build the future</h1>

          <h2 className={styles.emphasizedText}>TOGETHER.</h2>

          <p className={styles.subHeading}>
            Not sure where to start? Book a call and let&apos;s explore
            what&apos;s possible.
          </p>

          <Link
            className={styles.ctaButton}
            // onClick={() => window.open("https://form.pgagi.in/", "_blank")}
            href="https://calendly.com/vivek-_ou/30min"
            target="_blank"
            style={{
              textDecoration: 'none',
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </section>
  );
}
