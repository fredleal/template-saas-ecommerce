import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Welcome to Our Platform',
    subtitle: 'Build amazing things',
  },
}
