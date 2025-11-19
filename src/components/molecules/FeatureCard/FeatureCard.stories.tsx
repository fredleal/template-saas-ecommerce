import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FeatureCard } from './FeatureCard'

const meta = {
  title: 'Design System/Molecules/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card de funcionalidade que combina um ícone, título e descrição. Ideal para páginas de landing, showcase de features e seções informativas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: [
        'CartIcon',
        'HeartIcon',
        'SearchIcon',
        'StarIcon',
        'CheckIcon',
        'PlusIcon',
        'UserIcon',
        'FilterIcon',
      ],
      description: 'Ícone da feature',
    },
    title: {
      control: 'text',
      description: 'Título da feature',
    },
    description: {
      control: 'text',
      description: 'Descrição da feature',
    },
    iconSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do ícone',
    },
    iconColor: {
      control: 'select',
      options: ['primary', 'secondary', 'current'],
      description: 'Cor do ícone',
    },
  },
} satisfies Meta<typeof FeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: 'CheckIcon',
    title: 'Easy to Use',
    description:
      'Our platform is designed with simplicity in mind, making it easy for anyone to get started quickly.',
  },
}

export const WithHeartIcon: Story = {
  args: {
    icon: 'HeartIcon',
    title: 'Built with Love',
    description:
      'Every feature is carefully crafted to provide the best user experience possible.',
  },
}

export const WithStarIcon: Story = {
  args: {
    icon: 'StarIcon',
    title: 'Premium Quality',
    description:
      'High-quality components and attention to detail in every aspect of the design.',
  },
}

export const ThreeFeatures: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon="CheckIcon"
        title="Easy to Use"
        description="Simple and intuitive interface that anyone can master in minutes."
      />
      <FeatureCard
        icon="HeartIcon"
        title="Built with Love"
        description="Carefully crafted with attention to every detail for the best experience."
      />
      <FeatureCard
        icon="StarIcon"
        title="Premium Quality"
        description="High-quality components built with modern best practices."
      />
    </div>
  ),
}

export const LandingPageSection: Story = {
  render: () => (
    <section className="py-16 bg-gray-50 rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg">
            Discover what makes our platform special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="CheckIcon"
            title="Easy Integration"
            description="Get started in minutes with our simple setup process and comprehensive documentation."
          />
          <FeatureCard
            icon="HeartIcon"
            title="Customer Support"
            description="24/7 dedicated support team ready to help you succeed with your projects."
          />
          <FeatureCard
            icon="StarIcon"
            title="Premium Features"
            description="Access to advanced features and tools that help you build better products."
          />
        </div>
      </div>
    </section>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <FeatureCard
        icon="CartIcon"
        title="Shopping"
        description="Advanced cart management with smart recommendations."
      />
      <FeatureCard
        icon="SearchIcon"
        title="Smart Search"
        description="Powerful search with filters and instant results."
      />
      <FeatureCard
        icon="UserIcon"
        title="User Profiles"
        description="Customizable profiles with preferences and history."
      />
      <FeatureCard
        icon="FilterIcon"
        title="Filtering"
        description="Advanced filtering options for precise results."
      />
    </div>
  ),
}

export const WithBorder: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon="CheckIcon"
        title="Reliable"
        description="99.9% uptime guarantee with robust infrastructure."
        className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      />
      <FeatureCard
        icon="HeartIcon"
        title="Loved by Users"
        description="Join thousands of satisfied customers worldwide."
        className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      />
      <FeatureCard
        icon="StarIcon"
        title="Award Winning"
        description="Recognized for excellence in design and innovation."
        className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      />
    </div>
  ),
}

export const DifferentIconSizes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <p className="text-sm text-center text-gray-600 mb-4">Small Icon</p>
        <FeatureCard
          icon="CheckIcon"
          title="Compact"
          description="Perfect for dense layouts with limited space."
          iconSize="sm"
        />
      </div>
      <div>
        <p className="text-sm text-center text-gray-600 mb-4">Medium Icon</p>
        <FeatureCard
          icon="HeartIcon"
          title="Balanced"
          description="Good balance between size and visual impact."
          iconSize="md"
        />
      </div>
      <div>
        <p className="text-sm text-center text-gray-600 mb-4">Large Icon</p>
        <FeatureCard
          icon="StarIcon"
          title="Prominent"
          description="Makes a strong visual statement in the layout."
          iconSize="lg"
        />
      </div>
    </div>
  ),
}

export const ColoredIcons: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon="CheckIcon"
        title="Primary Color"
        description="Using the primary brand color for consistency."
        iconColor="primary"
      />
      <FeatureCard
        icon="HeartIcon"
        title="Secondary Color"
        description="Subtle variation for hierarchy and balance."
        iconColor="secondary"
      />
      <FeatureCard
        icon="StarIcon"
        title="Current Color"
        description="Inherits color from parent context."
        iconColor="current"
      />
    </div>
  ),
}
