'use client'
import { useState } from 'react'
import {
  Button,
  Text,
  Heading,
  Price,
  Badge,
  Icon,
  Checkbox,
  Input,
  PriceTag,
  QuantitySelector,
  StockBadge,
  DiscountLabel,
} from '@/components/atoms'
import {
  Card,
  ProductCard,
  Rating,
  PostCard,
  TableOfContents,
  CodeBlock,
  Prose,
  FeatureCard,
  TestimonialCard,
  PricingCard,
} from '@/components/molecules'
import {
  Header,
  Footer,
  BlogHeader,
  HeroSection,
  FAQSection,
} from '@/components/organisms'

// Interactive Demo Components
function QuantitySelectorDemo() {
  const [quantity1, setQuantity1] = useState(1)
  const [quantity2, setQuantity2] = useState(5)
  const [quantity3, setQuantity3] = useState(1)

  return (
    <div className="space-y-6">
      <div>
        <Text size="sm" weight="semibold" className="mb-3">
          Controle Básico (min: 1, max: 99)
        </Text>
        <div className="flex items-center gap-4">
          <QuantitySelector value={quantity1} onChange={setQuantity1} />
          <Text size="sm" color="secondary">
            Quantidade: {quantity1}
          </Text>
        </div>
      </div>

      <div>
        <Text size="sm" weight="semibold" className="mb-3">
          Com Limites Customizados (min: 3, max: 10)
        </Text>
        <div className="flex items-center gap-4">
          <QuantitySelector
            value={quantity2}
            onChange={setQuantity2}
            min={3}
            max={10}
          />
          <Text size="sm" color="secondary">
            Quantidade: {quantity2}
          </Text>
        </div>
      </div>

      <div>
        <Text size="sm" weight="semibold" className="mb-3">
          Tamanhos (sm, md, lg)
        </Text>
        <div className="flex flex-wrap gap-3 items-center">
          <QuantitySelector
            value={quantity3}
            onChange={setQuantity3}
            size="sm"
          />
          <QuantitySelector
            value={quantity3}
            onChange={setQuantity3}
            size="md"
          />
          <QuantitySelector
            value={quantity3}
            onChange={setQuantity3}
            size="lg"
          />
        </div>
      </div>

      <div>
        <Text size="sm" weight="semibold" className="mb-3">
          Estado Disabled
        </Text>
        <QuantitySelector value={5} onChange={() => {}} disabled />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <Text size="xs" color="secondary" className="mb-2">
          Exemplo Real: Carrinho de Compras
        </Text>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded" />
            <div>
              <Text size="sm" weight="semibold">
                Product Name
              </Text>
              <Text size="sm" weight="bold" className="text-gray-900">
                $49.99
              </Text>
            </div>
          </div>
          <QuantitySelector value={quantity1} onChange={setQuantity1} />
        </div>
      </div>
    </div>
  )
}

function QuantitySelectorProductDemo() {
  const [quantity, setQuantity] = useState(1)
  const totalPrice = (194.99 * quantity).toFixed(2)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <QuantitySelector value={quantity} onChange={setQuantity} size="md" />
        <Text size="sm" color="secondary">
          Qty: {quantity}
        </Text>
      </div>
      <Button variant="primary" size="md" className="w-full">
        <Icon name="CartIcon" size="sm" decorative />
        Add {quantity} to Cart
      </Button>
      <div className="pt-2 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <Text size="sm" color="secondary">
            Subtotal:
          </Text>
          <Text size="base" weight="bold" className="text-green-600">
            ${totalPrice}
          </Text>
        </div>
      </div>
    </div>
  )
}

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

        {/* New Landing Page Components - PR #68 & #69 */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          {/* HeroSection Showcase */}
          <div className="mb-12">
            <HeroSection
              title="Introducing HeroSection Organism"
              subtitle="Landing Page Component"
              description="A full-screen hero section with gradient overlay, optional background image, and dual CTA buttons. Perfect for landing pages and marketing sites."
              primaryCTA={{
                label: 'View Documentation',
                onClick: () => alert('Documentation coming soon!'),
              }}
              secondaryCTA={{
                label: 'See Examples',
                onClick: () => alert('Examples coming soon!'),
              }}
            />
          </div>

          {/* FeatureCard Showcase */}
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <Badge variant="info" size="sm" className="mb-4">
              PR #68 - FeatureCard Molecule
            </Badge>
            <Text size="2xl" weight="semibold" className="mb-2">
              Feature Cards for Landing Pages
            </Text>
            <Text size="sm" color="secondary" className="mb-8">
              Display key features with icons, titles, and descriptions in a
              grid layout
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon="PlusIcon"
                title="Easy Integration"
                description="Simple to integrate into your existing projects with comprehensive documentation and examples."
                iconSize="lg"
                iconColor="primary"
              />
              <FeatureCard
                icon="CheckIcon"
                title="Fully Tested"
                description="100% test coverage with Vitest and Testing Library. All components thoroughly tested for reliability."
                iconSize="lg"
                iconColor="primary"
              />
              <FeatureCard
                icon="StarIcon"
                title="Production Ready"
                description="Battle-tested components built with TypeScript strict mode and WCAG AA accessibility compliance."
                iconSize="lg"
                iconColor="primary"
              />
            </div>
          </div>

          {/* TestimonialCard Showcase */}
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <Badge variant="info" size="sm" className="mb-4">
              PR #70 - TestimonialCard Molecule
            </Badge>
            <Text size="2xl" weight="semibold" className="mb-2">
              Testimonials from Users
            </Text>
            <Text size="sm" color="secondary" className="mb-8">
              Showcase customer feedback with avatar, quote, author name, and
              title
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                quote="The component library transformed our development workflow. We built features 3x faster!"
                author="Sarah Anderson"
                title="Product Lead"
                company="TechStartup Inc"
              />
              <TestimonialCard
                avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                quote="Exceptional quality and documentation. Exactly what we needed for our design system."
                author="James Mitchell"
                title="Engineering Manager"
                company="Digital Solutions"
              />
              <TestimonialCard
                avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                quote="The accessibility features are outstanding. WCAG AA compliance out of the box!"
                author="Emma Williams"
                title="Accessibility Specialist"
                company="Design Systems Co"
              />
            </div>
          </div>

          {/* FAQSection Showcase */}
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <Badge variant="info" size="sm" className="mb-4">
              PR #71 - FAQSection Organism
            </Badge>
            <FAQSection
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our component library"
              items={[
                {
                  id: '1',
                  question: 'What is atomic design and why should I use it?',
                  answer:
                    'Atomic design is a methodology for creating design systems by breaking down interfaces into fundamental building blocks (atoms), then combining them into larger units (molecules and organisms). This approach promotes consistency, reusability, and maintainability across your projects.',
                },
                {
                  id: '2',
                  question: 'Are these components accessible?',
                  answer:
                    'Yes! All components are built to WCAG AA standards with proper semantic HTML, ARIA labels, keyboard navigation, and tested with jest-axe for automated accessibility compliance checking.',
                },
                {
                  id: '3',
                  question: 'Can I customize the styling?',
                  answer:
                    'Absolutely. Components use Tailwind CSS utility classes and accept custom className props for extending styles. All components are TypeScript-first for maximum customization with type safety.',
                },
                {
                  id: '4',
                  question: 'What testing coverage do you have?',
                  answer:
                    'We maintain 100% test coverage across all components using Vitest and React Testing Library. Each component includes unit tests, integration tests, and accessibility tests.',
                },
                {
                  id: '5',
                  question: 'Is TypeScript required?',
                  answer:
                    'While TypeScript is optional, we recommend it for the best development experience. All components have full TypeScript definitions with strict mode support.',
                },
              ]}
              allowMultipleOpen={true}
            />
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

        {/* NEW: E-commerce Atoms Showcase - PR #77 */}
        <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge variant="success" size="sm" className="mb-3">
                NEW - PR #77
              </Badge>
              <Text size="3xl" weight="bold" className="mb-2">
                E-commerce Atoms (FASE 1 Completa)
              </Text>
              <Text size="sm" color="secondary">
                4 componentes atoms para e-commerce com testes completos
              </Text>
            </div>
            <div className="flex gap-2">
              <Badge variant="info" size="sm">
                80 tests
              </Badge>
              <Badge variant="success" size="sm">
                100% coverage
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PriceTag Component */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  1. PriceTag Atom
                </Text>
                <Text size="sm" color="secondary">
                  Display de preço formatado com múltiplas moedas e variantes
                </Text>
                <Badge variant="info" size="sm" className="mt-2">
                  19 tests
                </Badge>
              </div>

              <div className="space-y-6">
                {/* Currencies */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Moedas Suportadas
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <PriceTag value={99.99} currency="USD" size="md" />
                    <PriceTag value={499.9} currency="BRL" size="md" />
                    <PriceTag value={79.5} currency="EUR" size="md" />
                    <PriceTag value={65.0} currency="GBP" size="md" />
                  </div>
                </div>

                {/* Variants */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Variantes (Normal, Discount, Strikethrough)
                  </Text>
                  <div className="flex flex-wrap gap-3 items-center">
                    <PriceTag value={149.99} variant="normal" size="lg" />
                    <PriceTag value={99.99} variant="discount" size="lg" />
                    <PriceTag
                      value={199.99}
                      variant="strikethrough"
                      size="md"
                    />
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Tamanhos (sm, md, lg)
                  </Text>
                  <div className="flex flex-wrap gap-3 items-center">
                    <PriceTag value={19.99} size="sm" />
                    <PriceTag value={49.99} size="md" />
                    <PriceTag value={99.99} size="lg" />
                  </div>
                </div>

                {/* Real Example */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text size="xs" color="secondary" className="mb-2">
                    Exemplo Real: Produto com Desconto
                  </Text>
                  <div className="flex items-center gap-3">
                    <PriceTag
                      value={199.99}
                      variant="strikethrough"
                      size="md"
                    />
                    <PriceTag value={149.99} variant="discount" size="lg" />
                    <DiscountLabel percentage={25} size="sm" />
                  </div>
                </div>
              </div>
            </Card>

            {/* QuantitySelector Component */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  2. QuantitySelector Atom
                </Text>
                <Text size="sm" color="secondary">
                  Controle interativo de quantidade com validação min/max
                </Text>
                <Badge variant="info" size="sm" className="mt-2">
                  22 tests
                </Badge>
              </div>

              <QuantitySelectorDemo />
            </Card>

            {/* StockBadge Component */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  3. StockBadge Atom
                </Text>
                <Text size="sm" color="secondary">
                  Badge de status de estoque com auto-detection
                </Text>
                <Badge variant="info" size="sm" className="mt-2">
                  18 tests
                </Badge>
              </div>

              <div className="space-y-6">
                {/* Auto Status Detection */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Auto-Detection por Estoque
                  </Text>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <Text size="sm">Stock: 10 items</Text>
                      <StockBadge stock={10} size="md" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <Text size="sm">Stock: 3 items</Text>
                      <StockBadge stock={3} size="md" />
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                      <Text size="sm">Stock: 0 items</Text>
                      <StockBadge stock={0} size="md" />
                    </div>
                  </div>
                </div>

                {/* Size Variants */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Tamanhos (sm, md, lg)
                  </Text>
                  <div className="flex flex-wrap gap-2 items-center">
                    <StockBadge stock={50} size="sm" />
                    <StockBadge stock={50} size="md" />
                    <StockBadge stock={50} size="lg" />
                  </div>
                </div>

                {/* Real Example */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text size="xs" color="secondary" className="mb-2">
                    Exemplo Real: Product Card
                  </Text>
                  <div className="flex items-center justify-between">
                    <div>
                      <Text weight="semibold">Smartphone XYZ</Text>
                      <PriceTag value={899.99} size="lg" />
                    </div>
                    <StockBadge stock={2} size="md" />
                  </div>
                </div>
              </div>
            </Card>

            {/* DiscountLabel Component */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  4. DiscountLabel Atom
                </Text>
                <Text size="sm" color="secondary">
                  Label para exibir percentual de desconto
                </Text>
                <Badge variant="info" size="sm" className="mt-2">
                  21 tests
                </Badge>
              </div>

              <div className="space-y-6">
                {/* Percentages */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Diferentes Descontos
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <DiscountLabel percentage={10} size="md" />
                    <DiscountLabel percentage={25} size="md" />
                    <DiscountLabel percentage={50} size="md" />
                    <DiscountLabel percentage={75} size="md" />
                  </div>
                </div>

                {/* Variants */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Variantes de Cor
                  </Text>
                  <div className="flex flex-wrap gap-3">
                    <DiscountLabel percentage={20} variant="default" />
                    <DiscountLabel percentage={20} variant="primary" />
                    <DiscountLabel percentage={20} variant="accent" />
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Tamanhos (sm, md, lg)
                  </Text>
                  <div className="flex flex-wrap gap-3 items-center">
                    <DiscountLabel percentage={30} size="sm" />
                    <DiscountLabel percentage={30} size="md" />
                    <DiscountLabel percentage={30} size="lg" />
                  </div>
                </div>

                {/* Real Example */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text size="xs" color="secondary" className="mb-2">
                    Exemplo Real: Banner Promocional
                  </Text>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-lg text-white relative overflow-hidden">
                    <DiscountLabel
                      percentage={40}
                      size="lg"
                      className="absolute top-2 right-2"
                    />
                    <Text size="sm" className="text-white/90 mb-1">
                      BLACK FRIDAY
                    </Text>
                    <Text size="lg" weight="bold" className="text-white">
                      Ofertas Imperdíveis
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Complete Product Example */}
          <div className="mt-8">
            <Text size="xl" weight="bold" className="mb-4">
              Exemplo Completo: Todos os 4 Atoms Combinados
            </Text>
            <Card variant="elevated" className="bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 1 */}
                <div>
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon name="CartIcon" size="xl" color="secondary" />
                    </div>
                    <DiscountLabel
                      percentage={35}
                      size="md"
                      className="absolute top-3 right-3"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Text weight="bold" size="lg" className="mb-1">
                        Premium Headphones
                      </Text>
                      <StockBadge stock={5} size="sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <PriceTag
                      value={299.99}
                      variant="strikethrough"
                      size="sm"
                    />
                    <PriceTag value={194.99} variant="discount" size="lg" />
                  </div>
                  <QuantitySelectorProductDemo />
                </div>

                {/* Product 2 */}
                <div>
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon name="StarIcon" size="xl" color="warning" />
                    </div>
                    <DiscountLabel
                      percentage={20}
                      size="md"
                      variant="primary"
                      className="absolute top-3 right-3"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Text weight="bold" size="lg" className="mb-1">
                        Smart Watch Pro
                      </Text>
                      <StockBadge stock={0} size="sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <PriceTag
                      value={499.99}
                      variant="strikethrough"
                      size="sm"
                    />
                    <PriceTag value={399.99} variant="discount" size="lg" />
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    disabled
                    className="w-full"
                  >
                    Out of Stock
                  </Button>
                </div>
              </div>
            </Card>
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
              description="5G connectivity, AI camera, 256GB storage"
              image="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop"
              inStock={true}
            />
            <ProductCard
              title="Wireless Earbuds"
              price={179.99}
              originalPrice={229.99}
              description="ANC, 30h battery, premium sound quality"
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
              inStock={true}
            />
            <ProductCard
              title="Smart Watch"
              price={349.99}
              description="GPS, health monitoring, fitness tracking"
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
              inStock={true}
            />
            <ProductCard
              title="Tablet Pro"
              price={649.99}
              description="12.9 inch display, M2 chip, all-day battery"
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop"
              inStock={true}
            />
          </div>
        </section>

        {/* Blog PostCard Showcase */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Heading level={2} className="mb-4">
            PostCard Molecule
          </Heading>
          <Text size="sm" color="secondary" className="mb-8">
            Blog post cards for displaying article content
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PostCard
              title="Building Scalable React Applications"
              excerpt="Learn best practices for scaling React applications with proper state management and performance optimization techniques."
              date="2025-01-20"
              author="Sarah Johnson"
              category="React"
              readTime={8}
              imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop"
            />

            <PostCard
              title="TypeScript Tips and Tricks"
              excerpt="Master advanced TypeScript features to write more robust and maintainable code in your projects."
              date="2025-01-18"
              author="Mike Chen"
              category="TypeScript"
              readTime={6}
              featured={true}
              imageUrl="https://images.unsplash.com/photo-1516321318423-f06f70566c0f?w=400&h=200&fit=crop"
            />

            <PostCard
              title="CSS-in-JS Solutions Compared"
              excerpt="Compare different CSS-in-JS libraries and find the best solution for your project requirements."
              date="2025-01-15"
              author="Emma Davis"
              category="CSS"
              readTime={10}
              imageUrl="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=200&fit=crop"
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

        {/* Blog MVP Components Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <Badge variant="info" size="sm" className="mb-4">
            Phase 4 Week 2 - Blog MVP
          </Badge>
          <Text size="2xl" weight="semibold" className="mb-12">
            Blog Components Collection
          </Text>

          {/* BlogHeader Showcase */}
          <div className="mb-16">
            <Text size="lg" weight="semibold" className="mb-6">
              BlogHeader Organism
            </Text>
            <BlogHeader
              title="Building a Modern Design System with TypeScript"
              description="Learn how to create a scalable, type-safe component library with atomic design principles"
              author="Fred Leal"
              date="2025-01-17"
              readTime="12"
              tags={['Design System', 'TypeScript', 'React', 'Components']}
              heroImage="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=400&fit=crop"
              heroImageAlt="Design System Cover"
            />
          </div>

          {/* TableOfContents + Prose + CodeBlock */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Text size="base" weight="semibold" className="mb-4">
                Article Sections
              </Text>
              <TableOfContents
                items={[
                  { id: 'intro', label: 'Introduction', level: 1 },
                  { id: 'setup', label: 'Setup & Installation', level: 1 },
                  { id: 'dependencies', label: 'Dependencies', level: 2 },
                  { id: 'structure', label: 'Project Structure', level: 1 },
                  { id: 'atoms', label: 'Creating Atoms', level: 1 },
                  { id: 'molecules', label: 'Combining Molecules', level: 1 },
                  { id: 'testing', label: 'Testing Strategy', level: 1 },
                  { id: 'coverage', label: 'Coverage Goals', level: 2 },
                ]}
                activeId="intro"
              />
            </div>

            <div className="lg:col-span-3">
              <Text size="base" weight="semibold" className="mb-4">
                Article Content
              </Text>
              <div className="space-y-8">
                <Prose>
                  <h2>Getting Started with Design Systems</h2>
                  <p>
                    A well-structured design system is the foundation of
                    scalable applications. In this guide, we'll build a modern
                    component library using TypeScript, React, and Tailwind CSS.
                  </p>

                  <h3>Why Design Systems Matter</h3>
                  <p>Design systems provide:</p>
                  <ul>
                    <li>Consistency across your application</li>
                    <li>Faster development cycles</li>
                    <li>Improved maintainability</li>
                    <li>Better code reusability</li>
                  </ul>

                  <h3>Key Technologies</h3>
                  <p>Here's the tech stack we'll be using:</p>
                </Prose>

                {/* CodeBlock Example */}
                <CodeBlock
                  code={`{
  "name": "design-system",
  "version": "1.0.0",
  "devDependencies": {
    "react": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "vitest": "^2.0.0"
  }
}`}
                  language="json"
                  title="package.json"
                  showCopyButton={true}
                />

                <Prose>
                  <h3>TypeScript Configuration</h3>
                  <p>Enable strict mode for maximum type safety:</p>
                </Prose>

                <CodeBlock
                  code={`// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}`}
                  language="json"
                  title="TypeScript Strict Mode"
                />

                <Prose>
                  <h3>Benefits of This Approach</h3>
                  <p>By combining these technologies, you get:</p>
                  <ul>
                    <li>
                      <strong>Type Safety:</strong> Catch errors at compile time
                    </li>
                    <li>
                      <strong>Performance:</strong> Optimized bundle sizes with
                      Tailwind CSS
                    </li>
                    <li>
                      <strong>Testing:</strong> 100% coverage with Vitest
                    </li>
                    <li>
                      <strong>Accessibility:</strong> WCAG AA compliant
                      components
                    </li>
                  </ul>

                  <blockquote>
                    "A design system is not just code. It's a shared language
                    between designers and developers."
                  </blockquote>
                </Prose>
              </div>
            </div>
          </div>
        </section>

        {/* PricingCard Showcase - PR #79 */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Badge variant="info" size="sm" className="mb-4">
            PR #79 - PricingCard Molecule
          </Badge>
          <Text size="2xl" weight="semibold" className="mb-2">
            Pricing Plans Display
          </Text>
          <Text size="sm" color="secondary" className="mb-8">
            Flexible pricing card component for displaying subscription plans
            with features, badges, and CTAs
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              name="Free"
              price={0}
              description="Perfect for getting started"
              features={[
                'Up to 3 pages',
                'Basic templates',
                'Mobile responsive',
                'Email support',
              ]}
              primaryCTA={{
                label: 'Get Started',
                onClick: () => alert('Free plan selected'),
              }}
            />

            <PricingCard
              name="Pro"
              price={29}
              description="For professionals and growing businesses"
              features={[
                'Up to 10 pages',
                'Premium templates',
                'Mobile responsive',
                'Priority support',
                'Custom domain',
                'Analytics dashboard',
              ]}
              popular={true}
              primaryCTA={{
                label: 'Start Free Trial',
                onClick: () => alert('Trial started'),
              }}
              secondaryCTA={{
                label: 'Learn More',
                onClick: () => alert('Learn more clicked'),
              }}
            />

            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large teams with custom needs"
              features={[
                'Unlimited pages',
                'Custom design',
                'Mobile responsive',
                '24/7 dedicated support',
                'Custom domain',
                'Advanced analytics',
                'API access',
                'White-label solution',
              ]}
              primaryCTA={{
                label: 'Contact Sales',
                onClick: () => alert('Contact sales clicked'),
              }}
            />
          </div>
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
