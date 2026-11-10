import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OriginalNotebookClient from '@/components/OriginalNotebookClient';
import { SUPPORTED_LANGS, SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

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
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/${lang}/pagina/${pageNum}/`,
      languages: {
        'es-ES': `https://acervo-jose-adell.mbossois.workers.dev/es/pagina/${pageNum}/`,
        'ca-valencia': `https://acervo-jose-adell.mbossois.workers.dev/va/pagina/${pageNum}/`,
        'pt-BR': `https://acervo-jose-adell.mbossois.workers.dev/pt/pagina/${pageNum}/`,
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
