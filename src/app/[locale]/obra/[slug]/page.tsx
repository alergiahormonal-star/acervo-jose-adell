import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WorkDetailClient from '@/components/WorkDetailClient';
import { CATALOG_WORKS } from '@/data/acervo-completo';
import { getLocalizedWork } from '@/data/acervo-trilingue';
import { SUPPORTED_LANGS, SiteLang } from '@/lib/i18n-ui';

export function generateStaticParams() {
  const params: { locale: SiteLang; slug: string }[] = [];
  for (const locale of SUPPORTED_LANGS) {
    for (const work of CATALOG_WORKS) {
      params.push({ locale, slug: work.slug });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { locale: SiteLang; slug: string };
}): Metadata {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const raw = CATALOG_WORKS.find((w) => w.slug === params.slug);
  if (!raw) return { title: 'Memorial José Adell y Fons' };
  const work = getLocalizedWork(raw, lang);

  return {
    title: `${work.humanTitle} | José Adell y Fons (${work.date})`,
    description: work.summary,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/${lang}/obra/${work.slug}/`,
      languages: {
        'es-ES': `https://acervo-jose-adell.mbossois.workers.dev/es/obra/${work.slug}/`,
        'ca-valencia': `https://acervo-jose-adell.mbossois.workers.dev/va/obra/${work.slug}/`,
        'pt-BR': `https://acervo-jose-adell.mbossois.workers.dev/pt/obra/${work.slug}/`,
      },
    },
  };
}

export default function LocaleObraPage({
  params,
}: {
  params: { locale: SiteLang; slug: string };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const raw = CATALOG_WORKS.find((w) => w.slug === params.slug);
  if (!raw) return notFound();

  return <WorkDetailClient work={raw} lang={lang} />;
}
