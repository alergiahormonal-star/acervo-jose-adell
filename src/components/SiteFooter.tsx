import React from 'react';
import Link from 'next/link';
import { SpainAndValenciaFlags } from '@/components/Flags';
import {
  CORRESPONDENCE_EMAIL_DISPLAY,
  CORRESPONDENCE_MAILTO,
} from '@/data/legado-marcello-bossois';
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
  const prefaceNavLabel =
    lang === 'pt'
      ? 'Prefácio Literário da Vida de Pepe Adell (por Dr. Marcello Bossois)'
      : lang === 'va'
      ? 'Prefaci Literari de la Vida de Pepe Adell (per Dr. Marcello Bossois)'
      : 'Prefacio Literario de la Vida de Pepe Adell (por Dr. Marcello Bossois)';

  const correspondenceTitle =
    lang === 'pt'
      ? 'Contato com o Trineto para Correspondências:'
      : lang === 'va'
      ? 'Contacte amb el Trineto per a Correspondències:'
      : 'Contacto con el Trineto para Correspondencias:';

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
            </Link>{' '}
            •{' '}
            <Link
              href={`${prefix}/prefacio/`}
              className="underline font-semibold hover:text-white"
            >
              {lang === 'pt'
                ? 'Ler Prefácio Literário →'
                : lang === 'va'
                ? 'Llegir Prefaci Literari →'
                : 'Leer Prefacio Literario →'}
            </Link>
          </p>

          {/* Contato com o Trineto para Correspondências no Rodapé */}
          <div className="p-3.5 bg-[#221E1A] border border-[#D4AF37]/60 space-y-1 font-sans text-xs">
            <span className="uppercase tracking-wider text-[#D4AF37] font-bold block">
              ✉️ {correspondenceTitle}
            </span>
            <a
              href={CORRESPONDENCE_MAILTO}
              className="inline-block font-mono text-xs sm:text-sm font-bold text-[#F9E7B2] hover:text-white underline underline-offset-4 break-all"
            >
              {CORRESPONDENCE_EMAIL_DISPLAY}
            </a>
          </div>
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
              <Link
                href={`${prefix}/prefacio/`}
                className="text-[#F9E7B2] font-bold hover:text-white underline-offset-4 hover:underline"
              >
                → 📜 {prefaceNavLabel}
              </Link>
            </li>
            <li>
              <Link
                href={`${prefix}/trineto-de-pepe-adell/`}
                className="text-[#E6D2A8] font-bold hover:text-white underline-offset-4 hover:underline"
              >
                → {legacyNavLabel}
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
              🗺️ Sitemap.xml
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

      <div className="border-t border-[#D4AF37]/30 bg-[#12100E] py-5 px-4 sm:px-6 text-center space-y-1.5">
        <p className="font-display text-base sm:text-lg italic text-[#F9E7B2] max-w-4xl mx-auto">
          “¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!” — Pepe Adell (1893)
        </p>
        <p className="font-sans text-xs text-[#E6D2A8]">
          {correspondenceTitle}{' '}
          <a
            href={CORRESPONDENCE_MAILTO}
            className="font-mono font-bold underline hover:text-white break-all"
          >
            {CORRESPONDENCE_EMAIL_DISPLAY}
          </a>
        </p>
        <p className="font-sans text-[11px] text-[#9E9689]">
          {t.footerMotto}
        </p>
      </div>
    </footer>
  );
}
