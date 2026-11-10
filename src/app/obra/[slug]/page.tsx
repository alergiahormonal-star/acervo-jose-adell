import React from 'react';
import { notFound } from 'next/navigation';
import WorkDetailClient from '@/components/WorkDetailClient';
import { CATALOG_WORKS } from '@/data/acervo-completo';

export function generateStaticParams() {
  return CATALOG_WORKS.map((w) => ({ slug: w.slug }));
}

export default function RootObraPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = CATALOG_WORKS.find((w) => w.slug === params.slug);
  if (!work) return notFound();
  return <WorkDetailClient work={work} lang="es" />;
}
