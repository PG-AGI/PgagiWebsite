import styles from '@/styles/components/organisms/verticalPage.module.scss';
import VerticalHero from './VerticalHero';
import VerticalIntro from './VerticalIntro';
import DeviceCloudDiagram from './DeviceCloudDiagram';
import FeatureCards from './FeatureCards';
import UseCases from './UseCases';
import ProductVisionCta from './ProductVisionCta';
import type { Vertical } from '@/data/verticals';

/**
 * Layout shell for a single vertical (e.g. AI x IoT):
 *   [global navbar] → hero → build section → shared CTA → [global footer]
 *
 * The "build" section (intro + device-to-cloud diagram) is the first block
 * from the Figma design; further sections slot in between it and the CTA as
 * their designs are supplied.
 */
export default function VerticalPage({ vertical }: { vertical: Vertical }) {
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
          <DeviceCloudDiagram />
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
