import React from 'react';
import DocumentViewerPage from '@/components/DocumentViewerPage';
import { Locale } from '@/lib/taxonomy';

export function generateStaticParams(): { locale: Locale }[] {
  return [{ locale: 'pt' }, { locale: 'es' }, { locale: 'va' }];
}

export default function HemerotecaViewerRoute({
  params,
}: {
  params: { locale: Locale };
}) {
  return <DocumentViewerPage initialLocale={params?.locale || 'pt'} />;
}
