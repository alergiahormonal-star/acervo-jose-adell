import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATALOG_WORKS } from '@/data/acervo-completo';
import WorkDetailClient from '@/components/WorkDetailClient';

export function generateStaticParams() {
  return CATALOG_WORKS.map((work) => ({
    slug: work.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const work = CATALOG_WORKS.find((w) => w.slug === params.slug);
  if (!work) {
    return { title: 'Obra não encontrada — Memorial José Adell y Fons' };
  }
  return {
    title: `${work.humanTitle} | José Adell y Fons (${work.date})`,
    description: work.summary,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/obra/${work.slug}/`,
    },
  };
}

export default function ObraPage({ params }: { params: { slug: string } }) {
  const work = CATALOG_WORKS.find((w) => w.slug === params.slug);
  if (!work) return notFound();

  return <WorkDetailClient work={work} />;
}
