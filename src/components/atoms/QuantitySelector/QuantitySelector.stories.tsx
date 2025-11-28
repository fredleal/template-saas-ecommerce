import type { Meta, StoryObj } from '@storybook/react'
import { QuantitySelector } from './QuantitySelector'
import { fn } from '@storybook/test'

const meta = {
  title: 'Atoms/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 1, max: 99 },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof QuantitySelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 1,
  },
}

export const WithValue: Story = {
  args: {
    value: 5,
  },
}

export const AtMinimum: Story = {
  args: {
    value: 1,
    min: 1,
  },
}

export const AtMaximum: Story = {
  args: {
    value: 10,
    max: 10,
  },
}

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    value: 2,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    value: 3,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    value: 4,
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <QuantitySelector value={1} size="sm" onChange={() => {}} />
      <QuantitySelector value={2} size="md" onChange={() => {}} />
      <QuantitySelector value={3} size="lg" onChange={() => {}} />
    </div>
  ),
}
