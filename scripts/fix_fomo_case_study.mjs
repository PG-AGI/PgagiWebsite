import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'test';

// The original add_fomo_case_study.mjs seeded Fomo with a legacy flat schema
// (challenge/solution/results/stats/growth) instead of the `sections` array
// every other case study document has. CaseStudy.tsx does
// `caseStudy.sections.map(...)` with no guard, so visiting /case-study/fomo
// crashed the page on render. This re-seeds Fomo with the correct schema.
async function run() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('caseStudies');

    const fomoCaseStudy = {
      title: 'Fomo',
      slug: 'fomo',
      contentType: 'Enterprise Case Study',
      description: 'End-to-end physiotherapy consultation automation: patient onboarding to AI -End-to-end physiotherapy consultation automation: patient onboarding to AI -...',
      metaDescription: 'End-to-end physiotherapy consultation automation: patient onboarding to AI -End-to-end physiotherapy consultation automation: patient onboarding to AI -...',
      coverImage: '/assets/CaseStudies/Fomo.png',
      publishDate: 'August 01, 2026',
      readTime: '6 min read',
      author: {
        name: 'PG-AGI',
        role: 'Applied AI & Decentralized Systems',
      },
      tags: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
      stats: [
        { label: 'User Conversions', value: '35%' },
        { label: 'User Retention', value: '85%' },
      ],
      growth: 'Rapid early growth — 1K users in 7 days',
      liveUrl: 'https://fomo.com',
      sections: [
        {
          title: 'I. Executive Summary & Overview',
          content: [
            {
              type: 'paragraph',
              content: 'Fomo is an AI-powered platform at the intersection of decentralization and autonomous agents, engineered to automate high-conversion workflows and integrate seamlessly with decentralized agent networks.',
            },
            {
              type: 'highlight',
              content: 'Decentralization Meets AI Agents',
            },
            {
              type: 'paragraph',
              content: 'Fomo architected scalable AI agent frameworks paired with responsive real-time analytics, letting reservation, booking, and outreach agents operate autonomously across chains, connections, and marketplaces.',
            },
          ],
        },
        {
          title: 'II. Architecture & Technology Stack',
          content: [
            {
              type: 'paragraph',
              content: 'The platform runs on a Python and FastAPI backend for high-throughput agent orchestration, with PHP and JavaScript powering the responsive dashboards and marketplace surfaces users interact with.',
            },
            {
              type: 'table',
              content: {
                headers: ['Component', 'Technology', 'Role in Platform'],
                rows: [
                  ['Backend API', 'Python / FastAPI', 'Agent orchestration, reservation logic, and real-time analytics'],
                  ['Frontend & Marketplace', 'PHP / JavaScript', 'Dashboards, chain connections, and agent marketplace UI'],
                  ['Agent Layer', 'AI Agents', 'Autonomous reservation, booking, and outreach execution across chains'],
                ],
              },
            },
          ],
        },
        {
          title: 'III. Key Metrics & Impact',
          content: [
            {
              type: 'table',
              content: {
                headers: ['Metric', 'Performance Outcome', 'Benchmark'],
                rows: [
                  ['User Conversions', '35%', 'High-conversion workflow automation across onboarding'],
                  ['User Retention', '85%', 'Sustained engagement across active user cohorts'],
                  ['Early Adoption', '1K users in 7 days', 'Rapid organic growth within the first week of rollout'],
                ],
              },
            },
          ],
        },
      ],
      createdAt: new Date('2026-08-01T00:00:00.000Z'),
      updatedAt: new Date(),
    };

    // Explicitly drop the legacy flat fields so the document matches the
    // schema every other case study uses.
    await collection.updateOne(
      { slug: 'fomo' },
      { $unset: { challenge: '', solution: '', results: '' } },
    );

    const res = await collection.updateOne(
      { slug: 'fomo' },
      { $set: fomoCaseStudy },
      { upsert: true }
    );

    console.log('Upserted Fomo case study:', res);
    const doc = await collection.findOne({ slug: 'fomo' });
    console.log('Fomo in DB:', {
      slug: doc.slug,
      title: doc.title,
      coverImage: doc.coverImage,
      sectionsCount: doc.sections?.length,
      hasLegacyFields: Boolean(doc.challenge || doc.solution || doc.results),
    });

  } catch (error) {
    console.error('Error fixing Fomo case study:', error);
  } finally {
    await client.close();
  }
}

run();
