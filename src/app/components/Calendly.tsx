import styles from "./calendly.module.scss";
import { InlineWidget } from "react-calendly";
import BookCallModal from './base/bookCallModela';
import React, { useEffect, useState, useRef } from 'react';

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
            <div className={styles.window}>
                <div className={styles.hero}>
                    {/* <span /> */}
                    <h1>Got anything in mind?</h1>
                    <p className={styles.top}>Let’s do</p>
                    <p>it together!</p>
                    <div className={styles.action}>
                        <button
                            className={styles.call}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '12px',
                                background: 'linear-gradient(90deg, #050CAF 0%, #070A5D 100%)',
                                fontSize: '20px',
                                fontWeight: '500',
                                border: 'none',
                                marginTop: '20px',
                                boxShadow: '0 5px 5px 0px rgba(0, 0, 0, 0.25)',
                                transition: 'all 0.3s ease-out',
                                cursor: 'pointer',
                            }}
                            onClick={handleBookCall}
                        >
                            Book a call
                        </button>
                    </div>
                    <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
            </div>
        </section>
    )
}
