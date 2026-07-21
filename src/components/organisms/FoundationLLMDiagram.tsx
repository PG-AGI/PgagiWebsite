import styles from '@/styles/components/organisms/foundationLlmDiagram.module.scss';

/**
 * "How we build it · Foundation LLM Implementation" diagram (Figma export:
 * foundation-llm.svg). A request reaches orchestration, which fans out to the
 * model layer, RAG + memory, and agents + tools; the model layer streams a
 * response while agents/tools reach into your systems — all measured by an
 * observability strip underneath. Built the same way as DeviceCloudDiagram:
 * nodes/labels sized in `cqw` and positioned in `%` of the 1280×623 box, with
 * inline SVG connectors that sweep in sequence.
 */

type NodeVariant = 'dark' | 'lavender' | 'white' | 'whiteGreen';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string[];
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×623 box
};

const NODES: DiagramNode[] = [
  { key: 'request', variant: 'dark', title: 'Request', sub: ['user · API · app'], glowDelay: 0, pos: { left: 3.91, top: 29.54, w: 14.69, h: 13.48 } },
  { key: 'orchestration', variant: 'lavender', title: 'Orchestration', sub: ['Model routing', 'queues · Jobs', 'retries · Fallback', 'guardrails'], glowDelay: 0.85, pos: { left: 24.45, top: 19.9, w: 17.5, h: 30.5 } },
  { key: 'model', variant: 'white', title: 'Model layer', sub: ['closed LLM · open SLM', 'custom ML models'], glowDelay: 1.6, pos: { left: 47.73, top: 10.27, w: 22.19, h: 15.25 } },
  { key: 'rag', variant: 'white', title: 'RAG + Memory', sub: ['vector DB · hybrid search', 'short / long-term memory'], glowDelay: 1.6, pos: { left: 47.73, top: 32.58, w: 22.19, h: 15.25 } },
  { key: 'agents', variant: 'white', title: 'Agents + Tools', sub: ['function calling', 'multi-agent flows'], glowDelay: 1.6, pos: { left: 47.73, top: 55.38, w: 22.19, h: 16.85 } },
  { key: 'response', variant: 'whiteGreen', title: 'Response', sub: ['structured · streamed', 'cited · validated'], glowDelay: 2.35, pos: { left: 76.17, top: 10.27, w: 19.22, h: 15.25 } },
  { key: 'systems', variant: 'dark', title: 'Your systems', sub: ['Databases', 'CRM · email', 'Calendar · APIs', 'Internal tools'], glowDelay: 3.1, pos: { left: 76.17, top: 32.58, w: 19.22, h: 31.3 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  lavender: styles.nodeLavender,
  white: styles.nodeWhite,
  whiteGreen: styles.nodeWhiteGreen,
};

export default function FoundationLLMDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Foundation LLM Implementation</span>
        </div>

        <div className={styles.boxWrap}>
          <div className={styles.box}>
            <svg
              className={styles.connectors}
              viewBox="0 0 1280 623"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <marker id="fl-arrow-blue" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#3859F9" />
                </marker>
                <marker id="fl-arrow-white" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#F3FBF6" />
                </marker>
              </defs>

              {/* Dim base pipes — sit faint until the signal sweeps them. */}
              <g className={styles.baseConnectors}>
                <g stroke="#3859F9" strokeWidth="2.4" markerEnd="url(#fl-arrow-blue)">
                  <line x1="238" y1="226" x2="308" y2="226" />
                  <path d="M537 168 L606 113" />
                  <path d="M537 239 L606 247" />
                  <path d="M537 292 L606 388" />
                  <path d="M895 393 L970 351" />
                </g>
                <g stroke="#F3FBF6" strokeWidth="2.2" markerEnd="url(#fl-arrow-white)">
                  <line x1="895" y1="111" x2="970" y2="111" />
                  <line x1="1098" y1="159" x2="1098" y2="198" />
                </g>
              </g>

              {/* Bright highlight sweeps, timed to when each destination node lights. */}
              <g className={styles.sweepBlue} stroke="#6C8CFF" strokeWidth="2.8" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="238" y1="226" x2="308" y2="226" />
                <path pathLength="1" style={{ animationDelay: '1.1s' }} d="M537 168 L606 113" />
                <path pathLength="1" style={{ animationDelay: '1.1s' }} d="M537 239 L606 247" />
                <path pathLength="1" style={{ animationDelay: '1.1s' }} d="M537 292 L606 388" />
                <path pathLength="1" style={{ animationDelay: '2.6s' }} d="M895 393 L970 351" />
              </g>
              <g className={styles.sweepWhite} stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '1.85s' }} x1="895" y1="111" x2="970" y2="111" />
                <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="1098" y1="159" x2="1098" y2="198" />
              </g>
            </svg>

            {NODES.map((node) => (
              <div
                key={node.key}
                className={`${styles.node} ${VARIANT_CLASS[node.variant]}`}
                style={{
                  left: `${node.pos.left}%`,
                  top: `${node.pos.top}%`,
                  width: `${node.pos.w}%`,
                  height: `${node.pos.h}%`,
                  animationDelay: `${node.glowDelay}s`,
                }}
              >
                <p className={styles.nodeTitle}>{node.title}</p>
                <div className={styles.nodeSub}>
                  {node.sub.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            ))}

            <div
              className={`${styles.observability}`}
              style={{ animationDelay: '3.85s' }}
            >
              <p className={styles.obsTitle}>Observability — tracing · evals · cost &amp; token accounting · audit logs</p>
              <p className={styles.obsSub}>every step measured in production</p>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 1 — Foundation LLM implementation. </strong>
A request enters the orchestration layer, which routes it across the model layer, RAG + memory, and agents + tools. Agents act on your real systems; the response returns structured, cited, and validated. Everything is observed end-to-end.      </figcaption>
    </figure>
  );
}
