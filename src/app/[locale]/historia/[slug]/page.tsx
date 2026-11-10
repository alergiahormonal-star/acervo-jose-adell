import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StoryDetailView from '@/components/StoryDetailView';
import { HUMAN_STORIES } from '@/data/historias-humanas';
import { getLocalizedStories } from '@/data/historias-trilingues';
import { SUPPORTED_LANGS, SiteLang } from '@/lib/i18n-ui';

export function generateStaticParams() {
  const params: { locale: SiteLang; slug: string }[] = [];
  for (const locale of SUPPORTED_LANGS) {
    for (const story of HUMAN_STORIES) {
      params.push({ locale, slug: story.slug });
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
  const story = getLocalizedStories(lang).find((s) => s.slug === params.slug);
  if (!story) return { title: 'Memorial José Adell y Fons' };

  return {
    title: `${story.title} | José Adell y Fons`,
    description: story.subtitle,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/${lang}/historia/${story.slug}/`,
      languages: {
        'es-ES': `https://acervo-jose-adell.mbossois.workers.dev/es/historia/${story.slug}/`,
        'ca-valencia': `https://acervo-jose-adell.mbossois.workers.dev/va/historia/${story.slug}/`,
        'pt-BR': `https://acervo-jose-adell.mbossois.workers.dev/pt/historia/${story.slug}/`,
      },
    },
  };
}

export default function LocaleHistoriaPage({
  params,
}: {
  params: { locale: SiteLang; slug: string };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const exists = HUMAN_STORIES.some((s) => s.slug === params.slug);
  if (!exists) return notFound();

  return <StoryDetailView slug={params.slug} lang={lang} />;
}
