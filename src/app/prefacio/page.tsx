import React from 'react';
import type { Metadata } from 'next';
import LiteraryPrefaceView from '@/components/LiteraryPrefaceView';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/es/prefacio/`,
  },
};

export default function RootPrefacioPage() {
  return <LiteraryPrefaceView lang="es" />;
}
