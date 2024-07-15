import styles from "./calendly.module.scss";
import { InlineWidget } from "react-calendly";
import React, { useEffect, useRef } from 'react';

export default function Calendly() {
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
        <section className={styles.calendly}>
            <div className={styles.window}>
                <div className={styles.hero}>
                    <span />
                    <h1>Got anything in mind?</h1>
                    <p className={styles.top}>Let’s do</p>
                    <p>it together!</p>
                </div>
                <div className={styles.widget}>
                    <InlineWidget url="https://calendly.com/admin-quf_/30min" />
                </div>
            </div>
        </section>
    )
}