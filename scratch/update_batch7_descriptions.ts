import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const updates = [
  {
    slug: 'ai-data-query-system',
    description:
      'In the era of big data, efficient querying and analysis are critical. Within two months, we developed an AI data query system that blends scalability with precision. This solution empowers users to interact with extensive datasets through an intuitive chat interface, streamlining data analysis and decision-making.',
  },
  {
    slug: 'ai-marketing-assistant',
    description:
      'We developed a cutting-edge custom GPT model tailored to streamline the creation of marketing briefs. This innovative solution addressed inefficiencies in data collection, ensuring accuracy and saving significant time for marketers. The result? A 60% improvement in brief personalization and a reduction in errors from 17% to 5%.',
  },
  {
    slug: 'ai-agent-for-stock-market',
    description:
      'We created and developed an AI agent for stock market that delivers intelligent, real-time stock recommendations and forecasts. It is expertly designed with three main functionalities to ensure accuracy, personalization, and smooth user interaction:',
  },
  {
    slug: 'tutorgpt-ai-personalized-tutoring-platform-to-make-education-accessible-and-seamless',
    description:
      'PGAGI partnered with a forward-thinking client in the EdTech sector to develop TutorGPT, an AI tutoring platform tailored for students in grades 6-12. Designed in just two weeks, TutorGPT leverages cutting-edge technologies to deliver personalized learning experiences. The platform addresses core challenges in education, including accessibility, engagement, and individualized support. Eventually, it enhances student outcomes and educator efficiency.',
  },
  {
    slug: 'voice-assistant-chatbot-for-shopify-stores-to-enhance-user-engagement',
    description:
      'In just four weeks, we developed a cutting-edge voice assistant chatbot tailored for Shopify store owners. This innovative application streamlined the user experience with features like real-time assistance, an intuitive FAQ section, and a seamless trial period to evaluate the service.',
  },
  {
    slug: 'ai-powered-recruiter-agents-to-revolutionize-talent-acquisition',
    description:
      'A leading staffing company faced overwhelming application volumes and needed help to fill critical positions efficiently. By implementing AI recruitment software, the company reduced the time to hire.',
  },
  {
    slug: 'multi-agent-trading-system-transforming-cryptocurrency-trading-strategies',
    description:
      'At PGAGI, we developed a multi-agent trading system that addresses client’s critical challenges like market volatility, risk management, and personalization. It helped streamline our client’s trading operations, delivering measurable results in efficiency, profitability, and user satisfaction.',
  },
];

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    for (const update of updates) {
      const result = await collection.updateOne(
        { slug: update.slug },
        { $set: { description: update.description, metaDescription: update.description } }
      );
      if (result.matchedCount > 0) {
        console.log(`Successfully updated description for slug: ${update.slug}`);
      } else {
        console.log(`Failed to find case study with slug: ${update.slug}`);
      }
    }
  } catch (error) {
    console.error('Error updating descriptions:', error);
  } finally {
    await client.close();
  }
}

run();
