import type { Meta, StoryObj } from '@storybook/react'
import { Wrapper } from './Wrapper'

const meta = {
  title: 'Molecules/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variantWidth: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    overflowHidden: {
      control: 'boolean',
    },
    isFlex: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Wrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="bg-blue-50 p-8 text-center">
        <p>Content inside Wrapper</p>
      </div>
    ),
  },
}

export const PrimaryWidth: Story = {
  args: {
    variantWidth: 'primary',
    children: (
      <div className="bg-blue-100 p-8">
        <p>Primary width (max-w-7xl, centered)</p>
      </div>
    ),
  },
}

export const SecondaryWidth: Story = {
  args: {
    variantWidth: 'secondary',
    children: (
      <div className="bg-green-100 p-8">
        <p>Secondary width (full width)</p>
      </div>
    ),
  },
}

export const WithOverflowHidden: Story = {
  args: {
    overflowHidden: true,
    children: (
      <div className="bg-purple-100 p-8">
        <p>This wrapper has overflow-hidden</p>
        <div className="w-[200%] bg-purple-300 p-4">
          This content is wider than the wrapper
        </div>
      </div>
    ),
  },
}

export const WithTranslateX: Story = {
  args: {
    translateX: 100,
    children: (
      <div className="bg-yellow-100 p-8">
        <p>This content is translated -100px on X axis</p>
      </div>
    ),
  },
}

export const WithTransition: Story = {
  args: {
    transition: 'transform 0.3s ease-in-out',
    translateX: 0,
    children: (
      <div className="bg-pink-100 p-8">
        <p>This wrapper has CSS transitions enabled</p>
      </div>
    ),
  },
}

export const NoFlex: Story = {
  args: {
    isFlex: false,
    children: (
      <div className="bg-red-100 p-8">
        <p>Inner wrapper is not flex</p>
      </div>
    ),
  },
}

export const ContentExample: Story = {
  args: {
    variantWidth: 'primary',
    children: (
      <div className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">Page Content</h1>
        <p className="text-gray-600">
          This is content wrapped in the Wrapper component. It has a maximum
          width and is centered on the page.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">Card 1</div>
          <div className="bg-gray-100 p-4 rounded">Card 2</div>
          <div className="bg-gray-100 p-4 rounded">Card 3</div>
        </div>
      </div>
    ),
  },
}
