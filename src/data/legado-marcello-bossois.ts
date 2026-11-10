import { SiteLang } from '@/lib/i18n-ui';

export interface PrefaceChapter {
  roman: string;
  title: string;
  paragraphs: string[];
}

export interface LiteraryPrefaceContent {
  navLabel: string;
  kicker: string;
  title: string;
  subtitle: string;
  authorLine: string;
  authorBioNote: string;
  epigraph: string;
  epigraphAttribution: string;
  chapters: PrefaceChapter[];
  closingSignature: string;
  closingRole: string;
  closingPlaceAndDate: string;
  correspondenceLabel: string;
  correspondenceText: string;
  correspondenceEmail: string;
}

export interface TrinetoIdealizadorContent {
  linkLabel: string;
  prefaceLinkLabel: string;
  kicker: string;
  title: string;
  subtitle: string;
  photoCaption: string;
  paragraphs: string[];
  quote: string;
  quoteAuthor: string;
  readMoreLinkLabel: string;
  readPrefaceBtnLabel: string;
  externalPortalLabel: string;
  correspondenceLabel: string;
  correspondenceEmail: string;
  preface: LiteraryPrefaceContent;
}

export const CORRESPONDENCE_EMAIL_DISPLAY = 'drmarcellobossois@hotmaill.com';
export const CORRESPONDENCE_MAILTO =
  'mailto:drmarcellobossois@hotmaill.com,drmarcellobossois@hotmail.com';

export const TRINETO_IDEALIZADOR_I18N: Record<SiteLang, TrinetoIdealizadorContent> = {
  es: {
    linkLabel: 'Trineto de Pepe Adell',
    prefaceLinkLabel: 'Prefacio Literario (Vida de Pepe Adell)',
    kicker: 'Trineto de Pepe Adell • Idealizador del Memorial',
    title: 'Dr. Marcello Bossois — Trineto de Pepe Adell e Idealizador de este Sitio',
    subtitle:
      'Español y brasileño, carioca y valenciano: el trineto (tataranieto) de José Adell y Fons que preservó el álbum secular de la familia, concibió este Memorial y escribió el Prefacio Histórico-Literario de su vida.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (trineto de Pepe Adell) y su esposa, la Dra. Patricia Frozi Schlinkert.',
    paragraphs: [
      'Este sitio y Memorial Histórico de José Adell y Fons («Pepe Adell», 1868–1927) fue idealizado y elaborado por su trineto (tataranieto), el Dr. Marcello Bossois de Melo Ferreira — ciudadano español y brasileño, carioca de nacimiento y valenciano de sangre —, con el propósito de custodiar, digitalizar y compartir con el mundo las 89 páginas originales y las 72 obras legadas por su antepasado entre Vinaròs, Valencia, Barcelona, Madrid, Río de Janeiro y Bahía.',
      'Médico e investigador, hijo del Dr. Vanuzio Ferreira y de la Dra. Lúcia Bossois (eslabón directo del linaje Adell–Bossois) y casado con la Dra. Patricia Frozi Schlinkert, el Dr. Marcello Bossois reunió este acervo familiar centenario y redactó especialmente para esta obra el Prefacio Histórico-Literario que narra la vida de Pepe Adell.',
    ],
    quote:
      '«¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!»',
    quoteAuthor: '— Pepe Adell (José Adell y Fons, 12 de octubre de 1893)',
    readMoreLinkLabel: 'Sobre el Idealizador (Trineto de Pepe Adell) →',
    readPrefaceBtnLabel: '📜 Leer el Prefacio de la Vida de Pepe Adell (por Dr. Marcello Bossois) →',
    externalPortalLabel: 'Conocer el Proyecto Social Brasil Sem Alergia ↗',
    correspondenceLabel: 'Contacto con el Trineto para Correspondencias:',
    correspondenceEmail: CORRESPONDENCE_EMAIL_DISPLAY,
    preface: {
      navLabel: 'Prefacio por Dr. Marcello Bossois',
      kicker: 'Prefacio Histórico-Literario • Por el Trineto de Pepe Adell',
      title: 'La Tinta, el Buril y el Océano: Prefacio a la Vida y al Alma de José Adell y Fons («Pepe Adell»)',
      subtitle:
        'Un retrato literario e histórico del hijo de Vinaròs que cruzó el Atlántico con una pluma republicana insobornable, un buril digno de jefes de Estado y una sonrisa capaz de vencer a la tragedia.',
      authorLine: 'Texto de autoría del Dr. Marcello Bossois de Melo Ferreira',
      authorBioNote:
        'Trineto (tataranieto) de José Adell y Fons («Pepe Adell»), español y brasileño, carioca y valenciano, e idealizador de este Memorial.',
      epigraph:
        '“¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!”',
      epigraphAttribution:
        '— José Adell y Fons («Pepe Adell»), La Unión Española, Río de Janeiro, 12 de octubre de 1893 (Página 32 del Cuaderno Original)',
      chapters: [
        {
          roman: 'I',
          title: 'El Aliento del Mediterráneo y la Luz de Vinaròs (1868–1884)',
          paragraphs: [
            'Hay hombres cuya biografía no cabe en el mármol frío de los panteones porque fue escrita con el pulso caliente de la vida, la sal de dos mares y la dignidad silenciosa de los justos. Cuando se abre este viejo álbum familiar de ochenta y nueve hojas —cuyas páginas amarillentas han navegado más de un siglo entre manos filiales hasta llegar a las mías—, no brota de él el olor inerte del archivo, sino el viento luminoso del Mediterráneo valenciano. Allí, en la noble villa marinera de Vinaròs, en tierras de Castellón y de la Comunidad Valenciana, vino al mundo el 10 de febrero de 1868 mi tatarabuelo, José Adell y Fons, a quien la historia de dos continentes y el afecto inextinguible de los suyos llamarían para siempre «Pepe Adell».',
            'Nacido en el año convulso de la Revolución Gloriosa, Pepe Adell creció bajo esa claridad levantina que enseña temprano a mirar de frente tanto al sol como a la adversidad. Nadie le regaló cátedras ni blasones: fue un espíritu autodidacta de prodigiosa tenacidad. Mientras sus manos aprendían la disciplina milimétrica del buril —ese acero paciente capaz de domar el oro, la plata y el bronce—, su corazón se educaba en la escuela suprema de la ternura fraterna. Su orgullo más íntimo no eran sus propios triunfos, sino la figura conmovedora de su hermano Alberto Adell y Fons: aquel niño ciego de Vinaròs que, privado de la luz de los ojos, fue acogido por el venerable Padre Guzmán en la Escolanía de Montserrat hasta arrancar al violín melodías que hacían llorar a los teatros de Madrid y Valencia. De aquel hermano invidente aprendió Pepe que la verdadera visión reside en la nobleza del alma.',
          ],
        },
        {
          roman: 'II',
          title: 'El Joven Tribuno de Barcelona: La Pluma contra el Privilegio (1885–1890)',
          paragraphs: [
            'Apenas contaba diecisiete años cuando las imprentas de Barcelona escucharon por primera vez el chasquido eléctrico de su pluma. En las columnas de «La Luz», «El Fantasma» y más tarde «El Sufragio Universal», aquel muchacho valenciano de bigote incipiente y mirada limpia escribía con la madurez moral de un clásico del Siglo de Oro y el fuego cívico de los grandes tribunos republicanos. No buscaba el aplauso de los salones; buscaba la verdad, aunque la verdad quemase.',
            'Corría el mes de marzo de 1886 cuando España entera enmudeció ante el fusilamiento en Cartagena del humilde ex-cabo Bartual, mientras en los palacios de Madrid se tejían indultos para un aristócrata de sangre real culpable de idéntico delito militar. Tenía Pepe Adell dieciocho años y no tembló al estampar en letras de molde su célebre requisitoria «¡Igualdad ante la ley!», preguntando a los poderosos de su tiempo si la justicia española se medía por el lustre de los apellidos o por el llanto de las viudas sin fortuna. Aquella misma pluma juvenil defendió la instrucción de la mujer como cimiento de las naciones libres, combatió el fanatismo y el caciquismo, y dialogó de igual a igual con gigantes de la talla de Nicolás Salmerón, Emilio Castelar, Francisco Pi y Margall y Fernando Tarrida del Mármol.',
          ],
        },
        {
          roman: 'III',
          title: 'La Rua da Ajuda, el Solar del Theatro Municipal y el Buril de los Presidentes (1891–1902)',
          paragraphs: [
            'El destino, sin embargo, le reservaba el horizonte inmenso de América. Al cruzar el Atlántico y desembarcar en el Río de Janeiro febril y cosmopolita de la joven República brasileña, Pepe Adell no llegó como un desterrado nostálgico, sino como un puente viviente entre España y el Brasil. Estableció su hogar y su célebre taller artístico de grabado en la histórica Rua da Ajuda —exactamente en el solar donde hoy se alza majestuoso el Theatro Municipal do Rio de Janeiro, corazón de la Cinelândia—. Es profundamente simbólico que donde hoy resuenan las grandes óperas y sinfonías del Brasil, resonaran antes el martillo delicado del grabador valenciano y las tertulias fraternales de la intelectualidad hispano-brasileña.',
            'En aquella casa de la Rua da Ajuda, junto a su amigo del alma —el legendario arquitecto sevillano Adolfo Morales de los Ríos, autor del Museo Nacional de Bellas Artes— y a compañeros de prensa como Gaspar Thous y Orts, S. Sampol y Ripoll y R. Miranda, Pepe Adell dirigió y redactó las páginas vibrantes de «La Unión Española». Allí dejó esculpida, el 12 de octubre de 1893, la sentencia que resume toda su filosofía moral y que preside este Memorial: «¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!».',
            'Ni siquiera la violencia física logró doblegar su hidalguía. En mayo de 1895, cuando una turba exaltada apedreó las calles cariocas y una piedra le abrió la frente mientras defendía la honra de la colonia española, Pepe Adell reapareció en la redacción con la cabeza vendada pero con su proverbial sonrisa intacta. Y cuando en el año 1900 las colonias extranjeras quisieron ofrecer al Presidente de la República del Brasil, Dr. Manoel Ferraz de Campos Sales, una joya monumental de tres kilos de oro macizo, platino y brillantes para celebrar el IV Centenario del Descubrimiento, fue el buril magistral de José Adell y Fons el elegido para inmortalizar en el metal precioso el escudo y las inscripciones de aquel tributo histórico.',
          ],
        },
        {
          roman: 'IV',
          title: 'Las Cuarenta Carrozas del Dolor y la Sonrisa Inmortal en Bahía (1903–1927)',
          paragraphs: [
            'Pero la grandeza de un hombre se mide, sobre todo, en la hora desnuda del dolor. En febrero de 1903, la muerte arrebató en Río de Janeiro, a los treinta y dos años de edad, a su amadísima esposa y compañera de luchas, Doña Emilia Vallespí de Adell. Cuarenta carruajes acompañaron el féretro hasta el cementerio de São Francisco Xavier bajo una lluvia de lágrimas y coronas. Quedaba Pepe Adell viudo en tierra americana con sus pequeños hijos —Josefina, Alberto y Pepín— abrazados a su levita negra. Muchos habrían sucumbido a la amargura; él, en cambio, transformó el luto en amor redoblado hacia sus hijos, hacia los huérfanos y hacia las sociedades de beneficencia.',
            'Cuando el 12 de mayo de 1927 entregó su alma en Salvador de Bahía, a los cincuenta y nueve años de edad, la prensa de España y del Brasil se vistió de duelo. Fue entonces cuando el viejo maestro Adolfo Morales de los Ríos escribió aquella carta de despedida que ningún descendiente puede leer sin que se le empañen los ojos: recordaba cómo en la Rua da Ajuda todos reían y esperaban siempre lo mejor de la vida porque seguían la máxima íntima de Pepe Adell: «Más vale hablar de cosas risueñas, que escribir sobre lágrimas».',
            'Como trineto suyo —uniendo en mis propias venas la sangre valenciana y española con el corazón carioca y brasileño—, entrego hoy al público este archivo sagrado. Que quien recorra estas setenta y dos obras y estas ochenta y nueve páginas originales sienta que Pepe Adell no pertenece al pasado: vive en cada conciencia que defiende la justicia sin rencor, el arte con excelencia y la vida con una sonrisa.',
          ],
        },
      ],
      closingSignature: 'Dr. Marcello Bossois de Melo Ferreira',
      closingRole: 'Trineto de José Adell y Fons («Pepe Adell») • Idealizador del Memorial',
      closingPlaceAndDate: 'Río de Janeiro — Valencia, Memorial Histórico Familiar José Adell',
      correspondenceLabel: 'Correspondencia con el Trineto de Pepe Adell:',
      correspondenceText:
        'Para correspondencias históricas, familiares, académicas o documentales con el autor e idealizador de este sitio, escriba a:',
      correspondenceEmail: CORRESPONDENCE_EMAIL_DISPLAY,
    },
  },
  va: {
    linkLabel: 'Trineto de Pepe Adell',
    prefaceLinkLabel: 'Prefaci Literari (Vida de Pepe Adell)',
    kicker: 'Trineto (Rebesnet) de Pepe Adell • Idealitzador del Memorial',
    title: 'Dr. Marcello Bossois — Trineto de Pepe Adell i Idealitzador d’aquest Lloc Web',
    subtitle:
      'Espanyol i brasiler, carioca i valencià: el «trineto» (rebesnet) de José Adell y Fons que preservà l’àlbum centenari de la família, concebé aquest Memorial i escrigué el Prefaci Històric-Literari de la seua vida.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (trineto de Pepe Adell) i la seua esposa, la Dra. Patricia Frozi Schlinkert.',
    paragraphs: [
      'Aquest lloc web i Memorial Històric de José Adell y Fons («Pepe Adell», 1868–1927) fou idealitzat i elaborat pel seu «trineto» (rebesnet), el Dr. Marcello Bossois de Melo Ferreira — ciutadà espanyol i brasiler, carioca de naixement i valencià de sang —, amb la missió de preservar, digitalitzar i oferir al públic les 89 pàgines originals i les 72 obres llegades pel patriarca familiar entre Vinaròs, València, Barcelona, Madrid, Rio de Janeiro i Bahia.',
      'Metge i investigador, fill del Dr. Vanuzio Ferreira i de la Dra. Lúcia Bossois (baula directa de la nissaga Adell–Bossois) i casat amb la Dra. Patricia Frozi Schlinkert, el Dr. Marcello Bossois reuní aquest fons familiar centenari i redactà especialment per a aquesta obra el Prefaci Històric-Literari que narra la vida de Pepe Adell.',
    ],
    quote:
      '«Quan comprendran tots que a la força dels principis, i no a la força dels hòmens, està reservada la victòria!» («¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!»)',
    quoteAuthor: '— Pepe Adell (José Adell y Fons, 12 d’octubre de 1893)',
    readMoreLinkLabel: 'Sobre l’Idealitzador (Trineto de Pepe Adell) →',
    readPrefaceBtnLabel: '📜 Llegir el Prefaci de la Vida de Pepe Adell (per Dr. Marcello Bossois) →',
    externalPortalLabel: 'Conéixer el Projecte Social Brasil Sem Alergia ↗',
    correspondenceLabel: 'Contacte amb el Trineto per a Correspondències:',
    correspondenceEmail: CORRESPONDENCE_EMAIL_DISPLAY,
    preface: {
      navLabel: 'Prefaci per Dr. Marcello Bossois',
      kicker: 'Prefaci Històric-Literari • Pel Trineto de Pepe Adell',
      title: 'La Tinta, el Burí i l’Oceà: Prefaci a la Vida i a l’Ànima de José Adell y Fons («Pepe Adell»)',
      subtitle:
        'Un retrat literari i històric del fill de Vinaròs que creuà l’Atlàntic amb una ploma republicana insubornable, un burí digne de caps d’Estat i un somriure capaç de véncer la tragèdia.',
      authorLine: 'Text d’autoria del Dr. Marcello Bossois de Melo Ferreira',
      authorBioNote:
        'Trineto (rebesnet) de José Adell y Fons («Pepe Adell»), espanyol i brasiler, carioca i valencià, i idealitzador d’aquest Memorial.',
      epigraph:
        '“Quan comprendran tots que a la força dels principis, i no a la força dels hòmens, està reservada la victòria!” («¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!»)',
      epigraphAttribution:
        '— José Adell y Fons («Pepe Adell»), La Unión Española, Rio de Janeiro, 12 d’octubre de 1893 (Pàgina 32 del Quadern Original)',
      chapters: [
        {
          roman: 'I',
          title: 'L’Alé de la Mediterrània i la Llum de Vinaròs (1868–1884)',
          paragraphs: [
            'Hi ha hòmens la biografia dels quals no cap en el marbre fred dels panteons perquè fou escrita amb el pols calent de la vida, la sal de dos mars i la dignitat silenciosa dels justos. Quan s’obri aquest vell àlbum familiar de huitanta-nou fulls —les pàgines engroguides del qual han navegat més d’un segle entre mans filials fins a arribar a les meues—, no en brolla l’olor inerta de l’arxiu, sinó el vent lluminós de la Mediterrània valenciana. Allí, a la noble vila marinera de Vinaròs, en terres del Maestrat i de la Comunitat Valenciana, vingué al món el 10 de febrer de 1868 el meu rebesavi, José Adell y Fons, a qui la història de dos continents i l’afecte inextingible dels seus anomenarien per sempre «Pepe Adell».',
            'Nascut en l’any convuls de la Revolució de 1868, Pepe Adell cresqué sota aquella claredat valenciana que ensenya prompte a mirar de cara tant al sol com a l’adversitat. Ningú li regalà càtedres ni blasons: fou un esperit autodidacte de prodigiosa tenacitat. Mentre les seues mans aprenien la disciplina mil·limètrica del burí —aquell acer pacient capaç de domar l’or, la plata i el bronze—, el seu cor s’educava en l’escola suprema de la tendresa fraterna. El seu orgull més íntim no eren els seus propis triomfs, sinó la figura colpidora del seu germà Alberto Adell y Fons: aquell xiquet cec de Vinaròs que, privat de la llum dels ulls, fou acollit pel venerable Pare Guzmán a l’Escolania de Montserrat fins a arrencar al violí melodies que feien plorar els teatres de Madrid i València. D’aquell germà invident aprengué Pepe que la veritable visió resideix en la noblesa de l’ànima.',
          ],
        },
        {
          roman: 'II',
          title: 'El Jove Tribú de Barcelona: La Ploma contra el Privilegi (1885–1890)',
          paragraphs: [
            'A penes comptava dèsset anys quan les impremtes de Barcelona escoltaren per primera vegada l’espetec elèctric de la seua ploma. En les columnes de «La Luz», «El Fantasma» i més tard «El Sufragio Universal», aquell jove valencià de bigot incipient i mirada neta escrivia amb la maduresa moral d’un clàssic i el foc cívic dels grans tribuns republicans. No buscava l’aplaudiment dels salons; buscava la veritat, encara que la veritat cremara.',
            'Corria el mes de març de 1886 quan Espanya sencera emmudí davant l’afusellament a Cartagena de l’humil ex-caporal Bartual, mentre als palaus de Madrid es teixien indults per a un aristòcrata de sang reial culpable del mateix delicte militar. Tenia Pepe Adell díhuit anys i no tremolà en estampar en lletres d’impremta la seua cèlebre requisitòria «Igualtat davant la llei!», preguntant als poderosos del seu temps si la justícia es mesurava pel llustre dels cognoms o pel plor de les viudes sense fortuna. Aquella mateixa ploma juvenil defensà la instrucció de la dona com a fonament de les nacions lliures, combaté el fanatisme i el caciquisme, i dialogà d’igual a igual amb gegants com Nicolás Salmerón, Emilio Castelar, Francisco Pi y Margall i Fernando Tarrida del Mármol.',
          ],
        },
        {
          roman: 'III',
          title: 'La Rua da Ajuda, el Solar del Theatro Municipal i el Burí dels Presidents (1891–1902)',
          paragraphs: [
            'El destí, tanmateix, li reservava l’horitzó immens d’Amèrica. En creuar l’Atlàntic i desembarcar al Rio de Janeiro febril i cosmopolita de la jove República brasilera, Pepe Adell no hi arribà com un desterrat nostàlgic, sinó com un pont vivent entre València, Espanya i el Brasil. Establí la seua llar i el seu cèlebre taller artístic de gravat a la històrica Rua da Ajuda —exactament al solar on hui s’alça majestuós el Theatro Municipal do Rio de Janeiro, cor de la Cinelândia—. És profundament simbòlic que on hui ressonen les grans òperes i simfonies del Brasil, ressonaren abans el martell delicat del gravador de Vinaròs i les tertúlies fraternals de la intel·lectualitat hispanobrasilera.',
            'En aquella casa de la Rua da Ajuda, al costat del seu amic de l’ànima —el llegendari arquitecte Adolfo Morales de los Ríos, autor del Museu Nacional de Belles Arts— i de companys de premsa com Gaspar Thous y Orts, S. Sampol y Ripoll i R. Miranda, Pepe Adell dirigí i redactà les pàgines vibrants de «La Unión Española». Allí deixà esculpida, el 12 d’octubre de 1893, la sentència que resumeix tota la seua filosofia moral i que presideix aquest Memorial: «Quan comprendran tots que a la força dels principis, i no a la força dels hòmens, està reservada la victòria!».',
            'Ni tan sols la violència física aconseguí doblegar la seua fidalguia. El maig de 1895, quan una turba exaltada apedregà els carrers cariocas i una pedra li obrí el front mentre defensava l’honra de la colònia espanyola, Pepe Adell reaparegué a la redacció amb el cap embenat però amb el seu proverbial somriure intacte. I quan l’any 1900 les colònies estrangeres volgueren oferir al President de la República del Brasil, Dr. Manoel Ferraz de Campos Sales, una joia monumental de tres quilos d’or massís, platí i brillants per celebrar el IV Centenari del Descobriment, fou el burí magistral de José Adell y Fons l’elegit per immortalitzar en el metall preciós l’escut i les inscripcions d’aquell tribut històric.',
          ],
        },
        {
          roman: 'IV',
          title: 'Les Quaranta Carrosses del Dolor i el Somriure Immortal a Bahia (1903–1927)',
          paragraphs: [
            'Però la grandesa d’un home es mesura, sobretot, en l’hora nua del dolor. El febrer de 1903, la mort arrabassà a Rio de Janeiro, als trenta-dos anys d’edat, la seua estimadíssima esposa i companya de lluites, Doña Emilia Vallespí de Adell. Quaranta carruatges acompanyaren el fèretre fins al cementeri de São Francisco Xavier sota una pluja de llàgrimes i corones. Quedava Pepe Adell vidu en terra americana amb els seus fills menuts —Josefina, Alberto i Pepín— abraçats a la seua levita negra. Molts haurien sucumbit a l’amargor; ell, en canvi, transformà el dol en amor redoblat cap als seus fills, cap als orfes i cap a les societats de beneficència.',
            'Quan el 12 de maig de 1927 lliurà la seua ànima a Salvador de Bahia, als cinquanta-nou anys d’edat, la premsa d’Espanya i del Brasil es vestí de dol. Fou aleshores quan el vell mestre Adolfo Morales de los Ríos escrigué aquella carta de comiat que cap descendent pot llegir sense que se li entelen els ulls: recordava com a la Rua da Ajuda tots reien i esperaven sempre el millor de la vida perquè seguien la màxima íntima de Pepe Adell: «Més val parlar de coses rialleres que escriure sobre llàgrimes».',
            'Com a trineto (rebesnet) seu —unint en les meues pròpies venes la sang valenciana i espanyola amb el cor carioca i brasiler—, lliure hui al públic aquest arxiu sagrat. Que qui recórrega aquestes setanta-dues obres i aquestes huitanta-nou pàgines originals senta que Pepe Adell no pertany al passat: viu en cada consciència que defensa la justícia sense rancor, l’art amb excel·lència i la vida amb un somriure.',
          ],
        },
      ],
      closingSignature: 'Dr. Marcello Bossois de Melo Ferreira',
      closingRole: 'Trineto (Rebesnet) de José Adell y Fons («Pepe Adell») • Idealitzador del Memorial',
      closingPlaceAndDate: 'Rio de Janeiro — València, Memorial Històric Familiar José Adell',
      correspondenceLabel: 'Correspondència amb el Trineto de Pepe Adell:',
      correspondenceText:
        'Per a correspondències històriques, familiars, acadèmiques o documentals amb l’autor i idealitzador d’aquest lloc web, escriviu a:',
      correspondenceEmail: CORRESPONDENCE_EMAIL_DISPLAY,
    },
  },
  pt: {
    linkLabel: 'Trineto de Pepe Adell',
    prefaceLinkLabel: 'Prefácio Literário (Vida de Pepe Adell)',
    kicker: 'Trineto de Pepe Adell • Idealizador do Memorial',
    title: 'Dr. Marcello Bossois — Trineto de Pepe Adell e Idealizador deste Site',
    subtitle:
      'Espanhol e brasileiro, carioca e valenciano: o trineto de José Adell y Fons que preservou o álbum centenário da família, idealizou este Memorial e escreveu o Prefácio Histórico-Literário de sua vida.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (trineto de Pepe Adell) e sua esposa, a Dra. Patricia Frozi Schlinkert.',
    paragraphs: [
      'Este site e Memorial Histórico de José Adell y Fons (“Pepe Adell”, 1868–1927) foi idealizado e elaborado por seu trineto, o Dr. Marcello Bossois de Melo Ferreira — cidadão espanhol e brasileiro, carioca de nascimento e valenciano de sangue —, com o propósito de preservar, digitalizar e compartilhar com o público as 89 páginas originais e as 72 obras legadas por seu trisavô entre Vinaròs, Valência, Barcelona, Madrid, Rio de Janeiro e Bahia.',
      'Médico e pesquisador, filho do Dr. Vanuzio Ferreira e da Dra. Lúcia Bossois (elo direto da linhagem Adell–Bossois) e casado com a Dra. Patricia Frozi Schlinkert, o Dr. Marcello Bossois reuniu este acervo familiar centenário e redigiu especialmente para esta obra o Prefácio Histórico-Literário que resume a trajetória humana, intelectual e artística de Pepe Adell.',
    ],
    quote:
      '“Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!” («¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!»)',
    quoteAuthor: '— Pepe Adell (José Adell y Fons, 12 de outubro de 1893)',
    readMoreLinkLabel: 'Sobre o Idealizador (Trineto de Pepe Adell) →',
    readPrefaceBtnLabel: '📜 Ler o Prefácio da Vida de Pepe Adell (por Dr. Marcello Bossois) →',
    externalPortalLabel: 'Conhecer o Projeto Social Brasil Sem Alergia ↗',
    correspondenceLabel: 'Contato com o Trineto para Correspondências:',
    correspondenceEmail: CORRESPONDENCE_EMAIL_DISPLAY,
    preface: {
      navLabel: 'Prefácio por Dr. Marcello Bossois',
      kicker: 'Prefácio Histórico-Literário • Pelo Trineto de Pepe Adell',
      title: 'A Tinta, o Buril e o Oceano: Prefácio à Vida e à Alma de José Adell y Fons (“Pepe Adell”)',
      subtitle:
        'Um retrato literário e histórico do filho de Vinaròs que atravessou o Atlântico com uma pena republicana incorruptível, um buril digno de chefes de Estado e um sorriso capaz de vencer a tragédia.',
      authorLine: 'Texto de autoria do Dr. Marcello Bossois de Melo Ferreira',
      authorBioNote:
        'Trineto de José Adell y Fons (“Pepe Adell”), espanhol e brasileiro, carioca e valenciano, e idealizador deste Memorial.',
      epigraph:
        '“¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!” («Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!»)',
      epigraphAttribution:
        '— José Adell y Fons (“Pepe Adell”), La Unión Española, Rio de Janeiro, 12 de outubro de 1893 (Página 32 do Caderno Original)',
      chapters: [
        {
          roman: 'I',
          title: 'O Sopro do Mediterrâneo e a Luz de Vinaròs (1868–1884)',
          paragraphs: [
            'Há homens cuja biografia não cabe no mármore frio dos panteões porque foi escrita com o pulso quente da vida, o sal de dois oceanos e a dignidade silenciosa dos justos. Quando se abre este velho álbum de família de oitenta e nove folhas — cujas páginas amareladas navegaram mais de um século entre mãos filiais até chegarem às minhas —, não exala dele o cheiro inerte dos arquivos, mas a brisa luminosa do Mediterrâneo valenciano. Ali, na nobre vila marítima de Vinaròs, nas terras de Castellón e da Comunidade Valenciana, veio ao mundo em 10 de fevereiro de 1868 o meu trisavô, José Adell y Fons, a quem a história de dois continentes e o afeto inextinguível dos seus chamariam para sempre de “Pepe Adell”.',
            'Nascido no ano convulso da Revolução Gloriosa de 1868, Pepe Adell cresceu sob aquela claridade levantina que ensina cedo a olhar de frente tanto o sol quanto a adversidade. Ninguém lhe deu cátedras nem brasões de berço: foi um espírito autodidata de prodigiosa tenacidade. Enquanto suas mãos aprendiam a disciplina milimétrica do buril — aquele aço paciente capaz de domar o ouro, a prata e o bronze —, seu coração educava-se na escola suprema da ternura fraterna. Seu orgulho mais íntimo não eram os próprios triunfos, mas a figura comovente de seu irmão Alberto Adell y Fons: aquele menino cego de Vinaròs que, privado da luz dos olhos, foi acolhido pelo venerável Padre Guzmán na Escolania de Montserrat até arrancar do violino melodias que faziam chorar os teatros de Madrid e Valência. Com aquele irmão invidente, Pepe aprendeu que a verdadeira visão mora na nobreza da alma.',
          ],
        },
        {
          roman: 'II',
          title: 'O Jovem Tribuno de Barcelona: A Pena contra o Privilégio (1885–1890)',
          paragraphs: [
            'Mal completara dezessete anos quando os prelos de Barcelona ouviram pela primeira vez o estalido elétrico de sua pena. Nas colunas de “La Luz”, “El Fantasma” e, mais tarde, “El Sufragio Universal”, aquele jovem valenciano de bigode incipiente e olhar límpido escrevia com a maturidade moral de um clássico espanhol e o fogo cívico dos grandes tribunos republicanos. Não buscava o aplauso dos salões; buscava a verdade, ainda que a verdade queimasse.',
            'Corria o mês de março de 1886 quando a Espanha inteira emudeceu diante do fuzilamento, em Cartagena, do humilde ex-cabo Bartual, enquanto nos palácios de Madrid tramavam-se indultos para um aristocrata de sangue real culpado do mesmo delito militar. Pepe Adell tinha dezoito anos e não hesitou ao estampar em letras de imprensa seu célebre libelo “¡Igualdad ante la ley!”, perguntando aos poderosos de seu tempo se a justiça espanhola se media pelo brilho dos sobrenomes ou pelo pranto das viúvas sem fortuna. Aquela mesma pena juvenil defendeu a instrução da mulher como alicerce das nações livres, combateu o fanatismo e o caciquismo, e dialogou de igual para igual com gigantes do porte de Nicolás Salmerón, Emilio Castelar, Francisco Pi y Margall e Fernando Tarrida del Mármol.',
          ],
        },
        {
          roman: 'III',
          title: 'A Rua da Ajuda, o Solar do Theatro Municipal e o Buril dos Presidentes (1891–1902)',
          paragraphs: [
            'O destino, contudo, reservava-lhe o horizonte imenso da América. Ao cruzar o Atlântico e desembarcar no Rio de Janeiro febril e cosmopolita da jovem República brasileira, Pepe Adell não chegou como um exilado nostálgico, mas como uma ponte viva entre a Espanha e o Brasil. Estabeleceu seu lar e sua célebre oficina artística de gravura na histórica Rua da Ajuda — exatamente no terreno onde hoje se ergue, majestoso, o Theatro Municipal do Rio de Janeiro, coração da Cinelândia. É profundamente simbólico que onde hoje ecoam as grandes óperas e sinfonias do Brasil, tenham ecoado antes o martelo delicado do gravador valenciano e as tertúlias fraternais da intelectualidade hispano-brasileira.',
            'Naquela casa da Rua da Ajuda, ao lado de seu amigo de alma — o lendário arquiteto sevilhano Adolfo Morales de los Ríos, autor do Museu Nacional de Belas Artes — e de companheiros de imprensa como Gaspar Thous y Orts, S. Sampol y Ripoll e R. Miranda, Pepe Adell dirigiu e redigiu as páginas vibrantes de “La Unión Española”. Ali deixou esculpida, em 12 de outubro de 1893, a sentença que resume toda a sua filosofia moral e que preside este Memorial: “¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!” («Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!»).',
            'Nem mesmo a violência física logrou dobrar sua fidalguia. Em maio de 1895, quando uma turba exaltada apedrejou as ruas cariocas e uma pedra lhe abriu a fronte enquanto defendia a honra da colônia espanhola, Pepe Adell reapareceu na redação com a cabeça enfaixada, mas com seu proverbial sorriso intacto. E quando, no ano de 1900, as colônias estrangeiras quiseram oferecer ao Presidente da República do Brasil, Dr. Manoel Ferraz de Campos Sales, uma joia monumental de três quilos de ouro maciço, platina e brilhantes para celebrar o IV Centenário do Descobrimento, foi o buril magistral de José Adell y Fons o escolhido para imortalizar no metal precioso o brasão e as inscrições daquele tributo histórico.',
          ],
        },
        {
          roman: 'IV',
          title: 'As Quarenta Carruagens da Dor e o Sorriso Imortal na Bahia (1903–1927)',
          paragraphs: [
            'Mas a grandeza de um homem mede-se, sobretudo, na hora desnuda da dor. Em fevereiro de 1903, a morte arrebatou no Rio de Janeiro, aos trinta e dois anos de idade, sua amadíssima esposa e companheira de lutas, Doña Emilia Vallespí de Adell. Quarenta carruagens acompanharam o féretro até o cemitério de São Francisco Xavier sob uma chuva de lágrimas e coroas. Ficava Pepe Adell viúvo em terra americana com seus filhos pequenos — Josefina, Alberto e Pepín — abraçados à sua sobrecasaca negra. Muitos teriam sucumbido à amargura; ele, ao contrário, transformou o luto em amor redobrado pelos filhos, pelos órfãos e pelas sociedades de beneficência.',
            'Quando, em 12 de maio de 1927, entregou sua alma em Salvador da Bahia, aos cinquenta e nove anos de idade, a imprensa da Espanha e do Brasil vestiu-se de luto. Foi então que o velho mestre Adolfo Morales de los Ríos escreveu aquela carta de despedida que nenhum descendente pode ler sem que os olhos se marejem: recordava como na Rua da Ajuda todos riam e esperavam sempre o melhor da vida porque seguiam a máxima íntima de Pepe Adell: “Mais vale falar de coisas risonhas do que escrever sobre lágrimas”.',
            'Como seu trineto — unindo em minhas próprias veias o sangue valenciano e espanhol ao coração carioca e brasileiro —, entrego hoje ao público este arquivo sagrado. Que quem percorrer estas setenta e duas obras e estas oitenta e nove páginas originais sinta que Pepe Adell não pertence ao passado: vive em cada consciência que defende a justiça sem rancor, a arte com excelência e a vida com um sorriso.',
          ],
        },
      ],
      closingSignature: 'Dr. Marcello Bossois de Melo Ferreira',
      closingRole: 'Trineto de José Adell y Fons (“Pepe Adell”) • Idealizador do Memorial',
      closingPlaceAndDate: 'Rio de Janeiro — Valência, Memorial Histórico Familiar José Adell',
      correspondenceLabel: 'Correspondência com o Trineto de Pepe Adell:',
      correspondenceText:
        'Para correspondências históricas, familiares, acadêmicas ou documentais com o autor e idealizador deste site, escreva para:',
      correspondenceEmail: CORRESPONDENCE_EMAIL_DISPLAY,
    },
  },
};
