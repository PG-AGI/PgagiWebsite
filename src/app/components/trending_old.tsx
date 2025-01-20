import { useEffect } from "react";
import Image from "next/image";
import styles from "./trending_old.module.scss";
import { trendingListOld } from "@/utils/constants";
import { useRouter } from "next/navigation";
import trend4 from '../../app/assets/trending_cards/trend_4.png';
import news1 from '@/app/assets/trending_cards/news1.svg';
import news2 from '@/app/assets/trending_cards/news2.svg';
import news3 from '@/app/assets/trending_cards/news3.svg';
import news4 from '@/app/assets/trending_cards/news4.svg';
import news5 from '@/app/assets/trending_cards/news5.svg';
export default function TrendingOld() {
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
        {trendingListOld.map((item, i) => (
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
              src={item.image}
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

            <div className={styles.storybriefContainer}>
              <p className={styles.storybrief1}>
                Steep Grind <a href="https://hirextra.com/">HireXtra.com</a> faced slow, manual recruitment.
              </p>
              <p className={styles.storybrief1}>
                We built an autonomous AI recruiter with 13 agents, transforming
                their process.
              </p>
              <p className={styles.storybrief1}>
                Tasks that once took weeks—like analyzing job descriptions,
                matching candidates, and taking interviews—are now completed in
                minutes, revolutionizing their recruitment.
              </p>
            </div>
          </div>
          <Image
            className={styles.imgTag}
            src= {news4}
            alt="Success Stories"
            fill 
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}