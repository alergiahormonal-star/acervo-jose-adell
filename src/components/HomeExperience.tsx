'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArchiveCatalogSection from '@/components/ArchiveCatalogSection';
import { FAMILY_AND_CIRCLE, HUMAN_STORIES } from '@/data/historias-humanas';

export default function HomeExperience() {
  const [selectedFamilyIdx, setSelectedFamilyIdx] = useState<number>(0);
  const activeMember = FAMILY_AND_CIRCLE[selectedFamilyIdx];

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* ==================== HERO HUMANO & BIOGRÁFICO ==================== */}
        <section className="relative overflow-hidden border-b-2 border-deco-burnished bg-deco-sunburst py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 border border-deco-gold bg-parchment-card font-sans text-xs uppercase tracking-[0.2em] text-deco-crimson font-bold">
                <span>❤ Memória Viva de um Homem, uma Família e Dois Oceanos</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-bold text-charcoal leading-[1.06]">
                Pepe Adell: O Sorriso como Escudo, a Pena como Justiça e o Buril como Arte
              </h1>

              <p className="font-serif text-lg sm:text-xl text-charcoal-muted leading-relaxed">
                Antes do polemista brilhante e do mestre gravador escolhido pela Presidência da República, existia um ser humano extraordinário: o menino autodidata de{' '}
                <strong>Vinaròs</strong> orgulhoso do irmão cego violinista; o marido que chorou diante de quarenta carruagens ao perder sua amada{' '}
                <strong>Emilia</strong> e abraçar os pequenos <strong>Josefina, Alberto e Pepín</strong>; o jornalista que levou uma pedrada na cabeça nas ruas do Rio em 1895 sem jamais perder a ternura.
              </p>

              <blockquote className="p-4 sm:p-5 border-l-4 border-deco-crimson bg-parchment-card shadow-sm">
                <p className="font-display text-xl sm:text-2xl italic text-charcoal leading-snug">
                  &ldquo;Éramos todos assim, risonhos, alegres: porque intuitivamente seguíamos aquela máxima de Pepe Adell que diz: ‘Mais vale falar de coisas risonhas do que escrever sobre lágrimas.’&rdquo;
                </p>
                <footer className="mt-2 font-sans text-xs uppercase tracking-widest text-deco-gold font-bold">
                  — Adolfo Morales de los Ríos, arquiteto do Museu de Belas Artes, em carta de adeus ao amigo (1927)
                </footer>
              </blockquote>

              <div className="flex flex-wrap gap-3 pt-2 font-sans text-xs">
                <a
                  href="#historias"
                  className="px-6 py-3.5 bg-deco-crimson text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-valencia transition-colors shadow-md"
                >
                  Ler as 6 Histórias Emocionantes ↓
                </a>
                <Link
                  href="/acervo/"
                  className="px-6 py-3.5 bg-deco-valencia text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-crimson transition-colors shadow-md"
                >
                  Explorar as 56 Obras Completas →
                </Link>
                <Link
                  href="/caderno-original/"
                  className="px-5 py-3.5 bg-parchment-card text-charcoal font-bold uppercase tracking-widest border border-deco-burnished hover:border-deco-gold transition-colors"
                >
                  Folhear as 89 Páginas Originais
                </Link>
              </div>
            </div>

            {/* Moldura com a Assinatura Autógrafa Real + Cartão Memorial */}
            <div className="lg:col-span-5">
              <div className="deco-frame p-6 sm:p-7 shadow-2xl space-y-5">
                <div className="text-center border-b border-deco-burnished/40 pb-4">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-deco-gold font-bold block mb-1">
                    Assinatura Autógrafa Original (Página 28 do Acervo)
                  </span>
                  <div className="bg-[#EFE6D2] border border-deco-burnished/40 p-3 mt-2">
                    <img
                      src="/destaques/assinatura-jose-adell.webp"
                      alt="Assinatura manuscrita original de José Adell"
                      className="max-h-24 mx-auto object-contain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center font-sans">
                  <div className="p-3 bg-parchment border border-deco-burnished/30">
                    <span className="block font-display text-3xl font-bold text-deco-crimson">56</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                      Obras & Cartas
                    </span>
                  </div>
                  <div className="p-3 bg-parchment border border-deco-burnished/30">
                    <span className="block font-display text-3xl font-bold text-deco-valencia">89</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                      Páginas Reais
                    </span>
                  </div>
                  <div className="p-3 bg-parchment border border-deco-burnished/30">
                    <span className="block font-display text-3xl font-bold text-deco-gold">59</span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-semibold">
                      Anos de Vida
                    </span>
                  </div>
                </div>

                <div className="font-serif text-sm text-charcoal-muted space-y-2 border-t border-deco-burnished/40 pt-4">
                  <p>
                    <strong className="text-charcoal">★ Nascimento:</strong> 10 de fevereiro de 1868, Vinaròs (Castellón, Valência, Espanha).
                  </p>
                  <p>
                    <strong className="text-charcoal">✦ Cidades de Vida:</strong> Vinaròs, Barcelona, Madrid, Rio de Janeiro (Rua da Ajuda) e Salvador da Bahia.
                  </p>
                  <p>
                    <strong className="text-charcoal">† Despedida:</strong> 12 de maio de 1927, Salvador da Bahia — lembrado como mestre gravador exemplar e amigo fiel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== AS 6 GRANDES HISTÓRIAS HUMANAS, CURIOSAS E TOCANTES ==================== */}
        <section id="historias" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-crimson font-bold">
              Crônicas Biográficas Especiais • Inspiradas nos Recortes Reais
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
              Fatos Tocantes, Curiosos e Inesquecíveis da Vida de Pepe Adell
            </h2>
            <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Mergulhe nas seis grandes narrativas humanas escondidas dentro dos jornais amarelados de mais de um século atrás — cada uma acompanhada das páginas originais escaneadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {HUMAN_STORIES.map((story, idx) => (
              <article
                key={story.id}
                className="deco-frame overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all group"
              >
                <div>
                  <Link
                    href={`/historia/${story.slug}/`}
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
                    <p className="font-serif text-base text-charcoal font-medium leading-relaxed">
                      {story.subtitle}
                    </p>

                    <blockquote className="p-3.5 bg-parchment-elevated border-l-3 border-l-4 border-deco-gold font-serif text-sm italic text-charcoal-muted">
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
                    Inclui fac-símiles das págs. {story.pages.join(', ')}
                  </span>
                  <Link
                    href={`/historia/${story.slug}/`}
                    className="px-4 py-2 bg-deco-crimson text-parchment font-bold uppercase tracking-wider hover:bg-deco-valencia transition-colors"
                  >
                    Ler História Completa →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================== A FAMÍLIA, OS TRÊS ÓRFÃOS E O CÍRCULO AFETIVO ==================== */}
        <section
          id="familia"
          className="bg-parchment-elevated border-t-2 border-b-2 border-deco-burnished py-16 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
                Álbum Íntimo & Laços de Sangue e Amizade
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal mt-2 mb-3">
                A Família Adell e os Corações que Caminharam com Ele
              </h2>
              <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
                Clique em cada membro da família e amigo leal para conhecer sua história humana e ver os registros originais preservados no álbum.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Lista de Pessoas */}
              <div className="lg:col-span-5 space-y-2.5">
                {FAMILY_AND_CIRCLE.map((person, idx) => (
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

              {/* Retrato Detalhado + Imagem do Documento */}
              <div className="lg:col-span-7 deco-frame p-6 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  <div className="sm:col-span-5">
                    <div className="border border-deco-burnished bg-[#E5DEC9] p-2">
                      <img
                        src={activeMember.image}
                        alt={activeMember.name}
                        className="w-full h-72 object-cover object-top shadow-sm"
                      />
                    </div>
                    <p className="font-sans text-[11px] text-center text-charcoal-muted mt-2">
                      Fac-símile vinculado: Págs. {activeMember.pages.join(', ')}
                    </p>
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
                        href={`/caderno-original/?pagina=${activeMember.pages[0]}`}
                        className="px-4 py-2 bg-deco-valencia text-parchment font-bold uppercase tracking-wider hover:bg-deco-crimson transition-colors"
                      >
                        Ver Página Original ({activeMember.pages[0]}) →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CATÁLOGO COMPLETO DAS 56 OBRAS ==================== */}
        <ArchiveCatalogSection />
      </main>

      <SiteFooter />
    </div>
  );
}
