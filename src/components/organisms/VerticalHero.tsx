import styles from '@/styles/components/organisms/verticalHero.module.scss';
import TransitionLink from '@/components/atoms/TransitionLink';

const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M9.33 3C9.33 3.43 9.76 4.08 10.19 4.62C10.75 5.32 11.42 5.93 12.18 6.4C12.75 6.75 13.44 7.08 14 7.08M14 7.08C13.44 7.08 12.75 7.42 12.18 7.77C11.42 8.23 10.75 8.85 10.19 9.54C9.76 10.09 9.33 10.73 9.33 11.17M14 7.08L0 7.08"
      stroke="#9F0000"
      strokeWidth="1.3"
    />
  </svg>
);

type VerticalHeroProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref: string;
};

/**
 * Vertical page hero — green gradient wash, centered headline + description,
 * red "View Case Study" pill. Matches Figma node 2003:11319 + 2151:10776.
 */
export default function VerticalHero({
  title,
  description,
  ctaLabel = 'View Case Study',
  ctaHref,
}: VerticalHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <TransitionLink href={ctaHref} className={styles.cta} ariaLabel={`${ctaLabel} — ${title}`}>
          <span>{ctaLabel}</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            <ArrowRightIcon />
          </span>
        </TransitionLink>
      </div>
    </section>
  );
}
