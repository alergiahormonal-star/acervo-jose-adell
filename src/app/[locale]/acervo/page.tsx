import React from 'react';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';
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
    title: `${t.navArchive} | ${t.brandTitle}`,
    description: t.catalogSubtitle,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/${lang}/acervo/`,
      languages: {
        'es-ES': 'https://acervo-jose-adell.mbossois.workers.dev/es/acervo/',
        'ca-valencia': 'https://acervo-jose-adell.mbossois.workers.dev/va/acervo/',
        'pt-BR': 'https://acervo-jose-adell.mbossois.workers.dev/pt/acervo/',
      },
    },
  };
}

export default function LocaleAcervoPage({
  params,
}: {
  params: { locale: SiteLang };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <ArchiveCatalogSection lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
