import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default text',
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'Extra small text',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    children: 'Small text',
    size: 'sm',
  },
}

export const Base: Story = {
  args: {
    children: 'Base text',
    size: 'base',
  },
}

export const Large: Story = {
  args: {
    children: 'Large text',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    children: 'Extra large text',
    size: 'xl',
  },
}

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
    size: '4xl',
    weight: 'bold',
  },
}

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
    size: '3xl',
    weight: 'bold',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text size="xs">Extra Small</Text>
      <Text size="sm">Small</Text>
      <Text size="base">Base</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra Large</Text>
      <Text size="2xl">2XL</Text>
      <Text size="3xl">3XL</Text>
      <Text size="4xl">4XL</Text>
    </div>
  ),
}

export const AllWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text color="default">Default color</Text>
      <Text color="muted">Muted color</Text>
      <Text color="primary">Primary color</Text>
      <Text color="secondary">Secondary color</Text>
    </div>
  ),
}
