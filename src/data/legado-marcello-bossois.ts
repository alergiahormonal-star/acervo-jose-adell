import { SiteLang } from '@/lib/i18n-ui';

export interface TrinetoIdealizadorContent {
  linkLabel: string;
  kicker: string;
  title: string;
  subtitle: string;
  photoCaption: string;
  paragraphs: string[];
  quote: string;
  quoteAuthor: string;
  readMoreLinkLabel: string;
  externalPortalLabel: string;
}

export const TRINETO_IDEALIZADOR_I18N: Record<SiteLang, TrinetoIdealizadorContent> = {
  es: {
    linkLabel: 'Trineto de Pepe Adell',
    kicker: 'Trineto de Pepe Adell • Idealizador del Memorial',
    title: 'Dr. Marcello Bossois — Trineto de Pepe Adell e Idealizador de este Sitio',
    subtitle:
      'Español y brasileño, carioca y valenciano: el bisnieto del nieto («trineto» / tataranieto) de José Adell y Fons que preservó el álbum secular de la familia y concibió este Memorial.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (trineto de Pepe Adell) y su esposa, la Dra. Patricia Frozi Schlinkert.',
    paragraphs: [
      'Este sitio y Memorial Histórico de José Adell y Fons («Pepe Adell», 1868–1927) fue idealizado y elaborado por su trineto (tataranieto), el Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) — ciudadano español y brasileño, carioca de nacimiento y valenciano de sangre —, con el propósito de custodiar, digitalizar y compartir con el mundo las 89 páginas originales y las 72 obras legadas por su bisabuelo del abuelo entre Vinaròs, Valencia, Barcelona, Madrid, Río de Janeiro y Bahía.',
      'Hijo del renombrado médico geriatra Dr. Vanuzio Ferreira y de la médica pediatra Dra. Lúcia Bossois (eslabón directo del linaje Adell–Bossois), el Dr. Marcello Bossois es médico alergólogo e inmunólogo por la Santa Casa da Misericórdia do Rio de Janeiro e investigador en Epigenética, Terapia Génica, Inmunidad Integrativa y edición genética CRISPR-Cas9, con trayectoria científica internacional junto a la Université Laval (Canadá) y el Consorcio Internacional de Terapia Génica.',
      'Junto a su esposa, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3) — hija de los destacados empresarios Lauro Schlinkert y Adma Schlinkert, médica militar en el Hospital Central del Ejército (HCE), especialista en Alergia e Inmunología y en Auditoría Médica —, fundó en 2007 el Proyecto Social Brasil Sem Alergia y lidera las acciones humanitarias y culturales de la ABBAA, asistiendo mensualmente a miles de familias en Brasil y en misiones internacionales con el mismo espíritu humanista, solidario y de amor al prójimo que Pepe Adell sembró hace más de un siglo.',
    ],
    quote:
      '«Preservar la memoria de Pepe Adell es honrar las raíces de nuestra familia entre Valencia y Río de Janeiro, recordando siempre su máxima de transformar las lágrimas en esperanza y servicio a la humanidad.»',
    quoteAuthor: '— Dr. Marcello Bossois, Trineto de Pepe Adell e Idealizador del Memorial',
    readMoreLinkLabel: 'Conocer al Idealizador del Sitio (Trineto de Pepe Adell) →',
    externalPortalLabel: 'Conocer el Proyecto Social Brasil Sem Alergia ↗',
  },
  va: {
    linkLabel: 'Trineto de Pepe Adell',
    kicker: 'Trineto (Rebesnet) de Pepe Adell • Idealitzador del Memorial',
    title: 'Dr. Marcello Bossois — Trineto de Pepe Adell i Idealitzador d’aquest Lloc Web',
    subtitle:
      'Espanyol i brasiler, carioca i valencià: el «trineto» (rebesnet) de José Adell y Fons que preservà l’àlbum centenari de la família i concebé aquest Memorial.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (trineto de Pepe Adell) i la seua esposa, la Dra. Patricia Frozi Schlinkert.',
    paragraphs: [
      'Aquest lloc web i Memorial Històric de José Adell y Fons («Pepe Adell», 1868–1927) fou idealitzat i elaborat pel seu «trineto» (rebesnet), el Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) — ciutadà espanyol i brasiler, carioca de naixement i valencià de sang —, amb la missió de preservar, digitalitzar i oferir al públic les 89 pàgines originals i les 72 obres llegades pel patriarca familiar entre Vinaròs, València, Barcelona, Madrid, Rio de Janeiro i Bahia.',
      'Fill del reconegut metge geriatre Dr. Vanuzio Ferreira i de la metgessa pediatra Dra. Lúcia Bossois (baula directa de la nissaga Adell–Bossois), el Dr. Marcello Bossois és metge al·lergòleg i immunòleg per la Santa Casa da Misericórdia do Rio de Janeiro i investigador en Epigenètica, Teràpia Gènica, Immunitat Integrativa i tecnologia CRISPR-Cas9, amb projecció científica internacional al costat de la Université Laval (Canadà) i el Consorci Internacional de Teràpia Gènica.',
      'Al costat de la seua esposa, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3) — filla dels destacats empresaris Lauro Schlinkert i Adma Schlinkert, metgessa militar a l’Hospital Central de l’Exèrcit (HCE), especialista en Al·lèrgia i Immunologia i en Auditoria Mèdica —, fundà el 2007 el Projecte Social Brasil Sem Alergia i impulsa les accions humanitàries i culturals de l’ABBAA, atenent cada mes milers de famílies amb el mateix esperit humanista i solidari que Pepe Adell sembrà fa més d’un segle.',
    ],
    quote:
      '«Preservar la memòria de Pepe Adell és honrar les arrels de la nostra família entre València i Rio de Janeiro, recordant sempre la seua màxima de transformar les llàgrimes en esperança i servei a la humanitat.»',
    quoteAuthor: '— Dr. Marcello Bossois, Trineto de Pepe Adell i Idealitzador del Memorial',
    readMoreLinkLabel: 'Conéixer l’Idealitzador del Lloc Web (Trineto de Pepe Adell) →',
    externalPortalLabel: 'Conéixer el Projecte Social Brasil Sem Alergia ↗',
  },
  pt: {
    linkLabel: 'Trineto de Pepe Adell',
    kicker: 'Trineto de Pepe Adell • Idealizador do Memorial',
    title: 'Dr. Marcello Bossois — Trineto de Pepe Adell e Idealizador deste Site',
    subtitle:
      'Espanhol e brasileiro, carioca e valenciano: o trineto de José Adell y Fons que preservou o álbum centenário da família e idealizou este Memorial.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (trineto de Pepe Adell) e sua esposa, a Dra. Patricia Frozi Schlinkert.',
    paragraphs: [
      'Este site e Memorial Histórico de José Adell y Fons (“Pepe Adell”, 1868–1927) foi idealizado e elaborado por seu trineto, o Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) — cidadão espanhol e brasileiro, carioca de nascimento e valenciano de sangue —, com o propósito de preservar, digitalizar e compartilhar com o público as 89 páginas originais e as 72 obras legadas por seu trisavô entre Vinaròs, Valência, Barcelona, Madrid, Rio de Janeiro e Bahia.',
      'Filho do renomado médico geriatra Dr. Vanuzio Ferreira e da médica pediatra Dra. Lúcia Bossois (elo direto da linhagem Adell–Bossois), o Dr. Marcello Bossois é médico alergista e imunologista pela Santa Casa da Misericórdia do Rio de Janeiro e pesquisador em Epigenética, Terapia Gênica, Imunidade Integrativa e edição genética CRISPR-Cas9, com atuação científica internacional junto à Université Laval (Canadá) e ao Consórcio Internacional de Terapia Gênica.',
      'Ao lado de sua esposa, a Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3) — filha dos destacados empresários Lauro Schlinkert e Adma Schlinkert, médica militar no Hospital Central do Exército (HCE), especialista em Alergia e Imunologia e em Auditoria Médica —, fundou em 2007 o Projeto Social Brasil Sem Alergia e conduz as ações humanitárias e culturais da ABBAA, levando saúde gratuita e dignidade a milhares de famílias com o mesmo espírito humanista, beneficente e acolhedor que Pepe Adell cultivou há mais de um século.',
    ],
    quote:
      '“Preservar a memória de Pepe Adell é honrar as raízes da nossa família entre Valência e o Rio de Janeiro, mantendo viva sua máxima de transformar lágrimas em acolhimento, ciência e serviço ao próximo.”',
    quoteAuthor: '— Dr. Marcello Bossois, Trineto de Pepe Adell e Idealizador do Memorial',
    readMoreLinkLabel: 'Sobre o Idealizador do Site (Trineto de Pepe Adell) →',
    externalPortalLabel: 'Conhecer o Projeto Social Brasil Sem Alergia ↗',
  },
};
