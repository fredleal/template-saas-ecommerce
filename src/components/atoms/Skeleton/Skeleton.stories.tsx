import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Design System/Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Skeleton loading placeholder component. Used to indicate content is loading. Supports 5 border radius variants, 3 animation speeds, and custom dimensions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the skeleton (CSS value or number for px)',
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (CSS value or number for px)',
      table: {
        defaultValue: { summary: '1rem' },
      },
    },
    variant: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius variant',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
      description: 'Animation speed',
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default skeleton with medium border radius
 */
export const Default: Story = {
  args: {
    width: '200px',
    height: '20px',
    variant: 'md',
    speed: 'normal',
  },
}

/**
 * Text line skeleton - simulates a line of text
 */
export const TextLine: Story = {
  args: {
    width: '100%',
    height: '1rem',
    variant: 'sm',
  },
  render: args => (
    <div style={{ width: '300px' }}>
      <Skeleton {...args} />
    </div>
  ),
}

/**
 * Multiple text lines - simulates paragraph loading
 */
export const TextParagraph: Story = {
  render: () => (
    <div style={{ width: '400px' }} className="space-y-2">
      <Skeleton width="100%" height="1rem" variant="sm" />
      <Skeleton width="100%" height="1rem" variant="sm" />
      <Skeleton width="70%" height="1rem" variant="sm" />
    </div>
  ),
}

/**
 * Avatar skeleton - circular shape
 */
export const Avatar: Story = {
  args: {
    width: 48,
    height: 48,
    variant: 'full',
  },
}

/**
 * Button skeleton
 */
export const Button: Story = {
  args: {
    width: 120,
    height: 40,
    variant: 'md',
  },
}

/**
 * Card skeleton - rectangular with rounded corners
 */
export const Card: Story = {
  args: {
    width: 300,
    height: 200,
    variant: 'lg',
  },
}

/**
 * Image skeleton - square shape
 */
export const Image: Story = {
  args: {
    width: 200,
    height: 200,
    variant: 'md',
  },
}

/**
 * Border radius variants
 */
export const BorderRadiusVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">none:</span>
        <Skeleton width={100} height={40} variant="none" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">sm:</span>
        <Skeleton width={100} height={40} variant="sm" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">md:</span>
        <Skeleton width={100} height={40} variant="md" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">lg:</span>
        <Skeleton width={100} height={40} variant="lg" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">full:</span>
        <Skeleton width={40} height={40} variant="full" />
      </div>
    </div>
  ),
}

/**
 * Animation speed variants
 */
export const AnimationSpeeds: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">slow:</span>
        <Skeleton width={200} height={40} variant="md" speed="slow" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">normal:</span>
        <Skeleton width={200} height={40} variant="md" speed="normal" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm">fast:</span>
        <Skeleton width={200} height={40} variant="md" speed="fast" />
      </div>
    </div>
  ),
}

/**
 * User card loading state
 */
export const UserCardLoading: Story = {
  render: () => (
    <div style={{ width: '300px' }} className="space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton width={48} height={48} variant="full" />
        <div className="flex-1 space-y-2">
          <Skeleton width="60%" height="1rem" variant="sm" />
          <Skeleton width="40%" height="0.875rem" variant="sm" />
        </div>
      </div>
    </div>
  ),
}

/**
 * Product card loading state
 */
export const ProductCardLoading: Story = {
  render: () => (
    <div style={{ width: '250px' }} className="space-y-3">
      <Skeleton width="100%" height={200} variant="lg" />
      <Skeleton width="80%" height="1.25rem" variant="sm" />
      <Skeleton width="60%" height="1rem" variant="sm" />
      <div className="flex items-center justify-between">
        <Skeleton width={60} height="1.5rem" variant="sm" />
        <Skeleton width={80} height={36} variant="md" />
      </div>
    </div>
  ),
}

/**
 * Blog post loading state
 */
export const BlogPostLoading: Story = {
  render: () => (
    <div style={{ width: '600px' }} className="space-y-4">
      <Skeleton width="100%" height={300} variant="lg" />
      <Skeleton width="70%" height="2rem" variant="sm" />
      <div className="space-y-2">
        <Skeleton width="100%" height="1rem" variant="sm" />
        <Skeleton width="100%" height="1rem" variant="sm" />
        <Skeleton width="100%" height="1rem" variant="sm" />
        <Skeleton width="85%" height="1rem" variant="sm" />
      </div>
    </div>
  ),
}
