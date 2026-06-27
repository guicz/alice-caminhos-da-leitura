# Observatório Digital dos Caminhos da Leitura e da Escrita no País das Infâncias

Site narrativo para apresentar, em formato de travessia, a pesquisa de mestrado sobre o Programa Leitura e Escrita na Educação Infantil (LEEI) e suas repercussões nas práticas docentes da Educação Infantil.

## O que funciona agora

- Modo Banca com percurso guiado, botão "Próxima parada", barra de progresso, navegação por setas e tela cheia.
- Modo Observatório com navegação livre por biblioteca, vozes, práticas e materiais.
- Estrutura em 8 paradas principais: entrada, pesquisa, investigadora, estado do conhecimento, autores, metodologia, resultados e bagagem final.
- Cards expansíveis para autores do referencial teórico.
- Abas para os quatro mundos de resultados.
- Síntese final com cinco chaves dos achados.
- Lista de dúvidas editoriais e materiais pendentes.

## Tech Stack

- Node.js 20 LTS
- pnpm
- Vite
- React
- TypeScript strict
- Tailwind CSS
- shadcn/ui base config
- lucide-react
- React Router
- Zustand
- TanStack Query
- Vitest + Testing Library
- ESLint + Prettier

## Quick Start

```bash
pnpm install
pnpm dev
```

Para build de produção:

```bash
pnpm lint
pnpm test
pnpm build
pnpm preview
```

## Deploy

MVP recomendado: Firebase Hosting, sem backend, login, banco de dados ou área pública de comentários.

```bash
pnpm build
firebase login
firebase init hosting
firebase deploy
```

## Conteúdo pendente

- Receber fotos das práticas com legendas e autorização de uso.
- Revisar e validar links do Mapa da Curiosidade.
- Ajustar o volume de texto conforme o tempo de apresentação.
- Confirmar hospedagem temporária ou fluxo offline para a banca.
