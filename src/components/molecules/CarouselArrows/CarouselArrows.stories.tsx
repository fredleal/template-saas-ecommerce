import type { Meta, StoryObj } from '@storybook/react'
import { CarouselArrows } from './CarouselArrows'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/CarouselArrows',
  component: CarouselArrows,
  parameters: { layout: 'centered' },
  decorators: [
    Story => (
      <div className="relative w-96 h-64 bg-gray-100">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: { onPrev: fn(), onNext: fn() },
} satisfies Meta<typeof CarouselArrows>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { showPrev: true, showNext: true } }
export const OnlyPrev: Story = { args: { showPrev: true, showNext: false } }
export const OnlyNext: Story = { args: { showPrev: false, showNext: true } }
