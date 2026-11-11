'use client';

import React, { useMemo, useRef, useState } from 'react';
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
  const [loupeActive, setLoupeActive] = useState<boolean>(false);
  const [loupePos, setLoupePos] = useState<{ xPct: number; yPct: number; visible: boolean }>({
    xPct: 50,
    yPct: 50,
    visible: false,
  });
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [fontScale, setFontScale] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const imgWrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const t = UI_STRINGS[lang];
  const padPage = (n: number) => String(n).padStart(2, '0');
  const currentImgUrl = `/paginas/pagina-${padPage(selectedPage)}.webp`;

  const allLocalizedWorks = useMemo(() => getLocalizedWorksList(lang), [lang]);

  const transcribedWorks = useMemo(() => {
    if (work) return [work];
    const onSelected = allLocalizedWorks.filter((w) => w.pages.includes(selectedPage));
    if (onSelected.length > 0) return onSelected;
    return allLocalizedWorks.filter((w) => w.pages.some((p) => pages.includes(p)));
  }, [work, allLocalizedWorks, selectedPage, pages]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!loupeActive || !imgWrapRef.current) return;
    const rect = imgWrapRef.current.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLoupePos({ xPct, yPct, visible: true });
  };

  const copyTranscription = (item: CatalogWork) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      const fullText = `${item.title} (${item.periodical}, ${item.city}, ${item.date})\n\n${item.excerpt}\n\n— ${item.signature}`;
      navigator.clipboard.writeText(fullText);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const transcriptionHeading =
    lang === 'va'
      ? '📜 Transcripció Completa de l’Article Original (en Valencià)'
      : lang === 'pt'
      ? '📜 Transcrição Completa do Artigo Original (em Português)'
      : '📜 Transcripción Completa del Artículo Original (en Castellano)';

  const profileNotice =
    lang === 'va'
      ? 'Transcripció situada sempre sota l’article original en el perfil Valencià:'
      : lang === 'pt'
      ? 'Transcrição posicionada sempre abaixo do artigo original no perfil Português:'
      : 'Transcripción situada siempre debajo del artículo original en el perfil Castellano:';

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

  const loupeLabel =
    lang === 'va' ? '🔍 Lupa' : lang === 'pt' ? '🔍 Lupa' : '🔍 Lupa';

  const copyBtnLabel =
    lang === 'va'
      ? '📋 Copiar Transcripció'
      : lang === 'pt'
      ? '📋 Copiar Transcrição'
      : '📋 Copiar Transcripción';

  const copiedBtnLabel =
    lang === 'va' ? '✓ Copiat!' : lang === 'pt' ? '✓ Copiado!' : '✓ ¡Copiado!';

  const fontSizeClass =
    fontScale === 'sm'
      ? 'text-sm sm:text-base'
      : fontScale === 'lg'
      ? 'text-lg sm:text-xl'
      : 'text-base sm:text-lg';

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
              title="Reduzir zoom"
            >
              −
            </button>
            <span className="px-1.5 font-mono font-semibold">{zoom}%</span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(225, z + 25))}
              className="px-2.5 py-1 border border-deco-burnished bg-parchment hover:bg-deco-goldLight/40 font-bold"
              title="Aumentar zoom"
            >
              +
            </button>

            <button
              type="button"
              onClick={() => setLoupeActive((v) => !v)}
              className={`px-2.5 py-1 border font-semibold transition-colors ${
                loupeActive
                  ? 'bg-deco-crimson text-white border-deco-gold'
                  : 'bg-parchment border-deco-burnished text-charcoal hover:border-deco-gold'
              }`}
              title="Ativar lupa óptica sobre o recorte"
            >
              {loupeLabel}
            </button>

            <select
              aria-label="Modo óptico"
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value as typeof filterMode)}
              className="px-2 py-1 border border-deco-burnished bg-parchment text-charcoal font-medium max-w-[175px]"
            >
              <option value="none">{t.viewerColorOriginal}</option>
              <option value="facsimile-high-contrast">{t.viewerHighContrast}</option>
              <option value="facsimile-sepia-enhance">{t.viewerSepia}</option>
              <option value="facsimile-invert-manuscript">{t.viewerInvert}</option>
            </select>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="px-2.5 py-1 bg-deco-valencia text-white font-semibold hover:bg-deco-crimson transition-colors"
            >
              {t.viewerFullScreen}
            </button>
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
                    ? 'bg-deco-crimson text-white border-deco-gold shadow-sm'
                    : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                }`}
              >
                Pág. {p}
              </button>
            ))}
          </div>
        )}

        {/* Imagem Digitalizada do Artigo Original + Lupa Óptica */}
        <div className="overflow-auto custom-scrollbar max-h-[760px] border border-deco-burnished/50 bg-[#E6DEC8] p-2 sm:p-4 text-center">
          <div
            ref={imgWrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setLoupePos((prev) => ({ ...prev, visible: false }))}
            style={{
              width: `${zoom}%`,
              margin: zoom <= 100 ? '0 auto' : undefined,
            }}
            className={`relative transition-all duration-200 ${
              loupeActive ? 'cursor-crosshair' : ''
            }`}
          >
            <img
              src={currentImgUrl}
              alt={`${title} — pág. ${selectedPage}`}
              loading="eager"
              className={`w-full h-auto shadow-lg mx-auto ${filterMode}`}
            />

            {loupeActive && loupePos.visible && (
              <div
                aria-hidden="true"
                style={{
                  left: `${loupePos.xPct}%`,
                  top: `${loupePos.yPct}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundImage: `url(${currentImgUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '280%',
                  backgroundPosition: `${loupePos.xPct}% ${loupePos.yPct}%`,
                }}
                className={`pointer-events-none absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-[#D4AF37] shadow-2xl ring-2 ring-black/50 ${filterMode}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* ==================== TRANSCRIÇÃO SEMPRE ABAIXO DO ARTIGO ORIGINAL ==================== */}
      {transcribedWorks.length > 0 && (
        <div className="border-t-2 border-deco-gold pt-5 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-parchment-elevated p-4 border border-deco-burnished/50">
            <div className="space-y-1">
              <h3 className="font-sans text-xs sm:text-sm uppercase tracking-widest text-deco-crimson font-bold">
                {transcriptionHeading}
              </h3>
              <p className="font-sans text-[11px] text-charcoal-muted">
                {profileNotice}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-sans text-xs">
              {/* Controle de Tamanho da Fonte para Leitura Confortável */}
              <div className="inline-flex items-center border border-deco-burnished/50 bg-parchment rounded-[2px] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setFontScale('sm')}
                  className={`px-2 py-1 font-bold ${
                    fontScale === 'sm' ? 'bg-deco-gold text-white' : 'text-charcoal'
                  }`}
                  title="Fonte menor"
                >
                  A−
                </button>
                <button
                  type="button"
                  onClick={() => setFontScale('md')}
                  className={`px-2 py-1 font-bold border-x border-deco-burnished/40 ${
                    fontScale === 'md' ? 'bg-deco-gold text-white' : 'text-charcoal'
                  }`}
                  title="Fonte padrão"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontScale('lg')}
                  className={`px-2 py-1 font-bold ${
                    fontScale === 'lg' ? 'bg-deco-gold text-white' : 'text-charcoal'
                  }`}
                  title="Fonte ampliada"
                >
                  A+
                </button>
              </div>

              <div className="flex flex-wrap gap-1">
                <Link
                  href={buildLangSwitchHref(pathname, 'es', work?.slug)}
                  className={`px-2.5 py-1.5 border font-bold transition-colors ${
                    lang === 'es'
                      ? 'bg-deco-crimson text-white border-deco-gold shadow-sm'
                      : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                  }`}
                >
                  ES • Castellano
                </Link>
                <Link
                  href={buildLangSwitchHref(pathname, 'va', work?.slug)}
                  className={`px-2.5 py-1.5 border font-bold transition-colors ${
                    lang === 'va'
                      ? 'bg-deco-valencia text-white border-deco-gold shadow-sm'
                      : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                  }`}
                >
                  VA • Valencià
                </Link>
                <Link
                  href={buildLangSwitchHref(pathname, 'pt', work?.slug)}
                  className={`px-2.5 py-1.5 border font-bold transition-colors ${
                    lang === 'pt'
                      ? 'bg-[#1D4E38] text-white border-deco-gold shadow-sm'
                      : 'bg-parchment border-deco-burnished/50 text-charcoal hover:border-deco-gold'
                  }`}
                >
                  PT • Português
                </Link>
              </div>
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
                  <div className="border-b border-deco-burnished/40 pb-3 flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="font-sans text-[11px] text-deco-gold font-bold uppercase tracking-wider block">
                        {headerLineLabel}: Nº {item.id} • {item.periodical} ({item.city}, {item.date}) • Pág.{' '}
                        {item.pages.join(', ')}
                      </span>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                        {item.title}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyTranscription(item)}
                      className="px-3 py-1.5 bg-parchment-elevated border border-deco-burnished/60 hover:border-deco-gold font-sans text-[11px] font-bold text-charcoal transition-colors shrink-0"
                    >
                      {copiedId === item.id ? copiedBtnLabel : copyBtnLabel}
                    </button>
                  </div>

                  <blockquote
                    className={`p-4 sm:p-6 bg-parchment-elevated border-l-4 border-deco-crimson font-serif ${fontSizeClass} text-charcoal leading-relaxed space-y-4`}
                  >
                    {paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </blockquote>

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

      {/* Lightbox Modal de Tela Cheia para Inspeção do Documento */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-3 pb-3 text-white font-sans text-xs max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-bold text-[#F9E7B2] truncate">
              📜 {title} — Pág. {selectedPage} / 89
            </span>
            <div className="flex items-center gap-2">
              <a
                href={currentImgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-[#D4AF37] text-[#F9E7B2] hover:bg-[#D4AF37] hover:text-black font-bold"
              >
                Abrir arquivo original ↗
              </a>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="px-3 py-1.5 bg-deco-crimson text-white font-bold border border-[#D4AF37]"
              >
                ✕ Fechar
              </button>
            </div>
          </div>

          <div
            className="flex-1 overflow-auto custom-scrollbar flex items-start justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImgUrl}
              alt={`${title} — pág. ${selectedPage}`}
              className={`max-w-full h-auto shadow-2xl ${filterMode}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
