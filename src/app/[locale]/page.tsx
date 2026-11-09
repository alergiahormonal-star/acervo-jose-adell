import React from 'react';
import HomeExperience from '@/components/HomeExperience';

export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'es' }, { locale: 'va' }];
}

export default function LocaleHomePage() {
  return <HomeExperience />;
}
