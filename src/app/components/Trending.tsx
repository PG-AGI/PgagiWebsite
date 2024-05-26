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
      <h3>{"Here's What's Trending!"}</h3>
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
