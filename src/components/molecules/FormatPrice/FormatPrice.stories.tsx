import type { Meta, StoryObj } from '@storybook/react'
import { FormatPrice } from './FormatPrice'

const meta = {
  title: 'Molecules/FormatPrice',
  component: FormatPrice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currency: {
      control: 'select',
      options: ['BRL', 'USD', 'EUR', 'GBP'],
    },
    showCurrency: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FormatPrice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 99.99,
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

export const GBP: Story = {
  args: {
    value: 79.99,
    currency: 'GBP',
    locale: 'en-GB',
  },
}

export const NoCurrency: Story = {
  args: {
    value: 149.9,
    showCurrency: false,
  },
}

export const CustomStyling: Story = {
  args: {
    value: 299.9,
    currency: 'BRL',
    locale: 'pt-BR',
    currencyClassName: 'text-xs text-gray-500',
    integerClassName: 'text-4xl font-black text-blue-600',
    decimalClassName: 'text-lg text-gray-500',
  },
}

export const AllCurrencies: Story = {
  render: () => (
    <div className="space-y-2">
      <div>
        <FormatPrice value={249.9} currency="BRL" locale="pt-BR" />
      </div>
      <div>
        <FormatPrice value={99.99} currency="USD" locale="en-US" />
      </div>
      <div>
        <FormatPrice value={89.99} currency="EUR" locale="de-DE" />
      </div>
      <div>
        <FormatPrice value={79.99} currency="GBP" locale="en-GB" />
      </div>
    </div>
  ),
}
