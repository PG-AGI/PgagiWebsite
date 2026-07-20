import styles from '@/styles/components/organisms/governanceLoopDiagram.module.scss';

/**
 * "How we build it · Security & Governance Loop" diagram. A shared
 * Governance center sits inside a ring of the four controls that keep an
 * isolated deployment accountable — access control, audit logging, data
 * residency, and model provenance. Built the same way as
 * AiOrchestrationDiagram: nodes sized in `cqw` / positioned in `%` of the
 * 1280×623 box, with an inline SVG ellipse ring that sweeps node to node.
 */

type DiagramNode = {
  key: string;
  title: string;
  sub: string;
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number };
};

const NODES: DiagramNode[] = [
  { key: 'access', title: 'Access control', sub: 'RBAC · least privilege', glowDelay: 0, pos: { left: 42.58, top: 21.83, w: 14.84, h: 14.45 } },
  { key: 'audit', title: 'Audit logging', sub: 'every call recorded', glowDelay: 0.85, pos: { left: 64.45, top: 42.7, w: 14.84, h: 14.45 } },
  { key: 'residency', title: 'Data residency', sub: 'stays in your boundary', glowDelay: 1.6, pos: { left: 42.58, top: 63.56, w: 14.84, h: 14.45 } },
  { key: 'provenance', title: 'Model provenance', sub: 'approved, versioned models', glowDelay: 2.35, pos: { left: 20.7, top: 42.7, w: 14.84, h: 14.45 } },
];

const CENTER = { left: 44.92, top: 42.7, w: 10.16, h: 20.87 };

export default function GovernanceLoopDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Security &amp; Governance Loop</span>
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
              <g className={styles.baseConnectors}>
                <ellipse cx="640" cy="311" rx="280" ry="130" stroke="#7c3aed" strokeWidth="2.2" />
              </g>

              <g className={styles.sweep} stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" fill="none">
                <path pathLength="1" style={{ animationDelay: '0.35s' }} d="M640 181 A280 130 0 0 1 920 311" />
                <path pathLength="1" style={{ animationDelay: '1.1s' }} d="M920 311 A280 130 0 0 1 640 441" />
                <path pathLength="1" style={{ animationDelay: '1.85s' }} d="M640 441 A280 130 0 0 1 360 311" />
                <path pathLength="1" style={{ animationDelay: '2.6s' }} d="M360 311 A280 130 0 0 1 640 181" />
              </g>
            </svg>

            {NODES.map((node) => (
              <div
                key={node.key}
                className={styles.node}
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
              className={styles.center}
              style={{
                left: `${CENTER.left}%`,
                top: `${CENTER.top}%`,
                width: `${CENTER.w}%`,
                height: `${CENTER.h}%`,
              }}
            >
              <p className={styles.centerTitle}>Governance</p>
              <span className={styles.centerSub}>policy · oversight</span>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 3 — Security &amp; governance loop. </strong>
        Access control, audit logging, data residency, and model provenance run as one continuous
        loop around a shared governance layer — so every request stays inside policy, not just at
        deployment time.
      </figcaption>
    </figure>
  );
}
