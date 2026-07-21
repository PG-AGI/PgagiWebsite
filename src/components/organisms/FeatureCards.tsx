import Image from 'next/image';
import styles from '@/styles/components/organisms/featureCards.module.scss';
import type { FeatureDiagramKey, VerticalFeature } from '@/data/verticals';
import RagArchitectureDiagram from './RagArchitectureDiagram';
import AiOrchestrationDiagram from './AiOrchestrationDiagram';

const FEATURE_DIAGRAMS: Record<FeatureDiagramKey, () => JSX.Element> = {
  'rag-architecture': RagArchitectureDiagram,
  'ai-orchestration': AiOrchestrationDiagram,
};

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      fill="#16a34a"
    />
  </svg>
);

/**
 * "How we build it" feature cards (Figma 2003:11385 / 11447 / 11416).
 * Two cards in the top row + one full-width card below (`wide`).
 */
export default function FeatureCards({ cards }: { cards: VerticalFeature[] }) {
  return (
    <div className={styles.grid}>
      {cards.map((card) => {
        const Diagram = card.diagram ? FEATURE_DIAGRAMS[card.diagram] : null;

        return (
          <article key={card.title} className={`${styles.card} ${card.wide ? styles.wide : ''}`}>
            <div className={styles.iconTile}>
              <Image src={card.icon} alt="" width={60} height={60} className={styles.icon} unoptimized />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{card.title}</h3>
              {card.description && <p className={styles.description}>{card.description}</p>}
              {Diagram && <Diagram />}
              {card.bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {card.bullets.map((b) => (
                    <li key={b.text} className={styles.bullet}>
                      <span className={styles.check}>
                        <CheckIcon />
                      </span>
                      <span className={styles.text}>
                        {b.lead && <strong className={styles.lead}>{b.lead} </strong>}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
