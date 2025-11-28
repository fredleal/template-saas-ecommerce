import type { Meta, StoryObj } from '@storybook/react'
import { TableOfContents } from './TableOfContents'

const meta = {
  title: 'Molecules/TableOfContents',
  component: TableOfContents,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof TableOfContents>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { id: '1', title: 'Introduction', level: 1 },
      { id: '2', title: 'Getting Started', level: 2 },
      { id: '3', title: 'Advanced Topics', level: 1 },
    ],
  },
}
