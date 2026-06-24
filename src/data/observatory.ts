export type Author = {
  name: string;
  role: string;
  idea: string;
  place: string;
  question: string;
};

export type Chapter = {
  key: string;
  title: string;
  subtitle: string;
  asset: string;
  trails: Array<[string, string]>;
  quote: string;
};

export type LibraryItem = {
  key: string;
  title: string;
  body: string;
  icon: string;
};

export const stops = [
  'entrada',
  'documento',
  'toca',
  'investigadora',
  'gato',
  'autores',
  'metodologia',
  'capitulos',
  'bagagem'
] as const;

export const authors: Author[] = [
  {
    name: 'Mônica Correia Baptista',
    role: 'Autoria infantil',
    idea: 'Leitura e escrita como experiências culturais significativas, com autoria e participação das crianças.',
    place: 'Discussões sobre LEEI e experiências de leitura e escrita na Educação Infantil.',
    question: 'As crianças têm espaço para criar, imaginar e produzir sentidos?'
  },
  {
    name: 'Sonia Kramer',
    role: 'Infâncias',
    idea: 'Infância como tempo de direitos, participação, cultura e produção de conhecimentos.',
    place: 'Concepções de infância que sustentam o trabalho pedagógico.',
    question: 'Estamos reconhecendo as crianças como sujeitos de direitos?'
  },
  {
    name: 'William Corsaro',
    role: 'Culturas infantis',
    idea: 'As crianças não apenas recebem cultura: elas produzem culturas próprias.',
    place: 'Protagonismo infantil e participação das crianças nos contextos educativos.',
    question: 'O que as culturas das crianças têm nos ensinado?'
  },
  {
    name: 'António Nóvoa',
    role: 'Formação docente',
    idea: 'A formação se constrói ao longo da vida profissional, nas experiências e nos encontros.',
    place: 'Análises sobre formação inicial, formação continuada e desenvolvimento profissional.',
    question: 'O que continua me formando como professora?'
  },
  {
    name: 'Isabel Alarcão',
    role: 'Professor reflexivo',
    idea: 'Professores aprendem quando refletem sobre a própria prática.',
    place: 'Discussões sobre formação continuada e reflexão sobre a ação pedagógica.',
    question: 'Quando foi a última vez que parei para pensar sobre minha prática?'
  },
  {
    name: 'Francisco Imbernón',
    role: 'Formação em contexto',
    idea: 'A formação continuada precisa dialogar com a realidade da escola.',
    place: 'Críticas às formações descontextualizadas e valorização dos pequenos grupos.',
    question: 'As formações dialogam com necessidades reais?'
  },
  {
    name: 'Jorge Larrosa',
    role: 'Experiência',
    idea: 'A experiência é aquilo que nos acontece, nos atravessa e nos transforma.',
    place: 'Narrativas das professoras, memórias de infância e processos formativos.',
    question: 'Quais experiências seguem ecoando em minha trajetória docente?'
  },
  {
    name: 'Magda Soares',
    role: 'Cultura escrita',
    idea: 'A leitura e a escrita são práticas sociais e culturais vividas desde cedo.',
    place: 'Letramento, cultura escrita e experiências significativas antes da alfabetização.',
    question: 'Como as crianças participam da cultura escrita em seu cotidiano?'
  }
];

export const chapters: Chapter[] = [
  {
    key: 'memorias',
    title: 'Depois do Chá do Chapeleiro',
    subtitle: 'Memórias de infância e constituição docente.',
    asset: '/assets/teacup.svg',
    trails: [
      ['Infâncias raiz', 'Brincadeiras, família, campo, rua, criatividade e liberdade.'],
      ['Marcas da escola', 'Memórias que acolhem e memórias que machucam.'],
      ['Professoras que deixaram rastros', 'Docentes que inspiraram e transformaram trajetórias.'],
      ['Desejo de ensinar', 'Brincadeiras de dar aula, referências familiares e escolha profissional.']
    ],
    quote:
      'A docência não surge de uma escolha isolada. Ela é construída nas experiências, nos afetos, nas memórias e nos encontros.'
  },
  {
    key: 'rainha',
    title: 'Tabuleiro da Rainha Vermelha',
    subtitle: 'Formação inicial, teoria, prática e entrada na docência.',
    asset: '/assets/chess.svg',
    trails: [
      ['Antes da escola ensinar', 'Primeiros encontros cotidianos com leitura e escrita.'],
      ['Universidade e desafios', 'Leituras, autores, adaptação e distância entre expectativa e realidade.'],
      ['Entre teoria e prática', 'Construção de pontes entre conceitos e cotidiano escolar.'],
      ['Estágio e primeira sala', 'Porta de entrada para crianças reais, imprevistos e aprendizagem.']
    ],
    quote: 'Ser professora não é um ponto de chegada. É uma travessia permanente.'
  },
  {
    key: 'continuada',
    title: 'Percursos da Formação Continuada',
    subtitle: 'Formações que fazem sentido, tensões e aprendizagens.',
    asset: '/assets/clock.svg',
    trails: [
      ['Movimento permanente', 'A formação não termina com a graduação.'],
      ['Escuta e troca', 'Pequenos grupos e diálogo qualificam a participação.'],
      ['Tensões', 'Formações expositivas e distantes da escola perdem potência.'],
      ['Formação em contexto', 'A realidade da escola como ponto de partida.']
    ],
    quote:
      'A formação ganha sentido quando se transforma em espaço de encontro, escuta e construção coletiva de saberes.'
  },
  {
    key: 'leei',
    title: 'Última Casa do Tabuleiro',
    subtitle: 'Repercussões do LEEI e deslocamentos produzidos.',
    asset: '/assets/key.svg',
    trails: [
      ['Da alfabetização antecipada', 'Para a participação das crianças na cultura escrita.'],
      ['Da professora que executa', 'Para a professora que compreende e valoriza sua identidade.'],
      ['Da formação como transmissão', 'Para a formação como construção coletiva.'],
      ['Da prática só pela experiência', 'Para uma prática fundamentada teoricamente.']
    ],
    quote: 'O LEEI não deixou apenas materiais, estratégias ou atividades. Deixou deslocamentos.'
  }
];

export const libraryItems: LibraryItem[] = [
  {
    key: 'cartas',
    title: 'Cartas das Professoras',
    body: 'Área prevista para envelopes interativos com cartas de Natane, Pati, Denise, Cláudia, Bela e Andréia.',
    icon: '/assets/envelope.svg'
  },
  {
    key: 'vozes',
    title: 'Vozes da Travessia',
    body: 'Trechos curtos das entrevistas organizados por infâncias, leitura e escrita, formação docente e LEEI.',
    icon: '/assets/teacup.svg'
  },
  {
    key: 'praticas',
    title: 'Práticas que Ganharam Asas',
    body: 'Galeria futura para Restaurante Literário, Caixa do Afeto, Hora do Conto em Casa e Sacola Literária.',
    icon: '/assets/book.svg'
  },
  {
    key: 'mapa',
    title: 'Mapa da Curiosidade',
    body: 'Área de aprofundamento com DCNEI, BNCC, Cadernos do LEEI, textos teóricos, vídeos e materiais complementares.',
    icon: '/assets/clock.svg'
  }
];

export const baggageKeys = [
  'A infância não fica para trás.',
  'Tornar-se professora é uma travessia.',
  'Formação faz sentido quando nasce do cotidiano.',
  'Leitura e escrita não começam na alfabetização.',
  'O LEEI provocou deslocamentos.'
];
