# HeroSection Component - Technical Documentation

## Component Architecture

### File Structure

```
src/components/organisms/HeroSection/
├── HeroSection.tsx           # Main component
├── HeroSection.test.tsx      # Test suite (18 tests)
├── Learning-Guide.md         # Educational guide
└── Technical-Documentation.md
```

### TypeScript Interface

```typescript
export interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  backgroundImage?: string
  backgroundGradient?: boolean
  children?: React.ReactNode
  className?: string
}
```

## Props Reference

| Prop                 | Type        | Default  | Description                |
| -------------------- | ----------- | -------- | -------------------------- |
| `title`              | `string`    | Required | Main headline (h1)         |
| `subtitle`           | `string`    | Optional | Secondary headline         |
| `description`        | `string`    | Optional | Description text           |
| `primaryCTA`         | `object`    | Optional | Primary button config      |
| `secondaryCTA`       | `object`    | Optional | Secondary button config    |
| `backgroundImage`    | `string`    | Optional | Background image URL       |
| `backgroundGradient` | `boolean`   | `true`   | Show dark gradient overlay |
| `children`           | `ReactNode` | Optional | Custom content             |
| `className`          | `string`    | Optional | Additional CSS classes     |

## CTA Object Structure

```typescript
interface CTA {
  label: string          // Button text
  onClick?: () => void   // Click handler
  href?: string         // Navigation link
}

// Usage:
primaryCTA={{
  label: "Get Started",
  onClick: () => handleClick()
}}

// or

primaryCTA={{
  label: "Learn More",
  href: "/about"
}}
```

## Implementation Details

### Component Structure

```
HeroSection (section)
├── Gradient Overlay (optional)
├── Background Image (optional)
└── Content Container
    ├── Title (h1)
    ├── Subtitle (small, optional)
    ├── Description (p, optional)
    ├── CTA Container
    │   ├── Primary Button
    │   └── Secondary Button
    └── Children (optional)
```

### Class Structure

```typescript
// Root section
'relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden'

// Gradient overlay
'absolute inset-0 bg-gradient-to-b from-black/20 to-black/60'

// Content
'relative z-10 text-center text-white space-y-6'

// Title (h1)
'text-3xl md:text-5xl lg:text-6xl font-bold'

// Buttons container
'flex flex-col md:flex-row gap-4 justify-center'
```

## Usage Examples

### Basic Hero with Title Only

```tsx
import { HeroSection } from '@/components/organisms'

export function MinimalHero() {
  return <HeroSection title="Welcome to My Site" />
}
```

### Full-Featured Hero

```tsx
export function CompleteHero() {
  const handleGetStarted = () => {
    window.location.href = '/signup'
  }

  const handleScheduleDemo = () => {
    // Open calendar or modal
  }

  return (
    <HeroSection
      title="Launch Your Dreams"
      subtitle="Build amazing products"
      description="Everything you need to succeed"
      backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
      backgroundGradient={true}
      primaryCTA={{
        label: 'Get Started',
        onClick: handleGetStarted,
      }}
      secondaryCTA={{
        label: 'Schedule Demo',
        onClick: handleScheduleDemo,
      }}
    />
  )
}
```

### With Custom Content

```tsx
export function HeroWithCustom() {
  return (
    <HeroSection title="Customizable Hero" subtitle="Add anything you want">
      <div className="mt-8 space-y-4">
        <div className="flex justify-center gap-4">
          <StatCard value="10K+" label="Users" />
          <StatCard value="99.9%" label="Uptime" />
        </div>
      </div>
    </HeroSection>
  )
}
```

### As Page Layout

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Welcome"
        description="Explore our platform"
        primaryCTA={{ label: 'Start Now', href: '/signup' }}
      />
      <FeatureSection />
      <FAQSection />
      <Footer />
    </>
  )
}
```

## Background Image Handling

### Image URL Configuration

```tsx
// Unsplash (high-quality, free)
const bgImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'

// Custom image
const bgImage = '/images/hero-bg.jpg'

// CDN
const bgImage = 'https://cdn.example.com/hero.jpg'
```

### Responsive Images with Next.js

```tsx
import Image from 'next/image'

// Use Next.js Image component for optimization
export function OptimizedHero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
      />
      <HeroSection title="Title" backgroundGradient={true} />
    </div>
  )
}
```

### Gradient Overlay Control

```tsx
// With gradient (default) - better text readability
<HeroSection
  title="Clear Text"
  backgroundImage="https://..."
  backgroundGradient={true}
/>

// Without gradient - lighter overlay
<HeroSection
  title="Minimal Overlay"
  backgroundImage="https://..."
  backgroundGradient={false}
/>
```

## Styling Customization

### Custom Theme Variants

```typescript
// Dark theme (default)
<HeroSection title="Dark Hero" />

// Light theme with custom gradient
<HeroSection
  title="Light Hero"
  className="bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900"
/>

// With additional styling
<HeroSection
  title="Styled Hero"
  className="relative py-20 md:py-32"
/>
```

## Accessibility Features

### WCAG 2.1 Compliance (AA)

- **Semantic HTML**: Uses h1 for title
- **Text Contrast**: White text on dark overlay (7:1+)
- **Color Independence**: Content understandable without color
- **Button Accessibility**: Standard Button component with ARIA

### Screen Reader Support

```html
<section>
  <h1>Main Title</h1>
  <p>Subtitle</p>
  <p>Description</p>
  <button>CTA Text</button>
</section>
```

### Keyboard Navigation

- Tab through CTA buttons
- Enter to activate buttons
- Visible focus states

## Testing Coverage

### Test Suite: 18 Tests

```
✓ Rendering (3 tests)
  - Renders title
  - Renders with subtitle
  - Renders description

✓ CTA Buttons (4 tests)
  - Renders primary CTA
  - Renders secondary CTA
  - Both buttons present
  - Click handlers work

✓ Background (3 tests)
  - Renders gradient overlay (default)
  - Skips gradient when disabled
  - Applies background image

✓ Content (3 tests)
  - Children render properly
  - Layout centers content
  - Min height applied

✓ Props (2 tests)
  - Custom className applied
  - Background image URL set

✓ Accessibility (2 tests)
  - No a11y violations (jest-axe)
  - Proper heading hierarchy (h1)

✓ Responsive Design (2 tests)
  - Height responsive (min-h)
  - Text sizes responsive
```

### Running Tests

```bash
npm test -- HeroSection
npm test -- HeroSection --coverage
npm test -- HeroSection --watch
```

## Performance Optimization

### Bundle Size

- Component: ~1.2KB
- With types: ~1.6KB
- Gzipped: ~0.6KB

### Image Loading

```tsx
// Optimize large images
const optimizedUrl = backgroundImage + '?w=1200&h=600&fit=crop'

// Or use Next.js Image component
import Image from 'next/image'
```

### Responsive Height

```typescript
// Mobile: 500px minimum
// Desktop: 600px minimum
// Adjusts for content height automatically
```

## Responsive Behavior

### Mobile (< 768px)

```
Height: min-h-[500px]
Title: text-3xl (24px)
Buttons: flex-col (stacked)
Padding: px-4
```

### Tablet (768px - 1024px)

```
Height: min-h-[600px]
Title: text-4xl
Buttons: flex-row (side by side)
```

### Desktop (> 1024px)

```
Height: min-h-[600px]
Title: text-5xl - text-6xl
Buttons: flex-row with gap
Max-width: Content centered
```

## Common Issues & Solutions

### Issue: Text not visible on image

**Cause**: Background image too bright, gradient disabled
**Solution**: Enable gradient overlay or darken image

```typescript
// Wrong
<HeroSection
  title="Text"
  backgroundImage="bright-image.jpg"
  backgroundGradient={false}
/>

// Correct
<HeroSection
  title="Text"
  backgroundImage="image.jpg"
  backgroundGradient={true}
/>
```

### Issue: CTA buttons not responsive

**Cause**: No mobile-specific styling
**Solution**: Component handles responsive layout automatically

```typescript
// Already responsive
<HeroSection
  primaryCTA={{ label: "Start" }}
  secondaryCTA={{ label: "Learn" }}
/>
// Buttons stack on mobile, side-by-side on desktop
```

### Issue: Background image doesn't fill

**Cause**: CSS object-fit not applied
**Solution**: Use proper background attachment

```typescript
// Component handles background-size: cover
// and background-attachment: fixed (parallax)
```

### Issue: Title overflow on mobile

**Cause**: Text too long for small screens
**Solution**: Keep title concise (3-8 words)

```typescript
// Bad
title = 'Join thousands of users building amazing applications today'

// Good
title = 'Build Amazing Apps'
```

## Integration Patterns

### With Navigation

```tsx
export function PageWithHero() {
  return (
    <>
      <Navigation />
      <HeroSection title="Welcome" />
      <main>{/* Page content */}</main>
    </>
  )
}
```

### With Feature Section Below

```tsx
export function LandingPage() {
  return (
    <>
      <HeroSection
        title="Introduce Your Product"
        primaryCTA={{ label: 'Learn More' }}
      />
      <section className="py-12">
        <h2>Key Features</h2>
        <FeatureGrid />
      </section>
    </>
  )
}
```

## Browser Support

| Browser     | Support | Notes         |
| ----------- | ------- | ------------- |
| Chrome 90+  | ✅      | Full support  |
| Firefox 88+ | ✅      | Full support  |
| Safari 14+  | ✅      | Full support  |
| Edge 90+    | ✅      | Full support  |
| IE 11       | ❌      | Not supported |

## Migration Guide

### From HTML Hero Section

```tsx
// Before: Custom HTML
export function OldHero() {
  return (
    <section className="min-h-[500px] flex items-center">
      <div className="text-center">
        <h1>Title</h1>
        <p>Description</p>
        <button>CTA</button>
      </div>
    </section>
  )
}

// After: Using HeroSection
;<HeroSection
  title="Title"
  description="Description"
  primaryCTA={{ label: 'CTA' }}
/>
```

## Future Enhancements

- [ ] Video background support
- [ ] Parallax effects
- [ ] Animation variants
- [ ] Advanced button styling
- [ ] Testimonial carousel integration
- [ ] RTL support
- [ ] Dark mode variant

## Related Documentation

- [Button Component](../../atoms/Button/Technical-Documentation.md)
- [FeatureCard Component](../../molecules/FeatureCard/Technical-Documentation.md)
- [Design System](../../../docs/design-system.md)
