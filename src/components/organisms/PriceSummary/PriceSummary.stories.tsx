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
    listPrice: 299.9,
    mainPrice: 249.9,
    installments: 10,
    installmentValue: 24.99,
    pixPrice: 224.91,
  },
}
