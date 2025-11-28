import type { Meta, StoryObj } from '@storybook/react'
import { PriceTag } from './PriceTag'

const meta = {
  title: 'Atoms/PriceTag',
  component: PriceTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currency: {
      control: 'select',
      options: ['USD', 'BRL', 'EUR', 'GBP'],
    },
    variant: {
      control: 'select',
      options: ['normal', 'discount', 'strikethrough'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof PriceTag>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    value: 99.99,
    variant: 'normal',
  },
}

export const Discount: Story = {
  args: {
    value: 79.99,
    variant: 'discount',
  },
}

export const Strikethrough: Story = {
  args: {
    value: 129.99,
    variant: 'strikethrough',
  },
}

export const USD: Story = {
  args: {
    value: 49.99,
    currency: 'USD',
  },
}

export const BRL: Story = {
  args: {
    value: 249.9,
    currency: 'BRL',
  },
}

export const Small: Story = {
  args: {
    value: 29.99,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    value: 59.99,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    value: 99.99,
    size: 'lg',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <PriceTag value={99.99} variant="normal" />
      <PriceTag value={79.99} variant="discount" />
      <PriceTag value={129.99} variant="strikethrough" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <PriceTag value={29.99} size="sm" />
      <PriceTag value={59.99} size="md" />
      <PriceTag value={99.99} size="lg" />
    </div>
  ),
}
