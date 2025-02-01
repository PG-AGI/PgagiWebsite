import React from 'react';
import styles from './Benefits.module.scss';
import { Laptop, Brain, Globe, BookOpen,  Landmark, HandCoins } from 'lucide-react';
import '../../globals.css';

const benefits = [
  {
    icon: <Globe />,
    title: 'Remote-First',
    description: 'Join our global team and experience flexibility that fits your lifestyle.',
  },
  {
    icon: <Brain />,
    title: 'Learning Budget',
    description: 'Upskill with an annual budget for courses, conferences, and skill-building.',
  },
  {
    icon: <Landmark />,
    title: 'Competitive Pay',
    description: 'Enjoy a competitive base salary plus performance-driven bonuses.',
  },
  {
    icon: <BookOpen />,
    title: 'Research Time',
    description: 'Stay ahead with dedicated time to explore the latest AI technologies and trends.',
  },
  {
    icon: <Laptop />,
    title: 'Latest Tech',
    description: 'Get hands-on experience with advanced AI tools and technologies.',
  },
  {
    icon: <HandCoins />,
    title: 'ESOPs',
    description: "We reward your hard work with a share in the company's success for unlimited growth.",
  },
];

export const Benefits = () => {
  return (
    <section className={styles['benefits-section']}>
      <div className={styles['benefits-container']}>
        <h2 className={styles['benefits-heading']}>Benefits & Perks</h2>
        <div className={styles['benefits-grid']}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles['benefits-card']}>
              <div className={styles['icon-container']}>{benefit.icon}</div>
              <div className={styles['card-details']}>
                <h3 className={styles['card-title']}>{benefit.title}</h3>
                <p className={styles['card-description']}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
