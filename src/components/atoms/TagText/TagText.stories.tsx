import type { Meta, StoryObj } from '@storybook/react'
import { TagText } from './TagText'

const meta = {
  title: 'Atoms/TagText',
  component: TagText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'div'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted'],
    },
  },
} satisfies Meta<typeof TagText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Default Tag Text',
  },
}

export const ExtraSmall: Story = {
  args: {
    text: 'Extra Small Text',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    text: 'Small Text',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    text: 'Medium Text',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    text: 'Large Text',
    size: 'lg',
  },
}

export const Normal: Story = {
  args: {
    text: 'Normal Weight',
    weight: 'normal',
  },
}

export const MediumWeight: Story = {
  args: {
    text: 'Medium Weight',
    weight: 'medium',
  },
}

export const Semibold: Story = {
  args: {
    text: 'Semibold Weight',
    weight: 'semibold',
  },
}

export const Bold: Story = {
  args: {
    text: 'Bold Weight',
    weight: 'bold',
  },
}

export const Primary: Story = {
  args: {
    text: 'Primary Color',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    text: 'Secondary Color',
    color: 'secondary',
  },
}

export const Muted: Story = {
  args: {
    text: 'Muted Color',
    color: 'muted',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <TagText text="Extra Small (xs)" size="xs" />
      <TagText text="Small (sm)" size="sm" />
      <TagText text="Medium (md)" size="md" />
      <TagText text="Large (lg)" size="lg" />
    </div>
  ),
}

export const AllWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <TagText text="Normal weight" weight="normal" />
      <TagText text="Medium weight" weight="medium" />
      <TagText text="Semibold weight" weight="semibold" />
      <TagText text="Bold weight" weight="bold" />
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <TagText text="Primary color" color="primary" />
      <TagText text="Secondary color" color="secondary" />
      <TagText text="Muted color" color="muted" />
    </div>
  ),
}
