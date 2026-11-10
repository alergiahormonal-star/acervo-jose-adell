import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageScanViewer from '@/components/PageScanViewer';
import { PERSONALITIES_LIST } from '@/data/personalidades';
import { getLocalizedWorksList } from '@/data/acervo-trilingue';
import { SUPPORTED_LANGS, SiteLang, UI_STRINGS } from '@/lib/i18n-ui';
import { SITE_URL } from '@/lib/site-config';

export function generateStaticParams() {
  const params: { locale: SiteLang; slug: string }[] = [];
  for (const locale of SUPPORTED_LANGS) {
    for (const p of PERSONALITIES_LIST) {
      params.push({ locale, slug: p.slug });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { locale: SiteLang; slug: string };
}): Metadata {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const person = PERSONALITIES_LIST.find((p) => p.slug === params.slug);
  if (!person) return { title: 'Memorial José Adell y Fons' };
  const loc = person[lang];

  return {
    title: `${person.name} y José Adell y Fons | ${loc.role}`,
    description: loc.bio,
    alternates: {
      canonical: `${SITE_URL}/${lang}/personalidade/${person.slug}/`,
      languages: {
        'es-ES': `${SITE_URL}/es/personalidade/${person.slug}/`,
        'ca-valencia': `${SITE_URL}/va/personalidade/${person.slug}/`,
        'pt-BR': `${SITE_URL}/pt/personalidade/${person.slug}/`,
      },
    },
  };
}

export default function PersonalidadeProfilePage({
  params,
}: {
  params: { locale: SiteLang; slug: string };
}) {
  const lang: SiteLang = SUPPORTED_LANGS.includes(params.locale)
    ? params.locale
    : 'es';
  const person = PERSONALITIES_LIST.find((p) => p.slug === params.slug);
  if (!person) return notFound();

  const loc = person[lang];
  const t = UI_STRINGS[lang];
  const prefix = `/${lang}`;
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;
  const worksList = getLocalizedWorksList(lang);
  const relatedWorks = worksList.filter((w) =>
    person.relatedWorkSlugs.includes(w.slug)
  );

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />

      <nav
        aria-label="Breadcrumb"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-6xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
          <li>
            <Link href={homeHref} className="hover:text-deco-crimson underline-offset-4 hover:underline">
              {t.navHome}
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <Link href={`${homeHref}#personalidades`} className="hover:text-deco-crimson underline-offset-4 hover:underline">
              Personalidades
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li className="font-semibold text-deco-crimson" aria-current="page">
            {person.name}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-10">
        <article className="deco-frame p-6 sm:p-10 shadow-xl space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-xs">
            <span className="px-3 py-1 bg-deco-crimson text-parchment font-bold uppercase tracking-wider">
              {person.lifespan}
            </span>
            <span className="text-deco-gold font-bold">📍 {person.cityContext}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal">
            {person.name}
          </h1>

          <p className="font-sans text-sm font-bold text-deco-valencia">
            {loc.role}
          </p>

          <blockquote className="p-4 bg-parchment-elevated border-l-4 border-deco-gold font-serif text-base italic text-charcoal">
            {loc.connection}
          </blockquote>

          <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
            {loc.bio}
          </p>

          {/* Links Externos de Referência */}
          <div className="pt-4 border-t border-deco-burnished/40 flex flex-wrap items-center gap-3 font-sans text-xs">
            <span className="font-bold uppercase tracking-wider text-charcoal-muted">
              Fuentes biográficas externas:
            </span>
            {person.externalLinks.map((ext) => (
              <a
                key={ext.url}
                href={ext.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-deco-valencia text-parchment font-bold hover:bg-deco-crimson transition-colors"
              >
                {ext.label} ↗
              </a>
            ))}
          </div>
        </article>

        {/* Páginas Originais do Acervo onde aparece */}
        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold text-charcoal text-center">
            {t.proofTitle}
          </h2>
          <PageScanViewer
            pages={person.pagesInArchive}
            title={person.name}
            lang={lang}
          />
        </section>

        {relatedWorks.length > 0 && (
          <section className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-charcoal border-b border-deco-burnished/40 pb-2">
              {t.relatedRecordsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedWorks.map((w) => (
                <Link
                  key={w.id}
                  href={`${prefix}/obra/${w.slug}/`}
                  className="deco-frame p-5 hover:border-deco-crimson transition-colors block"
                >
                  <span className="font-sans text-[11px] font-bold text-deco-gold uppercase">
                    Nº {w.id} • {w.date} • Págs. {w.pages.join(', ')}
                  </span>
                  <h4 className="font-display text-xl font-bold text-charcoal mt-1">
                    {w.humanTitle}
                  </h4>
                  <span className="inline-block mt-2 font-sans text-xs font-bold text-deco-crimson">
                    {t.openRecordLink}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
