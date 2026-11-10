import React from 'react';
import type { Metadata } from 'next';
import HomeExperience from '@/components/HomeExperience';
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
    title: `${t.brandTitle} (1868–1927)`,
    description: t.heroLead,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/${lang}/`,
      languages: {
        'es-ES': 'https://acervo-jose-adell.mbossois.workers.dev/es/',
        'ca-valencia': 'https://acervo-jose-adell.mbossois.workers.dev/va/',
        'pt-BR': 'https://acervo-jose-adell.mbossois.workers.dev/pt/',
        'x-default': 'https://acervo-jose-adell.mbossois.workers.dev/',
      },
    },
  };
}

export default function LocaleHomePage({
  params,
}: {
  params: { locale: SiteLang };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  return <HomeExperience lang={lang} />;
}
