export type TeacherLetter = { id: string; name: string; image: string; alt: string };

export type GalleryImage = { src: string; alt: string; captionTitle: string; caption: string };

export type PracticeGallery = {
  id: string;
  title: string;
  subtitle: string;
  sourceTitle: string;
  sourceSubtitle: string;
  description: string[];
  images: GalleryImage[];
};

export const teacherLetters: TeacherLetter[] = [
  {
    "id": "natane",
    "name": "Natane",
    "image": "/assets/research-gallery/cartas-professoras/natane.webp",
    "alt": "Carta da professora Natane"
  },
  {
    "id": "pati",
    "name": "Pati",
    "image": "/assets/research-gallery/cartas-professoras/pati.webp",
    "alt": "Carta da professora Pati"
  },
  {
    "id": "denise",
    "name": "Denise",
    "image": "/assets/research-gallery/cartas-professoras/denise.webp",
    "alt": "Carta da professora Denise"
  },
  {
    "id": "claudia",
    "name": "Cláudia",
    "image": "/assets/research-gallery/cartas-professoras/claudia.webp",
    "alt": "Carta da professora Cláudia"
  },
  {
    "id": "bela",
    "name": "Bela",
    "image": "/assets/research-gallery/cartas-professoras/bela.webp",
    "alt": "Carta da professora Bela"
  },
  {
    "id": "andreia",
    "name": "Andréia",
    "image": "/assets/research-gallery/cartas-professoras/andreia.webp",
    "alt": "Carta da professora Andréia"
  }
];

export const practiceGalleries: PracticeGallery[] = [
  {
    "id": "restaurante-literario",
    "title": "Restaurante Literário",
    "subtitle": "Livros servidos como experiência estética, afetiva e sensorial.",
    "sourceTitle": "Restaurante literário",
    "sourceSubtitle": "Livros servidos como experiência estética, afetiva e sensorial.",
    "description": [
      "Inspirada no universo lúdico e na potência da metáfora como ferramenta pedagógica, a proposta do Restaurante Literário convidou as professoras a transformarem a exposição de livros em uma verdadeira experiência sensorial e simbólica para as crianças. A ideia era simples, mas cheia de poesia: organizar os livros como se fossem pratos de um restaurante – com cardápio, apresentação e ambientação –, permitindo que as crianças pudessem escolher, de forma autônoma, aqueles “sabores” literários que mais lhes apetecessem. Cada título foi apresentado como um prato especial: os livros ilustrados, os contos de fadas, as poesias e as narrativas do cotidiano ganhavam lugar de destaque como verdadeiras iguarias, cuidadosamente dispostas em mesas, bandejas ou prateleiras decoradas, criando uma atmosfera de encantamento.",
      "A proposta tinha como objetivo principal estimular a escolha livre e o desejo pela leitura, respeitando o tempo, o gosto e a curiosidade de cada criança. Ao serem tratadas como leitoras competentes e curiosas, as crianças eram convidadas a “degustar” os livros com os olhos e o coração, desenvolvendo vínculos afetivos com os textos e fortalecendo sua autonomia leitora.",
      "Mais do que uma atividade de incentivo à leitura, o Restaurante Literário foi uma experiência estética e afetiva, em que a literatura era servida com beleza, intencionalidade e sensibilidade, convidando as infâncias a se alimentarem das palavras e a se nutrirem das histórias."
    ],
    "images": [
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-01.webp",
        "alt": "Restaurante Literário - foto 1",
        "captionTitle": "Foto 1",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      },
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-02.webp",
        "alt": "Restaurante Literário - foto 2",
        "captionTitle": "Foto 2",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      },
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-03.webp",
        "alt": "Restaurante Literário - foto 3",
        "captionTitle": "Foto 3",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      },
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-04.webp",
        "alt": "Restaurante Literário - foto 4",
        "captionTitle": "Foto 4",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      },
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-05.webp",
        "alt": "Restaurante Literário - foto 5",
        "captionTitle": "Foto 5",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      },
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-06.webp",
        "alt": "Restaurante Literário - foto 6",
        "captionTitle": "Foto 6",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      },
      {
        "src": "/assets/research-gallery/restaurante-literario/restaurante-literario-07.webp",
        "alt": "Restaurante Literário - foto 7",
        "captionTitle": "Foto 7",
        "caption": "Livros servidos como experiência estética, afetiva e sensorial."
      }
    ]
  },
  {
    "id": "era-uma-vez-em-familia",
    "title": "Era uma vez... em família",
    "subtitle": "A leitura atravessando casa, escola e vínculos afetivos.",
    "sourceTitle": "ERA UMA VEZ...EM FAMÍLIA",
    "sourceSubtitle": "A leitura atravessando casa, escola e vínculos afetivos.",
    "description": [
      "A proposta “Era uma vez...em Família” convida as famílias a refletirem e compartilharem práticas cotidianas que envolvam leitura e escrita em seus lares. Como forma de estreitar os laços entre família e escola e reconhecer o papel das famílias na formação leitora das crianças, as professoras propuseram a realização da Hora do Conto em Casa — um momento especial em que pais, mães ou responsáveis foram convidados a compartilhar com as crianças a leitura de uma história em casa, no tempo e no espaço de afeto do convívio familiar.",
      "Essa proposta tinha como objetivo central valorizar os vínculos afetivos que envolvem a leitura, reconhecendo que contar histórias é mais do que ler palavras: é partilhar olhares, escutar com o coração e fortalecer a presença amorosa dos adultos no universo das crianças. A leitura, assim, deixa de ser apenas uma atividade escolar para se tornar parte do cotidiano e das memórias afetivas da infância.",
      "Cada família foi orientada a escolher um livro ou uma história significativa — um conto tradicional, uma narrativa inventada, uma memória de infância — e reservar um momento tranquilo do dia para vivenciar essa leitura com a criança. Algumas famílias registraram o momento por meio de fotos, bilhetes ou pequenos relatos, que depois foram partilhados com a turma, criando um painel coletivo de experiências: “Histórias que nos aproximam”."
    ],
    "images": [
      {
        "src": "/assets/research-gallery/era-uma-vez-em-familia/era-uma-vez-em-familia-01.webp",
        "alt": "Era uma vez... em família - foto 1",
        "captionTitle": "Foto 1",
        "caption": "A leitura atravessando casa, escola e vínculos afetivos."
      },
      {
        "src": "/assets/research-gallery/era-uma-vez-em-familia/era-uma-vez-em-familia-02.webp",
        "alt": "Era uma vez... em família - foto 2",
        "captionTitle": "Foto 2",
        "caption": "A leitura atravessando casa, escola e vínculos afetivos."
      }
    ]
  },
  {
    "id": "entre-paginas-e-encantamentos",
    "title": "Entre páginas e encantamentos",
    "subtitle": "A leitura como experiência, imaginação e encontro.",
    "sourceTitle": "ENTRE PÁGINAS E ENCANTAMENTOS",
    "sourceSubtitle": "A leitura como experiência, imaginação e encontro",
    "description": [
      "A leitura na Educação Infantil ultrapassa o ato de ouvir histórias. Ela constitui uma experiência estética, afetiva, cultural e social, na qual as crianças entram em contato com diferentes narrativas, ampliam seu repertório, produzem interpretações, fazem perguntas, imaginam, criam hipóteses e estabelecem relações com suas próprias vivências.",
      "Nesse percurso, a Hora do Conto transforma-se em um espaço de encontro entre crianças, livros, narradores e diferentes linguagens. Cada história lida inaugura novas possibilidades de brincar, investigar, dramatizar, desenhar, conversar, produzir registros e continuar narrativas, fortalecendo a compreensão de que a leitura é uma prática cultural presente na vida das pessoas.",
      "Mais do que ouvir histórias, as crianças tornam-se leitoras ao participar ativamente das experiências literárias, atribuindo sentidos aos textos e construindo relações afetivas com os livros."
    ],
    "images": [
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-01.webp",
        "alt": "Entre páginas e encantamentos - foto 1",
        "captionTitle": "FOTO 1",
        "caption": "A Hora do Conto: um convite para entrar na história A Hora do Conto representa um momento privilegiado de aproximação das crianças com a literatura infantil. A organização do ambiente, a escolha cuidadosa das obras, a expressividade do narrador e o diálogo após a leitura favorecem experiências significativas com a linguagem literária. Durante esses momentos, as crianças observam ilustrações, antecipam acontecimentos, formulam hipóteses, comentam personagens, estabelecem relações com outras histórias e compartilham diferentes interpretações, compreendendo que ler também é conversar sobre aquilo que se lê."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-02.webp",
        "alt": "Entre páginas e encantamentos - foto 2",
        "captionTitle": "FOTO 2",
        "caption": "Quando a história continua depois do livro As experiências literárias ganham novos significados quando se desdobram em propostas investigativas, brincadeiras, produções artísticas, dramatizações, registros, construções coletivas e pesquisas. Nessas situações, a história deixa de ser um momento isolado e passa a integrar diferentes linguagens e campos de experiência, permitindo que as crianças expressem suas compreensões por meio do desenho, da oralidade, da escrita espontânea, do faz de conta e das múltiplas formas de representação. Assim, a literatura torna-se ponto de partida para novas descobertas, fortalecendo o protagonismo infantil e ampliando as possibilidades de interação com a cultura escrita.,"
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-03.webp",
        "alt": "Entre páginas e encantamentos - foto 3",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-04.webp",
        "alt": "Entre páginas e encantamentos - foto 4",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-05.webp",
        "alt": "Entre páginas e encantamentos - foto 5",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-06.webp",
        "alt": "Entre páginas e encantamentos - foto 6",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-07.webp",
        "alt": "Entre páginas e encantamentos - foto 7",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-08.webp",
        "alt": "Entre páginas e encantamentos - foto 8",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-09.webp",
        "alt": "Entre páginas e encantamentos - foto 9",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-10.webp",
        "alt": "Entre páginas e encantamentos - foto 10",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-11.webp",
        "alt": "Entre páginas e encantamentos - foto 11",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-12.webp",
        "alt": "Entre páginas e encantamentos - foto 12",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-13.webp",
        "alt": "Entre páginas e encantamentos - foto 13",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-14.webp",
        "alt": "Entre páginas e encantamentos - foto 14",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-15.webp",
        "alt": "Entre páginas e encantamentos - foto 15",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-16.webp",
        "alt": "Entre páginas e encantamentos - foto 16",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      },
      {
        "src": "/assets/research-gallery/entre-paginas-e-encantamentos/entre-paginas-e-encantamentos-17.webp",
        "alt": "Entre páginas e encantamentos - foto 17",
        "captionTitle": "FOTO 3",
        "caption": "Livros que circulam, histórias que permanecem Quando os livros permanecem disponíveis nos diferentes espaços da sala, as crianças compreendem que a leitura faz parte do cotidiano. Manuseiam as obras, escolhem aquelas que desejam explorar, observam ilustrações, \"leem\" pelas imagens, narram histórias aos colegas e constroem relações cada vez mais próximas com os livros. Esse contato cotidiano fortalece vínculos afetivos com a literatura e contribui para a constituição de leitores desde a primeira infância."
      }
    ]
  },
  {
    "id": "escrita-espacos-compartilhados",
    "title": "A escrita que transforma os espaços compartilhados",
    "subtitle": "Quando as crianças deixam marcas nos ambientes da escola.",
    "sourceTitle": "A ESCRITA QUE TRANSFORMA OS ESPAÇOS COMPARTILHADOS",
    "sourceSubtitle": "Quando as crianças deixam suas marcas nos ambientes da escola",
    "description": [
      "Os espaços da escola também comunicam e contam histórias. Quando as crianças participam da construção de elementos que passam a integrar o cotidiano escolar, como a toalha do refeitório e o cardápio coletivo, compreendem que a escrita possui destinatários, intenções e funções sociais concretas.",
      "Ao desenhar, registrar seus nomes, produzir escritas espontâneas, selecionar imagens e organizar informações, as crianças tornam-se autoras de produções que passam a fazer parte dos ambientes que frequentam diariamente. Dessa forma, reconhecem-se como sujeitos capazes de comunicar ideias, registrar experiências e transformar os espaços por meio da linguagem escrita.",
      "Mais do que decorar ambientes, essas produções representam a participação ativa das crianças na construção da cultura da escola, fortalecendo o sentimento de pertencimento e valorizando suas hipóteses sobre a escrita."
    ],
    "images": [
      {
        "src": "/assets/research-gallery/escrita-espacos-compartilhados/escrita-espacos-compartilhados-01.webp",
        "alt": "A escrita que transforma os espaços compartilhados - foto 1",
        "captionTitle": "FOTO 1",
        "caption": "A escrita que acolhe à mesa A construção coletiva da toalha do refeitório possibilitou que as crianças deixassem registradas suas marcas por meio de desenhos, nomes e escritas espontâneas. A proposta transformou um objeto de uso cotidiano em um espaço de expressão, identidade e pertencimento. Ao reconhecer sua produção durante os momentos das refeições, as crianças compreendem que a escrita e o desenho permanecem, comunicam e fazem parte da vida coletiva da escola. O refeitório deixa de ser apenas um espaço de alimentação e passa a constituir-se também como um ambiente de leitura, memória e interação."
      },
      {
        "src": "/assets/research-gallery/escrita-espacos-compartilhados/escrita-espacos-compartilhados-02.webp",
        "alt": "A escrita que transforma os espaços compartilhados - foto 2",
        "captionTitle": "FOTO 2",
        "caption": "O cardápio que as crianças ajudaram a escrever A construção do cardápio coletivo aproximou as crianças de um gênero textual presente em diferentes espaços da sociedade. Ao representar os alimentos por meio de desenhos, imagens, palavras e escritas espontâneas, elas passaram a compreender que o cardápio informa, organiza e comunica aquilo que será servido. Durante a elaboração, as crianças participaram de escolhas, conversaram sobre os alimentos, levantaram hipóteses de escrita, compararam palavras e utilizaram diferentes formas de representação para tornar as informações compreensíveis aos colegas e às famílias. Assim, o cardápio deixou de ser um documento produzido apenas pelos adultos e tornou-se uma construção coletiva, carregada de significado para quem participa diariamente da rotina escolar."
      },
      {
        "src": "/assets/research-gallery/escrita-espacos-compartilhados/escrita-espacos-compartilhados-03.webp",
        "alt": "A escrita que transforma os espaços compartilhados - foto 3",
        "captionTitle": "FOTO 2",
        "caption": "O cardápio que as crianças ajudaram a escrever A construção do cardápio coletivo aproximou as crianças de um gênero textual presente em diferentes espaços da sociedade. Ao representar os alimentos por meio de desenhos, imagens, palavras e escritas espontâneas, elas passaram a compreender que o cardápio informa, organiza e comunica aquilo que será servido. Durante a elaboração, as crianças participaram de escolhas, conversaram sobre os alimentos, levantaram hipóteses de escrita, compararam palavras e utilizaram diferentes formas de representação para tornar as informações compreensíveis aos colegas e às famílias. Assim, o cardápio deixou de ser um documento produzido apenas pelos adultos e tornou-se uma construção coletiva, carregada de significado para quem participa diariamente da rotina escolar."
      },
      {
        "src": "/assets/research-gallery/escrita-espacos-compartilhados/escrita-espacos-compartilhados-04.webp",
        "alt": "A escrita que transforma os espaços compartilhados - foto 4",
        "captionTitle": "FOTO 2",
        "caption": "O cardápio que as crianças ajudaram a escrever A construção do cardápio coletivo aproximou as crianças de um gênero textual presente em diferentes espaços da sociedade. Ao representar os alimentos por meio de desenhos, imagens, palavras e escritas espontâneas, elas passaram a compreender que o cardápio informa, organiza e comunica aquilo que será servido. Durante a elaboração, as crianças participaram de escolhas, conversaram sobre os alimentos, levantaram hipóteses de escrita, compararam palavras e utilizaram diferentes formas de representação para tornar as informações compreensíveis aos colegas e às famílias. Assim, o cardápio deixou de ser um documento produzido apenas pelos adultos e tornou-se uma construção coletiva, carregada de significado para quem participa diariamente da rotina escolar."
      }
    ]
  },
  {
    "id": "a-escrita-mora-aqui",
    "title": "A escrita mora aqui",
    "subtitle": "Quando o cotidiano vira território de leitura e escrita.",
    "sourceTitle": "A ESCRITA MORA AQUI: QUANDO O COTIDIANO SE TRANSFORMA EM TERRITÓRIO DE LEITURA E ESCRITA",
    "sourceSubtitle": "A escrita está presente muito antes de ser objeto de ensino sistemático. Na Educação Infantil, ela ganha sentido quando circula pelos diferentes espaços, materiais e situações vividas pelas crianças, assumindo funções sociais reais. Ao encontrar calendários, chamadas, placas, receitas, listas, convites, registros e produções coletivas, as crianças percebem que a escrita comunica, organiza, identifica, informa, registra e preserva memórias.",
    "description": [
      "Mais do que reconhecer letras ou escrever palavras, elas passam a compreender para que as pessoas escrevem, em quais contextos a escrita é utilizada e como podem participar dessa cultura letrada. Assim, o ambiente torna-se um espaço alfabetizador, no qual a escrita deixa de ser um conteúdo isolado e passa a integrar as experiências cotidianas das crianças."
    ],
    "images": [
      {
        "src": "/assets/research-gallery/a-escrita-mora-aqui/a-escrita-mora-aqui-01.webp",
        "alt": "A escrita mora aqui - foto 1",
        "captionTitle": "FOTO 1",
        "caption": "O calendário de aniversários constitui uma situação autêntica de uso da escrita. Nele, as crianças consultam os meses do ano, identificam seus nomes, localizam colegas, observam números e compreendem que a escrita registra informações importantes para o grupo."
      },
      {
        "src": "/assets/research-gallery/a-escrita-mora-aqui/a-escrita-mora-aqui-02.webp",
        "alt": "A escrita mora aqui - foto 2",
        "captionTitle": "FOTO 2",
        "caption": "A chamada possibilita que as crianças encontrem diariamente seus nomes, reconheçam letras, comparem escritas e percebam que cada pessoa possui uma identidade representada pela escrita. O nome próprio torna-se uma importante referência para investigar o sistema de escrita, sempre inserido em uma situação com significado para o grupo."
      },
      {
        "src": "/assets/research-gallery/a-escrita-mora-aqui/a-escrita-mora-aqui-03.webp",
        "alt": "A escrita mora aqui - foto 3",
        "captionTitle": "FOTO 3",
        "caption": "As placas presentes na escola cumprem funções sociais reais: orientar caminhos, identificar ambientes, informar e organizar os espaços. Ao produzir placas para um evento ou para os ambientes da escola, as crianças compreendem que se escreve para comunicar algo a outras pessoas. Nas investigações realizadas pelas crianças, a escrita aparece como forma de registrar informações importantes."
      },
      {
        "src": "/assets/research-gallery/a-escrita-mora-aqui/a-escrita-mora-aqui-04.webp",
        "alt": "A escrita mora aqui - foto 4",
        "captionTitle": "FOTOS 4",
        "caption": "Durante a elaboração da lista de ingredientes, as crianças participaram da organização das ideias, levantaram hipóteses sobre como escrever determinadas palavras e compreenderam que listas são textos utilizados para lembrar, organizar e comunicar informações."
      },
      {
        "src": "/assets/research-gallery/a-escrita-mora-aqui/a-escrita-mora-aqui-05.webp",
        "alt": "A escrita mora aqui - foto 5",
        "captionTitle": "FOTOS 4",
        "caption": "Durante a elaboração da lista de ingredientes, as crianças participaram da organização das ideias, levantaram hipóteses sobre como escrever determinadas palavras e compreenderam que listas são textos utilizados para lembrar, organizar e comunicar informações."
      }
    ]
  }
];
