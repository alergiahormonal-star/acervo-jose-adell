'use client';

import React from 'react';
import Link from 'next/link';
import {
  MENTIONED_FIGURES,
  PERSONALITIES_LIST,
  THEATRO_MUNICIPAL_NOTE,
} from '@/data/personalidades';
import { SiteLang } from '@/lib/i18n-ui';

const SECTION_TEXTS: Record<
  SiteLang,
  {
    circleKicker: string;
    circleTitle: string;
    circleSub: string;
    btnInternalProfile: string;
    pagesBadge: string;
    mentionedKicker: string;
    mentionedTitle: string;
    mentionedSub: string;
    readAdellArticle: string;
    externalBioBtn: string;
  }
> = {
  es: {
    circleKicker: 'Vidas Cruzadas • Amigos, Mentores e Interlocutores',
    circleTitle: 'Las Personalidades que Convivieron con Pepe Adell',
    circleSub:
      'Desde la redacción barcelonesa de La Luz (1885) hasta la casita de la Rua da Ajuda en Río de Janeiro y la Librería Española de Bahía: conozca quiénes fueron las grandes figuras que caminaron, debatieron y soñaron junto a él.',
    btnInternalProfile: 'Ver Dossier y Páginas Originales →',
    pagesBadge: 'Págs. en el archivo:',
    mentionedKicker: 'Guía Histórica y Literaria con Referencias Externas',
    mentionedTitle: 'Grandes Figuras Mencionadas y Analizadas en sus Escritos',
    mentionedSub:
      'Para comprender cada nombre citado por José Adell, combinamos el enlace directo a su crónica original en nuestro archivo con fuentes biográficas externas de referencia.',
    readAdellArticle: 'Leer crónica de Adell →',
    externalBioBtn: 'Biografía externa ↗',
  },
  va: {
    circleKicker: 'Vides Creuades • Amics, Mentors i Interlocutors',
    circleTitle: 'Les Personalitats que Convisqueren amb Pepe Adell',
    circleSub:
      'Des de la redacció barcelonina de La Luz (1885) fins a la caseta de la Rua da Ajuda a Rio de Janeiro i la Llibreria Espanyola de Bahia: conegueu qui foren les grans figures que caminaren i somiaren al seu costat.',
    btnInternalProfile: 'Vore Dossier i Pàgines Originals →',
    pagesBadge: 'Pàgs. a l’arxiu:',
    mentionedKicker: 'Guia Històrica i Literària amb Referències Externes',
    mentionedTitle: 'Grans Figures Esmentades i Analitzades en els Seus Escrits',
    mentionedSub:
      'Per comprendre cada nom citat per José Adell, combinem l’enllaç directe a la seua crònica original amb fonts biogràfiques externes de referència.',
    readAdellArticle: 'Llegir crònica d’Adell →',
    externalBioBtn: 'Biografia externa ↗',
  },
  pt: {
    circleKicker: 'Vidas Cruzadas • Amigos, Mentores e Interlocutores',
    circleTitle: 'As Personalidades que Conviveram com Pepe Adell',
    circleSub:
      'Da redação barcelonesa de La Luz (1885) à casinha da Rua da Ajuda no Rio de Janeiro e à Livraria Espanhola da Bahia: conheça quem foram as grandes figuras que conviveram, trabalharam ou debateram diretamente com ele.',
    btnInternalProfile: 'Ver Dossiê & Páginas Originais →',
    pagesBadge: 'Págs. no acervo:',
    mentionedKicker: 'Guia Histórico e Literário com Referências Externas',
    mentionedTitle: 'Grandes Personalidades Mencionadas e Retratadas em Seus Artigos',
    mentionedSub:
      'Para explicar quem foi cada personalidade citada por Pepe Adell, unimos o link interno da crônica original dele a referências biográficas externas oficiais.',
    readAdellArticle: 'Ler artigo de Adell →',
    externalBioBtn: 'Biografia externa ↗',
  },
};

export default function PersonalitiesAndTheatroSection({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const tm = THEATRO_MUNICIPAL_NOTE[lang];
  const st = SECTION_TEXTS[lang];
  const prefix = `/${lang}`;
  const padPage = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      {/* ==================== DESTAQUE URBANO: RUA DA AJUDA = HOJE THEATRO MUNICIPAL DO RIO ==================== */}
      <section
        id="theatro-municipal"
        className="py-14 px-4 sm:px-6 bg-[#1C2738] text-[#F6F2E9] border-t-2 border-b-2 border-deco-gold"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3.5 py-1 bg-[#7A1C1C] text-[#FAF7F0] border border-[#D4AF37] font-sans text-xs font-bold uppercase tracking-wider">
              {tm.badge}
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
              {tm.title}
            </h2>

            <p className="font-serif text-base sm:text-lg text-[#E2DDD2] leading-relaxed">
              {tm.text}
            </p>

            <blockquote className="p-4 sm:p-5 bg-white/5 border-l-4 border-[#D4AF37] font-serif text-sm sm:text-base italic text-[#F3E9D2] leading-relaxed">
              {tm.poeticNote}
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-2 font-sans text-xs">
              <Link
                href={`${prefix}/pagina/85/`}
                className="px-4 py-2.5 bg-[#D4AF37] text-[#181613] font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                {tm.btnCarta}
              </Link>
              <a
                href="https://theatromunicipal.rj.gov.br/sobre-o-theatro/historia/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#D4AF37] text-[#FAF7F0] font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#181613] transition-colors"
              >
                {tm.btnTheatro}
              </a>
              <a
                href="https://www.gov.br/museus/pt-br/museus-ibram/mnba"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-white/40 text-[#E2DDD2] font-semibold uppercase tracking-wider hover:border-[#D4AF37] transition-colors"
              >
                {tm.btnMnba}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-[#D4AF37] bg-[#121A26] p-4 shadow-2xl space-y-3">
              <div className="overflow-hidden border border-[#D4AF37]/40 bg-[#E5DEC9]">
                <img
                  src="/paginas/pagina-85.webp"
                  alt="Página 85 de la carta de Adolfo Morales de los Ríos mencionando la Rua da Ajuda"
                  loading="lazy"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <p className="font-serif text-xs text-[#D4AF37] italic text-center px-2">
                «Una casa baja, de un solo piso, cuyo alero de tejado casi tocábamos con la punta de los bastones... en la Rua d’Ajuda» — Adolfo Morales de los Ríos (Pág. 85)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PERSONALIDADES QUE CONVIVERAM COM PEPE ADELL ==================== */}
      <section
        id="personalidades"
        className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-14"
      >
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-crimson font-bold">
            {st.circleKicker}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
            {st.circleTitle}
          </h2>
          <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {st.circleSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONALITIES_LIST.map((p) => {
            const loc = p[lang];
            const thumb = `/paginas/pagina-${padPage(p.pagesInArchive[0])}.webp`;
            const profileHref = `${prefix}/personalidade/${p.slug}/`;

            return (
              <article
                key={p.id}
                className="deco-frame flex flex-col justify-between p-5 hover:shadow-xl transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 border-b border-deco-burnished/40 pb-3">
                    <Link
                      href={profileHref}
                      className="w-16 h-16 shrink-0 overflow-hidden border border-deco-gold bg-[#E5DEC9]"
                    >
                      <img
                        src={thumb}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </Link>
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-deco-gold font-bold block">
                        {p.lifespan}
                      </span>
                      <h3 className="font-display text-xl font-bold text-charcoal leading-tight">
                        <Link href={profileHref} className="hover:text-deco-crimson">
                          {p.name}
                        </Link>
                      </h3>
                    </div>
                  </div>

                  <p className="font-sans text-xs font-bold text-deco-crimson">
                    {loc.role}
                  </p>

                  <p className="p-2.5 bg-parchment-elevated border-l-2 border-deco-gold font-serif text-xs italic text-charcoal">
                    {loc.connection}
                  </p>

                  <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                    {loc.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-deco-burnished/30 space-y-2.5 font-sans text-xs">
                  <div className="text-[11px] text-charcoal-muted">
                    {st.pagesBadge}{' '}
                    <strong className="text-charcoal">{p.pagesInArchive.join(', ')}</strong>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <Link
                      href={profileHref}
                      className="px-3 py-1.5 bg-deco-valencia text-parchment font-bold uppercase tracking-wider text-[10px] hover:bg-deco-crimson transition-colors"
                    >
                      {st.btnInternalProfile}
                    </Link>

                    {p.externalLinks.map((ext) => (
                      <a
                        key={ext.url}
                        href={ext.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 border border-deco-burnished text-charcoal font-semibold text-[10px] hover:border-deco-gold hover:bg-parchment-elevated transition-colors"
                      >
                        {ext.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ==================== FIGURAS HISTÓRICAS E LITERÁRIAS MENCIONADAS (LINKS INTERNOS + EXTERNOS) ==================== */}
        <div className="pt-10 border-t-2 border-deco-burnished space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
              {st.mentionedKicker}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mt-1 mb-2">
              {st.mentionedTitle}
            </h3>
            <p className="font-serif text-sm sm:text-base text-charcoal-muted">
              {st.mentionedSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MENTIONED_FIGURES.map((fig) => {
              const loc = fig[lang];
              return (
                <div
                  key={fig.id}
                  className="bg-parchment-card border border-deco-burnished/60 p-5 flex flex-col justify-between shadow-sm hover:border-deco-gold transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-display text-xl font-bold text-charcoal">
                        {fig.name}
                      </h4>
                      <span className="font-sans text-[11px] text-deco-gold font-bold shrink-0">
                        {fig.years}
                      </span>
                    </div>
                    <p className="font-sans text-xs font-semibold text-deco-valencia">
                      {loc.who}
                    </p>
                    <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                      {loc.adellView}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-deco-burnished/30 flex flex-wrap items-center justify-between gap-2 font-sans text-xs">
                    <Link
                      href={`${prefix}/obra/${fig.internalWorkSlug}/`}
                      className="font-bold text-deco-crimson hover:underline"
                    >
                      {st.readAdellArticle}
                    </Link>
                    <a
                      href={fig.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 border border-deco-burnished/60 text-charcoal font-semibold text-[11px] hover:border-deco-gold"
                    >
                      {st.externalBioBtn}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
