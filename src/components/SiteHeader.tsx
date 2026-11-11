'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BrazilFlag,
  SpainAndValenciaFlags,
  SpainFlag,
  ValenciaFlag,
} from '@/components/Flags';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import {
  CORRESPONDENCE_EMAIL_DISPLAY,
  CORRESPONDENCE_MAILTO,
} from '@/data/legado-marcello-bossois';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

function buildLocalizedHref(pathname: string | null, targetLang: SiteLang): string {
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

export default function SiteHeader({ lang = 'es' }: { lang?: SiteLang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  const pathname = usePathname();
  const t = UI_STRINGS[lang];
  const prefix = `/${lang}`;
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem('memoria-adell-theme');
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      }
    } catch {}

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPct(pct);
      setShowBackTop(scrollTop > 520);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('memoria-adell-theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('memoria-adell-theme', 'light');
      } catch {}
    }
  };

  const navItems =
    lang === 'va'
      ? [
          { href: homeHref, shortLabel: 'L’Ànima de Pepe', fullLabel: t.navHome },
          { href: `${prefix}/prefacio/`, shortLabel: 'Prefaci (Dr. Marcello Bossois)', fullLabel: 'Prefaci (Dr. Marcello Bossois)' },
          { href: `${prefix}/trineto-de-pepe-adell/`, shortLabel: 'Trineto de Pepe Adell', fullLabel: 'Trineto de Pepe Adell' },
          { href: `${homeHref}#historias`, shortLabel: '6 Històries', fullLabel: t.navStories },
          { href: `${homeHref}#familia`, shortLabel: 'Família', fullLabel: t.navFamily },
          { href: `${homeHref}#personalidades`, shortLabel: 'Personalitats i Theatro', fullLabel: 'Personalitats i Theatro Municipal' },
          { href: `${prefix}/acervo/`, shortLabel: '72 Obres', fullLabel: t.navArchive },
          { href: `${prefix}/caderno-original/`, shortLabel: '89 Pàgines', fullLabel: t.navNotebook },
        ]
      : lang === 'pt'
      ? [
          { href: homeHref, shortLabel: 'A Alma de Pepe', fullLabel: t.navHome },
          { href: `${prefix}/prefacio/`, shortLabel: 'Prefácio (Dr. Marcello Bossois)', fullLabel: 'Prefácio (Dr. Marcello Bossois)' },
          { href: `${prefix}/trineto-de-pepe-adell/`, shortLabel: 'Trineto de Pepe Adell', fullLabel: 'Trineto de Pepe Adell' },
          { href: `${homeHref}#historias`, shortLabel: '6 Histórias', fullLabel: t.navStories },
          { href: `${homeHref}#familia`, shortLabel: 'Família', fullLabel: t.navFamily },
          { href: `${homeHref}#personalidades`, shortLabel: 'Personalidades & Theatro', fullLabel: 'Personalidades & Theatro Municipal' },
          { href: `${prefix}/acervo/`, shortLabel: '72 Obras', fullLabel: t.navArchive },
          { href: `${prefix}/caderno-original/`, shortLabel: '89 Páginas', fullLabel: t.navNotebook },
        ]
      : [
          { href: homeHref, shortLabel: 'El Alma de Pepe', fullLabel: t.navHome },
          { href: `${prefix}/prefacio/`, shortLabel: 'Prefacio (Dr. Marcello Bossois)', fullLabel: 'Prefacio (Dr. Marcello Bossois)' },
          { href: `${prefix}/trineto-de-pepe-adell/`, shortLabel: 'Trineto de Pepe Adell', fullLabel: 'Trineto de Pepe Adell' },
          { href: `${homeHref}#historias`, shortLabel: '6 Historias', fullLabel: t.navStories },
          { href: `${homeHref}#familia`, shortLabel: 'Familia', fullLabel: t.navFamily },
          { href: `${homeHref}#personalidades`, shortLabel: 'Personalidades y Theatro', fullLabel: 'Personalidades y Theatro Municipal' },
          { href: `${prefix}/acervo/`, shortLabel: '72 Obras', fullLabel: t.navArchive },
          { href: `${prefix}/caderno-original/`, shortLabel: '89 Páginas', fullLabel: t.navNotebook },
        ];

  const featuredQuote =
    lang === 'va'
      ? '“Quan comprendran tots que a la força dels principis, i no a la força dels hòmens, està reservada la victòria!” — «¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!»'
      : lang === 'pt'
      ? '“Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!” — «¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!»'
      : '“¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!”';

  const quoteAttribution =
    lang === 'va'
      ? '— Pepe Adell (José Adell y Fons, 12 d’octubre de 1893 • Obra Nº 24)'
      : lang === 'pt'
      ? '— Pepe Adell (José Adell y Fons, 12 de outubro de 1893 • Obra Nº 24)'
      : '— Pepe Adell (José Adell y Fons, 12 de octubre de 1893 • Obra Nº 24)';

  const searchBtnLabel =
    lang === 'va' ? 'Buscar a l’Arxiu' : lang === 'pt' ? 'Buscar no Acervo' : 'Buscar en el Archivo';

  const themeBtnLabel = darkMode
    ? lang === 'va'
      ? '☀️ Pergamí'
      : lang === 'pt'
      ? '☀️ Pergaminho'
      : '☀️ Pergamino'
    : lang === 'va'
    ? '🌙 Nocturn'
    : lang === 'pt'
    ? '🌙 Noturno'
    : '🌙 Nocturno';

  const isRouteActive = (href: string) => {
    if (href.includes('#')) return false;
    if (!pathname) return false;
    const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const cleanHref = href.endsWith('/') ? href : `${href}/`;
    return cleanPath === cleanHref;
  };

  return (
    <>
      {/* Barra Ultrafina de Progresso de Leitura */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[70] bg-transparent pointer-events-none"
      >
        <div
          style={{ width: `${scrollPct}%` }}
          className="h-full bg-gradient-to-r from-deco-crimson via-[#D4AF37] to-deco-valencia transition-[width] duration-150"
        />
      </div>

      {/* MASTHEAD DESKTOP (Não-sticky: exibe a marca completa, busca, tema e idiomas com elegância e rola suavemente liberando toda a tela!) */}
      <div className="hidden lg:block bg-parchment-card border-b border-deco-burnished/50">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
          <Link href={homeHref} className="flex items-center gap-3.5 group min-w-0">
            <div className="w-11 h-11 shrink-0 rounded-[2px] border-2 border-deco-gold bg-deco-crimson text-[#FAF7F0] flex items-center justify-center font-insignia text-lg shadow-sm group-hover:bg-deco-valencia transition-colors">
              JA
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <SpainAndValenciaFlags size="sm" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-deco-gold font-bold truncate">
                  {t.brandTop}
                </span>
              </div>
              <span className="font-display text-2xl xl:text-[1.7rem] font-bold text-charcoal tracking-tight block leading-tight mt-0.5">
                {t.brandTitle}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 font-sans text-xs shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-parchment-elevated hover:border-deco-gold border border-deco-burnished/60 text-charcoal transition-colors rounded-[2px]"
              title={`${searchBtnLabel} (Ctrl+K)`}
            >
              <span>🔍</span>
              <span className="font-semibold">{searchBtnLabel}</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-parchment-card border border-deco-burnished/50 text-deco-gold font-mono">
                Ctrl K
              </kbd>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="px-2.5 py-1.5 bg-parchment-elevated hover:border-deco-gold border border-deco-burnished/60 text-charcoal font-semibold transition-colors rounded-[2px]"
              title="Alternar modo de leitura"
            >
              {themeBtnLabel}
            </button>

            <div className="flex items-center gap-1 pl-1">
              <Link
                href={buildLocalizedHref(pathname, 'es')}
                title="Castellano (Español)"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border font-bold transition-all rounded-[2px] ${
                  lang === 'es'
                    ? 'bg-deco-crimson text-white border-deco-gold shadow-sm'
                    : 'bg-parchment text-charcoal border-deco-burnished/50 hover:border-deco-gold'
                }`}
              >
                <SpainFlag className="w-4 h-3" />
                <span>ES</span>
              </Link>

              <Link
                href={buildLocalizedHref(pathname, 'va')}
                title="Valencià (Comunitat Valenciana)"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border font-bold transition-all rounded-[2px] ${
                  lang === 'va'
                    ? 'bg-deco-valencia text-white border-deco-gold shadow-sm'
                    : 'bg-parchment text-charcoal border-deco-burnished/50 hover:border-deco-gold'
                }`}
              >
                <ValenciaFlag className="w-4 h-3" />
                <span>VA</span>
              </Link>

              <Link
                href={buildLocalizedHref(pathname, 'pt')}
                title="Português (Brasil)"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border font-bold transition-all rounded-[2px] ${
                  lang === 'pt'
                    ? 'bg-[#1D4E38] text-white border-deco-gold shadow-sm'
                    : 'bg-parchment text-charcoal border-deco-burnished/50 hover:border-deco-gold'
                }`}
              >
                <BrazilFlag className="w-4 h-3" />
                <span>PT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA DE NAVEGAÇÃO STICKY ULTRAFINA (Apenas 48px no Desktop e 56px no Celular — libera toda a tela para o conteúdo abaixo!) */}
      <header className="sticky top-0 z-50 w-full max-w-full border-b border-deco-burnished/80 bg-parchment/95 backdrop-blur-md shadow-sm">
        {/* Visão Desktop: 1 única linha limpa e espaçosa com todos os links */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-6 h-12 items-center justify-between gap-2">
          <nav
            aria-label="Navegación principal"
            className="flex items-center justify-between w-full font-sans text-xs font-semibold tracking-wide"
          >
            <div className="flex items-center gap-1 xl:gap-3">
              {navItems.map((item) => {
                const active = isRouteActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={item.fullLabel}
                    className={`whitespace-nowrap px-2.5 py-1.5 transition-all border-b-2 ${
                      active
                        ? 'text-deco-crimson border-deco-crimson font-bold bg-deco-goldLight/25'
                        : 'text-charcoal hover:text-deco-crimson border-transparent hover:border-deco-gold'
                    }`}
                  >
                    {item.shortLabel}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={searchBtnLabel}
              title={`${searchBtnLabel} (Ctrl+K)`}
              className="px-2.5 py-1 text-[11px] font-bold text-deco-crimson hover:text-deco-valencia flex items-center gap-1 shrink-0"
            >
              <span>🔍</span>
              <span className="hidden xl:inline">{searchBtnLabel}</span>
            </button>
          </nav>
        </div>

        {/* Visão Celular: 1 única linha compacta (56px) sem jamais estourar as bordas */}
        <div className="flex lg:hidden items-center justify-between gap-2 px-3 sm:px-5 h-14 w-full max-w-full">
          <Link
            href={homeHref}
            className="flex items-center gap-2 min-w-0 flex-1"
          >
            <div className="w-8 h-8 shrink-0 rounded-[2px] border border-deco-gold bg-deco-crimson text-[#FAF7F0] flex items-center justify-center font-insignia text-xs shadow-sm">
              JA
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <SpainFlag className="w-3.5 h-2.5" />
                <ValenciaFlag className="w-3.5 h-2.5" />
                <span className="font-sans text-[8px] uppercase tracking-wider text-deco-gold font-bold truncate">
                  Vinaròs • Rio • Bahia
                </span>
              </div>
              <span className="font-display text-[15px] sm:text-lg font-bold text-charcoal block truncate leading-tight">
                {t.brandTitle}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-1 shrink-0 font-sans text-[10px]">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={searchBtnLabel}
              className="w-7 h-7 flex items-center justify-center border border-deco-burnished/60 bg-parchment-card text-charcoal rounded-[2px]"
            >
              🔍
            </button>

            <Link
              href={buildLocalizedHref(pathname, 'es')}
              aria-label="Castellano"
              className={`px-1.5 py-1 border font-bold rounded-[2px] ${
                lang === 'es'
                  ? 'bg-deco-crimson text-white border-deco-gold'
                  : 'bg-parchment-card text-charcoal border-deco-burnished/50'
              }`}
            >
              ES
            </Link>
            <Link
              href={buildLocalizedHref(pathname, 'va')}
              aria-label="Valencià"
              className={`px-1.5 py-1 border font-bold rounded-[2px] ${
                lang === 'va'
                  ? 'bg-deco-valencia text-white border-deco-gold'
                  : 'bg-parchment-card text-charcoal border-deco-burnished/50'
              }`}
            >
              VA
            </Link>
            <Link
              href={buildLocalizedHref(pathname, 'pt')}
              aria-label="Português"
              className={`px-1.5 py-1 border font-bold rounded-[2px] ${
                lang === 'pt'
                  ? 'bg-[#1D4E38] text-white border-deco-gold'
                  : 'bg-parchment-card text-charcoal border-deco-burnished/50'
              }`}
            >
              PT
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="w-7 h-7 flex items-center justify-center border border-deco-gold bg-[#181613] text-[#F9E7B2] font-bold rounded-[2px]"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Gaveta Mobile */}
        {mobileOpen && (
          <nav
            aria-label="Menu móvel"
            className="lg:hidden border-t border-deco-burnished/50 bg-parchment-elevated px-4 py-4 space-y-2 font-sans text-sm shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-deco-burnished/30 text-xs">
              <span className="font-bold uppercase tracking-wider text-deco-gold">
                {t.footerNavTitle}
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="px-2.5 py-1 border border-deco-burnished/60 bg-parchment-card text-charcoal font-semibold text-xs"
              >
                {themeBtnLabel}
              </button>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 bg-parchment-card border border-deco-burnished/40 font-semibold text-charcoal hover:border-deco-gold"
              >
                <span>{item.fullLabel}</span>
                <span className="text-deco-gold">→</span>
              </Link>
            ))}

            <div className="pt-2 mt-2 border-t border-deco-burnished/30 text-xs text-charcoal-muted flex flex-wrap items-center justify-between gap-2">
              <span>✉️ Trineto de Pepe Adell:</span>
              <a
                href={CORRESPONDENCE_MAILTO}
                className="font-mono font-bold text-deco-crimson underline break-all"
              >
                {CORRESPONDENCE_EMAIL_DISPLAY}
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* PLACA DE DESTAQUE EM TODAS AS PÁGINAS — Frase de Pepe Adell
          (Não-sticky, contida dentro das margens em 100% dos celulares e com espaço generoso abaixo!) */}
      <div className="w-full max-w-full overflow-hidden bg-gradient-to-r from-[#161411] via-[#2A1716] to-[#161411] border-b-2 border-[#D4AF37]/75 text-[#EFE9DA] shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 text-center space-y-1">
          <p className="font-display text-[13px] sm:text-base lg:text-[17px] italic font-semibold text-[#F9E7B2] leading-snug break-words">
            {featuredQuote}
          </p>
          <div>
            <Link
              href={`${prefix}/obra/carta-abierta-gaspar-thous-actitud-castelar-1893/`}
              className="inline-block font-sans text-[9.5px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.15em] text-[#D4AF37] font-bold hover:text-white underline-offset-4 hover:underline break-words max-w-full"
            >
              {quoteAttribution}
            </Link>
          </div>
        </div>
      </div>

      <GlobalSearchModal
        lang={lang}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {showBackTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          className="no-print fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-[#181613] text-[#F9E7B2] border-2 border-[#D4AF37] shadow-xl hover:bg-deco-crimson transition-all flex items-center justify-center font-sans text-base font-bold"
          title="↑ Topo"
        >
          ↑
        </button>
      )}
    </>
  );
}
