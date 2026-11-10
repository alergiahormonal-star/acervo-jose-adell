import React from 'react';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/es/acervo/`,
  },
};

export default function RootAcervoPage() {
  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang="es" />
      <main className="flex-1">
        <ArchiveCatalogSection lang="es" />
      </main>
      <SiteFooter lang="es" />
    </div>
  );
}
