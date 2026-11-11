'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';
import InteractiveTimelineSection from '@/components/InteractiveTimelineSection';
import PersonalitiesAndTheatroSection from '@/components/PersonalitiesAndTheatroSection';
import MarcelloLegacyHomeSection from '@/components/MarcelloLegacyHomeSection';
import { SpainAndValenciaFlags } from '@/components/Flags';
import { getLocalizedWorksList } from '@/data/acervo-trilingue';
import {
  getLocalizedFamily,
  getLocalizedStories,
} from '@/data/historias-trilingues';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function HomeExperience({ lang = 'es' }: { lang?: SiteLang }) {
  const [selectedFamilyIdx, setSelectedFamilyIdx] = useState<number>(0);

  const t = UI_STRINGS[lang];
  const stories = useMemo(() => getLocalizedStories(lang), [lang]);
  const familyList = useMemo(() => getLocalizedFamily(lang), [lang]);
  const worksList = useMemo(() => getLocalizedWorksList(lang), [lang]);
  const activeMember = familyList[selectedFamilyIdx];
  const activeFamilyWork = useMemo(
    () => worksList.find((w) => w.pages.includes(activeMember.pages[0])),
    [worksList, activeMember]
  );
  const prefix = `/${lang}`;

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader lang={lang} />

      <main className="flex-1">
        {/* ==================== HERO HUMANO EM CASTELLANO / VALENCIÀ / PORTUGUÊS ==================== */}
        <section className="relative overflow-hidden border-b-2 border-deco-burnished bg-deco-sunburst pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {/* Emblema Oficial com as Bandeiras da Espanha e da Comunidade Valenciana Juntas */}
              <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 border border-deco-gold bg-parchment-card shadow-sm max-w-full">
                <SpainAndValenciaFlags size="md" />
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.16em] text-deco-crimson font-bold break-words">
                  {t.heroBadge}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl xl:text-[3.5rem] font-bold text-charcoal leading-[1.08]">
                {t.heroTitle}
              </h1>

              <p className="font-serif text-lg sm:text-xl text-charcoal-muted leading-relaxed">
                {t.heroLead}
              </p>

              <div className="p-4 sm:p-5 border-2 border-deco-gold bg-[#181613] text-[#EFE9DA] shadow-lg space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-bold block">
                  {lang === 'va'
                    ? '★ Pensament Immortal de Pepe Adell (12 d’octubre de 1893)'
                    : lang === 'pt'
                    ? '★ Pensamento Imortal de Pepe Adell (12 de outubro de 1893)'
                    : '★ Pensamiento Inmortal de Pepe Adell (12 de octubre de 1893)'}
                </span>
                <p className="font-display text-xl sm:text-2xl italic font-bold text-[#F9E7B2] leading-snug">
                  “¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!”
                </p>
                {lang === 'va' && (
                  <p className="font-serif text-sm italic text-[#D8D0C2]">
                    («Quan comprendran tots que a la força dels principis, i no a la força dels hòmens, està reservada la victòria!»)
                  </p>
                )}
                {lang === 'pt' && (
                  <p className="font-serif text-sm italic text-[#D8D0C2]">
                    («Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!»)
                  </p>
                )}
                <div className="pt-1 flex items-center justify-between font-sans text-[11px] text-[#D4AF37]">
                  <span className="font-bold">— Pepe Adell (José Adell y Fons)</span>
                  <Link
                    href={`${prefix}/obra/carta-abierta-gaspar-thous-actitud-castelar-1893/`}
                    className="underline hover:text-white font-semibold"
                  >
                    {lang === 'va' ? 'Vore Obra Nº 24 →' : lang === 'pt' ? 'Ver Obra Nº 24 →' : 'Ver Obra Nº 24 →'}
                  </Link>
                </div>
              </div>

              <blockquote className="p-4 sm:p-5 border-l-4 border-deco-crimson bg-parchment-card shadow-sm">
                <p className="font-display text-xl sm:text-2xl italic text-charcoal leading-snug">
                  {t.heroQuote}
                </p>
                <footer className="mt-2 font-sans text-xs uppercase tracking-widest text-deco-gold font-bold">
                  {t.heroQuoteAuthor}
                </footer>
              </blockquote>

              <div className="flex flex-wrap gap-3 pt-2 font-sans text-xs">
                <Link
                  href={`${prefix}/prefacio/`}
                  className="px-6 py-3.5 bg-deco-crimson text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-valencia transition-colors shadow-md"
                >
                  {lang === 'va'
                    ? '📜 Llegir Prefaci per Dr. Marcello Bossois →'
                    : lang === 'pt'
                    ? '📜 Ler Prefácio por Dr. Marcello Bossois →'
                    : '📜 Leer Prefacio por Dr. Marcello Bossois →'}
                </Link>
                <Link
                  href={`${prefix}/acervo/`}
                  className="px-6 py-3.5 bg-deco-valencia text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-crimson transition-colors shadow-md"
                >
                  {t.btnExploreArchive}
                </Link>
                <a
                  href="#historias"
                  className="px-5 py-3.5 bg-parchment-card text-charcoal font-bold uppercase tracking-widest border border-deco-burnished hover:border-deco-gold transition-colors"
                >
                  {t.btnReadStories}
                </a>
                <Link
                  href={`${prefix}/caderno-original/`}
                  className="px-5 py-3.5 bg-parchment-card text-charcoal font-bold uppercase tracking-widest border border-deco-burnished hover:border-deco-gold transition-colors"
                >
                  {t.btnFlipNotebook}
                </Link>
              </div>
            </div>

            {/* Moldura com Bandeiras + Assinatura Autógrafa Real + Dados Vitais */}
            <div className="lg:col-span-5">
              <div className="deco-frame p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="flex items-center justify-center gap-3 pb-2 border-b border-deco-burnished/30">
                  <SpainAndValenciaFlags size="lg" />
                </div>

                <div className="text-center border-b border-deco-burnished/40 pb-4">
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-deco-gold font-bold block mb-1">
                    {t.signatureCaption}
                  </span>
                  <div className="bg-[#EFE6D2] border border-deco-burnished/40 p-3 mt-2">
                    <img
                      src="/destaques/assinatura-jose-adell.webp"
                      alt="José Adell — Firma autógrafa"
                      className="max-h-24 mx-auto object-contain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center font-sans">
                  <div className="p-3 bg-parchment border border-deco-burnished/30">
                    <span className="block font-display text-3xl font-bold text-deco-crimson">72</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                      {t.statWorks}
                    </span>
                  </div>
                  <div className="p-3 bg-parchment border border-deco-burnished/30">
                    <span className="block font-display text-3xl font-bold text-deco-valencia">89</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                      {t.statPages}
                    </span>
                  </div>
                  <div className="p-3 bg-parchment border border-deco-burnished/30">
                    <span className="block font-display text-3xl font-bold text-deco-gold">59</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                      {t.statYears}
                    </span>
                  </div>
                </div>

                <div className="font-serif text-sm text-charcoal-muted space-y-2 border-t border-deco-burnished/40 pt-4">
                  <p>
                    <strong className="text-charcoal">{t.bornLabel}</strong> {t.bornText}
                  </p>
                  <p>
                    <strong className="text-charcoal">{t.citiesLabel}</strong> {t.citiesText}
                  </p>
                  <p>
                    <strong className="text-charcoal">{t.diedLabel}</strong> {t.diedText}
                  </p>
                  <p className="pt-2 border-t border-deco-burnished/30 text-xs">
                    <strong className="text-deco-crimson">
                      {lang === 'pt'
                        ? '✦ Idealizador do Site:'
                        : lang === 'va'
                        ? '✦ Idealitzador del Lloc Web:'
                        : '✦ Idealizador del Sitio:'}
                    </strong>{' '}
                    <Link
                      href={`${prefix}/trineto-de-pepe-adell/`}
                      className="font-bold text-charcoal underline underline-offset-4 hover:text-deco-crimson"
                    >
                      Trineto de Pepe Adell — Dr. Marcello Bossois →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CRONOLOGIA INTERATIVA DE DOIS CONTINENTES (1868–1927) ==================== */}
        <InteractiveTimelineSection lang={lang} />

        {/* ==================== AS 6 GRANDES HISTÓRIAS HUMANAS ==================== */}
        <section id="historias" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-crimson font-bold">
              {t.storiesKicker}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
              {t.storiesTitle}
            </h2>
            <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {t.storiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story, idx) => {
              const storyHref = `${prefix}/historia/${story.slug}/`;
              const primaryWork = worksList.find(
                (w) =>
                  story.relatedWorkSlugs.includes(w.slug) ||
                  w.pages.includes(story.pages[0])
              );
              return (
                <article
                  key={story.id}
                  className="deco-frame deco-card-hover overflow-hidden flex flex-col justify-between transition-all group"
                >
                  <div>
                    <Link
                      href={storyHref}
                      className="block relative h-60 overflow-hidden bg-[#E5DEC9] border-b border-deco-burnished/40"
                    >
                      <img
                        src={story.coverImage}
                        alt={story.title}
                        loading={idx < 2 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-sans text-[11px]">
                        <span className="px-3 py-1 bg-deco-crimson text-white font-bold uppercase tracking-wider">
                          {story.kicker}
                        </span>
                        <span className="px-2.5 py-1 bg-black/75 text-[#EFE9DA] font-mono">
                          Págs. {story.pages.join(', ')}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="font-sans text-xs text-[#E6D2A8] font-semibold block">
                          📍 {story.location} • {story.year}
                        </span>
                        <h3 className="font-display text-2xl font-bold leading-tight mt-0.5">
                          {story.title}
                        </h3>
                      </div>
                    </Link>

                    <div className="p-6 space-y-4">
                      {/* Transcrição do Recorte Original logo abaixo da imagem do artigo original */}
                      {primaryWork && (
                        <div className="p-3.5 bg-parchment-elevated border-l-4 border-deco-crimson space-y-1.5">
                          <span className="font-sans text-[10px] uppercase tracking-widest text-deco-crimson font-bold block">
                            {t.workExcerptTitle} (Nº {primaryWork.id} — {primaryWork.date})
                          </span>
                          <div className="font-serif text-xs sm:text-sm text-charcoal leading-relaxed space-y-2 max-h-44 overflow-y-auto custom-scrollbar pr-1">
                            {primaryWork.excerpt
                              .split(/\n\n+/)
                              .filter(Boolean)
                              .map((para, pIdx) => (
                                <p key={pIdx}>{para}</p>
                              ))}
                          </div>
                        </div>
                      )}

                      <p className="font-serif text-base text-charcoal font-medium leading-relaxed">
                        {story.subtitle}
                      </p>

                      <blockquote className="p-3.5 bg-parchment-elevated border-l-4 border-deco-gold font-serif text-sm italic text-charcoal-muted">
                        &ldquo;{story.quote}&rdquo;
                        <span className="block not-italic font-sans text-[11px] font-bold text-deco-crimson mt-1">
                          — {story.quoteAuthor}
                        </span>
                      </blockquote>

                      <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                        {story.paragraphs[0]}
                      </p>

                      <div className="p-3 bg-parchment border border-deco-burnished/40 text-xs font-serif">
                        <strong className="font-sans uppercase tracking-wider text-deco-valencia block mb-0.5">
                          ✦ {story.curiosityBox.title}
                        </strong>
                        <span className="text-charcoal-muted">{story.curiosityBox.text}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-deco-burnished/30 flex items-center justify-between font-sans text-xs">
                    <span className="text-charcoal-muted font-medium">
                      {t.storyPagesIncluded} {story.pages.join(', ')}
                    </span>
                    <Link
                      href={storyHref}
                      className="px-4 py-2 bg-deco-crimson text-parchment font-bold uppercase tracking-wider hover:bg-deco-valencia transition-colors"
                    >
                      {t.storyReadFull}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==================== FAMÍLIA & AFETOS ==================== */}
        <section
          id="familia"
          className="bg-parchment-elevated border-t-2 border-b-2 border-deco-burnished py-16 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
                {t.familyKicker}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
                {t.familyTitle}
              </h2>
              <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
                {t.familySubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 space-y-2.5">
                {familyList.map((person, idx) => (
                  <button
                    key={person.id}
                    type="button"
                    onClick={() => setSelectedFamilyIdx(idx)}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                      selectedFamilyIdx === idx
                        ? 'deco-frame border-deco-gold shadow-lg'
                        : 'bg-parchment-card border-deco-burnished/40 hover:border-deco-gold'
                    }`}
                  >
                    <div className="pr-3">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-deco-crimson block">
                        {person.relation}
                      </span>
                      <span className="font-display text-xl font-bold text-charcoal block mt-0.5">
                        {person.name}
                      </span>
                      <span className="font-sans text-xs text-charcoal-muted">
                        {person.dates}
                      </span>
                    </div>
                    <span className="text-deco-gold font-bold text-lg">→</span>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-7 deco-frame p-6 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5 space-y-3">
                    <div className="border border-deco-burnished bg-[#E5DEC9] p-2">
                      <img
                        src={activeMember.image}
                        alt={activeMember.name}
                        className="w-full h-72 object-cover object-top shadow-sm"
                      />
                    </div>
                    <p className="font-sans text-[11px] text-center text-charcoal-muted">
                      {t.familyFacsimileLabel} {activeMember.pages.join(', ')}
                    </p>
                    {activeFamilyWork && (
                      <div className="p-3 bg-parchment-elevated border-l-4 border-deco-crimson space-y-1.5 text-left">
                        <span className="font-sans text-[10px] uppercase tracking-widest text-deco-crimson font-bold block">
                          {t.workExcerptTitle} (Pág. {activeMember.pages[0]})
                        </span>
                        <div className="font-serif text-xs text-charcoal leading-relaxed space-y-1.5 max-h-44 overflow-y-auto pr-1">
                          {activeFamilyWork.excerpt
                            .split(/\n\n+/)
                            .filter(Boolean)
                            .map((para, pIdx) => (
                              <p key={pIdx}>{para}</p>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-7 space-y-4">
                    <div>
                      <span className="font-sans text-xs font-bold uppercase tracking-widest text-deco-crimson">
                        {activeMember.relation}
                      </span>
                      <h3 className="font-display text-3xl font-bold text-charcoal mt-1">
                        {activeMember.name}
                      </h3>
                      <p className="font-sans text-xs text-deco-gold font-semibold mt-0.5">
                        {activeMember.dates}
                      </p>
                    </div>

                    <p className="font-serif text-base text-charcoal leading-relaxed">
                      {activeMember.story}
                    </p>

                    {activeMember.highlightQuote && (
                      <blockquote className="p-3.5 bg-parchment-elevated border-l-4 border-deco-crimson font-serif text-sm italic text-charcoal-muted">
                        {activeMember.highlightQuote}
                      </blockquote>
                    )}

                    <div className="pt-2 flex flex-wrap gap-2 font-sans text-xs">
                      <Link
                        href={`${prefix}/pagina/${activeMember.pages[0]}/`}
                        className="px-4 py-2 bg-deco-valencia text-parchment font-bold uppercase tracking-wider hover:bg-deco-crimson transition-colors"
                      >
                        {t.familyViewPageBtn} ({activeMember.pages[0]}) →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== THEATRO MUNICIPAL DO RIO & PERSONALIDADES ==================== */}
        <PersonalitiesAndTheatroSection lang={lang} />

        {/* ==================== LEGADO VIVO & CURADORIA: DR. MARCELLO BOSSOIS & DRA. PATRICIA SCHLINKERT ==================== */}
        <MarcelloLegacyHomeSection lang={lang} />

        {/* ==================== CATÁLOGO COMPLETO DAS 72 OBRAS ==================== */}
        <ArchiveCatalogSection lang={lang} />
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
