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

  const cs = await getCaseStudy(params.slug); // cached → no extra DB hit
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

  const caseStudy = await getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  return (
    <div className={styles.pageWrapper}>
      <CaseStudy initialCaseStudy={caseStudy} />
    </div>
  );
}
