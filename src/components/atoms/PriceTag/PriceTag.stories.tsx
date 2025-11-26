import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PriceTag } from './PriceTag'

const meta = {
  title: 'Design System/Atoms/PriceTag',
  component: PriceTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente para exibir preços com formatação adequada. Suporta múltiplas moedas, variantes (normal, desconto, riscado) e 3 tamanhos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Valor numérico do preço',
    },
    currency: {
      control: 'select',
      options: ['USD', 'BRL', 'EUR', 'GBP'],
      description: 'Moeda do preço',
      table: {
        defaultValue: { summary: 'USD' },
      },
    },
    variant: {
      control: 'select',
      options: ['normal', 'discount', 'strikethrough'],
      description: 'Variante visual do preço',
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do preço',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof PriceTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 99.99,
  },
}

export const Currencies: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-gray-600">USD:</span>
        <PriceTag value={99.99} currency="USD" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-gray-600">BRL:</span>
        <PriceTag value={199.9} currency="BRL" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-gray-600">EUR:</span>
        <PriceTag value={89.99} currency="EUR" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-gray-600">GBP:</span>
        <PriceTag value={79.99} currency="GBP" />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-gray-600">Normal:</span>
        <PriceTag value={99.99} variant="normal" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-gray-600">Desconto:</span>
        <PriceTag value={79.99} variant="discount" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-28 text-sm text-gray-600">Riscado:</span>
        <PriceTag value={149.99} variant="strikethrough" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <PriceTag value={49.99} size="sm" />
      <PriceTag value={79.99} size="md" />
      <PriceTag value={99.99} size="lg" />
    </div>
  ),
}

export const DiscountExample: Story = {
  render: () => (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center gap-3">
        <PriceTag value={149.99} variant="strikethrough" size="md" />
        <PriceTag value={99.99} variant="discount" size="lg" />
      </div>
      <p className="text-sm text-gray-600 mt-2">Economize $50.00</p>
    </div>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div className="max-w-sm border rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Nome do Produto</h3>
        <p className="text-sm text-gray-600 mb-4">
          Descrição breve do produto com suas principais características.
        </p>
        <div className="flex items-center gap-3">
          <PriceTag value={199.99} variant="strikethrough" size="sm" />
          <PriceTag value={149.99} variant="discount" size="lg" />
        </div>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
            25% OFF
          </span>
        </div>
      </div>
    </div>
  ),
}

export const AllCurrenciesWithDiscount: Story = {
  render: () => (
    <div className="space-y-6">
      {(['USD', 'BRL', 'EUR', 'GBP'] as const).map(currency => (
        <div key={currency} className="border p-4 rounded-lg">
          <h4 className="font-medium mb-3">{currency}</h4>
          <div className="flex items-center gap-4">
            <PriceTag
              value={149.99}
              currency={currency}
              variant="strikethrough"
            />
            <PriceTag value={99.99} currency={currency} variant="discount" />
          </div>
        </div>
      ))}
    </div>
  ),
}
