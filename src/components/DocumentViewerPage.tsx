import React, { useState } from 'react';
import { Locale, LOCALE_META } from '@/lib/taxonomy';

interface WikiEntity {
  id: string;
  name: string;
  lifespan: string;
  role: Record<Locale, string>;
  summary: Record<Locale, string>;
  mentionsCount: number;
  slug: string;
}

const WIKI_ENTITIES: Record<string, WikiEntity> = {
  'tarrida-del-marmol': {
    id: 'tarrida-del-marmol',
    name: 'Fernando Tarrida del Mármol',
    lifespan: '1861–1915',
    role: {
      pt: 'Engenheiro, Matemático e Teórico do "Anarquismo sem Adjetivos"',
      es: 'Ingeniero, Matemático y Teórico del "Anarquismo sin Adjetivos"',
      va: 'Enginyer, Matemàtic i Teòric de l’"Anarquisme sense Adjectius"',
    },
    summary: {
      pt: 'Diretor da revista Acracia e companheiro de redação de José Adell y Fons em La Luz (Barcelona). Entrevistado em Madrid por A. Fons em setembro de 1893.',
      es: 'Director de la revista Acracia y compañero de redacción de José Adell y Fons en La Luz (Barcelona). Entrevistado en Madrid por A. Fons en septiembre de 1893.',
      va: 'Director de la revista Acracia i company de redacció de José Adell y Fons a La Luz (Barcelona). Entrevistat a Madrid per A. Fons al setembre de 1893.',
    },
    mentionsCount: 6,
    slug: '/onomastico/fernando-tarrida-del-marmol',
  },
  'emilio-castelar': {
    id: 'emilio-castelar',
    name: 'Emilio Castelar y Ripoll',
    lifespan: '1832–1899',
    role: {
      pt: 'Presidente do Poder Executivo da Primeira República Espanhola e Tribuno',
      es: 'Presidente del Poder Ejecutivo de la Primera República Española y Tribuno',
      va: 'President del Poder Executiu de la Primera República Espanyola i Tribú',
    },
    summary: {
      pt: 'Líder do republicanismo possibilista. Tema central da série "Hombres y Cosas de España" e das epístolas políticas de José Adell em 1893.',
      es: 'Líder del republicanismo posibilista. Tema central de la serie "Hombres y Cosas de España" y de las epístolas políticas de José Adell en 1893.',
      va: 'Líder del republicanisme possibilista. Tema central de la sèrie "Hombres y Cosas de España" i de les epístoles polítiques de José Adell el 1893.',
    },
    mentionsCount: 18,
    slug: '/onomastico/emilio-castelar',
  },
  'morales-de-los-rios': {
    id: 'morales-de-los-rios',
    name: 'Adolfo Morales de los Ríos',
    lifespan: '1858–1928',
    role: {
      pt: 'Arquiteto Espanhol-Brasileiro (Autor do Museu Nacional de Belas Artes)',
      es: 'Arquitecto Hispano-Brasileño (Autor del Museo Nacional de Bellas Artes)',
      va: 'Arquitecte Hispano-Brasiler (Autor del Museu Nacional de Belles Arts)',
    },
    summary: {
      pt: 'Grande amigo de Pepe Adell no Rio de Janeiro, colaborador de La Unión Española e autor do tributo póstumo "Pepe Adell, ha muerto".',
      es: 'Gran amigo de Pepe Adell en Río de Janeiro, colaborador de La Unión Española y autor del tributo póstumo "Pepe Adell, ha muerto".',
      va: 'Gran amic de Pepe Adell a Rio de Janeiro, col·laborador de La Unión Española i autor del tribut pòstum "Pepe Adell, ha muerto".',
    },
    mentionsCount: 9,
    slug: '/onomastico/adolfo-morales-de-los-rios',
  },
};

export function WikiTooltip({
  entityKey,
  locale,
  children,
}: {
  entityKey: keyof typeof WIKI_ENTITIES;
  locale: Locale;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const entity = WIKI_ENTITIES[entityKey];
  if (!entity) return <>{children}</>;

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={`/${locale}${entity.slug}`}
        className="border-b border-dashed border-deco-gold font-semibold text-deco-valencia dark:text-deco-burnished hover:bg-deco-goldLight/30 transition-colors px-0.5"
      >
        {children}
      </a>
      {open && (
        <span
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 p-4 deco-frame shadow-2xl text-left block"
        >
          <span className="block font-sans text-[11px] uppercase tracking-widest text-deco-gold font-semibold">
            {entity.lifespan} • {entity.mentionsCount} doc. no acervo
          </span>
          <span className="block font-display text-lg font-bold text-charcoal mt-0.5">
            {entity.name}
          </span>
          <span className="block font-sans text-xs text-deco-crimson font-medium mb-2">
            {entity.role[locale]}
          </span>
          <span className="block font-serif text-xs leading-relaxed text-charcoal-muted">
            {entity.summary[locale]}
          </span>
          <span className="mt-3 pt-2 border-t border-deco-burnished/30 flex items-center justify-between font-sans text-[11px] font-semibold text-deco-valencia">
            <span>Explorar dossiê onomástico →</span>
          </span>
        </span>
      )}
    </span>
  );
}

export default function DocumentViewerPage({
  initialLocale = 'pt',
}: {
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [activeTab, setActiveTab] = useState<'original' | 'pt' | 'va'>('original');
  const [zoom, setZoom] = useState<number>(100);
  const [filterMode, setFilterMode] = useState<
    'none' | 'facsimile-high-contrast' | 'facsimile-sepia-enhance' | 'facsimile-invert-manuscript'
  >('none');
  const [citationFormat, setCitationFormat] = useState<'ABNT' | 'APA' | 'CHICAGO' | 'MLA'>('ABNT');
  const [highlightedParagraph, setHighlightedParagraph] = useState<number | null>(2);

  const citations: Record<'ABNT' | 'APA' | 'CHICAGO' | 'MLA', string> = {
    ABNT: 'FONS, A. [ADELL Y FONS, José]. Carta de Madrid: O atentado de Paulino Pallás e entrevista com Fernando Tarrida del Mármol. La Unión Española, Rio de Janeiro, out. 1893 (datado de Madrid, 30 set. 1893). Acervo Digital & Memorial Histórico José Adell y Fons, doc. 047 (PDF 2, p. 23–24). Disponível em: <https://memorialjoseadell.org/pt/hemeroteca/periodicos-atuacao/imprensa-diaspora-brasil/entrevista-tarrida-del-marmol-1893>.',
    APA: 'Adell y Fons, J. [A. Fons]. (1893, 30 de setembro). Carta de Madrid: El atentado de Paulino Pallás y entrevista con F. Tarrida del Mármol. La Unión Española (Rio de Janeiro). Memorial José Adell y Fons (Doc. #047, PDF 2, pp. 23–24).',
    CHICAGO: 'Adell y Fons, José [A. Fons]. "Carta de Madrid (30 de septiembre de 1893): El atentado de Paulino Pallás y conversación con F. Tarrida del Mármol." La Unión Española (Rio de Janeiro), Outubro 1893. Acervo Digital José Adell y Fons, Doc. 047.',
    MLA: 'Adell y Fons, José. "Carta de Madrid (30 Sept. 1893)." La Unión Española [Rio de Janeiro], Oct. 1893. Memorial Histórico José Adell y Fons, Doc. 047, pp. 23–24.',
  };

  return (
    <div className="min-h-screen bg-parchment text-charcoal">
      {/* BARRA SUPERIOR INSTITUCIONAL & SELETOR TRILÍNGUE (PT | ES | VA) */}
      <header className="border-b-2 border-deco-burnished bg-parchment-elevated sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-deco-gold flex items-center justify-center bg-deco-valencia text-parchment font-insignia text-lg">
              JA
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-deco-gold font-semibold">
                Vinaròs (1868) • Barcelona • Rio de Janeiro • Bahia (1927)
              </p>
              <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                Memorial Histórico José Adell y Fons
              </h1>
            </div>
          </div>

          {/* Seletor de Idiomas Instantâneo com suporte hreflang */}
          <div className="flex items-center gap-2 font-sans text-xs">
            <span className="text-charcoal-muted hidden sm:inline mr-1">Idioma / Llengua:</span>
            {(['pt', 'es', 'va'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                aria-label={LOCALE_META[lang].name}
                className={`px-3 py-1.5 border transition-all font-semibold tracking-wider ${
                  locale === lang
                    ? 'bg-deco-valencia text-parchment border-deco-gold shadow-sm'
                    : 'bg-parchment-card text-charcoal border-deco-burnished/40 hover:border-deco-gold'
                }`}
              >
                {LOCALE_META[lang].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* BREADCRUMBS DE 4 NÍVEIS HIERÁRQUICOS (SCHEMA.ORG COMPATÍVEL) */}
      <nav
        aria-label="Breadcrumb"
        className="bg-parchment-card border-b border-deco-burnished/30 py-2.5 px-4 sm:px-6 font-sans text-xs"
      >
        <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-1.5 text-charcoal-muted">
          <li>
            <a href={`/${locale}`} className="hover:text-deco-valencia underline-offset-4 hover:underline">
              Início
            </a>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <a
              href={`/${locale}/hemeroteca`}
              className="hover:text-deco-valencia underline-offset-4 hover:underline"
            >
              1. Obra Jornalística (1886–1898)
            </a>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <a
              href={`/${locale}/hemeroteca/periodicos-atuacao`}
              className="hover:text-deco-valencia underline-offset-4 hover:underline"
            >
              1.1. Periódicos de Atuação
            </a>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li>
            <a
              href={`/${locale}/hemeroteca/periodicos-atuacao/imprensa-diaspora-brasil`}
              className="hover:text-deco-valencia underline-offset-4 hover:underline"
            >
              1.1.2. La Unión Española (Rio de Janeiro)
            </a>
          </li>
          <li aria-hidden="true" className="text-deco-gold">❖</li>
          <li className="font-semibold text-deco-crimson" aria-current="page">
            Doc. #047: Atentado na Gran Vía e Entrevista com F. Tarrida del Mármol (30 Set. 1893)
          </li>
        </ol>
      </nav>

      {/* CABEÇALHO DO DOCUMENTO DO ACERVO */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <article className="deco-frame p-6 sm:p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-deco-burnished/40 pb-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 font-sans text-xs">
              <span className="px-2.5 py-1 bg-deco-crimson text-parchment font-semibold uppercase tracking-wider">
                Crônica & Entrevista Histórica
              </span>
              <span className="px-2.5 py-1 border border-deco-burnished text-charcoal font-medium">
                Periódico: La Unión Española (Rio de Janeiro)
              </span>
              <span className="px-2.5 py-1 border border-deco-burnished text-charcoal font-medium">
                Data: 30 de Setembro de 1893
              </span>
              <span className="px-2.5 py-1 border border-deco-burnished text-charcoal font-medium">
                Cota: Documento.pdf (pp. 59–60)
              </span>
            </div>
            <div className="font-sans text-xs text-charcoal-muted">
              Assinatura no recorte: <strong className="text-charcoal">A. Fons (José Adell y Fons)</strong>
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-3">
            {locale === 'pt' &&
              'Carta de Madrid: O Atentado contra o General Martínez Campos e Conversa com o Anarquista Fernando Tarrida del Mármol'}
            {locale === 'es' &&
              'Carta de Madrid: El Atentado contra el General Martínez Campos y Conversación con el Anarquista Fernando Tarrida del Mármol'}
            {locale === 'va' &&
              'Carta de Madrid: L’Atemptat contra el General Martínez Campos i Conversa amb l’Anarquista Fernando Tarrida del Mármol'}
          </h2>

          <p className="font-serif text-base text-charcoal-muted leading-relaxed">
            Relato ocular e análise política escrita de Madrid para os leitores da colônia espanhola no Rio de Janeiro, detalhando o atentado a bombas de Orsini perpetrado por Paulino Pallás em Barcelona (24 de setembro de 1893) e registrando uma entrevista exclusiva com o engenheiro e teórico anarquista{' '}
            <WikiTooltip entityKey="tarrida-del-marmol" locale={locale}>
              Fernando Tarrida del Mármol
            </WikiTooltip>
            , antigo companheiro de redação de Adell no periódico livre-pensador <em>La Luz</em>.
          </p>
        </article>

        {/* LEITOR SINCRONIZADO SIDE-BY-SIDE (FAC-SÍMILE + TRANSCRIÇÃO/TRADUÇÃO) */}
        <section
          aria-label="Visualizador Sincronizado Fac-símile e Transcrição"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          {/* COLUNA ESQUERDA: FAC-SÍMILE ORIGINAL COM CONTROLES DE LUPA E CONTRASTE */}
          <div className="lg:col-span-6 deco-frame p-4 sm:p-5 sticky top-20">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-deco-burnished/40 font-sans text-xs">
              <div className="font-semibold uppercase tracking-wider text-deco-valencia dark:text-deco-gold">
                Fac-símile Original (Século XIX)
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setZoom((z) => Math.max(75, z - 25))}
                  className="px-2 py-1 border border-deco-burnished hover:bg-deco-goldLight/40"
                  title="Reduzir Zoom"
                >
                  −
                </button>
                <span className="px-2 font-mono">{zoom}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(200, z + 25))}
                  className="px-2 py-1 border border-deco-burnished hover:bg-deco-goldLight/40"
                  title="Ampliar Lupa"
                >
                  +
                </button>
                <select
                  aria-label="Filtro de legibilidade óptica"
                  value={filterMode}
                  onChange={(e) => setFilterMode(e.target.value as typeof filterMode)}
                  className="ml-2 px-2 py-1 border border-deco-burnished bg-parchment text-charcoal"
                >
                  <option value="none">Papel Original (1893)</option>
                  <option value="facsimile-high-contrast">Alto Contraste (Tinta Desbotada)</option>
                  <option value="facsimile-sepia-enhance">Sépia Editorial</option>
                  <option value="facsimile-invert-manuscript">Negativo (Realce de Manuscrito)</option>
                </select>
              </div>
            </div>

            {/* Simulação visual do recorte histórico sincronizado com os parágrafos */}
            <div className="overflow-auto max-h-[620px] border border-deco-burnished/50 bg-[#E5DAC3] p-6 text-[#2B261F]">
              <div
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
                className={`transition-transform duration-200 font-serif text-sm leading-snug space-y-4 ${filterMode}`}
              >
                <div className="text-center border-b-2 border-[#3A3227] pb-2 mb-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest block">
                    Recorte Hemerográfico • Coluna de Correspondência de Madrid
                  </span>
                  <h4 className="font-display text-lg font-bold tracking-wide">
                    LA UNIÓN ESPAÑOLA — MADRID, 30 DE SEPTIEMBRE, 1893
                  </h4>
                </div>

                <div
                  onClick={() => setHighlightedParagraph(1)}
                  className={`p-2 cursor-pointer transition-colors ${
                    highlightedParagraph === 1
                      ? 'bg-deco-gold/30 outline outline-2 outline-deco-crimson'
                      : 'hover:bg-deco-gold/15'
                  }`}
                >
                  <p className="text-justify">
                    [§ 1] El autor del atentado fué preso inmediatamente por guardias civiles y agentes de seguridad que tuvieron que luchar mucho para librarlo de las iras populares. Llámase Paulino Pallás, es oficial impresor, actualmente sin trabajo, y tiene mujer y tres hijos. Confesó su delito francamente lamentándose con cinismo por no haber podido matar al general como en el primer momento y al verle caer del caballo se figuró.
                  </p>
                </div>

                <div
                  onClick={() => setHighlightedParagraph(2)}
                  className={`p-2 cursor-pointer transition-colors ${
                    highlightedParagraph === 2
                      ? 'bg-deco-gold/30 outline outline-2 outline-deco-crimson'
                      : 'hover:bg-deco-gold/15'
                  }`}
                >
                  <p className="text-justify">
                    [§ 2] Deseando poder dar algunas informaciones exactas á los lectores de &ldquo;La Unión&rdquo; sobre los anarquistas catalanes aproveché para este objeto la estancia en ésta de uno de los más caracterizados miembros de dicho partido, con el cual me unen antiguos lazos de amistad contraídos cuando juntos redactábamos en los mismos periódicos aunque profesando sendas y opuestas ideas político-sociales. Llámase F. Tarrida y es una de las individualidades más simpáticas del anarquismo español. Joven aún, no cuenta más de 30 años, es un ingeniero distinguido y ha alcanzado justa popularidad entre las masas obreras como Director del periódico &ldquo;Acracia&rdquo; órgano del anarquismo científico, y como activo propagandista del libre-pensamiento cuyas ideas ha defendido denodadamente por las columnas de &ldquo;La Luz&rdquo; de aquella localidad y en los meetings en que ha tomado parte con Ramón Chies y Demófilo.
                  </p>
                </div>

                <div
                  onClick={() => setHighlightedParagraph(3)}
                  className={`p-2 cursor-pointer transition-colors ${
                    highlightedParagraph === 3
                      ? 'bg-deco-gold/30 outline outline-2 outline-deco-crimson'
                      : 'hover:bg-deco-gold/15'
                  }`}
                >
                  <p className="text-justify">
                    [§ 3] Según él, el partido anarquista vé aumentar día á día sus muchedumbres de un modo asombroso, por decididos creyentes en su mayoría disgregados de los partidos políticos extremos y que viendo impotentes las antiguas escuelas para resolver la pavorosa cuestión social acuden á la anarquía como la única solución para extirpar los legendarios males que aquejan al obrero en Europa.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-2 font-sans text-[11px] text-charcoal-muted">
              💡 Clique em qualquer parágrafo do recorte acima para sincronizar com a transcrição ao lado.
            </p>
          </div>

          {/* COLUNA DIREITA: TRANSCRIÇÃO DIPLOMÁTICA + TRADUÇÕES (PT-BR / VALENCIÀ) */}
          <div className="lg:col-span-6 deco-frame p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-deco-burnished/40">
              <div className="flex gap-1 font-sans text-xs">
                <button
                  onClick={() => setActiveTab('original')}
                  className={`px-3 py-1.5 font-semibold border ${
                    activeTab === 'original'
                      ? 'bg-deco-valencia text-parchment border-deco-gold'
                      : 'bg-parchment border-deco-burnished/40'
                  }`}
                >
                  Transcripción Original (ES - 1893)
                </button>
                <button
                  onClick={() => setActiveTab('pt')}
                  className={`px-3 py-1.5 font-semibold border ${
                    activeTab === 'pt'
                      ? 'bg-deco-valencia text-parchment border-deco-gold'
                      : 'bg-parchment border-deco-burnished/40'
                  }`}
                >
                  Tradução (PT-BR)
                </button>
                <button
                  onClick={() => setActiveTab('va')}
                  className={`px-3 py-1.5 font-semibold border ${
                    activeTab === 'va'
                      ? 'bg-deco-valencia text-parchment border-deco-gold'
                      : 'bg-parchment border-deco-burnished/40'
                  }`}
                >
                  Traducció (Valencià)
                </button>
              </div>
            </div>

            <div className="space-y-5 font-serif text-base leading-relaxed">
              {/* Parágrafo 1 */}
              <div
                onClick={() => setHighlightedParagraph(1)}
                className={`p-3.5 border-l-4 transition-all cursor-pointer ${
                  highlightedParagraph === 1
                    ? 'border-deco-crimson bg-deco-goldLight/25'
                    : 'border-deco-burnished/40 hover:bg-parchment-elevated'
                }`}
              >
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-deco-gold block mb-1">
                  Parágrafo [§ 1] • O atentado na Gran Vía de Barcelona
                </span>
                {activeTab === 'original' && (
                  <p>
                    El autor del atentado fué preso inmediatamente por guardias civiles y agentes de seguridad que tuvieron que luchar mucho para librarlo de las iras populares. Llámase <strong>Paulino Pallás</strong>, es oficial impresor, actualmente sin trabajo, y tiene mujer y tres hijos. Confesó su delito francamente lamentándose con cinismo por no haber podido matar al general <strong>Martínez Campos</strong> como en el primer momento y al verle caer del caballo se figuró.
                  </p>
                )}
                {activeTab === 'pt' && (
                  <p>
                    O autor do atentado foi preso imediatamente por guardas civis e agentes de segurança que tiveram de lutar muito para livrá-lo da ira popular. Chama-se <strong>Paulino Pallás</strong>, é oficial tipógrafo, atualmente desempregado, e tem esposa e três filhos. Confessou seu delito francamente, lamentando-se com cinismo por não ter conseguido matar o general <strong>Martínez Campos</strong> como no primeiro momento, ao vê-lo cair do cavalo, imaginou.
                  </p>
                )}
                {activeTab === 'va' && (
                  <p>
                    L’autor de l’atemptat fou pres immediatament per guàrdies civils i agents de seguretat que hagueren de lluitar molt per lliurar-lo de les ires populars. Es diu <strong>Paulino Pallás</strong>, és oficial impressor, actualment sense faena, i té dona i tres fills. Confessà el seu delicte francament lamentant-se amb cinisme per no haver pogut matar el general <strong>Martínez Campos</strong> com en el primer moment, en vore’l caure del cavall, es figurà.
                  </p>
                )}
              </div>

              {/* Parágrafo 2 */}
              <div
                onClick={() => setHighlightedParagraph(2)}
                className={`p-3.5 border-l-4 transition-all cursor-pointer ${
                  highlightedParagraph === 2
                    ? 'border-deco-crimson bg-deco-goldLight/25'
                    : 'border-deco-burnished/40 hover:bg-parchment-elevated'
                }`}
              >
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-deco-gold block mb-1">
                  Parágrafo [§ 2] • Encontro com Fernando Tarrida del Mármol e memória de &ldquo;La Luz&rdquo;
                </span>
                {activeTab === 'original' && (
                  <p>
                    Deseando poder dar algunas informaciones exactas á los lectores de <em>La Unión Española</em> sobre los anarquistas catalanes aproveché para este objeto la estancia en ésta de uno de los más caracterizados miembros de dicho partido, con el cual me unen antiguos lazos de amistad contraídos cuando juntos redactábamos en los mismos periódicos aunque profesando sendas y opuestas ideas político-sociales. Llámase{' '}
                    <WikiTooltip entityKey="tarrida-del-marmol" locale={locale}>
                      F. Tarrida del Mármol
                    </WikiTooltip>{' '}
                    y es una de las individualidades más simpáticas del anarquismo español. Joven aún, no cuenta más de 30 años, es un ingeniero distinguido y ha alcanzado justa popularidad entre las masas obreras como Director del periódico <em>Acracia</em>, órgano del anarquismo científico, y como activo propagandista del libre-pensamiento cuyas ideas ha defendido denodadamente por las columnas de <em>La Luz</em> de aquella localidad y en los meetings en que ha tomado parte con <strong>Ramón Chíes</strong> y <strong>Demófilo</strong>.
                  </p>
                )}
                {activeTab === 'pt' && (
                  <p>
                    Desejando poder dar algumas informações exatas aos leitores de <em>La Unión Española</em> sobre os anarquistas catalães, aproveitei para este objetivo a estada nesta capital de um dos mais caracterizados membros do referido partido, ao qual me unem antigos laços de amizade contraídos quando juntos redigíamos nos mesmos periódicos, embora professando distintas e opostas ideias político-sociais. Chama-se{' '}
                    <WikiTooltip entityKey="tarrida-del-marmol" locale={locale}>
                      F. Tarrida del Mármol
                    </WikiTooltip>{' '}
                    e é uma das individualidades mais simpáticas do anarquismo espanhol. Jovem ainda, não conta mais de 30 anos, é um engenheiro distinto e alcançou justa popularidade entre as massas operárias como Diretor do periódico <em>Acracia</em>, órgão do anarquismo científico, e como ativo propagandista do livre-pensamento, cujas ideias defendeu denodadamente pelas colunas de <em>La Luz</em> daquela localidade e nos comícios em que tomou parte com <strong>Ramón Chíes</strong> e <strong>Demófilo</strong>.
                  </p>
                )}
                {activeTab === 'va' && (
                  <p>
                    Desitjant poder donar algunes informacions exactes als lectors de <em>La Unión Española</em> sobre els anarquistes catalans, vaig aprofitar per a aquest objecte l’estada en aquesta capital d’un dels més caracteritzats membres de dit partit, amb el qual m’uneixen antics llaços d’amistat contrets quan junts redactàvem en els mateixos periòdics tot i professar idees político-socials oposades. Es diu{' '}
                    <WikiTooltip entityKey="tarrida-del-marmol" locale={locale}>
                      F. Tarrida del Mármol
                    </WikiTooltip>{' '}
                    i és una de les individualitats més simpàtiques de l’anarquisme espanyol. Jove encara, és un enginyer distingit i ha assolit justa popularitat entre les masses obreres com a Director del periòdic <em>Acracia</em> i com a actiu propagandista del lliurepensament a les columnes de <em>La Luz</em>.
                  </p>
                )}
              </div>

              {/* Parágrafo 3 */}
              <div
                onClick={() => setHighlightedParagraph(3)}
                className={`p-3.5 border-l-4 transition-all cursor-pointer ${
                  highlightedParagraph === 3
                    ? 'border-deco-crimson bg-deco-goldLight/25'
                    : 'border-deco-burnished/40 hover:bg-parchment-elevated'
                }`}
              >
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-deco-gold block mb-1">
                  Parágrafo [§ 3] • O diagnóstico sobre a Questão Social na Europa
                </span>
                {activeTab === 'original' && (
                  <p>
                    Según él, el partido anarquista vé aumentar día á día sus muchedumbres de un modo asombroso, por decididos creyentes en su mayoría disgregados de los partidos políticos extremos y que viendo impotentes las antiguas escuelas para resolver la pavorosa cuestión social acuden á la anarquía como la única solución para extirpar los legendarios males que aquejan al obrero en Europa.
                  </p>
                )}
                {activeTab === 'pt' && (
                  <p>
                    Segundo ele, o partido anarquista vê aumentar dia a dia suas multidões de um modo assombroso, formadas por crentes decididos, em sua maioria desagregados dos partidos políticos extremos e que, vendo impotentes as antigas escolas para resolver a pavorosa questão social, acorrem à anarquia como a única solução para extirpar os lendários males que afligem o operário na Europa.
                  </p>
                )}
                {activeTab === 'va' && (
                  <p>
                    Segons ell, el partit anarquista veu augmentar dia a dia les seues multituds d’una manera sorprenent, per decidits creients en la seua majoria disgregats dels partits polítics extrems i que, veient impotents les antigues escoles per a resoldre la pavorosa qüestió social, acudeixen a l’anarquia com l’única solució per a extirpar els llegendaris mals que afligeixen l’obrer a Europa.
                  </p>
                )}
              </div>
            </div>

            {/* GERADOR AUTOMÁTICO DE CITAÇÃO ACADÊMICA */}
            <div className="mt-8 pt-6 border-t-2 border-deco-burnished/40">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-deco-valencia">
                  🎓 Gerador Automático de Citação Acadêmica
                </h3>
                <div className="flex gap-1 font-sans text-xs">
                  {(['ABNT', 'APA', 'CHICAGO', 'MLA'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setCitationFormat(fmt)}
                      className={`px-2.5 py-1 border font-semibold ${
                        citationFormat === fmt
                          ? 'bg-deco-gold text-parchment border-deco-gold'
                          : 'border-deco-burnished/40 text-charcoal'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-parchment-elevated border border-deco-burnished/50 font-mono text-xs text-charcoal select-all">
                {citations[citationFormat]}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
