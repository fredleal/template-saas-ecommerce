import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    href: '#',
    children: 'Primary Link',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    href: '#',
    children: 'Secondary Link',
    variant: 'secondary',
  },
}

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
    target: '_blank',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" variant="primary">
        Primary Link
      </Link>
      <Link href="#" variant="secondary">
        Secondary Link
      </Link>
      <Link href="https://example.com" target="_blank">
        External Link
      </Link>
    </div>
  ),
}
