// Target path in your repo: src/app/case-study/[slug]/page.tsx
//
// Server Component + ISR. Because the route is now statically generated and
// revalidated (not dynamically rendered per request), Next emits a public,
// shared-cacheable response (s-maxage) instead of `Cache-Control: private`,
// so Cloudflare can finally cache it (cf-cache-status: HIT).

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CaseStudy from './CaseStudy';
import VookCaseStudy from '@/components/organisms/VookCaseStudy/VookCaseStudy';
import SayYesCaseStudy from '@/components/organisms/SayYesCaseStudy/SayYesCaseStudy';
import BrainifyCaseStudy from '@/components/organisms/BrainifyCaseStudy/BrainifyCaseStudy';
import MetaAdsCaseStudy from '@/components/organisms/MetaAdsCaseStudy/MetaAdsCaseStudy';
import EmailLoveCaseStudy from '@/components/organisms/EmailLoveCaseStudy/EmailLoveCaseStudy';
import AIMIBrainCaseStudy from '@/components/organisms/AIMIBrainCaseStudy/AIMIBrainCaseStudy';
import styles from '@/styles/app/case-study/[slug]/CaseStudy.module.scss';
import { getCaseStudy } from '@/services/getCaseStudy';
import clientPromise from '@/utils/mongodb';

// Force dynamic server rendering for case-study pages (no ISR cache).
export const dynamic = 'force-dynamic';
// dynamicParams defaults to `true`: slugs not pre-rendered at build still work —
// they render on demand on first hit, then get cached. (No need to set it.)

// Pre-render known case studies at build time.
export async function generateStaticParams() {
  try {
    const client = await clientPromise;
    const docs = await client
      .db()
      .collection('caseStudies')
      .find({}, { projection: { slug: 1 } })
      .toArray();

    return docs
      .filter((d) => d.slug)
      .map((d) => ({ slug: String(d.slug) }));
  } catch {
    // If the DB is unreachable at build, fall back to fully on-demand ISR.
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const isSayYes = params?.slug?.toLowerCase()?.includes('sayyes');
  if (isSayYes) {
    return {
      title: 'SayYes.AI: Ella, the AI Wedding Planning Companion | PG-AGI Case Study',
      description: 'A conversational AI platform that understands what a couple actually wants from their wedding, then finds the venues and vendors that match it.',
      robots: { index: true, follow: true },
      appleWebApp: { title: 'SayYes.AI Case Study | PG-AGI' },
      applicationName: 'PG-AGI Case Studies',
      authors: [{ name: 'PG-AGI' }],
    };
  }

  const isBrainify = params?.slug?.toLowerCase()?.includes('brainify');
  if (isBrainify) {
    return {
      title: 'brAInify: AI-Personalized Language & Skill Learning Platform | PG-AGI Case Study',
      description: 'A mobile-first, invite-only, multilingual learning platform that turns structured skill-building into a daily habit across 10,000+ learners.',
      robots: { index: true, follow: true },
      appleWebApp: { title: 'brAInify Case Study | PG-AGI' },
      applicationName: 'PG-AGI Case Studies',
      authors: [{ name: 'PG-AGI' }],
    };
  }

  const isVook = params?.slug?.toLowerCase()?.includes('vook');
  if (isVook) {
    return {
      title: 'VOOK.AI: Wireless Microphone Mobile Companion App | PG-AGI Case Study',
      description: 'A companion app that turns a phone into a real-time audio control surface for a wireless microphone system — built on a bidirectional USB-HID control channel, a dual transmitter binary protocol, AI audio post-processing, and a 180+ test firmware regression suite.',
      robots: { index: true, follow: true },
      appleWebApp: { title: 'VOOK.AI Case Study | PG-AGI' },
      applicationName: 'PG-AGI Case Studies',
      authors: [{ name: 'PG-AGI' }],
    };
  }

  const isMetaAds = params?.slug?.toLowerCase() === 'meta-case-study';
  if (isMetaAds) {
    return {
      title: 'Unisphere Corp: AI Sales Script Automation | PG-AGI Case Study',
      description: 'An internal AI production platform that turns a marketing hypothesis into a campaign-ready script and launch-ready creative set — built on a 5-stage AI writing pipeline, human-in-the-loop review with full version history, 4-role RBAC, and a 3-mode Image Studio, and shipped end to end from proof-of-concept discovery to a production deployment on Google Cloud Run.',
      robots: { index: true, follow: true },
      appleWebApp: { title: 'Unisphere Corp Case Study | PG-AGI' },
      applicationName: 'PG-AGI Case Studies',
      authors: [{ name: 'PG-AGI' }],
    };
  }

  const isEmailLove = params?.slug?.toLowerCase()?.includes('email-love');
  if (isEmailLove) {
    return {
      title: 'Email Love: AI-Powered Email Template Generation and Autonomous Repair | PG-AGI Case Study',
      description: "A two-pipeline backend system that ingests a client's Figma component library, understands it, and then either generates complete email templates from a campaign brief or autonomously detects and repairs broken ones — removing MJML authorship from the workflow entirely for a platform serving 50,000+ users.",
      robots: { index: true, follow: true },
      appleWebApp: { title: 'Email Love Case Study | PG-AGI' },
      applicationName: 'PG-AGI Case Studies',
      authors: [{ name: 'PG-AGI' }],
    };
  }

  const isAimiBrain = params?.slug?.toLowerCase()?.includes('aimi-brain');
  if (isAimiBrain) {
    return {
      title: 'AIMI Brain: Real-Time Conversational Financial Intelligence | PG-AGI Case Study',
      description: 'A platform that puts institutional-grade macro analysis behind natural language, combining retrieval-augmented generation with live web data, per-user document intelligence and a streaming architecture built for a market where the answer stops being useful the moment it goes stale.',
      robots: { index: true, follow: true },
      appleWebApp: { title: 'AIMI Brain Case Study | PG-AGI' },
      applicationName: 'PG-AGI Case Studies',
      authors: [{ name: 'PG-AGI' }],
    };
  }

  const cs = await getCaseStudy(params.slug).catch(() => null); // cached → no extra DB hit
  if (!cs) return {};

  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    robots: { index: true, follow: true },
    appleWebApp: { title: cs.metaTitle },
    applicationName: cs.metaTitle,
    // Guarded: the original `metaKeywords.split(...)` threw when keywords were absent.
    keywords: cs.metaKeywords ? cs.metaKeywords.split(/[\s,]+/) : undefined,
    // `author` is not a valid Metadata field in the App Router; `authors` is.
    authors: cs.metaAuthor ? [{ name: cs.metaAuthor }] : undefined,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const isVook = params?.slug?.toLowerCase()?.includes('vook');
  if (isVook) {
    const caseStudy = await getCaseStudy(params.slug).catch(() => null);
    return <VookCaseStudy caseStudy={caseStudy} />;
  }

  const isSayYes = params?.slug?.toLowerCase()?.includes('sayyes');
  if (isSayYes) {
    const caseStudy = await getCaseStudy(params.slug).catch(() => null);
    return <SayYesCaseStudy caseStudy={caseStudy} />;
  }

  const isBrainify = params?.slug?.toLowerCase()?.includes('brainify');
  if (isBrainify) {
    const caseStudy = await getCaseStudy(params.slug).catch(() => null);
    return <BrainifyCaseStudy caseStudy={caseStudy} />;
  }

  const isMetaAds = params?.slug?.toLowerCase() === 'meta-case-study';
  if (isMetaAds) {
    const caseStudy = await getCaseStudy(params.slug).catch(() => null);
    return <MetaAdsCaseStudy caseStudy={caseStudy} />;
  }

  const isEmailLove = params?.slug?.toLowerCase()?.includes('email-love');
  if (isEmailLove) {
    const caseStudy = await getCaseStudy(params.slug).catch(() => null);
    return <EmailLoveCaseStudy caseStudy={caseStudy} />;
  }

  const isAimiBrain = params?.slug?.toLowerCase()?.includes('aimi-brain');
  if (isAimiBrain) {
    const caseStudy = await getCaseStudy(params.slug).catch(() => null);
    return <AIMIBrainCaseStudy caseStudy={caseStudy} />;
  }

  const caseStudy = await getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  return (
    <div className={styles.pageWrapper}>
      <CaseStudy initialCaseStudy={caseStudy} />
    </div>
  );
}
