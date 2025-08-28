"use client";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import StatsSection from "./components/StatsSection";
import styles from "./page.module.scss";
import Segment from "./components/base/Segment";
import GlareBackground from "./components/base/GlareBackground";
import { segmentList } from "@/utils/constants";
import Calendly from "./components/Calendly";
import { Lottie } from "xtreme-ui";
import { useEffect, useRef, useCallback } from "react";
//import { motion } from 'framer-motion';
import TrendingOld from "./components/trending_old";
import ExpertiseSection from "./components/ExpertiseSection";
import FAQ from "./components/FAQ";
import VideoTestimonial from "./components/VideoTestimonial";
import TestimonialCarousel from "./components/InfiniteTestimonial";
import ScrollIndicator from "./components/ScrollIndicator";
import SmoothScrollNav from "./components/SmoothScrollNav";
import LandingProjects from "./components/LandingProjects";
import Process from "./components/Process";

export default function Home() {
  const segmentRef = useRef<HTMLDivElement>(null);
  const lottieWindowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const isScrollingRef = useRef(false);

  // Throttled scroll handler using RAF
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    rafRef.current = requestAnimationFrame(() => {
      if (!segmentRef.current || !lottieWindowRef.current) {
        isScrollingRef.current = false;
        return;
      }

      const scroll = window.scrollY;
      const rectSegment = segmentRef.current.getBoundingClientRect();

      const offset = Math.round(rectSegment.top + scroll);
      const blob = document.querySelector(`.${styles.blob}`) as HTMLDivElement;

      if (!blob) {
        isScrollingRef.current = false;
        return;
      }

      const segmentSectionHeight = segmentRef.current.scrollHeight * 2;
      const windowHeight = window.innerHeight;

      const scrollY = (scroll - offset) / windowHeight;
      const percent = (scrollY - Math.floor(scrollY)) * 100;
      let pos;

      if (
        scroll >= offset &&
        scroll <= offset + segmentSectionHeight - windowHeight
      ) {
        if (scrollY <= 1) {
          pos = 50 - percent / 2;
        } else if (Math.floor(scrollY % 2) === 0) {
          pos = 100 - percent;
        } else {
          pos = percent;
        }
        blob.style.transform = `translate(${Math.min(pos, 120)}%, -50%)`;
      } else if (scroll > offset + segmentSectionHeight - windowHeight) {
        blob.style.transform = `translate(120%, -50%)`;
      }

      isScrollingRef.current = false;
    });
  }, []);

  useEffect(() => {
    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <main className={styles.main}>
      <ScrollIndicator />
      {/* <SmoothScrollNav 
				sections={[
					{ id: 'landing', label: 'Home', offset: 0 },
					{ id: 'testimonials-section', label: 'Testimonials', offset: 80 },
					{ id: 'partners', label: 'Partners', offset: 80 },
					{ id: 'trending', label: 'Trending', offset: 80 },
					{ id: 'segment', label: 'Services', offset: 80 },
				]}
			/> */}
      <Landing />
      {/* <Partners /> */}
      {/* <StatsSection /> */}

      {/* <LandingProjects /> */}
      <Process />

      {/* <ExpertiseSection /> */}
      {/* causing overflow issue */}
      {/* <VideoTestimonial /> */}
      {/* <FAQ /> */}
      {/* <TrendingOld /> */}

      {/* <Calendly /> */}
    </main>
  );
}
