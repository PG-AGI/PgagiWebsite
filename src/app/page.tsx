"use client";
import Landing from "@/components/organisms/Landing";
import styles from "@/styles/app/page.module.scss";
import dynamic from "next/dynamic";

/* ── Lightweight shimmer placeholder shown while each section loads ── */
const SectionSkeleton = ({ height = '80vh', lines = 3 }: { height?: string; lines?: number }) => (
  <div className={`${styles.sectionSkeleton} ${styles[`skeletonHeight${height.replace(/[^a-zA-Z0-9]/g, "")}`] ?? styles.skeletonHeight80vh}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`skeleton-section ${i > 0 ? styles.skeletonLineBody : styles.skeletonLineTitle} ${styles[`skeletonOpacity${i}`] ?? ""}`}
      />
    ))}
  </div>
);

// Preload critical imports for faster loading
// import "three";
// import "postprocessing";
//import { motion } from 'framer-motion';

// Partners is now rendered inside Landing.tsx (pinned to hero bottom)
const StatsSection = dynamic(() => import("@/components/organisms/NewPage"), {
  ssr: false,
  loading: () => <SectionSkeleton height="80vh" lines={3} />,
});
const VisionSystemSection = dynamic(
  () => import("@/components/organisms/VisionSystemSection"),
  {
    ssr: false,
    loading: () => <SectionSkeleton height="100vh" lines={4} />,
  },
);
const SocialOrbitSection = dynamic(
  () => import("@/components/organisms/SocialOrbitSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const SolutionFitBreakdownSection = dynamic(
  () => import("@/components/organisms/SolutionFitBreakdownSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const WhatMakesUsDifferentSection = dynamic(
  () => import("@/components/organisms/WhatMakesUsDifferentSection"),
  {
    loading: () => <SectionSkeleton height="900px" lines={4} />,
  },
);
const MeasurableImpactSection = dynamic(
  () => import("@/components/organisms/MeasurableImpactSection"),
  {
    ssr: false,
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const EcosystemSection = dynamic(
  () => import("@/components/organisms/EcosystemSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const ProcessTimelineSection = dynamic(
  () => import("@/components/organisms/ProcessTimelineSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={2} />,
  },
);
const RevenueSection = dynamic(() => import("@/components/organisms/RevenueSection"), {
  ssr: false,
  loading: () => <SectionSkeleton height="100vh" lines={4} />,
});
const ConcentricEllipseSection = dynamic(
  () => import("@/components/organisms/ConcentricEllipseSection"),
  {
    loading: () => <SectionSkeleton height="500px" lines={2} />,
  },
);
const CaseStudiesSection = dynamic(
  () => import("@/components/organisms/CaseStudiesSection"),
  {
    ssr: false,
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const Customers = dynamic(() => import("@/components/organisms/Customers"), {
  loading: () => <SectionSkeleton height="400px" lines={2} />,
});
const BuildEcosystemSection = dynamic(
  () => import("@/components/organisms/BuildEcosystemSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const LandingProjects = dynamic(() => import("@/components/organisms/LandingProjects"), {
  loading: () => <div>Loading...</div>,
});
const ExpertiseSection = dynamic(
  () => import("@/components/organisms/ExpertiseSection"),
  { loading: () => <div>Loading...</div> },
);
const VideoTestimonial = dynamic(
  () => import("@/components/organisms/VideoTestimonial"),
  { loading: () => <div>Loading...</div> },
);
const FAQ = dynamic(() => import("@/components/organisms/FAQ"), {
  loading: () => <div>Loading...</div>,
});
const Calendly = dynamic(() => import("@/components/organisms/Calendly"), {
  loading: () => <div className={styles.loadingBlock}>Loading...</div>,
});
const ScrollIndicator = dynamic(() => import("@/components/organisms/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
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
      <MeasurableImpactSection />
      <BuildEcosystemSection />
      <SolutionFitBreakdownSection />
      <CaseStudiesSection />
      <Customers />
      <WhatMakesUsDifferentSection />
      <ConcentricEllipseSection />
      {/* <VideoTestimonial />
      <LandingProjects />
      <ExpertiseSection />
      <FAQ />
      <Calendly /> */}
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
