import type { Meta, StoryObj } from '@storybook/react'
import { RadioOption } from './RadioOption'
import { fn } from '@storybook/test'

const meta = {
  title: 'Molecules/RadioOption',
  component: RadioOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof RadioOption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'option-1',
    name: 'options',
    value: 'option1',
    label: 'Option 1',
  },
}

export const Checked: Story = {
  args: {
    id: 'option-2',
    name: 'options',
    value: 'option2',
    label: 'Selected Option',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'option-3',
    name: 'options',
    value: 'option3',
    label: 'Disabled Option',
    disabled: true,
  },
}

export const Secondary: Story = {
  args: {
    id: 'option-4',
    name: 'options',
    value: 'option4',
    label: 'Secondary Variant',
    variant: 'secondary',
    checked: true,
  },
}

export const WithImage: Story = {
  args: {
    id: 'option-5',
    name: 'options',
    value: 'option5',
    label: 'With Image',
    imageSrc: 'https://via.placeholder.com/80',
    imageAlt: 'Placeholder',
  },
}

export const ImageChecked: Story = {
  args: {
    id: 'option-6',
    name: 'options',
    value: 'option6',
    label: 'Premium Plan',
    imageSrc: 'https://via.placeholder.com/80',
    checked: true,
    variant: 'primary',
  },
}

export const RadioGroup: Story = {
  render: () => (
    <div className="flex gap-3">
      <RadioOption id="size-s" name="size" value="S" label="Small" />
      <RadioOption id="size-m" name="size" value="M" label="Medium" checked />
      <RadioOption id="size-l" name="size" value="L" label="Large" />
    </div>
  ),
}

export const ProductSizeSelector: Story = {
  render: () => (
    <div className="space-y-2">
      <h3 className="font-semibold text-sm mb-2">Select Size</h3>
      <div className="flex gap-2">
        <RadioOption id="size-xs" name="product-size" value="XS" label="XS" />
        <RadioOption id="size-s" name="product-size" value="S" label="S" />
        <RadioOption
          id="size-m"
          name="product-size"
          value="M"
          label="M"
          checked
        />
        <RadioOption id="size-l" name="product-size" value="L" label="L" />
        <RadioOption id="size-xl" name="product-size" value="XL" label="XL" />
      </div>
    </div>
  ),
}

export const PlanSelector: Story = {
  render: () => (
    <div className="space-y-3 w-96">
      <h3 className="font-semibold mb-2">Choose Your Plan</h3>
      <RadioOption
        id="plan-basic"
        name="plan"
        value="basic"
        label="Basic Plan - $9.99/mo"
      />
      <RadioOption
        id="plan-pro"
        name="plan"
        value="pro"
        label="Pro Plan - $19.99/mo"
        checked
        variant="primary"
      />
      <RadioOption
        id="plan-enterprise"
        name="plan"
        value="enterprise"
        label="Enterprise - Contact Us"
        variant="secondary"
      />
    </div>
  ),
}
