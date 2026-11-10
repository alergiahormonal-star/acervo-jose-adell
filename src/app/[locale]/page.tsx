import React from 'react';
import type { Metadata } from 'next';
import HomeExperience from '@/components/HomeExperience';
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
    title: `${t.brandTitle} (1868–1927)`,
    description: t.heroLead,
    alternates: {
      canonical: `${SITE_URL}/${lang}/`,
      languages: {
        'es-ES': `${SITE_URL}/es/`,
        'ca-valencia': `${SITE_URL}/va/`,
        'pt-BR': `${SITE_URL}/pt/`,
        'x-default': `${SITE_URL}/`,
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
