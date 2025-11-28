import type { Meta, StoryObj } from '@storybook/react'
import { PostCard } from './PostCard'

const meta = {
  title: 'Molecules/PostCard',
  component: PostCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React development...',
    date: '2024-01-15',
    author: 'John Doe',
  },
}
