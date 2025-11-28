import type { Meta, StoryObj } from '@storybook/react'
import { ListPrice } from './ListPrice'

const meta = {
  title: 'Atoms/ListPrice',
  component: ListPrice,
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
} satisfies Meta<typeof ListPrice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 199.99,
  },
}

export const BRL: Story = {
  args: {
    value: 299.9,
    currency: 'BRL',
    locale: 'pt-BR',
  },
}

export const USD: Story = {
  args: {
    value: 99.99,
    currency: 'USD',
    locale: 'en-US',
  },
}

export const EUR: Story = {
  args: {
    value: 89.99,
    currency: 'EUR',
    locale: 'de-DE',
  },
}

export const Small: Story = {
  args: {
    value: 149.9,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    value: 249.9,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    value: 349.9,
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2 items-start">
      <ListPrice value={149.9} size="sm" />
      <ListPrice value={249.9} size="md" />
      <ListPrice value={349.9} size="lg" />
    </div>
  ),
}
