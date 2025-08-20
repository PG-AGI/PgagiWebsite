'use client'
import React, { useState, useEffect } from 'react';
import styles from "./landing.module.scss";
import BookCallModal from './base/bookCallModela';
import Hyperspeed from './ui/Hyperspeed/Hyperspeed';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';

export default function Landing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { scrollTo } = useSmoothScrollTo();

    const handleBookCall = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleScrollToTestimonials = () => {
        scrollTo('#testimonials-section', { offset: 80, duration: 1.5 });
    };

    useEffect(() => {
        console.log('Landing component mounted');
    }, []);

    return (
        <section id="landing" className={styles.landing}>
            {/* HyperSpeed Background */}
            <div className={styles.hyperspeedBackground}>
                <Hyperspeed 
                    effectOptions={{
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xffffff,
                            brokenLines: 0xffffff,
                            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                            sticks: 0x03b3c3,
                        },
                        distortion: "turbulentDistortion",
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                    }}
                />
            </div>
            
            <div className={styles.landingContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.highlightSpot}>
                        <a 
                            href="https://www.upwork.com/agencies/1737467434828361728/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Top 1% recognized on the UpWork
                        </a>
                    </div>
                    <div className={styles.pgagiLabel}>
                        <span>At <b>PG-AGI</b></span>
                        <div className={styles.pgagiUnderline}></div>
                    </div>
                    <h1 className={styles.mainHeading}>
                    Creating for the world that’s <span className={styles.coming}> coming, </span> 
                    Not the one passing.
                    </h1>
                    <p className={styles.description}>
                    We engineer purposeful AI products that scales, and create meaningful impact in the world.
                    </p>
                    <div className={styles.buttonRow}>
                        <button className={styles.ctaButton} onClick={handleBookCall}>
                            Book a Consultation
                        </button>
                        <button className={styles.outlineButton} onClick={handleScrollToTestimonials}>
                            View Our Work
                        </button>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    {/* Placeholder SVG for animated face/skull */}
                   
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
}
