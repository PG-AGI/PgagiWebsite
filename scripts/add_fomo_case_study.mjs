import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'test';

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
      challenge: 'Automating high-conversion workflows and decentralized agent integrations seamlessly.',
      solution: 'Architected scalable AI agent frameworks with responsive real-time analytics.',
      results: [
        '35% increase in user conversions within first quarter',
        '85% user retention across active cohorts',
        'Rapid early growth — 1K users in 7 days',
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const res = await collection.updateOne(
      { slug: 'fomo' },
      { $set: fomoCaseStudy },
      { upsert: true }
    );

    console.log('Upserted Fomo case study:', res);
    const doc = await collection.findOne({ slug: 'fomo' });
    console.log('Fomo in DB:', { slug: doc.slug, title: doc.title, coverImage: doc.coverImage });

  } catch (error) {
    console.error('Error adding Fomo case study:', error);
  } finally {
    await client.close();
  }
}

run();
