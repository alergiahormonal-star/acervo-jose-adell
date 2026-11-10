import { SiteLang } from '@/lib/i18n-ui';
import {
  CATALOG_WORKS,
  CATEGORY_LABELS,
  CatalogWork,
  WorkCategory,
} from '@/data/acervo-completo';

export const CATEGORY_LABELS_I18N: Record<
  SiteLang,
  Record<WorkCategory, { label: string; description: string; badgeColor: string }>
> = {
  pt: CATEGORY_LABELS,
  es: {
    'humanidade-familia': {
      label: 'Familia, Afectos y Memoria Íntima',
      description:
        'Cartas de despedida, el duelo por Doña Emilia, los tres hijos, el hermano ciego prodigio, la herida en Río y el taller de la Rua da Ajuda.',
      badgeColor: 'bg-[#7A1C1C] text-[#FAF7F0]',
    },
    'questao-social': {
      label: 'Empatía Social, Obreros y Librepensamiento',
      description:
        'Defensa de los trabajadores hambrientos, igualdad ante la ley, epidemia de cólera, casas-cueva y diálogos sobre el anarquismo.',
      badgeColor: 'bg-[#1B365D] text-[#FAF7F0]',
    },
    'republicanismo-espanha': {
      label: 'Sueño Republicano y Retratos de España',
      description:
        'Grandes semblanzas de Castelar, Cánovas y Ruiz Zorrilla, cartas abiertas por una democracia sin sangre y memoria de 1868.',
      badgeColor: 'bg-[#5A3E1B] text-[#FAF7F0]',
    },
    'cuba-filipinas-imprensa': {
      label: 'Crisis de 1898, Cuba, Filipinas y Humor en la Prensa',
      description:
        'Polémicas con diarios de Río, el crucero fantasma Málaga, José Rizal en Filipinas y el doloroso regreso de los soldados.',
      badgeColor: 'bg-[#2F4F4F] text-[#FAF7F0]',
    },
    'europa-mundo': {
      label: 'Crónicas de Europa, Paz y Libertad',
      description:
        'Revistas mensuales sobre Francia, Irlanda (Gladstone y Parnell), Italia en Abisinia, Balcanes, Brasil republicano y filosofía de fin de siglo.',
      badgeColor: 'bg-[#3D2B56] text-[#FAF7F0]',
    },
    'arte-iberismo': {
      label: 'Arte, Grabado en Metal, Literatura y Mundo Ibérico',
      description:
        'La medalla de Campos Sales, la defensa de Rosalía de Castro y Emilia Pardo Bazán, y la hermandad entre España y Portugal.',
      badgeColor: 'bg-[#8B6508] text-[#FAF7F0]',
    },
  },
  va: {
    'humanidade-familia': {
      label: 'Família, Afectes i Memòria Íntima',
      description:
        'Cartes de comiat, el dol per Doña Emilia, els tres fills, el germà cec prodigi, la ferida a Rio i el taller de la Rua da Ajuda.',
      badgeColor: 'bg-[#7A1C1C] text-[#FAF7F0]',
    },
    'questao-social': {
      label: 'Empatia Social, Obrers i Lliurepensament',
      description:
        'Defensa dels treballadors famolencs, igualtat davant la llei, epidèmia de còlera, cases-cova i diàlegs sobre l’anarquisme.',
      badgeColor: 'bg-[#1B365D] text-[#FAF7F0]',
    },
    'republicanismo-espanha': {
      label: 'Somni Republicà i Retrats d’Espanya',
      description:
        'Grans semblances de Castelar, Cánovas i Ruiz Zorrilla, cartes obertes per una democràcia sense sang i memòria de 1868.',
      badgeColor: 'bg-[#5A3E1B] text-[#FAF7F0]',
    },
    'cuba-filipinas-imprensa': {
      label: 'Crisi de 1898, Cuba, Filipines i Humor a la Premsa',
      description:
        'Polèmiques amb diaris de Rio, el creuer fantasma Málaga, José Rizal a les Filipines i el dolorós retorn dels soldats.',
      badgeColor: 'bg-[#2F4F4F] text-[#FAF7F0]',
    },
    'europa-mundo': {
      label: 'Cròniques d’Europa, Pau i Llibertat',
      description:
        'Revistes mensuals sobre França, Irlanda (Gladstone i Parnell), Itàlia a Abissínia, Balcans, el Brasil republicà i filosofia de fi de segle.',
      badgeColor: 'bg-[#3D2B56] text-[#FAF7F0]',
    },
    'arte-iberismo': {
      label: 'Art, Gravat en Metall, Literatura i Món Ibèric',
      description:
        'La medalla de Campos Sales, la defensa de Rosalía de Castro i Emilia Pardo Bazán, i la germanor entre Espanya i Portugal.',
      badgeColor: 'bg-[#8B6508] text-[#FAF7F0]',
    },
  },
};

type WorkTranslation = {
  humanTitle: string;
  date: string;
  summary: string;
  note: string;
};

const WORKS_ES: Record<string, WorkTranslation> = {
  '01': {
    humanTitle: 'El adiós conmovedor del arquitecto del Museo de Bellas Artes al amigo de la sonrisa inolvidable',
    date: 'Mayo de 1927',
    summary:
      'Joya máxima de la memoria afectiva del archivo. Inconforme con la muerte silenciosa de Pepe Adell en Bahía, el arquitecto Adolfo Morales de los Ríos evoca el Hamlet de Shakespeare, revela el socialismo puro y altruista de Pepe, su maestría sin diplomas como grabador en metal y las tertulias alegres en la casita colonial baja de la Rua da Ajuda.',
    note: 'Texto original redactado en castellano por Adolfo Morales de los Ríos en Río de Janeiro (págs. 84–85).',
  },
  '02': {
    humanTitle: 'El sábado en que cuarenta carruajes lloraron los gritos de Josefina, Alberto y Pepín',
    date: '6 de Septiembre de 1903',
    summary:
      'Relato desgarrador del fallecimiento de la esposa de José Adell a los 33 años. Describe cómo su hogar era el corazón acogedor de la colonia española en Río, reproduce las cintas florales («A su querida Emilia, Pepe») y narra la escena de las cinco de la tarde cuando los tres niños pequeños imploraron llorando subir al coche fúnebre junto a su madre.',
    note: 'Crónica necrológica original en castellano con fechas manuscritas (* 01.01.1870 / † 05.09.1903).',
  },
  '03': {
    humanTitle: 'El abrazo solidario de decenas de familias inmigrantes al viudo José Adell',
    date: 'Septiembre de 1903',
    summary:
      'Nota publicada por el Jornal do Brasil enumerando las decenas de personalidades y familias que llenaron el altar mayor de la Iglesia de São Francisco de Paula en la misa de séptimo día por Doña Emilia, encabezadas por el Cónsul de España, Adolfo Morales de los Ríos, Plácido Isasi, Elías Novoa y Vicente do Pazo.',
    note: 'Traducción al castellano: «En el altar mayor de la iglesia de S. Francisco de Paula se celebró hoy, a las 9 horas, la misa de séptimo día por el alma de la Excma. Sra. Dª Emilia Vallespí de Adell».',
  },
  '04': {
    humanTitle: 'El día en que José Adell recibió una pedrada/golpe en la cabeza durante un tumulto callejero en Río',
    date: 'Septiembre de 1895',
    summary:
      'Despacho telegráfico internacional dando cuenta de la manifestación pro-Cuba encabezada por José do Patrocínio en la plaza de São Francisco de Paula. Frente a las redacciones de los diarios estallaron serios choques, resultando herido en la cabeza el escritor español José Adell.',
    note: 'Telegrama internacional original en castellano transmitido por la Agencia Fabra (pág. 70).',
  },
  '05': {
    humanTitle: 'El niño ciego de Vinaròs nombrado profesor a los 18 años — y el elogio a su hermano autodidacta',
    date: '1889',
    summary:
      'Emotiva nota que celebra el nombramiento de Alberto Adell Fons, joven ciego de 18 años nacido en Vinaròs, como profesor auxiliar de violín en la Escuela de Ciegos y Sordo-Mudos de Barcelona, destacando también el extraordinario talento literario autodidacta de su hermano José Adell Fons.',
    note: 'Publicado originalmente en castellano en El Sufragio Universal (pág. 55).',
  },
  '06': {
    humanTitle: 'La síntesis escrita a mano por la familia: arte, equilibrio social y la medalla presidencial de 1900',
    date: 'Memoria Familiar (1900)',
    summary:
      'Documento manuscrito conservado por la familia que resume el espíritu de José Adell: nacido en Vinaròs en una familia orientada al arte, autodidacta guiado por el equilibrio social, premiado maestro grabador y elegido por el Gobierno Brasileño para esculpir la medalla oficial de la visita del Presidente Campos Sales a la Argentina en 1900.',
    note: 'Traducción al castellano: «Era un autodidacta. Ejercía el oficio de grabador y, aun sin ser portador de diplomas, ¡era reconocido como un Maestro!»',
  },
  '07': {
    humanTitle: 'La noticia de la partida del maestro grabador en Salvador de Bahía a los 59 años',
    date: '27 de Mayo de 1927',
    summary:
      'Comunicado remitido desde la Librería Española de Salvador de Bahía informando del fallecimiento de José Adell el 12 de mayo de 1927, donde gozaba de general estimación como grabador en metal, mencionando a sus dos hijos residentes en Río y su histórica labor en La Unión Española.',
    note: 'Publicado en castellano en Correo de España con fechas manuscritas (* 10.02.1868 / † 12.5.1927).',
  },
  '08': {
    humanTitle: 'Versos de un amigo retratando al hombre que escuchaba al pobre y se enfrentaba al soberbio',
    date: 'c. 1898',
    summary:
      'Poema semblanza firmado por Pablo Isasi exaltando la honradez, discreción, coherencia moral y compasión humana de José Adell.',
    note: 'Poema original en castellano conservado en la página 67.',
  },
  '09': {
    humanTitle: 'Cuando intentaron llamarle «periodista novel», Pepe narró toda su trayectoria desde los 17 años',
    date: '27 de Diciembre de 1897',
    summary:
      'Texto autobiográfico clave: respondiendo con altura al periódico La Iberia, José Adell recuerda que en 1885 fue nombrado secretario de redacción de La Luz en Barcelona junto a Rosendo Arús, Cristóbal Litrán y Fernando Tarrida del Mármol, corresponsal en 1887 y director sin ambición personal en Brasil.',
    note: 'Editorial autobiográfico original en castellano (pág. 20).',
  },
  '10': {
    humanTitle: 'El llanto silencioso al regresar a España tras 5 años y el drama de las familias sepultadas en cuevas',
    date: '20 de Septiembre de 1893',
    summary:
      'Recién desembarcado en España procedente de Río de Janeiro, aún mareado por la travesía, Adell abre su corazón sobre las canas prematuras del emigrante y los seres queridos perdidos. Acto seguido denuncia la tragedia de Villacañas (Toledo), donde más de la mitad del pueblo vivía bajo tierra en «silos» inundados por una tormenta.',
    note: 'Crónica de corresponsal firmada por A. Fons en Madrid (págs. 78 y 58).',
  },
  '11': {
    humanTitle: 'Recorte guardado por la familia celebrando la memoria del gran amigo de Pepe en el MNBA',
    date: '29 de Noviembre de 1991',
    summary:
      'Reportaje conservado por la familia sobre los 75 años del edificio del Museo Nacional de Bellas Artes proyectado por Adolfo Morales de los Ríos (1858–1928), el amigo fiel que escribió la despedida de Pepe Adell.',
    note: 'Reportaje del diario O Globo conservado en el álbum documental (pág. 86).',
  },
  '12': {
    humanTitle: 'La conversación franca entre dos viejos amigos de ideas opuestas: el republicano Adell y el anarquista Tarrida',
    date: '30 de Septiembre de 1893',
    summary:
      'Tras relatar el atentado con bombas de Paulino Pallás contra el General Martínez Campos en Barcelona, José Adell visita en Madrid a su antiguo compañero de redacción Fernando Tarrida del Mármol (director de Acracia). Condenando el terrorismo, recoge con honestidad intelectual su diagnóstico sobre el hambre obrera en Europa.',
    note: 'Crónica y entrevista original en castellano firmada por A. Fons (págs. 60 y 59).',
  },
  '13': {
    humanTitle: '«La miseria hace más estragos que el cólera»: el grito del joven Adell contra el egoísmo aristocrático',
    date: 'Primavera de 1886',
    summary:
      'Uno de los textos más conmovedores de su juventud en Barcelona (con su tramo final reconstruido a pluma y tinta por el propio autor). Denuncia que durante la epidemia de cólera los privilegiados dejaron sin trabajo a miles de obreros mientras veraneaban en las playas del Cantábrico.',
    note: 'Impreso y manuscrito original en castellano (págs. 6, 7 y 8).',
  },
  '14': {
    humanTitle: '¿Por qué fusilaron al soldado humilde y prepararon el indulto de un Borbón por igual delito?',
    date: '20 de Marzo de 1886',
    summary:
      'Vibrante protesta moral escrita a los 18 años: el Gobierno desoyó el llanto de la esposa y fusiló en Cartagena al ex-cabo Bartual, mientras se tramitaba clemencia para D. Enrique de Borbón. «¿Cuestión de apellidos?», clama Adell.',
    note: 'Artículo original en castellano firmado por J. Adell y Fons (pág. 18).',
  },
  '15': {
    humanTitle: 'El hambre que empuja tanto al minero francés de Decazeville como al sacerdote desesperado en Madrid',
    date: 'Abril de 1886',
    summary:
      'Ensayo social (iniciado en la pág. 51 y continuado en la pág. 5 con restauración manuscrita a tinta) que compara la revuelta de los mineros hambrientos en Francia con el atentado del cura Cayetano Galeote tras verse privado de su único sustento mientras su madre sufría en la miseria.',
    note: 'Texto original en castellano con pasaje central manuscrito (págs. 51 y 5).',
  },
  '16': {
    humanTitle: 'El terror del fin del mundo en el año 1000 y el despertar de la libertad de conciencia',
    date: '16 de Febrero de 1886',
    summary:
      'Publicado apenas seis días después de cumplir 18 años en Barcelona: analiza cómo las profecías apocalípticas del año mil enriquecieron a las abadías medievales y evoca a Savonarola y la Reforma del siglo XVI.',
    note: 'Ensayo histórico original en castellano en La Luz (págs. 3–4).',
  },
  '17': {
    humanTitle: '«Jesucristo fue el primer demócrata»: defensa de la fraternidad de los humildes frente al fanatismo',
    date: '15 de Marzo de 1886',
    summary:
      'Compara la esclavitud bajo el Imperio Romano de Augusto con el mensaje emancipador de Jesús hacia los oprimidos, lamentando que siglos más tarde el poder temporal traicionase aquella doctrina de perdón y caridad.',
    note: 'Publicado en castellano en El Fantasma de Barcelona (págs. 53–54).',
  },
  '18': {
    humanTitle: 'La cabecera histórica que une al adolescente José Adell con Rosendo Arús y Tarrida del Mármol',
    date: '1885–1886',
    summary:
      'Recorte probatorio de la renovación del Consejo de Redacción del semanario librepensador La Luz en Barcelona, donde J. Adell Fons figura oficialmente como Secretario junto a Cristóbal Litrán.',
    note: 'Recorte original en castellano (pág. 54).',
  },
  '19': {
    humanTitle: 'La fractura interna del carlismo analizada por un joven librepensador barcelonés',
    date: '1 de Abril de 1886',
    summary:
      'Examina la pugna entre carlistas «íntegros» (Nocedal) y «benévolos» (Navarro Villoslada), celebrando cómo incluso las filas tradicionalistas empezaban a sacudirse la tutela política del Vaticano.',
    note: 'Artículo original en castellano (págs. 17 y 52).',
  },
  '20': {
    humanTitle: 'Semblanza monumental del gran tribuno de la República Española y las lecciones de 1873',
    date: 'Junio de 1892',
    summary:
      'Ensayo inaugural en Río de Janeiro que le valió el nombramiento inmediato como redactor de La Unión Española: retrata la elocuencia de Emilio Castelar, la Revolución de 1868, los excesos cantonales de 1873 y su apuesta por conquistar la República mediante la ley y los comicios.',
    note: 'Serie Hombres y Cosas de España en castellano (págs. 11, 12, 10 y 9).',
  },
  '21': {
    humanTitle: 'Bienvenida oficial a José Adell en la redacción de La Unión Española de Río de Janeiro',
    date: 'Junio de 1892',
    summary:
      'Nota editorial anunciando el ingreso de D. José Adell como redactor del periódico de la colonia española en Río de Janeiro.',
    note: 'Nota original en castellano (pág. 2).',
  },
  '22': {
    humanTitle: 'La nobleza de reconocer el talento de un adversario político — con la firma caligráfica de José Adell',
    date: 'c. 1892 / 1897',
    summary:
      'Pese a su fe republicana, Adell traza un retrato justo y literariamente soberbio del líder conservador Antonio Cánovas del Castillo, reconociendo que puso fin al militarismo en España. En la página 28 luce su firma autógrafa a tinta.',
    note: 'Ensayo original en castellano con firma manuscrita en pág. 28 (págs. 29, 30, 27 y 28).',
  },
  '23': {
    humanTitle: 'Menos utopías de barricada y más escuelas gratuitas, jurado popular y libertad de cultos',
    date: '20 de Diciembre de 1892',
    summary:
      'Propugna un gran partido republicano práctico cimentado en el sufragio popular, el matrimonio civil y la instrucción primaria gratuita, obligatoria y laica.',
    note: 'Artículo programático original en castellano (págs. 2 y 13).',
  },
  '24': {
    humanTitle: 'Carta fraternal al fundador de La Unión Española sobre la fuerza invencible de los principios',
    date: '12 de Octubre de 1893',
    summary:
      'Carta abierta a D. Gaspar de los Reyes Thous examinando el retiro de Castelar y las divisiones entre unitarios y federales, concluyendo que la victoria pertenece a la fuerza de los principios y no a la fuerza de las armas.',
    note: 'Carta abierta original en castellano fechada en Río de Janeiro (págs. 71 y 32).',
  },
  '25': {
    humanTitle: 'Un debate caballeroso en Río: ¿son las revoluciones necesarias como las tormentas?',
    date: 'Octubre de 1893',
    summary:
      'Carta dirigida a José Adell por D. José Galán Ragel elogiando su prosa y defendiendo el papel histórico de las revoluciones en Inglaterra, Francia, Italia y América.',
    note: 'Epístola original en castellano (pág. 81).',
  },
  '26': {
    humanTitle: 'La luminosa respuesta de Adell: ahorrar la sangre de los pueblos y vencer con la educación y el voto',
    date: '1 de Noviembre de 1893',
    summary:
      'Réplica a Galán Ragel citando el modelo pacífico de Gladstone en Inglaterra y recordando que la Primera República española nació sin derramar una sola gota de sangre.',
    note: 'Epístola original en castellano fechada en Río (págs. 31, 61 y 62).',
  },
  '27': {
    humanTitle: 'Cierre sereno y elegante de la controversia histórica sobre evolución y revolución',
    date: 'Noviembre de 1893',
    summary:
      'Última carta de la polémica con Galán Ragel resumiendo en tres tesis claras su visión democrática.',
    note: 'Original en castellano (pág. 62).',
  },
  '28': {
    humanTitle: 'Coherencia de principios frente a los pactos efímeros de ocasión',
    date: 'Abril de 1889',
    summary:
      'Respuesta desde Barcelona al diario federal La República de Madrid rechazando coaliciones artificiales sin unidad de doctrina.',
    note: 'Publicado en Barcelona en castellano (pág. 33).',
  },
  '29': {
    humanTitle: 'Memoria agradecida de la Revolución de Septiembre que abrió España a las libertades modernas',
    date: 'Septiembre de 1894',
    summary:
      'Conmemoración de «La Gloriosa» de 1868, destacando cómo las conquistas democráticas del Código del 69 transformaron para siempre la sociedad española.',
    note: 'Editorial original en castellano (págs. 65 y 79).',
  },
  '30': {
    humanTitle: 'Ante la tumba del general que disolvió el Congreso en la madrugada del 3 de enero de 1874',
    date: 'Enero de 1895',
    summary:
      'Reflexión ante la muerte del General Pavía, señalando la responsabilidad de los políticos que acudieron presurosos a repartirse los despojos de la República.',
    note: 'Crónica histórica en castellano (págs. 13 y 14).',
  },
  '31': {
    humanTitle: 'Respeto humano al anciano exiliado enfermo — y el clamor obrero por reformas sociales urgentes',
    date: 'Primavera de 1895',
    summary:
      'Ante el regreso a España de un moribundo Manuel Ruiz Zorrilla, Adell guarda noble respeto ante su dolor personal pero subraya que el proletariado exige ya reformas económicas reales y no asonadas militares.',
    note: 'Ensayo político-social en castellano (págs. 25, 24 y 23).',
  },
  '32': {
    humanTitle: 'Contra los salvadores de espada: defensa firme de la supremacía civil',
    date: '22 de Mayo de 1897',
    summary:
      'Advierte contra quienes pretendían usar la figura del General Polavieja para resucitar el pretorianismo militar en la política española.',
    note: 'Artículo original en castellano (págs. 23 y 76).',
  },
  '33': {
    humanTitle: 'El sacrificio heroico del pueblo en 1808 frente a la traición absolutista de Fernando VII',
    date: '4 de Mayo de 1895',
    summary:
      'Homenaje a los mártires del Dos de Mayo y dura condena histórica contra el rey Fernando VII, quien pagó la lealtad popular restaurando la Inquisición y los presidios para los liberales de Cádiz.',
    note: 'Artículo histórico en castellano (pág. 73).',
  },
  '34': {
    humanTitle: 'El caso hilarante del diario carioca que hundió un buque inexistente ¡y mudó Filipinas al África!',
    date: '8 de Junio de 1898',
    summary:
      'Obra maestra de ironía periodística: desenmascara al vespertino A Tribuna de Río, cuyo redactor inventó la voladura de un inexistente crucero español llamado «Málaga» y situó las Islas Filipinas frente a las costas de África.',
    note: 'Sátira periodística original en castellano (pág. 68).',
  },
  '35': {
    humanTitle: 'Dos mil soldados famélicos desembarcando en La Coruña mientras los políticos preparan discursos',
    date: '27 de Agosto de 1898',
    summary:
      'Crónica estremecedora sobre la llegada a bordo del vapor Alicante de los primeros repatriados de la Guerra de Cuba: jóvenes humildes arrancados del taller y del campo.',
    note: 'Crónica original en castellano (págs. 67 y 69).',
  },
  '36': {
    humanTitle: 'Contra el fanatismo de uno y otro signo: apelación a la paz y a las reformas en Filipinas',
    date: '12 de Diciembre de 1897',
    summary:
      'Analizando la insurrección en el archipiélago filipino (citando a Rojas, José Rizal y Aguinaldo), rechaza tanto la intolerancia clerical como el sectarismo violento y celebra la esperanza de paz y representación parlamentaria.',
    note: 'Editorial en castellano (págs. 19 y 20).',
  },
  '37': {
    humanTitle: 'Ni siquiera en guerra puede tolerarse que militares asalten imprentas de periódicos',
    date: '5 de Febrero de 1898',
    summary:
      'Prueba de integridad moral: condena con toda energía a los oficiales del ejército español que asaltaron redacciones en La Habana y Madrid, defendiendo la libertad de imprenta.',
    note: 'Editorial original en castellano (pág. 56).',
  },
  '38': {
    humanTitle: 'La explosión del acorazado «Maine» en La Habana y la fiebre de calumnias de la prensa amarilla',
    date: 'Febrero de 1898',
    summary:
      'Escrito días después de la voladura del Maine, denuncia las invenciones sensacionalistas de ciertos diarios norteamericanos para precipitar la guerra.',
    note: 'Columna original en castellano (pág. 20).',
  },
  '39': {
    humanTitle: '«Se van cansando las madres españolas de parir carne de cañón»: clamor de paz antes de la guerra',
    date: '12 de Marzo de 1898',
    summary:
      'Semanas antes del estallido bélico con Estados Unidos, Adell escribe una de sus frases más humanas sobre el dolor de las madres ante los hijos mutilados que regresaban de ultramar.',
    note: 'Artículo original en castellano (pág. 55).',
  },
  '40': {
    humanTitle: 'El respeto sagrado al lector frente al negocio sucio de las noticias falsas de sensación',
    date: 'Febrero de 1898',
    summary:
      'Reflexión deontológica contra los diarios que fabrican telegramas falsos con fines puramente mercantiles.',
    note: 'Columna original en castellano (pág. 56).',
  },
  '41': {
    humanTitle: 'Debate abierto en Río con el magistrado del Tribunal Supremo brasileño Lúcio de Mendonça',
    date: '14 de Septiembre de 1895',
    summary:
      'Respuesta razonada de José Adell a la carta publicada en O Paiz por el juez y escritor brasileño Lúcio de Mendonça en apoyo de los insurrectos cubanos.',
    note: 'Editorial en castellano con cita íntegra en portugués (págs. 26 y 25).',
  },
  '42': {
    humanTitle: 'Ironía fina al diario francés de Río: antes de juzgar a España, miren a Tonkín y Madagascar',
    date: '10 de Agosto de 1895',
    summary:
      'Primera parte de la réplica a L’Écho du Brésil recordando las campañas coloniales de Francia en Asia y África.',
    note: 'Artículo original en castellano (págs. 14 y 73).',
  },
  '43': {
    humanTitle: 'Reconocimiento a los 21 años en Barcelona por «la elegante forma con que engalana sus escritos»',
    date: 'Marzo de 1889',
    summary:
      'Nota de la redacción de El Sufragio Universal presentando a su joven colaborador y paisano D. J. Adell Fons como autor de las revistas mensuales de política europea.',
    note: 'Recorte original en castellano (pág. 8).',
  },
  '44': {
    humanTitle: 'Primera carta en defensa de la República Francesa y de la hermandad democrática latina',
    date: 'Febrero de 1889',
    summary:
      'Primera intervención de José Adell debatiendo con D. M. M. G. sobre la crisis boulangista en París y el legado emancipador de 1789 para España y América.',
    note: 'Ensayo original en castellano (págs. 45 y 46).',
  },
  '45': {
    humanTitle: 'Ejércitos de obreros hambrientos cruzando el océano hacia América en busca de pan',
    date: 'Febrero de 1889',
    summary:
      'Crónica premonitoria escrita poco antes de su propia emigración a Brasil: lamenta que los fabulosos presupuestos de guerra europeos empujen a miles de familias obreras a emigrar a tierras americanas.',
    note: 'Revista europea en castellano (pág. 41).',
  },
  '46': {
    humanTitle: 'El proceso contra el general Boulanger en Francia y la defensa parlamentaria de la República',
    date: 'Marzo de 1889',
    summary:
      'Analiza en El Sufragio Universal la caída del gabinete Floquet y el procesamiento del general cesarista Boulanger en París.',
    note: 'Crónica europea en castellano (págs. 35 y 34).',
  },
  '47': {
    humanTitle: 'Un inmigrante español celebrando la paz y el triunfo de la ley civil en la Bahía de Guanabara',
    date: 'Marzo de 1894',
    summary:
      'Testigo presencial del fin de la Revuelta de la Armada en Río de Janeiro, Adell saluda el triunfo de la ley constitucional frente al caudillaje militar.',
    note: 'Editorial original en castellano (pág. 50).',
  },
  '48': {
    humanTitle: 'El asesinato de Sadi Carnot en Lyon y el peligro de una reacción autoritaria en Europa',
    date: '30 de Junio de 1894',
    summary:
      'Condena el atentado mortal contra el íntegro presidente francés Sadi Carnot, advirtiendo que el terrorismo anarquista ponía en riesgo las libertades conquistadas en todo el continente.',
    note: 'Artículo original en castellano (págs. 49 y 48).',
  },
  '49': {
    humanTitle: 'La angustia espiritual del fin de siglo leída a través de Émile Zola y León Tolstói',
    date: '28 de Julio de 1894',
    summary:
      'Profunda meditación filosófica y literaria inspirada en la novela El Doctor Pascal de Émile Zola sobre la crisis moral de fines del siglo XIX.',
    note: 'Ensayo original en castellano (págs. 47 y 64).',
  },
  '50': {
    humanTitle: 'Denuncia abierta contra la rapiña imperialista europea en África y el ataque al Transvaal',
    date: 'Enero de 1896',
    summary:
      'Condena los «procedimientos piráticos» de las grandes potencias en el reparto de África (Etiopía, Madagascar, Egipto y el Transvaal), augurando un choque sangriento en Europa.',
    note: 'Crónica internacional en castellano (pág. 77).',
  },
  '51': {
    humanTitle: 'El sacrificio estéril de jóvenes soldados italianos en Abisinia (con conclusión manuscrita)',
    date: 'Febrero de 1896',
    summary:
      'Lamenta las vidas segadas en la guerra colonial italiana en Etiopía y aboga por una alianza de las naciones democráticas occidentales. Concluye con dos párrafos manuscritos del propio Adell.',
    note: 'Impreso y manuscrito original en castellano (págs. 21 y 22).',
  },
  '52': {
    humanTitle: 'Cuando los príncipes mudan de fe por una corona — y la soberanía pasa a las naciones',
    date: '1896',
    summary:
      'Reflexiona sobre la conversión del pequeño príncipe Boris de Bulgaria a la Iglesia Ortodoxa frente al Vaticano, destacando el triunfo histórico de la soberanía nacional.',
    note: 'Artículo original en castellano (pág. 19).',
  },
  '53': {
    humanTitle: 'El verdadero patriotismo no es apego ciego al terruño, sino devoción a la libertad humana',
    date: '2 de Mayo de 1896',
    summary:
      'Ensayo filosófico que recuerda a los peregrinos de la Flor de Mayo (Mayflower) para demostrar que por encima del suelo natal está siempre la fidelidad al ideal de libertad y progreso.',
    note: 'Ensayo original en castellano (págs. 76 y 77).',
  },
  '54': {
    humanTitle: 'Homenaje apasionado a Rosalía de Castro, Emilia Pardo Bazán y la riqueza literaria peninsular',
    date: '5 de Julio de 1893',
    summary:
      'Refutando un artículo de Pinheiro Chagas en O Paiz, Adell exalta con emoción la gloria literaria de Rosalía de Castro en lengua gallega, de Guimerà en catalán y de Llorente en valenciano.',
    note: 'Ensayo literario e histórico en castellano (págs. 1 y 15).',
  },
  '55': {
    humanTitle: 'Amistad fraterna con Portugal sí, anexión jamás: el ideal de armonía entre pueblos latinos',
    date: '15 de Agosto de 1893',
    summary:
      'A propósito del banquete republicano de Badajoz, asegura a los portugueses residentes en Brasil que España solo desea amistad sincera y respeto mutuo con Portugal.',
    note: 'Editorial original en castellano (págs. 15 y 16).',
  },
  '56': {
    humanTitle: 'La verdad documental sobre Bailén, Zaragoza, Albuera y Vitoria en la Guerra Peninsular',
    date: '18 de Agosto de 1894',
    summary:
      'Documentado estudio histórico respondiendo a Pinheiro Chagas sobre el heroísmo español y angloportugués frente a los ejércitos de Napoleón.',
    note: 'Estudio histórico original en castellano (págs. 64, 63, 66 y 65).',
  },
  '57': {
    humanTitle: 'Segunda respuesta a L’Écho du Brésil: Querétaro, Amapá y respeto a los soldados caídos',
    date: '17 de Agosto de 1895',
    summary:
      'Segunda entrega del debate con el periódico francés de Río, evocando el desastre de Napoleón III en México y pidiendo veneración para los soldados muertos por el clima tropical.',
    note: 'Artículo original en castellano (pág. 74).',
  },
  '58': {
    humanTitle: 'Segunda carta en Barcelona: cómo las ideas de 1789 encendieron la luz de las Cortes de Cádiz',
    date: 'Marzo de 1889',
    summary:
      'Conclusión de su polémica histórica en El Sufragio Universal demostrando la hermandad democrática hispano-francesa desde 1812 hasta 1868.',
    note: 'Ensayo original en castellano (págs. 44, 43 y 42).',
  },
  '59': {
    humanTitle: 'El elogio de la redacción barcelonesa a la hidalguía y compañerismo del joven José Adell',
    date: 'Marzo de 1889',
    summary:
      'Nota editorial de cierre alabando la delicadeza y brillantez del joven vinarocense José Adell Fons en su debate con el veterano republicano M. M. G.',
    note: 'Nota editorial en castellano (pág. 41).',
  },
  '60': {
    humanTitle: 'Desmintiendo con buen humor el rumor de que España planeaba reconquistar Portugal',
    date: 'Septiembre de 1896',
    summary:
      'Respuesta risueña a Eugenio Silveira (União Portugueza), asegurando que la independencia de Portugal está consagrada por los siglos.',
    note: 'Columna original en castellano (pág. 69).',
  },
  '61': {
    humanTitle: 'La divertida historia de las zarzuelas adaptadas en Lisboa y un abrazo final a la nación lusa',
    date: '19 de Septiembre de 1896',
    summary:
      'Cuenta con gracia cómo obras como Cádiz o La Gran Vía se rebautizaban en los teatros portugueses, cerrando con un afectuoso saludo a las glorias de Portugal.',
    note: 'Artículo original en castellano (págs. 69 y 70).',
  },
  '62': {
    humanTitle: 'El derrumbe de las cartas falsas contra Parnell y la noble cruzada de Gladstone por Irlanda',
    date: 'Abril de 1889',
    summary:
      'Relata el célebre proceso contra el diario The Times en Londres y exalta al «Gran Anciano» Gladstone defendiendo en la plaza pública la autonomía irlandesa.',
    note: 'Crónica europea en castellano (págs. 34 y 33).',
  },
  '63': {
    humanTitle: 'Amor roto en Florencia y un niño arrancado de los brazos de su madre, la Reina Natalia de Serbia',
    date: 'Mayo de 1889',
    summary:
      'Narra con intensa emoción humana el drama conyugal y político del Rey Milano y la Reina Natalia de Serbia tras la abdicación en Belgrado.',
    note: 'Crónica europea en castellano (págs. 37, 38, 36 y 35).',
  },
  '64': {
    humanTitle: 'El declive del canciller de hierro Otto von Bismarck frente a la Emperatriz Victoria',
    date: 'Marzo de 1889',
    summary:
      'Comenta el impacto europeo del artículo «La Dinastía Bismarck» en Londres y el desgaste político del canciller alemán.',
    note: 'Crónica original en castellano (pág. 37).',
  },
  '65': {
    humanTitle: 'El precio humano de las alianzas militares: 800.000 obreros sin pan en las calles de Italia',
    date: 'Marzo de 1889',
    summary:
      'Denuncia cómo los gastos armamentistas de la Triple Alianza arruinaron la Hacienda italiana y empujaron al hambre a ochocientos mil trabajadores.',
    note: 'Crónica social y económica en castellano (págs. 39 y 40).',
  },
  '66': {
    humanTitle: 'Bastidores de Madrid: inundaciones, insomnios de Sagasta y el expediente Mora con EE. UU.',
    date: '20 de Septiembre de 1893',
    summary:
      'Crónica política desde Madrid sobre las reclamaciones diplomáticas norteamericanas y las maniobras parlamentarias del gabinete liberal.',
    note: 'Correspondencia original en castellano (págs. 58 y 57).',
  },
  '67': {
    humanTitle: 'Cinco mil ciudadanos escuchando a Azcárate y Salmerón en Gijón — y el estreno operístico en Madrid',
    date: '30 de Septiembre de 1893',
    summary:
      'Reseña del gran acto republicano de Gijón y nota cultural sobre la temporada lírica del Teatro Real con la ópera Los Pirineos.',
    note: 'Correspondencia original en castellano (págs. 57 y 60).',
  },
  '68': {
    humanTitle: 'Banquetes para escritores en Barcelona mientras el pueblo de Almería cierra sus comercios en protesta',
    date: '30 de Septiembre de 1893',
    summary:
      'Agradece a Fernando Tarrida el regalo de su libro El Materialismo, comenta con humor los agasajos del Congreso Literario en Barcelona y narra la protesta cívica de Almería.',
    note: 'Correspondencia original en castellano (pág. 72).',
  },
  '69': {
    humanTitle: 'Las palabras finales ante la tumba nº 2666 para quien fue «toda amor, bondad, ingenio y alegría»',
    date: '6 de Septiembre de 1903',
    summary:
      'Recoge la lista completa de asistentes al entierro de Doña Emilia Vallespí de Adell y la emotiva despedida pronunciada por Don Francisco Fernández en el Cementerio de San Juan Bautista.',
    note: 'Crónica necrológica original en castellano (pág. 82).',
  },
  '70': {
    humanTitle: 'La huella eterna del amigo de Pepe Adell retratado por Cândido Portinari en el MNBA',
    date: 'Noviembre de 1991',
    summary:
      'Recorte ilustrado de la última página del álbum destacando las 300 obras expuestas de Adolfo Morales de los Ríos y su retrato pintado por Portinari.',
    note: 'Recorte cultural en portugués conservado por la familia (pág. 89).',
  },
  '71': {
    humanTitle: 'El documento original del magistrado brasileño Lúcio de Mendonça que encendió el debate de 1895',
    date: '4 de Septiembre de 1895',
    summary:
      'Carta en portugués del ministro del Supremo Tribunal Federal brasileño pidiendo auxilio económico para Cuba, reproducida íntegramente por José Adell antes de contestarla.',
    note: 'Reproducido en su idioma portugués original en La Unión Española (pág. 26).',
  },
  '72': {
    humanTitle: 'Cuando un artículo periodístico («El Rasgo») llevó a Castelar a la condena de muerte y al triunfo de 1868',
    date: 'Junio de 1892',
    summary:
      'Relata la expulsión universitaria de Castelar tras publicar El Rasgo, la trágica Noche de San Daniel, su condena a muerte bajo Narváez y su regreso glorioso a las Cortes Constituyentes.',
    note: 'Crónica histórica en castellano (págs. 11 y 12).',
  },
};

const WORKS_VA: Record<string, WorkTranslation> = {
  '01': {
    humanTitle: 'L’adeu colpidor de l’arquitecte del Museu de Belles Arts a l’amic del somriure inoblidable',
    date: 'Maig de 1927',
    summary:
      'Joia màxima de la memòria afectiva de l’arxiu. Inconformista amb la mort silenciosa de Pepe Adell a Bahia, l’arquitecte Adolfo Morales de los Ríos evoca el Hamlet de Shakespeare, revela el socialisme pur i altruista de Pepe, la seua mestria sense diplomes com a gravador en metall i les tertúlies alegres a la caseta colonial baixa de la Rua da Ajuda.',
    note: 'Traducció al valencià: «Pepe Adell emprava com a escut el seu somriure: “Més val parlar de coses rialleres que escriure sobre llàgrimes.”»',
  },
  '02': {
    humanTitle: 'El dissabte en què quaranta carruatges ploraren els crits de Josefina, Alberto i Pepín',
    date: '6 de Setembre de 1903',
    summary:
      'Relat esquinçador de la defunció de l’esposa de José Adell als 33 anys. Descriu com la seua llar era el cor acollidor de la colònia a Rio i narra l’escena de les cinc de la vesprada quan els tres xiquets menuts suplicaven plorant pujar al cotxe fúnebre amb sa mare.',
    note: 'Traducció al valencià: «No hi havia una sola persona que no plorara en escoltar els crits dels tres orfes: Josefina, Alberto i Pepe!»',
  },
  '03': {
    humanTitle: 'L’abraçada solidària de desenes de famílies immigrants al vidu José Adell',
    date: 'Setembre de 1903',
    summary:
      'Nota del Jornal do Brasil enumerant les famílies que ompliren l’església de São Francisco de Paula en la missa de seté dia per Doña Emilia, amb el Cònsol d’Espanya i Adolfo Morales de los Ríos.',
    note: 'Nota històrica publicada a Rio de Janeiro el setembre de 1903 (pàg. 80).',
  },
  '04': {
    humanTitle: 'El dia en què José Adell rebé una pedrada/colp al cap durant un aldarull als carrers de Rio',
    date: 'Setembre de 1895',
    summary:
      'Despatx telegràfic internacional informant de la manifestació pro-Cuba encapçalada per José do Patrocínio. Davant les redaccions dels diaris esclataren greus aldarulls en què resultà ferit al cap l’escriptor vinarossenc José Adell.',
    note: 'Traducció al valencià: «A conseqüència dels aldarulls fou ferit al cap el distingit escriptor D. José Adell, redactor de La Unión Española.»',
  },
  '05': {
    humanTitle: 'El xiquet cec de Vinaròs nomenat professor als 18 anys — i l’elogi al seu germà autodidacte',
    date: '1889',
    summary:
      'Emotiva nota que celebra el nomenament d’Alberto Adell Fons, jove cec de 18 anys nascut a Vinaròs, com a professor auxiliar de violí a l’Escola de Cecs i Sordmuts de Barcelona, destacant també l’extraordinari talent literari autodidacte del seu germà José.',
    note: 'Traducció al valencià: «Gran honra per a Vinaròs, que els seus fills s’òbriguen pas per l’escabrós i difícil camí de l’art.»',
  },
  '06': {
    humanTitle: 'La síntesi escrita a mà per la família: art, equilibri social i la medalla presidencial de 1900',
    date: 'Memòria Familiar (1900)',
    summary:
      'Document manuscrit conservat per la família que resumeix l’esperit de José Adell: nascut a Vinaròs en una família artística, autodidacte guiat per l’equilibri social, mestre gravador i elegit pel Govern Brasiler per esculpir la medalla oficial de la visita del President Campos Sales a l’Argentina el 1900.',
    note: 'Manuscrit biogràfic familiar conservat a la pàgina 88.',
  },
  '07': {
    humanTitle: 'La notícia de la partida del mestre gravador a Salvador de Bahia als 59 anys',
    date: '27 de Maig de 1927',
    summary:
      'Comunicat enviat des de la Llibreria Espanyola de Salvador de Bahia informant de la defunció de José Adell el 12 de maig de 1927, on gaudia d’estima general com a gravador en metall.',
    note: 'Publicat a Correo de España amb dates manuscrites (* 10.02.1868 / † 12.5.1927).',
  },
  '08': {
    humanTitle: 'Versos d’un amic retratant l’home que escoltava el pobre i s’enfrontava al superb',
    date: 'c. 1898',
    summary: 'Poema semblança signat per Pablo Isasi exaltant l’honradesa, discreció, coherència moral i compassió humana de José Adell.',
    note: 'Poema original conservat a la pàgina 67.',
  },
  '09': {
    humanTitle: 'Quan intentaren anomenar-lo «periodista novell», Pepe narrà tota la seua trajectòria des dels 17 anys',
    date: '27 de Desembre de 1897',
    summary: 'Text autobiogràfic clau: responent amb altura al periòdic La Iberia, José Adell recorda que el 1885 fou nomenat secretari de redacció de La Luz a Barcelona al costat de Rosendo Arús, Cristóbal Litrán i Fernando Tarrida del Mármol.',
    note: 'Editorial autobiogràfic original (pàg. 20).',
  },
  '10': {
    humanTitle: 'El plor silenciós en tornar a Espanya després de 5 anys i el drama de les famílies soterrades en coves',
    date: '20 de Setembre de 1893',
    summary: 'Acabat de desembarcar procedent de Rio de Janeiro, encara marejat per la travessia, Adell obri el cor sobre els cabells blancs prematurs de l’emigrant i denuncia la tragèdia de Villacañas (Toledo), on mig poble vivia sota terra en «sitges» inundades.',
    note: 'Crònica de corresponsal signada per A. Fons a Madrid (pàgs. 78 i 58).',
  },
  '11': {
    humanTitle: 'Retall guardat per la família celebrant la memòria del gran amic de Pepe al MNBA',
    date: '29 de Novembre de 1991',
    summary: 'Reportatge conservat per la família sobre els 75 anys de l’edifici del Museu Nacional de Belles Arts projectat per Adolfo Morales de los Ríos (1858–1928), l’amic fidel que escrigué el comiat de Pepe Adell.',
    note: 'Reportatge del diari O Globo conservat a l’àlbum familiar (pàg. 86).',
  },
  '12': {
    humanTitle: 'La conversa franca entre dos vells amics d’idees oposades: el republicà Adell i l’anarquista Tarrida',
    date: '30 de Setembre de 1893',
    summary: 'Després de relatar l’atemptat de Paulino Pallás a Barcelona, José Adell visita a Madrid el seu antic company de redacció Fernando Tarrida del Mármol (director d’Acracia) i recull amb honestedat el seu diagnòstic sobre la fam obrera a Europa.',
    note: 'Crònica i entrevista original signada per A. Fons (pàgs. 60 i 59).',
  },
  '13': {
    humanTitle: '«La misèria fa més estralls que el còlera»: el crit del jove Adell contra l’egoisme aristocràtic',
    date: 'Primavera de 1886',
    summary: 'Un dels textos més colpidors de la seua joventut a Barcelona (amb el tram final reconstruït a ploma i tinta pel mateix autor), denunciant que durant el còlera els privilegiats deixaren sense faena milers d’obrers mentre estiuejaven al Cantàbric.',
    note: 'Imprés i manuscrit original (pàgs. 6, 7 i 8).',
  },
  '14': {
    humanTitle: 'Per què afusellaren el soldat humil i prepararen l’indult d’un Borbó pel mateix delicte?',
    date: '20 de Març de 1886',
    summary: 'Vibrant protesta moral escrita als 18 anys: el Govern desoí el plor de l’esposa i afusellà a Cartagena l’excaporal Bartual, mentre tramitava clemència per a D. Enrique de Borbón. «Qüestió de cognoms?», clama Adell.',
    note: 'Article original signat per J. Adell y Fons (pàg. 18).',
  },
  '15': {
    humanTitle: 'La fam que espenta tant el miner francés de Decazeville com el sacerdot desesperat a Madrid',
    date: 'Abril de 1886',
    summary: 'Assaig social (amb passatge central manuscrit a tinta) comparant la revolta dels miners famolencs a França amb l’atemptat del capellà Cayetano Galeote després de vore’s privat del seu únic manteniment mentre sa mare patia misèria.',
    note: 'Text original amb restauració manuscrita (pàgs. 51 i 5).',
  },
  '16': {
    humanTitle: 'El terror de la fi del món l’any 1000 i el despertar de la llibertat de consciència',
    date: '16 de Febrer de 1886',
    summary: 'Publicat sis dies després de complir 18 anys a Barcelona: analitza com les profecies apocalíptiques de l’any mil enriquiren les abadies medievals i evoca Savonarola i la Reforma del segle XVI.',
    note: 'Assaig històric a La Luz (pàgs. 3–4).',
  },
  '17': {
    humanTitle: '«Jesucrist fou el primer demòcrata»: defensa de la fraternitat dels humils enfront del fanatisme',
    date: '15 de Març de 1886',
    summary: 'Compara l’esclavitud sota l’Imperi Romà d’August amb el missatge alliberador de Jesús cap als oprimits, lamentant que segles més tard el poder temporal traïra aquella doctrina de perdó i caritat.',
    note: 'Publicat a El Fantasma de Barcelona (pàgs. 53–54).',
  },
  '18': {
    humanTitle: 'La capçalera històrica que uneix el jove José Adell amb Rosendo Arús i Tarrida del Mármol',
    date: '1885–1886',
    summary: 'Retall de la renovació del Consell de Redacció del setmanari lliurepensador La Luz a Barcelona, on J. Adell Fons figura oficialment com a Secretari al costat de Cristóbal Litrán.',
    note: 'Retall documental original (pàg. 54).',
  },
  '19': {
    humanTitle: 'La fractura interna del carlisme analitzada per un jove lliurepensador a Barcelona',
    date: '1 d’Abril de 1886',
    summary: 'Examina la pugna entre carlistes «íntegres» (Nocedal) i «benèvols» (Navarro Villoslada), celebrant com fins i tot les files tradicionalistes començaven a sacsar-se la tutela política del Vaticà.',
    note: 'Article original a La Luz (pàgs. 17 i 52).',
  },
  '20': {
    humanTitle: 'Semblança monumental del gran tribú de la República Espanyola i les lliçons de 1873',
    date: 'Juny de 1892',
    summary: 'Assaig inaugural a Rio de Janeiro que li valgué el nomenament immediat com a redactor de La Unión Española, retratant l’eloqüència d’Emilio Castelar i l’aposta per conquistar la democràcia per la llei i les urnes.',
    note: 'Sèrie Hombres y Cosas de España (pàgs. 11, 12, 10 i 9).',
  },
  '21': {
    humanTitle: 'Benvinguda oficial a José Adell a la redacció de La Unión Española de Rio de Janeiro',
    date: 'Juny de 1892',
    summary: 'Nota editorial anunciant l’ingrés de D. José Adell com a redactor del periòdic de la colònia espanyola a Rio de Janeiro.',
    note: 'Nota històrica original (pàg. 2).',
  },
  '22': {
    humanTitle: 'La noblesa de reconéixer el talent d’un adversari polític — amb la signatura cal·ligràfica de José Adell',
    date: 'c. 1892 / 1897',
    summary: 'Tot i la seua fe republicana, Adell traça un retrat just i literàriament magnífic d’Antonio Cánovas del Castillo. A la pàgina 28 llueix la seua signatura autògrafa a tinta.',
    note: 'Assaig amb signatura manuscrita a la pàg. 28 (pàgs. 29, 30, 27 i 28).',
  },
  '23': {
    humanTitle: 'Menys utopies de barricada i més escoles gratuïtes, jurat popular i llibertat de cultes',
    date: '20 de Desembre de 1892',
    summary: 'Defensa un gran partit republicà pràctic fonamentat en el sufragi popular, el matrimoni civil i la instrucció primària gratuïta, obligatòria i laica.',
    note: 'Article programàtic original (pàgs. 2 i 13).',
  },
  '24': {
    humanTitle: 'Carta fraternal al fundador de La Unión Española sobre la força invencible dels principis',
    date: '12 d’Octubre de 1893',
    summary: 'Carta oberta a D. Gaspar de los Reyes Thous concloent que la victòria pertany a la força dels principis i no a la força bruta de les armes.',
    note: 'Carta oberta datada a Rio de Janeiro (pàgs. 71 i 32).',
  },
  '25': {
    humanTitle: 'Un debat cavallerós a Rio: són les revolucions necessàries com les tempestes?',
    date: 'Octubre de 1893',
    summary: 'Carta adreçada a José Adell per D. José Galán Ragel elogiant la seua prosa i defensant el paper històric de les revolucions.',
    note: 'Epístola original (pàg. 81).',
  },
  '26': {
    humanTitle: 'La lluminosa resposta d’Adell: estalviar la sang dels pobles i véncer amb l’educació i el vot',
    date: '1 de Novembre de 1893',
    summary: 'Rèplica a Galán Ragel citant el model pacífic de Gladstone a Anglaterra i recordant que la Primera República espanyola nasqué sense vessar una gota de sang.',
    note: 'Epístola datada a Rio de Janeiro (pàgs. 31, 61 i 62).',
  },
  '27': {
    humanTitle: 'Tancament seré i elegant de la controvèrsia històrica sobre evolució i revolució',
    date: 'Novembre de 1893',
    summary: 'Última carta de la polèmica amb Galán Ragel resumint en tres tesis clares la seua visió democràtica.',
    note: 'Original conservat a la pàgina 62.',
  },
  '28': {
    humanTitle: 'Coherència de principis enfront dels pactes efímers d’ocasió',
    date: 'Abril de 1889',
    summary: 'Resposta des de Barcelona al diari federal La República de Madrid rebutjant coalicions artificials sense unitat de doctrina.',
    note: 'Publicat a Barcelona (pàg. 33).',
  },
  '29': {
    humanTitle: 'Memòria agraïda de la Revolució de Setembre que obrí Espanya a les llibertats modernes',
    date: 'Setembre de 1894',
    summary: 'Commemoració de «La Gloriosa» de 1868, destacant com les conquestes democràtiques del Codi del 69 transformaren la societat espanyola.',
    note: 'Editorial original (pàgs. 65 i 79).',
  },
  '30': {
    humanTitle: 'Davant la tomba del general que dissolgué el Congrés la matinada del 3 de gener de 1874',
    date: 'Gener de 1895',
    summary: 'Reflexió davant la mort del General Pavía, assenyalant la responsabilitat dels polítics que es repartiren les despulles de la República.',
    note: 'Crònica històrica (pàgs. 13 i 14).',
  },
  '31': {
    humanTitle: 'Respecte humà a l’ancià exiliat malalt — i el clam obrer per reformes socials urgents',
    date: 'Primavera de 1895',
    summary: 'Davant el retorn d’un moribund Manuel Ruiz Zorrilla, Adell guarda noble respecte davant el seu dolor però subratlla que el proletariat exigeix reformes econòmiques reals.',
    note: 'Assaig político-social (pàgs. 25, 24 i 23).',
  },
  '32': {
    humanTitle: 'Contra els salvadors d’espasa: defensa ferma de la supremacia civil',
    date: '22 de Maig de 1897',
    summary: 'Adverteix contra els qui pretenien usar la figura del General Polavieja per ressuscitar el militarisme en la política espanyola.',
    note: 'Article original (pàgs. 23 i 76).',
  },
  '33': {
    humanTitle: 'El sacrifici heroic del poble el 1808 enfront de la traïció absolutista de Ferran VII',
    date: '4 de Maig de 1895',
    summary: 'Homenatge als màrtirs del Dos de Maig i dura condemna històrica contra el rei Ferran VII per restaurar la Inquisició.',
    note: 'Article històric (pàg. 73).',
  },
  '34': {
    humanTitle: 'El cas hilarant del diari carioca que enfonsà un vaixell inexistent i mudà les Filipines a l’Àfrica!',
    date: '8 de Juny de 1898',
    summary: 'Obra mestra d’ironia periodística: desemmascara el diari A Tribuna de Rio, que inventà l’enfonsament d’un inexistent creuer «Málaga» i situà les Illes Filipines davant les costes d’Àfrica.',
    note: 'Sàtira periodística original (pàg. 68).',
  },
  '35': {
    humanTitle: 'Dos mil soldats famèlics desembarcant a La Corunya mentre els polítics preparen discursos',
    date: '27 d’Agost de 1898',
    summary: 'Crònica colpidora sobre l’arribada a bord del vapor Alicante dels primers repatriats de la Guerra de Cuba: joves humils arrancats del taller i del camp.',
    note: 'Crònica original (pàgs. 67 i 69).',
  },
  '36': {
    humanTitle: 'Contra el fanatisme d’un i altre signe: apel·lació a la pau i a les reformes a les Filipines',
    date: '12 de Desembre de 1897',
    summary: 'Analitzant la insurrecció filipina (citant Rojas, José Rizal i Aguinaldo), rebutja tant la intolerància clerical com el sectarisme violent i celebra l’esperança de pau.',
    note: 'Editorial original (pàgs. 19 i 20).',
  },
  '37': {
    humanTitle: 'Ni tan sols en guerra pot tolerar-se que militars assalten impremtes de periòdics',
    date: '5 de Febrer de 1898',
    summary: 'Prova d’integritat moral: condemna amb tota energia els oficials que assaltaren redaccions a l’Havana i Madrid, defensant la llibertat d’impremta.',
    note: 'Editorial original (pàg. 56).',
  },
  '38': {
    humanTitle: 'L’explosió del cuirassat «Maine» a l’Havana i la febre de calúmnies de la premsa groga',
    date: 'Febrer de 1898',
    summary: 'Escrit dies després de l’explosió del Maine, denuncia les invencions sensacionalistes de certs diaris nord-americans per precipitar la guerra.',
    note: 'Columna original (pàg. 20).',
  },
  '39': {
    humanTitle: '«Es van cansant les mares espanyoles de parir carn de canó»: clam de pau abans de la guerra',
    date: '12 de Març de 1898',
    summary: 'Setmanes abans de l’esclat bèl·lic amb els Estats Units, Adell escriu una de les seues frases més humanes sobre el dolor de les mares.',
    note: 'Article original (pàg. 55).',
  },
  '40': {
    humanTitle: 'El respecte sagrat al lector enfront del negoci brut de les notícies falses de sensació',
    date: 'Febrer de 1898',
    summary: 'Reflexió ètica contra els diaris que fabriquen telegrames falsos amb fins purament mercantils.',
    note: 'Columna original (pàg. 56).',
  },
  '41': {
    humanTitle: 'Debat obert a Rio amb el magistrat del Tribunal Suprem brasiler Lúcio de Mendonça',
    date: '14 de Setembre de 1895',
    summary: 'Resposta raonada de José Adell a la carta publicada a O Paiz pel jutge i escriptor brasiler Lúcio de Mendonça.',
    note: 'Editorial amb citació íntegra en portugués (pàgs. 26 i 25).',
  },
  '42': {
    humanTitle: 'Ironia fina al diari francés de Rio: abans de jutjar Espanya, mireu el Tonquín i Madagascar',
    date: '10 d’Agost de 1895',
    summary: 'Primera part de la rèplica a L’Écho du Brésil recordant les campanyes colonials de França a Àsia i Àfrica.',
    note: 'Article original (pàgs. 14 i 73).',
  },
  '43': {
    humanTitle: 'Reconeixement als 21 anys a Barcelona per «l’elegant forma amb què engalana els seus escrits»',
    date: 'Març de 1889',
    summary: 'Nota d’El Sufragio Universal presentant el seu jove col·laborador i paisà D. J. Adell Fons com a autor de les revistes mensuals de política europea.',
    note: 'Retall original (pàg. 8).',
  },
  '44': {
    humanTitle: 'Primera carta en defensa de la República Francesa i de la germanor democràtica llatina',
    date: 'Febrer de 1889',
    summary: 'Primera intervenció de José Adell debatent amb D. M. M. G. sobre el llegat emancipador de 1789 per a Espanya i Amèrica.',
    note: 'Assaig original (pàgs. 45 i 46).',
  },
  '45': {
    humanTitle: 'Exèrcits d’obrers famolencs creuant l’oceà cap a Amèrica a la recerca de pa',
    date: 'Febrer de 1889',
    summary: 'Crònica premonitòria escrita poc abans de la seua emigració al Brasil: lamenta que els pressupostos de guerra europeus espenten milers de famílies obreres a emigrar.',
    note: 'Revista europea (pàg. 41).',
  },
  '46': {
    humanTitle: 'El procés contra el general Boulanger a França i la defensa parlamentària de la República',
    date: 'Març de 1889',
    summary: 'Analitza a El Sufragio Universal la caiguda del gabinet Floquet i el processament del general cesarista Boulanger a París.',
    note: 'Crònica europea (pàgs. 35 i 34).',
  },
  '47': {
    humanTitle: 'Un immigrant espanyol celebrant la pau i el triomf de la llei civil a la Badia de Guanabara',
    date: 'Març de 1894',
    summary: 'Testimoni presencial de la fi de la Revolta de l’Armada a Rio de Janeiro, Adell saluda el triomf de la llei constitucional enfront del cabdillisme militar.',
    note: 'Editorial original (pàg. 50).',
  },
  '48': {
    humanTitle: 'L’assassinat de Sadi Carnot a Lió i el perill d’una reacció autoritària a Europa',
    date: '30 de Juny de 1894',
    summary: 'Condemna l’atemptat mortal contra l’íntegre president francés Sadi Carnot, advertint que el terrorisme posava en risc les llibertats democràtiques.',
    note: 'Article original (pàgs. 49 i 48).',
  },
  '49': {
    humanTitle: 'L’angoixa espiritual de la fi de segle llegida a través d’Émile Zola i Lev Tolstoi',
    date: '28 de Juliol de 1894',
    summary: 'Profunda meditació filosòfica i literària inspirada en la novel·la El Doctor Pascal d’Émile Zola sobre la crisi moral de finals del segle XIX.',
    note: 'Assaig original (pàgs. 47 i 64).',
  },
  '50': {
    humanTitle: 'Denúncia oberta contra la rapinya imperialista europea a l’Àfrica i l’atac al Transvaal',
    date: 'Gener de 1896',
    summary: 'Condemna els «procediments piràtics» de les grans potències en el repartiment d’Àfrica, augurant un xoc sagnant a Europa.',
    note: 'Crònica internacional (pàg. 77).',
  },
  '51': {
    humanTitle: 'El sacrifici estèril de joves soldats italians a Abissínia (amb conclusió manuscrita)',
    date: 'Febrer de 1896',
    summary: 'Lamenta les vides segades en la guerra colonial italiana a Etiòpia i advoca per una aliança de les nacions democràtiques occidentals.',
    note: 'Imprés i manuscrit original (pàgs. 21 i 22).',
  },
  '52': {
    humanTitle: 'Quan els prínceps muden de fe per una corona — i la sobirania passa a les nacions',
    date: '1896',
    summary: 'Reflexiona sobre la conversió del príncep Boris de Bulgària a l’Església Ortodoxa, destacant el triomf històric de la sobirania nacional.',
    note: 'Article original (pàg. 19).',
  },
  '53': {
    humanTitle: 'El vertader patriotisme no és inclinació cega al terròs, sinó devoció a la llibertat humana',
    date: '2 de Maig de 1896',
    summary: 'Assaig filosòfic que recorda els pelegrins del Mayflower per demostrar que per damunt del sòl natal està sempre la fidelitat a l’ideal de llibertat.',
    note: 'Assaig original (pàgs. 76 i 77).',
  },
  '54': {
    humanTitle: 'Homenatge apassionat a Rosalía de Castro, Emilia Pardo Bazán i la riquesa literària peninsular (amb Teodor Llorente!)',
    date: '5 de Juliol de 1893',
    summary: 'Refutant un article de Pinheiro Chagas a O Paiz, Adell exalta amb emoció la glòria literària de Rosalía de Castro en gallec, d’Àngel Guimerà en català i del poeta valencià Teodor Llorente!',
    note: 'Assaig literari i històric (pàgs. 1 i 15).',
  },
  '55': {
    humanTitle: 'Amistat fraterna amb Portugal sí, annexió mai: l’ideal d’harmonia entre pobles llatins',
    date: '15 d’Agost de 1893',
    summary: 'A propòsit del banquet republicà de Badajoz, assegura als portuguesos residents al Brasil que Espanya sols desitja amistat sincera i respecte mutu amb Portugal.',
    note: 'Editorial original (pàgs. 15 i 16).',
  },
  '56': {
    humanTitle: 'La veritat documental sobre Bailén, Saragossa, Albuera i Vitòria en la Guerra del Francés',
    date: '18 d’Agost de 1894',
    summary: 'Documentat estudi històric responent a Pinheiro Chagas sobre l’heroisme popular davant els exèrcits de Napoleó.',
    note: 'Estudi històric (pàgs. 64, 63, 66 i 65).',
  },
  '57': {
    humanTitle: 'Segona resposta a L’Écho du Brésil: Querétaro, Amapá i respecte als soldats caiguts',
    date: '17 d’Agost de 1895',
    summary: 'Segona entrega del debat amb el diari francés de Rio, evocant el desastre de Napoleó III a Mèxic i demanant veneració per als soldats morts pel clima tropical.',
    note: 'Article original (pàg. 74).',
  },
  '58': {
    humanTitle: 'Segona carta a Barcelona: com les idees de 1789 encengueren la llum de les Corts de Cadis',
    date: 'Març de 1889',
    summary: 'Conclusió de la seua polèmica històrica a El Sufragio Universal demostrant la germanor democràtica hispano-francesa des de 1812 fins a 1868.',
    note: 'Assaig original (pàgs. 44, 43 i 42).',
  },
  '59': {
    humanTitle: 'L’elogi de la redacció barcelonina a la fidalguia i companyonia del jove vinarossenc José Adell',
    date: 'Març de 1889',
    summary: 'Nota editorial de tancament lloant la delicadesa i brillantor del jove José Adell Fons en el seu debat amb el veterà republicà M. M. G.',
    note: 'Nota editorial (pàg. 41).',
  },
  '60': {
    humanTitle: 'Desmentint amb bon humor el rumor que Espanya planejava reconquistar Portugal',
    date: 'Setembre de 1896',
    summary: 'Resposta riallera a Eugenio Silveira (União Portugueza), assegurant que la independència de Portugal està consagrada pels segles.',
    note: 'Columna original (pàg. 69).',
  },
  '61': {
    humanTitle: 'La divertida història de les sarsueles adaptades a Lisboa i una abraçada final a la nació lusa',
    date: '19 de Setembre de 1896',
    summary: 'Conta amb gràcia com obres com Cádiz o La Gran Vía es rebatejaven als teatres portuguesos, tancant amb una afectuosa salutació a les glòries de Portugal.',
    note: 'Article original (pàgs. 69 i 70).',
  },
  '62': {
    humanTitle: 'L’ensorrament de les cartes falses contra Parnell i la noble croada de Gladstone per Irlanda',
    date: 'Abril de 1889',
    summary: 'Relata el cèlebre procés contra el diari The Times a Londres i exalta el «Gran Ancià» Gladstone defensant a la plaça pública l’autonomia irlandesa.',
    note: 'Crònica europea (pàgs. 34 i 33).',
  },
  '63': {
    humanTitle: 'Amor trencat a Florència i un xiquet arrancat dels braços de sa mare, la Reina Natàlia de Sèrbia',
    date: 'Maig de 1889',
    summary: 'Narra amb intensa emoció humana el drama conjugal i polític del Rei Milano i la Reina Natàlia de Sèrbia després de l’abdicació a Belgrad.',
    note: 'Crònica europea (pàgs. 37, 38, 36 i 35).',
  },
  '64': {
    humanTitle: 'El declivi del canceller de ferro Otto von Bismarck enfront de l’Emperadriu Victòria',
    date: 'Març de 1889',
    summary: 'Comenta l’impacte europeu de l’article «La Dinastia Bismarck» a Londres i el desgast polític del canceller alemany.',
    note: 'Crònica original (pàg. 37).',
  },
  '65': {
    humanTitle: 'El preu humà de les aliances militars: 800.000 obrers sense pa als carrers d’Itàlia',
    date: 'Març de 1889',
    summary: 'Denuncia com les despeses armamentistes de la Triple Aliança arruïnaren la Hisenda italiana i espentaren a la fam vuit-cents mil treballadors.',
    note: 'Crònica social i econòmica (pàgs. 39 i 40).',
  },
  '66': {
    humanTitle: 'Bastidors de Madrid: inundacions, insomnis de Sagasta i l’expedient Mora amb els EUA',
    date: '20 de Setembre de 1893',
    summary: 'Crònica política des de Madrid sobre les reclamacions diplomàtiques nord-americanes i les maniobres parlamentàries del gabinet liberal.',
    note: 'Correspondència original (pàgs. 58 i 57).',
  },
  '67': {
    humanTitle: 'Cinc mil ciutadans escoltant Azcárate i Salmerón a Gijón — i l’estrena operística d’Els Pirineus a Madrid',
    date: '30 de Setembre de 1893',
    summary: 'Ressenya del gran acte republicà de Gijón i nota cultural sobre l’òpera Els Pirineus de Felip Pedrell i Víctor Balaguer al Teatro Real.',
    note: 'Correspondència original (pàgs. 57 i 60).',
  },
  '68': {
    humanTitle: 'Banquets per a escriptors a Barcelona mentre el poble d’Almeria tanca els comerços en protesta',
    date: '30 de Setembre de 1893',
    summary: 'Agraeix a Fernando Tarrida el regal del seu llibre El Materialismo, comenta amb humor el Congrés Literari a la Universitat de Barcelona i narra la protesta cívica d’Almeria.',
    note: 'Correspondència original (pàg. 72).',
  },
  '69': {
    humanTitle: 'Les paraules finals davant la tomba núm. 2666 per a qui fou «tota amor, bondat, enginy i alegria»',
    date: '6 de Setembre de 1903',
    summary: 'Recull la llista completa d’assistents a l’enterrament de Doña Emilia Vallespí de Adell i el comiat pronunciat per Don Francisco Fernández al Cementeri de São João Batista.',
    note: 'Crònica necrològica original (pàg. 82).',
  },
  '70': {
    humanTitle: 'L’empremta eterna de l’amic de Pepe Adell retratat per Cândido Portinari al MNBA',
    date: 'Novembre de 1991',
    summary: 'Retall il·lustrat de l’última pàgina de l’àlbum destacant les 300 obres exposades d’Adolfo Morales de los Ríos i el seu retrat pintat per Portinari.',
    note: 'Retall cultural conservat per la família (pàg. 89).',
  },
  '71': {
    humanTitle: 'El document original del magistrat brasiler Lúcio de Mendonça que encengué el debat de 1895',
    date: '4 de Setembre de 1895',
    summary: 'Carta en portugués del ministre del Suprem Tribunal Federal brasiler demanant auxili econòmic per a Cuba, reproduïda íntegrament per José Adell abans de contestar-la.',
    note: 'Reproduït en el seu idioma portugués original a La Unión Española (pàg. 26).',
  },
  '72': {
    humanTitle: 'Quan un article periodístic («El Rasgo») portà Castelar a la condemna de mort i al triomf de 1868',
    date: 'Juny de 1892',
    summary: 'Relata l’expulsió universitària de Castelar després de publicar El Rasgo, la tràgica Nit de Sant Daniel, la seua condemna a mort sota Narváez i el retorn gloriós a les Corts Constituents.',
    note: 'Crònica històrica (pàgs. 11 i 12).',
  },
};

export function getLocalizedWork(work: CatalogWork, lang: SiteLang): CatalogWork {
  if (lang === 'pt') return work;

  const esEntry = WORKS_ES[work.id];
  if (lang === 'es' && esEntry) {
    return {
      ...work,
      humanTitle: esEntry.humanTitle,
      date: esEntry.date,
      summary: esEntry.summary,
      excerptTranslation: esEntry.note,
    };
  }

  if (lang === 'va') {
    const vaEntry = WORKS_VA[work.id];
    if (vaEntry) {
      return {
        ...work,
        humanTitle: vaEntry.humanTitle,
        date: vaEntry.date,
        summary: vaEntry.summary,
        excerptTranslation: vaEntry.note,
      };
    }
    if (esEntry) {
      // Adaptación fiel valenciana para las fichas históricas restantes manteniendo el rigor documental
      return {
        ...work,
        humanTitle: esEntry.humanTitle,
        date: esEntry.date
          .replace('Enero', 'Gener')
          .replace('Febrero', 'Febrer')
          .replace('Marzo', 'Març')
          .replace('Abril', 'Abril')
          .replace('Mayo', 'Maig')
          .replace('Junio', 'Juny')
          .replace('Julio', 'Juliol')
          .replace('Agosto', 'Agost')
          .replace('Septiembre', 'Setembre')
          .replace('Octubre', 'Octubre')
          .replace('Noviembre', 'Novembre')
          .replace('Diciembre', 'Desembre'),
        summary: esEntry.summary,
        excerptTranslation: esEntry.note,
      };
    }
  }

  return work;
}

export function getLocalizedWorksList(lang: SiteLang): CatalogWork[] {
  return CATALOG_WORKS.map((w) => getLocalizedWork(w, lang));
}
