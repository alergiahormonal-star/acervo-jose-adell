import React from 'react';
import type { Metadata } from 'next';
import OriginalNotebookClient from '@/components/OriginalNotebookClient';
import { SUPPORTED_LANGS, SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export function generateStaticParams(): { locale: SiteLang }[] {
  return SUPPORTED_LANGS.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: SiteLang };
}): Metadata {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const t = UI_STRINGS[lang];
  return {
    title: `${t.notebookTitle} | ${t.brandTitle}`,
    description: t.notebookSubtitle,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/${lang}/caderno-original/`,
      languages: {
        'es-ES': 'https://acervo-jose-adell.mbossois.workers.dev/es/caderno-original/',
        'ca-valencia': 'https://acervo-jose-adell.mbossois.workers.dev/va/caderno-original/',
        'pt-BR': 'https://acervo-jose-adell.mbossois.workers.dev/pt/caderno-original/',
      },
    },
  };
}

export default function LocaleNotebookPage({
  params,
}: {
  params: { locale: SiteLang };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  return <OriginalNotebookClient lang={lang} initialPage={1} />;
}
