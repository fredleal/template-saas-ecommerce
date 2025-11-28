import type { Meta, StoryObj } from '@storybook/react'
import { InstallmentsPrice } from './InstallmentsPrice'

const meta = {
  title: 'Molecules/InstallmentsPrice',
  component: InstallmentsPrice,
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
    withInterest: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof InstallmentsPrice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    installments: 12,
    value: 24.99,
  },
}

export const WithoutInterest: Story = {
  args: {
    installments: 10,
    value: 29.9,
    withInterest: false,
  },
}

export const WithInterest: Story = {
  args: {
    installments: 12,
    value: 35.5,
    withInterest: true,
  },
}

export const Small: Story = {
  args: {
    installments: 6,
    value: 19.9,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    installments: 10,
    value: 29.9,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    installments: 12,
    value: 49.9,
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-3">
      <InstallmentsPrice installments={6} value={19.9} size="sm" />
      <InstallmentsPrice installments={10} value={29.9} size="md" />
      <InstallmentsPrice installments={12} value={49.9} size="lg" />
    </div>
  ),
}

export const Comparison: Story = {
  render: () => (
    <div className="space-y-2">
      <InstallmentsPrice installments={10} value={29.9} withInterest={false} />
      <InstallmentsPrice installments={12} value={35.5} withInterest={true} />
    </div>
  ),
}
