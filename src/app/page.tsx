"use client";
import Landing from "./components/Landing";
import styles from "./page.module.scss";
// import Segment from "./components/base/Segment";
// import GlareBackground from "./components/base/GlareBackground";
// import { segmentList } from "@/utils/constants";
import { useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import LazyOnVisible from "./components/LazyOnVisible";

// Preload critical imports for faster loading
// import "three";
// import "postprocessing";
//import { motion } from 'framer-motion';

// Partners is now rendered inside Landing.tsx (pinned to hero bottom)
const StatsSection = dynamic(() => import("./components/NewPage"), {
  loading: () => <div>Loading...</div>,
});
const VisionSystemSection = dynamic(
  () => import("./components/VisionSystemSection"),
  {
    loading: () => <div>Loading...</div>,
  },
);
const SocialOrbitSection = dynamic(
  () => import("./components/SocialOrbitSection"),
  {
    loading: () => <div>Loading...</div>,
  },
);
const EcosystemSection = dynamic(
  () => import("./components/EcosystemSection"),
  {
    loading: () => <div>Loading...</div>,
  },
);
const ProcessTimelineSection = dynamic(
  () => import("./components/ProcessTimelineSection"),
  {
    loading: () => <div>Loading...</div>,
  },
);
const RevenueSection = dynamic(() => import("./components/RevenueSection"), {
  loading: () => <div>Loading...</div>,
});
const BuildEcosystemSection = dynamic(
  () => import("./components/BuildEcosystemSection"),
  {
    loading: () => <div>Loading...</div>,
  },
);
const LandingProjects = dynamic(() => import("./components/LandingProjects"), {
  loading: () => <div>Loading...</div>,
});
const ExpertiseSection = dynamic(
  () => import("./components/ExpertiseSection"),
  { loading: () => <div>Loading...</div> },
);
const VideoTestimonial = dynamic(
  () => import("./components/VideoTestimonial"),
  { loading: () => <div>Loading...</div> },
);
const FAQ = dynamic(() => import("./components/FAQ"), {
  loading: () => <div>Loading...</div>,
});
const TrendingOld = dynamic(() => import("./components/trending_old"), {
  loading: () => <div>Loading...</div>,
});
const Calendly = dynamic(() => import("./components/Calendly"), {
  loading: () => <div style={{ minHeight: '400px' }}>Loading...</div>,
});
const ScrollIndicator = dynamic(() => import("./components/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

const LazySection = ({ children, height = "600px" }: { children: React.ReactNode; height?: string }) => (
  <div style={{ minHeight: height }}>
    <LazyOnVisible rootMargin="300px">
      {children}
    </LazyOnVisible>
  </div>
);

export default function Home() {
  const segmentRef = useRef<HTMLDivElement>(null);
  const lottieWindowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const isScrollingRef = useRef(false);

  // Throttled scroll handler using RAF removed in favor of CSS or GSAP if needed
  // For the blob animation, we can use simple CSS or a lighter GSAP implementation if critical
  useEffect(() => {
    if (!segmentRef.current) return;
    
    // Using GSAP for the blob animation is smoother and more efficient
    const blob = document.querySelector(`.${styles.blob}`) as HTMLDivElement;
    if (!blob) return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        
        const segmentSectionHeight = segmentRef.current!.scrollHeight * 2;
        
        ScrollTrigger.create({
          trigger: segmentRef.current,
          start: "top center",
          end: `+=${segmentSectionHeight}`,
          onUpdate: (self) => {
            const pos = self.progress * 100;
            gsap.to(blob, {
              x: `${Math.min(pos, 100)}%`,
              y: "-50%",
              duration: 0.1,
              overwrite: "auto"
            });
          }
        });
      });
    });
  }, []);

  // Preload critical Hyperspeed dependencies immediately
  // useEffect(() => {
  // 	// Start loading Three.js and postprocessing as soon as possible
  // 	const preloadHyperspeedDeps = async () => {
  // 		try {
  // 			await Promise.all([
  // 				import('three'),
  // 				import('postprocessing')
  // 			]);
  // 		} catch (error) {
  // 			console.warn('Failed to preload Hyperspeed dependencies:', error);
  // 		}
  // 	};

  // 	preloadHyperspeedDeps();
  // }, []);

  // useEffect(() => {
  // 	if (typeof window === 'undefined') return;

  // const preload = () => {
  // 	const components = [
  // 		Partners,
  // 		StatsSection,
  // 		Process,
  // 		LandingProjects,
  // 		ExpertiseSection,
  // 		VideoTestimonial,
  // 		FAQ,
  // 		TrendingOld,
  // 		Calendly,
  // 		ScrollIndicator,
  // 	];

  // 	components.forEach((component) => {
  // 		(component as any)?.preload?.();
  // 	});
  // };

  // let idleHandle: number | null = null;
  // let timeoutHandle: number | null = null;

  // const requestIdle = (window as any).requestIdleCallback?.bind(window);
  // const cancelIdle = (window as any).cancelIdleCallback?.bind(window);

  // if (typeof requestIdle === 'function') {
  // 	idleHandle = requestIdle(preload, { timeout: 1000 });
  // } else {
  // 	timeoutHandle = window.setTimeout(preload, 300);
  // }

  // 	return () => {
  // 		// if (idleHandle !== null && typeof cancelIdle === 'function') {
  // 		// 	cancelIdle(idleHandle);
  // 		// }
  // 		// if (timeoutHandle !== null) {
  // 		// 	window.clearTimeout(timeoutHandle);
  // 		// }
  // 	};
  // }, []);

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
      <StatsSection />
      <VisionSystemSection />
      <SocialOrbitSection />
      <EcosystemSection />
      <ProcessTimelineSection />
      <RevenueSection />
      <BuildEcosystemSection />
      <VideoTestimonial />
      <LandingProjects />
      <ExpertiseSection />
      <FAQ />
      <TrendingOld />
      <Calendly />
      {/* <LazyOnVisible><Partners /></LazyOnVisible>
			<LazyOnVisible><StatsSection /></LazyOnVisible>
			<LazyOnVisible><VideoTestimonial /></LazyOnVisible>
			<LazyOnVisible><Process /></LazyOnVisible>
			<LazyOnVisible><LandingProjects/></LazyOnVisible>
			<LazyOnVisible><ExpertiseSection /></LazyOnVisible>
			{/* <LazyOnVisible><VideoTestimonial /></LazyOnVisible> 
			<LazyOnVisible><FAQ /></LazyOnVisible>
			<LazyOnVisible><TrendingOld/></LazyOnVisible>
			<LazyOnVisible><Calendly /></LazyOnVisible> */}
    </main>
  );
}
