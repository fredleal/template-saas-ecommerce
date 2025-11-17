'use client'
import {
  Button,
  Text,
  Heading,
  Price,
  Badge,
  Icon,
  Checkbox,
  Input,
} from '@/components/atoms'
import { Card, ProductCard, Rating } from '@/components/molecules'
import { Header, Footer } from '@/components/organisms'

export default function Home() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '#components' },
    { label: 'Documentation', href: '#docs' },
  ]

  return (
    <>
      <Header logoText="Design System" links={navLinks} currentPath="/" />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="success" size="sm" className="mb-4">
                  v1.3 Production Ready
                </Badge>
                <Heading level={1} className="mb-4">
                  Design System Showcase
                </Heading>
                <Text size="xl" color="secondary" className="mb-6 max-w-2xl">
                  Production-ready component library built with Atomic Design,
                  TypeScript, and comprehensive test coverage.
                </Text>
                <div className="flex gap-4">
                  <Button variant="primary" size="lg">
                    <Icon name="CheckIcon" size="sm" decorative />
                    View Components
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="SearchIcon" size="sm" decorative />
                    Documentation
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <Text size="3xl" weight="bold" className="text-blue-600">
                    9
                  </Text>
                  <Text size="sm" color="secondary">
                    Components
                  </Text>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <Text size="3xl" weight="bold" className="text-green-600">
                    100%
                  </Text>
                  <Text size="sm" color="secondary">
                    Coverage
                  </Text>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <Text size="3xl" weight="bold" className="text-purple-600">
                    6
                  </Text>
                  <Text size="sm" color="secondary">
                    Atoms
                  </Text>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <Text size="3xl" weight="bold" className="text-amber-600">
                    3
                  </Text>
                  <Text size="sm" color="secondary">
                    Molecules
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Metrics Dashboard */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card variant="elevated" className="text-center">
              <Icon
                name="CheckIcon"
                size="xl"
                color="success"
                className="mx-auto mb-3"
              />
              <Text weight="semibold" size="lg" className="mb-1">
                Testing
              </Text>
              <Text size="sm" color="secondary">
                Vitest + Testing Library
              </Text>
              <Badge variant="success" size="sm" className="mt-2">
                Configured
              </Badge>
            </Card>

            <Card variant="elevated" className="text-center">
              <Icon
                name="StarIcon"
                size="xl"
                color="warning"
                className="mx-auto mb-3"
              />
              <Text weight="semibold" size="lg" className="mb-1">
                Accessibility
              </Text>
              <Text size="sm" color="secondary">
                WCAG AA Compliant
              </Text>
              <Badge variant="success" size="sm" className="mt-2">
                jest-axe
              </Badge>
            </Card>

            <Card variant="elevated" className="text-center">
              <Icon
                name="FilterIcon"
                size="xl"
                color="primary"
                className="mx-auto mb-3"
              />
              <Text weight="semibold" size="lg" className="mb-1">
                Type Safety
              </Text>
              <Text size="sm" color="secondary">
                TypeScript Strict
              </Text>
              <Badge variant="info" size="sm" className="mt-2">
                100%
              </Badge>
            </Card>

            <Card variant="elevated" className="text-center">
              <Icon
                name="PlusIcon"
                size="xl"
                color="success"
                className="mx-auto mb-3"
              />
              <Text weight="semibold" size="lg" className="mb-1">
                Documentation
              </Text>
              <Text size="sm" color="secondary">
                Multi-layer Docs
              </Text>
              <Badge variant="default" size="sm" className="mt-2">
                Obsidian
              </Badge>
            </Card>
          </div>

          {/* Tech Stack Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-12">
            <div className="flex items-center justify-between">
              <div>
                <Text size="2xl" weight="bold" className="text-white mb-2">
                  Modern Tech Stack
                </Text>
                <Text size="lg" className="text-blue-100">
                  Next.js 15 · TypeScript 5 · Tailwind CSS · Vitest · Testing
                  Library
                </Text>
              </div>
              <div className="flex gap-3">
                <Badge
                  variant="default"
                  size="sm"
                  className="bg-white/20 text-white border-white/30"
                >
                  ESM Native
                </Badge>
                <Badge
                  variant="default"
                  size="sm"
                  className="bg-white/20 text-white border-white/30"
                >
                  Atomic Design
                </Badge>
                <Badge
                  variant="default"
                  size="sm"
                  className="bg-white/20 text-white border-white/30"
                >
                  Workflow v1.4
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Atomic Design Hierarchy */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Text size="3xl" weight="bold" className="mb-8 text-center">
            Component Architecture
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Atoms */}
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Text size="xl" weight="bold" className="text-blue-600">
                    A
                  </Text>
                </div>
                <div>
                  <Text weight="bold" size="lg">
                    Atoms
                  </Text>
                  <Text size="sm" color="secondary">
                    6 components
                  </Text>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Text size="sm">Badge, Button, Checkbox</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Text size="sm">Heading, Icon, Input</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Text size="sm">Price, Text</Text>
                </div>
                <Badge variant="success" size="sm" className="mt-3">
                  100% Complete
                </Badge>
              </div>
            </div>

            {/* Molecules */}
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Text size="xl" weight="bold" className="text-green-600">
                    M
                  </Text>
                </div>
                <div>
                  <Text weight="bold" size="lg">
                    Molecules
                  </Text>
                  <Text size="sm" color="secondary">
                    3 components
                  </Text>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Text size="sm">Card</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Text size="sm">Rating</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Text size="sm">ProductCard</Text>
                </div>
                <Badge variant="success" size="sm" className="mt-3">
                  Production Ready
                </Badge>
              </div>
            </div>

            {/* Organisms */}
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Text size="xl" weight="bold" className="text-purple-600">
                    O
                  </Text>
                </div>
                <div>
                  <Text weight="bold" size="lg">
                    Organisms
                  </Text>
                  <Text size="sm" color="secondary">
                    Coming Q1 2025
                  </Text>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                  <Text size="sm" color="muted">
                    Header
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                  <Text size="sm" color="muted">
                    ProductGrid
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                  <Text size="sm" color="muted">
                    AuthForm
                  </Text>
                </div>
                <Badge variant="warning" size="sm" className="mt-3">
                  Roadmap
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Live Component Showcase */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Heading level={2} className="mb-8">
            Component Showcase
          </Heading>

          {/* E-commerce Product Cards */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Text size="2xl" weight="semibold" className="mb-2">
                  E-commerce Components
                </Text>
                <Text size="sm" color="secondary">
                  Production-ready product cards with ratings and actions
                </Text>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="FilterIcon" size="xs" decorative />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="SearchIcon" size="xs" decorative />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                className="hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Badge variant="success" size="sm">
                    Verified Seller
                  </Badge>
                </div>
                <Text weight="bold" size="lg" className="mb-2">
                  Premium Smartphone
                </Text>
                <Rating
                  value={4.8}
                  showValue
                  showCount
                  count={1247}
                  size="sm"
                  className="mb-3"
                />
                <div className="flex gap-2 mb-4">
                  <Badge variant="info" size="sm">
                    5G
                  </Badge>
                  <Badge variant="default" size="sm">
                    256GB
                  </Badge>
                  <Badge variant="default" size="sm">
                    AI Camera
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Price value={899.99} size="xl" />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon
                        name="HeartIcon"
                        size="sm"
                        color="error"
                        decorative
                      />
                    </Button>
                    <Button variant="primary" size="sm">
                      <Icon name="CartIcon" size="xs" decorative />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>

              <Card
                variant="elevated"
                className="hover:shadow-xl transition-shadow"
              >
                <Badge variant="warning" size="sm" className="mb-3">
                  Limited Offer
                </Badge>
                <Text weight="bold" size="lg" className="mb-2">
                  Wireless Headphones
                </Text>
                <Rating
                  value={4.6}
                  showValue
                  showCount
                  count={892}
                  size="sm"
                  className="mb-3"
                />
                <div className="flex gap-2 mb-4">
                  <Badge variant="info" size="sm">
                    ANC
                  </Badge>
                  <Badge variant="default" size="sm">
                    30h Battery
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Price
                      value={599.99}
                      size="sm"
                      isDiscounted
                      className="mb-1"
                    />
                    <Price value={449.99} size="xl" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="HeartIcon" size="sm" decorative />
                    </Button>
                    <Button variant="primary" size="sm">
                      <Icon name="CartIcon" size="xs" decorative />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>

              <Card
                variant="elevated"
                className="hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Badge variant="success" size="sm">
                    Best Seller
                  </Badge>
                </div>
                <Text weight="bold" size="lg" className="mb-2">
                  Smart Watch Pro
                </Text>
                <Rating
                  value={4.9}
                  showValue
                  showCount
                  count={2134}
                  size="sm"
                  className="mb-3"
                />
                <div className="flex gap-2 mb-4">
                  <Badge variant="info" size="sm">
                    GPS
                  </Badge>
                  <Badge variant="default" size="sm">
                    Health
                  </Badge>
                  <Badge variant="default" size="sm">
                    Fitness
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Price value={349.99} size="xl" />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="HeartIcon" size="sm" decorative />
                    </Button>
                    <Button variant="primary" size="sm">
                      <Icon name="CartIcon" size="xs" decorative />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Icon System Showcase */}
          <div className="mb-12">
            <Text size="2xl" weight="semibold" className="mb-6">
              Complete Icon System (9 Icons)
            </Text>
            <div className="bg-white rounded-xl p-8 border">
              <div className="grid grid-cols-3 md:grid-cols-9 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon name="CartIcon" size="lg" color="primary" />
                  </div>
                  <Text size="xs" className="text-center">
                    Cart
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-red-50 flex items-center justify-center">
                    <Icon name="HeartIcon" size="lg" color="error" />
                  </div>
                  <Text size="xs" className="text-center">
                    Heart
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Icon name="SearchIcon" size="lg" color="secondary" />
                  </div>
                  <Text size="xs" className="text-center">
                    Search
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon name="MenuIcon" size="lg" color="primary" />
                  </div>
                  <Text size="xs" className="text-center">
                    Menu
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-green-50 flex items-center justify-center">
                    <Icon name="PlusIcon" size="lg" color="success" />
                  </div>
                  <Text size="xs" className="text-center">
                    Plus
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-yellow-50 flex items-center justify-center">
                    <Icon name="StarIcon" size="lg" color="warning" />
                  </div>
                  <Text size="xs" className="text-center">
                    Star
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon name="UserIcon" size="lg" color="primary" />
                  </div>
                  <Text size="xs" className="text-center">
                    User
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Icon name="FilterIcon" size="lg" color="secondary" />
                  </div>
                  <Text size="xs" className="text-center">
                    Filter
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-lg bg-green-50 flex items-center justify-center">
                    <Icon name="CheckIcon" size="lg" color="success" />
                  </div>
                  <Text size="xs" className="text-center">
                    Check
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Button Variants */}
          <div>
            <Text size="2xl" weight="semibold" className="mb-6">
              Button System with Icon Support
            </Text>
            <div className="bg-white rounded-xl p-8 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Text size="sm" color="secondary" className="mb-3">
                    Primary Actions
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary" size="lg">
                      <Icon name="CheckIcon" size="sm" decorative />
                      Confirm Order
                    </Button>
                    <Button variant="primary" size="md">
                      <Icon name="CartIcon" size="sm" decorative />
                      Add to Cart
                    </Button>
                    <Button variant="primary" size="sm">
                      <Icon name="PlusIcon" size="xs" decorative />
                      Create
                    </Button>
                  </div>
                </div>
                <div>
                  <Text size="sm" color="secondary" className="mb-3">
                    Secondary Actions
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="md">
                      <Icon name="FilterIcon" size="sm" decorative />
                      Filter
                    </Button>
                    <Button variant="outline" size="md">
                      <Icon name="SearchIcon" size="sm" decorative />
                      Search
                    </Button>
                    <Button variant="ghost" size="md">
                      <Icon name="UserIcon" size="sm" decorative />
                      Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Component Showcase */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Text size="2xl" weight="semibold" className="mb-2">
                  Checkbox Atom
                </Text>
                <Text size="sm" color="secondary">
                  Form input component with controlled and uncontrolled modes
                </Text>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic States */}
                <div>
                  <Text weight="semibold" className="mb-4">
                    Basic States
                  </Text>
                  <div className="space-y-3">
                    <Checkbox label="Default checkbox" />
                    <Checkbox label="Checked checkbox" defaultChecked />
                    <Checkbox label="Indeterminate state" indeterminate />
                    <Checkbox label="Disabled checkbox" disabled />
                  </div>
                </div>

                {/* Size Variants */}
                <div>
                  <Text weight="semibold" className="mb-4">
                    Size Variants
                  </Text>
                  <div className="space-y-3">
                    <Checkbox label="Small checkbox" size="sm" />
                    <Checkbox label="Medium checkbox (default)" size="md" />
                    <Checkbox label="Large checkbox" size="lg" />
                  </div>
                </div>

                {/* Label Positions */}
                <div>
                  <Text weight="semibold" className="mb-4">
                    Label Positions
                  </Text>
                  <div className="space-y-3">
                    <Checkbox
                      label="Label on right (default)"
                      labelPosition="right"
                    />
                    <Checkbox label="Label on left" labelPosition="left" />
                    <Checkbox label="No label example" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Input Component Showcase */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Text size="2xl" weight="semibold" className="mb-2">
                  Input Atom
                </Text>
                <Text size="sm" color="secondary">
                  Form input field component for text entry with validation
                  states
                </Text>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Input Types */}
                <div>
                  <Text weight="semibold" className="mb-4">
                    Input Types
                  </Text>
                  <div className="space-y-3">
                    <Input type="text" placeholder="Text input" />
                    <Input type="email" placeholder="Email input" />
                    <Input type="password" placeholder="Password input" />
                    <Input type="number" placeholder="Number input" />
                  </div>
                </div>

                {/* Size Variants */}
                <div>
                  <Text weight="semibold" className="mb-4">
                    Size Variants
                  </Text>
                  <div className="space-y-3">
                    <Input size="sm" placeholder="Small input" />
                    <Input size="md" placeholder="Medium input (default)" />
                    <Input size="lg" placeholder="Large input" />
                  </div>
                </div>

                {/* States */}
                <div>
                  <Text weight="semibold" className="mb-4">
                    States
                  </Text>
                  <div className="space-y-3">
                    <Input placeholder="Normal input" />
                    <Input placeholder="Disabled input" disabled />
                    <Input
                      placeholder="Read-only input"
                      readOnly
                      defaultValue="Read only"
                    />
                    <Input placeholder="Error state" error />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Example with ProductCard */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Heading level={2} className="mb-4">
            Real-World Example: E-commerce Grid
          </Heading>
          <Text size="sm" color="secondary" className="mb-8">
            ProductCard molecule in action - combining atoms for
            production-ready UI
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductCard
              title="Premium Smartphone"
              price={899.99}
              badge="Verified"
              badgeVariant="success"
              description="5G connectivity, AI camera, 256GB storage"
            />
            <ProductCard
              title="Wireless Earbuds"
              price={179.99}
              originalPrice={229.99}
              badge="Limited Offer"
              badgeVariant="warning"
              description="ANC, 30h battery, premium sound quality"
            />
            <ProductCard
              title="Smart Watch"
              price={349.99}
              badge="Best Seller"
              badgeVariant="success"
              description="GPS, health monitoring, fitness tracking"
            />
            <ProductCard
              title="Tablet Pro"
              price={649.99}
              badge="New"
              badgeVariant="info"
              description="12.9 inch display, M2 chip, all-day battery"
            />
          </div>
        </section>

        {/* Roadmap */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Heading level={2} className="mb-4">
            Roadmap Q1 2025
          </Heading>
          <Text size="sm" color="secondary" className="mb-8">
            Next components planned for development
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="outlined">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Text size="sm" weight="bold" className="text-blue-600">
                    A
                  </Text>
                </div>
                <Text weight="semibold">Next Atoms</Text>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">Select</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">Textarea</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">Toggle</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">Radio</Text>
                </div>
              </div>
            </Card>

            <Card variant="outlined">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Text size="sm" weight="bold" className="text-green-600">
                    M
                  </Text>
                </div>
                <Text weight="semibold">Next Molecules</Text>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="success" />
                  <Text size="sm">FormField</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="success" />
                  <Text size="sm">SearchBar</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="success" />
                  <Text size="sm">Dropdown</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="success" />
                  <Text size="sm">Pagination</Text>
                </div>
              </div>
            </Card>

            <Card variant="outlined">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Text size="sm" weight="bold" className="text-purple-600">
                    O
                  </Text>
                </div>
                <Text weight="semibold">Next Organisms</Text>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">Header</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">ProductGrid</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="PlusIcon" size="xs" color="primary" />
                  <Text size="sm">AuthForm</Text>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer Component Showcase */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Text size="2xl" weight="semibold" className="mb-6">
            Footer Organism
          </Text>
          <Footer
            companyName="Design System"
            companyDescription="Modern, TypeScript-first design system built with Next.js 15, Tailwind CSS, and atomic design principles."
            sections={[
              {
                title: 'Product',
                links: [
                  { label: 'Features', href: '#features' },
                  { label: 'Components', href: '#components' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'Documentation', href: '#docs' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About', href: '#about' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Careers', href: '#careers' },
                  { label: 'Contact', href: '#contact' },
                ],
              },
              {
                title: 'Resources',
                links: [
                  { label: 'GitHub', href: 'https://github.com' },
                  { label: 'Docs', href: '#docs' },
                  { label: 'Community', href: '#community' },
                  { label: 'Support', href: '#support' },
                ],
              },
            ]}
            socialLinks={[
              {
                icon: 'CheckIcon',
                href: 'https://github.com',
                label: 'GitHub',
              },
              {
                icon: 'StarIcon',
                href: 'https://twitter.com',
                label: 'Twitter',
              },
              {
                icon: 'HeartIcon',
                href: 'https://discord.com',
                label: 'Discord',
              },
            ]}
            copyrightYear={2025}
            legalLinks={[
              { label: 'Privacy Policy', href: '#privacy' },
              { label: 'Terms of Service', href: '#terms' },
              { label: 'Cookie Policy', href: '#cookies' },
            ]}
          />
        </section>

        {/* Site Footer */}
        <Footer
          companyName="Design System Template"
          sections={[
            {
              title: 'Tech Stack',
              links: [
                { label: 'Next.js 15', href: '#' },
                { label: 'TypeScript 5', href: '#' },
                { label: 'Tailwind CSS', href: '#' },
                { label: 'Vitest', href: '#' },
              ],
            },
            {
              title: 'Development',
              links: [
                { label: 'Component Workflow', href: '#' },
                { label: 'Atomic Design', href: '#' },
                { label: 'GitHub Projects', href: '#' },
                { label: 'Obsidian Docs', href: '#' },
              ],
            },
            {
              title: 'Quality',
              links: [
                { label: '100% Coverage', href: '#' },
                { label: 'WCAG AA', href: '#' },
                { label: 'TypeScript Strict', href: '#' },
                { label: 'Zero Errors', href: '#' },
              ],
            },
          ]}
          copyrightYear={2025}
          legalLinks={[
            { label: 'Privacy', href: '#privacy' },
            { label: 'Terms', href: '#terms' },
          ]}
        />
      </main>
    </>
  )
}
