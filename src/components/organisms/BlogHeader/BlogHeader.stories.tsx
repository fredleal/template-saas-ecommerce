import type { Meta, StoryObj } from '@storybook/react'
import { BlogHeader } from './BlogHeader'

const meta = {
  title: 'Organisms/BlogHeader',
  component: BlogHeader,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'My Blog',
    subtitle: 'Thoughts and articles',
  },
}
