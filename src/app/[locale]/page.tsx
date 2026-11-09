import React from 'react';
import LandingPageClient from '@/components/LandingPageClient';
import { Locale } from '@/lib/taxonomy';

export function generateStaticParams(): { locale: Locale }[] {
  return [{ locale: 'pt' }, { locale: 'es' }, { locale: 'va' }];
}

export default function LocaleHomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  return <LandingPageClient initialLocale={params?.locale || 'pt'} />;
}
