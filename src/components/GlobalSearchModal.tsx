'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { getLocalizedWorksList } from '@/data/acervo-trilingue';
import { getLocalizedStories } from '@/data/historias-trilingues';
import { PERSONALITIES_LIST } from '@/data/personalidades';
import { SiteLang } from '@/lib/i18n-ui';

interface GlobalSearchModalProps {
  lang: SiteLang;
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({
  lang,
  isOpen,
  onClose,
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const prefix = `/${lang}`;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const worksList = useMemo(() => getLocalizedWorksList(lang), [lang]);
  const storiesList = useMemo(() => getLocalizedStories(lang), [lang]);

  const trimmed = query.trim().toLowerCase();
  const pageNumMatch = useMemo(() => {
    const n = Number(trimmed.replace(/^(pág\.?|pag\.?|pàg\.?|pagina|página)\s*/i, ''));
    return Number.isInteger(n) && n >= 1 && n <= 89 ? n : null;
  }, [trimmed]);

  const matchedWorks = useMemo(() => {
    if (!trimmed) return worksList.slice(0, 6);
    return worksList
      .filter(
        (w) =>
          w.humanTitle.toLowerCase().includes(trimmed) ||
          w.title.toLowerCase().includes(trimmed) ||
          w.excerpt.toLowerCase().includes(trimmed) ||
          w.summary.toLowerCase().includes(trimmed) ||
          w.periodical.toLowerCase().includes(trimmed) ||
          w.city.toLowerCase().includes(trimmed) ||
          w.date.toLowerCase().includes(trimmed) ||
          w.id === trimmed ||
          w.pages.some((p) => String(p) === trimmed)
      )
      .slice(0, 12);
  }, [worksList, trimmed]);

  const matchedPeople = useMemo(() => {
    if (!trimmed) return [];
    return PERSONALITIES_LIST.filter((p) => {
      const loc = p[lang];
      return (
        p.name.toLowerCase().includes(trimmed) ||
        loc.role.toLowerCase().includes(trimmed) ||
        loc.bio.toLowerCase().includes(trimmed)
      );
    }).slice(0, 5);
  }, [trimmed, lang]);

  const matchedStories = useMemo(() => {
    if (!trimmed) return [];
    return storiesList
      .filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.subtitle.toLowerCase().includes(trimmed) ||
          s.paragraphs.some((p) => p.toLowerCase().includes(trimmed))
      )
      .slice(0, 4);
  }, [storiesList, trimmed]);

  if (!isOpen) return null;

  const ui =
    lang === 'va'
      ? {
          title: 'Cerca Intel·ligent a tot el Memorial i Transcripcions',
          placeholder:
            'Busqueu per paraula a les 72 transcripcions, nom, periòdic, any o núm. de pàgina (1–89)...',
          close: 'Tancar (Esc)',
          jumpPage: `Obrir directament la Pàgina Original núm.`,
          worksHeader: trimmed ? 'Obres i Transcripcions Trobades' : 'Obres Destacades de l’Arxiu',
          peopleHeader: 'Personalitats Relacionades',
          storiesHeader: 'Històries Biogràfiques',
          empty: 'Cap resultat trobat. Proveu amb Vinaròs, Emilia, Morales, Bartual, Castelar o un número de l’1 al 89.',
        }
      : lang === 'pt'
      ? {
          title: 'Busca Inteligente em Todo o Memorial e Transcrições',
          placeholder:
            'Busque qualquer palavra nas 72 transcrições, nome, jornal, ano ou nº de página (1–89)...',
          close: 'Fechar (Esc)',
          jumpPage: 'Abrir diretamente a Página Original nº',
          worksHeader: trimmed ? 'Obras e Transcrições Encontradas' : 'Obras em Destaque no Acervo',
          peopleHeader: 'Personalidades Relacionadas',
          storiesHeader: 'Histórias Biográficas',
          empty: 'Nenhum resultado encontrado. Tente buscar por Vinaròs, Emilia, Morales, Bartual, Castelar ou um número de 1 a 89.',
        }
      : {
          title: 'Búsqueda Inteligente en Todo el Memorial y Transcripciones',
          placeholder:
            'Busque cualquier palabra en las 72 transcripciones, nombre, periódico, año o nº de página (1–89)...',
          close: 'Cerrar (Esc)',
          jumpPage: 'Abrir directamente la Página Original nº',
          worksHeader: trimmed ? 'Obras y Transcripciones Encontradas' : 'Obras Destacadas del Archivo',
          peopleHeader: 'Personalidades Relacionadas',
          storiesHeader: 'Historias Biográficas',
          empty: 'Sin resultados. Pruebe con Vinaròs, Emilia, Morales, Bartual, Castelar o un número del 1 al 89.',
        };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 md:pt-14 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={ui.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-parchment-card border-2 border-deco-gold shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho da Busca */}
        <div className="bg-[#181613] text-[#EFE9DA] px-4 sm:px-6 py-3 flex items-center justify-between gap-2 border-b border-deco-gold/60">
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-bold truncate">
            🔍 {ui.title}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-sans font-bold uppercase tracking-wider border border-[#D4AF37]/50 text-[#EFE9DA] hover:bg-[#D4AF37] hover:text-[#181613] transition-colors shrink-0"
          >
            {ui.close}
          </button>
        </div>

        {/* Input */}
        <div className="p-4 sm:p-5 border-b border-deco-burnished/40 bg-parchment-elevated">
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui.placeholder}
            className="w-full px-4 py-3.5 bg-parchment-card border-2 border-deco-burnished focus:border-deco-crimson focus:outline-none font-serif text-base text-charcoal shadow-inner"
          />
          <div className="flex flex-wrap gap-1.5 mt-2.5 font-sans text-[11px]">
            {['Bartual', 'Emilia', 'Morales de los Ríos', 'Theatro Municipal', 'Vinaròs', 'Campos Sales', 'Castelar'].map(
              (chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setQuery(chip)}
                  className="px-2.5 py-1 bg-parchment-card border border-deco-burnished/50 text-charcoal-muted hover:border-deco-gold hover:text-charcoal transition-colors"
                >
                  {chip}
                </button>
              )
            )}
          </div>
        </div>

        {/* Resultados */}
        <div className="max-h-[62vh] overflow-y-auto custom-scrollbar p-4 sm:p-5 space-y-5">
          {pageNumMatch && (
            <Link
              href={`${prefix}/pagina/${pageNumMatch}/`}
              onClick={onClose}
              className="flex items-center justify-between p-3.5 bg-deco-crimson text-parchment border border-deco-gold font-sans text-xs font-bold uppercase tracking-wider hover:bg-deco-valencia transition-colors"
            >
              <span>
                📜 {ui.jumpPage} {pageNumMatch} / 89
              </span>
              <span>→</span>
            </Link>
          )}

          {matchedPeople.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-sans text-[11px] uppercase tracking-widest text-deco-gold font-bold">
                {ui.peopleHeader}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedPeople.map((p) => (
                  <Link
                    key={p.id}
                    href={`${prefix}/personalidade/${p.slug}/`}
                    onClick={onClose}
                    className="p-3 bg-parchment border border-deco-burnished/40 hover:border-deco-crimson transition-colors block"
                  >
                    <span className="font-display text-lg font-bold text-charcoal block">
                      {p.name}
                    </span>
                    <span className="font-sans text-[11px] text-deco-crimson font-semibold">
                      {p[lang].role}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedStories.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-sans text-[11px] uppercase tracking-widest text-deco-gold font-bold">
                {ui.storiesHeader}
              </h4>
              <div className="space-y-2">
                {matchedStories.map((s) => (
                  <Link
                    key={s.id}
                    href={`${prefix}/historia/${s.slug}/`}
                    onClick={onClose}
                    className="p-3 bg-parchment border border-deco-burnished/40 hover:border-deco-crimson transition-colors block"
                  >
                    <span className="font-sans text-[10px] uppercase font-bold text-deco-crimson">
                      {s.kicker} • {s.year}
                    </span>
                    <span className="font-display text-lg font-bold text-charcoal block">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedWorks.length > 0 ? (
            <div className="space-y-2.5">
              <h4 className="font-sans text-[11px] uppercase tracking-widest text-deco-gold font-bold">
                {ui.worksHeader} ({matchedWorks.length})
              </h4>
              <div className="space-y-2.5">
                {matchedWorks.map((w) => (
                  <Link
                    key={w.id}
                    href={`${prefix}/obra/${w.slug}/`}
                    onClick={onClose}
                    className="p-3.5 bg-parchment border border-deco-burnished/50 hover:border-deco-crimson transition-colors block space-y-1"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-[11px]">
                      <span className="font-bold text-deco-crimson uppercase">
                        Nº {w.id} • {w.periodical} ({w.date})
                      </span>
                      <span className="px-2 py-0.5 bg-parchment-elevated border border-deco-burnished/40 font-mono text-[10px]">
                        Pág. {w.pages.join(', ')}
                      </span>
                    </div>
                    <h5 className="font-display text-xl font-bold text-charcoal leading-snug">
                      {w.humanTitle}
                    </h5>
                    <p className="font-serif text-xs italic text-charcoal-muted line-clamp-2">
                      {w.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            !pageNumMatch &&
            matchedPeople.length === 0 &&
            matchedStories.length === 0 && (
              <p className="font-serif text-sm text-charcoal-muted text-center py-8">
                {ui.empty}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
