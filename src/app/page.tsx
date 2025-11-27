'use client'
import { useState, useRef } from 'react'
import {
  Button,
  Text,
  Heading,
  Price,
  Badge,
  Icon,
  Checkbox,
  Input,
  Image,
  PriceTag,
  QuantitySelector,
  StockBadge,
  DiscountLabel,
  Skeleton,
  Link,
} from '@/components/atoms'
import {
  Alert,
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
  StepCard,
  CarouselArrows,
  CarouselSlide,
  CarouselDots,
  List,
  Wrapper,
} from '@/components/molecules'
import {
  Header,
  Footer,
  BlogHeader,
  HeroSection,
  FAQSection,
} from '@/components/organisms'
import {
  useDevice,
  useResponsiveValue,
  useSlideWidth,
  useCarouselNavigation,
  useAutoSlide,
  useVisibilityWithTabCheck,
} from '@/hooks'

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

// Custom Hooks Demo Components
function DeviceDetectionDemo() {
  const { deviceType, isPhone, isMobile, isTablet, isDesktop } = useDevice()
  const slidesToShow = useResponsiveValue({ mobile: 1, tablet: 2, desktop: 3 })
  const message = useResponsiveValue({
    mobile: 'Mobile View',
    tablet: 'Tablet View',
    desktop: 'Desktop View',
  })

  return (
    <Card className="p-6">
      <Text size="sm" weight="semibold" className="mb-4">
        useDevice + useResponsiveValue Demo
      </Text>
      <div className="space-y-3">
        <div className="flex gap-2">
          <Badge variant={isPhone ? 'info' : 'default'}>📱 Phone</Badge>
          <Badge variant={isTablet ? 'info' : 'default'}>💻 Tablet</Badge>
          <Badge variant={isDesktop ? 'info' : 'default'}>🖥️ Desktop</Badge>
        </div>
        <div className="p-3 bg-blue-50 rounded">
          <Text size="sm">
            Device Type: <strong>{deviceType}</strong>
          </Text>
          <Text size="sm">
            Is Mobile: <strong>{isMobile ? 'Yes' : 'No'}</strong>
          </Text>
          <Text size="sm">
            Slides to Show: <strong>{slidesToShow}</strong>
          </Text>
          <Text size="sm">
            Message: <strong>{message}</strong>
          </Text>
        </div>
        <Text size="xs" color="secondary">
          ↕️ Resize your browser window to see values change!
        </Text>
      </div>
    </Card>
  )
}

function MiniCarouselDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // useSlideWidth demo
  const slidesToShow = useResponsiveValue({ mobile: 1, tablet: 2, desktop: 3 })
  const slideWidth = useSlideWidth({
    containerRef: containerRef as React.RefObject<HTMLElement>,
    slidesToShow,
    gap: 16,
  })

  // useCarouselNavigation demo
  const { currentIndex, handleNext, handlePrev, maxIndex } =
    useCarouselNavigation({
      totalSlides: 6,
      slidesToShow,
      infiniteLoop: true,
    })

  // useVisibilityWithTabCheck demo
  const {
    ref: visibilityRef,
    isVisible,
    isTabVisible,
    isElementVisible,
  } = useVisibilityWithTabCheck()

  // useAutoSlide demo
  useAutoSlide({
    isTabVisible,
    isBannerVisible: isElementVisible,
    isHovered,
    goToNextSlide: handleNext,
    enabled: true,
    interval: 3000,
  })

  const slides = [
    { id: 1, color: 'bg-blue-100', label: 'Slide 1' },
    { id: 2, color: 'bg-green-100', label: 'Slide 2' },
    { id: 3, color: 'bg-yellow-100', label: 'Slide 3' },
    { id: 4, color: 'bg-red-100', label: 'Slide 4' },
    { id: 5, color: 'bg-purple-100', label: 'Slide 5' },
    { id: 6, color: 'bg-pink-100', label: 'Slide 6' },
  ]

  return (
    <Card className="p-6">
      <Text size="sm" weight="semibold" className="mb-4">
        Mini Carousel (All Hooks in Action)
      </Text>

      {/* Carousel */}
      <div
        ref={visibilityRef}
        className="mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="overflow-hidden rounded-lg"
          style={{ marginBottom: '1rem' }}
        >
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (slideWidth + 16)}px)`,
            }}
          >
            {slides.map(slide => (
              <div
                key={slide.id}
                className={`${slide.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                style={{ width: slideWidth || '100%', height: '150px' }}
              >
                <Text size="lg" weight="bold">
                  {slide.label}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <Button size="sm" variant="outline" onClick={handlePrev}>
            ← Prev
          </Button>
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <Button size="sm" variant="outline" onClick={handleNext}>
            Next →
          </Button>
        </div>
      </div>

      {/* Hook Status */}
      <div className="space-y-2 p-3 bg-gray-50 rounded text-xs">
        <div className="grid grid-cols-2 gap-2">
          <Text size="xs">
            Slide Width: <strong>{Math.round(slideWidth)}px</strong>
          </Text>
          <Text size="xs">
            Current Index: <strong>{currentIndex}</strong>
          </Text>
          <Text size="xs">
            Max Index: <strong>{maxIndex}</strong>
          </Text>
          <Text size="xs">
            Slides Visible: <strong>{slidesToShow}</strong>
          </Text>
          <Text size="xs">
            Tab Visible: <strong>{isTabVisible ? '✅' : '❌'}</strong>
          </Text>
          <Text size="xs">
            Element Visible: <strong>{isElementVisible ? '✅' : '❌'}</strong>
          </Text>
          <Text size="xs">
            Is Hovered: <strong>{isHovered ? '✅' : '❌'}</strong>
          </Text>
          <Text size="xs">
            Auto-Slide: <strong>{!isHovered && isVisible ? '▶️' : '⏸️'}</strong>
          </Text>
        </div>
        <Text size="xs" color="secondary" className="mt-2">
          🎯 Hover to pause • Switch tabs to test visibility • Resize to test
          responsive
        </Text>
      </div>
    </Card>
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

          {/* Alert Molecule Showcase */}
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <Badge variant="info" size="sm" className="mb-4">
              PR #92 - Alert Molecule
            </Badge>
            <Text size="2xl" weight="semibold" className="mb-2">
              Alert Component
            </Text>
            <Text size="sm" color="secondary" className="mb-8">
              Display important messages, notifications, and feedback to users with
              semantic variants and dismissible option.
            </Text>

            {/* Variant Examples */}
            <div className="space-y-4 mb-8">
              <Text size="lg" weight="semibold" className="mb-4">
                Variant Examples
              </Text>

              <Alert
                variant="info"
                title="Information"
                message="This is an informational message to keep you updated."
              />

              <Alert
                variant="success"
                title="Success!"
                message="Your changes have been saved successfully."
              />

              <Alert
                variant="warning"
                title="Warning"
                message="Please review your settings before continuing."
              />

              <Alert
                variant="error"
                title="Error"
                message="There was a problem processing your request. Please try again."
              />
            </div>

            {/* Dismissible Examples */}
            <div className="space-y-4 mb-8">
              <Text size="lg" weight="semibold" className="mb-4">
                Dismissible Alerts
              </Text>

              <Alert
                variant="info"
                message="Click the X button to dismiss this alert."
                dismissible
              />

              <Alert
                variant="success"
                title="Saved"
                message="Your preferences have been updated. You can dismiss this message."
                dismissible
                onDismiss={() => console.log('Alert dismissed')}
              />
            </div>

            {/* Simple Messages */}
            <div className="space-y-4 mb-8">
              <Text size="lg" weight="semibold" className="mb-4">
                Simple Messages (No Title)
              </Text>

              <Alert
                variant="info"
                message="New features are available in this release."
              />

              <Alert
                variant="warning"
                message="Your session will expire in 5 minutes."
                dismissible
              />
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="p-4">
                <Text size="sm" weight="semibold" className="mb-2">
                  🎨 4 Semantic Variants
                </Text>
                <Text size="xs" color="secondary">
                  Info, Success, Warning, and Error variants with appropriate
                  colors and icons.
                </Text>
              </Card>
              <Card className="p-4">
                <Text size="sm" weight="semibold" className="mb-2">
                  ✖️ Dismissible
                </Text>
                <Text size="xs" color="secondary">
                  Optional close button with callback support for user-dismissible
                  alerts.
                </Text>
              </Card>
              <Card className="p-4">
                <Text size="sm" weight="semibold" className="mb-2">
                  ♿ Accessible
                </Text>
                <Text size="xs" color="secondary">
                  ARIA attributes (role, aria-live, aria-atomic) for screen
                  reader support.
                </Text>
              </Card>
              <Card className="p-4">
                <Text size="sm" weight="semibold" className="mb-2">
                  🎯 Flexible Content
                </Text>
                <Text size="xs" color="secondary">
                  Optional title, custom icons, and support for long messages.
                </Text>
              </Card>
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

            {/* Skeleton Component */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  5. Skeleton Atom
                </Text>
                <Text size="sm" color="secondary">
                  Loading placeholders para melhor UX e CLS
                </Text>
                <Badge variant="info" size="sm" className="mt-2">
                  28 tests
                </Badge>
              </div>

              <div className="space-y-6">
                {/* Border Radius Variants */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Variantes de Border Radius
                  </Text>
                  <div className="space-y-3">
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        none (sem arredondamento)
                      </Text>
                      <Skeleton variant="none" height="40px" />
                    </div>
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        sm (pequeno)
                      </Text>
                      <Skeleton variant="sm" height="40px" />
                    </div>
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        md (médio - padrão)
                      </Text>
                      <Skeleton variant="md" height="40px" />
                    </div>
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        lg (grande)
                      </Text>
                      <Skeleton variant="lg" height="40px" />
                    </div>
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        full (círculo/pill)
                      </Text>
                      <Skeleton variant="full" width="48px" height="48px" />
                    </div>
                  </div>
                </div>

                {/* Animation Speed */}
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Velocidades de Animação
                  </Text>
                  <div className="space-y-3">
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        slow (3s)
                      </Text>
                      <Skeleton speed="slow" height="40px" />
                    </div>
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        normal (2s - padrão)
                      </Text>
                      <Skeleton speed="normal" height="40px" />
                    </div>
                    <div>
                      <Text size="xs" color="secondary" className="mb-1">
                        fast (1s)
                      </Text>
                      <Skeleton speed="fast" height="40px" />
                    </div>
                  </div>
                </div>

                {/* Real Examples */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text size="xs" color="secondary" className="mb-3">
                    Exemplos Reais de Uso
                  </Text>

                  {/* Text Lines */}
                  <div className="mb-4">
                    <Text size="xs" weight="semibold" className="mb-2">
                      Loading de Texto (linhas)
                    </Text>
                    <div className="space-y-2">
                      <Skeleton width="100%" height="16px" variant="sm" />
                      <Skeleton width="90%" height="16px" variant="sm" />
                      <Skeleton width="85%" height="16px" variant="sm" />
                    </div>
                  </div>

                  {/* Card Loading */}
                  <div className="mb-4">
                    <Text size="xs" weight="semibold" className="mb-2">
                      Loading de Card
                    </Text>
                    <div className="bg-white p-4 rounded-lg space-y-3">
                      <Skeleton width="100%" height="200px" variant="md" />
                      <Skeleton width="60%" height="24px" variant="sm" />
                      <Skeleton width="100%" height="16px" variant="sm" />
                      <Skeleton width="80%" height="16px" variant="sm" />
                    </div>
                  </div>

                  {/* Avatar + Text */}
                  <div>
                    <Text size="xs" weight="semibold" className="mb-2">
                      Loading de Avatar + Texto
                    </Text>
                    <div className="flex items-center gap-3">
                      <Skeleton width="48px" height="48px" variant="full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton width="40%" height="16px" variant="sm" />
                        <Skeleton width="60%" height="14px" variant="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Complete Product Example */}
          <div className="mt-8">
            <Text size="xl" weight="bold" className="mb-4">
              Exemplo Completo: Todos os Atoms de E-commerce Combinados
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

        {/* NEW: Image Component Showcase - PR #83 */}
        <section className="max-w-7xl mx-auto px-6 pb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge variant="success" size="sm" className="mb-3">
                NEW - PR #83
              </Badge>
              <Text size="3xl" weight="bold" className="mb-2">
                Image Atom Component
              </Text>
              <Text size="sm" color="secondary">
                Optimized image component with lazy loading, fetch priority, and
                fallback support
              </Text>
            </div>
            <div className="flex gap-2">
              <Badge variant="info" size="sm">
                33 tests
              </Badge>
              <Badge variant="success" size="sm">
                100% coverage
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Object-fit Variants */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  1. Object-fit Variants
                </Text>
                <Text size="sm" color="secondary">
                  Different object-fit strategies for image layout
                </Text>
              </div>

              <div className="space-y-6">
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Cover (Default) - Fills container
                  </Text>
                  <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
                      alt="Landscape with cover fit"
                      width={600}
                      height={400}
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Contain - Fits inside container
                  </Text>
                  <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
                      alt="Landscape with contain fit"
                      width={600}
                      height={400}
                      objectFit="contain"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Loading Strategies */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  2. Loading Strategies & Priority
                </Text>
                <Text size="sm" color="secondary">
                  Optimize performance with lazy loading and fetch priority
                </Text>
              </div>

              <div className="space-y-6">
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    High Priority (Above-the-fold)
                  </Text>
                  <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop"
                      alt="Hero image with high priority"
                      width={600}
                      height={400}
                      fetchPriority="high"
                      loading="eager"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <Text size="xs" color="secondary" className="mt-2">
                    fetchPriority="high" + loading="eager" for LCP optimization
                  </Text>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Lazy Loading (Below-the-fold)
                  </Text>
                  <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                      alt="Lazy loaded thumbnail"
                      width={400}
                      height={400}
                      loading="lazy"
                      fetchPriority="low"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <Text size="xs" color="secondary" className="mt-2">
                    loading="lazy" + fetchPriority="low" for performance
                  </Text>
                </div>
              </div>
            </Card>

            {/* Image Shapes */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  3. Image Shapes & Styling
                </Text>
                <Text size="sm" color="secondary">
                  Custom styling with Tailwind classes
                </Text>
              </div>

              <div className="space-y-6">
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    Rounded Corners
                  </Text>
                  <div className="flex gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="Rounded image"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                      alt="More rounded image"
                      width={120}
                      height={120}
                      className="rounded-2xl"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Circle image"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    With Shadow & Border
                  </Text>
                  <div className="flex gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                      alt="Image with shadow"
                      width={120}
                      height={120}
                      className="rounded-lg shadow-lg"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                      alt="Image with border"
                      width={120}
                      height={120}
                      className="rounded-lg border-4 border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Fallback Images */}
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  4. Fallback Image Support
                </Text>
                <Text size="sm" color="secondary">
                  Automatic fallback when main image fails to load
                </Text>
              </div>

              <div className="space-y-6">
                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    E-commerce Product Placeholder
                  </Text>
                  <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="https://invalid-url-that-will-fail.com/product.jpg"
                      alt="Product with fallback"
                      fallbackSrc="https://placehold.co/400x400/4F46E5/white?text=Product+Image"
                      width={400}
                      height={400}
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <Text size="xs" color="secondary" className="mt-2">
                    Automatically shows fallback when main image fails
                  </Text>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-3">
                    User Avatar Fallback
                  </Text>
                  <div className="flex gap-3">
                    <Image
                      src="https://broken-link.com/avatar.jpg"
                      alt="User avatar"
                      fallbackSrc="https://placehold.co/100x100/10B981/white?text=U"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <Image
                      src="https://broken-link.com/avatar2.jpg"
                      alt="User avatar"
                      fallbackSrc="https://placehold.co/100x100/EF4444/white?text=A"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <Image
                      src="https://broken-link.com/avatar3.jpg"
                      alt="User avatar"
                      fallbackSrc="https://placehold.co/100x100/F59E0B/white?text=B"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Real-World Example: Product Gallery */}
          <div className="mt-8">
            <Text size="xl" weight="bold" className="mb-4">
              Real-World Example: Product Gallery with Image
            </Text>
            <Card variant="elevated" className="bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product 1 */}
                <div>
                  <div className="relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
                      alt="Wireless Headphones"
                      width={500}
                      height={500}
                      fallbackSrc="https://placehold.co/500x500/4F46E5/white?text=Product"
                      fetchPriority="high"
                      className="w-full aspect-square rounded-lg"
                    />
                    <DiscountLabel
                      percentage={25}
                      size="md"
                      className="absolute top-3 right-3"
                    />
                  </div>
                  <Text weight="bold" size="lg" className="mb-2">
                    Wireless Headphones
                  </Text>
                  <div className="flex items-center gap-2 mb-3">
                    <PriceTag
                      value={299.99}
                      variant="strikethrough"
                      size="sm"
                    />
                    <PriceTag value={224.99} variant="discount" size="lg" />
                  </div>
                  <StockBadge stock={12} size="sm" />
                </div>

                {/* Product 2 */}
                <div>
                  <div className="relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
                      alt="Smart Watch"
                      width={500}
                      height={500}
                      fallbackSrc="https://placehold.co/500x500/10B981/white?text=Watch"
                      loading="lazy"
                      className="w-full aspect-square rounded-lg"
                    />
                    <DiscountLabel
                      percentage={15}
                      size="md"
                      variant="primary"
                      className="absolute top-3 right-3"
                    />
                  </div>
                  <Text weight="bold" size="lg" className="mb-2">
                    Smart Watch Pro
                  </Text>
                  <div className="flex items-center gap-2 mb-3">
                    <PriceTag
                      value={399.99}
                      variant="strikethrough"
                      size="sm"
                    />
                    <PriceTag value={339.99} variant="discount" size="lg" />
                  </div>
                  <StockBadge stock={5} size="sm" />
                </div>

                {/* Product 3 */}
                <div>
                  <div className="relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
                      alt="Sunglasses"
                      width={500}
                      height={500}
                      fallbackSrc="https://placehold.co/500x500/F59E0B/white?text=Glasses"
                      loading="lazy"
                      className="w-full aspect-square rounded-lg"
                    />
                    <DiscountLabel
                      percentage={30}
                      size="md"
                      className="absolute top-3 right-3"
                    />
                  </div>
                  <Text weight="bold" size="lg" className="mb-2">
                    Designer Sunglasses
                  </Text>
                  <div className="flex items-center gap-2 mb-3">
                    <PriceTag
                      value={199.99}
                      variant="strikethrough"
                      size="sm"
                    />
                    <PriceTag value={139.99} variant="discount" size="lg" />
                  </div>
                  <StockBadge stock={0} size="sm" />
                </div>
              </div>
            </Card>
          </div>

          {/* Technical Features Summary */}
          <div className="mt-8 bg-white rounded-xl p-6 border-2 border-blue-200">
            <Text size="lg" weight="bold" className="mb-4">
              Technical Features
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Icon name="CheckIcon" size="sm" color="success" />
                <div>
                  <Text size="sm" weight="semibold">
                    Native Lazy Loading
                  </Text>
                  <Text size="xs" color="secondary">
                    Uses browser's native loading="lazy" for automatic
                    performance
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckIcon" size="sm" color="success" />
                <div>
                  <Text size="sm" weight="semibold">
                    Fetch Priority Control
                  </Text>
                  <Text size="xs" color="secondary">
                    Optimize LCP with fetchPriority="high" for hero images
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckIcon" size="sm" color="success" />
                <div>
                  <Text size="sm" weight="semibold">
                    Automatic Fallback
                  </Text>
                  <Text size="xs" color="secondary">
                    State-based fallback without HEAD request overhead
                  </Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckIcon" size="sm" color="success" />
                <div>
                  <Text size="sm" weight="semibold">
                    Object-fit Variants
                  </Text>
                  <Text size="xs" color="secondary">
                    5 variants: contain, cover, fill, none, scale-down
                  </Text>
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
              id="product-1"
              name="Premium Smartphone"
              price={899.99}
              description="5G connectivity, AI camera, 256GB storage"
              image="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop"
              stock={15}
              onAddToCart={(id, qty) =>
                console.log(`Added ${qty}x ${id} to cart`)
              }
              onViewDetails={id => console.log(`View details: ${id}`)}
            />
            <ProductCard
              id="product-2"
              name="Wireless Earbuds"
              price={179.99}
              originalPrice={229.99}
              description="ANC, 30h battery, premium sound quality"
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
              stock={8}
              variant="featured"
              onAddToCart={(id, qty) =>
                console.log(`Added ${qty}x ${id} to cart`)
              }
              onViewDetails={id => console.log(`View details: ${id}`)}
            />
            <ProductCard
              id="product-3"
              name="Smart Watch"
              price={349.99}
              description="GPS, health monitoring, fitness tracking"
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
              stock={3}
              onAddToCart={(id, qty) =>
                console.log(`Added ${qty}x ${id} to cart`)
              }
              onViewDetails={id => console.log(`View details: ${id}`)}
            />
            <ProductCard
              id="product-4"
              name="Tablet Pro"
              price={649.99}
              description="12.9 inch display, M2 chip, all-day battery"
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop"
              stock={0}
              onAddToCart={(id, qty) =>
                console.log(`Added ${qty}x ${id} to cart`)
              }
              onViewDetails={id => console.log(`View details: ${id}`)}
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

        {/* StepCard Showcase - Landing Migration 2/3 */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Badge variant="info" size="sm" className="mb-4">
            Landing Migration 2/3 - StepCard Molecule
          </Badge>
          <Text size="2xl" weight="semibold" className="mb-2">
            How It Works
          </Text>
          <Text size="sm" color="secondary" className="mb-8">
            Numbered process steps for showcasing workflows and user journeys
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <StepCard
              step={1}
              title="Sign Up"
              description="Create your free account in seconds with just an email and password"
            />
            <StepCard
              step={2}
              title="Configure"
              description="Set up your preferences and customize your workspace to fit your needs"
            />
            <StepCard
              step={3}
              title="Launch"
              description="Start using all features immediately with no setup time required"
              variant="success"
              icon="CheckIcon"
            />
          </div>

          <Text size="lg" weight="semibold" className="mb-4">
            Horizontal Layout Timeline
          </Text>
          <div className="space-y-4">
            <StepCard
              step={1}
              title="Discovery Phase"
              description="Understanding your needs and defining project requirements"
              orientation="horizontal"
              variant="success"
              icon="CheckIcon"
              size="sm"
            />
            <StepCard
              step={2}
              title="Design & Planning"
              description="Creating wireframes, mockups, and technical architecture"
              orientation="horizontal"
              variant="primary"
              size="sm"
            />
            <StepCard
              step={3}
              title="Development"
              description="Building your application with cutting-edge technologies"
              orientation="horizontal"
              variant="secondary"
              size="sm"
            />
          </div>
        </section>

        {/* Link Showcase */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Badge variant="success" size="sm" className="mb-4">
            Link Atom
          </Badge>
          <Text size="2xl" weight="semibold" className="mb-2">
            Link Component
          </Text>
          <Text size="sm" color="secondary" className="mb-8">
            Accessible link component with variants, auto-security for external
            links, and full TypeScript support
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  Variants
                </Text>
                <Text size="sm" color="secondary">
                  Primary (underlined) and Secondary (plain)
                </Text>
              </div>

              <div className="space-y-4">
                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Primary (underlined)
                  </Text>
                  <Link href="#primary" variant="primary">
                    This is a primary link with underline
                  </Link>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Secondary (no underline)
                  </Text>
                  <Link href="#secondary" variant="secondary">
                    This is a secondary link without underline
                  </Link>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  External Links
                </Text>
                <Text size="sm" color="secondary">
                  Auto-security with noopener noreferrer
                </Text>
              </div>

              <div className="space-y-4">
                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Opens in new tab (secure)
                  </Text>
                  <Link
                    href="https://example.com"
                    target="_blank"
                    variant="primary"
                  >
                    Visit Example.com →
                  </Link>
                  <Text size="xs" color="secondary" className="mt-1">
                    (rel="noopener noreferrer" added automatically)
                  </Text>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Internal link (same window)
                  </Text>
                  <Link href="#internal" variant="primary">
                    Go to section
                  </Link>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  Download Links
                </Text>
                <Text size="sm" color="secondary">
                  File download support
                </Text>
              </div>

              <div className="space-y-4">
                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Download file
                  </Text>
                  <Link
                    href="/example.pdf"
                    download="document.pdf"
                    variant="primary"
                  >
                    📄 Download PDF Document
                  </Link>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Download (auto filename)
                  </Text>
                  <Link href="/image.jpg" download variant="primary">
                    🖼️ Download Image
                  </Link>
                </div>
              </div>
            </Card>

            <Card variant="elevated" className="bg-white">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Text size="lg" weight="bold" className="mb-1">
                  Accessibility
                </Text>
                <Text size="sm" color="secondary">
                  WCAG AA compliant with ARIA support
                </Text>
              </div>

              <div className="space-y-4">
                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    With custom aria-label
                  </Text>
                  <Link
                    href="#help"
                    aria-label="Get help and support"
                    variant="primary"
                  >
                    Help
                  </Link>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    With title tooltip
                  </Text>
                  <Link
                    href="#contact"
                    title="Contact our support team"
                    variant="primary"
                  >
                    Contact Us
                  </Link>
                </div>

                <div>
                  <Text size="sm" weight="semibold" className="mb-2">
                    Custom tab order
                  </Text>
                  <Link href="#tab" tabIndex={1} variant="primary">
                    First tab stop
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <Card variant="elevated" className="bg-white mt-6">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <Text size="lg" weight="bold" className="mb-1">
                Real-world Example: Navigation Menu
              </Text>
              <Text size="sm" color="secondary">
                Links in a typical navigation context
              </Text>
            </div>

            <nav className="flex flex-wrap gap-6">
              <Link href="/" variant="secondary">
                Home
              </Link>
              <Link href="/products" variant="secondary">
                Products
              </Link>
              <Link href="/about" variant="secondary">
                About
              </Link>
              <Link href="/blog" variant="secondary">
                Blog
              </Link>
              <Link
                href="https://github.com/example"
                target="_blank"
                variant="secondary"
              >
                GitHub ↗
              </Link>
            </nav>
          </Card>
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

        {/* Carousel Molecules Showcase - PR #88 */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Badge variant="success" size="sm" className="mb-4">
            PR #88 - Carousel Molecules
          </Badge>
          <Text size="2xl" weight="semibold" className="mb-2">
            Carousel Building Blocks
          </Text>
          <Text size="sm" color="secondary" className="mb-8">
            Reusable carousel molecules: arrows, slides, and dots. Ready to
            compose into a full Carousel organism.
          </Text>

          {/* CarouselArrows Demo */}
          <div className="mb-12">
            <Text size="lg" weight="semibold" className="mb-4">
              1. CarouselArrows
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Navigation buttons with disabled states and custom icons support
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Both arrows enabled */}
              <Card className="relative h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Text color="secondary">Slide Content</Text>
                </div>
                <CarouselArrows
                  showPrev={true}
                  showNext={true}
                  onPrev={() => {}}
                  onNext={() => {}}
                />
              </Card>

              {/* Prev disabled */}
              <Card className="relative h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Text color="secondary">First Slide (Prev Disabled)</Text>
                </div>
                <CarouselArrows
                  showPrev={true}
                  showNext={true}
                  onPrev={() => {}}
                  onNext={() => {}}
                  disabledPrev={true}
                />
              </Card>
            </div>
          </div>

          {/* CarouselSlide Demo */}
          <div className="mb-12">
            <Text size="lg" weight="semibold" className="mb-4">
              2. CarouselSlide
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Generic slide component with type support and flexible rendering
            </Text>

            <div className="flex gap-4 overflow-x-auto pb-4">
              <CarouselSlide
                item={{ title: 'Slide 1', color: 'bg-blue-100' }}
                index={0}
                renderItem={item => (
                  <Card
                    className={`${item.color} h-40 flex items-center justify-center`}
                  >
                    <Text weight="semibold">{item.title}</Text>
                  </Card>
                )}
                width={300}
                gap={16}
              />
              <CarouselSlide
                item={{ title: 'Slide 2', color: 'bg-green-100' }}
                index={1}
                renderItem={item => (
                  <Card
                    className={`${item.color} h-40 flex items-center justify-center`}
                  >
                    <Text weight="semibold">{item.title}</Text>
                  </Card>
                )}
                width={300}
                gap={16}
              />
              <CarouselSlide
                item={{ title: 'Slide 3', color: 'bg-purple-100' }}
                index={2}
                renderItem={item => (
                  <Card
                    className={`${item.color} h-40 flex items-center justify-center`}
                  >
                    <Text weight="semibold">{item.title}</Text>
                  </Card>
                )}
                width={300}
                isLast={true}
              />
            </div>
          </div>

          {/* CarouselDots Demo */}
          <div className="mb-12">
            <Text size="lg" weight="semibold" className="mb-4">
              3. CarouselDots
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Pagination indicators with primary and secondary variants
            </Text>

            <div className="space-y-8">
              {/* Primary variant */}
              <Card className="p-8">
                <Text size="sm" weight="semibold" className="mb-4">
                  Primary Variant (Active: Slide 2)
                </Text>
                <CarouselDots
                  total={5}
                  currentIndex={1}
                  onDotClick={() => {}}
                  variant="primary"
                />
              </Card>

              {/* Secondary variant */}
              <Card className="p-8">
                <Text size="sm" weight="semibold" className="mb-4">
                  Secondary Variant (Active: Slide 4)
                </Text>
                <CarouselDots
                  total={5}
                  currentIndex={3}
                  onDotClick={() => {}}
                  variant="secondary"
                />
              </Card>
            </div>
          </div>

          {/* Combined Example */}
          <div>
            <Text size="lg" weight="semibold" className="mb-4">
              4. Combined Example
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              All three molecules working together (static preview)
            </Text>

            <Card className="relative overflow-hidden">
              {/* Slides container */}
              <div className="flex transition-transform duration-300">
                <CarouselSlide
                  item={{
                    image: '🎨',
                    title: 'Design',
                    description: 'Beautiful UI components',
                  }}
                  index={0}
                  renderItem={item => (
                    <div className="h-64 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-50 to-blue-100">
                      <Text size="4xl">{item.image}</Text>
                      <Text size="xl" weight="bold">
                        {item.title}
                      </Text>
                      <Text size="sm" color="secondary">
                        {item.description}
                      </Text>
                    </div>
                  )}
                  width={800}
                />
              </div>

              {/* Arrows */}
              <CarouselArrows
                showPrev={true}
                showNext={true}
                onPrev={() => {}}
                onNext={() => {}}
              />

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0">
                <CarouselDots
                  total={3}
                  currentIndex={0}
                  onDotClick={() => {}}
                  variant="primary"
                />
              </div>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <Text size="sm" weight="semibold" className="mb-2">
              ℹ️ Next Steps:
            </Text>
            <Text size="sm" color="secondary">
              These molecules are ready to be composed into a full Carousel
              organism. Future PRs will add the Carousel component with hooks
              for auto-play, infinite scroll, and responsive behavior.
            </Text>
          </div>
        </section>

        {/* List & Wrapper Molecules Showcase - PR #89 */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <Badge variant="info" size="sm" className="mb-4">
            PR #89 - List & Wrapper Support Molecules
          </Badge>
          <Text size="2xl" weight="semibold" className="mb-2">
            Structural Components
          </Text>
          <Text size="sm" color="secondary" className="mb-8">
            List and Wrapper molecules for building flexible layouts and
            carousels
          </Text>

          {/* List Demo */}
          <div className="mb-12">
            <Text size="lg" weight="semibold" className="mb-4">
              1. List Molecule
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Generic list component with ul/ol support, custom rendering, and
              flex directions
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic ul list */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Unordered List (Column)
                </Text>
                <List
                  items={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
                />
              </Card>

              {/* Ordered list */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Ordered List (Column)
                </Text>
                <List
                  as="ol"
                  items={[
                    'Install dependencies',
                    'Run dev server',
                    'Build project',
                    'Deploy',
                  ]}
                />
              </Card>

              {/* Row direction */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Horizontal List (Row)
                </Text>
                <List
                  items={['Home', 'About', 'Services', 'Contact']}
                  direction="row"
                />
              </Card>

              {/* Custom rendering */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Custom Render Items
                </Text>
                <List
                  items={[
                    { name: 'Alice', role: 'Developer' },
                    { name: 'Bob', role: 'Designer' },
                    { name: 'Charlie', role: 'Manager' },
                  ]}
                  renderItem={item => (
                    <div className="flex gap-2">
                      <Badge variant="success" size="sm">
                        {item.name}
                      </Badge>
                      <Text size="sm" color="secondary">
                        {item.role}
                      </Text>
                    </div>
                  )}
                  getKey={item => item.name}
                />
              </Card>
            </div>
          </div>

          {/* Wrapper Demo */}
          <div className="mb-12">
            <Text size="lg" weight="semibold" className="mb-4">
              2. Wrapper Molecule
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Container component with width variants, overflow control, and
              translateX for animations
            </Text>

            <div className="space-y-6">
              {/* Primary width */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Primary Width (max-w-7xl, centered)
                </Text>
                <Wrapper variantWidth="primary" className="bg-blue-50 p-4">
                  <Text size="sm">
                    This wrapper has max-width of 7xl and is centered
                  </Text>
                </Wrapper>
              </Card>

              {/* Secondary width */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Secondary Width (full width)
                </Text>
                <Wrapper variantWidth="secondary" className="bg-green-50 p-4">
                  <Text size="sm">
                    This wrapper spans the full available width
                  </Text>
                </Wrapper>
              </Card>

              {/* Overflow hidden */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  Overflow Hidden (for carousels)
                </Text>
                <Wrapper overflowHidden={true} className="bg-purple-50 p-4">
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map(n => (
                      <div
                        key={n}
                        className="min-w-[200px] h-20 bg-white rounded flex items-center justify-center"
                      >
                        Item {n}
                      </div>
                    ))}
                  </div>
                </Wrapper>
              </Card>

              {/* TranslateX animation */}
              <Card className="p-6">
                <Text size="sm" weight="semibold" className="mb-4">
                  TranslateX Animation (slide effect)
                </Text>
                <Wrapper
                  overflowHidden={true}
                  translateX={220}
                  transition="transform 0.3s ease"
                  className="bg-orange-50 p-4"
                >
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map(n => (
                      <div
                        key={n}
                        className="min-w-[200px] h-20 bg-white rounded flex items-center justify-center"
                      >
                        Slide {n}
                      </div>
                    ))}
                  </div>
                </Wrapper>
                <Text size="xs" color="secondary" className="mt-2">
                  Translated -220px to show Slide 2
                </Text>
              </Card>
            </div>
          </div>

          {/* Combined Example */}
          <div>
            <Text size="lg" weight="semibold" className="mb-4">
              3. List + Wrapper Combined
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Using both molecules together for flexible layouts
            </Text>

            <Card className="p-6">
              <Wrapper variantWidth="primary">
                <List
                  title="Project Tech Stack"
                  items={[
                    { tech: 'Next.js 15', category: 'Framework' },
                    { tech: 'TypeScript 5', category: 'Language' },
                    { tech: 'Tailwind CSS', category: 'Styling' },
                    { tech: 'Vitest', category: 'Testing' },
                  ]}
                  renderItem={item => (
                    <div className="p-3 border border-gray-200 rounded flex justify-between items-center">
                      <Text weight="semibold">{item.tech}</Text>
                      <Badge variant="default" size="sm">
                        {item.category}
                      </Badge>
                    </div>
                  )}
                  getKey={item => item.tech}
                  direction="column"
                />
              </Wrapper>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <Text size="sm" weight="semibold" className="mb-2">
              ✅ Ready for Carousel:
            </Text>
            <Text size="sm" color="secondary">
              List and Wrapper are now available for building the complete
              Carousel organism. Next PR will add custom hooks and the final
              Carousel component.
            </Text>
          </div>
        </section>

        {/* Custom Hooks Showcase */}
        <section id="custom-hooks" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-2 rounded">
              <span className="text-2xl">🪝</span>
            </div>
            <div>
              <Heading level={2} className="mb-1">
                Custom Hooks (PR #90)
              </Heading>
              <Text size="sm" color="secondary">
                6 React hooks for device detection, responsive values, and
                carousel functionality
              </Text>
            </div>
          </div>

          {/* Device Detection Demo */}
          <div className="mb-8">
            <Text size="lg" weight="semibold" className="mb-4">
              1. Device Detection Hooks
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              useDevice detects phone/tablet/desktop • useResponsiveValue
              returns different values per device
            </Text>
            <DeviceDetectionDemo />
          </div>

          {/* Mini Carousel Demo */}
          <div className="mb-8">
            <Text size="lg" weight="semibold" className="mb-4">
              2. Carousel Hooks (All Working Together)
            </Text>
            <Text size="sm" color="secondary" className="mb-6">
              Live demo showing all 6 hooks in action: useSlideWidth •
              useCarouselNavigation • useAutoSlide • useVisibilityWithTabCheck
            </Text>
            <MiniCarouselDemo />
          </div>

          {/* Hook Details */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4">
              <Badge variant="default" size="sm" className="mb-2">
                Device
              </Badge>
              <Text size="sm" weight="semibold" className="mb-2">
                useDevice
              </Text>
              <Text size="xs" color="secondary">
                Detects device type (phone/tablet/desktop) with resize listener.
                SSR compatible.
              </Text>
            </Card>

            <Card className="p-4">
              <Badge variant="default" size="sm" className="mb-2">
                Responsive
              </Badge>
              <Text size="sm" weight="semibold" className="mb-2">
                useResponsiveValue
              </Text>
              <Text size="xs" color="secondary">
                Returns different values based on device type. Generic type
                support.
              </Text>
            </Card>

            <Card className="p-4">
              <Badge variant="default" size="sm" className="mb-2">
                Layout
              </Badge>
              <Text size="sm" weight="semibold" className="mb-2">
                useSlideWidth
              </Text>
              <Text size="xs" color="secondary">
                Calculates slide dimensions using ResizeObserver. Handles gaps
                and dynamic updates.
              </Text>
            </Card>

            <Card className="p-4">
              <Badge variant="default" size="sm" className="mb-2">
                Navigation
              </Badge>
              <Text size="sm" weight="semibold" className="mb-2">
                useCarouselNavigation
              </Text>
              <Text size="xs" color="secondary">
                Carousel state management with infinite loop support.
                Controlled/uncontrolled modes.
              </Text>
            </Card>

            <Card className="p-4">
              <Badge variant="default" size="sm" className="mb-2">
                Auto-play
              </Badge>
              <Text size="sm" weight="semibold" className="mb-2">
                useAutoSlide
              </Text>
              <Text size="xs" color="secondary">
                Auto-advance functionality with conditional execution based on
                hover and visibility.
              </Text>
            </Card>

            <Card className="p-4">
              <Badge variant="default" size="sm" className="mb-2">
                Visibility
              </Badge>
              <Text size="sm" weight="semibold" className="mb-2">
                useVisibilityWithTabCheck
              </Text>
              <Text size="xs" color="secondary">
                IntersectionObserver + Document Visibility API. Pauses carousel
                when tab is hidden.
              </Text>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <Text size="sm" weight="semibold" className="mb-2">
              🎯 Testing the Hooks:
            </Text>
            <ul className="space-y-1">
              <li>
                <Text size="sm" color="secondary">
                  • Resize browser to test <strong>useDevice</strong> and{' '}
                  <strong>useResponsiveValue</strong>
                </Text>
              </li>
              <li>
                <Text size="sm" color="secondary">
                  • Hover over carousel to pause <strong>useAutoSlide</strong>
                </Text>
              </li>
              <li>
                <Text size="sm" color="secondary">
                  • Switch tabs to test{' '}
                  <strong>useVisibilityWithTabCheck</strong>
                </Text>
              </li>
              <li>
                <Text size="sm" color="secondary">
                  • Use Prev/Next buttons to test{' '}
                  <strong>useCarouselNavigation</strong>
                </Text>
              </li>
            </ul>
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
