'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './TestimonialCarousel.module.scss';

interface Testimonial {
  name: string;
  company: string;
  country: string;
  quote: string;
  projectName: string;
}

const flagImages: { [key: string]: string } = {
  USA: 'https://flagcdn.com/us.svg',
  UK: 'https://flagcdn.com/gb.svg',
  Canada: 'https://flagcdn.com/ca.svg',
  Australia: 'https://flagcdn.com/au.svg',
  Germany: 'https://flagcdn.com/de.svg',
  IN: 'https://flagcdn.com/in.svg',
  Italy: 'https://flagcdn.com/it.svg'
};

const testimonials: Testimonial[] = [
  {
    name: 'Bernard',
    company: '',
    country: 'USA',
    quote:
      'From day one, I was given expert analysis of our custom trained model. I don\'t know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!',
    projectName: 'Create Vertex AI - Tabular Forcaste',
  },
  {
    name: 'Nicholas',
    company: '',
    country: 'Canada',
    quote:
      'Awesome service, sometimes takes more time than expected but they worked very hard and a very complicated project and never gave up. at the end of the day, project is done and working. We will hire for sure',
    projectName: 'SportBetting ML Project',
  },
  {
    name: 'San Dev',
    company: 'Onchaintoolkit',
    country: 'USA',
    quote: 'You guys are really organized and professional. Thanks!',
    projectName: 'Development for Multi-Agent AI Trading',
  },
  {
    name: '',
    company: 'Soulful Humans ',
    country: 'USA',
    quote:
      'I highly recommend PGAGI. They are highly communicative, talented, and a great team. I will work with them again!',
    projectName: 'AI System to Convert Performance Data into Company',
  },
  {
    name: 'David Catarious',
    company: '',
    country: 'USA',
    quote: 'PGAGI and the team were excellent. They were fast, thorough, and effective - can\'t really ask for more than that.',
    projectName: 'Gradio Application',
  },
  {
    name: 'Nicholas ',
    company: '',
    country: 'Canada',
    quote:
      "The team were very research oriented, worked over hours to get it done. Excellent work and sure will work together again.",
    projectName: 'Binary Options Trading Indicator on MT4/MT5',
  },
  {
    name: 'Nicholas',
    company: '',
    country: 'Canada',
    quote:
      "This is the 2nd project we have worked together, highly satisfied. Hopefully will work more in future.",
    projectName: 'Machine Learning  for iRacing Telemetry Analytics Project',
  },
  {
    name: "Lorella Sini",
    company: 'Sardina Rentals',
    country: 'Italy',
    quote:"Great service ,i suggest to collaborate with Vivek and his team ,they are very prepared for everything ,even though you are ignorant like me .",
    projectName: 'AI Automation Bot',
  },
  {
    name: "Rizwan",
    company: 'Mideo Pty Ltd',
    country: 'Australia',
    quote: "It was great working with the team, very thoughtful guys will work with PGAGI again.",
    projectName: 'AI Hypnosis Agent'
  }
];

const TestimonialCarousel: React.FC = () => {
  const infiniteTestimonials = Array.from({ length: 5 }, () => testimonials).flat();

  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: [-0, -testimonials.length * 350],
      transition: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
    });
  };

  React.useEffect(() => {
    controls.start({
      x: [-0, -testimonials.length * 350],
      transition: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
    });
  }, [controls, testimonials.length]);

  return (
    <div className={styles.carouselSection}>
      <h2 className={styles.sectionHeading}>What Our Clients Say</h2>
      <div className={styles.carouselContainer}>
        <motion.div
          className={styles.testimonialTrack}
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialCard}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.testimonialContent}>
                <h3 className={styles.projectName}>{testimonial.projectName}</h3>
                <div className={styles.divider}></div>
                <blockquote className={styles.testimonialQuote}>
                  {testimonial.quote}
                </blockquote>
                <div className={styles.quoteFooter}>
                  -{' '}
                  <span className={styles.footerText}>
                    {testimonial.company && testimonial.name
                      ? `${testimonial.company}, ${testimonial.name}`
                      : testimonial.company || testimonial.name}
                  </span>
                  {testimonial.country && (
                    <img
                      className={styles.countryFlag}
                      src={flagImages[testimonial.country]}
                      alt={`${testimonial.country} flag`}
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