'use client';

import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SpainValenciaBrazilFlags } from '@/components/Flags';
import {
  CLINIC_UNITS_LINKS,
  ENCYCLOPEDIA_LINKS,
  MARCELLO_LEGACY_I18N,
} from '@/data/legado-marcello-bossois';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function MarcelloLegacyReportView({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const c = MARCELLO_LEGACY_I18N[lang];
  const t = UI_STRINGS[lang];
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;
  const prefix = `/${lang}`;

  const navSectionLabel =
    lang === 'pt'
      ? 'Legado Vivo & Curadoria: Dr. Marcello Bossois'
      : lang === 'va'
      ? 'Llegat Viu i Curadoria: Dr. Marcello Bossois'
      : 'Legado Vivo y Curaduría: Dr. Marcello Bossois';

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-6xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
          <li>
            <Link
              href={homeHref}
              className="hover:text-deco-crimson underline-offset-4 hover:underline"
            >
              {t.navHome}
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">
            ❖
          </li>
          <li className="font-semibold text-deco-crimson" aria-current="page">
            {navSectionLabel}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-12">
        {/* ==================== CABEÇALHO MONUMENTAL DO RELATÓRIO ==================== */}
        <article className="deco-frame p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-deco-burnished/40 pb-4">
            <div className="inline-flex flex-wrap items-center gap-3">
              <SpainValenciaBrazilFlags size="md" />
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-deco-crimson font-bold">
                {c.badge}
              </span>
            </div>
            <span className="font-sans text-xs font-bold text-deco-gold uppercase tracking-wider">
              CRM/RJ 732141 • CRM/RJ 5274541-3
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-[1.08]">
              {c.title}
            </h1>
            <p className="font-serif text-lg sm:text-xl text-charcoal-muted leading-relaxed">
              {c.subtitle}
            </p>
          </div>

          {/* Banner de Autoria e Curadoria do Memorial */}
          <div className="p-5 sm:p-6 bg-parchment-elevated border-2 border-deco-gold shadow-sm space-y-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-deco-crimson font-bold block">
              🏛️ {c.curatorshipBannerTitle}
            </span>
            <p className="font-serif text-base text-charcoal leading-relaxed">
              {c.curatorshipBannerText}
            </p>
          </div>

          {/* Foto do Casal + Citação Ponte Geracional */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-6">
              <div className="border-2 border-deco-gold bg-[#E5DEC9] p-3 shadow-lg">
                <img
                  src="/destaques/dr-marcello-bossois-patricia-schlinkert.webp"
                  alt="Dr. Marcello Bossois e Dra. Patricia Frozi Schlinkert"
                  className="w-full h-auto object-cover"
                />
                <p className="font-serif text-xs text-charcoal-muted italic mt-2.5 leading-relaxed">
                  {c.photoCaption}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <blockquote className="p-5 border-l-4 border-deco-crimson bg-parchment-card shadow-sm">
                <p className="font-display text-xl sm:text-2xl italic text-charcoal leading-snug">
                  {c.bridgeQuote}
                </p>
                <footer className="mt-2.5 font-sans text-xs uppercase tracking-widest text-deco-gold font-bold">
                  {c.bridgeQuoteAuthor}
                </footer>
              </blockquote>

              <div className="grid grid-cols-2 gap-3 text-center font-sans">
                {c.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3.5 bg-parchment border border-deco-burnished/40"
                  >
                    <span className="block font-display text-3xl font-bold text-deco-crimson">
                      {st.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sumário Rápido dos 5 Capítulos */}
          <div className="pt-4 border-t border-deco-burnished/40">
            <div className="flex flex-wrap gap-2 font-sans text-xs">
              {c.chapters.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="px-3.5 py-2 bg-parchment border border-deco-burnished/50 hover:border-deco-crimson hover:text-deco-crimson font-bold transition-colors"
                >
                  {ch.roman}. {ch.kicker}
                </a>
              ))}
              <a
                href="#quadro-personalidades"
                className="px-3.5 py-2 bg-deco-valencia text-parchment font-bold hover:bg-deco-crimson transition-colors"
              >
                ★ {c.peopleDirectoryTitle.split(':')[0]}
              </a>
            </div>
          </div>
        </article>

        {/* ==================== OS 5 CAPÍTULOS DO RELATÓRIO ==================== */}
        {c.chapters.map((ch) => (
          <section
            key={ch.id}
            id={ch.id}
            className="deco-frame p-6 sm:p-10 shadow-xl space-y-6 scroll-mt-24"
          >
            <div className="border-b border-deco-burnished/40 pb-4">
              <span className="font-sans text-xs uppercase tracking-[0.22em] text-deco-crimson font-bold block">
                Capítulo {ch.roman} • {ch.kicker}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-charcoal mt-1.5">
                {ch.title}
              </h2>
            </div>

            <p className="font-serif text-lg font-medium text-charcoal leading-relaxed bg-parchment-elevated p-4 border-l-4 border-deco-gold">
              {ch.lead}
            </p>

            <div className="space-y-4 font-serif text-base sm:text-lg text-charcoal leading-relaxed">
              {ch.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {ch.bulletPoints && ch.bulletPoints.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {ch.bulletPoints.map((bp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-parchment border border-deco-burnished/50 space-y-1.5"
                  >
                    <h3 className="font-display text-lg font-bold text-deco-crimson">
                      {bp.title}
                    </h3>
                    <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                      {bp.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {ch.highlightBox && (
              <blockquote className="p-5 bg-[#181613] text-[#EFE9DA] border-l-4 border-[#D4AF37] space-y-1.5">
                <span className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                  📰 {ch.highlightBox.title}
                </span>
                <p className="font-serif text-base italic leading-relaxed">
                  {ch.highlightBox.text}
                </p>
              </blockquote>
            )}

            {/* Rede de Unidades Clínicas e Enciclopédia inseridas ao final do Capítulo II */}
            {ch.roman === 'II' && (
              <div className="space-y-6 pt-4 border-t border-deco-burnished/40">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    🗺️ {c.clinicUnitsTitle}
                  </h3>
                  <p className="font-serif text-sm text-charcoal-muted">
                    {c.clinicUnitsSubtitle}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-sans text-xs">
                    {CLINIC_UNITS_LINKS.map((unit) => (
                      <a
                        key={unit.url + unit.label}
                        href={unit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-parchment border border-deco-burnished/50 hover:border-deco-crimson flex items-center justify-between gap-2 transition-colors group"
                      >
                        <span className="font-bold text-charcoal group-hover:text-deco-crimson">
                          {unit.label}
                        </span>
                        <span className="px-2 py-0.5 bg-deco-valencia text-parchment text-[10px] font-bold uppercase shrink-0">
                          {unit.badge} ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    🧭 {c.encyclopediaTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ENCYCLOPEDIA_LINKS.map((art) => (
                      <a
                        key={art.url}
                        href={art.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-parchment-elevated border border-deco-burnished/50 hover:border-deco-gold transition-colors block space-y-1"
                      >
                        <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-deco-crimson block">
                          {art.badge}
                        </span>
                        <span className="font-serif text-sm font-semibold text-charcoal hover:underline">
                          {art.label} ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {ch.links && ch.links.length > 0 && (
              <div className="pt-4 border-t border-deco-burnished/40 space-y-2.5">
                <span className="font-sans text-[11px] uppercase tracking-widest text-charcoal-muted font-bold block">
                  🔗 Documentos, Publicações Científicas e Registros Oficiais:
                </span>
                <div className="flex flex-wrap gap-2.5 font-sans text-xs">
                  {ch.links.map((lk) => (
                    <a
                      key={lk.url + lk.label}
                      href={lk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-deco-valencia text-parchment font-bold hover:bg-deco-crimson transition-colors inline-flex items-center gap-1.5"
                    >
                      {lk.badge && (
                        <span className="px-1.5 py-0.5 bg-black/25 text-[#F5E6C4] text-[10px] uppercase">
                          {lk.badge}
                        </span>
                      )}
                      <span>{lk.label} ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* ==================== QUADRO DE HONRA DE TODAS AS PERSONALIDADES MENCIONADAS ==================== */}
        <section
          id="quadro-personalidades"
          className="deco-frame p-6 sm:p-10 shadow-xl space-y-6 scroll-mt-24"
        >
          <div className="border-b border-deco-burnished/40 pb-4">
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-deco-gold font-bold block">
              Registro Nominal Integral • Família, Ciência, Diplomacia e Cultura
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-charcoal mt-1">
              {c.peopleDirectoryTitle}
            </h2>
            <p className="font-serif text-base text-charcoal-muted mt-1">
              {c.peopleDirectorySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.peopleDirectory.map((person, idx) => (
              <div
                key={idx}
                className="p-5 bg-parchment border border-deco-burnished/50 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {person.name}
                  </h3>
                  <p className="font-sans text-xs font-bold text-deco-crimson uppercase tracking-wide">
                    {person.role}
                  </p>
                  <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                    {person.relationToLegacy}
                  </p>
                </div>

                {person.url && (
                  <div>
                    <a
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-sans text-xs font-bold text-deco-valencia hover:text-deco-crimson underline underline-offset-4"
                    >
                      Consultar referência científica / registro oficial ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Navegação de Retorno ao Memorial */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-sans text-xs">
          <Link
            href={homeHref}
            className="px-6 py-3.5 bg-deco-crimson text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-valencia transition-colors"
          >
            ← {t.navHome}
          </Link>
          <Link
            href={`${prefix}/acervo/`}
            className="px-6 py-3.5 bg-deco-valencia text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-crimson transition-colors"
          >
            {t.btnExploreArchive}
          </Link>
        </div>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
