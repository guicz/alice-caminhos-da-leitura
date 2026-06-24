# Alice Caminhos da Leitura

## Project Context

Site interativo para transformar o conteúdo do DOCX `OBSERVATÓRIO final.docx` em experiências navegáveis inspiradas em Alice no País das Maravilhas.

## Lifecycle Stage

Protótipo visual e funcional em desenvolvimento local.

## Scope

- Home com mapa de experiências.
- Uma página por item do observatório.
- Cada página inicia como uma cena/convite e revela o conteúdo do documento ao interagir.
- Conteúdo textual extraído do DOCX em `src/data/document-content.ts`.

## Non-Scope

- Backend, autenticação, banco de dados, CMS, analytics e deploy de produção.
- Automações ou integrações externas.

## Success Criteria

- `pnpm test` passa.
- `pnpm lint` passa.
- `pnpm build` passa.
- A experiência local abre em `http://127.0.0.1:5173/`.

## Stack And Runtime

- Vite
- React
- TypeScript
- Tailwind CSS
- pnpm
- Node 20.x esperado pelo projeto

## Validation Commands

```powershell
pnpm test
pnpm lint
pnpm build
```

## Operating Rules

- Aplicar YAGNI, DRY e KISS.
- Usar `ponytail` como camada de disciplina para manter escopo curto.
- Não adicionar backend, dependências ou abstrações sem necessidade verificada.
- Preservar alterações existentes do usuário.

## Security, Production, Observability, Rollback

Protótipo estático local, sem dados sensíveis e sem produção ativa. Rollback via Git.

## README Snapshot

Estado atual: protótipo React com experiências por seção e conteúdo completo do DOCX incorporado como dados locais.

## Cumulative Changelog

- Projeto normalizado para Vite/React/TypeScript.
- Conteúdo do DOCX extraído para dados estruturados.
- Navegação por experiências adicionada para cada item do observatório.

## Tech Debt

None.
