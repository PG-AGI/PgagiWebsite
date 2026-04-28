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
              // Rename url to src if it exists
              if (item.url) {
                item.src = item.url;
                delete item.url;
              }
              // Also ensure alt text exists
              if (!item.alt) {
                item.alt = section.title || 'Technical Diagram';
              }
            }
            return item;
          });
        }
        return section;
      });

      await collection.updateOne({ slug }, { $set: { sections: updatedSections } });
      console.log('Case Study field "url" renamed to "src" successfully');
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
