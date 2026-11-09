export type Locale = 'pt' | 'es' | 'va';

export const LOCALE_META: Record<
  Locale,
  { label: string; hreflang: string; name: string; flagCode: string }
> = {
  pt: {
    label: 'PT-BR',
    hreflang: 'pt-BR',
    name: 'Português (Brasil)',
    flagCode: 'BR',
  },
  es: {
    label: 'ES',
    hreflang: 'es-ES',
    name: 'Español (Castellano)',
    flagCode: 'ES',
  },
  va: {
    label: 'VA',
    hreflang: 'ca-valencia',
    name: 'Valencià (Vinaròs)',
    flagCode: 'VA',
  },
};

export interface TaxonomyCategory {
  id: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  subcategories: {
    id: string;
    slug: Record<Locale, string>;
    title: Record<Locale, string>;
    microcategories: {
      id: string;
      slug: Record<Locale, string>;
      title: Record<Locale, string>;
      tags: string[];
    }[];
  }[];
}

export const TAXONOMY_TREE: TaxonomyCategory[] = [
  {
    id: 'cat-1',
    slug: { pt: 'hemeroteca', es: 'hemeroteca', va: 'hemeroteca' },
    title: {
      pt: 'Obra Jornalística e Crônicas Políticas (1886–1898)',
      es: 'Obra Periodística y Crónicas Políticas (1886–1898)',
      va: 'Obra Periodística i Cròniques Polítiques (1886–1898)',
    },
    subcategories: [
      {
        id: 'sub-1-1',
        slug: {
          pt: 'periodicos-atuacao',
          es: 'periodicos-actuacion',
          va: 'periodics-actuacio',
        },
        title: {
          pt: 'Periódicos de Atuação',
          es: 'Periódicos de Actuación',
          va: 'Periòdics d’Actuació',
        },
        microcategories: [
          {
            id: 'mic-1-1-1',
            slug: {
              pt: 'imprensa-espanha',
              es: 'prensa-espana',
              va: 'premsa-espanya',
            },
            title: {
              pt: 'Imprensa na Espanha (La Luz, El Sufragio Universal)',
              es: 'Prensa en España (La Luz, El Sufragio Universal)',
              va: 'Premsa a Espanya (La Luz, El Sufragio Universal)',
            },
            tags: ['La Luz', 'El Sufragio Universal', 'Barcelona', 'Madrid', 'El Fantasma'],
          },
          {
            id: 'mic-1-1-2',
            slug: {
              pt: 'imprensa-diaspora-brasil',
              es: 'prensa-diaspora-brasil',
              va: 'premsa-diaspora-brasil',
            },
            title: {
              pt: 'Imprensa da Diáspora no Brasil (La Unión Española, Correo de España)',
              es: 'Prensa de la Diáspora en Brasil (La Unión Española, Correo de España)',
              va: 'Premsa de la Diàspora al Brasil (La Unión Española, Correo de España)',
            },
            tags: ['La Unión Española', 'Correo de España', 'Rio de Janeiro', 'Rua da Ajuda'],
          },
          {
            id: 'mic-1-1-3',
            slug: {
              pt: 'embates-imprensa-luso-brasileira',
              es: 'debates-prensa-luso-brasilena',
              va: 'debats-premsa-luso-brasilera',
            },
            title: {
              pt: 'Embates com a Imprensa Luso-Brasileira',
              es: 'Debates con la Prensa Luso-Brasileña',
              va: 'Debats amb la Premsa Luso-Brasilera',
            },
            tags: ['O Paiz', 'A Notícia', 'A Tribuna', 'União Portugueza', 'L’Écho du Brésil'],
          },
        ],
      },
      {
        id: 'sub-1-2',
        slug: {
          pt: 'eixos-tematicos',
          es: 'ejes-tematicos',
          va: 'eixos-tematics',
        },
        title: {
          pt: 'Eixos Temáticos e Ideológicos',
          es: 'Ejes Temáticos e Ideológicos',
          va: 'Eixos Temàtics i Ideològics',
        },
        microcategories: [
          {
            id: 'mic-1-2-1',
            slug: {
              pt: 'republicanismo-restauracao-borbonica',
              es: 'republicanismo-restauracion-borbonica',
              va: 'republicanisme-restauracio-borbonica',
            },
            title: {
              pt: 'Republicanismo Espanhol e Restauração Borbônica',
              es: 'Republicanismo Español y Restauración Borbónica',
              va: 'Republicanisme Espanyol i Restauració Borbònica',
            },
            tags: ['Emilio Castelar', 'Pi y Margall', 'Ruiz Zorrilla', 'Cánovas del Castillo', 'Sagasta'],
          },
          {
            id: 'mic-1-2-2',
            slug: {
              pt: 'conflitos-coloniais-crise-1898',
              es: 'conflictos-coloniales-crisis-1898',
              va: 'conflictes-colonials-crisi-1898',
            },
            title: {
              pt: 'Conflitos Coloniais e a Crise de 1898 (Cuba e Filipinas)',
              es: 'Conflictos Coloniales y la Crisis de 1898 (Cuba y Filipinas)',
              va: 'Conflictes Colonials i la Crisi de 1898 (Cuba i Filipines)',
            },
            tags: ['Guerra de Cuba', 'Filipinas', 'Desastre del 98', 'José Rizal', 'Acorazado Maine'],
          },
          {
            id: 'mic-1-2-3',
            slug: {
              pt: 'movimento-operario-anarquismo-livre-pensamento',
              es: 'movimiento-obrero-anarquismo-librepensamiento',
              va: 'moviment-obrer-anarquisme-lliurepensament',
            },
            title: {
              pt: 'Movimento Operário, Anarquismo e Livre-Pensamento',
              es: 'Movimiento Obrero, Anarquismo y Librepensamiento',
              va: 'Moviment Obrer, Anarquisme i Lliurepensament',
            },
            tags: ['Fernando Tarrida del Mármol', 'Paulino Pallás', 'Sadi Carnot', 'Anticlericalismo', 'Proletariado'],
          },
        ],
      },
    ],
  },
  {
    id: 'cat-2',
    slug: {
      pt: 'arte-gravura-numismatica',
      es: 'arte-grabado-numismatica',
      va: 'art-gravat-numismatica',
    },
    title: {
      pt: 'Arte, Gravura em Metal e Numismática',
      es: 'Arte, Grabado en Metal y Numismática',
      va: 'Art, Gravat en Metall i Numismàtica',
    },
    subcategories: [
      {
        id: 'sub-2-1',
        slug: {
          pt: 'obra-medalhistica',
          es: 'obra-medallistica',
          va: 'obra-medallistica',
        },
        title: {
          pt: 'Obra Medalhística e Gravura Artística',
          es: 'Obra Medallística y Grabado Artístico',
          va: 'Obra Medallística i Gravat Artístic',
        },
        microcategories: [
          {
            id: 'mic-2-1-1',
            slug: {
              pt: 'medalha-campos-sales-argentina-1900',
              es: 'medalla-campos-sales-argentina-1900',
              va: 'medalla-campos-sales-argentina-1900',
            },
            title: {
              pt: 'Medalha Oficial da Visita de Campos Sales à Argentina (1900)',
              es: 'Medalla Oficial de la Visita de Campos Sales a Argentina (1900)',
              va: 'Medalla Oficial de la Visita de Campos Sales a l’Argentina (1900)',
            },
            tags: ['Campos Sales', 'Julio Argentino Roca', 'Numismática', '1900', 'Gravura em Metal'],
          },
        ],
      },
      {
        id: 'sub-2-2',
        slug: {
          pt: 'circulo-belas-artes-rio',
          es: 'circulo-bellas-artes-rio',
          va: 'cercle-belles-arts-rio',
        },
        title: {
          pt: 'Círculo de Belas Artes e Arquitetura no Rio Antigo',
          es: 'Círculo de Bellas Artes y Arquitectura en el Río Antiguo',
          va: 'Cercle de Belles Arts i Arquitectura al Rio Antic',
        },
        microcategories: [
          {
            id: 'mic-2-2-1',
            slug: {
              pt: 'dossie-adolfo-morales-de-los-rios',
              es: 'dossier-adolfo-morales-de-los-rios',
              va: 'dossier-adolfo-morales-de-los-rios',
            },
            title: {
              pt: 'Dossiê Adolfo Morales de los Ríos e Tertúlias da Rua da Ajuda',
              es: 'Dossier Adolfo Morales de los Ríos y Tertulias de la Rua da Ajuda',
              va: 'Dossier Adolfo Morales de los Ríos i Tertúlies de la Rua da Ajuda',
            },
            tags: ['Adolfo Morales de los Ríos', 'MNBA', 'Rua da Ajuda', 'Pepe Adell'],
          },
        ],
      },
    ],
  },
];
