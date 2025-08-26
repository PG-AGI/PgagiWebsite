// import React from 'react';
// import styles from './Values.module.scss';
// import { Brain, Users, Shield, Star, Heart, Zap, Target, Globe, Lightbulb, Award } from 'lucide-react';

// const values = [
//   {
//     icon: <Brain size={32} />,
//     title: 'Innovation',
//     description: "We do not just work with AI; we innovate to redefine its potential.",
//     color: '#1e293b'
//   },
//   {
//     icon: <Users size={32} />,
//     title: 'Collaboration',
//     description: 'Working together to make impossible AI solutions, a reality.',
//     color: '#334155'
//   },
//   {
//     icon: <Shield size={32} />,
//     title: 'Integrity',
//     description: 'We take pride in raising the bar and delivering top-notch results every time.',
//     color: '#475569'
//   },
//   {
//     icon: <Star size={32} />,
//     title: 'Excellence',
//     description: 'Excellence, quality, and precision are at the heart of what we do.',
//     color: '#64748b'
//   },
//   {
//     icon: <Heart size={32} />,
//     title: 'Impact',
//     description: 'Leveraging AI to drive an impactful, positive change in this world.',
//     color: '#94a3b8'
//   },
//   {
//     icon: <Zap size={32} />,
//     title: 'Agility',
//     description: 'Adapting quickly to new challenges and opportunities in the AI landscape.',
//     color: '#cbd5e1'
//   },
// ];

// export const Values = () => {
//   return (
//     <section className={styles['values-section']}>
//       <div className={styles['values-container']}>
//         <div className={styles['values-heading-container']}>
//           <div className={styles['values-badge']}>
//             <span>✨</span>
//             <span>Our Core Values</span>
//           </div>
//           <h2 className={styles['values-heading']}>What Drives Us Forward</h2>
//           <p className={styles['values-description']}>
//             At PGAGI, we value innovation, AGI advancement, integrity, scalability, collaboration, and continuous learning.
//             These principles guide every decision we make and every solution we create.
//           </p>
//         </div>
//         <div className={styles['values-grid']}>
//           {values.map((value, index) => (
//             <div key={index} className={styles['values-card']}>
//               <div className={styles['values-icon-container']}>
//                 <div className={styles['values-icon']} style={{ color: value.color }}>
//                   {value.icon}
//                 </div>
//                 <div className={styles['values-icon-bg']} style={{ backgroundColor: `${value.color}15` }} />
//               </div>
//               <h3 className={styles['values-title']}>{value.title}</h3>
//               <p className={styles['values-text']}>{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Values.module.scss";
import { Brain, Users, Shield, Star, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Brain size={32} />,
    title: "Innovation",
    description:
      "We do not just work with AI; we innovate to redefine its potential.",
    color: "#1e293b",
  },
  {
    icon: <Users size={32} />,
    title: "Collaboration",
    description: "Working together to make impossible AI solutions, a reality.",
    color: "#334155",
  },
  {
    icon: <Shield size={32} />,
    title: "Integrity",
    description:
      "We take pride in raising the bar and delivering top-notch results every time.",
    color: "#475569",
  },
  {
    icon: <Star size={32} />,
    title: "Excellence",
    description:
      "Excellence, quality, and precision are at the heart of what we do.",
    color: "#64748b",
  },
  {
    icon: <Heart size={32} />,
    title: "Impact",
    description:
      "Leveraging AI to drive an impactful, positive change in this world.",
    color: "#94a3b8",
  },
  {
    icon: <Zap size={32} />,
    title: "Agility",
    description:
      "Adapting quickly to new challenges and opportunities in the AI landscape.",
    color: "#cbd5e1",
  },
];

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // cards appear one by one
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Values = () => {
  return (
    <section className={styles["values-section"]}>
      <div className={styles["values-container"]}>
        {/* Heading with fade-in */}
        <motion.div
          className={styles["values-heading-container"]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles["values-badge"]}>
            <span>✨</span>
            <span>Our Core Values</span>
          </div>
          <h2 className={styles["values-heading"]}>What Drives Us Forward</h2>
          <p className={styles["values-description"]}>
            At PGAGI, we value innovation, AGI advancement, integrity,
            scalability, collaboration, and continuous learning. These
            principles guide every decision we make and every solution we
            create.
          </p>
        </motion.div>

        {/* Cards with staggered animation */}
        <motion.div
          className={styles["values-grid"]}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={styles["values-card"]}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles["values-icon-container"]}>
                <div
                  className={styles["values-icon"]}
                  style={{ color: value.color }}
                >
                  {value.icon}
                </div>
                <div
                  className={styles["values-icon-bg"]}
                  style={{ backgroundColor: `${value.color}15` }}
                />
              </div>
              <h3 className={styles["values-title"]}>{value.title}</h3>
              <p className={styles["values-text"]}>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
