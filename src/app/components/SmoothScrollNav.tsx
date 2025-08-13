'use client'
import React from 'react';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';
import styles from './SmoothScrollNav.module.scss';

interface SmoothScrollNavProps {
  sections: {
    id: string;
    label: string;
    offset?: number;
  }[];
}

const SmoothScrollNav: React.FC<SmoothScrollNavProps> = ({ sections }) => {
  const { scrollTo } = useSmoothScrollTo();

  const handleNavClick = (sectionId: string, offset?: number) => {
    scrollTo(`#${sectionId}`, { 
      offset: offset || 80, 
      duration: 1.5 
    });
  };

  return (
    <nav className={styles.smoothScrollNav}>
      {sections.map((section) => (
        <button
          key={section.id}
          className={styles.navItem}
          onClick={() => handleNavClick(section.id, section.offset)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default SmoothScrollNav; 