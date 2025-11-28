import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: {
      control: 'boolean',
    },
  },
  args: {
    onDismiss: fn(),
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational alert message.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Operation completed successfully!',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Please review this important warning.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'An error occurred. Please try again.',
  },
}

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This alert has a title.',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved.',
    icon: 'CheckIcon',
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'This alert can be dismissed.',
    dismissible: true,
  },
}

export const LongMessage: Story = {
  args: {
    variant: 'info',
    title: 'Detailed Information',
    message:
      'This is a longer message that demonstrates how the alert component handles multiple lines of text. It should wrap gracefully and maintain proper spacing and alignment.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" message="This is an info alert" />
      <Alert variant="success" message="This is a success alert" />
      <Alert variant="warning" message="This is a warning alert" />
      <Alert variant="error" message="This is an error alert" />
    </div>
  ),
}
