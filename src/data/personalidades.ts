import { SiteLang } from '@/lib/i18n-ui';

export interface ExternalRef {
  label: string;
  url: string;
}

export interface HistoricalPersonality {
  id: string;
  slug: string;
  name: string;
  lifespan: string;
  cityContext: string;
  pagesInArchive: number[];
  relatedWorkSlugs: string[];
  externalLinks: ExternalRef[];
  es: {
    role: string;
    connection: string;
    bio: string;
  };
  va: {
    role: string;
    connection: string;
    bio: string;
  };
  pt: {
    role: string;
    connection: string;
    bio: string;
  };
}

export interface MentionedFigure {
  id: string;
  name: string;
  years: string;
  internalWorkSlug: string;
  externalUrl: string;
  es: { who: string; adellView: string };
  va: { who: string; adellView: string };
  pt: { who: string; adellView: string };
}

export const THEATRO_MUNICIPAL_NOTE: Record<
  SiteLang,
  {
    badge: string;
    title: string;
    text: string;
    poeticNote: string;
    btnTheatro: string;
    btnMnba: string;
    btnCarta: string;
  }
> = {
  es: {
    badge: '🏛️ Memoria Urbana de Río de Janeiro: De la Rua da Ajuda al Theatro Municipal',
    title:
      'Donde Hoy Se Alza el Theatro Municipal de Río de Janeiro Estaban la Casa y el Taller de Pepe Adell',
    text:
      'En su carta póstuma de 1927 (página 85 del archivo), el arquitecto Adolfo Morales de los Ríos revela la dirección exacta donde vivía y trabajaba Pepe Adell en Río de Janeiro: una humilde casa colonial baja, de un solo piso, en la antigua Rua da Ajuda, cuyo alero de tejado casi tocaban con la punta de los bastones, donde convivían su taller de maestro grabador en metal y las dependencias tipográficas de La Unión Española. Aquel exacto solar de la desaparecida Rua da Ajuda es donde hoy se levanta el majestuoso Theatro Municipal de Río de Janeiro, en Cinelândia.',
    poeticNote:
      'La historia guardó una coincidencia poética sobrecogedora: cuando la reforma urbana de comienzos del siglo XX demolió la vieja Rua da Ajuda para abrir la Avenida Central, sobre el suelo de la casa de Pepe se edificó el Theatro Municipal (1909), y justo enfrente se alzó el Museo Nacional de Bellas Artes, proyectado nada menos que por su gran amigo de aquellas tertulias, Adolfo Morales de los Ríos.',
    btnTheatro: 'Conocer el Theatro Municipal de Río ↗',
    btnMnba: 'Museo Nacional de Bellas Artes (MNBA) ↗',
    btnCarta: 'Ver Página 85 donde se cita la Rua da Ajuda →',
  },
  va: {
    badge: '🏛️ Memòria Urbana de Rio de Janeiro: De la Rua da Ajuda al Theatro Municipal',
    title:
      'On Hui S’Alça el Theatro Municipal de Rio de Janeiro Estaven la Casa i el Taller de Pepe Adell',
    text:
      'En la seua carta pòstuma de 1927 (pàgina 85 de l’arxiu), l’arquitecte Adolfo Morales de los Ríos revela l’adreça exacta on vivia i treballava Pepe Adell a Rio de Janeiro: una humil casa colonial baixa, d’un sol pis, a l’antiga Rua da Ajuda, el ràfec de la qual quasi tocaven amb la punta dels bastons, on convivien el seu taller de mestre gravador en metall i la impremta de La Unión Española. Aquell solar exacte és on hui s’alça el majestuós Theatro Municipal de Rio de Janeiro, a Cinelândia.',
    poeticNote:
      'La història guardà una coincidència poètica colpidora: quan la reforma urbana de principis del segle XX enderrocà la vella Rua da Ajuda per obrir l’Avenida Central, sobre el sòl de la casa de Pepe s’edificà el Theatro Municipal (1909), i just davant s’alçà el Museu Nacional de Belles Arts, projectat pel seu gran amic d’aquelles tertúlies, Adolfo Morales de los Ríos.',
    btnTheatro: 'Conéixer el Theatro Municipal de Rio ↗',
    btnMnba: 'Museu Nacional de Belles Arts (MNBA) ↗',
    btnCarta: 'Vore Pàgina 85 on es cita la Rua da Ajuda →',
  },
  pt: {
    badge: '🏛️ Memória Urbana do Rio de Janeiro: Da Rua da Ajuda ao Theatro Municipal',
    title:
      'Onde Hoje Se Ergue o Theatro Municipal do Rio de Janeiro Ficavam a Casa e a Oficina de Pepe Adell',
    text:
      'Em sua carta póstuma de 1927 (página 85 do acervo), o arquiteto Adolfo Morales de los Ríos revela o endereço exato onde Pepe Adell morava e trabalhava no Rio de Janeiro: uma casinha colonial baixa, de um só pavimento, na antiga Rua da Ajuda — cujo beiral do telhado quase tocavam com a ponta das bengalas — onde funcionavam lado a lado sua oficina de mestre gravador em metal e a tipografia de La Unión Española. Aquele exato quarteirão demolido da antiga Rua da Ajuda é onde hoje se ergue o imponente Theatro Municipal do Rio de Janeiro, na Cinelândia.',
    poeticNote:
      'A história selou ali uma coincidência poética arrepiante: quando a abertura da Avenida Central pôs abaixo a velha Rua da Ajuda no início do século XX, sobre o chão onde Pepe sorria e esculpia metais nasceu o Theatro Municipal (1909) — e bem diante dele ergueu-se o Museu Nacional de Belas Artes, projetado justamente por seu amigo inseparável daquelas reuniões, Adolfo Morales de los Ríos.',
    btnTheatro: 'Conhecer o Theatro Municipal do Rio ↗',
    btnMnba: 'Museu Nacional de Belas Artes (MNBA) ↗',
    btnCarta: 'Ver Página 85 que cita a Rua da Ajuda →',
  },
};

export const PERSONALITIES_LIST: HistoricalPersonality[] = [
  {
    id: 'adolfo-morales-de-los-rios',
    slug: 'adolfo-morales-de-los-rios',
    name: 'Adolfo Morales de los Ríos',
    lifespan: 'Sevilla, 1858 — Río de Janeiro, 1928',
    cityContext: 'Río de Janeiro (Rua da Ajuda / Avenida Central)',
    pagesInArchive: [84, 85, 86, 89, 80, 75],
    relatedWorkSlugs: [
      'carta-tributo-morales-de-los-rios-1927',
      'dossie-o-globo-adolfo-morales-de-los-rios-1991',
      'arquiteto-espanhol-mnba-retrato-portinari-1991',
    ],
    externalLinks: [
      {
        label: 'Wikipedia (Biografía y Obras)',
        url: 'https://es.wikipedia.org/wiki/Adolfo_Morales_de_los_R%C3%ADos',
      },
      {
        label: 'Enciclopédia Itaú Cultural',
        url: 'https://enciclopedia.itaucultural.org.br/pessoa215962/adolfo-morales-de-los-rios',
      },
    ],
    es: {
      role: 'Arquitecto de la Belle Époque Carioca y Amigo Fraternal',
      connection:
        'Tertuliano en la casa de Pepe en la Rua da Ajuda y autor de la carta «Pepe Adell, ha muerto» (1927).',
      bio: 'Formado en la Escuela de Bellas Artes de París, llegó a Brasil en 1889 y diseñó 17 edificios en la Avenida Central, incluyendo el Museo Nacional de Bellas Artes, el Supremo Tribunal Federal y el Palacio São Joaquim. Compartió con Pepe Adell las veladas de La Unión Española, asistió a los funerales de Doña Emilia en 1903 y escribió en 1927 el retrato más humano jamás dedicado al maestro de Vinaròs.',
    },
    va: {
      role: 'Arquitecte de la Belle Époque Carioca i Amic Fraternal',
      connection:
        'Tertulià a la casa de Pepe a la Rua da Ajuda i autor de la carta «Pepe Adell, ha muerto» (1927).',
      bio: 'Format a l’Escola de Belles Arts de París, arribà al Brasil el 1889 i dissenyà 17 edificis a l’Avenida Central, incloent-hi el Museu Nacional de Belles Arts i el Suprem Tribunal Federal. Compartí amb Pepe Adell les vetlades de La Unión Española i escrigué el 1927 el retrat més humà dedicat al mestre vinarossenc.',
    },
    pt: {
      role: 'Arquiteto da Virada do Século no Rio e Amigo Fraterno',
      connection:
        'Companheiro nas tertúlias da Rua da Ajuda e autor da carta “Pepe Adell, ha muerto” (1927).',
      bio: 'Nascido em Sevilha e formado em Belas Artes em Paris, chegou ao Brasil em 1889 e projetou ícones como o Museu Nacional de Belas Artes, o Supremo Tribunal Federal e o Palácio São Joaquim. Frequentador assíduo da oficina de Pepe na antiga Rua da Ajuda, esteve ao lado dele no luto de 1903 e imortalizou sua memória em 1927.',
    },
  },
  {
    id: 'fernando-tarrida-del-marmol',
    slug: 'fernando-tarrida-del-marmol',
    name: 'Fernando Tarrida del Mármol',
    lifespan: 'La Habana, 1861 — Londres, 1915',
    cityContext: 'Barcelona y Madrid',
    pagesInArchive: [20, 54, 59, 72],
    relatedWorkSlugs: [
      'atentado-pallas-entrevista-tarrida-del-marmol-1893',
      'congreso-literario-barcelona-protesta-almeria-1893',
      'consejo-redaccion-la-luz-barcelona-1886',
    ],
    externalLinks: [
      {
        label: 'Real Academia de la Historia (DBE)',
        url: 'https://dbe.rah.es/biografias/8533/fernando-tarrida-del-marmol',
      },
      {
        label: 'Wikipedia (Fernando Tarrida del Mármol)',
        url: 'https://es.wikipedia.org/wiki/Fernando_Tarrida_del_M%C3%A1rmol',
      },
    ],
    es: {
      role: 'Ingeniero, Matemático y Teórico del «Anarquismo sin Adjetivos»',
      connection:
        'Compañero de redacción en La Luz (1885) y entrevistado por Pepe Adell en Madrid (1893).',
      bio: 'Ingeniero industrial por Barcelona, director de la revista científica Acracia y figura mundial del pensamiento libertario. Forjó una sincera amistad juvenil con José Adell en el semanario La Luz; pese a profesar ideas políticas opuestas, en septiembre de 1893 recibió afectuosamente a Pepe en Madrid y le obsequió dos ejemplares de su libro El Materialismo.',
    },
    va: {
      role: 'Enginyer, Matemàtic i Teòric de l’«Anarquisme sense Adjectius»',
      connection:
        'Company de redacció a La Luz (1885) i entrevistat per Pepe Adell a Madrid (1893).',
      bio: 'Enginyer industrial per Barcelona, director de la revista Acracia i figura mundial del pensament llibertari. Forjà una sincera amistat juvenil amb José Adell al setmanari La Luz; tot i tindre idees polítiques oposades, el setembre de 1893 rebé afectuosament Pepe a Madrid i li regalà dos exemplars d’El Materialismo.',
    },
    pt: {
      role: 'Engenheiro, Matemático e Teórico do “Anarquismo sem Adjetivos”',
      connection:
        'Companheiro de redação em La Luz (1885) e entrevistado por Pepe em Madrid (1893).',
      bio: 'Engenheiro formado em Barcelona, diretor da revista Acracia e pensador de projeção internacional. Trabalhou ao lado do jovem José Adell no semanário La Luz. Embora seguissem caminhos políticos opostos, mantiveram profunda estima mútua: em 1893 conversaram longamente em Madrid e Tarrida presenteou Pepe com seu livro El Materialismo.',
    },
  },
  {
    id: 'rosendo-arus-arderiu',
    slug: 'rosendo-arus-arderiu',
    name: 'Rosendo Arús y Arderiu (Rossend Arús)',
    lifespan: 'Barcelona, 1845 — Barcelona, 1891',
    cityContext: 'Barcelona (Cataluña)',
    pagesInArchive: [20, 54],
    relatedWorkSlugs: [
      'consejo-redaccion-la-luz-barcelona-1886',
      'a-la-iberia-autobiografia-jornalistica-1897',
    ],
    externalLinks: [
      {
        label: 'Biblioteca Pública Arús (Barcelona)',
        url: 'https://bpa.cat/',
      },
      {
        label: 'Wikipedia (Rossend Arús)',
        url: 'https://es.wikipedia.org/wiki/Rossend_Ar%C3%BAs',
      },
    ],
    es: {
      role: 'Periodista, Dramaturgo, Filántropo y Director de «La Luz»',
      connection:
        'Primer gran mentor periodístico que nombró secretario de redacción a José Adell a los 17 años.',
      bio: 'Figura cumbre del librepensamiento, el republicanismo federal y la filantropía catalana —fundador de la célebre Biblioteca Pública Arús de Barcelona, especializada en movimientos sociales del siglo XIX—. En 1885 confió en el talento autodidacta de un jovencísimo José Adell y Fons como secretario de redacción de La Luz.',
    },
    va: {
      role: 'Periodista, Dramaturg, Filantrop i Director de «La Luz»',
      connection:
        'Primer gran mentor periodístic que nomenà secretari de redacció José Adell als 17 anys.',
      bio: 'Figura cabdal del lliurepensament i la filantropia catalana —fundador de la cèlebre Biblioteca Pública Arús de Barcelona—. El 1885 confià en el talent autodidacte d’un joveníssim José Adell y Fons integrant-lo com a secretari de redacció de La Luz.',
    },
    pt: {
      role: 'Jornalista, Dramaturgo, Filantropo e Diretor de “La Luz”',
      connection:
        'Primeiro mentor jornalístico, que nomeou José Adell secretário de redação aos 17 anos.',
      bio: 'Grande nome do livre-pensamento e da filantropia catalã — legou à cidade a célebre Biblioteca Pública Arús de Barcelona, referência mundial em história social do século XIX. Reconheceu precocemente o talento autodidata de José Adell em 1885.',
    },
  },
  {
    id: 'cristobal-litran',
    slug: 'cristobal-litran',
    name: 'Cristóbal Litrán',
    lifespan: 'Almería, 1860 — Barcelona, 1926',
    cityContext: 'Barcelona y Reus',
    pagesInArchive: [20, 54],
    relatedWorkSlugs: [
      'consejo-redaccion-la-luz-barcelona-1886',
      'a-la-iberia-autobiografia-jornalistica-1897',
    ],
    externalLinks: [
      {
        label: 'Wikipedia (Cristóbal Litrán)',
        url: 'https://es.wikipedia.org/wiki/Crist%C3%B3bal_Litr%C3%A1n',
      },
    ],
    es: {
      role: 'Escritor Republicano, Historiador y Educador Laico',
      connection:
        'Co-secretario de redacción en La Luz junto a José Adell en Barcelona.',
      bio: 'Destacado publicista republicano, secretario del Ateneo Libre de Cataluña, director de La Autonomía en Reus, traductor de Víctor Hugo y colaborador pedagógico de Francisco Ferrer Guardia en la Escuela Moderna. Compartió secretaría de redacción con el joven Pepe Adell en 1885–1886.',
    },
    va: {
      role: 'Escriptor Republicà, Historiador i Educador Laic',
      connection:
        'Cosecretari de redacció a La Luz al costat de José Adell a Barcelona.',
      bio: 'Destacat publicista republicà, director de La Autonomía a Reus i col·laborador pedagògic de Francesc Ferrer i Guàrdia a l’Escola Moderna. Compartí tasques de secretaria amb el jove Pepe Adell el 1885–1886.',
    },
    pt: {
      role: 'Escritor Republicano, Historiador e Educador Laico',
      connection:
        'Dividiu o cargo de secretário de redação de La Luz com José Adell em Barcelona.',
      bio: 'Intelectual republicano, diretor de La Autonomía em Reus, tradutor de Victor Hugo e colaborador pedagógico na Escola Moderna de Barcelona. Foi parceiro diário de juventude de Pepe Adell na imprensa livre-pensadora.',
    },
  },
  {
    id: 'gaspar-de-los-reyes-thous',
    slug: 'gaspar-de-los-reyes-thous',
    name: 'Gaspar de los Reyes Thous',
    lifespan: 'España / Río de Janeiro (Siglo XIX)',
    cityContext: 'Río de Janeiro (Rua da Ajuda)',
    pagesInArchive: [20, 31, 32, 71, 84],
    relatedWorkSlugs: [
      'carta-abierta-gaspar-thous-actitud-castelar-1893',
      'a-la-iberia-autobiografia-jornalistica-1897',
      'carta-tributo-morales-de-los-rios-1927',
    ],
    externalLinks: [
      {
        label: 'Hemeroteca Digital — Prensa de Inmigración en Brasil',
        url: 'https://bndigital.bn.gov.br/hemeroteca-digital/',
      },
    ],
    es: {
      role: 'Periodista y Fundador de «La Unión Española» en Río de Janeiro',
      connection:
        'Amigo y fundador del diario donde Pepe trabajó cinco años como redactor y luego asumió la dirección.',
      bio: 'De tradición carlista pero de espíritu caballeroso y abierto, fundó en Río de Janeiro el periódico La Unión Española. Como subrayó Morales de los Ríos en 1927, la leal colaboración entre el carlista Thous y el republicano-socialista Pepe Adell demostraba la nobleza humana de aquel grupo.',
    },
    va: {
      role: 'Periodista i Fundador de «La Unión Española» a Rio de Janeiro',
      connection:
        'Amic i fundador del diari on Pepe treballà cinc anys com a redactor i després assumí la direcció.',
      bio: 'De tradició carlista però d’esperit cavallerós, fundà a Rio de Janeiro La Unión Española. Com subratllà Morales de los Ríos, la lleial col·laboració entre Thous i el republicà-socialista Pepe Adell demostrava la noblesa d’aquell grup.',
    },
    pt: {
      role: 'Jornalista e Fundador de “La Unión Española” no Rio de Janeiro',
      connection:
        'Amigo e fundador do jornal onde Pepe trabalhou por cinco anos antes de assumir a direção.',
      bio: 'Embora de tradição carlista, fundou La Unión Española no Rio de Janeiro e teve no republicano-socialista Pepe Adell seu maior colaborador e amigo — exemplo raro de tolerância e respeito humano acima das divergências ideológicas.',
    },
  },
  {
    id: 'campos-sales',
    slug: 'manuel-ferraz-de-campos-sales',
    name: 'Dr. Manuel Ferraz de Campos Sales',
    lifespan: 'Campinas, 1841 — Santos, 1913',
    cityContext: 'Río de Janeiro y Buenos Aires (1900)',
    pagesInArchive: [88],
    relatedWorkSlugs: ['manuscrito-biografico-familia-adell'],
    externalLinks: [
      {
        label: 'Wikipedia (Campos Sales)',
        url: 'https://es.wikipedia.org/wiki/Campos_Sales',
      },
      {
        label: 'Biblioteca da Presidência da República (Brasil)',
        url: 'http://www.biblioteca.presidencia.gov.br/presidencia/ex-presidentes/campos-sales',
      },
    ],
    es: {
      role: 'Presidente de la República de los Estados Unidos del Brasil (1898–1902)',
      connection:
        'Su Gobierno eligió a José Adell para esculpir la medalla oficial de su histórica visita a Argentina en 1900.',
      bio: 'Histórico republicano brasileño, ministro de Justicia del Gobierno Provisorio y cuarto Presidente de Brasil. En octubre de 1900 realizó el célebre viaje oficial a Buenos Aires recibido por Julio Argentino Roca, cuya medalla conmemorativa oficial fue encargada al buril magistral de Pepe Adell.',
    },
    va: {
      role: 'President de la República dels Estats Units del Brasil (1898–1902)',
      connection:
        'El seu Govern elegí José Adell per esculpir la medalla oficial de la seua visita històrica a l’Argentina el 1900.',
      bio: 'Històric republicà brasiler i quart President del Brasil. A l’octubre de 1900 realitzà el cèlebre viatge d’Estat a Buenos Aires rebut per Julio Argentino Roca, la medalla commemorativa oficial del qual fou encarregada al burí magistral de Pepe Adell.',
    },
    pt: {
      role: 'Presidente da República do Brasil (1898–1902)',
      connection:
        'Seu governo escolheu o mestre gravador Pepe Adell para esculpir a medalha oficial da viagem presidencial à Argentina (1900).',
      bio: 'Quarto Presidente do Brasil e grande estadista republicano. Para eternizar sua histórica visita oficial a Buenos Aires em outubro de 1900, o Governo Brasileiro confiou a escultura da medalha comemorativa oficial ao mestre autodidata José Adell y Fons.',
    },
  },
  {
    id: 'jose-do-patrocinio',
    slug: 'jose-do-patrocinio',
    name: 'José do Patrocínio',
    lifespan: 'Campos dos Goytacazes, 1853 — Río de Janeiro, 1905',
    cityContext: 'Río de Janeiro (Largo de São Francisco de Paula)',
    pagesInArchive: [70],
    relatedWorkSlugs: ['telegrama-agencia-fabra-ferimento-jose-adell-1895'],
    externalLinks: [
      {
        label: 'Academia Brasileira de Letras (Silla 21)',
        url: 'https://www.academia.org.br/academicos/jose-do-patrocinio/biografia',
      },
      {
        label: 'Wikipedia (José do Patrocínio)',
        url: 'https://es.wikipedia.org/wiki/Jos%C3%A9_do_Patroc%C3%ADnio',
      },
    ],
    es: {
      role: '«El Tigre de la Abolición» • Periodista, Orador y Cofundador de la ABL',
      connection:
        'Encabezó la manifestación pro-Cuba en Río (1895) en cuyos tumultos callejeros resultó herido en la cabeza José Adell.',
      bio: 'Figura gigantesca del periodismo y de la abolición de la esclavitud en Brasil (1888). En septiembre de 1895 convocó un mitin multitudinario en el Largo de São Francisco de Paula en favor de los insurrectos cubanos; al desfilar frente a los diarios, el choque con inmigrantes españoles dejó herido en la cabeza a Pepe Adell.',
    },
    va: {
      role: '«El Tigre de l’Abolició» • Periodista, Orador i Cofundador de l’ABL',
      connection:
        'Encapçalà la manifestació pro-Cuba a Rio (1895) en els aldarulls de la qual resultà ferit al cap José Adell.',
      bio: 'Figura gegantina del periodisme i de l’abolició de l’esclavitud al Brasil (1888). Al setembre de 1895 convocà un míting multitudinari al Largo de São Francisco de Paula; en desfilar davant els diaris, el xoc al carrer deixà ferit al cap Pepe Adell.',
    },
    pt: {
      role: '“O Tigre da Abolição” • Jornalista, Orador e Cofundador da ABL',
      connection:
        'Liderou a manifestação no Largo de São Francisco (1895) em cujo tumulto de rua Pepe Adell foi ferido na cabeça.',
      bio: 'Ícone máximo da campanha abolicionista brasileira e fundador da Cadeira 21 da Academia Brasileira de Letras. Em setembro de 1895, liderou um comício pró-Cuba no centro do Rio que culminou nos confrontos diante das redações onde José Adell recebeu um golpe na cabeça.',
    },
  },
  {
    id: 'lucio-de-mendonca',
    slug: 'lucio-de-mendonca',
    name: 'Lúcio de Mendonça',
    lifespan: 'Piraí, 1854 — Río de Janeiro, 1909',
    cityContext: 'Río de Janeiro',
    pagesInArchive: [25, 26],
    relatedWorkSlugs: [
      'tomemoslo-en-cuenta-lucio-de-mendonca-1895',
      'carta-lucio-de-mendonca-o-paiz-4-setembro-1895',
    ],
    externalLinks: [
      {
        label: 'Academia Brasileira de Letras (Idealizador)',
        url: 'https://www.academia.org.br/academicos/lucio-de-mendonca/biografia',
      },
      {
        label: 'Supremo Tribunal Federal (Ministros Históricos)',
        url: 'https://portal.stf.jus.br/ostf/ministros/verMinistro.asp?codigo=204',
      },
    ],
    es: {
      role: 'Magistrado del Supremo Tribunal Federal e Idealizador de la Academia Brasileña de Letras',
      connection:
        'Interlocutor directo de la célebre polémica publicada por José Adell en septiembre de 1895.',
      bio: 'Poeta republicano, jurista nombrado ministro del Supremo Tribunal Federal en 1895 y principal creador junto a Machado de Assis de la Academia Brasileña de Letras. Su carta en O Paiz fue reproducida íntegramente y rebatida por José Adell en La Unión Española.',
    },
    va: {
      role: 'Magistrat del Suprem Tribunal Federal i Idealitzador de l’Acadèmia Brasilera de Lletres',
      connection:
        'Interlocutor directe de la polèmica publicada per José Adell el setembre de 1895.',
      bio: 'Poeta republicà, ministre del Suprem Tribunal Federal el 1895 i principal creador amb Machado de Assis de l’Acadèmia Brasilera de Lletres. La seua carta a O Paiz fou reproduïda i debatuda per José Adell.',
    },
    pt: {
      role: 'Ministro do Supremo Tribunal Federal e Idealizador da Academia Brasileira de Letras',
      connection:
        'Protagonista da polêmica direta com José Adell nas páginas de O Paiz e La Unión Española (1895).',
      bio: 'Poeta, republicano histórico, Ministro do STF (1895–1907) e o verdadeiro pai da ideia de fundar a Academia Brasileira de Letras. Sua carta aberta de 4 de setembro de 1895 está preservada na íntegra na página 26 do acervo de Pepe Adell.',
    },
  },
  {
    id: 'placido-y-pablo-isasi',
    slug: 'placido-y-pablo-isasi',
    name: 'Plácido Isasi & Pablo Isasi',
    lifespan: 'País Vasco / Río de Janeiro (Siglos XIX–XX)',
    cityContext: 'Río de Janeiro (Rua da Ajuda — Hoy Theatro Municipal)',
    pagesInArchive: [67, 75, 80, 82, 85],
    relatedWorkSlugs: [
      'semblanza-poema-pablo-isasi',
      'carta-tributo-morales-de-los-rios-1927',
    ],
    externalLinks: [
      {
        label: 'Emigración Vasca en América (Auñamendi Eusko Entziklopedia)',
        url: 'https://aunamendi.eusko-ikaskuntza.eus/',
      },
    ],
    es: {
      role: 'Periodista, Artista Vizcaíno y Poeta del Círculo Íntimo de la Rua da Ajuda',
      connection:
        'Amigos entrañables de la casa de Pepe, presentes en el duelo de 1903 y autor del poema «Semblanza».',
      bio: 'Adolfo Morales de los Ríos inmortalizó a Plácido Isasi con una frase sublime: «ese artista, ese periodista, ese vizcaíno genuino que, pareciéndose a ciertos relicarios, tiene en todo la forma de corazón». Pablo Isasi firmó los versos dedicados a la honradez y nobleza de Pepe en la página 67.',
    },
    va: {
      role: 'Periodista, Artista Biscaí i Poeta del Cercle Íntim de la Rua da Ajuda',
      connection:
        'Amics entranyables de casa de Pepe, presents al dol de 1903 i autor del poema «Semblanza».',
      bio: 'Adolfo Morales de los Ríos immortalitzà Plácido Isasi amb una frase sublim: «eixe artista, eixe periodista, eixe biscaí genuí que, semblant certs reliquiaris, té en tot la forma de cor». Pablo Isasi signà els versos dedicats a Pepe a la pàgina 67.',
    },
    pt: {
      role: 'Jornalista, Artista Basco e Poeta da Roda Íntima da Rua da Ajuda',
      connection:
        'Amigos fiéis da casinha da Rua da Ajuda, presentes no luto de 1903 e autor do poema “Semblanza”.',
      bio: 'Morales de los Ríos definiu Plácido Isasi com ternura inesquecível: “esse artista, esse jornalista, esse biscainho genuíno que, parecendo certos relicários, tem em tudo a forma de coração”. Já Pablo Isasi escreveu o poema-retrato de Pepe na página 67.',
    },
  },
  {
    id: 'tertulia-rua-da-ajuda',
    slug: 'elias-novoa-montilla-hermanos-do-pazo-barradas',
    name: 'Elías Novoa, Antonio Montilla, Vicente & Manuel do Pazo, Barradas y Meneses',
    lifespan: 'Colonia Española de Río de Janeiro (1890–1927)',
    cityContext: 'Rua da Ajuda (Solar actual del Theatro Municipal de Río)',
    pagesInArchive: [75, 80, 82, 83, 85],
    relatedWorkSlugs: [
      'carta-tributo-morales-de-los-rios-1927',
      'obituario-emilia-vallespi-de-adell-1903',
    ],
    externalLinks: [
      {
        label: 'Theatro Municipal do Rio de Janeiro (Historia de Cinelândia)',
        url: 'https://theatromunicipal.rj.gov.br/sobre-o-theatro/historia/',
      },
    ],
    es: {
      role: 'La Hermandad Bohemio-Patriótica de la Casa de la Rua da Ajuda',
      connection:
        'Compañeros cotidianos del taller y del periódico que rodearon a Pepe en las risas y en las lágrimas.',
      bio: 'En la casita donde hoy se alza el Theatro Municipal se reunían: Elías Novoa (quien adquirió la dirección del diario con sacrificio patriótico), el cubano leal Antonio Montilla, los sabios sevillanos Barradas y Meneses, el hotelero gallego Vicente do Pazo («ministro de Exteriores» de la tertulia) y el vecino tendero Manuel do Pazo («ministro de Hacienda» cuando el periódico necesitaba préstamos).',
    },
    va: {
      role: 'La Germanor Bohèmio-Patriòtica de la Casa de la Rua da Ajuda',
      connection:
        'Companys quotidians del taller i del periòdic que envoltaren Pepe en els somriures i en les llàgrimes.',
      bio: 'A la caseta on hui s’alça el Theatro Municipal es reunien: Elías Novoa, el cubà lleial Antonio Montilla, els savis sevillans Barradas i Meneses, l’hoteler gallec Vicente do Pazo («ministre d’Exteriors») i el botiguer veí Manuel do Pazo («ministre d’Hisenda» quan calien préstecs).',
    },
    pt: {
      role: 'A Confraria Fraterna da Casinha da Rua da Ajuda',
      connection:
        'Companheiros diários de oficina e jornal que abraçaram Pepe nas alegrias e na perda de Emilia.',
      bio: 'Na casinha térrea onde hoje se ergue o Theatro Municipal reuniam-se: Elías Novoa (que assumiu o jornal com sacrifício pessoal), o cubano Antonio Montilla, os cultos sevilhanos Barradas e Meneses, o hoteleiro galego Vicente do Pazo (“ministro do Exterior” da roda) e o comerciante vizinho Manuel do Pazo (“ministro da Fazenda” quando o jornal precisava de empréstimos!).',
    },
  },
  {
    id: 'emilio-castelar',
    slug: 'emilio-castelar',
    name: 'Emilio Castelar y Ripoll',
    lifespan: 'Cádiz, 1832 — San Pedro del Pinatar, 1899',
    cityContext: 'Madrid y Cádiz (Referente Intelectual)',
    pagesInArchive: [9, 10, 11, 12, 31, 32, 71],
    relatedWorkSlugs: [
      'hombres-y-cosas-de-espana-emilio-castelar-1892',
      'noche-de-san-daniel-el-rasgo-y-cortes-constituyentes-castelar-1892',
      'carta-abierta-gaspar-thous-actitud-castelar-1893',
    ],
    externalLinks: [
      {
        label: 'Real Academia de la Historia (Emilio Castelar)',
        url: 'https://dbe.rah.es/biografias/11265/emilio-castelar-y-ripoll',
      },
      {
        label: 'Wikipedia (Emilio Castelar)',
        url: 'https://es.wikipedia.org/wiki/Emilio_Castelar',
      },
    ],
    es: {
      role: 'Presidente de la Primera República Española y Gran Tribuno de la Democracia',
      connection:
        'Inspirador político directo del republicanismo posibilista, pacífico y evolutivo de José Adell.',
      bio: 'Catedrático de Historia en la Universidad Central de Madrid, académico de la Lengua y presidente del Poder Ejecutivo en 1873. Su convicción de conquistar la democracia mediante el sufragio universal, el jurado y la escuela laica inspiró toda la obra política de José Adell.',
    },
    va: {
      role: 'President de la Primera República Espanyola i Gran Tribú de la Democràcia',
      connection:
        'Inspirador polític directe del republicanisme possibilista, pacífic i evolutiu de José Adell.',
      bio: 'Catedràtic d’Història a Madrid i president del Poder Executiu el 1873. La seua convicció de conquistar la democràcia mitjançant el sufragi universal, el jurat i l’escola laica inspirà tota l’obra política de José Adell.',
    },
    pt: {
      role: 'Presidente da Primeira República Espanhola e Grande Orador Democrático',
      connection:
        'Principal referência intelectual do republicanismo pacífico e evolutivo de José Adell.',
      bio: 'Catedrático de História em Madrid, membro da Real Academia Espanhola e presidente da República em 1873. Sua defesa da evolução democrática pela educação, imprensa livre e voto universal inspirou diretamente os ensaios de Pepe Adell.',
    },
  },
  {
    id: 'capllonch-y-leon-santos',
    slug: 'juan-capllonch-y-francisco-leon-santos',
    name: 'Juan Capllonch y Puerto & Francisco León Santos',
    lifespan: 'Río de Janeiro (1903) & Salvador de Bahía (1927)',
    cityContext: 'Río de Janeiro y Salvador de Bahía',
    pagesInArchive: [75, 80, 83],
    relatedWorkSlugs: [
      'obituario-emilia-vallespi-de-adell-1903',
      'necrologio-correo-de-espana-1927',
    ],
    externalLinks: [
      {
        label: 'Embajada y Consulados de España en Brasil',
        url: 'https://www.exteriores.gob.es/Embajadas/brasilia/es/Paginas/index.aspx',
      },
    ],
    es: {
      role: 'Cónsul de España en Río y Propietario de la Librería Española de Bahía',
      connection:
        'Acompañaron institucional y humanamente a la familia Adell en los duelos de 1903 y 1927.',
      bio: 'El Comendador Don Juan Capllonch y Puerto, Cónsul de España en Río, presidió en persona el cortejo de más de 40 carruajes de Doña Emilia en 1903; en mayo de 1927, Don Francisco León Santos, dueño de la Librería Española de Salvador, dio fe del afecto unánime que rodeó a Pepe Adell en Bahía.',
    },
    va: {
      role: 'Cònsol d’Espanya a Rio i Propietari de la Llibreria Espanyola de Bahia',
      connection:
        'Acompanyaren institucionalment i humanament la família Adell en els dols de 1903 i 1927.',
      bio: 'El Comanador Don Juan Capllonch y Puerto, Cònsol d’Espanya a Rio, presidí el seguici de 40 carruatges de Doña Emilia el 1903; al maig de 1927, Don Francisco León Santos, de la Llibreria Espanyola de Salvador, donà fe de l’estima unànime que envoltà Pepe Adell a Bahia.',
    },
    pt: {
      role: 'Cônsul da Espanha no Rio e Proprietário da Livraria Espanhola da Bahia',
      connection:
        'Testemunhas solidárias nos dois momentos mais solenes de despedida da família Adell (1903 e 1927).',
      bio: 'O Comendador Don Juan Capllonch y Puerto, Cônsul da Espanha no Rio, presidiu pessoalmente o cortejo de mais de 40 carruagens no adeus a Doña Emilia em 1903; já em 1927, Don Francisco León Santos, da Librería Española de Salvador, transmitiu ao Rio a estima geral conquistada pelo mestre gravador na Bahia.',
    },
  },
];

export const MENTIONED_FIGURES: MentionedFigure[] = [
  {
    id: 'rosalia-de-castro',
    name: 'Rosalía de Castro',
    years: '1837–1885',
    internalWorkSlug: 'por-honra-de-todos-rosalia-pardo-bazan-1893',
    externalUrl: 'https://es.wikipedia.org/wiki/Rosal%C3%ADa_de_Castro',
    es: {
      who: 'Gran poetisa nacional de Galicia, autora de Cantares Gallegos y Follas Novas.',
      adellView: 'Adell la llama «la inmortal Rosalía, que anidaba en su corazón todo el sentimiento gallego en su dulcísimo dialecto».',
    },
    va: {
      who: 'Gran poetessa nacional de Galícia, autora de Cantares Gallegos i Follas Novas.',
      adellView: 'Adell l’anomena «la immortal Rosalía, que niava al seu cor tot el sentiment gallec».',
    },
    pt: {
      who: 'Grande poetisa nacional da Galícia, autora de Cantares Gallegos e Follas Novas.',
      adellView: 'Adell a exalta como “a imortal Rosalía, que aninhava no coração todo o sentimento galego”.',
    },
  },
  {
    id: 'emilia-pardo-bazan',
    name: 'Emilia Pardo Bazán',
    years: '1851–1921',
    internalWorkSlug: 'por-honra-de-todos-rosalia-pardo-bazan-1893',
    externalUrl: 'https://es.wikipedia.org/wiki/Emilia_Pardo_Baz%C3%A1n',
    es: {
      who: 'Novelista, ensayista y pionera de los derechos de la mujer en las letras españolas.',
      adellView: 'Adell sale en defensa de su obra y de su prestigio literario frente a las críticas de Pinheiro Chagas en O Paiz.',
    },
    va: {
      who: 'Novel·lista, assagista i pionera dels drets de la dona en les lletres espanyoles.',
      adellView: 'Adell defensa la seua glòria literària enfront de les crítiques de Pinheiro Chagas a O Paiz.',
    },
    pt: {
      who: 'Romancista, ensaísta e pioneira dos direitos das mulheres nas letras espanholas.',
      adellView: 'Adell sai em defesa de sua glória literária diante das críticas publicadas em O Paiz.',
    },
  },
  {
    id: 'teodor-llorente-guimera',
    name: 'Teodor Llorente & Àngel Guimerà',
    years: '1836–1911 / 1845–1924',
    internalWorkSlug: 'por-honra-de-todos-rosalia-pardo-bazan-1893',
    externalUrl: 'https://ca.wikipedia.org/wiki/Teodor_Llorente_i_Olivares',
    es: {
      who: 'Patriarca de la Renaixença valenciana (Llorente) y gran dramaturgo catalán (Guimerà).',
      adellView: 'Como hijo de Vinaròs, Adell reivindica el aprecio y admiración en toda España por las letras valencianas y catalanas.',
    },
    va: {
      who: 'Patriarca de la Renaixença valenciana (Llorente) i gran dramaturg català (Guimerà).',
      adellView: 'Com a fill de Vinaròs, Adell reivindica l’estima i l’admiració per les lletres valencianes i catalanes.',
    },
    pt: {
      who: 'Patriarca do renascimento literário valenciano (Llorente) e grande dramaturgo catalão (Guimerà).',
      adellView: 'Como filho de Vinaròs, Adell celebra com orgulho o prestígio da literatura valenciana e catalã.',
    },
  },
  {
    id: 'canovas-del-castillo',
    name: 'Antonio Cánovas del Castillo',
    years: '1828–1897',
    internalWorkSlug: 'hombres-y-cosas-de-espana-canovas-del-castillo',
    externalUrl: 'https://es.wikipedia.org/wiki/Antonio_C%C3%A1novas_del_Castillo',
    es: {
      who: 'Historiador y estadista artífice de la Restauración borbónica en España.',
      adellView: 'Adversario político al que Adell dedica una semblanza ejemplar, reconociendo que sepultó el militarismo en España.',
    },
    va: {
      who: 'Historiador i estadista artífex de la Restauració borbònica a Espanya.',
      adellView: 'Adversari polític a qui Adell dedica una semblança exemplar, reconeixent que soterrà el militarisme.',
    },
    pt: {
      who: 'Historiador e estadista artífice da Restauração Borbônica na Espanha.',
      adellView: 'Adversário político a quem Adell dedica um retrato nobre e justo, assinado de próprio punho na pág. 28.',
    },
  },
  {
    id: 'pi-y-margall-salmeron-azcarate',
    name: 'Francisco Pi y Margall, Nicolás Salmerón & Gumersindo de Azcárate',
    years: '1824–1901 / 1838–1908 / 1840–1917',
    internalWorkSlug: 'gran-meeting-republicano-gijon-salmeron-azcarate-1893',
    externalUrl: 'https://es.wikipedia.org/wiki/Francisco_Pi_y_Margall',
    es: {
      who: 'Presidentes de la Primera República Española y grandes filósofos del republicanismo ético y krausista.',
      adellView: 'Adell debate sus ideas con admiración intelectual y reseña desde Madrid sus discursos ante cinco mil ciudadanos en Gijón.',
    },
    va: {
      who: 'Presidents de la Primera República Espanyola i grans filòsofs del republicanisme ètic.',
      adellView: 'Adell debat les seues idees amb admiració i ressenya des de Madrid els seus discursos a Gijón.',
    },
    pt: {
      who: 'Presidentes da Primeira República Espanhola e grandes filósofos do republicanismo ético.',
      adellView: 'Adell debate suas teses com respeito e relata de Madrid seus discursos para cinco mil pessoas em Gijón.',
    },
  },
  {
    id: 'jose-rizal',
    name: 'José Rizal',
    years: '1861–1896',
    internalWorkSlug: 'filipinas-paz-e-reformas-1897',
    externalUrl: 'https://es.wikipedia.org/wiki/Jos%C3%A9_Rizal',
    es: {
      who: 'Médico, escritor y héroe nacional de Filipinas.',
      adellView: 'Mencionado en el artículo «Filipinas» (1897), donde Adell reprueba la intolerancia y aboga por la paz y reformas parlamentarias.',
    },
    va: {
      who: 'Metge, escriptor i heroi nacional de les Filipines.',
      adellView: 'Esmentat a l’article «Filipinas» (1897), on Adell condemna la intolerància i demana pau i reformes.',
    },
    pt: {
      who: 'Médico, escritor e herói nacional das Filipinas.',
      adellView: 'Citado no ensaio “Filipinas” (1897), em que Adell condena a intolerância e pede paz e representação parlamentar.',
    },
  },
  {
    id: 'gladstone-parnell',
    name: 'William Ewart Gladstone & Charles Stewart Parnell',
    years: '1809–1898 / 1846–1891',
    internalWorkSlug: 'proceso-times-parnell-gladstone-irlanda-1889',
    externalUrl: 'https://es.wikipedia.org/wiki/William_Ewart_Gladstone',
    es: {
      who: 'Primer Ministro liberal británico («El Gran Anciano») y líder autonomista irlandés.',
      adellView: 'Para Adell, Gladstone era el modelo supremo de estadista demócrata que conquistaba reformas con la palabra y la ley, sin barricadas.',
    },
    va: {
      who: 'Primer Ministre liberal britànic («El Gran Ancià») i líder autonomista irlandés.',
      adellView: 'Per a Adell, Gladstone era el model suprem d’estadista que conquistava reformes amb la paraula i la llei.',
    },
    pt: {
      who: 'Primeiro-Ministro liberal britânico (“O Grande Ancião”) e líder autonomista irlandês.',
      adellView: 'Para Adell, Gladstone era o maior exemplo de líder capaz de conquistar reformas pela palavra e pelo voto.',
    },
  },
  {
    id: 'emile-zola-tolstoi',
    name: 'Émile Zola & León Tolstói',
    years: '1840–1902 / 1828–1910',
    internalWorkSlug: 'actualidades-emile-zola-doctor-pascal-1894',
    externalUrl: 'https://es.wikipedia.org/wiki/%C3%89mile_Zola',
    es: {
      who: 'Maestros universales de la novela francesa y rusa del siglo XIX.',
      adellView: 'En «Actualidades» (1894), Adell traduce y comenta pasajes de El Doctor Pascal de Zola para radiografiar la sed moral del fin de siglo.',
    },
    va: {
      who: 'Mestres universals de la novel·la francesa i russa del segle XIX.',
      adellView: 'A «Actualidades» (1894), Adell comenta passatges d’El Doctor Pascal de Zola sobre la set moral de la fi de segle.',
    },
    pt: {
      who: 'Grandes mestres do romance francês e russo do século XIX.',
      adellView: 'Em “Actualidades” (1894), Adell comenta O Doutor Pascal de Zola e Tolstói para refletir sobre a angústia moderna.',
    },
  },
  {
    id: 'pinheiro-chagas',
    name: 'Manuel Pinheiro Chagas',
    years: '1842–1895',
    internalWorkSlug: 'cuentas-anejas-e-a-la-uniao-portugueza-1894-1896',
    externalUrl: 'https://pt.wikipedia.org/wiki/Pinheiro_Chagas',
    es: {
      who: 'Escritor, historiador, político portugués y secretario de la Academia Real das Ciências de Lisboa.',
      adellView: 'Sus artículos publicados en el diario carioca O Paiz motivaron dos grandes ensayos histórico-literarios de José Adell (1893 y 1894).',
    },
    va: {
      who: 'Escriptor, historiador, polític portugués i secretari de l’Acadèmia de Ciències de Lisboa.',
      adellView: 'Els seus articles al diari carioca O Paiz motivaren dos grans assajos històrico-literaris de José Adell.',
    },
    pt: {
      who: 'Escritor, historiador, político português e secretário da Academia Real das Ciências de Lisboa.',
      adellView: 'Seus artigos no jornal carioca O Paiz inspiraram dois extensos ensaios literários e históricos de José Adell.',
    },
  },
];
