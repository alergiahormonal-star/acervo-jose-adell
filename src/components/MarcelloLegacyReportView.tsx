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

export default function MarcelloLegacyReportView({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const c = TRINETO_IDEALIZADOR_I18N[lang];
  const p = c.preface;
  const t = UI_STRINGS[lang];
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;
  const prefix = `/${lang}`;
  const prefacioHref = `/${lang}/prefacio/`;

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
          <li className="font-semibold text-deco-crimson" aria-current="page">
            {c.linkLabel}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 pt-10 pb-14 sm:pt-12 sm:pb-16 space-y-10">
        {/* Card do Idealizador do Site — Trineto de Pepe Adell */}
        <article className="deco-frame p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-deco-burnished/40 pb-4">
            <div className="inline-flex flex-wrap items-center gap-3">
              <SpainValenciaBrazilFlags size="md" />
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-deco-crimson font-bold">
                {c.kicker}
              </span>
            </div>
            <Link
              href={prefacioHref}
              className="font-sans text-xs font-bold text-deco-crimson hover:text-deco-valencia underline underline-offset-4"
            >
              📜 {c.prefaceLinkLabel} →
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              {c.title}
            </h1>
            <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {c.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
            <div className="md:col-span-5">
              <div className="border-2 border-deco-gold bg-[#E5DEC9] p-2.5 shadow-md">
                <img
                  src="/destaques/dr-marcello-bossois-patricia-schlinkert.webp"
                  alt="Dr. Marcello Bossois e Dra. Patricia Frozi Schlinkert"
                  className="w-full h-auto object-cover"
                />
                <p className="font-serif text-xs text-charcoal-muted italic mt-2 leading-relaxed">
                  {c.photoCaption}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 font-serif text-base text-charcoal leading-relaxed">
              {c.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              <div className="p-4 bg-parchment-elevated border-2 border-deco-gold space-y-1.5 font-sans text-xs">
                <span className="uppercase tracking-wider text-deco-crimson font-bold block">
                  ✉️ {c.correspondenceLabel}
                </span>
                <p className="font-serif text-charcoal-muted">
                  {p.correspondenceText}
                </p>
                <a
                  href={CORRESPONDENCE_MAILTO}
                  className="inline-block font-mono text-sm font-bold text-deco-valencia hover:text-deco-crimson underline underline-offset-4"
                >
                  {c.correspondenceEmail}
                </a>
              </div>

              <div className="pt-1">
                <Link
                  href={prefacioHref}
                  className="inline-block px-5 py-3 bg-deco-crimson text-parchment font-sans text-xs font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-valencia transition-colors shadow-md"
                >
                  {c.readPrefaceBtnLabel}
                </Link>
              </div>
            </div>
          </div>

          <blockquote className="p-4 sm:p-5 border-l-4 border-deco-crimson bg-parchment-elevated shadow-sm">
            <p className="font-display text-lg sm:text-xl italic text-charcoal leading-snug">
              {c.quote}
            </p>
            <footer className="mt-2 font-sans text-xs uppercase tracking-widest text-deco-gold font-bold">
              {c.quoteAuthor}
            </footer>
          </blockquote>
        </article>

        {/* Prefácio Histórico-Literário Completo da Vida de Pepe Adell (por Dr. Marcello Bossois) */}
        <article id="prefacio-literario" className="deco-frame p-6 sm:p-12 shadow-2xl space-y-8">
          <header className="space-y-3 border-b-2 border-deco-burnished pb-6 text-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-deco-crimson font-bold block">
              {p.kicker}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              <Link href={prefacioHref} className="hover:text-deco-crimson transition-colors">
                {p.title}
              </Link>
            </h2>
            <p className="font-serif text-base italic text-charcoal-muted max-w-3xl mx-auto">
              {p.subtitle}
            </p>
            <p className="font-display text-lg font-bold text-deco-crimson pt-1">
              ✍ {p.authorLine}
            </p>
          </header>

          <div className="space-y-8">
            {p.chapters.map((chapter) => (
              <section key={chapter.roman} className="space-y-3.5">
                <div className="flex items-center gap-3 border-b border-deco-burnished/40 pb-2">
                  <span className="px-2.5 py-0.5 bg-deco-crimson text-parchment font-display text-base font-bold border border-deco-gold">
                    {chapter.roman}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    {chapter.title}
                  </h3>
                </div>
                <div className="space-y-3.5 font-serif text-base text-charcoal leading-relaxed">
                  {chapter.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="pt-4 border-t border-deco-burnished/40 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
            <div>
              <span className="font-display text-xl font-bold text-charcoal block">
                {p.closingSignature}
              </span>
              <span className="text-deco-crimson font-bold uppercase tracking-wider">
                {p.closingRole}
              </span>
            </div>
            <Link
              href={prefacioHref}
              className="px-4 py-2.5 bg-deco-valencia text-parchment font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-crimson transition-colors"
            >
              {c.prefaceLinkLabel} (Página Dedicada) →
            </Link>
          </footer>
        </article>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
