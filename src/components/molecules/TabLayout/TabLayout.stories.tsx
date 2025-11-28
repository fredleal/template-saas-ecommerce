import type { Meta, StoryObj } from '@storybook/react'
import { TabLayout } from './TabLayout'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/TabLayout',
  component: TabLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    initialIndex: {
      control: { type: 'number', min: 0, max: 10 },
    },
  },
  args: {
    onTabChange: fn(),
  },
} satisfies Meta<typeof TabLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: 'Content for Tab 1' },
      { label: 'Tab 2', content: 'Content for Tab 2' },
      { label: 'Tab 3', content: 'Content for Tab 3' },
    ],
  },
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    tabs: [
      { label: 'Overview', content: 'Overview content here' },
      { label: 'Details', content: 'Detailed information' },
      { label: 'Reviews', content: 'Customer reviews' },
    ],
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    tabs: [
      { label: 'Profile', content: 'Your profile information' },
      { label: 'Settings', content: 'Account settings' },
      { label: 'Security', content: 'Security options' },
    ],
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    tabs: [
      { label: 'Tab A', content: 'Content A' },
      { label: 'Tab B', content: 'Content B' },
      { label: 'Tab C', content: 'Content C' },
    ],
  },
}

export const InitialSecondTab: Story = {
  args: {
    initialIndex: 1,
    tabs: [
      { label: 'First', content: 'First tab content' },
      { label: 'Second (Initial)', content: 'This tab is selected by default' },
      { label: 'Third', content: 'Third tab content' },
    ],
  },
}

export const RichContent: Story = {
  args: {
    tabs: [
      {
        label: 'Description',
        content: (
          <div className="space-y-2">
            <h3 className="font-semibold">Product Description</h3>
            <p className="text-gray-600">
              This is a detailed product description with rich content.
            </p>
          </div>
        ),
      },
      {
        label: 'Specifications',
        content: (
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Weight: 500g</li>
            <li>Dimensions: 10x20x5cm</li>
            <li>Material: Aluminum</li>
          </ul>
        ),
      },
      {
        label: 'Reviews',
        content: (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-600">5.0 (123 reviews)</span>
            </div>
          </div>
        ),
      },
    ],
  },
}

export const ProductTabs: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <TabLayout
        tabs={[
          {
            label: 'Overview',
            content: (
              <div className="prose">
                <p>
                  Complete product overview with all the essential information
                  you need to make an informed decision.
                </p>
              </div>
            ),
          },
          {
            label: 'Features',
            content: (
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>High-quality materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>2-year warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Free shipping</span>
                </li>
              </ul>
            ),
          },
          {
            label: 'Specifications',
            content: (
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Dimensions</td>
                    <td className="py-2 text-gray-600">10 x 20 x 5 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Weight</td>
                    <td className="py-2 text-gray-600">500g</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Material</td>
                    <td className="py-2 text-gray-600">Aluminum</td>
                  </tr>
                </tbody>
              </table>
            ),
          },
        ]}
      />
    </div>
  ),
}
