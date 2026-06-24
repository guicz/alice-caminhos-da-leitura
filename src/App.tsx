import { useEffect, useMemo, useRef, useState } from 'react';
import { Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { authors, baggageKeys, chapters, libraryItems, stops, type Author } from '@/data/observatory';
import { usePresentationStore } from '@/stores/presentation-store';

function App() {
  const [activeAuthor, setActiveAuthor] = useState<Author | null>(null);
  const [activeChapterKey, setActiveChapterKey] = useState(chapters[0].key);
  const [activeLibraryKey, setActiveLibraryKey] = useState(libraryItems[0].key);
  const { activeStop, mode, setActiveStop, setMode } = usePresentationStore();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const activeChapter = useMemo(
    () => chapters.find((chapter) => chapter.key === activeChapterKey) ?? chapters[0],
    [activeChapterKey]
  );
  const activeLibrary = useMemo(
    () => libraryItems.find((item) => item.key === activeLibraryKey) ?? libraryItems[0],
    [activeLibraryKey]
  );

  useEffect(() => {
    document.body.dataset.mode = mode;
  }, [mode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          setActiveStop(Number(visible.target.dataset.stop ?? 0));
        }
      },
      { threshold: [0.35, 0.55, 0.75] }
    );

    stops.forEach((stop) => {
      const section = sectionRefs.current[stop];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveStop]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveAuthor(null);
      }
      if (mode !== 'banca') return;
      if (event.key === 'ArrowRight') goToStop(activeStop + 1);
      if (event.key === 'ArrowLeft') goToStop(activeStop - 1);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  function setSectionRef(id: string) {
    return (element: HTMLElement | null) => {
      sectionRefs.current[id] = element;
    };
  }

  function goToStop(nextStop: number) {
    const clampedStop = Math.max(0, Math.min(nextStop, stops.length - 1));
    sectionRefs.current[stops[clampedStop]]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveStop(clampedStop);
  }

  function requestFullscreen() {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    void document.documentElement.requestFullscreen?.();
  }

  return (
    <>
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${((activeStop + 1) / stops.length) * 100}%` }} />
      </div>

      <header className="site-header" id="topo">
        <a className="brand" href="#entrada" aria-label="Voltar ao início">
          <span className="brand-mark">O</span>
          <span>Observatório</span>
        </a>
        <nav className="main-nav" aria-label="Paradas da travessia">
          <a href="#entrada">Entrada</a>
          <a href="#toca">Pesquisa</a>
          <a href="#investigadora">Investigadora</a>
          <a href="#autores">Autores</a>
          <a href="#capitulos">Resultados</a>
          <a href="#bagagem">Bagagem</a>
        </nav>
        <div className="mode-controls" aria-label="Modos de navegação">
          <button
            className={`mode-button ${mode === 'banca' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setMode('banca')}
          >
            Modo Banca
          </button>
          <button
            className={`mode-button ${mode === 'observatorio' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setMode('observatorio')}
          >
            Modo Observatório
          </button>
          <button className="icon-button" type="button" onClick={requestFullscreen} aria-label="Tela cheia">
            <Expand size={18} />
          </button>
        </div>
      </header>

      <aside className="guided-rail" aria-label="Roteiro de apresentação">
        <span>
          {activeStop + 1}/{stops.length}
        </span>
        <Button type="button" variant="compact" onClick={() => goToStop(activeStop + 1)}>
          Próxima parada
        </Button>
      </aside>

      <main>
        <section
          className="hero stop-section"
          id="entrada"
          data-stop="0"
          ref={setSectionRef('entrada')}
          aria-labelledby="hero-title"
        >
          <div className="hero-art" aria-hidden="true">
            <img src="/assets/wonderland-gate.svg" alt="" />
          </div>
          <div className="hero-copy">
            <p className="kicker">Produto educacional de mestrado</p>
            <h1 id="hero-title">Observatório de Práticas</h1>
            <p className="hero-subtitle">Caminhos da Leitura e da Escrita no País das Infâncias</p>
            <p>
              Uma travessia pela pesquisa que investiga como o Programa Leitura e Escrita na Educação
              Infantil repercutiu nas práticas pedagógicas de professoras da Educação Infantil.
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
                <a href="#toca">Iniciar travessia</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#observatorio">Explorar livremente</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-band stop-section" id="toca" data-stop="1" ref={setSectionRef('toca')}>
          <SectionHeading
            kicker="Por onde começa a toca"
            title="A pesquisa em uma parada"
            text="A investigação nasce das inquietações sobre formação docente e experiências de leitura e escrita na Educação Infantil. O foco é compreender as repercussões do LEEI nas práticas pedagógicas de professoras da pré-escola."
          />
          <div className="evidence-grid">
            {[
              ['Problema', 'Como uma política pública de formação continuada repercute no cotidiano docente?'],
              ['Objetivo', 'Compreender sentidos, deslocamentos e aprendizagens produzidos pelo LEEI.'],
              ['Participantes', 'Seis professoras das redes municipais de Santa Maria e São Francisco de Assis.'],
              ['Contexto', 'Educação Infantil, cultura escrita, infância, formação docente e prática pedagógica.']
            ].map(([title, text]) => (
              <Card as="article" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="section-band investigator stop-section"
          id="investigadora"
          data-stop="2"
          ref={setSectionRef('investigadora')}
        >
          <SectionHeading
            compact
            kicker="Espelho da Investigadora"
            title="Quem atravessa essa pesquisa"
            text="Tatielli se apresenta como professora, coordenadora pedagógica, formadora e pesquisadora. A metáfora de Alice organiza a travessia porque pesquisar também envolve atravessar portas desconhecidas, fazer perguntas, revisar certezas e transformar-se pelo caminho."
          />
          <blockquote className="quote">
            "Pesquisar também é atravessar portas desconhecidas, fazer perguntas, revisitar certezas e
            permitir-se transformar pelo caminho."
          </blockquote>
        </section>

        <section className="section-band clues stop-section" id="gato" data-stop="3" ref={setSectionRef('gato')}>
          <SectionHeading
            kicker="Conselho do Gato Risonho"
            title="As pistas já deixadas"
            text="O estado do conhecimento funciona como um mapa de busca. Ele mostra o que já foi encontrado sobre formação docente, leitura e escrita na Educação Infantil e indica a lacuna específica da pesquisa."
          />
          <div className="clue-map">
            {['CAPES', 'BDTD', 'SciELO', 'Portal CAPES'].map((label) => (
              <Card as="article" key={label}>
                {label}
              </Card>
            ))}
          </div>
          <p className="closing-line">Foi seguindo essas pistas que a pesquisa encontrou seu caminho.</p>
        </section>

        <section
          className="section-band authors stop-section"
          id="autores"
          data-stop="4"
          ref={setSectionRef('autores')}
        >
          <SectionHeading
            compact
            kicker="Chá das Ideias"
            title="Com quem esta pesquisa conversa"
            text="Os autores aparecem como convidados de uma mesa teórica: cada card apresenta ideia central, lugar na pesquisa e pergunta provocadora."
          />
          <div className="author-grid">
            {authors.map((author) => (
              <Card as="article" className="author-card" key={author.name}>
                <button type="button" onClick={() => setActiveAuthor(author)} aria-label={`Abrir ${author.name}`}>
                  <h3>{author.name}</h3>
                  <span className="author-role">{author.role}</span>
                  <p>{author.idea}</p>
                </button>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="section-band method stop-section"
          id="metodologia"
          data-stop="5"
          ref={setSectionRef('metodologia')}
        >
          <SectionHeading
            kicker="Relógio do Coelho Branco"
            title="Como caminhamos"
            text="A metodologia precisa aparecer rápido para a banca: abordagem, participantes, instrumentos, análise e compromisso ético."
          />
          <ol className="timeline">
            {[
              'Abordagem qualitativa',
              'Perspectiva narrativa sociocultural',
              'Seis professoras participantes',
              'Entrevistas narrativas e registros de práticas',
              'Categorias de análise e preservação de identidades'
            ].map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span> {item}
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section-band chapters stop-section"
          id="capitulos"
          data-stop="6"
          ref={setSectionRef('capitulos')}
        >
          <SectionHeading
            kicker="Capítulos do País das Infâncias"
            title="O que encontramos"
            text="Os resultados foram organizados em quatro mundos para sustentar uma apresentação linear, mas também permitir exploração livre no modo Observatório."
          />
          <div className="chapter-shell">
            <aside className="chapter-tabs" aria-label="Capítulos">
              {chapters.map((chapter) => (
                <button
                  className={`chapter-tab ${activeChapter.key === chapter.key ? 'is-selected' : ''}`}
                  type="button"
                  key={chapter.key}
                  onClick={() => setActiveChapterKey(chapter.key)}
                >
                  {chapter.title}
                </button>
              ))}
            </aside>
            <article className="chapter-panel" aria-live="polite">
              <header>
                <div>
                  <p className="kicker">Mundo de resultados</p>
                  <h2>{activeChapter.title}</h2>
                  <p>{activeChapter.subtitle}</p>
                </div>
                <img src={activeChapter.asset} alt="" />
              </header>
              <div className="trail-grid">
                {activeChapter.trails.map(([title, text]) => (
                  <section className="trail" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </section>
                ))}
              </div>
              <blockquote className="quote">{activeChapter.quote}</blockquote>
            </article>
          </div>
        </section>

        <section
          className="section-band baggage stop-section"
          id="bagagem"
          data-stop="7"
          ref={setSectionRef('bagagem')}
        >
          <SectionHeading
            kicker="O que Alice levou na bagagem"
            title="Síntese dos achados"
            text="A página final concentra as chaves de leitura para a defesa: o que a pesquisa permite compreender e o que o LEEI deslocou nas práticas."
          />
          <div className="keys-grid">
            {baggageKeys.map((keyText) => (
              <Card as="article" key={keyText}>
                <img src="/assets/key.svg" alt="" />
                <p>{keyText}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="section-band observatory" id="observatorio">
          <SectionHeading
            compact
            kicker="Modo Observatório"
            title="Biblioteca, vozes e materiais"
            text="Esta área sustenta a versão navegável pós-defesa: cartas, excertos, práticas, fotos e links complementares. Nesta primeira versão, tudo fica sem coleta de dados para evitar risco de privacidade."
          />
          <div className="library-grid">
            {libraryItems.map((item) => (
              <button
                className="library-item"
                data-active={item.key === activeLibrary.key}
                type="button"
                key={item.key}
                onClick={() => setActiveLibraryKey(item.key)}
              >
                <img src={item.icon} alt="" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
          <article className="library-panel" aria-live="polite">
            <p className="kicker">Acervo narrativo</p>
            <h3>{activeLibrary.title}</h3>
            <p>{activeLibrary.body}</p>
          </article>
        </section>

        <section className="section-band doubts" id="duvidas">
          <SectionHeading kicker="Dúvidas para destravar a próxima versão" title="O que ainda precisa de decisão" />
          <ol className="doubt-list">
            <li>Receber fotos das práticas em pastas, com legenda e autorização de uso.</li>
            <li>Confirmar se os pseudônimos finais ficam como iniciais ou nomes fictícios completos.</li>
            <li>Definir o nível de redução textual para banca: mais expositivo ou mais visual.</li>
            <li>Validar todos os links do Mapa da Curiosidade antes da publicação.</li>
            <li>Confirmar hospedagem temporária, apresentação offline ou domínio/espaço da escola depois.</li>
            <li>Enviar o protótipo anterior citado na reunião, se a sequência visual dele precisar ser preservada.</li>
          </ol>
        </section>
      </main>

      {activeAuthor ? (
        <div className="modal" role="presentation">
          <button className="modal-backdrop" type="button" aria-label="Fechar" onClick={() => setActiveAuthor(null)} />
          <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <button className="modal-close" type="button" onClick={() => setActiveAuthor(null)} aria-label="Fechar">
              ×
            </button>
            <p className="kicker">{activeAuthor.role}</p>
            <h2 id="modalTitle">{activeAuthor.name}</h2>
            <p>
              <strong>Ideia central:</strong> {activeAuthor.idea}
            </p>
            <p>
              <strong>Onde aparece na pesquisa:</strong> {activeAuthor.place}
            </p>
            <blockquote className="quote">{activeAuthor.question}</blockquote>
          </section>
        </div>
      ) : null}
    </>
  );
}

function SectionHeading({
  kicker,
  title,
  text,
  compact = false
}: {
  kicker: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className={`section-heading ${compact ? 'compact' : ''}`}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default App;
