'use client';

import React, { useState } from 'react';
import { Locale, LOCALE_META, TAXONOMY_TREE } from '@/lib/taxonomy';
import { WikiTooltip } from '@/components/DocumentViewerPage';

interface TimelineMilestone {
  year: string;
  city: string;
  coordinates: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  docRef: string;
}

const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: '1868',
    city: 'Vinaròs (Castelló, Valência)',
    coordinates: '40°28′N 0°28′E',
    title: {
      pt: 'Nascimento em Vinaròs em Família Artística',
      es: 'Nacimiento en Vinaròs en Familia Artística',
      va: 'Naixement a Vinaròs en Família Artística',
    },
    description: {
      pt: 'Nasce a 10 de fevereiro de 1868 em Vinaròs. Seu irmão mais novo, Alberto Adell y Fons, destacar-se-ia como prodígio cego do violino e piano.',
      es: 'Nace el 10 de febrero de 1868 en Vinaròs. Su hermano menor, Alberto Adell y Fons, destacaría como prodigio ciego del violín y el piano.',
      va: 'Naix el 10 de febrer de 1868 a Vinaròs. El seu germà menor, Alberto Adell y Fons, destacaria com a prodigi cec del violí i el piano.',
    },
    docRef: 'Documento.pdf, p. 55 & p. 88',
  },
  {
    year: '1885–1889',
    city: 'Barcelona (Catalunha)',
    coordinates: '41°23′N 2°10′E',
    title: {
      pt: 'Secretário de Redação de "La Luz" e Colunista em "El Sufragio Universal"',
      es: 'Secretario de Redacción de "La Luz" y Columnista en "El Sufragio Universal"',
      va: 'Secretari de Redacció de "La Luz" i Columnista a "El Sufragio Universal"',
    },
    description: {
      pt: 'Atua ao lado de Rosendo Arús, Cristóbal Litrán e Fernando Tarrida del Mármol em "La Luz" (1885–1886) e assina revistas mensais de política europeia em "El Sufragio Universal" (1889), enquanto seu irmão Alberto é nomeado professor na Escuela de Ciegos y Sordo-Mudos de Barcelona.',
      es: 'Actúa junto a Rosendo Arús, Cristóbal Litrán y Fernando Tarrida del Mármol en "La Luz" (1885–1886) y firma revistas mensuales de política europea en "El Sufragio Universal" (1889), mientras su hermano Alberto es nombrado profesor en Barcelona.',
      va: 'Actua al costat de Rosendo Arús, Cristóbal Litrán i Fernando Tarrida del Mármol a "La Luz" (1885–1886) i signa revistes mensuals de política europea a "El Sufragio Universal" (1889).',
    },
    docRef: 'Documento.pdf, pp. 3–8, 20, 54–55',
  },
  {
    year: '1892–1898',
    city: 'Rio de Janeiro (Rua da Ajuda) & Madrid',
    coordinates: '22°54′S 43°10′W',
    title: {
      pt: 'Direção de "La Unión Española" e Tertúlias com Adolfo Morales de los Ríos',
      es: 'Dirección de "La Unión Española" y Tertulias con Adolfo Morales de los Ríos',
      va: 'Direcció de "La Unión Española" i Tertúlies amb Adolfo Morales de los Ríos',
    },
    description: {
      pt: 'No Rio de Janeiro, dirige "La Unión Española" ao lado de Gaspar de los Reyes Thous, Elías Novoa, Plácido Isasi e Adolfo Morales de los Ríos. Mantém oficina de gravador na Rua da Ajuda, viaja a Madrid como correspondente (1893) e protagoniza intensas polêmicas sobre Cuba e Filipinas.',
      es: 'En Río de Janeiro, dirige "La Unión Española" junto a Gaspar de los Reyes Thous, Elías Novoa, Plácido Isasi y Adolfo Morales de los Ríos. Mantiene su taller de grabador en la Rua da Ajuda y protagoniza intensas polémicas en 1895–1898.',
      va: 'A Rio de Janeiro, dirigeix "La Unión Española" juntament amb Gaspar de los Reyes Thous, Elías Novoa, Plácido Isasi i Adolfo Morales de los Ríos, combinant el seu taller de gravador a la Rua da Ajuda amb el periodisme.',
    },
    docRef: 'Documento.pdf, pp. 1–2, 11–32, 70, 84–85',
  },
  {
    year: '1900–1903',
    city: 'Rio de Janeiro & Buenos Aires',
    coordinates: '34°36′S 58°22′W',
    title: {
      pt: 'Medalha Oficial do Presidente Campos Sales (1900) e Luto por Doña Emilia (1903)',
      es: 'Medalla Oficial del Presidente Campos Sales (1900) y Duelo por Doña Emilia (1903)',
      va: 'Medalla Oficial del President Campos Sales (1900) i Dol per Doña Emilia (1903)',
    },
    description: {
      pt: 'Escolhido pelo Governo Brasileiro como Mestre Gravador para esculpir a medalha oficial da visita de Campos Sales à Argentina (1900). Em 5 de setembro de 1903, falece no Rio sua esposa, Doña Emilia Vallespí de Adell, comovendo toda a colônia espanhola.',
      es: 'Elegido por el Gobierno Brasileño como Maestro Grabador para esculpir la medalla oficial de la visita de Campos Sales a la Argentina (1900). En septiembre de 1903 fallece su esposa, Doña Emilia Vallespí de Adell.',
      va: 'Elegit pel Govern Brasiler com a Mestre Gravador per a esculpir la medalla oficial de la visita de Campos Sales a l’Argentina (1900). El setembre de 1903 mor la seua esposa, Doña Emilia Vallespí de Adell.',
    },
    docRef: 'Documento.pdf, pp. 80, 82–83, 88',
  },
  {
    year: '1927',
    city: 'Salvador da Bahia',
    coordinates: '12°58′S 38°30′W',
    title: {
      pt: 'Falecimento na Bahia e Homenagens no Rio de Janeiro',
      es: 'Fallecimiento en Bahía y Homenajes en Río de Janeiro',
      va: 'Defunció a Bahia i Homenatges a Rio de Janeiro',
    },
    description: {
      pt: 'Falece em 12 de maio de 1927 em Salvador da Bahia, onde exercia com estima geral sua profissão de mestre gravador em metal. É homenageado pelo "Correo de España" e em carta póstuma por Adolfo Morales de los Ríos.',
      es: 'Fallece el 12 de mayo de 1927 en Salvador de Bahía, donde ejercía con general estimación su profesión de grabador en metal. Es homenajeado por "Correo de España" y por Adolfo Morales de los Ríos.',
      va: 'Mor el 12 de maig de 1927 a Salvador de Bahia, on exercia amb estima general la seua professió de gravador en metall.',
    },
    docRef: 'Documento.pdf, pp. 75, 84–85',
  },
];

export default function LandingPage() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [activeMilestone, setActiveMilestone] = useState<number>(2);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedJournal, setSelectedJournal] = useState<string>('ALL');

  return (
    <div className="min-h-screen bg-parchment text-charcoal">
      {/* TOP BAR COM SELETOR DE IDIOMAS (PT-BR | ES | VA) */}
      <header className="border-b-2 border-deco-burnished bg-parchment-elevated sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 border-2 border-deco-gold bg-deco-valencia text-parchment flex items-center justify-center font-insignia text-xl shadow-inner">
              JA
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-deco-gold font-bold block">
                Acervo Hemerográfico & Numismático (1868–1927)
              </span>
              <span className="font-display text-2xl font-bold tracking-tight">
                Memorial José Adell y Fons
              </span>
            </div>
          </div>

          <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-6 font-sans text-xs font-semibold uppercase tracking-widest">
            <a href="#hemeroteca" className="hover:text-deco-gold transition-colors">Hemeroteca (89 p.)</a>
            <a href="#medalhistica" className="hover:text-deco-gold transition-colors">Gravura & Medalhas</a>
            <a href="#cartografia" className="hover:text-deco-gold transition-colors">Mapa Biográfico</a>
            <a href="#onomastico" className="hover:text-deco-gold transition-colors">Índice Onomástico</a>
          </nav>

          <div className="flex items-center gap-1.5 font-sans text-xs">
            {(['pt', 'es', 'va'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-3 py-1.5 border font-bold tracking-wider transition-all ${
                  locale === lang
                    ? 'bg-deco-valencia text-parchment border-deco-gold'
                    : 'bg-parchment-card text-charcoal border-deco-burnished/40 hover:border-deco-gold'
                }`}
              >
                {LOCALE_META[lang].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO SECTION ART DÉCO VALENCIANO */}
      <section className="relative overflow-hidden border-b-2 border-deco-burnished bg-deco-sunburst py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-deco-gold bg-parchment-card font-sans text-xs uppercase tracking-[0.22em] text-deco-valencia font-bold mb-6">
            <span>✦ Vinaròs (10.02.1868)</span>
            <span>•</span>
            <span>Barcelona</span>
            <span>•</span>
            <span>Rio de Janeiro</span>
            <span>•</span>
            <span>Salvador da Bahia (12.05.1927) ✦</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-charcoal leading-[1.08] mb-6">
            {locale === 'pt' && 'A Pena Republicana e o Buril de Mestre entre Dois Oceanos'}
            {locale === 'es' && 'La Pluma Republicana y el Buril de Maestro entre Dos Océanos'}
            {locale === 'va' && 'La Ploma Republicana i el Burí de Mestre entre Dos Oceans'}
          </h1>

          <p className="max-w-3xl mx-auto font-serif text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-8">
            Explore as <strong>89 páginas preservadas</strong> da obra jornalística, política e artística de{' '}
            <strong>José Adell y Fons (&ldquo;Pepe Adell&rdquo;)</strong>: de suas crônicas livre-pensadoras em{' '}
            <em>La Luz</em> e <em>El Sufragio Universal</em> em Barcelona à direção de <em>La Unión Española</em> no Rio de Janeiro, sua amizade com{' '}
            <WikiTooltip entityKey="morales-de-los-rios" locale={locale}>
              Adolfo Morales de los Ríos
            </WikiTooltip>{' '}
            e sua consagração como mestre gravador da medalha oficial do Presidente Campos Sales (1900).
          </p>

          {/* BUSCA FULL-TEXT COM OCR INTELIGENTE E FILTROS FACETADOS */}
          <div className="max-w-4xl mx-auto deco-frame p-4 sm:p-6 text-left shadow-xl">
            <label
              htmlFor="acervo-search"
              className="block font-sans text-xs font-bold uppercase tracking-widest text-deco-gold mb-2"
            >
              🔍 Busca Full-Text nas 89 Páginas Transcritas (OCR + Índice Onomástico)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="acervo-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por Emilio Castelar, Tarrida del Mármol, Rua da Ajuda, Campos Sales, Vinaròs..."
                className="flex-1 px-4 py-3 border border-deco-burnished bg-parchment text-charcoal font-serif text-sm focus:outline-none focus:border-deco-valencia"
              />
              <select
                aria-label="Filtrar por periódico"
                value={selectedJournal}
                onChange={(e) => setSelectedJournal(e.target.value)}
                className="px-3 py-3 border border-deco-burnished bg-parchment font-sans text-xs font-semibold text-charcoal"
              >
                <option value="ALL">Todos os Periódicos (1886–1927)</option>
                <option value="LA_LUZ">La Luz (Barcelona, 1885–1886)</option>
                <option value="SUFRAGIO">El Sufragio Universal (1889)</option>
                <option value="UNION_ESPANOLA">La Unión Española (Rio, 1892–1898)</option>
                <option value="CORREO_ESPANA">Correo de España (1927)</option>
              </select>
              <button className="px-6 py-3 bg-deco-valencia text-parchment font-sans text-xs font-bold uppercase tracking-widest border border-deco-gold hover:bg-deco-crimson transition-colors">
                Explorar Acervo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO CARTOGRÁFICA INTERATIVA (1868–1927) */}
      <section id="cartografia" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-10">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
            Cartografia Histórica Interativa
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">
            Itinerário Atlântico: Vinaròs ➔ Barcelona ➔ Madrid ➔ Rio ➔ Buenos Aires ➔ Bahia
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-2">
            {TIMELINE_DATA.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => setActiveMilestone(idx)}
                className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                  activeMilestone === idx
                    ? 'deco-frame border-deco-gold shadow-md'
                    : 'bg-parchment-card border-deco-burnished/40 hover:border-deco-gold'
                }`}
              >
                <div>
                  <span className="font-sans text-xs font-bold text-deco-crimson block">
                    {item.year} — {item.city}
                  </span>
                  <span className="font-display text-lg font-bold text-charcoal">
                    {item.title[locale]}
                  </span>
                </div>
                <span className="font-sans text-xs text-deco-gold font-bold">→</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 deco-frame p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-deco-burnished/40 pb-3 mb-4 font-sans text-xs">
              <span className="px-2.5 py-1 bg-deco-valencia text-parchment font-bold uppercase tracking-wider">
                {TIMELINE_DATA[activeMilestone].year}
              </span>
              <span className="font-mono text-charcoal-muted">
                📍 {TIMELINE_DATA[activeMilestone].city} ({TIMELINE_DATA[activeMilestone].coordinates})
              </span>
              <span className="text-deco-gold font-semibold">
                Fonte: {TIMELINE_DATA[activeMilestone].docRef}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              {TIMELINE_DATA[activeMilestone].title[locale]}
            </h3>
            <p className="font-serif text-base leading-relaxed text-charcoal-muted mb-6">
              {TIMELINE_DATA[activeMilestone].description[locale]}
            </p>

            <div className="p-4 bg-parchment-elevated border border-deco-burnished/40 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
              <span>
                📄 Documento vinculado disponível com fac-símile em alta resolução e transcrição diplomática.
              </span>
              <a
                href={`/${locale}/hemeroteca`}
                className="px-4 py-2 bg-deco-crimson text-parchment font-bold uppercase tracking-wider"
              >
                Abrir Fac-símiles da Época
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ÁRVORE DE TAXONOMIA PROFUNDA (4 NÍVEIS) */}
      <section id="hemeroteca" className="bg-parchment-elevated border-t-2 border-b-2 border-deco-burnished py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold">
              Arquitetura da Informação & Humanidades Digitais
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">
              Navegação Taxonômica do Acervo (4 Níveis Hierárquicos)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TAXONOMY_TREE.map((cat) => (
              <div key={cat.id} className="deco-frame p-6">
                <h3 className="font-display text-2xl font-bold text-deco-valencia dark:text-deco-gold border-b border-deco-burnished/40 pb-2 mb-4">
                  {cat.title[locale]}
                </h3>
                <div className="space-y-4">
                  {cat.subcategories.map((sub) => (
                    <div key={sub.id} className="pl-3 border-l-2 border-deco-gold">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-deco-crimson mb-2">
                        {sub.title[locale]}
                      </h4>
                      <ul className="space-y-2">
                        {sub.microcategories.map((mic) => (
                          <li key={mic.id} className="bg-parchment p-3 border border-deco-burnished/30">
                            <a
                              href={`/${locale}/${cat.slug[locale]}/${sub.slug[locale]}/${mic.slug[locale]}`}
                              className="font-serif text-sm font-semibold text-charcoal hover:text-deco-valencia block mb-1.5"
                            >
                              {mic.title[locale]} →
                            </a>
                            <div className="flex flex-wrap gap-1">
                              {mic.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 bg-parchment-elevated border border-deco-burnished/40 font-sans text-[10px] text-charcoal-muted"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
