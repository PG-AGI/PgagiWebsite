import styles from '@/styles/components/organisms/mobileAiDiagram.module.scss';

/**
 * "How we build it · Mobile-First Architecture" diagram. The mobile app talks
 * to a backend through an API layer; the backend fans out to an AI layer and
 * a database, which both feed into the release that ships to the app stores.
 * Nodes/labels are sized in `cqw` and positioned in `%` of the 1280×560 box,
 * with inline SVG connectors that sweep in sequence.
 */

type NodeVariant = 'dark' | 'lavender' | 'white';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string[];
  /** Renders the first sub line in the accent green used for "ships" states. */
  accentFirstSub?: boolean;
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×560 box
};

const NODES: DiagramNode[] = [
  { key: 'app', variant: 'dark', title: 'Mobile app', sub: ['native · Flutter', 'offline cache', 'auth · push', 'chat · voice UI'], glowDelay: 0, pos: { left: 4, top: 32, w: 18, h: 36 } },
  { key: 'api', variant: 'lavender', title: 'API layer', sub: ['auth · validation', 'REST / WS'], glowDelay: 0.75, pos: { left: 25, top: 38, w: 13, h: 24 } },
  { key: 'backend', variant: 'white', title: 'Backend', sub: ['business logic', 'jobs · integrations'], glowDelay: 1.5, pos: { left: 41, top: 32, w: 14, h: 36 } },
  { key: 'ai', variant: 'white', title: 'AI layer', sub: ['LLM · RAG · voice', 'image / doc AI'], glowDelay: 2.25, pos: { left: 59, top: 10, w: 15, h: 28 } },
  { key: 'database', variant: 'dark', title: 'Database', sub: ['app + AI data'], glowDelay: 2.25, pos: { left: 59, top: 54, w: 15, h: 28 } },
  { key: 'store', variant: 'white', title: 'App stores', sub: ['CI/CD · signing', 'release'], accentFirstSub: true, glowDelay: 3, pos: { left: 78, top: 32, w: 14, h: 36 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  lavender: styles.nodeLavender,
  white: styles.nodeWhite,
};

export default function MobileAiDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Mobile-First Architecture</span>
        </div>

        <div className={styles.boxWrap}>
          <div className={styles.box}>
            <svg
              className={styles.connectors}
              viewBox="0 0 1280 560"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* Dim base pipes — sit faint until the signal sweeps them. */}
              <g className={styles.baseConnectors}>
                <g stroke="#3859F9" strokeWidth="2.4">
                  <line x1="281.6" y1="280" x2="320" y2="280" />
                  <line x1="486.4" y1="280" x2="524.8" y2="280" />
                </g>
                <g stroke="#F5F1FF" strokeWidth="2.2">
                  <line x1="704" y1="280" x2="755.2" y2="134.4" />
                  <line x1="704" y1="280" x2="755.2" y2="380.8" />
                  <line x1="947.2" y1="134.4" x2="998.4" y2="280" />
                  <line x1="947.2" y1="380.8" x2="998.4" y2="280" />
                </g>
              </g>

              {/* Bright highlight sweeps, timed to when each destination node lights. */}
              <g className={styles.sweepBlue} stroke="#6C8CFF" strokeWidth="2.8" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="281.6" y1="280" x2="320" y2="280" />
                <line pathLength="1" style={{ animationDelay: '1.1s' }} x1="486.4" y1="280" x2="524.8" y2="280" />
              </g>
              <g className={styles.sweepWhite} stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '1.85s' }} x1="704" y1="280" x2="755.2" y2="134.4" />
                <line pathLength="1" style={{ animationDelay: '1.85s' }} x1="704" y1="280" x2="755.2" y2="380.8" />
                <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="947.2" y1="134.4" x2="998.4" y2="280" />
                <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="947.2" y1="380.8" x2="998.4" y2="280" />
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

            <span className={styles.hint}>ships the app →</span>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 1 — Mobile-first architecture. </strong>
        The app talks to the backend through an API layer for auth and validation; the backend
        fans out to an AI layer for on-device and cloud model calls and a database for app and AI
        data, and the release ships out to the app stores.
      </figcaption>
    </figure>
  );
}
