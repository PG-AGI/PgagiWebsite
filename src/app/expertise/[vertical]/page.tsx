import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import VerticalPage from '@/components/organisms/VerticalPage';
import { getVertical, getAllVerticalSlugs } from '@/data/verticals';

// Curated set of verticals — only known slugs resolve; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllVerticalSlugs().map((vertical) => ({ vertical }));
}

export function generateMetadata({
  params,
}: {
  params: { vertical: string };
}): Metadata {
  const vertical = getVertical(params.vertical);
  if (!vertical) return {};

  return {
    title: vertical.metaTitle,
    description: vertical.metaDescription,
  };
}

export default function VerticalRoutePage({
  params,
}: {
  params: { vertical: string };
}) {
  const vertical = getVertical(params.vertical);
  if (!vertical) notFound();

  return <VerticalPage vertical={vertical} />;
}
