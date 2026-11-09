import React from 'react';
import type { Metadata } from 'next';
import OriginalNotebookClient from '@/components/OriginalNotebookClient';

export const metadata: Metadata = {
  title: 'Caderno Original Completo (Páginas 1 a 89) | Memorial José Adell y Fons',
  description:
    'Folheie página por página os 89 fac-símiles digitais originais do acervo hemerográfico e familiar de José Adell y Fons (1868–1927).',
  alternates: {
    canonical: 'https://acervo-jose-adell.mbossois.workers.dev/caderno-original/',
  },
};

export default function CadernoOriginalPage() {
  return <OriginalNotebookClient />;
}
