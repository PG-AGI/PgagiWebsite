import React from 'react';
import styles from '@/styles/app/Career/components/Values.module.scss';
import { Brain, Users, Shield, Star, Heart, Zap } from 'lucide-react';

const values = [
  { 
    icon: <Brain size={32} />, 
    title: 'Innovation', 
    description: "We do not just work with AI; we innovate to redefine its potential.",
  },
  { 
    icon: <Users size={32} />, 
    title: 'Collaboration', 
    description: 'Working together to make impossible AI solutions, a reality.',
  },
  { 
    icon: <Shield size={32} />, 
    title: 'Integrity', 
    description: 'We take pride in raising the bar and delivering top-notch results every time.',
  },
  { 
    icon: <Star size={32} />, 
    title: 'Excellence', 
    description: 'Excellence, quality, and precision are at the heart of what we do.',
  },
  { 
    icon: <Heart size={32} />, 
    title: 'Impact', 
    description: 'Leveraging AI to drive an impactful, positive change in this world.',
  },
  { 
    icon: <Zap size={32} />, 
    title: 'Agility', 
    description: 'Adapting quickly to new challenges and opportunities in the AI landscape.',
  },
];

export const Values = () => {
  return (
    <section className={styles['values-section']}>
      <div className={styles['values-container']}>
        <div className={styles['values-heading-container']}>
          <div className={styles['values-badge']}>
            <span>✨</span>
            <span>Our Core Values</span>
          </div>
          <h2 className={styles['values-heading']}>What Drives Us Forward</h2>
          <p className={styles['values-description']}>
            At PGAGI, we value innovation, AGI advancement, integrity, scalability, collaboration, and continuous learning. 
            These principles guide every decision we make and every solution we create.
          </p>
        </div>
        <div className={styles['values-grid']}>
          {values.map((value, index) => (
            <div key={index} className={styles['values-card']}>
              <div className={styles['values-icon-container']}>
                <div className={styles['values-icon']}>
                  {value.icon}
                </div>
                <div className={styles['values-icon-bg']} />
              </div>
              <h3 className={styles['values-title']}>{value.title}</h3>
              <p className={styles['values-text']}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
