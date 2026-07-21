import styles from '@/styles/components/organisms/enterpriseIsolatedDiagram.module.scss';

/**
 * "How we build it · Isolated Enterprise Deployment" diagram. Everything —
 * users, auth, inference, data, and audit logging — runs inside a dashed
 * organisation boundary (on-premise, private VPC, or air-gapped); public
 * model APIs sit outside that boundary and are never called. Nodes/labels
 * are sized in `cqw` and positioned in `%` of the 1280×420 box, with inline
 * SVG connectors that sweep in sequence.
 */

type NodeVariant = 'dark' | 'lavender' | 'white';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string[];
  accentFirstSub?: boolean;
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×420 box
};

const NODES: DiagramNode[] = [
  { key: 'users', variant: 'dark', title: 'Users / App', sub: ['inside network'], glowDelay: 0, pos: { left: 5, top: 22, w: 18, h: 26 } },
  { key: 'auth', variant: 'lavender', title: 'API · SSO · RBAC', sub: ['authN · authZ'], glowDelay: 0.6, pos: { left: 26, top: 22, w: 18, h: 26 } },
  { key: 'inference', variant: 'white', title: 'SLM inference (CPU)', sub: ['self-hosted · quantized', 'no external calls'], glowDelay: 1.2, pos: { left: 47, top: 22, w: 20, h: 26 } },
  { key: 'data', variant: 'dark', title: 'Data stores', sub: ['private data'], glowDelay: 0, pos: { left: 5, top: 58, w: 18, h: 26 } },
  { key: 'vector', variant: 'white', title: 'Vector DB', sub: ['private index'], glowDelay: 0.6, pos: { left: 26, top: 58, w: 18, h: 26 } },
  { key: 'audit', variant: 'white', title: 'Audit log', sub: ['prompts · actions · access'], accentFirstSub: true, glowDelay: 1.8, pos: { left: 47, top: 58, w: 20, h: 26 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  lavender: styles.nodeLavender,
  white: styles.nodeWhite,
};

export default function EnterpriseIsolatedDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Isolated Enterprise Deployment</span>
        </div>

        <div className={styles.boxWrap}>
          <div className={styles.box}>
            <svg
              className={styles.connectors}
              viewBox="0 0 1280 420"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* Dashed organisation-boundary rect containing the 6 in-network nodes. */}
              <rect
                x="38.4" y="54.6" width="844.8" height="310.8" rx="16"
                fill="none" stroke="#9f0000" strokeWidth="2" strokeDasharray="7 6"
              />

              {/* Dim base pipes — sit faint until the signal sweeps them. */}
              <g className={styles.baseConnectors} stroke="#9F0000" strokeWidth="2.2">
                <line x1="294.4" y1="147" x2="332.8" y2="147" />
                <line x1="563.2" y1="147" x2="601.6" y2="147" />
                <line x1="294.4" y1="298.2" x2="332.8" y2="298.2" />
                <line x1="563.2" y1="298.2" x2="601.6" y2="298.2" />
              </g>
              <g stroke="#FFF5F5" strokeWidth="2">
                <line x1="448" y1="201.6" x2="448" y2="243.6" />
                <line x1="729.6" y1="201.6" x2="729.6" y2="243.6" />
              </g>

              {/* Bright highlight sweeps, timed to when each destination node lights. */}
              <g className={styles.sweepRed} stroke="#e23d3d" strokeWidth="2.6" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="294.4" y1="147" x2="332.8" y2="147" />
                <line pathLength="1" style={{ animationDelay: '0.95s' }} x1="563.2" y1="147" x2="601.6" y2="147" />
                <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="294.4" y1="298.2" x2="332.8" y2="298.2" />
                <line pathLength="1" style={{ animationDelay: '1.55s' }} x1="563.2" y1="298.2" x2="601.6" y2="298.2" />
              </g>
              <g className={styles.sweepWhite} stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '1.6s' }} x1="448" y1="201.6" x2="448" y2="243.6" />
                <line pathLength="1" style={{ animationDelay: '2.2s' }} x1="729.6" y1="201.6" x2="729.6" y2="243.6" />
              </g>

              {/* Blocked path — public model APIs sit outside the boundary, never called. */}
              <circle cx="910" cy="214" r="20" fill="none" stroke="#9f0000" strokeWidth="3" />
              <line x1="895.86" y1="199.86" x2="924.14" y2="228.14" stroke="#9f0000" strokeWidth="3" strokeLinecap="round" />
            </svg>

            <p className={styles.boundaryLabel}>
              Organisation boundary — on-premise · private VPC · air-gapped
            </p>

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
                  {node.sub.map((line, i) => (
                    <span
                      key={line}
                      className={node.accentFirstSub && i === 0 ? styles.nodeSubAccent : undefined}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <p className={styles.egressLabel}>No egress — no third-party API calls</p>

            <div className={`${styles.node} ${styles.nodeWhite} ${styles.externalNode}`}>
              <p className={styles.nodeTitle}>Public model APIs</p>
              <div className={styles.nodeSub}>
                <span>not used</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 1 — Isolated enterprise deployment. </strong>
        Users, auth, inference, data stores, and audit logging all run inside your organisation
        boundary — on-premise, private VPC, or fully air-gapped. Public model APIs sit outside that
        boundary and are never called; nothing egresses.
      </figcaption>
    </figure>
  );
}
