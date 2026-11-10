export type SiteLang = 'es' | 'va' | 'pt';

export const SUPPORTED_LANGS: SiteLang[] = ['es', 'va', 'pt'];

export interface UIMessages {
  langCode: string;
  langLabel: string;
  brandTop: string;
  brandTitle: string;
  navHome: string;
  navStories: string;
  navFamily: string;
  navArchive: string;
  navNotebook: string;
  heroBadge: string;
  heroTitle: string;
  heroLead: string;
  heroQuote: string;
  heroQuoteAuthor: string;
  btnReadStories: string;
  btnExploreArchive: string;
  btnFlipNotebook: string;
  signatureCaption: string;
  statWorks: string;
  statPages: string;
  statYears: string;
  bornLabel: string;
  bornText: string;
  citiesLabel: string;
  citiesText: string;
  diedLabel: string;
  diedText: string;
  storiesKicker: string;
  storiesTitle: string;
  storiesSubtitle: string;
  storyPagesIncluded: string;
  storyReadFull: string;
  familyKicker: string;
  familyTitle: string;
  familySubtitle: string;
  familyFacsimileLabel: string;
  familyViewPageBtn: string;
  catalogKicker: string;
  catalogTitle: string;
  catalogSubtitle: string;
  searchPlaceholder: string;
  allSources: string;
  allWorksBtn: string;
  showingCount: string;
  clearFilters: string;
  featuredBadge: string;
  originalTitleLabel: string;
  readAndViewBtn: string;
  viewerOriginalBadge: string;
  viewerPageOf: string;
  viewerColorOriginal: string;
  viewerHighContrast: string;
  viewerSepia: string;
  viewerInvert: string;
  viewerFullScreen: string;
  viewerPagesInDoc: string;
  workContextTitle: string;
  workExcerptTitle: string;
  workTranslationLabel: string;
  workCiteTitle: string;
  workCopyCite: string;
  workCopied: string;
  prevWork: string;
  nextWork: string;
  viewAllWorks: string;
  proofKicker: string;
  proofTitle: string;
  relatedRecordsTitle: string;
  openRecordLink: string;
  moreStoriesTitle: string;
  notebookKicker: string;
  notebookTitle: string;
  notebookSubtitle: string;
  prevPage: string;
  nextPage: string;
  goToPage: string;
  worksOnPageTitle: string;
  quickGridTitle: string;
  footerDedicated: string;
  footerNavTitle: string;
  footerSeoTitle: string;
  footerSeoDesc: string;
  footerMotto: string;
}

export const UI_STRINGS: Record<SiteLang, UIMessages> = {
  es: {
    langCode: 'es-ES',
    langLabel: 'Castellano',
    brandTop: 'Vinaròs (1868) • Barcelona • Río de Janeiro • Bahía (1927)',
    brandTitle: 'Memorial Humano y Archivo José Adell',
    navHome: 'El Alma de Pepe',
    navStories: '6 Historias Conmovedoras',
    navFamily: 'Familia y Afectos',
    navArchive: 'Archivo Completo (72 Obras)',
    navNotebook: 'Las 89 Páginas Originales',
    heroBadge: 'Memoria Viva de Vinaròs, Valencia, España y Brasil',
    heroTitle: 'Pepe Adell: La Sonrisa como Escudo, la Pluma como Justicia y el Buril como Arte',
    heroLead:
      'Detrás del brillante periodista republicano y del maestro grabador elegido por la Presidencia de Brasil latía un ser humano extraordinario: el hijo autodidacta de Vinaròs orgulloso de su hermano ciego violinista; el esposo que lloró ante cuarenta carruajes al perder a su amada Emilia junto a sus pequeños Josefina, Alberto y Pepín; el redactor herido de una pedrada en la cabeza en las calles de Río en 1895 sin perder jamás la ternura.',
    heroQuote:
      '«Éramos todos así, risueños, alegres: porque intuitivamente seguíamos aquella máxima de Pepe Adell que dice: “Más vale hablar de cosas risueñas, que escribir sobre lágrimas.”»',
    heroQuoteAuthor:
      '— Adolfo Morales de los Ríos, arquitecto del Museo de Bellas Artes, en su carta de adiós al amigo (1927)',
    btnReadStories: 'Leer las 6 Historias Conmovedoras ↓',
    btnExploreArchive: 'Explorar las 72 Obras Completas →',
    btnFlipNotebook: 'Hojear las 89 Páginas Originales',
    signatureCaption: 'Firma Autógrafa Original de José Adell (Página 28 del Archivo)',
    statWorks: 'Obras y Cartas',
    statPages: 'Páginas Reales',
    statYears: 'Años de Vida',
    bornLabel: '★ Nacimiento:',
    bornText: '10 de febrero de 1868, Vinaròs (Castellón, Comunidad Valenciana, España).',
    citiesLabel: '✦ Ciudades de Vida:',
    citiesText: 'Vinaròs, Barcelona, Madrid, Río de Janeiro (Rua da Ajuda) y Salvador de Bahía.',
    diedLabel: '† Despedida:',
    diedText: '12 de mayo de 1927, Salvador de Bahía — maestro grabador ejemplar y amigo leal.',
    storiesKicker: 'Crónicas Biográficas Especiales • Inspiradas en los Recortes Originales',
    storiesTitle: 'Hechos Conmovedores, Curiosos e Inolvidables de la Vida de Pepe Adell',
    storiesSubtitle:
      'Adéntrese en las seis grandes narraciones humanas guardadas durante más de un siglo en periódicos amarillentos, cada una acompañada de sus páginas originales escaneadas.',
    storyPagesIncluded: 'Incluye facsímiles de las págs.',
    storyReadFull: 'Leer Historia Completa →',
    familyKicker: 'Álbum Íntimo • Lazos de Sangre y Amistad',
    familyTitle: 'La Familia Adell y los Corazones que Caminaron con Él',
    familySubtitle:
      'Seleccione a cada miembro de la familia y amigo leal para conocer su historia humana y contemplar los documentos originales conservados.',
    familyFacsimileLabel: 'Facsímil vinculado: Págs.',
    familyViewPageBtn: 'Ver Página Original',
    catalogKicker: 'Archivo Integral Catalogado • 72 Obras y Documentos • 89 Páginas',
    catalogTitle: 'Todas las Obras, Crónicas, Polémicas y Memorias Familiares',
    catalogSubtitle:
      'Cada artículo, columna, carta y nota necrológica publicada entre 1885 y 1927 ha sido catalogado individualmente y vinculado a su imagen original escaneada.',
    searchPlaceholder: 'Buscar por Emilia, Morales, pedrada, Barcelona, Castelar, Tarrida, Campos Sales, Málaga, Vinaròs...',
    allSources: 'Todas las Fuentes y Periódicos (72)',
    allWorksBtn: 'Todas las Obras',
    showingCount: 'obras y documentos históricos mostrados.',
    clearFilters: 'Limpiar filtros ✕',
    featuredBadge: '★ Destaque Humano',
    originalTitleLabel: 'Título original en el recorte:',
    readAndViewBtn: 'Leer y Ver Original →',
    viewerOriginalBadge: '📜 Recorte Original Digitalizado',
    viewerPageOf: 'del Cuaderno Histórico Familiar (89 págs.)',
    viewerColorOriginal: 'Color Original del Papel',
    viewerHighContrast: 'Nitidez de Tinta (Alto Contraste)',
    viewerSepia: 'Sepia Clásico',
    viewerInvert: 'Negativo (Leer Manuscritos)',
    viewerFullScreen: 'Pantalla Completa ↗',
    viewerPagesInDoc: 'Páginas de este documento',
    workContextTitle: '❤ Contexto Humano e Histórico',
    workExcerptTitle: '✒ Pasaje Destacado del Original',
    workTranslationLabel: 'Nota / Traducción Contextual:',
    workCiteTitle: '🎓 Cómo Citar este Documento',
    workCopyCite: 'Copiar Referencia Bibliográfica',
    workCopied: '✓ ¡Cita Copiada!',
    prevWork: '← Obra Anterior',
    nextWork: 'Siguiente Obra →',
    viewAllWorks: 'Ver las 72 Obras',
    proofKicker: 'Prueba Documental Digitalizada',
    proofTitle: 'Contemple con Sus Propios Ojos los Recortes Originales de esta Historia',
    relatedRecordsTitle: 'Fichas Documentales Relacionadas en el Archivo:',
    openRecordLink: 'Abrir ficha documental y cita →',
    moreStoriesTitle: 'Continúe Leyendo Otras Historias Conmovedoras de Pepe Adell:',
    notebookKicker: 'Álbum Documental Íntegro • Páginas 1 a 89',
    notebookTitle: 'Hojear el Cuaderno Original de José Adell y Fons',
    notebookSubtitle:
      'Recorra página por página los 89 facsímiles originales conservados durante más de un siglo y descubra qué obras aparecen en cada hoja.',
    prevPage: '← Página Anterior',
    nextPage: 'Página Siguiente →',
    goToPage: 'Ir a página:',
    worksOnPageTitle: '📌 Obras Identificadas en esta Página',
    quickGridTitle: 'Índice Rápido de las 89 Páginas (Enlace Directo SEO)',
    footerDedicated:
      'Dedicado a la memoria humana, familiar, periodística y artística de José Adell y Fons (“Pepe Adell”), de su amada esposa Doña Emilia Vallespí de Adell (1870–1903), de sus hijos Josefina, Alberto y Pepín, de su hermano prodigio Alberto Adell y Fons y de sus amigos de la Rua da Ajuda.',
    footerNavTitle: 'Navegación Completa del Memorial',
    footerSeoTitle: 'Indexación Multilingüe y Datos Abiertos',
    footerSeoDesc:
      '72 obras individuales, 12 dossieres de personalidades, informe del legado vivo y 89 páginas originales indexadas en Castellano, Valencià y Português (550 URLs activas).',
    footerMotto:
      '«Más vale hablar de cosas risueñas, que escribir sobre lágrimas.» — Memorial Histórico y Familiar José Adell y Fons',
  },
  va: {
    langCode: 'ca-valencia',
    langLabel: 'Valencià',
    brandTop: 'Vinaròs (1868) • Barcelona • Rio de Janeiro • Bahia (1927)',
    brandTitle: 'Memorial Humà i Arxiu José Adell',
    navHome: 'L’Ànima de Pepe',
    navStories: '6 Històries Colpidores',
    navFamily: 'Família i Afectes',
    navArchive: 'Arxiu Complet (72 Obres)',
    navNotebook: 'Les 89 Pàgines Originals',
    heroBadge: 'Memòria Viva de Vinaròs, la Comunitat Valenciana, Espanya i el Brasil',
    heroTitle: 'Pepe Adell: El Somriure com a Escut, la Ploma com a Justícia i el Burí com a Art',
    heroLead:
      'Darrere del brillant periodista republicà i del mestre gravador elegit per la Presidència del Brasil bategava un ésser humà extraordinari: el fill autodidacte de Vinaròs orgullós del seu germà cec violinista; l’espòs que plorà davant de quaranta carruatges en perdre la seua estimada Emilia al costat dels menuts Josefina, Alberto i Pepín; el redactor ferit d’una pedrada al cap als carrers de Rio el 1895 sense perdre mai la tendresa.',
    heroQuote:
      '«Érem tots així, riallers, alegres: perquè intuïtivament seguíem aquella màxima de Pepe Adell que diu: “Més val parlar de coses rialleres que escriure sobre llàgrimes.”»',
    heroQuoteAuthor:
      '— Adolfo Morales de los Ríos, arquitecte del Museu de Belles Arts, en la seua carta d’adeu a l’amic (1927)',
    btnReadStories: 'Llegir les 6 Històries Colpidores ↓',
    btnExploreArchive: 'Explorar les 72 Obres Completes →',
    btnFlipNotebook: 'Fullejar les 89 Pàgines Originals',
    signatureCaption: 'Signatura Autògrafa Original de José Adell (Pàgina 28 de l’Arxiu)',
    statWorks: 'Obres i Cartes',
    statPages: 'Pàgines Reals',
    statYears: 'Anys de Vida',
    bornLabel: '★ Naixement:',
    bornText: '10 de febrer de 1868, Vinaròs (Castelló, Comunitat Valenciana, Espanya).',
    citiesLabel: '✦ Ciutats de Vida:',
    citiesText: 'Vinaròs, Barcelona, Madrid, Rio de Janeiro (Rua da Ajuda) i Salvador de Bahia.',
    diedLabel: '† Comiat:',
    diedText: '12 de maig de 1927, Salvador de Bahia — mestre gravador exemplar i amic lleial.',
    storiesKicker: 'Cròniques Biogràfiques Especials • Inspirades en els Retalls Originals',
    storiesTitle: 'Fets Colpidors, Curiosos i Inoblidables de la Vida de Pepe Adell',
    storiesSubtitle:
      'Endinseu-vos en les sis grans narracions humanes guardades durant més d’un segle en periòdics engroguits, cadascuna acompanyada de les seues pàgines originals escanejades.',
    storyPagesIncluded: 'Inclou facsímils de les pàgs.',
    storyReadFull: 'Llegir Història Completa →',
    familyKicker: 'Àlbum Íntim • Llaços de Sang i Amistat',
    familyTitle: 'La Família Adell i els Cors que Caminaren amb Ell',
    familySubtitle:
      'Seleccioneu cada membre de la família i amic lleial per conéixer la seua història humana i contemplar els documents originals conservats.',
    familyFacsimileLabel: 'Facsímil vinculat: Pàgs.',
    familyViewPageBtn: 'Vore Pàgina Original',
    catalogKicker: 'Arxiu Integral Catalogat • 72 Obres i Documents • 89 Pàgines',
    catalogTitle: 'Totes les Obres, Cròniques, Polèmiques i Memòries Familiars',
    catalogSubtitle:
      'Cada article, columna, carta i nota necrològica publicada entre 1885 i 1927 ha segut catalogat individualment i vinculat a la seua imatge original escanejada.',
    searchPlaceholder: 'Buscar per Emilia, Morales, pedrada, Barcelona, Castelar, Tarrida, Campos Sales, Málaga, Vinaròs...',
    allSources: 'Totes les Fonts i Periòdics (72)',
    allWorksBtn: 'Totes les Obres',
    showingCount: 'obres i documents històrics mostrats.',
    clearFilters: 'Netejar filtres ✕',
    featuredBadge: '★ Destacat Humà',
    originalTitleLabel: 'Títol original al retall:',
    readAndViewBtn: 'Llegir i Vore Original →',
    viewerOriginalBadge: '📜 Retall Original Digitalitzat',
    viewerPageOf: 'del Quadern Històric Familiar (89 pàgs.)',
    viewerColorOriginal: 'Color Original del Paper',
    viewerHighContrast: 'Nitidesa de Tinta (Alt Contrast)',
    viewerSepia: 'Sèpia Clàssic',
    viewerInvert: 'Negatiu (Llegir Manuscrits)',
    viewerFullScreen: 'Pantalla Completa ↗',
    viewerPagesInDoc: 'Pàgines d’aquest document',
    workContextTitle: '❤ Context Humà i Històric',
    workExcerptTitle: '✒ Passatge Destacat de l’Original',
    workTranslationLabel: 'Traducció en Valencià:',
    workCiteTitle: '🎓 Com Citar aquest Document',
    workCopyCite: 'Copiar Referència Bibliogràfica',
    workCopied: '✓ Citació Copiada!',
    prevWork: '← Obra Anterior',
    nextWork: 'Obra Següent →',
    viewAllWorks: 'Vore les 72 Obres',
    proofKicker: 'Prova Documental Digitalitzada',
    proofTitle: 'Contempleu amb els Vostres Propis Ulls els Retalls Originals d’aquesta Història',
    relatedRecordsTitle: 'Fitxes Documentals Relacionades a l’Arxiu:',
    openRecordLink: 'Obrir fitxa documental i citació →',
    moreStoriesTitle: 'Continueu Llegint Altres Històries Colpidores de Pepe Adell:',
    notebookKicker: 'Àlbum Documental Íntegre • Pàgines 1 a 89',
    notebookTitle: 'Fullejar el Quadern Original de José Adell y Fons',
    notebookSubtitle:
      'Recorreu pàgina per pàgina els 89 facsímils originals conservats durant més d’un segle i descobriu quines obres apareixen en cada full.',
    prevPage: '← Pàgina Anterior',
    nextPage: 'Pàgina Següent →',
    goToPage: 'Anar a la pàgina:',
    worksOnPageTitle: '📌 Obres Identificades en aquesta Pàgina',
    quickGridTitle: 'Índex Ràpid de les 89 Pàgines (Enllaç Directe SEO)',
    footerDedicated:
      'Dedicat a la memòria humana, familiar, periodística i artística de José Adell y Fons (“Pepe Adell”), de la seua estimada esposa Doña Emilia Vallespí de Adell (1870–1903), dels seus fills Josefina, Alberto i Pepín, del seu germà prodigi Alberto Adell y Fons i dels amics de la Rua da Ajuda.',
    footerNavTitle: 'Navegació Completa del Memorial',
    footerSeoTitle: 'Indexació Multilingüe i Dades Obertes',
    footerSeoDesc:
      '72 obres individuals, 12 dossiers de personalitats, informe del llegat viu i 89 pàgines originals indexades en Castellà, Valencià i Portugués (550 URLs actives).',
    footerMotto:
      '«Més val parlar de coses rialleres que escriure sobre llàgrimes.» — Memorial Històric i Familiar José Adell y Fons',
  },
  pt: {
    langCode: 'pt-BR',
    langLabel: 'Português',
    brandTop: 'Vinaròs (1868) • Barcelona • Rio de Janeiro • Bahia (1927)',
    brandTitle: 'Memorial Humano & Acervo José Adell',
    navHome: 'A Alma de Pepe',
    navStories: '6 Histórias Emocionantes',
    navFamily: 'Família & Afetos',
    navArchive: 'Acervo Completo (72 Obras)',
    navNotebook: 'As 89 Páginas Originais',
    heroBadge: 'Memória Viva de Vinaròs, Valência, Espanha e Brasil',
    heroTitle: 'Pepe Adell: O Sorriso como Escudo, a Pena como Justiça e o Buril como Arte',
    heroLead:
      'Antes do polemista brilhante e do mestre gravador escolhido pela Presidência da República, existia um ser humano extraordinário: o filho autodidata de Vinaròs orgulhoso do irmão cego violinista; o marido que chorou diante de quarenta carruagens ao perder sua amada Emilia e abraçar os pequenos Josefina, Alberto e Pepín; o jornalista atingido na cabeça durante um tumulto no Rio em 1895 sem jamais perder a ternura.',
    heroQuote:
      '“Éramos todos assim, risonhos, alegres: porque intuitivamente seguíamos aquela máxima de Pepe Adell que diz: ‘Mais vale falar de coisas risonhas do que escrever sobre lágrimas.’”',
    heroQuoteAuthor:
      '— Adolfo Morales de los Ríos, arquiteto do Museu de Belas Artes, em carta de adeus ao amigo (1927)',
    btnReadStories: 'Ler as 6 Histórias Emocionantes ↓',
    btnExploreArchive: 'Explorar as 72 Obras Completas →',
    btnFlipNotebook: 'Folhear as 89 Páginas Originais',
    signatureCaption: 'Assinatura Autógrafa Original de José Adell (Página 28 do Acervo)',
    statWorks: 'Obras & Cartas',
    statPages: 'Páginas Reais',
    statYears: 'Anos de Vida',
    bornLabel: '★ Nascimento:',
    bornText: '10 de fevereiro de 1868, Vinaròs (Castellón, Comunidade Valenciana, Espanha).',
    citiesLabel: '✦ Cidades de Vida:',
    citiesText: 'Vinaròs, Barcelona, Madrid, Rio de Janeiro (Rua da Ajuda) e Salvador da Bahia.',
    diedLabel: '† Despedida:',
    diedText: '12 de maio de 1927, Salvador da Bahia — mestre gravador exemplar e amigo fiel.',
    storiesKicker: 'Crônicas Biográficas Especiais • Inspiradas nos Recortes Reais',
    storiesTitle: 'Fatos Tocantes, Curiosos e Inesquecíveis da Vida de Pepe Adell',
    storiesSubtitle:
      'Mergulhe nas seis grandes narrativas humanas guardadas há mais de um século em jornais amarelados, cada uma acompanhada das páginas originais escaneadas.',
    storyPagesIncluded: 'Inclui fac-símiles das págs.',
    storyReadFull: 'Ler História Completa →',
    familyKicker: 'Álbum Íntimo • Laços de Sangue e Amizade',
    familyTitle: 'A Família Adell e os Corações que Caminharam com Ele',
    familySubtitle:
      'Selecione cada membro da família e amigo leal para conhecer sua história humana e ver os registros originais preservados.',
    familyFacsimileLabel: 'Fac-símile vinculado: Págs.',
    familyViewPageBtn: 'Ver Página Original',
    catalogKicker: 'Acervo Integral Catalogado • 72 Obras & Documentos • 89 Páginas',
    catalogTitle: 'Todas as Obras, Crônicas, Polêmicas e Memórias de Família',
    catalogSubtitle:
      'Cada artigo, coluna, carta e necrológio publicado entre 1885 e 1927 foi catalogado individualmente e vinculado à sua imagem original escaneada.',
    searchPlaceholder: 'Buscar por Emilia, Morales, pedrada, Barcelona, Castelar, Tarrida, Campos Sales, Málaga, Vinaròs...',
    allSources: 'Todas as Fontes e Periódicos (72)',
    allWorksBtn: 'Todas as Obras',
    showingCount: 'obras e documentos históricos exibidos.',
    clearFilters: 'Limpar filtros ✕',
    featuredBadge: '★ Destaque Humano',
    originalTitleLabel: 'Título original no recorte:',
    readAndViewBtn: 'Ler & Ver Original →',
    viewerOriginalBadge: '📜 Recorte Original Digitalizado',
    viewerPageOf: 'do Caderno Histórico da Família (89 págs.)',
    viewerColorOriginal: 'Cor Original do Papel',
    viewerHighContrast: 'Nitidez de Tinta (Alto Contraste)',
    viewerSepia: 'Sépia Clássico',
    viewerInvert: 'Negativo (Ler Manuscritos)',
    viewerFullScreen: 'Tela Cheia ↗',
    viewerPagesInDoc: 'Páginas deste documento',
    workContextTitle: '❤ Contexto Humano e Histórico',
    workExcerptTitle: '✒ Trecho em Destaque no Original',
    workTranslationLabel: 'Tradução / Nota em Português:',
    workCiteTitle: '🎓 Como Citar este Documento',
    workCopyCite: 'Copiar Referência Bibliográfica',
    workCopied: '✓ Citação Copiada!',
    prevWork: '← Obra Anterior',
    nextWork: 'Próxima Obra →',
    viewAllWorks: 'Ver Todas as 72 Obras',
    proofKicker: 'Prova Documental Digitalizada',
    proofTitle: 'Veja com Seus Próprios Olhos os Recortes Originais desta História',
    relatedRecordsTitle: 'Fichas Completas destas Obras no Acervo:',
    openRecordLink: 'Abrir ficha documental e citação →',
    moreStoriesTitle: 'Continue Lendo Outras Histórias Emocionantes de Pepe Adell:',
    notebookKicker: 'Álbum Documental Integral • Páginas 1 a 89',
    notebookTitle: 'Folhear o Caderno Original de José Adell y Fons',
    notebookSubtitle:
      'Navegue página por página pelos 89 fac-símiles originais guardados por mais de um século e descubra quais obras aparecem em cada folha.',
    prevPage: '← Página Anterior',
    nextPage: 'Próxima Página →',
    goToPage: 'Ir para página:',
    worksOnPageTitle: '📌 Obras Identificadas nesta Página',
    quickGridTitle: 'Índice Rápido das 89 Páginas (Link Direto SEO)',
    footerDedicated:
      'Dedicado à memória humana, familiar, jornalística e artística de José Adell y Fons (“Pepe Adell”), de sua amada esposa Doña Emilia Vallespí de Adell (1870–1903), de seus filhos Josefina, Alberto e Pepín, de seu irmão prodígio Alberto Adell y Fons e dos amigos da Rua da Ajuda.',
    footerNavTitle: 'Navegação Completa do Memorial',
    footerSeoTitle: 'Indexação Multilíngue & Dados Abertos',
    footerSeoDesc:
      '72 obras individuais, 12 dossiês de personalidades, relatório do legado vivo e 89 páginas originais indexadas em Castellano, Valencià e Português (550 URLs ativas).',
    footerMotto:
      '“Mais vale falar de coisas risonhas do que escrever sobre lágrimas.” — Memorial Histórico & Familiar José Adell y Fons',
  },
};
