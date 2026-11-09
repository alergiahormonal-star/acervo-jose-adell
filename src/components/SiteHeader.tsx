'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'A Alma de Pepe' },
    { href: '/#historias', label: '6 Histórias Emocionantes' },
    { href: '/#familia', label: 'Família & Afetos' },
    { href: '/acervo/', label: 'Acervo Completo (56 Obras)' },
    { href: '/caderno-original/', label: 'As 89 Páginas Originais' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-deco-burnished/60 bg-parchment/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-sm border-2 border-deco-gold bg-deco-crimson text-parchment flex items-center justify-center font-insignia text-lg shadow-sm group-hover:bg-deco-valencia transition-colors">
            JA
          </div>
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-deco-gold font-bold block">
              Vinaròs (1868) • Rio de Janeiro • Bahia (1927)
            </span>
            <span className="font-display text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
              Memorial Humano & Acervo José Adell
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Menu principal" className="hidden lg:flex items-center gap-5 font-sans text-xs font-semibold tracking-wide">
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu de navegação"
          className="lg:hidden px-3 py-2 border border-deco-burnished text-charcoal font-sans text-xs font-bold uppercase tracking-wider"
        >
          {mobileOpen ? 'Fechar ✕' : 'Menu ☰'}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Menu móvel"
          className="lg:hidden border-t border-deco-burnished/40 bg-parchment-elevated px-4 py-3 space-y-2 font-sans text-sm"
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
