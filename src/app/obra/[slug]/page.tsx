import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WorkDetailClient from '@/components/WorkDetailClient';
import { CATALOG_WORKS } from '@/data/acervo-completo';
import { getLocalizedWork } from '@/data/acervo-trilingue';
import { SITE_URL } from '@/lib/site-config';

export function generateStaticParams() {
  return CATALOG_WORKS.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return {
    alternates: {
      canonical: `${SITE_URL}/es/obra/${params.slug}/`,
    },
  };
}

export default function RootObraPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = CATALOG_WORKS.find((w) => w.slug === params.slug);
  if (!work) return notFound();
  return <WorkDetailClient work={getLocalizedWork(work, 'es')} lang="es" />;
}
