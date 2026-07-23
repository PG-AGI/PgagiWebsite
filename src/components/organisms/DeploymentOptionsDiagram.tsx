import styles from '@/styles/components/organisms/deploymentOptionsDiagram.module.scss';

/**
 * "How we build it · Model Deployment Pipeline" strip (enterprise-ai vertical).
 * A base model is fine-tuned on client data inside the boundary, quantized,
 * run on a CPU-only runtime, and served under a latency budget — no dedicated
 * GPU fleet required. Built the same way as the other diagrams: nodes sized
 * in `cqw` / positioned in `%` of a fixed-aspect box, with an inline SVG
 * connector that sweeps node to node.
 */

type NodeVariant = 'white' | 'lavender' | 'whiteGreenTitle';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string[];
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number }; // % of the 1280×460 box
};

const NODES: DiagramNode[] = [
  { key: 'model', variant: 'white', title: 'Open base model', sub: ['SLM, sized to task'], glowDelay: 0, pos: { left: 4.69, top: 16.13, w: 15.63, h: 46 } },
  { key: 'finetune', variant: 'lavender', title: 'Fine-tune / LoRA', sub: ['on client data', 'inside boundary'], glowDelay: 0.75, pos: { left: 23.44, top: 16.13, w: 15.63, h: 46 } },
  { key: 'quantize', variant: 'white', title: 'Quantize', sub: ['INT8 / INT4'], glowDelay: 1.5, pos: { left: 42.19, top: 16.13, w: 15.63, h: 46 } },
  { key: 'runtime', variant: 'white', title: 'CPU runtime', sub: ['llama.cpp · ONNX', 'OpenVINO'], glowDelay: 2.25, pos: { left: 60.94, top: 16.13, w: 15.63, h: 46 } },
  { key: 'serve', variant: 'whiteGreenTitle', title: 'Serve', sub: ['latency budget'], glowDelay: 3.0, pos: { left: 79.69, top: 16.13, w: 15.63, h: 46 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  white: styles.nodeWhite,
  lavender: styles.nodeLavender,
  whiteGreenTitle: styles.nodeWhiteGreenTitle,
};

export default function DeploymentOptionsDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · Model Deployment Pipeline</span>
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
              <g className={styles.baseConnectors} stroke="#5a6ee0" strokeWidth="2.2">
                <line x1="260" y1="180" x2="300" y2="180" />
                <line x1="500" y1="180" x2="540" y2="180" />
                <line x1="740" y1="180" x2="780" y2="180" />
                <line x1="980" y1="180" x2="1020" y2="180" />
              </g>

              <g className={styles.sweep} stroke="#8b9bff" strokeWidth="2.8" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '0.35s' }} x1="260" y1="180" x2="300" y2="180" />
                <line pathLength="1" style={{ animationDelay: '1.1s' }} x1="500" y1="180" x2="540" y2="180" />
                <line pathLength="1" style={{ animationDelay: '1.85s' }} x1="740" y1="180" x2="780" y2="180" />
                <line pathLength="1" style={{ animationDelay: '2.6s' }} x1="980" y1="180" x2="1020" y2="180" />
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
              Runs on existing CPU servers — no dedicated GPU fleet required.
            </div>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 2 — Model deployment pipeline. </strong>
        A base model is fine-tuned on client data inside the boundary, quantized to INT8/INT4, and
        run on a CPU-only runtime (llama.cpp, ONNX, OpenVINO) — served under a latency budget with
        no dedicated GPU fleet required.
      </figcaption>
    </figure>
  );
}
