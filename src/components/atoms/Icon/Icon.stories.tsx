import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Icon, getAvailableIcons } from './Icon'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente para renderizar ícones SVG. Suporta múltiplos tamanhos (xs, sm, md, lg, xl ou valores numéricos) e cores predefinidas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: getAvailableIcons(),
      description: 'Nome do ícone',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 16, 24, 32, 48, 64],
      description: 'Tamanho do ícone (preset ou número em pixels)',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'info',
        'current',
      ],
      description: 'Cor do ícone',
    },
    decorative: {
      control: 'boolean',
      description: 'Se true, ícone é decorativo (ignora acessibilidade)',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'HeartIcon',
  },
}

export const AllIcons: Story = {
  render: () => {
    const icons = getAvailableIcons()
    return (
      <div className="grid grid-cols-5 gap-6">
        {icons.map(iconName => (
          <div
            key={iconName}
            className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-50"
          >
            <Icon name={iconName} size="lg" />
            <span className="text-xs text-center text-gray-600">
              {iconName.replace('Icon', '')}
            </span>
          </div>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <div className="text-center">
        <Icon name="HeartIcon" size="xs" />
        <p className="text-xs text-gray-600 mt-2">xs</p>
      </div>
      <div className="text-center">
        <Icon name="HeartIcon" size="sm" />
        <p className="text-xs text-gray-600 mt-2">sm</p>
      </div>
      <div className="text-center">
        <Icon name="HeartIcon" size="md" />
        <p className="text-xs text-gray-600 mt-2">md</p>
      </div>
      <div className="text-center">
        <Icon name="HeartIcon" size="lg" />
        <p className="text-xs text-gray-600 mt-2">lg</p>
      </div>
      <div className="text-center">
        <Icon name="HeartIcon" size="xl" />
        <p className="text-xs text-gray-600 mt-2">xl</p>
      </div>
    </div>
  ),
}

export const CustomSizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <div className="text-center">
        <Icon name="StarIcon" size={16} />
        <p className="text-xs text-gray-600 mt-2">16px</p>
      </div>
      <div className="text-center">
        <Icon name="StarIcon" size={24} />
        <p className="text-xs text-gray-600 mt-2">24px</p>
      </div>
      <div className="text-center">
        <Icon name="StarIcon" size={32} />
        <p className="text-xs text-gray-600 mt-2">32px</p>
      </div>
      <div className="text-center">
        <Icon name="StarIcon" size={48} />
        <p className="text-xs text-gray-600 mt-2">48px</p>
      </div>
      <div className="text-center">
        <Icon name="StarIcon" size={64} />
        <p className="text-xs text-gray-600 mt-2">64px</p>
      </div>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      {(
        ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
      ).map(color => (
        <div key={color} className="flex items-center gap-4">
          <span className="w-24 text-sm capitalize">{color}:</span>
          <Icon name="HeartIcon" color={color} size="lg" />
        </div>
      ))}
    </div>
  ),
}

export const InButtons: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Icon name="CartIcon" size="sm" color="current" />
        Add to Cart
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
        <Icon name="HeartIcon" size="sm" color="current" />
        Favorite
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
        <Icon name="SearchIcon" size="sm" color="current" />
        Search
      </button>
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Icon name="FilterIcon" size="sm" color="primary" />
        Filter
      </button>
    </div>
  ),
}

export const IconOnlyButtons: Story = {
  render: () => (
    <div className="flex gap-3">
      <button
        className="p-2 rounded-lg hover:bg-gray-100"
        aria-label="Shopping cart"
      >
        <Icon name="CartIcon" size="md" />
      </button>
      <button
        className="p-2 rounded-lg hover:bg-gray-100"
        aria-label="Favorite"
      >
        <Icon name="HeartIcon" size="md" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Search">
        <Icon name="SearchIcon" size="md" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Menu">
        <Icon name="MenuIcon" size="md" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="User">
        <Icon name="UserIcon" size="md" />
      </button>
    </div>
  ),
}

export const InNavigation: Story = {
  render: () => (
    <nav className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">E-commerce</h1>
        <div className="flex gap-3">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Icon name="CartIcon" size="md" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Icon name="HeartIcon" size="md" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Icon name="UserIcon" size="md" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 border rounded-lg">
        <Icon name="SearchIcon" size="sm" color="secondary" />
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 outline-none"
        />
      </div>
    </nav>
  ),
}

export const Decorative: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
        <Icon name="CheckIcon" size="lg" color="success" decorative />
        <div>
          <h4 className="font-medium">Success!</h4>
          <p className="text-sm text-gray-600">Your order has been placed.</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
        <Icon name="XIcon" size="lg" color="error" decorative />
        <div>
          <h4 className="font-medium">Error!</h4>
          <p className="text-sm text-gray-600">Something went wrong.</p>
        </div>
      </div>
    </div>
  ),
}

export const WithRatings: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map(star => (
            <Icon
              key={star}
              name="StarIcon"
              size="sm"
              color={star <= 4 ? 'warning' : 'secondary'}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">(4.0)</span>
        </div>
        <p className="text-sm">Produto com 4 estrelas</p>
      </div>

      <div>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map(star => (
            <Icon key={star} name="StarIcon" size="sm" color="warning" />
          ))}
          <span className="ml-2 text-sm text-gray-600">(5.0)</span>
        </div>
        <p className="text-sm">Produto com 5 estrelas</p>
      </div>
    </div>
  ),
}
