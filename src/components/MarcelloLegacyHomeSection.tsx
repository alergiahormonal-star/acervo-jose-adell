'use client';

import React from 'react';
import Link from 'next/link';
import { SpainValenciaBrazilFlags } from '@/components/Flags';
import { MARCELLO_LEGACY_I18N } from '@/data/legado-marcello-bossois';
import { SiteLang } from '@/lib/i18n-ui';

export default function MarcelloLegacyHomeSection({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const c = MARCELLO_LEGACY_I18N[lang];
  const reportHref = `/${lang}/legado-marcello-bossois/`;

  return (
    <section
      id="legado-vivo"
      className="py-16 px-4 sm:px-6 bg-parchment-elevated border-t-2 border-b-2 border-deco-burnished"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Selo de Curadoria & Elaboração do Memorial */}
        <div className="deco-frame p-6 sm:p-8 bg-parchment-card border-2 border-deco-gold shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-deco-burnished/40">
            <div className="inline-flex flex-wrap items-center gap-3">
              <SpainValenciaBrazilFlags size="md" />
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-deco-crimson font-bold">
                {c.badge}
              </span>
            </div>
            <span className="px-3 py-1 bg-deco-crimson text-parchment font-sans text-[11px] font-bold uppercase tracking-wider">
              ✦ {c.curatorshipBannerTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
            {/* Foto Oficial do Casal + Estatísticas */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border-2 border-deco-gold bg-[#E5DEC9] p-2.5 shadow-lg">
                <img
                  src="/destaques/dr-marcello-bossois-patricia-schlinkert.webp"
                  alt="Dr. Marcello Bossois e Dra. Patricia Frozi Schlinkert"
                  loading="lazy"
                  className="w-full h-auto object-cover shadow-sm"
                />
                <p className="font-serif text-xs text-charcoal-muted italic mt-2.5 px-1 leading-relaxed">
                  {c.photoCaption}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 text-center font-sans">
                {c.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3 bg-parchment border border-deco-burnished/40"
                  >
                    <span className="block font-display text-2xl font-bold text-deco-crimson">
                      {st.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted font-bold">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrativa Executiva & Destaques */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                {c.title}
              </h2>

              <div className="p-4 bg-parchment-elevated border-l-4 border-deco-gold font-serif text-sm sm:text-base text-charcoal leading-relaxed">
                <strong className="font-sans text-xs uppercase tracking-widest text-deco-crimson block mb-1">
                  🏛️ {c.curatorshipBannerTitle}
                </strong>
                {c.curatorshipBannerText}
              </div>

              <p className="font-serif text-base text-charcoal-muted leading-relaxed">
                {c.homeSummaryLead}
              </p>

              <ul className="space-y-2.5 font-serif text-sm text-charcoal">
                {c.homeSummaryBullets.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3 bg-parchment border border-deco-burnished/30 leading-relaxed"
                  >
                    <span className="text-deco-crimson font-bold mr-1.5">❖</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3 font-sans text-xs">
                <Link
                  href={reportHref}
                  className="px-6 py-3.5 bg-deco-crimson text-parchment font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-valencia transition-colors shadow-md"
                >
                  {c.homeCtaBtn}
                </Link>
                <a
                  href="https://www.brasilsemalergia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-parchment text-charcoal font-bold uppercase tracking-widest border border-deco-burnished hover:border-deco-gold transition-colors"
                >
                  Portal Brasil Sem Alergia ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
