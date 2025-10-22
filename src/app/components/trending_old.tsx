import { useEffect } from "react";
import Image from "next/image";
import styles from "./trending_old.module.scss";
import { trendingListOld } from "@/utils/constants";
import { useRouter } from "next/navigation";
import trend4 from '../../app/assets/trending_cards/trend_4.png';
import news1 from '@/app/assets/trending_cards/new_case_studies.jpg';
import news2 from '@/app/assets/trending_cards/new_blogs.jpg';
import news3 from '@/app/assets/trending_cards/new_news.jpg';
import news4 from '@/app/assets/trending_cards/news4.svg';
import news5 from '@/app/assets/trending_cards/news5.svg';

export default function TrendingOld() {
  const router = useRouter();

  const handleExpand = (title: string) => {
    switch (title) {
      case "Case Studies":
        router.push("/whatwethink#case-studies");
        break;
      case "Blogs":
        router.push("/whatwethink#blogs");
        break;
      case "AI News":
        router.push("/whatwethink#ainews");
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

  // Blog data with 3 cards matching existing functionality
  const blogPosts = [
    {
      id: 1,
      image: news1,
      title: "Case Studies",
      category: "Case Studies",
      description: "Real stories, real results — discover how our AI solutions are transforming ideas into impact through powerful success stories."
    },
    {
      id: 2,
      image: news2,
      title: "Blogs",
      category: "Blogs",
      description: "Fresh insights, expert tips, and thought-provoking perspectives — your go-to space for all things AI and innovation."
    },
    {
      id: 3,
      image: news3,
      title: "AI News",
      category: "AI News",
      description: "Stay ahead of the curve with the latest breakthroughs, trends, and updates shaping the future of artificial intelligence."
    }
  ];

  return (
    <section id="trending" className={styles.trending}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.blogLabel}>{'Trending'}</h3>
          <h2 className={styles.mainTitle}>
            Uncover the ideas, tools and trends shaping today&apos;s most impactful in AI World.
          </h2>
        </div>
        
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={styles.blogCard}
              onClick={() => handleExpand(post.category)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.blogImage}
                />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDescription}>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}