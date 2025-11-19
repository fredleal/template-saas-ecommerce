import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Text, Heading, Price } from './Text'

const meta = {
  title: 'Design System/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente Text versátil para tipografia. Inclui Text (para parágrafos), Heading (para títulos) e Price (para valores monetários).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Tag HTML a ser renderizada',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'Tamanho do texto',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Peso da fonte',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'success', 'warning', 'error'],
      description: 'Cor do texto',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Alinhamento do texto',
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

// TEXT STORIES
export const Default: Story = {
  args: {
    children: 'Este é um texto padrão.',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="xs">Extra Small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="base">Base (default)</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra Large (xl)</Text>
      <Text size="2xl">2XL</Text>
      <Text size="3xl">3XL</Text>
      <Text size="4xl">4XL</Text>
      <Text size="5xl">5XL</Text>
    </div>
  ),
}

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light</Text>
      <Text weight="normal">Normal</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="bold">Bold</Text>
      <Text weight="extrabold">Extrabold</Text>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Text color="primary">Primary (gray-900)</Text>
      <Text color="secondary">Secondary (gray-600)</Text>
      <Text color="muted">Muted (gray-500)</Text>
      <Text color="success">Success (green-600)</Text>
      <Text color="warning">Warning (yellow-600)</Text>
      <Text color="error">Error (red-600)</Text>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4">
      <Text align="left">Texto alinhado à esquerda</Text>
      <Text align="center">Texto centralizado</Text>
      <Text align="right">Texto alinhado à direita</Text>
      <Text align="justify">
        Texto justificado. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  ),
}

// HEADING STORIES
export const HeadingLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading 1 (4xl, bold)</Heading>
      <Heading level={2}>Heading 2 (3xl, semibold)</Heading>
      <Heading level={3}>Heading 3 (2xl, semibold)</Heading>
      <Heading level={4}>Heading 4 (xl, medium)</Heading>
      <Heading level={5}>Heading 5 (lg, medium)</Heading>
      <Heading level={6}>Heading 6 (base, medium)</Heading>
    </div>
  ),
}

// PRICE STORIES
export const Prices: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600 mb-1">Preço Normal</p>
        <Price value={99.9} size="lg" />
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-1">Preço com Desconto</p>
        <Price value={149.9} isDiscounted size="lg" />
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-1">Tamanhos Diferentes</p>
        <div className="flex gap-4 items-center">
          <Price value={29.9} size="sm" />
          <Price value={49.9} size="base" />
          <Price value={99.9} size="lg" />
          <Price value={199.9} size="xl" />
        </div>
      </div>
    </div>
  ),
}

// COMBINED EXAMPLE
export const TypographySystem: Story = {
  render: () => (
    <article className="space-y-6 max-w-2xl">
      <Heading level={1}>Sistema de Tipografia</Heading>

      <Text size="lg" color="secondary">
        Um guia completo sobre como usar o componente Text no design system.
      </Text>

      <div className="space-y-4">
        <Heading level={2}>Introdução</Heading>

        <Text>
          O componente Text é a base do sistema de tipografia. Ele fornece uma
          API consistente para todos os textos da aplicação, garantindo
          uniformidade visual.
        </Text>

        <Text color="muted" size="sm">
          Última atualização: 19 de novembro de 2025
        </Text>
      </div>

      <div className="space-y-4">
        <Heading level={3}>Características</Heading>

        <ul className="space-y-2">
          <Text as="li">✅ 9 tamanhos diferentes (xs até 5xl)</Text>
          <Text as="li">✅ 6 pesos de fonte</Text>
          <Text as="li">✅ 6 variantes de cor</Text>
          <Text as="li">✅ 4 opções de alinhamento</Text>
        </ul>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg">
        <Text color="primary" weight="medium">
          💡 Dica: Sempre use Text ao invés de tags HTML brutas para manter
          consistência.
        </Text>
      </div>
    </article>
  ),
}
