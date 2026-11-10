import { SITE_URL } from '@/lib/site-config';

export function getMemorialJsonLd() {
  const BASE = SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${BASE}/#jose-adell-y-fons`,
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
            name: 'Jornalista, Escritor e Diretor de La Unión Española',
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
        children: [
          { '@type': 'Person', name: 'Josefina Adell Vallespí' },
          { '@type': 'Person', name: 'Alberto Adell Vallespí' },
          { '@type': 'Person', name: 'José (Pepín) Adell Vallespí' },
        ],
        sibling: {
          '@type': 'Person',
          '@id': `${BASE}/#alberto-adell-y-fons`,
          name: 'Alberto Adell y Fons',
          description:
            'Pianista e violinista prodígio nascido em Vinaròs, nomeado professor auxiliar na Escuela de Ciegos y Sordo-Mudos de Barcelona aos 18 anos em 1889.',
        },
        knows: [
          {
            '@type': 'Person',
            '@id': `${BASE}/#adolfo-morales-de-los-rios`,
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
        '@id': `${BASE}/#acervo-completo`,
        name: 'Memorial Humano y Archivo Completo José Adell y Fons (1868–1927)',
        url: `${BASE}/es/acervo/`,
        inLanguage: ['es-ES', 'ca-valencia', 'pt-BR'],
        about: { '@id': `${BASE}/#jose-adell-y-fons` },
        numberOfItems: 72,
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
        '@id': `${BASE}/#medalha-campos-sales-1900`,
        name: 'Medalha Comemorativa Oficial da Visita do Presidente Campos Sales à República Argentina (1900)',
        creator: { '@id': `${BASE}/#jose-adell-y-fons` },
        dateCreated: '1900',
        artMedium: 'Gravação artística em metal',
        artform: 'Medalhística Oficial da Presidência da República',
      },
    ],
  };
}
