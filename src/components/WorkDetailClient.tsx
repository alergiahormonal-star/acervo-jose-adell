'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageScanViewer from '@/components/PageScanViewer';
import {
  CATALOG_WORKS,
  CATEGORY_LABELS,
  CatalogWork,
} from '@/data/acervo-completo';

export default function WorkDetailClient({ work }: { work: CatalogWork }) {
  const [citeFmt, setCiteFmt] = useState<'ABNT' | 'APA' | 'CHICAGO'>('ABNT');
  const [copied, setCopied] = useState(false);

  const currentIdx = CATALOG_WORKS.findIndex((w) => w.slug === work.slug);
  const prevWork = currentIdx > 0 ? CATALOG_WORKS[currentIdx - 1] : null;
  const nextWork =
    currentIdx >= 0 && currentIdx < CATALOG_WORKS.length - 1
      ? CATALOG_WORKS[currentIdx + 1]
      : null;

  const catMeta = CATEGORY_LABELS[work.category];

  const citations: Record<'ABNT' | 'APA' | 'CHICAGO', string> = {
    ABNT: `ADELL Y FONS, José [${work.signature}]. ${work.title}. ${work.periodical}, ${work.city}, ${work.date}. Memorial Humano & Acervo Digital José Adell y Fons, Obra nº ${work.id} (Caderno Original, p. ${work.pages.join(', ')}). Disponível em: https://acervo-jose-adell.mbossois.workers.dev/obra/${work.slug}/`,
    APA: `Adell y Fons, J. (${work.year}). ${work.title}. ${work.periodical} (${work.city}). Memorial José Adell y Fons (Obra #${work.id}, pp. ${work.pages.join(', ')}). https://acervo-jose-adell.mbossois.workers.dev/obra/${work.slug}/`,
    CHICAGO: `Adell y Fons, José. "${work.title}." ${work.periodical} (${work.city}), ${work.date}. Memorial Histórico José Adell y Fons, doc. #${work.id}, pp. ${work.pages.join(', ')}.`,
  };

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(citations[citeFmt]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader />

      {/* Breadcrumbs sem nenhum link quebrado */}
      <nav
        aria-label="Navegação estrutural"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
          <li>
            <Link href="/" className="hover:text-deco-crimson underline-offset-4 hover:underline">
              Início
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <Link href="/acervo/" className="hover:text-deco-crimson underline-offset-4 hover:underline">
              Acervo Completo (56 Obras)
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li className="font-semibold text-deco-crimson truncate max-w-md" aria-current="page">
            Nº {work.id} — {work.title}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Cabeçalho Humanizado da Obra */}
        <article className="deco-frame p-6 sm:p-8 mb-8 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-deco-burnished/40 font-sans text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-[#181613] text-[#D4AF37] font-bold">
                Obra Nº {work.id} de 56
              </span>
              <span className={`px-2.5 py-1 font-bold uppercase tracking-wider ${catMeta.badgeColor}`}>
                {catMeta.label}
              </span>
              <span className="px-2.5 py-1 border border-deco-burnished font-medium">
                📅 {work.date}
              </span>
              <span className="px-2.5 py-1 border border-deco-burnished font-medium">
                📍 {work.city}
              </span>
            </div>
            <span className="text-charcoal-muted">
              Páginas no caderno original: <strong className="text-charcoal">{work.pages.join(', ')}</strong>
            </span>
          </div>

          <p className="font-sans text-xs uppercase tracking-widest text-deco-gold font-bold mb-1">
            {work.periodical} • Assinado por {work.signature}
          </p>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-tight mb-2">
            {work.humanTitle}
          </h1>

          <h2 className="font-serif text-base sm:text-lg italic text-charcoal-muted">
            Título original no recorte: &ldquo;{work.title}&rdquo;
          </h2>
        </article>

        {/* Visualizador Lado a Lado: Recorte Original Escaneado + Leitura Contextualizada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Esquerda: Imagem Real Escaneada */}
          <div className="lg:col-span-7">
            <PageScanViewer pages={work.pages} title={work.title} />
          </div>

          {/* Direita: Contexto Humano, Trecho Original, Tradução e Citação */}
          <div className="lg:col-span-5 space-y-6">
            <section className="deco-frame p-6 space-y-4">
              <h3 className="font-sans text-xs uppercase tracking-widest text-deco-crimson font-bold border-b border-deco-burnished/40 pb-2">
                ❤ Contexto Humano e Histórico
              </h3>
              <p className="font-serif text-base text-charcoal leading-relaxed">
                {work.summary}
              </p>
            </section>

            <section className="deco-frame p-6 space-y-4">
              <h3 className="font-sans text-xs uppercase tracking-widest text-deco-valencia font-bold border-b border-deco-burnished/40 pb-2">
                ✒ Trecho em Destaque no Original
              </h3>
              <blockquote className="p-4 bg-parchment-elevated border-l-4 border-deco-gold font-serif text-sm sm:text-base italic text-charcoal leading-relaxed">
                &ldquo;{work.excerpt}&rdquo;
              </blockquote>

              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider text-deco-gold font-bold block mb-1">
                  Tradução / Nota em Português:
                </span>
                <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                  {work.excerptTranslation}
                </p>
              </div>
            </section>

            {/* Gerador de Citação Acadêmica */}
            <section className="deco-frame p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-bold">
                  🎓 Como Citar este Documento
                </h3>
                <div className="flex gap-1 font-sans text-xs">
                  {(['ABNT', 'APA', 'CHICAGO'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setCiteFmt(fmt)}
                      className={`px-2.5 py-1 border font-bold ${
                        citeFmt === fmt
                          ? 'bg-deco-valencia text-parchment border-deco-gold'
                          : 'bg-parchment border-deco-burnished/50 text-charcoal'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-parchment-elevated border border-deco-burnished/40 font-mono text-xs text-charcoal break-words select-all">
                {citations[citeFmt]}
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2 bg-deco-gold text-parchment font-sans text-xs font-bold uppercase tracking-wider hover:bg-deco-crimson transition-colors"
              >
                {copied ? '✓ Citação Copiada!' : 'Copiar Referência Bibliográfica'}
              </button>
            </section>
          </div>
        </div>

        {/* Navegação Anterior / Próxima Obra */}
        <div className="mt-12 pt-6 border-t-2 border-deco-burnished flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-sans text-xs">
          {prevWork ? (
            <Link
              href={`/obra/${prevWork.slug}/`}
              className="deco-frame p-4 flex-1 hover:border-deco-crimson transition-colors"
            >
              <span className="text-deco-gold font-bold uppercase block mb-1">
                ← Obra Anterior (Nº {prevWork.id})
              </span>
              <span className="font-display text-lg font-bold text-charcoal">
                {prevWork.humanTitle}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link
            href="/acervo/"
            className="px-5 py-4 bg-parchment-elevated border border-deco-burnished font-bold uppercase tracking-wider text-center self-center hover:border-deco-gold"
          >
            Ver Todas as 56 Obras
          </Link>

          {nextWork ? (
            <Link
              href={`/obra/${nextWork.slug}/`}
              className="deco-frame p-4 flex-1 text-right hover:border-deco-crimson transition-colors"
            >
              <span className="text-deco-gold font-bold uppercase block mb-1">
                Próxima Obra (Nº {nextWork.id}) →
              </span>
              <span className="font-display text-lg font-bold text-charcoal">
                {nextWork.humanTitle}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
