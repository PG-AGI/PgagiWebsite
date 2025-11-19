
// "use client";
// import React, { useState } from "react";
// import styles from "./VideoTestimonial.module.scss";

// interface Testimonial {
//   name: string;
//   company: string;
//   country: string;
//   quote: string;
//   projectName: string;
//   verifiedBy?: string;
//   verifiedLogo?: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Bernard",
//     company: "",
//     country: "USA",
//     quote:
//       "From day one, I was given expert analysis of our custom trained model. I don't know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!",
//     projectName: "VertexCast AI – Forecasting future trends with Vertex AI",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nicholas",
//     company: "",
//     country: "Canada",
//     quote:
//       "Awesome service, sometimes takes more time than expected but they worked very hard and a very complicated project and never gave up. at the end of the day, project is done and working. We will hire for sure",
//     projectName: "SportBetting ML Project",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "San Dev",
//     company: "Onchaintoolkit",
//     country: "USA",
//     quote: "You guys are really organized and professional. Thanks!",
//     projectName: "MULTI-AGENT AI CRYPTO TRADING SYSTEM",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "",
//     company: "Soulful Humans",
//     country: "USA",
//     quote:
//       "I highly recommend PGAGI. They are highly communicative, talented, and a great team. I will work with them again!",
//     projectName: "AI System to Convert Performance Data into Company",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "David Catarious",
//     company: "",
//     country: "USA",
//     quote:
//       "PGAGI and the team were excellent. They were fast, thorough, and effective - can't really ask for more than that.",
//     projectName: "Gradio Application",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nicholas",
//     company: "",
//     country: "Canada",
//     quote:
//       "The team were very research oriented, worked over hours to get it done. Excellent work and sure will work together again.",
//     projectName: "Binary Options Trading Indicator on MT4/MT5",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nicholas",
//     company: "",
//     country: "Canada",
//     quote:
//       "This is the 2nd project we have worked together, highly satisfied. Hopefully will work more in future.",
//     projectName: "iRaceOpt AI – Intelligent Telemetry Optimization for iRacing",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Lorella Sini",
//     company: "Sardina Rentals",
//     country: "Italy",
//     quote:
//       "Great service, i suggest to collaborate with Vivek and his team, they are very prepared for everything, even though you are ignorant like me.",
//     projectName: "SMUBOO AI AUTOMATION AGENT",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Rizwan",
//     company: "Mideo Pty Ltd",
//     country: "Australia",
//     quote:
//       "It was great working with the team, very thoughtful guys will work with PGAGI again.",
//     projectName: "AI Hypnosis Agent",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Sybestian",
//     company: "",
//     country: "USA",
//     quote:
//       "Great working with the team, they are very research oriented and also responsive at the same time.",
//     projectName:
//       "Airtable + AI ChatGPT Integration for Social Media Caption and Scheduling",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Subrotom21",
//     company: "",
//     country: "USA",
//     quote:
//       "They are very professional, flexible, and fast. Highly recommend working with them.",
//     projectName: "RAG implementation for smart contact code",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Bally S",
//     company: "Social 27",
//     country: "USA",
//     quote:
//       "I had an exceptional experience working with this team. Their professionalism and deep expertise in React, React Flow, and AI were evident throughout the project. They quickly grasped our requirements and executed each task with precision, resulting in a swift and high-quality turnaround. Even when mid-stream changes occurred, they handled them gracefully while consistently meeting every milestone. I highly recommend this team for their technical prowess and commitment to excellence.",
//     projectName: "React Flow Execution Graph",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nitesh Puchhadiya",
//     company: "WebCodeGenie Technology PVT Ltd",
//     country: "IN",
//     quote:
//       "I had a great experience working with PGAGI Consultancy on an AI project. Their team demonstrated strong technical expertise, clear communication, and a proactive approach throughout the engagement. They delivered high-quality work, met deadlines consistently, and were highly responsive to any feedback or adjustments needed.",
//     projectName: "AI powered multi-agent trading system.",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Mike Giuffrida",
//     company: "",
//     country: "USA",
//     quote:
//       "Great communication and very responsive throughout the project. The PGAGI team delivered excellent work, exceeding expectations in both quality and speed. They were proactive, collaborative, and quick to understand our requirements. Their technical expertise and dedication truly stood out. We're extremely satisfied with the outcome and look forward to working with them again on future projects.",
//     projectName: "AI HIRING AGENT",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Preska Thomas",
//     company: "DebitMyData",
//     country: "USA",
//     quote:
//       "PGAGI Team not only delivered the project on time but exceeded my expectations in every way. Their attention to detail, creativity, and ability to understand my vision were truly remarkable. They communicated clearly throughout the process, kept me updated regularly, and were always open to feedback, making collaboration seamless and enjoyable.",
//     projectName: "AI NFT GENERATOR",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "CEO",
//     company: "AI HR Company",
//     country: "USA",
//     quote:
//      "pgagi consultancy private limited has honest, hardworking individuals looking to deliver quality products." ,
//     projectName: "",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
// ];

// const StarRating: React.FC = () => (
//   <div className={styles.starRating}>
//     {[...Array(5)].map((_, index) => (
//       <svg
//         key={index}
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="#FFD700"
//         stroke="#FFD700"
//         strokeWidth="1"
//         className={styles.star}
//         aria-hidden="true"
//       >
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ))}
//   </div>
// );

// const VideoTestimonial: React.FC = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <section className={styles.videoTestimonialSection}>
//       <div className={styles.container}>
//         {/* Header */}
//         <div className={styles.headerSection}>
//           <div className={styles.centeredHeader}>
//             <h3 className={styles.testimonialLabel}>Testimonials</h3>
//           </div>
//         </div>

//         {/* Main Grid */}
//         <div className={styles.mainContent}>
//           {/* Left Column - Video */}
//           <div className={styles.leftColumn}>
//             <div className={styles.videoSection}>
//               <div className={styles.videoContainer}>
//                 <div className={styles.videoPlaceholder}>
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src="https://www.youtube.com/embed/vsuDM890kmU?si=1ZfbE5tpp6FLtQE3"
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <div className={styles.videoInfo}>
//                   <h3 className={styles.speakerName}>Stunited</h3>
//                   <p className={styles.speakerTitle}>
//                     Partnering with Toingg, they deployed an advanced,
//                     AI-powered communication system. Automated WhatsApp outreach,
//                     intelligent AI calls, and seamless CRM integration with{" "}
//                     <a
//                       href="https://monday.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={styles.mondayLink}
//                     >
//                       Monday.com
//                     </a>{" "}
//                     helped them achieve 1100x ROI effortlessly.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Infinite Scroll Testimonials */}
//           <div className={styles.rightColumn}>
//             <div className={styles.rightColumnHeader}>
//               <h2 className={styles.rightHeading}>See what our clients say</h2>
//             </div>

//             <div
//               className={styles.marqueeContainer}
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//             >
//               <div
//                 className={`${styles.marqueeTrack} ${
//                   hovered ? styles.paused : ""
//                 }`}
//               >
//                 {[...testimonials, ...testimonials].map((t, index) => (
//                   <div key={index} className={styles.testimonialBox}>
//                     <div className={styles.topRating}>
//                       <span className={styles.ratingValue}>5.0</span>
//                       <StarRating />
//                     </div>
//                     <div className={styles.testimonialText}>
//                       <p>&quot;{t.quote}&quot;</p>

//                     </div>
//                     <div className={styles.footerBox}>
//                       <div className={styles.footerLeft}>
//                         <h4 className={styles.reviewerRole}>
//                           {t.name || "Project Manager"}
//                         </h4>
//                         <p className={styles.reviewerCompany}>
//                           {t.company || "CLOUDCOMPLI"}
//                         </p>
//                       </div>
//                       <div className={styles.verifiedSection}>
//                         <p className={styles.verifiedText}>
//                           Verified by {t.verifiedBy}
//                         </p>
//                         {t.verifiedLogo && (
//                           <img
//                             src={t.verifiedLogo}
//                             alt="verified logo"
//                             className={styles.verifiedLogo}
//                           />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoTestimonial;



/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////






// "use client";
// import React, { useState, useMemo, useEffect } from "react";
// import styles from "./VideoTestimonial.module.scss";


// interface Testimonial {
//   name: string;
//   company: string;
//   country: string;
//   quote: string;
//   projectName: string;
//   verifiedBy?: string;
//   verifiedLogo?: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Will Dean",
//     company: "FOMO INC.",
//     country: "USA",
//     quote:
//       "This was the best engineering team I have found on Upwork to date. Clean code, scalable systems, amazing project management and they know everything about AI and AI Tooling. We will be working with them again very soon!",
//     projectName: "",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Bernard",
//     company: "Stealth Startup",
//     country: "USA",
//     quote:
//       "From day one, I was given expert analysis of our custom trained model. I don't know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!",
//     projectName: "VertexCast AI – Forecasting future trends with Vertex AI",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nicholas",
//     company: "Stealth Startup",
//     country: "Canada",
//     quote:
//       "Awesome service, sometimes takes more time than expected but they worked very hard and a very complicated project and never gave up. at the end of the day, project is done and working. We will hire for sure",
//     projectName: "SportBetting ML Project",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "San Dev",
//     company: "Onchaintoolkit",
//     country: "USA",
//     quote: "You guys are really organized and professional. Thanks!",
//     projectName: "MULTI-AGENT AI CRYPTO TRADING SYSTEM",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "",
//     company: "Soulful Humans",
//     country: "USA",
//     quote:
//       "I highly recommend PGAGI. They are highly communicative, talented, and a great team. I will work with them again!",
//     projectName: "AI System to Convert Performance Data into Company",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "David Catarious",
//     company: "Stealth Startup",
//     country: "USA",
//     quote:
//       "PGAGI and the team were excellent. They were fast, thorough, and effective - can't really ask for more than that.",
//     projectName: "Gradio Application",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nicholas",
//     company: "Stealth Startup",
//     country: "Canada",
//     quote:
//       "The team were very research oriented, worked over hours to get it done. Excellent work and sure will work together again.",
//     projectName: "Binary Options Trading Indicator on MT4/MT5",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nicholas",
//     company: "Stealth Startup",
//     country: "Canada",
//     quote:
//       "This is the 2nd project we have worked together, highly satisfied. Hopefully will work more in future.",
//     projectName: "iRaceOpt AI – Intelligent Telemetry Optimization for iRacing",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Lorella Sini",
//     company: "Sardina Rentals",
//     country: "Italy",
//     quote:
//       "Great service, i suggest to collaborate with Vivek and his team, they are very prepared for everything, even though you are ignorant like me.",
//     projectName: "SMUBOO AI AUTOMATION AGENT",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Rizwan",
//     company: "Mideo Pty Ltd",
//     country: "Australia",
//     quote:
//       "It was great working with the team, very thoughtful guys will work with PGAGI again.",
//     projectName: "AI Hypnosis Agent",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Sybestian",
//     company: "Stealth Startup",
//     country: "USA",
//     quote:
//       "Great working with the team, they are very research oriented and also responsive at the same time.",
//     projectName:
//       "Airtable + AI ChatGPT Integration for Social Media Caption and Scheduling",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Subrotom21",
//     company: "Stealth Startup",
//     country: "USA",
//     quote:
//       "They are very professional, flexible, and fast. Highly recommend working with them.",
//     projectName: "RAG implementation for smart contact code",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Bally S",
//     company: "Social 27",
//     country: "USA",
//     quote:
//       "I had an exceptional experience working with this team. Their professionalism and deep expertise in React, React Flow, and AI were evident throughout the project. They quickly grasped our requirements and executed each task with precision, resulting in a swift and high-quality turnaround. Even when mid-stream changes occurred, they handled them gracefully while consistently meeting every milestone. I highly recommend this team for their technical prowess and commitment to excellence.",
//     projectName: "React Flow Execution Graph",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nitesh Puchhadiya",
//     company: "WebCodeGenie Technology PVT Ltd",
//     country: "IN",
//     quote:
//       "I had a great experience working with PGAGI Consultancy on an AI project. Their team demonstrated strong technical expertise, clear communication, and a proactive approach throughout the engagement. They delivered high-quality work, met deadlines consistently, and were highly responsive to any feedback or adjustments needed.",
//     projectName: "AI powered multi-agent trading system.",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Mike Giuffrida",
//     company: "Stealth Startup",
//     country: "USA",
//     quote:
//       "Great communication and very responsive throughout the project. The PGAGI team delivered excellent work, exceeding expectations in both quality and speed. They were proactive, collaborative, and quick to understand our requirements. Their technical expertise and dedication truly stood out. We're extremely satisfied with the outcome and look forward to working with them again on future projects.",
//     projectName: "AI HIRING AGENT",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Preska Thomas",
//     company: "DebitMyData",
//     country: "USA",
//     quote:
//       "PGAGI Team not only delivered the project on time but exceeded my expectations in every way. Their attention to detail, creativity, and ability to understand my vision were truly remarkable. They communicated clearly throughout the process, kept me updated regularly, and were always open to feedback, making collaboration seamless and enjoyable.",
//     projectName: "AI NFT GENERATOR",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
//   {
//     name: "Nishant Banore",
//     company: "Stealth Startup",
//     country: "USA",
//     quote:
//      "pgagi consultancy private limited has honest, hardworking individuals looking to deliver quality products." ,
//     projectName: "",
//     verifiedBy: "Upwork",
//     verifiedLogo: "/images/upwork-logo.png",
//   },
// ];

// const StarRating: React.FC = () => (
//   <div className={styles.starRating}>
//     {[...Array(5)].map((_, index) => (
//       <svg
//         key={index}
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="#FFD700"
//         stroke="#FFD700"
//         strokeWidth="1"
//         className={styles.star}
//         aria-hidden="true"
//       >
//         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//       </svg>
//     ))}
//   </div>
// );

// const VideoTestimonial: React.FC = () => {
//   const [hoveredCol1, setHoveredCol1] = useState(false);
//   const [hoveredCol2, setHoveredCol2] = useState(false);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const firstColumn = useMemo(() => testimonials.slice(0, Math.ceil(testimonials.length / 2)), []);
//   const secondColumn = useMemo(() => testimonials.slice(Math.ceil(testimonials.length / 2)), []);

//   useEffect(() => {
//     if (!isDialogOpen) return;
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setIsDialogOpen(false);
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [isDialogOpen]);

//   return (
//     <section className={styles.videoTestimonialSection}>
//       <div className={styles.container}>
//         <div className={styles.headerSection}>
//           <div className={styles.centeredHeader}>
//             <h3 className={styles.testimonialLabel}>Testimonials</h3>
//           </div>
//         </div>

//         <div className={styles.mainContent}>
//           {/* Left Column - Hero Video Dialog (40%) */}
//           <div className={styles.leftColumn}>
//             <div className={styles.videoSection}>
//               <div className={styles.videoContainer}>
//                 <button
//                   type="button"
//                   aria-label="Open video"
//                   aria-haspopup="dialog"
//                   className={styles.heroVideoButton}
//                   onClick={() => setIsDialogOpen(true)}
//                 >
//                   <div className={styles.heroThumbnail}>
//                     <img src="/images/THUMBNAIL.jpg" alt="Hero Video" className={styles.heroThumbnailImg} />
//                     <span className={styles.playButton} aria-hidden>
//                       <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
//                     </span>
//                   </div>
//                 </button>
//                 <div className={styles.videoInfo}>
//                   <h3 className={styles.speakerName}>Stunited</h3>
//                   <p className={styles.speakerTitle}>
//                     Partnering with Toingg, they deployed an advanced,
//                     AI-powered communication system. Automated WhatsApp outreach,
//                     intelligent AI calls, and seamless CRM integration with
//                     <a
//                       href="https://monday.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={styles.mondayLink}
//                     >
//                       {" "}Monday.com
//                     </a>{" "}
//                     helped them achieve 1100x ROI effortlessly.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Dual Vertical Marquees (60%) */}
//           <div className={styles.rightColumn}>
//             <div className={styles.rightColumnHeader}>
//               <h2 className={styles.rightHeading}>See what our clients say</h2>
//             </div>

//             <div className={styles.marqueeContainer}>
//               <div
//                 className={styles.verticalMarquee}
//                 onMouseEnter={() => setHoveredCol1(true)}
//                 onMouseLeave={() => setHoveredCol1(false)}
//               >
//                 <div className={`${styles.marqueeTrack} ${hoveredCol1 ? styles.paused : ""}`}>
//                   {[...firstColumn, ...firstColumn].map((t, index) => (
//                     <div key={`col1-${index}`} className={styles.testimonialBox}>
//                       <div className={styles.topRating}>
//                         <span className={styles.ratingValue}>5.0</span>
//                         <StarRating />
//                       </div>
//                       <div className={styles.testimonialText}>
//                         <p>&quot;{t.quote}&quot;</p>
//                       </div>
//                       <div className={styles.footerBox}>
//                         <div className={styles.footerLeft}>
//                           <h4 className={styles.reviewerRole}>{t.name || "Project Manager"}</h4>
//                           <p className={styles.reviewerCompany}>{t.company || "Stealth Startup"}</p>
//                         </div>
//                         <div className={styles.verifiedSection}>
//                           <p className={styles.verifiedText}>Verified by {t.verifiedBy}</p>
//                           {t.verifiedLogo && (
//                             <img src={t.verifiedLogo} alt="verified logo" className={styles.verifiedLogo} />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div
//                 className={styles.verticalMarquee}
//                 onMouseEnter={() => setHoveredCol2(true)}
//                 onMouseLeave={() => setHoveredCol2(false)}
//               >
//                 <div className={`${styles.marqueeTrack} ${styles.reverseMarquee} ${hoveredCol2 ? styles.paused : ""}`}>
//                   {[...secondColumn, ...secondColumn].map((t, index) => (
//                     <div key={`col2-${index}`} className={styles.testimonialBox}>
//                       <div className={styles.topRating}>
//                         <span className={styles.ratingValue}>5.0</span>
//                         <StarRating />
//                       </div>
//                       <div className={styles.testimonialText}>
//                         <p>&quot;{t.quote}&quot;</p>
//                       </div>
//                       <div className={styles.footerBox}>
//                         <div className={styles.footerLeft}>
//                           <h4 className={styles.reviewerRole}>{t.name || "Project Manager"}</h4>
//                           <p className={styles.reviewerCompany}>{t.company || "Stealth Startup"}</p>
//                         </div>
//                         <div className={styles.verifiedSection}>
//                           <p className={styles.verifiedText}>Verified by {t.verifiedBy}</p>
//                           {t.verifiedLogo && (
//                             <img src={t.verifiedLogo} alt="verified logo" className={styles.verifiedLogo} />
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Hero Video Dialog */}
//         {isDialogOpen && (
//           <div
//             className={styles.dialogOverlay}
//             onClick={() => setIsDialogOpen(false)}
//             role="presentation"
//           >
//             <div
//               className={styles.dialogContent}
//               onClick={(e) => e.stopPropagation()}
//               role="dialog"
//               aria-modal="true"
//               aria-label="Testimonial video dialog"
//             >
//               <div className={styles.dialogVideoWrapper}>
//                 <iframe
//                   src="https://www.youtube.com/embed/vsuDM890kmU?rel=0&playsinline=1"
//                   title="Hero Video"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                 />
//               </div>
//               <button type="button" className={styles.dialogClose} onClick={() => setIsDialogOpen(false)} aria-label="Close video">
//                 ✕
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default VideoTestimonial;

"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./VideoTestimonial.module.scss";

// Video data interface
interface VideoData {
  thumbnail: string;
  youtubeUrl: string; // Can be full URL or just the ID
  title: string;
  description: string;
}

// Helper function to extract YouTube ID from URL
const extractYouTubeId = (urlOrId: string): string => {
  // If it's already just an ID (no slashes or =), return as is
  if (!urlOrId.includes('/') && !urlOrId.includes('=')) {
    return urlOrId;
  }

  // Try to extract from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = urlOrId.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  // If no pattern matches, return the original (might be just an ID)
  return urlOrId;
};

// Testimonial image data - Images are in /public/images/testimonials/ folder
const testimonialImages: string[] = [
  "/images/testimonials/Artboard 1 copy 2.jpg",
  "/images/testimonials/Artboard 1 copy 3.jpg",
  "/images/testimonials/Artboard 1 copy 4.jpg",
  // "/images/testimonials/Artboard 1 copy 5.jpg",
  // "/images/testimonials/Artboard 1 copy 6.jpg",
  // "/images/testimonials/Artboard 1 copy 7.jpg",
  "/images/testimonials/Artboard 1 copy 8.jpg",
  // "/images/testimonials/Artboard 1 copy 9.jpg",
  "/images/testimonials/Artboard 1 copy 10.jpg",
  "/images/testimonials/Artboard 1 copy 11.jpg",
  // "/images/testimonials/Artboard 1 copy 12.jpg",
  "/images/testimonials/Artboard 1 copy 13.jpg",
  // "/images/testimonials/Artboard 1 copy 14.jpg",
  "/images/testimonials/FOMO (2).jpg",
  "/images/testimonials/Artboard 1 copy.jpg",
  // "/images/testimonials/Artboard 1.jpg",
   "/images/testimonials/Artboard 1 copy 5.jpg",
  "/images/testimonials/Artboard 1 copy 6.jpg",
  "/images/testimonials/Artboard 1 copy 7.jpg",
   "/images/testimonials/Artboard 1 copy 9.jpg",
   "/images/testimonials/Artboard 1 copy 12.jpg",
    "/images/testimonials/Artboard 1 copy 14.jpg",
     "/images/testimonials/Artboard 1.jpg",
];

// Video data - Just paste your full YouTube URL here!
// Examples:
// - https://www.youtube.com/watch?v=vsuDM890kmU
// - https://youtu.be/vsuDM890kmU
// - Or just the ID: vsuDM890kmU
const videos: VideoData[] = [
  {
    thumbnail: "/images/THUMBNAIL.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=vsuDM890kmU", // Paste full YouTube URL here
    title: "Stunited",
    description:
      "Partnering with Toingg, they deployed an advanced, AI-powered communication system. Automated WhatsApp outreach, intelligent AI calls, and seamless CRM integration with Monday.com helped them achieve 1100x ROI effortlessly.",
  },
  {
    thumbnail: "/images/THUMBNAIL2.jpg", // Update with second video thumbnail
    youtubeUrl: "https://youtu.be/6xaFA25-cc8?si=dlXudFrTusBX7aaJ", // Paste full YouTube URL here
    title: "Maputo Rides",
    description:
      "Using Toingg conversational intelligence, Maputo Rides has transformed passive data into actionable engagement, driving both reactivation and relationship depth at scale.",
  },
];

const VideoTestimonial: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const initializedRef = useRef(false);

  // Handle video popup
  const openVideo = (index: number) => {
    setActiveVideoIndex(index);
  };

  const closeVideo = () => {
    setActiveVideoIndex(null);
  };

  // Handle keyboard events for video popup
  useEffect(() => {
    if (activeVideoIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideoIndex]);

  // Initialize carousel position to start from the left
  useEffect(() => {
    if (testimonialImages.length === 0 || initializedRef.current) return;
    
    setCarouselPosition(0);
    initializedRef.current = true;
  }, [testimonialImages.length]);

  // Infinite horizontal scroll for testimonials (left to right)
  useEffect(() => {
    if (!carouselRef.current || testimonialImages.length === 0 || carouselPosition === null) return;

    const cardWidth = 480; // Card width (480px) + gap (32px) = 512px total
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const maxScroll = testimonialImages.length * totalCardWidth;

    const scroll = () => {
      if (!isHovered) {
        setCarouselPosition((prev) => {
          if (prev === null) return 0;
          const newPosition = prev + 0.5; // Increased scroll speed (from 0.3 to 0.5)
          // Reset when we've scrolled through one set of images
          return newPosition >= maxScroll ? 0 : newPosition;
        });
      }
    };

    scrollIntervalRef.current = setInterval(scroll, 16); // ~60fps

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isHovered, testimonialImages.length, carouselPosition]);

  // Carousel navigation (left-to-right scroll)
  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current || carouselPosition === null) return;
    const cardWidth = 480;
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const scrollAmount = totalCardWidth;
    const maxScroll = testimonialImages.length * totalCardWidth;

    setCarouselPosition((prev) => {
      if (prev === null) return 0;
      if (direction === "left") {
        // Left arrow moves content left (negative direction)
        const newPosition = prev - scrollAmount;
        return newPosition < 0 ? maxScroll - scrollAmount : newPosition;
      } else {
        // Right arrow moves content right (positive direction)
        const newPosition = prev + scrollAmount;
        return newPosition >= maxScroll ? 0 : newPosition;
      }
    });
  };

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = testimonialImages.length > 0 
    ? [...testimonialImages, ...testimonialImages]
    : [];

  return (
    <section className={styles.videoTestimonialSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerSection}>
          <div className={styles.centeredHeader}>
            <h3 className={styles.testimonialLabel}>Testimonials</h3>
            <p className={styles.subtitle}>See what our clients say</p>
          </div>
        </div>

        {/* Top Section: Two Videos Side by Side */}
        <div className={styles.videosSection}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
                <button
                  type="button"
                aria-label={`Open ${video.title} video`}
                className={styles.videoButton}
                onClick={() => openVideo(index)}
              >
                <div className={styles.videoThumbnail}>
                  <img src={video.thumbnail} alt={video.title} className={styles.thumbnailImage} />
                    <span className={styles.playButton} aria-hidden>
                    <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    </span>
                  </div>
                </button>
                <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDescription}>{video.description}</p>
                </div>
              </div>
          ))}
          </div>

        {/* Bottom Section: Horizontal Infinite Carousel - Full Width */}
        <div
          className={styles.testimonialsCarousel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {/* Navigation Arrows - Show on hover */}
            { (
              <>
                <button
                  type="button"
                  className={`${styles.carouselArrow} ${styles.arrowLeft}`}
                  onClick={() => scrollCarousel("left")}
                  aria-label="Previous testimonials"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`${styles.carouselArrow} ${styles.arrowRight}`}
                  onClick={() => scrollCarousel("right")}
                  aria-label="Next testimonials"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </>
            )
            }

            {/* Carousel Track */}
            <div className={styles.carouselTrack} ref={carouselRef}>
              <div
                className={styles.carouselContent}
                style={{
                  transform: carouselPosition !== null ? `translateX(-${carouselPosition}px)` : "translateX(0)",
                  transition: isHovered ? "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                }}
              >
                {duplicatedImages.map((image, index) => (
                  <div key={`testimonial-${index}`} className={styles.testimonialCard}>
                    <img
                      src={image}
                      alt={`Testimonial ${(index % testimonialImages.length) + 1}`}
                      className={styles.testimonialImage}
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        // Show a placeholder or hide the image
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        // Optionally show a placeholder
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.backgroundColor = "#f0f0f0";
                          parent.style.display = "flex";
                          parent.style.alignItems = "center";
                          parent.style.justifyContent = "center";
                          parent.innerHTML = `<span style="color: #999; font-size: 14px;">Image not found</span>`;
                        }
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${image}`);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          {testimonialImages.length === 0 && (
            <div style={{ padding: "2rem", textAlign: "center", color: "#999" }}>
              No testimonial images found. Please add images to /public/images/testimonials/
            </div>
          )}
        </div>

        {/* Video Popup Modal */}
        {activeVideoIndex !== null && (
          <div
            className={styles.dialogOverlay}
            onClick={closeVideo}
            role="presentation"
          >
            <div
              className={styles.dialogContent}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${videos[activeVideoIndex].title} video dialog`}
            >
              <div className={styles.dialogVideoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(videos[activeVideoIndex].youtubeUrl)}?rel=0&playsinline=1&autoplay=1`}
                  title={videos[activeVideoIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <button
                type="button"
                className={styles.dialogClose}
                onClick={closeVideo}
                aria-label="Close video"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonial;

