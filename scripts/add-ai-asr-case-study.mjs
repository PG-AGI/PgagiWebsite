import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'test';

async function run() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('caseStudies');

    const newCaseStudy = {
      title: 'AI ASR Doctor: Clinical Documentation Platform',
      slug: 'ai-asr-doctor-clinical-documentation-platform',
      category: 'AI SaaS',
      description: 'A comprehensive medical transcription and clinical documentation platform enabling doctors to record patient sessions in real-time and instantly convert spoken consultations into structured clinical summaries and ICD-10/CPT codes.',
      coverImage: '/assets/CaseStudies/AiAsrCover.jpg',
      client: {
        name: 'Healthcare Client',
        industry: 'HealthTech / SaaS',
        role: 'Full Stack Engineering, AI Integration'
      },
      overview: 'We designed and shipped a comprehensive medical transcription and clinical documentation platform. Our system allows medical practitioners to record patient sessions in real-time, instantly converting spoken consultations into structured clinical summaries and automatically generating accurate ICD-10 and CPT codes.',
      tags: ['Speech-to-Text', 'Generative AI', 'Healthcare Tech', 'Next.js 15', 'WebSockets', 'HIPAA Compliant'],
      sections: [
        {
          title: 'I. Core Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'The platform is organized around two primary flows: the clinical recording & transcription flow for doctors, and the clinic management flow for administrators.'
            },
            {
              type: 'paragraph',
              content: 'The frontend is built on Next.js 15 (App Router) with React 19, chosen for its hybrid rendering capabilities and performance. The architecture relies heavily on TypeScript for end-to-end type safety, critical in medical applications where data schemas must be strictly enforced.'
            },
            {
              type: 'paragraph',
              content: 'The backend is a high-performance Python application handling the AI models, websockets for transcription, and PostgreSQL for relational data. The communication layer is managed through a centralized Axios service configuration, ensuring that auth tokens, error handling, and toast notifications are consistent across every API call.'
            }
          ]
        },
        {
          title: 'II. Real-Time Transcription Pipeline',
          content: [
            {
              type: 'paragraph',
              content: 'The most technically complex feature of the platform is the real-time session recording. Standard REST APIs are too slow for streaming audio, so we built a custom WebSocket-based transcription service.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/ai-asr/transcription-process.png',
              alt: 'AI Transcription Process',
              caption: 'Real-time chunked audio streaming over WebSockets.'
            },
            {
              type: 'paragraph',
              content: 'When a doctor starts a session, the browser\'s MediaRecorder API captures the microphone input using the WebM/Opus codec. Instead of waiting for the session to end, the frontend captures audio in discrete 5-second chunks.'
            },
            {
              type: 'paragraph',
              content: 'These chunks are instantly Base64-encoded and streamed over a WebSocket (ws://) connection to the backend ASR (Automatic Speech Recognition) engine. This ensures that transcription happens continuously with minimal latency, and network interruptions only result in the loss of a few seconds of data rather than the entire session.'
            },
            {
              type: 'paragraph',
              content: 'Once the audio is transcribed into raw text, it passes through a multi-stage AI pipeline: Clinical Summarization (into HPI, Assessment, Plan) and Medical Code Generation (ICD-10 and CPT).'
            }
          ]
        },
        {
          title: 'III. Service Layer & State Management',
          content: [
            {
              type: 'paragraph',
              content: 'We deliberately avoided heavy global state managers like Redux in favor of native React Contexts tightly scoped to their domains, working alongside a strictly typed Service Layer.'
            },
            {
              type: 'paragraph',
              content: 'The Service Layer abstracts all API calls into domain-specific modules. We implemented a strict pattern where every service method returns a { data, error } object. This eliminates verbose try/catch blocks inside UI components and enforces a predictable error-handling flow.'
            },
            {
              type: 'paragraph',
              content: 'To optimize performance and minimize redundant API calls, we built a custom useCache hook. This hook implements a time-based caching mechanism directly in the browser. When a component mounts, it checks the local cache store first before initiating a network request, drastically improving the perceived load times of heavy clinical dashboards.'
            }
          ]
        },
        {
          title: 'IV. Component Library and Design System',
          content: [
            {
              type: 'paragraph',
              content: 'The UI was engineered to minimize cognitive load for physicians who are already experiencing screen fatigue. We implemented a clean, dark-mode prioritized interface using CSS Modules and Lucide React icons.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/ai-asr/doctor-dashboard.png',
              alt: 'Doctor Dashboard Interface',
              caption: 'Clean, dark-mode prioritized interface minimizing cognitive load.'
            },
            {
              type: 'paragraph',
              content: 'We centralized our design system using CSS variables, defining semantic tokens for typography, spacing, surfaces, and accent colors. By pairing this with CSS Modules, we achieved locally scoped, highly reusable component styling without the bloat of large utility-first frameworks.'
            },
            {
              type: 'paragraph',
              content: 'Instead of traditional loading spinners, we engineered a custom shimmer CSS animation applied to skeleton components. This maintains the structural layout of the page while data is fetching, preventing layout shifts and making the application feel faster and more responsive.'
            }
          ]
        },
        {
          title: 'V. Advanced Routing and Security (HOCs)',
          content: [
            {
              type: 'paragraph',
              content: 'In healthcare software, access control is paramount. The platform supports three distinct roles: doctor, admin, and sub-admin.'
            },
            {
              type: 'paragraph',
              content: 'We implemented a robust JWT-based authentication flow with OTP verification, supported by a system of Higher-Order Components (HOCs) for route protection: withAuth wraps protected pages and verifies both the presence of a JWT and the specific user role before rendering; withErrorBoundary wraps complex clinical views to prevent the entire application from crashing if an edge-case rendering error occurs.'
            }
          ]
        },
        {
          title: 'VI. Exporting & Reporting',
          content: [
            {
              type: 'paragraph',
              content: 'A critical requirement was generating professional, portable medical reports. We integrated jsPDF and html2canvas directly into the frontend. This allows physicians to click an "Export to PDF" button on any generated report, capturing the structured summary, generated ICD-10 codes, and clinical signatures into a HIPAA-compliant document format ready for the patient\'s EHR system.'
            }
          ]
        },
        {
          title: 'VII. Why This Architecture?',
          content: [
            {
              type: 'paragraph',
              content: 'Every decision was made to balance real-time performance with clinical reliability. Using WebSockets for audio chunks provides a seamless experience for doctors, preventing the frustration of waiting minutes for an entire recording to upload. The decoupled Service Layer allows us to swap out AI models or backend endpoints without rewriting a single React component.'
            },
            {
              type: 'paragraph',
              content: 'The use of CSS Modules and centralized design tokens keeps the platform\'s aesthetic tightly controlled and accessible. Scoped React Contexts keep the application lightweight and prevent unnecessary re-renders during high-frequency audio chunking.'
            },
            {
              type: 'paragraph',
              content: 'The AI ASR Doctor platform represents our commitment to building intelligent, reliable software that actively reduces the administrative burden on healthcare professionals, allowing them to focus on what matters most: patient care.'
            }
          ]
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await collection.updateOne(
      { slug: newCaseStudy.slug },
      { $set: newCaseStudy },
      { upsert: true }
    );
    console.log('Successfully added AI ASR Doctor case study.');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

run();
