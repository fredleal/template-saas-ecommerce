import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './Carousel'

const meta = {
  title: 'Organisms/Carousel',
  component: Carousel,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        content: (
          <div className="h-64 bg-blue-200 flex items-center justify-center">
            Slide 1
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div className="h-64 bg-green-200 flex items-center justify-center">
            Slide 2
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div className="h-64 bg-purple-200 flex items-center justify-center">
            Slide 3
          </div>
        ),
      },
    ],
  },
}
