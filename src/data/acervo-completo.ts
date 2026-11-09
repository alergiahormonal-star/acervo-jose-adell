export type WorkCategory =
  | 'humanidade-familia'
  | 'questao-social'
  | 'republicanismo-espanha'
  | 'cuba-filipinas-imprensa'
  | 'europa-mundo'
  | 'arte-iberismo';

export const CATEGORY_LABELS: Record<
  WorkCategory,
  { label: string; description: string; badgeColor: string }
> = {
  'humanidade-familia': {
    label: 'Família, Afetos & Memória Íntima',
    description:
      'Cartas de despedida, o luto por Doña Emilia, os três filhos, o irmão cego prodígio, a pedrada no Rio e a oficina da Rua da Ajuda.',
    badgeColor: 'bg-[#7A1C1C] text-[#FAF7F0]',
  },
  'questao-social': {
    label: 'Empatia Social, Operários & Livre-Pensamento',
    description:
      'Defesa dos trabalhadores famintos, igualdade perante a lei, epidemia de cólera, casas-caverna e diálogos sobre o anarquismo.',
    badgeColor: 'bg-[#1B365D] text-[#FAF7F0]',
  },
  'republicanismo-espanha': {
    label: 'Sonho Republicano & Retratos da Espanha',
    description:
      'Grandes perfis literários de Castelar, Cánovas e Ruiz Zorrilla, cartas abertas sobre democracia sem derramamento de sangue e memória de 1868.',
    badgeColor: 'bg-[#5A3E1B] text-[#FAF7F0]',
  },
  'cuba-filipinas-imprensa': {
    label: 'Crise de 1898, Cuba, Filipinas & Humor na Imprensa',
    description:
      'Polêmicas com jornais do Rio, o cruzador fantasma Málaga, José Rizal nas Filipinas e o retorno doloroso dos soldados espanhóis.',
    badgeColor: 'bg-[#2F4F4F] text-[#FAF7F0]',
  },
  'europa-mundo': {
    label: 'Crônicas da Europa, Paz & Liberdade',
    description:
      'Revistas mensais sobre França, Irlanda (Gladstone e Parnell), Itália na Abissínia, Bálcãs, Brasil republicano e filosofia de fim de século.',
    badgeColor: 'bg-[#3D2B56] text-[#FAF7F0]',
  },
  'arte-iberismo': {
    label: 'Arte, Gravura em Metal, Literatura & Mundo Ibérico',
    description:
      'A medalha oficial de Campos Sales, a defesa de Rosalía de Castro e Emilia Pardo Bazán, e o diálogo fraterno entre Espanha e Portugal.',
    badgeColor: 'bg-[#8B6508] text-[#FAF7F0]',
  },
};

export interface CatalogWork {
  id: string;
  slug: string;
  title: string;
  humanTitle: string;
  date: string;
  year: number;
  periodical: string;
  city: string;
  signature: string;
  category: WorkCategory;
  pages: number[];
  summary: string;
  excerpt: string;
  excerptTranslation: string;
  featured?: boolean;
}

export const CATALOG_WORKS: CatalogWork[] = [
  // ==================== FAMÍLIA, AFETOS & MEMÓRIA HUMANA ====================
  {
    id: '01',
    slug: 'carta-tributo-morales-de-los-rios-1927',
    title: 'Pepe Adell, ha muerto (Carta-Tributo de Adolfo Morales de los Ríos)',
    humanTitle: 'O adeus comovente do arquiteto do Museu de Belas Artes ao amigo do sorriso inesquecível',
    date: 'Maio de 1927',
    year: 1927,
    periodical: 'Carta Datilografada (Papel Timbrado J. L. Conde & Cia)',
    city: 'Rio de Janeiro',
    signature: 'A. Morales de los Ríos',
    category: 'humanidade-familia',
    pages: [84, 85],
    featured: true,
    summary:
      'Joia máxima da memória afetiva do acervo. Inconformado com a morte discreta de Pepe Adell na Bahia, o arquiteto Adolfo Morales de los Ríos evoca Shakespeare (Hamlet), revela o socialismo puro e altruísta de Pepe, sua maestria sem diplomas como gravador em metal e as reuniões alegres na casinha colonial baixa da Rua da Ajuda.',
    excerpt:
      'Pepe Adell, para acompañar la exposición comedida de sus ideales, parecía como querer atemorizarlos con auxilio de una arma defensiva, un escudo... su sonrisa. “Más vale hablar de cosas risueñas, que escribir sobre lágrimas.”',
    excerptTranslation:
      'Pepe Adell, para acompanhar a exposição comedida de seus ideais, parecia querer suavizá-los com o auxílio de uma arma defensiva, um escudo... o seu sorriso. “Mais vale falar de coisas risonhas do que escrever sobre lágrimas.”',
  },
  {
    id: '02',
    slug: 'obituario-emilia-vallespi-de-adell-1903',
    title: 'Doña Emilia Vallespí de Adell (Crônica Fúnebre e Cortejo dos Três Órfãos)',
    humanTitle: 'O sábado em que 40 carruagens choraram os gritos de Josefina, Alberto e Pepín',
    date: '6 de Setembro de 1903',
    year: 1903,
    periodical: 'Imprensa Espanhola do Rio de Janeiro',
    city: 'Rio de Janeiro',
    signature: 'Redação (com datas manuscritas * 01.01.1870 / † 05.09.1903)',
    category: 'humanidade-familia',
    pages: [83, 82],
    featured: true,
    summary:
      'Relato dilacerante do falecimento da esposa de José Adell aos 33 anos. Descreve como sua casa era o lar espiritual da colônia espanhola no Rio, reproduz as dedicatórias das coroas de flores (“A su querida Emilia, Pepe”) e narra a cena inesquecível das 17h, quando os três filhos pequenos imploraram chorando para entrar no coche fúnebre junto com a mãe rumo ao Cemitério de São João Batista (quadro 2º, nº 2666).',
    excerpt:
      '¡No había una persona que no llorara al escuchar los desgarradores gritos de los tres huérfanos de la finada: Josefina, Alberto y Pepe, que, en su inconciencia de la niñez, solo veían que se llevaban á su madre y pedían á toda costa ir con ella!...',
    excerptTranslation:
      'Não havia uma só pessoa que não chorasse ao escutar os dilacerantes gritos dos três órfãos da falecida: Josefina, Alberto e Pepe, que, em sua inconsciência da infância, só viam que levavam sua mãe e pediam a todo custo para ir com ela!...',
  },
  {
    id: '03',
    slug: 'missa-setimo-dia-emilia-vallespi-1903',
    title: 'D. Emilia Vallespí de Adell — Missa de Sétimo Dia na Igreja de S. Francisco de Paula',
    humanTitle: 'A solidariedade de dezenas de famílias imigrantes ao viúvo José Adell',
    date: 'Setembro de 1903',
    year: 1903,
    periodical: 'Jornal do Brasil (Recorte em Português)',
    city: 'Rio de Janeiro',
    signature: 'Redação do Jornal do Brasil',
    category: 'humanidade-familia',
    pages: [80],
    summary:
      'Registro publicado em português pelo Jornal do Brasil listando as dezenas de personalidades e famílias que lotaram o altar-mor da Igreja de São Francisco de Paula às 9h da manhã em abraço solidário a José Adell, incluindo o Cônsul Juan Capllonch y Puerto, Adolfo Morales de los Ríos, Plácido Isasi, Elías Novoa e Vicente do Pazo.',
    excerpt:
      'No altar-mór da egreja de S. Francisco de Paula celebrou-se hoje, ás 9 horas, a missa de setimo dia que, por alma da exma. sra. d. Emilia Vallespí de Adell mandou rezar sua exma. familia.',
    excerptTranslation:
      'Registro original em português da época preservado no álbum de família (página 80).',
  },
  {
    id: '04',
    slug: 'telegrama-agencia-fabra-ferimento-jose-adell-1895',
    title: 'Manifestación en Río de Janeiro y herida en la cabeza a D. José Adell',
    humanTitle: 'O dia em que José Adell levou uma golpe/pedrada na cabeça num tumulto de rua no Rio',
    date: 'Setembro de 1895',
    year: 1895,
    periodical: 'Telegrama Internacional Agência Fabra (via Lisboa)',
    city: 'Rio de Janeiro / Lisboa',
    signature: 'Agência Fabra',
    category: 'humanidade-familia',
    pages: [70],
    featured: true,
    summary:
      'Despacho telegráfico internacional noticiando a grande passeata pró-Cuba liderada por José do Patrocínio no Largo de São Francisco de Paula, no Rio de Janeiro. Diante das redações dos jornais, manifestantes e espanhóis entraram em choque físico, resultando em ferimento na cabeça de José Adell.',
    excerpt:
      'Con este motivo se produjeron acaloradas disputas y después serios tumultos, de resultas de los cuales fué herido en la cabeza el distinguido escritor español D. José Adell, redactor del periódico La Unión Española.',
    excerptTranslation:
      'Por esse motivo produziram-se acaloradas disputas e depois sérios tumultos, em resultado dos quais foi ferido na cabeça o distinto escritor espanhol D. José Adell, redator do periódico La Unión Española.',
  },
  {
    id: '05',
    slug: 'nomeacao-alberto-adell-fons-barcelona-1889',
    title: 'Nombramiento de D. Alberto Adell Fons en la Escuela de Ciegos de Barcelona',
    humanTitle: 'O menino cego de Vinaròs que virou professor aos 18 anos — e o elogio ao irmão autodidata',
    date: '1889',
    year: 1889,
    periodical: 'El Sufragio Universal',
    city: 'Vinaròs / Barcelona',
    signature: 'Redação',
    category: 'humanidade-familia',
    pages: [55],
    featured: true,
    summary:
      'Nota emocionante que celebra a nomeação de Alberto Adell Fons, jovem cego de apenas 18 anos nascido em Vinaròs, como professor auxiliar de violino na Escuela de Ciegos y Sordo-Mudos de Barcelona, destacando também o talento literário extraordinário e autodidata de seu irmão José Adell Fons.',
    excerpt:
      'El cieguecito Alberto, que es casi un niño, una esperanza musical, nació en Vinaroz... Esta familia posee otro vástago, que sin estudios universitarios, ni de segunda enseñanza siquiera, muestra muy jóven también aptitudes nada comunes para la carrera literaria.',
    excerptTranslation:
      'O ceguinho Alberto, que é quase um menino, uma esperança musical, nasceu em Vinaròs... Esta família possui outro rebento que, sem estudos universitários, nem de ensino secundário sequer, mostra muito jovem também aptidões nada comuns para a carreira literária.',
  },
  {
    id: '06',
    slug: 'manuscrito-biografico-familia-adell',
    title: 'Memorial Manuscrito: José Adell y Fons e a Medalha de Campos Sales (1900)',
    humanTitle: 'A síntese escrita à mão pela família: arte, equilíbrio social e a medalha presidencial',
    date: 'Século XX (Memória Familiar)',
    year: 1900,
    periodical: 'Manuscrito Original em Folha Verde',
    city: 'Brasil',
    signature: 'Acervo Familiar Adell',
    category: 'humanidade-familia',
    pages: [88],
    featured: true,
    summary:
      'Documento manuscrito em português que resume a alma de José Adell: nascido em Vinaròs numa família voltada às artes, autodidata movido pela busca do equilíbrio social, premiado mestre gravador em metal e escolhido pelo Governo Brasileiro para esculpir a medalha oficial da visita do Presidente Campos Sales à Argentina em 1900.',
    excerpt:
      'Era um autodidata. Exercia o ofício de gravador e, mesmo não sendo portador de diplomas, era reconhecido como um Mestre! A ele coube esculpir, indicado pelo Governo Brasileiro, a medalha comemorativa da visita de Sua Excelência, Presidente do Brasil, Dr. Campos Sales, à República da Argentina, em 1900.',
    excerptTranslation:
      'Texto originalmente redigido em português no manuscrito familiar da página 88.',
  },
  {
    id: '07',
    slug: 'necrologio-correo-de-espana-1927',
    title: 'Noticias de Sociedad: Fallecimiento en Bahía de D. José Adell y Fons',
    humanTitle: 'A notícia da partida do mestre gravador em Salvador da Bahia aos 59 anos',
    date: '27 de Maio de 1927',
    year: 1927,
    periodical: 'Correo de España',
    city: 'Rio de Janeiro / Salvador',
    signature: 'Redação (com datas à mão * 10.02.1868 / † 12.5.1927)',
    category: 'humanidade-familia',
    pages: [75],
    summary:
      'Comunicado enviado por D. Francisco León Santos, proprietário da Librería Española de Salvador, informando a morte de José Adell em 12 de maio de 1927 na capital baiana, onde gozava de estima geral como gravador em metal. Menciona a residência de dois filhos seus no Rio e sua histórica direção de La Unión Española.',
    excerpt:
      'El mes pasado, el día 12, falleció en Bahía D. José Adell y Fons... este buen español que ejercía en la Capital bahiana su profesión de grabador en metal y gozaba de general estimación.',
    excerptTranslation:
      'No mês passado, no dia 12, faleceu na Bahia D. José Adell y Fons... este bom espanhol que exercia na Capital baiana sua profissão de gravador em metal e gozava de estima geral.',
  },
  {
    id: '08',
    slug: 'semblanza-poema-pablo-isasi',
    title: 'Semblanza (Poema dedicado a José Adell)',
    humanTitle: 'Versos de um amigo retratando o homem que escutava o pobre e enfrentava o soberbo',
    date: 'c. 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'Pablo Isasi',
    category: 'humanidade-familia',
    pages: [67],
    summary:
      'Poema-retrato assinado por Pablo Isasi exaltando a honradez, discrição, harmonia entre pensamento e vida e a compaixão humana de José Adell.',
    excerpt:
      'Trabaja, y al mundo presta / El óvolo de más precio, / Pues, lo que piensa, armoniza / Con sus nobles sentimientos. / Escucha al pobre, lo mismo / Que al poderoso altanero, / Y defiende con su pluma / La Libertad y el Progreso.',
    excerptTranslation:
      'Trabalha, e ao mundo presta / O óbolo de maior preço, / Pois o que pensa harmoniza / Com seus nobres sentimentos. / Escuta ao pobre, do mesmo modo / Que ao poderoso altaneiro, / E defende com sua pena / A Liberdade e o Progresso.',
  },
  {
    id: '09',
    slug: 'a-la-iberia-autobiografia-jornalistica-1897',
    title: 'Á “La Iberia” (Defesa Autobiográfica de José Adell)',
    humanTitle: 'Quando tentaram diminuí-lo como “jornalista novato”, Pepe contou sua história inteira',
    date: '27 de Dezembro de 1897',
    year: 1897,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'humanidade-familia',
    pages: [20],
    summary:
      'Texto fundamental para sua biografia! Respondendo com elegância a um ataque pessoal do jornal La Iberia, José Adell revela que escrevia na imprensa desde menino, tendo sido nomeado aos 17 anos (1885) secretário de redação de La Luz em Barcelona ao lado de Rosendo Arús, Cristóbal Litrán e Fernando Tarrida del Mármol, correspondente político em 1887 e diretor sem qualquer ambição pessoal no Brasil.',
    excerpt:
      'Aunque sin facultades para ello director soy de La Unión, y crea el colega y crea la colonia que así como no asumí tal cargo por ambición personal, feliz me juzgaré el día en que pueda cederlo á quien sepa con más competencia defender los intereses de España en el Brasil.',
    excerptTranslation:
      'Embora sem vaidades para tanto, diretor sou de La Unión, e creia o colega e creia a colônia que, assim como não assumi tal cargo por ambição pessoal, feliz me julgarei no dia em que puder cedê-lo a quem saiba com mais competência defender os interesses da Espanha no Brasil.',
  },
  {
    id: '10',
    slug: 'carta-de-madrid-nostalgia-e-villacanas-1893',
    title: 'Crónica de Madrid (20 de Septiembre de 1893): Nostalgia del Mar y Tragedia de Villacañas',
    humanTitle: 'O choro silencioso de voltar à terra natal após 5 anos e o drama das famílias soterradas em cavernas',
    date: '20 de Setembro de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Madrid / Rio de Janeiro',
    signature: 'A. Fons [José Adell y Fons]',
    category: 'humanidade-familia',
    pages: [78, 58, 57],
    featured: true,
    summary:
      'Recém-desembarcado na Espanha vindo do Rio de Janeiro, ainda mareado da viagem, Adell abre o coração sobre o envelhecimento precoce do emigrante e a dor pelos entes queridos falecidos na ausência. Na sequência, denuncia a miséria chocante de Villacañas (Toledo), onde metade da população morava em cavernas subterrâneas (“silos”) inundadas por uma tempestade que deixou mais de 50 mortos e 800 famílias sem abrigo.',
    excerpt:
      '¡Cuánto envejecemos los individuos! Há más de un lustro que en noche bonancible despedíme del faro de Cádiz... trayendo de tan larga y dolorosa ausencia algunas prematuras canas en la cabeza y muchos tardíos desengaños en el corazón.',
    excerptTranslation:
      'Quanto envelhecemos os indivíduos! Há mais de cinco anos despedi-me numa noite mansa do farol de Cádiz... trazendo de tão longa e dolorosa ausência alguns cabelos brancos prematuros na cabeça e muitos desenganos tardios no coração.',
  },
  {
    id: '11',
    slug: 'dossie-o-globo-adolfo-morales-de-los-rios-1991',
    title: 'O arquiteto da virada do século: Adolfo Morales de los Ríos no Museu de Belas Artes',
    humanTitle: 'Recortes guardados pela família Adell celebrando a memória do grande amigo de Pepe',
    date: '29 de Novembro de 1991',
    year: 1991,
    periodical: 'O Globo (Caderno Artes Plásticas)',
    city: 'Rio de Janeiro',
    signature: 'Carla Lencastre',
    category: 'humanidade-familia',
    pages: [86, 87, 89],
    summary:
      'Reportagens preservadas pela família Adell sobre a exposição dos 75 anos do prédio do Museu Nacional de Belas Artes, celebrando Adolfo Morales de los Ríos (1858–1928) — o amigo leal que escreveu o tributo póstumo a Pepe Adell em 1927.',
    excerpt:
      'Nascido em Sevilha, Morales de Los Rios (1858–1928) chegou ao Brasil em 1889 e desenhou boa parte do Centro da Cidade do Rio de Janeiro.',
    excerptTranslation:
      'Reportagem original em português integrante do dossiê documental da família (páginas 86 e 89).',
  },

  // ==================== QUESTÃO SOCIAL, OPERÁRIOS & LIVRE-PENSAMENTO ====================
  {
    id: '12',
    slug: 'atentado-pallas-entrevista-tarrida-del-marmol-1893',
    title: 'Crónica de Madrid (30 de Septiembre de 1893): El atentado de Pallás y entrevista con F. Tarrida del Mármol',
    humanTitle: 'A conversa franca entre dois velhos amigos de lados opostos: o republicano Adell e o anarquista Tarrida',
    date: '30 de Setembro de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Madrid / Barcelona',
    signature: 'A. Fons [José Adell y Fons]',
    category: 'questao-social',
    pages: [60, 59, 72],
    featured: true,
    summary:
      'Após narrar a explosão das bombas de Paulino Pallás contra o General Martínez Campos em Barcelona, José Adell procura em Madrid seu amigo de juventude Fernando Tarrida del Mármol (diretor da revista anarquista Acracia, com quem redigira La Luz). Apesar de condenar a violência, Adell ouve e registra com respeito o diagnóstico sobre a fome operária na Europa — e encerra com bom humor comentando os banquetes do Congresso Literário de Barcelona.',
    excerpt:
      'Deseando poder dar algunas informaciones exactas á los lectores de “La Unión” sobre los anarquistas catalanes aproveché la estancia en ésta de uno de los más caracterizados miembros de dicho partido, con el cual me unen antiguos lazos de amistad... Llámase F. Tarrida.',
    excerptTranslation:
      'Desejando dar informações exatas aos leitores de “La Unión” sobre os anarquistas catalães, aproveitei a estada nesta capital de um dos mais caracterizados membros de tal partido, ao qual me unem antigos laços de amizade... Chama-se F. Tarrida.',
  },
  {
    id: '13',
    slug: 'advertencia-saludable-colera-e-miseria-1886',
    title: 'Advertencia Saludable (A Epidemia de Cólera e o Abandono dos Operários)',
    humanTitle: '“A miséria faz mais estragos que o cólera”: o grito do jovem Adell contra o egoísmo dos nobres',
    date: 'c. Primavera de 1886',
    year: 1886,
    periodical: 'La Luz (com longa restauração manuscrita pelo autor)',
    city: 'Barcelona',
    signature: 'J. A. [José Adell y Fons]',
    category: 'questao-social',
    pages: [6, 7, 8],
    featured: true,
    summary:
      'Um dos textos mais vibrantes e humanos da juventude de Adell, cuja parte final foi cuidadosamente reconstituída à mão em tinta! Denuncia que, durante a epidemia de cólera, os ricos demitiram milhares de operários deixando suas famílias sem pão, fugindo para veranear nas praias do Cantábrico — humilhando a dignidade do trabalhador com esmolas mesquinhas em vez de trabalho justo.',
    excerpt:
      '¡La miseria! terrible nombre que causa más espanto entre la clase proletaria que la más cruel epidemia... El obrero que solo vive de su trabajo tiembla de espanto al comprender que ha de faltarle el sustento y el de su infeliz familia.',
    excerptTranslation:
      'A miséria! Terrível nome que causa mais espanto entre a classe proletária do que a mais cruel epidemia... O operário que só vive de seu trabalho treme de espanto ao compreender que há de faltar-lhe o sustento e o de sua infeliz família.',
  },
  {
    id: '14',
    slug: 'igualdad-ante-la-ley-fusilamiento-bartual-1886',
    title: '¡Igualdad ante la ley! (O Fuzilamento do Cabo Bartual vs. o Indulto de um Borbón)',
    humanTitle: 'Por que fuzilaram de madrugada o soldado humilde e pouparam o príncipe do mesmo delito?',
    date: '20 de Março de 1886',
    year: 1886,
    periodical: 'La Luz',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'questao-social',
    pages: [18],
    featured: true,
    summary:
      'Crônica de indignação moral aos 18 anos de idade: o governo ignorou as súplicas da esposa em prantos e fuzilou em Cartagena o ex-cabo Bartual, enquanto preparava indulto para D. Enrique de Borbón por delito semelhante. “Questão de sobrenomes?”, pergunta Adell.',
    excerpt:
      '¿Por qué el poder de indultar á un Borbón no indultó á un Bartual? ¿Cuestión de apellidos? Pues esto es indigno, señores gobernantes. ¿Dónde está la igualdad ante la ley?',
    excerptTranslation:
      'Por que o poder de indultar a um Borbón não indultou a um Bartual? Questão de sobrenomes? Pois isto é indigno, senhores governantes. Onde está a igualdade perante a lei?',
  },
  {
    id: '15',
    slug: 'la-misma-causa-los-mismos-efectos-1886',
    title: 'La misma causa los mismos efectos (Mineiros de Decazeville e o Padre Galeote)',
    humanTitle: 'A fome que empurra tanto o mineiro francês quanto o padre desesperado em Madrid',
    date: 'Abril de 1886',
    year: 1886,
    periodical: 'La Luz (com trecho central restaurado à mão)',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'questao-social',
    pages: [51, 5],
    summary:
      'Ensaio corajoso (iniciado na p. 51 e concluído na p. 5 com caligrafia manuscrita) comparando a revolta de mineiros famintos em Decazeville, na França, com o atentado cometido no Domingo de Ramos pelo padre Cayetano Galeote contra o Bispo de Madrid, depois de ter sua única fonte de sustento retirada enquanto sua mãe vivia na miséria.',
    excerpt:
      'Estallan un día graves desórdenes en un departamento minero de la Francia; turbas de mineros instigadas por el hambre, el más poderoso de los incitantes...',
    excerptTranslation:
      'Estouram um dia graves desordens num departamento mineiro da França; turbas de mineiros instigadas pela fome, o mais poderoso dos incitantes...',
  },
  {
    id: '16',
    slug: 'el-ano-mil-1886',
    title: 'El Año Mil',
    humanTitle: 'O pavor do fim do mundo no ano 1000 e a conquista da liberdade de consciência',
    date: '16 de Fevereiro de 1886',
    year: 1886,
    periodical: 'La Luz',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'questao-social',
    pages: [3, 4],
    summary:
      'Publicado seis dias após completar 18 anos! Ensaio histórico sobre como o terror apocalíptico do ano 1000 levou nobres e plebeus a entregarem todos os bens aos mosteiros medievais, evocando depois o suplício de Savonarola e a Reforma religiosa do século XVI.',
    excerpt:
      'Interpretando á su antojo unas palabras del evangelio de san Juan, dió en propalar la especie de que estaba próximo el juicio final; que en el año mil sería el día terrible...',
    excerptTranslation:
      'Interpretando a seu bel-prazer palavras do evangelho de São João, passou a propalar que estava próximo o juízo final; que no ano mil seria o dia terrível...',
  },
  {
    id: '17',
    slug: 'paralelo-roma-e-cristianismo-primitivo-1886',
    title: 'Paralelo (Roma Imperial e o Cristianismo dos Oprimidos)',
    humanTitle: '“Jesus Cristo foi o primeiro democrata”: a defesa da fraternidade pura contra a intolerância',
    date: '15 de Março de 1886',
    year: 1886,
    periodical: 'El Fantasma',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'questao-social',
    pages: [53, 54],
    summary:
      'Compara a opulência cruel do Império Romano sob Augusto com a mensagem libertadora de Jesus aos escravos e humildes, lamentando que séculos depois o poder temporal tenha traído o evangelho da caridade e do perdão.',
    excerpt:
      'Sino que oponiendo á la razón de la fuerza, la fuerza de la razón, ejecutaba la más grande de las revoluciones, contestando á los denuestos é insultos con palabras de perdón y caridad: Jesucristo fué el primer demócrata, fué el primer republicano.',
    excerptTranslation:
      'Opondo à razão da força a força da razão, executava a maior das revoluções, respondendo aos insultos com palavras de perdão e caridade: Jesus Cristo foi o primeiro democrata, foi o primeiro republicano.',
  },
  {
    id: '18',
    slug: 'consejo-redaccion-la-luz-barcelona-1886',
    title: 'El Consejo de Redacción de “La Luz” (Barcelona)',
    humanTitle: 'O expediente histórico que une o jovem José Adell a Rosendo Arús e Tarrida del Mármol',
    date: '1885–1886',
    year: 1886,
    periodical: 'La Luz',
    city: 'Barcelona',
    signature: 'Expediente Editorial',
    category: 'questao-social',
    pages: [54],
    summary:
      'Recorte probatório guardado por Adell mostrando a renovação do Conselho de Redação do semanário livre-pensador La Luz de Barcelona: Diretor Rosendo Arús Arderiu; Redatores J. Solé Pique, J. de Diego, F. Tarrida, J. Torrents Ros, J. Frías, A. Serra Furnells; Secretários Cristóbal Litrán e J. Adell Fons.',
    excerpt:
      'El Consejo de redacción de La Luz al renovarse ha quedado constituido en la forma siguiente: Director, Rosendo Arús Arderiu... Secretarios: Cristóbal Litrán, J. Adell Fons.',
    excerptTranslation:
      'O Conselho de redação de La Luz ao renovar-se ficou constituído da seguinte forma: Diretor, Rosendo Arús Arderiu... Secretários: Cristóbal Litrán, J. Adell Fons.',
  },
  {
    id: '19',
    slug: 'el-partido-carlista-1886',
    title: 'El Partido Carlista',
    humanTitle: 'A crise interna dos absolutistas espanhóis vista por um jovem livre-pensador',
    date: '1º de Abril de 1886',
    year: 1886,
    periodical: 'La Luz',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'questao-social',
    pages: [17, 52],
    summary:
      'Análise da cisão entre carlistas “íntegros” (Cándido e Ramón Nocedal) e “benévolos” (Navarro Villoslada), observando com ironia como até o partido mais ultramontano da Espanha começava a rebelar-se contra a tutela política de Roma.',
    excerpt:
      'Hondamente perturbado y dividido, como nunca lo haya estado, se encuentra en la actualidad el partido carlista.',
    excerptTranslation:
      'Profundamente perturbado e dividido, como nunca esteve antes, encontra-se na atualidade o partido carlista.',
  },

  // ==================== SONHO REPUBLICANO & RETRATOS DA ESPANHA ====================
  {
    id: '20',
    slug: 'hombres-y-cosas-de-espana-emilio-castelar-1892',
    title: 'Hombres y Cosas de España — I: D. Emilio Castelar',
    humanTitle: 'Retrato monumental do grande orador da República Espanhola e a dor das divisões',
    date: 'Junho de 1892',
    year: 1892,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [11, 12, 10, 9],
    featured: true,
    summary:
      'Artigo de estreia de José Adell no Rio de Janeiro que lhe valeu a nomeação imediata como redator de La Unión Española! Traça um perfil eletrizante de Emilio Castelar: da cátedra em Madrid e da Revolução de 1868 ao drama da Primeira República de 1873 e sua defesa da conquista pacífica da democracia pelo voto e pela imprensa.',
    excerpt:
      'Estamos enfrente de una de las primeras figuras de la España contemporánea. Enfrente del primer orador, del famoso tribuno, del insigne político y estadista de renombre universal.',
    excerptTranslation:
      'Estamos diante de uma das primeiras figuras da Espanha contemporânea. Diante do primeiro orador, do famoso tribuno, do insigne político e estadista de renome universal.',
  },
  {
    id: '21',
    slug: 'nombramiento-redactor-la-union-espanola-1892',
    title: 'J. Adell — Nombramiento de Redactor de “La Unión Española”',
    humanTitle: 'A chegada triunfal de José Adell à imprensa espanhola do Rio de Janeiro',
    date: 'Junho de 1892',
    year: 1892,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'A Direção',
    category: 'republicanismo-espanha',
    pages: [2],
    summary:
      'Nota oficial celebrando a presença de José Adell na capital brasileira e anunciando sua entrada para o corpo redatorial de La Unión Española após o sucesso da série literária Hombres y Cosas de España.',
    excerpt:
      'Encontrándose en esta capital el caballero con cuyo nombre encabezamos esta noticia... la dirección de La Unión Española le concedió el nombramiento de redactor.',
    excerptTranslation:
      'Encontrando-se nesta capital o cavalheiro com cujo nome encabeçamos esta notícia... a direção de La Unión Española concedeu-lhe a nomeação de redator.',
  },
  {
    id: '22',
    slug: 'hombres-y-cosas-de-espana-canovas-del-castillo',
    title: 'Hombres y Cosas de España — II: D. Antonio Cánovas del Castillo',
    humanTitle: 'A elegância de reconhecer a grandeza intelectual de um adversário — com assinatura autógrafa de Adell',
    date: 'c. 1892 / 1897',
    year: 1897,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell (assinatura caligráfica à mão na p. 28)',
    category: 'republicanismo-espanha',
    pages: [29, 30, 27, 28],
    featured: true,
    summary:
      'Mesmo sendo republicano convicto, Adell escreve um perfil magistral e justo de seu adversário monarquista Antonio Cánovas del Castillo, reconhecendo seu papel em enterrar a era dos golpes militares na Espanha e admirando seu vigor parlamentar. Na página 28, destaca-se a belíssima assinatura manuscrita de José Adell.',
    excerpt:
      'El ilustre conservador ha sido vencido por la democracia, pero su caída impone á sus contrincantes; es la derrota de un creyente, de un convencido... curvémonos respetuosamente ante la ilustre figura.',
    excerptTranslation:
      'O ilustre conservador foi vencido pela democracia, mas sua queda impõe respeito aos adversários; é a derrota de um crente, de um convicto... curvemo-nos respeitosamente diante da ilustre figura.',
  },
  {
    id: '23',
    slug: 'programa-republicano-pratico-dezembro-1892',
    title: 'Las coaliciones y el programa republicano práctico',
    humanTitle: 'Menos utopias armadas, mais escolas gratuitas, júri popular e liberdade de consciência',
    date: '20 de Dezembro de 1892',
    year: 1892,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'J. Adell y Fons / José Adell',
    category: 'republicanismo-espanha',
    pages: [2, 13],
    summary:
      'Defende que a República espanhola só triunfará de modo estável por meio de soluções democráticas concretas: sufrágio popular, casamento civil, instrução primária gratuita, obrigatória e laica, e ampla liberdade de cultos.',
    excerpt:
      'Dejémonos de idealismos políticos y de vaguedades utópicas; formemos algo estable, algo práctico y de saludables resultados... la instrucción primaria gratuita, obligatoria y laica.',
    excerptTranslation:
      'Deixemo-nos de idealismos políticos e de vaguezas utópicas; formemos algo estável, algo prático e de saudáveis resultados... a instrução primária gratuita, obrigatória e laica.',
  },
  {
    id: '24',
    slug: 'carta-abierta-gaspar-thous-actitud-castelar-1893',
    title: 'La actitud de Castelar y la coalición republicana — Carta abierta a D. Gaspar de los R. Thous',
    humanTitle: 'Carta fraterna ao fundador de La Unión Española sobre o futuro da democracia',
    date: '12 de Outubro de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [71, 32],
    summary:
      'Carta aberta ao amigo carlista-humanista Gaspar de los Reyes Thous analisando o testamento político de Castelar, as declarações de Ruiz Zorrilla ao jornal francês L’Éclair e os artigos de Pi y Margall, concluindo com uma frase lapidar: a vitória pertence à força dos princípios, não à força bruta das armas.',
    excerpt:
      '¡Cuándo comprenderán todos que á la fuerza de los principios y no á la fuerza de los hombres, está reservada la victoria!',
    excerptTranslation:
      'Quando compreenderão todos que à força dos princípios, e não à força dos homens, está reservada a vitória!',
  },
  {
    id: '25',
    slug: 'epistola-jose-galan-ragel-a-jose-adell-1893',
    title: 'Sr. Dn. José Adell (Carta de D. José Galán Ragel)',
    humanTitle: 'Um debate cavalheiresco no Rio: são as revoluções necessárias como as tempestades?',
    date: 'Outubro de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Galán Ragel',
    category: 'republicanismo-espanha',
    pages: [81],
    summary:
      'Carta respeitosa enviada por José Galán Ragel elogiando a “correta prosa” de José Adell, mas defendendo a tese romântica de que as revoluções armadas (como Cromwell, Garibaldi, Juárez e Lincoln) foram parteiras inevitáveis da liberdade humana.',
    excerpt:
      'La discusión —respondióme— debe buscarse, porque por encima del defecto está el beneficio... Solo se conserva lo que se consigue por medio del trabajo.',
    excerptTranslation:
      'A discussão — respondeu-me — deve ser buscada, porque acima do defeito está o benefício... Só se conserva o que se conquista por meio do trabalho.',
  },
  {
    id: '26',
    slug: 'otra-epistola-respuesta-a-galan-ragel-1893',
    title: 'Otra Epístola — Al Sr. D. José Galán Ragel',
    humanTitle: 'A resposta luminosa de Adell: poupar o sangue das mães e vencer pelo voto e pela educação',
    date: '1º de Novembro de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [31, 61, 62],
    summary:
      'Adell responde a Galán Ragel desmontando o mito romântico das barricadas, lembrando que na Guerra Civil Americana quem se rebelou foram os escravocratas do Sul contra Lincoln, e apontando o exemplo de Gladstone na Inglaterra: educar na oposição e reformar pelo voto sem derramar uma gota de sangue.',
    excerpt:
      'La única república que en España hemos tenido la alcanzamos cuando las corrientes democráticas obligaron al rey á descubrirse bonitamente la corona, proclamándose sin extremecimientos ni violencias, sin la efusión de preciosa sangre.',
    excerptTranslation:
      'A única república que na Espanha tivemos, alcançamo-la quando as correntes democráticas obrigaram o rei a tirar educadamente a coroa, proclamando-se sem violências e sem derramamento de precioso sangue.',
  },
  {
    id: '27',
    slug: 'punto-final-debate-galan-ragel-1893',
    title: 'Punto Final — Al Sr. D. José Galán Ragel',
    humanTitle: 'Encerrando a polêmica com serenidade histórica e amizade intacta',
    date: 'Novembro de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [62],
    summary:
      'Terceira e última carta da série com Galán Ragel, sintetizando em três pontos lúcidos sua visão histórica sobre a Restauração e a necessidade de maturidade democrática antes de mudar a forma de governo.',
    excerpt:
      'Por creer que de aquella controversia á que se me incitaba alguna enseñanza le advendría á mi escasa inteligencia y alguna nueva luz á mi tal vez ofuscada razón.',
    excerptTranslation:
      'Por crer que daquela controvérsia algum ensinamento viria à minha escassa inteligência e alguma nova luz à minha razão.',
  },
  {
    id: '28',
    slug: 'la-coalicion-republicana-barcelona-1889',
    title: 'La coalición republicana (Barcelona, 1889)',
    humanTitle: 'A coerência de ideias acima dos acordos oportunistas de ocasião',
    date: 'Abril de 1889',
    year: 1889,
    periodical: 'El Sufragio Universal',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'republicanismo-espanha',
    pages: [33],
    summary:
      'Respondendo a um convite do jornal La República de Madrid à imprensa de províncias, o jovem Adell argumenta em Barcelona que alianças artificiais entre facções opostas apenas enfraquecem a confiança popular.',
    excerpt:
      'Por cortesía y deferencia hacia el ilustrado colega federal, vamos á expresarle nuestra leal y franca opinión...',
    excerptTranslation:
      'Por cortesia e deferência para com o ilustrado colega federal, vamos expressar-lhe nossa leal e franca opinião...',
  },
  {
    id: '29',
    slug: 'aniversario-revolucion-1868-la-gloriosa-1894',
    title: '1868 (Aniversario de la Revolución de Septiembre)',
    humanTitle: 'Memória da revolução que destronou o absolutismo e abriu a Espanha à tolerância moderna',
    date: 'Setembro de 1894',
    year: 1894,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [65, 79],
    summary:
      'Celebração apaixonada do aniversário da Revolução de Setembro de 1868 (“La Gloriosa”), destacando como os princípios democráticos do Código de 1869 se enraizaram tão fundo na sociedade espanhola que nem a monarquia restaurada pôde apagá-los.',
    excerpt:
      'Cuanto más se aleja de nosotros la fecha de la inmortal revolución de Septiembre, más y más se agiganta su importancia en la patria historia.',
    excerptTranslation:
      'Quanto mais se afasta de nós a data da imortal revolução de Setembro, mais e mais se agiganta sua importância na história pátria.',
  },
  {
    id: '30',
    slug: 'el-3-de-enero-muerte-general-pavia-1895',
    title: 'El 3 de Enero (A Morte do General Pavía)',
    humanTitle: 'Diante do túmulo do general que fechou o Parlamento a baionetas em 1874',
    date: 'Janeiro de 1895',
    year: 1895,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [13, 14],
    summary:
      'Por ocasião da morte do General Manuel Pavía, Adell recorda a madrugada de 3 de janeiro de 1874 em que soldados expulsaram os deputados das Cortes Constituintes, ressaltando que Pavía teve ao menos o pudor de não assumir o poder que políticos ambiciosos correram para dividir.',
    excerpt:
      'El general Pavía ha muerto. El hombre que en la madrugada del 3 de Enero de 1874 acaudillando una turba de indisciplinados soldados arrojó de sus augustos sitiales á los legisladores...',
    excerptTranslation:
      'O general Pavía morreu. O homem que na madrugada de 3 de janeiro de 1874, chefiando uma turba de soldados indisciplinados, expulsou de suas cadeiras os legisladores...',
  },
  {
    id: '31',
    slug: 'la-muerte-de-un-partido-ruiz-zorrilla-1895',
    title: 'La Muerte de un Partido (O Retorno e Agonia de Manuel Ruiz Zorrilla)',
    humanTitle: 'Respeito humano ao velho exilado enfermo — e o clamor urgente por reformas para os operários',
    date: 'Primavera de 1895',
    year: 1895,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [25, 24, 23],
    summary:
      'Ao ver regressar à Espanha, gravemente enfermo após décadas de exílio em Paris, o líder revolucionário Manuel Ruiz Zorrilla, Adell inclina-se com respeito humano diante de seu sofrimento, mas aponta uma verdade social profunda: o operariado cansou de quarteladas políticas e exige reformas econômicas e sociais concretas.',
    excerpt:
      'Herido el corazón y apesumbrada el alma; el prestigio relegado y el valer desconocido, vuelve á España... En la última parte del manifiesto confiesa que las clases obreras ansían grandes reformas sociales que es preciso concederle para resolver palpitante problema económico.',
    excerptTranslation:
      'Ferido o coração e entristecida a alma, volta à Espanha... Na última parte do manifesto confessa que as classes operárias anseiam por grandes reformas sociais que é preciso conceder para resolver o pulsante problema econômico.',
  },
  {
    id: '32',
    slug: 'politica-espanola-regreso-general-polavieja-1897',
    title: 'Política Española (O Regresso do General Polavieja)',
    humanTitle: 'Contra os salvadores de espada: a defesa intransigente do poder civil',
    date: '22 de Maio de 1897',
    year: 1897,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [23, 76],
    summary:
      'Critica o entusiasmo artificial insuflado por facções reacionárias no retorno do General Polavieja das Filipinas, afirmando que a Espanha constitucional já aprendeu a lição histórica e jamais aceitará novamente caudilhos militares.',
    excerpt:
      'Nuestro pueblo, que así como ha suprimido las cuarteladas de abajo no está dispuesto á tolerar política pretoriana en las esferas gubernamentales...',
    excerptTranslation:
      'Nosso povo, que assim como suprimiu as quarteladas de baixo, não está disposto a tolerar política pretoriana nas esferas governamentais...',
  },
  {
    id: '33',
    slug: 'pueblos-y-reyes-fernando-vii-1895',
    title: 'Pueblos y Reyes (O 2 de Maio e a Traição de Fernando VII)',
    humanTitle: 'Como um povo inteiro derramou seu sangue por um rei que devolveu grilhões e Inquisição',
    date: '4 de Maio de 1895',
    year: 1895,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'republicanismo-espanha',
    pages: [73],
    summary:
      'Texto fulgurante no aniversário do 2 de Maio de 1808: homenageia os heróis populares que resistiram a Napoleão e condena com indignação histórica o rei Fernando VII, que ao voltar ao trono restaurou a Inquisição e enviou às prisões os legisladores liberais de Cádiz.',
    excerpt:
      'Honremos á las víctimas de la ambición de Bonaparte; santifiquemos el recuerdo de los que en defensa de su suelo perecieron; pero á la par execremos la memoria del rey chispero...',
    excerptTranslation:
      'Honremos as vítimas da ambição de Bonaparte; santifiquemos a memória dos que em defesa de seu solo pereceram; mas ao mesmo tempo execremos a memória do rei traidor...',
  },

  // ==================== CUBA, FILIPINAS, CRISE DE 1898 & IMPRENSA ====================
  {
    id: '34',
    slug: 'cruzador-fantasma-malaga-a-tribuna-1898',
    title: 'El cruzador fantasma “Málaga” y la prensa vespertina de Río',
    humanTitle: 'O caso hilário do jornal carioca que afundou um navio inexistente e mudou as Filipinas para a África!',
    date: '8 de Junho de 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [68],
    featured: true,
    summary:
      'Uma obra-prima do humor jornalístico! Sem ter dinheiro para pagar os telegramas da Agência Havas, o jornal vespertino A Tribuna copiava e inventava despachos às pressas: acabou criando o naufrágio de um cruzador espanhol chamado “Málaga” (que nunca existiu na Marinha!) e localizou as Ilhas Filipinas junto aos rochedos africanos de Alhucemas!',
    excerpt:
      '¡Porque, caballeros, ni al que asó la manteca se le ocurre juntar el archipiélago filipino á los peñascos de la costa de África!... el cruzador Málaga no existe más que en la vacía cabeza del escribidor de A Tribuna.',
    excerptTranslation:
      'Porque, cavalheiros, nem a quem assou a manteiga ocorreria juntar o arquipélago filipino aos penhascos da costa da África!... o cruzador Málaga não existe senão na cabeça vazia do escrevedor de A Tribuna.',
  },
  {
    id: '35',
    slug: 'comentando-repatriacao-soldados-cuba-1898',
    title: 'Comentando (A Chegada dos Soldados Repatriados de Cuba em La Coruña)',
    humanTitle: 'Dois mil jovens famintos e derrotados descendo do navio enquanto políticos preparam discursos',
    date: '27 de Agosto de 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'X. X. [José Adell]',
    category: 'cuba-filipinas-imprensa',
    pages: [67, 69],
    featured: true,
    summary:
      'Crônica profundamente humana sobre o fim da Guerra de Cuba: duzentos mil filhos humildes arrancados aos campos e oficinas, e os primeiros dois mil desembarcando esquálidos no porto de La Coruña a bordo do vapor Alicante, enquanto em Madrid os deputados só pensam em leis de anistia para salvar os próprios gabinetes.',
    excerpt:
      'Doscientos mil hombres arrancados á los campos y á los talleres... Han desembarcado ya dos mil de estas víctimas de nuestra ceguera patriótica, y entretanto irán llegando los trasatlánticos abarrotados de demacrados hijos de España.',
    excerptTranslation:
      'Duzentos mil homens arrancados aos campos e às oficinas... Já desembarcaram duas mil dessas vítimas de nossa cegueira patriótica, e enquanto isso irão chegando os transatlânticos abarrotados de esquálidos filhos da Espanha.',
  },
  {
    id: '36',
    slug: 'filipinas-paz-e-reformas-1897',
    title: 'Filipinas (A Insurreição Tagala, José Rizal e o Caminho da Paz)',
    humanTitle: 'Contra o fanatismo de todos os lados: o apelo pela paz e representação parlamentar nas Filipinas',
    date: '12 de Dezembro de 1897',
    year: 1897,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [19, 20],
    summary:
      'Analisando o levante nas Filipinas (citando Rojas, José Rizal, o Katipunan e Aguinaldo), Adell rejeita tanto a intolerância clerical (“intolerância negra”) quanto o sectarismo violento, celebrando os acordos de paz de Primo de Rivera e apoiando o pedido republicano para dar assento parlamentar aos habitantes do arquipélago.',
    excerpt:
      'Enemigos somos, porque repugnan á nuestra conciencia sinó á nuestro patriotismo, tanto de la intolerancia negra como de la roja... el mayor bien para los pueblos es la paz.',
    excerptTranslation:
      'Inimigos somos, porque repugnam à nossa consciência tanto a intolerância negra quanto a vermelha... o maior bem para os povos é a paz.',
  },
  {
    id: '37',
    slug: 'los-sucesos-de-la-habana-liberdade-imprensa-1898',
    title: 'Los sucesos de la Habana',
    humanTitle: 'Mesmo em plena guerra, um jornalista jamais aceita militares quebrando tipografias',
    date: '5 de Fevereiro de 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [56],
    summary:
      'Demonstração exemplar de integridade ética: embora defendesse a Espanha no conflito cubano, Adell condena com veemência os oficiais do exército espanhol que invadiram e destruíram redações de jornais em Havana e Madrid, exigindo respeito absoluto à liberdade de pensamento e aos tribunais civis.',
    excerpt:
      'Todos recordamos la vergüenza del asalto á las imprentas de varios periódicos de Madrid... actos indignos de un ejército español acaban de cometer en la Habana los mismos ataques á la manifestación del libre pensamiento.',
    excerptTranslation:
      'Todos recordamos a vergonha do assalto às oficinas de vários jornais de Madrid... atos indignos de um exército espanhol acabam de cometer em Havana os mesmos ataques à livre manifestação do pensamento.',
  },
  {
    id: '38',
    slug: 'lo-del-dia-voladura-del-maine-1898',
    title: 'Lo del Día (A Explosão do Encouraçado “Maine” em Havana)',
    humanTitle: 'O estopim da Guerra de 1898 e a febre dos jornais sensacionalistas de Nova York',
    date: 'Fevereiro de 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [20],
    summary:
      'Escrito dias após a explosão do USS Maine no porto de Havana, denuncia a campanha imediata da imprensa sensacionalista norte-americana (yellow press) para culpar a Espanha sem provas e arrastar os dois países à guerra.',
    excerpt:
      'A propósito de la voladura del «Maine» en el puerto de la Habana los periódicos norteamericanos hanse despachado á su gusto durante la semana que acaba de transcurrir inventando las más estupendas novedades.',
    excerptTranslation:
      'A propósito da explosão do «Maine» no porto de Havana, os jornais norte-americanos esbaldaram-se durante a semana que acaba de transcorrer inventando as mais estupendas novidades.',
  },
  {
    id: '39',
    slug: 'relaciones-espana-estados-unidos-desejamos-a-paz-1898',
    title: 'Relaciones entre Madrid y Washington (“Por nuestra parte deseamos la paz”)',
    humanTitle: 'Semanas antes da guerra: o lamento pelas mães espanholas cansadas de “parir carne de canhão”',
    date: '12 de Março de 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [55],
    summary:
      'Às vésperas da declaração de guerra dos Estados Unidos em 1898, Adell expressa uma frase de lancinante humanidade sobre os soldados mutilados que voltavam de Cuba e sobre o cansaço das mães espanholas.',
    excerpt:
      'Por nuestra parte deseamos la paz. No somos el pueblo guerrero y conquistador de los siglos de los Felipes. Reposo quieren nuestras energías y se van cansando las madres españolas de parir carne de cañón.',
    excerptTranslation:
      'De nossa parte, desejamos a paz. Não somos mais o povo guerreiro e conquistador dos séculos dos Felipes. Repouso querem nossas energias, e vão se cansando as mães espanholas de parir carne de canhão.',
  },
  {
    id: '40',
    slug: 'habilidades-indigenas-sensacionalismo-1898',
    title: 'Habilidades Indígenas (Crítica ao Mercantilismo das Notícias de Sensação)',
    humanTitle: 'A ética do leitor respeitado contra a fabricação de manchetes falsas por lucro',
    date: 'Fevereiro de 1898',
    year: 1898,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [56],
    summary:
      'Reflexão sobre ética jornalística: critica jornais que esquecem o respeito devido ao público leitor que sustenta o periódico, inventando vitórias e desastres imaginários apenas para vender exemplares avulsos.',
    excerpt:
      'Lo que no se concibe, lo que sencillamente es repugnante es el afán de publicar noticias de sensación para obtener ilícito lucro mercantil.',
    excerptTranslation:
      'O que não se concebe, o que simplesmente repugna, é o afã de publicar notícias sensacionalistas para obter lucro mercantil.',
  },
  {
    id: '41',
    slug: 'tomemoslo-en-cuenta-lucio-de-mendonca-1895',
    title: 'Tomémoslo en cuenta (Polêmica com Lúcio de Mendonça e “O Paiz”)',
    humanTitle: 'Debate aberto no Rio com o Ministro do STF e cofundador da Academia Brasileira de Letras',
    date: '14 de Setembro de 1895',
    year: 1895,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'cuba-filipinas-imprensa',
    pages: [26, 25],
    summary:
      'Reproduz na íntegra em português a carta publicada em O Paiz pelo magistrado e escritor Lúcio de Mendonça convocando subscrição popular brasileira em prol dos revolucionários cubanos, seguida da resposta política de Adell analisando a situação das repúblicas centro-americanas e a Doutrina Monroe.',
    excerpt:
      'En las columnas editoriales de O Paiz correspondiente al día 7 del corriente apareció la carta que acaban de leer nuestros compatriotas... suscrita por el Sr. Lúcio de Mendonça.',
    excerptTranslation:
      'Nas colunas editoriais de O Paiz correspondente ao dia 7 do corrente apareceu a carta que acabam de ler nossos compatriotas... subscrita pelo Sr. Lúcio de Mendonça.',
  },
  {
    id: '42',
    slug: 'replica-amistosa-lecho-du-bresil-1895',
    title: 'Réplica amistosa (I & II — Debate com “L’Écho du Brésil”)',
    humanTitle: 'Ironia fina ao jornal francês do Rio: antes de julgar Cuba, olhem para Madagascar, Argel e Querétaro',
    date: '10 e 17 de Agosto de 1895',
    year: 1895,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'J. A. [José Adell]',
    category: 'cuba-filipinas-imprensa',
    pages: [14, 73, 74],
    summary:
      'Série de dois artigos respondendo com humor e erudição histórica ao periódico francófono carioca L’Écho du Brésil, lembrando as próprias intervenções coloniais francesas no Tonquim, Madagascar, Tunísia, Amapá e a aventura imperial de Napoleão III no México.',
    excerpt:
      'Al hablar de este modo no tuvo en cuenta que podíaselo contestar que á nosotros nos tenía sin cuidado que Francia se metiese por tierras del Tonkín y Madagascar...',
    excerptTranslation:
      'Ao falar desse modo, não levou em conta que se lhe podia responder sobre as incursões da França pelas terras do Tonquim e de Madagascar...',
  },

  // ==================== EUROPA, MUNDO, FILOSOFIA & BRASIL ====================
  {
    id: '43',
    slug: 'incorporacion-el-sufragio-universal-barcelona-1889',
    title: 'Presentación de D. J. Adell Fons en “El Sufragio Universal”',
    humanTitle: 'O reconhecimento aos 21 anos em Barcelona pela “elegante forma com que sabe engalanar seus escritos”',
    date: 'Março de 1889',
    year: 1889,
    periodical: 'El Sufragio Universal',
    city: 'Barcelona',
    signature: 'A Redação',
    category: 'europa-mundo',
    pages: [8],
    summary:
      'Nota editorial anunciando o ingresso de José Adell y Fons como cronista mensal de política internacional no prestigiado semanário republicano El Sufragio Universal.',
    excerpt:
      'Nuestro distinguido amigo escribirá en lo sucesivo para las columnas de este semanario revistas mensuales sobre política extrangera, que, dado su escelente criterio y la elegante forma con que sabe engalanar sus escritos, serán leídos con gusto.',
    excerptTranslation:
      'Nosso distinto amigo escreverá doravante para as colunas deste semanário revistas mensais sobre política estrangeira que, dado seu excelente critério e a forma elegante com que sabe ornar seus escritos, serão lidas com gosto.',
  },
  {
    id: '44',
    slug: 'agitaciones-politicas-francia-porvenir-raza-latina-1889',
    title: 'Las agitaciones políticas en Francia y el porvenir de la raza latina (I & II)',
    humanTitle: 'Um hino aos direitos humanos de 1789, à Constituição de Cádiz e à fraternidade latina',
    date: 'Fevereiro e Março de 1889',
    year: 1889,
    periodical: 'El Sufragio Universal',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'europa-mundo',
    pages: [45, 46, 44, 43, 42, 41],
    summary:
      'Extenso e brilhante debate histórico em duas partes com o veterano republicano “D. M. M. G.” sobre o general Boulanger em Paris e a influência da Revolução Francesa na emancipação democrática da Espanha e dos povos latinos, encerrado com nota elogiosa da redação a ambos os contendores.',
    excerpt:
      'No podemos desligar nuestro destino del de la República francesa, ya que ésta por sus instituciones y su historia es en nuestro continente lo que los Estados Unidos en la América moderna: faro luminoso.',
    excerptTranslation:
      'Não podemos desligar nosso destino do da República francesa, já que esta por suas instituições e história é em nosso continente um farol luminoso.',
  },
  {
    id: '45',
    slug: 'politica-en-europa-febrero-1889-fome-e-emigracao',
    title: 'La Política en Europa — Febrero (1889): Armamentos y Fiebre de Emigración',
    humanTitle: 'Exércitos de operários famintos cruzando o oceano rumo à América em busca de pão',
    date: 'Fevereiro de 1889',
    year: 1889,
    periodical: 'El Sufragio Universal',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'europa-mundo',
    pages: [41],
    summary:
      'Texto profético escrito pouco antes da própria emigração de Adell para o Brasil! Descreve com tristeza como os orçamentos militares das grandes potências esmagavam o trabalhador europeu, empurrando multidões de operários a buscar na “hospitaleira e fértil terra americana o pão para sua família que não encontram em sua pátria”.',
    excerpt:
      'Verdaderos ejércitos de obreros, poseídos de la fiebre de emigración, buscan en la hospitalaria y fértil tierra americana el pan para su familia que no encuentran en su patria.',
    excerptTranslation:
      'Verdadeiros exércitos de operários, possuídos pela febre da emigração, buscam na hospitaleira e fértil terra americana o pão para sua família que não encontram em sua pátria.',
  },
  {
    id: '46',
    slug: 'politica-en-europa-marzo-1889-irlanda-serbia-italia',
    title: 'La Política en Europa — Marzo (1889): Francia, Irlanda, Italia y el Drama de la Reina Natalia de Serbia',
    humanTitle: 'Do romance partido da Rainha Natália de Sérvia à luta de Gladstone pela Irlanda',
    date: 'Março e Abril de 1889',
    year: 1889,
    periodical: 'El Sufragio Universal',
    city: 'Barcelona',
    signature: 'J. Adell y Fons',
    category: 'europa-mundo',
    pages: [35, 34, 33, 36, 37, 38, 39, 40],
    summary:
      'Grande painel europeu narrando com sensibilidade literária o divórcio forçado e o sequestro do filho da Rainha Natália de Sérvia pelo Rei Milano em Wiesbaden, a vitória moral de Parnell e Gladstone contra as cartas falsas do jornal The Times na questão irlandesa, o declínio de Bismarck e os protestos de 800 mil operários desempregados na Itália.',
    excerpt:
      'En medio de sus pesares, restábale el amor de su hijo Alejandro por ella adorado; y aun éste cariño fuéle arrebatado, asaltada su morada de Wiesbaden...',
    excerptTranslation:
      'Em meio aos seus pesares, restava-lhe o amor de seu filho Alexandre por ela adorado; e até esse carinho lhe foi arrebatado, assaltada sua morada de Wiesbaden...',
  },
  {
    id: '47',
    slug: 'trece-de-mayo-revolta-da-armada-rio-1894',
    title: 'Trece de Mayo (O Fim da Revolta da Armada na Baía de Guanabara)',
    humanTitle: 'Um imigrante espanhol saudando a paz e o império da lei civil na República Brasileira',
    date: 'Março de 1894',
    year: 1894,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'J. Adell',
    category: 'europa-mundo',
    pages: [50],
    summary:
      'Testemunha ocular dos seis meses de bombardeios na Baía do Rio de Janeiro durante a Revolta da Armada (1893–1894), Adell celebra o restabelecimento da legalidade constitucional no Brasil, desejando o fim definitivo do caudilhismo e dos levantes de quartel nas Américas.',
    excerpt:
      'La fecha conmemorativa del triunfo del Gobierno de la República Brasileña sobre las fuerzas revolucionarias de la bahía de Río de Janeiro... no representa el triunfo de un caudillo, sino el triunfo de la ley.',
    excerptTranslation:
      'A data comemorativa do triunfo do Governo da República Brasileira sobre as forças revolucionárias da baía do Rio de Janeiro... não representa o triunfo de um caudilho, mas o triunfo da lei.',
  },
  {
    id: '48',
    slug: 'el-crimen-de-lyon-sadi-carnot-1894',
    title: 'El Crimen de Lyon (O Assassinato de Sadi Carnot)',
    humanTitle: 'O alerta angustiado de que o terrorismo cego destruiria as próprias liberdades democráticas',
    date: '30 de Junho de 1894',
    year: 1894,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'europa-mundo',
    pages: [49, 48],
    summary:
      'Diante do assassinato a punhal do íntegro presidente francês Sadi Carnot em Lyon, Adell lamenta a tragédia humana e adverte que atentados terroristas serviam apenas de pretexto para que os impérios autocráticos esmagassem as liberdades civis.',
    excerpt:
      '¡Ay de nuestras libertades y de nuestro progreso el día en que las autocracias del norte de Europa tengan que aunar sus esfuerzos para extirpar los errores nacidos á la sombra de la democracia!',
    excerptTranslation:
      'Ai de nossas liberdades e de nosso progresso no dia em que as autocracias do norte da Europa unirem esforços a pretexto de extirpar os erros nascidos à sombra da democracia!',
  },
  {
    id: '49',
    slug: 'actualidades-emile-zola-doctor-pascal-1894',
    title: 'Actualidades (Crise Espiritual do Século XIX e “El Doctor Pascal” de Émile Zola)',
    humanTitle: 'O vazio da alma moderna lido através de Émile Zola e Tolstói',
    date: '28 de Julho de 1894',
    year: 1894,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'europa-mundo',
    pages: [47, 64],
    summary:
      'Ensaio filosófico de rara beleza em que Adell cita o romance O Doutor Pascal, de Émile Zola, e o pensamento de Tolstói para explicar a angústia de uma geração dividida entre velhos dogmas destruídos e um mundo novo que tardava a nascer.',
    excerpt:
      '«La ciencia todo lo allanó, la tierra está desnuda, el cielo vacío. ¿En qué terreno sólido voy á construir mi casa una vez que demolieron el viejo mundo y que tardan tanto en construir el nuevo?»',
    excerptTranslation:
      '«A ciência tudo aplainou, a terra está nua, o céu vazio. Em que terreno sólido vou construir minha casa uma vez que demoliram o velho mundo e tardam tanto em construir o novo?»',
  },
  {
    id: '50',
    slug: 'politica-en-europa-enero-1896-africa-transvaal',
    title: 'La Política en Europa — Enero (1896): La Rapiña Colonial en África y los Boers del Transvaal',
    humanTitle: 'Condenação aberta à ganância imperialista europeia na África',
    date: 'Janeiro de 1896',
    year: 1896,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'europa-mundo',
    pages: [77],
    summary:
      'Critica duramente os “procedimentos piráticos de rapina” das potências europeias na partilha da África (Etiópia, Madagascar, Egito e a incursão inglesa contra os bôeres do Transvaal), prevendo que aquela corrida armamentista levaria a Europa a uma guerra apocalíptica.',
    excerpt:
      'Debido á esta política de rapiñas y merced á estos piráticos procedimientos de conquista colonial, háse visto sobresaltado nuestro mundo político europeo y en inminente peligro de sangrienta y apocalíptica lucha.',
    excerptTranslation:
      'Devido a esta política de rapinas e a estes procedimentos piráticos de conquista colonial, vê-se sobressaltado nosso mundo europeu e em iminente perigo de sangrenta e apocalíptica luta.',
  },
  {
    id: '51',
    slug: 'politica-en-europa-febrero-1896-italia-abisinia',
    title: 'La Política en Europa — Febrero (1896): Italia en Abisinia y Alianzas Democráticas',
    humanTitle: 'O sacrifício inútil de jovens soldados italianos nas areias da Etiópia (com final manuscrito)',
    date: 'Fevereiro de 1896',
    year: 1896,
    periodical: 'La Unión Española (conclusão manuscrita à pena)',
    city: 'Rio de Janeiro',
    signature: 'José Adell (1896)',
    category: 'europa-mundo',
    pages: [21, 22],
    summary:
      'Lamenta as preciosas vidas da juventude italiana sacrificadas na aventura colonial da Abissínia (Etiópia) e propõe uma aliança entre França, Inglaterra, Espanha e Portugal em defesa da liberdade europeia. Os parágrafos finais na página 22 estão preservados na própria letra manuscrita de Adell.',
    excerpt:
      '¡Cuán preciosas existencias sacrificadas en los campos de Ethiopia desde el degüello de la expedición Bianchi hasta los recientes y dolorosos reveses!',
    excerptTranslation:
      'Quão preciosas existências sacrificadas nos campos da Etiópia desde o massacre da expedição Bianchi até os recentes e dolorosos reveses!',
  },
  {
    id: '52',
    slug: 'conversion-principe-boris-bulgaria-1896',
    title: 'La conversión del príncipe Boris de Bulgaria y la soberanía de las naciones',
    humanTitle: 'Quando os reis mudam de religião por um trono — e a soberania passa às mãos dos povos',
    date: '1896',
    year: 1896,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'europa-mundo',
    pages: [19],
    summary:
      'Analisa a decisão do Príncipe Fernando da Bulgária de batizar seu filho Boris na Igreja Ortodoxa búlgara apesar das ameaças de excomunhão do Vaticano, concluindo que nos tempos modernos a soberania da nação superou para sempre a soberania dos reis.',
    excerpt:
      'Bueno es recojer estas dos enseñanzas: que en nuestros tiempos la soberanía de la nación ha sucedido á la soberanía de los reyes.',
    excerptTranslation:
      'Bom é recolher estes ensinamentos: que em nossos tempos a soberania da nação sucedeu à soberania dos reis.',
  },
  {
    id: '53',
    slug: 'el-patriotismo-ensaio-filosofico-1896',
    title: 'El Patriotismo',
    humanTitle: 'O verdadeiro amor à pátria não é egoísmo territorial, mas devoção à liberdade humana',
    date: '2 de Maio de 1896',
    year: 1896,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'europa-mundo',
    pages: [76, 77],
    summary:
      'Belo ensaio filosófico distinguindo o patriotismo cego e belicoso do verdadeiro amor cívico: lembra os peregrinos do Mayflower que deixaram sua terra para viver livres e afirma que só as ideias progressistas de liberdade unem verdadeiramente um povo moderno.',
    excerpt:
      'Sobre el amor al suelo natal predomina siempre el amor á una creencia, la devoción á una idea... Solo las ideas son grandes, solo ellas gobiernan los estados.',
    excerptTranslation:
      'Sobre o amor ao solo natal predomina sempre o amor a uma crença, a devoção a uma ideia... Só as ideias são grandes, só elas governam os estados.',
  },

  // ==================== ARTE, LITERATURA & MUNDO IBÉRICO ====================
  {
    id: '54',
    slug: 'por-honra-de-todos-rosalia-pardo-bazan-1893',
    title: 'Por honra de todos (Em Defesa de Emilia Pardo Bazán, Rosalía de Castro e da Unidade Plural)',
    humanTitle: 'A paixão literária de Adell pelas grandes escritoras galegas e pela língua catalã e valenciana',
    date: '5 de Julho de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'arte-iberismo',
    pages: [1, 15],
    featured: true,
    summary:
      'Respondendo a um artigo de Pinheiro Chagas em O Paiz sobre Doña Emilia Pardo Bazán, Adell exalta o florescimento das literaturas regionais na Espanha — homenageando com ternura a imortal poetisa galega Rosalía de Castro, o catalão Guimerà e o valenciano Llorente — e recorda a gesta das Cortes de Cádiz de 1812.',
    excerpt:
      'Aquella insigne escritora que anidaba en su corazón todo el sentimiento gallego, la inmortal Rosalía Castro de Murguía, ¿no debía á libros como Cantares y Follas Novas escritos en su dulcísimo dialecto la inmensa popularidad de que gozaba en España?',
    excerptTranslation:
      'Aquela insigne escritora que aninhava em seu coração todo o sentimento galego, a imortal Rosalía de Castro, não devia a livros como Cantares e Follas Novas, escritos em seu dulcíssimo idioma, a imensa popularidade de que gozava na Espanha?',
  },
  {
    id: '55',
    slug: 'el-meeting-de-badajoz-espanha-e-portugal-1893',
    title: 'El Meeting de Badajoz (A Amizade entre Espanha e Portugal)',
    humanTitle: 'Amizade fraterna com Portugal sim, anexação jamais: o sonho da harmonia entre povos latinos',
    date: '15 de Agosto de 1893',
    year: 1893,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'J. Adell',
    category: 'arte-iberismo',
    pages: [15, 16],
    summary:
      'Analisando o encontro republicano hispano-português de Badajoz, Adell tranquiliza a colônia portuguesa no Brasil: a Espanha jamais desejou absorver Portugal, mas sim cultivar uma amizade sincera e fraterna entre todas as nações latinas.',
    excerpt:
      'El pueblo español desea la amistad de Portugal como la desea de Francia y de Italia; pero la unión forzada con ellos jamás.',
    excerptTranslation:
      'O povo espanhol deseja a amizade de Portugal como deseja a da França e da Itália; mas uma união forçada, jamais.',
  },
  {
    id: '56',
    slug: 'cuentas-anejas-e-a-la-uniao-portugueza-1894-1896',
    title: 'Cuentas Añejas (1894) & Á la “União Portugueza” (1896)',
    humanTitle: 'Da história da Guerra Peninsular ao bom humor sobre as zarzuelas traduzidas em Lisboa',
    date: '18 de Agosto de 1894 e 19 de Setembro de 1896',
    year: 1896,
    periodical: 'La Unión Española',
    city: 'Rio de Janeiro',
    signature: 'José Adell',
    category: 'arte-iberismo',
    pages: [64, 63, 66, 65, 69, 70],
    summary:
      'Reúne os dois diálogos históricos e bem-humorados com escritores portugueses no Rio: primeiro, restabelecendo a documentação histórica das batalhas de Bailén, Albuera e Vitória frente a Pinheiro Chagas; depois, respondendo com graça a Eugenio Silveira (da União Portugueza) que os únicos espanhóis que “reclamavam” de Portugal eram os autores de zarzuelas cômicas traduzidas sem direitos autorais, encerrando com votos sinceros de glória à heroica nação lusitana.',
    excerpt:
      'Como el señor Silveira por España, sentimos nosotros por Portugal todo el cariño y admiración á que la hacen acreedor todas sus virtudes y sus legendarias glorias.',
    excerptTranslation:
      'Como o senhor Silveira pela Espanha, sentimos nós por Portugal todo o carinho e admiração a que o tornam credor todas as suas virtudes e suas lendárias glórias.',
  },
];
