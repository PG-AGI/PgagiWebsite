'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/organisms/JoveCaseStudy.module.scss';
import type { CaseStudyData } from '@/services/getCaseStudy';

interface JoveCaseStudyProps {
  caseStudy?: CaseStudyData | null;
}

// ── Running Header ──
function RunningHeader() {
  return (
    <div className={styles.runningHeader}>
      <span className={styles.brandLogo}>PG-AGI</span>
      <span className={styles.headerMeta}>Digital Twin / Case Study</span>
    </div>
  );
}

// ── Running Footer ──
function RunningFooter({ pageNumber }: { pageNumber: string }) {
  return (
    <div className={styles.runningFooter}>
      <span>Pgagi.in / Product Engineering</span>
      <span className={styles.footerPage}>Page {pageNumber}</span>
    </div>
  );
}

// ── Down arrow used inside the architecture flowchart ──
function ArchArrow() {
  return (
    <div className={styles.archArrow}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v16M6 13l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function JoveCaseStudy({ caseStudy }: JoveCaseStudyProps) {
  return (
    <div className={styles.jovePage}>
      {/* ══════════════════════════════════════════════════════════════════════
          PAGE 1: Cover Header & Platform Essence
      ══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroCoverSection}>
        <div className={styles.rail}>
          <RunningHeader />

          <div className={styles.coverHeaderTag}>
            PG-AGI / ENGINEERING CASE STUDY
          </div>

          <h1 className={styles.coverTitle}>Digital Twin</h1>
          <h2 className={styles.coverSubtitle}>AI powered expert knowledge platform</h2>

          <p className={styles.coverBoldLine}>
            Enterprise expertise made discoverable and conversational
          </p>

          <p className={styles.coverLeadDesc}>
            PG-AGI designed and shipped a platform that turns an expert&rsquo;s documented experience into a digital twin. Users discover relevant expertise, ask questions in text or voice, inspect the supporting knowledge, and connect with the expert behind the answers.
          </p>

          <div className={styles.showcaseImageContainer}>
            <Image
              src="/case-studies/Digital-Twin-Images/01-Hero-Homepage.jpg"
              alt="Digital Twin – AI-powered digital twins trained on real experts, with featured digital twin cards"
              width={1242}
              height={984}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Product Experience</strong> / Problem-led discovery and featured digital twins
          </p>

          <div className={styles.coverTaglineFooter}>
            Product Design / Full Stack Engineering / Applied AI
          </div>
          <div className={styles.coverSignoff}>
            PG-AGI &nbsp;|&nbsp; Playing God with AGI
          </div>

          <RunningFooter pageNumber="1" />
        </div>
      </section>

      <div className={styles.rail}>
        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 2: Contents
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>PG-AGI / ENGINEERING CASE STUDY</span>
          <h2 className={styles.sectionTitle}>Contents</h2>
          <p className={styles.sectionSubtitle}>
            From expert knowledge to a working product
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '82%' }}>SECTION</th>
                  <th style={{ width: '18%' }}>PAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>01 What We Built</td>
                  <td>03</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>02 Core Architecture</td>
                  <td>04</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>03 Credit System and Monetisation</td>
                  <td>06</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>04 User-Facing Features</td>
                  <td>07</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>05 Security and Auditability</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>06 What Makes This Different</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>07 Outcomes</td>
                  <td>13</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.showcaseImageContainer}>
            <Image
              src="/case-studies/Digital-Twin-Images/02-EntrySignIn-LaptopMockup.jpg"
              alt="Digital Twin – Access Proven Enterprise Expertise, laptop mockup"
              width={1391}
              height={958}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Entry Experience</strong> / Access to expert knowledge begins with a dedicated sign-in surface
          </p>


          <p className={styles.sectionParagraph}>
            The case study follows the platform&rsquo;s two connected journeys: experts building and improving twins, and users finding answers through those twins.
          </p>

          <RunningFooter pageNumber="2" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 3: 01 What We Built
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 01 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>What We Built</h2>
          <p className={styles.sectionSubtitle}>
            A product for capturing, distributing, and improving expert knowledge
          </p>

          <p className={styles.sectionParagraph}>
            Expertise often sits inside project documents and the memory of the people who solved the problem. That makes it difficult to discover, difficult to reuse, and dependent on the expert being available for every question.
          </p>

          <p className={styles.sectionParagraph}>
            We built a shared platform with an expert Studio and a user discovery experience. Experts structure their experience into knowledge units, test their twins in a Playground, and control publication. Users describe a problem, find a relevant twin, and receive answers grounded in that twin&rsquo;s knowledge.
          </p>

          <div className={styles.showcaseImageContainer} style={{ maxWidth: '520px' }}>
            <Image
              src="/case-studies/Digital-Twin-Images/03-EntrySignIn-SignInPanel.jpg"
              alt="Digital Twin – Sign-in panel with LinkedIn, Google, and Email options"
              width={986}
              height={878}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>EXPERIENCE</th>
                  <th>DELIVERED CAPABILITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Expert Studio</td>
                  <td>Create, configure, test, publish, and monitor digital twins.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>User experience</td>
                  <td>Discover expertise, inspect profiles, converse, bookmark, and reconnect.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Shared AI layer</td>
                  <td>Structured ingestion, semantic retrieval, cited answers, and voice interaction.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="3" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 4: 02 Core Architecture
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 02 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Core Architecture</h2>
          <p className={styles.sectionSubtitle}>
            Two product journeys connected by a shared knowledge and AI layer
          </p>

          <p className={styles.sectionParagraph}>
            Next.js powers discovery pages and interactive conversations. FastAPI handles application services and validated requests. PostgreSQL stores profiles, twin metadata, knowledge records, credits, feedback, and bookmarks; pgvector keeps semantic retrieval alongside relational data.
          </p>

          {/* Architecture Flowchart */}
          <div className={styles.archFlowchartContainer}>
            <div className={styles.archRowSplit}>
              <div className={styles.archBoxBlue}>
                <span className={styles.archBoxTitle}>EXPERT STUDIO</span>
                <span className={styles.archBoxSubtitle}>Documents • Playground • Publish</span>
              </div>
              <div className={styles.archBoxBlue}>
                <span className={styles.archBoxTitle}>USER EXPERIENCE</span>
                <span className={styles.archBoxSubtitle}>Discovery • Profiles • Text and voice</span>
              </div>
            </div>

            <div className={styles.archArrowRowSplit}>
              <ArchArrow />
              <ArchArrow />
            </div>

            <div className={styles.archBoxNavy}>
              <span className={styles.archBoxTitle}>FASTAPI APPLICATION SERVICES</span>
              <span className={styles.archBoxSubtitle}>Authentication • Twin management • Credits • Feedback</span>
            </div>

            <div className={styles.archArrowRowSplit}>
              <ArchArrow />
              <ArchArrow />
            </div>

            <div className={styles.archRowSplit}>
              <div className={styles.archBoxBlue}>
                <span className={styles.archBoxTitle}>DISCOVERY</span>
                <span className={styles.archBoxSubtitle}>Cross-twin retrieval • Explicit ranking</span>
              </div>
              <div className={styles.archBoxBlue}>
                <span className={styles.archBoxTitle}>CONVERSATION</span>
                <span className={styles.archBoxSubtitle}>Selected twin only • RAG • Citations</span>
              </div>
            </div>

            <div className={styles.archArrowRowSplit}>
              <ArchArrow />
              <ArchArrow />
            </div>

            <div className={styles.archBoxNavy}>
              <span className={styles.archBoxTitle}>POSTGRESQL AND PGVECTOR</span>
              <span className={styles.archBoxSubtitle}>Knowledge units • Embeddings • Profiles • Credit ledger</span>
            </div>

            <ArchArrow />

            <div className={styles.archBoxNavy}>
              <span className={styles.archBoxTitle}>GOOGLE CLOUD RUNTIME</span>
              <span className={styles.archBoxSubtitle}>Cloud Run • Cloud SQL • Secret Manager • Logging</span>
            </div>
          </div>

          <p className={styles.calloutLabel}>
            <strong>ARCHITECTURE</strong> / Application services, retrieval boundaries, and managed cloud runtime
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '26%' }}>LAYER</th>
                  <th>IMPLEMENTATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Knowledge ingestion</td>
                  <td>Document parsing and normalization; text-embedding-3-large embeddings linked to structured records.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>AI integration</td>
                  <td>Unified provider wrapper for answer generation, Google ASR transcription, and speech synthesis.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Cloud runtime</td>
                  <td>Containerized backend on Google Cloud Run; Cloud SQL, Secret Manager, Cloud Logging, and Cloud Monitoring.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="4" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 5: 02 Core Architecture — Knowledge capture and release
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 02 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Knowledge capture and release</h2>
          <p className={styles.sectionSubtitle}>
            Structured experience enters through a controlled expert workflow
          </p>

          <p className={styles.sectionParagraph}>
            Documents are parsed into atomic knowledge units containing the problem, context, constraints, alternatives, decision reasoning, outcome, confidence, and recency. Immutable identifiers link embeddings to their source records. Where a document leaves gaps, targeted voice clarification adds normalized knowledge through the same pipeline.
          </p>

          <div className={styles.twoImageShowcase}>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/Digital-Twin-Images/05-TextPlayground.jpg"
                alt="Digital Twin – Text Playground with source-linked responses and twin configuration"
                width={926}
                height={758}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <p className={styles.calloutLabel}>
                <strong>Text Playground</strong> / Source-linked responses and expert configuration
              </p>
            </div>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/Digital-Twin-Images/06-VoicePlayground.jpg"
                alt="Digital Twin – Voice Playground with speech interaction and knowledge file controls"
                width={924}
                height={804}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <p className={styles.calloutLabel}>
                <strong>Voice Playground</strong> / Speech interaction and knowledge file controls
              </p>
            </div>
          </div>

          <h3 className={styles.accentSubhead}>Test before publication</h3>
          <p className={styles.sectionParagraph}>
            Experts probe the twin with real questions, edit its profile, and add or replace knowledge files in draft. Publishing moves the tested changes to live; experts also control public or private visibility. A live twin can continue serving users while its next version is refined.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '50%' }}>DRAFT</th>
                  <th>LIVE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Isolated testing with ephemeral responses</td>
                  <td>Published twin available to its permitted audience</td>
                </tr>
                <tr>
                  <td>Separate token accounting and excluded from live analytics</td>
                  <td>User interactions contribute to operational analytics</td>
                </tr>
                <tr>
                  <td>Knowledge changes pass through ingestion again</td>
                  <td>Ongoing conversations remain available during draft work</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="5" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 6: 03 Credit System and Monetisation
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 03 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Credit System and Monetisation</h2>
          <p className={styles.sectionSubtitle}>
            User credits and expert storage subscriptions
          </p>

          <p className={styles.sectionParagraph}>
            Users purchase credits to interact with digital twins. Razorpay handles payment collection, while confirmed webhook events update an internal credit ledger. The ledger remains the authoritative balance record, independent of the payment provider.
          </p>

          <p className={styles.sectionParagraph}>
            Experts subscribe according to storage needs. As their knowledge base expands across documents, structured records, and embeddings, the subscription model scales with that footprint.
          </p>

          <div className={styles.showcaseImageContainer} style={{ maxWidth: '760px' }}>
            <Image
              src="/case-studies/Digital-Twin-Images/07-TwinSettlement.jpg"
              alt="Digital Twin – Twin Settlement page with earnings, payout status, and transaction history"
              width={914}
              height={812}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Expert Finance</strong> / Settlement history, transaction status, and payout visibility
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>COMMERCIAL FLOW</th>
                  <th>PLATFORM RESPONSIBILITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Credit purchase</td>
                  <td>Confirm payment before updating the internal ledger.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Conversation usage</td>
                  <td>Consume credits against the user&rsquo;s recorded balance.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Payment exceptions</td>
                  <td>Keep refunds, failed transactions, and webhook retries from creating inconsistent balances.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Expert subscription</td>
                  <td>Align storage tiers with the growing knowledge footprint.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="6" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 7: 04 User-Facing Features — Discovery
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 04 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>User-Facing Features</h2>
          <p className={styles.sectionSubtitle}>
            Discovery begins with the problem a user needs to solve
          </p>

          <p className={styles.sectionParagraph}>
            Users can search by a natural-language problem, expert name, twin name, or scenario. The system embeds the query, retrieves relevant knowledge units across published twins, groups the results by twin, and ranks them using a deterministic score.
          </p>

          <div className={styles.showcaseImageContainer}>
            <Image
              src="/case-studies/Digital-Twin-Images/08-Discovery-Results.jpg"
              alt="Digital Twin – Discovery results with ranked twins, filters, and scenario counts"
              width={1258}
              height={1122}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Discovery</strong> / Ranked twins, relevance context, and filters in a single results view
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '65%' }}>RANKING SIGNAL</th>
                  <th>WEIGHT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Semantic similarity</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Problem frequency</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Expert experience</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Successful outcomes</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Recency</td>
                  <td>5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.sectionParagraph}>
            Ranking is separate from answer generation and does not use an LLM. The retrieval stage typically considers 20 to 50 matching knowledge chunks before grouping and scoring twins.
          </p>

          <RunningFooter pageNumber="7" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 8: 04 User-Facing Features — Twin and expert profiles
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 04 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Twin and expert profiles</h2>
          <p className={styles.sectionSubtitle}>
            Give users enough context to choose the right expertise
          </p>

          <p className={styles.sectionParagraph}>
            A twin profile explains its reasoning approach, supported scenarios, capabilities, and knowledge coverage. The associated expert profile connects that capability to the person behind it, creating a path from self-service answers to direct engagement.
          </p>

          <div className={styles.twoImageShowcase}>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/Digital-Twin-Images/09-TwinProfile.jpg"
                alt="Digital Twin – Twin profile with reasoning, scenarios, capabilities, and knowledge base"
                width={722}
                height={1040}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <p className={styles.calloutLabel}>
                <strong>Twin Profile</strong> / Scenarios, capabilities, and knowledge access
              </p>
            </div>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/Digital-Twin-Images/10-ExpertProfile.jpg"
                alt="Digital Twin – Expert profile with professional background and associated twins"
                width={712}
                height={924}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <p className={styles.calloutLabel}>
                <strong>Expert Profile</strong> / Professional background and associated twins
              </p>
            </div>
          </div>

          <h3 className={styles.accentSubhead}>From relevance to a relationship</h3>
          <p className={styles.sectionParagraph}>
            Users can bookmark useful twins and return without repeating discovery. When a twin fits a deeper problem, contact reveal enables the user to connect with the real expert outside the platform.
          </p>

          <RunningFooter pageNumber="8" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 9: 04 User-Facing Features — Text and voice conversations
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 04 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Text and voice conversations</h2>
          <p className={styles.sectionSubtitle}>
            The same knowledge boundary across both interaction modes
          </p>

          <p className={styles.sectionParagraph}>
            After selecting a twin, users choose text or voice. Both modes use the same retrieval and generation flow, scoped exclusively to the selected twin&rsquo;s knowledge. Responses include source citations and a confidence indicator.
          </p>

          <div className={styles.twoImageShowcase}>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/Digital-Twin-Images/11-ModeSelection.jpg"
                alt="Digital Twin – Mode selection dialog to choose voice or chat interaction"
                width={930}
                height={703}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <p className={styles.calloutLabel}>
                <strong>Mode Selection</strong> / Choose voice or chat
              </p>
            </div>
            <div className={styles.showcasePhoneFrame}>
              <Image
                src="/case-studies/Digital-Twin-Images/12-VoiceSession.jpg"
                alt="Digital Twin – Voice session with live transcription"
                width={930}
                height={716}
                priority
                quality={100}
                unoptimized
                className={styles.showcasePhoneImage}
              />
              <p className={styles.calloutLabel}>
                <strong>Voice Session</strong> / Spoken interaction with live transcription
              </p>
            </div>
          </div>

          <h3 className={styles.accentSubhead}>One retrieval engine for both modes</h3>
          <p className={styles.sectionParagraph}>
            Voice input is transcribed using Google ASR, normalized, and passed through the same retrieval flow as a text question. The response is then synthesized as speech. Conversation history and retrieved knowledge provide the session context without mixing knowledge from other twins.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>STEP</th>
                  <th>USER VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Select a twin</td>
                  <td>Keep the conversation attached to a specific body of expertise.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Ask a question</td>
                  <td>Use the input format that suits the moment.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Inspect the response</td>
                  <td>Review supporting knowledge and the confidence indicator.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Continue or connect</td>
                  <td>Explore follow-up questions or reach out to the expert.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="9" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 10: 04 User-Facing Features — Returning users and expert feedback
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 04 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Returning users and expert feedback</h2>
          <p className={styles.sectionSubtitle}>
            Useful knowledge becomes an ongoing relationship
          </p>

          <p className={styles.sectionParagraph}>
            Conversation history and bookmarks make the product usable beyond a single search. Users can return to an earlier discussion, continue a problem-solving thread, and keep relevant twins close at hand.
          </p>

          <div className={styles.showcaseImageContainer} style={{ maxWidth: '620px' }}>
            <Image
              src="/case-studies/Digital-Twin-Images/13-ContinueChat-History.jpg"
              alt="Digital Twin – Continue Chat with conversation history and an active thread"
              width={736}
              height={626}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Continue Chat</strong> / Conversation history and a returning user&rsquo;s active thread
          </p>

          <h3 className={styles.accentSubhead}>Feedback informs the next knowledge update</h3>
          <p className={styles.sectionParagraph}>
            Users provide structured feedback on interactions. Experts use that feedback alongside analytics to identify missing coverage and recurring questions. Feedback does not directly rewrite the knowledge base; improvements return through document ingestion, Playground testing, and publication.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>USER ACTION</th>
                  <th>EXPERT FOLLOW THROUGH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Return to a saved twin</td>
                  <td>Build repeated engagement around a useful area of expertise.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Leave structured feedback</td>
                  <td>Review patterns in the expert analytics experience.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Raise a question with weak coverage</td>
                  <td>Add or clarify knowledge, test the change, and publish.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RunningFooter pageNumber="10" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 11: 05 Security and Auditability
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 05 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Security and Auditability</h2>
          <p className={styles.sectionSubtitle}>
            Control who can act, what knowledge is retrieved, and how changes reach users
          </p>

          <p className={styles.sectionParagraph}>
            JWT-based sessions and API-level role policies distinguish end users, verified experts, and platform administrators. Expert management and Playground surfaces require authentication and role verification.
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>CONTROL</th>
                  <th style={{ width: '38%' }}>IMPLEMENTATION</th>
                  <th>OPERATIONAL EFFECT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Role enforcement</td>
                  <td>JWT sessions and API role policies</td>
                  <td>Restrict expert-only actions to authorized roles.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Twin context</td>
                  <td>Retrieval constrained to the selected twin</td>
                  <td>Prevent cross-twin knowledge mixing in answers.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Source traceability</td>
                  <td>Immutable links between embeddings and knowledge records</td>
                  <td>Connect retrieved evidence to its originating record.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Draft isolation</td>
                  <td>Separate draft sessions, token usage, and live analytics</td>
                  <td>Keep testing apart from user-facing performance data.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Change control</td>
                  <td>Knowledge updates pass through ingestion and publication</td>
                  <td>Give experts control over live content and visibility.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Audit trail</td>
                  <td>Append-only Playground metadata logs</td>
                  <td>Record timestamps, user IDs, twin IDs, and interaction metadata.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Runtime visibility</td>
                  <td>Cloud Logging and Cloud Monitoring</td>
                  <td>Support investigation of platform activity.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Credential handling</td>
                  <td>Google Secret Manager</td>
                  <td>Centralize application credential storage.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.accentSubhead}>Audit metadata and response content have different lifecycles</h3>
          <p className={styles.sectionParagraph}>
            Playground response content is ephemeral. Its audit trail records interaction metadata separately, preserving operational traceability without making draft responses part of the live knowledge base or analytics. Logs do not automatically retrain the model or change ranking.
          </p>

          <RunningFooter pageNumber="11" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 12: 06 What Makes This Different
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 06 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>What Makes This Different</h2>
          <p className={styles.sectionSubtitle}>
            Engineering choices that preserve expert context and control
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>DESIGN CHOICE</th>
                  <th>WHY IT MATTERS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Structured reasoning</td>
                  <td>Knowledge units preserve constraints, alternatives, decisions, and outcomes so retrieval can surface why an expert acted.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Deterministic discovery</td>
                  <td>Explicit ranking weights make discovery explainable and independent of the generation model.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Twin-scoped answers</td>
                  <td>Conversations use a defined expert knowledge boundary with source-linked responses.</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Draft and live separation</td>
                  <td>Experts can refine knowledge without disrupting the published twin.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.showcaseImageContainer} style={{ maxWidth: '460px' }}>
            <Image
              src="/case-studies/Digital-Twin-Images/14-PublicTwinView.jpg"
              alt="Digital Twin – Public twin view with positioning, scenarios, and knowledge coverage"
              width={522}
              height={760}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Public Twin View</strong> / Expert positioning, supported scenarios, and knowledge coverage
          </p>

          <p className={styles.sectionParagraph}>
            Together, these choices make expertise a maintained product: discoverable by the problem it can address, testable before release, and accountable to its underlying knowledge.
          </p>

          <RunningFooter pageNumber="12" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 13: 07 Outcomes
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 07 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Outcomes</h2>
          <p className={styles.sectionSubtitle}>
            An operating loop for expert knowledge
          </p>

          <p className={styles.sectionParagraph}>
            The delivered platform connects knowledge capture, discovery, conversation, monetisation, and expert improvement. Experts can publish a reusable version of their experience; users can evaluate and engage with that expertise through a consistent product journey.
          </p>

          <div className={styles.showcaseImageContainer} style={{ maxWidth: '760px' }}>
            <Image
              src="/case-studies/Digital-Twin-Images/15-TwinAnalytics.jpg"
              alt="Digital Twin – Twin Analytics dashboard with sessions, earnings, modality, and feedback sentiment"
              width={932}
              height={1174}
              priority
              quality={100}
              unoptimized
              className={styles.showcaseImage}
            />
          </div>

          <p className={styles.calloutLabel}>
            <strong>Expert Analytics</strong> / Interaction trends, conversation modality, feedback, and twin performance
          </p>

          <p className={styles.sectionParagraph}>
            The analytics dashboard gives experts visibility into interaction volume, problem patterns, credit consumption, response confidence, and feedback. Draft activity stays separate so live performance reflects the published experience.
          </p>

          <RunningFooter pageNumber="13" />
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 14: 07 Outcomes — Outcome measurement
        ══════════════════════════════════════════════════════════════════════ */}
        <section className={styles.sectionBlock}>
          <RunningHeader />

          <span className={styles.sectionEyebrow}>SECTION 07 / DIGITAL TWIN</span>
          <h2 className={styles.sectionTitle}>Outcome measurement</h2>
          <p className={styles.sectionSubtitle}>
            Track the value of the system across adoption, answer quality, and economics
          </p>

          <div className={styles.tableOuter}>
            <table className={styles.enterpriseTable}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>DELIVERED OUTCOME</th>
                  <th style={{ width: '48%' }}>MEASUREMENT</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.colBold}>Reusable expert knowledge</td>
                  <td>Published twins with structured knowledge coverage</td>
                  <td>[Insert value]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Relevant expert discovery</td>
                  <td>Searches leading to a selected twin ÷ total searches</td>
                  <td>[Insert %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Evidence-backed answers</td>
                  <td>Responses with valid source links ÷ sampled responses</td>
                  <td>[Insert %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Useful problem resolution</td>
                  <td>Positive resolution feedback ÷ responses with feedback</td>
                  <td>[Insert %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Repeat engagement</td>
                  <td>Users returning within 30 days ÷ eligible users</td>
                  <td>[Insert %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Expert connection</td>
                  <td>Contact reveals ÷ users engaging with twins</td>
                  <td>[Insert %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Credit monetisation</td>
                  <td>Credit purchasers ÷ active users</td>
                  <td>[Insert %]</td>
                </tr>
                <tr>
                  <td className={styles.colBold}>Knowledge improvement</td>
                  <td>Published updates addressing identified gaps</td>
                  <td>[Insert value]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.accentSubhead}>Operating cadence</h3>
          <p className={styles.sectionParagraph}>
            Review discovery conversion and engagement alongside answer confidence and user feedback. Use repeated weak-coverage questions to prioritize knowledge additions. Evaluate credit purchases and expert storage subscriptions against the cost of serving and maintaining the twins.
          </p>

          <h3 className={styles.accentSubhead}>The delivered system</h3>
          <p className={styles.sectionParagraph}>
            A complete path from documented expert experience to a published, discoverable digital twin, with text and voice interaction, traceable knowledge, controlled updates, and an expert dashboard for continued improvement.
          </p>

          <RunningFooter pageNumber="14" />
        </section>
      </div>
    </div>
  );
}
