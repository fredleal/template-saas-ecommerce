# FeatureCard Component Learning Guide

## Overview

The FeatureCard is a visual component that showcases a single feature or capability with an icon, title, and description. It's commonly used in landing pages, feature lists, and showcase sections to communicate key product benefits.

## Key Concepts

### Visual Hierarchy

- **Icon** - Large, centered, colored icon with background
- **Title** - Prominent heading (h3)
- **Description** - Supporting text, truncated to 3 lines max

### Icon System

The component uses the atomic Icon component for consistent icon rendering. Icons are:

- Positioned in a centered container with background color
- Configurable for size and color
- Automatically marked as decorative (aria-hidden)

### Sizing

- **sm** - Small icon (16px) - Compact displays
- **md** - Medium icon (20px, default) - Standard use
- **lg** - Large icon (24px) - Feature highlights

## Common Usage Patterns

### Basic Feature Card

```tsx
import { FeatureCard } from '@/components/molecules'

export function BasicFeatureCard() {
  return (
    <FeatureCard
      icon="StarIcon"
      title="High Quality"
      description="Premium quality components built with care and attention to detail"
    />
  )
}
```

### Feature Grid (Multiple Cards)

```tsx
const features = [
  {
    icon: 'CheckIcon',
    title: 'Easy Integration',
    description:
      'Simple API that integrates seamlessly with your existing codebase',
  },
  {
    icon: 'StarIcon',
    title: 'Production Ready',
    description:
      'Battle-tested components used in production by thousands of developers',
  },
  {
    icon: 'PlusIcon',
    title: 'Fully Customizable',
    description:
      'Extensive props and styling options for complete customization',
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map(feature => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  )
}
```

### With Custom Styling

```tsx
<FeatureCard
  icon="HeartIcon"
  title="Made with Love"
  description="Crafted with attention to every detail"
  className="border-2 border-blue-200 rounded-xl p-6"
  iconColor="primary"
  iconSize="lg"
/>
```

### Icon Color Variations

```tsx
<>
  <FeatureCard
    icon="PlusIcon"
    title="Primary"
    description="Using primary color"
    iconColor="primary"
  />
  <FeatureCard
    icon="CheckIcon"
    title="Secondary"
    description="Using secondary color"
    iconColor="secondary"
  />
  <FeatureCard
    icon="StarIcon"
    title="Current"
    description="Using current text color"
    iconColor="current"
  />
</>
```

### Icon Size Variations

```tsx
<>
  <FeatureCard
    icon="PlusIcon"
    title="Small"
    description="Small icon variant"
    iconSize="sm"
  />
  <FeatureCard
    icon="CheckIcon"
    title="Medium"
    description="Medium icon variant (default)"
    iconSize="md"
  />
  <FeatureCard
    icon="StarIcon"
    title="Large"
    description="Large icon variant for emphasis"
    iconSize="lg"
  />
</>
```

## Accessibility Best Practices

1. **Meaningful Titles** - Titles should clearly describe the feature
2. **Descriptive Text** - Description text provides context without relying on icon
3. **Icon as Decoration** - Icons are marked `aria-hidden` since the text provides meaning
4. **Semantic HTML** - Uses `h3` heading for proper document structure
5. **Color Independence** - Information shouldn't rely solely on color

## Design System Integration

### Layout Structure

- Flex column layout with centered alignment
- Text is centered and vertically spaced
- Icon container has padding and rounded corners
- Default background color: blue-50

### Typography

- **Title**: h3 element, font-semibold
- **Description**: Regular text, truncated to 3 lines (line-clamp-3)
- **Line Height**: Optimized for readability

### Colors

- **Icon Background**: `bg-blue-50` (default)
- **Icon Colors**: primary, secondary, current
- **Text**: Default text color (inherits from theme)

## Common Pitfalls

### ❌ Wrong Icon Name

```tsx
// Wrong - icon="Plus" doesn't exist
<FeatureCard icon="Plus" title="Add" description="Add items" />

// Correct - use IconName type
<FeatureCard icon="PlusIcon" title="Add" description="Add items" />
```

### ❌ Missing or Vague Description

```tsx
// Wrong - description is unclear
<FeatureCard icon="StarIcon" title="Great" description="." />

// Correct - clear, helpful description
<FeatureCard
  icon="StarIcon"
  title="Quality Assurance"
  description="Every component undergoes rigorous testing"
/>
```

### ❌ Relying Only on Icon

```tsx
// Wrong - meaning is unclear without icon
<FeatureCard icon="StarIcon" title="..." description="..." />

// Correct - text provides clear meaning
<FeatureCard
  icon="StarIcon"
  title="Premium Quality"
  description="Thoroughly tested and production-ready"
/>
```

### ❌ Text Too Long

```tsx
// Wrong - description is truncated awkwardly
<FeatureCard
  icon="CheckIcon"
  title="Feature"
  description="This is a very long description that will be truncated and may not make sense when cut off in the middle of a sentence"
/>

// Correct - concise description (2-3 lines)
<FeatureCard
  icon="CheckIcon"
  title="Fully Tested"
  description="Comprehensive test coverage ensures reliability"
/>
```

## Layout Considerations

### Spacing in Grid

```tsx
// Good spacing for card grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map(feature => (
    <FeatureCard key={feature.title} {...feature} />
  ))}
</div>
```

### Card Count

- **1-2 cards**: Full width works well
- **3 cards**: Equal columns on desktop, stacked on mobile
- **4+ cards**: Consider 2x2 grid or carousel

### Background Context

- Works well on white backgrounds
- Consider darker icon background for dark themes
- Ensure sufficient contrast

## Real-World Examples

### Landing Page Hero Section

```tsx
export function FeaturesSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Product?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <FeatureCard
          icon="CheckIcon"
          title="Easy Integration"
          description="Drop-in replacement for existing solutions"
        />
        <FeatureCard
          icon="StarIcon"
          title="Production Ready"
          description="Used by thousands of developers worldwide"
        />
        <FeatureCard
          icon="PlusIcon"
          title="Always Improving"
          description="Regular updates with new features"
        />
      </div>
    </section>
  )
}
```

### Product Comparison

```tsx
export function ProductComparison() {
  return (
    <div className="space-y-6">
      <FeatureCard
        icon="CheckIcon"
        title="Our Solution"
        description="Modern, performant, and easy to maintain"
        iconColor="primary"
      />
      <FeatureCard
        icon="StarIcon"
        title="Industry Standard"
        description="Trusted by enterprises and startups"
        iconColor="primary"
      />
    </div>
  )
}
```

## Testing Strategies

The component includes 11 comprehensive tests covering:

- Icon rendering and properties
- Title and description content
- Custom className application
- Size and color variants
- Text truncation behavior
- Accessibility compliance

## Performance Notes

- Lightweight component (~0.5KB gzipped)
- No external dependencies beyond Icon component
- Efficient text truncation with Tailwind utilities
- Memoized for re-render optimization

## Related Components

- **Icon** - For icon rendering
- **Card** - For general card container
- **Button** - For call-to-action elements
- **Heading** - For section titles
