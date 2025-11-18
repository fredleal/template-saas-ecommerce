# TestimonialCard Component Learning Guide

## Overview

The TestimonialCard displays customer testimonials, reviews, or quotes with an avatar, quote text, author name, and optional title/company information. It's designed to build trust and credibility by showcasing real user feedback.

## Key Concepts

### Visual Elements

- **Avatar** - Circular image (60px) of the person quoted
- **Quote** - Main testimonial text with opening quote mark
- **Author** - Person's name (bold heading)
- **Title/Company** - Optional subtitle for context

### Content Structure

The component creates a hierarchical display:

1. Avatar image at top (visually prominent)
2. Quote text (main content)
3. Author name (attribution)
4. Optional role/company (additional context)

### Avatar Images

- Expects image URLs (Unsplash, Gravatar, etc.)
- Circular display with proper aspect ratio
- Handles image loading gracefully

## Common Usage Patterns

### Basic Testimonial

```tsx
import { TestimonialCard } from '@/components/molecules'

export function BasicTestimonial() {
  return (
    <TestimonialCard
      avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
      quote="This product changed how we work. Incredible quality!"
      author="Alex Johnson"
    />
  )
}
```

### With Title and Company

```tsx
<TestimonialCard
  avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  quote="The best solution for our team. Highly recommended!"
  author="Sarah Smith"
  title="Product Manager"
  company="TechCorp"
/>
```

### Testimonial Grid

```tsx
const testimonials = [
  {
    avatar: 'https://...',
    quote: 'Amazing product!',
    author: 'John Doe',
    title: 'CEO',
    company: 'StartupCo',
  },
  // ... more testimonials
]

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.author} {...testimonial} />
      ))}
    </div>
  )
}
```

### With Custom Styling

```tsx
<TestimonialCard
  avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  quote="Revolutionary approach to component design"
  author="Emily Wilson"
  title="Designer"
  company="DesignStudio"
  className="border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 to-white"
/>
```

### Carousel/Slider Integration

```tsx
import { useState } from 'react'

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    /* ... */
  ]

  return (
    <div className="space-y-4">
      <TestimonialCard {...testimonials[current]} />
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${
              i === current ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
```

## Best Practices

### Writing Effective Testimonials

**Do:**

- Keep quotes concise (1-3 sentences)
- Focus on specific benefits
- Use authentic language
- Include relevant credentials

```tsx
// Good testimonial
<TestimonialCard
  avatar="https://..."
  quote="Reduced our development time by 40% and improved code quality significantly."
  author="Mike Johnson"
  title="Lead Developer"
  company="WebSolutions Inc"
/>
```

**Don't:**

- Use generic praise ("Great product!")
- Make it too long
- Use overly formal language
- Omit author credentials

```tsx
// Poor testimonial
<TestimonialCard
  avatar="https://..."
  quote="This product is awesome. It's really good. Great job. Highly recommend."
  author="Anonymous"
/>
```

### Image Guidelines

- Use high-quality, professional photos
- Ensure consistent image sizing
- Prefer real customer photos over stock images
- Ensure proper aspect ratio for avatars

### Layout Considerations

**Single Column:**

```tsx
<div className="space-y-6 max-w-2xl">
  {testimonials.map(t => (
    <TestimonialCard key={t.author} {...t} />
  ))}
</div>
```

**Two Columns:**

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {testimonials.map(t => (
    <TestimonialCard key={t.author} {...t} />
  ))}
</div>
```

**Three Columns:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {testimonials.map(t => (
    <TestimonialCard key={t.author} {...t} />
  ))}
</div>
```

## Accessibility Considerations

1. **Semantic Structure** - Proper heading hierarchy
2. **Image Alt Text** - Ensure image providers support alt text
3. **Quote Semantics** - Uses semantic quote styling
4. **Color Contrast** - Text meets WCAG AA standards
5. **Responsive Text** - Readable on all screen sizes

## Design System Integration

### Typography

- **Quote**: Regular text, slightly larger for emphasis
- **Author**: h3 heading, bold weight
- **Title**: Small text, secondary color
- **Company**: Small text, muted color

### Spacing

- Vertical spacing between quote and author
- Proper padding around content
- Adequate gap in grids

### Colors

- Quote text: `text-gray-700` (default)
- Author: `text-gray-900` (darker)
- Title/Company: `text-gray-600` (muted)
- Avatar background: `bg-gray-200` (placeholder)

## Common Pitfalls

### ❌ Missing Avatar

```tsx
// Wrong - avatar is required
<TestimonialCard quote="..." author="..." />

// Correct - include avatar
<TestimonialCard
  avatar="https://..."
  quote="..."
  author="..."
/>
```

### ❌ No Author Attribution

```tsx
// Wrong - unclear who said this
<TestimonialCard
  avatar="https://..."
  quote="Amazing product!"
/>

// Correct - always include author
<TestimonialCard
  avatar="https://..."
  quote="Amazing product!"
  author="John Doe"
/>
```

### ❌ Too Long Quotes

```tsx
// Wrong - overly long testimonial
<TestimonialCard
  avatar="https://..."
  quote="This product is amazing because of many reasons including..."
  author="..."
/>

// Correct - concise quote (1-3 sentences)
<TestimonialCard
  avatar="https://..."
  quote="Increased productivity by 40% and improved team collaboration."
  author="..."
/>
```

### ❌ Generic Quotes

```tsx
// Wrong - too generic
<TestimonialCard
  avatar="https://..."
  quote="Great product! Highly recommended!"
  author="..."
/>

// Correct - specific benefits
<TestimonialCard
  avatar="https://..."
  quote="The intuitive interface reduced our onboarding time significantly."
  author="..."
/>
```

## Real-World Examples

### Landing Page Section

```tsx
export function TestimonialSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <TestimonialCard
          avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          quote="Transformed our workflow completely. Couldn't imagine working without it."
          author="Alex Chen"
          title="Engineering Manager"
          company="TechCorp"
        />
        {/* More testimonials */}
      </div>
    </section>
  )
}
```

### Social Proof Widget

```tsx
export function SocialProof() {
  return (
    <aside className="space-y-4">
      <TestimonialCard
        avatar="https://..."
        quote="Best investment we made this year!"
        author="Lisa Park"
        company="StartupCo"
      />
      <TestimonialCard
        avatar="https://..."
        quote="Customer support is outstanding."
        author="Mark Wilson"
        company="Enterprise Inc"
      />
    </aside>
  )
}
```

## Testing Strategies

The component includes 15 comprehensive tests covering:

- Avatar image rendering
- Quote text display
- Author and optional title/company rendering
- Custom styling
- Responsive design
- Accessibility compliance

## Performance Considerations

- Lightweight component (~0.6KB gzipped)
- Avatar images are external (consider lazy loading)
- Memoized for optimization
- Efficient text rendering

## Related Components

- **Avatar** - For standalone avatar display
- **Card** - For card container pattern
- **FeatureCard** - For feature showcase
- **Rating** - For star ratings with testimonials
