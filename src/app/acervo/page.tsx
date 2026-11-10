import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';

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
