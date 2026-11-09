import React from 'react';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-deco-burnished bg-[#181613] text-[#EFE9DA] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
            Em Memória Viva • 10.02.1868 — 12.05.1927
          </span>
          <h3 className="font-display text-2xl font-bold text-white">
            José Adell y Fons (&ldquo;Pepe Adell&rdquo;)
          </h3>
          <p className="font-serif text-sm text-[#C8C0B0] leading-relaxed">
            Dedicado à memória humana, familiar, jornalística e artística de Pepe Adell, de sua amada esposa{' '}
            <strong>Doña Emilia Vallespí de Adell (1870–1903)</strong>, de seus filhos{' '}
            <strong>Josefina, Alberto e Pepín</strong>, de seu irmão prodígio{' '}
            <strong>Alberto Adell y Fons</strong> e dos amigos leais da Rua da Ajuda.
          </p>
        </div>

        <div className="md:col-span-4 space-y-2 font-sans text-xs">
          <h4 className="uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
            Navegação Completa do Memorial
          </h4>
          <ul className="space-y-2 text-[#D8D0C2]">
            <li>
              <Link href="/" className="hover:text-white underline-offset-4 hover:underline">
                → Página Inicial & Retrato Humano
              </Link>
            </li>
            <li>
              <Link href="/#historias" className="hover:text-white underline-offset-4 hover:underline">
                → As 6 Grandes Histórias Emocionantes e Curiosas
              </Link>
            </li>
            <li>
              <Link href="/#familia" className="hover:text-white underline-offset-4 hover:underline">
                → A Família Adell, Emilia e os Três Órfãos
              </Link>
            </li>
            <li>
              <Link href="/acervo/" className="hover:text-white underline-offset-4 hover:underline">
                → Catálogo Completo das 56 Obras e Publicações
              </Link>
            </li>
            <li>
              <Link href="/caderno-original/" className="hover:text-white underline-offset-4 hover:underline">
                → Folhear as 89 Páginas Escaneadas do Caderno Original
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-2 font-sans text-xs">
          <h4 className="uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
            Indexação & Dados Abertos
          </h4>
          <p className="text-[#B8B0A2] leading-relaxed mb-3">
            Acervo com 56 obras catalogadas individualmente e 89 fac-símiles digitais verificados.
          </p>
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

      <div className="border-t border-white/10 py-4 px-4 sm:px-6 text-center font-sans text-[11px] text-[#9E9689]">
        “Mais vale falar de coisas risonhas do que escrever sobre lágrimas.” — Memorial Histórico & Familiar José Adell y Fons
      </div>
    </footer>
  );
}
