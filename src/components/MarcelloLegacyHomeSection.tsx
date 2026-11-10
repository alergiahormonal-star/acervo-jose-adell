'use client';

import React from 'react';
import Link from 'next/link';
import { SpainValenciaBrazilFlags } from '@/components/Flags';
import { TRINETO_IDEALIZADOR_I18N } from '@/data/legado-marcello-bossois';
import { SiteLang } from '@/lib/i18n-ui';

export default function MarcelloLegacyHomeSection({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const c = TRINETO_IDEALIZADOR_I18N[lang];
  const trinetoHref = `/${lang}/trineto-de-pepe-adell/`;

  return (
    <section
      id="idealizador"
      className="py-12 px-4 sm:px-6 bg-parchment-elevated border-t-2 border-b-2 border-deco-burnished"
    >
      <div className="max-w-5xl mx-auto">
        <div className="deco-frame p-6 sm:p-8 bg-parchment-card border border-deco-gold shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-deco-burnished/40">
            <div className="inline-flex flex-wrap items-center gap-3">
              <SpainValenciaBrazilFlags size="sm" />
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-deco-crimson font-bold">
                {c.kicker}
              </span>
            </div>
            <Link
              href={trinetoHref}
              className="font-sans text-xs font-bold text-deco-valencia hover:text-deco-crimson underline underline-offset-4"
            >
              {c.linkLabel} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 items-center">
            <div className="md:col-span-4">
              <div className="border border-deco-gold bg-[#E5DEC9] p-2 shadow-sm">
                <img
                  src="/destaques/dr-marcello-bossois-patricia-schlinkert.webp"
                  alt="Dr. Marcello Bossois e Dra. Patricia Frozi Schlinkert"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <p className="font-serif text-[11px] text-charcoal-muted italic mt-2 leading-snug">
                  {c.photoCaption}
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3.5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                {c.title}
              </h2>

              <p className="font-serif text-sm sm:text-base text-charcoal leading-relaxed">
                {c.paragraphs[0]}
              </p>

              <p className="font-serif text-sm text-charcoal-muted leading-relaxed">
                {c.paragraphs[1]} {c.paragraphs[2]}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 font-sans text-xs">
                <Link
                  href={trinetoHref}
                  className="px-4 py-2.5 bg-deco-crimson text-parchment font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-valencia transition-colors"
                >
                  {c.linkLabel} →
                </Link>
                <a
                  href="https://www.brasilsemalergia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-parchment text-charcoal font-bold uppercase tracking-wider border border-deco-burnished hover:border-deco-gold transition-colors"
                >
                  {c.externalPortalLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
