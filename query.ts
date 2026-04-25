import { MongoClient } from 'mongodb';

async function run() {
  const uri = process.env.MONGODB_URI || "mongodb+srv://utkarsh:pgagi123@cluster0.vxynt.mongodb.net/pgagi?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('pgagi');
    const cs = await db.collection('caseStudies').findOne({slug: 'brainify-edtech-platform'});
    console.log(JSON.stringify(cs?.sections, null, 2));
  } finally {
    await client.close();
  }
}

run();
