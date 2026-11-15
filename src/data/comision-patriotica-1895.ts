import { SiteLang } from '@/lib/i18n-ui';

export interface ComisionMemberLocalized {
  roleTitle: string;
  bio: string;
  webSourceNote: string;
}

export interface ComisionMember {
  order: number;
  id: string;
  engravedName: string;
  fullName: string;
  lifespan: string;
  portrait: string;
  isLeader?: boolean;
  internalHrefSlug?: string; // e.g. 'personalidade/gaspar-de-los-reyes-thous'
  externalUrl?: string;
  externalLabel?: string;
  es: ComisionMemberLocalized;
  va: ComisionMemberLocalized;
  pt: ComisionMemberLocalized;
}

export interface ComisionHistoricalBlock {
  kicker: string;
  title: string;
  paragraphs: string[];
}

export interface ComisionLocaleContent {
  navShort: string;
  navFull: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  chronologicalClarificationTitle: string;
  chronologicalClarificationText: string;
  leaderHighlightTitle: string;
  leaderHighlightText: string;
  originalScanBadge: string;
  originalScanCaption: string;
  openFullDossierBtn: string;
  openWorkRecordBtn: string;
  zoomHint: string;
  transcriptionHeading: string;
  transcriptionSubnote: string;
  transcriptionBlocks: string[];
  transcriptionSignatureLine: string;
  essaySectionKicker: string;
  essaySectionTitle: string;
  historicalBlocks: ComisionHistoricalBlock[];
  rosterKicker: string;
  rosterTitle: string;
  rosterSubtitle: string;
  leaderBadge: string;
  memberOrderLabel: string;
  engravedRibbonLabel: string;
  viewInternalDossierLabel: string;
  illustratorBoxTitle: string;
  illustratorBoxText: string;
}

export const COMISION_MEMBERS: ComisionMember[] = [
  {
    order: 1,
    id: 'benito-martinez',
    engravedName: 'D. BENITO MARTÍNEZ',
    fullName: 'Don Benito Martínez Pino',
    lifespan: 'España, 1849 — Río de Janeiro, 1906',
    portrait: '/comision-1895/01-benito-martinez.webp',
    externalUrl: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
    externalLabel: 'Almanak Laemmert / Hemeroteca Digital (BN)',
    es: {
      roleTitle: 'Maestro Marmolista, Industrial y Benefactor de la Colonia Española',
      bio: 'Empresario y maestro marmolista español radicado en Río de Janeiro (1849–1906). Figura documentada de manera continua en el histórico Almanak Administrativo, Mercantil e Industrial (Almanak Laemmert) al frente de su prestigioso taller de marmolería artística y arquitectónica en la Travessa Dias da Costa, nº 9. Participó activamente en las juntas benéficas y en la recaudación financiera de la Comisión Patriótica de 1895.',
      webSourceNote: 'Documentado en el Almanak Laemmert (1893–1906) y estudios sobre artífices españoles en Río de Janeiro.',
    },
    va: {
      roleTitle: 'Mestre Marbrista, Industrial i Benefactor de la Colònia Espanyola',
      bio: 'Empresari i mestre marbrista espanyol establit a Rio de Janeiro (1849–1906). Figura documentada de manera contínua en l’històric Almanak Administrativo, Mercantil e Industrial (Almanak Laemmert) al capdavant del seu taller de marbreria artística a la Travessa Dias da Costa, núm. 9. Participà activament en les juntes benèfiques i en el suport financer de la Comissió Patriòtica de 1895.',
      webSourceNote: 'Documentat a l’Almanak Laemmert (1893–1906) i estudis sobre artífexs espanyols a Rio de Janeiro.',
    },
    pt: {
      roleTitle: 'Mestre Marmorista, Industrial e Benfeitor da Colônia Espanhola',
      bio: 'Empresário e mestre marmorista espanhol radicado no Rio de Janeiro (1849–1906). Figura documentada continuamente no histórico Almanak Administrativo, Mercantil e Industrial (Almanak Laemmert) à frente de sua tradicional oficina de marmoraria artística na Travessa Dias da Costa, nº 9. Atuou com destaque nas sociedades beneficentes e no aporte financeiro da Comissão Patriótica de 1895.',
      webSourceNote: 'Documentado no Almanak Laemmert (1893–1906) e em registros históricos do comércio espanhol no Rio.',
    },
  },
  {
    order: 2,
    id: 'casiano-fernandez',
    engravedName: 'D. CASIANO FERNÁNDEZ',
    fullName: 'Don Casiano Fernández Álvarez',
    lifespan: 'España — Río de Janeiro (Siglos XIX–XX)',
    portrait: '/comision-1895/02-casiano-fernandez.webp',
    externalUrl: 'https://pt.wikipedia.org/wiki/Oscar_Lorenzo_Fern%C3%A1ndez',
    externalLabel: 'Biografía Familiar — Oscar Lorenzo Fernandez (Wikipedia)',
    es: {
      roleTitle: 'Comerciante, Filántropo Español y Padre del Compositor Oscar Lorenzo Fernandez',
      bio: 'Acaudalado comerciante y filántropo español radicado en Río de Janeiro, impulsor de suscripciones patrióticas y humanitarias en el seno de la Sociedad Española de Beneficencia y registrado en las crónicas de El Eco de Galicia. Dos años después de este grabado, en noviembre de 1897, fue padre en Río de Janeiro del célebre maestro y compositor brasileño Oscar Lorenzo Fernandez (1897–1948), cumbre de la música sinfónica nacionalista de Brasil.',
      webSourceNote: 'Documentado en archivos de la emigración hispano-gallega y en la historiografía musical brasileña.',
    },
    va: {
      roleTitle: 'Comerciant, Filantrop Espanyol i Pare del Compositor Oscar Lorenzo Fernandez',
      bio: ' Pròsper comerciant i filantrop espanyol establit a Rio de Janeiro, impulsor de subscripcions patriòtiques i humanitàries vinculades a la Societat Espanyola de Beneficència i esmentat a les cròniques d’El Eco de Galicia. Dos anys després d’aquest gravat, el 1897, fou pare a Rio de Janeiro del cèlebre compositor clàssic brasiler Oscar Lorenzo Fernandez (1897–1948).',
      webSourceNote: 'Documentat en arxius de l’emigració hispanogallega i en la historiografia musical brasilera.',
    },
    pt: {
      roleTitle: 'Comerciante, Filantropo Espanhol e Pai do Maestro Oscar Lorenzo Fernandez',
      bio: 'Próspero comerciante e filantropo espanhol estabelecido no Rio de Janeiro, organizador de subscrições patrióticas e humanitárias ligadas à Sociedade Espanhola de Beneficência e citado nas crônicas de El Eco de Galicia. Dois anos após esta gravura, em novembro de 1897, tornou-se pai no Rio de Janeiro do célebre compositor e maestro brasileiro Oscar Lorenzo Fernandez (1897–1948), um dos maiores nomes da música erudita nacionalista no Brasil.',
      webSourceNote: 'Documentado em acervos da imigração espanhola e na historiografia musical brasileira.',
    },
  },
  {
    order: 3,
    id: 'luis-de-la-fuente',
    engravedName: 'D. LUÍS DE LA FUENTE',
    fullName: 'Don Luis de la Fuente',
    lifespan: 'Colonia Española de Río de Janeiro (Siglo XIX)',
    portrait: '/comision-1895/03-luis-de-la-fuente.webp',
    es: {
      roleTitle: 'Vocal y Suscriptor de la Comisión Patriótica Española de Río de Janeiro',
      bio: 'Representante del comercio español establecido en Río de Janeiro que integró la junta directiva de la Comisión Patriótica en octubre de 1895, canalizando aportaciones económicas e institucionales de los residentes peninsulares en defensa de la soberanía española en Cuba.',
      webSourceNote: 'Registro histórico preservado en La Unión Española (Nº 190, 19.10.1895); sin biografía individual extensa adicional disponible en la web abierta.',
    },
    va: {
      roleTitle: 'Vocal i Subscriptor de la Comissió Patriòtica Espanyola de Rio de Janeiro',
      bio: 'Representant del comerç espanyol establit a Rio de Janeiro que integrà la junta directiva de la Comissió Patriòtica l’octubre de 1895, canalitzant aportacions econòmiques i institucionals dels residents peninsulars en defensa de Cuba.',
      webSourceNote: 'Registre històric preservat a La Unión Española (núm. 190, 19.10.1895); sense biografia individual extensa addicional disponible a la web oberta.',
    },
    pt: {
      roleTitle: 'Membro Vogal e Subscritor da Comissão Patriótica Espanhola do Rio de Janeiro',
      bio: 'Representante do comércio espanhol estabelecido no Rio de Janeiro que integrou a diretoria da Comissão Patriótica em outubro de 1895, articulando doações financeiras e apoio institucional dos imigrantes peninsulares em defesa de Cuba e dos territórios espanhóis.',
      webSourceNote: 'Registro histórico preservado em La Unión Española (Nº 190, 19.10.1895); sem biografia individual extensa adicional disponível na web aberta.',
    },
  },
  {
    order: 4,
    id: 'ricardo-meneses',
    engravedName: 'Dr. RICARDO MENESES',
    fullName: 'Dr. Ricardo Meneses',
    lifespan: 'Sevilla — Río de Janeiro (Siglos XIX–XX)',
    portrait: '/comision-1895/04-ricardo-meneses.webp',
    internalHrefSlug: 'personalidade/elias-novoa-montilla-hermanos-do-pazo-barradas',
    es: {
      roleTitle: 'Médico e Intelectual Sevillano del Círculo de la Rua da Ajuda',
      bio: 'Facultativo y culto humanista de origen sevillano radicado en Río de Janeiro. Fue miembro asiduo de la hermandad intelectual reunida en la casa-taller de Pepe Adell y en la redacción de La Unión Española en la antigua Rua da Ajuda (solar donde hoy se yergue el Theatro Municipal). Adolfo Morales de los Ríos lo evoca con admiración en su carta de 1927 (página 85 del archivo) junto a su paisano Barradas entre los amigos fraternales de Adell.',
      webSourceNote: 'Documentado en el Archivo José Adell (pág. 85, Carta de Adolfo Morales de los Ríos, 1927) y en la portada de 1895.',
    },
    va: {
      roleTitle: 'Metge i Intel·lectual Sevillà del Cercle de la Rua da Ajuda',
      bio: 'Metge i culte humanista d’origen sevillà establit a Rio de Janeiro. Fou membre assidu de la germanor intel·lectual reunida a la casa-taller de Pepe Adell i a la redacció de La Unión Española a l’antiga Rua da Ajuda (solar on hui s’alça el Theatro Municipal). Adolfo Morales de los Ríos l’evoca amb admiració en la seua carta de 1927 (pàgina 85 de l’arxiu).',
      webSourceNote: 'Documentat a l’Arxiu José Adell (pàg. 85, Carta d’Adolfo Morales de los Ríos, 1927) i a la portada de 1895.',
    },
    pt: {
      roleTitle: 'Médico e Intelectual Sevilhano da Roda da Rua da Ajuda',
      bio: 'Médico e culto humanista de origem sevilhana radicado no Rio de Janeiro. Integrou o círculo íntimo de intelectuais que se reunia diariamente na casinha-oficina de Pepe Adell e na redação de La Unión Española na antiga Rua da Ajuda (terreno onde hoje se ergue o Theatro Municipal). Adolfo Morales de los Ríos o recorda com estima na carta de 1927 (página 85 do acervo) entre os grandes amigos de Adell.',
      webSourceNote: 'Documentado no Acervo José Adell (pág. 85, Carta de Adolfo Morales de los Ríos, 1927) e na capa de 1895.',
    },
  },
  {
    order: 5,
    id: 'jose-adell',
    engravedName: 'D. JOSÉ ADELL',
    fullName: 'Don José Adell y Fons («Pepe Adell»)',
    lifespan: 'Vinaròs, 10.02.1868 — Salvador de Bahía, 12.05.1927',
    portrait: '/comision-1895/05-jose-adell.webp',
    isLeader: true,
    internalHrefSlug: 'prefacio',
    es: {
      roleTitle: 'Periodista Republicano, Redactor Jefe de «La Unión Española» y Líder de esta Lucha Patriótica',
      bio: 'Hijo autodidacta de Vinaròs (Castellón), secretario de redacción en Barcelona a los 17 años, pensador republicano humanista y maestro grabador en metales. José Adell encabezó intelectual, periodística e institucionalmente esta lucha en Río de Janeiro: tras recibir una pedrada en la cabeza durante las manifestaciones callejeras pro-insurrectos y rebatir con altura doctrinal a Lúcio de Mendonça en septiembre de 1895, unió a toda la colonia española en la Comisión Patriótica, advirtiendo con lucidez que el movimiento separatista en Cuba —empujado por la injerencia de los Estados Unidos y de oligarquías mercantiles— no traería una república democrática, sino subordinación a intereses políticos y económicos oscuros. Este medallón conserva su auténtico retrato grabado a los 27 años.',
      webSourceNote: 'Figura central de este Memorial (73 obras y 89 páginas originales preservadas, 1885–1927).',
    },
    va: {
      roleTitle: 'Periodista Republicà, Redactor en Cap de «La Unión Española» i Líder d’aquesta Lluita Patriòtica',
      bio: 'Fill autodidacte de Vinaròs (Castelló), secretari de redacció a Barcelona als 17 anys, pensador republicà humanista i mestre gravador en metalls. José Adell encapçalà intel·lectualment, periodísticament i institucionalment aquesta lluita a Rio de Janeiro: després de rebre una pedrada al cap durant els aldarulls al carrer i debatre amb Lúcio de Mendonça el setembre de 1895, uní tota la colònia espanyola en la Comissió Patriòtica, advertint que la Primera Revolució d’Independència cubana —impulsada per la ingerència dels Estats Units i d’oligarquies mercantils— no portaria una república democràtica, sinó interessos polítics i econòmics obscurs. Aquest medalló conserva el seu retrat autèntic gravat als 27 anys.',
      webSourceNote: 'Figura central d’aquest Memorial (73 obres i 89 pàgines originals preservades, 1885–1927).',
    },
    pt: {
      roleTitle: 'Jornalista Republicano, Redator-Chefe de «La Unión Española» e Líder que Encabeçou esta Luta',
      bio: 'Filho autodidata de Vinaròs (Castellón), secretário de redação em Barcelona aos 17 anos, pensador republicano humanista e mestre gravador em metais. José Adell encabeçou intelectual, jornalística e institucionalmente esta luta histórica no Rio de Janeiro: poucas semanas após ser ferido na cabeça nos tumultos de rua pró-insurretos e travar seu célebre debate com o Ministro Lúcio de Mendonça (setembro de 1895), uniu toda a comunidade espanhola na Comissão Patriótica, alertando com clarividência que aquela Primeira Revolução Cubana de Independência — alimentada pela intervenção dos Estados Unidos e por oligarquias — não geraria uma república democrática, mas entregaria a ilha a interesses políticos e econômicos escusos, à jogatina e à contravenção. Este medalhão preserva seu retrato autêntico aos 27 anos.',
      webSourceNote: 'Figura central deste Memorial (73 obras e 89 páginas originais preservadas, 1885–1927).',
    },
  },
  {
    order: 6,
    id: 'gaspar-de-los-reyes-thous',
    engravedName: 'D. GASPAR DE LOS R. THOUS',
    fullName: 'Don Gaspar de los Reyes Thous',
    lifespan: 'España — Río de Janeiro (Siglo XIX)',
    portrait: '/comision-1895/06-gaspar-thous.webp',
    internalHrefSlug: 'personalidade/gaspar-de-los-reyes-thous',
    externalUrl: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
    externalLabel: 'Hemeroteca Digital — Prensa de Inmigración (BN)',
    es: {
      roleTitle: 'Periodista y Fundador del Diario «La Unión Española» en Río de Janeiro',
      bio: 'Periodista español de tradición carlista pero de espíritu caballeroso y tolerante, fundador en Río de Janeiro de La Unión Española, periódico que sirvió de órgano oficial y tribuna de movilización para la Comisión Patriótica en 1895. Su leal hermandad con el republicano José Adell —documentada en las páginas 20, 31–32 y 84 del archivo— simbolizó la unión sagrada de monárquicos, tradicionalistas y republicanos españoles en defensa de Cuba.',
      webSourceNote: 'Ampliamente documentado en el Archivo José Adell (Obras Nº 24, 34 y 69) y en la historia de la prensa hispana en Brasil.',
    },
    va: {
      roleTitle: 'Periodista i Fundador del Diari «La Unión Española» a Rio de Janeiro',
      bio: 'Periodista espanyol de tradició carlista però d’esperit cavallerós i obert, fundador a Rio de Janeiro de La Unión Española, diari que serví de tribuna oficial per a la Comissió Patriòtica el 1895. La seua lleial germanor amb el republicà José Adell —documentada a les pàgines 20, 31–32 i 84— simbolitzà la unió de tots els espanyols en defensa de Cuba.',
      webSourceNote: 'Àmpliament documentat a l’Arxiu José Adell (Obres núm. 24, 34 i 69) i en la premsa d’immigració al Brasil.',
    },
    pt: {
      roleTitle: 'Jornalista e Fundador do Periódico «La Unión Española» no Rio de Janeiro',
      bio: 'Jornalista espanhol de tradição carlista, mas de espírito cavalheiresco e tolerante, fundador no Rio de Janeiro do jornal La Unión Española, que atuou como porta-voz oficial e centro de arrecadação da Comissão Patriótica em 1895. Sua amizade fraterna com o republicano José Adell — registrada nas páginas 20, 31–32 e 84 do acervo — simbolizou a união de espanhóis de todas as correntes políticas na defesa de Cuba.',
      webSourceNote: 'Amplamente documentado no Acervo José Adell (Obras Nº 24, 34 e 69) e na imprensa imigrante no Brasil.',
    },
  },
  {
    order: 7,
    id: 'fidel-vergara',
    engravedName: 'D. FIDEL VERGARA',
    fullName: 'Don Fidel Vergara',
    lifespan: 'España / Río de Janeiro (Siglos XIX–XX)',
    portrait: '/comision-1895/07-fidel-vergara.webp',
    externalUrl: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
    externalLabel: 'Hemeroteca Digital — Biblioteca Nacional',
    es: {
      roleTitle: 'Comerciante y Miembro del Asociacionismo Hispano-Gallego en Río de Janeiro',
      bio: 'Comerciante español radicado en Río de Janeiro, vinculado a las redes asociativas de la emigración hispano-gallega de finales del siglo XIX y principios del XX (registrado en correspondencias y listados históricos publicados en El Correo Gallego y en la prensa carioca). Sumó su esfuerzo organizativo y financiero a la Comisión Patriótica de octubre de 1895.',
      webSourceNote: 'Mencionado en registros de la diáspora hispano-gallega en Río de Janeiro (principios del s. XX) y en La Unión Española (1895).',
    },
    va: {
      roleTitle: 'Comerciant i Membre de l’Associacionisme Hispanogallec a Rio de Janeiro',
      bio: 'Comerciant espanyol establit a Rio de Janeiro, vinculat a les xarxes associatives de l’emigració hispanogallega de finals del segle XIX i principis del XX (registrat en correspondències i llistats històrics d’El Correo Gallego i de la premsa carioca). Sumà el seu esforç financer a la Comissió Patriòtica de 1895.',
      webSourceNote: 'Esmentat en registres de la diàspora hispanogallega a Rio de Janeiro i a La Unión Española (1895).',
    },
    pt: {
      roleTitle: 'Comerciante e Membro do Associativismo Hispano-Galego no Rio de Janeiro',
      bio: 'Comerciante espanhol radicado no Rio de Janeiro, ligado às redes associativas da imigração hispano-galega na virada do século XIX para o XX (citado em correspondências e listas comunitárias preservadas em El Correo Gallego e na Hemeroteca da Biblioteca Nacional). Integrou o esforço arrecadador e institucional da Comissão Patriótica em outubro de 1895.',
      webSourceNote: 'Citado em registros da diáspora hispano-galega no Rio de Janeiro e em La Unión Española (1895).',
    },
  },
  {
    order: 8,
    id: 'p-sieiro-garrido',
    engravedName: 'D. P. SIEIRO GARRIDO',
    fullName: 'Don P. Sieiro Garrido',
    lifespan: 'Galicia / Río de Janeiro (Siglo XIX)',
    portrait: '/comision-1895/08-sieiro-garrido.webp',
    es: {
      roleTitle: 'Integrante de la Comisión Patriótica y Representante de la Emigración Gallega',
      bio: 'Miembro de la Comisión Patriótica Española constituida en Río de Janeiro en 1895, procedente del activo núcleo de comerciantes de origen gallego (apellidos Sieiro y Garrido, de tradicional raigambre ourensana y pontevedresa) asentados en la capital brasileña que sostuvieron financieramente las suscripciones pro-Cuba.',
      webSourceNote: 'Documentado en el grabado conmemorativo de La Unión Española (19.10.1895); sin biografía individual adicional en repositorios web abiertos.',
    },
    va: {
      roleTitle: 'Integrant de la Comissió Patriòtica i Representant de l’Emigració Gallega',
      bio: 'Membre de la Comissió Patriòtica Espanyola constituïda a Rio de Janeiro el 1895, procedent de l’actiu nucli de comerciants d’origen gallec establits a la capital brasilera que sostingueren financerament les subscripcions patriòtiques.',
      webSourceNote: 'Documentat al gravat commemoratiu de La Unión Española (19.10.1895); sense biografia individual addicional en repositoris web oberts.',
    },
    pt: {
      roleTitle: 'Integrante da Comissão Patriótica e Representante da Imigração Galega',
      bio: 'Membro da Comissão Patriótica Espanhola constituída no Rio de Janeiro em 1895, oriundo do expressivo núcleo de comerciantes galegos (sobrenomes Sieiro e Garrido, tradicionais de Ourense e Pontevedra) estabelecidos na capital federal brasileira que sustentaram financeiramente as subscrições em defesa de Cuba.',
      webSourceNote: 'Documentado na gravura comemorativa de La Unión Española (19.10.1895); sem biografia individual adicional em repositórios abertos da web.',
    },
  },
  {
    order: 9,
    id: 'luis-suarez',
    engravedName: 'D. LUÍS SUÁREZ',
    fullName: 'Don Luis Suárez',
    lifespan: 'Colonia Española de Río de Janeiro (Siglo XIX)',
    portrait: '/comision-1895/09-luis-suarez.webp',
    es: {
      roleTitle: 'Vocal Recaudador de la Comisión Patriótica Española en Río de Janeiro',
      bio: 'Integrante de la junta patriótica organizada por la colectividad española de Río de Janeiro en octubre de 1895 para reunir recursos financieros y respaldo institucional destinados a la defensa de Cuba y de la integridad territorial española.',
      webSourceNote: 'Documentado en la portada histórica de La Unión Española (Nº 190, 19.10.1895); sin biografía individual adicional disponible en la web abierta.',
    },
    va: {
      roleTitle: 'Vocal Recaptador de la Comissió Patriòtica Espanyola a Rio de Janeiro',
      bio: 'Integrant de la junta patriòtica organitzada per la col·lectivitat espanyola de Rio de Janeiro l’octubre de 1895 per reunir recursos financers i suport institucional destinats a la defensa de Cuba i dels territoris espanyols.',
      webSourceNote: 'Documentat a la portada històrica de La Unión Española (núm. 190, 19.10.1895); sense biografia individual addicional disponible a la web oberta.',
    },
    pt: {
      roleTitle: 'Vogal Arrecadador da Comissão Patriótica Espanhola no Rio de Janeiro',
      bio: 'Integrante da junta patriótica organizada pela coletividade espanhola do Rio de Janeiro em outubro de 1895 para reunir fundos financeiros e apoio institucional destinados à defesa de Cuba e dos territórios ultramarinos da Espanha.',
      webSourceNote: 'Documentado na capa histórica de La Unión Española (Nº 190, 19.10.1895); sem biografia individual adicional disponível na web aberta.',
    },
  },
  {
    order: 10,
    id: 'francisco-brandariz',
    engravedName: 'D. FRANCISCO BRANDARIZ',
    fullName: 'Don Francisco Brandariz',
    lifespan: 'Galicia — Río de Janeiro (Siglos XIX–XX)',
    portrait: '/comision-1895/10-francisco-brandariz.webp',
    externalUrl: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
    externalLabel: 'Hemeroteca Digital — Biblioteca Nacional',
    es: {
      roleTitle: 'Comerciante y Directivo Asociativo de la Diáspora Hispano-Gallega en Río',
      bio: 'Miembro destacado de la comunidad gallega y española radicada en Río de Janeiro entre finales del siglo XIX y principios del XX, documentado en registros consulares, prensa de emigración (El Correo Gallego) y crónicas asociativas de la Biblioteca Nacional de Brasil por su activa participación en entidades patrióticas y benéficas hispanas.',
      webSourceNote: 'Registrado en archivos históricos de la emigración española en Brasil y prensa carioca de entresiglos.',
    },
    va: {
      roleTitle: 'Comerciant i Directiu Associatiu de la Diàspora Hispanogallega a Rio',
      bio: 'Membre destacat de la comunitat gallega i espanyola establida a Rio de Janeiro entre finals del segle XIX i principis del XX, documentat en registres consulars, premsa d’emigració (El Correo Gallego) i cròniques associatives de la Biblioteca Nacional del Brasil.',
      webSourceNote: 'Registrat en arxius històrics de l’emigració espanyola al Brasil i premsa carioca.',
    },
    pt: {
      roleTitle: 'Comerciante e Dirigente Associativo da Diáspora Hispano-Galega no Rio',
      bio: 'Membro atuante da comunidade galega e espanhola radicada no Rio de Janeiro na transição dos séculos XIX e XX, documentado em registros consulares, na imprensa imigrante (El Correo Gallego) e em periódicos da Hemeroteca Digital da Biblioteca Nacional por sua participação em associações patrióticas e beneficentes espanholas.',
      webSourceNote: 'Registrado em arquivos históricos da imigração espanhola no Brasil e na imprensa carioca.',
    },
  },
  {
    order: 11,
    id: 'vicente-do-pazo',
    engravedName: 'D. VICENTE DO PAZO',
    fullName: 'Comendador Don Vicente do Pazo',
    lifespan: 'Galicia — Río de Janeiro (Siglos XIX–XX)',
    portrait: '/comision-1895/11-vicente-do-pazo.webp',
    internalHrefSlug: 'personalidade/elias-novoa-montilla-hermanos-do-pazo-barradas',
    externalUrl: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
    externalLabel: 'Hemeroteca Digital (BN) — Orden de Isabel la Católica',
    es: {
      roleTitle: 'Comendador, Empresario Hotelero y «Ministro de Exteriores» de la Rua da Ajuda',
      bio: 'Prestigioso hotelero y comerciante gallego en Río de Janeiro, condecorado como Caballero de la Real Orden de Isabel la Católica. Amigo entrañable de Pepe Adell en la tertulia cotidiana de la Rua da Ajuda —apodado con cariño el «Ministro de Exteriores» del grupo por Adolfo Morales de los Ríos en 1927 (pág. 85)— y fiel acompañante de la familia Adell en los funerales de Doña Emilia Vallespí en la iglesia de São Francisco de Paula en 1903 (pág. 83).',
      webSourceNote: 'Ampliamente documentado en la prensa brasileña (BN Digital) y en las páginas 83 y 85 del Archivo José Adell.',
    },
    va: {
      roleTitle: 'Comanador, Empresari Hoteler i «Ministre d’Exteriors» de la Rua da Ajuda',
      bio: 'Prestigiós hoteler i comerciant gallec a Rio de Janeiro, condecorat com a Cavaller de l’Orde d’Isabel la Catòlica. Amic entranyable de Pepe Adell a la tertúlia de la Rua da Ajuda —anomenat afectuosament el «Ministre d’Exteriors» del grup per Adolfo Morales de los Ríos el 1927 (pàg. 85)— i present als funerals de Doña Emilia Vallespí el 1903 (pàg. 83).',
      webSourceNote: 'Àmpliament documentat a la premsa brasilera (BN Digital) i a les pàgines 83 i 85 de l’Arxiu José Adell.',
    },
    pt: {
      roleTitle: 'Comendador, Empresário Hoteleiro e «Ministro do Exterior» da Rua da Ajuda',
      bio: 'Renomado empresário hoteleiro e comerciante galego no centro do Rio de Janeiro, agraciado com o título de Cavaleiro da Ordem de Isabel a Católica. Amigo inseparável de Pepe Adell nas tertúlias da Rua da Ajuda — apelidado carinhosamente de “Ministro das Relações Exteriores” da roda por Adolfo Morales de los Ríos em 1927 (pág. 85) —, esteve ao lado de Adell nas exéquias de Doña Emilia Vallespí na Igreja de São Francisco de Paula em 1903 (pág. 83).',
      webSourceNote: 'Amplamente documentado na imprensa carioca (Hemeroteca da BN) e nas páginas 83 e 85 do Acervo José Adell.',
    },
  },
  {
    order: 12,
    id: 'ezequiel-c-areas',
    engravedName: 'D. EZEQUIEL C. AREAS',
    fullName: 'Don Ezequiel Caravelos Areas',
    lifespan: 'Galicia — Río de Janeiro (Siglos XIX–XX)',
    portrait: '/comision-1895/12-ezequiel-areas.webp',
    externalUrl: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
    externalLabel: 'Almanak Mercantil / Hemeroteca Digital (BN)',
    es: {
      roleTitle: 'Comerciante del Centro Mercantil de Río de Janeiro (Entorno de Rua do Ouvidor)',
      bio: 'Comerciante español de origen gallego establecido en el corazón comercial de Río de Janeiro (registrado en anuarios mercantiles cariocas del cambio de siglo bajo la grafía Ecequiel Caravelos Área, con actividad en el eje de la Rua do Ouvidor). Aportó el respaldo del empresariado hispano-carioca a la Comisión Patriótica de octubre de 1895.',
      webSourceNote: 'Documentado en directorios comerciales históricos de Río de Janeiro (BN Digital) y en La Unión Española (1895).',
    },
    va: {
      roleTitle: 'Comerciant del Centre Mercantil de Rio de Janeiro (Entorn de la Rua do Ouvidor)',
      bio: 'Comerciant espanyol d’origen gallec establit al cor comercial de Rio de Janeiro (registrat en anuaris mercantils carioques del canvi de segle amb activitat a l’eix de la Rua do Ouvidor). Aportà el suport de l’empresariat hispanocarioca a la Comissió Patriòtica d’octubre de 1895.',
      webSourceNote: 'Documentat en directoris comercials històrics de Rio de Janeiro (BN Digital) i a La Unión Española (1895).',
    },
    pt: {
      roleTitle: 'Comerciante do Centro Mercantil do Rio de Janeiro (Eixo da Rua do Ouvidor)',
      bio: 'Comerciante espanhol de origem galega estabelecido no coração mercantil do Rio de Janeiro (registrado nos anuários comerciais cariocas da virada do século sob a grafia Ecequiel Caravelos Área, atuando nas imediações da Rua do Ouvidor). Somou o apoio do comércio espanhol do Rio à mobilização financeira da Comissão Patriótica em outubro de 1895.',
      webSourceNote: 'Documentado em almanaques comerciais históricos do Rio de Janeiro (BN Digital) e em La Unión Española (1895).',
    },
  },
];

export const COMISION_PATRIOTICA_CONTENT: Record<SiteLang, ComisionLocaleContent> = {
  es: {
    navShort: 'Comisión Patriótica (Cuba 1895)',
    navFull: 'Comisión Patriótica de 1895 — Defensa de Cuba',
    metaTitle:
      'La Unión Española y la Comisión Patriótica de 1895: José Adell al Frente de la Defensa de Cuba ante la Primera Revolución e Intervención de EE. UU.',
    metaDescription:
      'Publicación histórica de La Unión Española (Río de Janeiro, 19 de octubre de 1895): cómo José Adell encabezó la Comisión Patriótica de apoyo financiero e institucional frente a la Primera Revolución de Independencia de Cuba (1895–1898) y la injerencia de Estados Unidos, con los retratos y biografías de sus 12 integrantes.',
    badge: '🇪🇸 Documento Histórico Excepcional • La Unión Española • Río de Janeiro, 19 de Octubre de 1895',
    heroTitle:
      'La Comisión Patriótica de 1895: José Adell al Frente de la Unión Española en Defensa de Cuba frente a las Oligarquías y la Injerencia de los Estados Unidos',
    heroSubtitle:
      'En octubre de 1895, durante la Primera Revolución Cubana —la Guerra de Independencia de 1895–1898 que contó con la decisiva participación de los Estados Unidos—, la comunidad española de Río de Janeiro se unió financiera e institucionalmente bajo el liderazgo periodístico y moral de D. José Adell. Los españoles de aquella época advertían con clarividencia que aquel movimiento separatista no nacía sobre verdaderos principios democráticos y republicanos, sino atado a oligarquías e intereses políticos y económicos oscuros que terminarían convirtiendo a la isla en un enclave de tutelaje extranjero, casas de juego y contravención.',
    chronologicalClarificationTitle:
      '📌 Precisión Histórica Fundamental: La Primera Revolución de Independencia (1895–1898) con Participación de EE. UU. — No la Segunda Revolución de 1959',
    chronologicalClarificationText:
      'Este documento histórico de octubre de 1895 se refiere estrictamente a la Primera Revolución Cubana —el conflicto separatista e independentista de 1895–1898 en el que intervinieron directa y militarmente los Estados Unidos de América—, y NO a la segunda revolución cubana (la revolución comunista encabezada por Fidel Castro más de seis décadas después, en 1959). Precisamente la intervención estadounidense de 1898 y la imposición de la Enmienda Platt (1901) confirmaron los temores de los españoles de 1895: durante la primera mitad del siglo XX, antes de 1959, Cuba quedó sometida a oligarquías azucareras, monopolios financieros, casinos de juego y redes de contrabando y contravención.',
    leaderHighlightTitle: '★ D. José Adell Encabezó Esta Lucha Cívica y Patriótica en Río de Janeiro',
    leaderHighlightText:
      'Republicano convencido, demócrata humanista y redactor jefe de La Unión Española en la Rua da Ajuda, José Adell y Fons («Pepe Adell», retratado en el quinto medallón a los 27 años) lideró la articulación intelectual e institucional de esta campaña semanas después de haber sufrido una pedrada en la cabeza defendiendo la dignidad española en las calles cariocas.',
    originalScanBadge: '📰 Portada Grabada Original • La Unión Española (Año IV, Nº 190 • 19.10.1895)',
    originalScanCaption:
      'Litografía histórica de primera plana firmada por A. Castaño con vista de la Bahía de Guanabara y los 12 medallones de la Comisión Patriótica Española de Río de Janeiro.',
    openFullDossierBtn: 'Abrir Dossier Histórico y las 12 Biografías →',
    openWorkRecordBtn: 'Ver Ficha en el Archivo (Obra Nº 73) →',
    zoomHint: 'Clique en la portada original para ampliarla a pantalla completa.',
    transcriptionHeading:
      '📜 Transcripción Íntegra del Documento Original (Situada Debajo del Grabado Original)',
    transcriptionSubnote:
      'Transcripción diplomática y descriptiva en Castellano de todas las inscripciones visibles en la portada de La Unión Española (19 de octubre de 1895):',
    transcriptionBlocks: [
      'CABECERA DEL PERIÓDICO: «LA UNIÓN ESPAÑOLA» [Sello circular de registro de archivo: «R»].',
      'DATACIÓN BAJO LA CABECERA: «AÑO IV — Nº 190 — RÍO DE JANEIRO, 19 OCTUBRE 1895».',
      'COMPOSICIÓN ICONOGRÁFICA CENTRAL (12 MEDALLONES OVALADOS ENTRE FLORA TROPICAL Y VISTA MARÍTIMA DE LA BAHÍA DE RÍO DE JANEIRO CON VAPORES):\n• Fila superior (izquierda a derecha): «D. BENITO MARTÍNEZ» — «D. CASIANO FERNÁNDEZ» — «D. LUÍS DE LA FUENTE».\n• Segunda fila: «Dr. RICARDO MENESES» — «D. JOSÉ ADELL».\n• Tercera fila (centro y derecha, junto a la viñeta naval): «D. GASPAR DE LOS R. THOUS» — «D. FIDEL VERGARA».\n• Cuarta fila: «D. P. SIEIRO GARRIDO» — «D. LUÍS SUÁREZ».\n• Fila inferior (izquierda a derecha): «D. FRANCISCO BRANDARIZ» — «D. VICENTE DO PAZO» — «D. EZEQUIEL C. AREAS».',
      'PIE CONMEMORATIVO DE PORTADA: «HOMENAGE Á LA COMISIÓN PATRIÓTICA».',
    ],
    transcriptionSignatureLine:
      'Firma del artista grabador al pie del medallón central inferior: «A. Castaño» (La Unión Española, Río de Janeiro, 19 de octubre de 1895).',
    essaySectionKicker: 'Análisis Histórico y Geopolítico • Octubre de 1895 – 1898',
    essaySectionTitle:
      'La Primera Revolución de Independencia de Cuba, la Intervención de los Estados Unidos y la Visión Profética de los Españoles de 1895',
    historicalBlocks: [
      {
        kicker: 'I. El Contexto de 1895–1898 y la Participación de los Estados Unidos',
        title: 'Por qué el separatismo de 1895 no respondía a un ideal republicano puro, sino a la geopolítica estadounidense y oligárquica',
        paragraphs: [
          'Cuando el 24 de febrero de 1895 estalló la insurrección armada en Cuba —conocida históricamente como la Primera Revolución Cubana o Guerra de Independencia de Cuba (1895–1898), muy anterior y distinta de la revolución comunista de Fidel Castro de 1959—, el conflicto estuvo desde su raíz atravesado por poderosos intereses externos radicados en los Estados Unidos. Juntas financieras en Nueva York, trusts azucareros, sindicatos navieros y la llamada «prensa amarilla» de William Randolph Hearst y Joseph Pulitzer financiaron expediciones filibusteras, armaron partidas y prepararon el terreno para la intervención militar directa de Washington en 1898 tras la explosión del acorazado USS Maine en La Habana.',
          'Para los españoles lúcidos de aquella época —y de modo muy especial para republicanos demócratas como José Adell y Fons, que amaban la libertad fundada en la ley, el sufragio y la instrucción pública—, resultaba evidente que aquel movimiento insurreccional no estaba cimentado sobre auténticos principios democráticos y republicanos. Veían con nitidez que detrás de la retórica separatista operaban oligarquías criollas y consorcios norteamericanos interesados en arrancar la isla de la soberanía española para convertirla en una factoría subordinada a intereses políticos y económicos espurios.',
        ],
      },
      {
        kicker: 'II. La Advertencia Confirmada por el Siglo XX (1902–1950)',
        title: 'De la Enmienda Platt a la isla de los casinos, la jugatina y la contravención',
        paragraphs: [
          'El desenlace de la guerra de 1898 dio la razón histórica al diagnóstico formulado por la comunidad española en 1895. Tras el Tratado de París y la ocupación militar estadounidense (1898–1902), Washington impuso en la Constitución cubana la célebre Enmienda Platt (1901), reservándose el derecho de intervención armada, el control de las finanzas públicas y la cesión de bases navales como Guantánamo, mientras las mejores tierras pasaban a manos de latifundios y corporaciones extranjeras.',
          'Despojada de las reformas autonómicas e institucionales que los sectores progresistas españoles habían defendido, la joven república tutelada cayó durante las primeras décadas del siglo XX bajo el peso del caudillismo oligárquico, la corrupción administrativa y la penetración de sindicatos internacionales del juego y del contrabando. Mucho antes de la ruptura de 1959, La Habana fue transformada en un paraíso de casinos, loterías fraudulentas, jugatina desenfrenada y contravención al servicio de mafias y élites venales: exactamente la degradación institucional que los patriotas españoles de 1895 habían querido evitar.',
        ],
      },
      {
        kicker: 'III. Octubre de 1895 en Río de Janeiro',
        title: 'José Adell al frente de la unión financiera e institucional de la colonia española',
        paragraphs: [
          'En Río de Janeiro, la causa de los insurrectos cubanos contaba con ruidosos simpatizantes en parte de la prensa local, hasta el punto de que en los tumultos callejeros de 1895 frente a las redacciones del Largo de São Francisco de Paula el propio José Adell resultó herido de una pedrada en la cabeza. Lejos de intimidarse, Pepe Adell volvió a su mesa en la casita colonial de la Rua da Ajuda —solar donde hoy se alza el Theatro Municipal— para rebatir con impecable cortesía y rigor histórico al magistrado brasileño Lúcio de Mendonça y encabezar la creación de la Comisión Patriótica Española.',
          'El 19 de octubre de 1895, el periódico La Unión Española (Año IV, Nº 190) consagró su portada íntegra a homenajear a los doce integrantes de aquella Comisión Patriótica. En ella se fundieron en un solo abrazo cívico el republicano valenciano José Adell, el fundador tradicionalista Gaspar de los Reyes Thous, el médico sevillano Dr. Ricardo Meneses, el hotelero gallego Comendador Vicente do Pazo y los más respetados comerciantes e industriales españoles de Río de Janeiro, recaudando recursos financieros y sosteniendo institucionalmente la defensa de Cuba y de sus territorios.',
        ],
      },
    ],
    rosterKicker: 'Nómina Histórica Completa • Los 12 Medallones del Grabado Original',
    rosterTitle: 'Integrantes Participantes de la Comisión Patriótica Española (19 de Octubre de 1895)',
    rosterSubtitle:
      'Relación íntegra de los doce miembros retratados en la primera plana de La Unión Española en el orden exacto de la litografía original, acompañada de sus datos biográficos documentados en archivos históricos y en la web.',
    leaderBadge: '★ Encabezó esta Lucha Histórica',
    memberOrderLabel: 'Medallón Nº',
    engravedRibbonLabel: 'Inscripción en el grabado:',
    viewInternalDossierLabel: 'Ver Dossier en el Memorial →',
    illustratorBoxTitle: '🎨 Sobre el Autor del Grabado Original: A. Castaño (Río de Janeiro, 1895)',
    illustratorBoxText:
      'Al pie del medallón central inferior aparece la rúbrica artística «A. Castaño», dibujante y litógrafo activo en la prensa ilustrada de Río de Janeiro a finales del siglo XIX. El artista enmarcó los doce retratos en óvalos entrelazados por palmeras, bambúes y flores tropicales brasileñas, abriendo a la izquierda una ventana marítima sobre la Bahía de Guanabara surcada por vapores transatlánticos: símbolo visual del puente inquebrantable entre la emigración española del Brasil y la defensa de Ultramar.',
  },

  va: {
    navShort: 'Comissió Patriòtica (Cuba 1895)',
    navFull: 'Comissió Patriòtica de 1895 — Defensa de Cuba',
    metaTitle:
      'La Unión Española i la Comissió Patriòtica de 1895: José Adell al Capdavant de la Defensa de Cuba davant la Primera Revolució i la Intervenció dels EUA',
    metaDescription:
      'Publicació històrica de La Unión Española (Rio de Janeiro, 19 d’octubre de 1895): com José Adell encapçalà la Comissió Patriòtica de suport financer i institucional davant la Primera Revolució d’Independència de Cuba (1895–1898) i la participació dels Estats Units, amb els retrats i biografies dels 12 integrants.',
    badge: '🇪🇸 Document Històric Excepcional • La Unión Española • Rio de Janeiro, 19 d’Octubre de 1895',
    heroTitle:
      'La Comissió Patriòtica de 1895: José Adell al Capdavant de la Unió Espanyola en Defensa de Cuba enfront de les Oligarquies i la Ingerència dels Estats Units',
    heroSubtitle:
      'A l’octubre de 1895, durant la Primera Revolució Cubana —la Guerra d’Independència de 1895–1898 que comptà amb la decisiva participació dels Estats Units—, la comunitat espanyola de Rio de Janeiro s’uní financerament i institucionalment sota el lideratge periodístic i moral de D. José Adell. Els espanyols d’aquella època veien amb clarividència que aquell moviment separatista no es basava en principis democràtics i republicans, sinó que estava lligat a oligarquies i a interessos polítics i econòmics obscurs que acabarien convertint l’illa en un territori de joc i contravenció.',
    chronologicalClarificationTitle:
      '📌 Precisió Històrica Fonamental: La Primera Revolució d’Independència (1895–1898) amb Participació dels EUA — No la Segona Revolució de 1959',
    chronologicalClarificationText:
      'Aquest document històric d’octubre de 1895 es refereix estrictament a la Primera Revolució Cubana —el moviment separatista i guerra d’independència de 1895–1898 en què participaren militarment i geopolíticament els Estats Units d’Amèrica—, i NO a la segona revolució cubana (la revolució comunista de Fidel Castro del 1959). Precisament la intervenció nord-americana del 1898 i l’Esmena Platt (1901) confirmaren els temors dels espanyols del 1895: durant la primera meitat del segle XX, Cuba quedà sotmesa a oligarquies sucreres, interessos financers estrangers, casinos de joc i xarxes de contraban i contravenció.',
    leaderHighlightTitle: '★ D. José Adell Encapçalà Aquesta Lluita Cívica i Patriòtica a Rio de Janeiro',
    leaderHighlightText:
      'Republicà convençut, demòcrata humanista i redactor en cap de La Unión Española a la Rua da Ajuda, José Adell y Fons («Pepe Adell», retratat al cinqué medalló als 27 anys) liderà la mobilització intel·lectual i institucional de la colònia espanyola poques setmanes després d’haver patit una pedrada al cap defensant la dignitat espanyola als carrers de Rio.',
    originalScanBadge: '📰 Portada Gravada Original • La Unión Española (Any IV, Núm. 190 • 19.10.1895)',
    originalScanCaption:
      'Litografia històrica de primera plana signada per A. Castaño amb vista de la Badia de Guanabara i els 12 medallons de la Comissió Patriòtica Espanyola de Rio de Janeiro.',
    openFullDossierBtn: 'Obrir Dossier Històric i les 12 Biografies →',
    openWorkRecordBtn: 'Vore Fitxa a l’Arxiu (Obra Núm. 73) →',
    zoomHint: 'Feu clic a la portada original per ampliar-la a pantalla completa.',
    transcriptionHeading:
      '📜 Transcripció Íntegra del Document Original (Situada Sota el Gravat Original)',
    transcriptionSubnote:
      'Transcripció completa en Valencià de totes les inscripcions visibles a la portada original de La Unión Española (19 d’octubre de 1895):',
    transcriptionBlocks: [
      'CAPÇALERA DEL PERIÒDIC: «LA UNIÓN ESPAÑOLA» [Segell circular de registre d’arxiu: «R»].',
      'DATACIÓ SOTA LA CAPÇALERA: «ANY IV — NÚM. 190 — RIO DE JANEIRO, 19 D’OCTUBRE DE 1895» («AÑO IV — Nº 190 — RIO DE JANEIRO, 19 OCTUBRE 1895»).',
      'COMPOSICIÓ ICONOGRÀFICA CENTRAL (12 MEDALLONS OVALATS ENTRE FLORA TROPICAL I VISTA MARÍTIMA DE LA BADIA DE RIO DE JANEIRO AMB VAPORS):\n• Fila superior (d’esquerra a dreta): «D. BENITO MARTÍNEZ» — «D. CASIANO FERNÁNDEZ» — «D. LUÍS DE LA FUENTE».\n• Segona fila: «Dr. RICARDO MENESES» — «D. JOSÉ ADELL».\n• Tercera fila (centre i dreta, al costat de la vinyeta naval): «D. GASPAR DE LOS R. THOUS» — «D. FIDEL VERGARA».\n• Quarta fila: «D. P. SIEIRO GARRIDO» — «D. LUÍS SUÁREZ».\n• Fila inferior (d’esquerra a dreta): «D. FRANCISCO BRANDARIZ» — «D. VICENTE DO PAZO» — «D. EZEQUIEL C. AREAS».',
      'PEU COMMEMORATIU DE PORTADA: «HOMENATGE A LA COMISSIÓ PATRIÒTICA» («HOMENAGE A LA COMISION PATRIOTICA»).',
    ],
    transcriptionSignatureLine:
      'Signatura de l’artista gravador al peu del medalló central inferior: «A. Castaño» (La Unión Española, Rio de Janeiro, 19 d’octubre de 1895).',
    essaySectionKicker: 'Anàlisi Històrica i Geopolítica • Octubre de 1895 – 1898',
    essaySectionTitle:
      'La Primera Revolució d’Independència de Cuba, la Participació dels Estats Units i la Visió Profètica dels Espanyols de 1895',
    historicalBlocks: [
      {
        kicker: 'I. El Context de 1895–1898 i la Participació dels Estats Units',
        title: 'Per què el moviment separatista de 1895 no es basava en principis democràtics i republicans purs',
        paragraphs: [
          'Quan el febrer de 1895 esclatà la insurrecció armada a Cuba —coneguda històricament com la Primera Revolució Cubana o Guerra d’Independència de Cuba (1895–1898), totalment anterior i distinta de la revolució comunista de Fidel Castro del 1959—, el conflicte estigué des del primer moment marcat per l’ambició geopolítica i financera dels Estats Units. Trusts sucrers, sindicats financers de Nova York i la premsa sensacionalista nord-americana finançaren expedicions i empenyeren Washington cap a la intervenció militar directa de 1898 arran de l’explosió del cuirassat USS Maine a l’Havana.',
          'Per als espanyols d’aquella època —i especialment per a republicans íntegres com el vinarossenc José Adell y Fons, defensor de la democràcia fonamentada en els principis, el sufragi i la llei—, el futur que aquell moviment independentista reservava a Cuba no reposava sobre ideals democràtics ni republicans sincers, sinó sobre oligarquies i interessos polítics i econòmics obscurs decidits a transformar l’illa en un enclavament subordinat al capital especulatiu.',
        ],
      },
      {
        kicker: 'II. L’Advertiment Confirmat pel Segle XX (1902–1950)',
        title: 'De l’Esmena Platt a l’illa dels casinos, el joc i la contravenció',
        paragraphs: [
          'El desenllaç del 1898 confirmà punt per punt aquella diagnosi. Després del Tractat de París i de l’ocupació militar nord-americana (1898–1902), els Estats Units imposaren a Cuba l’Esmena Platt (1901), tutelant la seua sobirania, les seues finances i bases navals com Guantánamo, mentre grans corporacions i oligarquies acaparaven la riquesa insular.',
          'Durant les primeres dècades del segle XX —molt abans de 1959—, aquella república mediatitzada es convertí en epicentre hemisfèric de casinos, cases de joc, loteries venals, contraban i contravenció sota l’ombra de màfies i oligarquies corruptes: exactament la desfiguració moral i institucional que els espanyols de 1895 havien denunciat i combatut.',
        ],
      },
      {
        kicker: 'III. Octubre de 1895 a Rio de Janeiro',
        title: 'José Adell al capdavant de la unió financera i institucional de la comunitat espanyola',
        paragraphs: [
          'A Rio de Janeiro, després de rebre una pedrada al cap durant els aldarulls al Largo de São Francisco de Paula i de mantindre la seua cèlebre polèmica amb el magistrat brasiler Lúcio de Mendonça el setembre de 1895, José Adell no es feu enrere: des del seu taller i redacció a la Rua da Ajuda —on hui s’alça el Theatro Municipal— encapçalà l’organització de la Comissió Patriòtica Espanyola.',
          'El 19 d’octubre de 1895, La Unión Española (Any IV, núm. 190) dedicà la seua portada gravada per A. Castaño als dotze membres de la Comissió Patriòtica, reunint republicans com José Adell, tradicionalistes com Gaspar de los Reyes Thous, metges com el Dr. Ricardo Meneses i destacats comerciants i industrials com Benito Martínez, Casiano Fernández i el Comanador Vicente do Pazo en suport financer i institucional a la defensa de Cuba.',
        ],
      },
    ],
    rosterKicker: 'Nòmina Històrica Completa • Els 12 Medallons del Gravat Original',
    rosterTitle: 'Integrants Participants de la Comissió Patriòtica Espanyola (19 d’Octubre de 1895)',
    rosterSubtitle:
      'Relació íntegra dels dotze membres retratats a la primera plana de La Unión Española en l’ordre exacte de la imatge original, amb les seues notes biogràfiques documentades a l’arxiu i a la web.',
    leaderBadge: '★ Encapçalà aquesta Lluita Històrica',
    memberOrderLabel: 'Medalló Núm.',
    engravedRibbonLabel: 'Inscripció al gravat:',
    viewInternalDossierLabel: 'Vore Dossier al Memorial →',
    illustratorBoxTitle: '🎨 Sobre l’Autor del Gravat Original: A. Castaño (Rio de Janeiro, 1895)',
    illustratorBoxText:
      'Al peu del medalló central inferior figura la signatura «A. Castaño», dibuixant i litògraf actiu a la premsa il·lustrada de Rio de Janeiro a la fi del segle XIX. L’artista enllaçà els dotze retrats amb flora tropical brasilera i una vinyeta marítima de la Badia de Guanabara amb vapors transatlàntics, símbol del vincle entre la diàspora espanyola del Brasil i la defensa d’Ultramar.',
  },

  pt: {
    navShort: 'Comissão Patriótica (Cuba 1895)',
    navFull: 'Comissão Patriótica de 1895 — Defesa de Cuba',
    metaTitle:
      'La Unión Española e a Comissão Patriótica de 1895: José Adell à Frente da Defesa de Cuba na Primeira Revolução de Independência com Participação dos EUA',
    metaDescription:
      'Publicação histórica de La Unión Española (Rio de Janeiro, 19 de outubro de 1895): como José Adell encabeçou a Comissão Patriótica de apoio financeiro e institucional contra a Primeira Revolução de Independência de Cuba (1895–1898, com participação dos EUA), que levou Cuba a se tornar um país de jogatina e contravenção sob oligarquias e interesses escusos. Lista completa e biografias dos 12 integrantes.',
    badge: '🇪🇸 Evento Histórico da Comunidade Espanhola • La Unión Española • Rio de Janeiro, 19 de Outubro de 1895',
    heroTitle:
      'A Comissão Patriótica de 1895: José Adell à Frente da União Espanhola na Defesa de Cuba contra Oligarquias, Interesses Escusos e a Intervenção dos EUA',
    heroSubtitle:
      'Em 19 de outubro de 1895, diante da Primeira Revolução Cubana — a Revolução de Independência (1895–1898), que contou com a decisiva participação dos Estados Unidos —, a comunidade espanhola do Rio de Janeiro uniu-se em uma histórica Comissão Patriótica de apoio financeiro e institucional encabeçada por D. José Adell. Os espanhóis daquela época viam com impressionante lucidez que o futuro de Cuba sob aquele movimento separatista não se fundava em princípios democráticos e republicanos legítimos, mas sim em oligarquias e interesses políticos e econômicos escusos que acabariam transformando a ilha em um país de jogatina e contravenção.',
    chronologicalClarificationTitle:
      '📌 Marco Histórico Essencial: Trata-se da Primeira Revolução Cubana — a Revolução de Independência (1895–1898) com Participação dos EUA — e NÃO da Segunda Revolução Comunista de Fidel Castro (1959)',
    chronologicalClarificationText:
      'É fundamental destacar que este episódio histórico de 1895 refere-se exclusivamente à Primeira Revolução Cubana — a guerra e revolução separatista de independência de 1895–1898, que teve a intervenção direta dos Estados Unidos da América —, e NÃO à segunda revolução cubana (a revolução comunista liderada por Fidel Castro mais de sessenta anos depois, em 1959). Foi justamente o desfecho dessa Primeira Revolução com a intervenção militar e econômica norte-americana de 1898 e a imposição da Emenda Platt (1901) que confirmou o alerta dos espanhóis de 1895: ao longo da primeira metade do século XX (antes de 1959), Cuba viu sua soberania capturada por oligarquias, monopólios estrangeiros, cassinos, jogatina institucionalizada e redes internacionais de contravenção.',
    leaderHighlightTitle: '★ D. José Adell Encabeçou Esta Luta Histórica no Rio de Janeiro',
    leaderHighlightText:
      'Republicano convicto, humanista e redator-chefe de La Unión Española na Rua da Ajuda, José Adell y Fons (“Pepe Adell”, retratado no quinto medalhão aos 27 anos de idade) liderou intelectual, jornalística e institucionalmente a mobilização da colônia espanhola poucas semanas após ter sido ferido por uma pedrada na cabeça nos tumultos de rua do Rio de Janeiro.',
    originalScanBadge: '📰 Capa Original Digitalizada • La Unión Española (Ano IV, Nº 190 • 19.10.1895)',
    originalScanCaption:
      'Litografia histórica de capa assinada por A. Castaño com vista da Baía de Guanabara e os 12 medalhões da Comissão Patriótica Espanhola do Rio de Janeiro.',
    openFullDossierBtn: 'Abrir Publicação Completa e as 12 Biografias →',
    openWorkRecordBtn: 'Ver Ficha no Acervo (Obra Nº 73) →',
    zoomHint: 'Clique na gravura original para ampliar em tela cheia.',
    transcriptionHeading:
      '📜 Transcrição Completa do Documento Original (Posicionada Abaixo do Artigo Original)',
    transcriptionSubnote:
      'Transcrição integral em Português de todos os textos, cabeçalhos e legendas gravados na capa original de La Unión Española (19 de outubro de 1895):',
    transcriptionBlocks: [
      'CABEÇALHO DO JORNAL: «LA UNIÓN ESPAÑOLA» [Carimbo circular de registro documental: «R»].',
      'DATAÇÃO SOB O CABEÇALHO: «ANO IV — Nº 190 — RIO DE JANEIRO, 19 DE OUTUBRO DE 1895» («AÑO IV — Nº 190 — RIO DE JANEIRO, 19 OCTUBRE 1895»).',
      'COMPOSIÇÃO ICONOGRÁFICA CENTRAL (12 MEDALHÕES OVAIS ENTRE FLORA TROPICAL E VINHETA MARÍTIMA DA BAÍA DO RIO DE JANEIRO COM NAVIOS A VAPOR):\n• Primeira fileira (da esquerda para a direita): «D. BENITO MARTÍNEZ» — «D. CASIANO FERNÁNDEZ» — «D. LUÍS DE LA FUENTE».\n• Segunda fileira: «Dr. RICARDO MENESES» — «D. JOSÉ ADELL».\n• Terceira fileira (centro e direita, ao lado da paisagem naval): «D. GASPAR DE LOS R. THOUS» — «D. FIDEL VERGARA».\n• Quarta fileira: «D. P. SIEIRO GARRIDO» — «D. LUÍS SUÁREZ».\n• Fileira inferior (da esquerda para a direita): «D. FRANCISCO BRANDARIZ» — «D. VICENTE DO PAZO» — «D. EZEQUIEL C. AREAS».',
      'LEGENDA COMEMORATIVA DE RODAPÉ: «HOMENAGEM À COMISSÃO PATRIÓTICA» («HOMENAGE A LA COMISION PATRIOTICA»).',
    ],
    transcriptionSignatureLine:
      'Assinatura do artista litógrafo junto ao medalhão central inferior: «A. Castaño» (La Unión Española, Rio de Janeiro, 19 de outubro de 1895).',
    essaySectionKicker: 'Ensaio Histórico e Geopolítico • Outubro de 1895 – 1898',
    essaySectionTitle:
      'A Primeira Revolução de Independência de Cuba (1895–1898), a Participação dos EUA e a Clarividência da Comunidade Espanhola',
    historicalBlocks: [
      {
        kicker: 'I. A Primeira Revolução Cubana (1895–1898) e a Ingerência dos Estados Unidos',
        title: 'Um movimento capturado por oligarquias e interesses geopolíticos norte-americanos, e não por ideais republicanos puros',
        paragraphs: [
          'Quando eclodiu a insurreição armada em Cuba em fevereiro de 1895 — historicamente denominada Primeira Revolução Cubana ou Guerra de Independência de Cuba (1895–1898), inteiramente distinta e mais de sessenta anos anterior à revolução comunista de Fidel Castro em 1959 —, o conflito foi desde o início alimentado pela ativa participação financeira, propagandística e geopolítica dos Estados Unidos. Grandes grupos açucareiros, sindicatos financeiros sediados em Nova York e a campanha inflamada da imprensa sensacionalista norte-americana (Hearst e Pulitzer) financiaram expedições armadas e pavimentaram a intervenção militar direta dos EUA em 1898, após a explosão do encouraçado USS Maine no porto de Havana.',
          'Os espanhóis daquela época — sobretudo pensadores republicanos íntegros e humanistas como José Adell y Fons, que dedicou toda a vida à democracia fundada na ética, no voto livre e na educação — enxergavam com profunda clareza que o futuro reservado à ilha por aquele movimento separatista não se apoiava em verdadeiros princípios democráticos e republicanos. Ao contrário: percebiam tratar-se de uma engrenagem ligada a oligarquias locais e a grupos econômicos estrangeiros interessados em arrancar Cuba da Espanha para transformá-la em entreposto de interesses políticos e econômicos escusos.',
        ],
      },
      {
        kicker: 'II. O Alerta Confirmado pela História (1898–Anos 1950)',
        title: 'Da ocupação dos EUA e da Emenda Platt à transformação de Cuba em reduto de jogatina e contravenção',
        paragraphs: [
          'Os acontecimentos que se seguiram à intervenção norte-americana de 1898 comprovaram tragicamente a previsão feita pelos espanhóis em 1895. Com o Tratado de Paris e a ocupação militar dos Estados Unidos (1898–1902), foi imposta à Constituição cubana a chamada Emenda Platt (1901), que subtraía a plena soberania da ilha, garantia a Washington o direito de intervenção militar e entregava bases estratégicas como Guantánamo, ao mesmo tempo em que latifúndios açucareiros e concessões públicas passavam ao controle de trustes estrangeiros e oligarquias clientelistas.',
          'Privada de um projeto autenticamente republicano e soberano, a Cuba das primeiras décadas do século XX — muito antes da revolução comunista de 1959 — acabou convertida em sinônimo mundial de cassinos luxuosos, loterias viciadas, jogatina desenfreada, contrabando e contravenção sob a proteção de chefes políticos venais e sindicatos internacionais do jogo. Aquela degradação institucional foi exatamente o destino sombrio contra o qual José Adell e a colônia espanhola haviam alertado em 1895.',
        ],
      },
      {
        kicker: 'III. A União da Comunidade Espanhola no Rio de Janeiro (19 de Outubro de 1895)',
        title: 'Como D. José Adell encabeçou o apoio financeiro e institucional em defesa de Cuba e seus territórios',
        paragraphs: [
          'No Rio de Janeiro de 1895, o debate sobre Cuba incendiava as ruas e os jornais. Poucas semanas antes desta publicação, José Adell fora atingido por uma pedrada na cabeça durante manifestações pró-insurretos no Largo de São Francisco de Paula e respondera com altivez intelectual à carta aberta do Ministro do STF Lúcio de Mendonça nas páginas de O Paiz e La Unión Española. Com a fronte erguida, Adell assumiu a linha de frente para unir toda a coletividade espanhola do Brasil em torno da defesa institucional e financeira de Cuba e dos territórios espanhóis.',
          'Em 19 de outubro de 1895, a edição nº 190 (Ano IV) de La Unión Española — impressa na histórica casinha colonial da Rua da Ajuda, onde hoje se ergue o Theatro Municipal do Rio de Janeiro — estampou em página inteira a gravura «Homenage á la Comisión Patriótica», assinada por A. Castaño. Ali aparecem lado a lado o republicano valenciano D. José Adell, o fundador carlista D. Gaspar de los Reyes Thous, o médico sevilhano Dr. Ricardo Meneses, o hoteleiro galego Comendador D. Vicente do Pazo e importantes industriais e comerciantes espanhóis do Rio, selando uma união cívica exemplar acima de quaisquer divergências partidárias.',
        ],
      },
    ],
    rosterKicker: 'Lista Oficial Completa conforme a Gravura • Os 12 Medalhões de 1895',
    rosterTitle: 'Integrantes Participantes da Comissão Patriótica Espanhola (19 de Outubro de 1895)',
    rosterSubtitle:
      'Relação integral dos doze participantes retratados na capa de La Unión Española na exata ordem visual da gravura histórica, acompanhada de pequena biografia documentada na web e no acervo (quando disponível nos registros históricos).',
    leaderBadge: '★ Encabeçou esta Luta Histórica',
    memberOrderLabel: 'Medalhão Nº',
    engravedRibbonLabel: 'Nome gravado na imagem:',
    viewInternalDossierLabel: 'Ver Dossiê no Memorial →',
    illustratorBoxTitle: '🎨 Sobre o Artista da Gravura Original: A. Castaño (Rio de Janeiro, 1895)',
    illustratorBoxText:
      'Ao pé do medalhão central inferior lê-se a assinatura «A. Castaño», desenhista e litógrafo atuante na imprensa ilustrada do Rio de Janeiro no fim do século XIX. O artista entrelaçou os doze retratos ovais em ramos de palmeiras e flora tropical brasileira, abrindo à esquerda uma vista marítima da Baía de Guanabara cruzada por navios a vapor — símbolo da ponte atlântica entre a comunidade espanhola do Brasil e a defesa de Cuba.',
  },
};
