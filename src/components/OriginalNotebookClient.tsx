'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { CATALOG_WORKS } from '@/data/acervo-completo';

export default function OriginalNotebookClient() {
  const [page, setPage] = useState<number>(1);
  const [filterMode, setFilterMode] = useState<
    'none' | 'facsimile-high-contrast' | 'facsimile-sepia-enhance' | 'facsimile-invert-manuscript'
  >('none');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const p = Number(params.get('pagina'));
      if (p >= 1 && p <= 89) {
        setPage(p);
      }
    }
  }, []);

  const padPage = (n: number) => String(n).padStart(2, '0');
  const currentImg = `/paginas/pagina-${padPage(page)}.webp`;

  const worksOnThisPage = CATALOG_WORKS.filter((w) => w.pages.includes(page));

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
            Álbum Documental Integral • Páginas 1 a 89
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-1 mb-3">
            Folhear o Caderno Original de José Adell y Fons
          </h1>
          <p className="font-serif text-base text-charcoal-muted">
            Navegue página por página pelos recortes originais guardados por mais de um século. Ao selecionar qualquer página, o sistema mostra automaticamente a qual artigo ou documento familiar ela pertence.
          </p>
        </div>

        {/* Controles de Folheio */}
        <div className="deco-frame p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 bg-deco-valencia text-parchment font-bold uppercase tracking-wider disabled:opacity-40 hover:bg-deco-crimson transition-colors"
            >
              ← Página Anterior
            </button>
            <span className="px-3 py-2 bg-parchment border border-deco-burnished font-bold text-sm">
              Página {page} de 89
            </span>
            <button
              type="button"
              disabled={page >= 89}
              onClick={() => setPage((p) => Math.min(89, p + 1))}
              className="px-4 py-2 bg-deco-valencia text-parchment font-bold uppercase tracking-wider disabled:opacity-40 hover:bg-deco-crimson transition-colors"
            >
              Próxima Página →
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label htmlFor="ir-para-pagina" className="font-semibold text-charcoal-muted">
              Ir para página:
            </label>
            <select
              id="ir-para-pagina"
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
              className="px-3 py-2 border border-deco-burnished bg-parchment font-bold text-charcoal"
            >
              {Array.from({ length: 89 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  Página {n}
                </option>
              ))}
            </select>

            <select
              aria-label="Modo óptico"
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value as typeof filterMode)}
              className="px-3 py-2 border border-deco-burnished bg-parchment font-medium text-charcoal"
            >
              <option value="none">Papel Original</option>
              <option value="facsimile-high-contrast">Alto Contraste (Tinta Nítida)</option>
              <option value="facsimile-sepia-enhance">Sépia Clássico</option>
              <option value="facsimile-invert-manuscript">Negativo (Realçar Manuscrito)</option>
            </select>

            <a
              href={currentImg}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-deco-gold text-parchment font-bold uppercase tracking-wider"
            >
              Abrir Alta Resolução ↗
            </a>
          </div>
        </div>

        {/* Leitor + Obras Identificadas na Página */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 deco-frame p-4 bg-[#E5DEC9] text-center">
            <img
              src={currentImg}
              alt={`Página ${page} do Caderno Original de José Adell y Fons`}
              className={`max-w-full h-auto mx-auto shadow-xl ${filterMode}`}
            />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="deco-frame p-5 space-y-4">
              <h2 className="font-sans text-xs uppercase tracking-widest text-deco-crimson font-bold border-b border-deco-burnished/40 pb-2">
                📌 Obras Identificadas na Página {page}
              </h2>

              {worksOnThisPage.length > 0 ? (
                <div className="space-y-3">
                  {worksOnThisPage.map((w) => (
                    <Link
                      key={w.id}
                      href={`/obra/${w.slug}/`}
                      className="block p-3.5 bg-parchment border border-deco-burnished/50 hover:border-deco-crimson transition-colors"
                    >
                      <span className="font-sans text-[10px] font-bold uppercase text-deco-gold block">
                        Obra Nº {w.id} • {w.date} ({w.periodical})
                      </span>
                      <h3 className="font-display text-lg font-bold text-charcoal mt-0.5">
                        {w.humanTitle}
                      </h3>
                      <p className="font-serif text-xs text-charcoal-muted mt-1 line-clamp-3">
                        {w.summary}
                      </p>
                      <span className="inline-block mt-2 font-sans text-[11px] font-bold text-deco-crimson">
                        Ler história e tradução desta obra →
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="font-serif text-sm text-charcoal-muted">
                  Verso complementar de recorte impresso (consulte as páginas adjacentes para a matéria principal).
                </p>
              )}
            </div>

            {/* Grade Rápida 1 a 89 */}
            <div className="deco-frame p-5">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-bold mb-3">
                Índice Rápido das 89 Páginas
              </h3>
              <div className="grid grid-cols-8 gap-1.5 font-sans text-xs">
                {Array.from({ length: 89 }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    className={`py-1.5 border text-center font-semibold transition-colors ${
                      page === n
                        ? 'bg-deco-crimson text-parchment border-deco-gold'
                        : 'bg-parchment border-deco-burnished/30 hover:border-deco-gold'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
