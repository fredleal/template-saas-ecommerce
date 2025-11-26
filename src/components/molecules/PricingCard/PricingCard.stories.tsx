import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PricingCard } from './PricingCard'

const meta: Meta<typeof PricingCard> = {
  title: 'Design System/Molecules/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the pricing plan',
    },
    price: {
      control: 'text',
      description: 'Price value - can be string or number',
    },
    currency: {
      control: 'text',
      description: 'Currency symbol',
    },
    period: {
      control: 'text',
      description: 'Billing period',
    },
    description: {
      control: 'text',
      description: 'Short description of the plan',
    },
    popular: {
      control: 'boolean',
      description: 'Mark as popular/recommended',
    },
  },
}

export default meta
type Story = StoryObj<typeof PricingCard>

const mockFeatures = [
  'Up to 3 pages',
  'Basic templates',
  'Mobile responsive',
  'Email support',
]

const proFeatures = [
  'Up to 10 pages',
  'Premium templates',
  'Mobile responsive',
  'Priority support',
  'Custom domain',
  'Analytics dashboard',
]

const enterpriseFeatures = [
  'Unlimited pages',
  'Custom design',
  'Mobile responsive',
  '24/7 dedicated support',
  'Custom domain',
  'Advanced analytics',
  'API access',
  'White-label solution',
]

export const FreePlan: Story = {
  args: {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: mockFeatures,
    primaryCTA: {
      label: 'Get Started',
      onClick: () => alert('Free plan selected'),
    },
  },
}

export const ProPlan: Story = {
  args: {
    name: 'Pro',
    price: 29,
    description: 'For professionals and growing businesses',
    features: proFeatures,
    popular: true,
    primaryCTA: {
      label: 'Get Started',
      onClick: () => alert('Pro plan selected'),
    },
  },
}

export const ProPlanWithSecondary: Story = {
  args: {
    name: 'Pro',
    price: 29,
    description: 'For professionals and growing businesses',
    features: proFeatures,
    popular: true,
    primaryCTA: {
      label: 'Start Free Trial',
      onClick: () => alert('Trial started'),
    },
    secondaryCTA: {
      label: 'Learn More',
      onClick: () => alert('Learn more clicked'),
    },
  },
}

export const EnterprisePlan: Story = {
  args: {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams with custom needs',
    features: enterpriseFeatures,
    primaryCTA: {
      label: 'Contact Sales',
      onClick: () => alert('Contact sales clicked'),
    },
  },
}

export const AnnualPricing: Story = {
  args: {
    name: 'Annual Pro',
    price: 290,
    period: '/year',
    description: 'Save 17% with annual billing',
    features: proFeatures,
    popular: true,
    primaryCTA: {
      label: 'Subscribe Annually',
      onClick: () => alert('Annual subscription selected'),
    },
  },
}

export const EuroCurrency: Story = {
  args: {
    name: 'Pro Europe',
    price: 25,
    currency: '€',
    description: 'For European customers',
    features: proFeatures,
    primaryCTA: {
      label: 'Get Started',
      onClick: () => alert('Euro plan selected'),
    },
  },
}

export const CustomStyling: Story = {
  args: {
    name: 'Premium',
    price: 49,
    description: 'Our most popular plan',
    features: proFeatures,
    popular: true,
    className: 'border-purple-500',
    primaryCTA: {
      label: 'Get Premium',
      onClick: () => alert('Premium selected'),
    },
  },
}

export const EmptyFeatures: Story = {
  args: {
    name: 'Basic',
    price: 10,
    description: 'Minimal plan',
    features: [],
    primaryCTA: {
      label: 'Get Started',
      onClick: () => alert('Basic plan selected'),
    },
  },
}

export const ThreePlanComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl p-8">
      <PricingCard
        name="Free"
        price={0}
        description="Perfect for getting started"
        features={mockFeatures}
        primaryCTA={{
          label: 'Get Started',
          onClick: () => alert('Free plan selected'),
        }}
      />
      <PricingCard
        name="Pro"
        price={29}
        description="For professionals"
        features={proFeatures}
        popular={true}
        primaryCTA={{
          label: 'Get Started',
          onClick: () => alert('Pro plan selected'),
        }}
        secondaryCTA={{
          label: 'Learn More',
          onClick: () => alert('Learn more clicked'),
        }}
      />
      <PricingCard
        name="Enterprise"
        price="Custom"
        description="For large teams"
        features={enterpriseFeatures}
        primaryCTA={{
          label: 'Contact Sales',
          onClick: () => alert('Contact sales clicked'),
        }}
      />
    </div>
  ),
}
