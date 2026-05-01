import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const updates = [
      {
        slug: 'mirror-me-ai-virtual-try-on',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 12_52_22 AM.png'
      },
      {
        slug: 'ai-mobile-doc',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 10_19_35 AM.png'
      },
      {
        slug: 'aimi-brain-real-time-financial-intelligence',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 10_31_25 AM.png'
      },
      {
        slug: 'legalspendgpt-invoice-intelligence',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 10_38_19 AM.png'
      },
      {
        slug: 'skillina-talent-marketplace',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 10_42_59 AM.png'
      },
      {
        slug: 'ai-ecommerce-arbitrage-platform',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 10_49_17 AM.png'
      },
      {
        slug: 'brainify-edtech-platform',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 10_55_21 AM.png'
      },
      {
        slug: 'email-love-ai-powered-email-template-generation-and-repair',
        coverImage: '/case-studies/ChatGPT Image May 1, 2026, 11_14_58 AM.png'
      }
    ];

    for (const update of updates) {
      const result = await collection.updateOne(
        { slug: update.slug },
        { $set: { coverImage: update.coverImage } }
      );
      if (result.matchedCount > 0) {
        console.log(`Successfully updated cover image for slug: ${update.slug}`);
      } else {
        console.log(`Failed to find case study with slug: ${update.slug}`);
      }
    }

  } catch (error) {
    console.error('Error updating cover images:', error);
  } finally {
    await client.close();
  }
}

run();
