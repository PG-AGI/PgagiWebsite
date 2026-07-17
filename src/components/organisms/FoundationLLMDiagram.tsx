import styles from '@/styles/components/organisms/foundationLlmDiagram.module.scss';

/**
 * "How we build it · Foundation LLM Implementation" diagram — the ai-ml
 * counterpart to DeviceCloudDiagram. Request/response flows through the
 * foundation model at the top; orchestration, agents & tools, and data
 * systems (RAG · DB · API) feed back into it below, forming the loop that
 * keeps a single model call grounded and able to act.
 */

const Arrow = ({ direction = 'right' }: { direction?: 'right' | 'down-up' }) => (
  <span className={`${styles.arrow} ${direction === 'down-up' ? styles.arrowVertical : ''}`} aria-hidden="true">
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
      <path d="M1 7H20M20 7L14.5 1.5M20 7L14.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function FoundationLLMDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Foundation LLM Implementation</span>
        </div>

        <div className={styles.box}>
          <div className={styles.flow}>
            <div className={styles.row}>
              <div className={`${styles.node} ${styles.nodeSmall}`}>
                <p className={styles.nodeTitle}>Request</p>
                <span className={styles.nodeSub}>user / API call</span>
              </div>
              <Arrow />
              <div className={`${styles.node} ${styles.nodeMain}`}>
                <p className={styles.nodeTitle}>Foundation LLM</p>
                <span className={styles.nodeSub}>closed or open-source model</span>
              </div>
              <Arrow />
              <div className={`${styles.node} ${styles.nodeSmall}`}>
                <p className={styles.nodeTitle}>Response</p>
                <span className={styles.nodeSub}>streamed to caller</span>
              </div>
            </div>

            <div className={styles.loopConnector} aria-hidden="true">
              <Arrow direction="down-up" />
            </div>

            <div className={styles.row}>
              <div className={styles.node}>
                <p className={styles.nodeTitle}>Orchestration</p>
                <span className={styles.nodeSub}>plan · route · recover</span>
              </div>
              <Arrow />
              <div className={styles.node}>
                <p className={styles.nodeTitle}>Agents + Tools</p>
                <span className={styles.nodeSub}>reasoning · function calls</span>
              </div>
              <Arrow />
              <div className={styles.node}>
                <p className={styles.nodeTitle}>Data systems</p>
                <span className={styles.nodeSub}>RAG · DB · API</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 1 — Foundation LLM implementation. </strong>
        A request reaches the foundation model directly for simple calls; for anything that needs
        grounding or action, orchestration routes it through agents and tools into the data systems —
        RAG, databases, APIs — and the result feeds back into the model before a response streams out.
      </figcaption>
    </figure>
  );
}
