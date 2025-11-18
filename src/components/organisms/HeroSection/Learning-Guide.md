# HeroSection Component Learning Guide

## Overview

The HeroSection is a full-screen or full-width section that serves as the main visual entrance to a page. It typically includes a headline, optional subtitle, description, call-to-action buttons, and background image or gradient overlay.

## Key Concepts

### Layout Structure

- **Full-height section** - Minimum 500px mobile, 600px desktop
- **Centered content** - Text and buttons centered both horizontally and vertically
- **Background support** - Image backgrounds with optional gradient overlay
- **Flexible content** - CTA buttons and custom children

### Components Hierarchy

```
HeroSection
├── Background (optional gradient overlay)
├── Background Image (optional)
├── Content Container
│   ├── Title (h1 heading)
│   ├── Subtitle (optional small text)
│   ├── Description (optional paragraph)
│   ├── CTA Container (optional)
│   │   ├── Primary CTA Button
│   │   └── Secondary CTA Button
│   └── Children (optional custom content)
```

### CTA Structure

- **Primary CTA** - Main action (e.g., "Get Started")
- **Secondary CTA** - Alternative action (e.g., "Learn More")
- Both accept `onClick` or `href` props

## Common Usage Patterns

### Basic Hero Section

```tsx
import { HeroSection } from '@/components/organisms'

export function BasicHero() {
  return (
    <HeroSection
      title="Welcome to Our Platform"
      subtitle="Build amazing things"
      description="Create, collaborate, and launch your projects with ease"
    />
  )
}
```

### With CTA Buttons

```tsx
<HeroSection
  title="Ready to Get Started?"
  description="Join thousands of satisfied users"
  primaryCTA={{
    label: 'Get Started Free',
    onClick: () => handleGetStarted(),
  }}
  secondaryCTA={{
    label: 'Watch Demo',
    href: '/demo',
  }}
/>
```

### With Background Image

```tsx
<HeroSection
  title="Discover Innovation"
  description="Experience the future of technology"
  backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  primaryCTA={{ label: 'Explore' }}
/>
```

### Without Gradient Overlay

```tsx
<HeroSection
  title="Minimalist Design"
  description="Clean, simple, and elegant"
  backgroundGradient={false}
  primaryCTA={{ label: 'Learn More' }}
/>
```

### With Custom Children

```tsx
<HeroSection title="Custom Content" subtitle="Flexible and extensible">
  <div className="mt-8 space-y-4">
    <CustomWidget />
    <AnotherComponent />
  </div>
</HeroSection>
```

## Best Practices

### Content Guidelines

**Do:**

- Use clear, compelling headlines (3-8 words)
- Keep descriptions concise (2-3 sentences)
- Use action-oriented CTA text
- Test on mobile for readability

```tsx
// Good
<HeroSection
  title="Launch Your Startup"
  description="Everything you need to build and scale your business"
  primaryCTA={{ label: 'Start Building' }}
/>
```

**Don't:**

- Use overly long titles
- Make descriptions too technical
- Vague CTA labels
- Cluttered content

```tsx
// Poor
<HeroSection
  title="Our comprehensive platform provides solutions for building applications"
  description="..."
/>
```

### Visual Hierarchy

1. **Title** - Largest, most prominent
2. **Subtitle** - Secondary information
3. **Description** - Supporting details
4. **CTAs** - Call-to-action buttons
5. **Custom content** - Below main content

### Mobile Considerations

- Title: 24-32px (responsive scaling)
- Description: 16-18px
- Padding: Adequate margins on mobile
- Button stacking on small screens
- Image optimization for mobile

## Responsive Design

### Height Management

```typescript
// Mobile: min-h-[500px]
// Desktop (md+): min-h-[600px]
// Automatically responsive
```

### Text Sizing

```typescript
// Title (h1)
// Mobile: text-3xl
// md+: text-4xl
// lg+: text-5xl
// xl+: text-6xl

// Subtitle & Description
// Responsive scaling included
```

### Button Layout

```tsx
// Desktop: Buttons side by side
// Mobile: Buttons stack vertically
// Automatically handles via CSS
```

## Accessibility Best Practices

1. **Semantic HTML** - Uses h1 for title
2. **ARIA Labels** - Proper button labeling
3. **Color Contrast** - WCAG AA compliant
4. **Keyboard Navigation** - Tab through buttons
5. **Alt Text** - For background images

## Design System Integration

### Colors

- **Background Gradient** - Dark overlay (default)
- **Text** - White/light colors for contrast
- **Buttons** - Styled with Button component
- **Overlay** - Darkens background for readability

### Typography

- **Title**: h1, bold, large font size
- **Subtitle**: Smaller, secondary color
- **Description**: Regular weight, readable size
- **Buttons**: Via Button component

### Spacing

- Vertical padding: Responsive (py-12 to py-24)
- Horizontal padding: Responsive (px-4 to px-8)
- Gap between content elements
- Minimum height ensures content is centered

## Common Pitfalls

### ❌ Unclear Title

```tsx
// Wrong - vague
<HeroSection title="Welcome" />

// Correct - clear value proposition
<HeroSection title="Launch Your Project Today" />
```

### ❌ Text Too Long

```tsx
// Wrong - too much text
<HeroSection
  title="We provide comprehensive solutions for businesses..."
  description="Our platform offers many features including..."
/>

// Correct - concise
<HeroSection
  title="Build Faster"
  description="All the tools you need in one place"
/>
```

### ❌ Unreadable Text on Image

```tsx
// Wrong - text hard to read
<HeroSection
  backgroundImage="light-image.jpg"
  backgroundGradient={false}
  title="Light text on light background"
/>

// Correct - readable with gradient
<HeroSection
  backgroundImage="image.jpg"
  backgroundGradient={true}
  title="Text is readable"
/>
```

### ❌ Conflicting CTAs

```tsx
// Wrong - unclear primary action
<HeroSection
  primaryCTA={{ label: "Maybe Learn" }}
  secondaryCTA={{ label: "Maybe Start" }}
/>

// Correct - clear primary action
<HeroSection
  primaryCTA={{ label: "Get Started" }}
  secondaryCTA={{ label: "Learn More" }}
/>
```

## Real-World Examples

### Landing Page Hero

```tsx
export function LandingHero() {
  return (
    <HeroSection
      title="Transform Your Workflow"
      subtitle="The modern way to build"
      description="Streamline your development process with our intuitive platform"
      backgroundImage="https://images.unsplash.com/..."
      primaryCTA={{
        label: 'Start Free Trial',
        href: '/signup',
      }}
      secondaryCTA={{
        label: 'Schedule Demo',
        onClick: () => openCalendly(),
      }}
    />
  )
}
```

### Product Launch Hero

```tsx
export function ProductLaunchHero() {
  return (
    <HeroSection
      title="Introducing Next-Gen Features"
      description="Everything you've been waiting for is here"
      primaryCTA={{ label: 'Explore Features' }}
    />
  )
}
```

## Testing Strategies

The component includes 18 comprehensive tests covering:

- Title rendering
- Subtitle and description display
- CTA button rendering and interaction
- Background image and gradient handling
- Responsive design
- Accessibility compliance

## Performance Considerations

- Lightweight component (~1.2KB)
- Image loading handled by browser
- Consider lazy loading for images
- Memoized for optimization
- Efficient responsive design

## Related Components

- **Button** - CTA buttons
- **Card** - Content sections
- **FeatureCard** - Feature showcase below hero
- **Navigation** - Header/navigation
