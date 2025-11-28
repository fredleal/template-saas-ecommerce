import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    variant: 'text',
    className: 'w-64',
  },
}

export const Circular: Story = {
  args: {
    variant: 'circular',
    className: 'w-12 h-12',
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    className: 'w-64 h-32',
  },
}

export const CardExample: Story = {
  render: () => (
    <div className="w-80 border rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" className="w-12 h-12" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-3/4" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
      </div>
      <Skeleton variant="rectangular" className="w-full h-48" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
    </div>
  ),
}

export const ProfileExample: Story = {
  render: () => (
    <div className="flex items-center gap-4 w-80">
      <Skeleton variant="circular" className="w-16 h-16" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-1/2" />
        <Skeleton variant="text" className="w-2/3" />
      </div>
    </div>
  ),
}
