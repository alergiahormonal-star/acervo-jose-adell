'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getLocalizedWorksList } from '@/data/acervo-trilingue';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function OriginalNotebookClient({
  lang = 'es',
  initialPage = 1,
}: {
  lang?: SiteLang;
  initialPage?: number;
}) {
  const [page, setPage] = useState<number>(initialPage);
  const [filterMode, setFilterMode] = useState<
    'none' | 'facsimile-high-contrast' | 'facsimile-sepia-enhance' | 'facsimile-invert-manuscript'
  >('none');

  const t = UI_STRINGS[lang];
  const prefix = `/${lang}`;
  const padPage = (n: number) => String(n).padStart(2, '0');
  const currentImg = `/paginas/pagina-${padPage(page)}.webp`;

  const worksList = useMemo(() => getLocalizedWorksList(lang), [lang]);
  const worksOnThisPage = worksList.filter((w) => w.pages.includes(page));

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
            {t.notebookKicker}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-1 mb-3">
            {t.notebookTitle}
          </h1>
          <p className="font-serif text-base text-charcoal-muted">
            {t.notebookSubtitle}
          </p>
        </div>

        {/* Controles */}
        <div className="deco-frame p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2">
            {page > 1 ? (
              <Link
                href={`${prefix}/pagina/${page - 1}/`}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-deco-valencia text-parchment font-bold uppercase tracking-wider hover:bg-deco-crimson transition-colors"
              >
                {t.prevPage}
              </Link>
            ) : (
              <span className="px-4 py-2 bg-deco-valencia/40 text-parchment font-bold uppercase tracking-wider">
                {t.prevPage}
              </span>
            )}

            <span className="px-3 py-2 bg-parchment border border-deco-burnished font-bold text-sm">
              Pág. {page} / 89
            </span>

            {page < 89 ? (
              <Link
                href={`${prefix}/pagina/${page + 1}/`}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-deco-valencia text-parchment font-bold uppercase tracking-wider hover:bg-deco-crimson transition-colors"
              >
                {t.nextPage}
              </Link>
            ) : (
              <span className="px-4 py-2 bg-deco-valencia/40 text-parchment font-bold uppercase tracking-wider">
                {t.nextPage}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label htmlFor="ir-para-pagina" className="font-semibold text-charcoal-muted">
              {t.goToPage}
            </label>
            <select
              id="ir-para-pagina"
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
              className="px-3 py-2 border border-deco-burnished bg-parchment font-bold text-charcoal"
            >
              {Array.from({ length: 89 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  Pág. {n}
                </option>
              ))}
            </select>

            <select
              aria-label="Modo óptico"
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value as typeof filterMode)}
              className="px-3 py-2 border border-deco-burnished bg-parchment font-medium text-charcoal"
            >
              <option value="none">{t.viewerColorOriginal}</option>
              <option value="facsimile-high-contrast">{t.viewerHighContrast}</option>
              <option value="facsimile-sepia-enhance">{t.viewerSepia}</option>
              <option value="facsimile-invert-manuscript">{t.viewerInvert}</option>
            </select>

            <a
              href={currentImg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-deco-gold text-parchment font-bold uppercase tracking-wider"
            >
              {t.viewerFullScreen}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 deco-frame p-4 bg-[#E5DEC9] text-center">
            <img
              src={currentImg}
              alt={`José Adell y Fons — Facsímil pág. ${page}`}
              className={`max-w-full h-auto mx-auto shadow-xl ${filterMode}`}
            />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="deco-frame p-5 space-y-4">
              <h2 className="font-sans text-xs uppercase tracking-widest text-deco-crimson font-bold border-b border-deco-burnished/40 pb-2">
                {t.worksOnPageTitle} ({page})
              </h2>

              {worksOnThisPage.length > 0 ? (
                <div className="space-y-3">
                  {worksOnThisPage.map((w) => (
                    <Link
                      key={w.id}
                      href={`${prefix}/obra/${w.slug}/`}
                      className="block p-3.5 bg-parchment border border-deco-burnished/50 hover:border-deco-crimson transition-colors"
                    >
                      <span className="font-sans text-[10px] font-bold uppercase text-deco-gold block">
                        Nº {w.id} • {w.date} ({w.periodical})
                      </span>
                      <h3 className="font-display text-lg font-bold text-charcoal mt-0.5">
                        {w.humanTitle}
                      </h3>
                      <p className="font-serif text-xs text-charcoal-muted mt-1 line-clamp-3">
                        {w.summary}
                      </p>
                      <span className="inline-block mt-2 font-sans text-[11px] font-bold text-deco-crimson">
                        {t.readAndViewBtn}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="font-serif text-sm text-charcoal-muted">
                  Reverso documental del recorte impreso (pág. {page}).
                </p>
              )}
            </div>

            <div className="deco-frame p-5">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-bold mb-3">
                {t.quickGridTitle}
              </h3>
              <div className="grid grid-cols-8 gap-1.5 font-sans text-xs">
                {Array.from({ length: 89 }, (_, i) => i + 1).map((n) => (
                  <Link
                    key={n}
                    href={`${prefix}/pagina/${n}/`}
                    onClick={() => setPage(n)}
                    className={`py-1.5 border text-center font-semibold transition-colors ${
                      page === n
                        ? 'bg-deco-crimson text-parchment border-deco-gold'
                        : 'bg-parchment border-deco-burnished/30 hover:border-deco-gold'
                    }`}
                  >
                    {n}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
