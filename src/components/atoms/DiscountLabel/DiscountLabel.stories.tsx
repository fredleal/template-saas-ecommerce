import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { DiscountLabel } from './DiscountLabel'

const meta = {
  title: 'Design System/Atoms/E-commerce/DiscountLabel',
  component: DiscountLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Label para exibir porcentagem de desconto. Ideal para promoções e ofertas especiais. Suporta 3 variantes de cor e 3 tamanhos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: 'number',
      description: 'Porcentagem do desconto (será exibida com valor absoluto)',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'accent'],
      description: 'Variante de cor',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do label',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof DiscountLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    percentage: 25,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <DiscountLabel percentage={25} variant="default" />
      <DiscountLabel percentage={25} variant="primary" />
      <DiscountLabel percentage={25} variant="accent" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <DiscountLabel percentage={25} size="sm" />
      <DiscountLabel percentage={25} size="md" />
      <DiscountLabel percentage={25} size="lg" />
    </div>
  ),
}

export const DifferentPercentages: Story = {
  render: () => (
    <div className="flex gap-3 items-center flex-wrap">
      <DiscountLabel percentage={5} />
      <DiscountLabel percentage={10} />
      <DiscountLabel percentage={15} />
      <DiscountLabel percentage={20} />
      <DiscountLabel percentage={25} />
      <DiscountLabel percentage={30} />
      <DiscountLabel percentage={50} />
      <DiscountLabel percentage={70} />
    </div>
  ),
}

export const OnProductImage: Story = {
  render: () => (
    <div className="relative w-64 h-64 bg-gray-200 rounded-lg">
      <DiscountLabel
        percentage={30}
        size="lg"
        className="absolute top-2 right-2"
      />
    </div>
  ),
}

export const InProductCard: Story = {
  render: () => (
    <div className="max-w-sm border rounded-lg overflow-hidden">
      <div className="relative">
        <div className="h-48 bg-gray-200"></div>
        <DiscountLabel
          percentage={25}
          size="md"
          className="absolute top-3 right-3"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Produto em Promoção</h3>
        <p className="text-sm text-gray-600 mb-4">
          Aproveite esta oferta especial por tempo limitado!
        </p>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 line-through">$199.99</span>
          <span className="text-2xl font-bold text-green-600">$149.99</span>
        </div>
      </div>
    </div>
  ),
}

export const FlashSale: Story = {
  render: () => (
    <div className="border-2 border-red-500 rounded-lg p-6 bg-red-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">⚡ Flash Sale</h3>
        <DiscountLabel percentage={50} size="lg" variant="default" />
      </div>
      <p className="text-gray-700 mb-4">
        Aproveite 50% de desconto em produtos selecionados!
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>⏰ Termina em:</span>
        <span className="font-bold">23:59:45</span>
      </div>
    </div>
  ),
}

export const MultipleProducts: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { name: 'Produto A', original: 99.99, discount: 20 },
        { name: 'Produto B', original: 149.99, discount: 30 },
        { name: 'Produto C', original: 79.99, discount: 15 },
        { name: 'Produto D', original: 199.99, discount: 50 },
      ].map((product, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden">
          <div className="relative">
            <div className="h-32 bg-gray-200"></div>
            <DiscountLabel
              percentage={product.discount}
              size="sm"
              className="absolute top-2 right-2"
            />
          </div>
          <div className="p-3">
            <h4 className="font-medium text-sm mb-2">{product.name}</h4>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 line-through">
                ${product.original}
              </span>
              <span className="text-lg font-bold text-green-600">
                ${(product.original * (1 - product.discount / 100)).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
}

export const AllVariantsAndSizes: Story = {
  render: () => (
    <div className="space-y-8">
      {(['default', 'primary', 'accent'] as const).map(variant => (
        <div key={variant} className="border p-6 rounded-lg">
          <h4 className="font-medium mb-4 capitalize">Variant: {variant}</h4>
          <div className="flex gap-4 items-center">
            <DiscountLabel percentage={25} variant={variant} size="sm" />
            <DiscountLabel percentage={25} variant={variant} size="md" />
            <DiscountLabel percentage={25} variant={variant} size="lg" />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const CornerBadge: Story = {
  render: () => (
    <div className="relative w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden">
      <div className="absolute top-0 right-0">
        <div className="relative">
          <DiscountLabel
            percentage={40}
            size="lg"
            variant="accent"
            className="rounded-none rounded-bl-lg"
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-bold text-gray-900">Super Oferta!</h3>
        <p className="text-gray-700">Economize até 40%</p>
      </div>
    </div>
  ),
}
