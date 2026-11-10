'use client';

import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SpainValenciaBrazilFlags } from '@/components/Flags';
import { TRINETO_IDEALIZADOR_I18N } from '@/data/legado-marcello-bossois';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function MarcelloLegacyReportView({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const c = TRINETO_IDEALIZADOR_I18N[lang];
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
          <li className="font-semibold text-deco-crimson" aria-current="page">
            {c.linkLabel}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <article className="deco-frame p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-deco-burnished/40 pb-4">
            <div className="inline-flex flex-wrap items-center gap-3">
              <SpainValenciaBrazilFlags size="md" />
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-deco-crimson font-bold">
                {c.kicker}
              </span>
            </div>
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
              {c.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
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

          <div className="pt-3 border-t border-deco-burnished/40 flex flex-wrap items-center justify-between gap-3 font-sans text-xs">
            <Link
              href={homeHref}
              className="px-5 py-3 bg-deco-crimson text-parchment font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-valencia transition-colors"
            >
              ← {t.navHome}
            </Link>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.brasilsemalergia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-parchment text-charcoal font-bold uppercase tracking-wider border border-deco-burnished hover:border-deco-gold transition-colors"
              >
                {c.externalPortalLabel}
              </a>
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
