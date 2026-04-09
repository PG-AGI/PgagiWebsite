"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/organisms/FAQ.module.scss';
import faqText from '@/constants/uiText/faq.json';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0); // First item open by default

  const faqData: FAQItem[] = faqText.items;

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Left Column - Desktop */}
        <div className={styles.leftColumn}>
          <h3 className={styles.sectionTitle}>{faqText.sectionTitle}</h3>
          <h2 className={styles.mainTitle}>
            {faqText.mainTitle}
          </h2>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image 
                src="/landing/Model.png" 
                alt={faqText.supportImageAlt}
                width={180}
                height={180}
                className={styles.supportImage}
              />
            </div>
            <div className={styles.contactText}>
              <p>{faqText.contactText}</p>
              
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className={styles.rightColumn}>
          <div className={styles.faqList}>
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className={`${styles.faqItem} ${openItem === item.id ? styles.open : ''}`}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <div className={styles.toggleIcon}>
                    {openItem === item.id ? (
                      <span className={styles.closeIcon}>×</span>
                    ) : (
                      <span className={styles.openIcon}>+</span>
                    )}
                  </div>
                </button>
                
                <div className={styles.faqAnswer}>
                  <div className={styles.answerContent}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Contact Section */}
        <div className={styles.mobileContactSection}>
          <div className={styles.mobileImageContainer}>
            <Image 
              src="/landing/Model.png" 
                alt={faqText.supportImageAlt}
              width={150}
              height={150}
              className={styles.mobileSupportImage}
            />
          </div>
          <div className={styles.mobileContactText}>
              <p>{faqText.contactText}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
} 
