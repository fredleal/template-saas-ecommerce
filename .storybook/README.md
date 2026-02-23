# Storybook - Design System

Este diretório contém a configuração do Storybook para o projeto.

## Acesso ao Storybook

### Local (Desenvolvimento)

```bash
npm run storybook
```

Acesse: http://localhost:6006/

### Produção (GitHub Pages)

O Storybook é automaticamente deployado no GitHub Pages quando há push na branch `main`.

**URL:** https://fredleal.github.io/template-saas-ecommerce/

> ⚠️ **Nota**: Para o GitHub Pages funcionar, você precisa:
>
> 1. Ir em Settings > Pages
> 2. Source: "GitHub Actions"
> 3. Fazer push na branch main (o workflow será executado automaticamente)

## Arquivos

- **main.ts** - Configuração principal do Storybook
- **preview.tsx** - Configuração visual (backgrounds, viewports, etc)

## Addons Instalados

- **@storybook/addon-essentials** - Controles, Actions, Docs, Viewport, Backgrounds
- **@storybook/addon-a11y** - Testes de acessibilidade
- **@storybook/addon-interactions** - Testes de interações
- **@storybook/addon-themes** - Multi-brand theme switching (data-theme attribute)

## Como Criar uma Nova Story

1. Crie um arquivo `NomeDoComponente.stories.tsx` ao lado do componente
2. Importe o Meta e StoryObj do Storybook
3. Defina o Meta com título, component, parameters
4. Crie suas stories

Exemplo:

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { MeuComponente } from './MeuComponente'

const meta = {
  title: 'Design System/Atoms/MeuComponente',
  component: MeuComponente,
  tags: ['autodocs'],
} satisfies Meta<typeof MeuComponente>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Exemplo',
  },
}
```

## Build para Produção

```bash
npm run build-storybook
```

Gera uma versão estática em `storybook-static/`

## Documentação Completa

Para documentação detalhada sobre como usar o Storybook, consulte a documentacao oficial em https://storybook.js.org/docs
