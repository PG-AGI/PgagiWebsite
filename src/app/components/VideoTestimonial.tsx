
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






"use client";
import React, { useState, useMemo } from "react";
import styles from "./VideoTestimonial.module.scss";


interface Testimonial {
  name: string;
  company: string;
  country: string;
  quote: string;
  projectName: string;
  verifiedBy?: string;
  verifiedLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Bernard",
    company: "",
    country: "USA",
    quote:
      "From day one, I was given expert analysis of our custom trained model. I don't know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!",
    projectName: "VertexCast AI – Forecasting future trends with Vertex AI",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    quote:
      "Awesome service, sometimes takes more time than expected but they worked very hard and a very complicated project and never gave up. at the end of the day, project is done and working. We will hire for sure",
    projectName: "SportBetting ML Project",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "San Dev",
    company: "Onchaintoolkit",
    country: "USA",
    quote: "You guys are really organized and professional. Thanks!",
    projectName: "MULTI-AGENT AI CRYPTO TRADING SYSTEM",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "",
    company: "Soulful Humans",
    country: "USA",
    quote:
      "I highly recommend PGAGI. They are highly communicative, talented, and a great team. I will work with them again!",
    projectName: "AI System to Convert Performance Data into Company",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "David Catarious",
    company: "",
    country: "USA",
    quote:
      "PGAGI and the team were excellent. They were fast, thorough, and effective - can't really ask for more than that.",
    projectName: "Gradio Application",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    quote:
      "The team were very research oriented, worked over hours to get it done. Excellent work and sure will work together again.",
    projectName: "Binary Options Trading Indicator on MT4/MT5",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    quote:
      "This is the 2nd project we have worked together, highly satisfied. Hopefully will work more in future.",
    projectName: "iRaceOpt AI – Intelligent Telemetry Optimization for iRacing",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Lorella Sini",
    company: "Sardina Rentals",
    country: "Italy",
    quote:
      "Great service, i suggest to collaborate with Vivek and his team, they are very prepared for everything, even though you are ignorant like me.",
    projectName: "SMUBOO AI AUTOMATION AGENT",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Rizwan",
    company: "Mideo Pty Ltd",
    country: "Australia",
    quote:
      "It was great working with the team, very thoughtful guys will work with PGAGI again.",
    projectName: "AI Hypnosis Agent",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Sybestian",
    company: "",
    country: "USA",
    quote:
      "Great working with the team, they are very research oriented and also responsive at the same time.",
    projectName:
      "Airtable + AI ChatGPT Integration for Social Media Caption and Scheduling",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Subrotom21",
    company: "",
    country: "USA",
    quote:
      "They are very professional, flexible, and fast. Highly recommend working with them.",
    projectName: "RAG implementation for smart contact code",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Bally S",
    company: "Social 27",
    country: "USA",
    quote:
      "I had an exceptional experience working with this team. Their professionalism and deep expertise in React, React Flow, and AI were evident throughout the project. They quickly grasped our requirements and executed each task with precision, resulting in a swift and high-quality turnaround. Even when mid-stream changes occurred, they handled them gracefully while consistently meeting every milestone. I highly recommend this team for their technical prowess and commitment to excellence.",
    projectName: "React Flow Execution Graph",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Nitesh Puchhadiya",
    company: "WebCodeGenie Technology PVT Ltd",
    country: "IN",
    quote:
      "I had a great experience working with PGAGI Consultancy on an AI project. Their team demonstrated strong technical expertise, clear communication, and a proactive approach throughout the engagement. They delivered high-quality work, met deadlines consistently, and were highly responsive to any feedback or adjustments needed.",
    projectName: "AI powered multi-agent trading system.",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Mike Giuffrida",
    company: "",
    country: "USA",
    quote:
      "Great communication and very responsive throughout the project. The PGAGI team delivered excellent work, exceeding expectations in both quality and speed. They were proactive, collaborative, and quick to understand our requirements. Their technical expertise and dedication truly stood out. We're extremely satisfied with the outcome and look forward to working with them again on future projects.",
    projectName: "AI HIRING AGENT",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "Preska Thomas",
    company: "DebitMyData",
    country: "USA",
    quote:
      "PGAGI Team not only delivered the project on time but exceeded my expectations in every way. Their attention to detail, creativity, and ability to understand my vision were truly remarkable. They communicated clearly throughout the process, kept me updated regularly, and were always open to feedback, making collaboration seamless and enjoyable.",
    projectName: "AI NFT GENERATOR",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
  {
    name: "CEO",
    company: "AI HR Company",
    country: "USA",
    quote:
     "pgagi consultancy private limited has honest, hardworking individuals looking to deliver quality products." ,
    projectName: "",
    verifiedBy: "Upwork",
    verifiedLogo: "/images/upwork-logo.png",
  },
];

const StarRating: React.FC = () => (
  <div className={styles.starRating}>
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#FFD700"
        stroke="#FFD700"
        strokeWidth="1"
        className={styles.star}
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const VideoTestimonial: React.FC = () => {
  const [hoveredCol1, setHoveredCol1] = useState(false);
  const [hoveredCol2, setHoveredCol2] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const firstColumn = useMemo(() => testimonials.slice(0, Math.ceil(testimonials.length / 2)), []);
  const secondColumn = useMemo(() => testimonials.slice(Math.ceil(testimonials.length / 2)), []);

  return (
    <section className={styles.videoTestimonialSection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <div className={styles.centeredHeader}>
            <h3 className={styles.testimonialLabel}>Testimonials</h3>
          </div>
        </div>

        <div className={styles.mainContent}>
          {/* Left Column - Hero Video Dialog (40%) */}
          <div className={styles.leftColumn}>
            <div className={styles.videoSection}>
              <div className={styles.videoContainer}>
                <button
                  type="button"
                  aria-label="Open video"
                  className={styles.heroVideoButton}
                  onClick={() => setIsDialogOpen(true)}
                >
                  <div className={styles.heroThumbnail}>
                    <img src="/images/hero-image.png" alt="Hero Video" className={styles.heroThumbnailImg} />
                    <span className={styles.playButton} aria-hidden>
                      <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                    </span>
                  </div>
                </button>
                <div className={styles.videoInfo}>
                  <h3 className={styles.speakerName}>Stunited</h3>
                  <p className={styles.speakerTitle}>
                    Partnering with Toingg, they deployed an advanced,
                    AI-powered communication system. Automated WhatsApp outreach,
                    intelligent AI calls, and seamless CRM integration with
                    <a
                      href="https://monday.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mondayLink}
                    >
                      {" "}Monday.com
                    </a>{" "}
                    helped them achieve 1100x ROI effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dual Vertical Marquees (60%) */}
          <div className={styles.rightColumn}>
            <div className={styles.rightColumnHeader}>
              <h2 className={styles.rightHeading}>See what our clients say</h2>
            </div>

            <div className={styles.marqueeContainer}>
              <div
                className={styles.verticalMarquee}
                onMouseEnter={() => setHoveredCol1(true)}
                onMouseLeave={() => setHoveredCol1(false)}
              >
                <div className={`${styles.marqueeTrack} ${hoveredCol1 ? styles.paused : ""}`}>
                  {[...firstColumn, ...firstColumn].map((t, index) => (
                    <div key={`col1-${index}`} className={styles.testimonialBox}>
                      <div className={styles.topRating}>
                        <span className={styles.ratingValue}>5.0</span>
                        <StarRating />
                      </div>
                      <div className={styles.testimonialText}>
                        <p>&quot;{t.quote}&quot;</p>
                      </div>
                      <div className={styles.footerBox}>
                        <div className={styles.footerLeft}>
                          <h4 className={styles.reviewerRole}>{t.name || "Project Manager"}</h4>
                          <p className={styles.reviewerCompany}>{t.company || "CLOUDCOMPLI"}</p>
                        </div>
                        <div className={styles.verifiedSection}>
                          <p className={styles.verifiedText}>Verified by {t.verifiedBy}</p>
                          {t.verifiedLogo && (
                            <img src={t.verifiedLogo} alt="verified logo" className={styles.verifiedLogo} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={styles.verticalMarquee}
                onMouseEnter={() => setHoveredCol2(true)}
                onMouseLeave={() => setHoveredCol2(false)}
              >
                <div className={`${styles.marqueeTrack} ${styles.reverseMarquee} ${hoveredCol2 ? styles.paused : ""}`}>
                  {[...secondColumn, ...secondColumn].map((t, index) => (
                    <div key={`col2-${index}`} className={styles.testimonialBox}>
                      <div className={styles.topRating}>
                        <span className={styles.ratingValue}>5.0</span>
                        <StarRating />
                      </div>
                      <div className={styles.testimonialText}>
                        <p>&quot;{t.quote}&quot;</p>
                      </div>
                      <div className={styles.footerBox}>
                        <div className={styles.footerLeft}>
                          <h4 className={styles.reviewerRole}>{t.name || "Project Manager"}</h4>
                          <p className={styles.reviewerCompany}>{t.company || "CLOUDCOMPLI"}</p>
                        </div>
                        <div className={styles.verifiedSection}>
                          <p className={styles.verifiedText}>Verified by {t.verifiedBy}</p>
                          {t.verifiedLogo && (
                            <img src={t.verifiedLogo} alt="verified logo" className={styles.verifiedLogo} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Video Dialog */}
        {isDialogOpen && (
          <div className={styles.dialogOverlay} onClick={() => setIsDialogOpen(false)}>
            <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.dialogVideoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/vsuDM890kmU?autoplay=1&rel=0"
                  title="Hero Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <button type="button" className={styles.dialogClose} onClick={() => setIsDialogOpen(false)} aria-label="Close video">
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

