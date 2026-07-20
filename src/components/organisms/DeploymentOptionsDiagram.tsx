import styles from '@/styles/components/organisms/deploymentOptionsDiagram.module.scss';

/**
 * "How we build it · Deployment Options" strip. A compact row of the
 * isolation boundaries a deployment can run inside — bare metal, private
 * VPC, managed Kubernetes, fully air-gapped, or a hybrid mix — with the
 * same model and orchestration layer underneath, unchanged. Built the same
 * way as the other diagrams: nodes sized in `cqw` / positioned in `%` of a
 * fixed-aspect box, with an inline SVG connector that sweeps node to node.
 */

type DiagramNode = {
  key: string;
  title: string;
  sub: string;
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×360 box
};

const NODES: DiagramNode[] = [
  { key: 'bare-metal', title: 'Bare metal', sub: 'dedicated hardware', glowDelay: 0, pos: { left: 4.69, top: 27.78, w: 15.63, h: 44.44 } },
  { key: 'private-vpc', title: 'Private VPC', sub: 'isolated cloud network', glowDelay: 0.75, pos: { left: 23.44, top: 27.78, w: 15.63, h: 44.44 } },
  { key: 'kubernetes', title: 'Managed Kubernetes', sub: 'your cluster, your nodes', glowDelay: 1.5, pos: { left: 42.19, top: 27.78, w: 15.63, h: 44.44 } },
  { key: 'air-gapped', title: 'Air-gapped', sub: 'no internet path', glowDelay: 2.25, pos: { left: 60.94, top: 27.78, w: 15.63, h: 44.44 } },
  { key: 'hybrid', title: 'Hybrid cloud', sub: 'mixed as required', glowDelay: 3.0, pos: { left: 79.69, top: 27.78, w: 15.63, h: 44.44 } },
];

export default function DeploymentOptionsDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Deployment Options</span>
        </div>

        <div className={styles.boxWrap}>
          <div className={styles.box}>
            <svg
              className={styles.connectors}
              viewBox="0 0 1280 360"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <g className={styles.baseConnectors} stroke="#1d4ed8" strokeWidth="2.2">
                <line x1="260" y1="180" x2="300" y2="180" />
                <line x1="500" y1="180" x2="540" y2="180" />
                <line x1="740" y1="180" x2="780" y2="180" />
                <line x1="980" y1="180" x2="1020" y2="180" />
              </g>

              <g className={styles.sweep} stroke="#3b82f6" strokeWidth="2.8" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="260" y1="180" x2="300" y2="180" />
                <line pathLength="1" style={{ animationDelay: '1.1s' }} x1="500" y1="180" x2="540" y2="180" />
                <line pathLength="1" style={{ animationDelay: '1.85s' }} x1="740" y1="180" x2="780" y2="180" />
                <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="980" y1="180" x2="1020" y2="180" />
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
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 2 — Deployment options. </strong>
        Bare metal, private VPC, managed Kubernetes, fully air-gapped, or a hybrid mix — pick the
        isolation boundary that fits your requirements; the same model and orchestration layer runs
        unchanged underneath.
      </figcaption>
    </figure>
  );
}
