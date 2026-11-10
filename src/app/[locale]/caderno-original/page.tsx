import React from 'react';
import type { Metadata } from 'next';
import OriginalNotebookClient from '@/components/OriginalNotebookClient';
import { SUPPORTED_LANGS, SiteLang, UI_STRINGS } from '@/lib/i18n-ui';
import { SITE_URL } from '@/lib/site-config';

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
      canonical: `${SITE_URL}/${lang}/caderno-original/`,
      languages: {
        'es-ES': `${SITE_URL}/es/caderno-original/`,
        'ca-valencia': `${SITE_URL}/va/caderno-original/`,
        'pt-BR': `${SITE_URL}/pt/caderno-original/`,
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
