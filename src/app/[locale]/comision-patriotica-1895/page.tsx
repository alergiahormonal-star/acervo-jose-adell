import React from 'react';
import type { Metadata } from 'next';
import ComisionPatrioticaPageView from '@/components/ComisionPatrioticaPageView';
import { COMISION_PATRIOTICA_CONTENT } from '@/data/comision-patriotica-1895';
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
  const c = COMISION_PATRIOTICA_CONTENT[lang];

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${lang}/comision-patriotica-1895/`,
      languages: {
        'es-ES': `${SITE_URL}/es/comision-patriotica-1895/`,
        'ca-valencia': `${SITE_URL}/va/comision-patriotica-1895/`,
        'pt-BR': `${SITE_URL}/pt/comision-patriotica-1895/`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${SITE_URL}/${lang}/comision-patriotica-1895/`,
      images: [
        {
          url: '/destaques/comision-patriotica-1895.webp',
          width: 1352,
          height: 2048,
          alt: c.originalScanCaption,
        },
      ],
    },
  };
}

export default function LocaleComisionPatrioticaPage({
  params,
}: {
  params: { locale: SiteLang };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  return <ComisionPatrioticaPageView lang={lang} />;
}
