import type { Meta, StoryObj } from '@storybook/react'
import { CarouselSlide } from './CarouselSlide'

const meta = {
  title: 'Molecules/CarouselSlide',
  component: CarouselSlide,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CarouselSlide>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <div className="p-8">Slide Content</div> },
}
export const WithImage: Story = {
  args: {
    children: <img src="https://via.placeholder.com/600x300" alt="Slide" />,
  },
}
