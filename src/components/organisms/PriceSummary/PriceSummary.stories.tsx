import type { Meta, StoryObj } from '@storybook/react'
import { PriceSummary } from './PriceSummary'

const meta = {
  title: 'Organisms/PriceSummary',
  component: PriceSummary,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    originalPrice: 299.9,
    currentPrice: 249.9,
    installments: {
      count: 10,
      value: 24.99,
      withInterest: false,
    },
    pixPrice: 224.91,
  },
}
