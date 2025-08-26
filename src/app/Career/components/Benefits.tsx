// import React from 'react';
// import styles from './Benefits.module.scss';
// import { Laptop, Brain, Globe, BookOpen,  Landmark, HandCoins } from 'lucide-react';

// const benefits = [
//   {
//     icon: <Globe />,
//     title: 'Remote-First',
//     description: 'Join our global team and experience flexibility that fits your lifestyle.',
//   },
//   {
//     icon: <Brain />,
//     title: 'Learning Budget',
//     description: 'Upskill with an annual budget for courses, conferences, and skill-building.',
//   },
//   {
//     icon: <Landmark />,
//     title: 'Competitive Pay',
//     description: 'Enjoy a competitive base salary plus performance-driven bonuses.',
//   },
//   {
//     icon: <BookOpen />,
//     title: 'Research Time',
//     description: 'Stay ahead with dedicated time to explore the latest AI technologies and trends.',
//   },
//   {
//     icon: <Laptop />,
//     title: 'Latest Tech',
//     description: 'Get hands-on experience with advanced AI tools and technologies.',
//   },
//   {
//     icon: <HandCoins />,
//     title: 'ESOPs',
//     description: "We reward your hard work with a share in the company's success for unlimited growth.",
//   },
// ];

// export const Benefits = () => {
//   return (
//     <section className={styles['benefits-section']}>
//       <div className={styles['benefits-container']}>
//         <h2 className={styles['benefits-heading']}>Benefits & Perks</h2>
//         <p className={styles['benefits-subtitle']}>
//           We believe in taking care of our team with comprehensive benefits that support your growth and well-being
//         </p>
//         <div className={styles['benefits-grid']}>
//           {benefits.map((benefit, index) => (
//             <div key={index} className={styles['benefits-card']}>
//               <div className={styles['icon-container']}>{benefit.icon}</div>
//               <div className={styles['card-details']}>
//                 <h3 className={styles['card-title']}>{benefit.title}</h3>
//                 <p className={styles['card-description']}>{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Benefits.module.scss";
import {
  Laptop,
  Brain,
  Globe,
  BookOpen,
  Landmark,
  HandCoins,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Globe size={28} />,
    title: "Remote-First",
    description:
      "Join our global team and experience flexibility that fits your lifestyle.",
  },
  {
    icon: <Brain size={28} />,
    title: "Learning Budget",
    description:
      "Upskill with an annual budget for courses, conferences, and skill-building.",
  },
  {
    icon: <Landmark size={28} />,
    title: "Competitive Pay",
    description:
      "Enjoy a competitive base salary plus performance-driven bonuses.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Research Time",
    description:
      "Stay ahead with dedicated time to explore the latest AI technologies and trends.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Latest Tech",
    description:
      "Get hands-on experience with advanced AI tools and technologies.",
  },
  {
    icon: <HandCoins size={28} />,
    title: "ESOPs",
    description:
      "We reward your hard work with a share in the company's success for unlimited growth.",
  },
];

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Benefits = () => {
  return (
    <section className={styles["benefits-section"]}>
      <div className={styles["benefits-container"]}>
        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className={styles["benefits-heading"]}>Benefits & Perks</h2>
          <p className={styles["benefits-subtitle"]}>
            We believe in taking care of our team with comprehensive benefits
            that support your growth and well-being
          </p>
        </motion.div>

        {/* Cards with staggered animation */}
        <motion.div
          className={styles["benefits-grid"]}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles["benefits-card"]}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }} // hover lift effect
            >
              <div className={styles["icon-container"]}>{benefit.icon}</div>
              <div className={styles["card-details"]}>
                <h3 className={styles["card-title"]}>{benefit.title}</h3>
                <p className={styles["card-description"]}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
