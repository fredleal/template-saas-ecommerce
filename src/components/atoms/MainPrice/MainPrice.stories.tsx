import type { Meta, StoryObj } from '@storybook/react'
import { MainPrice } from './MainPrice'

const meta = {
  title: 'Atoms/MainPrice',
  component: MainPrice,
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
} satisfies Meta<typeof MainPrice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 149.9,
  },
}

export const BRL: Story = {
  args: {
    value: 249.9,
    currency: 'BRL',
    locale: 'pt-BR',
  },
}

export const USD: Story = {
  args: {
    value: 79.99,
    currency: 'USD',
    locale: 'en-US',
  },
}

export const EUR: Story = {
  args: {
    value: 69.99,
    currency: 'EUR',
    locale: 'de-DE',
  },
}

export const Small: Story = {
  args: {
    value: 99.9,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    value: 199.9,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    value: 299.9,
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <MainPrice value={99.9} size="sm" />
      <MainPrice value={199.9} size="md" />
      <MainPrice value={299.9} size="lg" />
    </div>
  ),
}
