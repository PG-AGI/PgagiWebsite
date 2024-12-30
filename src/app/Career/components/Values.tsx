import React from 'react';
import styles from './Values.module.scss';
import { Brain, Users, Shield, Star, Heart } from 'lucide-react';

const values = [
  { icon: <Brain />, title: 'Innovation', description: "We do not just work with AI; we innovate to redefine its potential." },
  { icon: <Users />, title: 'Collaboration', description: 'Working together to make impossible AI solutions, a reality.' },
  { icon: <Shield />, title: 'Integrity', description: 'We take pride in raising the bar and delivering top-notch results every time.' },
  { icon: <Star />, title: 'Excellence', description: 'Excellence, quality, and precision are at the heart of what we do.' },
  { icon: <Heart />, title: 'Impact', description: 'Leveraging AI to drive an impactful, positive change in this world.' },
];

export const Values = () => {
  return (
    <section className={styles['values-section']}>
      <div className={styles['values-container']}>
        <div className={styles['values-heading-container']}>
          <h2 className={styles['values-heading']}>Our Values</h2>
          <p className={styles['values-description']}>
          At PGAGI, we value innovation, AGI advancement, integrity, scalability, collaboration, continuous learning.
          </p>
        </div>
        <div className={styles['values-grid']}>
          {values.map((value, index) => (
            <div key={index} className={styles['values-card']}>
              <div className={styles['values-icon']}>{value.icon}</div>
              <h3 className={styles['values-title']}>{value.title}</h3>
              <p className={styles['values-text']}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
