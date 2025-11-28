import type { Meta, StoryObj } from '@storybook/react'
import { FAQSection } from './FAQSection'

const meta = {
  title: 'Organisms/FAQSection',
  component: FAQSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof FAQSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    faqs: [
      { question: 'What is this?', answer: 'This is an FAQ section.' },
      {
        question: 'How does it work?',
        answer: 'It uses an accordion pattern.',
      },
    ],
  },
}
