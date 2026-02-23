# Implementation Plan: Multi-Brand Theme System (Hyatt Interview Demo)

## Overview

Implementar multi-brand theme switching no Storybook do template-saas-ecommerce para demonstrar na entrevista técnica da Hyatt. O objetivo é mostrar o mesmo componente mudando de visual em tempo real ao trocar brand themes — exatamente o que a Hyatt precisa para 37 marcas.

## Goals

- [x] Goal 1: Storybook abre sem erros (`npm run storybook`)
- [x] Goal 2: Theme switcher funciona com 3 brand themes no toolbar dropdown
- [x] Goal 3: Trocar theme muda cores, fontes e spacing dos componentes em tempo real
- [ ] Goal 4: a11y addon mostra 0 violations nos componentes-chave
- [x] Goal 5: Testes existentes continuam passando (`npm test`)

## Status

- **Created:** 2026-02-19
- **Last Updated:** 2026-02-20
- **Tasks Completed:** 7/10
- **Context:** Preparação para entrevista final Hyatt (Design System Engineer) via Insight Global

## Why This Matters

Na entrevista, Frederico vai abrir o Storybook e mostrar: "Here's my component library. Watch — I switch from Luxury theme to Modern theme and the same Button changes colors, fonts, and spacing. This is exactly what Hyatt needs for 37 brands. Same components, different tokens."

**Storybook deployado**: https://fredleal.github.io/template-saas-ecommerce/

---

## Reference Files (READ THESE FIRST)

### Obrigatórios para qualquer task:

- `/Users/fredleal/template-saas-ecommerce/CLAUDE.md` — regras do projeto, comandos, validação
- `/Users/fredleal/template-saas-ecommerce/src/design-system/tokens/colors.ts` — tokens de cores (source of truth)
- `/Users/fredleal/template-saas-ecommerce/src/design-system/tokens/spacing.ts` — tokens de spacing
- `/Users/fredleal/template-saas-ecommerce/src/design-system/tokens/typography.ts` — tokens de tipografia
- `/Users/fredleal/template-saas-ecommerce/src/app/globals.css` — CSS global atual (apenas 2 vars: --background, --foreground)

### Referência Whirlpool (como fizemos lá):

- `/Users/fredleal/WHIRLPOOL/WHIRLPOOL/whirlpool-styleguide/.storybook/preview.ts` — Multi-brand theme config (REFERÊNCIA PRINCIPAL)
- `/Users/fredleal/WHIRLPOOL/WHIRLPOOL/whirlpool-styleguide/.storybook/main.ts` — Addon css-variables-theme setup

### Storybook config atual:

- `/Users/fredleal/template-saas-ecommerce/.storybook/preview.tsx` — config atual (sem theme switching)
- `/Users/fredleal/template-saas-ecommerce/.storybook/main.ts` — addons atuais (sem css-variables-theme)

### Componentes a migrar (Task 7-8):

- `/Users/fredleal/template-saas-ecommerce/src/components/atoms/Button/Button.tsx` — usa Tailwind hardcoded (bg-blue-500)
- `/Users/fredleal/template-saas-ecommerce/src/components/atoms/Badge/Badge.tsx` — usa Tailwind hardcoded
- `/Users/fredleal/template-saas-ecommerce/src/components/molecules/Alert/Alert.tsx` — usa Tailwind hardcoded
- `/Users/fredleal/template-saas-ecommerce/src/components/molecules/Card/Card.tsx` — usa Tailwind hardcoded
- `/Users/fredleal/template-saas-ecommerce/src/components/organisms/Header/Header.tsx` — usa Tailwind hardcoded

---

## Tasks

### Phase 1: Fix & Prepare

- [x] Task 1: Identificar e listar todos os erros atuais do Storybook
      **O que fazer**: Rodar `npm run storybook` e `npm run build-storybook`. Anotar TODOS os warnings/errors no console e nas stories. Criar lista no Session Notes.
      **Validação**: Lista completa de erros documentada.

- [x] Task 2: Corrigir erros do Storybook
      **O que fazer**: Corrigir cada erro identificado na Task 1. Priorizar erros que impedem renderização de stories.
      **Validação**: `npm run storybook` roda sem erros no console. `npm run build && npm test` passam.

### Phase 2: Design Tokens CSS Layer

- [x] Task 3: Criar `src/design-system/themes/base.css` com CSS variables
      **O que fazer**: Criar arquivo CSS que expõe ~30-50 CSS variables derivadas dos tokens existentes em colors.ts, spacing.ts, typography.ts. Usar naming convention semântico:
  - `--color-primary-*` (50 a 900, mapeado de colors.primary)
  - `--color-gray-*` (50 a 900, mapeado de colors.gray)
  - `--color-success-*`, `--color-warning-*`, `--color-error-*`
  - `--color-background`, `--color-surface`, `--color-foreground`
  - `--font-family-sans`, `--font-family-serif`, `--font-family-mono`
  - `--font-size-*` (xs a 5xl)
  - `--spacing-*` (subset semântico: xs=4px, sm=8px, md=16px, lg=24px, xl=32px)
  - `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`

  **Importante**: Este arquivo define os valores DEFAULT. Os brand themes vão override APENAS as vars que mudam.
  **Validação**: Arquivo criado com vars corretas. Import no globals.css. `npm run build` passa.

- [x] Task 4: Criar 3 brand theme CSS files
      **O que fazer**: Criar 3 temas que overridem as CSS variables do base.css:

  `src/design-system/themes/brand-luxury.css` — Paralelo Park Hyatt
  - Cores: tons escuros/dourados (primary: #1a1a2e → #c9a84c gold accents)
  - Fontes: serif heading (Playfair Display ou Georgia), sans body
  - Spacing: generoso (padding maior)
  - Border radius: mínimo (sharp, elegante)

  `src/design-system/themes/brand-modern.css` — Paralelo Andaz
  - Cores: vibrantes (primary: #e63946 coral, accent: #457b9d blue)
  - Fontes: sans bold (Montserrat ou system sans-serif)
  - Spacing: compacto (efficient)
  - Border radius: rounded (friendly)

  `src/design-system/themes/brand-classic.css` — Paralelo Hyatt Regency
  - Cores: neutros (primary: #2d3436, accent: #0984e3 blue)
  - Fontes: clean sans (Inter ou system)
  - Spacing: balanced
  - Border radius: medium

  **Formato de cada arquivo**: Usar `html[data-theme="nome"] { }` com overrides das vars que diferem de base.css.
  Isso é necessário porque @storybook/addon-themes usa withThemeByDataAttribute que seta data-theme no <html>.
  **Validação**: 3 arquivos criados. CSS válido. `npm run build` passa.

### Phase 3: Storybook Theme Switcher

- [x] Task 5: Instalar e configurar @storybook/addon-themes (theme switcher)
      **O que fazer**:
  1. `npm install --save-dev @storybook/addon-themes`
  2. Adicionar addon em `.storybook/main.ts` (array addons)
  3. Configurar `.storybook/preview.tsx`:
     - Import brand CSS files diretamente (não lazy-loaded)
     - Usar `withThemeByDataAttribute` como decorator
     - Themes: Default (''), Luxury ('luxury'), Modern ('modern'), Classic ('classic')
     - attributeName: 'data-theme'

  **NOTA**: O addon original (@etchteam/storybook-addon-css-variables-theme) foi
  DEPRECATED e ARQUIVADO em Jun 2025. O addon oficial é @storybook/addon-themes.
  Brand CSS files usam `html[data-theme="nome"]` para que withThemeByDataAttribute funcione.
  **Referência**: https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/api.md
  **Validação**: `npm run storybook` mostra dropdown de themes no toolbar. Trocar theme não causa erro.

- [ ] Task 6: Verificar theme switching funciona (visual QA)
      **O que fazer**: Abrir Storybook, navegar pelos componentes, trocar entre 4 themes. Neste ponto, componentes ainda usam Tailwind hardcoded, então a mudança visual será MÍNIMA (apenas --background e --foreground mudam). Isso é esperado — as Tasks 7-8 vão migrar componentes para CSS vars.
      **Validação**: Theme dropdown funciona. Sem erros no console. Background muda ao trocar theme.

### Phase 4: Migrate Components to CSS Variables

- [x] Task 7: Migrar Button e Badge para CSS variables
      **O que fazer**: Substituir Tailwind hardcoded por CSS variables nos 2 componentes mais visíveis.

  **Button** (`src/components/atoms/Button/Button.tsx`):
  - `bg-blue-500` → `bg-[var(--color-primary-500)]`
  - `hover:bg-blue-600` → `hover:bg-[var(--color-primary-600)]`
  - `text-white` → pode manter (é neutro)
  - `focus:ring-blue-500` → `focus:ring-[var(--color-primary-500)]`
  - Repetir para variants secondary, outline, ghost

  **Badge** (`src/components/atoms/Badge/Badge.tsx`):
  - Substituir cores hardcoded por CSS variables semânticas
  - `bg-blue-100` → `bg-[var(--color-primary-100)]`

  **Padrão**: Usar Tailwind arbitrary values `bg-[var(--css-var)]` para manter Tailwind + CSS vars.
  **Fallback**: `bg-[var(--color-primary-500,#3b82f6)]` — fallback no var() para segurança.
  **Validação**: `npm run build && npm test` passam. Trocar theme no Storybook muda visual do Button e Badge.

- [x] Task 8: Migrar Alert, Card e Header para CSS variables
      **O que fazer**: Mesmo padrão da Task 7 para os 3 componentes restantes.

  **Alert** (`src/components/molecules/Alert/Alert.tsx`):
  - Cores semânticas (success, warning, error, info) já devem usar vars

  **Card** (`src/components/molecules/Card/Card.tsx`):
  - Background, border, shadow colors

  **Header** (`src/components/organisms/Header/Header.tsx`):
  - Background, text colors, active link color

  **Validação**: `npm run build && npm test` passam. Todos os 5 componentes-chave respondem ao theme switching.

### Phase 5: Validate & Deploy

- [ ] Task 9: Verificar a11y + rodar test suite completa
      **O que fazer**:
  1. `npm run build` — zero erros
  2. `npm run lint` — zero erros
  3. `npm test` — 1144 testes passando
  4. Verificar addon-a11y no Storybook: abrir cada componente-chave, verificar painel a11y
  5. Se houver violations, corrigir
     **Validação**: Build, lint, test passam. 0 a11y violations nos 5 componentes-chave.

- [ ] Task 10: Deploy Storybook para GitHub Pages
      **O que fazer**:
  1. `npm run build-storybook` — sem erros
  2. `npm run deploy-storybook` (ou o comando equivalente do projeto)
  3. Verificar URL: https://fredleal.github.io/template-saas-ecommerce/
  4. Verificar que theme switcher funciona na versão deployada
     **Validação**: URL acessível. Theme switcher funciona. Componentes mudam visual ao trocar theme.

---

## Session Notes

### Session Agent-A (2026-02-19 22:15)

- **Task:** Task 1+2
- **Result:** Completed
- **Notes:** Root cause was "jsx": "preserve" in tsconfig.json causing esbuild to use classic runtime in Storybook Docs mode. 42/48 story files lack React import. Fix: .storybook/tsconfig.json with jsx: react-jsx + esbuild jsx: automatic in viteFinal. All validations pass (build-storybook, build, lint, 1221 tests). Committed on feat/fix-storybook (46a5a68).

### Session Wave-2 (2026-02-20 07:16)

- **Task:** Task 5+7+8
- **Result:** Completed
- **Notes:** Installed @storybook/addon-themes@8.6.14. Configured withThemeByDataAttribute in preview.tsx with 4 themes (Default, Luxury, Modern, Classic). Migrated 5 components (Button, Badge, Alert, Card, Header) from hardcoded Tailwind classes to CSS variables with fallbacks (e.g. bg-[var(--color-primary-500,#3b82f6)]). Updated 5 test files to match new class names. All validations pass: build-storybook OK, build OK, lint 0 errors (17 pre-existing warnings), 1221/1221 tests pass.

### Session Wave-1-Merge (2026-02-20 07:05)

- **Task:** Merge feat/fix-storybook + feat/css-tokens into feat/theme-system
- **Result:** Completed
- **Notes:** Created feat/theme-system from main. Merged both Wave 1 branches (no conflicts). All 4 validations pass: build-storybook OK, build OK, lint 0 errors (17 pre-existing warnings), 1221/1221 tests pass.

### Session Agent-B (2026-02-19 22:12)

- **Task:** Task 3+4
- **Result:** Completed
- **Notes:** Created base.css with ~50 CSS variables (colors, typography, spacing, radius) under :root. Created 3 brand theme files (luxury, modern, classic) using html[data-theme="name"] selectors for Storybook addon-themes compatibility. Updated globals.css to import base.css and use new CSS variable names. All validations pass: build OK, lint 0 errors (17 pre-existing warnings), 1221/1221 tests pass.

---

## Blocked Tasks

<!-- Tasks que não podem ser completadas e por quê -->

---

## Decisions Log

### Decision 1: Tailwind Arbitrary Values para CSS Vars

**Escolha**: Usar `bg-[var(--color-primary-500)]` em vez de classes custom ou `style` prop.
**Razão**: Mantém Tailwind como engine de estilo (responsive, hover, focus prefixes funcionam) + permite CSS variable override. Melhor dos dois mundos.

### Decision 2: 3 Themes (não 37)

**Escolha**: Luxury, Modern, Classic como demo. Não 37 themes.
**Razão**: O objetivo é demonstrar a ARQUITETURA, não criar 37 temas reais. 3 temas provam que escala — na entrevista, dizer "adding theme 4 is just a new CSS file".

### Decision 3: base.css + overrides (não standalone themes)

**Escolha**: base.css com defaults + brand CSS files que override apenas o que muda.
**Razão**: DRY. Se todos os 3 temas definem 50 vars, há muita duplicação. Base.css = fallback, brand.css = só as diferenças.
