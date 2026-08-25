import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'Nuaiy is a mobile-first, invite-only, multilingual learning platform built to help users develop practical, real-world skills through structured, gamified educational journeys. Delivered as native iOS and Android applications alongside a responsive web experience, Nuaiy combines guided progression, AI-driven personalization, and habit-forming engagement loops into a single adaptive learning ecosystem.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'nuaiy-ai-driven-multilingual-gamified-learning-platform' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: nuaiy-ai-driven-multilingual-gamified-learning-platform');
    } else {
      console.log('Failed to find case study with slug: nuaiy-ai-driven-multilingual-gamified-learning-platform');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
