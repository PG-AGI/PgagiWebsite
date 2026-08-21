import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'test';

async function run() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('caseStudies');

    const onchainCaseStudy = {
      title: 'Onchain Toolkit',
      slug: 'onchain-toolkit-ai-analysis-platform',
      contentType: 'Enterprise Case Study',
      description: 'End-to-end physiotherapy consultation automation: patient onboarding to AI -End-to-end physiotherapy consultation automation: patient onboarding to AI -...',
      metaDescription: 'End-to-end physiotherapy consultation automation: patient onboarding to AI -End-to-end physiotherapy consultation automation: patient onboarding to AI -...',
      coverImage: '/assets/CaseStudies/OnchainToolkit.png',
      publishDate: 'August 01, 2026',
      readTime: '7 min read',
      author: {
        name: 'PG-AGI',
        role: 'Applied AI & Platform Engineering',
      },
      metaKeywords: 'Onchain Toolkit, AI Analytics, Trading Agents, Smart Agents, Blockchain Intelligence, PG-AGI',
      metaAuthor: 'PG-AGI',
      metaTitle: 'Onchain Toolkit: AI-Powered Onchain Analytics & Smart Trading Agents | PG-AGI',
      tags: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
      stats: [
        { label: 'User Conversions', value: '35%' },
        { label: 'User Retention', value: '85%' },
      ],
      growth: 'Rapid early growth — 1K users in 7 days',
      sections: [
        {
          title: 'I. Executive Overview',
          content: [
            {
              type: 'paragraph',
              content: 'Onchain Toolkit provides real-time decentralized market intelligence, task-focused AI trading agents, and multi-network analytics across Ethereum, Blast, and Base.',
            },
            {
              type: 'highlight',
              content: 'Task-Focused Agent Architecture',
            },
            {
              type: 'paragraph',
              content: 'By segregating analysis into Risk-Focused, User-Centric, Strategy-Focused, and Hybrid agents, users receive tailored actionable signals in real-time.',
            },
          ],
        },
        {
          title: 'II. Architecture & Technology Stack',
          content: [
            {
              type: 'table',
              content: {
                headers: ['Layer', 'Technologies', 'Purpose'],
                rows: [
                  ['Data Engine', 'Python / FastAPI', 'Real-time WebSocket streaming of onchain transactions and DEX liquidity'],
                  ['Agent Core', 'Python / LangChain', 'Multi-agent orchestration for strategy evaluation and risk classification'],
                  ['Frontend Dashboard', 'PHP / JavaScript', 'High-frequency charting, DEX aggregator widgets, and watchlist management'],
                ],
              },
            },
          ],
        },
      ],
      createdAt: new Date('2026-08-01T00:00:00.000Z'),
      updatedAt: new Date(),
    };

    const result = await collection.updateOne(
      { slug: onchainCaseStudy.slug },
      { $set: onchainCaseStudy },
      { upsert: true }
    );

    console.log('Upsert result for onchain-toolkit-ai-analysis-platform:', result);

  } catch (error) {
    console.error('Error adding Onchain Toolkit case study:', error);
  } finally {
    await client.close();
  }
}

run();
