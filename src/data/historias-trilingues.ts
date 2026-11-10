import { SiteLang } from '@/lib/i18n-ui';
import {
  FAMILY_AND_CIRCLE,
  FamilyMember,
  HUMAN_STORIES,
  HumanStory,
} from '@/data/historias-humanas';

interface LocalizedStoryText {
  kicker: string;
  location: string;
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  paragraphs: string[];
  curiosityBox: { title: string; text: string };
}

const STORIES_ES: Record<string, LocalizedStoryText> = {
  'carta-morales-hamlet': {
    kicker: 'Amistad y Despedida (1927)',
    location: 'Río de Janeiro y Salvador de Bahía',
    title: 'El Escudo de la Sonrisa y el Cráneo de Hamlet: La Carta de Adiós de Morales de los Ríos',
    subtitle:
      'Cuando Pepe Adell murió discretamente en Bahía, el gran arquitecto de Río de Janeiro se sentó frente a su máquina de escribir para impedir que el amigo cayera en el olvido.',
    quote:
      'Si algún día su cráneo cayese entre los dedos de la mano de un nuevo Hamlet, que no se preocupe con el “To be or not to be”: ser o no ser no fue para Pepe Adell objeto de ninguna cuestión personal.',
    quoteAuthor: 'Adolfo Morales de los Ríos (Río de Janeiro, 1927)',
    paragraphs: [
      'En mayo de 1927 llegaba a Río de Janeiro, enviada desde la Librería Española de Salvador de Bahía, una noticia breve y dolorosa: el día 12 había fallecido José Adell y Fons. Sus huesos yacían en un rincón ignorado de un cementerio provinciano, bien propio de la modestia voluntariamente oscurecida de quien huyó toda su vida de diplomas, vanidades y consagraciones oficiales.',
      'Inconforme con un frío «Requiescat in pace», su viejo amigo Adolfo Morales de los Ríos —el célebre arquitecto sevillano autor del Museo Nacional de Bellas Artes— tomó dos hojas con membrete de J. L. Conde & Cia, en la Rua Visconde de Itaúna, y escribió un retrato profundamente humano titulado «Pepe Adell, ha muerto».',
      'Morales revela quién era Pepe detrás de las polémicas de prensa: un socialista puro, «de aquellos que, como los primeros catecúmenos cristianos, iban hasta el martirio al confesar la fe que los alentaba», guiado siempre por fines altruistas y por el bien general. Evoca aquella casita colonial baja de un solo piso en la Rua da Ajuda, cuyo alero de tejado casi rozaban con la punta de los bastones, donde convivían las dos mitades de su alma: su taller artístico de maestro grabador disputado por la clientela y las cajas tipográficas de La Unión Española.',
      'Allí se reunía una tertulia inolvidable de emigrantes soñadores: el cubano españolísimo Montilla, los sabios sevillanos Barradas y Meneses, el abnegado Elías Novoa, los hermanos gallegos Vicente y Manuel do Pazo, el artista vizcaíno Plácido Isasi y el propio Morales. Y en el centro de todos brillaba el arma defensiva de Pepe Adell ante las amarguras de la vida: su sonrisa expansiva, irónica y bondadosa.',
    ],
    curiosityBox: {
      title: 'Detalle Curioso en el Papel Original',
      text: 'Observe en el facsímil de la página 84 el membrete comercial de «J. L. Conde & Cia — Rua Visconde Itaúna, 65» y las correcciones hechas a pluma por el propio Adolfo Morales de los Ríos antes de estampar su firma en la página 85.',
    },
  },
  'pedrada-largo-sao-francisco': {
    kicker: 'Coraje en las Calles de Río (1895)',
    year: '1895',
    location: 'Largo de São Francisco de Paula, Río de Janeiro',
    title: 'Sangre frente a las Redacciones: El Día en que José Adell Fue Herido en la Cabeza en Río',
    subtitle:
      'En medio de una manifestación multitudinaria encabezada por José do Patrocínio por la independencia de Cuba, el periodista valenciano salió a la calle y recibió un golpe en la cabeza.',
    quote:
      'Con este motivo se produjeron acaloradas disputas y después serios tumultos, de resultas de los cuales fue herido en la cabeza el distinguido escritor español D. José Adell, redactor del periódico La Unión Española.',
    quoteAuthor: 'Telegrama Internacional de la Agencia Fabra (Septiembre de 1895)',
    paragraphs: [
      'José Adell jamás fue un escritor de gabinete oculto tras el anonimato. Como recordaría Morales de los Ríos, sabían «echarse a la calle cuando fue preciso». Y en septiembre de 1895 las calles del centro de Río de Janeiro ardían de pasión política.',
      'En la plaza de São Francisco de Paula se congregó una multitud convocada por el legendario tribuno abolicionista brasileño José do Patrocínio en favor de los insurrectos cubanos y de Antonio Maceo. Tras los discursos, la columna recorrió las calles deteniéndose ante las redacciones de los periódicos.',
      'Al escucharse gritos contra España frente a las imprentas, grupos de inmigrantes españoles protestaron con energía dando vivas a su patria. El choque derivó en violentos tumultos callejeros hasta la llegada de la policía. En primera línea estaba José Adell: herido directamente en la cabeza durante la refriega, la noticia cruzó el Atlántico por cable submarino y fue transmitida a toda Europa por la Agencia Fabra desde Lisboa.',
      'Lo más admirable es que ni aquella herida física dejó rencor en su pluma: Adell siguió condenando los abusos militares, pidiendo paz y reformas justas para Cuba y Filipinas, y defendiendo la fraternidad con Brasil.',
    ],
    curiosityBox: {
      title: 'Dos Grandes Tribunos en la Misma Escena',
      text: 'El despacho de la página 70 sitúa en el mismo escenario histórico del Río de Janeiro de 1895 al célebre abolicionista brasileño José do Patrocínio y al periodista republicano de Vinaròs José Adell y Fons.',
    },
  } as LocalizedStoryText,
  'adeus-emilia-orfaos': {
    kicker: 'Amor, Duelo y Familia (1903)',
    location: 'Río de Janeiro (Cementerio de San Juan Bautista)',
    title: 'Cuarenta Carruajes en Lágrimas: La Partida de Doña Emilia y el Grito de sus Tres Hijos Pequeños',
    subtitle:
      'A los 33 años partió la compañera de vida de Pepe Adell un sábado de septiembre, dejando una escena desgarradora en la memoria de toda la colonia española.',
    quote:
      '¡No había una persona que no llorara al escuchar los desgarradores gritos de los tres huérfanos de la finada —Josefina, Alberto y Pepe— que, en su inconsciencia de la niñez, solo veían que se llevaban a su madre y pedían a toda costa ir con ella!',
    quoteAuthor: 'Crónica necrológica de Río de Janeiro (Septiembre de 1903)',
    paragraphs: [
      'Detrás del polemista vigoroso y del maestro artesano del metal latía el corazón de un esposo enamorado y de un padre que conoció el dolor más hondo lejos de su tierra natal. El sábado 5 de septiembre de 1903, a las dos y media de la tarde, fallecía tras larga y cruel enfermedad Doña Emilia Vallespí de Adell. Tenía apenas 33 años, nacida el 1 de enero de 1870 según la nota manuscrita conservada con ternura al pie del recorte.',
      'Por su donaire, ingenio, amabilidad y franqueza sin artificios, Emilia había convertido su hogar en el punto de reunión predilecto de buena parte de la colonia española de Río. Desde la mañana del domingo la casa se llenó de tal multitud que resultaba casi imposible acercarse al ataúd cubierto de flores naturales.',
      'Entre decenas de coronas enviadas por las familias Pazos, Montilla, Novoa, Jiménez, Lozano, Santos y Pascual, dos cintas encogían todos los corazones: «A su querida Emilia, Pepe» y «A su adorada madre, Josefina, Alberto y Pepín».',
      'A las cinco de la tarde, al colocarse el féretro en el coche fúnebre, estalló el llanto incontenible: los tres niños pequeños, sin comprender la muerte, gritaban desesperados pidiendo subir al carruaje para irse con su madre. Más de cuarenta coches acompañaron el cortejo presidido por el Cónsul de España, Don Juan Capllonch y Puerto, hasta el cuadro 2º, sepultura nº 2666 del Cementerio de San Juan Bautista.',
    ],
    curiosityBox: {
      title: 'Fechas Guardadas a Mano con Amor Familiar',
      text: 'En la página 83 del álbum original, una mano familiar anotó con tinta «* 01.01.1870 / † 05.9.1903», el mismo gesto piadoso repetido en la página 75 para José Adell («* 10.02.1868 / † 12.5.1927»).',
    },
  },
  'irmao-cego-vinaros': {
    kicker: 'Raíces en Vinaròs y Superación (1889)',
    location: 'Vinaròs y Barcelona, España',
    title: 'El Violinista Ciego de 18 Años y el Hermano Autodidacta: El Orgullo de Vinaròs',
    subtitle:
      'Nacidos en una familia orientada hacia las artes en la costa castellonense, los hermanos Adell y Fons vencieron barreras casi imposibles en el siglo XIX.',
    quote:
      'El cieguecito Alberto, que es casi un niño, una esperanza musical, nació en Vinaroz... Y esta familia posee otro vástago que, sin estudios universitarios ni de segunda enseñanza siquiera, muestra aptitudes nada comunes para la carrera literaria.',
    quoteAuthor: 'El Sufragio Universal (Barcelona, 1889)',
    paragraphs: [
      'Para comprender la profunda sensibilidad humana de José Adell —su compasión hacia los humildes, los desamparados y los obreros sin pan— basta asomarse al hogar donde creció en Vinaròs, en la costa norte valenciana.',
      'Su hermano menor, Alberto Adell y Fons, había perdido la vista siendo niño. En 1877 ingresó como alumno en la Escuela Municipal de Ciegos y Sordo-Mudos de Barcelona, donde transformó la oscuridad en arte puro: dominó de forma prodigiosa el violín, el piano y la composición musical.',
      'En 1889, tras el fallecimiento de su maestro D. J. Cayetano Vallés, el Excmo. Ayuntamiento de Barcelona nombró oficialmente a Alberto, con apenas 18 años de edad, Profesor Auxiliar de la clase de violín de la Escuela.',
      'El periódico que celebró aquel triunfo quiso destacar otro prodigio de la misma sangre vinarocense: su hermano José Adell y Fons, quien sin haber pisado aulas universitarias ni institutos de segunda enseñanza, maravillaba ya a los lectores de Barcelona con sus crónicas europeas.',
    ],
    curiosityBox: {
      title: 'Dos Hermanos, Dos Formas de Dar Luz',
      text: 'Por hermosa coincidencia del destino, el primer semanario donde José Adell ejerció como secretario de redacción en Barcelona a los 17 años (1885) llevaba por título precisamente «La Luz».',
    },
  },
  'mestre-gravador-campos-sales': {
    kicker: 'Arte en Metal y Reconocimiento Oficial (1900)',
    location: 'Río de Janeiro y Buenos Aires',
    title: 'El Buril del Operario Ilustrado: Cuando el Gobierno Brasileño Eligió a Pepe Adell',
    subtitle:
      'Sin ostentar títulos académicos, el inmigrante de Vinaròs se convirtió en maestro disputado del grabado artístico y esculpió la medalla histórica del viaje presidencial de 1900.',
    quote:
      'Era un autodidacta. Ejercía el oficio de grabador y, aun sin ser portador de diplomas, ¡era reconocido como un Maestro! A él le cupo esculpir, indicado por el Gobierno Brasileño, la medalla conmemorativa de la visita del Presidente Campos Sales a la Argentina en 1900.',
    quoteAuthor: 'Memorial Manuscrito de la Familia Adell (Página 88)',
    paragraphs: [
      'Había algo renacentista en la jornada cotidiana de Pepe Adell en Río de Janeiro y, más tarde, en Salvador de Bahía. De día se inclinaba con lupas y finísimos buriles de acero sobre planchas de bronce, plata y oro; de noche tomaba la pluma para analizar el rumbo de las democracias.',
      'En octubre de 1900, la diplomacia sudamericana vivió un hito histórico con la visita oficial del Presidente de Brasil, Dr. Campos Sales, a Buenos Aires, recibido por Julio Argentino Roca. Para inmortalizar el encuentro en una medalla oficial conmemorativa, el Gobierno Brasileño escogió el pulso magistral de José Adell y Fons.',
      'Premiado en diversas ocasiones y estimado por toda la clientela artística, jamás renunció a su orgullo de operario ilustrado. Como escribió Pablo Isasi en el poema «Semblanza»: «Escucha al pobre, lo mismo que al poderoso altanero, y defiende con su pluma la Libertad y el Progreso».',
    ],
    curiosityBox: {
      title: 'La Caligrafía de un Maestro Grabador',
      text: 'En la página 28 del archivo se conserva la firma autógrafa «José Adell»: el equilibrio perfecto de sus curvas a tinta revela de inmediato el pulso firme del grabador en metal.',
    },
  },
  'curiosidades-cruzador-malaga-saudade': {
    kicker: 'Humor Fino, Nostalgia y Empatía Social',
    location: 'Atlántico, Madrid, Barcelona y Río de Janeiro',
    title: 'El Crucero Fantasma «Málaga», las Casas-Cueva y la Nostalgia que Envejece en el Mar',
    subtitle:
      'Entre lágrimas al volver a España, denuncias por el hambre obrera e ironías memorables contra noticias falsas del siglo XIX, sus crónicas rebosan humanidad.',
    quote:
      '¡Cuánto envejecemos los individuos! Ha más de un lustro despedíme del faro de Cádiz... trayendo de tan larga y dolorosa ausencia prematuras canas en la cabeza y la pérdida irreparable de seres queridos.',
    quoteAuthor: 'José Adell [A. Fons], Carta de Madrid (20 de Septiembre de 1893)',
    paragraphs: [
      'Leer las 89 páginas del archivo de José Adell es descubrir a un escritor capaz de pasar de la confesión más íntima a la sátira más brillante. En septiembre de 1893, aún mareado tras cruzar el Atlántico desde Río después de cinco años de emigración, confiesa la herida secreta de todo emigrante: las canas tempranas y los seres queridos fallecidos en la ausencia.',
      'Días más tarde pone los ojos en los olvidados: denuncia la tragedia de Villacañas (Toledo), donde la mitad del pueblo vivía bajo tierra en «silos» inundados por una tormenta que dejó más de cincuenta cadáveres. Y en Madrid conversa fraternalmente con su antiguo amigo anarquista Fernando Tarrida del Mármol para comprender las raíces del hambre obrera.',
      'Cuando tocaba desenmascarar el mal periodismo, reaparecía su célebre sonrisa irónica: en junio de 1898 puso en evidencia al diario carioca A Tribuna, que tradujo mal un despacho francés, inventó la voladura de un inexistente crucero español llamado «Málaga» ¡y situó las Islas Filipinas junto a los peñascos de África!',
      'Pero pronto la ironía cedía paso a la piedad humana: en agosto de 1898, al describir la llegada a La Coruña de dos mil soldados repatriados de Cuba a bordo del vapor Alicante, Adell llora a los jóvenes humildes arrancados del campo y del taller.',
    ],
    curiosityBox: {
      title: 'Páginas Restauradas a Mano en el Siglo XIX',
      text: 'En las páginas 5, 7, 8 y 22 del cuaderno original, pasajes enteros cortados o deteriorados en el papel impreso fueron pacientemente copiados a pluma y tinta por el propio autor.',
    },
  },
};

const STORIES_VA: Record<string, LocalizedStoryText> = {
  'carta-morales-hamlet': {
    kicker: 'Amistat i Comiat (1927)',
    location: 'Rio de Janeiro i Salvador de Bahia',
    title: 'L’Escut del Somriure i el Crani de Hamlet: La Carta d’Adeu de Morales de los Ríos',
    subtitle:
      'Quan Pepe Adell morí discretament a Bahia, el gran arquitecte de Rio de Janeiro s’assegué davant la màquina d’escriure per impedir que l’amic caiguera en l’oblit.',
    quote:
      'Si algun dia el seu crani caiguera entre els dits de la mà d’un nou Hamlet, que no es preocupe amb el “To be or not to be”: ser o no ser mai no fou per a Pepe Adell cap dubte personal.',
    quoteAuthor: 'Adolfo Morales de los Ríos (Rio de Janeiro, 1927)',
    paragraphs: [
      'Al maig de 1927 arribava a Rio de Janeiro, enviada des de la Llibreria Espanyola de Salvador de Bahia, una notícia breu i dolorosa: el dia 12 havia faltat José Adell y Fons. Els seus ossos reposaven en un racó ignorat d’un cementeri provincià, ben propi de la modèstia voluntària de qui fugí tota la vida de diplomes, vanitats i honors oficials.',
      'Inconformista davant d’un fred «Requiescat in pace», el seu vell amic Adolfo Morales de los Ríos —el cèlebre arquitecte autor del Museu Nacional de Belles Arts— prengué dos fulls amb capçalera de J. L. Conde & Cia i escrigué un retrat profundament humà titulat «Pepe Adell, ha muerto».',
      'Morales revela qui era Pepe darrere de les polèmiques de premsa: un socialista pur, «com els primers catecúmens cristians que anaven fins al martiri en confessar la fe que els encoratjava», mogut sempre per fins altruistes i pel bé comú. Evoca aquella caseta colonial baixa d’un sol pis a la Rua da Ajuda, on convivien el seu taller artístic de mestre gravador en metall i les caixes tipogràfiques de La Unión Española.',
      'Allí es reunia una tertúlia inoblidable d’emigrants somiadors: Montilla, els germans Barradas, Meneses, Elías Novoa, Vicente i Manuel do Pazo, Plácido Isasi i el mateix Morales. I al centre de tots brillava l’arma defensiva de Pepe Adell davant les amargors de la vida: el seu somriure expansiu, irònic i bondadós.',
    ],
    curiosityBox: {
      title: 'Detall Curiós al Paper Original',
      text: 'Observeu al facsímil de la pàgina 84 la capçalera comercial de «J. L. Conde & Cia — Rua Visconde Itaúna, 65» i les esmenes fetes a ploma pel mateix Adolfo Morales de los Ríos abans de signar a la pàgina 85.',
    },
  },
  'pedrada-largo-sao-francisco': {
    kicker: 'Coratge als Carrers de Rio (1895)',
    location: 'Largo de São Francisco de Paula, Rio de Janeiro',
    title: 'Sang davant les Redaccions: El Dia en què José Adell Fou Ferit al Cap a Rio',
    subtitle:
      'Enmig d’una manifestació multitudinària encapçalada per José do Patrocínio per la independència de Cuba, el periodista vinarossenc eixí al carrer i rebé un colp al cap.',
    quote:
      'Amb aquest motiu es produïren acalorades disputes i després seriosos aldarulls, a conseqüència dels quals fou ferit al cap el distingit escriptor espanyol D. José Adell, redactor del periòdic La Unión Española.',
    quoteAuthor: 'Telegrama Internacional de l’Agència Fabra (Setembre de 1895)',
    paragraphs: [
      'José Adell mai no fou un escriptor de gabinet amagat darrere l’anonimat. Com recordaria Morales de los Ríos, sabien «eixir al carrer quan calia». I al setembre de 1895 els carrers del centre de Rio de Janeiro bullien de passió política.',
      'A la plaça de São Francisco de Paula es congregà una multitud convocada pel llegendari tribú abolicionista brasiler José do Patrocínio en suport dels insurrectes cubans. Després dels discursos, la columna recorregué els carrers aturant-se davant les redaccions dels diaris.',
      'En sentir-se crits contra Espanya davant les impremtes, grups d’immigrants espanyols protestaren amb energia. El xoc derivà en greus aldarulls fins a la intervenció de la policia. En primera línia estava José Adell: ferit directament al cap durant la brega, la notícia creuà l’Atlàntic per cable submarí i fou transmesa a Europa per l’Agència Fabra des de Lisboa.',
      'El més admirable és que ni aquella ferida deixà rancor en la seua ploma: Adell continuà condemnant els abusos militars, demanant pau i reformes justes, i defensant la fraternitat amb el Brasil.',
    ],
    curiosityBox: {
      title: 'Dos Grans Tribuns en la Mateixa Escena',
      text: 'El despatx de la pàgina 70 situa en el mateix escenari històric del Rio de Janeiro de 1895 el cèlebre abolicionista brasiler José do Patrocínio i el periodista republicà de Vinaròs José Adell y Fons.',
    },
  },
  'adeus-emilia-orfaos': {
    kicker: 'Amor, Dol i Família (1903)',
    location: 'Rio de Janeiro (Cementeri de São João Batista)',
    title: 'Quaranta Carruatges en Llàgrimes: La Partida de Doña Emilia i el Crit dels Seus Tres Fills Menuts',
    subtitle:
      'Als 33 anys partí la companya de vida de Pepe Adell un dissabte de setembre, deixant una escena esquinçadora en la memòria de tota la colònia.',
    quote:
      'No hi havia una sola persona que no plorara en escoltar els esquinçadors crits dels tres orfes de la finada —Josefina, Alberto i Pepe— que, en la seua inconsciència de la infantesa, sols veien que s’emportaven sa mare i demanaven a tot preu anar-se’n amb ella!',
    quoteAuthor: 'Crònica necrològica de Rio de Janeiro (Setembre de 1903)',
    paragraphs: [
      'Darrere del polemista vigorós i del mestre artesà del metall bategava el cor d’un espòs enamorat i d’un pare que conegué el dolor més profund lluny de la terra natal. El dissabte 5 de setembre de 1903, a les dues i mitja de la vesprada, moria després d’una llarga malaltia Doña Emilia Vallespí de Adell, amb només 33 anys.',
      'Per la seua gràcia, enginy, amabilitat i franquesa, Emilia havia convertit sa casa en el punt de trobada predilecte de bona part de la colònia espanyola de Rio. Des del matí de diumenge la residència s’omplí de tanta gent que resultava quasi impossible acostar-se al fèretre cobert de flors naturals.',
      'Entre desenes de corones enviades per les famílies amigues, dues cintes estrenyien tots els cors: «A su querida Emilia, Pepe» i «A su adorada madre, Josefina, Alberto y Pepín».',
      'A les cinc de la vesprada, en col·locar el taüt al cotxe fúnebre, esclatà el plor incontenible: els tres xiquets menuts cridaven desesperats demanant pujar al carruatge per anar-se’n amb sa mare. Més de quaranta cotxes acompanyaren el seguici presidit pel Cònsol d’Espanya fins al quadre 2n, sepultura núm. 2666 del Cementeri de São João Batista.',
    ],
    curiosityBox: {
      title: 'Dates Guardades a Mà amb Amor Familiar',
      text: 'A la pàgina 83 de l’àlbum original, una mà familiar anotà amb tinta «* 01.01.1870 / † 05.9.1903», el mateix gest amorós repetit a la pàgina 75 per a José Adell («* 10.02.1868 / † 12.5.1927»).',
    },
  },
  'irmao-cego-vinaros': {
    kicker: 'Arrels a Vinaròs i Superació (1889)',
    location: 'Vinaròs i Barcelona, Espanya',
    title: 'El Violinista Cec de 18 Anys i el Germà Autodidacte: L’Orgull de Vinaròs',
    subtitle:
      'Nascuts en una família orientada cap a les arts a la costa del Maestrat valencià, els germans Adell y Fons venceren barreres quasi impossibles al segle XIX.',
    quote:
      'El ceguet Alberto, que és quasi un xiquet, una esperança musical, nasqué a Vinaròs... I aquesta família posseeix un altre plançó que, sense estudis universitaris ni de segon ensenyament tan sols, mostra aptituds gens comunes per a la carrera literària.',
    quoteAuthor: 'El Sufragio Universal (Barcelona, 1889)',
    paragraphs: [
      'Per comprendre la profunda sensibilitat humana de José Adell —la seua compassió cap als humils, els desemparats i els obrers sense pa— cal mirar dins la llar on cresqué a Vinaròs, a la comarca valenciana del Baix Maestrat.',
      'El seu germà menor, Alberto Adell y Fons, havia perdut la vista sent xiquet. El 1877 ingressà com a alumne a l’Escola Municipal de Cecs i Sordmuts de Barcelona, on transformà la foscor en música pura dominant el violí, el piano i la composició.',
      'El 1889, després de la mort del seu mestre D. J. Cayetano Vallés, l’Ajuntament de Barcelona nomenà oficialment Alberto, amb només 18 anys, Professor Auxiliar de la classe de violí.',
      'El periòdic que celebrà aquell triomf volgué destacar un altre prodigi de la mateixa sang vinarossenca: el seu germà José Adell y Fons, qui sense haver xafat aules universitàries meravellava ja els lectors de Barcelona amb les seues cròniques europees.',
    ],
    curiosityBox: {
      title: 'Dos Germans, Dues Formes de Donar Llum',
      text: 'Per una bella coincidència, el primer setmanari on José Adell exercí com a secretari de redacció a Barcelona als 17 anys (1885) portava per nom precisament «La Luz».',
    },
  },
  'mestre-gravador-campos-sales': {
    kicker: 'Art en Metall i Reconeixement Oficial (1900)',
    location: 'Rio de Janeiro i Buenos Aires',
    title: 'El Burí de l’Operari Il·lustrat: Quan el Govern Brasiler Elegí Pepe Adell',
    subtitle:
      'Sense ostentar títols acadèmics, l’immigrant de Vinaròs es convertí en mestre disputat del gravat artístic i esculpí la medalla històrica del viatge presidencial de 1900.',
    quote:
      'Era un autodidacte. Exercia l’ofici de gravador i, tot i no ser portador de diplomes, era reconegut com un Mestre! A ell li correspongué esculpir, indicat pel Govern Brasiler, la medalla commemorativa de la visita del President Campos Sales a l’Argentina el 1900.',
    quoteAuthor: 'Memorial Manuscrit de la Família Adell (Pàgina 88)',
    paragraphs: [
      'Hi havia quelcom renaixentista en la jornada quotidiana de Pepe Adell a Rio de Janeiro i, més tard, a Salvador de Bahia. De dia s’inclinava amb lupes i finíssims burins d’acer sobre planxes de bronze, plata i or; de nit prenia la ploma per analitzar el rumb de les democràcies.',
      'A l’octubre de 1900, amb motiu de la històrica visita oficial del President del Brasil, Dr. Campos Sales, a Buenos Aires, el Govern Brasiler confià al pols magistral de José Adell y Fons l’escultura de la medalla commemorativa oficial.',
      'Premiat en diverses ocasions i estimat per tota la clientela artística, mai no renuncià al seu orgull d’operari il·lustrat. Com escrigué Pablo Isasi al poema «Semblanza»: «Escolta el pobre, igual que el poderós altiu, i defensa amb la seua ploma la Llibertat i el Progrés».',
    ],
    curiosityBox: {
      title: 'La Cal·ligrafia d’un Mestre Gravador',
      text: 'A la pàgina 28 de l’arxiu es conserva la signatura autògrafa «José Adell»: l’equilibri perfecte de les seues corbes a tinta revela immediatament el pols ferm del gravador en metall.',
    },
  },
  'curiosidades-cruzador-malaga-saudade': {
    kicker: 'Humor Fi, Enyorança i Empatia Social',
    location: 'Atlàntic, Madrid, Barcelona i Rio de Janeiro',
    title: 'El Creuer Fantasma «Málaga», les Cases-Cova i l’Enyorança que Envelleix al Mar',
    subtitle:
      'Entre llàgrimes en tornar a casa, denúncies per la fam obrera i ironies memorables contra notícies falses del segle XIX, les seues cròniques bateguen d’humanitat.',
    quote:
      'Quant envellim els individus! Fa més d’un llustre m’acomiadí del far de Cadis... portant de tan llarga i dolorosa absència cabells blancs prematurs i la pèrdua irreparable d’éssers estimats.',
    quoteAuthor: 'José Adell [A. Fons], Carta de Madrid (20 de Setembre de 1893)',
    paragraphs: [
      'Llegir les 89 pàgines de l’arxiu de José Adell és descobrir un escriptor capaç de passar de la confessió més íntima a la sàtira més brillant. Al setembre de 1893, encara marejat després de creuar l’Atlàntic des de Rio després de cinc anys d’absència, confessa la ferida secreta de tot emigrant.',
      'Dies més tard posa els ulls en els oblidats: denuncia la tragèdia de Villacañas (Toledo), on la meitat del poble vivia sota terra en «sitges» inundades per una tempesta, i a Madrid conversa fraternalment amb el seu antic amic anarquista Fernando Tarrida del Mármol.',
      'Quan tocava desemmascarar el mal periodisme, reapareixia el seu cèlebre somriure irònic: al juny de 1898 posà en evidència el diari carioca A Tribuna, que traduí malament un telegrama francés, inventà l’enfonsament d’un inexistent creuer espanyol anomenat «Málaga» i situà les Illes Filipines al costat dels penyals d’Àfrica!',
      'Però prompte la ironia deixava pas a la pietat humana: a l’agost de 1898, en descriure l’arribada a La Corunya de dos mil soldats repatriats de Cuba a bord del vapor Alicante, Adell plora els joves humils arrancats del camp i del taller.',
    ],
    curiosityBox: {
      title: 'Pàgines Restaurades a Mà al Segle XIX',
      text: 'A les pàgines 5, 7, 8 i 22 del quadern original, passatges sencers tallats o deteriorats al paper imprés foren pacientment copiats a ploma i tinta pel mateix autor.',
    },
  },
};

export function getLocalizedStories(lang: SiteLang): HumanStory[] {
  if (lang === 'pt') return HUMAN_STORIES;
  const dict = lang === 'es' ? STORIES_ES : STORIES_VA;
  return HUMAN_STORIES.map((s) => {
    const tr = dict[s.id];
    if (!tr) return s;
    return {
      ...s,
      kicker: tr.kicker,
      location: tr.location,
      title: tr.title,
      subtitle: tr.subtitle,
      quote: tr.quote,
      quoteAuthor: tr.quoteAuthor,
      paragraphs: tr.paragraphs,
      curiosityBox: tr.curiosityBox,
    };
  });
}

const FAMILY_ES: Record<string, { relation: string; dates: string; story: string; highlightQuote?: string }> = {
  'pepe-adell': {
    relation: 'El Patriarca • Periodista, Librepensador y Maestro Grabador',
    dates: 'Vinaròs, 10.02.1868 — Salvador de Bahía, 12.05.1927',
    story:
      'Autodidacta sin diplomas universitarios, Pepe Adell forjó su destino entre dos mundos. A los 17 años ya era secretario de redacción en Barcelona; en Brasil dirigió La Unión Española en Río de Janeiro, esculpió en metal para la Presidencia de la República y vivió sus últimos años como respetado maestro grabador en Bahía, siempre protegido por su inseparable sonrisa irónica y generosa.',
    highlightQuote: '«Más vale hablar de cosas risueñas, que escribir sobre lágrimas.»',
  },
  'emilia-vallespi': {
    relation: 'La Esposa Amada • Alma del Hogar Español en Río',
    dates: '01.01.1870 — Río de Janeiro, 05.09.1903',
    story:
      'Mujer de raras dotes de espíritu, franqueza y dulzura, Emilia convirtió el hogar de los Adell en el corazón acogedor de la colonia española en Río de Janeiro. Su partida prematura a los 33 años, un sábado de septiembre de 1903, conmovió a toda la ciudad: más de cuarenta carruajes acompañaron su féretro cubierto de flores hasta el Cementerio de San Juan Bautista.',
    highlightQuote:
      '«Nunca podremos olvidar el donaire, el ingenio y la amabilidad con que acogió a cuantos se presentaban en su casa.»',
  },
  'tres-filhos': {
    relation: 'Los Tres Hijos Huérfanos en la Tarde de 1903',
    dates: 'Infancia en Río de Janeiro • Continuidad de la Memoria',
    story:
      'Eran aún niños pequeños cuando perdieron a su madre el 5 de septiembre de 1903. En la corona sobre el ataúd se leía: «A su adorada madre, Josefina, Alberto y Pepín». A las cinco de la tarde, al ver colocar el féretro en el coche fúnebre, los gritos de los tres pequeños pidiendo irse con su madre hicieron llorar a todos los presentes. En 1927, dos de sus hijos seguían honrando el apellido en Río.',
    highlightQuote:
      '«En su inconsciencia de la niñez, solo veían que se llevaban a su madre y pedían a toda costa ir con ella!...»',
  },
  'alberto-adell': {
    relation: 'El Hermano Menor • Prodigio Ciego del Violín y el Piano',
    dates: 'Nacido en Vinaròs (c. 1871) • Nombrado Profesor en 1889',
    story:
      'Ciego desde niño y educado desde 1877 en la Escuela de Ciegos y Sordo-Mudos de Barcelona, Alberto reveló un genio musical extraordinario en el violín, el piano y la composición. A los 18 años fue nombrado Profesor Auxiliar por el Ayuntamiento de Barcelona, mientras la prensa elogiaba también la pluma autodidacta de su hermano José.',
    highlightQuote:
      '«Gran honra para Vinaròs, que sus hijos se abran paso por el escabroso y difícil camino del arte.»',
  },
  'morales-de-los-rios': {
    relation: 'El Gran Amigo • Arquitecto del Museo Nacional de Bellas Artes',
    dates: 'Sevilla, 1858 — Río de Janeiro, 1928',
    story:
      'Autor de los edificios del Museo Nacional de Bellas Artes y del Supremo Tribunal Federal en Río de Janeiro, Morales de los Ríos fue compañero inseparable de Pepe Adell en la Rua da Ajuda. Al conocer la muerte de su amigo en Bahía en 1927, mecanografió dos páginas conmovedoras que constituyen una joya sobre la amistad y la dignidad obrera.',
    highlightQuote:
      '«No es el caso de comentar su muerte con un sencillo Requiescat in pace. Su memoria está viva en el recuerdo y en el corazón de los que lo conocimos.»',
  },
};

const FAMILY_VA: Record<string, { relation: string; dates: string; story: string; highlightQuote?: string }> = {
  'pepe-adell': {
    relation: 'El Patriarca • Periodista, Lliurepensador i Mestre Gravador',
    dates: 'Vinaròs, 10.02.1868 — Salvador de Bahia, 12.05.1927',
    story:
      'Autodidacte sense diplomes universitaris, Pepe Adell forjà el seu destí entre dos mons. Als 17 anys ja era secretari de redacció a Barcelona; al Brasil dirigí La Unión Española a Rio de Janeiro, esculpí en metall per a la Presidència de la República i visqué els últims anys com a respectat mestre gravador a Bahia, sempre protegit pel seu somriure irònic i generós.',
    highlightQuote: '«Més val parlar de coses rialleres que escriure sobre llàgrimes.»',
  },
  'emilia-vallespi': {
    relation: 'L’Esposa Estimada • Ànima de la Llar Espanyola a Rio',
    dates: '01.01.1870 — Rio de Janeiro, 05.09.1903',
    story:
      'Dona de rares dots d’esperit, franquesa i dolçor, Emilia convertí la llar dels Adell en el cor acollidor de la colònia espanyola a Rio de Janeiro. La seua partida prematura als 33 anys commogué tota la ciutat: més de quaranta carruatges acompanyaren el seu fèretre cobert de flors fins al Cementeri de São João Batista.',
    highlightQuote:
      '«Mai no podrem oblidar la gràcia, l’enginy i l’amabilitat amb què acollí a tots els qui es presentaven a sa casa.»',
  },
  'tres-filhos': {
    relation: 'Els Tres Fills Orfes en la Vesprada de 1903',
    dates: 'Infantesa a Rio de Janeiro • Continuïtat de la Memòria',
    story:
      'Eren encara xiquets menuts quan perderen sa mare el 5 de setembre de 1903. En la corona sobre el taüt es llegia: «A su adorada madre, Josefina, Alberto y Pepín». A les cinc de la vesprada, els crits dels tres menuts demanant anar-se’n amb sa mare feren plorar tots els presents. El 1927, dos dels seus fills continuaven honrant el cognom a Rio.',
    highlightQuote:
      '«En la seua inconsciència de la infantesa, sols veien que s’emportaven sa mare i demanaven a tot preu anar-se’n amb ella!...»',
  },
  'alberto-adell': {
    relation: 'El Germà Menor • Prodigi Cec del Violí i el Piano',
    dates: 'Nascut a Vinaròs (c. 1871) • Nomenat Professor el 1889',
    story:
      'Cec des de xiquet i educat des de 1877 a l’Escola de Cecs i Sordmuts de Barcelona, Alberto revelà un geni musical extraordinari en el violí, el piano i la composició. Als 18 anys fou nomenat Professor Auxiliar per l’Ajuntament de Barcelona, mentre la premsa elogiava també la ploma autodidacta del seu germà José.',
    highlightQuote:
      '«Gran honra per a Vinaròs, que els seus fills s’òbriguen pas per l’escabrós i difícil camí de l’art.»',
  },
  'morales-de-los-rios': {
    relation: 'El Gran Amic • Arquitecte del Museu Nacional de Belles Arts',
    dates: 'Sevilla, 1858 — Rio de Janeiro, 1928',
    story:
      'Autor dels edificis del Museu Nacional de Belles Arts i del Suprem Tribunal Federal a Rio de Janeiro, Morales de los Ríos fou company inseparable de Pepe Adell a la Rua da Ajuda. En saber la mort de l’amic a Bahia el 1927, mecanografià dues pàgines colpidores que són una joia sobre l’amistat i la dignitat obrera.',
    highlightQuote:
      '«No és el cas de comentar la seua mort amb un senzill Requiescat in pace. La seua memòria està viva al cor dels qui el coneguérem.»',
  },
};

export function getLocalizedFamily(lang: SiteLang): FamilyMember[] {
  if (lang === 'pt') return FAMILY_AND_CIRCLE;
  const dict = lang === 'es' ? FAMILY_ES : FAMILY_VA;
  return FAMILY_AND_CIRCLE.map((m) => {
    const tr = dict[m.id];
    if (!tr) return m;
    return {
      ...m,
      relation: tr.relation,
      dates: tr.dates,
      story: tr.story,
      highlightQuote: tr.highlightQuote,
    };
  });
}
