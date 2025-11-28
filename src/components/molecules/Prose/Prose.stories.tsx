import type { Meta, StoryObj } from '@storybook/react'
import { Prose } from './Prose'

const meta = {
  title: 'Molecules/Prose',
  component: Prose,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Prose>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2>Heading</h2>
        <p>Paragraph text here.</p>
      </div>
    ),
  },
}
