import type { Meta, StoryObj } from '@storybook/react'
import { StockBadge } from './StockBadge'

const meta = {
  title: 'Atoms/StockBadge',
  component: StockBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stock: {
      control: { type: 'number', min: 0, max: 100 },
    },
    variant: {
      control: 'select',
      options: ['inStock', 'lowStock', 'outOfStock'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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

export const AutoInStock: Story = {
  args: {
    stock: 25,
  },
}

export const AutoLowStock: Story = {
  args: {
    stock: 4,
  },
}

export const Small: Story = {
  args: {
    stock: 15,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    stock: 20,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    stock: 30,
    size: 'lg',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <StockBadge stock={50} variant="inStock" />
      <StockBadge stock={3} variant="lowStock" />
      <StockBadge stock={0} variant="outOfStock" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <StockBadge stock={15} size="sm" />
      <StockBadge stock={20} size="md" />
      <StockBadge stock={30} size="lg" />
    </div>
  ),
}
