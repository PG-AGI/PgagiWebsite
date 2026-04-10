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

export default function Home() {
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
