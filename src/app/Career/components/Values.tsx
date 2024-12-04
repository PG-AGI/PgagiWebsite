import React from 'react';
import styles from './Values.module.scss';
import { Brain, Users, Shield, Star, Heart } from 'lucide-react';

const values = [
  { icon: <Brain />, title: 'Innovation', description: "Pushing the boundaries of what's possible with AI" },
  { icon: <Users />, title: 'Collaboration', description: 'Working together to achieve extraordinary results' },
  { icon: <Shield />, title: 'Integrity', description: 'Upholding the highest standards in everything we do' },
  { icon: <Star />, title: 'Excellence', description: 'Committed to delivering exceptional quality' },
  { icon: <Heart />, title: 'Impact', description: 'Making a real difference in the world through AI' },
];

export const Values = () => {
  return (
    <section className={styles['values-section']}>
      <div className={styles['values-container']}>
        <div className={styles['values-heading-container']}>
          <h2 className={styles['values-heading']}>Our Values</h2>
          <p className={styles['values-description']}>
            At PGAGI, our values shape everything we do and guide us in our mission to transform the future.
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
