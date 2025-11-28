import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: 'Email Address',
  },
}

export const Required: Story = {
  args: {
    children: 'Email Address',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Email Address',
    disabled: true,
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <input
        type="email"
        id="email"
        className="px-3 py-2 border border-gray-300 rounded-md"
        placeholder="you@example.com"
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" required>
          Full Name
        </Label>
        <input
          type="text"
          id="name"
          className="px-3 py-2 border border-gray-300 rounded-md"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-form" required>
          Email
        </Label>
        <input
          type="email"
          id="email-form"
          className="px-3 py-2 border border-gray-300 rounded-md"
          placeholder="john@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone (Optional)</Label>
        <input
          type="tel"
          id="phone"
          className="px-3 py-2 border border-gray-300 rounded-md"
          placeholder="+1 (555) 000-0000"
        />
      </div>
    </div>
  ),
}
