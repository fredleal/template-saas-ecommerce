import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
}

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    variant: 'info',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
    variant: 'info',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    variant: 'info',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="sm" variant="info">
        Small
      </Badge>
      <Badge size="md" variant="info">
        Medium
      </Badge>
      <Badge size="lg" variant="info">
        Large
      </Badge>
    </div>
  ),
}
