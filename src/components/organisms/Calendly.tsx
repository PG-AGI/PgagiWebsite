import styles from "@/styles/components/organisms/calendly.module.scss";
import { InlineWidget } from "react-calendly";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import EXTERNAL_LINKS from "@/constants/externalLinks";

export default function Calendly() {
    const widgetRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookCall = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
        <section className={styles.calendly}>
            <div className={styles.backgroundImage}>
                <Image src="/landing/CTA-Background-New.jpg" alt="CTA Background" width={1920} height={1080} />
            </div>
            
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainHeading}>
                        Let&apos;s build the future
                    </h1>
                    
                    <h2 className={styles.emphasizedText}>
                        TOGETHER.
                    </h2>
                    
                    <p className={styles.subHeading}>
                        Not sure where to start? Book a call and let&apos;s explore what&apos;s possible.
                    </p>
                    
                    <button
                        className={styles.ctaButton}
                        // onClick={() => window.open("https://form.pgagi.in/", "_blank")}
                         onClick={() => window.open(EXTERNAL_LINKS.CALENDLY_BOOKING, "_blank")}
                    >
                        Book a Free Consultation
                    </button>
                </div>
            </div>
            
            
        </section>
    );
}
