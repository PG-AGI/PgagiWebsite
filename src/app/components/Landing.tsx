'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from "./landing.module.scss";
import BookCallModal from './base/bookCallModela';
import dynamic from 'next/dynamic';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';

const Hyperspeed = dynamic(() => import('./ui/Hyperspeed/Hyperspeed'), { ssr: false, loading: () => null });

export default function Landing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { scrollTo } = useSmoothScrollTo();
    const [canRenderFx, setCanRenderFx] = useState(false);
    const bgRef = useRef<HTMLDivElement>(null);
    const interactedRef = useRef(false);

    const handleBookCall = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleScrollToTestimonials = () => {
        window.location.href = "/projects";
    };

    useEffect(() => {
        let obs: IntersectionObserver | null = null;
        const maybeEnable = () => {
            if (interactedRef.current && document.visibilityState === 'visible') {
                setCanRenderFx(true);
                cleanup();
            }
        };
        const onInteract = () => {
            interactedRef.current = true;
            maybeEnable();
        };
        const onVisibility = () => {
            if (document.visibilityState === 'visible') maybeEnable();
        };
        const observe = () => {
            if (!bgRef.current) return;
            obs = new IntersectionObserver(([e]) => {
                if (e.isIntersecting) {
                    window.addEventListener('scroll', onInteract, { passive: true, once: true });
                    window.addEventListener('pointerdown', onInteract, { passive: true, once: true } as any);
                    window.addEventListener('keydown', onInteract, { once: true } as any);
                    document.addEventListener('visibilitychange', onVisibility);
                    // Fallback if no interaction for a while
                    const idle = setTimeout(() => { interactedRef.current = true; maybeEnable(); }, 5000);
                    (onInteract as any)._idle = idle;
                    obs && obs.disconnect();
                }
            }, { rootMargin: '200px' });
            obs.observe(bgRef.current);
        };
        const cleanup = () => {
            window.removeEventListener('scroll', onInteract as any);
            window.removeEventListener('pointerdown', onInteract as any);
            window.removeEventListener('keydown', onInteract as any);
            document.removeEventListener('visibilitychange', onVisibility);
            if ((onInteract as any)._idle) clearTimeout((onInteract as any)._idle);
            if (obs) obs.disconnect();
        };
        observe();
        return cleanup;
    }, []);

    return (
        <section id="landing" className={styles.landing}>
            {/* HyperSpeed Background */}
            <div className={styles.hyperspeedBackground} ref={bgRef}>
                {canRenderFx && (
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
                )}
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
                            Top 1% recognized on UpWork
                        </a>
                    </div>
                    <div className={styles.pgagiLabel}>
                        <span>At <b>PG-AGI</b></span>
                        <div className={styles.pgagiUnderline}></div>
                    </div>
                    <h1 className={styles.mainHeading}>
                    We engineer purposeful  <span className={styles.coming}> AI products that scales </span> 
                    and create meaningful impact in the world
                    </h1>
                    <p className={styles.description}>
                    {/* We engineer purposeful AI products that scales, and create meaningful impact in the world. */}
                    Creating for the world that’s <span className={styles.coming}> coming </span> 
                    Not the one passing.
                    </p>
                    <div className={styles.buttonRow}>
                        <button className={styles.ctaButton} onClick={() => {
                            window.open("https://form.pgagi.in/", "_blank");
                        }}>
                            Book Private Strategy Session
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
