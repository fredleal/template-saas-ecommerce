import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CTABanner } from './CTABanner'

const meta: Meta<typeof CTABanner> = {
  title: 'Organisms/CTABanner',
  component: CTABanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main headline text',
    },
    description: {
      control: 'text',
      description: 'Supporting description text',
    },
    variant: {
      control: 'select',
      options: ['centered', 'split'],
      description: 'Layout variant',
    },
    background: {
      control: 'select',
      options: ['primary', 'secondary', 'gradient', 'light', 'dark'],
      description: 'Background color variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
  },
}

export default meta
type Story = StoryObj<typeof CTABanner>

export const Default: Story = {
  args: {
    title: 'Ready to get started?',
    description: 'Join thousands of users already using our platform',
    primaryCTA: {
      label: 'Get Started Free',
      onClick: () => alert('Primary CTA clicked'),
    },
  },
}

export const WithSecondaryCTA: Story = {
  args: {
    title: 'Transform your workflow today',
    description: 'Start your free trial and see the difference in minutes',
    primaryCTA: {
      label: 'Start Free Trial',
      onClick: () => alert('Trial started'),
    },
    secondaryCTA: {
      label: 'Watch Demo',
      onClick: () => alert('Demo clicked'),
    },
  },
}

export const WithBadge: Story = {
  args: {
    title: 'Limited Time Offer',
    description: 'Get 50% off your first year with our annual plan',
    badge: {
      text: '🎉 Special Deal',
      variant: 'warning',
    },
    primaryCTA: {
      label: 'Claim Offer',
      onClick: () => alert('Offer claimed'),
    },
  },
}

export const SplitLayout: Story = {
  args: {
    title: 'Join our community',
    description:
      'Connect with thousands of developers building amazing products',
    variant: 'split',
    primaryCTA: {
      label: 'Sign Up',
      onClick: () => alert('Sign up clicked'),
    },
    secondaryCTA: {
      label: 'Learn More',
      onClick: () => alert('Learn more clicked'),
    },
  },
}

export const GradientBackground: Story = {
  args: {
    title: 'Experience the future',
    description: 'Revolutionary platform for modern teams',
    background: 'gradient',
    badge: {
      text: 'New Release',
      variant: 'info',
    },
    primaryCTA: {
      label: 'Get Early Access',
      onClick: () => alert('Early access requested'),
    },
    secondaryCTA: {
      label: 'View Features',
      onClick: () => alert('Features viewed'),
    },
  },
}

export const LightBackground: Story = {
  args: {
    title: 'Build something amazing',
    description:
      'Start creating with our powerful tools and intuitive interface',
    background: 'light',
    primaryCTA: {
      label: 'Start Building',
      onClick: () => alert('Building started'),
    },
    secondaryCTA: {
      label: 'Explore Docs',
      onClick: () => alert('Docs opened'),
    },
  },
}

export const DarkBackground: Story = {
  args: {
    title: 'Enterprise solutions',
    description: 'Scalable infrastructure for your growing business',
    background: 'dark',
    badge: {
      text: 'Enterprise',
      variant: 'primary',
    },
    primaryCTA: {
      label: 'Contact Sales',
      onClick: () => alert('Sales contacted'),
    },
    secondaryCTA: {
      label: 'View Pricing',
      onClick: () => alert('Pricing viewed'),
    },
  },
}

export const SmallSize: Story = {
  args: {
    title: 'Quick CTA',
    description: 'Compact banner for tight spaces',
    size: 'sm',
    primaryCTA: {
      label: 'Action',
      onClick: () => alert('Action clicked'),
    },
  },
}

export const LargeSize: Story = {
  args: {
    title: 'Make an impact',
    description: 'Large, prominent call-to-action for maximum visibility',
    size: 'lg',
    badge: {
      text: 'Featured',
      variant: 'success',
    },
    primaryCTA: {
      label: 'Get Started Now',
      onClick: () => alert('Started'),
    },
    secondaryCTA: {
      label: 'Learn How',
      onClick: () => alert('Learn more'),
    },
  },
}

export const SecondaryBackground: Story = {
  args: {
    title: 'Stay informed',
    description: 'Subscribe to our newsletter for updates and insights',
    background: 'secondary',
    primaryCTA: {
      label: 'Subscribe',
      onClick: () => alert('Subscribed'),
    },
  },
}

export const MinimalCentered: Story = {
  args: {
    title: 'Simple and focused',
    variant: 'centered',
    primaryCTA: {
      label: 'Take Action',
      onClick: () => alert('Action taken'),
    },
  },
}

export const FullFeaturedSplit: Story = {
  args: {
    title: 'Everything you need in one place',
    description:
      'Powerful features, intuitive design, and world-class support all included',
    variant: 'split',
    background: 'gradient',
    size: 'lg',
    badge: {
      text: '✨ All-in-One Solution',
      variant: 'info',
    },
    primaryCTA: {
      label: 'Try It Free',
      onClick: () => alert('Trial started'),
    },
    secondaryCTA: {
      label: 'See Demo',
      onClick: () => alert('Demo requested'),
    },
  },
}
