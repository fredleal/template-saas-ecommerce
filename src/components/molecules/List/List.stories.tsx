import type { Meta, StoryObj } from '@storybook/react'
import { List } from './List'

const meta = {
  title: 'Molecules/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['ul', 'ol'],
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const UnorderedList: Story = {
  args: {
    as: 'ul',
    items: ['First item', 'Second item', 'Third item'],
  },
}

export const OrderedList: Story = {
  args: {
    as: 'ol',
    items: ['Step one', 'Step two', 'Step three'],
  },
}

export const WithTitle: Story = {
  args: {
    title: 'My List',
    items: ['Item A', 'Item B', 'Item C'],
  },
}

export const RowDirection: Story = {
  args: {
    items: ['Inline 1', 'Inline 2', 'Inline 3'],
    direction: 'row',
  },
}

export const ColumnDirection: Story = {
  args: {
    items: ['Stacked 1', 'Stacked 2', 'Stacked 3'],
    direction: 'column',
  },
}

export const Secondary: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
    variant: 'secondary',
  },
}

export const CustomRenderItem: Story = {
  args: {
    items: ['Apple', 'Banana', 'Cherry'],
    renderItem: (item: string, index: number) => (
      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
        <span className="font-bold text-blue-600">{index + 1}.</span>
        <span>{item}</span>
      </div>
    ),
  },
}

export const ComplexItems: Story = {
  args: {
    items: [
      { name: 'Product A', price: 29.99 },
      { name: 'Product B', price: 39.99 },
      { name: 'Product C', price: 49.99 },
    ],
    renderItem: (item: { name: string; price: number }) => (
      <div className="flex justify-between p-2 border-b">
        <span className="font-medium">{item.name}</span>
        <span className="text-green-600">${item.price}</span>
      </div>
    ),
  },
}
