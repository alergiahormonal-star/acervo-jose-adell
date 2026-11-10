import React from 'react';
import Link from 'next/link';
import { SpainAndValenciaFlags } from '@/components/Flags';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

export default function SiteFooter({ lang = 'es' }: { lang?: SiteLang }) {
  const t = UI_STRINGS[lang];
  const prefix = `/${lang}`;
  const homeHref = lang === 'es' ? '/' : `/${lang}/`;

  const curatorNote =
    lang === 'pt'
      ? 'Site idealizado por seu trineto, Dr. Marcello Bossois de Melo Ferreira (espanhol e brasileiro, carioca e valenciano).'
      : lang === 'va'
      ? 'Lloc web idealitzat pel seu trineto (rebesnet), Dr. Marcello Bossois de Melo Ferreira (espanyol i brasiler, carioca i valencià).'
      : 'Sitio idealizado por su trineto (tataranieto), Dr. Marcello Bossois de Melo Ferreira (español y brasileño, carioca y valenciano).';

  const legacyNavLabel = 'Trineto de Pepe Adell (Dr. Marcello Bossois)';

  return (
    <footer className="border-t-2 border-deco-burnished bg-[#181613] text-[#EFE9DA] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-3">
            <SpainAndValenciaFlags size="md" />
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-bold">
              Vinaròs (10.02.1868) — Bahía (12.05.1927)
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white pt-1">
            José Adell y Fons (&ldquo;Pepe Adell&rdquo;)
          </h3>
          <p className="font-serif text-sm text-[#C8C0B0] leading-relaxed">
            {t.footerDedicated}
          </p>
          <p className="font-serif text-xs text-[#E6D2A8] border-l-2 border-[#D4AF37] pl-3 leading-relaxed">
            {curatorNote}{' '}
            <Link
              href={`${prefix}/trineto-de-pepe-adell/`}
              className="underline font-semibold hover:text-white"
            >
              Trineto de Pepe Adell →
            </Link>
          </p>
        </div>

        <div className="md:col-span-4 space-y-2 font-sans text-xs">
          <h4 className="uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
            {t.footerNavTitle}
          </h4>
          <ul className="space-y-2 text-[#D8D0C2]">
            <li>
              <Link href={homeHref} className="hover:text-white underline-offset-4 hover:underline">
                → {t.navHome}
              </Link>
            </li>
            <li>
              <Link href={`${homeHref}#historias`} className="hover:text-white underline-offset-4 hover:underline">
                → {t.navStories}
              </Link>
            </li>
            <li>
              <Link href={`${homeHref}#familia`} className="hover:text-white underline-offset-4 hover:underline">
                → {t.navFamily}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/trineto-de-pepe-adell/`} className="text-[#E6D2A8] font-bold hover:text-white underline-offset-4 hover:underline">
                → {legacyNavLabel}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/acervo/`} className="hover:text-white underline-offset-4 hover:underline">
                → {t.navArchive}
              </Link>
            </li>
            <li>
              <Link href={`${prefix}/caderno-original/`} className="hover:text-white underline-offset-4 hover:underline">
                → {t.navNotebook}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-2 font-sans text-xs">
          <h4 className="uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
            {t.footerSeoTitle}
          </h4>
          <p className="text-[#B8B0A2] leading-relaxed mb-3">{t.footerSeoDesc}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#D4AF37]/60 text-[#EFE9DA] hover:bg-[#D4AF37] hover:text-[#181613] transition-colors font-semibold"
            >
              🗺️ Sitemap.xml (550 URLs)
            </a>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#D4AF37]/60 text-[#EFE9DA] hover:bg-[#D4AF37] hover:text-[#181613] transition-colors font-semibold"
            >
              🤖 Robots.txt
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4 sm:px-6 text-center font-sans text-[11px] text-[#9E9689]">
        {t.footerMotto}
      </div>
    </footer>
  );
}
