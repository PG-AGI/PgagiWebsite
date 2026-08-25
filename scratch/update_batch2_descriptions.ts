import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const updates = [
  {
    slug: 'transforming-customer-engagement-and-lead-management-with-ai-powered-automation',
    description:
      'TL Pathak Group, a leading manufacturer of industrial mechanical machinery, sought to modernize its customer engagement and lead management processes. Facing growing demand and increasing product complexity, the company needed a solution that could scale its front-line operations while delivering timely, accurate, and personalized interactions to prospective clients.',
  },
  {
    slug: 'ai-chatbot-for-legal-assistance',
    description:
      "The AI chatbot for legal assistance demonstrates how artificial intelligence is transforming the legal industry. It is a testament to AI's ability, when integrated precisely, to help legal professionals and individuals access and utilize complex legal information.",
  },
];

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    for (const update of updates) {
      const result = await collection.updateOne(
        { slug: update.slug },
        { $set: { description: update.description, metaDescription: update.description } }
      );
      if (result.matchedCount > 0) {
        console.log(`Successfully updated description for slug: ${update.slug}`);
      } else {
        console.log(`Failed to find case study with slug: ${update.slug}`);
      }
    }
  } catch (error) {
    console.error('Error updating descriptions:', error);
  } finally {
    await client.close();
  }
}

run();
