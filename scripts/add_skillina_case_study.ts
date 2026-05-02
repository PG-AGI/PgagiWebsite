import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'skillina-talent-marketplace',
      contentType: 'Product Requirements & Technical Architecture',
      coverImage: '/case-studies/ChatGPT Image May 2, 2026, 12_10_48 AM.png',
      title: 'Skillina: Talent Marketplace',
      publishDate: 'April 27, 2026',
      readTime: '7 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering & Product Team',
      },
      metaDescription: 'A deep-dive into the product requirements, engineering architecture, and core workflows for the Skillina Talent Marketplace.',
      metaKeywords: 'Talent Marketplace, Recruitment Platform, Skillina, Technical Architecture, Job Board',
      metaAuthor: 'PG-AGI',
      metaTitle: 'Skillina: Talent Marketplace | PG-AGI',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: 'I. Overview',
          content: [
            {
              type: 'paragraph',
              content: 'Skillina is an end-to-end talent marketplace designed to streamline the recruitment process by acting as an intelligent bridge between candidates and employers. Unlike traditional job boards, Skillina integrates automated CV parsing, calendar-synced technical screenings, recorded interviews, and comprehensive recruiter verifications to ensure high-quality candidate placements.'
            },
            {
              type: 'paragraph',
              content: 'The platform manages the complete lifecycle of both candidates and recruiters, from initial acquisition through external job boards like LinkedIn and Indeed, to referral systems, profile creation, and automated screening workflows.'
            }
          ]
        },
        {
          title: 'II. Core Workflows',
          content: [
            {
              type: 'highlight',
              content: 'Candidate Experience'
            },
            {
              type: 'paragraph',
              content: 'The candidate journey focuses on minimizing friction during onboarding while ensuring accurate data capture. The sign-up flow utilizes a two-step process where candidates upload their CV, which is then parsed by an external service to auto-fill their profile. Candidates can manually edit their profiles post-parsing and create accounts using Email, Google, or LinkedIn.'
            },
            {
              type: 'paragraph',
              content: 'Once onboarded, candidates proceed to the screening phase. This involves connecting their calendars to schedule an initial screening, which consists of standard technical tests facilitated by an external service. The platform integrates seamlessly via an API interface to trigger these tests and receive results. Both technical tests and subsequent interviews are recorded and transcribed, and the candidate’s dashboard reflects their progress in real-time.'
            },
            {
              type: 'highlight',
              content: 'Recruiter Experience'
            },
            {
              type: 'paragraph',
              content: 'Recruiters are provided with powerful tools to assess and manage candidates. They have access to comprehensive candidate profiles, including test results, interview recordings, and transcriptions. Recruiters are responsible for verifying soft skills and conducting final assessments before presenting candidates to employers.'
            }
          ]
        },
        {
          title: 'III. System Architecture & Capabilities',
          content: [
            {
              type: 'paragraph',
              content: 'The platform architecture is designed to handle complex workflows and integrations with third-party services. Key technical capabilities include:'
            },
            {
              type: 'paragraph',
              content: '• CV Parsing Engine: Integration with advanced parsing APIs to accurately extract candidate data and populate profiles automatically.'
            },
            {
              type: 'paragraph',
              content: '• Authentication & Identity: Secure account creation supporting multiple OAuth providers (Google, LinkedIn) alongside standard email authentication.'
            },
            {
              type: 'paragraph',
              content: '• Calendar & Scheduling Integration: Bi-directional sync with calendar providers to facilitate seamless scheduling for interviews and screenings.'
            },
            {
              type: 'paragraph',
              content: '• Assessment & Transcription API: Direct API integration with external testing services to trigger technical assessments, fetch scores, and handle automated transcription of video interviews.'
            },
            {
              type: 'paragraph',
              content: '• Dynamic Job Boards: Automated syndication of job listings to external platforms like LinkedIn and Indeed to drive candidate acquisition.'
            }
          ]
        },
        {
          title: 'IV. Data & Content Management',
          content: [
            {
              type: 'paragraph',
              content: 'A strict requirement for the Skillina platform is the complete externalization of static content. All platform text, UI labels, emails, and system messages are stored in external CSV files rather than being hard-coded into the application logic.'
            },
            {
              type: 'paragraph',
              content: 'This approach ensures that non-technical team members can easily update copy, manage translations, and iterate on marketing messaging without requiring engineering deployment cycles. It also facilitates a cleaner, more maintainable codebase.'
            }
          ]
        },
        {
          title: 'V. PG-AGI Value Proposition',
          content: [
            {
              type: 'paragraph',
              content: 'For the Skillina Talent Marketplace, PG-AGI leverages its expertise in building scalable, integration-heavy platforms. We design systems that are loosely coupled, allowing the seamless swap or upgrade of external services (like CV parsing or transcription) without disrupting core business operations.'
            },
            {
              type: 'paragraph',
              content: 'Our focus on robust architecture, automated workflows, and maintainable data structures ensures that Skillina can scale efficiently while providing a premium experience for both candidates and recruiters.'
            }
          ]
        }
      ]
    };

    // check if it already exists to update it
    const existing = await collection.findOne({ slug: caseStudy.slug });
    if (existing) {
      await collection.updateOne({ slug: caseStudy.slug }, { $set: caseStudy });
      console.log('Case Study updated successfully');
    } else {
      await collection.insertOne(caseStudy);
      console.log('Case Study created successfully');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

run();
