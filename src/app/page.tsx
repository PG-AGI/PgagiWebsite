import Landing from "@/components/organisms/Landing";
import styles from "@/styles/app/page.module.scss";
import dynamic from "next/dynamic";
import LazySection from "@/components/atoms/LazySection";
import { getRecentLaunchProjects } from "@/services/getRecentLaunchProjects";

// ISR: prerender at build, refresh in the background every hour. Keeps the
// Recent Launch MongoDB query out of the per-request critical path.
export const revalidate = 3600;

// ScrollIndicator — UI-only, no SSR needed
const ScrollIndicator = dynamic(() => import("@/components/atoms/ScrollIndicator"), {
  ssr: false,
  loading: () => null,
});

// ── First-visible sections (priority order) ──
const TrustedPartnersSection = dynamic(() => import("@/components/organisms/TrustedPartnersSection"), { ssr: false });
const RecentLaunchSection = dynamic(() => import("@/components/organisms/RecentLaunchSection"), { ssr: false });
const Customers = dynamic(() => import("@/components/organisms/Customers"), { ssr: false });
const WhatMakesUsDifferentSection = dynamic(() => import("@/components/organisms/WhatMakesUsDifferentSection"), { ssr: false });
const MeasurableImpactSection = dynamic(() => import("@/components/organisms/MeasurableImpactSection"), { ssr: false });
const ConcentricEllipseSection = dynamic(() => import("@/components/organisms/ConcentricEllipseSection"), { ssr: false });

// ── Remaining sections ──
const StatsSection = dynamic(() => import("@/components/organisms/NewPage"), { ssr: false });
const VisionSystemSection = dynamic(() => import("@/components/organisms/VisionSystemSection"), { ssr: false });
const SocialOrbitSection = dynamic(() => import("@/components/organisms/SocialOrbitSection"), { ssr: false });
const ProcessTimelineSection = dynamic(() => import("@/components/organisms/ProcessTimelineSection"), { ssr: false });
const RevenueSection = dynamic(() => import("@/components/organisms/RevenueSection"), { ssr: false });
const BuildEcosystemSection = dynamic(() => import("@/components/organisms/BuildEcosystemSection"), { ssr: false });
const SolutionFitBreakdownSection = dynamic(() => import("@/components/organisms/SolutionFitBreakdownSection"), { ssr: false });

export default async function Home() {
  const recentLaunch = await getRecentLaunchProjects();

  return (
    <main className={styles.main}>
      <ScrollIndicator />
      <Landing />
      <div className={styles.sectionsWrapper}>

        {/* ── First visible ── */}
        <LazySection minHeight="500px" rootMargin="100px">
          <TrustedPartnersSection />
        </LazySection>
        <LazySection minHeight="1200px">
          <RecentLaunchSection projects={recentLaunch} />
        </LazySection>
        <LazySection minHeight="400px">
          <Customers />
        </LazySection>
        <LazySection minHeight="900px">
          <WhatMakesUsDifferentSection />
        </LazySection>
        <LazySection minHeight="600px">
          <MeasurableImpactSection />
        </LazySection>

        {/* ── Remaining ── */}
        <LazySection minHeight="600px">
          <StatsSection />
        </LazySection>
        <LazySection minHeight="800px">
          <VisionSystemSection />
        </LazySection>
        <LazySection minHeight="600px">
          <SocialOrbitSection />
        </LazySection>
        <LazySection minHeight="820px">
          <ProcessTimelineSection />
        </LazySection>
        <LazySection minHeight="800px" id="revenue-section-anchor">
          <RevenueSection />
        </LazySection>
        <LazySection minHeight="700px">
          <BuildEcosystemSection />
        </LazySection>
        <LazySection minHeight="600px">
          <SolutionFitBreakdownSection />
        </LazySection>

        {/* ── Last section — CTA ── */}
        <LazySection minHeight="600px">
          <ConcentricEllipseSection />
        </LazySection>

      </div>
    </main>
  );
}
