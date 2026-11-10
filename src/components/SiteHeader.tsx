'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BrazilFlag,
  SpainAndValenciaFlags,
  SpainFlag,
  ValenciaFlag,
} from '@/components/Flags';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

function buildLocalizedHref(pathname: string | null, targetLang: SiteLang): string {
  if (!pathname || pathname === '/') {
    return targetLang === 'es' ? '/' : `/${targetLang}/`;
  }
  // Remove leading /es, /va, or /pt if present
  const stripped = pathname.replace(/^\/(es|va|pt)(?=\/|$)/, '') || '/';
  const normalized = stripped.endsWith('/') ? stripped : `${stripped}/`;
  if (normalized === '/') {
    return targetLang === 'es' ? '/' : `/${targetLang}/`;
  }
  return `/${targetLang}${normalized}`;
}

export default function SiteHeader({ lang = 'es' }: { lang?: SiteLang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = UI_STRINGS[lang];
  const prefix = `/${lang}`;
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;

  const navItems = [
    { href: homeHref, label: t.navHome },
    { href: `${homeHref}#historias`, label: t.navStories },
    { href: `${homeHref}#familia`, label: t.navFamily },
    { href: `${homeHref}#personalidades`, label: 'Personalidades & Theatro Municipal' },
    { href: `${prefix}/acervo/`, label: t.navArchive },
    { href: `${prefix}/caderno-original/`, label: t.navNotebook },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-deco-burnished/70 bg-parchment/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Marca + Bandeira de Espanha e Valência Juntas */}
        <div className="flex items-center gap-3">
          <Link href={homeHref} className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-sm border-2 border-deco-gold bg-deco-crimson text-parchment flex items-center justify-center font-insignia text-lg shadow-sm group-hover:bg-deco-valencia transition-colors">
              JA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <SpainAndValenciaFlags size="sm" />
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-deco-gold font-bold hidden sm:inline">
                  {t.brandTop}
                </span>
              </div>
              <span className="font-display text-xl sm:text-2xl font-bold text-charcoal tracking-tight block mt-0.5">
                {t.brandTitle}
              </span>
            </div>
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden xl:flex items-center gap-4 font-sans text-xs font-semibold tracking-wide"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-charcoal hover:text-deco-crimson transition-colors py-1 border-b-2 border-transparent hover:border-deco-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Seletor Trilíngue Oficial: Castellano | Valencià | Português */}
        <div className="flex items-center gap-1.5 font-sans text-xs">
          <Link
            href={buildLocalizedHref(pathname, 'es')}
            title="Castellano (Español)"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border font-bold transition-all ${
              lang === 'es'
                ? 'bg-deco-crimson text-parchment border-deco-gold shadow-sm'
                : 'bg-parchment-card text-charcoal border-deco-burnished/50 hover:border-deco-gold'
            }`}
          >
            <SpainFlag className="w-5 h-3.5" />
            <span>ES</span>
          </Link>

          <Link
            href={buildLocalizedHref(pathname, 'va')}
            title="Valencià (Comunitat Valenciana)"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border font-bold transition-all ${
              lang === 'va'
                ? 'bg-deco-valencia text-parchment border-deco-gold shadow-sm'
                : 'bg-parchment-card text-charcoal border-deco-burnished/50 hover:border-deco-gold'
            }`}
          >
            <ValenciaFlag className="w-5 h-3.5" />
            <span>VA</span>
          </Link>

          <Link
            href={buildLocalizedHref(pathname, 'pt')}
            title="Português (Brasil)"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border font-bold transition-all ${
              lang === 'pt'
                ? 'bg-[#1D4E38] text-parchment border-deco-gold shadow-sm'
                : 'bg-parchment-card text-charcoal border-deco-burnished/50 hover:border-deco-gold'
            }`}
          >
            <BrazilFlag className="w-5 h-3.5" />
            <span>PT</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="xl:hidden ml-1 px-2.5 py-1.5 border border-deco-burnished text-charcoal font-bold uppercase"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Menu móvel"
          className="xl:hidden border-t border-deco-burnished/40 bg-parchment-elevated px-4 py-3 space-y-2 font-sans text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 px-3 bg-parchment-card border border-deco-burnished/30 font-semibold text-charcoal hover:border-deco-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
