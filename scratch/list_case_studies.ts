import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudies = await collection.find({}, { projection: { title: 1, slug: 1 } }).toArray();
    console.log(JSON.stringify(caseStudies, null, 2));
  } catch (error) {
    console.error('Error fetching case studies:', error);
  } finally {
    await client.close();
  }
}

run();
