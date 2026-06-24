import { useEffect, useMemo, useRef, useState } from 'react';
import { Expand } from 'lucide-react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { documentSections } from '@/data/document-content';

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
            <img src="/assets/alice/gate.svg" alt="" />
          </div>
          <div className="hero-copy">
            <p className="kicker">Produto educacional de mestrado</p>
            <h1 id="hero-title">Observatório de Práticas</h1>
            <p className="hero-subtitle">Caminhos da Leitura e da Escrita no País das Infâncias</p>
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
            <h2 id="map-title">Cada item é uma experiência</h2>
          </div>
          <div className="experience-grid">
            {documentSections.map((section, index) => {
              const experience = getExperience(section.id);
              return (
                <Link
                  className={`experience-card ${experience.className}`}
                  to={`/observatorio/${section.id}`}
                  key={`${section.id}-${index}`}
                >
                  <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                  <img src={experience.asset} alt="" />
                  <div>
                    <p>{experience.label}</p>
                    <h3>{section.title}</h3>
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
  const [mode, setMode] = useState<'banca' | 'observatorio'>('banca');
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
        mode={mode}
        onModeChange={setMode}
        onFullscreen={requestFullscreen}
        activeSectionId={activeSection.id}
      />
      <main className={`reader-shell ${experience.className}`} data-mode={mode}>
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
                {section.title}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="experience-canvas">
          <section className="experience-stage">
            <div className="scene-copy">
              <p className="kicker">Página {activeIndex + 1} da travessia</p>
              <h1>{activeSection.title}</h1>
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
                  <h2>{activeSection.title}</h2>
                </header>
                <div className="page-body">
                  {activeSection.paragraphs.map((paragraph, index) => (
                    <DocumentParagraph paragraph={paragraph} key={`${activeSection.id}-${index}`} />
                  ))}
                </div>
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
  mode,
  onModeChange,
  onFullscreen,
  activeSectionId
}: {
  mode?: 'banca' | 'observatorio';
  onModeChange?: (mode: 'banca' | 'observatorio') => void;
  onFullscreen?: () => void;
  activeSectionId?: string;
}) {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Voltar ao início">
        <span className="brand-mark">O</span>
        <span>Observatório</span>
      </Link>
      <nav className="main-nav" aria-label="Atalhos principais">
        {documentSections.slice(0, 6).map((section) => (
          <Link
            className={section.id === activeSectionId ? 'is-selected' : ''}
            to={`/observatorio/${section.id}`}
            key={section.id}
          >
            {section.title.replace(' - Toda travessia precisa de um caminho.', '')}
          </Link>
        ))}
      </nav>
      {mode && onModeChange && onFullscreen ? (
        <div className="mode-controls" aria-label="Modos de navegação">
          <button
            className={`mode-button ${mode === 'banca' ? 'is-active' : ''}`}
            type="button"
            onClick={() => onModeChange('banca')}
          >
            Modo Banca
          </button>
          <button
            className={`mode-button ${mode === 'observatorio' ? 'is-active' : ''}`}
            type="button"
            onClick={() => onModeChange('observatorio')}
          >
            Modo Observatório
          </button>
          <button className="icon-button" type="button" onClick={onFullscreen} aria-label="Tela cheia">
            <Expand size={18} />
          </button>
        </div>
      ) : null}
    </header>
  );
}

function getExperience(sectionId: string) {
  const fallback = {
    label: 'Parada do Observatório',
    action: 'Abrir experiência',
    closedTitle: 'Abra esta parada para carregar o conteúdo.',
    closedText: 'Cada página preserva o texto da cliente, mas aparece como uma cena navegável.',
    description: 'Uma parada narrativa do Observatório de Práticas.',
    asset: '/assets/alice/gate.svg',
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
      asset: '/assets/alice/gate.svg',
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
      asset: '/assets/alice/rabbit.svg',
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
      asset: '/assets/alice/mirror.svg',
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
      asset: '/assets/alice/cheshire.svg',
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
      asset: '/assets/alice/tea.svg',
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
      asset: '/assets/alice/clock-map.svg',
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
      asset: '/assets/alice/storybook.svg',
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
      asset: '/assets/alice/queen.svg',
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
      asset: '/assets/alice/chess-garden.svg',
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
      asset: '/assets/alice/golden-key.svg',
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
      asset: '/assets/alice/hatter-library.svg',
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
      asset: '/assets/alice/curiosity-map.svg',
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
      asset: '/assets/alice/suitcase.svg',
      className: 'scene-bag',
      symbols: ['livro', 'carta', 'rosa']
    }
  };

  return map[sectionId] ?? fallback;
}

function DocumentParagraph({ paragraph }: { paragraph: string }) {
  const trimmed = paragraph.trim();
  const isPrompt =
    trimmed.endsWith('?') ||
    trimmed.startsWith('Pergunta') ||
    trimmed.startsWith('O que aprendemos') ||
    trimmed.startsWith('O deslocamento');
  const isQuote = trimmed.startsWith('"') || trimmed.startsWith('“') || trimmed.includes('(Professora');
  const isLink = /^https?:\/\//.test(trimmed);
  const isShortHeading = trimmed.length < 76 && !trimmed.endsWith('.') && !isQuote && !isLink;

  if (isLink) {
    return (
      <a className="document-link" href={trimmed.split(' ')[0]} target="_blank" rel="noreferrer">
        {trimmed}
      </a>
    );
  }

  if (isQuote) {
    return <blockquote className="document-quote">{trimmed}</blockquote>;
  }

  if (isPrompt) {
    return <p className="document-prompt">{trimmed}</p>;
  }

  if (isShortHeading) {
    return <h2 className="document-subheading">{trimmed}</h2>;
  }

  return <p>{trimmed}</p>;
}

export default App;
