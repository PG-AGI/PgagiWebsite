import styles from '@/styles/components/organisms/verticalPage.module.scss';
import VerticalHero from './VerticalHero';
import VerticalIntro from './VerticalIntro';
import DeviceCloudDiagram from './DeviceCloudDiagram';
import FoundationLLMDiagram from './FoundationLLMDiagram';
import FeatureCards from './FeatureCards';
import UseCases from './UseCases';
import ProductVisionCta from './ProductVisionCta';
import type { BuildDiagramKey, Vertical } from '@/data/verticals';

const BUILD_DIAGRAMS: Record<BuildDiagramKey, () => JSX.Element> = {
  'device-cloud': DeviceCloudDiagram,
  'foundation-llm': FoundationLLMDiagram,
};

/**
 * Layout shell for a single vertical (e.g. AI x IoT, AI x ML):
 *   [global navbar] → hero → build section → shared CTA → [global footer]
 *
 * The "build" section (intro + an illustrated diagram, per `buildDiagram`)
 * is the first block from the Figma design; further sections slot in
 * between it and the CTA as their designs are supplied.
 */
export default function VerticalPage({ vertical }: { vertical: Vertical }) {
  const BuildDiagram = vertical.buildDiagram ? BUILD_DIAGRAMS[vertical.buildDiagram] : null;

  return (
    <div className={styles.main}>
      <VerticalHero
        title={vertical.heroTitle}
        description={vertical.heroDescription}
        ctaHref={vertical.caseStudyHref}
      />

      <section className={styles.buildSection}>
        <div className={styles.rail}>
          <VerticalIntro heading={vertical.intro.heading} body={vertical.intro.body} />
          {BuildDiagram && <BuildDiagram />}
          <FeatureCards cards={vertical.features} />
        </div>
      </section>

      <section className={styles.useCasesSection}>
        <div className={styles.rail}>
          <UseCases
            heading={vertical.useCases.heading}
            subtitle={vertical.useCases.subtitle}
            items={vertical.useCases.items}
          />
        </div>
      </section>

      <ProductVisionCta />
    </div>
  );
}
