"use client";
import Landing from "./components/Landing";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";

/* ── Lightweight shimmer placeholder shown while each section loads ── */
const SectionSkeleton = ({ height = '80vh', lines = 3 }: { height?: string; lines?: number }) => (
  <div style={{ minHeight: height, padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="skeleton-section"
        style={{
          height: i === 0 ? '2.5rem' : '100%',
          flex: i > 0 ? 1 : undefined,
          opacity: 1 - i * 0.15,
          borderRadius: '10px',
        }}
      />
    ))}
  </div>
);

// Preload critical imports for faster loading
// import "three";
// import "postprocessing";
//import { motion } from 'framer-motion';

// Partners is now rendered inside Landing.tsx (pinned to hero bottom)
const StatsSection = dynamic(() => import("./components/NewPage"), {
  ssr: false,
  loading: () => <SectionSkeleton height="80vh" lines={3} />,
});
const VisionSystemSection = dynamic(
  () => import("./components/VisionSystemSection"),
  {
    ssr: false,
    loading: () => <SectionSkeleton height="100vh" lines={4} />,
  },
);
const SocialOrbitSection = dynamic(
  () => import("./components/SocialOrbitSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const SolutionFitBreakdownSection = dynamic(
  () => import("./components/SolutionFitBreakdownSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const WhatMakesUsDifferentSection = dynamic(
  () => import("./components/WhatMakesUsDifferentSection"),
  {
    loading: () => <SectionSkeleton height="900px" lines={4} />,
  },
);
const MeasurableImpactSection = dynamic(
  () => import("./components/MeasurableImpactSection"),
  {
    ssr: false,
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const EcosystemSection = dynamic(
  () => import("./components/EcosystemSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const ProcessTimelineSection = dynamic(
  () => import("./components/ProcessTimelineSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={2} />,
  },
);
const RevenueSection = dynamic(() => import("./components/RevenueSection"), {
  ssr: false,
  loading: () => <SectionSkeleton height="100vh" lines={4} />,
});
const ConcentricEllipseSection = dynamic(
  () => import("./components/ConcentricEllipseSection"),
  {
    loading: () => <SectionSkeleton height="500px" lines={2} />,
  },
);
const CaseStudiesSection = dynamic(
  () => import("./components/CaseStudiesSection"),
  {
    ssr: false,
    loading: () => <SectionSkeleton height="600px" lines={3} />,
  },
);
const Customers = dynamic(() => import("./components/Customers"), {
  loading: () => <SectionSkeleton height="400px" lines={2} />,
});
const BuildEcosystemSection = dynamic(
  () => import("./components/BuildEcosystemSection"),
  {
    loading: () => <SectionSkeleton height="600px" lines={3} />,
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
      <TrendingOld />
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
