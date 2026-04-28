import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const slug = 'aimi-brain-real-time-financial-intelligence';
    const existing = await collection.findOne({ slug });

    if (existing) {
      const updatedSections = existing.sections.map((section: any) => {
        if (section.content) {
          section.content = section.content.map((item: any) => {
            if (item.type === 'image') {
              if (item.url.includes('aimi_arch.png')) item.url = '/assets/CaseStudies/aimi/aimi-arch.png';
              if (item.url.includes('aimi_rag.png')) item.url = '/assets/CaseStudies/aimi/aimi-rag-flow.png';
              if (item.url.includes('aimi_websocket.png')) item.url = '/assets/CaseStudies/aimi/aimi-websocket.png';
              if (item.url.includes('aimi_ingestion.png')) item.url = '/assets/CaseStudies/aimi/aimi-ingestion.png';
              if (item.url.includes('aimi_tier.png')) item.url = '/assets/CaseStudies/aimi/aimi-tiers.png';
            }
            return item;
          });
        }
        return section;
      });

      await collection.updateOne({ slug }, { $set: { sections: updatedSections } });
      console.log('Case Study image paths updated successfully');
    } else {
      console.log('Case Study not found');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

run();
