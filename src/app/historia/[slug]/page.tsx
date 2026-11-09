import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageScanViewer from '@/components/PageScanViewer';
import { HUMAN_STORIES } from '@/data/historias-humanas';
import { CATALOG_WORKS } from '@/data/acervo-completo';

export function generateStaticParams() {
  return HUMAN_STORIES.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const story = HUMAN_STORIES.find((s) => s.slug === params.slug);
  if (!story) {
    return { title: 'História — Memorial José Adell y Fons' };
  }
  return {
    title: `${story.title} | Memorial Humano José Adell y Fons`,
    description: story.subtitle,
    alternates: {
      canonical: `https://acervo-jose-adell.mbossois.workers.dev/historia/${story.slug}/`,
    },
  };
}

export default function HistoriaPage({ params }: { params: { slug: string } }) {
  const story = HUMAN_STORIES.find((s) => s.slug === params.slug);
  if (!story) return notFound();

  const relatedWorks = CATALOG_WORKS.filter((w) =>
    story.relatedWorkSlugs.includes(w.slug)
  );
  const otherStories = HUMAN_STORIES.filter((s) => s.slug !== story.slug);

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col">
      <SiteHeader />

      <nav
        aria-label="Navegação estrutural"
        className="bg-parchment-card border-b border-deco-burnished/40 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-6xl mx-auto flex flex-wrap items-center gap-2 text-charcoal-muted">
          <li>
            <Link href="/" className="hover:text-deco-crimson underline-offset-4 hover:underline">
              Início
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <Link href="/#historias" className="hover:text-deco-crimson underline-offset-4 hover:underline">
              6 Grandes Histórias Humanas
            </Link>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li className="font-semibold text-deco-crimson truncate max-w-md" aria-current="page">
            {story.title}
          </li>
        </ol>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-12">
        {/* Artigo Editorial Humanizado */}
        <article className="deco-frame p-6 sm:p-12 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-sans text-xs">
            <span className="px-3 py-1 bg-deco-crimson text-parchment font-bold uppercase tracking-wider">
              {story.kicker}
            </span>
            <span className="text-deco-gold font-bold">
              📍 {story.location} • {story.year}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-tight">
            {story.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-charcoal-muted leading-relaxed border-b border-deco-burnished/40 pb-6">
            {story.subtitle}
          </p>

          <blockquote className="p-5 sm:p-6 bg-parchment-elevated border-l-4 border-deco-crimson font-display text-2xl italic text-charcoal leading-snug">
            &ldquo;{story.quote}&rdquo;
            <footer className="mt-2 font-sans text-xs not-italic uppercase tracking-widest text-deco-gold font-bold">
              — {story.quoteAuthor}
            </footer>
          </blockquote>

          <div className="space-y-5 font-serif text-base sm:text-lg text-charcoal leading-relaxed">
            {story.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? 'first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-deco-crimson first-letter:mr-2 first-letter:float-left' : ''}>
                {p}
              </p>
            ))}
          </div>

          <div className="p-5 bg-parchment-elevated border border-deco-gold/60">
            <h3 className="font-sans text-xs uppercase tracking-widest text-deco-valencia font-bold mb-1">
              ✦ {story.curiosityBox.title}
            </h3>
            <p className="font-serif text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {story.curiosityBox.text}
            </p>
          </div>
        </article>

        {/* Fac-símiles Reais desta História */}
        <section className="space-y-4">
          <div className="text-center">
            <span className="font-sans text-xs uppercase tracking-widest text-deco-gold font-bold">
              Prova Documental Digitalizada
            </span>
            <h2 className="font-display text-3xl font-bold text-charcoal">
              Veja com Seus Próprios Olhos os Recortes Originais desta História
            </h2>
          </div>
          <PageScanViewer pages={story.pages} title={story.title} />
        </section>

        {/* Documentos Relacionados no Catálogo */}
        {relatedWorks.length > 0 && (
          <section className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-charcoal border-b border-deco-burnished/40 pb-2">
              Fichas Completas destas Obras no Acervo:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedWorks.map((w) => (
                <Link
                  key={w.id}
                  href={`/obra/${w.slug}/`}
                  className="deco-frame p-5 hover:border-deco-crimson transition-colors block"
                >
                  <span className="font-sans text-[11px] font-bold text-deco-gold uppercase">
                    Obra Nº {w.id} • {w.date} • Págs. {w.pages.join(', ')}
                  </span>
                  <h4 className="font-display text-xl font-bold text-charcoal mt-1">
                    {w.humanTitle}
                  </h4>
                  <span className="inline-block mt-2 font-sans text-xs font-bold text-deco-crimson">
                    Abrir ficha documental e citação →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Outras Histórias Humanas */}
        <section className="pt-6 border-t-2 border-deco-burnished space-y-4">
          <h3 className="font-display text-2xl font-bold text-charcoal">
            Continue Lendo Outras Histórias Emocionantes de Pepe Adell:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherStories.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                href={`/historia/${other.slug}/`}
                className="deco-frame p-4 hover:border-deco-crimson transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-deco-crimson">
                    {other.kicker}
                  </span>
                  <h4 className="font-display text-lg font-bold text-charcoal mt-1">
                    {other.title}
                  </h4>
                </div>
                <span className="font-sans text-xs text-deco-valencia font-bold mt-3 block">
                  Ler crônica →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
