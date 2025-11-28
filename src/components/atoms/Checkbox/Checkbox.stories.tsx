import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked',
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
}

export const LabelLeft: Story = {
  args: {
    label: 'Label on left',
    labelPosition: 'left',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked & Disabled" checked disabled />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
}
