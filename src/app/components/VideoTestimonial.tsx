"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./VideoTestimonial.module.scss";

interface Testimonial {
  name: string;
  company: string;
  country: string;
  quote: string;
  projectName: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Bernard",
    company: "",
    country: "USA",
    quote:
      "From day one, I was given expert analysis of our custom trained model. I don't know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!",
    projectName: "VertexCast AI – Forecasting future trends with Vertex AI",
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
    company: "Soulful Humans",
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
    name: "Nicholas",
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
      "Great service, i suggest to collaborate with Vivek and his team, they are very prepared for everything, even though you are ignorant like me.",
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
      "Great working with the team, they are very research oriented and also responsive at the same time.",
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
      "I had a great experience working with PGAGI Consultancy on an AI project. Their team demonstrated strong technical expertise, clear communication, and a proactive approach throughout the engagement. They delivered high-quality work, met deadlines consistently, and were highly responsive to any feedback or adjustments needed.",
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

// Star Rating Component
const StarRating: React.FC = () => (
  <div className={styles.starRating}>
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#FFD700"
        stroke="#FFD700"
        strokeWidth="1"
        className={styles.star}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const VideoTestimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section className={styles.videoTestimonialSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <div className={styles.leftHeader}>
            <span className={styles.testimonialLabel}>//Testimonial</span>
          </div>
          <div className={styles.rightHeader}>
            <h2 className={styles.mainHeading}>See what our client says</h2>
          </div>
        </div>

        {/* Main Content - Two Column Layout for Desktop */}
        <div className={styles.mainContent}>
          {/* Left Column - Video */}
          <div className={styles.leftColumn}>
            <div className={styles.videoSection}>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlaceholder}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/vsuDM890kmU?si=1ZfbE5tpp6FLtQE3" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.speakerName}>Stunited</h3>
                  <p className={styles.speakerTitle}>
                    Partnering with Toingg, they deployed an advanced, AI-powered communication system. Automated WhatsApp outreach, intelligent conversational AI calls, and seamless CRM integration with{' '}
                    <a 
                      href="https://monday.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.mondayLink}
                    >
                      Monday.com
                    </a>
                    {' '}changed the game completely. With minimal human intervention, Stunited effortlessly booked 102 high-quality meetings, driving an astonishing 1100x ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className={styles.rightColumn}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialBoxes}>
                {/* First Testimonial Box */}
                <div className={styles.testimonialBox}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={styles.testimonialText}
                    >
                      <p>{currentTestimonial.quote}</p>
                    </motion.div>
                  </AnimatePresence>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                      {currentTestimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.authorDetails}>
                      <div className={styles.authorNameRow}>
                        <h4 className={styles.authorName}>{currentTestimonial.name || currentTestimonial.company}</h4>
                        <StarRating />
                      </div>
                      <p className={styles.authorTitle}>
                        {currentTestimonial.company && currentTestimonial.name
                          ? `${currentTestimonial.company}, ${currentTestimonial.name}`
                          : currentTestimonial.company || currentTestimonial.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Testimonial Box */}
                <div className={styles.testimonialBox}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex + 1}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                      className={styles.testimonialText}
                    >
                      <p>{nextTestimonial.quote}</p>
                    </motion.div>
                  </AnimatePresence>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                      {nextTestimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.authorDetails}>
                      <div className={styles.authorNameRow}>
                        <h4 className={styles.authorName}>{nextTestimonial.name || nextTestimonial.company}</h4>
                        <StarRating />
                      </div>
                      <p className={styles.authorTitle}>
                        {nextTestimonial.company && nextTestimonial.name
                          ? `${nextTestimonial.company}, ${nextTestimonial.name}`
                          : nextTestimonial.company || nextTestimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Video at Top, Testimonials Below */}
        <div className={styles.mobileLayout}>
          {/* Video Section - Top Priority for Mobile */}
          <div className={styles.mobileVideoSection}>
            <div className={styles.videoContainer}>
              <div className={styles.videoPlaceholder}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/vsuDM890kmU?si=1ZfbE5tpp6FLtQE3" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.speakerName}>Stunited</h3>
                <p className={styles.speakerTitle}>
                  Partnering with Toingg, they deployed an advanced, AI-powered communication system. Automated WhatsApp outreach, intelligent conversational AI calls, and seamless CRM integration with{' '}
                  <a 
                    href="https://monday.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.mondayLink}
                  >
                    Monday.com
                  </a>
                  {' '}changed the game completely. With minimal human intervention, Stunited effortlessly booked 102 high-quality meetings, driving an astonishing 1100x ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section - Below Video for Mobile */}
          <div className={styles.mobileTestimonialsSection}>
            <div className={styles.testimonialBoxes}>
              {/* First Testimonial Box */}
              <motion.div 
                className={styles.testimonialBox}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={styles.testimonialText}
                  >
                    <p>{currentTestimonial.quote}</p>
                  </motion.div>
                </AnimatePresence>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>
                    {currentTestimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorNameRow}>
                      <h4 className={styles.authorName}>{currentTestimonial.name || currentTestimonial.company}</h4>
                      <StarRating />
                    </div>
                    <p className={styles.authorTitle}>
                      {currentTestimonial.company && currentTestimonial.name
                        ? `${currentTestimonial.company}, ${currentTestimonial.name}`
                        : currentTestimonial.company || currentTestimonial.name}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Second Testimonial Box */}
              <motion.div 
                className={styles.testimonialBox}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex + 1}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                    className={styles.testimonialText}
                  >
                    <p>{nextTestimonial.quote}</p>
                  </motion.div>
                </AnimatePresence>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>
                    {nextTestimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorNameRow}>
                      <h4 className={styles.authorName}>{nextTestimonial.name || nextTestimonial.company}</h4>
                      <StarRating />
                    </div>
                    <p className={styles.authorTitle}>
                      {currentTestimonial.company && currentTestimonial.name
                        ? `${currentTestimonial.company}, ${currentTestimonial.name}`
                        : currentTestimonial.company || currentTestimonial.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
