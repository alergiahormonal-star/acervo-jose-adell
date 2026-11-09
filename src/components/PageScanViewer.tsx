'use client';

import React, { useState } from 'react';

interface PageScanViewerProps {
  pages: number[];
  title: string;
}

export default function PageScanViewer({ pages, title }: PageScanViewerProps) {
  const [selectedPage, setSelectedPage] = useState<number>(pages[0] || 1);
  const [zoom, setZoom] = useState<number>(100);
  const [filterMode, setFilterMode] = useState<
    'none' | 'facsimile-high-contrast' | 'facsimile-sepia-enhance' | 'facsimile-invert-manuscript'
  >('none');

  const padPage = (n: number) => String(n).padStart(2, '0');
  const currentImgUrl = `/paginas/pagina-${padPage(selectedPage)}.webp`;

  return (
    <div className="deco-frame p-4 sm:p-5">
      {/* Barra de controles do fac-símile real */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-deco-burnished/40 font-sans text-xs">
        <div>
          <span className="font-bold uppercase tracking-wider text-deco-crimson block">
            📜 Recorte Original Digitalizado
          </span>
          <span className="text-charcoal-muted text-[11px]">
            Página {selectedPage} de 89 do Caderno Histórico da Família
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(75, z - 25))}
            className="px-2.5 py-1 border border-deco-burnished bg-parchment hover:bg-deco-goldLight/40 font-bold"
            title="Reduzir Zoom"
          >
            −
          </button>
          <span className="px-2 font-mono font-semibold">{zoom}%</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(225, z + 25))}
            className="px-2.5 py-1 border border-deco-burnished bg-parchment hover:bg-deco-goldLight/40 font-bold"
            title="Ampliar Lupa"
          >
            +
          </button>

          <select
            aria-label="Modo de nitidez do papel histórico"
            value={filterMode}
            onChange={(e) => setFilterMode(e.target.value as typeof filterMode)}
            className="px-2 py-1 border border-deco-burnished bg-parchment text-charcoal font-medium"
          >
            <option value="none">Cor Original do Papel</option>
            <option value="facsimile-high-contrast">Nitidez de Tinta (Alto Contraste)</option>
            <option value="facsimile-sepia-enhance">Sépia Clássico</option>
            <option value="facsimile-invert-manuscript">Negativo (Ler Manuscritos)</option>
          </select>

          <a
            href={currentImgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 bg-deco-valencia text-parchment font-semibold hover:bg-deco-crimson transition-colors"
          >
            Tela Cheia ↗
          </a>
        </div>
      </div>

      {/* Seletor de páginas quando o artigo ocupa mais de uma página */}
      {pages.length > 1 && (
        <div className="flex flex-wrap items-center gap-1.5 mb-3 font-sans text-xs">
          <span className="text-charcoal-muted font-medium mr-1">
            Páginas deste documento ({pages.length}):
          </span>
          {pages.map((p, idx) => (
            <button
              key={`${p}-${idx}`}
              type="button"
              onClick={() => setSelectedPage(p)}
              className={`px-3 py-1 border font-semibold transition-all ${
                selectedPage === p
                  ? 'bg-deco-crimson text-parchment border-deco-gold shadow-sm'
                  : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
              }`}
            >
              Pág. {p}
            </button>
          ))}
        </div>
      )}

      {/* Janela de visualização da imagem real */}
      <div className="overflow-auto max-h-[720px] border border-deco-burnished/50 bg-[#E6DEC8] p-2 sm:p-4 text-center">
        <div
          style={{
            width: `${zoom}%`,
            margin: zoom <= 100 ? '0 auto' : undefined,
          }}
          className="transition-all duration-200"
        >
          <img
            src={currentImgUrl}
            alt={`${title} — Fac-símile original página ${selectedPage}`}
            loading="eager"
            className={`w-full h-auto shadow-lg mx-auto ${filterMode}`}
          />
        </div>
      </div>
    </div>
  );
}
