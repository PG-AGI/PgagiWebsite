"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TestimonialCarousel.module.scss";
import Image from "next/image";

interface Testimonial {
  name: string;
  company: string;
  country: string;
  quote: string;
  projectName: string;
}

const flagImages: { [key: string]: string } = {
  USA: "https://flagcdn.com/us.svg",
  UK: "https://flagcdn.com/gb.svg",
  Canada: "https://flagcdn.com/ca.svg",
  Australia: "https://flagcdn.com/au.svg",
  Germany: "https://flagcdn.com/de.svg",
  IN: "https://flagcdn.com/in.svg",
  Italy: "https://flagcdn.com/it.svg",
};

const testimonials: Testimonial[] = [
  {
    name: "Bernard",
    company: "",
    country: "USA",
    quote:
      "From day one, I was given expert analysis of our custom trained model. I don't know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!",
    projectName: " VertexCast AI – Forecasting future trends with Vertex AI",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    quote:
      "Awesome service, sometimes takes more time than expected but they worked very hard and a very complicated project and never gave up. at the end of the day, project is done and working. We will hire for sure",
    projectName: "SportBetting ML Project",
  },
  {
    name: "San Dev",
    company: "Onchaintoolkit",
    country: "USA",
    quote: "You guys are really organized and professional. Thanks!",
    projectName: "MULTI-AGENT AI CRYPTO TRADING SYSTEM",
  },
  {
    name: "",
    company: "Soulful Humans ",
    country: "USA",
    quote:
      "I highly recommend PGAGI. They are highly communicative, talented, and a great team. I will work with them again!",
    projectName: "AI System to Convert Performance Data into Company",
  },
  {
    name: "David Catarious",
    company: "",
    country: "USA",
    quote:
      "PGAGI and the team were excellent. They were fast, thorough, and effective - can't really ask for more than that.",
    projectName: "Gradio Application",
  },
  {
    name: "Nicholas ",
    company: "",
    country: "Canada",
    quote:
      "The team were very research oriented, worked over hours to get it done. Excellent work and sure will work together again.",
    projectName: "Binary Options Trading Indicator on MT4/MT5",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    quote:
      "This is the 2nd project we have worked together, highly satisfied. Hopefully will work more in future.",
    projectName: "iRaceOpt AI – Intelligent Telemetry Optimization for iRacing",
  },
  {
    name: "Lorella Sini",
    company: "Sardina Rentals",
    country: "Italy",
    quote:
      "Great service ,i suggest to collaborate with Vivek and his team ,they are very prepared for everything ,even though you are ignorant like me .",
    projectName: "SMUBOO AI AUTOMATION AGENT",
  },
  {
    name: "Rizwan",
    company: "Mideo Pty Ltd",
    country: "Australia",
    quote:
      "It was great working with the team, very thoughtful guys will work with PGAGI again.",
    projectName: "AI Hypnosis Agent",
  },
  {
    name: "Sybestian",
    company: "",
    country: "USA",
    quote:
      "Great working with the team, they are very research oriented and also responsive at the same time. ",
    projectName: "Airtable + AI ChatGPT Integration for Social Media Caption and Scheduling",
  },
  {
    name: "Subrotom21",
    company: "",
    country: "USA",
    quote:
      "They are very professional, flexible, and fast. Highly recommend working with them.",
    projectName: "RAG implementation for smart contact code",
  },
  {
    name: "Bally S",
    company: "Social 27",
    country: "USA",
    quote:
      "I had an exceptional experience working with this team. Their professionalism and deep expertise in React, React Flow, and AI were evident throughout the project. They quickly grasped our requirements and executed each task with precision, resulting in a swift and high-quality turnaround. Even when mid-stream changes occurred, they handled them gracefully while consistently meeting every milestone. I highly recommend this team for their technical prowess and commitment to excellence.",
    projectName: "React Flow Execution Graph",
  },
  {
    name: "Nitesh Puchhadiya",
    company: "WebCodeGenie Technology PVT Ltd",
    country: "IN",
    quote:
      " I had a great experience working with PGAGI Consultancy on an AI project. Their team demonstrated strong technical expertise, clear communication, and a proactive approach throughout the engagement. They delivered high-quality work, met deadlines consistently, and were highly responsive to any feedback or adjustments needed. ",
    projectName: "AI powered multi-agent trading system.",
  },
  {
    name: "Mike Giuffrida",
    company: "",
    country: "USA",
    quote:
      "Great communication and very responsive throughout the project. The PGAGI team delivered excellent work, exceeding expectations in both quality and speed. They were proactive, collaborative, and quick to understand our requirements. Their technical expertise and dedication truly stood out. We're extremely satisfied with the outcome and look forward to working with them again on future projects.",
    projectName: "AI HIRING AGENT",
  },
  {
    name: "Preska Thomas",
    company: "DebitMyData",
    country: "USA",
    quote:
      "PGAGI Team not only delivered the project on time but exceeded my expectations in every way. Their attention to detail, creativity, and ability to understand my vision were truly remarkable. They communicated clearly throughout the process, kept me updated regularly, and were always open to feedback, making collaboration seamless and enjoyable.",
    projectName: "AI NFT GENERATOR",
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
                        {currentTestimonial.name.charAt(0).toUpperCase()}
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
            <div className={styles.statText}>
              In a market of
            </div>
            <div className={styles.statNumber}>
              
              9,994
            </div>
            <div className={styles.statSubtext}>
              look-alikes, only bold ideas cut through the clutter.
            </div>
          </div>

          <div className={styles.description}>
            We help businesses turn bold ideas into beautifully crafted digital experiences. From brand strategy to final execution, we work closely with our clients, designing with purpose, moving with precision, and delivering meaningful impact at every stage.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
