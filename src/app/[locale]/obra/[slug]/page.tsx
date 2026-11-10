import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WorkDetailClient from '@/components/WorkDetailClient';
import { CATALOG_WORKS } from '@/data/acervo-completo';
import { getLocalizedWork } from '@/data/acervo-trilingue';
import { SUPPORTED_LANGS, SiteLang } from '@/lib/i18n-ui';
import { SITE_URL } from '@/lib/site-config';

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
      canonical: `${SITE_URL}/${lang}/obra/${work.slug}/`,
      languages: {
        'es-ES': `${SITE_URL}/es/obra/${work.slug}/`,
        'ca-valencia': `${SITE_URL}/va/obra/${work.slug}/`,
        'pt-BR': `${SITE_URL}/pt/obra/${work.slug}/`,
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
  const localizedWork = getLocalizedWork(raw, lang);

  return <WorkDetailClient work={localizedWork} lang={lang} />;
}
