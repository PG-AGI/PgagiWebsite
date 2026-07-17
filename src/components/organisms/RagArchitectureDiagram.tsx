import styles from '@/styles/components/organisms/ragArchitectureDiagram.module.scss';

/**
 * Retrieval-augmented generation pipeline diagram, embedded in the wide
 * "RAG architecture" feature card. Ingestion flow on top (documents through
 * a vector store), retrieval/generation flow below (query through answer).
 */

const Chevron = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M5 3L11 8L5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const INGEST_NODES = ['Documents', 'Chunk', 'Embed', 'VectorDB'];
const RETRIEVE_NODES = ['Vector Store', 'Hybrid Search', 'Re-rank', 'LLM', 'Answer'];

export default function RagArchitectureDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.box}>
        <div className={styles.row}>
          {INGEST_NODES.map((label, i) => (
            <span key={label} className={styles.nodeGroup}>
              <span className={`${styles.node} ${styles.nodeLight}`}>{label}</span>
              {i < INGEST_NODES.length - 1 && <Chevron />}
            </span>
          ))}
        </div>

        <div className={styles.row}>
          {RETRIEVE_NODES.map((label, i) => (
            <span key={label} className={styles.nodeGroup}>
              <span className={`${styles.node} ${styles.nodeDark}`}>{label}</span>
              {i < RETRIEVE_NODES.length - 1 && <Chevron />}
            </span>
          ))}
        </div>

        <p className={styles.hint}>Ingested docs meet the live query at retrieval — the vector store bridges both flows.</p>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 2 — Retrieval-augmented generation pipeline we design and deploy.</strong>
      </figcaption>
    </figure>
  );
}
