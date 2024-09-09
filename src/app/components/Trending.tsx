// // // import { useRef, useEffect } from "react";
// // // import Image from "next/image";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// // // import styles from "./trending.module.scss";
// // // import { trendingList } from "@/utils/constants";

// // // export default function Trending() {
// // //   const trendingRef = useRef<HTMLDivElement>(null);

// // //   const handleExpand = (url: string | undefined) => {
// // //     if (url) {
// // //       window.location.href = url;
// // //     } else {
// // //       console.error("URL is not defined");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     const scrollInterval = setInterval(() => {
// // //       if (trendingRef.current) {
// // //         const { scrollLeft, scrollWidth, clientWidth } = trendingRef.current;
// // //         const maxScrollLeft = scrollWidth - clientWidth;

// // //         // Scroll by a fixed number of pixels (e.g., 1 pixel)
// // //         trendingRef.current.scrollLeft += 1;

// // //         // Reset scroll position to the beginning when reaching the end
// // //         if (scrollLeft >= maxScrollLeft) {
// // //           trendingRef.current.scrollLeft = 0;
// // //         }
// // //       }
// // //     }, 30); // Adjust interval duration for speed

// // //     // Cleanup interval on component unmount
// // //     return () => clearInterval(scrollInterval);
// // //   }, []);

// // //   return (
// // //     <section className={styles.trending}>
// // //       <h3>{"What's Trending!"}</h3>
// // //       <div className={styles.trendingList} ref={trendingRef}>
// // //         {trendingList.map((item, i) => (
// // //           <div key={i} className={styles.trendingItem}>
// // //             <div className={styles.content}>
// // //               <h3>{item.title}</h3>
// // //               <p>{item.description}</p>
// // //               <p className={styles.brief}>{item.brief}</p>
// // //               <button className={styles.expandButton} onClick={() => handleExpand(item.url)}>
// // //                 <FontAwesomeIcon icon={faArrowRight} />
// // //               </button>
// // //             </div>
// // //             <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { useRef, useEffect } from "react";
// // import Image from "next/image";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// // import styles from "./trending.module.scss";
// // import { trendingList } from "@/utils/constants";

// // export default function Trending() {
// //   const trendingRef = useRef<HTMLDivElement>(null);

// //   const handleExpand = (url: string | undefined) => {
// //     if (url) {
// //       window.location.href = url;
// //     } else {
// //       console.error("URL is not defined");
// //     }
// //   };

// //   useEffect(() => {
// //     const trendingElement = trendingRef.current;
// //     if (!trendingElement) return;

// //     let isHovered = false;
// //     let scrollSpeed = 0.5; // Adjust scroll speed here

// //     const scrollHandler = () => {
// //       if (isHovered) return;

// //       // Scroll the container by a fixed amount
// //       trendingElement.scrollLeft += scrollSpeed;

// //       // If the scroll is past the first list, reset to the start
// //       if (trendingElement.scrollLeft >= trendingElement.scrollWidth / 2) {
// //         trendingElement.scrollLeft = 0;
// //       }

// //       requestAnimationFrame(scrollHandler);
// //     };

// //     const startScrolling = () => {
// //       requestAnimationFrame(scrollHandler);
// //     };

// //     const stopScrolling = () => {
// //       isHovered = true;
// //     };

// //     const resumeScrolling = () => {
// //       isHovered = false;
// //     };

// //     trendingElement.addEventListener("mouseenter", stopScrolling);
// //     trendingElement.addEventListener("mouseleave", resumeScrolling);
// //     trendingElement.addEventListener("touchstart", stopScrolling); // Mobile touch support
// //     trendingElement.addEventListener("touchend", resumeScrolling);

// //     startScrolling();

// //     return () => {
// //       trendingElement.removeEventListener("mouseenter", stopScrolling);
// //       trendingElement.removeEventListener("mouseleave", resumeScrolling);
// //       trendingElement.removeEventListener("touchstart", stopScrolling);
// //       trendingElement.removeEventListener("touchend", resumeScrolling);
// //     };
// //   }, []);

// //   return (
// //     <section className={styles.trending}>
// //       <h3>{"What's Trending!"}</h3>
// //       <div className={styles.trendingListWrapper}>
// //         <div className={styles.trendingList} ref={trendingRef}>
// //           {/* Duplicate the list to allow seamless scrolling */}
// //           {[...trendingList, ...trendingList].map((item, i) => (
// //             <div key={i} className={styles.trendingItem}>
// //               <div className={styles.content}>
// //                 <h3>{item.title}</h3>
// //                 <p>{item.description}</p>
// //                 <p className={styles.brief}>{item.brief}</p>
// //                 <button
// //                   className={styles.expandButton}
// //                   onClick={() => handleExpand(item.url)}
// //                 >
// //                   <FontAwesomeIcon icon={faArrowRight} />
// //                 </button>
// //               </div>
// //               <Image
// //                 className={styles.imgTag}
// //                 src={item.image.src}
// //                 alt={item.title}
// //                 layout="fill"
// //                 objectFit="cover"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import styles from "./trending.module.scss";
// import { trendingList } from "@/utils/constants";

// export default function Trending() {
//   const trendingRef = useRef<HTMLDivElement>(null);

//   const handleExpand = (url: string | undefined) => {
//     if (url) {
//       window.location.href = url;
//     } else {
//       console.error("URL is not defined");
//     }
//   };

//   useEffect(() => {
//     const trendingElement = trendingRef.current;
//     if (!trendingElement) return;

//     let isHovered = false;

//     const handleMouseEnter = () => {
//       isHovered = true;
//       trendingElement.style.animationPlayState = "paused"; // Pause the animation on hover
//     };

//     const handleMouseLeave = () => {
//       isHovered = false;
//       trendingElement.style.animationPlayState = "running"; // Resume the animation when not hovering
//     };

//     trendingElement.addEventListener("mouseenter", handleMouseEnter);
//     trendingElement.addEventListener("mouseleave", handleMouseLeave);

//     // For mobile devices, we'll handle touch events
//     trendingElement.addEventListener("touchstart", handleMouseEnter);
//     trendingElement.addEventListener("touchend", handleMouseLeave);

//     return () => {
//       trendingElement.removeEventListener("mouseenter", handleMouseEnter);
//       trendingElement.removeEventListener("mouseleave", handleMouseLeave);
//       trendingElement.removeEventListener("touchstart", handleMouseEnter);
//       trendingElement.removeEventListener("touchend", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className={styles.trending}>
//       <h3>{"What's Trending!"}</h3>
//       <div className={styles.trendingListWrapper}>
//         <div className={styles.trendingList} ref={trendingRef}>
//           {/* Duplicate the list to allow seamless scrolling */}
//           {trendingList.concat(trendingList).map((item, i) => (
//             <div key={i} className={styles.trendingItem}>
//               <div className={styles.content}>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//                 <p className={styles.brief}>{item.brief}</p>
//                 <button
//                   className={styles.expandButton}
//                   onClick={() => handleExpand(item.url)}
//                 >
//                   <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//               </div>
//               <Image
//                 className={styles.imgTag}
//                 src={item.image.src}
//                 alt={item.title}
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./trending.module.scss";
import { trendingList } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function Trending() {
  const router = useRouter();

  const handleExpand = (title: string) => {
    switch (title) {
      case "Case Studies":
        router.push("/blogs#case-studies");
        break;
      case "Blogs":
        router.push("/blogs#blogs");
        break;
      case "AI News":
        router.push("/blogs#ainews");
        break;
      default:
        console.error("URL is not defined");
    }
  };

  // This will handle scrolling after the route change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <section className={styles.trending}>
      <h3>{"What's Trending!"}</h3>
      <div className={styles.trendingList}>
        {trendingList.map((item, i) => (
          <div
            key={i}
            className={styles.trendingItem}
            onClick={() => handleExpand(item.title)}
          >
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className={styles.brief}>{item.brief}</p>
              {/*<button className={styles.expandButton}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>*/}
            </div>
            <Image
              className={styles.imgTag}
              src={item.image.src}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}

        <div
          className={styles.trendingItem}
          onClick={() => handleExpand("Success Stories")}
        >
          <div className={styles.content}>
            <h3>Success Stories</h3>
            <p>Transformative Journeys and Breakthroughs</p>
            <p className={styles.storybrief}>
              Steep Grind Hire Extra faced the challenge of sorting through
              countless profiles and dealing with a slow recruitment process. We
              envisioned a bold solution: an autonomous AI recruiter powered by
              13 agents to streamline the hiring journey. \n\nWhat once took
              weeks was transformed into minutes, as job descriptions were
              analyzed, candidates matched, and interviews scheduled—without
              human intervention. The recruitment process became faster and more
              efficient. \n\nWith determination, research, and numerous demos,
              we revolutionized recruitment, setting new standards for precision
              and efficiency in hiring.
            </p>
          </div>
          <Image
            className={styles.imgTag}
            src="https://i.postimg.cc/0N4WqqpX/reel-photo-and-video.png"
            alt="Success Stories"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
