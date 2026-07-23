import styles from '@/styles/components/organisms/governanceLoopDiagram.module.scss';

/**
 * "How we build it · Security & Governance Loop" diagram (enterprise-ai
 * vertical). Every request is authenticated, authorised, and only then
 * allowed to reach retrieval/model/action — with every step recorded to an
 * audit log. Built the same way as deploymentOptionsDiagram: nodes sized in
 * `cqw` / positioned in `%` of a fixed-aspect box, with an inline SVG
 * connector that sweeps node to node, plus a note strip below.
 */

type NodeVariant = 'dark' | 'lavender' | 'white';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string[];
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×460 box
};

const NODES: DiagramNode[] = [
  { key: 'request', variant: 'dark', title: 'Request', sub: ['user'], glowDelay: 0, pos: { left: 3.13, top: 16.13, w: 13.5, h: 46 } },
  { key: 'authenticate', variant: 'lavender', title: 'Authenticate', sub: ['SSO · SAML/OIDC'], glowDelay: 0.6, pos: { left: 19.14, top: 16.13, w: 15, h: 46 } },
  { key: 'authorise', variant: 'lavender', title: 'Authorise', sub: ['RBAC / ABAC'], glowDelay: 1.2, pos: { left: 36.64, top: 16.13, w: 14, h: 46 } },
  { key: 'retrieval', variant: 'white', title: 'Retrieval', sub: ['permission-aware'], glowDelay: 1.8, pos: { left: 53.13, top: 16.13, w: 14.5, h: 46 } },
  { key: 'model', variant: 'white', title: 'Model', sub: ['self-hosted SLM'], glowDelay: 2.4, pos: { left: 70.14, top: 16.13, w: 13.5, h: 46 } },
  { key: 'action', variant: 'white', title: 'Action', sub: ['approval gate'], glowDelay: 3.0, pos: { left: 86.13, top: 16.13, w: 12.9, h: 46 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  lavender: styles.nodeLavender,
  white: styles.nodeWhite,
};

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
              viewBox="0 0 1280 460"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* Dotted line from each node down into the audit-log strip. */}
              <g className={styles.baseConnectors} stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 5">
                <line x1="127" y1="286" x2="127" y2="331" />
                <line x1="341" y1="286" x2="341" y2="331" />
                <line x1="559" y1="286" x2="559" y2="331" />
                <line x1="773" y1="286" x2="773" y2="331" />
                <line x1="984" y1="286" x2="984" y2="331" />
                <line x1="1185" y1="286" x2="1185" y2="331" />
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

            <div className={styles.strip}>
              <p className={styles.stripTitle}>Audit log — every step recorded</p>
              <p className={styles.stripSub}>
                authentication · authorisation · retrieval · model call · action, retained per
                policy, tamper-evident where required.
              </p>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 3 — Security &amp; governance loop. </strong>
        Every request is authenticated and authorised before it reaches retrieval, the model, or an
        action — and every step along the way is written to a tamper-evident audit log.
      </figcaption>
    </figure>
  );
}
