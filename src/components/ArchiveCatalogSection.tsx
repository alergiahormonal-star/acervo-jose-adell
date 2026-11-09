'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  CATALOG_WORKS,
  CATEGORY_LABELS,
  WorkCategory,
} from '@/data/acervo-completo';

export default function ArchiveCatalogSection({
  initialCategory = 'ALL',
}: {
  initialCategory?: WorkCategory | 'ALL';
}) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<WorkCategory | 'ALL'>(initialCategory);
  const [periodicalFilter, setPeriodicalFilter] = useState<string>('ALL');

  const filteredWorks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return CATALOG_WORKS.filter((work) => {
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
  }, [search, category, periodicalFilter]);

  const padPage = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="acervo-completo" className="py-14 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
          Acervo Integral Catalogado • 56 Obras & Documentos • 89 Páginas
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
          Todas as Obras, Cartas, Crônicas e Memórias de Família
        </h2>
        <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
          Cada recorte preservado entre 1885 e 1927 foi lido, contextualizado com sensibilidade humana e vinculado às páginas originais escaneadas. Pesquise por tema, pessoa, jornal ou número de página.
        </p>
      </div>

      {/* Painel de Busca e Filtros */}
      <div className="deco-frame p-4 sm:p-6 mb-8 space-y-4 shadow-md">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label htmlFor="busca-acervo-input" className="sr-only">
              Pesquisar nas 56 obras do acervo
            </label>
            <input
              id="busca-acervo-input"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por Emilia, Morales, pedrada, Barcelona, Castelar, Tarrida, Campos Sales, Málaga, Vinaròs..."
              className="w-full px-4 py-3 border border-deco-burnished bg-parchment text-charcoal font-serif text-sm focus:outline-none focus:border-deco-crimson"
            />
          </div>

          <select
            aria-label="Filtrar por jornal ou fonte"
            value={periodicalFilter}
            onChange={(e) => setPeriodicalFilter(e.target.value)}
            className="px-4 py-3 border border-deco-burnished bg-parchment font-sans text-xs font-semibold text-charcoal"
          >
            <option value="ALL">Todas as Fontes e Periódicos (56)</option>
            <option value="La Unión Española">La Unión Española — Rio de Janeiro</option>
            <option value="La Luz">La Luz — Barcelona (1885–1886)</option>
            <option value="El Sufragio Universal">El Sufragio Universal — Barcelona (1889)</option>
            <option value="El Fantasma">El Fantasma — Barcelona (1886)</option>
            <option value="Correo de España">Correo de España — 1927</option>
            <option value="Conde">Carta de Morales de los Ríos — 1927</option>
            <option value="Manuscrito">Manuscrito Biográfico da Família</option>
          </select>
        </div>

        {/* Pílulas de Categorias Humanizadas */}
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
            Todas as Obras ({CATALOG_WORKS.length})
          </button>

          {(Object.keys(CATEGORY_LABELS) as WorkCategory[]).map((catKey) => {
            const count = CATALOG_WORKS.filter((w) => w.category === catKey).length;
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
                {CATEGORY_LABELS[catKey].label} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs font-sans text-charcoal-muted pt-1 border-t border-deco-burnished/30">
          <span>
            Exibindo <strong className="text-charcoal">{filteredWorks.length}</strong> de{' '}
            <strong>{CATALOG_WORKS.length}</strong> obras e documentos históricos.
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
              Limpar filtros ✕
            </button>
          )}
        </div>
      </div>

      {/* Grade de Cartões das Obras */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => {
          const catMeta = CATEGORY_LABELS[work.category];
          const thumbUrl = `/paginas/pagina-${padPage(work.pages[0])}.webp`;

          return (
            <article
              key={work.id}
              className="deco-frame flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div>
                {/* Miniatura Real do Recorte Escaneado */}
                <Link
                  href={`/obra/${work.slug}/`}
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
                        ★ Destaque Humano
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

                {/* Conteúdo Humanizado */}
                <div className="p-5">
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider mb-2 ${catMeta.badgeColor}`}
                  >
                    {catMeta.label}
                  </span>

                  <p className="font-sans text-[11px] text-deco-gold font-semibold mb-1">
                    {work.periodical} • {work.city}
                  </p>

                  <h3 className="font-display text-xl font-bold text-charcoal leading-snug mb-1.5 group-hover:text-deco-crimson transition-colors">
                    <Link href={`/obra/${work.slug}/`}>{work.humanTitle}</Link>
                  </h3>

                  <p className="font-sans text-[11px] text-charcoal-muted italic mb-3">
                    Título original: &ldquo;{work.title}&rdquo;
                  </p>

                  <p className="font-serif text-sm text-charcoal-muted leading-relaxed line-clamp-4">
                    {work.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-deco-burnished/30 flex items-center justify-between font-sans text-xs">
                <span className="text-charcoal-muted truncate max-w-[55%]">
                  ✍ {work.signature}
                </span>
                <Link
                  href={`/obra/${work.slug}/`}
                  className="px-3 py-1.5 bg-deco-valencia text-parchment font-bold uppercase tracking-wider text-[11px] hover:bg-deco-crimson transition-colors"
                >
                  Ler & Ver Original →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
