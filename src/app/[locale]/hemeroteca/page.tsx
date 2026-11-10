import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';
import { SUPPORTED_LANGS, SiteLang } from '@/lib/i18n-ui';

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((locale) => ({ locale }));
}

export default function LocaleHemerotecaPage({
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
