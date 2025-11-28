import type { Meta, StoryObj } from '@storybook/react'
import { DiscountLabel } from './DiscountLabel'

const meta = {
  title: 'Atoms/DiscountLabel',
  component: DiscountLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof DiscountLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    percentage: 20,
  },
}

export const LargeDiscount: Story = {
  args: {
    percentage: 50,
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    percentage: 30,
    variant: 'primary',
  },
}

export const Accent: Story = {
  args: {
    percentage: 40,
    variant: 'accent',
  },
}

export const Small: Story = {
  args: {
    percentage: 15,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    percentage: 25,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    percentage: 35,
    size: 'lg',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <DiscountLabel percentage={20} variant="default" />
      <DiscountLabel percentage={30} variant="primary" />
      <DiscountLabel percentage={40} variant="accent" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <DiscountLabel percentage={15} size="sm" />
      <DiscountLabel percentage={25} size="md" />
      <DiscountLabel percentage={35} size="lg" />
    </div>
  ),
}
