import React from 'react';
import styles from './Benefits.module.scss';
import { Laptop, Brain, Heart, Globe, BookOpen, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Globe />,
    title: 'Remote-First',
    description: 'Work from anywhere in the world with our distributed team',
  },
  {
    icon: <Brain />,
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, and skill development',
  },
  {
    icon: <Heart />,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family',
  },
  {
    icon: <BookOpen />,
    title: 'Research Time',
    description: 'Dedicated time for exploring new AI technologies',
  },
  {
    icon: <Laptop />,
    title: 'Latest Tech',
    description: 'Access to cutting-edge AI tools and technologies',
  },
  {
    icon: <Clock />,
    title: 'Flexible Hours',
    description: "Work when you're most productive",
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
