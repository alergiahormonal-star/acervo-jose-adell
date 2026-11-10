import { SiteLang } from '@/lib/i18n-ui';

export interface ExternalLinkItem {
  label: string;
  url: string;
  badge?: string;
}

export interface LegacyChapter {
  id: string;
  roman: string;
  kicker: string;
  title: string;
  lead: string;
  paragraphs: string[];
  bulletPoints?: { title: string; text: string }[];
  highlightBox?: { title: string; text: string };
  links?: ExternalLinkItem[];
}

export interface PersonMentionCard {
  name: string;
  role: string;
  relationToLegacy: string;
  url?: string;
}

export interface MarcelloLegacyContent {
  badge: string;
  title: string;
  subtitle: string;
  curatorshipBannerTitle: string;
  curatorshipBannerText: string;
  photoCaption: string;
  bridgeQuote: string;
  bridgeQuoteAuthor: string;
  stats: { value: string; label: string }[];
  homeSummaryLead: string;
  homeSummaryBullets: string[];
  homeCtaBtn: string;
  chapters: LegacyChapter[];
  clinicUnitsTitle: string;
  clinicUnitsSubtitle: string;
  encyclopediaTitle: string;
  peopleDirectoryTitle: string;
  peopleDirectorySubtitle: string;
  peopleDirectory: PersonMentionCard[];
}

export const CLINIC_UNITS_LINKS: ExternalLinkItem[] = [
  {
    label: 'Duque de Caxias (Sede — RJ)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/clinica-brasil-sem-alergia-duque-de-caxias',
    badge: 'RJ',
  },
  {
    label: 'Realengo (Rio de Janeiro — RJ)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/clinica-brasil-sem-alergia-realengo',
    badge: 'RJ',
  },
  {
    label: 'Nova Iguaçu (Baixada Fluminense — RJ)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/clinica-brasil-sem-alergia-nova-iguacu',
    badge: 'RJ',
  },
  {
    label: 'Itaguaí (RJ)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/clinica-brasil-sem-alergia-itaguai',
    badge: 'RJ',
  },
  {
    label: 'Xerém (Duque de Caxias — RJ)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/clinica-brasil-sem-alergia-xerem',
    badge: 'RJ',
  },
  {
    label: 'Niterói — Fonseca (RJ)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/cl%C3%ADnica-brasil-sem-alergia-niter%C3%B3i',
    badge: 'RJ',
  },
  {
    label: 'Clínicas-Ônibus Itinerantes (Brasil)',
    url: 'https://www.brasilsemalergia.com.br/clinicas/cl%C3%ADnica-%C3%B4nibus',
    badge: 'Itinerante',
  },
  {
    label: 'Conacri — República da Guiné (África)',
    url: 'https://www.youtube.com/watch?v=23Qxa0uZ71E',
    badge: 'África',
  },
  {
    label: 'Estados Unidos — Parceria Prof. Benoit Tano',
    url: 'https://www.brasilsemalergia.com.br/clinicas/cl%C3%ADnica-estados-unidos',
    badge: 'EUA',
  },
];

export const ENCYCLOPEDIA_LINKS: ExternalLinkItem[] = [
  {
    badge: 'Enciclopédia Médica',
    label:
      'ALERGIA SULFA — O médico não fez TESTE DE PELE antes de mandar TOMAR O REMÉDIO — Está certo?',
    url: 'https://www.brasilsemalergia.com.br/alergia-sulfa-o-m%C3%A9dico-n%C3%A3o-fez-teste-de-pele-antes-de-mandar-tomar-o-rem%C3%A9dio-est%C3%A1-certo',
  },
  {
    badge: 'Enciclopédia Médica',
    label:
      'Lockdown X Distanciamento Social — Covid-19 e Vacina BCG — Teoria da Higiene',
    url: 'https://www.brasilsemalergia.com.br/lockdown-x-distanciamento-social-covid-19-e-vacina-bcg-teoria-da-higiene-vi',
  },
  {
    badge: 'Enciclopédia Médica',
    label:
      'Fui picado por abelhas, desenvolvi alergias e muita falta de ar — Agravou com a CoronaVac — Por quê?',
    url: 'https://www.brasilsemalergia.com.br/fui-picado-por-abelhas,-desenvolvi-alergias-e-muita-falta-de-ar-agravou-com-a-coronavac-por-qu%C3%AAi',
  },
  {
    badge: 'Atualização Científica',
    label:
      'Educação Médica Continuada — Conferências Internacionais em Imunologia e Genética',
    url: 'https://www.brasilsemalergia.com.br/educa%C3%A7%C3%A3o-continuada',
  },
];

export const MARCELLO_LEGACY_I18N: Record<SiteLang, MarcelloLegacyContent> = {
  es: {
    badge: 'El Legado Vivo • Tataranieto de Pepe Adell • Español y Brasileño • Carioca y Valenciano',
    title:
      'Dr. Marcello Bossois y Dra. Patricia Schlinkert: Liderazgo, Humanismo y Legado en la Medicina Brasileña y Mundial',
    subtitle:
      'Informe biográfico, científico y humanitario sobre el Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) — tataranieto («trineto») de José Adell y Fons (“Pepe Adell”), ciudadano español y brasileño, carioca de nacimiento y valenciano de sangre, y responsable directo de la elaboración y preservación de este Memorial — junto a su esposa y colíder, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3).',
    curatorshipBannerTitle:
      'Guardián de la Memoria y Responsable de la Elaboración de este Memorial',
    curatorshipBannerText:
      'Este Memorial Humano y Archivo Histórico Digital de José Adell y Fons (1868–1927) fue concebido, custodiado e impulsado por su tataranieto, el Dr. Marcello Bossois de Melo Ferreira. Más de un siglo después de que Pepe Adell fundara sociedades de beneficencia y defendiera la dignidad humana en la antigua Rua da Ajuda de Río de Janeiro, la cuarta generación de su sangre mantiene encendida la misma llama entre Vinaròs, Valencia, España y Brasil.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) y su esposa, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3): fundadores y fuerza motriz del Proyecto Social Brasil Sem Alergia.',
    bridgeQuote:
      '«La beneficencia ilustrada y el amor por el prójimo que Pepe Adell sembró entre Valencia y Río de Janeiro en el siglo XIX florecen hoy en una medicina accesible que abraza a 10.000 pacientes por mes y traduce la revolución genómica para los más vulnerables.»',
    bridgeQuoteAuthor:
      '— Puente generacional Adell–Bossois–Ferreira–Schlinkert (1868 – Presente)',
    stats: [
      { value: '~10.000', label: 'Pacientes Asistidos / Mes' },
      { value: '2007', label: 'Fundación Brasil Sem Alergia' },
      { value: '51', label: 'Firmantes Mundiales Modelo Apollo' },
      { value: '4ª Gen.', label: 'Linaje Vivo de Pepe Adell' },
    ],
    homeSummaryLead:
      'Conozca la historia completa del responsable de la elaboración de este Memorial: el Dr. Marcello Bossois — tataranieto de Pepe Adell, español y brasileño, carioca y valenciano — y su esposa, la Dra. Patricia Frozi Schlinkert. Hijo del renombrado geriatra Dr. Vanuzio Ferreira y de la pediatra Dra. Lúcia Bossois, y unido al legado empresarial de Lauro Schlinkert y Adma Schlinkert, el matrimonio lidera el Proyecto Social Brasil Sem Alergia (~10.000 atendidos/mes en Brasil, África y EE. UU.) mientras impulsa la Terapia Génica, el Manifiesto «Modelo Apollo» y la edición genética CRISPR-Cas9.',
    homeSummaryBullets: [
      'Linaje y Vocación: Tataranieto de José Adell y Fons, hijo de los médicos Dr. Vanuzio Ferreira y Dra. Lúcia Bossois; casado con la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3), médica militar en el Hospital Central del Ejército (HCE), alergóloga, inmunóloga, auditora médica e hija de los empresarios Lauro Schlinkert y Adma Schlinkert.',
      'Impacto Social y Global: Fundadores del Proyecto Social Brasil Sem Alergia (Duque de Caxias, Realengo, Nova Iguaçu, Itaguaí, Xerém, Niterói-Fonseca, Iguaba Grande, São Pedro da Aldeia, Curitiba, Clínicas-Autobús, misión humanitaria en Conakry, Guinea, junto a D’Artagnan Baptista Guimarães y el Prof. Namoudou Conde, y actuación en EE. UU. con el Prof. Benoit Tano).',
      'Vanguardia Genómica y CRISPR-Cas9: Investigador en la Université Laval con el Prof. Jacques P. Tremblay (2010–2015), coautor en Molecular Therapy (2014), articulador entre los 51 firmantes mundiales del Manifiesto «Modelo Apollo» (2013, destacado por Ancelmo Gois en O Globo), patente pionera CRISPR/Cas9 para Alzheimer precoz, Núcleo de Enfermedades Raras en la Santa Casa (2019) y estudios genéticos de asma (2024) y H1N1.',
      'Ciencia Integrativa, Sociobiología y Cultura: Inmunidad Integrativa y Alergia Hormonal (junto a la Dra. Shilpa Shah y el Prof. Benoit Tano), asesoría médica en Sociobiología al histórico periodista de Núremberg Dr. Mário Giudicelli (amigo de Wernher von Braun), «Música Pra Respirar» con Alcione, Coral «Canto que Cura» y ABBAA Deportes Especiales (judoca Matheus Domingues Moreira).',
    ],
    homeCtaBtn: 'Leer el Informe Completo del Dr. Marcello Bossois y la Dra. Patricia Schlinkert →',
    chapters: [
      {
        id: 'linaje-formacion',
        roman: 'I',
        kicker: 'Raíces Hispano-Brasileñas, Familia y Formación Médica',
        title:
          'Linaje, Formación Rigurosa y Convergencia Familiar: Adell, Bossois-Ferreira y Schlinkert',
        lead:
          'Tataranieto de José Adell y Fons («Pepe Adell»), el Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) encarna en el siglo XXI la doble identidad española y brasileña — profundamente carioca y orgullosamente valenciana — que dio origen a su familia, habiendo asumido personalmente la responsabilidad de elaborar y preservar este Memorial histórico.',
        paragraphs: [
          'La trayectoria del Dr. Marcello Bossois y de su esposa, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3), une raíces profundas en sectores pilares de la sociedad: la tradición médica humanista y la fuerza estratégica del empresariado brasileño. El Dr. Marcello Bossois de Melo Ferreira lleva el compromiso clínico en la sangre: es hijo del renombrado geriatra Dr. Vanuzio Ferreira y de la médica pediatra Dra. Lúcia Bossois, eslabón familiar directo con el legado hispano-valenciano de Pepe Adell.',
          'Por su parte, además de su destacada actuación clínica e institucional, la Dra. Patricia Frozi Schlinkert aporta el legado de sus padres, Lauro Schlinkert y Adma Schlinkert, figuras de relieve e importantes exponentes del empresariado brasileño. Esa herencia de visión estratégica, gobernanza y capacidad de gestión se refleja directamente en la solidez, eficacia y expansión nacional e internacional del Proyecto Social Brasil Sem Alergia, del cual es cofundadora y fuerza motriz junto a su esposo.',
          'Versátil en las esferas institucional y social, la Dra. Patricia Frozi Schlinkert es médica militar en servicio en el Hospital Central del Ejército (HCE), combinando la práctica clínica especializada en Alergia e Inmunología con la actuación estratégica en Auditoría Médica. La unión de las familias Bossois-Ferreira y Schlinkert simboliza así la convergencia entre tradición clínica, dinamismo empresarial e innovación científica.',
          'La actuación médica del Dr. Marcello Bossois (CRM/RJ 732141) se sustenta en una formación rigurosa: graduado en Medicina por la Universidade Gama Filho (1996–2002), se especializó en Alergia e Inmunología en el prestigioso Servicio de la Santa Casa da Misericórdia do Rio de Janeiro. En el inicio de su carrera sirvió también como médico militar en el Hospital Central del Ejército — HCE (2003–2008) y ejerció en el Hospital de Clínicas Mário Lioni.',
        ],
        bulletPoints: [
          {
            title: 'Público y Enfermedades Respiratorias Crónicas',
            text: 'Atiende a pacientes a partir de los dos años de edad en enfermedades de hipersensibilidad, incluyendo Asma, Rinitis Alérgica y Bronquitis, con foco estratégico en Duque de Caxias y Río de Janeiro ante el impacto ambiental y la contaminación atmosférica de la refinería REDUC.',
          },
          {
            title: 'Condiciones Cutáneas e Inmunología Clínica',
            text: 'Diagnóstico y manejo especializado de Dermatitis Atópica, Dermatitis de Contacto, Urticaria, Inmunodeficiencias y cuadros graves de Anafilaxia.',
          },
          {
            title: 'Alergias Específicas',
            text: 'Tratamiento integral de Alergias Alimentarias, Alergias a Medicamentos y Alergias a Picaduras de Insectos (Prurigo Estrófulo).',
          },
        ],
        links: [
          {
            badge: 'Vídeo Institucional',
            label: 'Especialización en Alergia e Inmunología — Santa Casa da Misericórdia do Rio de Janeiro',
            url: 'https://www.youtube.com/watch?v=6Zhb3T8UiCM',
          },
          {
            badge: 'Archivo HCE',
            label: 'Actuación como Médico Militar en el Hospital Central del Ejército (2003–2008)',
            url: 'https://www.youtube.com/watch?v=e_G8AhkuArc',
          },
        ],
      },
      {
        id: 'brasil-sem-alergia',
        roman: 'II',
        kicker: 'Utilidad Pública y Acción Humanitaria Sin Fronteras',
        title:
          'El Pilar del Proyecto Social Brasil Sem Alergia: Acceso Gratuito y Expansión en Tres Continentes',
        lead:
          'Idealizado por el Dr. Marcello Bossois en 2007 ante la urgente carencia asistencial en Duque de Caxias y fortalecido por la coliderança de la Dra. Patricia Frozi Schlinkert, el Proyecto Social Brasil Sem Alergia asiste hoy a cerca de 10.000 personas por mes.',
        paragraphs: [
          'En consonancia con el espíritu solidario que caracterizó las obras benéficas fundadas por su tatarabuelo Pepe Adell en el Río de Janeiro de finales del siglo XIX, el proyecto democratiza el tratamiento inmunológico y alergológico para poblaciones vulnerables, complementando de forma decisiva al Sistema Único de Salud (SUS).',
          'En diversas unidades, las consultas médicas especializadas y la Prueba Básica de Alergia (Prick Test para alergias respiratorias e insectos) se ofrecen de forma totalmente gratuita, mientras que pruebas específicas como el Patch Test y las vacunas antialérgicas (Inmunoterapia) se brindan a precios populares para garantizar la autosostenibilidad de la obra social.',
          'Su alcance geográfico trasciende municipios y océanos: cuenta con unidades fijas en el Estado de Río de Janeiro — Duque de Caxias, Realengo, Nova Iguaçu, Itaguaí, Xerém, Niterói (Fonseca), Iguaba Grande y São Pedro da Aldeia —, presencia en otros estados como Curitiba (Paraná) y Clínicas-Autobús itinerantes que recorren ciudades brasileñas.',
          'En el plano humanitario global, el proyecto marcó un hito histórico con la apertura de una unidad móvil en Conakry, República de Guinea (África Occidental), con el apoyo del Cónsul General de Guinea, D’Artagnan Baptista Guimarães, y en alianza científica y humanitaria con el Prof. Namoudou Conde (Academia de Ciencias de Guinea), incluyendo el envío de un autobús ambulatorio para asistencia médica, investigación y educación. Simultáneamente, proyecta su actuación en los Estados Unidos en colaboración con el Profesor Benoit Tano (Johns Hopkins University), consultor científico y docente en Minnesota, Dakota del Norte y Dakota del Sur.',
        ],
        links: [
          {
            badge: 'Misión África',
            label: 'Apertura de Unidad Móvil en Conakry, República de Guinea',
            url: 'https://www.youtube.com/watch?v=23Qxa0uZ71E',
          },
          {
            badge: 'Academia de Ciencias de Guinea',
            label: 'Alianza Humanitaria y Científica con el Prof. Namoudou Conde',
            url: 'https://www.youtube.com/watch?v=F-e4K2iks8I',
          },
          {
            badge: 'Autobús Ambulatorio',
            label: 'Envío del Autobús Ambulatorio a la Misión en África',
            url: 'https://youtube.com/shorts/xqEHc3YJX2k',
          },
          {
            badge: 'Estados Unidos',
            label: 'Actuación en EE. UU. con el Prof. Benoit Tano (Johns Hopkins)',
            url: 'https://www.brasilsemalergia.com.br/clinicas/cl%C3%ADnica-estados-unidos',
          },
        ],
      },
      {
        id: 'pionerismo-genomico-apollo-crispr',
        roman: 'III',
        kicker: 'Terapia Génica, Manifiesto «Modelo Apollo» y CRISPR-Cas9',
        title:
          'De la Université Laval al Ápice de la Ciencia Genómica Mundial y la Vanguardia CRISPR en Brasil',
        lead:
          'El Dr. Marcello Bossois se consolidó como uno de los principales traductores de la revolución genómica en América Latina, uniendo su formación en Canadá con hitos pioneros en Terapia Génica y edición de ADN mediante CRISPR-Cas9.',
        paragraphs: [
          'Entre 2010 y 2015, el Dr. Marcello Bossois realizó estudios de posgrado e investigación en Canadá como asistente de investigación del célebre genetista Profesor Jacques P. Tremblay en la Université Laval (Québec), vinculándose además a la firma biotecnológica canadiense Cell Gene Therapeutics. En marzo de 2014 fue coautor del influyente artículo «Development of a web course on gene therapy by the international consortium of gene therapy», publicado en la prestigiosa revista Molecular Therapy junto a figuras mundiales como Jacques P. Tremblay, Annemieke Aartsma-Rus, Juan Bueren y Johnny Huard.',
          'En febrero de 2013 participó activamente en la articulación y fue uno de los 51 firmantes mundiales del histórico Manifiesto «Translating the Genomics Revolution: The Need for an International Gene Therapy Consortium for Monogenic Diseases» — conocido como el «Modelo Apollo» de la Medicina —, junto a líderes como Depei Liu (entonces Presidente de la Academia China de Ciencias Médicas) e investigadores de Stanford, Harvard y los principales laboratorios europeos. Inspirado en el programa espacial Apollo de la NASA, el manifiesto propuso un consorcio global capaz de desarrollar curas para las cerca de 10.000 enfermedades hereditarias monogénicas (como distrofia muscular de Duchenne, hemofilia y fibrosis quística) en dos décadas, centralizando la producción de vectores virales (AAV) y oligonucleótidos, compartiendo infraestructura con pequeños equipos y creando modelos públicos sostenibles.',
          'El impacto nacional e internacional de este liderazgo fue destacado el 30 de abril de 2013 en la célebre columna de Ancelmo Gois en el diario O Globo: «Consórcio Internacional de Terapia Gênica se reúne, mês que vem, nos EUA, com participação de Jacques Tremblay e Marcello Bossois» (en referencia a la cumbre de mayo de 2013 durante el congreso de la ASGCT en Estados Unidos).',
          'Traduciendo esta ciencia de élite para Brasil — con apoyo de la ABBAA (Asociación Brasileña de Apoyo, Asistencia y Amparo) y en alianza continua con el Dr. Jacques P. Tremblay —, el Dr. Bossois desarrolló un Test Rápido CRISPR para COVID-19 orientado a detectar variantes en zonas remotas y países en desarrollo, y protagonizó uno de los primeros depósitos de patente en Brasil utilizando edición genética CRISPR/Cas9 (modalidad base editing) para la prevención y el tratamiento del Alzheimer precoz.',
          'Su liderazgo diplomático y científico en Brasil cristalizó en tres hitos históricos en la Santa Casa da Misericórdia do Rio de Janeiro: la organización del Simposio Internacional de Terapia Génica en 2016 (con la Université Laval, universidades japonesas y organizaciones francesas); la firma en 2018 del contrato oficial de colaboración científica entre el Servicio de Alergia e Inmunología de la Santa Casa y la Université Laval bajo su conducción técnica; y la inauguración en noviembre de 2019 del Núcleo para Tratamiento de Enfermedades Raras, ceremonia que reunió a la Cónsul General de Canadá, Evelyne Coulombe, representantes del Ministerio de la Mujer, la Familia y los Derechos Humanos y del Instituto Butantan, coronada con una emotiva muestra cultural de pacientes especiales organizada por la Escola de Artes Mudart.',
        ],
        highlightBox: {
          title: 'Nota Histórica en O Globo — Columna Ancelmo Gois (30 de abril de 2013)',
          text: '«Consórcio Internacional de Terapia Gênica se reúne, mês que vem, nos EUA, com participação de Jacques Tremblay e Marcello Bossois.» — Registro de relevancia pública nacional sobre su presencia en la cumbre internacional de la ASGCT.',
        },
        links: [
          {
            badge: 'PubMed • Molecular Therapy (2014)',
            label: 'Development of a web course on gene therapy by the international consortium of gene therapy',
            url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
          },
          {
            badge: 'CRISPR COVID-19 & Patente Alzheimer',
            label: 'Investigaciones en Curso y Depósito de Patente CRISPR/Cas9 — ABBAA',
            url: 'https://www.brasilsemalergia.com.br/abbaa/pesquisas-em-andamento',
          },
          {
            badge: 'Simposio 2016',
            label: 'Simposio Internacional de Terapia Génica en Río de Janeiro (Santa Casa)',
            url: 'https://www.youtube.com/watch?v=PZGUPEQAdWg',
          },
          {
            badge: 'Acuerdo 2018',
            label: 'Contrato de Colaboración Científica Santa Casa do RJ & Université Laval',
            url: 'https://youtu.be/6Zhb3T8UiCM',
          },
          {
            badge: 'Núcleo Enfermedades Raras (2019)',
            label: 'Inauguración del Núcleo con Canadá, Instituto Butantan y Cónsul Evelyne Coulombe',
            url: 'https://youtube.com/playlist?list=PLjECpMdqeZY1RzfwraUC9k-0xmDc5oOxH',
          },
          {
            badge: 'Inclusión Cultural (2019)',
            label: 'Muestra Cultural de Pacientes Especiales — Escola de Artes Mudart',
            url: 'https://youtu.be/HfkWtX2n8-s',
          },
        ],
      },
      {
        id: 'genetica-inmunidad-integrativa',
        roman: 'IV',
        kicker: 'Medicina Personalizada, Asma, H1N1 e Inmunidad Integrativa',
        title:
          'Investigaciones Genéticas Actuales (SNPs), Alergia Hormonal y Redes Científicas Globales',
        lead:
          'Desde la farmacogenómica del asma en pacientes brasileños hasta la intersección entre inmunología y endocrinología, el Dr. Marcello Bossois articula consorcios interdisciplinarios con centros de EE. UU., Canadá, India y Brasil.',
        paragraphs: [
          'En 2024, el Dr. Marcello Bossois fue coautor junto a Adalberto Rezende Santos (Fiocruz / Brasil Sem Alergia) de un relevante estudio publicado en PubMed Central (PMC11276142 / PMID 39057056) que investigó las Variaciones de Nucleótido Único (SNPs) en los genes ADRB2 y ADCY9 en pacientes brasileños con asma atendidos en Brasil Sem Alergia, permitiendo predecir la respuesta individual a broncodilatadores e impulsando la medicina personalizada.',
          'Paralelamente, participa en una investigación internacional sobre una condición endocrina autoinmune en mujeres embarazadas infectadas por el virus H1N1, en colaboración con Richard Richardson y Roby Russell (Universidad de Texas en Austin, EE. UU.), la Dra. Shilpa Shah (Universidad de Mumbai, India) y E. Tinoco (UERJ y Unigranrio, Brasil).',
          'Junto al Proyecto Brasil Sem Alergia introdujo la metodología de «Inmunidad Integrativa», centrada en la intersección entre alergia, inmunología y endocrinología. Con respaldo científico de los estudios de la Dra. Shilpa Shah sobre influencia hormonal en alergias autoinmunes, aborda la «Alergia Hormonal»: cuadros mediados por anticuerpos IgE que reconocen autoantígenos hormonales unidos a proteínas, manifestándose de forma cíclica como asma premenstrual, migraña menstrual, fatiga crónica y fibromialgia, tratados mediante pruebas cutáneas con hormonas bioidénticas e Inmunoterapia Hormonal Sublingual.',
          'Como Consultor Científico global actúa el Prof. Benoit Tano, MD/PhD (Johns Hopkins University), fundador del Integrative Immunity Health System (Minnesota) y de la International Academy of Integrative Immunity (I-AIIM), y autor de los best-sellers The Layman’s Guide to Integrative Immunity (2016) y Hormone Syndrome: America’s Silent Plague (2012). La joint venture entre ABBAA (Dr. Marcello Bossois) y TayaPro University (Prof. Benoit Tano) patrocina el primer Curso de Inmunología Integrativa para médicos en el primer trimestre de 2026.',
          'Asimismo, en el Simposio de Enfermedades Respiratorias de 2022 promovido por la Santa Casa de Río de Janeiro, el Dr. Bossois fue el responsable directo de la articulación internacional que reunió al Profesor Louis-Philippe Boulet (Presidente de la Global Initiative for Asthma — GINA), al Profesor Benoit Tano y al Profesor Jacques P. Tremblay.',
        ],
        links: [
          {
            badge: 'PubMed Central (2024 • PMID 39057056)',
            label: 'Variaciones Genéticas (SNPs en ADRB2 y ADCY9) en Pacientes Brasileños con Asma',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11276142/',
          },
          {
            badge: 'Investigación Internacional H1N1',
            label: 'Condición Endocrina Autoinmune en Gestantes con H1N1 (UT Austin, Mumbai, UERJ)',
            url: 'https://go.gale.com/ps/i.do?id=GALE%7CA398207823&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=22784292&p=HRCA&sw=w&userGroupName=anon%7E5336bed9&aty=open-web-entry',
          },
          {
            badge: 'ScienceDirect • Dra. Shilpa Shah',
            label: 'Fundamentación Científica de la Influencia Hormonal en Alergias Autoinmunes',
            url: 'https://www.sciencedirect.com/science/article/pii/S2666396121000327',
          },
          {
            badge: 'TayaPro University',
            label: 'Inmunidad Integrativa y Formación Médica Internacional (ABBAA & TayaPro)',
            url: 'https://www.brasilsemalergia.com.br/tayapro-university',
          },
        ],
      },
      {
        id: 'sociobiologia-cultura-deporte',
        roman: 'V',
        kicker: 'Sociobiología, Historia del Siglo XX, Música y Deporte Inclusivo',
        title:
          'Colaboración con el Dr. Mário Giudicelli (Wernher von Braun) y Acciones Culturales de la ABBAA',
        lead:
          'La vocación humanista heredada de Pepe Adell se expresa también en el diálogo del Dr. Marcello Bossois con la historia universal, la música popular brasileña y el deporte inclusivo.',
        paragraphs: [
          'A partir de 2009, el Dr. Marcello Bossois actuó como asesor médico del extraordinario intelectual y periodista histórico Dr. Mário Giudicelli en proyectos de Sociobiología (Etología). Mestre en Sociobiología por la Universidad de Connecticut (EE. UU., 1973) y exalumno del célebre astrofísico Carl Sagan, el Dr. Giudicelli sirvió durante más de 20 años en la Casa Blanca y en la DEA, fue traductor simultáneo diplomático para presidentes como George Bush (padre) y Ronald Reagan, y había sido corresponsal de guerra (1945–1946) y el único periodista vivo presente durante todo el año y medio de los Juicios de Núremberg.',
          'A través de esa estrecha asesoría médica e intelectual con el Dr. Mário Giudicelli, el Dr. Bossois tuvo la oportunidad única de conocer en profundidad el pensamiento científico de Wernher von Braun — arquitecto jefe del programa espacial Apollo de la NASA —, a quien Giudicelli había entrevistado hacia 1970 en una conversación histórica inédita y con quien mantenía una cercana amistad personal.',
          'Finalmente, por medio de la ABBAA (Asociación Brasileña de Asistencia al Asmático y Alérgico), el Dr. Bossois y el proyecto Brasil Sem Alergia integran salud, arte y superación: crearon «Música Pra Respirar» en alianza con la consagrada cantante brasileña Alcione y Pague Menos (una obra musical cuyos compases y melodía reproducen ejercicios de fisioterapia respiratoria para pacientes con asma y EPOC); mantienen el «Coral Canto que Cura» (clases de canto terapéutico para pacientes respiratorios); e impulsan ABBAA Deportes Especiales, patrocinando a atletas inclusivos como el judoca con Síndrome de Down Matheus Domingues Moreira.',
        ],
        links: [
          {
            badge: 'Documento Histórico (~1970)',
            label: 'La Entrevista Nunca Publicada de Wernher von Braun por el Dr. Mário Giudicelli',
            url: 'https://www.brasilsemalergia.com.br/94-accordion/7192-a-entervista-nunca-publicada-de-wernher-von-braun',
          },
          {
            badge: 'Alcione & ABBAA',
            label: 'Proyecto Terapéutico «Música Pra Respirar» con la cantante Alcione',
            url: 'https://www.youtube.com/watch?v=dLoL_bPiZfc',
          },
          {
            badge: 'Canto Terapéutico',
            label: 'Coral Brasil Sem Alergia — «Coral Canto que Cura»',
            url: 'https://www.brasilsemalergia.com.br/abbaa/coral-brasil-sem-alergia',
          },
          {
            badge: 'Deporte Inclusivo',
            label: 'ABBAA Deportes Especiales — Patrocinio al judoca Matheus Domingues Moreira',
            url: 'https://www.brasilsemalergia.com.br/abbaa/abbaa-esportes-especiais',
          },
        ],
      },
    ],
    clinicUnitsTitle: 'Red de Unidades Clínicas, Autobuses Itinerantes y Misiones Internacionales',
    clinicUnitsSubtitle:
      'Además de Iguaba Grande, São Pedro da Aldeia (RJ) y Curitiba (PR), acceda directamente a las principales sedes y frentes internacionales de Brasil Sem Alergia:',
    encyclopediaTitle: 'Enciclopedia Médica y Educación Científica Continua',
    peopleDirectoryTitle:
      'Cuadro de Honor: Familiares, Científicos y Personalidades Vinculadas a su Trayectoria',
    peopleDirectorySubtitle:
      'Registro nominal íntegro de todas las personalidades familiares, médicas, científicas, diplomáticas y culturales que integran esta historia:',
    peopleDirectory: [
      {
        name: 'José Adell y Fons («Pepe Adell», 1868–1927)',
        role: 'Periodista, Maestro Grabador y Patriarca Valenciano en Río de Janeiro',
        relationToLegacy: 'Tatarabuelo del Dr. Marcello Bossois e inspiración ética y humanitaria de este Memorial.',
      },
      {
        name: 'Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141)',
        role: 'Alergólogo, Inmunólogo, Investigador en Terapia Génica y CRISPR-Cas9',
        relationToLegacy: 'Tataranieto de Pepe Adell (español y brasileño, carioca y valenciano), fundador de Brasil Sem Alergia y responsable de la elaboración de este Memorial.',
      },
      {
        name: 'Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3)',
        role: 'Médica Militar (HCE), Alergóloga, Inmunóloga y Auditora Médica',
        relationToLegacy: 'Esposa del Dr. Marcello Bossois, cofundadora y colíder estratégica del Proyecto Social Brasil Sem Alergia.',
      },
      {
        name: 'Dr. Vanuzio Ferreira',
        role: 'Renombrado Médico Geriatra',
        relationToLegacy: 'Padre del Dr. Marcello Bossois de Melo Ferreira, pilar de su vocación médica familiar.',
      },
      {
        name: 'Dra. Lúcia Bossois',
        role: 'Médica Pediatra',
        relationToLegacy: 'Madre del Dr. Marcello Bossois y eslabón directo de la estirpe familiar Bossois / Adell.',
      },
      {
        name: 'Lauro Schlinkert & Adma Schlinkert',
        role: 'Destacados Exponentes del Empresariado Brasileño',
        relationToLegacy: 'Padres de la Dra. Patricia Frozi Schlinkert, cuyo legado de visión estratégica y gestión inspira la gobernanza del proyecto social.',
      },
      {
        name: 'Prof. Dr. Jacques P. Tremblay',
        role: 'Catedrático y Genetista — Université Laval (Canadá) & Cell Gene Therapeutics',
        relationToLegacy: 'Mentor científico del Dr. Marcello Bossois (2010–2015) y socio en Terapia Génica, CRISPR-Cas9 y acuerdos con la Santa Casa.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
      },
      {
        name: 'Annemieke Aartsma-Rus, Juan Bueren & Johnny Huard',
        role: 'Investigadores Internacionales de Élite en Terapia Génica',
        relationToLegacy: 'Coautores junto a Jacques P. Tremblay y Marcello Bossois en la revista Molecular Therapy (marzo de 2014).',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
      },
      {
        name: 'Depei Liu',
        role: 'Presidente de la Academia China de Ciencias Médicas',
        relationToLegacy: 'Co-firmante junto al Dr. Marcello Bossois y líderes de Stanford y Harvard entre los 51 signatarios del Manifiesto «Modelo Apollo» (2013).',
      },
      {
        name: 'Ancelmo Gois',
        role: 'Columnista Principal del Diario O Globo',
        relationToLegacy: 'Destacó el 30/04/2013 la participación de Marcello Bossois y Jacques Tremblay en la reunión del Consorcio Internacional de Terapia Génica en EE. UU.',
      },
      {
        name: 'D’Artagnan Baptista Guimarães & Prof. Namoudou Conde',
        role: 'Cónsul General de Guinea y Académico de la Academia de Ciencias de Guinea',
        relationToLegacy: 'Aliados institucionales y científicos en la misión humanitaria y unidad móvil de Brasil Sem Alergia en Conakry, África.',
        url: 'https://www.youtube.com/watch?v=F-e4K2iks8I',
      },
      {
        name: 'Prof. Benoit Tano, MD/PhD',
        role: 'Johns Hopkins University • Fundador de I-AIIM y TayaPro University',
        relationToLegacy: 'Consultor científico en EE. UU. (Minnesota y Dakotas) y socio en el programa global de Inmunidad Integrativa.',
        url: 'https://www.brasilsemalergia.com.br/tayapro-university',
      },
      {
        name: 'Evelyne Coulombe & Escola de Artes Mudart',
        role: 'Cónsul General de Canadá y Colectivo de Inclusión Artística',
        relationToLegacy: 'Participantes en la inauguración del Núcleo de Enfermedades Raras en la Santa Casa (noviembre de 2019, junto al Instituto Butantan).',
        url: 'https://youtube.com/playlist?list=PLjECpMdqeZY1RzfwraUC9k-0xmDc5oOxH',
      },
      {
        name: 'Adalberto Rezende Santos',
        role: 'Investigador Científico (Fiocruz / Brasil Sem Alergia)',
        relationToLegacy: 'Coautor en 2024 del estudio farmacogenómico sobre SNPs en ADRB2 y ADCY9 en pacientes brasileños con asma (PMID 39057056).',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11276142/',
      },
      {
        name: 'Dra. Shilpa Shah, Richard Richardson, Roby Russell & E. Tinoco',
        role: 'Investigadores en Univ. de Mumbai, UT Austin (EE. UU.), UERJ y Unigranrio',
        relationToLegacy: 'Colaboradores internacionales en el estudio autoinmune de H1N1 en gestantes y en la base científica de la Alergia Hormonal.',
        url: 'https://www.sciencedirect.com/science/article/pii/S2666396121000327',
      },
      {
        name: 'Prof. Louis-Philippe Boulet',
        role: 'Presidente de la Global Initiative for Asthma (GINA)',
        relationToLegacy: 'Autoridad mundial invitada por articulación directa del Dr. Marcello Bossois al Simposio de Enfermedades Respiratorias de la Santa Casa (2022).',
      },
      {
        name: 'Dr. Mário Giudicelli, Carl Sagan & Wernher von Braun',
        role: 'Sociobiólogo e Histórico Corresponsal en Núremberg (Exalumno de Sagan y Amigo de von Braun)',
        relationToLegacy: 'El Dr. Bossois fue asesor médico del Dr. Giudicelli desde 2009, accediendo al acervo intelectual inédito de Wernher von Braun (~1970).',
        url: 'https://www.brasilsemalergia.com.br/94-accordion/7192-a-entervista-nunca-publicada-de-wernher-von-braun',
      },
      {
        name: 'Alcione & Matheus Domingues Moreira',
        role: 'Cantante Brasileña Consagrada & Judoca de Deportes Especiales',
        relationToLegacy: 'Símbolos de los programas culturales e inclusivos de la ABBAA: «Música Pra Respirar», «Coral Canto que Cura» y ABBAA Deportes Especiales.',
        url: 'https://www.youtube.com/watch?v=dLoL_bPiZfc',
      },
    ],
  },

  va: {
    badge: 'El Llegat Viu • Rebesnet de Pepe Adell • Espanyol i Brasiler • Carioca i Valencià',
    title:
      'Dr. Marcello Bossois i Dra. Patricia Schlinkert: Lideratge, Humanisme i Llegat en la Medicina Brasilera i Mundial',
    subtitle:
      'Informe biogràfic, científic i humanitari sobre el Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) — rebesnet («trineto») de José Adell y Fons (“Pepe Adell”), ciutadà espanyol i brasiler, carioca de naixement i valencià de sang, i responsable directe de l’elaboració i preservació d’aquest Memorial — al costat de la seua esposa i colíder, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3).',
    curatorshipBannerTitle:
      'Guardià de la Memòria i Responsable de l’Elaboració d’aquest Memorial',
    curatorshipBannerText:
      'Aquest Memorial Humà i Arxiu Històric Digital de José Adell y Fons (1868–1927) ha segut concebut, custodiat i impulsat pel seu rebesnet, el Dr. Marcello Bossois de Melo Ferreira. Més d’un segle després que Pepe Adell fundara societats de beneficència i defensara la dignitat humana a l’antiga Rua da Ajuda de Rio de Janeiro, la quarta generació de la seua sang manté encesa la mateixa flama entre Vinaròs, la Comunitat Valenciana, Espanya i el Brasil.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) i la seua esposa, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3): fundadors i força motriu del Projecte Social Brasil Sem Alergia.',
    bridgeQuote:
      '«La beneficència il·lustrada i l’amor pel proïsme que Pepe Adell sembrà entre València i Rio de Janeiro al segle XIX floreixen hui en una medicina accessible que abraça 10.000 pacients cada mes i tradueix la revolució genòmica per als més vulnerables.»',
    bridgeQuoteAuthor:
      '— Pont generacional Adell–Bossois–Ferreira–Schlinkert (1868 – Present)',
    stats: [
      { value: '~10.000', label: 'Pacients Atesos / Mes' },
      { value: '2007', label: 'Fundació Brasil Sem Alergia' },
      { value: '51', label: 'Signants Mundials Model Apollo' },
      { value: '4a Gen.', label: 'Llinatge Viu de Pepe Adell' },
    ],
    homeSummaryLead:
      'Conegueu la història completa del responsable de l’elaboració d’aquest Memorial: el Dr. Marcello Bossois — rebesnet de Pepe Adell, espanyol i brasiler, carioca i valencià — i la seua esposa, la Dra. Patricia Frozi Schlinkert. Fill del reconegut geriatre Dr. Vanuzio Ferreira i de la pediatra Dra. Lúcia Bossois, i unit al llegat empresarial de Lauro Schlinkert i Adma Schlinkert, el matrimoni lidera el Projecte Social Brasil Sem Alergia (~10.000 atesos/mes al Brasil, Àfrica i els EUA) mentre impulsa la Teràpia Gènica, el Manifest «Model Apollo» i l’edició genètica CRISPR-Cas9.',
    homeSummaryBullets: [
      'Llinatge i Vocació: Rebesnet de José Adell y Fons, fill dels metges Dr. Vanuzio Ferreira i Dra. Lúcia Bossois; casat amb la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3), metgessa militar a l’Hospital Central de l’Exèrcit (HCE), al·lergòloga, immunòloga, auditora mèdica i filla dels empresaris Lauro Schlinkert i Adma Schlinkert.',
      'Impacte Social i Global: Fundadors del Projecte Social Brasil Sem Alergia (Duque de Caxias, Realengo, Nova Iguaçu, Itaguaí, Xerém, Niterói-Fonseca, Iguaba Grande, São Pedro da Aldeia, Curitiba, Clíniques-Autobús, missió humanitària a Conakry, Guinea, amb D’Artagnan Baptista Guimarães i el Prof. Namoudou Conde, i actuació als EUA amb el Prof. Benoit Tano).',
      'Avantguarda Genòmica i CRISPR-Cas9: Investigador a la Université Laval amb el Prof. Jacques P. Tremblay (2010–2015), coautor a Molecular Therapy (2014), articulador entre els 51 signants mundials del Manifest «Model Apollo» (2013, destacat per Ancelmo Gois a O Globo), patent pionera CRISPR/Cas9 per a l’Alzheimer precoç, Nucli de Malalties Rares a la Santa Casa (2019) i estudis genètics d’asma (2024) i H1N1.',
      'Ciència Integrativa, Sociobiologia i Cultura: Immunitat Integrativa i Al·lèrgia Hormonal (amb la Dra. Shilpa Shah i el Prof. Benoit Tano), assessoria mèdica en Sociobiologia a l’històric periodista de Nuremberg Dr. Mário Giudicelli (amic de Wernher von Braun), «Música Pra Respirar» amb Alcione, Coral «Canto que Cura» i ABBAA Esports Especials (judoka Matheus Domingues Moreira).',
    ],
    homeCtaBtn: 'Llegir l’Informe Complet del Dr. Marcello Bossois i la Dra. Patricia Schlinkert →',
    chapters: [
      {
        id: 'llinatge-formacio',
        roman: 'I',
        kicker: 'Arrels Hispano-Brasileres, Família i Formació Mèdica',
        title:
          'Llinatge, Formació Rigorosa i Convergència Familiar: Adell, Bossois-Ferreira i Schlinkert',
        lead:
          'Rebesnet de José Adell y Fons («Pepe Adell»), el Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) encarna al segle XXI la doble identitat espanyola i brasilera — profundament carioca i orgullosament valenciana — que donà origen a la seua família, havent assumit personalment la responsabilitat d’elaborar i preservar aquest Memorial històric.',
        paragraphs: [
          'La trajectòria del Dr. Marcello Bossois i de la seua esposa, la Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3), uneix arrels profundes en sectors pilars de la societat: la tradició mèdica humanista i la força estratègica de l’empresariat brasiler. El Dr. Marcello Bossois de Melo Ferreira porta el compromís clínic a la sang: és fill del reconegut geriatre Dr. Vanuzio Ferreira i de la metgessa pediatra Dra. Lúcia Bossois, baula familiar directa amb el llegat hispano-valencià de Pepe Adell.',
          'Al seu torn, a més de la seua destacada actuació clínica i institucional, la Dra. Patricia Frozi Schlinkert aporta el llegat dels seus pares, Lauro Schlinkert i Adma Schlinkert, figures de relleu i importants exponents de l’empresariat brasiler. Aquesta herència de visió estratègica, governança i capacitat de gestió es reflecteix directament en l’eficàcia i expansió nacional i internacional del Projecte Social Brasil Sem Alergia, del qual és cofundadora i força motriu al costat del seu espòs.',
          'Versàtil en les esferes social i institucional, la Dra. Patricia Frozi Schlinkert és metgessa militar en servei a l’Hospital Central de l’Exèrcit (HCE), combinant la pràctica clínica en Al·lèrgia i Immunologia amb l’actuació estratègica en Auditoria Mèdica. La unió de les famílies Bossois-Ferreira i Schlinkert simbolitza així la convergència entre tradició clínica, dinamisme empresarial i innovació científica.',
          'L’actuació mèdica del Dr. Marcello Bossois (CRM/RJ 732141) es fonamenta en una formació rigorosa: graduat en Medicina per la Universidade Gama Filho (1996–2002), s’especialitzà en Al·lèrgia i Immunologia al prestigiós Servei de la Santa Casa da Misericórdia do Rio de Janeiro. A l’inici de la seua carrera serví també com a metge militar a l’Hospital Central de l’Exèrcit — HCE (2003–2008) i exercí a l’Hospital de Clínicas Mário Lioni.',
        ],
        bulletPoints: [
          {
            title: 'Públic i Malalties Respiratòries Cròniques',
            text: 'Atén pacients a partir dels dos anys d’edat en malalties d’hipersensibilitat, incloent-hi Asma, Rinitis Al·lèrgica i Bronquitis, amb focus estratègic a Duque de Caxias i Rio de Janeiro davant l’alta incidència respiratòria associada a la contaminació ambiental de la refineria REDUC.',
          },
          {
            title: 'Condicions Cutànies i Immunologia Clínica',
            text: 'Diagnòstic i tractament especialitzat de Dermatitis Atòpica, Dermatitis de Contacte, Urticària, Immunodeficiències i Anafilaxi.',
          },
          {
            title: 'Al·lèrgies Específiques',
            text: 'Maneig clínic d’Al·lèrgies Alimentàries, a Medicaments i a Picades d’Insectes (Prurigo Estròful).',
          },
        ],
        links: [
          {
            badge: 'Vídeo Institucional',
            label: 'Especialització en Al·lèrgia i Immunologia — Santa Casa da Misericórdia do Rio de Janeiro',
            url: 'https://www.youtube.com/watch?v=6Zhb3T8UiCM',
          },
          {
            badge: 'Arxiu HCE',
            label: 'Actuació com a Metge Militar a l’Hospital Central de l’Exèrcit (2003–2008)',
            url: 'https://www.youtube.com/watch?v=e_G8AhkuArc',
          },
        ],
      },
      {
        id: 'brasil-sem-alergia',
        roman: 'II',
        kicker: 'Utilitat Pública i Acció Humanitària Sense Fronteres',
        title:
          'El Pilar del Projecte Social Brasil Sem Alergia: Accés Gratuït i Expansió en Tres Continents',
        lead:
          'Idealitzat pel Dr. Marcello Bossois el 2007 davant la necessitat urgent d’assistència mèdica a Duque de Caxias i enfortit pel colideratge de la Dra. Patricia Frozi Schlinkert, el Projecte Social Brasil Sem Alergia assisteix hui prop de 10.000 persones cada mes.',
        paragraphs: [
          'Fidel a l’esperit solidari de les obres benèfiques impulsades pel seu rebesavi Pepe Adell al Rio de Janeiro del segle XIX, el projecte democratitza el tractament immunològic i al·lergològic per a les famílies de baixa renda, complementant el Sistema Únic de Salut (SUS).',
          'Les consultes mèdiques i el Test Bàsic d’Al·lèrgia (Prick Test per a al·lèrgia respiratòria i insectes) són totalment gratuïts en diverses unitats, mentre que proves específiques (Patch Test) i les vacunes d’Immunoteràpia s’ofereixen a preus populars per garantir la sostenibilitat de la iniciativa.',
          'La xarxa abasta unitats fixes a Rio de Janeiro — Duque de Caxias, Realengo, Nova Iguaçu, Itaguaí, Xerém, Niterói (Fonseca), Iguaba Grande i São Pedro da Aldeia —, presència en altres estats com Curitiba (Paranà) i Clíniques-Autobús itinerants per tot el Brasil.',
          'A escala global, obrí una unitat mòbil a Conakry, República de Guinea (Àfrica), amb el suport del Cònsol General de Guinea, D’Artagnan Baptista Guimarães, i en aliança amb el Prof. Namoudou Conde (Acadèmia de Ciències de Guinea), enviant un autobús ambulatori per promoure salut, assistència, recerca i educació. Així mateix, actua als Estats Units en col·laboració amb el Professor Benoit Tano (Johns Hopkins University), consultor científic i docent a Minnesota, Dakota del Nord i Dakota del Sud.',
        ],
        links: [
          {
            badge: 'Missió Àfrica',
            label: 'Obertura d’Unitat Mòbil a Conakry, República de Guinea',
            url: 'https://www.youtube.com/watch?v=23Qxa0uZ71E',
          },
          {
            badge: 'Acadèmia de Ciències de Guinea',
            label: 'Aliança Humanitària i Científica amb el Prof. Namoudou Conde',
            url: 'https://www.youtube.com/watch?v=F-e4K2iks8I',
          },
          {
            badge: 'Autobús Ambulatori',
            label: 'Enviament de l’Autobús Ambulatori a la Missió a l’Àfrica',
            url: 'https://youtube.com/shorts/xqEHc3YJX2k',
          },
          {
            badge: 'Estats Units',
            label: 'Actuació als EUA amb el Prof. Benoit Tano (Johns Hopkins)',
            url: 'https://www.brasilsemalergia.com.br/clinicas/cl%C3%ADnica-estados-unidos',
          },
        ],
      },
      {
        id: 'pionerisme-genomic-apollo-crispr',
        roman: 'III',
        kicker: 'Teràpia Gènica, Manifest «Model Apollo» i CRISPR-Cas9',
        title:
          'De la Université Laval al Cim de la Ciència Genòmica Mundial i l’Avantguarda CRISPR al Brasil',
        lead:
          'El Dr. Marcello Bossois s’establí com un dels principals traductors de la revolució genòmica al Brasil, unint la seua formació al Canadà amb fites pioneres en Teràpia Gènica i edició d’ADN mitjançant CRISPR-Cas9.',
        paragraphs: [
          'Entre 2010 i 2015 realitzà estudis al Canadà com a assistent de recerca del reconegut Professor Jacques P. Tremblay a la Université Laval (Québec), associant-se també amb l’empresa canadenca Cell Gene Therapeutics. El març de 2014 fou coautor de l’article «Development of a web course on gene therapy by the international consortium of gene therapy», publicat a la revista Molecular Therapy al costat d’acadèmics d’elit com Jacques P. Tremblay, Annemieke Aartsma-Rus, Juan Bueren i Johnny Huard.',
          'El febrer de 2013 fou articulador i un dels 51 signants mundials del Manifest «Translating the Genomics Revolution: The Need for an International Gene Therapy Consortium for Monogenic Diseases» — el «Model Apollo» per a la Medicina —, juntament amb líders com Depei Liu (aleshores President de l’Acadèmia Xinesa de Ciències Mèdiques) i investigadors de Stanford, Harvard i grans laboratoris europeus. Inspirat en el Projecte Apollo de la NASA, proposà un consorci internacional per desenvolupar cures per a prop de 10.000 malalties hereditàries monogèniques (distròfia muscular de Duchenne, hemofília, fibrosi quística) en dues dècades, centralitzant vectors virals (AAV) i oligonucleòtids, compartint infraestructura i impulsant models públics sostenibles.',
          'El 30 d’abril de 2013, la prestigiosa columna d’Ancelmo Gois al diari O Globo destacà aquest lideratge internacional: «Consórcio Internacional de Terapia Gênica se reúne, mês que vem, nos EUA, com participação de Jacques Tremblay e Marcello Bossois» (cimera de maig de 2013 durant el congrés de l’ASGCT als EUA).',
          'Al Brasil, amb suport de l’ABBAA i en col·laboració contínua amb el Dr. Jacques P. Tremblay, desenvolupà un Test Ràpid CRISPR per a la COVID-19 destinat a detectar variants en àrees remotes i països en desenvolupament, i protagonitzà un dels primers dipòsits de patent al Brasil utilitzant CRISPR/Cas9 (base editing) per a la prevenció i el tractament de l’Alzheimer precoç.',
          'A la Santa Casa da Misericórdia do Rio de Janeiro liderà tres fites cabdals: l’organització el 2016 del Simposi Internacional de Teràpia Gènica (amb la Université Laval, universitats japoneses i organitzacions franceses); la signatura el 2018 del contracte oficial de col·laboració científica entre la Santa Casa i la Université Laval; i la inauguració el novembre de 2019 del Nucli per al Tractament de Malalties Rares, amb la presència de la Cònsol General del Canadà, Evelyne Coulombe, representants del Ministeri de la Dona, la Família i els Drets Humans i de l’Institut Butantan, celebrada amb una mostra cultural de pacients especials de l’Escola de Artes Mudart.',
        ],
        highlightBox: {
          title: 'Nota Històrica a O Globo — Columna Ancelmo Gois (30 d’abril de 2013)',
          text: '«Consórcio Internacional de Terapia Gênica se reúne, mês que vem, nos EUA, com participação de Jacques Tremblay e Marcello Bossois.» — Reconeixement públic nacional a la seua actuació en l’avantguarda genòmica internacional.',
        },
        links: [
          {
            badge: 'PubMed • Molecular Therapy (2014)',
            label: 'Development of a web course on gene therapy by the international consortium of gene therapy',
            url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
          },
          {
            badge: 'CRISPR COVID-19 & Patent Alzheimer',
            label: 'Recerques en Curs i Dipòsit de Patent CRISPR/Cas9 — ABBAA',
            url: 'https://www.brasilsemalergia.com.br/abbaa/pesquisas-em-andamento',
          },
          {
            badge: 'Simposi 2016',
            label: 'Simposi Internacional de Teràpia Gènica a Rio de Janeiro (Santa Casa)',
            url: 'https://www.youtube.com/watch?v=PZGUPEQAdWg',
          },
          {
            badge: 'Acord 2018',
            label: 'Contracte de Col·laboració Científica Santa Casa do RJ & Université Laval',
            url: 'https://youtu.be/6Zhb3T8UiCM',
          },
          {
            badge: 'Nucli Malalties Rares (2019)',
            label: 'Inauguració del Nucli amb el Canadà, Institut Butantan i Cònsol Evelyne Coulombe',
            url: 'https://youtube.com/playlist?list=PLjECpMdqeZY1RzfwraUC9k-0xmDc5oOxH',
          },
          {
            badge: 'Inclusió Cultural (2019)',
            label: 'Mostra Cultural de Pacients Especials — Escola de Artes Mudart',
            url: 'https://youtu.be/HfkWtX2n8-s',
          },
        ],
      },
      {
        id: 'genetica-immunitat-integrativa',
        roman: 'IV',
        kicker: 'Medicina Personalitzada, Asma, H1N1 i Immunitat Integrativa',
        title:
          'Recerques Genètiques Actuals (SNPs), Al·lèrgia Hormonal i Xarxes Científiques Globals',
        lead:
          'Des de la genètica de l’asma en pacients brasilers fins a la intersecció entre immunologia i endocrinologia, el Dr. Marcello Bossois articula consorcis científics amb els EUA, el Canadà, l’Índia i el Brasil.',
        paragraphs: [
          'El 2024 fou coautor amb Adalberto Rezende Santos (Fiocruz / Brasil Sem Alergia) d’un estudi indexat a PubMed Central (PMC11276142 / PMID 39057056) sobre les Variacions de Nucleòtid Únic (SNPs) en els gens ADRB2 i ADCY9 en pacients brasilers amb asma atesos a Brasil Sem Alergia, predient la resposta individual als broncodilatadors per a una medicina personalitzada.',
          'També participa en una recerca internacional sobre una condició endocrina autoimmunitària en dones embarassades infectades pel virus H1N1, al costat de Richard Richardson i Roby Russell (Universitat de Texas a Austin, EUA), la Dra. Shilpa Shah (Universitat de Mumbai, Índia) i E. Tinoco (UERJ i Unigranrio, Brasil).',
          'Mitjançant la metodologia d’«Immunitat Integrativa», i amb la col·laboració científica de la Dra. Shilpa Shah sobre la influència hormonal en al·lèrgies autoimmunitàries, estudia l’«Al·lèrgia Hormonal» (IgE contra autoantígens hormonals units a proteïnes en quadres cíclics com asma premenstrual, migranya menstrual, fatiga crònica i fibromiàlgia, tractats amb tests cutanis d’hormones bioidèntiques i Immunoteràpia Hormonal Sublingual).',
          'El Prof. Benoit Tano, MD/PhD (Johns Hopkins University), fundador de l’Integrative Immunity Health System (Minnesota) i de la I-AIIM, i autor de The Layman’s Guide to Integrative Immunity (2016) i Hormone Syndrome: America’s Silent Plague (2012), actua com a Consultor Científic. La joint venture entre l’ABBAA i TayaPro University patrocina el primer Curs d’Immunologia Integrativa per a metges el primer trimestre de 2026.',
          'Al Simposi de Malalties Respiratòries de 2022 a la Santa Casa de Rio de Janeiro, el Dr. Bossois articulà directament la presència del Professor Louis-Philippe Boulet (President de la Global Initiative for Asthma — GINA), del Professor Benoit Tano i del Professor Jacques P. Tremblay.',
        ],
        links: [
          {
            badge: 'PubMed Central (2024 • PMID 39057056)',
            label: 'Variacions Genètiques (SNPs en ADRB2 i ADCY9) en Pacients Brasilers amb Asma',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11276142/',
          },
          {
            badge: 'Recerca Internacional H1N1',
            label: 'Condició Endocrina Autoimmunitària en Gestants amb H1N1 (UT Austin, Mumbai, UERJ)',
            url: 'https://go.gale.com/ps/i.do?id=GALE%7CA398207823&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=22784292&p=HRCA&sw=w&userGroupName=anon%7E5336bed9&aty=open-web-entry',
          },
          {
            badge: 'ScienceDirect • Dra. Shilpa Shah',
            label: 'Fonamentació Científica de la Influència Hormonal en Al·lèrgies Autoimmunitàries',
            url: 'https://www.sciencedirect.com/science/article/pii/S2666396121000327',
          },
          {
            badge: 'TayaPro University',
            label: 'Immunitat Integrativa i Formació Mèdica Internacional (ABBAA & TayaPro)',
            url: 'https://www.brasilsemalergia.com.br/tayapro-university',
          },
        ],
      },
      {
        id: 'sociobiologia-cultura-esport',
        roman: 'V',
        kicker: 'Sociobiologia, Història del Segle XX, Música i Esport Inclusiu',
        title:
          'Col·laboració amb el Dr. Mário Giudicelli (Wernher von Braun) i Accions Culturals de l’ABBAA',
        lead:
          'La sensibilitat humanista heretada de Pepe Adell es projecta també en el diàleg del Dr. Marcello Bossois amb la memòria històrica del segle XX, la música popular brasilera i l’esport inclusiu.',
        paragraphs: [
          'A partir de 2009 actuà com a assessor mèdic del Dr. Mário Giudicelli en projectes de Sociobiologia (Etologia). Mestre en Sociobiologia per la Universitat de Connecticut (1973) i exalumne de Carl Sagan, el Dr. Giudicelli treballà més de 20 anys a la Casa Blanca i a la DEA, fou traductor simultani diplomàtic dels presidents George Bush (pare) i Ronald Reagan, corresponsal de guerra (1945–1946) i l’únic periodista viu present durant tot l’any i mig del Tribunal de Nuremberg.',
          'Gràcies a aquesta assessoria, el Dr. Bossois conegué profundament el pensament científic de Wernher von Braun — figura clau del programa Apollo de la NASA —, a qui el Dr. Giudicelli entrevistà cap al 1970 en una conversa inèdita i amb qui mantenia una estreta amistat.',
          'Per mitjà de l’ABBAA (Associació Brasilera d’Assistència a l’Asmàtic i Al·lèrgic), impulsa iniciatives que uneixen salut, cultura i esport: «Música Pra Respirar» amb la gran cantant Alcione i Pague Menos (exercicis melòdics de fisioteràpia respiratòria per a asma i MPOC); el «Coral Canto que Cura» (cant terapèutic per a pacients respiratoris); i ABBAA Esports Especials, patrocinant atletes com el judoka amb Síndrome de Down Matheus Domingues Moreira.',
        ],
        links: [
          {
            badge: 'Document Històric (~1970)',
            label: 'L’Entrevista Mai Publicada de Wernher von Braun pel Dr. Mário Giudicelli',
            url: 'https://www.brasilsemalergia.com.br/94-accordion/7192-a-entervista-nunca-publicada-de-wernher-von-braun',
          },
          {
            badge: 'Alcione & ABBAA',
            label: 'Projecte Terapèutic «Música Pra Respirar» amb la cantant Alcione',
            url: 'https://www.youtube.com/watch?v=dLoL_bPiZfc',
          },
          {
            badge: 'Cant Terapèutic',
            label: 'Coral Brasil Sem Alergia — «Coral Canto que Cura»',
            url: 'https://www.brasilsemalergia.com.br/abbaa/coral-brasil-sem-alergia',
          },
          {
            badge: 'Esport Inclusiu',
            label: 'ABBAA Esports Especials — Patrocini al judoka Matheus Domingues Moreira',
            url: 'https://www.brasilsemalergia.com.br/abbaa/abbaa-esportes-especiais',
          },
        ],
      },
    ],
    clinicUnitsTitle: 'Xarxa d’Unitats Clíniques, Autobusos Itinerants i Missions Internacionals',
    clinicUnitsSubtitle:
      'A més d’Iguaba Grande, São Pedro da Aldeia (RJ) i Curitiba (PR), accediu directament a les principals seus i fronts internacionals de Brasil Sem Alergia:',
    encyclopediaTitle: 'Enciclopèdia Mèdica i Educació Científica Continuada',
    peopleDirectoryTitle:
      'Quadre d’Honor: Familiars, Científics i Personalitats Vinculades a la seua Trajectòria',
    peopleDirectorySubtitle:
      'Registre nominal íntegre de totes les personalitats familiars, mèdiques, científiques, diplomàtiques i culturals que integren aquesta història:',
    peopleDirectory: [
      {
        name: 'José Adell y Fons («Pepe Adell», 1868–1927)',
        role: 'Periodista, Mestre Gravador i Patriarca Valencià a Rio de Janeiro',
        relationToLegacy: 'Rebesavi del Dr. Marcello Bossois i inspiració ètica i humanitària d’aquest Memorial.',
      },
      {
        name: 'Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141)',
        role: 'Al·lergòleg, Immunòleg, Investigador en Teràpia Gènica i CRISPR-Cas9',
        relationToLegacy: 'Rebesnet de Pepe Adell (espanyol i brasiler, carioca i valencià), fundador de Brasil Sem Alergia i responsable de l’elaboració d’aquest Memorial.',
      },
      {
        name: 'Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3)',
        role: 'Metgessa Militar (HCE), Al·lergòloga, Immunòloga i Auditora Mèdica',
        relationToLegacy: 'Esposa del Dr. Marcello Bossois, cofundadora i colíder estratègica del Projecte Social Brasil Sem Alergia.',
      },
      {
        name: 'Dr. Vanuzio Ferreira',
        role: 'Reconegut Metge Geriatre',
        relationToLegacy: 'Pare del Dr. Marcello Bossois de Melo Ferreira, pilar de la seua tradició mèdica familiar.',
      },
      {
        name: 'Dra. Lúcia Bossois',
        role: 'Metgessa Pediatra',
        relationToLegacy: 'Mare del Dr. Marcello Bossois i baula directa de la nissaga familiar Bossois / Adell.',
      },
      {
        name: 'Lauro Schlinkert & Adma Schlinkert',
        role: 'Destacats Exponents de l’Empresariat Brasiler',
        relationToLegacy: 'Pares de la Dra. Patricia Frozi Schlinkert, amb una herència de visió estratègica i gestió exemplar.',
      },
      {
        name: 'Prof. Dr. Jacques P. Tremblay',
        role: 'Catedràtic i Genetista — Université Laval (Canadà) & Cell Gene Therapeutics',
        relationToLegacy: 'Mentor científic del Dr. Marcello Bossois (2010–2015) i soci en Teràpia Gènica i CRISPR-Cas9.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
      },
      {
        name: 'Annemieke Aartsma-Rus, Juan Bueren & Johnny Huard',
        role: 'Investigadors Internacionals d’Elit en Teràpia Gènica',
        relationToLegacy: 'Coautors amb Jacques P. Tremblay i Marcello Bossois a Molecular Therapy (març de 2014).',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
      },
      {
        name: 'Depei Liu',
        role: 'President de l’Acadèmia Xinesa de Ciències Mèdiques',
        relationToLegacy: 'Cosignant amb el Dr. Marcello Bossois i líders de Stanford i Harvard entre els 51 signants del Manifest «Model Apollo» (2013).',
      },
      {
        name: 'Ancelmo Gois',
        role: 'Columnista Principal del Diari O Globo',
        relationToLegacy: 'Destacà el 30/04/2013 la participació de Marcello Bossois i Jacques Tremblay a la reunió del Consorci Internacional als EUA.',
      },
      {
        name: 'D’Artagnan Baptista Guimarães & Prof. Namoudou Conde',
        role: 'Cònsol General de Guinea i Acadèmic de l’Acadèmia de Ciències de Guinea',
        relationToLegacy: 'Aliats en la missió humanitària i unitat mòbil de Brasil Sem Alergia a Conakry, Àfrica.',
        url: 'https://www.youtube.com/watch?v=F-e4K2iks8I',
      },
      {
        name: 'Prof. Benoit Tano, MD/PhD',
        role: 'Johns Hopkins University • Fundador d’I-AIIM i TayaPro University',
        relationToLegacy: 'Consultor científic als EUA (Minnesota i Dakotes) i soci en el programa d’Immunitat Integrativa.',
        url: 'https://www.brasilsemalergia.com.br/tayapro-university',
      },
      {
        name: 'Evelyne Coulombe & Escola de Artes Mudart',
        role: 'Cònsol General del Canadà i Col·lectiu d’Inclusió Artística',
        relationToLegacy: 'Participants en la inauguració del Nucli de Malalties Rares a la Santa Casa (novembre de 2019, amb l’Institut Butantan).',
        url: 'https://youtube.com/playlist?list=PLjECpMdqeZY1RzfwraUC9k-0xmDc5oOxH',
      },
      {
        name: 'Adalberto Rezende Santos',
        role: 'Investigador Científic (Fiocruz / Brasil Sem Alergia)',
        relationToLegacy: 'Coautor el 2024 de l’estudi sobre SNPs en ADRB2 i ADCY9 en pacients brasilers amb asma (PMID 39057056).',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11276142/',
      },
      {
        name: 'Dra. Shilpa Shah, Richard Richardson, Roby Russell & E. Tinoco',
        role: 'Investigadors a Univ. de Mumbai, UT Austin (EUA), UERJ i Unigranrio',
        relationToLegacy: 'Col·laboradors en l’estudi autoimmunitari d’H1N1 en gestants i en la fonamentació de l’Al·lèrgia Hormonal.',
        url: 'https://www.sciencedirect.com/science/article/pii/S2666396121000327',
      },
      {
        name: 'Prof. Louis-Philippe Boulet',
        role: 'President de la Global Initiative for Asthma (GINA)',
        relationToLegacy: 'Autoritat mundial convidada per articulació directa del Dr. Marcello Bossois al Simposi de la Santa Casa (2022).',
      },
      {
        name: 'Dr. Mário Giudicelli, Carl Sagan & Wernher von Braun',
        role: 'Sociobiòleg i Històric Corresponsal a Nuremberg (Exalumne de Sagan i Amic de von Braun)',
        relationToLegacy: 'El Dr. Bossois fou assessor mèdic del Dr. Giudicelli des de 2009, coneixent l’entrevista inèdita de Wernher von Braun (~1970).',
        url: 'https://www.brasilsemalergia.com.br/94-accordion/7192-a-entervista-nunca-publicada-de-wernher-von-braun',
      },
      {
        name: 'Alcione & Matheus Domingues Moreira',
        role: 'Cantant Brasilera Consagrada & Judoka d’Esports Especials',
        relationToLegacy: 'Símbols dels programes culturals i inclusius de l’ABBAA: «Música Pra Respirar», «Coral Canto que Cura» i ABBAA Esports Especials.',
        url: 'https://www.youtube.com/watch?v=dLoL_bPiZfc',
      },
    ],
  },

  pt: {
    badge: 'O Legado Vivo • Trineto de Pepe Adell • Espanhol e Brasileiro • Carioca e Valenciano',
    title:
      'Dr. Marcello Bossois e Dra. Patricia Schlinkert: Liderança, Humanismo e Legado na Medicina Brasileira e Mundial',
    subtitle:
      'Relatório biográfico, científico e humanitário sobre o Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) — trineto de José Adell y Fons (“Pepe Adell”), cidadão espanhol e brasileiro, carioca de nascimento e valenciano de sangue, e o grande responsável pela elaboração e preservação deste Memorial — ao lado de sua esposa e colíder, a Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3).',
    curatorshipBannerTitle:
      'Guardião da Memória e Responsável pela Elaboração deste Memorial',
    curatorshipBannerText:
      'Este Memorial Humano e Acervo Histórico Digital de José Adell y Fons (1868–1927) foi idealizado, custodiado e elaborado sob a responsabilidade direta de seu trineto, o Dr. Marcello Bossois de Melo Ferreira. Mais de um século depois de Pepe Adell fundar associações beneficentes e defender a dignidade humana na antiga Rua da Ajuda, no Rio de Janeiro, a quarta geração de seu sangue mantém acesa a mesma chama entre Vinaròs, Valência, Espanha e Brasil.',
    photoCaption:
      'Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) e sua esposa, a Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3): fundadores e força motriz do Projeto Social Brasil Sem Alergia.',
    bridgeQuote:
      '“A beneficência esclarecida e o amor ao próximo que Pepe Adell semeou entre Valência e o Rio de Janeiro no século XIX florescem hoje em uma medicina acessível que abraça 10.000 pacientes por mês e traduz a revolução genômica para os mais vulneráveis.”',
    bridgeQuoteAuthor:
      '— Ponte geracional Adell–Bossois–Ferreira–Schlinkert (1868 – Presente)',
    stats: [
      { value: '~10.000', label: 'Pessoas Assistidas / Mês' },
      { value: '2007', label: 'Fundação Brasil Sem Alergia' },
      { value: '51', label: 'Signatários Mundiais Modelo Apollo' },
      { value: '4ª Ger.', label: 'Linhagem Viva de Pepe Adell' },
    ],
    homeSummaryLead:
      'Conheça a trajetória completa do responsável pela elaboração deste Memorial: o Dr. Marcello Bossois — trineto de Pepe Adell, espanhol e brasileiro, carioca e valenciano — e sua esposa, a Dra. Patricia Frozi Schlinkert. Filho do renomado geriatra Dr. Vanuzio Ferreira e da pediatra Dra. Lúcia Bossois, e unido ao legado empresarial de Lauro Schlinkert e Adma Schlinkert, o casal lidera o Projeto Social Brasil Sem Alergia (~10.000 atendimentos/mês no Brasil, África e EUA) enquanto protagoniza avanços mundiais em Terapia Gênica, no Manifesto “Modelo Apollo” e na tecnologia CRISPR-Cas9.',
    homeSummaryBullets: [
      'Linhagem e Vocação: Trineto de José Adell y Fons, filho dos médicos Dr. Vanuzio Ferreira e Dra. Lúcia Bossois; casado com a Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3), médica militar no Hospital Central do Exército (HCE), alergista, imunologista, auditora médica e filha dos empresários Lauro Schlinkert e Adma Schlinkert.',
      'Impacto Social e Global: Fundadores do Projeto Social Brasil Sem Alergia (Duque de Caxias, Realengo, Nova Iguaçu, Itaguaí, Xerém, Niterói-Fonseca, Iguaba Grande, São Pedro da Aldeia, Curitiba, Clínicas-Ônibus, missão humanitária em Conacri, Guiné, com D’Artagnan Baptista Guimarães e o Prof. Namoudou Conde, e atuação nos EUA com o Prof. Benoit Tano).',
      'Pioneirismo Genômico e CRISPR-Cas9: Pesquisador na Université Laval com o Prof. Jacques P. Tremblay (2010–2015), coautor na revista Molecular Therapy (2014), articulador entre os 51 signatários globais do Manifesto “Modelo Apollo” (2013, destacado por Ancelmo Gois em O Globo), patente pioneira CRISPR/Cas9 para Alzheimer precoce, Núcleo de Doenças Raras na Santa Casa (2019) e pesquisas genéticas sobre asma (2024) e H1N1.',
      'Imunidade Integrativa, Sociobiologia e Cultura: Estudo da Alergia Hormonal (com a Dra. Shilpa Shah e o Prof. Benoit Tano), assessoria médica em Sociobiologia ao histórico jornalista de Nuremberg Dr. Mário Giudicelli (amigo de Wernher von Braun), “Música Pra Respirar” com Alcione, Coral “Canto que Cura” e ABBAA Esportes Especiais (judoca Matheus Domingues Moreira).',
    ],
    homeCtaBtn: 'Ler o Relatório Completo do Dr. Marcello Bossois e da Dra. Patricia Schlinkert →',
    chapters: [
      {
        id: 'linhagem-formacao',
        roman: 'I',
        kicker: 'Raízes Hispano-Brasileiras, Família e Formação Médica',
        title:
          'Linhagem, Formação Rigorosa e Convergência Familiar: Adell, Bossois-Ferreira e Schlinkert',
        lead:
          'Trineto de José Adell y Fons (“Pepe Adell”), o Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141) personifica no século XXI a dupla nacionalidade e identidade espanhola e brasileira — profundamente carioca e orgulhosamente valenciana — herdada de seu trisavô, tendo sido o responsável direto pela idealização e elaboração deste Memorial histórico.',
        paragraphs: [
          'A trajetória do Dr. Marcello Bossois e de sua esposa, a Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3), é marcada por raízes profundas em setores pilares da sociedade brasileira, unindo a tradição médica humanista à força estratégica do empresariado. Com o compromisso clínico enraizado na família, o Dr. Marcello Bossois de Melo Ferreira é filho do renomado geriatra Dr. Vanuzio Ferreira e da médica pediatra Dra. Lúcia Bossois — elo direto da linhagem Bossois com o sangue valenciano de Pepe Adell —, pautando sua carreira pela excelência acadêmica e pela pesquisa em áreas de fronteira como Epigenética e Terapia Gênica.',
          'Ao seu lado, além de destacada atuação clínica, a Dra. Patricia Frozi Schlinkert traz consigo o legado de seus pais, Lauro Schlinkert e Adma Schlinkert, figuras de destaque e importantes expoentes no empresariado brasileiro. Essa herança de visão estratégica, governança e gestão reflete-se diretamente na eficácia e expansão do Projeto Social Brasil Sem Alergia, do qual é cofundadora e força motriz ao lado do marido.',
          'Versátil tanto na esfera social quanto na institucional, a Dra. Patricia Frozi Schlinkert é médica militar, servindo no Hospital Central do Exército (HCE), com sólida experiência clínica em Alergia e Imunologia e atuação estratégica em Auditoria Médica. A união das famílias Bossois-Ferreira e Schlinkert simboliza a convergência entre tradição clínica, dinamismo empresarial e inovação científica a serviço da sociedade.',
          'A prática médica do Dr. Marcello Bossois (CRM/RJ 732141) apoia-se em formação rigorosa: graduado em Medicina pela Universidade Gama Filho (1996–2002), especializou-se em Alergia e Imunologia no renomado Serviço da Santa Casa da Misericórdia do Rio de Janeiro. No início de sua carreira, serviu como médico militar no Hospital Central do Exército — HCE (2003–2008) e atuou no Hospital de Clínicas Mário Lioni.',
        ],
        bulletPoints: [
          {
            title: 'Público-Alvo e Doenças Respiratórias Crônicas',
            text: 'Atende pacientes a partir dos dois anos de idade em Doenças de Hipersensibilidade, incluindo Asma, Rinite Alérgica e Bronquite, com foco estratégico em Duque de Caxias e no Rio de Janeiro — região de alta incidência respiratória agravada por fatores ambientais como a poluição da REDUC.',
          },
          {
            title: 'Condições Cutâneas e Imunologia',
            text: 'Diagnóstico e manejo de Dermatite Atópica, Dermatite de Contato, Urticária, Imunodeficiências e quadros graves de Anafilaxia.',
          },
          {
            title: 'Alergias Específicas',
            text: 'Tratamento especializado de Alergias Alimentares, Alergias a Medicamentos e Alergias a Insetos (Prurigo Estrófulo).',
          },
        ],
        links: [
          {
            badge: 'Vídeo Institucional',
            label: 'Especialização em Alergia e Imunologia — Santa Casa da Misericórdia do Rio de Janeiro',
            url: 'https://www.youtube.com/watch?v=6Zhb3T8UiCM',
          },
          {
            badge: 'Registro HCE',
            label: 'Atuação como Médico Militar no Hospital Central do Exército (2003–2008)',
            url: 'https://www.youtube.com/watch?v=e_G8AhkuArc',
          },
        ],
      },
      {
        id: 'brasil-sem-alergia',
        roman: 'II',
        kicker: 'Utilidade Pública e Ação Humanitária Sem Fronteiras',
        title:
          'O Pilar do Projeto Social Brasil Sem Alergia: Acesso Gratuito e Expansão em Três Continentes',
        lead:
          'Idealizado pelo Dr. Marcello Bossois em 2007 diante da necessidade urgente de assistência médica em Duque de Caxias e fortalecido pela coliderança da Dra. Patricia Frozi Schlinkert, o Projeto Social Brasil Sem Alergia assiste cerca de 10.000 pessoas por mês.',
        paragraphs: [
          'Honrando a mesma vocação pública e beneficente que seu trisavô Pepe Adell exerceu no Rio de Janeiro da virada do século XIX para o XX, o projeto democratiza o tratamento especializado em alergia e imunologia para populações de baixa renda, complementando de maneira vital o Sistema Único de Saúde (SUS).',
          'Consultas médicas e o Teste Básico de Alergia (Prick Test para alergia respiratória e a insetos) são oferecidos gratuitamente em várias unidades, enquanto exames específicos como o Patch Test e as vacinas antialérgicas (Imunoterapia) contam com preços populares para assegurar a sustentabilidade contínua da obra social.',
          'Sua rede abrange unidades fixas no Estado do Rio de Janeiro — Duque de Caxias, Realengo, Nova Iguaçu, Itaguaí, Xerém, Niterói (Fonseca), Iguaba Grande e São Pedro da Aldeia —, presença interestadual em Curitiba (PR) e Clínicas-Ônibus itinerantes que levam atendimento a outras cidades brasileiras.',
          'Em marco humanitário global, inaugurou uma unidade móvel em Conacri, República da Guiné (África), com o apoio do Cônsul Geral da Guiné, D’Artagnan Baptista Guimarães, e em parceria científica e assistencial com o Prof. Namoudou Conde (Academia de Ciências da Guiné), incluindo o envio de um ônibus ambulatorial voltado à saúde, assistência, pesquisa e educação. Nos Estados Unidos, atua em parceria com o Professor Benoit Tano (Johns Hopkins University), consultor científico e professor nos estados de Minnesota, Dakota do Norte e Dakota do Sul.',
        ],
        links: [
          {
            badge: 'Missão África',
            label: 'Unidade Móvel em Conacri, República da Guiné',
            url: 'https://www.youtube.com/watch?v=23Qxa0uZ71E',
          },
          {
            badge: 'Academia de Ciências da Guiné',
            label: 'Parceria Humanitária e Científica com o Prof. Namoudou Conde',
            url: 'https://www.youtube.com/watch?v=F-e4K2iks8I',
          },
          {
            badge: 'Ônibus Ambulatorial',
            label: 'Envio de Ônibus Ambulatorial para a Missão na África',
            url: 'https://youtube.com/shorts/xqEHc3YJX2k',
          },
          {
            badge: 'Estados Unidos',
            label: 'Atuação nos EUA com o Prof. Benoit Tano (Johns Hopkins)',
            url: 'https://www.brasilsemalergia.com.br/clinicas/cl%C3%ADnica-estados-unidos',
          },
        ],
      },
      {
        id: 'pioneirismo-genomico-apollo-crispr',
        roman: 'III',
        kicker: 'Terapia Gênica, Manifesto “Modelo Apollo” e CRISPR-Cas9',
        title:
          'Da Université Laval ao Ápice da Ciência Genômica Mundial e à Vanguarda CRISPR no Brasil',
        lead:
          'O Dr. Marcello Bossois consolidou-se como um dos principais tradutores da revolução genômica no Brasil, unindo a pesquisa no Canadá a marcos pioneiros em Terapia Gênica e edição genética via CRISPR-Cas9.',
        paragraphs: [
          'Entre 2010 e 2015, realizou estudos no Canadá como assistente de pesquisa do renomado geneticista Professor Jacques P. Tremblay na Université Laval, centro mundial de excelência, associando-se também à empresa canadense Cell Gene Therapeutics. Em março de 2014, foi coautor do artigo “Development of a web course on gene therapy by the international consortium of gene therapy”, publicado na prestigiada revista Molecular Therapy (Mol Ther) ao lado de uma elite acadêmica internacional formada por Jacques P. Tremblay, Annemieke Aartsma-Rus, Juan Bueren e Johnny Huard.',
          'Em fevereiro de 2013, atuou como articulador e foi um dos 51 signatários globais do Manifesto “Translating the Genomics Revolution: The Need for an International Gene Therapy Consortium for Monogenic Diseases” — o histórico “Modelo Apollo” para a Medicina —, ao lado de personalidades como Depei Liu (então Presidente da Academia Chinesa de Ciências Médicas) e líderes de Stanford, Harvard e grandes laboratórios europeus. Inspirado no Projeto Apollo da NASA, o manifesto propôs um consórcio mundial coordenado para desenvolver tratamentos e curas para a maioria das cerca de 10.000 doenças hereditárias monogênicas (como distrofia muscular de Duchenne, hemofilia e fibrose cística) em duas décadas, superando a fragmentação de pequenas equipes por meio da produção centralizada de vetores virais (AAV) e oligonucleotídeos, compartilhamento de expertise e subsídio público.',
          'Esse protagonismo internacional mereceu destaque nacional em 30 de abril de 2013 na consagrada coluna “Ancelmo Gois”, do jornal O Globo: “Consórcio Internacional de Terapia Gênica se reúne, mês que vem, nos EUA, com participação de Jacques Tremblay e Marcello Bossois” — registrando a reunião realizada em maio de 2013 durante o congresso da ASGCT nos Estados Unidos.',
          'Traduzindo esse conhecimento de elite para o Brasil com apoio da ABBAA (Associação Brasileira de Apoio, Assistência e Amparo) e em parceria contínua com o Dr. Jacques P. Tremblay, o Dr. Bossois envolveu-se diretamente com a tecnologia CRISPR-Cas9 (Prêmio Nobel de Química de 2020): desenvolveu um Teste Rápido CRISPR para COVID-19 voltado à detecção de variantes em áreas remotas e países em desenvolvimento e protagonizou um dos primeiros depósitos de patente no Brasil aplicando CRISPR/Cas9 (modalidade base editing) para prevenção e tratamento do Alzheimer precoce.',
          'Na Santa Casa da Misericórdia do Rio de Janeiro, sua liderança e articulação diplomática resultaram em três marcos históricos: a organização do Simpósio Internacional de Terapia Gênica em 2016 (com Université Laval, universidades japonesas e organizações francesas); a concretização em 2018 do contrato oficial de colaboração científica entre o Serviço de Alergia e Imunologia da Santa Casa e a Université Laval; e a inauguração, em novembro de 2019, do Núcleo para Tratamento de Doenças Raras, cerimônia que reuniu a Cônsul Geral do Canadá, Evelyne Coulombe, representantes do Ministério da Mulher, da Família e dos Direitos Humanos e do Instituto Butantan, celebrada com mostra cultural de pacientes especiais organizada pela Escola de Artes Mudart.',
        ],
        highlightBox: {
          title: 'Destaque no Jornal O Globo — Coluna Ancelmo Gois (30 de abril de 2013)',
          text: '“Consórcio Internacional de Terapia Gênica se reúne, mês que vem, nos EUA, com participação de Jacques Tremblay e Marcello Bossois.” — Validação pública e nacional de sua atuação na vanguarda científica mundial (congresso da ASGCT).',
        },
        links: [
          {
            badge: 'PubMed • Molecular Therapy (2014)',
            label: 'Development of a web course on gene therapy by the international consortium of gene therapy',
            url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
          },
          {
            badge: 'CRISPR COVID-19 & Patente Alzheimer',
            label: 'Pesquisas em Andamento e Depósito de Patente CRISPR/Cas9 — ABBAA',
            url: 'https://www.brasilsemalergia.com.br/abbaa/pesquisas-em-andamento',
          },
          {
            badge: 'Simpósio 2016',
            label: 'Simpósio Internacional de Terapia Gênica no Rio de Janeiro (Santa Casa)',
            url: 'https://www.youtube.com/watch?v=PZGUPEQAdWg',
          },
          {
            badge: 'Acordo 2018',
            label: 'Contrato de Colaboração Científica Santa Casa do RJ & Université Laval',
            url: 'https://youtu.be/6Zhb3T8UiCM',
          },
          {
            badge: 'Núcleo Doenças Raras (2019)',
            label: 'Inauguração do Núcleo com Canadá, Instituto Butantan e Cônsul Evelyne Coulombe',
            url: 'https://youtube.com/playlist?list=PLjECpMdqeZY1RzfwraUC9k-0xmDc5oOxH',
          },
          {
            badge: 'Inclusão Cultural (2019)',
            label: 'Mostra Cultural de Pacientes Especiais — Escola de Artes Mudart',
            url: 'https://youtu.be/HfkWtX2n8-s',
          },
        ],
      },
      {
        id: 'genetica-imunidade-integrativa',
        roman: 'IV',
        kicker: 'Medicina Personalizada, Asma, H1N1 e Imunidade Integrativa',
        title:
          'Pesquisas Genéticas Atuais (SNPs), Alergia Hormonal e Colaborações Científicas Globais',
        lead:
          'Da farmacogenética da asma em pacientes brasileiros à interseção entre alergia, imunologia e endocrinologia, o Dr. Marcello Bossois lidera pontes científicas com centros dos EUA, Canadá, Índia e Brasil.',
        paragraphs: [
          'Em 2024, foi coautor ao lado de Adalberto Rezende Santos (Fiocruz / Brasil Sem Alergia) de estudo indexado no PubMed Central (PMC11276142 / PMID 39057056) investigando Variações de Nucleotídeo Único (SNPs) nos genes ADRB2 e ADCY9 em pacientes brasileiros com asma atendidos no Brasil Sem Alergia, permitindo predizer a resposta individual a broncodilatadores na medicina personalizada.',
          'Está igualmente envolvido em pesquisa internacional sobre condição endócrina autoimune em mulheres grávidas infectadas pelo vírus H1N1, em colaboração com Richard Richardson e Roby Russell (Universidade do Texas em Austin, EUA), Dra. Shilpa Shah (Universidade de Mumbai, Índia) e E. Tinoco (UERJ e Unigranrio, Brasil).',
          'No campo clínico-científico, o Projeto Brasil Sem Alergia introduziu a metodologia de “Imunidade Integrativa”, estudando a síndrome do desequilíbrio hormonal nas doenças crônicas do século XXI. Reforçada pelos estudos da Dra. Shilpa Shah (Universidade de Mumbai) sobre influência hormonal em alergias autoimunes, a pesquisa aprofunda o conceito de “Alergia Hormonal”: mecanismo mediado por IgE que reconhece autoantígenos (os próprios hormônios ligados a proteínas), explicando quadros cíclicos como asma pré-menstrual, enxaqueca menstrual, fadiga crônica e fibromialgia, diagnosticados com histórico menstrual detalhado e testes cutâneos com hormônios bioidênticos e tratados preferencialmente com Imunoterapia Hormonal Sublingual.',
          'O Prof. Benoit Tano, MD/PhD (Johns Hopkins University) — fundador do Sistema de Saúde de Imunidade Integrativa (Minnesota) e da Academia Internacional de Imunidade Integrativa (I-AIIM), e autor dos best-sellers The Layman’s Guide to Integrative Immunity (2016) e Hormone Syndrome: America’s Silent Plague (2012) — atua como Consultor Científico. O joint venture entre a ABBAA (Dr. Marcello Bossois) e a TayaPro University (Prof. Benoit Tano) patrocina o primeiro Curso de Imunologia Integrativa para médicos no primeiro trimestre de 2026.',
          'No Simpósio de Doenças Respiratórias de 2022, promovido pela Santa Casa do Rio de Janeiro, coube diretamente ao Dr. Marcello Bossois a articulação e o convite oficial que reuniram autoridades mundiais como o Professor Louis-Philippe Boulet (Presidente do Global Initiative for Asthma — GINA), o Professor Benoit Tano e o Professor Jacques P. Tremblay.',
        ],
        links: [
          {
            badge: 'PubMed Central (2024 • PMID 39057056)',
            label: 'Variações de Nucleotídeo Único (SNPs em ADRB2 e ADCY9) na Asma no Brasil',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11276142/',
          },
          {
            badge: 'Pesquisa Internacional H1N1',
            label: 'Condição Endócrina Autoimune em Gestantes com H1N1 (UT Austin, Mumbai, UERJ)',
            url: 'https://go.gale.com/ps/i.do?id=GALE%7CA398207823&sid=googleScholar&v=2.1&it=r&linkaccess=abs&issn=22784292&p=HRCA&sw=w&userGroupName=anon%7E5336bed9&aty=open-web-entry',
          },
          {
            badge: 'ScienceDirect • Dra. Shilpa Shah',
            label: 'Influência Hormonal em Alergias Autoimunes (Fundamentação Científica)',
            url: 'https://www.sciencedirect.com/science/article/pii/S2666396121000327',
          },
          {
            badge: 'TayaPro University',
            label: 'Imunidade Integrativa e Formação Médica Internacional (ABBAA & TayaPro)',
            url: 'https://www.brasilsemalergia.com.br/tayapro-university',
          },
        ],
      },
      {
        id: 'sociobiologia-cultura-esporte',
        roman: 'V',
        kicker: 'Sociobiologia, História Mundial, Cultura e Esporte Inclusivo',
        title:
          'Colaboração com o Dr. Mário Giudicelli (Wernher von Braun) e Ações Integradas da ABBAA',
        lead:
          'O cuidado holístico conduzido pelo Dr. Marcello Bossois une ciência, memória histórica do século XX, música popular brasileira e inclusão pelo esporte.',
        paragraphs: [
          'A partir de 2009, o Dr. Marcello Bossois atuou como assessor médico do renomado intelectual Dr. Mário Giudicelli em projetos na área de Sociobiologia (Etologia). Mestre em Sociobiologia pela Universidade de Connecticut (EUA, 1973) e ex-aluno de Carl Sagan, o Dr. Giudicelli foi funcionário da Casa Branca e da Drug Enforcement Administration (DEA) por mais de 20 anos, tradutor simultâneo diplomático de presidentes como George Bush (pai) e Ronald Reagan, correspondente de guerra (1945–1946) e o único jornalista vivo presente durante todo o ano e meio do Tribunal de Guerra em Nuremberg.',
          'Por meio dessa assessoria próxima ao Dr. Giudicelli, o Dr. Bossois teve a oportunidade ímpar de conhecer detalhadamente o pensamento do cientista Wernher von Braun (peça-chave no programa Apollo da NASA), entrevistado por Giudicelli por volta de 1970 em registro histórico inédito e de quem era amigo próximo.',
          'Finalmente, por meio da ABBAA (Associação Brasileira de Assistência ao Asmático e Alérgico), o cuidado estende-se à cultura e ao esporte: “Música Pra Respirar”, em parceria com a cantora Alcione e a Pague Menos, criou uma canção cujos elementos melódicos e rítmicos mimetizam exercícios de fisioterapia respiratória para pacientes com asma e DPOC; o Coral Brasil Sem Alergia (“Coral Canto que Cura”) oferece aulas de canto terapêutico para ampliar a função pulmonar; e o projeto ABBAA Esportes Especiais promove o esporte inclusivo, patrocinando atletas como o judoca com Síndrome de Down Matheus Domingues Moreira.',
        ],
        links: [
          {
            badge: 'Registro Histórico (~1970)',
            label: 'A Entrevista Nunca Publicada de Wernher von Braun pelo Dr. Mário Giudicelli',
            url: 'https://www.brasilsemalergia.com.br/94-accordion/7192-a-entervista-nunca-publicada-de-wernher-von-braun',
          },
          {
            badge: 'Alcione & ABBAA',
            label: 'Projeto Terapêutico “Música Pra Respirar” com a cantora Alcione',
            url: 'https://www.youtube.com/watch?v=dLoL_bPiZfc',
          },
          {
            badge: 'Canto Terapêutico',
            label: 'Coral Brasil Sem Alergia — “Coral Canto que Cura”',
            url: 'https://www.brasilsemalergia.com.br/abbaa/coral-brasil-sem-alergia',
          },
          {
            badge: 'Esporte Inclusivo',
            label: 'ABBAA Esportes Especiais — Patrocínio ao judoca Matheus Domingues Moreira',
            url: 'https://www.brasilsemalergia.com.br/abbaa/abbaa-esportes-especiais',
          },
        ],
      },
    ],
    clinicUnitsTitle: 'Rede de Unidades Clínicas, Ônibus Itinerantes e Missões Internacionais',
    clinicUnitsSubtitle:
      'Além de Iguaba Grande, São Pedro da Aldeia (RJ) e Curitiba (PR), acesse diretamente as unidades e frentes globais do Projeto Social Brasil Sem Alergia:',
    encyclopediaTitle: 'Enciclopédia Médica e Educação Científica Continuada',
    peopleDirectoryTitle:
      'Quadro de Honra: Familiares, Cientistas e Personalidades Mencionados nesta Trajetória',
    peopleDirectorySubtitle:
      'Registro nominal completo de todas as personalidades familiares, médicas, científicas, diplomáticas e culturais que compõem este legado:',
    peopleDirectory: [
      {
        name: 'José Adell y Fons (“Pepe Adell”, 1868–1927)',
        role: 'Jornalista, Mestre Gravador e Patriarca Valenciano no Rio de Janeiro',
        relationToLegacy: 'Trisavô do Dr. Marcello Bossois e inspiração humana, ética e familiar deste Memorial.',
      },
      {
        name: 'Dr. Marcello Bossois de Melo Ferreira (CRM/RJ 732141)',
        role: 'Médico Alergista, Imunologista, Pesquisador em Terapia Gênica e CRISPR-Cas9',
        relationToLegacy: 'Trineto de Pepe Adell (espanhol e brasileiro, carioca e valenciano), fundador do Brasil Sem Alergia e responsável pela elaboração deste Memorial.',
      },
      {
        name: 'Dra. Patricia Frozi Schlinkert (CRM/RJ 5274541-3)',
        role: 'Médica Militar (HCE), Alergista, Imunologista e Auditora Médica',
        relationToLegacy: 'Esposa do Dr. Marcello Bossois, cofundadora e colíder estratégica do Projeto Social Brasil Sem Alergia.',
      },
      {
        name: 'Dr. Vanuzio Ferreira',
        role: 'Renomado Médico Geriatra',
        relationToLegacy: 'Pai do Dr. Marcello Bossois de Melo Ferreira, raiz de sua tradição médica familiar.',
      },
      {
        name: 'Dra. Lúcia Bossois',
        role: 'Médica Pediatra',
        relationToLegacy: 'Mãe do Dr. Marcello Bossois e elo direto da linhagem familiar Bossois / Adell.',
      },
      {
        name: 'Lauro Schlinkert & Adma Schlinkert',
        role: 'Importantes Expoentes do Empresariado Brasileiro',
        relationToLegacy: 'Pais da Dra. Patricia Frozi Schlinkert, cuja herança de visão estratégica e gestão fortalece a expansão do projeto social.',
      },
      {
        name: 'Prof. Dr. Jacques P. Tremblay',
        role: 'Cientista e Geneticista — Université Laval (Canadá) & Cell Gene Therapeutics',
        relationToLegacy: 'Mentor científico do Dr. Marcello Bossois (2010–2015) e parceiro contínuo em Terapia Gênica e CRISPR-Cas9.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
      },
      {
        name: 'Annemieke Aartsma-Rus, Juan Bueren & Johnny Huard',
        role: 'Acadêmicos Internacionais de Elite em Terapia Gênica',
        relationToLegacy: 'Coautores ao lado de Jacques P. Tremblay e Marcello Bossois na revista Molecular Therapy (março de 2014).',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24584076/',
      },
      {
        name: 'Depei Liu',
        role: 'Presidente da Academia Chinesa de Ciências Médicas',
        relationToLegacy: 'Cossignatário ao lado do Dr. Marcello Bossois e líderes de Stanford e Harvard entre os 51 signatários do Manifesto “Modelo Apollo” (2013).',
      },
      {
        name: 'Ancelmo Gois',
        role: 'Colunista do Jornal O Globo',
        relationToLegacy: 'Noticiou em 30/04/2013 a participação de Marcello Bossois e Jacques Tremblay na reunião do Consórcio Internacional de Terapia Gênica nos EUA.',
      },
      {
        name: 'D’Artagnan Baptista Guimarães & Prof. Namoudou Conde',
        role: 'Cônsul Geral da Guiné e Membro da Academia de Ciências da Guiné',
        relationToLegacy: 'Parceiros na abertura da unidade móvel e envio de ônibus ambulatorial a Conacri, República da Guiné (África).',
        url: 'https://www.youtube.com/watch?v=F-e4K2iks8I',
      },
      {
        name: 'Prof. Benoit Tano, MD/PhD',
        role: 'Johns Hopkins University • Fundador da I-AIIM e TayaPro University',
        relationToLegacy: 'Consultor científico nos EUA (Minnesota, Dakota do Norte e Dakota do Sul) e parceiro em Imunidade Integrativa.',
        url: 'https://www.brasilsemalergia.com.br/tayapro-university',
      },
      {
        name: 'Evelyne Coulombe & Escola de Artes Mudart',
        role: 'Cônsul Geral do Canadá e Equipe de Inclusão Cultural',
        relationToLegacy: 'Presentes na inauguração do Núcleo para Tratamento de Doenças Raras na Santa Casa (novembro de 2019, com o Instituto Butantan).',
        url: 'https://youtube.com/playlist?list=PLjECpMdqeZY1RzfwraUC9k-0xmDc5oOxH',
      },
      {
        name: 'Adalberto Rezende Santos',
        role: 'Pesquisador Científico (Fiocruz / Brasil Sem Alergia)',
        relationToLegacy: 'Parceiro e coautor no estudo genético de 2024 sobre SNPs em ADRB2 e ADCY9 na asma (PMID 39057056).',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11276142/',
      },
      {
        name: 'Dra. Shilpa Shah, Richard Richardson, Roby Russell & E. Tinoco',
        role: 'Pesquisadores na Univ. de Mumbai, UT Austin (EUA), UERJ e Unigranrio',
        relationToLegacy: 'Colaboradores internacionais na pesquisa sobre H1N1 em gestantes e na fundamentação científica da Alergia Hormonal.',
        url: 'https://www.sciencedirect.com/science/article/pii/S2666396121000327',
      },
      {
        name: 'Prof. Louis-Philippe Boulet',
        role: 'Presidente do Global Initiative for Asthma (GINA)',
        relationToLegacy: 'Autoridade global reunida pelo Dr. Marcello Bossois no Simpósio de Doenças Respiratórias da Santa Casa (2022).',
      },
      {
        name: 'Dr. Mário Giudicelli, Carl Sagan & Wernher von Braun',
        role: 'Sociobiólogo e Histórico Correspondente em Nuremberg (Ex-aluno de Sagan e Amigo de von Braun)',
        relationToLegacy: 'O Dr. Bossois atuou como assessor médico do Dr. Giudicelli desde 2009, conhecendo em profundidade o pensamento de Wernher von Braun (~1970).',
        url: 'https://www.brasilsemalergia.com.br/94-accordion/7192-a-entervista-nunca-publicada-de-wernher-von-braun',
      },
      {
        name: 'Alcione & Matheus Domingues Moreira',
        role: 'Cantora Brasileira Consagrada & Judoca de Esportes Especiais',
        relationToLegacy: 'Protagonistas das ações integradas da ABBAA: “Música Pra Respirar”, “Coral Canto que Cura” e ABBAA Esportes Especiais.',
        url: 'https://www.youtube.com/watch?v=dLoL_bPiZfc',
      },
    ],
  },
};
