import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from './Button'

/**
 * 📖 O QUE É UMA STORY?
 *
 * Uma "story" (história) é um estado específico de um componente.
 * Por exemplo, o Button tem várias stories:
 * - Button primário
 * - Button desabilitado
 * - Button com loading
 * - Button de tamanhos diferentes
 *
 * Cada story mostra o componente em uma situação diferente.
 */

/**
 * 📋 META: Informações sobre o componente
 *
 * O objeto Meta define:
 * - title: Onde o componente aparece no menu lateral do Storybook
 * - component: Qual componente será documentado
 * - parameters: Configurações visuais e de documentação
 * - tags: Tags especiais (autodocs gera docs automaticamente)
 * - argTypes: Controla como as props aparecem no painel de Controls
 */
const meta = {
  // 📁 Caminho no menu: Design System > Atoms > Button
  title: 'Design System/Atoms/Button',

  // 🎯 Componente sendo documentado
  component: Button,

  // ⚙️ Configurações da story
  parameters: {
    // 📝 Layout: centered (centralizado) ou fullscreen (tela cheia)
    layout: 'centered',

    // 📚 Documentação: adiciona descrição do componente
    docs: {
      description: {
        component:
          'Componente Button reutilizável que suporta múltiplas variantes, tamanhos, estados de loading e ícones.',
      },
    },
  },

  // 🏷️ Tags: 'autodocs' gera documentação automaticamente
  tags: ['autodocs'],

  // 🎛️ argTypes: Define controles interativos para cada prop
  argTypes: {
    // variant: Dropdown com as opções de variante
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Estilo visual do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },

    // size: Dropdown com as opções de tamanho
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },

    // isLoading: Checkbox para ativar/desativar loading
    isLoading: {
      control: 'boolean',
      description: 'Mostra spinner de loading e desabilita o botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    // disabled: Checkbox para ativar/desativar
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    // fullWidth: Checkbox para largura total
    fullWidth: {
      control: 'boolean',
      description: 'Botão ocupa 100% da largura do container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    // children: Texto do botão
    children: {
      control: 'text',
      description: 'Conteúdo do botão (texto ou elementos React)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },

    // onClick: Ação (capturada automaticamente pelo Storybook)
    onClick: {
      action: 'clicked',
      description: 'Função executada ao clicar no botão',
    },
  },
} satisfies Meta<typeof Button>

export default meta

/**
 * 📝 TIPO STORY
 *
 * StoryObj é o tipo TypeScript para uma story.
 * Ele garante que você está passando as props corretas para o componente.
 */
type Story = StoryObj<typeof meta>

/**
 * 🎨 STORIES: Diferentes variações do componente
 *
 * Cada constante exportada abaixo é uma story.
 * O nome da constante vira o nome da story no Storybook.
 *
 * Cada story tem:
 * - args: Valores das props para essa story
 * - render (opcional): Função customizada para renderizar a story
 */

// 1️⃣ PRIMARY: Botão principal (padrão)
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
}

// 2️⃣ SECONDARY: Botão secundário
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
}

// 3️⃣ OUTLINE: Botão com borda
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
}

// 4️⃣ GHOST: Botão fantasma (transparente)
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
}

// 5️⃣ SIZES: Mostra os 3 tamanhos lado a lado
export const Sizes: Story = {
  // render: Função customizada para renderizar múltiplos botões
  render: () => (
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

// 6️⃣ WITH LOADING: Botão com spinner
export const WithLoading: Story = {
  args: {
    children: 'Loading...',
    isLoading: true,
    variant: 'primary',
  },
}

// 7️⃣ DISABLED: Botão desabilitado
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
}

// 8️⃣ FULL WIDTH: Botão com largura total
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary',
  },
  // Muda o layout para 'padded' para ver o efeito de fullWidth
  parameters: {
    layout: 'padded',
  },
}

// 9️⃣ ALL VARIANTS: Mostra todas as variantes lado a lado
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex gap-4">
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        <Button variant="outline" disabled>
          Outline Disabled
        </Button>
        <Button variant="ghost" disabled>
          Ghost Disabled
        </Button>
      </div>

      <div className="flex gap-4">
        <Button variant="primary" isLoading>
          Loading
        </Button>
        <Button variant="secondary" isLoading>
          Loading
        </Button>
        <Button variant="outline" isLoading>
          Loading
        </Button>
        <Button variant="ghost" isLoading>
          Loading
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

/**
 * 💡 COMO USAR O STORYBOOK:
 *
 * 1. No menu lateral, navegue até "Design System > Atoms > Button"
 * 2. Selecione uma story (ex: "Primary")
 * 3. No painel "Controls" (parte inferior), você pode:
 *    - Mudar o texto do botão
 *    - Trocar variant, size, etc
 *    - Ativar loading ou disabled
 * 4. No painel "Actions", você verá quando o onClick é executado
 * 5. No painel "Accessibility", veja se há problemas de acessibilidade
 *
 *
 * 📚 COMO CRIAR NOVAS STORIES:
 *
 * 1. Exporte uma nova constante com tipo Story
 * 2. Defina os args (props do componente)
 * 3. Opcionalmente, use render() para layouts customizados
 *
 * Exemplo:
 *
 * export const MinhaStory: Story = {
 *   args: {
 *     children: 'Meu Botão',
 *     variant: 'primary',
 *   },
 * }
 */
