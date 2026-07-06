import Image from 'next/image';
import styles from '@/styles/components/organisms/useCases.module.scss';
import type { VerticalUseCases } from '@/data/verticals';

/* Temporary monochrome placeholders until the Figma 3D icons (image 9197–9200)
   are committed — swap by setting `icon` on each use-case item in verticals.ts. */
const PLACEHOLDER_ICONS = [
  // factory
  <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21V9l6 4V9l6 4V5l6 3v13z" /><path d="M3 21h18" /></svg>,
  // bolt / energy
  <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>,
  // truck / fleet
  <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 6h13v10H1zM14 9h4l3 3v4h-7z" /><circle cx="5.5" cy="18" r="1.8" /><circle cx="18" cy="18" r="1.8" /></svg>,
  // eye / operations
  <svg key="3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></svg>,
];

/**
 * "Practical Use Cases" — light container, centered heading, 2×2 card grid.
 * Matches Figma node 2003:11533.
 */
export default function UseCases({ heading, subtitle, items }: VerticalUseCases) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <article key={item.eyebrow} className={styles.card}>
            <div className={styles.iconTile} aria-hidden="true">
              {item.icon ? (
                <Image src={item.icon} alt="" width={52} height={52} className={styles.icon} unoptimized />
              ) : (
                PLACEHOLDER_ICONS[i % PLACEHOLDER_ICONS.length]
              )}
            </div>
            <div className={styles.cardBody}>
              <span className={styles.eyebrow}>{item.eyebrow}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
