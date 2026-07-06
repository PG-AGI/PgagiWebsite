import styles from '@/styles/components/organisms/deviceCloudDiagram.module.scss';

/**
 * "How we build it · Device-to-Cloud Flow" diagram (Figma 2003:11343).
 *
 * The blue box is a container (`container-type: inline-size`); every node and
 * label is sized in `cqw` and positioned in `%`, so the whole illustration
 * scales proportionally with its width — identical geometry to the Figma frame
 * (1280 × 623) at any desktop width. Connectors are inline SVG in the same
 * 1280 × 623 coordinate space (Figma exports these as expiring image assets,
 * so we redraw them rather than hot-link).
 */

type NodeVariant = 'dark' | 'cream' | 'white' | 'whiteAlt';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string[];
  smallTitle?: boolean;
  /** Seconds into the 5s loop when this box lights — timed to when its incoming
   *  connector finishes drawing. Devices is the source, so it lights first. */
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×623 box
};

const NODES: DiagramNode[] = [
  { key: 'devices', variant: 'dark', title: 'Devices', sub: ['sensors · machines'], glowDelay: 0, pos: { left: 3.261, top: 40.955, w: 14.52, h: 18.079 } },
  { key: 'edge', variant: 'cream', title: 'Edge', sub: ['filter · buffer', 'local inference'], glowDelay: 0.85, pos: { left: 23.06, top: 39.82, w: 13.75, h: 20.34 } },
  { key: 'ingestion', variant: 'white', title: 'Ingestion', sub: ['MQTT · stream', 'time-series store'], glowDelay: 1.6, pos: { left: 41.76, top: 39.82, w: 14.3, h: 20.34 } },
  { key: 'ai', variant: 'white', title: 'AI models', sub: ['anomaly · forecast', 'predictive maint.'], glowDelay: 2.35, pos: { left: 61.01, top: 39.82, w: 14.3, h: 20.34 } },
  // Alerts and Dashboards are parallel outputs — same delay so they light together.
  { key: 'alerts', variant: 'whiteAlt', title: 'Alerts + Automation', sub: ['notify · control · act'], smallTitle: true, glowDelay: 3.1, pos: { left: 80.04, top: 26.94, w: 16.72, h: 16.95 } },
  { key: 'dash', variant: 'dark', title: 'Dashboards + Apps', sub: ['live · historical · BI'], smallTitle: true, glowDelay: 3.1, pos: { left: 80.04, top: 63.1, w: 16.28, h: 16.27 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  cream: styles.nodeCream,
  white: styles.nodeWhite,
  whiteAlt: styles.nodeWhiteAlt,
};

export default function DeviceCloudDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Device-to-Cloud Flow</span>
        </div>

        <div className={styles.boxWrap}>
        <div className={styles.boxScroll}>
        <div className={styles.box}>
          <svg
            className={styles.connectors}
            viewBox="0 0 1280 623"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="dc-arrow"
                viewBox="0 0 10 10"
                markerWidth="9"
                markerHeight="9"
                refX="8"
                refY="5"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="#16A34A" />
              </marker>
            </defs>

            {/* Dim base — the pipe sits faint until the signal sweeps it. */}
            <g className={styles.baseConnectors}>
              {/* Blue in-line flow: Devices → Edge → Ingestion → AI models */}
              <g stroke="#4A6CF7" strokeWidth="2">
                <line x1="227.6" y1="311.46" x2="295.17" y2="311.46" />
                <line x1="471.16" y1="311.46" x2="534.5" y2="311.46" />
                <line x1="717.53" y1="311.46" x2="780.91" y2="311.46" />
              </g>
              {/* Green branches: AI models → Alerts (up) and → Dashboards (down) */}
              <g stroke="#16A34A" strokeWidth="2" markerEnd="url(#dc-arrow)">
                <line x1="963.94" y1="300" x2="1020" y2="236" />
                <line x1="963.94" y1="322" x2="1020" y2="405" />
              </g>
              {/* Fast-path arc — faint & static */}
              <path
                d="M379.6 248 C 520 100 900 100 1018.9 196"
                stroke="#ffffff"
                strokeWidth="2.1"
                strokeDasharray="7 5.6"
                fill="none"
              />
            </g>

            {/* Bright highlight that draws L→R along the blue pipe, in sequence.
                pathLength=1 normalises each segment so the reveal timing matches. */}
            <g className={styles.sweepBlue} stroke="#4A6CF7" strokeWidth="2.6" strokeLinecap="round" fill="none">
              <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="227.6" y1="311.46" x2="295.17" y2="311.46" />
              <line pathLength="1" style={{ animationDelay: '1.1s' }} x1="471.16" y1="311.46" x2="534.5" y2="311.46" />
              <line pathLength="1" style={{ animationDelay: '1.85s' }} x1="717.53" y1="311.46" x2="780.91" y2="311.46" />
            </g>

            {/* Bright highlight for the green output branches. */}
            <g className={styles.sweepGreen} stroke="#22c55e" strokeWidth="2.6" strokeLinecap="round" fill="none">
              <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="963.94" y1="300" x2="1020" y2="236" />
              <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="963.94" y1="322" x2="1020" y2="405" />
            </g>
          </svg>

          <span className={styles.fastPath}>Edge fast-path — instant local action</span>

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
              <p className={`${styles.nodeTitle} ${node.smallTitle ? styles.nodeTitleSm : ''}`}>
                {node.title}
              </p>
              <div className={styles.nodeSub}>
                {node.sub.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
          <span className={styles.scrollHint} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 1 — Device-to-cloud architecture. </strong>
        Devices feed an edge layer that filters, buffers, and can run local inference; data is
        ingested and stored, AI models detect anomalies and forecast failures, and the output drives
        alerts/automation and dashboards. A dashed edge fast-path shows instant local action without
        a cloud round-trip.
      </figcaption>
    </figure>
  );
}
