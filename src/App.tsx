import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import { BookMarked, ChevronLeft, ChevronRight, Expand, Link2, ListChecks, Menu, Quote, Sparkles } from 'lucide-react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionExperience } from '@/components/SectionExperience';
import { documentSections } from '@/data/document-content';
import { hasSectionExperience } from '@/data/section-experiences';

const SITE_TITLE = 'Observatório Digital dos Caminhos da Leitura e da Escrita no País das Infâncias';
const SHORT_SITE_TITLE = 'Observatório Digital';

function App() {
  const { sectionId } = useParams();

  if (!sectionId) {
    return <HomePage />;
  }

  const activeIndex = documentSections.findIndex((section) => section.id === sectionId);
  if (activeIndex < 0) {
    return <Navigate to={`/observatorio/${documentSections[0].id}`} replace />;
  }

  return <DocumentPage activeIndex={activeIndex} />;
}

function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="site-shell">
        <section className="home-hero immersive-home" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true">
            <img src="/assets/alice-watercolor/gate.png" alt="" />
          </div>
          <div className="hero-copy">
            <p className="kicker">Produto educacional de mestrado</p>
            <h1 id="hero-title">{SITE_TITLE}</h1>
            <p className="hero-subtitle">Uma travessia interativa inspirada em Alice</p>
            <p>
              Escolha uma cena para entrar. Cada parada abre um ambiente inspirado em Alice e carrega
              as informações daquela parte do observatório.
            </p>
            <dl className="hero-meta">
              <div>
                <dt>Pesquisadora</dt>
                <dd>Tatielli de Oliveira Barbosa</dd>
              </div>
              <div>
                <dt>Programa</dt>
                <dd>PPG em Políticas Públicas e Gestão Educacional - UFSM</dd>
              </div>
            </dl>
            <div className="hero-actions">
              <Button asChild>
                <Link to={`/observatorio/${documentSections[1].id}`}>Entrar na toca</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="experience-map" aria-labelledby="map-title">
          <div className="map-heading">
            <p className="kicker">Mapa do País das Infâncias</p>
            <h2 id="map-title">Mapa da travessia</h2>
          </div>
          <div className="experience-grid">
            {documentSections.map((section, index) => {
              const experience = getExperience(section.id);
              return (
                <Link
                  className={`experience-card ${experience.className}`}
                  to={`/observatorio/${section.id}`}
                  key={`${section.id}-${index}`}
                  style={{ '--card-image': `url(${experience.asset})` } as CSSProperties}
                >
                  <div>
                    <p>{experience.label}</p>
                    <h3>{getCardTitle(section.id, section.title)}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

function DocumentPage({ activeIndex }: { activeIndex: number }) {
  const [contentOpen, setContentOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const activeSection = documentSections[activeIndex];
  const previousSection = documentSections[activeIndex - 1];
  const nextSection = documentSections[activeIndex + 1];
  const progress = ((activeIndex + 1) / documentSections.length) * 100;

  const leadParagraph = useMemo(() => {
    return activeSection.paragraphs.find((paragraph) => paragraph.length > 90) ?? activeSection.paragraphs[0];
  }, [activeSection]);
  const experience = getExperience(activeSection.id);
  const hasBespokeContent = hasSectionExperience(activeSection.id);

  useEffect(() => {
    setContentOpen(false);
  }, [activeSection.id]);

  function goToSection(index: number) {
    const target = documentSections[index];
    if (target) {
      navigate(`/observatorio/${target.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function requestFullscreen() {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    void document.documentElement.requestFullscreen?.();
  }

  function openExperience() {
    setContentOpen(true);
    window.setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  return (
    <>
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <SiteHeader
        onFullscreen={requestFullscreen}
        activeSectionId={activeSection.id}
      />
      <main className={`reader-shell ${experience.className}`}>
        <aside className="section-sidebar" aria-label="Páginas do observatório">
          <Link className="sidebar-home" to="/">
            Mapa da travessia
          </Link>
          <nav>
            {documentSections.map((section, index) => (
              <Link
                className={section.id === activeSection.id ? 'is-selected' : ''}
                to={`/observatorio/${section.id}`}
                key={`${section.id}-${index}`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {getCardTitle(section.id, section.title)}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="experience-canvas">
          <section className="experience-stage">
            <div className="scene-copy">
              <p className="kicker">Página {activeIndex + 1} da travessia</p>
              <h1 className={getDisplayTitle(activeSection.title).length > 52 ? 'is-long-title' : undefined}>
                {getDisplayTitle(activeSection.title)}
              </h1>
              <p>{experience.description}</p>
              {leadParagraph ? <blockquote>{leadParagraph}</blockquote> : null}
              <Button type="button" onClick={openExperience}>
                {contentOpen ? 'Conteúdo aberto' : experience.action}
              </Button>
            </div>
            <div className="scene-visual" aria-hidden="true">
              <div className="scene-orbit">
                <img src={experience.asset} alt="" />
              </div>
              <span className="floating-symbol symbol-one">{experience.symbols[0]}</span>
              <span className="floating-symbol symbol-two">{experience.symbols[1]}</span>
              <span className="floating-symbol symbol-three">{experience.symbols[2]}</span>
            </div>
          </section>

          <section className={`experience-content ${contentOpen ? 'is-open' : ''}`} ref={contentRef}>
            {!contentOpen ? (
              <div className="closed-panel">
                <p className="kicker">Experiência fechada</p>
                <h2>{experience.closedTitle}</h2>
                <p>{experience.closedText}</p>
              </div>
            ) : (
              <>
                <header className="content-header">
                  <p className="kicker">{experience.label}</p>
                  <h2>{getDisplayTitle(activeSection.title)}</h2>
                </header>
                {hasBespokeContent ? (
                  <>
                    <SectionExperience sectionId={activeSection.id} paragraphs={activeSection.paragraphs} />
                    <details className="source-drawer">
                      <summary>Ler o texto em blocos visuais</summary>
                      <VisualDocumentReader
                        key={activeSection.id}
                        paragraphs={activeSection.paragraphs}
                        sectionTitle={getDisplayTitle(activeSection.title)}
                      />
                    </details>
                  </>
                ) : (
                  <VisualDocumentReader
                    key={activeSection.id}
                    paragraphs={activeSection.paragraphs}
                    sectionTitle={getDisplayTitle(activeSection.title)}
                  />
                )}
              </>
            )}
          </section>

          <footer className="page-navigation">
            {previousSection ? (
              <Button variant="ghost" type="button" onClick={() => goToSection(activeIndex - 1)}>
                Página anterior
              </Button>
            ) : (
              <span />
            )}
            <span>
              {activeIndex + 1}/{documentSections.length}
            </span>
            {nextSection ? (
              <Button type="button" onClick={() => goToSection(activeIndex + 1)}>
                Próxima página
              </Button>
            ) : (
              <Button asChild>
                <Link to="/">Voltar ao início</Link>
              </Button>
            )}
          </footer>
        </article>
      </main>
    </>
  );
}

function SiteHeader({
  onFullscreen,
  activeSectionId
}: {
  onFullscreen?: () => void;
  activeSectionId?: string;
}) {
  const primarySections = documentSections.slice(0, 6);
  const overflowSections = documentSections.slice(6);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label={`Voltar ao início do ${SITE_TITLE}`}>
        <span className="brand-mark">O</span>
        <span>{SHORT_SITE_TITLE}</span>
      </Link>
      <nav className="main-nav" aria-label="Atalhos principais">
        {primarySections.map((section) => (
          <Link
            className={section.id === activeSectionId ? 'is-selected' : ''}
            to={`/observatorio/${section.id}`}
            key={section.id}
          >
            {getShortNavTitle(section.id)}
          </Link>
        ))}
        <details className="nav-more">
          <summary>
            <Menu size={16} />
            Trilhas
          </summary>
          <div className="nav-menu-panel">
            {overflowSections.map((section) => (
              <Link
                className={section.id === activeSectionId ? 'is-selected' : ''}
                to={`/observatorio/${section.id}`}
                key={section.id}
              >
                {getCardTitle(section.id, section.title)}
              </Link>
            ))}
          </div>
        </details>
      </nav>
      {onFullscreen ? (
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={onFullscreen} aria-label="Tela cheia">
            <Expand size={18} />
          </button>
        </div>
      ) : null}
    </header>
  );
}

function getDisplayTitle(title: string) {
  const titles: Record<string, string> = {
    'POR ONDE COMEÇA A TOCA': 'Por onde começa a toca',
    'Conselho do Gato Risonho - o que outros pesquisadores já descobriram?':
      'Conselho do Gato Risonho',
    'O CHÁ DAS IDEIAS': 'O Chá das Ideias',
    'O RELÓGIO DO COELHO BRANCO - Toda travessia precisa de um caminho.':
      'O Relógio do Coelho Branco',
    'CAPÍTULOS DO PAÍS DAS INFÂNCIAS': 'Capítulos do País das Infâncias'
  };

  return titles[title] ?? title;
}

function getCardTitle(sectionId: string, title: string) {
  const titles: Record<string, string> = {
    'conselho-do-gato-risonho-o-que-outros-pesquisadores-ja-descobriram': 'Conselho do Gato Risonho',
    'o-relogio-do-coelho-branco-toda-travessia-precisa-de-um-caminho': 'Relógio do Coelho Branco'
  };

  return titles[sectionId] ?? getDisplayTitle(title);
}

function getShortNavTitle(sectionId: string) {
  const labels: Record<string, string> = {
    apresentacao: 'Entrada',
    'por-onde-comeca-a-toca': 'Toca',
    'espelho-da-investigadora': 'Espelho',
    'conselho-do-gato-risonho-o-que-outros-pesquisadores-ja-descobriram': 'Gato',
    'o-cha-das-ideias': 'Chá',
    'o-relogio-do-coelho-branco-toda-travessia-precisa-de-um-caminho': 'Método'
  };

  return labels[sectionId] ?? 'Trilha';
}

function getExperience(sectionId: string) {
  const fallback = {
    label: 'Parada do Observatório',
    action: 'Abrir experiência',
    closedTitle: 'Abra esta parada para carregar o conteúdo.',
    closedText: 'Cada página preserva o texto da cliente, mas aparece como uma cena navegável.',
    description: 'Uma parada narrativa do Observatório Digital.',
    asset: '/assets/alice-watercolor/gate.png',
    className: 'scene-door',
    symbols: ['?', '✦', '•']
  };

  const map: Record<string, typeof fallback> = {
    apresentacao: {
      ...fallback,
      label: 'Entrada da Toca',
      action: 'Abrir a porta',
      closedTitle: 'A porta ainda está fechada.',
      closedText: 'Abra a entrada para apresentar o observatório e a travessia da pesquisa.',
      description: 'A chegada ao observatório: apresentação, contexto e convite para a travessia.',
      asset: '/assets/alice-watercolor/gate.png',
      className: 'scene-door',
      symbols: ['porta', 'chave', 'mapa']
    },
    'por-onde-comeca-a-toca': {
      ...fallback,
      label: 'Descida pela Toca',
      action: 'Entrar na toca',
      closedTitle: 'A toca guarda o ponto de partida.',
      closedText: 'Entre para carregar o problema, objetivo, contexto e participantes da pesquisa.',
      description: 'O ponto de partida da investigação e das inquietações sobre formação docente.',
      asset: '/assets/alice-watercolor/rabbit.png',
      className: 'scene-hole',
      symbols: ['↓', 'LEEI', '?']
    },
    'espelho-da-investigadora': {
      ...fallback,
      label: 'Espelho da Investigadora',
      action: 'Atravessar o espelho',
      closedTitle: 'O espelho ainda não revelou a travessia.',
      closedText: 'Abra para conhecer a trajetória de Tatielli e o sentido da metáfora de Alice.',
      description: 'A pesquisadora aparece como parte da jornada, com suas memórias e deslocamentos.',
      asset: '/assets/alice-watercolor/mirror.png',
      className: 'scene-mirror',
      symbols: ['eu', 'Alice', 'travessia']
    },
    'conselho-do-gato-risonho-o-que-outros-pesquisadores-ja-descobriram': {
      ...fallback,
      label: 'Conselho do Gato Risonho',
      action: 'Seguir as pistas',
      closedTitle: 'As pistas ainda estão espalhadas.',
      closedText: 'Abra para carregar o estado do conhecimento e os caminhos já percorridos.',
      description: 'Um mapa de pistas para localizar a pesquisa entre o que já foi investigado.',
      asset: '/assets/alice-watercolor/cheshire.png',
      className: 'scene-cat',
      symbols: ['CAPES', 'BDTD', 'SciELO']
    },
    'o-cha-das-ideias': {
      ...fallback,
      label: 'Chá das Ideias',
      action: 'Sentar à mesa',
      closedTitle: 'A mesa do chá está posta.',
      closedText: 'Abra para encontrar autores, ideias centrais e perguntas provocadoras.',
      description: 'A mesa teórica onde autores e autoras conversam com a pesquisa.',
      asset: '/assets/alice-watercolor/tea.png',
      className: 'scene-tea',
      symbols: ['xícara', 'autores', 'ideias']
    },
    'o-relogio-do-coelho-branco-toda-travessia-precisa-de-um-caminho': {
      ...fallback,
      label: 'Relógio do Coelho Branco',
      action: 'Abrir o relógio',
      closedTitle: 'O tempo metodológico ainda está fechado.',
      closedText: 'Abra para carregar abordagem, participantes, entrevistas, registros e ética.',
      description: 'A metodologia como caminho da travessia e organização do tempo da pesquisa.',
      asset: '/assets/alice-watercolor/clock-map.png',
      className: 'scene-clock',
      symbols: ['tempo', 'método', 'vozes']
    },
    'capitulos-do-pais-das-infancias': {
      ...fallback,
      label: 'Capítulos do País das Infâncias',
      action: 'Abrir os capítulos',
      closedTitle: 'Os capítulos estão à espera.',
      closedText: 'Abra para carregar as trilhas e os mundos de resultados do observatório.',
      description: 'A entrada para os resultados da pesquisa em trilhas narrativas.',
      asset: '/assets/alice-watercolor/storybook.png',
      className: 'scene-book',
      symbols: ['trilhas', 'vozes', 'resultados']
    },
    'quando-alice-encontra-a-rainha-vermelha': {
      ...fallback,
      label: 'Encontro com a Rainha Vermelha',
      action: 'Entrar no tabuleiro',
      closedTitle: 'O tabuleiro ainda não começou.',
      closedText: 'Abra para acompanhar formação inicial, teoria, prática e entrada na docência.',
      description: 'O movimento de tornar-se professora em casas, desafios e deslocamentos.',
      asset: '/assets/alice-watercolor/queen.png',
      className: 'scene-chess',
      symbols: ['casa 1', 'casa 2', 'casa 3']
    },
    'o-tabuleiro-da-rainha-vermelha': {
      ...fallback,
      label: 'Tabuleiro da Formação Continuada',
      action: 'Mover uma casa',
      closedTitle: 'A próxima casa depende de movimento.',
      closedText: 'Abra para carregar percursos, tensões e aprendizagens da formação continuada.',
      description: 'A formação continuada como movimento permanente, troca e reflexão.',
      asset: '/assets/alice-watercolor/chess-garden.png',
      className: 'scene-board',
      symbols: ['mover', 'trocar', 'refletir']
    },
    'a-ultima-casa-do-tabuleiro': {
      ...fallback,
      label: 'Última Casa do Tabuleiro',
      action: 'Abrir a última casa',
      closedTitle: 'A última casa guarda os deslocamentos.',
      closedText: 'Abra para carregar as repercussões do LEEI nas práticas e concepções.',
      description: 'Os deslocamentos produzidos pelo LEEI e o que permanece na docência.',
      asset: '/assets/alice-watercolor/golden-key.png',
      className: 'scene-key',
      symbols: ['LEEI', 'deslocar', 'prática']
    },
    'biblioteca-do-chapeleiro': {
      ...fallback,
      label: 'Biblioteca do Chapeleiro',
      action: 'Abrir a biblioteca',
      closedTitle: 'A biblioteca guarda cartas, vozes e práticas.',
      closedText: 'Abra para carregar registros, cartas das professoras e práticas que ganharam asas.',
      description: 'O acervo narrativo do observatório: cartas, vozes, práticas e tesouros.',
      asset: '/assets/alice-watercolor/hatter-library.png',
      className: 'scene-library',
      symbols: ['cartas', 'vozes', 'asas']
    },
    'mapa-da-curiosidade': {
      ...fallback,
      label: 'Mapa da Curiosidade',
      action: 'Desdobrar o mapa',
      closedTitle: 'O mapa ainda está dobrado.',
      closedText: 'Abra para carregar leituras, documentos, vídeos e materiais complementares.',
      description: 'Pistas para seguir estudando infâncias, leitura, escrita e formação docente.',
      asset: '/assets/alice-watercolor/curiosity-map.png',
      className: 'scene-map',
      symbols: ['pistas', 'links', 'seguir']
    },
    'o-que-alice-levou-na-bagagem': {
      ...fallback,
      label: 'Bagagem da Travessia',
      action: 'Abrir a bagagem',
      closedTitle: 'A mala guarda os achados.',
      closedText: 'Abra para carregar a síntese final e os tesouros da pesquisa.',
      description: 'A síntese dos achados, perguntas e deslocamentos que ficam da jornada.',
      asset: '/assets/alice-watercolor/suitcase.png',
      className: 'scene-bag',
      symbols: ['livro', 'carta', 'rosa']
    }
  };

  return map[sectionId] ?? fallback;
}

type ReaderParagraphKind = 'text' | 'heading' | 'quote' | 'prompt' | 'resource' | 'list' | 'link';

type ReaderParagraph = {
  kind: ReaderParagraphKind;
  text: string;
  href?: string;
  isHeading: boolean;
};

type ReaderBlock = {
  title: string;
  eyebrow: string;
  kind: ReaderParagraphKind;
  items: ReaderParagraph[];
};

function VisualDocumentReader({ sectionTitle, paragraphs }: { sectionTitle: string; paragraphs: string[] }) {
  const blocks = useMemo(() => buildReaderBlocks(paragraphs), [paragraphs]);
  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = Math.min(activeIndex, blocks.length - 1);
  const activeBlock = blocks[safeIndex];

  if (!activeBlock) {
    return null;
  }

  const progress = ((safeIndex + 1) / blocks.length) * 100;

  return (
    <div className="visual-reader">
      <div className="reader-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <nav className="reader-tabs" aria-label={`Categorias de leitura de ${sectionTitle}`}>
        {blocks.map((block, index) => (
          <button
            className={index === safeIndex ? 'is-active' : undefined}
            type="button"
            onClick={() => setActiveIndex(index)}
            key={`${block.title}-${index}`}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{block.eyebrow}</strong>
            <small>{block.title}</small>
          </button>
        ))}
      </nav>

      <article className={`reader-slide reader-${activeBlock.kind}`}>
        <header className="reader-slide-header">
          <div>
            <p className="kicker">{activeBlock.eyebrow}</p>
            <h3>{activeBlock.title}</h3>
          </div>
          <span className="reader-slide-icon">{getReaderIcon(activeBlock.kind)}</span>
        </header>

        <div className="reader-slide-items">
          {activeBlock.items.map((item, index) => (
            <ReaderItem item={item} key={`${item.text}-${index}`} />
          ))}
        </div>

        <footer className="reader-controls">
          <button
            type="button"
            onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
            disabled={safeIndex === 0}
            aria-label="Bloco anterior"
          >
            <ChevronLeft aria-hidden="true" />
            Anterior
          </button>
          <span>
            {safeIndex + 1}/{blocks.length}
          </span>
          <button
            type="button"
            onClick={() => setActiveIndex((current) => Math.min(blocks.length - 1, current + 1))}
            disabled={safeIndex === blocks.length - 1}
            aria-label="Proximo bloco"
          >
            Proximo
            <ChevronRight aria-hidden="true" />
          </button>
        </footer>
      </article>
    </div>
  );
}

function ReaderItem({ item }: { item: ReaderParagraph }) {
  if (item.kind === 'quote') {
    return <blockquote className="reader-item">{item.text}</blockquote>;
  }

  if (item.kind === 'link' && item.href) {
    return (
      <a className="reader-item reader-link" href={item.href} target="_blank" rel="noreferrer">
        {item.text}
      </a>
    );
  }

  return <p className={`reader-item reader-item-${item.kind}`}>{item.text}</p>;
}

function buildReaderBlocks(paragraphs: string[]) {
  const blocks: ReaderBlock[] = [];
  let currentBlock: ReaderBlock | null = null;

  paragraphs.forEach((paragraph) => {
    const meta = getReaderParagraph(paragraph);
    if (!meta) return;

    if (meta.isHeading) {
      currentBlock = {
        title: meta.text,
        eyebrow: getReaderEyebrow(meta.kind),
        kind: meta.kind,
        items: []
      };
      blocks.push(currentBlock);
      return;
    }

    const needsNewBlock =
      !currentBlock ||
      currentBlock.items.length >= 3 ||
      (currentBlock.kind !== meta.kind && ['quote', 'prompt', 'resource', 'link', 'list'].includes(meta.kind));

    if (needsNewBlock) {
      currentBlock = {
        title: getReaderTitle(meta, blocks.length),
        eyebrow: getReaderEyebrow(meta.kind),
        kind: meta.kind,
        items: []
      };
      blocks.push(currentBlock);
    }

    if (!currentBlock) return;
    currentBlock.items.push(meta);
  });

  return blocks.filter((block) => block.items.length > 0);
}

function getReaderParagraph(paragraph: string): ReaderParagraph | null {
  const trimmed = paragraph.trim();
  if (
    trimmed.startsWith('**faria') ||
    trimmed.startsWith('â€œCom pequenos cards') ||
    trimmed.startsWith('( pode colocar') ||
    trimmed.startsWith('Pode organizar por temas:')
  ) {
    return null;
  }

  const text = stripDocumentIcon(trimmed);
  const isLink = /^https?:\/\//.test(trimmed);
  const isPrompt =
    text.endsWith('?') ||
    text.startsWith('Pergunta') ||
    text.startsWith('O que aprendemos') ||
    text.startsWith('O deslocamento');
  const isQuote = trimmed.startsWith('"') || trimmed.startsWith('â€œ') || trimmed.includes('(Professora');
  const hasDocumentIcon = text !== trimmed;
  const isResource = hasDocumentIcon && !isPrompt;
  const isList = text.endsWith(';') || /^(Trilha|Parada|BAGAGEM|Chave)\s/i.test(text);
  const isHeading = text.length < 76 && !text.endsWith('.') && !isQuote && !isLink;

  if (isLink) return { kind: 'link', text: trimmed, href: trimmed.split(' ')[0], isHeading: false };
  if (isResource) return { kind: 'resource', text, isHeading: false };
  if (isList) return { kind: 'list', text: text.replace(/;$/, ''), isHeading: false };
  if (isQuote) return { kind: 'quote', text, isHeading: false };
  if (isPrompt) return { kind: 'prompt', text, isHeading: false };
  if (isHeading) return { kind: 'heading', text, isHeading: true };

  return { kind: 'text', text, isHeading: false };
}

function getReaderTitle(meta: ReaderParagraph, index: number) {
  if (meta.kind === 'quote') return 'Voz da travessia';
  if (meta.kind === 'prompt') return 'Pergunta para seguir';
  if (meta.kind === 'resource') return 'Pista do acervo';
  if (meta.kind === 'link') return 'Caminho externo';
  if (meta.kind === 'list') return 'Peca do percurso';
  return `Bloco de leitura ${String(index + 1).padStart(2, '0')}`;
}

function getReaderEyebrow(kind: ReaderParagraphKind) {
  const labels: Record<ReaderParagraphKind, string> = {
    text: 'Leitura guiada',
    heading: 'Ponto da travessia',
    quote: 'Voz da pesquisa',
    prompt: 'Pergunta disparadora',
    resource: 'Recurso de pesquisa',
    list: 'Mapa de ideias',
    link: 'Referencia externa'
  };

  return labels[kind];
}

function getReaderIcon(kind: ReaderParagraphKind): ReactElement {
  if (kind === 'quote') return <Quote aria-hidden="true" />;
  if (kind === 'prompt') return <Sparkles aria-hidden="true" />;
  if (kind === 'resource' || kind === 'link') return <Link2 aria-hidden="true" />;
  if (kind === 'list') return <ListChecks aria-hidden="true" />;
  return <BookMarked aria-hidden="true" />;
}

export function DocumentParagraph({ paragraph }: { paragraph: string }) {
  const trimmed = paragraph.trim();
  if (
    trimmed.startsWith('**faria') ||
    trimmed.startsWith('“Com pequenos cards') ||
    trimmed.startsWith('( pode colocar') ||
    trimmed.startsWith('Pode organizar por temas:')
  ) {
    return null;
  }

  const cleanText = stripDocumentIcon(trimmed);
  const isPrompt =
    cleanText.endsWith('?') ||
    cleanText.startsWith('Pergunta') ||
    cleanText.startsWith('O que aprendemos') ||
    cleanText.startsWith('O deslocamento');
  const isQuote = trimmed.startsWith('"') || trimmed.startsWith('“') || trimmed.includes('(Professora');
  const isLink = /^https?:\/\//.test(trimmed);
  const hasDocumentIcon = cleanText !== trimmed;
  const isResource = hasDocumentIcon && !isPrompt;
  const isListCard = cleanText.endsWith(';') || /^(Trilha|Parada|BAGAGEM|Chave)\s/i.test(cleanText);
  const isShortHeading = cleanText.length < 76 && !cleanText.endsWith('.') && !isQuote && !isLink;

  if (isLink) {
    return (
      <a className="document-link" href={trimmed.split(' ')[0]} target="_blank" rel="noreferrer">
        {trimmed}
      </a>
    );
  }

  if (isResource) {
    return <p className="document-resource document-card">{cleanText}</p>;
  }

  if (isListCard) {
    return <p className="document-list-card document-card">{cleanText.replace(/;$/, '')}</p>;
  }

  if (isQuote) {
    return <blockquote className="document-quote">{cleanText}</blockquote>;
  }

  if (isPrompt) {
    return <p className="document-prompt">{cleanText}</p>;
  }

  if (isShortHeading) {
    return <h2 className="document-subheading">{cleanText}</h2>;
  }

  return <p>{cleanText}</p>;
}

function stripDocumentIcon(text: string) {
  return text.replace(/^[📚✨]\s*/u, '');
}

export default App;
