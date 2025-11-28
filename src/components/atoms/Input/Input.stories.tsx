import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <label htmlFor="email">Email</label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'you@example.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '123',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Error state',
    variant: 'error',
  },
}

export const Success: Story = {
  args: {
    placeholder: 'Success state',
    variant: 'success',
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <Input placeholder="Default" />
      <Input placeholder="Error" variant="error" />
      <Input placeholder="Success" variant="success" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
}
