import React from 'react';
import type { Metadata } from 'next';
import ComisionPatrioticaPageView from '@/components/ComisionPatrioticaPageView';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/es/comision-patriotica-1895/`,
  },
};

export default function RootComisionPatrioticaPage() {
  return <ComisionPatrioticaPageView lang="es" />;
}
