import styles from '@/styles/components/organisms/multiTenantArchitectureDiagram.module.scss';

/**
 * "How we build it · Multi-Tenant Architecture" diagram. Tenant traffic
 * reaches a gateway that authenticates and routes it into the core,
 * billing, and search services; the dashboard reads back out while every
 * tenant's data stays isolated in its own schema/DB — all measured by an
 * observability strip underneath. Built the same way as FoundationLLMDiagram:
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
  { key: 'tenants', variant: 'dark', title: 'Tenants', sub: ['web · mobile · API'], glowDelay: 0, pos: { left: 3.91, top: 29.54, w: 14.69, h: 13.48 } },
  { key: 'gateway', variant: 'lavender', title: 'Gateway + Auth', sub: ['Routing · rate limits', 'AuthN/Z · JWT / OAuth', 'Tenant resolution'], glowDelay: 0.85, pos: { left: 24.45, top: 19.9, w: 17.5, h: 30.5 } },
  { key: 'core', variant: 'white', title: 'Core service', sub: ['business logic', 'per-tenant scoping'], glowDelay: 1.6, pos: { left: 47.73, top: 10.27, w: 22.19, h: 15.25 } },
  { key: 'billing', variant: 'white', title: 'Billing service', sub: ['metering · invoicing', 'Stripe · usage events'], glowDelay: 1.6, pos: { left: 47.73, top: 32.58, w: 22.19, h: 15.25 } },
  { key: 'search', variant: 'white', title: 'Search service', sub: ['full-text · filters', 'per-tenant indexes'], glowDelay: 1.6, pos: { left: 47.73, top: 55.38, w: 22.19, h: 16.85 } },
  { key: 'dashboard', variant: 'whiteGreen', title: 'Dashboard', sub: ['usage · health', 'revenue · admin views'], glowDelay: 2.35, pos: { left: 76.17, top: 10.27, w: 19.22, h: 15.25 } },
  { key: 'database', variant: 'dark', title: 'Secure, isolated DB', sub: ['Schema/DB per tenant', 'Row-level security', 'Encrypted at rest', 'Backups · PITR'], glowDelay: 3.1, pos: { left: 76.17, top: 32.58, w: 19.22, h: 31.3 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  lavender: styles.nodeLavender,
  white: styles.nodeWhite,
  whiteGreen: styles.nodeWhiteGreen,
};

export default function MultiTenantArchitectureDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Multi-Tenant Architecture</span>
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
                <marker id="mt-arrow-blue" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#3859F9" />
                </marker>
                <marker id="mt-arrow-white" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#FFFBEF" />
                </marker>
              </defs>

              {/* Dim base pipes — sit faint until the signal sweeps them. */}
              <g className={styles.baseConnectors}>
                <g stroke="#3859F9" strokeWidth="2.4" markerEnd="url(#mt-arrow-blue)">
                  <line x1="238" y1="226" x2="308" y2="226" />
                  <path d="M537 168 L606 113" />
                  <path d="M537 239 L606 247" />
                  <path d="M537 292 L606 388" />
                  <path d="M895 393 L970 351" />
                </g>
                <g stroke="#FFFBEF" strokeWidth="2.2" markerEnd="url(#mt-arrow-white)">
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

            <div className={styles.observability} style={{ animationDelay: '3.85s' }}>
              <p className={styles.obsTitle}>Observability — tracing · monitoring · logging · provisioning</p>
              <p className={styles.obsSub}>every tenant measured in production</p>
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 1 — Multi-tenant architecture. </strong>
        Tenant traffic is authenticated and routed at the gateway, then reaches the core, billing, and
        search services — each scoped to its tenant. Every tenant&apos;s data stays isolated in its own
        schema or database, and the dashboard, alongside observability, keeps every layer measured
        in production.
      </figcaption>
    </figure>
  );
}
