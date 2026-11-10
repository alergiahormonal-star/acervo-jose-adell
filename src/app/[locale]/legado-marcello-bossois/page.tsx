import React from 'react';
import type { Metadata } from 'next';
import MarcelloLegacyReportView from '@/components/MarcelloLegacyReportView';
import { MARCELLO_LEGACY_I18N } from '@/data/legado-marcello-bossois';
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
  const c = MARCELLO_LEGACY_I18N[lang];

  return {
    title: `${c.title} | Memorial José Adell y Fons`,
    description: c.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${lang}/legado-marcello-bossois/`,
      languages: {
        'es-ES': `${SITE_URL}/es/legado-marcello-bossois/`,
        'ca-valencia': `${SITE_URL}/va/legado-marcello-bossois/`,
        'pt-BR': `${SITE_URL}/pt/legado-marcello-bossois/`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.subtitle,
      url: `${SITE_URL}/${lang}/legado-marcello-bossois/`,
      images: [
        {
          url: '/destaques/dr-marcello-bossois-patricia-schlinkert.webp',
          width: 825,
          height: 549,
          alt: 'Dr. Marcello Bossois e Dra. Patricia Frozi Schlinkert',
        },
      ],
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
