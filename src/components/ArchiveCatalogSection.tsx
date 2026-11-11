'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { WorkCategory } from '@/data/acervo-completo';
import {
  CATEGORY_LABELS_I18N,
  getLocalizedWorksList,
} from '@/data/acervo-trilingue';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function ArchiveCatalogSection({
  lang = 'es',
  initialCategory = 'ALL',
}: {
  lang?: SiteLang;
  initialCategory?: WorkCategory | 'ALL';
}) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<WorkCategory | 'ALL'>(initialCategory);
  const [periodicalFilter, setPeriodicalFilter] = useState<string>('ALL');

  const t = UI_STRINGS[lang];
  const catDict = CATEGORY_LABELS_I18N[lang];
  const worksList = useMemo(() => getLocalizedWorksList(lang), [lang]);

  const filteredWorks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return worksList.filter((work) => {
      if (category !== 'ALL' && work.category !== category) return false;
      if (periodicalFilter !== 'ALL') {
        if (!work.periodical.toLowerCase().includes(periodicalFilter.toLowerCase())) {
          return false;
        }
      }
      if (!q) return true;
      return (
        work.title.toLowerCase().includes(q) ||
        work.humanTitle.toLowerCase().includes(q) ||
        work.summary.toLowerCase().includes(q) ||
        work.excerpt.toLowerCase().includes(q) ||
        work.city.toLowerCase().includes(q) ||
        work.periodical.toLowerCase().includes(q) ||
        work.date.toLowerCase().includes(q) ||
        work.pages.some((p) => String(p) === q)
      );
    });
  }, [worksList, search, category, periodicalFilter]);

  const padPage = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="acervo-completo" className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
          {t.catalogKicker}
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
          {t.catalogTitle}
        </h2>
        <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
          {t.catalogSubtitle}
        </p>
      </div>

      {/* Painel de Busca e Filtros */}
      <div className="deco-frame p-4 sm:p-6 mb-8 space-y-4 shadow-md">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label htmlFor="busca-acervo-input" className="sr-only">
              {t.searchPlaceholder}
            </label>
            <input
              id="busca-acervo-input"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full px-4 py-3 border border-deco-burnished bg-parchment text-charcoal font-serif text-sm focus:outline-none focus:border-deco-crimson"
            />
          </div>

          <select
            aria-label="Fuente / Periódico"
            value={periodicalFilter}
            onChange={(e) => setPeriodicalFilter(e.target.value)}
            className="px-4 py-3 border border-deco-burnished bg-parchment font-sans text-xs font-semibold text-charcoal"
          >
            <option value="ALL">{t.allSources}</option>
            <option value="La Unión Española">
              {lang === 'va'
                ? 'La Unión Española — Rio de Janeiro'
                : lang === 'pt'
                ? 'La Unión Española — Rio de Janeiro'
                : 'La Unión Española — Río de Janeiro'}
            </option>
            <option value="La Luz">La Luz — Barcelona (1885–1886)</option>
            <option value="El Sufragio Universal">El Sufragio Universal — Barcelona (1889)</option>
            <option value="El Fantasma">El Fantasma — Barcelona (1886)</option>
            <option value="Correo de España">Correo de España — 1927</option>
            <option value="Conde">
              {lang === 'va'
                ? 'Carta de Morales de los Ríos — 1927'
                : lang === 'pt'
                ? 'Carta de Morales de los Ríos — 1927'
                : 'Carta de Morales de los Ríos — 1927'}
            </option>
            <option value="Manuscrito">
              {lang === 'va'
                ? 'Manuscrit Familiar (1900)'
                : lang === 'pt'
                ? 'Manuscrito Familiar (1900)'
                : 'Manuscrito Familiar (1900)'}
            </option>
          </select>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap gap-2 pt-1 font-sans text-xs">
          <button
            type="button"
            onClick={() => setCategory('ALL')}
            className={`px-3.5 py-1.5 border font-bold transition-all ${
              category === 'ALL'
                ? 'bg-deco-crimson text-parchment border-deco-gold shadow-sm'
                : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
            }`}
          >
            {t.allWorksBtn} ({worksList.length})
          </button>

          {(Object.keys(catDict) as WorkCategory[]).map((catKey) => {
            const count = worksList.filter((w) => w.category === catKey).length;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setCategory(catKey)}
                className={`px-3.5 py-1.5 border font-semibold transition-all ${
                  category === catKey
                    ? 'bg-deco-valencia text-parchment border-deco-gold shadow-sm'
                    : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                }`}
              >
                {catDict[catKey].label} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs font-sans text-charcoal-muted pt-1 border-t border-deco-burnished/30">
          <span>
            <strong className="text-charcoal">{filteredWorks.length}</strong> /{' '}
            <strong>{worksList.length}</strong> {t.showingCount}
          </span>
          {(search || category !== 'ALL' || periodicalFilter !== 'ALL') && (
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setCategory('ALL');
                setPeriodicalFilter('ALL');
              }}
              className="text-deco-crimson font-bold hover:underline"
            >
              {t.clearFilters}
            </button>
          )}
        </div>
      </div>

      {/* Grade das 72 Obras */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => {
          const catMeta = catDict[work.category];
          const thumbUrl = `/paginas/pagina-${padPage(work.pages[0])}.webp`;
          const workHref = `/${lang}/obra/${work.slug}/`;

          return (
            <article
              key={work.id}
              className="deco-frame deco-card-hover flex flex-col justify-between overflow-hidden group transition-all"
            >
              <div>
                <Link
                  href={workHref}
                  className="block relative h-48 overflow-hidden bg-[#E5DEC9] border-b border-deco-burnished/40"
                >
                  <img
                    src={thumbUrl}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 font-sans text-[10px]">
                    <span className="px-2 py-0.5 bg-[#181613]/90 text-[#D4AF37] font-bold">
                      Nº {work.id}
                    </span>
                    {work.featured && (
                      <span className="px-2 py-0.5 bg-deco-crimson text-white font-bold uppercase tracking-wider">
                        {t.featuredBadge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-sans text-white/95">
                    <span className="font-semibold">{work.date}</span>
                    <span className="px-2 py-0.5 bg-black/60 rounded-sm">
                      Pág. {work.pages.join(', ')}
                    </span>
                  </div>
                </Link>

                <div className="p-5 space-y-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider ${catMeta.badgeColor}`}
                  >
                    {catMeta.label}
                  </span>

                  <p className="font-sans text-[11px] text-deco-gold font-semibold">
                    {work.periodical} • {work.city}
                  </p>

                  <h3 className="font-display text-xl font-bold text-charcoal leading-snug group-hover:text-deco-crimson transition-colors">
                    <Link href={workHref}>{work.humanTitle}</Link>
                  </h3>

                  <p className="font-sans text-[11px] text-charcoal-muted italic">
                    {t.originalTitleLabel} &ldquo;{work.title}&rdquo;
                  </p>

                  {/* Transcrição do Artigo Original sempre abaixo da imagem do artigo original */}
                  <div className="p-3.5 bg-parchment-elevated border-l-4 border-deco-crimson space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-deco-crimson font-bold block">
                      {t.workExcerptTitle}
                    </span>
                    <div className="font-serif text-xs sm:text-sm text-charcoal leading-relaxed space-y-2 max-h-56 overflow-y-auto custom-scrollbar pr-1">
                      {work.excerpt
                        .split(/\n\n+/)
                        .filter(Boolean)
                        .map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                    </div>
                  </div>

                  <p className="font-serif text-xs text-charcoal-muted leading-relaxed">
                    <strong className="font-sans uppercase text-[10px] tracking-wider text-deco-valencia">
                      {t.workContextTitle}:
                    </strong>{' '}
                    {work.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-deco-burnished/30 flex items-center justify-between font-sans text-xs">
                <span className="text-charcoal-muted truncate max-w-[55%]">
                  ✍ {work.signature}
                </span>
                <Link
                  href={workHref}
                  className="px-3 py-1.5 bg-deco-valencia text-parchment font-bold uppercase tracking-wider text-[11px] hover:bg-deco-crimson transition-colors"
                >
                  {t.readAndViewBtn}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
