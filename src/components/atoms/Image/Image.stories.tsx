import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Placeholder image',
    width: 300,
    height: 200,
  },
}

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url.example.com/image.jpg',
    alt: 'Image with fallback',
    width: 300,
    height: 200,
    fallbackSrc:
      'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Fallback',
  },
}

export const LazyLoading: Story = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'Lazy loaded image',
    width: 600,
    height: 400,
    loading: 'lazy',
  },
}

export const EagerLoading: Story = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'Eager loaded image',
    width: 600,
    height: 400,
    loading: 'eager',
  },
}

export const HighPriority: Story = {
  args: {
    src: 'https://via.placeholder.com/600x400',
    alt: 'High priority image',
    width: 600,
    height: 400,
    fetchPriority: 'high',
  },
}
