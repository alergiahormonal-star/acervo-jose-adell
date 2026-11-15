'use client';

import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ComisionPatrioticaSection from '@/components/ComisionPatrioticaSection';
import { COMISION_PATRIOTICA_CONTENT } from '@/data/comision-patriotica-1895';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function ComisionPatrioticaPageView({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const t = UI_STRINGS[lang];
  const c = COMISION_PATRIOTICA_CONTENT[lang];
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;
  const prefix = `/${lang}`;

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />

      <nav
        aria-label="Breadcrumb"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
          <li>
            <Link
              href={homeHref}
              className="hover:text-deco-crimson underline-offset-4 hover:underline"
            >
              {t.navHome}
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">
            ❖
          </li>
          <li className="font-semibold text-deco-crimson" aria-current="page">
            {c.navFull}
          </li>
        </ol>
      </nav>

      <main className="flex-1">
        <ComisionPatrioticaSection lang={lang} isStandalonePage={true} />

        {/* Links de Continuidade Histórica no Acervo */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="deco-frame p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-parchment-elevated">
            <div className="space-y-1.5 max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-widest text-deco-gold font-bold block">
                {lang === 'va'
                  ? 'Documents Directament Vinculats a l’Any 1895'
                  : lang === 'pt'
                  ? 'Documentos Diretamente Relacionados ao Ano de 1895'
                  : 'Documentos Directamente Relacionados con el Año 1895'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                {lang === 'va'
                  ? 'Continueu explorant els debats i cròniques de Pepe Adell sobre Cuba i Rio de Janeiro'
                  : lang === 'pt'
                  ? 'Continue explorando os debates e crônicas de Pepe Adell sobre Cuba e o Rio de Janeiro'
                  : 'Continúe explorando los debates y crónicas de Pepe Adell sobre Cuba y Río de Janeiro'}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 font-sans text-xs shrink-0">
              <Link
                href={`${prefix}/obra/tomemoslo-en-cuenta-lucio-de-mendonca-1895/`}
                className="px-4 py-3 bg-deco-crimson text-parchment font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-valencia transition-colors"
              >
                {lang === 'va'
                  ? 'Polèmica amb Lúcio de Mendonça (Set. 1895) →'
                  : lang === 'pt'
                  ? 'Polêmica com Lúcio de Mendonça (Set. 1895) →'
                  : 'Polémica con Lúcio de Mendonça (Sept. 1895) →'}
              </Link>
              <Link
                href={`${prefix}/acervo/`}
                className="px-4 py-3 bg-parchment border border-deco-burnished text-charcoal font-bold uppercase tracking-wider hover:border-deco-gold transition-colors"
              >
                {t.btnExploreArchive}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
