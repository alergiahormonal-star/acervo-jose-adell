import React from 'react';
import AcervoCompletoPage from '@/app/acervo/page';

export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'es' }, { locale: 'va' }];
}

export default function LocaleHemerotecaPage() {
  return <AcervoCompletoPage />;
}
