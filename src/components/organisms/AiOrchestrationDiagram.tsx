import styles from '@/styles/components/organisms/aiOrchestrationDiagram.module.scss';

/**
 * Agentic orchestration loop diagram (Figma export: Container (4).svg).
 * An orchestrator assigns goals down into a Plan → Act → Observe → Reflect
 * ring built around a shared Memory node; Reflect resolves to a Result,
 * while Act and Observe both reach into Tools. Built the same way as
 * DeviceCloudDiagram: nodes sized in `cqw` / positioned in `%` of the
 * 1280×623 box, with inline SVG connectors that sweep in sequence.
 */

type NodeVariant = 'dark' | 'white' | 'whiteBlue' | 'whiteGreen' | 'circle';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string;
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number };
};

const NODES: DiagramNode[] = [
  { key: 'orchestrator', variant: 'dark', title: 'Orchestrator', sub: 'assigns goals · coordinates multi-agent work', glowDelay: 0, pos: { left: 37.66, top: 7.06, w: 24.77, h: 11.08 } },
  { key: 'plan', variant: 'whiteBlue', title: 'Plan', sub: 'decompose task', glowDelay: 0.85, pos: { left: 42.34, top: 31.46, w: 15.39, h: 11.24 } },
  { key: 'act', variant: 'white', title: 'Act', sub: 'call tool / API', glowDelay: 1.6, pos: { left: 69.38, top: 56.02, w: 13.2, h: 11.24 } },
  { key: 'observe', variant: 'white', title: 'Observe', sub: 'evaluate result', glowDelay: 2.35, pos: { left: 42.34, top: 80.74, w: 15.39, h: 11.24 } },
  { key: 'reflect', variant: 'white', title: 'Reflect', sub: 'continue or finish', glowDelay: 3.1, pos: { left: 17.5, top: 56.02, w: 12.97, h: 11.24 } },
  { key: 'result', variant: 'whiteGreen', title: 'Result', sub: 'when goal met', glowDelay: 3.85, pos: { left: 7.5, top: 80.74, w: 12.97, h: 11.24 } },
  { key: 'tools', variant: 'dark', title: 'Tools — DB · CRM · email · APIs', sub: 'validated · permissioned · logged', glowDelay: 3.1, pos: { left: 69.38, top: 80.74, w: 22.19, h: 11.24 } },
];

const MEMORY = { left: 45, top: 51.68, w: 10.16, h: 20.87 };

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  white: styles.nodeWhite,
  whiteBlue: styles.nodeWhiteBlue,
  whiteGreen: styles.nodeWhiteGreen,
  circle: styles.nodeCircle,
};

export default function AiOrchestrationDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Agentic Orchestration Loop</span>
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
                <marker id="ao-arrow-dark" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#111111" />
                </marker>
                <marker id="ao-arrow-green" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#28A04A" />
                </marker>
              </defs>

              {/* Dim base — orchestrator stem, the Plan/Act/Observe/Reflect ring, and the two branch lines. */}
              <g className={styles.baseConnectors}>
                <line x1="640" y1="113" x2="640" y2="196" stroke="#111111" strokeWidth="2.4" />
                <ellipse cx="640" cy="384" rx="333" ry="154" stroke="#3838CC" strokeWidth="2.2" />
                <line x1="307" y1="419" x2="262" y2="503" stroke="#28A04A" strokeWidth="2.2" markerEnd="url(#ao-arrow-green)" />
                <line x1="972" y1="419" x2="1030" y2="503" stroke="#111111" strokeWidth="2.2" markerEnd="url(#ao-arrow-dark)" />
                <line x1="739" y1="538" x2="888" y2="538" stroke="#111111" strokeWidth="2.2" markerEnd="url(#ao-arrow-dark)" />
              </g>

              {/* Dashed cross through Memory — marching, always-on read/write. */}
              <g className={styles.memoryCross} stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6">
                <line x1="390" y1="384" x2="888" y2="384" />
                <line x1="640" y1="266" x2="640" y2="503" />
              </g>

              {/* Bright sweeps, timed to when each destination node lights. */}
              <g className={styles.sweep} stroke="#6C6CE6" strokeWidth="2.8" strokeLinecap="round" fill="none">
                <line pathLength="1" className={styles.sweepStem} style={{ animationDelay: '0.35s' }} x1="640" y1="113" x2="640" y2="196" />
              </g>
              <g className={styles.sweepRing} stroke="#5A5AE0" strokeWidth="3" strokeLinecap="round" fill="none">
                <path pathLength="1" style={{ animationDelay: '1.1s' }} d="M640 230 A333 154 0 0 1 973 384" />
                <path pathLength="1" style={{ animationDelay: '1.85s' }} d="M973 384 A333 154 0 0 1 640 538" />
                <path pathLength="1" style={{ animationDelay: '2.6s' }} d="M640 538 A333 154 0 0 1 307 384" />
              </g>
              <g className={styles.sweepBranch} stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '3.35s' }} x1="307" y1="419" x2="262" y2="503" />
                <line pathLength="1" style={{ animationDelay: '1.6s' }} x1="972" y1="419" x2="1030" y2="503" />
                <line pathLength="1" style={{ animationDelay: '2.35s' }} x1="739" y1="538" x2="888" y2="538" />
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
                <span className={styles.nodeSub}>{node.sub}</span>
              </div>
            ))}

            <div
              className={styles.memory}
              style={{
                left: `${MEMORY.left}%`,
                top: `${MEMORY.top}%`,
                width: `${MEMORY.w}%`,
                height: `${MEMORY.h}%`,
              }}
            >
              <p className={styles.memoryTitle}>Memory</p>
              <span className={styles.memorySub}>read / write</span>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 3 — Agentic orchestration loop — plan, act, observe, and adapt.</strong>
      </figcaption>
    </figure>
  );
}
