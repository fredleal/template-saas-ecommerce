import type { Meta, StoryObj } from '@storybook/react'
import { CarouselDots } from './CarouselDots'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/CarouselDots',
  component: CarouselDots,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onDotClick: fn() },
} satisfies Meta<typeof CarouselDots>

export default meta
type Story = StoryObj<typeof meta>

export const ThreeDots: Story = { args: { total: 3, activeIndex: 0 } }
export const FiveDots: Story = { args: { total: 5, activeIndex: 2 } }
export const ManyDots: Story = { args: { total: 10, activeIndex: 4 } }
