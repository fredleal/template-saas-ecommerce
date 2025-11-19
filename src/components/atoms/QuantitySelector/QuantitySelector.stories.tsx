import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { QuantitySelector } from './QuantitySelector'

const meta = {
  title: 'Design System/Atoms/E-commerce/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de seleção de quantidade com botões de incremento e decremento. Suporta valores mínimos e máximos, estados desabilitados e 3 tamanhos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Quantidade atual',
    },
    min: {
      control: 'number',
      description: 'Valor mínimo permitido',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    max: {
      control: 'number',
      description: 'Valor máximo permitido',
      table: {
        defaultValue: { summary: '99' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do componente',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    onChange: {
      action: 'quantity changed',
      description: 'Callback quando a quantidade muda',
    },
  },
} satisfies Meta<typeof QuantitySelector>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper com estado para stories interativas
const InteractiveWrapper = ({
  initialValue = 1,
  ...props
}: Omit<React.ComponentProps<typeof QuantitySelector>, 'value' | 'onChange'> & {
  initialValue?: number
}) => {
  const [value, setValue] = useState(initialValue)
  return <QuantitySelector value={value} onChange={setValue} {...props} />
}

export const Default: Story = {
  render: () => <InteractiveWrapper />,
}

export const WithInitialValue: Story = {
  render: () => <InteractiveWrapper initialValue={5} />,
}

export const WithLimits: Story = {
  render: () => <InteractiveWrapper min={0} max={10} initialValue={5} />,
}

export const AtMinimum: Story = {
  render: () => <InteractiveWrapper initialValue={1} min={1} max={10} />,
}

export const AtMaximum: Story = {
  render: () => <InteractiveWrapper initialValue={10} min={1} max={10} />,
}

export const Disabled: Story = {
  render: () => <InteractiveWrapper disabled initialValue={5} />,
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-600">Small:</span>
        <InteractiveWrapper size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-600">Medium:</span>
        <InteractiveWrapper size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-600">Large:</span>
        <InteractiveWrapper size="lg" />
      </div>
    </div>
  ),
}

export const LargeStock: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-sm text-gray-600">Estoque: 100 unidades</p>
      <InteractiveWrapper min={1} max={100} />
    </div>
  ),
}

export const LowStock: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-sm text-red-600">⚠️ Apenas 3 unidades restantes</p>
      <InteractiveWrapper min={1} max={3} />
    </div>
  ),
}

export const InProductCard: Story = {
  render: () => (
    <div className="max-w-sm border rounded-lg overflow-hidden">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4 space-y-4">
        <h3 className="font-semibold text-lg">Camiseta Premium</h3>
        <p className="text-sm text-gray-600">
          Camiseta 100% algodão com design exclusivo
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">$29.99</span>
          <span className="text-sm text-green-600">Em estoque</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Quantidade:</span>
            <InteractiveWrapper size="md" />
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  ),
}

export const InCartItem: Story = {
  render: () => (
    <div className="border rounded-lg p-4">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded"></div>
        <div className="flex-1 space-y-2">
          <h4 className="font-medium">Nome do Produto</h4>
          <p className="text-sm text-gray-600">Tamanho: M | Cor: Azul</p>
          <div className="flex items-center justify-between">
            <InteractiveWrapper size="sm" initialValue={2} />
            <span className="font-semibold text-lg">$59.98</span>
          </div>
        </div>
        <button className="text-red-600 hover:text-red-800 text-sm">
          Remover
        </button>
      </div>
    </div>
  ),
}

export const AllSizesComparison: Story = {
  render: () => (
    <div className="space-y-8">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="border p-6 rounded-lg">
          <h4 className="font-medium mb-4 capitalize">
            Size: {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}
          </h4>
          <div className="flex items-center gap-4">
            <InteractiveWrapper size={size} />
            <span className="text-sm text-gray-600">
              {size === 'sm' && 'Ideal para listas compactas'}
              {size === 'md' && 'Tamanho padrão recomendado'}
              {size === 'lg' && 'Melhor visibilidade em mobile'}
            </span>
          </div>
        </div>
      ))}
    </div>
  ),
}
