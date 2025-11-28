import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    onToggle: fn(),
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Click to expand',
    children: (
      <p className="text-sm text-gray-600">This is the dropdown content.</p>
    ),
  },
}

export const DefaultOpen: Story = {
  args: {
    label: 'Already open',
    defaultOpen: true,
    children: (
      <p className="text-sm text-gray-600">This dropdown starts open.</p>
    ),
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled dropdown',
    disabled: true,
    children: <p className="text-sm text-gray-600">You cannot open this.</p>,
  },
}

export const WithRichContent: Story = {
  args: {
    label: 'Dropdown with rich content',
    children: (
      <div className="space-y-2">
        <h4 className="font-semibold text-sm">Rich Content</h4>
        <p className="text-sm text-gray-600">
          This dropdown contains multiple elements with different styles and
          formatting.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
  },
}

export const FAQ: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Dropdown label="What is your return policy?">
        <p className="text-sm text-gray-600">
          You can return items within 30 days of purchase for a full refund.
        </p>
      </Dropdown>
      <Dropdown label="How long does shipping take?">
        <p className="text-sm text-gray-600">
          Standard shipping takes 5-7 business days. Express shipping is
          available.
        </p>
      </Dropdown>
      <Dropdown label="Do you ship internationally?">
        <p className="text-sm text-gray-600">
          Yes, we ship to over 50 countries worldwide.
        </p>
      </Dropdown>
    </div>
  ),
}
