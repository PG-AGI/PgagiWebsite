// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import styles from "./Positions.module.scss";
// import Job from "@/utils/job";
// import ShimmerCard from "./ShimmerCard";

// export const Positions = () => {
//   const router = useRouter();
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get<Job[]>(
//           "/api/careers/postings?status=active"
//         );
//         setJobs(response.data);
//         setIsLoading(false);
//       } catch (err: any) {
//         if (axios.isAxiosError(err)) {
//           setError(err.response?.data?.message || "Failed to fetch active jobs.");
//         } else {
//           setError("An unknown error occurred.");
//         }
//         setIsLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const stripHtml = (html: string): string => {
//     if (!html) return "";
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   const truncateText = (text: string, maxLength: number): string => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + "...";
//   };

//   const handleApply = (jobId: string) => {
//     router.push(`/jobs/${jobId}`);
//   };

//   if (isLoading) {
//     return (
//       <section className={styles["positions-section"]}>
//         <div className={styles["positions-container"]}>
//           <h2 className={styles["positions-heading"]}>Open Positions</h2>
//           <p className={styles["positions-subtitle"]}>
//             Discover exciting opportunities to join our innovative team and shape the future of AI
//           </p>
//           <div className={styles["positions-grid"]}>
//             {Array.from({ length: 3 }).map((_, index) => (
//               <ShimmerCard key={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className={styles["positions-section"]}>
//         <div className={styles["positions-container"]}>
//           <h2 className={styles["positions-heading"]}>Open Positions</h2>
//           <p className={styles["positions-subtitle"]}>
//             Discover exciting opportunities to join our innovative team and shape the future of AI
//           </p>
//           <p className={styles["error-message"]}>{error}</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className={styles["positions-section"]}>
//       <div className={styles["positions-container"]}>
//         <h2 className={styles["positions-heading"]}>Open Positions</h2>
//         <p className={styles["positions-subtitle"]}>
//           Discover exciting opportunities to join our innovative team and shape the future of AI
//         </p>
//         <div className={styles["positions-grid"]}>
//           {[...jobs].reverse().map((job) => {
//             const plainDescription = stripHtml(job.description);
//             const truncatedDescription = truncateText(plainDescription, 110);
//             return (
//               <div key={job.id} className={styles["positions-card"]}>
//                 <div className={styles["card-content"]}>
//                   <div className={styles["card-details"]}>
//                     <h3 className={styles["card-title"]}>{job.title}</h3>
//                     <p className={styles["card-description"]}>
//                       {truncatedDescription}
//                       {plainDescription.length > 110 && (
//                         <a href={`/jobs/${job.id}`} className={styles["read-more"]}>
//                           Read More
//                         </a>
//                       )}
//                     </p>
//                     <div className={styles["card-tags"]}>
//                       <span className={`${styles.tag} ${styles["tag-department"]}`}>
//                         {job.department}
//                       </span>
//                       <span className={`${styles.tag} ${styles["tag-location"]}`}>
//                         {job.location}
//                       </span>
//                       <span className={`${styles.tag} ${styles["tag-type"]}`}>
//                         {job.type}
//                       </span>
//                       <span className={`${styles.tag} ${styles["tag-openings"]}`}>
//                         {job.numberOfOpenings} {job.numberOfOpenings > 1 ? "Openings" : "Opening"}
//                       </span>
//                     </div>
//                   </div>
//                   <button onClick={() => handleApply(job.id)} className={styles["apply-button"]}>
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Positions;

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./Positions.module.scss";
import Job from "@/utils/job";
import ShimmerCard from "./ShimmerCard";
import { motion } from "framer-motion";

export const Positions = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get<Job[]>(
          "/api/careers/postings?status=active"
        );
        setJobs(response.data);
        setIsLoading(false);
      } catch (err: any) {
        if (axios.isAxiosError(err)) {
          setError(
            err.response?.data?.message || "Failed to fetch active jobs."
          );
        } else {
          setError("An unknown error occurred.");
        }
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const stripHtml = (html: string): string => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleApply = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  // Animation variants
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

  if (isLoading) {
    return (
      <section className={styles["positions-section"]}>
        <div className={styles["positions-container"]}>
          <h2 className={styles["positions-heading"]}>Open Positions</h2>
          <p className={styles["positions-subtitle"]}>
            Discover exciting opportunities to join our innovative team and
            shape the future of AI
          </p>
          <div className={styles["positions-grid"]}>
            {Array.from({ length: 3 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles["positions-section"]}>
        <div className={styles["positions-container"]}>
          <h2 className={styles["positions-heading"]}>Open Positions</h2>
          <p className={styles["positions-subtitle"]}>
            Discover exciting opportunities to join our innovative team and
            shape the future of AI
          </p>
          <p className={styles["error-message"]}>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles["positions-section"]}>
      <div className={styles["positions-container"]}>
        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className={styles["positions-heading"]}>Open Positions</h2>
          <p className={styles["positions-subtitle"]}>
            Discover exciting opportunities to join our innovative team and
            shape the future of AI
          </p>
        </motion.div>

        {/* Cards with staggered animation */}
        <motion.div
          className={styles["positions-grid"]}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[...jobs].reverse().map((job) => {
            const plainDescription = stripHtml(job.description);
            const truncatedDescription = truncateText(plainDescription, 110);

            return (
              <motion.div
                key={job.id}
                className={styles["positions-card"]}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }} // optional hover lift
              >
                <div className={styles["card-content"]}>
                  <div className={styles["card-details"]}>
                    <h3 className={styles["card-title"]}>{job.title}</h3>
                    <p className={styles["card-description"]}>
                      {truncatedDescription}
                      {plainDescription.length > 110 && (
                        <a
                          href={`/jobs/${job.id}`}
                          className={styles["read-more"]}
                        >
                          Read More
                        </a>
                      )}
                    </p>
                    <div className={styles["card-tags"]}>
                      <span
                        className={`${styles.tag} ${styles["tag-department"]}`}
                      >
                        {job.department}
                      </span>
                      <span
                        className={`${styles.tag} ${styles["tag-location"]}`}
                      >
                        {job.location}
                      </span>
                      <span className={`${styles.tag} ${styles["tag-type"]}`}>
                        {job.type}
                      </span>
                      <span
                        className={`${styles.tag} ${styles["tag-openings"]}`}
                      >
                        {job.numberOfOpenings}{" "}
                        {job.numberOfOpenings > 1 ? "Openings" : "Opening"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply(job.id)}
                    className={styles["apply-button"]}
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Positions;
