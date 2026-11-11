'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { getLocalizedWorksList } from '@/data/acervo-trilingue';
import { SiteLang, UI_STRINGS } from '@/lib/i18n-ui';

interface MilestoneItem {
  yearLabel: string;
  place: string;
  title: string;
  description: string;
  pageNum: number;
  workSlug: string;
}

const TIMELINE_DATA: Record<
  SiteLang,
  {
    kicker: string;
    heading: string;
    subheading: string;
    openWorkBtn: string;
    openPageBtn: string;
    milestones: MilestoneItem[];
  }
> = {
  es: {
    kicker: 'Línea del Tiempo Interactiva • Dos Continentes (1868–1927)',
    heading: 'El Viaje Vital de Pepe Adell a Través de los Documentos Originales',
    subheading:
      'Seleccione cada hito histórico para contemplar su recorte original escaneado, leer su transcripción debajo del documento y viajar desde Vinaròs hasta Río de Janeiro y Bahía.',
    openWorkBtn: 'Abrir Obra y Transcripción Completa →',
    openPageBtn: 'Ver Facsímil Original',
    milestones: [
      {
        yearLabel: '1868 • Vinaròs',
        place: 'Vinaròs (Castellón, Comunitat Valenciana)',
        title: 'Nacimiento a orillas del Mediterráneo y el violín de su hermano ciego',
        description:
          'El 10 de febrero de 1868 nace José Adell y Fons en Vinaròs. Crece junto a su hermano invidente Alberto Adell y Fons, prodigio musical educado en la Escolanía de Montserrat por el Padre Guzmán y aplaudido en Madrid y Valencia.',
        pageNum: 72,
        workSlug: 'cronica-concierto-alberto-adell-violinista-ciego-1884',
      },
      {
        yearLabel: '1885–1886 • Barcelona',
        place: 'Barcelona (Redacción de La Luz)',
        title: 'Secretario de redacción a los 17 años y el grito «¡Igualdad ante la ley!»',
        description:
          'Junto a Rosendo Arús, Cristóbal Litrán y Fernando Tarrida del Mármol, el jovencísimo Pepe Adell sacude la conciencia española denunciando el fusilamiento del cabo Bartual en Cartagena frente a los privilegios dinásticos.',
        pageNum: 18,
        workSlug: 'igualdad-ante-la-ley-fusilamiento-bartual-1886',
      },
      {
        yearLabel: '1889 • Barcelona',
        place: 'Barcelona (El Sufragio Universal)',
        title: 'Analista internacional y defensor de la instrucción femenina',
        description:
          'Con apenas 21 años redacta revistas de política internacional en El Sufragio Universal, defendiendo el sufragio, la educación libre de la mujer y la regeneración ética del republicanismo español.',
        pageNum: 6,
        workSlug: 'revista-politica-internacional-sufragio-universal-1889',
      },
      {
        yearLabel: '1893 • Río de Janeiro',
        place: 'Rua da Ajuda (Hoy Theatro Municipal do Rio)',
        title: 'La sentencia inmortal sobre la fuerza de los principios',
        description:
          'Instalado con su taller de grabado y redacción en la Rua da Ajuda —solar donde hoy se alza el Theatro Municipal—, escribe en La Unión Española su máxima eterna: «¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!».',
        pageNum: 32,
        workSlug: 'carta-abierta-gaspar-thous-actitud-castelar-1893',
      },
      {
        yearLabel: '1895 • Largo de S. Francisco',
        place: 'Río de Janeiro (Mayo de 1895)',
        title: 'Herido de una pedrada en la cabeza sin perder la sonrisa',
        description:
          'Durante los tumultos callejeros de mayo de 1895 en Río de Janeiro, recibe una pedrada en la cabeza al defender serenamente la dignidad de la colonia española, regresando a escribir con la frente vendada y el ánimo intacto.',
        pageNum: 75,
        workSlug: 'sucesos-rio-agresion-pedrada-jose-adell-1895',
      },
      {
        yearLabel: '1900 • Joya Presidencial',
        place: 'Palacio del Catete, Río de Janeiro',
        title: 'El buril elegido para el tintero de oro y brillantes del Presidente Campos Sales',
        description:
          'En el IV Centenario del Descubrimiento de Brasil, José Adell graba con maestría suprema la joya monumental de tres kilos de oro, platino y brillantes ofrecida al Presidente Dr. Manoel Ferraz de Campos Sales.',
        pageNum: 79,
        workSlug: 'manuscrito-tintero-oro-presidente-campos-sales-1900',
      },
      {
        yearLabel: '1903 • Doña Emilia',
        place: 'Río de Janeiro (Septiembre de 1903)',
        title: 'Las cuarenta carrozas y el abrazo a Josefina, Alberto y Pepín',
        description:
          'Fallece a los 33 años su amada esposa Doña Emilia Vallespí de Adell. Cuarenta carruajes acompañan el cortejo mientras Pepe consuela el llanto desgarrador de sus tres hijos pequeños.',
        pageNum: 83,
        workSlug: 'obituario-emilia-vallespi-de-adell-1903',
      },
      {
        yearLabel: '1927 • Bahía y Posteridad',
        place: 'Salvador de Bahía y Río de Janeiro',
        title: 'El adiós de Adolfo Morales de los Ríos y el legado preservado por su Trineto',
        description:
          'Tras su fallecimiento en Bahía el 12 de mayo de 1927, el gran arquitecto Adolfo Morales de los Ríos inmortaliza su sonrisa y la casita de la Rua da Ajuda en una carta inolvidable hoy custodiada por su trineto, Dr. Marcello Bossois.',
        pageNum: 84,
        workSlug: 'carta-tributo-morales-de-los-rios-1927',
      },
    ],
  },
  va: {
    kicker: 'Línia del Temps Interactiva • Dos Continents (1868–1927)',
    heading: 'El Viatge Vital de Pepe Adell a Través dels Documents Originals',
    subheading:
      'Seleccioneu cada fita històrica per contemplar el retall original escanejat, llegir-ne la transcripció sota el document i viatjar des de Vinaròs fins a Rio de Janeiro i Bahia.',
    openWorkBtn: 'Obrir Obra i Transcripció Completa →',
    openPageBtn: 'Vore Facsímil Original',
    milestones: [
      {
        yearLabel: '1868 • Vinaròs',
        place: 'Vinaròs (Castelló, Comunitat Valenciana)',
        title: 'Naixement vora la Mediterrània i el violí del seu germà cec',
        description:
          'El 10 de febrer de 1868 naix José Adell y Fons a Vinaròs. Creix al costat del seu germà invident Alberto Adell y Fons, prodigi musical educat a l’Escolania de Montserrat pel Pare Guzmán.',
        pageNum: 72,
        workSlug: 'cronica-concierto-alberto-adell-violinista-ciego-1884',
      },
      {
        yearLabel: '1885–1886 • Barcelona',
        place: 'Barcelona (Redacció de La Luz)',
        title: 'Secretari de redacció als 17 anys i el crit «Igualtat davant la llei!»',
        description:
          'Al costat de Rosendo Arús, Cristóbal Litrán i Fernando Tarrida del Mármol, el jove Pepe Adell denuncia l’afusellament del caporal Bartual a Cartagena enfront dels privilegis dinàstics.',
        pageNum: 18,
        workSlug: 'igualdad-ante-la-ley-fusilamiento-bartual-1886',
      },
      {
        yearLabel: '1889 • Barcelona',
        place: 'Barcelona (El Sufragio Universal)',
        title: 'Analista internacional i defensor de la instrucció femenina',
        description:
          'Amb només 21 anys redacta revistes de política internacional a El Sufragio Universal, defensant l’educació lliure de la dona i la regeneració ètica del republicanisme.',
        pageNum: 6,
        workSlug: 'revista-politica-internacional-sufragio-universal-1889',
      },
      {
        yearLabel: '1893 • Rio de Janeiro',
        place: 'Rua da Ajuda (Hui Theatro Municipal do Rio)',
        title: 'La sentència immortal sobre la força dels principis',
        description:
          'Instal·lat amb el seu taller de gravat i redacció a la Rua da Ajuda —solar on hui s’alça el Theatro Municipal—, escriu a La Unión Española: «Quan comprendran tots que a la força dels principis, i no a la força dels hòmens, està reservada la victòria!».',
        pageNum: 32,
        workSlug: 'carta-abierta-gaspar-thous-actitud-castelar-1893',
      },
      {
        yearLabel: '1895 • Largo de S. Francisco',
        place: 'Rio de Janeiro (Maig de 1895)',
        title: 'Ferit d’una pedrada al cap sense perdre el somriure',
        description:
          'Durant els aldarulls de maig de 1895 a Rio de Janeiro, rep una pedrada al cap mentre defensava serenament la dignitat de la colònia espanyola, tornant a escriure amb el front embenat.',
        pageNum: 75,
        workSlug: 'sucesos-rio-agresion-pedrada-jose-adell-1895',
      },
      {
        yearLabel: '1900 • Joia Presidencial',
        place: 'Palau del Catete, Rio de Janeiro',
        title: 'El burí elegit per al tinter d’or i brillants del President Campos Sales',
        description:
          'En el IV Centenari del Descobriment del Brasil, José Adell grava amb mestria suprema la joia monumental de tres quilos d’or, platí i brillants oferta al President Dr. Manoel Ferraz de Campos Sales.',
        pageNum: 79,
        workSlug: 'manuscrito-tintero-oro-presidente-campos-sales-1900',
      },
      {
        yearLabel: '1903 • Doña Emilia',
        place: 'Rio de Janeiro (Setembre de 1903)',
        title: 'Les quaranta carrosses i l’abraçada a Josefina, Alberto i Pepín',
        description:
          'Mor als 33 anys la seua estimada esposa Doña Emilia Vallespí de Adell. Quaranta carruatges acompanyen el seguici mentre Pepe consola el plor dels seus tres fills menuts.',
        pageNum: 83,
        workSlug: 'obituario-emilia-vallespi-de-adell-1903',
      },
      {
        yearLabel: '1927 • Bahia i Posteritat',
        place: 'Salvador de Bahia i Rio de Janeiro',
        title: 'L’adeu d’Adolfo Morales de los Ríos i el llegat preservat pel seu Trineto',
        description:
          'Després de la seua mort a Bahia el 12 de maig de 1927, l’arquitecte Adolfo Morales de los Ríos immortalitza el seu somriure i la caseta de la Rua da Ajuda en una carta hui custodiada pel seu trineto, Dr. Marcello Bossois.',
        pageNum: 84,
        workSlug: 'carta-tributo-morales-de-los-rios-1927',
      },
    ],
  },
  pt: {
    kicker: 'Linha do Tempo Interativa • Dois Continentes (1868–1927)',
    heading: 'A Jornada de Vida de Pepe Adell Através dos Documentos Originais',
    subheading:
      'Selecione cada marco histórico para ver o recorte original digitalizado, ler sua transcrição posicionada abaixo do documento e viajar de Vinaròs ao Rio de Janeiro e à Bahia.',
    openWorkBtn: 'Abrir Obra e Transcrição Completa →',
    openPageBtn: 'Ver Fac-símile Original',
    milestones: [
      {
        yearLabel: '1868 • Vinaròs',
        place: 'Vinaròs (Castellón, Comunidade Valenciana)',
        title: 'Nascimento à beira do Mediterrâneo e o violino do irmão cego',
        description:
          'Em 10 de fevereiro de 1868 nasce José Adell y Fons em Vinaròs. Cresce ao lado do irmão invidente Alberto Adell y Fons, prodígio musical formado na Escolania de Montserrat pelo Padre Guzmán.',
        pageNum: 72,
        workSlug: 'cronica-concierto-alberto-adell-violinista-ciego-1884',
      },
      {
        yearLabel: '1885–1886 • Barcelona',
        place: 'Barcelona (Redação de La Luz)',
        title: 'Secretário de redação aos 17 anos e o brado «Igualdade perante a lei!»',
        description:
          'Ao lado de Rosendo Arús, Cristóbal Litrán e Fernando Tarrida del Mármol, o jovem Pepe Adell sacode a consciência espanhola denunciando o fuzilamento do cabo Bartual em Cartagena diante dos privilégios reais.',
        pageNum: 18,
        workSlug: 'igualdad-ante-la-ley-fusilamiento-bartual-1886',
      },
      {
        yearLabel: '1889 • Barcelona',
        place: 'Barcelona (El Sufragio Universal)',
        title: 'Analista internacional e defensor da instrução feminina',
        description:
          'Com apenas 21 anos redige revistas de política internacional em El Sufragio Universal, defendendo o sufrágio, a educação livre das mulheres e a ética republicana.',
        pageNum: 6,
        workSlug: 'revista-politica-internacional-sufragio-universal-1889',
      },
      {
        yearLabel: '1893 • Rio de Janeiro',
        place: 'Rua da Ajuda (Hoje Theatro Municipal do Rio)',
        title: 'A sentença imortal sobre a força dos princípios',
        description:
          'Instalado com sua oficina de gravura e redação na Rua da Ajuda — terreno onde hoje se ergue o Theatro Municipal —, escreve em La Unión Española: «Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!».',
        pageNum: 32,
        workSlug: 'carta-abierta-gaspar-thous-actitud-castelar-1893',
      },
      {
        yearLabel: '1895 • Largo de S. Francisco',
        place: 'Rio de Janeiro (Maio de 1895)',
        title: 'Atingido por uma pedrada na cabeça sem jamais perder o sorriso',
        description:
          'Nos tumultos de maio de 1895 no Rio de Janeiro, sofre uma pedrada na cabeça ao defender serenamente a colônia espanhola, voltando à redação com a fronte enfaixada e o espírito intacto.',
        pageNum: 75,
        workSlug: 'sucesos-rio-agresion-pedrada-jose-adell-1895',
      },
      {
        yearLabel: '1900 • Joia Presidencial',
        place: 'Palácio do Catete, Rio de Janeiro',
        title: 'O buril escolhido para o tinteiro de ouro e brilhantes do Presidente Campos Sales',
        description:
          'No IV Centenário do Descobrimento do Brasil, José Adell grava com maestria suprema a joia monumental de três quilos de ouro, platina e brilhantes ofertada ao Presidente Dr. Manoel Ferraz de Campos Sales.',
        pageNum: 79,
        workSlug: 'manuscrito-tintero-oro-presidente-campos-sales-1900',
      },
      {
        yearLabel: '1903 • Doña Emilia',
        place: 'Rio de Janeiro (Setembro de 1903)',
        title: 'As quarenta carruagens e o abraço em Josefina, Alberto e Pepín',
        description:
          'Falece aos 33 anos sua amada esposa Doña Emilia Vallespí de Adell. Quarenta carruagens acompanham o cortejo enquanto Pepe consola o choro de seus três filhos pequenos.',
        pageNum: 83,
        workSlug: 'obituario-emilia-vallespi-de-adell-1903',
      },
      {
        yearLabel: '1927 • Bahia e Posteridade',
        place: 'Salvador da Bahia e Rio de Janeiro',
        title: 'O adeus de Adolfo Morales de los Ríos e o legado preservado pelo Trineto',
        description:
          'Após seu falecimento na Bahia em 12 de maio de 1927, o arquiteto Adolfo Morales de los Ríos imortaliza seu sorriso e a casinha da Rua da Ajuda numa carta hoje preservada por seu trineto, Dr. Marcello Bossois.',
        pageNum: 84,
        workSlug: 'carta-tributo-morales-de-los-rios-1927',
      },
    ],
  },
};

export default function InteractiveTimelineSection({
  lang = 'es',
}: {
  lang?: SiteLang;
}) {
  const [activeIdx, setActiveIdx] = useState(3); // Começa em 1893 (Frase Imortal / Rua da Ajuda) ou 0
  const data = TIMELINE_DATA[lang];
  const t = UI_STRINGS[lang];
  const worksList = useMemo(() => getLocalizedWorksList(lang), [lang]);
  const current = data.milestones[activeIdx] || data.milestones[0];
  const prefix = `/${lang}`;
  const padPage = (n: number) => String(n).padStart(2, '0');

  const matchedWork = useMemo(
    () =>
      worksList.find((w) => w.slug === current.workSlug) ||
      worksList.find((w) => w.pages.includes(current.pageNum)),
    [worksList, current]
  );

  return (
    <section
      id="cronologia"
      className="py-14 sm:py-18 px-4 sm:px-6 border-b-2 border-deco-burnished bg-parchment-elevated/60"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-deco-gold font-bold block">
            {data.kicker}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-charcoal leading-tight">
            {data.heading}
          </h2>
          <p className="font-serif text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {data.subheading}
          </p>
        </div>

        {/* Seletor Horizontal de Marcos Históricos */}
        <div className="flex overflow-x-auto custom-scrollbar gap-2 pb-2">
          {data.milestones.map((m, idx) => {
            const active = idx === activeIdx;
            return (
              <button
                key={m.yearLabel}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`shrink-0 px-4 py-2.5 border font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                  active
                    ? 'bg-deco-crimson text-white border-deco-gold shadow-md'
                    : 'bg-parchment-card text-charcoal border-deco-burnished/50 hover:border-deco-gold'
                }`}
              >
                {m.yearLabel}
              </button>
            );
          })}
        </div>

        {/* Painel do Marco Selecionado: Fac-símile Original + Transcrição Abaixo + Contexto */}
        <div className="deco-frame p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna Esquerda: Fac-símile Original + Transcrição Abaixo */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-deco-burnished bg-[#E5DEC9] p-2.5">
              <img
                src={`/paginas/pagina-${padPage(current.pageNum)}.webp`}
                alt={current.title}
                loading="lazy"
                className="w-full max-h-80 object-cover object-top shadow-md mx-auto"
              />
            </div>

            {matchedWork && (
              <div className="p-4 bg-parchment-elevated border-l-4 border-deco-crimson space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-deco-crimson font-bold block">
                  {t.workExcerptTitle} (Pág. {current.pageNum})
                </span>
                <div className="font-serif text-xs sm:text-sm text-charcoal leading-relaxed space-y-2 max-h-44 overflow-y-auto custom-scrollbar pr-1">
                  {matchedWork.excerpt
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita: Narrativa e Links */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs">
                <span className="px-3 py-1 bg-[#181613] text-[#F9E7B2] font-bold uppercase tracking-wider">
                  {current.yearLabel}
                </span>
                <span className="text-deco-gold font-bold">📍 {current.place}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-charcoal leading-tight">
                {current.title}
              </h3>

              <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="pt-4 border-t border-deco-burnished/40 flex flex-wrap gap-3 font-sans text-xs">
              {matchedWork && (
                <Link
                  href={`${prefix}/obra/${matchedWork.slug}/`}
                  className="px-5 py-3 bg-deco-crimson text-white font-bold uppercase tracking-wider border border-deco-gold hover:bg-deco-valencia transition-colors shadow-sm"
                >
                  {data.openWorkBtn}
                </Link>
              )}
              <Link
                href={`${prefix}/pagina/${current.pageNum}/`}
                className="px-4 py-3 bg-parchment text-charcoal font-bold uppercase tracking-wider border border-deco-burnished hover:border-deco-gold transition-colors"
              >
                {data.openPageBtn} (Pág. {current.pageNum}) →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
