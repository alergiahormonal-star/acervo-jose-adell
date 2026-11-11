'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageScanViewer from '@/components/PageScanViewer';
import { CatalogWork } from '@/data/acervo-completo';
import {
  CATEGORY_LABELS_I18N,
  getLocalizedWork,
  getLocalizedWorksList,
} from '@/data/acervo-trilingue';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';
import { SITE_URL } from '@/lib/site-config';

export default function WorkDetailClient({
  work: rawWork,
  lang = 'es',
}: {
  work: CatalogWork;
  lang?: SiteLang;
}) {
  const [citeFmt, setCiteFmt] = useState<'ABNT' | 'APA' | 'CHICAGO'>('ABNT');
  const [copied, setCopied] = useState(false);

  const t = UI_STRINGS[lang];
  const work = useMemo(() => getLocalizedWork(rawWork, lang), [rawWork, lang]);
  const worksList = useMemo(() => getLocalizedWorksList(lang), [lang]);
  const catMeta = CATEGORY_LABELS_I18N[lang][work.category];

  const currentIdx = worksList.findIndex((w) => w.slug === work.slug);
  const prevWork = currentIdx > 0 ? worksList[currentIdx - 1] : null;
  const nextWork =
    currentIdx >= 0 && currentIdx < worksList.length - 1
      ? worksList[currentIdx + 1]
      : null;

  const homeHref = lang === 'es' ? '/' : `/${lang}/`;
  const prefix = `/${lang}`;
  const canonicalUrl = `${SITE_URL}/${lang}/obra/${work.slug}/`;

  const citations: Record<'ABNT' | 'APA' | 'CHICAGO', string> =
    lang === 'va'
      ? {
          ABNT: `ADELL Y FONS, José [${work.signature}]. ${work.title}. ${work.periodical}, ${work.city}, ${work.date}. Memorial Humà i Arxiu Digital José Adell y Fons, Obra núm. ${work.id} (Quadern Original, p. ${work.pages.join(', ')}). Disponible a: ${canonicalUrl}`,
          APA: `Adell y Fons, J. (${work.year}). ${work.title}. ${work.periodical} (${work.city}). Memorial José Adell y Fons (Obra #${work.id}, pàgs. ${work.pages.join(', ')}). ${canonicalUrl}`,
          CHICAGO: `Adell y Fons, José. "${work.title}." ${work.periodical} (${work.city}), ${work.date}. Memorial Històric José Adell y Fons, doc. #${work.id}, pàgs. ${work.pages.join(', ')}.`,
        }
      : lang === 'pt'
      ? {
          ABNT: `ADELL Y FONS, José [${work.signature}]. ${work.title}. ${work.periodical}, ${work.city}, ${work.date}. Memorial Humano e Acervo Digital José Adell y Fons, Obra nº ${work.id} (Caderno Original, p. ${work.pages.join(', ')}). Disponível em: ${canonicalUrl}`,
          APA: `Adell y Fons, J. (${work.year}). ${work.title}. ${work.periodical} (${work.city}). Memorial José Adell y Fons (Obra #${work.id}, pp. ${work.pages.join(', ')}). ${canonicalUrl}`,
          CHICAGO: `Adell y Fons, José. "${work.title}." ${work.periodical} (${work.city}), ${work.date}. Memorial Histórico José Adell y Fons, doc. #${work.id}, pp. ${work.pages.join(', ')}.`,
        }
      : {
          ABNT: `ADELL Y FONS, José [${work.signature}]. ${work.title}. ${work.periodical}, ${work.city}, ${work.date}. Memorial Humano y Archivo Digital José Adell y Fons, Obra nº ${work.id} (Cuaderno Original, p. ${work.pages.join(', ')}). Disponible en: ${canonicalUrl}`,
          APA: `Adell y Fons, J. (${work.year}). ${work.title}. ${work.periodical} (${work.city}). Memorial José Adell y Fons (Obra #${work.id}, pp. ${work.pages.join(', ')}). ${canonicalUrl}`,
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
      <SiteHeader lang={lang} />

      <nav
        aria-label="Breadcrumb"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
          <li>
            <Link href={homeHref} className="hover:text-deco-crimson underline-offset-4 hover:underline">
              {t.navHome}
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <Link href={`${prefix}/acervo/`} className="hover:text-deco-crimson underline-offset-4 hover:underline">
              {t.navArchive}
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li className="font-semibold text-deco-crimson truncate max-w-md" aria-current="page">
            Nº {work.id} — {work.title}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-10 pb-14 sm:pt-12 sm:pb-16 space-y-10">
        {/* Cabeçalho da Obra */}
        <article className="deco-frame p-6 sm:p-8 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-deco-burnished/40 font-sans text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-[#181613] text-[#D4AF37] font-bold">
                Nº {work.id} / {worksList.length}
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
            <div className="flex flex-wrap items-center gap-1.5 text-charcoal-muted">
              <span>{lang === 'va' ? 'Pàgs.:' : 'Págs.:'}</span>
              {work.pages.map((p) => (
                <Link
                  key={p}
                  href={`${prefix}/pagina/${p}/`}
                  className="px-2 py-0.5 border border-deco-burnished/50 font-bold text-charcoal hover:border-deco-crimson"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs uppercase tracking-widest text-deco-gold font-bold mb-1">
            {work.periodical} • ✍ {work.signature}
          </p>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-tight mb-2">
            {work.humanTitle}
          </h1>

          <h2 className="font-serif text-base sm:text-lg italic text-charcoal-muted">
            {t.originalTitleLabel} &ldquo;{work.title}&rdquo;
          </h2>

          {/* Epígrafe de Destaque de Pepe Adell */}
          <div className="mt-5 pt-4 border-t border-deco-burnished/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-parchment-elevated px-4 py-3 border-l-4 border-l-deco-crimson">
            <p className="font-display text-sm sm:text-base italic font-semibold text-charcoal">
              “¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!”
            </p>
            <span className="font-sans text-[11px] uppercase tracking-widest text-deco-crimson font-bold whitespace-nowrap">
              — Pepe Adell (1893)
            </span>
          </div>
        </article>

        {/* 1. ARTIGO ORIGINAL DIGITALIZADO + TRANSCRIÇÃO COMPLETA LOGO ABAIXO DO ARTIGO ORIGINAL */}
        <section aria-label={t.viewerOriginalBadge}>
          <PageScanViewer
            pages={work.pages}
            title={work.title}
            lang={lang}
            work={work}
          />
        </section>

        {/* 2. CONTEXTO HUMANO E HISTÓRICO + COMO CITAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <section className="lg:col-span-7 deco-frame p-6 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-widest text-deco-crimson font-bold border-b border-deco-burnished/40 pb-2">
              {t.workContextTitle}
            </h3>
            <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
              {work.summary}
            </p>
          </section>

          <section className="lg:col-span-5 deco-frame p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-bold">
                {t.workCiteTitle}
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
              {copied ? t.workCopied : t.workCopyCite}
            </button>
          </section>
        </div>

        {/* Navegação entre Obras */}
        <div className="pt-6 border-t-2 border-deco-burnished flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-sans text-xs">
          {prevWork ? (
            <Link
              href={`${prefix}/obra/${prevWork.slug}/`}
              className="deco-frame p-4 flex-1 hover:border-deco-crimson transition-colors"
            >
              <span className="text-deco-gold font-bold uppercase block mb-1">
                {t.prevWork} (Nº {prevWork.id})
              </span>
              <span className="font-display text-lg font-bold text-charcoal">
                {prevWork.humanTitle}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link
            href={`${prefix}/acervo/`}
            className="px-5 py-4 bg-parchment-elevated border border-deco-burnished font-bold uppercase tracking-wider text-center self-center hover:border-deco-gold"
          >
            {t.viewAllWorks}
          </Link>

          {nextWork ? (
            <Link
              href={`${prefix}/obra/${nextWork.slug}/`}
              className="deco-frame p-4 flex-1 text-right hover:border-deco-crimson transition-colors"
            >
              <span className="text-deco-gold font-bold uppercase block mb-1">
                {t.nextWork} (Nº {nextWork.id})
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

      <SiteFooter lang={lang} />
    </div>
  );
}
