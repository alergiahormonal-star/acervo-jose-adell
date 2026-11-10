import React from 'react';
import type { Metadata } from 'next';
import LiteraryPrefaceView from '@/components/LiteraryPrefaceView';
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
  const p = TRINETO_IDEALIZADOR_I18N[lang].preface;

  return {
    title: `${p.title} | Dr. Marcello Bossois (Trineto de Pepe Adell)`,
    description: p.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${lang}/prefacio/`,
      languages: {
        'es-ES': `${SITE_URL}/es/prefacio/`,
        'ca-valencia': `${SITE_URL}/va/prefacio/`,
        'pt-BR': `${SITE_URL}/pt/prefacio/`,
      },
    },
    openGraph: {
      title: p.title,
      description: p.subtitle,
      url: `${SITE_URL}/${lang}/prefacio/`,
      images: [
        {
          url: '/destaques/dr-marcello-bossois-patricia-schlinkert.webp',
          width: 825,
          height: 549,
          alt: 'Prefácio por Dr. Marcello Bossois — Trineto de Pepe Adell',
        },
      ],
    },
  };
}

export default function LocalePrefacioPage({
  params,
}: {
  params: { locale: SiteLang };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  return <LiteraryPrefaceView lang={lang} />;
}
