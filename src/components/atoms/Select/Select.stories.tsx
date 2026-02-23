import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const defaultOptions = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
  { value: 'opt3', label: 'Option 3' },
]

const meta = {
  title: 'Design System/Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select an option...',
  },
}

export const WithError: Story = {
  args: {
    options: defaultOptions,
    error: true,
    errorMessage: 'This field is required',
    id: 'error-select',
  },
}

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Select options={defaultOptions} size="sm" placeholder="Small" />
      <Select options={defaultOptions} size="md" placeholder="Medium" />
      <Select options={defaultOptions} size="lg" placeholder="Large" />
    </div>
  ),
}
