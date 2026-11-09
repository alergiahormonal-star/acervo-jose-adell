import React from 'react';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';

export const metadata: Metadata = {
  title: 'Acervo Completo: Todas as 56 Obras e Publicações | José Adell y Fons',
  description:
    'Catálogo integral pesquisável das 56 crônicas, ensaios políticos, polêmicas, poemas, necrológios e documentos familiares de José Adell y Fons (1885–1927).',
  alternates: {
    canonical: 'https://acervo-jose-adell.mbossois.workers.dev/acervo/',
  },
};

export default function AcervoCompletoPage() {
  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ArchiveCatalogSection />
      </main>
      <SiteFooter />
    </div>
  );
}
