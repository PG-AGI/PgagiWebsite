import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'test';

async function run() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('caseStudies');

    const workaptixCaseStudy = {
      title: 'Workaptix',
      slug: 'workaptix-ai-sourcing-validation-verification',
      contentType: 'Enterprise Case Study',
      description: 'End-to-end physiotherapy consultation automation: patient onboarding to AI -End-to-end physiotherapy consultation automation: patient onboarding to AI -...',
      metaDescription: 'End-to-end physiotherapy consultation automation: patient onboarding to AI -End-to-end physiotherapy consultation automation: patient onboarding to AI -...',
      coverImage: 'https://images.pgagi.in/Case%20Studies/Workaptix.jpg',
      publishDate: 'July 15, 2026',
      readTime: '6 min read',
      author: {
        name: 'PG-AGI',
        role: 'Applied AI & Platform Engineering',
      },
      metaKeywords: 'Workaptix, Workday Talent, AI Sourcing, Pre-vetted Talent, Verification, Physiotherapy Consultation Automation, PG-AGI',
      metaAuthor: 'PG-AGI',
      metaTitle: 'Workaptix: AI-Powered Sourcing & Verification Platform | PG-AGI',
      tags: ['Python', 'FastAPI', 'PHP', 'JavaScript', '+3'],
      stats: [
        { label: 'User Conversions', value: '35%' },
        { label: 'User Retention', value: '85%' },
      ],
      growth: 'Rapid early growth — 1K users in 7 days',
      liveUrl: 'https://workaptix.com',
      sections: [
        {
          title: 'I. Executive Summary & Overview',
          content: [
            {
              type: 'paragraph',
              content: 'Workaptix is an intelligent AI-powered platform engineered to streamline talent sourcing, profile verification, and automated workflows. By integrating bespoke AI evaluation models with enterprise workflows, Workaptix reduces recruitment cycles while guaranteeing deep domain competency and credential verification.',
            },
            {
              type: 'highlight',
              content: 'End-to-End Automation & Intelligent Matching',
            },
            {
              type: 'paragraph',
              content: 'From automated candidate screening to continuous profile validation and intelligent consultation pipelines, Workaptix delivers high precision talent discovery and deployment at scale.',
            },
          ],
        },
        {
          title: 'II. Architecture & Technology Stack',
          content: [
            {
              type: 'paragraph',
              content: 'The platform is architected with a high-performance Python and FastAPI backend, coupled with dynamic interfaces built in PHP and JavaScript for rapid deployment and robust enterprise integration.',
            },
            {
              type: 'table',
              content: {
                headers: ['Component', 'Technology', 'Role in Platform'],
                rows: [
                  ['Backend API', 'Python / FastAPI', 'High-throughput asynchronous parsing, scoring, and candidate matching'],
                  ['Frontend & Integrations', 'PHP / JavaScript', 'Dynamic user interfaces, responsive dashboards, and interactive verification workflows'],
                  ['AI Engine', 'NLP & Vector Search', 'Semantic skill validation, profile indexing, and intelligent recommendation algorithms'],
                  ['Data Storage', 'PostgreSQL / Redis', 'Relational candidate records, audit logs, and low-latency session caching'],
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
                  ['User Conversions', '35%', '3.5x higher than industry average conversion rates'],
                  ['User Retention', '85%', 'Sustained engagement across enterprise and practitioner cohorts'],
                  ['Early Adoption', '1K users in 7 days', 'Rapid organic growth within the first week of rollout'],
                ],
              },
            },
          ],
        },
      ],
      createdAt: new Date('2026-07-15T00:00:00.000Z'),
      updatedAt: new Date(),
    };

    const result = await collection.updateOne(
      { slug: workaptixCaseStudy.slug },
      { $set: workaptixCaseStudy },
      { upsert: true }
    );

    console.log('Upsert result for workaptix-ai-sourcing-validation-verification:', result);

    // Also upsert an alias with slug 'workaptix' so direct navigation /case-study/workaptix also resolves
    const workaptixShortAlias = {
      ...workaptixCaseStudy,
      slug: 'workaptix',
    };
    await collection.updateOne(
      { slug: 'workaptix' },
      { $set: workaptixShortAlias },
      { upsert: true }
    );
    console.log('Upserted workaptix short alias successfully.');

  } catch (error) {
    console.error('Error adding case study:', error);
  } finally {
    await client.close();
  }
}

run();
