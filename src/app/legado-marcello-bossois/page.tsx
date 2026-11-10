import React from 'react';
import type { Metadata } from 'next';
import MarcelloLegacyReportView from '@/components/MarcelloLegacyReportView';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/es/trineto-de-pepe-adell/`,
  },
};

export default function RootLegadoMarcelloPage() {
  return <MarcelloLegacyReportView lang="es" />;
}
