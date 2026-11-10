import React from 'react';
import { notFound } from 'next/navigation';
import StoryDetailView from '@/components/StoryDetailView';
import { HUMAN_STORIES } from '@/data/historias-humanas';

export function generateStaticParams() {
  return HUMAN_STORIES.map((s) => ({ slug: s.slug }));
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
