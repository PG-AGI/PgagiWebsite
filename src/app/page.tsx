"use client";
import { useEffect } from "react";
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
const ScrollIndicator = dynamic(() => import("@/components/atoms/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

// Preload all dynamic section chunks during browser idle time so they are
// already parsed before the user scrolls to them — eliminates scroll jank
// caused by on-demand JS fetching + parsing mid-scroll.
function usePreloadSections() {
  useEffect(() => {
    // First 2 sections are immediately below the fold — preload them right away
    // so the skeleton never shows when the user scrolls down quickly.
    void import("@/components/organisms/NewPage");
    void import("@/components/organisms/VisionSystemSection");

    // The rest are deeper — preload during browser idle time
    const preloadRest = () => {
      void import("@/components/organisms/SocialOrbitSection");
      void import("@/components/organisms/SolutionFitBreakdownSection");
      void import("@/components/organisms/WhatMakesUsDifferentSection");
      void import("@/components/organisms/MeasurableImpactSection");
      void import("@/components/organisms/EcosystemSection");
      void import("@/components/organisms/ProcessTimelineSection");
      void import("@/components/organisms/RevenueSection");
      void import("@/components/organisms/ConcentricEllipseSection");
      void import("@/components/organisms/CaseStudiesSection");
      void import("@/components/organisms/Customers");
      void import("@/components/organisms/BuildEcosystemSection");
    };

    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(preloadRest, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(preloadRest, 500);
      return () => clearTimeout(id);
    }
  }, []);
}

export default function Home() {
  usePreloadSections();

  return (
    <main className={styles.main}>
      <ScrollIndicator />
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
    </main>
  );
}
