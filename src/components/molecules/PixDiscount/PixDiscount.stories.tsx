import type { Meta, StoryObj } from '@storybook/react'
import { PixDiscount } from './PixDiscount'

const meta = {
  title: 'Molecules/PixDiscount',
  component: PixDiscount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currency: {
      control: 'select',
      options: ['BRL', 'USD', 'EUR', 'GBP'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof PixDiscount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    originalPrice: 299.9,
    pixPrice: 269.91,
  },
}

export const LargeDiscount: Story = {
  args: {
    originalPrice: 499.9,
    pixPrice: 399.92,
  },
}

export const SmallDiscount: Story = {
  args: {
    originalPrice: 199.9,
    pixPrice: 189.91,
  },
}

export const Small: Story = {
  args: {
    originalPrice: 149.9,
    pixPrice: 134.91,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    originalPrice: 249.9,
    pixPrice: 224.91,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    originalPrice: 399.9,
    pixPrice: 359.91,
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <PixDiscount originalPrice={149.9} pixPrice={134.91} size="sm" />
      <PixDiscount originalPrice={249.9} pixPrice={224.91} size="md" />
      <PixDiscount originalPrice={399.9} pixPrice={359.91} size="lg" />
    </div>
  ),
}
