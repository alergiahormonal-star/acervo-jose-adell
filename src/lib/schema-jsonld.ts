export function getMemorialJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://memorialjoseadell.org/#jose-adell-y-fons',
        name: 'José Adell y Fons',
        alternateName: ['Pepe Adell', 'J. Adell y Fons', 'A. Fons', 'J. Adell'],
        birthDate: '1868-02-10',
        birthPlace: {
          '@type': 'Place',
          name: 'Vinaròs, Castellón, Comunidade Valenciana, Espanha',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Vinaròs',
            addressRegion: 'Castellón',
            addressCountry: 'ES',
          },
        },
        deathDate: '1927-05-12',
        deathPlace: {
          '@type': 'Place',
          name: 'Salvador, Bahia, Brasil',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Salvador',
            addressRegion: 'BA',
            addressCountry: 'BR',
          },
        },
        hasOccupation: [
          {
            '@type': 'Occupation',
            name: 'Jornalista e Diretor de Periódico (La Unión Española)',
          },
          {
            '@type': 'Occupation',
            name: 'Mestre Gravador em Metal e Medalhista',
          },
        ],
        spouse: {
          '@type': 'Person',
          name: 'Emilia Vallespí de Adell',
          birthDate: '1870-01-01',
          deathDate: '1903-09-05',
        },
        sibling: {
          '@type': 'Person',
          '@id': 'https://memorialjoseadell.org/#alberto-adell-y-fons',
          name: 'Alberto Adell y Fons',
          description:
            'Pianista e violinista prodígio nascido em Vinaròs, nomeado professor auxiliar na Escuela de Ciegos y Sordo-Mudos de Barcelona aos 18 anos em 1889.',
        },
        knows: [
          {
            '@type': 'Person',
            '@id': 'https://memorialjoseadell.org/#adolfo-morales-de-los-rios',
            name: 'Adolfo Morales de los Ríos',
            sameAs: 'https://www.wikidata.org/wiki/Q9583606',
          },
          {
            '@type': 'Person',
            name: 'Fernando Tarrida del Mármol',
            sameAs: 'https://www.wikidata.org/wiki/Q2628258',
          },
        ],
      },
      {
        '@type': ['Collection', 'ArchiveComponent'],
        '@id': 'https://memorialjoseadell.org/#acervo-completo',
        name: 'Acervo Digital & Memorial Histórico José Adell y Fons (1868–1927)',
        inLanguage: ['pt-BR', 'es-ES', 'ca-valencia'],
        about: { '@id': 'https://memorialjoseadell.org/#jose-adell-y-fons' },
        numberOfItems: 89,
        temporalCoverage: '1885/1927',
        spatialCoverage: [
          'Vinaròs, Espanha',
          'Barcelona, Espanha',
          'Madrid, Espanha',
          'Rio de Janeiro, Brasil',
          'Salvador, Bahia, Brasil',
        ],
      },
      {
        '@type': 'VisualArtwork',
        '@id': 'https://memorialjoseadell.org/#medalha-campos-sales-1900',
        name: 'Medalha Comemorativa Oficial da Visita do Presidente Campos Sales à República Argentina (1900)',
        creator: { '@id': 'https://memorialjoseadell.org/#jose-adell-y-fons' },
        dateCreated: '1900',
        artMedium: 'Gravação artística em metal / Cunhagem comemorativa',
        artform: 'Medalhística e Numismática Oficial',
      },
      {
        '@type': ['NewsArticle', 'ScholarlyArticle'],
        '@id': 'https://memorialjoseadell.org/pt/hemeroteca/periodicos-atuacao/imprensa-diaspora-brasil/entrevista-tarrida-del-marmol-1893#article',
        headline:
          'Carta de Madrid (30 de Setembro de 1893): O Atentado contra o General Martínez Campos e Conversa com Fernando Tarrida del Mármol',
        datePublished: '1893-10-15',
        author: { '@id': 'https://memorialjoseadell.org/#jose-adell-y-fons' },
        publisher: {
          '@type': 'Organization',
          name: 'Periódico La Unión Española (Rio de Janeiro)',
        },
        isPartOf: { '@id': 'https://memorialjoseadell.org/#acervo-completo' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://memorialjoseadell.org/pt/hemeroteca/periodicos-atuacao/imprensa-diaspora-brasil/entrevista-tarrida-del-marmol-1893#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Obra Jornalística e Crônicas Políticas (1886–1898)',
            item: 'https://memorialjoseadell.org/pt/hemeroteca',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Periódicos de Atuação',
            item: 'https://memorialjoseadell.org/pt/hemeroteca/periodicos-atuacao',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Imprensa da Diáspora no Brasil (La Unión Española)',
            item: 'https://memorialjoseadell.org/pt/hemeroteca/periodicos-atuacao/imprensa-diaspora-brasil',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Atentado na Gran Vía e Entrevista com Fernando Tarrida del Mármol (1893)',
            item: 'https://memorialjoseadell.org/pt/hemeroteca/periodicos-atuacao/imprensa-diaspora-brasil/entrevista-tarrida-del-marmol-1893',
          },
        ],
      },
    ],
  };
}
