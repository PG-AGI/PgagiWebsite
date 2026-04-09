"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/organisms/TestimonialCarousel.module.scss";
import Image from "next/image";
import {
  pgagiClientTestimonials,
  type PgagiClientReview,
} from "@/data/pgagiClientTestimonials";

type Testimonial = PgagiClientReview;

const flagImages: { [key: string]: string } = {
  USA: "https://flagcdn.com/us.svg",
  UK: "https://flagcdn.com/gb.svg",
  Canada: "https://flagcdn.com/ca.svg",
  Australia: "https://flagcdn.com/au.svg",
  Germany: "https://flagcdn.com/de.svg",
  IN: "https://flagcdn.com/in.svg",
  Italy: "https://flagcdn.com/it.svg",
};

const testimonials: Testimonial[] = pgagiClientTestimonials;

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animatedNumber, setAnimatedNumber] = useState(5);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Animated counter effect for the "5+" in "75+"
  useEffect(() => {
    const counterInterval = setInterval(() => {
      setAnimatedNumber((prev) => {
        if (prev >= 5) {
          // After reaching 5, wait for 1 second then reset to 1
          setTimeout(() => setAnimatedNumber(1), 1000);
          return 5;
        }
        return prev + 1;
      });
    }, 1000); // Change number every 0.1 seconds

    return () => clearInterval(counterInterval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials-section" className={styles.testimonialSection}>
      <div className={styles.container}>
        {/* Left Column - Testimonial and Experience */}
        <div className={styles.leftColumn}>
          {/* Top Left - Testimonial */}
          <div className={styles.testimonialSection}>
            <div className={styles.testimonialCard}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={styles.testimonialContent}
                >
                  {/* Stars */}
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className={styles.quote}>
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className={styles.authorInfo}>
                    <div className={styles.authorImage}>
                      <div className={styles.avatar}>
                        {(currentTestimonial.name || currentTestimonial.company || "?")
                          .trim()
                          .charAt(0)
                          .toUpperCase()}
                      </div>
                    </div>
                    <div className={styles.authorDetails}>
                      <div className={styles.authorName}>
                        {currentTestimonial.name || currentTestimonial.company}
                      </div>
                      <div className={styles.authorTitle}>
                        {currentTestimonial.company && currentTestimonial.name
                          ? `${currentTestimonial.company}, ${currentTestimonial.name}`
                          : currentTestimonial.company || currentTestimonial.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className={styles.dotsContainer}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Left - 20 Years of Excellence */}
          <div className={styles.experienceSection}>
            <div className={styles.experienceContent}>
              <div className={styles.laurelWreath}>
                <div className={styles.experienceNumber}>20</div>
                <div className={styles.experienceText}>years of experience</div>
              </div>
              <div className={styles.experienceSubtext}>
                Yup! That&apos;s 7,305 days of timeless ideas, crafted one day at a time.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats and Description */}
        <div className={styles.rightColumn}>
          <div className={styles.statsContent}>
            <div className={styles.statNumber}>
              7
              <AnimatePresence mode="wait">
                <motion.span
                  key={animatedNumber}
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -100, opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 1.6, 
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 80,
                    damping: 12
                  }}
                  className={styles.animatedNumber}
                >
                  {animatedNumber}
                </motion.span>
              </AnimatePresence>
              +
            </div>
            <div className={styles.statText}>
              Projects Delivered
            </div> 
            <div className={styles.statSubtext}>
              Currently building 8 more projects getting live in few weeks.
            </div>
          </div>

          <div className={styles.description}>
            We help businesses and founders turn bold ideas into beautifully crafted AI Products. From  strategy to final execution, we work closely with our clients, engineering with purpose, moving with precision, and delivering meaningful impact at every stage.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
