import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./trending.module.scss";
import { trendingList, trendingList2 } from "@/utils/constants";
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
    <>
      <section className={styles.trending}>
        <h3>{"What's Trending!"}</h3>
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
                  layout='fill'
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
              <h3 className={styles.breafHead}>Test head</h3>
              <p className={styles.brief}>{item.brief}</p>
              <div className={`${styles.imageContainer} ${i === 1 ? styles.imageContainerWide : ''}`}>
                <Image
                  className={styles.imgTag}
                  src={item.image}
                  alt={item.title}
                  layout='fill'
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className={styles.trendingMobile}>
        <h3>{"What's Trending!"}</h3>
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
                  layout='fill'
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
