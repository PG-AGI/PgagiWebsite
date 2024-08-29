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


import { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./trending.module.scss";
import { trendingList } from "@/utils/constants";

export default function Trending() {
  const trendingRef = useRef<HTMLDivElement>(null);

  const handleExpand = (url: string | undefined) => {
    if (url) {
      window.location.href = url;
    } else {
      console.error("URL is not defined");
    }
  };

  return (
    <section className={styles.trending}>
      <h3>{"What's Trending!"}</h3>
      <div className={styles.trendingList} ref={trendingRef}>
        {trendingList.map((item, i) => (
          <div key={i} className={styles.trendingItem}>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className={styles.brief}>{item.brief}</p>
              <button className={styles.expandButton} onClick={() => handleExpand(item.url)}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
