"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FAQ.module.scss';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0); // First item open by default

  const faqData: FAQItem[] = [
    {
      id: 0,
      question: "I’ve got an idea. How do we start?",
      answer: "Easy — book a call. We’ll explore your idea, map out the possibilities, and send you a tailored action plan."
    },
    {
      id: 1,
      question: "How do I know my data is safe with you?",
      answer: "We treat your data like we treat our own — with ironclad security, encrypted storage, and compliance-first protocols. No funny business."
    },
    {
      id: 2,
      question: "What if I don’t speak “tech”?",
      answer: "That's fine — we speak both CEO and CTO fluently. We’ll guide you through the process in plain language while we handle the code, math, and machine learning magic."
    },
    {
      id: 3,
      question: "Can you plug AI into my existing systems?",
      answer: "Yes — whether it’s a CRM, ERP, or that ancient system your team swears by, we can make AI work with it (and even make it feel new again)."
    },
    {
      id: 4,
      question: "What happens after launch?",
      answer: "We don’t disappear. We monitor, optimize, and upgrade your AI so it keeps learning, adapting, and outperforming."
    },
    
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Left Column - Desktop */}
        <div className={styles.leftColumn}>
          <h3 className={styles.sectionTitle}>{'// FAQs'}</h3>
          <h2 className={styles.mainTitle}>
            Everything you need to know about how we work. From our process to what makes working with us different.
          </h2>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image 
                src="/landing/Model.png" 
                alt="AI Model Visualization"
                width={180}
                height={180}
                className={styles.supportImage}
              />
            </div>
            <div className={styles.contactText}>
              <p>Still curious about something we haven&apos;t answered? No worries, drop us a message and we&apos;ll get you the clarity you&apos;re looking for.</p>
              
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
              alt="AI Model Visualization"
              width={150}
              height={150}
              className={styles.mobileSupportImage}
            />
          </div>
          <div className={styles.mobileContactText}>
            <p>Still curious about something we haven&apos;t answered? No worries, drop us a message and we&apos;ll get you the clarity you&apos;re looking for.</p>
            
          </div>
        </div>
      </div>
    </section>
  );
} 