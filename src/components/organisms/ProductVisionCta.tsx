import styles from '@/styles/components/organisms/productVisionCta.module.scss';
import EXTERNAL_LINKS from '@/constants/externalLinks';

type ProductVisionCtaProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * "See what your AI product could become" CTA block. Shared by the /projects
 * page and the vertical landing pages so the copy/styling live in one place.
 * Defaults reproduce the original /projects markup exactly.
 */
export default function ProductVisionCta({
  title = (
    <>
      See what your AI product<br />could become
    </>
  ),
  subtitle = (
    <>
      Work with a team focused on architecture,<br />
      execution, and scalable AI systems.
    </>
  ),
  primaryLabel = 'Start Your Project',
  primaryHref = EXTERNAL_LINKS.CALENDLY_BOOKING,
  secondaryLabel = 'Book a Strategy Call',
  secondaryHref = EXTERNAL_LINKS.CALENDLY_BOOKING,
}: ProductVisionCtaProps) {
  return (
    <div className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>{title}</h2>
      <p className={styles.ctaSubtitle}>{subtitle}</p>
      <div className={styles.ctaButtons}>
        <a href={primaryHref} target="_blank" rel="noopener noreferrer" className={styles.ctaBtnPrimary}>
          {primaryLabel}
          <span className={styles.ctaBtnArrow}>→</span>
        </a>
        <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className={styles.ctaBtnSecondary}>
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
