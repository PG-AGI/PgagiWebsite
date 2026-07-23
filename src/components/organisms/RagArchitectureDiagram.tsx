import styles from '@/styles/components/organisms/ragArchitectureDiagram.module.scss';

/**
 * "How we build it · RAG Architecture" diagram. Ingestion flow on top
 * (documents through a vector store), retrieval/generation flow below
 * (query through answer) — the vector store bridges both flows at
 * retrieval time. Built the same way as DeviceCloudDiagram: nodes sized
 * in `cqw` / positioned in `%` of the 1280×623 box, with inline SVG
 * connectors that sweep in sequence.
 */

type NodeVariant = 'dark' | 'white' | 'whiteBlue' | 'whiteGreen';

type DiagramNode = {
  key: string;
  variant: NodeVariant;
  title: string;
  sub: string;
  glowDelay: number;
  pos: { left: number; top: number; w: number; h: number };
};

const NODES: DiagramNode[] = [
  { key: 'documents', variant: 'dark', title: 'Documents', sub: 'PDFs · pages · records', glowDelay: 0, pos: { left: 3.91, top: 19.26, w: 20.31, h: 14.45 } },
  { key: 'chunk', variant: 'white', title: 'Chunk', sub: 'split · clean · tag', glowDelay: 0.55, pos: { left: 27.34, top: 19.26, w: 20.31, h: 14.45 } },
  { key: 'embed', variant: 'white', title: 'Embed', sub: 'vector representations', glowDelay: 1.1, pos: { left: 50.78, top: 19.26, w: 20.31, h: 14.45 } },
  { key: 'vectorDb', variant: 'dark', title: 'Vector DB', sub: 'indexed · versioned', glowDelay: 1.65, pos: { left: 74.22, top: 19.26, w: 20.31, h: 14.45 } },
  { key: 'query', variant: 'dark', title: 'Query', sub: 'user question', glowDelay: 0, pos: { left: 3.91, top: 67.42, w: 16.25, h: 14.45 } },
  { key: 'hybrid', variant: 'whiteBlue', title: 'Hybrid Search', sub: 'dense + keyword', glowDelay: 2.2, pos: { left: 22.5, top: 67.42, w: 16.25, h: 14.45 } },
  { key: 'rerank', variant: 'white', title: 'Re-rank', sub: 'relevance scoring', glowDelay: 2.75, pos: { left: 41.09, top: 67.42, w: 16.25, h: 14.45 } },
  { key: 'llm', variant: 'white', title: 'LLM', sub: 'grounded generation', glowDelay: 3.3, pos: { left: 59.69, top: 67.42, w: 16.25, h: 14.45 } },
  { key: 'answer', variant: 'whiteGreen', title: 'Answer', sub: 'cited · validated', glowDelay: 3.85, pos: { left: 78.28, top: 67.42, w: 16.25, h: 14.45 } },
];

const VARIANT_CLASS: Record<NodeVariant, string> = {
  dark: styles.nodeDark,
  white: styles.nodeWhite,
  whiteBlue: styles.nodeWhiteBlue,
  whiteGreen: styles.nodeWhiteGreen,
};

export default function RagArchitectureDiagram() {
  return (
    <figure className={styles.figure}>
      <div className={styles.topBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <span className={styles.eyebrowText}>How We Build It · RAG Architecture</span>
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
                <marker id="rag-arrow-white" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#ffffff" />
                </marker>
                <marker id="rag-arrow-green" viewBox="0 0 10 10" markerWidth="8" markerHeight="8" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#7CF29C" />
                </marker>
              </defs>

              <g className={styles.baseConnectors} stroke="#ffffff" strokeWidth="2.2" markerEnd="url(#rag-arrow-white)">
                <line x1="310" y1="165" x2="350" y2="165" />
                <line x1="610" y1="165" x2="650" y2="165" />
                <line x1="910" y1="165" x2="950" y2="165" />
                <line x1="258" y1="465" x2="288" y2="465" />
                <line x1="496" y1="465" x2="526" y2="465" />
                <line x1="734" y1="465" x2="764" y2="465" />
              </g>
              <g className={styles.baseConnectors}>
                <line x1="972" y1="465" x2="1002" y2="465" stroke="#7CF29C" strokeWidth="2.2" markerEnd="url(#rag-arrow-green)" />
                <path d="M1030 210 C 1030 320, 392 320, 392 420" stroke="#ffffff" strokeWidth="2" strokeDasharray="7 5.6" fill="none" />
              </g>

              <g className={styles.sweep} stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '0.1s' }} x1="310" y1="165" x2="350" y2="165" />
                <line pathLength="1" style={{ animationDelay: '0.65s' }} x1="610" y1="165" x2="650" y2="165" />
                <line pathLength="1" style={{ animationDelay: '1.2s' }} x1="910" y1="165" x2="950" y2="165" />
                <path pathLength="1" style={{ animationDelay: '1.75s' }} d="M1030 210 C 1030 320, 392 320, 392 420" />
                <line pathLength="1" style={{ animationDelay: '1.75s' }} x1="258" y1="465" x2="288" y2="465" />
                <line pathLength="1" style={{ animationDelay: '2.3s' }} x1="496" y1="465" x2="526" y2="465" />
                <line pathLength="1" style={{ animationDelay: '2.85s' }} x1="734" y1="465" x2="764" y2="465" />
              </g>
              <g className={styles.sweepGreen} stroke="#7CF29C" strokeWidth="2.8" strokeLinecap="round" fill="none">
                <line pathLength="1" style={{ animationDelay: '3.4s' }} x1="972" y1="465" x2="1002" y2="465" />
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

            <p className={styles.hint}>Ingested docs meet the live query at retrieval — the vector store bridges both flows.</p>
          </div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>Figure 2 — Retrieval-augmented generation pipeline we design and deploy.</strong>
      </figcaption>
    </figure>
  );
}
