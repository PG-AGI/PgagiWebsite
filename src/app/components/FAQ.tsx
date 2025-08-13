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
      question: "What services do you offer?",
      answer: "We cover the full creative journey: brand strategy, identity design, websites, digital products, campaigns, Mobile Apps, Social Media and everything in between. We don&apos;t do everything—but what we do, we do exceptionally well."
    },
    {
      id: 1,
      question: "What's your project timeline?",
      answer: "Project timelines vary depending on scope and complexity. Typically, small projects take 2-4 weeks, medium projects 4-8 weeks, and large projects 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: 2,
      question: "How much do you charge?",
      answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific needs."
    },
    {
      id: 3,
      question: "What industries do you work with?",
      answer: "We work across diverse industries including technology, healthcare, finance, education, retail, and more. Our expertise spans both B2B and B2C sectors, allowing us to adapt our approach to your specific industry needs."
    },
    {
      id: 4,
      question: "Do you take on small projects?",
      answer: "Yes, we work with clients of all sizes, from startups to enterprise companies. We believe every project deserves our full attention and expertise, regardless of size."
    },
    {
      id: 5,
      question: "How can I start?",
      answer: "Getting started is easy! Simply reach out to us through our contact form or email. We&apos;ll schedule a consultation to discuss your project, goals, and timeline. From there, we&apos;ll create a customized proposal for your review."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Left Column - Desktop */}
        <div className={styles.leftColumn}>
          <h3 className={styles.sectionTitle}>{/* FAQs */}FAQs</h3>
          <h2 className={styles.mainTitle}>
            Everything you need to know about how we work. From our process to what makes working with us different.
          </h2>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/customer-support.jpg" 
                alt="Customer Support Representative"
                width={300}
                height={300}
                className={styles.supportImage}
              />
            </div>
            <div className={styles.contactText}>
              <p>Still curious about something we haven&apos;t answered? No worries, drop us a message and we&apos;ll get you the clarity you&apos;re looking for.</p>
              <Link href="/contact" className={styles.contactLink}>
                Get in touch <span>→</span>
              </Link>
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
              src="/images/customer-support.jpg" 
              alt="Customer Support Representative"
              width={250}
              height={250}
              className={styles.mobileSupportImage}
            />
          </div>
          <div className={styles.mobileContactText}>
            <p>Still curious about something we haven&apos;t answered? No worries, drop us a message and we&apos;ll get you the clarity you&apos;re looking for.</p>
            <Link href="/contact" className={styles.mobileContactLink}>
              Get in touch <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 