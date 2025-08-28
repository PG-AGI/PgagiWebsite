// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import styles from "./FAQ.module.scss";
// import { motion, AnimatePresence } from "framer-motion";

// interface FAQItem {
//   id: number;
//   question: string;
//   answer: string;
// }

// export default function FAQ() {
//   const [openItem, setOpenItem] = useState<number | null>(0); // First item open by default

//   const faqData: FAQItem[] = [
//     {
//       id: 0,
//       question: "I’ve got an idea. How do we start?",
//       answer:
//         "Easy — book a call. We’ll explore your idea, map out the possibilities, and send you a tailored action plan.",
//     },
//     {
//       id: 1,
//       question: "How do I know my data is safe with you?",
//       answer:
//         "We treat your data like we treat our own — with ironclad security, encrypted storage, and compliance-first protocols. No funny business.",
//     },
//     {
//       id: 2,
//       question: "What if I don’t speak “tech”?",
//       answer:
//         "That's fine — we speak both CEO and CTO fluently. We’ll guide you through the process in plain language while we handle the code, math, and machine learning magic.",
//     },
//     {
//       id: 3,
//       question: "Can you plug AI into my existing systems?",
//       answer:
//         "Yes — whether it’s a CRM, ERP, or that ancient system your team swears by, we can make AI work with it (and even make it feel new again).",
//     },
//     {
//       id: 4,
//       question: "What happens after launch?",
//       answer:
//         "We don’t disappear. We monitor, optimize, and upgrade your AI so it keeps learning, adapting, and outperforming.",
//     },
//   ];

//   const toggleItem = (id: number) => {
//     setOpenItem(openItem === id ? null : id);
//   };

//   return (
//     <motion.section
//       id="faq"
//       className={styles.faqSection}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className={styles.container}>
//         {/* Left Column */}
//         <motion.div
//           className={styles.leftColumn}
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h3 className={styles.sectionTitle}>FAQs</h3>
//           <h2 className={styles.mainTitle}>
//             Everything you need to know about how we work. From our process to
//             what makes working with us different.
//           </h2>

//           <div className={styles.imageSection}>
//             <div className={styles.imageContainer}>
//               <Image
//                 src="/landing/Model.png"
//                 alt="AI Model Visualization"
//                 width={180}
//                 height={180}
//                 className={styles.supportImage}
//               />
//             </div>
//             <div className={styles.contactText}>
//               <p>
//                 Still curious about something we haven&apos;t answered? No
//                 worries, drop us a message and we&apos;ll get you the clarity
//                 you&apos;re looking for.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Column - FAQ Items */}
//         <div className={styles.rightColumn}>
//           <div className={styles.faqList}>
//             {faqData.map((item) => (
//               <motion.div
//                 key={item.id}
//                 className={`${styles.faqItem} ${
//                   openItem === item.id ? styles.open : ""
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: item.id * 0.1 }}
//               >
//                 <button
//                   className={styles.faqQuestion}
//                   onClick={() => toggleItem(item.id)}
//                   aria-expanded={openItem === item.id}
//                 >
//                   <span className={styles.questionText}>{item.question}</span>

//                   {/* Animate Icon */}
//                   <motion.div
//                     className={styles.toggleIcon}
//                     animate={{ rotate: openItem === item.id ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {openItem === item.id ? (
//                       <span className={styles.closeIcon}>×</span>
//                     ) : (
//                       <span className={styles.openIcon}>+</span>
//                     )}
//                   </motion.div>
//                 </button>

//                 {/* Accordion Animation */}
//                 <AnimatePresence initial={false}>
//                   {openItem === item.id && (
//                     <motion.div
//                       className={styles.faqAnswer}
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.4, ease: "easeInOut" }}
//                     >
//                       <div className={styles.answerContent}>{item.answer}</div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Contact Section */}
//         <motion.div
//           className={styles.mobileContactSection}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <div className={styles.mobileImageContainer}>
//             <Image
//               src="/landing/Model.png"
//               alt="AI Model Visualization"
//               width={150}
//               height={150}
//               className={styles.mobileSupportImage}
//             />
//           </div>
//           <div className={styles.mobileContactText}>
//             <p>
//               Still curious about something we haven&apos;t answered? No
//               worries, drop us a message and we&apos;ll get you the clarity
//               you&apos;re looking for.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.scss";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0); // first open

  const faqData: FAQItem[] = [
    {
      id: 0,
      question: "I’ve got an idea. How do we start?",
      answer:
        "Easy — book a call. We’ll explore your idea, map out the possibilities, and send you a tailored action plan.",
    },
    {
      id: 1,
      question: "How do I know my data is safe with you?",
      answer:
        "We treat your data like we treat our own — with ironclad security, encrypted storage, and compliance-first protocols.",
    },
    {
      id: 2,
      question: "What if I don’t speak “tech”?",
      answer:
        "That's fine — we speak both CEO and CTO fluently. We’ll guide you in plain language while we handle the code & AI magic.",
    },
    {
      id: 3,
      question: "Can you plug AI into my existing systems?",
      answer:
        "Yes — whether it’s a CRM, ERP, or that ancient system your team swears by, we can integrate AI seamlessly.",
    },
    {
      id: 4,
      question: "What happens after launch?",
      answer:
        "We don’t disappear. We monitor, optimize, and upgrade your AI so it keeps learning, adapting, and outperforming.",
    },
  ];

  const toggleItem = (id: number) => setOpenItem(openItem === id ? null : id);

  return (
    <motion.section
      id="faq"
      className={styles.faqSection}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Left Column */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className={styles.sectionTitle}>FAQs</h3>
          <h2 className={styles.mainTitle}>
            Everything you need to know about how we work — from our process to
            what makes us different.
          </h2>

          <div className={styles.imageSection}>
            <motion.div
              className={styles.imageContainer}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/landing/Model.png"
                alt="AI Model"
                width={220}
                height={220}
                className={styles.supportImage}
              />
            </motion.div>
            <div className={styles.contactText}>
              <p>
                Still curious about something we haven&apos;t answered? Drop us
                a message and we&apos;ll get you clarity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className={styles.rightColumn}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {faqData.map((item) => (
            <motion.div
              key={item.id}
              className={`${styles.faqItem} ${
                openItem === item.id ? styles.open : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span>{item.question}</span>
                <motion.span
                  className={styles.icon}
                  animate={{ rotate: openItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openItem === item.id ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
