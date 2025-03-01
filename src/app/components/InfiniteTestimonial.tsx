"use client";
import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";
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
    projectName: "Create Vertex AI - Tabular Forcaste",
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
    projectName: "Development for Multi-Agent AI Trading",
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
    projectName: "Machine Learning  for iRacing Telemetry Analytics Project",
  },
  {
    name: "Lorella Sini",
    company: "Sardina Rentals",
    country: "Italy",
    quote:
      "Great service ,i suggest to collaborate with Vivek and his team ,they are very prepared for everything ,even though you are ignorant like me .",
    projectName: "AI Automation Bot",
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
    company: "",
    country: "USA",
    quote:
      "I had an exceptional experience working with this team. Their professionalism and deep expertise in React, React Flow, and AI were evident throughout the project. They quickly grasped our requirements and executed each task with precision, resulting in a swift and high-quality turnaround. Even when mid-stream changes occurred, they handled them gracefully while consistently meeting every milestone. I highly recommend this team for their technical prowess and commitment to excellence.",
    projectName: "Implement React Flow Execution Graph",
  }
];

const TestimonialCarousel: React.FC = () => {
  const infiniteTestimonials = Array.from({ length: 10 }, () => testimonials).flat();
  const xValue = useMotionValue(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<ReturnType<typeof animate> | null>(null);

  const [scrollWidth, setScrollWidth] = React.useState(0);

  const startAnimation = React.useCallback(
    (fromX: number) => {
      if (animationRef.current) {
        animationRef.current.stop();
      }

      const distance = -scrollWidth;
      const currentOffset = fromX; 
      const remaining = distance - currentOffset;
      const totalDistance = distance;
      const baseDuration = 300;
      const duration = baseDuration * Math.abs(remaining / totalDistance);

      animationRef.current = animate(xValue, distance, {
        duration: Math.max(duration, 0.1),
        ease: "linear",
        onComplete: () => {
          xValue.set(0);
          startAnimation(0);
        },
      });
    },
    [scrollWidth, xValue]
  );

  React.useEffect(() => {
    if (!containerRef.current) return;
    const totalWidth = containerRef.current.scrollWidth;
    setScrollWidth(totalWidth);
  }, [infiniteTestimonials.length]);

  React.useEffect(() => {
    if (scrollWidth > 0) {
      xValue.set(0);
      startAnimation(0);
    }
  }, [scrollWidth, startAnimation, xValue]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    const currentX = xValue.get();
    startAnimation(currentX);
  };

  return (
    <div className={styles.carouselSection}>
      <h2 className={styles.sectionHeading}>What Our Clients Say</h2>
      <div className={styles.carouselContainer} ref={containerRef}>
        <motion.div className={styles.testimonialTrack} style={{ x: xValue }}>
          {infiniteTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialCard}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={styles.testimonialContent}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className={styles.projectName}>{testimonial.projectName}</h3>
                <div className={styles.divider}></div>
                <blockquote className={styles.testimonialQuote}>
                  {testimonial.quote}
                </blockquote>
                <div className={styles.quoteFooter}>
                  -{" "}
                  <span className={styles.footerText}>
                    {testimonial.company && testimonial.name
                      ? `${testimonial.company}, ${testimonial.name}`
                      : testimonial.company || testimonial.name}
                  </span>
                  {testimonial.country && (
                    <Image
  className={styles.countryFlag}
  src={flagImages[testimonial.country]}
  alt={`${testimonial.country} flag`}
  width={18}    // Fixed width based on your CSS
  height={18}   // Adjust based on your flag's intrinsic aspect ratio
  loading="lazy"
/>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
