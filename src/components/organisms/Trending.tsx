"use client";
import { useEffect } from "react";
import Image from "next/image";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/organisms/trending.module.scss";
import { trendingList, trendingList2 } from "@/utils/constants";
import { useRouter } from "next/navigation";
import ROUTES from "@/constants/routes";
import trendingText from "@/constants/uiText/trending.json";

export default function Trending() {
  const router = useRouter();

  const handleExpand = (title: string) => {
    switch (title) {
      case "Case Studies":
        router.push(ROUTES.WHAT_WE_THINK_CASE_STUDIES);
        break;
      case "Blogs":
        router.push(ROUTES.WHAT_WE_THINK_BLOGS);
        break;
      case "AI News":
        router.push(ROUTES.WHAT_WE_THINK_AINEWS);
        break;
      default:
        console.error(trendingText.unknownUrlError);
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
    <>
      <section className={styles.trending}>
        <h3>{trendingText.heading}</h3>
        <div className={styles.trendingList}>
          {trendingList.map((item, i) => (
            <div
              key={i}
              className={`${styles.trendingItem} ${i === 1 ? styles.trendingWide : ''}`}
              onClick={() => handleExpand(item.title)}
            >
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <h3 className={styles.breafHead}>{item.briefHead}</h3>
              <p className={styles.brief}>{item.brief}</p>
              <div className={`${styles.imageContainer} ${i === 1 ? styles.imageContainerWide : ''}`}>
                <Image
                  className={styles.imgTag}
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.trendingList}>
          {trendingList2.map((item, i) => (
            <div
              key={i}
              className={`${styles.trendingItem} ${i === 1 ? styles.trendingWide : ''}`}
              onClick={() => handleExpand(item.title)}
            >
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <h3 className={styles.breafHead}>{trendingText.fallbackBriefHead}</h3>
              <p className={styles.brief}>{item.brief}</p>
              <div className={`${styles.imageContainer} ${i === 1 ? styles.imageContainerWide : ''}`}>
                <Image
                  className={styles.imgTag}
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className={styles.trendingMobile}>
        <h3>{trendingText.heading}</h3>
        <div className={styles.trendingMobileList}>
          {[...trendingList, ...trendingList2].map((item, i) => (
            <div
              key={i}
              className={`${styles.trendingItem} ${i === 1 ? styles.trendingWide : ''}`}
              onClick={() => handleExpand(item.title)}
            >
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className={`${styles.imageContainer} ${i === 1 ? styles.imageContainerWide : ''}`}>
                <Image
                  className={styles.imgTag}
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
