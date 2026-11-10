import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StoryDetailView from '@/components/StoryDetailView';
import { HUMAN_STORIES } from '@/data/historias-humanas';
import { SITE_URL } from '@/lib/site-config';

export function generateStaticParams() {
  return HUMAN_STORIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return {
    alternates: {
      canonical: `${SITE_URL}/es/historia/${params.slug}/`,
    },
  };
}

export default function RootHistoriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const exists = HUMAN_STORIES.some((s) => s.slug === params.slug);
  if (!exists) return notFound();
  return <StoryDetailView slug={params.slug} lang="es" />;
}
