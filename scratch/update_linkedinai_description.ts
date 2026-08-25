import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_DESCRIPTION =
  'This project highlights the power of AI SaaS in healthcare marketing and awareness. Doctors are trusted voices in society, but their insights rarely reach beyond clinic walls. By automating voice-to-content-to-post, we give them a tool to educate, engage, and influence society at scale.';

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const result = await collection.updateOne(
      { slug: 'how-we-built-an-ai-saas-that-helps-doctors-share-healthcare-awareness-on-linkedin' },
      { $set: { description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
    );

    if (result.matchedCount > 0) {
      console.log('Successfully updated description for slug: how-we-built-an-ai-saas-that-helps-doctors-share-healthcare-awareness-on-linkedin');
    } else {
      console.log('Failed to find case study with that slug');
    }
  } catch (error) {
    console.error('Error updating description:', error);
  } finally {
    await client.close();
  }
}

run();
