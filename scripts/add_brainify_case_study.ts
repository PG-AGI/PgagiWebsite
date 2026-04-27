import { MongoClient } from 'mongodb';
const uri = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('caseStudies');

    const caseStudy = {
      slug: 'brainify-edtech-platform',
      contentType: 'Technical Architecture Report',
      coverImage: '/images/cs_edtech_brainify_v3.png',
      title: 'Ed Tech Platform (brAInify) : AI-Powered Gamified Learning Platform',
      publishDate: 'April 25, 2026',
      readTime: '6 min read',
      author: {
        name: 'PG-AGI',
        role: 'Engineering Team',
      },
      metaDescription: 'A technical architecture report for brAInify, an AI-powered gamified learning platform.',
      metaKeywords: 'EdTech, brAInify, AI, Gamification, Technical Architecture, Learning Platform',
      metaAuthor: 'PG-AGI',
      metaTitle: 'Ed Tech Platform (brAInify) | PG-AGI',
      createdAt: new Date(),
      updatedAt: new Date(),
      sections: [
        {
          title: 'I. Overview',
          content: [
            {
              type: 'paragraph',
              content: 'brAInify is a mobile-first, invite-only, multilingual learning platform designed to help users build practical real-world skills through structured, gamified educational journeys. The platform combines guided progression systems, AI-driven personalization, and habit-forming engagement loops to create an interactive and adaptive learning experience inspired by modern gamified learning platforms.'
            },
            {
              type: 'paragraph',
              content: 'The platform will initially support six independent learning paths: AI Path, Creator Path, Trader Path, Crypto Path, Financial Literacy Path, and Youth Path.'
            },
            {
              type: 'paragraph',
              content: 'Each learning path follows a strict progression hierarchy, including 3 Levels per Path (Foundational, Builder, Mastery) and 8–10 Units per Level.'
            },
            {
              type: 'paragraph',
              content: 'The system is architected so that every learning path operates independently, ensuring user progress, rewards, analytics, and learning history remain isolated and organized across multiple enrolled paths.'
            },
            {
              type: 'paragraph',
              content: 'Rather than functioning as a static content-delivery platform, brAInify is designed as an intelligent learning ecosystem where AI continuously evaluates learner performance, identifies weak areas, adjusts difficulty, and provides personalized guidance to improve outcomes over time.'
            },
            {
              type: 'box',
              content: {
                heading: 'Recommendation',
                text: 'The final user-facing experience should prioritize gamification, emotional reward loops, and mobile-native responsiveness, with UX inspiration drawn from platforms such as Duolingo while tailored specifically for advanced skill-based learning.'
              }
            }
          ]
        },
        {
          title: 'II. System Overview',
          content: [
            {
              type: 'paragraph',
              content: 'The brAInify platform follows a layered, modular architecture engineered to provide scalability, maintainability, and clear separation of responsibilities across all major platform functions. Each layer is designed as an independent but interconnected service domain, ensuring that the platform can scale individual subsystems without impacting the broader application architecture.'
            },
            {
              type: 'paragraph',
              content: 'This architecture enables brAInify to support structured educational progression, AI-powered adaptive learning, multilingual content delivery, gamified engagement systems, and real-time learner analytics while maintaining high performance and future extensibility.'
            },
            {
              type: 'paragraph',
              content: 'The overall system is centered around the complete learner lifecycle—from invite-based onboarding and authentication to lesson consumption, AI feedback generation, reward distribution, and long-term progress tracking.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/brainify/fig-1.png',
              alt: 'Figure 1: System Architecture',
              caption: 'Figure 1: System Architecture'
            },
            {
              type: 'paragraph',
              content: 'The platform architecture is organized into multiple operational layers, each responsible for a distinct part of the learner experience and platform intelligence pipeline.'
            },
            {
              type: 'highlight',
              content: 'User Layer'
            },
            {
              type: 'paragraph',
              content: 'The User Layer represents the learner as the primary actor within the ecosystem and defines the high-level actions users perform while interacting with the platform.'
            },
            {
              type: 'paragraph',
              content: 'Users begin their journey by installing the mobile application and authenticating into the system. Once authenticated, they enter invite codes that unlock specific learning paths based on entitlement rules. From there, learners progress through structured educational journeys by completing lessons, answering questions, receiving AI-generated feedback, earning XP, maintaining streaks, and unlocking higher progression levels over time.'
            },
            {
              type: 'paragraph',
              content: 'The platform is intentionally designed around habit-forming educational behavior, meaning the learner experience emphasizes short daily interactions, consistent progress visibility, positive reinforcement, and sequential advancement to maximize engagement and completion rates.'
            },
            {
              type: 'paragraph',
              content: 'Core user actions supported in this layer include:'
            },
            {
              type: 'paragraph',
              content: '• Account registration and login'
            },
            {
              type: 'paragraph',
              content: '• Invite-based course/path unlocking'
            },
            {
              type: 'paragraph',
              content: '• Daily lesson participation'
            },
            {
              type: 'paragraph',
              content: '• AI-assisted answer review'
            },
            {
              type: 'paragraph',
              content: '• XP and reward collection'
            },
            {
              type: 'paragraph',
              content: '• Streak maintenance'
            },
            {
              type: 'paragraph',
              content: '• Learning path progression'
            },
            {
              type: 'paragraph',
              content: '• Revision and recommendation interactions'
            },
            {
              type: 'paragraph',
              content: '• Feedback / review submissions'
            },
            {
              type: 'highlight',
              content: 'Mobile Application Layer'
            },
            {
              type: 'paragraph',
              content: 'The Mobile Application Layer serves as the primary presentation and interaction layer of the platform. It is responsible for rendering the complete learner-facing experience while orchestrating communication between frontend interfaces and backend services.'
            },
            {
              type: 'paragraph',
              content: 'This layer includes all learner-facing and admin-facing mobile interfaces, including onboarding, dashboard, course navigation, lesson delivery, reward systems, and progress visualization. The mobile experience is designed to prioritize speed, clarity, and gamified engagement. Every interaction is optimized for mobile-native responsiveness and minimal friction to encourage repeated daily usage.'
            },
            {
              type: 'paragraph',
              content: 'Primary frontend modules include:'
            },
            {
              type: 'paragraph',
              content: 'Onboarding & Access Interfaces: Invite code entry screens, Registration / login screens, Session restoration and persistent authentication, and Initial course unlock and entitlement flows.'
            },
            {
              type: 'paragraph',
              content: 'Learning Experience Interfaces: Dashboard and continue-learning view, Path / level / unit navigation screens, Lesson content and interaction screens, Answer submission and evaluation UI, and AI feedback / explanation views.'
            },
            {
              type: 'paragraph',
              content: 'Gamification Interfaces: XP gain animations, Streak indicators, Progress bars, Reward / celebration screens, and Level completion / milestone popups.'
            },
            {
              type: 'paragraph',
              content: 'Progress & Review Interfaces: User progress summaries, Weak area review prompts, Suggested revision lessons, and Learning history views.'
            },
            {
              type: 'paragraph',
              content: 'Admin / Internal Analytics Interfaces: Internal dashboard views, Course performance monitoring, User progression visualization, and Review / feedback moderation.'
            },
            {
              type: 'paragraph',
              content: 'All user interactions captured within the mobile layer are transmitted to backend services in real time to maintain synchronized progress and analytics.'
            },
            {
              type: 'highlight',
              content: 'Auth & User Management Layer'
            },
            {
              type: 'paragraph',
              content: 'The Authentication and User Management Layer governs identity verification, account security, and user-session lifecycle management across the platform. This layer ensures that every learner is securely authenticated and that all subsequent platform activity is mapped accurately to the appropriate user profile.'
            },
            {
              type: 'paragraph',
              content: 'Authentication Responsibilities: User registration and account creation, Login / logout handling, Password reset / recovery, Token issuance and refresh flows, and Session expiration handling.'
            },
            {
              type: 'paragraph',
              content: 'Authorization Responsibilities: Secure route / API protection, Role-based permission enforcement, Admin vs learner access segmentation, and Internal dashboard access control.'
            },
            {
              type: 'paragraph',
              content: 'Identity Mapping Responsibilities: Link progress to authenticated user, Link entitlements to account, Maintain user profile metadata, and Persist language and personalization preferences.'
            },
            {
              type: 'highlight',
              content: 'Invite Code & Entitlement Layer'
            },
            {
              type: 'paragraph',
              content: 'The Invite Code and Entitlement Layer controls learner access to educational content and enforces the invite-only business model of the platform. Rather than allowing open enrollment, brAInify uses entitlement-based onboarding to determine which users can access specific learning paths.'
            },
            {
              type: 'paragraph',
              content: 'This layer validates whether an invite code: Exists, Is active, Has not expired, Has not exceeded usage limits, Maps to a valid learning path, Has not been previously redeemed improperly. Once validated, the system grants entitlement for the associated path and stores that mapping permanently against the learner account.'
            },
            {
              type: 'highlight',
              content: 'Learning Content Layer'
            },
            {
              type: 'paragraph',
              content: 'The Learning Content Layer serves as the structured educational engine of the platform and defines the hierarchical organization of all learning material. All educational content is stored and delivered according to a strict progression hierarchy: Path → Level → Unit → Lesson.'
            },
            {
              type: 'highlight',
              content: 'Gamification Layer'
            },
            {
              type: 'paragraph',
              content: 'The Gamification Layer transforms structured education into a habit-forming, emotionally rewarding experience by introducing reinforcement systems modeled after successful consumer learning products. Its primary purpose is to maximize user retention, consistency, and motivation through immediate and long-term reward mechanisms.'
            },
            {
              type: 'highlight',
              content: 'AI Learning Intelligence Layer'
            },
            {
              type: 'paragraph',
              content: 'The AI Learning Intelligence Layer serves as the adaptive educational brain of the platform and powers personalized learner feedback and intelligent progression support. Unlike static educational systems, this layer continuously evaluates learner behavior and performance to adapt the educational experience in real time.'
            },
            {
              type: 'highlight',
              content: 'Progress Tracking Layer'
            },
            {
              type: 'paragraph',
              content: 'The Progress Tracking Layer records all learner activity and transforms raw platform interactions into structured educational progress records. This layer provides the platform’s operational memory of learner behavior.'
            },
            {
              type: 'highlight',
              content: 'Data Storage Layer'
            },
            {
              type: 'paragraph',
              content: 'The Data Storage Layer acts as the centralized persistence foundation for the entire platform. It stores and maintains all critical structured and semi-structured platform data.'
            }
          ]
        },
        {
          title: 'III. Learning & User Flow Architecture',
          content: [
            {
              type: 'image',
              src: '/assets/CaseStudies/brainify/fig-2.png',
              alt: 'Figure 2: User Flow Diagram',
              caption: 'Figure 2: User Flow Diagram'
            },
            {
              type: 'paragraph',
              content: 'The learner progression follows a strict guided flow: Invite Code → Dashboard → Path → Level → Unit → Lesson → AI Feedback → Reward → Progress Update. This ensures users cannot bypass foundational concepts and must complete structured progression sequentially.'
            },
            {
              type: 'image',
              src: '/assets/CaseStudies/brainify/fig-3.png',
              alt: 'Figure 3: AI Path Detailed Learning Flow',
              caption: 'Figure 3: AI Path Detailed Learning Flow'
            },
            {
              type: 'paragraph',
              content: 'Each lesson follows a closed-loop learning cycle: Content Presentation → User Response Submission → AI Evaluation → Personalized Feedback → Reward Trigger → Weakness Detection → Revision Recommendation → Next Lesson Unlock. This loop creates continuous learning reinforcement while enabling adaptive personalization.'
            }
          ]
        },
        {
          title: 'IV. Technical Stack',
          content: [
            {
              type: 'table',
              content: {
                headers: ['Layer', 'Technology', 'Responsibilities'],
                rows: [
                  ['Mobile Frontend', 'React Native', 'Learning UI, gamification UX, navigation, lesson rendering'],
                  ['Backend APIs', 'FastAPI (Python)', 'Auth, progression logic, invite codes, gamification, analytics'],
                  ['Database', 'PostgreSQL', 'Structured learning data, users, progress, invite codes'],
                  ['Cache / Async', 'Redis + Background Workers', 'Job queues, caching, streak calculations'],
                  ['AI Layer', 'LLM APIs + LangChain', 'Feedback generation, evaluation, adaptive learning'],
                  ['Vector Database', 'Vector Store', 'Weak-area similarity search, AI personalization memory'],
                  ['Analytics', 'ClickHouse / BigQuery', 'Event analytics and learning metrics'],
                  ['Dashboard', 'React / Admin Frontend', 'Internal analytics and admin management'],
                  ['Infrastructure', 'Docker + AWS/GCP', 'Deployment, scaling, monitoring, logging'],
                  ['CI/CD', 'GitHub Actions', 'Automated build, testing, deployment pipelines']
                ]
              }
            }
          ]
        },
        {
          title: 'V. Multilingual Learning Architecture',
          content: [
            {
              type: 'paragraph',
              content: 'As a core product differentiator, brAInify supports multilingual course delivery while maintaining a single primary UI language.'
            },
            {
              type: 'highlight',
              content: 'Supported Scope'
            },
            {
              type: 'paragraph',
              content: 'Localization applies to: Lessons, Course Content, AI Feedback / Explanations. Localization does not apply to full app UI translation in Phase 1.'
            },
            {
              type: 'highlight',
              content: 'Translation Pipeline'
            },
            {
              type: 'paragraph',
              content: 'Primary lesson content is stored as source-of-truth. AI-assisted localization pipeline: Source lesson ingested → Translation generated via AI → Stored in translation tables → Cached for reuse → Served based on learner language preference. This avoids expensive real-time translation calls while preserving performance.'
            }
          ]
        },
        {
          title: 'VI. Analytics & Admin Intelligence',
          content: [
            {
              type: 'image',
              src: '/assets/CaseStudies/brainify/fig-4.png',
              alt: 'Figure 4: Admin Dashboard Architecture',
              caption: 'Figure 4: Admin Dashboard Architecture'
            },
            {
              type: 'paragraph',
              content: 'An internal analytics dashboard provides visibility into learner engagement and platform performance.'
            },
            {
              type: 'paragraph',
              content: 'Core Metrics Tracked: Total Platform Users, Users Per Course, Course Enrollment Distribution, Progress by Path / Level / Unit / Lesson, Completion Rates, XP Velocity, Accuracy Trends, Lesson Drop-Off Points, and Feedback / Review Data.'
            },
            {
              type: 'paragraph',
              content: 'These analytics enable continuous optimization of lesson sequencing, difficulty, and learning outcomes.'
            }
          ]
        },
        {
          title: 'VII. Delivery Timeline (10 Weeks)',
          content: [
            {
              type: 'paragraph',
              content: 'Week 1 — Product Foundation & Architecture: Finalize learning hierarchy and gamification rules. Lock user flow and architecture. Initialize frontend/backend projects.'
            },
            {
              type: 'paragraph',
              content: 'Week 2 — Authentication & Invite Access: Auth system implementation. Invite code validation service. Onboarding UI and entitlement flows.'
            },
            {
              type: 'paragraph',
              content: 'Week 3 — Dashboard & Learning Structure: Learning hierarchy engine. Dashboard UI. Path / Level / Unit progression APIs.'
            },
            {
              type: 'paragraph',
              content: 'Week 4 — Core Lesson Experience: Lesson engine. Lesson APIs. Learning screens. Core learning loop integration.'
            },
            {
              type: 'paragraph',
              content: 'Week 5 — Gamification Systems: XP engine. Streak tracking. Rewards UI. Level unlock logic.'
            },
            {
              type: 'paragraph',
              content: 'Week 6 — AI Learning Intelligence: AI evaluation pipeline. Adaptive difficulty engine. Revision recommendation logic.'
            },
            {
              type: 'paragraph',
              content: 'Week 7–8 — Analytics & Admin Dashboard: Activity logging. Aggregation pipelines. Admin dashboard frontend/backend.'
            },
            {
              type: 'paragraph',
              content: 'Week 9 — Platform Hardening: Performance optimization. Security validation. Multi-path support. Future extensibility hooks.'
            },
            {
              type: 'paragraph',
              content: 'Week 10 — QA & Final Delivery: End-to-end testing. Edge-case validation. Bug fixing. Final demo. Documentation & handover.'
            }
          ]
        },
        {
          title: 'VIII. Documentation, Security & Handover',
          content: [
            {
              type: 'paragraph',
              content: 'Upon final delivery, the following will be included:'
            },
            {
              type: 'paragraph',
              content: 'Documentation Deliverables: System Architecture Documentation, API Documentation, Database Schema References, Deployment Guides, Environment Setup Instructions, and Troubleshooting Guides.'
            },
            {
              type: 'paragraph',
              content: 'Security Deliverables: Secure credential handling, Environment variable management, Secret rotation before handover, and Removal of hardcoded credentials.'
            },
            {
              type: 'paragraph',
              content: 'Code Handover: GitHub / Private Repository Transfer, Full Version History, Structured Branch Strategy, and Production-Ready Codebase.'
            },
            {
              type: 'paragraph',
              content: 'IP Ownership: Full intellectual property ownership of Source Code, Learning Systems, Architecture, AI Logic, and Platform Workflows. Transferred to client upon final settlement.'
            }
          ]
        },
        {
          title: 'IX. PG-AGI Value Proposition',
          content: [
            {
              type: 'paragraph',
              content: 'At PG-AGI, we build production-grade AI systems and scalable digital platforms designed for long-term business value.'
            },
            {
              type: 'paragraph',
              content: 'Our team combines expertise across:\n- AI Research\n- Applied AI Engineering\n- Backend Architecture\n- Mobile Development\n- UI/UX Design\n- DevOps & Infrastructure\n- Program Management'
            },
            {
              type: 'paragraph',
              content: 'We focus on building systems that are: Scalable, Maintainable, AI-First, Production-Ready, and Business-Aligned.'
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
