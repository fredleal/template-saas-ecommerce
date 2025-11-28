import type { Meta, StoryObj } from '@storybook/react'
import { ImageLink } from './ImageLink'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/ImageLink',
  component: ImageLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    external: {
      control: 'boolean',
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
    },
    priority: {
      control: 'select',
      options: ['high', 'low', 'auto'],
    },
    disableVisibilityTracking: {
      control: 'boolean',
    },
  },
  args: {
    onClick: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
    onVisible: fn(),
  },
} satisfies Meta<typeof ImageLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgDesktop: 'https://via.placeholder.com/600x300',
    title: 'Default Banner',
  },
}

export const WithMobileImage: Story = {
  args: {
    imgDesktop:
      'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Desktop',
    imgMobile: 'https://via.placeholder.com/400x600/FF0000/FFFFFF?text=Mobile',
    title: 'Responsive Banner',
  },
}

export const ExternalLink: Story = {
  args: {
    imgDesktop: 'https://via.placeholder.com/600x300',
    href: 'https://example.com',
    external: true,
    title: 'External Link Banner',
  },
}

export const EagerLoading: Story = {
  args: {
    imgDesktop: 'https://via.placeholder.com/600x300',
    loading: 'eager',
    title: 'Eager Loading Banner',
  },
}

export const HighPriority: Story = {
  args: {
    imgDesktop: 'https://via.placeholder.com/600x300',
    priority: 'high',
    title: 'High Priority Banner',
  },
}

export const CustomDimensions: Story = {
  args: {
    imgDesktop: 'https://via.placeholder.com/1200x400',
    width: 1200,
    height: 400,
    title: 'Custom Size Banner',
  },
}

export const WithFallback: Story = {
  args: {
    imgDesktop: 'https://invalid-url.example.com/image.jpg',
    fallbackSrc:
      'https://via.placeholder.com/600x300/CCCCCC/666666?text=Fallback',
    title: 'Banner with Fallback',
  },
}

export const PromoBanner: Story = {
  args: {
    imgDesktop:
      'https://via.placeholder.com/800x200/4CAF50/FFFFFF?text=Summer+Sale+-+50%+OFF',
    href: '/sale',
    title: 'Summer Sale Banner',
  },
}

export const HeroBanner: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <ImageLink
        imgDesktop="https://via.placeholder.com/1200x400/2196F3/FFFFFF?text=Hero+Banner"
        imgMobile="https://via.placeholder.com/600x400/2196F3/FFFFFF?text=Mobile+Hero"
        href="/features"
        title="Discover Our Features"
        priority="high"
        loading="eager"
      />
    </div>
  ),
}
