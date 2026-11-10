import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OriginalNotebookClient from '@/components/OriginalNotebookClient';
import { SUPPORTED_LANGS, SiteLang, UI_STRINGS } from '@/lib/i18n-ui';
import { SITE_URL } from '@/lib/site-config';

export function generateStaticParams() {
  const params: { locale: SiteLang; num: string }[] = [];
  for (const locale of SUPPORTED_LANGS) {
    for (let i = 1; i <= 89; i++) {
      params.push({ locale, num: String(i) });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { locale: SiteLang; num: string };
}): Metadata {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const pageNum = Number(params.num);
  const t = UI_STRINGS[lang];
  return {
    title: `Pág. ${pageNum} / 89 — ${t.notebookTitle}`,
    description: `${t.notebookSubtitle} (Facsímil original pág. ${pageNum}).`,
    alternates: {
      canonical: `${SITE_URL}/${lang}/pagina/${pageNum}/`,
      languages: {
        'es-ES': `${SITE_URL}/es/pagina/${pageNum}/`,
        'ca-valencia': `${SITE_URL}/va/pagina/${pageNum}/`,
        'pt-BR': `${SITE_URL}/pt/pagina/${pageNum}/`,
      },
    },
  };
}

export default function LocalePaginaIndividualPage({
  params,
}: {
  params: { locale: SiteLang; num: string };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const pageNum = Number(params.num);
  if (isNaN(pageNum) || pageNum < 1 || pageNum > 89) return notFound();

  return <OriginalNotebookClient lang={lang} initialPage={pageNum} />;
}
