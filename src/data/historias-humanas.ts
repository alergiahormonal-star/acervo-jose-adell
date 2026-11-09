export interface HumanStory {
  id: string;
  slug: string;
  kicker: string;
  year: string;
  location: string;
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  coverImage: string;
  pages: number[];
  relatedWorkSlugs: string[];
  paragraphs: string[];
  curiosityBox: {
    title: string;
    text: string;
  };
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  dates: string;
  story: string;
  highlightQuote?: string;
  pages: number[];
  image: string;
}

export const FAMILY_AND_CIRCLE: FamilyMember[] = [
  {
    id: 'pepe-adell',
    name: 'José Adell y Fons ("Pepe Adell")',
    relation: 'O Patriarca • Jornalista, Livre-Pensador e Mestre Gravador',
    dates: 'Vinaròs, 10.02.1868 — Salvador da Bahia, 12.05.1927',
    story:
      'Autodidata sem diplomas universitários, Pepe Adell forjou o próprio destino entre dois mundos. Aos 17 anos já era secretário de redação em Barcelona; no Brasil, dirigiu La Unión Española no Rio de Janeiro, esculpiu em metal para a Presidência da República e viveu seus últimos dias como respeitado mestre gravador na Bahia, sempre protegido por seu inseparável sorriso irônico e generoso.',
    highlightQuote:
      '“Mais vale falar de coisas risonhas do que escrever sobre lágrimas.”',
    pages: [20, 28, 75, 84, 85, 88],
    image: '/paginas/pagina-28.webp',
  },
  {
    id: 'emilia-vallespi',
    name: 'Doña Emilia Vallespí de Adell',
    relation: 'A Esposa Amada • Alma da Casa Espanhola no Rio',
    dates: '01.01.1870 — Rio de Janeiro, 05.09.1903',
    story:
      'Mulher de raro espírito, franqueza e doçura, Emilia transformou a casa da família Adell no coração acolhedor da colônia espanhola no Rio de Janeiro. Sua partida precoce aos 33 anos, num sábado de setembro de 1903 após longa enfermidade, paralisou a comunidade: mais de quarenta carruagens acompanharam seu féretro coberto de flores até o Cemitério de São João Batista.',
    highlightQuote:
      '“Nunca poderemos esquecer a graça, o engenho e a amabilidade com que acolhia a quantos se apresentavam em sua casa.”',
    pages: [80, 82, 83],
    image: '/paginas/pagina-83.webp',
  },
  {
    id: 'tres-filhos',
    name: 'Josefina, Alberto e Pepín (José)',
    relation: 'Os Três Filhos Órfãos na Tarde de 1903',
    dates: 'Infância no Rio de Janeiro • Continuidade da Memória',
    story:
      'Eram ainda crianças pequenas quando perderam a mãe às 14h30 de 5 de setembro de 1903. Na coroa de flores sobre o ataúde lia-se a dedicatória infantil: “A su adorada madre, Josefina, Alberto y Pepín”. Às cinco da tarde, ao verem o caixão entrar no coche fúnebre, os gritos das três crianças pedindo para ir junto com a mãe fizeram chorar todos os presentes — inclusive o Cônsul da Espanha. Décadas depois, em 1927, dois dos filhos seguiam honrando o nome do pai no Rio de Janeiro.',
    highlightQuote:
      '“Em sua inconsciência da infância, só viam que levavam sua mãe e pediam a todo custo para ir com ela!...”',
    pages: [75, 83],
    image: '/paginas/pagina-82.webp',
  },
  {
    id: 'alberto-adell',
    name: 'Alberto Adell y Fons',
    relation: 'O Irmão Mais Novo • Prodígio Cego do Violino e do Piano',
    dates: 'Nascido em Vinaròs (c. 1871) • Nomeado Professor em 1889',
    story:
      'Cego desde menino e educado desde 1877 na Escuela de Ciegos y Sordo-Mudos de Barcelona, Alberto revelou um gênio musical assombroso no violino, no piano e na composição. Aos 18 anos, foi nomeado oficialmente Professor Auxiliar pelo Ayuntamiento de Barcelona. No mesmo recorte que celebra a conquista de Alberto, a imprensa exalta o talento literário autodidata de seu irmão mais velho, José.',
    highlightQuote:
      '“Grande honra para Vinaròs, que seus filhos abram passo pelo escabroso e difícil caminho da arte.”',
    pages: [55, 88],
    image: '/paginas/pagina-55.webp',
  },
  {
    id: 'morales-de-los-rios',
    name: 'Adolfo Morales de los Ríos',
    relation: 'O Grande Amigo • Arquiteto do Museu Nacional de Belas Artes',
    dates: 'Sevilha, 1858 — Rio de Janeiro, 1928',
    story:
      'Autor dos projetos do Museu Nacional de Belas Artes e do Supremo Tribunal Federal na Avenida Central, Morales de los Ríos foi companheiro inseparável de Pepe Adell nas tertúlias da Rua da Ajuda. Ao saber da morte do amigo na Bahia em 1927, datilografou uma carta-epitáfio comovente de duas páginas que é uma verdadeira joia literária sobre a amizade, a modéstia e a dignidade operária.',
    highlightQuote:
      '“Não é o caso de comentar sua morte com um simples Requiescat in pace. Sua memória está viva na lembrança e no coração dos que o conhecemos.”',
    pages: [84, 85, 86, 89],
    image: '/paginas/pagina-84.webp',
  },
];

export const HUMAN_STORIES: HumanStory[] = [
  {
    id: 'carta-morales-hamlet',
    slug: 'o-sorriso-de-pepe-adell-e-a-carta-de-morales-de-los-rios',
    kicker: 'Amizade & Despedida (1927)',
    year: '1927',
    location: 'Rio de Janeiro & Salvador da Bahia',
    title: 'O Escudo do Sorriso e o Crânio de Hamlet: A Carta de Adeus de Morales de los Ríos',
    subtitle:
      'Quando Pepe Adell morreu discretamente na Bahia, o grande arquiteto do Rio de Janeiro sentou-se à máquina de escrever para impedir que o amigo fosse esquecido.',
    quote:
      'Se algum dia o seu crânio caísse entre os dedos da mão de um novo Hamlet, que não se preocupe com o “To be or not to be”: ser ou não ser jamais foi dúvida pessoal para Pepe Adell.',
    quoteAuthor: 'Adolfo Morales de los Ríos (Rio de Janeiro, 1927)',
    coverImage: '/paginas/pagina-84.webp',
    pages: [84, 85, 75],
    relatedWorkSlugs: ['carta-tributo-morales-de-los-rios-1927', 'necrologio-correo-de-espana-1927'],
    paragraphs: [
      'Em maio de 1927, chegava ao Rio de Janeiro, vinda da Livraria Espanhola de Salvador da Bahia, uma notícia breve e dolorosa: no dia 12 daquele mês, falecera José Adell y Fons. Seus ossos repousavam num canto ignorado de um cemitério provinciano — um destino quase secreto, bem próprio da modéstia voluntária de quem passou a vida fugindo de holofotes, diplomas e vaidades.',
      'Inconformado com um frio “Requiescat in pace”, seu velho amigo Adolfo Morales de los Ríos — o célebre arquiteto espanhol que desenhou o Museu Nacional de Belas Artes — pegou duas folhas timbradas da firma J. L. Conde & Cia, na Rua Visconde de Itaúna, e escreveu um retrato profundamente humano intitulado “Pepe Adell, ha muerto”.',
      'Morales revela quem era Pepe por trás das polêmicas de jornal: um socialista puro, “como os primeiros catecúmenos cristãos que iam até o martírio ao confessar a fé que os alentava”, movido apenas pelo altruísmo e pelo equilíbrio social. Recorda a casinha colonial baixa da Rua da Ajuda, no centro antigo do Rio, cujo beiral de telhado quase se podia tocar com a ponta das bengalas. Ali dentro pulsavam as duas metades da alma de Pepe: sua oficina artística de mestre gravador em metal, disputado pela clientela, e as oficinas tipográficas de La Unión Española.',
      'Naquela sala modesta reunia-se uma roda inesquecível de imigrantes sonhadores: o cubano Montilla, os sábios sevilhanos Barradas e Meneses, o abnegado Elías Novoa, os irmãos Vicente e Manuel do Pazo, o artista basco Plácido Isasi e o próprio Morales (“o mais tristão andaluz que já se pôde inventar”). E no centro de todos, a arma defensiva de Pepe Adell diante das dores do exílio e da vida: o seu sorriso largo, tolerante e luminoso.',
    ],
    curiosityBox: {
      title: 'Detalhe Curioso no Papel Original',
      text: 'Repare no fac-símile da página 84: o papel timbrado pertence a “J. L. Conde & Cia — Importação de Artigos de Toucador e Especialidades, Rua Visconde Itaúna, 65”, com correções feitas à pena pelo próprio Adolfo Morales de los Ríos antes de assinar na segunda página.',
    },
  },
  {
    id: 'pedrada-largo-sao-francisco',
    slug: 'a-pedrada-na-cabeca-no-largo-de-sao-francisco-1895',
    kicker: 'Coragem nas Ruas do Rio (1895)',
    year: 'Setembro de 1895',
    location: 'Largo de São Francisco de Paula, Rio de Janeiro',
    title: 'Sangue na Redação: O Dia em que José Adell Foi Ferido na Cabeça num Tumulto no Rio',
    subtitle:
      'Em meio a um comício inflamado liderado por José do Patrocínio pela independência de Cuba, o jornalista espanhol foi às ruas e acabou atingido na cabeça.',
    quote:
      'Produziram-se acaloradas disputas e depois sérios tumultos, em resultado dos quais foi ferido na cabeça o distinto escritor espanhol D. José Adell, redator do periódico La Unión Española.',
    quoteAuthor: 'Telegrama Internacional da Agência Fabra (Setembro de 1895)',
    coverImage: '/paginas/pagina-70.webp',
    pages: [70, 26],
    relatedWorkSlugs: ['telegrama-agencia-fabra-ferimento-jose-adell-1895', 'tomemoslo-en-cuenta-lucio-de-mendonca-1895'],
    paragraphs: [
      'José Adell nunca foi um intelectual de gabinete que escrevia escondido atrás de pseudônimos seguros. Como recordaria mais tarde Morales de los Ríos, ele e seus companheiros sabiam “sair à rua quando fosse preciso”. E em setembro de 1895, as ruas do centro do Rio de Janeiro ferviam.',
      'No Largo de São Francisco de Paula — a poucos passos da Rua do Ouvidor e das principais redações cariocas — uma multidão reuniu-se convocada pelo lendário abolicionista brasileiro José do Patrocínio em apoio aos insurretos cubanos e ao líder Antonio Maceo. Após os discursos, os manifestantes marcharam pelas ruas parando diante das fachadas dos jornais.',
      'Quando os gritos contra a Espanha ecoaram diante das redações, grupos de imigrantes espanhóis responderam bradando “¡Viva España!”. O embate verbal transformou-se rapidamente num tumulto físico severo até a intervenção da polícia. No olho do furacão estava José Adell: atingido diretamente na cabeça durante o confronto, a notícia de seu ferimento cruzou o Atlântico por cabo submarino e foi distribuída às capitais europeias pela Agência Telegráfica Fabra, via Lisboa.',
      'O mais notável é que nem a cicatriz física o tornou rancoroso: em seus textos, Adell continuou condenando a brutalidade militar, defendendo reformas democráticas para Cuba e Filipinas e tratando o povo brasileiro com respeito fraterno.',
    ],
    curiosityBox: {
      title: 'Dois Gigantes da Imprensa Frente a Frente',
      text: 'O episódio coloca na mesma cena histórica do Rio de Janeiro de 1895 o grande tribuno negro da Abolição brasileira, José do Patrocínio, e o jornalista republicano e operário espanhol José Adell y Fons.',
    },
  },
  {
    id: 'adeus-emilia-orfaos',
    slug: 'o-adeus-a-dona-emilia-e-o-grito-dos-tres-filhos-1903',
    kicker: 'Amor, Luto & Família (1903)',
    year: '5 de Setembro de 1903',
    location: 'Rio de Janeiro (Cemitério de São João Batista)',
    title: 'Quarenta Carruagens em Lágrimas: A Partida de Doña Emilia e o Desespero dos Três Filhos Pequenos',
    subtitle:
      'Aos 33 anos, a companheira de Pepe Adell partiu num sábado de setembro, deixando uma cena de cortar o coração na memória da colônia espanhola.',
    quote:
      'Não havia uma única pessoa que não chorasse ao escutar os dilacerantes gritos dos três órfãos — Josefina, Alberto e Pepe — que só viam que levavam sua mãe e pediam a todo custo para ir com ela!',
    quoteAuthor: 'Crônica fúnebre do Rio de Janeiro (Setembro de 1903)',
    coverImage: '/paginas/pagina-83.webp',
    pages: [83, 82, 80],
    relatedWorkSlugs: ['obituario-emilia-vallespi-de-adell-1903', 'missa-setimo-dia-emilia-vallespi-1903'],
    paragraphs: [
      'Por trás do polemista vigoroso e do mestre artesão do metal, batia o coração de um marido apaixonado e de um pai que conheceu a dor mais funda da existência longe de sua terra natal. No sábado, 5 de setembro de 1903, às duas e meia da tarde, falecia no Rio de Janeiro, após longa e cruel enfermidade, sua esposa Doña Emilia Vallespí de Adell. Tinha apenas 33 anos — nascera em 1º de janeiro de 1870, como registra a anotação manuscrita guardada com carinho pela família ao pé do recorte.',
      'Emilia era muito mais do que a esposa do diretor de La Unión Española: com sua conversa espirituosa, franqueza e bondade sem afetação, fizera de sua casa o ponto de encontro predileto dos imigrantes espanhóis no Rio. Desde a manhã de domingo, a residência ficou tão tomada de amigos e famílias inteiras que mal se conseguia chegar perto da câmara mortuária, totalmente coberta de flores naturais.',
      'Entre dezenas de coroas — enviadas pelas famílias Pazos, Montilla, Novoa, Jiménez, Lozano, Santos e Pascual — duas fitas faziam todos baixarem os olhos: “A su querida Emilia, Pepe” e “A su adorada madre, Josefina, Alberto y Pepín”.',
      'Às cinco da tarde, quando o ataúde foi levado ao coche fúnebre, o protocolo desmoronou. Os três filhos pequenos do casal, pequenos demais para compreender a irreversibilidade da morte, gritaram desesperados implorando para entrar no carro e partir junto com a mãe. Mais de quarenta carruagens seguiram em silêncio choroso até a sepultura nº 2666 do quadro 2º do Cemitério de São João Batista, num cortejo presidido pelo próprio Cônsul da Espanha, Don Juan Capllonch y Puerto.',
    ],
    curiosityBox: {
      title: 'Memória Guardada à Mão',
      text: 'Na página 83 do acervo original, alguém da família anotou cuidadosamente à caneta as datas exatas de Emilia: “* 01.01.1870 / † 05.9.1903” — o mesmo gesto amoroso repetido na página 75 para José Adell (“* 10.02.1868 / † 12.5.1927”).',
    },
  },
  {
    id: 'irmao-cego-vinaros',
    slug: 'alberto-adell-o-irmao-cego-prodigio-da-musica-em-barcelona',
    kicker: 'Raízes em Vinaròs & Superação (1889)',
    year: '1889',
    location: 'Vinaròs & Barcelona, Espanha',
    title: 'O Violinista Cego de 18 Anos e o Irmão Autodidata: O Orgulho de Vinaròs',
    subtitle:
      'Nascidos numa família voltada às artes na costa valenciana, os irmãos Adell y Fons venceram barreiras quase impossíveis no século XIX.',
    quote:
      'O ceguinho Alberto, que é quase um menino, uma esperança musical, nasceu em Vinaròs... E esta família possui outro rebento que, sem estudos universitários nem de segunda instrução sequer, mostra aptidões nada comuns para a carreira literária.',
    quoteAuthor: 'El Sufragio Universal (1889)',
    coverImage: '/paginas/pagina-55.webp',
    pages: [55, 88],
    relatedWorkSlugs: ['nomeacao-alberto-adell-fons-barcelona-1889', 'manuscrito-biografico-familia-adell'],
    paragraphs: [
      'Para compreender a sensibilidade social de José Adell — sua compaixão visceral pelos vulneráveis, pelos operários sem sustento e pelos injustiçados — basta olhar para dentro da casa onde ele cresceu em Vinaròs, pequena cidade marítima da província de Castellón, na antiga região valenciana.',
      'Seu irmão mais novo, Alberto Adell y Fons, perdera a visão ainda criança. Num século XIX em que a cegueira frequentemente condenava ao isolamento, Alberto ingressou em 1877 na Escuela Municipal de Ciegos y Sordo-Mudos de Barcelona. Ali, transformou a escuridão em música: dominou com virtuosismo arrebatador o violino, o piano e a composição.',
      'Em 1889, quando faleceu seu mestre D. J. Cayetano Vallés, a Câmara Municipal de Barcelona não hesitou: nomeou o jovem Alberto, então com apenas 18 anos de idade, Professor Auxiliar da cadeira de violino da instituição.',
      'O jornal que noticiou o triunfo do jovem músico fez questão de revelar um segundo milagre daquela mesma família de Vinaròs: o irmão de Alberto, José Adell y Fons, que sem jamais ter frequentado universidade nem sequer o ensino secundário formal, já assombrava os leitores de Barcelona com crônicas de política internacional de uma erudição e elegância dignas dos grandes mestres.',
    ],
    curiosityBox: {
      title: 'Dois Irmãos, Duas Formas de Iluminar',
      text: 'Não por acaso, o primeiro jornal em que o jovem José Adell atuou como secretário de redação em Barcelona, aos 17 anos (1885), chamava-se exatamente “La Luz”.',
    },
  },
  {
    id: 'mestre-gravador-campos-sales',
    slug: 'o-mestre-gravador-sem-diplomas-e-a-medalha-de-campos-sales-1900',
    kicker: 'Arte em Metal & Reconhecimento Oficial (1900)',
    year: '1900',
    location: 'Rio de Janeiro & Buenos Aires',
    title: 'O Buril do Operário Ilustrado: Quando o Governo Brasileiro Escolheu Pepe Adell',
    subtitle:
      'Sem ostentar títulos acadêmicos, o imigrante valenciano tornou-se mestre disputado da gravura artística e esculpiu a medalha histórica da viagem presidencial de 1900.',
    quote:
      'Era um autodidata. Exercia o ofício de gravador e, mesmo não sendo portador de diplomas, era reconhecido como um Mestre! A ele coube esculpir, indicado pelo Governo Brasileiro, a medalha comemorativa da visita do Presidente Campos Sales à Argentina, em 1900.',
    quoteAuthor: 'Memorial Manuscrito da Família Adell',
    coverImage: '/paginas/pagina-88.webp',
    pages: [88, 67, 28],
    relatedWorkSlugs: ['manuscrito-biografico-familia-adell', 'semblanza-poema-pablo-isasi'],
    paragraphs: [
      'Havia algo de renascentista na rotina diária de Pepe Adell no Rio de Janeiro e, mais tarde, em Salvador. Durante o dia, inclinava-se com lentes de aumento e buris finíssimos de aço sobre chapas de bronze, prata e ouro, abrindo sulcos microscópicos com pulso firme; à noite, empunhava a pena para debater os destinos da democracia europeia e americana.',
      'Em outubro de 1900, a diplomacia sul-americana viveu um momento histórico: o Presidente do Brasil, Manuel Ferraz de Campos Sales, realizou uma visita oficial triunfal a Buenos Aires, recebido por Julio Argentino Roca para selar a paz e a cooperação entre as duas repúblicas. Para eternizar o encontro numa medalha comemorativa oficial, o Governo Brasileiro não escolheu um medalhista titulado da Europa: indicou o mestre gravador espanhol da Rua da Ajuda, José Adell y Fons.',
      'Premiado em diversas exposições e respeitado tanto no Rio quanto na capital baiana, Pepe jamais deixou que o prestígio artístico o afastasse de sua identidade operária. Como escreveu seu amigo Pablo Isasi num poema acróstico dedicado a ele (“Semblanza”): “Escuta ao pobre do mesmo modo que ao poderoso altaneiro, e defende com sua pena a Liberdade e o Progresso”.',
    ],
    curiosityBox: {
      title: 'A Caligrafia de um Gravador',
      text: 'Observe na página 28 do acervo a assinatura autógrafa “José Adell” ao final do ensaio sobre Cánovas del Castillo: as curvas simétricas e o controle milimétrico da pena revelam imediatamente a mão treinada de um mestre gravador em metal.',
    },
  },
  {
    id: 'curiosidades-cruzador-malaga-saudade',
    slug: 'o-cruzador-fantasma-malaga-a-saudade-no-mar-e-o-olhar-humano',
    kicker: 'Humor Fino, Saudade & Empatia Social',
    year: '1886–1898',
    location: 'Atlântico, Madrid, Barcelona & Rio de Janeiro',
    title: 'O Navio Fantasma “Málaga”, as Casas-Caverna e a Saudade que Envelhece no Mar',
    subtitle:
      'Entre lágrimas de retorno à pátria, denúncias contra a fome operária e ironias deliciosas contra fake news do século XIX, os textos de Adell pulsam de vida real.',
    quote:
      'Quanto envelhecemos os indivíduos! Há mais de um lustro me despedi do farol de Cádiz... e ao voltar hoje à pátria querida, trago prematuras cãs na cabeça, tardios desenganos no coração e a perda irreparável de seres queridos.',
    quoteAuthor: 'José Adell [A. Fons], Carta de Madrid (20 de Setembro de 1893)',
    coverImage: '/paginas/pagina-78.webp',
    pages: [78, 58, 59, 68, 67],
    relatedWorkSlugs: [
      'carta-de-madrid-nostalgia-e-villacanas-1893',
      'atentado-pallas-entrevista-tarrida-del-marmol-1893',
      'cruzador-fantasma-malaga-a-tribuna-1898',
      'comentando-repatriacao-soldados-cuba-1898',
    ],
    paragraphs: [
      'Ler as 89 páginas do acervo de José Adell é descobrir um cronista capaz de transitar da emoção mais íntima à ironia mais afiada. Em 20 de setembro de 1893, ainda tonto do enjoo da travessia marítima desde o Rio de Janeiro, ele desembarca na Espanha após mais de cinco anos de ausência e confessa aos leitores a dor silenciosa de todo imigrante: os cabelos brancos precoces, os entes queridos que morreram sem despedida e as amizades desfeitas pela distância do oceano.',
      'Dias depois, seu olhar humano detém-se sobre os invisíveis: descreve com indignação as famílias pobres de Villacañas (Toledo) que viviam debaixo da terra em “silos” — cavernas subterrâneas de uma só peça — soterradas por uma inundação torrencial que deixou oitocentas famílias desabrigadas. Em Madrid, procura seu antigo companheiro de juventude, o engenheiro anarquista Fernando Tarrida del Mármol, para ouvir com honestidade intelectual o que levava tantos operários famintos ao desespero, mesmo discordando frontalmente da violência das bombas.',
      'E quando o assunto era mau jornalismo, o famoso sorriso irônico de Pepe entrava em cena: em junho de 1898, ele desmascarou com humor impagável o jornal carioca A Tribuna, cujo redator traduziu errado um telegrama em francês da Agência Havas, inventou o naufrágio de um inexistente cruzador espanhol chamado “Málaga” e ainda colocou as Ilhas Filipinas junto aos penhascos da costa da África!',
      'Mas logo o riso cedia lugar à compaixão: em agosto de 1898, ao noticiar o desembarque em La Coruña de dois mil soldados espanhóis repatriados de Cuba a bordo do vapor Alicante — esquálidos, desarmados e doentes —, Adell deixou de lado qualquer retórica bélica para chorar os filhos humildes arrancados às oficinas e aos campos enquanto políticos discursavam em salões confortáveis.',
    ],
    curiosityBox: {
      title: 'Textos Restaurados à Mão no Século XIX',
      text: 'Nas páginas 5, 7, 8 e 22 do acervo, trechos inteiros que haviam sido cortados ou danificados nos jornais originais foram pacientemente copiados à mão com pena e tinta ferrogálica pelo próprio autor para preservar a integridade de seus ensaios!',
    },
  },
];
