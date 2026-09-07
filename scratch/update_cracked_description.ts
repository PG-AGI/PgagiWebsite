const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const NEW_TITLE = 'Cracked.ai';
const NEW_DESCRIPTION =
  'Cracked is the execution layer between AI agents and the commercial tool market. One key, 69,826 tools, every one ranked by measured health and real price.';

async function run() {
  try {
    await client.connect();
    const dbs = [client.db(), client.db('test')];
    for (const db of dbs) {
      const collection = db.collection('caseStudies');
      const result = await collection.updateMany(
        { slug: { $in: ['cracked-ai-growth-platform', 'cracked-ai'] } },
        { $set: { title: NEW_TITLE, description: NEW_DESCRIPTION, metaDescription: NEW_DESCRIPTION } }
      );
      console.log(`DB ${db.databaseName}: matched ${result.matchedCount}, modified ${result.modifiedCount}`);
    }
  } catch (error) {
    console.error('Error updating:', error);
  } finally {
    await client.close();
  }
}

run();


