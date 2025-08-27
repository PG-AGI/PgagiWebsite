// import { useEffect, useState, useCallback } from "react";
// import Image from "next/image";
// import styles from "@/app/components/LandingProjects.module.scss";
// import { trendingListOld } from "@/utils/constants";
// import { useRouter } from "next/navigation";

// export default function LandingProjects() {
//   const router = useRouter();
//   const [isFirstItemHovered, setIsFirstItemHovered] = useState(false);
//   const [isSecondItemHovered, setIsSecondItemHovered] = useState(false);
//   const [isThirdItemHovered, setIsThirdItemHovered] = useState(false);
//   const [isFourthItemHovered, setIsFourthItemHovered] = useState(false);

//   const handleExpand = useCallback((title: string) => {
//     switch (title) {
//       case "Case Studies":
//         window.open("/whatwethink#case-studies", "_blank");
//         break;
//       case "Blogs":
//         window.open("/whatwethink#blogs", "_blank");
//         break;
//       case "AI News":
//         window.open("/whatwethink#ainews", "_blank");
//         break;
//       default:
//         console.error("URL is not defined");
//     }
//   }, []);

//   // This will handle scrolling after the route change
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [router]);

//   return (
//     <section id="trending" className={styles.trending}>
//       <h3>{"// Projects"}</h3>
//       <div className={styles.trendingList}>
//         {trendingListOld.map((item, i) => (
//           <div
//             key={i}
//             className={styles.trendingItem}
//             onClick={() => {
//               if (i === 0) {
//                 window.open("https://cracked.ai/", "_blank");
//               } else if (i === 1) {
//                 window.open("https://fomo.fund/", "_blank");
//               } else if (i === 2) {
//                 window.open("https://aione.klinik-x.de/", "_blank");
//               } else {
//                 handleExpand(item.title);
//               }
//             }}
//             onMouseEnter={() => {
//               if (i === 0) setIsFirstItemHovered(true);
//               else if (i === 1) setIsSecondItemHovered(true);
//               else if (i === 2) setIsThirdItemHovered(true);
//             }}
//             onMouseLeave={() => {
//               if (i === 0) setIsFirstItemHovered(false);
//               else if (i === 1) setIsSecondItemHovered(false);
//               else if (i === 2) setIsThirdItemHovered(false);
//             }}
//             style={{ cursor: "pointer" }}
//           >
//             <div className={styles.content}>
//               <h3>{i === 0 ? "" : i === 1 ? "" : i === 2 ? "" : item.title}</h3>
//               {i === 0 ? (
//                 <p
//                   style={{
//                     opacity: isFirstItemHovered ? 1 : 0,
//                     transition: "opacity 0.3s ease",
//                     textAlign: "center",
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                   }}
//                 >
//                   Click to View
//                 </p>
//               ) : i === 1 ? (
//                 <p
//                   style={{
//                     opacity: isSecondItemHovered ? 1 : 0,
//                     transition: "opacity 0.3s ease",
//                     textAlign: "center",
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                   }}
//                 >
//                   Click to View
//                 </p>
//               ) : i === 2 ? (
//                 <p
//                   style={{
//                     opacity: isThirdItemHovered ? 1 : 0,
//                     transition: "opacity 0.3s ease",
//                     textAlign: "center",
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                   }}
//                 >
//                   Click to View
//                 </p>
//               ) : (
//                 <>
//                   <p>{item.description}</p>
//                   <p className={styles.brief}>{item.brief}</p>
//                 </>
//               )}
//             </div>
//             {i === 0 ? (
//               // First item with optimized video
//               <div className={styles.gifContainer}>
//                 <video
//                   className={styles.imgTag}
//                   src="/Landing Projects/CrackedAI.webm"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   preload="metadata"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     willChange: "auto",
//                   }}
//                 />
//               </div>
//             ) : i === 1 ? (
//               // Second item with optimized GIF
//               <div className={styles.gifContainer}>
//                 <Image
//                   className={styles.imgTag}
//                   src="/Landing Projects/FOMO.gif"
//                   alt="FOMO"
//                   fill
//                   loading="lazy"
//                   style={{
//                     objectFit: "cover",
//                     animationPlayState: isSecondItemHovered
//                       ? "running"
//                       : "paused",
//                     willChange: "auto",
//                   }}
//                 />
//               </div>
//             ) : i === 2 ? (
//               // Third item with optimized GIF
//               <div className={styles.gifContainer}>
//                 <Image
//                   className={styles.imgTag}
//                   src="/Landing Projects/LinkedAI.gif"
//                   alt="LinkedAI"
//                   fill
//                   loading="lazy"
//                   style={{
//                     objectFit: "cover",
//                     animationPlayState: isThirdItemHovered
//                       ? "running"
//                       : "paused",
//                     willChange: "auto",
//                   }}
//                 />
//               </div>
//             ) : (
//               // Other items with original images
//               <Image
//                 className={styles.imgTag}
//                 src={item.image}
//                 alt={item.title}
//                 layout="fill"
//                 objectFit="cover"
//                 loading="lazy"
//               />
//             )}
//           </div>
//         ))}
//         <div
//           className={styles.trendingItem}
//           onClick={() => window.open("https://www.toingg.com/", "_blank")}
//           onMouseEnter={() => setIsFourthItemHovered(true)}
//           onMouseLeave={() => setIsFourthItemHovered(false)}
//           style={{ cursor: "pointer" }}
//         >
//           <div className={styles.content}>
//             {/* <h3>Toingg</h3> */}
//             {isFourthItemHovered ? (
//               <p
//                 style={{
//                   opacity: isFourthItemHovered ? 1 : 0,
//                   transition: "opacity 0.3s ease",
//                   textAlign: "center",
//                   fontSize: "1.1rem",
//                   fontWeight: "600",
//                 }}
//               >
//                 Click to View
//               </p>
//             ) : (
//               <>
//                 <p>Transformative Journeys and Breakthroughs</p>
//                 <div className={styles.storybriefContainer}>
//                   <p className={styles.storybrief1}>
//                     Steep Grind <a href="https://hirextra.com/">HireXtra.com</a>{" "}
//                     faced slow, manual recruitment.
//                   </p>
//                   <p className={styles.storybrief1}>
//                     We built an autonomous AI recruiter with 13 agents,
//                     transforming their process.
//                   </p>
//                   <p className={styles.storybrief1}>
//                     Tasks that once took weeks—like analyzing job descriptions,
//                     matching candidates, and taking interviews—are now completed
//                     in minutes, revolutionizing their recruitment.
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//           <div className={styles.gifContainer}>
//             <video
//               className={styles.imgTag}
//               src="/Landing Projects/Toingg.webm"
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="metadata"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 willChange: "auto",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "@/app/components/LandingProjects.module.scss";
import { trendingListOld } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingProjects() {
  const router = useRouter();
  const [isFirstItemHovered, setIsFirstItemHovered] = useState(false);
  const [isSecondItemHovered, setIsSecondItemHovered] = useState(false);
  const [isThirdItemHovered, setIsThirdItemHovered] = useState(false);
  const [isFourthItemHovered, setIsFourthItemHovered] = useState(false);

  const handleExpand = useCallback((title: string) => {
    switch (title) {
      case "Case Studies":
        window.open("/whatwethink#case-studies", "_blank");
        break;
      case "Blogs":
        window.open("/whatwethink#blogs", "_blank");
        break;
      case "AI News":
        window.open("/whatwethink#ainews", "_blank");
        break;
      default:
        console.error("URL is not defined");
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section id="trending" className={styles.trending}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {"// Projects"}
      </motion.h3>

      <motion.div
        className={styles.trendingList}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {trendingListOld.map((item, i) => (
          <motion.div
            key={i}
            className={styles.trendingItem}
            variants={itemVariants}
            whileHover="hover"
            onClick={() => {
              if (i === 0) {
                window.open("https://cracked.ai/", "_blank");
              } else if (i === 1) {
                window.open("https://fomo.fund/", "_blank");
              } else if (i === 2) {
                window.open("https://aione.klinik-x.de/", "_blank");
              } else {
                handleExpand(item.title);
              }
            }}
            onMouseEnter={() => {
              if (i === 0) setIsFirstItemHovered(true);
              else if (i === 1) setIsSecondItemHovered(true);
              else if (i === 2) setIsThirdItemHovered(true);
            }}
            onMouseLeave={() => {
              if (i === 0) setIsFirstItemHovered(false);
              else if (i === 1) setIsSecondItemHovered(false);
              else if (i === 2) setIsThirdItemHovered(false);
            }}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.content}>
              <h3>{i > 2 ? item.title : ""}</h3>
              {i === 0 ? (
                <motion.p
                  animate={{ opacity: isFirstItemHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    textAlign: "center",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  Click to View
                </motion.p>
              ) : i === 1 ? (
                <motion.p
                  animate={{ opacity: isSecondItemHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    textAlign: "center",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  Click to View
                </motion.p>
              ) : i === 2 ? (
                <motion.p
                  animate={{ opacity: isThirdItemHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    textAlign: "center",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  Click to View
                </motion.p>
              ) : (
                <>
                  <p>{item.description}</p>
                  <p className={styles.brief}>{item.brief}</p>
                </>
              )}
            </div>

            {i === 0 ? (
              <div className={styles.gifContainer}>
                <video
                  className={styles.imgTag}
                  src="/Landing Projects/CrackedAI.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : i === 1 ? (
              <div className={styles.gifContainer}>
                <Image
                  className={styles.imgTag}
                  src="/Landing Projects/FOMO.gif"
                  alt="FOMO"
                  fill
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    animationPlayState: isSecondItemHovered
                      ? "running"
                      : "paused",
                  }}
                />
              </div>
            ) : i === 2 ? (
              <div className={styles.gifContainer}>
                <Image
                  className={styles.imgTag}
                  src="/Landing Projects/LinkedAI.gif"
                  alt="LinkedAI"
                  fill
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    animationPlayState: isThirdItemHovered
                      ? "running"
                      : "paused",
                  }}
                />
              </div>
            ) : (
              <Image
                className={styles.imgTag}
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            )}
          </motion.div>
        ))}

        {/* Fourth custom item */}
        <motion.div
          className={styles.trendingItem}
          variants={itemVariants}
          whileHover="hover"
          onClick={() => window.open("https://www.toingg.com/", "_blank")}
          onMouseEnter={() => setIsFourthItemHovered(true)}
          onMouseLeave={() => setIsFourthItemHovered(false)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.content}>
            {isFourthItemHovered ? (
              <motion.p
                animate={{ opacity: isFourthItemHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                Click to View
              </motion.p>
            ) : (
              <>
                <p>Transformative Journeys and Breakthroughs</p>
                <div className={styles.storybriefContainer}>
                  <p className={styles.storybrief1}>
                    Steep Grind <a href="https://hirextra.com/">HireXtra.com</a>{" "}
                    faced slow, manual recruitment.
                  </p>
                  <p className={styles.storybrief1}>
                    We built an autonomous AI recruiter with 13 agents,
                    transforming their process.
                  </p>
                  <p className={styles.storybrief1}>
                    Tasks that once took weeks—like analyzing job descriptions,
                    matching candidates, and taking interviews—are now completed
                    in minutes, revolutionizing their recruitment.
                  </p>
                </div>
              </>
            )}
          </div>
          <div className={styles.gifContainer}>
            <video
              className={styles.imgTag}
              src="/Landing Projects/Toingg.webm"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
