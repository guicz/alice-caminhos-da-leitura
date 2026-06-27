import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import {
  BookOpen,
  ChevronRight,
  Clock,
  Feather,
  Images,
  KeyRound,
  MailOpen,
  Map,
  MessageCircle,
  Quote,
  Search,
  Sparkles
} from 'lucide-react';
import { authors, baggageKeys, chapters } from '@/data/observatory';
import { practiceGalleries, teacherLetters } from '@/data/research-gallery';

type BoardSquare = [label: string, title: string, body: string, piece: string, tone: string];

const voiceThemes = [
  {
    title: 'Infâncias',
    tone: 'rose',
    quotes: [
      '"Minha infância foi uma infância bem raiz, com muitas brincadeiras, comidinha de barro, casinha..."',
      '"Eu vivia a minha infância rodeada de amigos, primos e muitas brincadeiras."',
      '"Brinquedos a gente criava, era mais panelinha, garrafa, brincar ao ar livre..."'
    ]
  },
  {
    title: 'Leitura e escrita',
    tone: 'sky',
    quotes: [
      '"Eu amava a leitura e a biblioteca, pegava muitos livros."',
      '"Hoje eu entendo que a leitura e a escrita estão presentes muito antes da alfabetização."',
      '"Minha avó desenhava os ingredientes para eu conseguir acompanhar as receitas."'
    ]
  },
  {
    title: 'Formação docente',
    tone: 'mint',
    quotes: [
      '"Foi na escola que aprendi de fato a ser professora."',
      '"A teoria não estava nem perto da prática."',
      '"As formações me ajudam a repensar minha prática e continuar aprendendo."'
    ]
  },
  {
    title: 'LEEI',
    tone: 'gold',
    quotes: [
      '"Foi um divisor de águas."',
      '"O curso abriu minha mente para outras possibilidades."',
      '"Não é ensinar a ler e escrever, é oportunizar experiências com a cultura escrita."'
    ]
  }
];

const methodSteps = [
  ['Abordagem', 'Pesquisa qualitativa de perspectiva narrativa e sociocultural.'],
  ['Participantes', 'Seis professoras da pré-escola em Santa Maria e São Francisco de Assis.'],
  ['Escuta', 'Entrevistas narrativas, registros de práticas e memórias da trajetória docente.'],
  ['Ética', 'Pseudônimos e cuidado com a identidade das participantes.']
];

const searchClues = [
  ['CAPES', 'Banco de Teses e Dissertações'],
  ['BDTD', 'Biblioteca Digital Brasileira de Teses e Dissertações'],
  ['Periódicos', 'Portal de Periódicos CAPES'],
  ['SciELO', 'Artigos e produções científicas']
];

const curiosityStops = [
  ['Infâncias', 'DCNEI, BNCC, Sonia Kramer, Corsaro e materiais sobre culturas infantis.'],
  ['Leitura e escrita', 'Cadernos do LEEI, cultura escrita, literatura infantil e oralidade.'],
  ['Formação docente', 'Nóvoa, Alarcão, Imbernón, Tardif e desenvolvimento profissional.'],
  ['Continuar a travessia', 'Vídeos, livros, lives e materiais para aprofundamento.']
];

const boardSquaresBySection: Record<string, BoardSquare[]> = {
  'quando-alice-encontra-a-rainha-vermelha': [
    ['Casa 1', 'Antes da escola ensinar', 'Primeiros encontros cotidianos com leitura e escrita.', '♙', 'mint'],
    ['Casa 2', 'Memórias leitoras', 'Livros, receitas, nomes e histórias aparecem antes da alfabetização.', '♘', 'cream'],
    ['Casa 3', 'Universidade e desafios', 'Leituras, autores, adaptação e distância entre expectativa e realidade.', '♗', 'rose'],
    ['Casa 4', 'Entre teoria e prática', 'Construção de pontes entre conceitos e cotidiano escolar.', '♕', 'cream'],
    ['Casa 5', 'Estágio e primeira sala', 'Porta de entrada para crianças reais, imprevistos e aprendizagem.', '♔', 'sky'],
    ['Casa 6', 'Professoras que inspiraram', 'Referências afetivas e profissionais deixam rastros na docência.', '♖', 'cream'],
    ['Casa 7', 'Escolha profissional', 'O desejo de ensinar se tece nas experiências, brincadeiras e encontros.', '♙', 'mint'],
    ['Casa 8', 'Travessia permanente', 'Ser professora não é chegada: é movimento de formação contínua.', '♘', 'gold']
  ],
  'o-tabuleiro-da-rainha-vermelha': [
    ['Casa 1', 'Movimento permanente', 'A formação não termina com a graduação.', '♙', 'mint'],
    ['Casa 2', 'Escuta e troca', 'Pequenos grupos e diálogo qualificam a participação.', '♘', 'cream'],
    ['Casa 3', 'Tensões', 'Formações expositivas e distantes da escola perdem potência.', '♗', 'rose'],
    ['Casa 4', 'Formação em contexto', 'A realidade da escola como ponto de partida.', '♕', 'cream'],
    ['Casa 5', 'Tempo da escola', 'A formação ganha força quando cabe no cotidiano docente.', '♔', 'sky'],
    ['Casa 6', 'Crítica que forma', 'O desconforto também produz perguntas e reposicionamentos.', '♖', 'cream'],
    ['Casa 7', 'Pares em conversa', 'A troca entre professoras amplia repertórios e sentidos.', '♙', 'mint'],
    ['Casa 8', 'Saberes em circulação', 'Planejar, registrar e narrar passam a sustentar a prática.', '♘', 'gold']
  ],
  'a-ultima-casa-do-tabuleiro': [
    ['Casa 1', 'Da alfabetização antecipada', 'Para experiências vivas com a cultura escrita.', '♙', 'mint'],
    ['Casa 2', 'Identidade docente', 'A professora se reconhece como autora de sua prática.', '♘', 'cream'],
    ['Casa 3', 'Formação coletiva', 'A formação deixa de ser transmissão e vira construção compartilhada.', '♗', 'rose'],
    ['Casa 4', 'Prática fundamentada', 'A experiência passa a dialogar com teoria e registro.', '♕', 'cream'],
    ['Casa 5', 'Materiais que ficam', 'Cadernos, textos e leituras seguem apoiando planejamento e estudo.', '♔', 'sky'],
    ['Casa 6', 'Novo olhar', 'Leitura e escrita aparecem nas brincadeiras, livros e portadores textuais.', '♖', 'cream'],
    ['Casa 7', 'Crianças autoras', 'As crianças participam da cultura escrita desde muito cedo.', '♙', 'mint'],
    ['Casa 8', 'Deslocamentos do LEEI', 'O programa deixa perguntas, repertório e novas possibilidades.', '♘', 'gold']
  ]
};

type SuitcaseItem = {
  item: string;
  body: string;
  icon: string;
  image: string;
  alt: string;
};

const suitcaseItems: SuitcaseItem[] = [
  {
    item: 'Boneca',
    body: 'A infância não fica para trás.',
    icon: 'sparkles',
    image: '/assets/alice-watercolor/gate.png',
    alt: 'Portão ilustrado cercado por flores'
  },
  {
    item: 'Livro',
    body: 'Leitura e escrita são experiências culturais.',
    icon: 'book',
    image: '/assets/alice-watercolor/storybook.png',
    alt: 'Livro aberto com flores'
  },
  {
    item: 'Xícara',
    body: 'As ideias ganham sentido em conversa.',
    icon: 'message',
    image: '/assets/alice-watercolor/tea.png',
    alt: 'Xícaras de chá ilustradas'
  },
  {
    item: 'Mapa',
    body: 'A curiosidade abre novas rotas.',
    icon: 'map',
    image: '/assets/alice-watercolor/curiosity-map.png',
    alt: 'Mapa ilustrado com bússola'
  },
  {
    item: 'Carta',
    body: 'As narrativas preservam vozes.',
    icon: 'mail',
    image: '/assets/alice-watercolor/hatter-library.png',
    alt: 'Biblioteca com livros e cartas'
  },
  {
    item: 'Rosa',
    body: 'O impossível se constrói com as crianças.',
    icon: 'feather',
    image: '/assets/alice-watercolor/queen.png',
    alt: 'Carta da rainha cercada por rosas'
  }
];

export function SectionExperience({ sectionId }: { sectionId: string; paragraphs: string[] }) {
  if (sectionId === 'conselho-do-gato-risonho-o-que-outros-pesquisadores-ja-descobriram') {
    return <SearchMapExperience />;
  }

  if (sectionId === 'o-cha-das-ideias') {
    return <TeaTableExperience />;
  }

  if (sectionId === 'o-relogio-do-coelho-branco-toda-travessia-precisa-de-um-caminho') {
    return <MethodClockExperience />;
  }

  if (sectionId === 'capitulos-do-pais-das-infancias') {
    return <ChapterTrailExperience />;
  }

  if (
    sectionId === 'quando-alice-encontra-a-rainha-vermelha' ||
    sectionId === 'o-tabuleiro-da-rainha-vermelha' ||
    sectionId === 'a-ultima-casa-do-tabuleiro'
  ) {
    return <BoardExperience sectionId={sectionId} />;
  }

  if (sectionId === 'biblioteca-do-chapeleiro') {
    return <LibraryExperience />;
  }

  if (sectionId === 'mapa-da-curiosidade') {
    return <CuriosityAtlasExperience />;
  }

  if (sectionId === 'o-que-alice-levou-na-bagagem') {
    return <BaggageExperience />;
  }

  return null;
}

function SearchMapExperience() {
  return (
    <div className="bespoke-experience clue-map">
      <section className="experience-intro-panel">
        <Search aria-hidden="true" />
        <div>
          <p className="kicker">Mapa de busca</p>
          <h3>As pistas que deram lugar à pesquisa</h3>
          <p>
            O estado do conhecimento aparece como um painel de investigação: onde a pesquisadora
            procurou, o que encontrou e qual lacuna abriu caminho para o observatório.
          </p>
        </div>
      </section>
      <div className="clue-grid">
        {searchClues.map(([label, body]) => (
          <article className="clue-card" key={label}>
            <span>{label}</span>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="finding-panel">
        <Quote aria-hidden="true" />
        <p>Foi seguindo essas pistas que a pesquisa encontrou seu caminho.</p>
      </div>
    </div>
  );
}

function TeaTableExperience() {
  return (
    <div className="bespoke-experience tea-table">
      <section className="experience-intro-panel">
        <Sparkles aria-hidden="true" />
        <div>
          <p className="kicker">Mesa teórica</p>
          <h3>Cartas de ideias para sentar à mesa</h3>
          <p>
            Cada autora ou autor entra como uma carta de conversa: o que traz para a pesquisa, onde
            aparece e qual pergunta deixa para a prática docente.
          </p>
        </div>
      </section>
      <div className="author-deck">
        {authors.map((author, index) => (
          <article className="author-card" key={author.name}>
            <span className="card-suit">{index % 2 === 0 ? '♥' : '♣'}</span>
            <p>{author.role}</p>
            <h3>{author.name}</h3>
            <dl>
              <div>
                <dt>Ideia servida</dt>
                <dd>{author.idea}</dd>
              </div>
              <div>
                <dt>Pergunta que fica</dt>
                <dd>{author.question}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

function MethodClockExperience() {
  return (
    <div className="bespoke-experience method-clock">
      <section className="experience-intro-panel">
        <Clock aria-hidden="true" />
        <div>
          <p className="kicker">Relógio metodológico</p>
          <h3>O percurso deixa de ser texto e vira caminho</h3>
          <p>
            A metodologia organiza o tempo da travessia: escuta, participantes, registros e cuidado
            ético aparecem como marcadores de percurso.
          </p>
        </div>
      </section>
      <ol className="method-path">
        {methodSteps.map(([title, body], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="participant-ribbon">
        {['Natane', 'Pati', 'Bela', 'Denise', 'Cláudia', 'Andréia'].map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  );
}

function ChapterTrailExperience() {
  return (
    <div className="bespoke-experience chapter-trails">
      <section className="experience-intro-panel">
        <BookOpen aria-hidden="true" />
        <div>
          <p className="kicker">Resultados em trilhas</p>
          <h3>Quatro caminhos para atravessar as análises</h3>
          <p>
            Os capítulos deixam de ser uma lista e passam a funcionar como portas de leitura: cada
            trilha reúne memórias, formação, práticas e deslocamentos.
          </p>
        </div>
      </section>
      <div className="trail-board">
        {chapters.map((chapter, index) => (
          <article className="trail-card" key={chapter.key}>
            <span className="trail-number">{String(index + 1).padStart(2, '0')}</span>
            <img src={chapter.asset} alt="" aria-hidden="true" />
            <div>
              <p>{chapter.subtitle}</p>
              <h3>{chapter.title}</h3>
              <ul>
                {chapter.trails.map(([title, body]) => (
                  <li key={title}>
                    <ChevronRight aria-hidden="true" />
                    <span>
                      <strong>{title}</strong>
                      {body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function BoardExperience({ sectionId }: { sectionId: string }) {
  const chapter =
    sectionId === 'quando-alice-encontra-a-rainha-vermelha'
      ? chapters[1]
      : sectionId === 'o-tabuleiro-da-rainha-vermelha'
        ? chapters[2]
        : chapters[3];

  return (
    <div className="bespoke-experience board-route">
      <section className="experience-intro-panel">
        <Map aria-hidden="true" />
        <div>
          <p className="kicker">Casas do tabuleiro</p>
          <h3>{chapter.title}</h3>
          <p>{chapter.quote}</p>
        </div>
      </section>
      <ol className="board-grid">
        {(boardSquaresBySection[sectionId] ?? chapter.trails.map(([title, body], index) => [
          `Casa ${index + 1}`,
          title,
          body,
          '♙',
          index % 2 ? 'cream' : 'mint'
        ])).map(([label, title, body, piece, tone]) => (
          <li className={`tone-${tone}`} key={`${label}-${title}`}>
            <span>{label}</span>
            <b aria-hidden="true">{piece}</b>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LibraryExperience() {
  const [activeTab, setActiveTab] = useState('cartas');

  return (
    <div className="bespoke-experience hatter-library">
      <section className="experience-intro-panel">
        <Feather aria-hidden="true" />
        <div>
          <p className="kicker">Acervo da travessia</p>
          <h3>Cartas, vozes, práticas e chaves em uma biblioteca viva</h3>
          <p>
            A Biblioteca do Chapeleiro concentra os registros reais da pesquisa. As fotos enviadas
            entram aqui como galerias de práticas, com as legendas dos documentos de cada pasta.
          </p>
        </div>
      </section>

      <div className="library-tabs" role="tablist" aria-label="Biblioteca do Chapeleiro">
        <LibraryTab id="cartas" activeTab={activeTab} setActiveTab={setActiveTab} icon={<MailOpen />}>
          Cartas
        </LibraryTab>
        <LibraryTab id="vozes" activeTab={activeTab} setActiveTab={setActiveTab} icon={<MessageCircle />}>
          Vozes
        </LibraryTab>
        <LibraryTab id="praticas" activeTab={activeTab} setActiveTab={setActiveTab} icon={<Images />}>
          Práticas
        </LibraryTab>
        <LibraryTab id="chaves" activeTab={activeTab} setActiveTab={setActiveTab} icon={<KeyRound />}>
          Chaves
        </LibraryTab>
      </div>

      {activeTab === 'cartas' ? <TeacherLettersPanel /> : null}
      {activeTab === 'vozes' ? <VoicesPanel /> : null}
      {activeTab === 'praticas' ? <PracticeGalleryPanel /> : null}
      {activeTab === 'chaves' ? <BaggageKeysPanel /> : null}
    </div>
  );
}

function LibraryTab({
  id,
  activeTab,
  setActiveTab,
  icon,
  children
}: {
  id: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
  icon: ReactElement;
  children: ReactNode;
}) {
  return (
    <button
      className={activeTab === id ? 'is-active' : undefined}
      type="button"
      role="tab"
      aria-selected={activeTab === id}
      onClick={() => setActiveTab(id)}
    >
      {icon}
      {children}
    </button>
  );
}

function TeacherLettersPanel() {
  return (
    <section className="library-panel letter-station">
      <header className="letter-station-copy">
        <p className="kicker">Cartas das professoras</p>
        <h3>Envelopes abertos para futuras cursistas</h3>
        <p>
          As cartas reais entram como peças de acervo: cada uma pode ser aberta em tela cheia para
          leitura mais confortável.
        </p>
      </header>
      <div className="letter-grid">
        {teacherLetters.map((letter) => (
          <a className="letter-card" href={letter.image} target="_blank" rel="noreferrer" key={letter.id}>
            <img src={letter.image} alt={letter.alt} loading="lazy" />
            <span>{letter.name}</span>
            <small>Abrir carta</small>
          </a>
        ))}
      </div>
    </section>
  );
}

function VoicesPanel() {
  return (
    <section className="library-panel voice-wall">
      {voiceThemes.map((theme) => (
        <article className={`voice-theme tone-${theme.tone}`} key={theme.title}>
          <h3>{theme.title}</h3>
          {theme.quotes.map((quote) => (
            <blockquote key={quote}>{quote}</blockquote>
          ))}
        </article>
      ))}
    </section>
  );
}

function PracticeGalleryPanel() {
  return (
    <section className="library-panel practice-galleries">
      {practiceGalleries.map((gallery, index) => (
        <details className="practice-gallery" key={gallery.id} open={index === 0}>
          <summary>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p>{gallery.subtitle}</p>
              <h3>{gallery.title}</h3>
            </div>
          </summary>
          <div className="practice-copy">
            {gallery.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="research-gallery-grid">
            {gallery.images.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>
                  <strong>{image.captionTitle}</strong>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </details>
      ))}
    </section>
  );
}

function BaggageKeysPanel() {
  return (
    <section className="library-panel keys-panel">
      {baggageKeys.map((keyText, index) => (
        <article key={keyText}>
          <KeyRound aria-hidden="true" />
          <span>Chave {index + 1}</span>
          <h3>{keyText}</h3>
        </article>
      ))}
    </section>
  );
}

function CuriosityAtlasExperience() {
  return (
    <div className="bespoke-experience curiosity-atlas">
      <section className="experience-intro-panel">
        <Map aria-hidden="true" />
        <div>
          <p className="kicker">Mapa da curiosidade</p>
          <h3>Rotas de estudo para continuar a travessia</h3>
          <p>
            Em vez de despejar links, o mapa organiza os materiais por interesse de pesquisa e deixa
            claro por onde a pessoa pode seguir.
          </p>
        </div>
      </section>
      <div className="atlas-grid">
        {curiosityStops.map(([title, body], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function BaggageExperience() {
  return (
    <div className="bespoke-experience baggage-room">
      <section className="experience-intro-panel">
        <KeyRound aria-hidden="true" />
        <div>
          <p className="kicker">Mala aberta</p>
          <h3>O que fica depois da travessia</h3>
          <p>
            A síntese final aparece como uma mala de tesouros: cada chave traduz um achado da
            pesquisa em linguagem curta, visual e memorável.
          </p>
        </div>
      </section>
      <div className="suitcase-scene">
        <div className="suitcase-hero" aria-hidden="true">
          <img src="/assets/alice-watercolor/suitcase-cropped.png" alt="" />
        </div>
        <div className="suitcase-grid">
          {suitcaseItems.map(({ item, body, icon, image, alt }) => (
            <article className={`bag-item icon-${icon}`} key={item}>
              <div className="bag-item-image">
                <img src={image} alt={alt} loading="lazy" />
              </div>
              <div className="bag-item-copy">
                {renderBagIcon(icon)}
                <span>{item}</span>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function renderBagIcon(icon: string) {
  const props = { 'aria-hidden': true };

  if (icon === 'book') return <BookOpen {...props} />;
  if (icon === 'message') return <MessageCircle {...props} />;
  if (icon === 'map') return <Map {...props} />;
  if (icon === 'mail') return <MailOpen {...props} />;
  if (icon === 'feather') return <Feather {...props} />;
  return <Sparkles {...props} />;
}
