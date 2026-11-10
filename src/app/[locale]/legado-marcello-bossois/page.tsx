import React from 'react';
import type { Metadata } from 'next';
import MarcelloLegacyReportView from '@/components/MarcelloLegacyReportView';
import { TRINETO_IDEALIZADOR_I18N } from '@/data/legado-marcello-bossois';
import { SUPPORTED_LANGS, SiteLang } from '@/lib/i18n-ui';
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
  const c = TRINETO_IDEALIZADOR_I18N[lang];

  return {
    title: `${c.title} | Memorial José Adell y Fons`,
    description: c.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${lang}/trineto-de-pepe-adell/`,
    },
  };
}

export default function LocaleLegadoMarcelloPage({
  params,
}: {
  params: { locale: SiteLang };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  return <MarcelloLegacyReportView lang={lang} />;
}
