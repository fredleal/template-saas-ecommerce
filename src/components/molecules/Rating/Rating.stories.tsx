import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['warning', 'secondary', 'primary'],
    },
    showValue: {
      control: 'boolean',
    },
    showCount: {
      control: 'boolean',
    },
    isInteractive: {
      control: 'boolean',
    },
  },
  args: {
    onRatingChange: fn(),
  },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 4,
  },
}

export const HalfStars: Story = {
  args: {
    value: 3.5,
  },
}

export const FullStars: Story = {
  args: {
    value: 5,
  },
}

export const WithValue: Story = {
  args: {
    value: 4.2,
    showValue: true,
  },
}

export const WithCount: Story = {
  args: {
    value: 4.5,
    showCount: true,
    count: 1234,
  },
}

export const WithValueAndCount: Story = {
  args: {
    value: 4.8,
    showValue: true,
    showCount: true,
    count: 523,
  },
}

export const ExtraSmall: Story = {
  args: {
    value: 4,
    size: 'xs',
    showValue: true,
  },
}

export const Small: Story = {
  args: {
    value: 4,
    size: 'sm',
    showValue: true,
  },
}

export const Medium: Story = {
  args: {
    value: 4,
    size: 'md',
    showValue: true,
  },
}

export const Large: Story = {
  args: {
    value: 4,
    size: 'lg',
    showValue: true,
  },
}

export const ExtraLarge: Story = {
  args: {
    value: 4,
    size: 'xl',
    showValue: true,
  },
}

export const Interactive: Story = {
  args: {
    value: 0,
    isInteractive: true,
  },
}

export const SecondaryColor: Story = {
  args: {
    value: 4,
    color: 'secondary',
  },
}

export const PrimaryColor: Story = {
  args: {
    value: 4,
    color: 'primary',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Rating value={4} size="xs" showValue />
      <Rating value={4} size="sm" showValue />
      <Rating value={4} size="md" showValue />
      <Rating value={4} size="lg" showValue />
      <Rating value={4} size="xl" showValue />
    </div>
  ),
}

export const ProductReviewExample: Story = {
  render: () => (
    <div className="max-w-sm p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Product Reviews</h3>
      <Rating value={4.5} showValue showCount count={1247} size="md" />
    </div>
  ),
}
