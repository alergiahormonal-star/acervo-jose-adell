'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { SpainAndValenciaFlags } from '@/components/Flags';
import {
  COMISION_MEMBERS,
  COMISION_PATRIOTICA_CONTENT,
} from '@/data/comision-patriotica-1895';
import { SiteLang } from '@/lib/i18n-ui';

interface ComisionPatrioticaSectionProps {
  lang?: SiteLang;
  isStandalonePage?: boolean;
}

export default function ComisionPatrioticaSection({
  lang = 'es',
  isStandalonePage = false,
}: ComisionPatrioticaSectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loupeActive, setLoupeActive] = useState(false);
  const [loupePos, setLoupePos] = useState({ xPct: 50, yPct: 50, visible: false });
  const [selectedPortraitModal, setSelectedPortraitModal] = useState<number | null>(null);

  const imgWrapRef = useRef<HTMLDivElement>(null);
  const c = COMISION_PATRIOTICA_CONTENT[lang];
  const prefix = `/${lang}`;
  const fullImgUrl = '/destaques/comision-patriotica-1895.webp';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!loupeActive || !imgWrapRef.current) return;
    const rect = imgWrapRef.current.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLoupePos({ xPct, yPct, visible: true });
  };

  const HeadingTag = isStandalonePage ? 'h1' : 'h2';

  const loupeBtnLabel =
    lang === 'va'
      ? loupeActive
        ? '🔍 Lupa Activa'
        : '🔍 Activar Lupa'
      : lang === 'pt'
      ? loupeActive
        ? '🔍 Lupa Ativa'
        : '🔍 Ativar Lupa'
      : loupeActive
      ? '🔍 Lupa Activa'
      : '🔍 Activar Lupa';

  const fullscreenBtnLabel =
    lang === 'va'
      ? 'Pantalla Completa ↗'
      : lang === 'pt'
      ? 'Tela Cheia ↗'
      : 'Pantalla Completa ↗';

  const closeLabel =
    lang === 'va' ? '✕ Tancar' : lang === 'pt' ? '✕ Fechar' : '✕ Cerrar';

  const activeModalMember =
    selectedPortraitModal !== null
      ? COMISION_MEMBERS.find((m) => m.order === selectedPortraitModal) || null
      : null;

  return (
    <section
      id="comision-patriotica-1895"
      className="py-16 sm:py-20 px-4 sm:px-6 border-b-2 border-deco-burnished bg-parchment-card/60"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ==================== CABEÇALHO DO EVENTO HISTÓRICO DE 1895 ==================== */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 border border-deco-gold bg-parchment shadow-sm">
            <SpainAndValenciaFlags size="sm" />
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.16em] text-deco-crimson font-bold">
              {c.badge}
            </span>
          </div>

          <HeadingTag className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-[1.12]">
            {c.heroTitle}
          </HeadingTag>

          <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {c.heroSubtitle}
          </p>

          {!isStandalonePage && (
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-sans text-xs">
              <Link
                href={`${prefix}/comision-patriotica-1895/`}
                className="px-5 py-3 bg-deco-crimson text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-valencia transition-colors shadow-md"
              >
                {c.openFullDossierBtn}
              </Link>
              <Link
                href={`${prefix}/obra/homenaje-comision-patriotica-cuba-1895/`}
                className="px-5 py-3 bg-parchment text-charcoal font-bold uppercase tracking-widest border border-deco-burnished hover:border-deco-gold transition-colors"
              >
                {c.openWorkRecordBtn}
              </Link>
            </div>
          )}
        </div>

        {/* ==================== ALERTA HISTÓRICO: 1ª REVOLUÇÃO DE INDEPENDÊNCIA (1895–1898 COM OS EUA) VS. 1959 ==================== */}
        <div className="deco-frame p-5 sm:p-7 bg-[#181613] text-[#EFE9DA] border-2 border-deco-gold shadow-xl space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#D4AF37]/40 pb-3">
            <h3 className="font-sans text-xs sm:text-sm uppercase tracking-[0.15em] text-[#D4AF37] font-bold">
              {c.chronologicalClarificationTitle}
            </h3>
            <span className="font-mono text-[11px] px-2.5 py-0.5 bg-deco-crimson text-white font-bold shrink-0 self-start md:self-auto">
              1895 – 1898 • CUBA &amp; EUA
            </span>
          </div>
          <p className="font-serif text-sm sm:text-base text-[#EAE2D0] leading-relaxed">
            {c.chronologicalClarificationText}
          </p>
        </div>

        {/* ==================== GRADE PRINCIPAL: GRAVURA ORIGINAL + TRANSCRIÇÃO ABAIXO | ENSAIO HISTÓRICO ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Coluna Esquerda (5 cols): Portada Original de La Unión Española + Transcrição SEMPRE ABAIXO */}
          <div className="lg:col-span-5 deco-frame p-4 sm:p-6 space-y-5 shadow-lg bg-parchment">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-deco-burnished/40 font-sans text-xs">
              <span className="font-bold uppercase tracking-wider text-deco-crimson">
                {c.originalScanBadge}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setLoupeActive((v) => !v)}
                  className={`px-2.5 py-1 border font-semibold transition-colors ${
                    loupeActive
                      ? 'bg-deco-crimson text-white border-deco-gold'
                      : 'bg-parchment-card border-deco-burnished text-charcoal hover:border-deco-gold'
                  }`}
                >
                  {loupeBtnLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="px-2.5 py-1 bg-deco-valencia text-white font-semibold hover:bg-deco-crimson transition-colors"
                >
                  {fullscreenBtnLabel}
                </button>
              </div>
            </div>

            {/* 1. IMAGEM DO ARTIGO / CAPA ORIGINAL */}
            <div className="border border-deco-burnished/60 bg-[#E6DEC8] p-2 sm:p-3">
              <div
                ref={imgWrapRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setLoupePos((prev) => ({ ...prev, visible: false }))}
                onClick={() => !loupeActive && setLightboxOpen(true)}
                className={`relative overflow-hidden ${
                  loupeActive ? 'cursor-crosshair' : 'cursor-zoom-in'
                }`}
              >
                <img
                  src={fullImgUrl}
                  alt={c.originalScanCaption}
                  loading="eager"
                  className="w-full h-auto shadow-md mx-auto"
                />

                {loupeActive && loupePos.visible && (
                  <div
                    aria-hidden="true"
                    style={{
                      left: `${loupePos.xPct}%`,
                      top: `${loupePos.yPct}%`,
                      transform: 'translate(-50%, -50%)',
                      backgroundImage: `url(${fullImgUrl})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '290%',
                      backgroundPosition: `${loupePos.xPct}% ${loupePos.yPct}%`,
                    }}
                    className="pointer-events-none absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-[#D4AF37] shadow-2xl ring-2 ring-black/60"
                  />
                )}
              </div>
              <p className="mt-2 text-center font-serif text-xs italic text-charcoal-muted">
                {c.originalScanCaption} ({c.zoomHint})
              </p>
            </div>

            {/* 2. TRANSCRIÇÃO COMPLETA SEMPRE ABAIXO DO ARTIGO ORIGINAL */}
            <div className="border-t-2 border-deco-gold pt-4 space-y-3">
              <div className="bg-parchment-elevated p-3.5 border-l-4 border-deco-crimson space-y-1">
                <h3 className="font-sans text-xs uppercase tracking-widest text-deco-crimson font-bold">
                  {c.transcriptionHeading}
                </h3>
                <p className="font-sans text-[11px] text-charcoal-muted">
                  {c.transcriptionSubnote}
                </p>
              </div>

              <blockquote className="p-4 bg-parchment-card border border-deco-burnished/40 font-serif text-xs sm:text-sm text-charcoal leading-relaxed space-y-2.5">
                {c.transcriptionBlocks.map((block, bIdx) => (
                  <p key={bIdx} className="whitespace-pre-line">
                    {block}
                  </p>
                ))}
              </blockquote>

              <p className="font-sans text-[11px] font-bold text-deco-crimson uppercase tracking-wider">
                ✍ {c.transcriptionSignatureLine}
              </p>
            </div>
          </div>

          {/* Coluna Direita (7 cols): Destaque de José Adell + Ensaio sobre a 1ª Revolução Cubana e os EUA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card em Destaque: Retrato Autêntico de Pepe Adell em 1895 + Liderança */}
            <div className="deco-frame p-5 sm:p-6 bg-parchment-elevated border-l-4 border-l-deco-crimson flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-md">
              <div className="w-32 sm:w-36 shrink-0 border-2 border-deco-gold bg-[#EFE6D2] p-1.5 shadow-md">
                <img
                  src="/destaques/retrato-pepe-adell-1895.webp"
                  alt="D. José Adell — La Unión Española, 19 de Octubre de 1895"
                  className="w-full h-auto object-contain"
                />
                <span className="block text-center font-sans text-[9px] uppercase tracking-wider font-bold text-deco-crimson pt-1">
                  D. José Adell (1895)
                </span>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-block px-3 py-1 bg-deco-crimson text-white font-sans text-[10px] uppercase tracking-widest font-bold">
                  {c.leaderHighlightTitle}
                </span>
                <p className="font-serif text-sm sm:text-base text-charcoal leading-relaxed">
                  {c.leaderHighlightText}
                </p>
                <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-3 font-sans text-xs">
                  <Link
                    href={`${prefix}/obra/homenaje-comision-patriotica-cuba-1895/`}
                    className="font-bold text-deco-crimson underline underline-offset-4 hover:text-deco-valencia"
                  >
                    {c.openWorkRecordBtn}
                  </Link>
                </div>
              </div>
            </div>

            {/* Capítulos do Ensaio Histórico */}
            <div className="deco-frame p-6 sm:p-8 space-y-6 bg-parchment shadow-md">
              <div className="border-b border-deco-burnished/40 pb-4">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-deco-gold font-bold block">
                  {c.essaySectionKicker}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mt-1 leading-tight">
                  {c.essaySectionTitle}
                </h3>
              </div>

              <div className="space-y-6">
                {c.historicalBlocks.map((blk, idx) => (
                  <article
                    key={idx}
                    className="space-y-2.5 pb-5 last:pb-0 border-b last:border-b-0 border-deco-burnished/30"
                  >
                    <span className="font-sans text-[11px] uppercase tracking-widest text-deco-crimson font-bold block">
                      {blk.kicker}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-charcoal leading-snug">
                      {blk.title}
                    </h4>
                    <div className="font-serif text-sm sm:text-base text-charcoal leading-relaxed space-y-3">
                      {blk.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Nota sobre o Artista A. Castaño */}
            <div className="p-4 sm:p-5 border border-deco-burnished/60 bg-parchment-card font-serif text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              <strong className="font-sans text-xs uppercase tracking-wider text-deco-valencia block mb-1">
                {c.illustratorBoxTitle}
              </strong>
              <p>{c.illustratorBoxText}</p>
            </div>
          </div>
        </div>

        {/* ==================== GALERIA DOS 12 INTEGRANTES PARTICIPANTES CONFORME A IMAGEM ==================== */}
        <div className="pt-6 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-deco-crimson font-bold block">
              {c.rosterKicker}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              {c.rosterTitle}
            </h3>
            <p className="font-serif text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {c.rosterSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMISION_MEMBERS.map((member) => {
              const loc = member[lang];
              return (
                <article
                  key={member.id}
                  className={`deco-frame p-5 flex flex-col justify-between transition-all ${
                    member.isLeader
                      ? 'ring-2 ring-deco-crimson bg-parchment-elevated shadow-xl'
                      : 'bg-parchment hover:border-deco-gold shadow-md'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Topo do Card: Número de Ordem + Badge de Líder se Pepe Adell */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-deco-burnished/30 font-sans text-[11px]">
                      <span className="px-2.5 py-0.5 bg-[#181613] text-[#D4AF37] font-bold">
                        {c.memberOrderLabel} {String(member.order).padStart(2, '0')} / 12
                      </span>
                      {member.isLeader && (
                        <span className="px-2.5 py-0.5 bg-deco-crimson text-white font-bold uppercase tracking-wider">
                          {c.leaderBadge}
                        </span>
                      )}
                    </div>

                    {/* Retrato Oval Recortado da Gravura Original de 1895 + Nome */}
                    <div className="flex items-start gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPortraitModal(member.order)}
                        className="w-24 sm:w-28 shrink-0 border border-deco-burnished bg-[#EFE6D2] p-1 shadow-sm hover:border-deco-crimson transition-colors cursor-zoom-in"
                        title={member.fullName}
                      >
                        <img
                          src={member.portrait}
                          alt={`${member.engravedName} — La Unión Española (1895)`}
                          loading="lazy"
                          className="w-full h-auto object-contain"
                        />
                      </button>

                      <div className="min-w-0 space-y-1">
                        <span className="font-sans text-[10px] uppercase tracking-wider text-deco-gold font-bold block">
                          {c.engravedRibbonLabel} «{member.engravedName}»
                        </span>
                        <h4 className="font-display text-xl font-bold text-charcoal leading-tight">
                          {member.fullName}
                        </h4>
                        <p className="font-sans text-[11px] text-charcoal-muted">
                          {member.lifespan}
                        </p>
                        <p className="font-sans text-[11px] font-bold text-deco-crimson leading-snug pt-0.5">
                          {loc.roleTitle}
                        </p>
                      </div>
                    </div>

                    {/* Pequena Bio Documentada */}
                    <p className="font-serif text-xs sm:text-sm text-charcoal leading-relaxed">
                      {loc.bio}
                    </p>
                  </div>

                  {/* Rodapé de Fontes Documentais / Web */}
                  <div className="mt-4 pt-3 border-t border-deco-burnished/30 space-y-2 text-[11px]">
                    <p className="font-serif italic text-charcoal-muted leading-snug">
                      🔎 {loc.webSourceNote}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 font-sans font-bold">
                      {member.internalHrefSlug && (
                        <Link
                          href={`${prefix}/${member.internalHrefSlug}/`}
                          className="text-deco-crimson hover:underline underline-offset-4"
                        >
                          {c.viewInternalDossierLabel}
                        </Link>
                      )}
                      {member.externalUrl && member.externalLabel && (
                        <a
                          href={member.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-deco-valencia hover:underline underline-offset-4"
                        >
                          {member.externalLabel} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal de Tela Cheia para a Capa Completa de 1895 */}
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
              📰 {c.originalScanBadge}
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="px-3 py-1.5 bg-deco-crimson text-white font-bold border border-[#D4AF37]"
            >
              {closeLabel}
            </button>
          </div>
          <div
            className="flex-1 overflow-auto custom-scrollbar flex items-start justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullImgUrl}
              alt={c.originalScanCaption}
              className="max-w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Modal Individual de Medalhão Ampliado */}
      {activeModalMember && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPortraitModal(null)}
        >
          <div
            className="max-w-lg w-full bg-parchment border-2 border-deco-gold p-5 sm:p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-deco-burnished/40 pb-2.5 font-sans text-xs">
              <span className="font-bold text-deco-crimson uppercase tracking-wider">
                {c.memberOrderLabel} {String(activeModalMember.order).padStart(2, '0')} —{' '}
                {activeModalMember.engravedName}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPortraitModal(null)}
                className="px-2.5 py-1 bg-deco-crimson text-white font-bold"
              >
                {closeLabel}
              </button>
            </div>
            <div className="bg-[#EFE6D2] border border-deco-burnished/50 p-3 text-center">
              <img
                src={activeModalMember.portrait}
                alt={activeModalMember.fullName}
                className="max-h-80 mx-auto object-contain shadow-md"
              />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-display text-2xl font-bold text-charcoal">
                {activeModalMember.fullName}
              </h4>
              <p className="font-sans text-xs font-bold text-deco-crimson">
                {activeModalMember[lang].roleTitle}
              </p>
              <p className="font-serif text-sm text-charcoal leading-relaxed">
                {activeModalMember[lang].bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
