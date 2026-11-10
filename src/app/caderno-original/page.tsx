import React from 'react';
import type { Metadata } from 'next';
import OriginalNotebookClient from '@/components/OriginalNotebookClient';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/es/caderno-original/`,
  },
};

export default function RootCadernoOriginalPage() {
  return <OriginalNotebookClient lang="es" initialPage={1} />;
}
