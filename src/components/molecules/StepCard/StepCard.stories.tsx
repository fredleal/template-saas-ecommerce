import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StepCard } from './StepCard'

const meta: Meta<typeof StepCard> = {
  title: 'Design System/Molecules/StepCard',
  component: StepCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    step: {
      control: 'number',
      description: 'Step number to display',
    },
    title: {
      control: 'text',
      description: 'Title of the step',
    },
    description: {
      control: 'text',
      description: 'Description of what happens in this step',
    },
    icon: {
      control: 'select',
      options: ['CheckIcon', 'HeartIcon', 'StarIcon', 'CartIcon', 'SearchIcon'],
      description: 'Optional icon to display instead of step number',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout orientation',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success'],
      description: 'Color variant for step indicator',
    },
  },
}

export default meta
type Story = StoryObj<typeof StepCard>

export const Default: Story = {
  args: {
    step: 1,
    title: 'Sign Up',
    description:
      'Create your free account in seconds with just an email and password',
  },
}

export const WithIcon: Story = {
  args: {
    step: 1,
    title: 'Complete',
    description: 'Your setup is complete and ready to use',
    icon: 'CheckIcon',
  },
}

export const SecondaryVariant: Story = {
  args: {
    step: 2,
    title: 'Configure Settings',
    description: 'Customize your preferences and notification settings',
    variant: 'secondary',
  },
}

export const SuccessVariant: Story = {
  args: {
    step: 3,
    title: 'Launch',
    description: 'Your project is ready to go live',
    variant: 'success',
  },
}

export const SmallSize: Story = {
  args: {
    step: 1,
    title: 'Quick Step',
    description: 'Compact step card for tight spaces',
    size: 'sm',
  },
}

export const LargeSize: Story = {
  args: {
    step: 1,
    title: 'Prominent Step',
    description: 'Large step card for hero sections and emphasis',
    size: 'lg',
  },
}

export const HorizontalLayout: Story = {
  args: {
    step: 1,
    title: 'Horizontal Step',
    description:
      'Step card with horizontal layout for side-by-side content display',
    orientation: 'horizontal',
  },
}

export const HorizontalWithIcon: Story = {
  args: {
    step: 1,
    title: 'Success Step',
    description: 'Horizontal layout with icon instead of number',
    icon: 'CheckIcon',
    orientation: 'horizontal',
    variant: 'success',
  },
}

export const ThreeStepProcess: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-4xl p-8">
      <h2 className="text-2xl font-bold text-center mb-4">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StepCard
          step={1}
          title="Sign Up"
          description="Create your free account in seconds with just an email"
        />
        <StepCard
          step={2}
          title="Configure"
          description="Set up your preferences and customize your workspace"
        />
        <StepCard
          step={3}
          title="Launch"
          description="Start using all features immediately with no setup time"
        />
      </div>
    </div>
  ),
}

export const VerticalTimeline: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-2xl p-8">
      <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
      <StepCard
        step={1}
        title="Discovery Phase"
        description="Understanding your needs and defining project requirements"
        orientation="horizontal"
        variant="success"
        icon="CheckIcon"
      />
      <StepCard
        step={2}
        title="Design & Planning"
        description="Creating wireframes, mockups, and technical architecture"
        orientation="horizontal"
        variant="success"
        icon="CheckIcon"
      />
      <StepCard
        step={3}
        title="Development"
        description="Building your application with cutting-edge technologies"
        orientation="horizontal"
        variant="primary"
      />
      <StepCard
        step={4}
        title="Testing & Launch"
        description="Quality assurance and deployment to production"
        orientation="horizontal"
        variant="secondary"
      />
    </div>
  ),
}

export const LargeVerticalSteps: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl p-8">
      <StepCard
        step={1}
        title="Choose Plan"
        description="Select the perfect plan for your needs"
        size="lg"
        variant="primary"
      />
      <StepCard
        step={2}
        title="Add Details"
        description="Enter your information and preferences"
        size="lg"
        variant="primary"
      />
      <StepCard
        step={3}
        title="Get Started"
        description="Launch your project and start creating"
        size="lg"
        variant="success"
        icon="CheckIcon"
      />
    </div>
  ),
}
