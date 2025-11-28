import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../../atoms'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isClickable: {
      control: 'boolean',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    children: 'This is the card content.',
  },
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    children: 'This card has a shadow.',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    children: 'This card has a thick border.',
  },
}

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    subtitle: 'Beautiful landscape',
    image: 'https://via.placeholder.com/400x300',
    imageAlt: 'Placeholder image',
    children: 'Card content goes here.',
  },
}

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    children: 'This card has action buttons.',
    actions: (
      <>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Save
        </Button>
      </>
    ),
  },
}
