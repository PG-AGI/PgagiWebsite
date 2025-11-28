

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
  "/images/testimonials/FOMO (3).jpg",
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
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const positionRef = useRef<number>(0); // Keep track of position in ref for animation loop

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

  // Helper to get card metrics based on screen width
  const getCardMetrics = () => {
    if (typeof window === "undefined") return { width: 480, gap: 32 };
    const width = window.innerWidth;

    if (width <= 480) {
      // Mobile: Full width minus padding (matches CSS calc(100vw - 3rem))
      // Max width is 400px
      const calculated = width - 48;
      return { width: Math.min(calculated, 400), gap: 16 };
    }
    if (width <= 768) return { width: 320, gap: 20 };
    if (width <= 1024) return { width: 380, gap: 24 };
    if (width <= 1200) return { width: 420, gap: 28 };
    return { width: 480, gap: 32 };
  };

  // Initialize carousel position
  useEffect(() => {
    setCarouselPosition(0);
    positionRef.current = 0;
  }, [testimonialImages.length]);

  // Animation loop for auto-scroll
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== 0 && !isHovered && testimonialImages.length > 0) {
        const delta = time - lastTimeRef.current;
        const speed = 0.05; // Pixels per ms

        const { width, gap } = getCardMetrics();
        const totalCardWidth = width + gap;
        const maxScroll = testimonialImages.length * totalCardWidth;

        positionRef.current += delta * speed;

        // Reset if we've scrolled past the first set of images
        if (positionRef.current >= maxScroll) {
          positionRef.current = 0;
        }

        setCarouselPosition(positionRef.current);
      }

      lastTimeRef.current = time;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, testimonialImages.length]);

  // Manual navigation
  const scrollCarousel = (direction: "left" | "right") => {
    const { width, gap } = getCardMetrics();
    const totalCardWidth = width + gap;
    const maxScroll = testimonialImages.length * totalCardWidth;

    let newPos = positionRef.current;

    if (direction === "left") {
      newPos -= totalCardWidth;
      // Wrap around logic
      if (newPos < 0) {
        // Find the equivalent position at the end
        newPos = maxScroll - totalCardWidth;
      }
    } else {
      newPos += totalCardWidth;
      if (newPos >= maxScroll) {
        newPos = 0;
      }
    }

    // Snap to nearest card
    newPos = Math.round(newPos / totalCardWidth) * totalCardWidth;

    positionRef.current = newPos;
    setCarouselPosition(newPos);
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
          {(
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

