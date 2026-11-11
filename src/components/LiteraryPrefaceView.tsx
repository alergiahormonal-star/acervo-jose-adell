'use client';

import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SpainValenciaBrazilFlags } from '@/components/Flags';
import {
  CORRESPONDENCE_MAILTO,
  TRINETO_IDEALIZADOR_I18N,
} from '@/data/legado-marcello-bossois';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function LiteraryPrefaceView({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const c = TRINETO_IDEALIZADOR_I18N[lang];
  const p = c.preface;
  const t = UI_STRINGS[lang];
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;
  const prefix = `/${lang}`;

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />

      <nav
        aria-label="Breadcrumb"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
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
          <li>
            <Link
              href={`${prefix}/trineto-de-pepe-adell/`}
              className="hover:text-deco-crimson underline-offset-4 hover:underline"
            >
              {c.linkLabel}
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">
            ❖
          </li>
          <li className="font-semibold text-deco-crimson" aria-current="page">
            {p.navLabel}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 pt-10 pb-14 sm:pt-12 sm:pb-16 space-y-10">
        <article className="deco-frame p-6 sm:p-12 shadow-2xl space-y-8">
          {/* Cabeçalho Solene do Prefácio Histórico-Literário */}
          <header className="space-y-4 border-b-2 border-deco-burnished pb-6 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-1.5 bg-parchment-elevated border border-deco-gold">
              <SpainValenciaBrazilFlags size="sm" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-deco-crimson font-bold">
                {p.kicker}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-tight">
              {p.title}
            </h1>

            <p className="font-serif text-base sm:text-lg italic text-charcoal-muted max-w-3xl mx-auto leading-relaxed">
              {p.subtitle}
            </p>

            <div className="pt-2 flex flex-col items-center gap-1">
              <span className="font-display text-xl font-bold text-deco-crimson">
                ✍ {p.authorLine}
              </span>
              <span className="font-sans text-xs text-charcoal-muted">
                {p.authorBioNote}
              </span>
            </div>
          </header>

          {/* Epígrafe Imortal de Pepe Adell */}
          <blockquote className="p-5 sm:p-6 bg-[#181613] text-[#EFE9DA] border-2 border-deco-gold shadow-lg space-y-2 text-center">
            <p className="font-display text-xl sm:text-2xl italic font-bold text-[#F9E7B2] leading-snug">
              {p.epigraph}
            </p>
            <footer className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              {p.epigraphAttribution}
            </footer>
          </blockquote>

          {/* Capítulos do Prefácio Literário */}
          <div className="space-y-10">
            {p.chapters.map((chapter) => (
              <section key={chapter.roman} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-deco-burnished/40 pb-2">
                  <span className="px-3 py-1 bg-deco-crimson text-parchment font-display text-lg font-bold border border-deco-gold">
                    {chapter.roman}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                    {chapter.title}
                  </h2>
                </div>

                <div className="space-y-4 font-serif text-base sm:text-lg text-charcoal leading-relaxed">
                  {chapter.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className={
                        pIdx === 0
                          ? 'first-letter:float-left first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-deco-crimson first-letter:mr-3 first-letter:leading-none'
                          : ''
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Assinatura do Autor do Prefácio (Dr. Marcello Bossois) */}
          <footer className="pt-6 border-t-2 border-deco-burnished flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-charcoal">
                {p.closingSignature}
              </p>
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-deco-crimson">
                {p.closingRole}
              </p>
              <p className="font-serif text-xs italic text-charcoal-muted">
                {p.closingPlaceAndDate}
              </p>
            </div>

            <div className="p-4 bg-parchment-elevated border border-deco-gold space-y-1.5 text-xs font-sans">
              <span className="uppercase tracking-wider text-deco-crimson font-bold block">
                ✉️ {p.correspondenceLabel}
              </span>
              <p className="font-serif text-charcoal-muted leading-snug">
                {p.correspondenceText}
              </p>
              <a
                href={CORRESPONDENCE_MAILTO}
                className="inline-block font-mono text-sm font-bold text-deco-valencia hover:text-deco-crimson underline underline-offset-4"
              >
                {p.correspondenceEmail}
              </a>
            </div>
          </footer>

          {/* Navegação Inferior */}
          <div className="pt-4 border-t border-deco-burnished/40 flex flex-wrap items-center justify-between gap-3 font-sans text-xs">
            <Link
              href={`${prefix}/trineto-de-pepe-adell/`}
              className="px-5 py-3 bg-parchment-elevated text-charcoal font-bold uppercase tracking-wider border border-deco-burnished hover:border-deco-gold transition-colors"
            >
              ← {c.linkLabel}
            </Link>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href={homeHref}
                className="px-5 py-3 bg-deco-crimson text-parchment font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-valencia transition-colors"
              >
                {t.navHome}
              </Link>
              <Link
                href={`${prefix}/acervo/`}
                className="px-5 py-3 bg-deco-valencia text-parchment font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-crimson transition-colors"
              >
                {t.btnExploreArchive}
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
