import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'SayYes.AI is a first-of-its-kind AI-powered mobile application that helps brides plan, organize, and manage every aspect of their wedding — guided by a personalized AI assistant named Ella. From venue discovery to vendor coordination and budget management, Ella acts as a digital wedding planner that evolves with each interaction.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'sayyesai-the-ai-wedding-companion-for-modern-brides' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: sayyesai-the-ai-wedding-companion-for-modern-brides');
    } else {
      console.log('Failed to find case study with slug: sayyesai-the-ai-wedding-companion-for-modern-brides');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
