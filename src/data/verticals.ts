/**
 * Vertical landing pages (rendered by `src/app/expertise/[vertical]/page.tsx`).
 *
 * Each entry is one dedicated page reached from the "Explore this vertical"
 * cards on the home page. Content is driven from here so the layout components
 * (VerticalHero, VerticalIntro, …) stay reusable across verticals.
 *
 * NOTE (2026-07-06): only the AI x IoT page's first block (hero + intro +
 * device-to-cloud diagram) is built so far, desktop-first. Remaining sections
 * (feature cards, use cases) land as their Figma is supplied.
 */

export type VerticalIntro = {
  heading: string;
  body: string;
};

export type FeatureBullet = {
  /** Optional bold lead-in rendered before the text, e.g. "Predictive maintenance:". */
  lead?: string;
  text: string;
};

export type VerticalFeature = {
  /** Public path to the 3D icon, e.g. "/assets/verticals/ai-iot/collection.png". */
  icon: string;
  title: string;
  /** Full-width card (spans both columns). */
  wide?: boolean;
  bullets: FeatureBullet[];
};

export type UseCaseItem = {
  eyebrow: string;
  title: string;
  body: string;
  /** Public path to the icon; optional until the Figma asset is committed. */
  icon?: string;
};

export type VerticalUseCases = {
  heading: string;
  subtitle: string;
  items: UseCaseItem[];
};

export type Vertical = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero headline, e.g. "AI + IoT". */
  heroTitle: string;
  heroDescription: string;
  /** Destination of the hero "View Case Study" button. */
  caseStudyHref: string;
  intro: VerticalIntro;
  features: VerticalFeature[];
  useCases: VerticalUseCases;
};

export const VERTICALS: Record<string, Vertical> = {
  'ai-iot': {
    slug: 'ai-iot',
    metaTitle: 'AI + IoT | PGAGI',
    metaDescription:
      'How we collect, process, and model data from connected devices and sensors — edge inference, real-time pipelines, and automated response.',
    heroTitle: 'AI + IoT',
    heroDescription:
      'This section describes how we collect, process, and model data from connected devices and sensors, and how model output is used to drive prediction, anomaly detection, and automated response.',
    // Clicking "View Case Study" opens the VOOK AI case study directly.
    caseStudyHref: '/case-study/vook-ai-wireless-microphone-companion-app',
    intro: {
      heading: 'Processing and modelling data from connected devices.',
      body: 'Connected devices produce a continuous stream of data, much of which is never used. We build the pipeline that collects it reliably, processes it in real time, and runs AI models on it, so that the system can identify patterns, anticipate failures before they occur, and automate the response. Where it is appropriate, inference is moved to the edge so that devices respond locally without a cloud round-trip, and the output is connected back into your business applications so that a prediction results in a work order, an alert, or an automated control action.',
    },
    features: [
      {
        icon: '/assets/verticals/ai-iot/collection.png',
        title: 'Collection, pipelines & real-time monitoring',
        bullets: [
          { text: 'Device-to-cloud ingestion over MQTT, HTTP, and streaming (Kafka / Kinesis) with buffering for unreliable connectivity.' },
          { text: 'Sensor data pipelines: validation, normalization, time-series storage, and aggregation at scale.' },
          { text: 'Real-time device monitoring with live status, health, and throughput visibility.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-iot/prediction.png',
        title: 'Prediction, anomaly detection & automation',
        bullets: [
          { lead: 'Predictive maintenance:', text: 'forecasting wear and failure windows so service happens before breakdown, not after' },
          { lead: 'AI-based anomaly detection:', text: 'catching abnormal readings, drift, and rare events that fixed thresholds miss.' },
          { lead: 'Smart alerts & automation:', text: 'routing alerts to the right person and triggering automated control or workflow actions.' },
        ],
      },
      {
        icon: '/assets/verticals/ai-iot/edge.png',
        title: 'Edge AI & architecture',
        wide: true,
        bullets: [
          { text: 'Edge inference on-device or on-gateway for instant reaction and reduced bandwidth/cloud cost.' },
          { text: 'Device-to-cloud architecture with secure provisioning, OTA-friendly design, and clear data contracts.' },
          { text: 'Dashboards & reporting for live and historical IoT data, plus integration into AI models and business apps.' },
        ],
      },
    ],
    useCases: {
      heading: 'Practical Use Cases',
      subtitle: 'Applied examples of complex systems we design and deploy.',
      items: [
        { eyebrow: 'MANUFACTURING', title: 'Predict failures on the line', body: 'Vibration and temperature trends forecast equipment failure windows; the system schedules maintenance and cuts unplanned downtime.', icon: '/assets/AixIOT/AixIOT-1.svg' },
        { eyebrow: 'FACILITIES / ENERGY', title: 'Anomaly detection on consumption', body: 'Models flag abnormal energy or water usage in real time and alert the right team before it becomes a cost or a fault.', icon: '/assets/AixIOT/AixIOT-2.svg' },
        { eyebrow: 'FLEET / LOGISTICS', title: 'Condition-based monitoring', body: 'Live device telemetry feeds dashboards and triggers automated actions when readings cross learned, not fixed, limits.', icon: '/assets/AixIOT/AixIOT-3.svg' },
        { eyebrow: 'OPERATIONS', title: 'Fewer eyes on screens', body: 'Smart alerting replaces constant manual monitoring — people are pulled in only when the system detects something worth attention.', icon: '/assets/AixIOT/AixIOT-4.svg' },
      ],
    },
  },
};

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS[slug];
}

export function getAllVerticalSlugs(): string[] {
  return Object.keys(VERTICALS);
}
