import React from 'react';
import { Locale } from '@/lib/taxonomy';

export function generateStaticParams(): { locale: Locale }[] {
  return [{ locale: 'pt' }, { locale: 'es' }, { locale: 'va' }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
