import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { StockBadge } from './StockBadge'

const meta = {
  title: 'Design System/Atoms/E-commerce/StockBadge',
  component: StockBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge para indicar disponibilidade de estoque. Determina automaticamente a variante baseado na quantidade (>5 = In Stock, 1-5 = Low Stock, 0 = Out of Stock).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    stock: {
      control: 'number',
      description: 'Quantidade em estoque',
    },
    variant: {
      control: 'select',
      options: ['inStock', 'lowStock', 'outOfStock'],
      description: 'Variante do badge (auto-determinada se não especificada)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do badge',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof StockBadge>

export default meta
type Story = StoryObj<typeof meta>

export const InStock: Story = {
  args: {
    stock: 50,
  },
}

export const LowStock: Story = {
  args: {
    stock: 3,
  },
}

export const OutOfStock: Story = {
  args: {
    stock: 0,
  },
}

export const AutoVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-gray-600">100 items:</span>
        <StockBadge stock={100} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-gray-600">6 items:</span>
        <StockBadge stock={6} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-gray-600">5 items:</span>
        <StockBadge stock={5} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-gray-600">3 items:</span>
        <StockBadge stock={3} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-gray-600">1 item:</span>
        <StockBadge stock={1} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm text-gray-600">0 items:</span>
        <StockBadge stock={0} />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-600">Small:</span>
        <StockBadge stock={25} size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-600">Medium:</span>
        <StockBadge stock={25} size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-600">Large:</span>
        <StockBadge stock={25} size="lg" />
      </div>
    </div>
  ),
}

export const InProductCard: Story = {
  render: () => (
    <div className="max-w-sm border rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">Produto Premium</h3>
          <StockBadge stock={3} size="sm" />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Descrição do produto com suas características principais.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">$99.99</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* In Stock */}
      <div className="border rounded-lg p-4">
        <div className="h-32 bg-gray-200 rounded mb-3"></div>
        <h4 className="font-medium mb-2">Produto Disponível</h4>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">$49.99</span>
          <StockBadge stock={50} size="sm" />
        </div>
      </div>

      {/* Low Stock */}
      <div className="border rounded-lg p-4">
        <div className="h-32 bg-gray-200 rounded mb-3"></div>
        <h4 className="font-medium mb-2">Últimas Unidades</h4>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">$49.99</span>
          <StockBadge stock={2} size="sm" />
        </div>
      </div>

      {/* Out of Stock */}
      <div className="border rounded-lg p-4 opacity-60">
        <div className="h-32 bg-gray-200 rounded mb-3"></div>
        <h4 className="font-medium mb-2">Esgotado</h4>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">$49.99</span>
          <StockBadge stock={0} size="sm" />
        </div>
      </div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="space-y-2">
      {[
        { name: 'Camiseta Básica', stock: 150, price: 29.99 },
        { name: 'Calça Jeans', stock: 5, price: 89.99 },
        { name: 'Tênis Esportivo', stock: 0, price: 149.99 },
        { name: 'Jaqueta de Couro', stock: 2, price: 299.99 },
      ].map((product, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded"></div>
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          </div>
          <StockBadge stock={product.stock} size="sm" />
        </div>
      ))}
    </div>
  ),
}
