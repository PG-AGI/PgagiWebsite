import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'brAInify is a mobile-first, invite-only, multilingual learning platform designed to help users build practical real-world skills through structured, gamified educational journeys. The platform combines guided progression systems, AI-driven personalization, and habit-forming engagement loops to create an interactive and adaptive learning experience inspired by modern gamified learning platforms.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'brainify-edtech-platform' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: brainify-edtech-platform');
    } else {
      console.log('Failed to find case study with slug: brainify-edtech-platform');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
