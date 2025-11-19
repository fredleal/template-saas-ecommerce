import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Badge } from './Badge'

const meta = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Badge para exibir status, categorias ou informações destacadas. Suporta 5 variantes de cor e 3 tamanhos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Variante de cor do badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: 'text',
      description: 'Conteúdo do badge',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Stories principais
export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
}

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
}

// Tamanhos
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

// Todas as variantes
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

// Exemplos de uso
export const UseCases: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Status:</span>
        <Badge variant="success">Ativo</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span>Prioridade:</span>
        <Badge variant="error">Alta</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span>Categoria:</span>
        <Badge variant="info">Tecnologia</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span>Notificações:</span>
        <Badge variant="warning">3</Badge>
      </div>
    </div>
  ),
}
