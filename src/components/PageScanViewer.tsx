'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CatalogWork } from '@/data/acervo-completo';
import { getLocalizedWorksList } from '@/data/acervo-trilingue';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

interface PageScanViewerProps {
  pages: number[];
  title: string;
  lang?: SiteLang;
  work?: CatalogWork;
}

function buildLangSwitchHref(pathname: string | null, targetLang: SiteLang, workSlug?: string): string {
  if (workSlug) {
    return `/${targetLang}/obra/${workSlug}/`;
  }
  if (!pathname || pathname === '/') {
    return targetLang === 'es' ? '/' : `/${targetLang}/`;
  }
  const stripped = pathname.replace(/^\/(es|va|pt)(?=\/|$)/, '') || '/';
  const normalized = stripped.endsWith('/') ? stripped : `${stripped}/`;
  if (normalized === '/') {
    return targetLang === 'es' ? '/' : `/${targetLang}/`;
  }
  return `/${targetLang}${normalized}`;
}

export default function PageScanViewer({
  pages,
  title,
  lang = 'es',
  work,
}: PageScanViewerProps) {
  const [selectedPage, setSelectedPage] = useState<number>(pages[0] || 1);
  const [zoom, setZoom] = useState<number>(100);
  const [filterMode, setFilterMode] = useState<
    'none' | 'facsimile-high-contrast' | 'facsimile-sepia-enhance' | 'facsimile-invert-manuscript'
  >('none');

  const pathname = usePathname();
  const t = UI_STRINGS[lang];
  const padPage = (n: number) => String(n).padStart(2, '0');
  const currentImgUrl = `/paginas/pagina-${padPage(selectedPage)}.webp`;

  const allLocalizedWorks = useMemo(() => getLocalizedWorksList(lang), [lang]);

  // Se uma obra específica foi passada, mostramos a transcrição dela;
  // caso contrário, mostramos todas as obras identificadas na página selecionada (ou em todas as páginas do bloco).
  const transcribedWorks = useMemo(() => {
    if (work) return [work];
    const onSelected = allLocalizedWorks.filter((w) => w.pages.includes(selectedPage));
    if (onSelected.length > 0) return onSelected;
    return allLocalizedWorks.filter((w) => w.pages.some((p) => pages.includes(p)));
  }, [work, allLocalizedWorks, selectedPage, pages]);

  const transcriptionHeading =
    lang === 'va'
      ? '📜 Transcripció Completa de l’Article Original (en Valencià)'
      : lang === 'pt'
      ? '📜 Transcrição Completa do Artigo Original (em Português)'
      : '📜 Transcripción Completa del Artículo Original (en Castellano)';

  const profileNotice =
    lang === 'va'
      ? 'Transcripció situada sota l’article original en el perfil Valencià. Podeu canviar d’idioma per llegir-la en Castellà o Portugués:'
      : lang === 'pt'
      ? 'Transcrição posicionada abaixo do artigo original no perfil Português. Você pode alternar o idioma para ler em Castellano ou Valencià:'
      : 'Transcripción situada debajo del artículo original en el perfil Castellano. Puede cambiar de idioma para leerla en Valencià o Português:';

  const headerLineLabel =
    lang === 'va'
      ? 'Encapçalament de l’original'
      : lang === 'pt'
      ? 'Cabeçalho do artigo original'
      : 'Encabezado del artículo original';

  const signatureLabel =
    lang === 'va'
      ? 'Signatura a l’original'
      : lang === 'pt'
      ? 'Assinatura no original'
      : 'Firma en el original';

  return (
    <div className="deco-frame p-4 sm:p-6 space-y-6">
      {/* Barra Superior do Fac-símile Original */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-deco-burnished/40 font-sans text-xs">
          <div>
            <span className="font-bold uppercase tracking-wider text-deco-crimson block">
              {t.viewerOriginalBadge}
            </span>
            <span className="text-charcoal-muted text-[11px]">
              Pág. {selectedPage} — {t.viewerPageOf}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(75, z - 25))}
              className="px-2.5 py-1 border border-deco-burnished bg-parchment hover:bg-deco-goldLight/40 font-bold"
            >
              −
            </button>
            <span className="px-2 font-mono font-semibold">{zoom}%</span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(225, z + 25))}
              className="px-2.5 py-1 border border-deco-burnished bg-parchment hover:bg-deco-goldLight/40 font-bold"
            >
              +
            </button>

            <select
              aria-label="Modo óptico"
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value as typeof filterMode)}
              className="px-2 py-1 border border-deco-burnished bg-parchment text-charcoal font-medium"
            >
              <option value="none">{t.viewerColorOriginal}</option>
              <option value="facsimile-high-contrast">{t.viewerHighContrast}</option>
              <option value="facsimile-sepia-enhance">{t.viewerSepia}</option>
              <option value="facsimile-invert-manuscript">{t.viewerInvert}</option>
            </select>

            <a
              href={currentImgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-deco-valencia text-parchment font-semibold hover:bg-deco-crimson transition-colors"
            >
              {t.viewerFullScreen}
            </a>
          </div>
        </div>

        {pages.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-3 font-sans text-xs">
            <span className="text-charcoal-muted font-medium mr-1">
              {t.viewerPagesInDoc} ({pages.length}):
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

        {/* Imagem Digitalizada do Artigo Original */}
        <div className="overflow-auto max-h-[760px] border border-deco-burnished/50 bg-[#E6DEC8] p-2 sm:p-4 text-center">
          <div
            style={{
              width: `${zoom}%`,
              margin: zoom <= 100 ? '0 auto' : undefined,
            }}
            className="transition-all duration-200"
          >
            <img
              src={currentImgUrl}
              alt={`${title} — pág. ${selectedPage}`}
              loading="eager"
              className={`w-full h-auto shadow-lg mx-auto ${filterMode}`}
            />
          </div>
        </div>
      </div>

      {/* ==================== TRANSCRIÇÃO SEMPRE ABAIXO DO ARTIGO ORIGINAL ==================== */}
      {transcribedWorks.length > 0 && (
        <div className="border-t-2 border-deco-gold pt-5 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-parchment-elevated p-4 border border-deco-burnished/50">
            <div className="space-y-1">
              <h3 className="font-sans text-xs sm:text-sm uppercase tracking-widest text-deco-crimson font-bold">
                {transcriptionHeading}
              </h3>
              <p className="font-sans text-[11px] text-charcoal-muted">
                {profileNotice}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 font-sans text-xs shrink-0">
              <Link
                href={buildLangSwitchHref(pathname, 'es', work?.slug)}
                className={`px-3 py-1.5 border font-bold transition-colors ${
                  lang === 'es'
                    ? 'bg-deco-crimson text-parchment border-deco-gold shadow-sm'
                    : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                }`}
              >
                ES • Castellano
              </Link>
              <Link
                href={buildLangSwitchHref(pathname, 'va', work?.slug)}
                className={`px-3 py-1.5 border font-bold transition-colors ${
                  lang === 'va'
                    ? 'bg-deco-valencia text-parchment border-deco-gold shadow-sm'
                    : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                }`}
              >
                VA • Valencià
              </Link>
              <Link
                href={buildLangSwitchHref(pathname, 'pt', work?.slug)}
                className={`px-3 py-1.5 border font-bold transition-colors ${
                  lang === 'pt'
                    ? 'bg-[#1D4E38] text-parchment border-deco-gold shadow-sm'
                    : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                }`}
              >
                PT • Português
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {transcribedWorks.map((item) => {
              const paragraphs = item.excerpt.split(/\n\n+/).filter(Boolean);
              return (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 bg-parchment-card border-2 border-deco-burnished/60 shadow-inner space-y-4"
                >
                  {/* Cabeçalho Documental do Artigo Transcrito */}
                  <div className="border-b border-deco-burnished/40 pb-3 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-[11px] text-deco-gold font-bold uppercase tracking-wider">
                      <span>
                        {headerLineLabel}: Nº {item.id} • {item.periodical} ({item.city}, {item.date})
                      </span>
                      <span>Pág. {item.pages.join(', ')}</span>
                    </div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                      {item.title}
                    </h4>
                  </div>

                  {/* Corpo Integral dos Parágrafos Transcritos */}
                  <blockquote className="p-4 sm:p-5 bg-parchment-elevated border-l-4 border-deco-crimson font-serif text-base sm:text-lg text-charcoal leading-relaxed space-y-3.5">
                    {paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </blockquote>

                  {/* Assinatura e Nota Documental */}
                  <div className="pt-2 border-t border-deco-burnished/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="font-sans font-bold text-deco-crimson uppercase tracking-wider">
                      ✍ {signatureLabel}: {item.signature}
                    </span>
                    <span className="font-serif italic text-charcoal-muted">
                      {item.excerptTranslation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
