"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Customers.module.scss";

const quoteText =
  "They followed through on every single thing that they said they would, which made our working experience all the more seamless.";

const testimonialYouTubeUrls = [
  "https://www.youtube.com/watch?v=vsuDM890kmU",
  "https://youtu.be/6xaFA25-cc8?si=dlXudFrTusBX7aaJ",
];

const TOTAL_CARDS = 6;

const layout: Array<"video" | "quote"> = Array.from(
  { length: TOTAL_CARDS },
  (_, index): "video" | "quote" => {
    const videoCardIndex = Math.floor(index / 2);
    const isVideoSlot = index % 2 === 0;
    return isVideoSlot && videoCardIndex < testimonialYouTubeUrls.length
      ? "video"
      : "quote";
  },
);

const extractYouTubeId = (urlOrId: string): string => {
  if (!urlOrId.includes("/") && !urlOrId.includes("=")) {
    return urlOrId;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = urlOrId.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return urlOrId;
};

const getEmbedUrl = (urlOrId: string) => {
  const videoId = extractYouTubeId(urlOrId);
  return `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
};

const Customers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = gridRef.current;
    if (!scroller) return;

    let frame: number | null = null;

    const updateActiveSlide = () => {
      frame = null;
      if (window.innerWidth > 768) return;

      const cards = Array.from(
        scroller.querySelectorAll<HTMLElement>("[data-customer-card='true']"),
      );
      if (!cards.length) return;

      const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex(nearestIndex);
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveSlide);
    };

    updateActiveSlide();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={styles.section} id="customers">
      <div className={styles.container}>
        <h2 className={styles.title}>Words from our customers</h2>

        <div ref={gridRef} className={styles.grid}>
          {layout.map((type, index) => {
            if (type === "video") {
              const videoCardIndex = Math.floor(index / 2);
              const embedUrl = getEmbedUrl(testimonialYouTubeUrls[videoCardIndex]);

              return (
                <article
                  key={`video-${index}`}
                  className={`${styles.card} ${styles.videoCard}`}
                  data-customer-card="true"
                >
                  <iframe
                    className={styles.video}
                    src={embedUrl}
                    title={`Customer testimonial video ${videoCardIndex + 1}`}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <span className={styles.playButton} aria-hidden>
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </article>
              );
            }

            return (
              <article
                key={`quote-${index}`}
                className={`${styles.card} ${styles.quoteCard}`}
                data-customer-card="true"
              >
                <p className={styles.quote}>&quot;{quoteText}&quot;</p>

                <div className={styles.footer}>
                  <div className={styles.person}>
                    <div className={styles.avatar}>
                      <Image
                        src="/assets/team/member1.png"
                        alt="Customer profile"
                        fill
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <p className={styles.name}>Hemma Watson</p>
                      <p className={styles.role}>Chief executive officer</p>
                    </div>
                  </div>

                  <span className={styles.logoBadge}>PG</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.pagination} aria-hidden>
          {layout.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
