'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TestimonialGrid.module.scss';
import Image from 'next/image';
import '../globals.css';

const flagEmojis: { [key: string]: string } = {
  'USA': '🇺🇸',
  'UK': '🇬🇧',
  'Canada': '🇨🇦',
  'Australia': '🇦🇺',
  'Germany': '🇩🇪'
};

interface Testimonial {
  image: string;
  name: string;
  company: string;
  country: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    image: 'https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg',
    name: 'Sarah Johnson',
    company: 'TechInnovate Solutions',
    country: 'USA',
    quote: 'Their AI consulting transformed our entire product strategy.'
  },
  {
    image: 'https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg',
    name: 'Michael Chen',
    company: 'DataStream Inc.',
    country: 'Canada',
    quote: 'Incredible insights and implementation support.'
  },
  {
    image: 'https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg',
    name: 'Emma Williams',
    company: 'Global Insights Ltd',
    country: 'UK',
    quote: 'A game-changing approach to AI integration.'
  },
  {
    image: 'https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg',
    name: 'David Mueller',
    company: 'Innovate GmbH',
    country: 'Germany',
    quote: 'Revolutionized our approach to machine learning.'
  },
  {
    image: 'https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg',
    name: 'Lisa Wong',
    company: 'CloudTech Innovations',
    country: 'Australia',
    quote: 'Exceptional AI strategy and implementation.'
  }
];

const TestimonialGrid: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.gridContainer}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)' }}
          >
            <div className={styles.cardContent}>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className={styles.profileImage}
                width={80}
                height={80}
                quality={75}
                priority={true}
              />
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.company}>{testimonial.company}</p>
              <span className={styles.countryFlag}>
                {flagEmojis[testimonial.country]}
              </span>
              <blockquote className={styles.quote}>
                “{testimonial.quote}”
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGrid;
