import styles from '@/styles/components/organisms/verticalIntro.module.scss';

type VerticalIntroProps = {
  heading: string;
  body: string;
};

/**
 * Left-aligned section intro: bold heading + supporting paragraph.
 * Matches Figma node 2003:11339.
 */
export default function VerticalIntro({ heading, body }: VerticalIntroProps) {
  return (
    <div className={styles.intro}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.body}>{body}</p>
    </div>
  );
}
