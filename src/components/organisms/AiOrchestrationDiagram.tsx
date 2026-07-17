import styles from '@/styles/components/organisms/aiOrchestrationDiagram.module.scss';

/**
 * Agentic orchestration loop diagram, embedded in the wide "AI orchestration"
 * feature card. A central orchestration node coordinates plan/memory/reasoning/
 * framework nodes placed around it; the loop label calls out the plan → act →
 * observe → adapt cycle those four nodes drive.
 */

const SATELLITES = [
  { key: 'plan', title: 'Plan', sub: 'decompose the task' },
  { key: 'memory', title: 'Memory', sub: 'short & long-term state' },
  { key: 'react', title: 'ReAct', sub: 'reason + act steps' },
  { key: 'langchain', title: 'LangChain', sub: 'framework runtime' },
];

export default function AiOrchestrationDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.box}>
        <div className={styles.ring}>
          {SATELLITES.map((s) => (
            <div key={s.key} className={`${styles.satellite} ${styles[s.key]}`}>
              <p className={styles.satTitle}>{s.title}</p>
              <span className={styles.satSub}>{s.sub}</span>
            </div>
          ))}

          <div className={styles.center}>
            <p className={styles.centerTitle}>Orchestration</p>
            <span className={styles.centerSub}>plan · act · observe · adapt</span>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 3 — Agentic orchestration loop — plan, act, observe, and adapt.</strong>
      </figcaption>
    </figure>
  );
}
