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

export interface NeocolonialBullet {
  lead: string;
  text: string;
}

export interface NeocolonialPillar {
  number: string;
  title: string;
  intro?: string;
  bullets: NeocolonialBullet[];
}

export interface NeocolonialDossier {
  kicker: string;
  title: string;
  intro: string;
  pillars: NeocolonialPillar[];
  closingSynthesisTitle: string;
  closingSynthesisText: string;
}

export interface ComisionLocaleContent {
  navShort: string;
  navFull: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  chronologicalBadge: string;
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
  neocolonialDossier: NeocolonialDossier;
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
      bio: 'Hijo autodidacta de Vinaròs (Castellón), secretario de redacción en Barcelona a los 17 años, pensador republicano humanista y maestro grabador en metales. José Adell encabezó intelectual, periodística e institucionalmente la Comisión Patriótica en Río de Janeiro para la última fase de la Revolución de Independencia de Cuba, marcada por la interferencia directa de los Estados Unidos: tras recibir una pedrada en la cabeza en las manifestaciones callejeras y rebatir con altura doctrinal a Lúcio de Mendonça, unió a la colonia española advirtiendo que aquel movimiento —capturado por Washington y por oligarquías azucareras— frustraría la verdadera soberanía y entregaría la isla al capital extranjero, al contrabando y al imperio de los casinos durante la República Neocolonial (1902–1958). Este medallón conserva su auténtico retrato grabado.',
      webSourceNote: 'Figura central de este Memorial (73 obras y 89 páginas originales preservadas, 1885–1927).',
    },
    va: {
      roleTitle: 'Periodista Republicà, Redactor en Cap de «La Unión Española» i Líder d’aquesta Lluita Patriòtica',
      bio: 'Fill autodidacte de Vinaròs (Castelló), secretari de redacció a Barcelona als 17 anys, pensador republicà humanista i mestre gravador en metalls. José Adell encapçalà intel·lectualment, periodísticament i institucionalment la Comissió Patriòtica a Rio de Janeiro per a l’última fase de la Revolució d’Independència de Cuba, marcada per la interferència directa dels Estats Units: després de rebre una pedrada al cap i debatre amb Lúcio de Mendonça, uní la colònia espanyola advertint que aquell moviment —tutelat per Washington i per oligarquies sucreres— frustraria la sobirania real i lliuraria l’illa al capital estranger, al contraban i a la màfia dels casinos durant la República Neocolonial (1902–1958). Aquest medalló conserva el seu retrat autèntic gravat.',
      webSourceNote: 'Figura central d’aquest Memorial (73 obres i 89 pàgines originals preservades, 1885–1927).',
    },
    pt: {
      roleTitle: 'Jornalista Republicano, Redator-Chefe de «La Unión Española» e Líder que Encabeçou esta Luta',
      bio: 'Filho autodidata de Vinaròs (Castellón), secretário de redação em Barcelona aos 17 anos, pensador republicano humanista e mestre gravador em metais. José Adell encabeçou intelectual, jornalística e institucionalmente a Comissão Patriótica no Rio de Janeiro voltada à última fase da Revolução de Independência de Cuba, quando houve a interferência direta dos Estados Unidos: após ser ferido na cabeça nos tumultos de rua e debater com o Ministro Lúcio de Mendonça, uniu a comunidade espanhola alertando com clarividência que aquele movimento — tutelado pelos EUA e por oligarquias açucareiras — frustraria a independência real e conduziria Cuba à República Neocolonial (1902–1958), dominada por capital estrangeiro, contrabando, máfia e cassinos. Este medalhão preserva seu retrato autêntico.',
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
    navShort: 'Comisión Patriótica (Cuba)',
    navFull: 'Comisión Patriótica — Última Fase de la Revolución e Interferencia de EE. UU.',
    metaTitle:
      'La Unión Española y la Comisión Patriótica: José Adell en Defensa de Cuba en la Última Fase de la Revolución con Interferencia Directa de EE. UU.',
    metaDescription:
      'Publicación histórica de La Unión Española (Río de Janeiro): cómo José Adell encabezó la Comisión Patriótica para la última fase de la Revolución de Independencia de Cuba cuando hubo interferencia directa de los EE. UU., anticipando la República Neocolonial (1902–1958), la Enmienda Platt, las oligarquías, la Ley Seca y el imperio mafioso de los casinos.',
    badge: '🇪🇸 Documento Histórico • La Unión Española • Última Fase de la Revolución e Interferencia Directa de EE. UU.',
    heroTitle:
      'La Comisión Patriótica en la Última Fase de la Revolución Cubana: José Adell al Frente de la Unión Española ante la Interferencia Directa de los EE. UU.',
    heroSubtitle:
      'Constituida para la última y decisiva fase de la Revolución de Independencia de Cuba —marcada por la interferencia directa de los Estados Unidos de América, que culminó en 1898—, la Comisión Patriótica de Río de Janeiro unió financiera e institucionalmente a la comunidad española bajo el liderazgo de D. José Adell. Los españoles de aquella época advertían con impresionante lucidez que aquel movimiento no engendraría una república soberana y democrática, sino la llamada República Neocolonial (1902–1958): una estructura tutelada por Washington (vía Enmienda Platt) al servicio de oligarquías locales, capital extranjero, contrabando, crimen organizado y turismo mafioso de casinos.',
    chronologicalBadge: 'ÚLTIMA FASE (1895–1898) • INTERFERENCIA DIRECTA DE EE. UU.',
    chronologicalClarificationTitle:
      '📌 Marco Histórico Fundamental: La Última Fase de la Revolución de Independencia con Interferencia Directa de EE. UU. (1895–1898) y el Origen de la «República Neocolonial» (1902–1958)',
    chronologicalClarificationText:
      'La Comisión Patriótica actuó específicamente para la última fase de la Revolución de Independencia cubana (tras las guerras anteriores de 1868–1878 y 1879–1880), cuando se produjo la interferencia directa —financiera, geopolítica y militar— de los Estados Unidos, muy anterior y distinta de la revolución comunista de Fidel Castro de 1959. En efecto, la independencia formal de 1898 fue frustrada por la tutela estadounidense mediante la Enmienda Platt, instaurando la República Neocolonial (1902–1958), dominada por oligarquías azucareras, monopolios norteamericanos, el contrabando de la Ley Seca (1920) y la alianza entre la Mafia estadounidense (Meyer Lansky y Lucky Luciano) y la dictadura de Fulgencio Batista: exactamente el abismo institucional contra el cual habían alertado José Adell y la colonia española.',
    leaderHighlightTitle: '★ D. José Adell Encabezó Esta Lucha Cívica y Patriótica en Río de Janeiro',
    leaderHighlightText:
      'Republicano convencido, demócrata humanista y redactor jefe de La Unión Española en la Rua da Ajuda, José Adell y Fons («Pepe Adell», retratado en el quinto medallón) lideró la articulación intelectual, periodística e institucional de esta movilización en la etapa decisiva del conflicto cubano, tras haber sufrido una pedrada en la cabeza defendiendo la dignidad española en las calles cariocas.',
    originalScanBadge: '📰 Portada Grabada Original • La Unión Española (Año IV, Nº 190 • Río de Janeiro)',
    originalScanCaption:
      'Litografía histórica de primera plana firmada por A. Castaño con vista de la Bahía de Guanabara y los 12 medallones de la Comisión Patriótica Española de Río de Janeiro.',
    openFullDossierBtn: 'Abrir Dossier Histórico y las 12 Biografías →',
    openWorkRecordBtn: 'Ver Ficha en el Archivo (Obra Nº 73) →',
    zoomHint: 'Clique en la portada original para ampliarla a pantalla completa.',
    transcriptionHeading:
      '📜 Transcripción Íntegra del Documento Original (Situada Debajo del Grabado Original)',
    transcriptionSubnote:
      'Transcripción diplomática y descriptiva en Castellano de todas las inscripciones visibles en la portada de La Unión Española:',
    transcriptionBlocks: [
      'CABECERA DEL PERIÓDICO: «LA UNIÓN ESPAÑOLA» [Sello circular de registro de archivo: «R»].',
      'DATACIÓN BAJO LA CABECERA: «AÑO IV — Nº 190 — RÍO DE JANEIRO, 19 OCTUBRE 1895».',
      'COMPOSICIÓN ICONOGRÁFICA CENTRAL (12 MEDALLONES OVALADOS ENTRE FLORA TROPICAL Y VISTA MARÍTIMA DE LA BAHÍA DE RÍO DE JANEIRO CON VAPORES):\n• Fila superior (izquierda a derecha): «D. BENITO MARTÍNEZ» — «D. CASIANO FERNÁNDEZ» — «D. LUÍS DE LA FUENTE».\n• Segunda fila: «Dr. RICARDO MENESES» — «D. JOSÉ ADELL».\n• Tercera fila (centro y derecha, junto a la viñeta naval): «D. GASPAR DE LOS R. THOUS» — «D. FIDEL VERGARA».\n• Cuarta fila: «D. P. SIEIRO GARRIDO» — «D. LUÍS SUÁREZ».\n• Fila inferior (izquierda a derecha): «D. FRANCISCO BRANDARIZ» — «D. VICENTE DO PAZO» — «D. EZEQUIEL C. AREAS».',
      'PIE CONMEMORATIVO DE PORTADA: «HOMENAGE Á LA COMISIÓN PATRIÓTICA».',
    ],
    transcriptionSignatureLine:
      'Firma del artista grabador al pie del medallón central inferior: «A. Castaño» (La Unión Española, Río de Janeiro).',
    essaySectionKicker: 'Análisis Histórico y Geopolítico • De la Interferencia de EE. UU. (1895–1898) a la República Neocolonial (1902–1958)',
    essaySectionTitle:
      'La Última Fase de la Revolución Cubana con Interferencia Directa de EE. UU. y la Profecía Confirmada de los Españoles',
    historicalBlocks: [
      {
        kicker: 'I. La Última Fase de la Revolución y la Interferencia Directa de los Estados Unidos',
        title: 'Una contienda capturada por la intervención norteamericana y las oligarquías, lejos de los principios republicanos puros',
        paragraphs: [
          'La Comisión Patriótica Española desplegó su esfuerzo financiero e institucional para la última y definitiva fase del ciclo insurreccional cubano (1895–1898), cuando se consumó la interferencia directa de los Estados Unidos de América. A diferencia de los alzamientos anteriores del siglo XIX, esta fase final estuvo decisivamente dirigida y capitalizada desde el exterior por juntas financieras en Nueva York, grandes consorcios azucareros, campañas de la prensa sensacionalista estadounidense y, finalmente, por la invasión militar directa de Washington en 1898.',
          'Para los españoles lúcidos de aquella hora —y de modo singular para un republicano íntegro como José Adell y Fons, defensor de la libertad cimentada en la ética, el sufragio y la ley—, resultaba cristalino que el desenlace impuesto por aquella injerencia extranjera no traería una república verdaderamente democrática ni soberana, sino el sometimiento de Cuba a intereses políticos y económicos oscuros.',
        ],
      },
      {
        kicker: 'II. 1898 y la Tutela de la Enmienda Platt',
        title: 'La independencia frustrada y el nacimiento de la «República Neocolonial» (1902–1958)',
        paragraphs: [
          'La historia confirmó punto por punto el diagnóstico de la Comisión Patriótica. La independencia formal alcanzada en 1898 quedó inmediatamente frustrada por la ocupación militar y la tutela institucional de los Estados Unidos mediante la imposición de la Enmienda Platt (1901), que otorgaba a Washington el derecho de intervención en la isla y subordinaba su economía y su política exterior.',
          'Sobre esa tutela nació la llamada República Neocolonial (1902–1958): un orden político y económico diseñado para favorecer a las oligarquías locales aliadas al capital extranjero y que, a partir de la década de 1920 y hasta los años cincuenta, convirtió a La Habana en epicentro continental del contrabando, el crimen organizado norteamericano y el imperio de los casinos.',
        ],
      },
      {
        kicker: 'III. La Unión de la Colonia Española en Río de Janeiro',
        title: 'D. José Adell al frente del esfuerzo financiero e institucional de «La Unión Española»',
        paragraphs: [
          'En Río de Janeiro, tras haber sido herido de una pedrada en la cabeza durante las manifestaciones callejeras y haber sostenido con altura intelectual su célebre polémica con el magistrado brasileño Lúcio de Mendonça, Pepe Adell asumió desde su taller y redacción en la antigua Rua da Ajuda —solar donde hoy se alza el Theatro Municipal— el liderazgo cívico de la Comisión Patriótica.',
          'En la histórica primera plana grabada por A. Castaño para La Unión Española se fundieron en un solo abrazo patriótico el republicano valenciano D. José Adell, el fundador tradicionalista D. Gaspar de los Reyes Thous, el médico sevillano Dr. Ricardo Meneses, el hotelero gallego Comendador D. Vicente do Pazo y los más destacados comerciantes e industriales españoles de Río de Janeiro en defensa de Cuba y de sus territorios.',
        ],
      },
    ],
    neocolonialDossier: {
      kicker: 'Evidencia Histórica Posterior • La «República Neocolonial» en Cuba (1902–1958)',
      title: 'Cómo se Cumplió la Advertencia de la Comisión Patriótica: Los 3 Pilares de la Tutela de EE. UU., las Oligarquías y el Imperio de la Jugatina',
      intro:
        'La independencia formal de 1898 —resultante de aquella última fase revolucionaria con interferencia directa de los Estados Unidos— quedó frustrada por la tutela norteamericana (vía Enmienda Platt), engendrando entre 1902 y 1958 una estructura que favoreció a las oligarquías locales, al capital extranjero y, desde los años veinte, al crimen organizado y al turismo de casinos a través de tres pilares históricos principales:',
      pillars: [
        {
          number: '01',
          title: '1. Dominio de las Oligarquías y del Capital Extranjero',
          bullets: [
            {
              lead: 'La «República de Generales y Doctores»:',
              text: 'En los primeros años de la República Neocolonial, el poder quedó concentrado en manos de la élite latifundista azucarera y de políticos vinculados a los intereses comerciales norteamericanos, con elecciones frecuentemente marcadas por fraudes, clientelismo y corrupción administrativa.',
            },
            {
              lead: 'Monocultivo, dependencia y «tiempo muerto»:',
              text: 'Empresas de los Estados Unidos compraron gran parte de las tierras más fértiles, centrales azucareras, ferrocarriles y bancos. Cuba quedó atada a las cuotas de exportación de azúcar hacia EE. UU., enriqueciendo a una reducida élite local mientras la mayoría campesina vivía en condiciones precarias y sometida al desempleo estacional (el llamado «tiempo muerto» entre cosechas).',
            },
          ],
        },
        {
          number: '02',
          title: '2. La Ley Seca en EE. UU. (1920) y la Explosión de la Jugatina y el Contrabando',
          intro:
            'El papel de La Habana como centro de juegos, alcohol y contrabando cobró fuerza explosiva a partir de 1920, al entrar en vigor la Ley Seca (Prohibición) en los Estados Unidos:',
          bullets: [
            {
              lead: 'Destino turístico sin restricciones a 145 km de Florida:',
              text: 'Situada a apenas 145 km de las costas de Florida, La Habana se convirtió en el refugio inmediato para turistas estadounidenses en busca de alcohol, cabarés, prostitución y apuestas —actividades prohibidas entonces en territorio norteamericano—.',
            },
            {
              lead: 'Plataforma internacional de contrabando:',
              text: 'Cuba pasó a ser uno de los principales entrepuertos para el contrabando de ron y otras bebidas ilegales hacia la costa sur de los Estados Unidos, enriqueciendo a contrabandistas locales y a redes criminales norteamericanas.',
            },
          ],
        },
        {
          number: '03',
          title: '3. La Mafia Norteamericana y la Dictadura de Fulgencio Batista (1930–1950)',
          intro:
            'Entre las décadas de 1930 y 1950 —especialmente bajo la influencia y los gobiernos de Fulgencio Batista, autor del golpe de Estado de 1952—, el negocio de los casinos fue institucionalizado desde el poder:',
          bullets: [
            {
              lead: 'Alianza directa con Meyer Lansky y Lucky Luciano:',
              text: 'Jefes de la Mafia de los Estados Unidos, como Meyer Lansky y Lucky Luciano, sellaron acuerdos directos con Batista y autoridades cubanas, obteniendo exenciones fiscales, licencias de juego y protección policial a cambio de sobornos millonarios.',
            },
            {
              lead: 'El Imperio de los Casinos y el lavado de dinero:',
              text: 'En los años cincuenta, La Habana albergaba hoteles-casinos de lujo controlados por mafiosos —como el Hotel Nacional, el Riviera, el Capri y el Tropicana—, operando además como centro de lavado de dinero y ruta de tráfico de narcóticos hacia América del Norte.',
            },
          ],
        },
      ],
      closingSynthesisTitle: '⚖️ Desenlace Histórico: De la Frustración de 1898 a la Ruptura de 1959',
      closingSynthesisText:
        'Ese contraste extremo —entre el lujo mafioso de los casinos de La Habana, los privilegios de la oligarquía y la pobreza profunda en el interior de la isla, sumado a la represión política de la dictadura de Fulgencio Batista— confirmó trágicamente lo que José Adell y la Comisión Patriótica Española habían advertido durante la última fase de la guerra de 1895–1898, y fue precisamente el combustible social y nacionalista que décadas más tarde alimentó la segunda ruptura: la Revolución Cubana de 1959 liderada por Fidel Castro.',
    },
    rosterKicker: 'Nómina Histórica Completa • Los 12 Medallones del Grabado Original',
    rosterTitle: 'Integrantes Participantes de la Comisión Patriótica Española',
    rosterSubtitle:
      'Relación íntegra de los doce miembros retratados en la primera plana de La Unión Española en el orden exacto de la litografía original, acompañada de sus datos biográficos documentados en archivos históricos y en la web.',
    leaderBadge: '★ Encabezó esta Lucha Histórica',
    memberOrderLabel: 'Medallón Nº',
    engravedRibbonLabel: 'Inscripción en el grabado:',
    viewInternalDossierLabel: 'Ver Dossier en el Memorial →',
    illustratorBoxTitle: '🎨 Sobre el Autor del Grabado Original: A. Castaño (Río de Janeiro)',
    illustratorBoxText:
      'Al pie del medallón central inferior aparece la rúbrica artística «A. Castaño», dibujante y litógrafo activo en la prensa ilustrada de Río de Janeiro a finales del siglo XIX. El artista enmarcó los doce retratos en óvalos entrelazados por palmeras, bambúes y flores tropicales brasileñas, abriendo a la izquierda una ventana marítima sobre la Bahía de Guanabara surcada por vapores transatlánticos: símbolo visual del puente inquebrantable entre la emigración española del Brasil y la defensa de Cuba.',
  },

  va: {
    navShort: 'Comissió Patriòtica (Cuba)',
    navFull: 'Comissió Patriòtica — Última Fase de la Revolució i Interferència dels EUA',
    metaTitle:
      'La Unión Española i la Comissió Patriòtica: José Adell en Defensa de Cuba en l’Última Fase de la Revolució amb Interferència Directa dels EUA',
    metaDescription:
      'Publicació històrica de La Unión Española (Rio de Janeiro): com José Adell encapçalà la Comissió Patriòtica per a l’última fase de la Revolució d’Independència de Cuba quan hi hagué interferència directa dels EUA, anticipant la República Neocolonial (1902–1958), l’Esmena Platt, les oligarquies, la Llei Seca i l’imperi mafiós dels casinos.',
    badge: '🇪🇸 Document Històric • La Unión Española • Última Fase de la Revolució i Interferència Directa dels EUA',
    heroTitle:
      'La Comissió Patriòtica en l’Última Fase de la Revolució Cubana: José Adell al Capdavant de la Unió Espanyola davant la Interferència Directa dels EUA',
    heroSubtitle:
      'Constituïda per a l’última i decisiva fase de la Revolució d’Independència de Cuba —marcada per la interferència directa dels Estats Units d’Amèrica, que culminà el 1898—, la Comissió Patriòtica de Rio de Janeiro uní financerament i institucionalment la comunitat espanyola sota el lideratge de D. José Adell. Els espanyols d’aquella època advertien amb clarividència que aquell moviment no engendraria una república sobirana i democràtica, sinó l’anomenada República Neocolonial (1902–1958): una estructura tutelada per Washington (via Esmena Platt) al servei d’oligarquies locals, capital estranger, contraban, crim organitzat i turisme mafiós de casinos.',
    chronologicalBadge: 'ÚLTIMA FASE (1895–1898) • INTERFERÈNCIA DIRECTA DELS EUA',
    chronologicalClarificationTitle:
      '📌 Marc Històric Fonamental: L’Última Fase de la Revolució d’Independència amb Interferència Directa dels EUA (1895–1898) i l’Origen de la «República Neocolonial» (1902–1958)',
    chronologicalClarificationText:
      'La Comissió Patriòtica actuà específicament per a l’última fase de la Revolució d’Independència cubana (després de les guerres anteriors de 1868–1878 i 1879–1880), quan es produí la interferència directa —financera, geopolítica i militar— dels Estats Units, molt anterior i distinta de la revolució comunista de Fidel Castro del 1959. En efecte, la independència formal de 1898 fou frustrada per la tutela nord-americana mitjançant l’Esmena Platt, instaurant la República Neocolonial (1902–1958), dominada per oligarquies sucreres, monopolis dels EUA, el contraban de la Llei Seca (1920) i l’aliança entre la Màfia nord-americana (Meyer Lansky i Lucky Luciano) i la dictadura de Fulgencio Batista: exactament l’abisme institucional contra el qual havien alertat José Adell i la colònia espanyola.',
    leaderHighlightTitle: '★ D. José Adell Encapçalà Aquesta Lluita Cívica i Patriòtica a Rio de Janeiro',
    leaderHighlightText:
      'Republicà convençut, demòcrata humanista i redactor en cap de La Unión Española a la Rua da Ajuda, José Adell y Fons («Pepe Adell», retratat al cinqué medalló) liderà la mobilització intel·lectual, periodística i institucional de la colònia espanyola en aquesta etapa decisiva del conflicte cubà, després d’haver patit una pedrada al cap defensant la dignitat espanyola als carrers de Rio.',
    originalScanBadge: '📰 Portada Gravada Original • La Unión Española (Any IV, Núm. 190 • Rio de Janeiro)',
    originalScanCaption:
      'Litografia històrica de primera plana signada per A. Castaño amb vista de la Badia de Guanabara i els 12 medallons de la Comissió Patriòtica Espanyola de Rio de Janeiro.',
    openFullDossierBtn: 'Obrir Dossier Històric i les 12 Biografies →',
    openWorkRecordBtn: 'Vore Fitxa a l’Arxiu (Obra Núm. 73) →',
    zoomHint: 'Feu clic a la portada original per ampliar-la a pantalla completa.',
    transcriptionHeading:
      '📜 Transcripció Íntegra del Document Original (Situada Sota el Gravat Original)',
    transcriptionSubnote:
      'Transcripció completa en Valencià de totes les inscripcions visibles a la portada original de La Unión Española:',
    transcriptionBlocks: [
      'CAPÇALERA DEL PERIÒDIC: «LA UNIÓN ESPAÑOLA» [Segell circular de registre d’arxiu: «R»].',
      'DATACIÓ SOTA LA CAPÇALERA: «ANY IV — NÚM. 190 — RIO DE JANEIRO, 19 D’OCTUBRE DE 1895» («AÑO IV — Nº 190 — RIO DE JANEIRO, 19 OCTUBRE 1895»).',
      'COMPOSICIÓ ICONOGRÀFICA CENTRAL (12 MEDALLONS OVALATS ENTRE FLORA TROPICAL I VISTA MARÍTIMA DE LA BADIA DE RIO DE JANEIRO AMB VAPORS):\n• Fila superior (d’esquerra a dreta): «D. BENITO MARTÍNEZ» — «D. CASIANO FERNÁNDEZ» — «D. LUÍS DE LA FUENTE».\n• Segona fila: «Dr. RICARDO MENESES» — «D. JOSÉ ADELL».\n• Tercera fila (centre i dreta, al costat de la vinyeta naval): «D. GASPAR DE LOS R. THOUS» — «D. FIDEL VERGARA».\n• Quarta fila: «D. P. SIEIRO GARRIDO» — «D. LUÍS SUÁREZ».\n• Fila inferior (d’esquerra a dreta): «D. FRANCISCO BRANDARIZ» — «D. VICENTE DO PAZO» — «D. EZEQUIEL C. AREAS».',
      'PEU COMMEMORATIU DE PORTADA: «HOMENATGE A LA COMISSIÓ PATRIÒTICA» («HOMENAGE A LA COMISION PATRIOTICA»).',
    ],
    transcriptionSignatureLine:
      'Signatura de l’artista gravador al peu del medalló central inferior: «A. Castaño» (La Unión Española, Rio de Janeiro).',
    essaySectionKicker: 'Anàlisi Històrica i Geopolítica • De la Interferència dels EUA (1895–1898) a la República Neocolonial (1902–1958)',
    essaySectionTitle:
      'L’Última Fase de la Revolució Cubana amb Interferència Directa dels EUA i la Profecia Confirmada dels Espanyols',
    historicalBlocks: [
      {
        kicker: 'I. L’Última Fase de la Revolució i la Interferència Directa dels Estats Units',
        title: 'Una contesa capturada per la intervenció nord-americana i les oligarquies, lluny dels principis republicans purs',
        paragraphs: [
          'La Comissió Patriòtica Espanyola desplegà el seu esforç financer i institucional per a l’última i definitiva fase del cicle insurreccional cubà (1895–1898), quan es consumà la interferència directa dels Estats Units d’Amèrica. A diferència dels alçaments anteriors del segle XIX, aquesta fase final estigué decisivament impulsada i capitalitzada des de l’exterior per juntes financeres a Nova York, grans trusts sucrers, campanyes de la premsa sensacionalista nord-americana i, finalment, per la invasió militar directa de Washington el 1898.',
          'Per als espanyols lúcids d’aquella hora —i especialment per a republicans íntegres com el vinarossenc José Adell y Fons, defensor de la democràcia fonamentada en l’ètica, el sufragi i la llei—, era evident que el desenllaç imposat per aquella ingerència estrangera no portaria una república veritablement democràtica ni sobirana, sinó la subordinació de Cuba a interessos polítics i econòmics obscurs.',
        ],
      },
      {
        kicker: 'II. 1898 i la Tutela de l’Esmena Platt',
        title: 'La independència frustrada i el naixement de la «República Neocolonial» (1902–1958)',
        paragraphs: [
          'La història confirmà punt per punt aquella diagnosi. La independència formal assolida el 1898 quedà immediatament frustrada per l’ocupació militar i la tutela institucional dels Estats Units mitjançant la imposició de l’Esmena Platt (1901), que atorgava a Washington el dret d’intervenció a l’illa i subordinava la seua economia i la seua política exterior.',
          'Sobre aquesta tutela nasqué l’anomenada República Neocolonial (1902–1958): una estructura política i econòmica que afavorí les oligarquies locals aliades al capital estranger i que, a partir de la dècada de 1920 i fins als anys cinquanta, convertí l’Havana en epicentre continental del contraban, el crim organitzat nord-americà i l’imperi dels casinos.',
        ],
      },
      {
        kicker: 'III. La Unió de la Comunitat Espanyola a Rio de Janeiro',
        title: 'D. José Adell al capdavant de l’esforç financer i institucional de «La Unión Española»',
        paragraphs: [
          'A Rio de Janeiro, després de rebre una pedrada al cap durant els aldarulls al Largo de São Francisco de Paula i de mantindre la seua cèlebre polèmica amb el magistrat brasiler Lúcio de Mendonça, José Adell assumí des del seu taller i redacció a l’antiga Rua da Ajuda —on hui s’alça el Theatro Municipal— el lideratge cívic de la Comissió Patriòtica.',
          'A la històrica primera plana gravada per A. Castaño per a La Unión Española es fongueren en una sola abraçada patriòtica el republicà valencià D. José Adell, el fundador tradicionalista D. Gaspar de los Reyes Thous, el metge sevillà Dr. Ricardo Meneses, l’hoteler gallec Comanador D. Vicente do Pazo i destacats comerciants i industrials espanyols de Rio de Janeiro en defensa de Cuba i dels seus territoris.',
        ],
      },
    ],
    neocolonialDossier: {
      kicker: 'Evidència Històrica Posterior • La «República Neocolonial» a Cuba (1902–1958)',
      title: 'Com es Complí l’Advertiment de la Comissió Patriòtica: Els 3 Pilars de la Tutela dels EUA, les Oligarquies i l’Imperi del Joc',
      intro:
        'La independència formal de 1898 —resultat d’aquella última fase revolucionària amb interferència directa dels Estats Units— fou frustrada per la tutela nord-americana (via Esmena Platt), creant entre 1902 i 1958 una estructura política i econòmica que afavorí oligarquies locals, el capital estranger i, a partir dels anys vint, el crim organitzat i el turisme de casinos a través de tres pilars principals:',
      pillars: [
        {
          number: '01',
          title: '1. Domini de les Oligarquies i del Capital Estranger',
          bullets: [
            {
              lead: 'La «República dels Generals i Doctors»:',
              text: 'En els primers anys de la República Neocolonial, el poder quedà concentrat en mans de l’elit latifundista sucrera i de polítics lligats als interessos comercials nord-americans, amb eleccions sovint marcades per fraus, clientelisme i corrupció administrativa.',
            },
            {
              lead: 'Monocultiu, dependència i «tiempo muerto»:',
              text: 'Empreses dels Estats Units compraren gran part de les terres més fèrtils, fàbriques de sucre («centrales»), ferrocarrils i bancs. Cuba esdevingué dependent de les quotes d’exportació de sucre per al mercat nord-americà, enriquint una petita elit local mentre la majoria rural vivia en condicions precàries i sotmesa a l’atur estacional (l’anomenat «tiempo muerto» entre collites).',
            },
          ],
        },
        {
          number: '02',
          title: '2. La Llei Seca als EUA (1920) i l’Explosió del Joc i el Contraban',
          intro:
            'El paper de l’Havana com a centre de jocs, alcohol i contraban prengué força explosiva a partir de 1920, quan entrà en vigor la Llei Seca (Prohibició) als Estats Units:',
          bullets: [
            {
              lead: 'Destinació turística sense restriccions a 145 km de Florida:',
              text: 'A només 145 km de Florida, l’Havana es convertí en el refugi immediat per a turistes nord-americans a la recerca d’alcohol, cabarets, prostitució i apostes —activitats prohibides als EUA—.',
            },
            {
              lead: 'Ruta internacional de contraban:',
              text: 'Cuba es transformà en un dels principals punts d’embarcament per al contraban de rom i altres begudes il·legals cap a la costa sud dels Estats Units, enriquint contrabandistes locals i xarxes criminals americanes.',
            },
          ],
        },
        {
          number: '03',
          title: '3. La Màfia Nord-americana i la Dictadura de Fulgencio Batista (1930–1950)',
          intro:
            'Entre les dècades de 1930 i 1950 —especialment sota la influència i els governs de Fulgencio Batista, qui encapçalà un colp d’Estat el 1952—, el negoci dels casinos fou institucionalitzat:',
          bullets: [
            {
              lead: 'Aliança directa amb Meyer Lansky i Lucky Luciano:',
              text: 'Caps del crim organitzat dels EUA, com Meyer Lansky i Lucky Luciano, signaren acords directes amb Batista i autoritats cubanes, rebent exempcions fiscals, llicències de joc i protecció policial a canvi de suborns milionaris.',
            },
            {
              lead: 'L’Imperi dels Casinos i el blanqueig de capitals:',
              text: 'En la dècada de 1950, l’Havana acollia hotels-casinos de luxe controlats per mafiosos —com l’Hotel Nacional, el Riviera, el Capri i el Tropicana—, a més de servir com a punt de blanqueig de diners i ruta de tràfic de narcòtics cap a l’Amèrica del Nord.',
            },
          ],
        },
      ],
      closingSynthesisTitle: '⚖️ Desenllaç Històric: De la Frustració de 1898 a la Ruptura de 1959',
      closingSynthesisText:
        'Aquest contrast extrem —entre el luxe mafiós dels casinos de l’Havana, els privilegis de l’oligarquia i la pobresa profunda a l’interior de l’illa, sumat a la repressió política de la dictadura de Fulgencio Batista— confirmà tràgicament allò que José Adell i la Comissió Patriòtica Espanyola havien advertit durant l’última fase de la guerra de 1895–1898, i fou justament el combustible social i nacionalista que dècades més tard alimentà la Revolució Cubana de 1959 liderada per Fidel Castro.',
    },
    rosterKicker: 'Nòmina Històrica Completa • Els 12 Medallons del Gravat Original',
    rosterTitle: 'Integrants Participants de la Comissió Patriòtica Espanyola',
    rosterSubtitle:
      'Relació íntegra dels dotze membres retratats a la primera plana de La Unión Española en l’ordre exacte de la imatge original, amb les seues notes biogràfiques documentades a l’arxiu i a la web.',
    leaderBadge: '★ Encapçalà aquesta Lluita Històrica',
    memberOrderLabel: 'Medalló Núm.',
    engravedRibbonLabel: 'Inscripció al gravat:',
    viewInternalDossierLabel: 'Vore Dossier al Memorial →',
    illustratorBoxTitle: '🎨 Sobre l’Autor del Gravat Original: A. Castaño (Rio de Janeiro)',
    illustratorBoxText:
      'Al peu del medalló central inferior figura la signatura «A. Castaño», dibuixant i litògraf actiu a la premsa il·lustrada de Rio de Janeiro a la fi del segle XIX. L’artista enllaçà els dotze retrats amb flora tropical brasilera i una vinyeta marítima de la Badia de Guanabara amb vapors transatlàntics, símbol del vincle entre la diàspora espanyola del Brasil i la defensa de Cuba.',
  },

  pt: {
    navShort: 'Comissão Patriótica (Cuba)',
    navFull: 'Comissão Patriótica — Última Fase da Revolução e Interferência dos EUA',
    metaTitle:
      'La Unión Española e a Comissão Patriótica: José Adell na Defesa de Cuba na Última Fase da Revolução com Interferência Direta dos EUA',
    metaDescription:
      'Publicação histórica de La Unión Española (Rio de Janeiro): como José Adell encabeçou a Comissão Patriótica na última fase da Revolução de Independência de Cuba quando houve interferência direta dos EUA, antecipando a República Neocolonial (1902–1958), a Emenda Platt, o domínio das oligarquias, a Lei Seca de 1920 e o império mafioso dos cassinos.',
    badge: '🇪🇸 Evento Histórico da Comunidade Espanhola • La Unión Española • Última Fase da Revolução e Interferência Direta dos EUA',
    heroTitle:
      'A Comissão Patriótica na Última Fase da Revolução Cubana: José Adell à Frente da União Espanhola diante da Interferência Direta dos EUA',
    heroSubtitle:
      'Organizada para a última e decisiva fase da Revolução de Independência de Cuba — marcada pela interferência direta dos Estados Unidos da América, que culminou em 1898 —, a Comissão Patriótica do Rio de Janeiro uniu financeira e institucionalmente a comunidade espanhola sob a liderança de D. José Adell. Os espanhóis daquela época enxergavam com impressionante lucidez que aquele movimento não geraria uma república soberana e democrática, mas sim a chamada República Neocolonial (1902–1958): uma estrutura tutelada pelos EUA (via Emenda Platt) que entregou Cuba às oligarquias locais, ao capital estrangeiro, ao contrabando da Lei Seca e ao império mafioso dos cassinos e da contravenção.',
    chronologicalBadge: 'ÚLTIMA FASE (1895–1898) • INTERFERÊNCIA DIRETA DOS EUA',
    chronologicalClarificationTitle:
      '📌 Marco Histórico Essencial: A Comissão Patriótica na Última Fase da Revolução com Interferência Direta dos EUA (1895–1898) e o Nascimento da «República Neocolonial» (1902–1958)',
    chronologicalClarificationText:
      'A Comissão Patriótica atuou voltada especificamente para a última fase da Revolução de Independência de Cuba (após os conflitos anteriores do século XIX), quando houve a interferência direta — financeira, geopolítica e militar — dos Estados Unidos da América, episódio anterior e distinto da revolução comunista de Fidel Castro em 1959. A independência formal conquistada em 1898 foi frustrada pela tutela dos Estados Unidos via Emenda Platt, criando durante a chamada República Neocolonial (1902–1958) uma estrutura política e econômica que favoreceu oligarquias locais, o capital estrangeiro e, a partir da década de 1920, o crime organizado norte-americano (Meyer Lansky e Lucky Luciano em aliança com Fulgencio Batista) e o turismo de cassinos — confirmando integralmente o alerta histórico de José Adell e da comunidade espanhola.',
    leaderHighlightTitle: '★ D. José Adell Encabeçou Esta Luta Histórica no Rio de Janeiro',
    leaderHighlightText:
      'Republicano convicto, humanista e redator-chefe de La Unión Española na Rua da Ajuda, José Adell y Fons (“Pepe Adell”, retratado no quinto medalhão) liderou intelectual, jornalística e institucionalmente a mobilização da colônia espanhola nesta etapa decisiva do conflito cubano, após ter sido ferido por uma pedrada na cabeça nos tumultos de rua do Rio de Janeiro.',
    originalScanBadge: '📰 Capa Original Digitalizada • La Unión Española (Ano IV, Nº 190 • Rio de Janeiro)',
    originalScanCaption:
      'Litografia histórica de capa assinada por A. Castaño com vista da Baía de Guanabara e os 12 medalhões da Comissão Patriótica Espanhola do Rio de Janeiro.',
    openFullDossierBtn: 'Abrir Publicação Completa e as 12 Biografias →',
    openWorkRecordBtn: 'Ver Ficha no Acervo (Obra Nº 73) →',
    zoomHint: 'Clique na gravura original para ampliar em tela cheia.',
    transcriptionHeading:
      '📜 Transcrição Completa do Documento Original (Posicionada Abaixo do Artigo Original)',
    transcriptionSubnote:
      'Transcrição integral em Português de todos os textos, cabeçalhos e legendas gravados na capa original de La Unión Española:',
    transcriptionBlocks: [
      'CABEÇALHO DO JORNAL: «LA UNIÓN ESPAÑOLA» [Carimbo circular de registro documental: «R»].',
      'DATAÇÃO SOB O CABEÇALHO: «ANO IV — Nº 190 — RIO DE JANEIRO, 19 DE OUTUBRO DE 1895» («AÑO IV — Nº 190 — RIO DE JANEIRO, 19 OCTUBRE 1895»).',
      'COMPOSIÇÃO ICONOGRÁFICA CENTRAL (12 MEDALHÕES OVAIS ENTRE FLORA TROPICAL E VINHETA MARÍTIMA DA BAÍA DO RIO DE JANEIRO COM NAVIOS A VAPOR):\n• Primeira fileira (da esquerda para a direita): «D. BENITO MARTÍNEZ» — «D. CASIANO FERNÁNDEZ» — «D. LUÍS DE LA FUENTE».\n• Segunda fileira: «Dr. RICARDO MENESES» — «D. JOSÉ ADELL».\n• Terceira fileira (centro e direita, ao lado da paisagem naval): «D. GASPAR DE LOS R. THOUS» — «D. FIDEL VERGARA».\n• Quarta fileira (centro e direita): «D. P. SIEIRO GARRIDO» — «D. LUÍS SUÁREZ».\n• Fileira inferior (da esquerda para a direita): «D. FRANCISCO BRANDARIZ» — «D. VICENTE DO PAZO» — «D. EZEQUIEL C. AREAS».',
      'LEGENDA COMEMORATIVA DE RODAPÉ: «HOMENAGEM À COMISSÃO PATRIÓTICA» («HOMENAGE A LA COMISION PATRIOTICA»).',
    ],
    transcriptionSignatureLine:
      'Assinatura do artista litógrafo junto ao medalhão central inferior: «A. Castaño» (La Unión Española, Rio de Janeiro).',
    essaySectionKicker: 'Ensaio Histórico e Geopolítico • Da Interferência Direta dos EUA (1895–1898) à República Neocolonial (1902–1958)',
    essaySectionTitle:
      'A Última Fase da Revolução Cubana sob Interferência Direta dos EUA e a Clarividência Histórica da Comunidade Espanhola',
    historicalBlocks: [
      {
        kicker: 'I. A Última Fase da Revolução e a Interferência Direta dos Estados Unidos',
        title: 'Por que o desfecho separatista não se apoiava em princípios republicanos puros, mas na intervenção dos EUA e em oligarquias',
        paragraphs: [
          'A Comissão Patriótica Espanhola reuniu esforços financeiros e institucionais para a última e decisiva fase da Revolução de Independência de Cuba (1895–1898), momento histórico em que se consumou a interferência direta dos Estados Unidos da América. Diferentemente das fases anteriores dos conflitos insulares do século XIX, essa etapa final foi intensamente financiada, insuflada e militarmente decidida pela intervenção direta norte-americana — impulsionada por grandes grupos açucareiros, sindicatos financeiros de Nova York, imprensa sensacionalista e pela invasão militar dos EUA em 1898.',
          'Os espanhóis daquela época — sobretudo republicanos íntegros e humanistas como José Adell y Fons, que dedicou toda a vida à democracia fundada na ética, no voto livre e na educação — compreendiam com nitidez que o futuro reservado à ilha por aquela ingerência estrangeira não seria uma república soberana e democrática, mas um regime tutelado a serviço de oligarquias e interesses políticos e econômicos escusos.',
        ],
      },
      {
        kicker: 'II. 1898, a Emenda Platt e a Independência Frustrada',
        title: 'A estrutura da «República Neocolonial» (1902–1958) entre o latifúndio estrangeiro e o crime organizado',
        paragraphs: [
          'O curso real da história confirmou integralmente o alerta formulado pela Comissão Patriótica. A independência formal conquistada em 1898 foi imediatamente frustrada pela ocupação militar e pela tutela institucional dos Estados Unidos (via Emenda Platt), que submeteu a soberania cubana aos interesses estratégicos e econômicos de Washington.',
          'Durante toda a chamada República Neocolonial (1902–1958), consolidou-se exatamente o quadro denunciado pelos espanhóis: concentração do poder nas mãos da oligarquia açucareira ("República dos Generais e Doutores"), apropriação de terras, usinas (centrales), ferrovias e bancos por empresas norte-americanas e, a partir da Lei Seca de 1920 até os governos de Fulgencio Batista nos anos 1950, a transformação de Havana em capital hemisférica de jogatina, contrabando e hotéis-cassinos controlados pela Máfia dos EUA.',
        ],
      },
      {
        kicker: 'III. A União da Comunidade Espanhola no Rio de Janeiro',
        title: 'Como D. José Adell encabeçou o apoio financeiro e institucional em defesa de Cuba e seus territórios',
        paragraphs: [
          'No Rio de Janeiro, o debate sobre a guerra em Cuba mobilizava intensamente as ruas e a imprensa. Após ter sido atingido por uma pedrada na cabeça durante manifestações pró-insurretos no Largo de São Francisco de Paula e responder com altivez intelectual ao Ministro do STF Lúcio de Mendonça, José Adell assumiu na histórica casinha colonial da Rua da Ajuda — terreno onde hoje se ergue o Theatro Municipal do Rio de Janeiro — a liderança cívica da Comissão Patriótica Espanhola.',
          'Na emblemática capa gravada por A. Castaño para La Unión Española («Homenage á la Comisión Patriótica»), aparecem lado a lado o republicano valenciano D. José Adell, o fundador tradicionalista D. Gaspar de los Reyes Thous, o médico sevilhano Dr. Ricardo Meneses, o hoteleiro galego Comendador D. Vicente do Pazo e destacados industriais e comerciantes espanhóis do Rio, selando uma união exemplar em defesa de Cuba.',
        ],
      },
    ],
    neocolonialDossier: {
      kicker: 'Comprovação Histórica Documentada • A «República Neocolonial» em Cuba (1902–1958)',
      title: 'Como o Alerta da Comissão Patriótica se Confirmou: Os 3 Pilares da Tutela dos EUA, das Oligarquias e do Império da Jogatina',
      intro:
        'A independência formal conquistada em 1898 — ao término da última fase da revolução marcada pela interferência direta dos Estados Unidos — foi frustrada pela tutela norte-americana (via Emenda Platt), criando durante a chamada República Neocolonial (1902–1958) uma estrutura política e econômica que favoreceu oligarquias locais, o capital estrangeiro e, a partir da década de 1920, o crime organizado e o turismo de cassinos. O processo que levou Cuba a esse cenário passou por três pilares principais:',
      pillars: [
        {
          number: '01',
          title: '1. Domínio das Oligarquias e do Capital Estrangeiro',
          bullets: [
            {
              lead: 'A «República dos Generais e Doutores»:',
              text: 'Nos primeiros anos da República, o poder ficou concentrado nas mãos da elite latifundiária açucareira e de políticos ligados aos interesses comerciais norte-americanos. As eleições eram frequentemente marcadas por fraudes, clientelismo e corrupção administrativa.',
            },
            {
              lead: 'Monocultura, dependência e o «tiempo muerto»:',
              text: 'Empresas dos Estados Unidos compraram grande parte das terras mais férteis, usinas de açúcar (centrales), ferrovias e bancos. Cuba tornou-se dependente das cotas de exportação de açúcar para o mercado norte-americano, enriquecendo uma pequena elite local enquanto a maioria da população rural vivia em condições precárias e sujeita ao desemprego sazonal (o chamado tiempo muerto entre as colheitas).',
            },
          ],
        },
        {
          number: '02',
          title: '2. A Lei Seca nos EUA (1920) e a Explosão da Jogatina e do Contrabando',
          intro:
            'O papel de Havana como centro de jogos, álcool e contrabando ganhou força a partir de 1920, quando entrou em vigor a Lei Seca (Proibição) nos Estados Unidos:',
          bullets: [
            {
              lead: 'Destino turístico sem restrições (a 145 km da Flórida):',
              text: 'Situada a apenas 145 km da Flórida, Havana virou o refúgio imediato para turistas norte-americanos em busca de álcool, cabarés, prostituição e apostas — atividades então proibidas nos Estados Unidos.',
            },
            {
              lead: 'Rota internacional de contrabando:',
              text: 'Cuba tornou-se um dos principais entrepostos para o contrabando de rum e outras bebidas ilegais em direção à costa sul dos Estados Unidos, enriquecendo contrabandistas locais e redes criminosas americanas.',
            },
          ],
        },
        {
          number: '03',
          title: '3. A Máfia Norte-Americana e a Ditadura de Fulgencio Batista (Anos 1930–1950)',
          intro:
            'A partir das décadas de 1930 a 1950 — especialmente sob a influência e os governos de Fulgencio Batista (que liderou um golpe de Estado em 1952) —, o negócio dos cassinos foi institucionalizado:',
          bullets: [
            {
              lead: 'Aliança direta com a Máfia (Meyer Lansky e Lucky Luciano):',
              text: 'Chefes do crime organizado dos EUA, como Meyer Lansky e Lucky Luciano, firmaram acordos diretos com Batista e autoridades cubanas, recebendo isenções fiscais, licenças de jogo e proteção policial em troca de subornos milionários.',
            },
            {
              lead: 'Império dos Cassinos, lavagem de dinheiro e narcóticos:',
              text: 'Na década de 1950, Havana abrigava hotéis-cassinos de luxo controlados por mafiosos (como o Hotel Nacional, o Riviera, o Capri e o Tropicana), além de servir como ponto de lavagem de dinheiro e rota de tráfico de narcóticos para a América do Norte.',
            },
          ],
        },
      ],
      closingSynthesisTitle: '⚖️ Desfecho Histórico: Da Tutela de 1898 ao Combustível Social de 1959',
      closingSynthesisText:
        'Esse contraste extremo — entre o luxo dos cassinos de Havana, os privilégios da oligarquia e a pobreza profunda no interior da ilha, somado à repressão política da ditadura de Fulgencio Batista — comprovou em toda a linha o alerta feito por D. José Adell e pela Comissão Patriótica Espanhola na última fase da guerra separatista sob interferência dos EUA, e foi justamente o combustível social e nacionalista que décadas depois alimentou a Revolução Cubana de 1959, liderada por Fidel Castro.',
    },
    rosterKicker: 'Lista Oficial Completa conforme a Gravura • Os 12 Medalhões da Capa Histórica',
    rosterTitle: 'Integrantes Participantes da Comissão Patriótica Espanhola',
    rosterSubtitle:
      'Relação integral dos doze participantes retratados na capa de La Unión Española na exata ordem visual da gravura histórica, acompanhada de pequena biografia documentada na web e no acervo (quando disponível nos registros históricos).',
    leaderBadge: '★ Encabeçou esta Luta Histórica',
    memberOrderLabel: 'Medalhão Nº',
    engravedRibbonLabel: 'Nome gravado na imagem:',
    viewInternalDossierLabel: 'Ver Dossiê no Memorial →',
    illustratorBoxTitle: '🎨 Sobre o Artista da Gravura Original: A. Castaño (Rio de Janeiro)',
    illustratorBoxText:
      'Ao pé do medalhão central inferior lê-se a assinatura «A. Castaño», desenhista e litógrafo atuante na imprensa ilustrada do Rio de Janeiro no fim do século XIX. O artista entrelaçou os doze retratos ovais em ramos de palmeiras e flora tropical brasileira, abrindo à esquerda uma vista marítima da Baía de Guanabara cruzada por navios a vapor — símbolo da ponte atlântica entre a comunidade espanhola do Brasil e a defesa de Cuba.',
  },
};
