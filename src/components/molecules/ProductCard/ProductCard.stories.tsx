import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ProductCard } from './ProductCard'

const meta = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'featured'],
      description: 'Visual variant of the product card',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card and its elements',
    },
    currency: {
      control: 'select',
      options: ['USD', 'BRL', 'EUR', 'GBP'],
      description: 'Currency for price display',
    },
    stock: {
      control: 'number',
      description: 'Number of items in stock',
    },
    showQuantitySelector: {
      control: 'boolean',
      description: 'Show or hide quantity selector',
    },
  },
  args: {
    onAddToCart: fn(),
    onViewDetails: fn(),
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    id: 'product-1',
    name: 'Premium Wireless Headphones',
    description:
      'High-quality wireless headphones with active noise cancellation and 30-hour battery life',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    imageAlt: 'Premium wireless headphones',
    price: 299.99,
    stock: 15,
    currency: 'USD',
  },
}

// With discount
export const WithDiscount: Story = {
  args: {
    id: 'product-2',
    name: 'Smart Watch Pro',
    description:
      'Advanced fitness tracking, heart rate monitoring, and GPS navigation',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    imageAlt: 'Smart watch',
    price: 199.99,
    originalPrice: 349.99,
    stock: 8,
    currency: 'USD',
  },
}

// Low stock
export const LowStock: Story = {
  args: {
    id: 'product-3',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with custom switches',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
    imageAlt: 'Mechanical keyboard',
    price: 149.99,
    stock: 3,
    currency: 'USD',
  },
}

// Out of stock
export const OutOfStock: Story = {
  args: {
    id: 'product-4',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
    imageAlt: 'Wireless mouse',
    price: 79.99,
    stock: 0,
    currency: 'USD',
  },
}

// Compact variant
export const CompactVariant: Story = {
  args: {
    id: 'product-5',
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f',
    imageAlt: 'USB-C hub',
    price: 49.99,
    stock: 25,
    currency: 'USD',
    variant: 'compact',
  },
}

// Featured variant
export const FeaturedVariant: Story = {
  args: {
    id: 'product-6',
    name: 'Gaming Laptop',
    description:
      'High-performance gaming laptop with RTX graphics and 144Hz display',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
    imageAlt: 'Gaming laptop',
    price: 1499.99,
    originalPrice: 1999.99,
    stock: 5,
    currency: 'USD',
    variant: 'featured',
  },
}

// Small size
export const SmallSize: Story = {
  args: {
    id: 'product-7',
    name: 'Phone Case',
    description: 'Protective phone case with shock absorption',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb',
    imageAlt: 'Phone case',
    price: 24.99,
    stock: 50,
    currency: 'USD',
    size: 'sm',
  },
}

// Large size
export const LargeSize: Story = {
  args: {
    id: 'product-8',
    name: '4K Monitor',
    description:
      '32-inch 4K UHD monitor with HDR support and 144Hz refresh rate',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
    imageAlt: '4K monitor',
    price: 599.99,
    stock: 12,
    currency: 'USD',
    size: 'lg',
  },
}

// Without quantity selector
export const WithoutQuantitySelector: Story = {
  args: {
    id: 'product-9',
    name: 'Desk Lamp',
    description:
      'LED desk lamp with adjustable brightness and color temperature',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    imageAlt: 'Desk lamp',
    price: 39.99,
    stock: 20,
    currency: 'USD',
    showQuantitySelector: false,
  },
}

// Only view details button
export const OnlyViewDetails: Story = {
  args: {
    id: 'product-10',
    name: 'Backpack',
    description: 'Durable laptop backpack with multiple compartments',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    imageAlt: 'Backpack',
    price: 89.99,
    stock: 18,
    currency: 'USD',
    onAddToCart: undefined,
  },
}

// BRL currency
export const BrazilianCurrency: Story = {
  args: {
    id: 'product-11',
    name: 'Fone de Ouvido Bluetooth',
    description: 'Fone de ouvido sem fio com cancelamento de ruído',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    imageAlt: 'Fone de ouvido',
    price: 599.9,
    originalPrice: 899.9,
    stock: 10,
    currency: 'BRL',
  },
}

// EUR currency
export const EuropeanCurrency: Story = {
  args: {
    id: 'product-12',
    name: 'Smartwatch',
    description: 'Advanced fitness tracking and health monitoring',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    imageAlt: 'Smartwatch',
    price: 249.99,
    stock: 15,
    currency: 'EUR',
  },
}

// Product grid showcase
export const ProductGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl">
      <ProductCard
        id="grid-1"
        name="Wireless Headphones"
        description="Premium sound quality with noise cancellation"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        price={299.99}
        originalPrice={399.99}
        stock={15}
        onAddToCart={fn()}
        onViewDetails={fn()}
      />
      <ProductCard
        id="grid-2"
        name="Smart Watch"
        description="Fitness tracking and health monitoring"
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        price={199.99}
        stock={3}
        onAddToCart={fn()}
        onViewDetails={fn()}
      />
      <ProductCard
        id="grid-3"
        name="Mechanical Keyboard"
        description="RGB backlit with custom switches"
        image="https://images.unsplash.com/photo-1587829741301-dc798b83add3"
        price={149.99}
        stock={0}
        onAddToCart={fn()}
        onViewDetails={fn()}
      />
      <ProductCard
        id="grid-4"
        name="Wireless Mouse"
        description="Ergonomic design with precision tracking"
        image="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
        price={79.99}
        stock={25}
        onAddToCart={fn()}
        onViewDetails={fn()}
      />
      <ProductCard
        id="grid-5"
        name="USB-C Hub"
        description="7-in-1 connectivity solution"
        image="https://images.unsplash.com/photo-1625948515291-69613efd103f"
        price={49.99}
        stock={12}
        variant="compact"
        onAddToCart={fn()}
        onViewDetails={fn()}
      />
      <ProductCard
        id="grid-6"
        name="Gaming Laptop"
        description="High-performance with RTX graphics"
        image="https://images.unsplash.com/photo-1603302576837-37561b2e2302"
        price={1499.99}
        originalPrice={1999.99}
        stock={5}
        variant="featured"
        onAddToCart={fn()}
        onViewDetails={fn()}
      />
    </div>
  ),
}
