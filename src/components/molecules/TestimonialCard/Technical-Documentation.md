# TestimonialCard Component - Technical Documentation

## Component Architecture

### File Structure

```
src/components/molecules/TestimonialCard/
├── TestimonialCard.tsx           # Main component
├── TestimonialCard.test.tsx      # Test suite (15 tests)
├── Learning-Guide.md             # Educational guide
└── Technical-Documentation.md
```

### TypeScript Interface

```typescript
export interface TestimonialCardProps {
  avatar: string
  quote: string
  author: string
  title?: string
  company?: string
  className?: string
}
```

## Props Reference

| Prop        | Type     | Required | Description            |
| ----------- | -------- | -------- | ---------------------- |
| `avatar`    | `string` | Yes      | Image URL for avatar   |
| `quote`     | `string` | Yes      | Testimonial text/quote |
| `author`    | `string` | Yes      | Name of the person     |
| `title`     | `string` | No       | Job title or role      |
| `company`   | `string` | No       | Company name           |
| `className` | `string` | No       | Additional CSS classes |

## Implementation Details

### Component Structure

```
TestimonialCard
├── Avatar (img)
│   └── Circular image (60px)
├── Quote Container
│   ├── Opening quote mark
│   └── Quote text (p)
├── Author (h3)
└── Optional: Title & Company (small)
```

### Class Structure

```typescript
// Root container
'flex flex-col items-center text-center space-y-4'

// Avatar
'w-15 h-15 rounded-full object-cover'

// Quote
'text-gray-700 italic'

// Author
'h3 font-semibold text-gray-900'

// Title/Company
'text-sm text-gray-600'
```

## Usage Examples

### Basic Testimonial

```tsx
import { TestimonialCard } from '@/components/molecules'

export function BasicTestimonial() {
  return (
    <TestimonialCard
      avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      quote="This solution saved us countless hours. Exceptional quality!"
      author="John Doe"
    />
  )
}
```

### With Full Details

```tsx
<TestimonialCard
  avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  quote="Implemented in days, not weeks. Highly reliable platform."
  author="Sarah Johnson"
  title="CTO"
  company="TechVentures"
/>
```

### In a Grid Layout

```tsx
interface Testimonial {
  avatar: string
  quote: string
  author: string
  title?: string
  company?: string
}

const testimonials: Testimonial[] = [
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: 'Best decision we made!',
    author: 'Alex Chen',
    title: 'CEO',
    company: 'StartupInc',
  },
  // ... more testimonials
]

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map(testimonial => (
        <TestimonialCard
          key={`${testimonial.author}-${testimonial.company}`}
          {...testimonial}
        />
      ))}
    </div>
  )
}
```

### With Custom Styling

```tsx
<TestimonialCard
  avatar="https://..."
  quote="Outstanding service and support!"
  author="Mike Chen"
  title="Product Lead"
  company="EnterpriseCS"
  className="border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
/>
```

### Carousel Implementation

```tsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const testimonials = [
    /* ... */
  ]

  const next = () => setIndex((index + 1) % testimonials.length)
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="space-y-6">
      <TestimonialCard {...testimonials[index]} />
      <div className="flex justify-center gap-4">
        <button onClick={prev} className="p-2 hover:bg-gray-100 rounded">
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 hover:bg-gray-100 rounded">
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
```

## Avatar Image Handling

### Image URL Requirements

- Preferably 400x400px or larger
- Any image format supported by browser
- HTTPS URLs recommended for security
- Consider lazy loading for performance

### Image Providers

```typescript
// Unsplash
const avatar =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'

// Gravatar
const avatar = 'https://www.gravatar.com/avatar/hash?s=400'

// Internal
const avatar = '/images/avatars/john.jpg'
```

### Placeholder Handling

```tsx
interface TestimonialWithFallback extends TestimonialCardProps {
  fallbackColor?: string
}

export function TestimonialWithFallback({
  avatar,
  fallbackColor = 'bg-gray-400',
  ...props
}: TestimonialWithFallback) {
  return (
    <TestimonialCard
      {...props}
      avatar={avatar}
      className={!avatar ? fallbackColor : ''}
    />
  )
}
```

## Styling Customization

### Theme Variants

```typescript
// Standard variant (default)
<TestimonialCard {...testimonial} />

// Card variant
<TestimonialCard
  {...testimonial}
  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
/>

// Minimal variant
<TestimonialCard
  {...testimonial}
  className="border-l-4 border-blue-600 pl-6"
/>

// Featured variant
<TestimonialCard
  {...testimonial}
  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8"
/>
```

## Accessibility Features

### WCAG 2.1 Compliance (AA)

- **Semantic HTML**: Uses h3 for author name
- **Image Semantics**: Alt text should be set by image provider
- **Text Contrast**: Meets WCAG AA ratios
- **Color Independence**: Information not reliant on color alone

### Screen Reader Support

```html
<div role="article">
  <img alt="John Doe" src="..." />
  <blockquote>
    <p>This product is amazing...</p>
  </blockquote>
  <h3>John Doe</h3>
  <p>CEO, TechCorp</p>
</div>
```

### Semantic HTML

```typescript
// Component uses semantic elements:
// - <img> for avatar
// - <blockquote> or <p> for quote
// - <h3> for author name
// - <p> for title/company (implicit)
```

## Testing Coverage

### Test Suite: 15 Tests

```
✓ Rendering (4 tests)
  - Renders avatar image
  - Renders quote text
  - Renders author name
  - Renders title and company

✓ Props (3 tests)
  - Applies custom className
  - Handles optional title
  - Handles optional company

✓ Content (3 tests)
  - Displays complete testimonial
  - Renders heading for author (h3)
  - Formats subtitle text

✓ Accessibility (3 tests)
  - No a11y violations (jest-axe)
  - Semantic heading structure
  - Image accessibility

✓ Responsive Design (2 tests)
  - Responsive text sizing
  - Mobile and desktop layout
```

### Running Tests

```bash
npm test -- TestimonialCard
npm test -- TestimonialCard --coverage
npm test -- TestimonialCard --watch
```

## Performance Optimization

### Bundle Size

- Component: ~0.9KB
- With types: ~1.3KB
- Gzipped: ~0.5KB

### Image Optimization

```tsx
// Use next/image for optimization in Next.js
import Image from 'next/image'

;<Image
  src={avatar}
  alt={author}
  width={60}
  height={60}
  className="rounded-full"
/>
```

### Memoization

```typescript
export const TestimonialCard = memo(({ avatar, quote, author, ...props }) => {
  // Component implementation
})
```

## Integration Patterns

### With Rating Component

```tsx
import { TestimonialCard } from '@/components/molecules'
import { Rating } from '@/components/atoms'

export function RatedTestimonial() {
  return (
    <div className="space-y-4">
      <Rating value={5} readonly />
      <TestimonialCard
        avatar="https://..."
        quote="Outstanding experience!"
        author="Jane Doe"
      />
    </div>
  )
}
```

### With Hero Section

```tsx
export function TestimonialHero() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trusted by 10,000+ Users
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map(t => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </div>
    </section>
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

## Common Issues & Solutions

### Issue: Avatar image doesn't load

**Cause**: Invalid image URL or CORS issues
**Solution**: Ensure valid HTTPS URL and CORS headers

```typescript
// Bad
const avatar = 'http://example.com/image.jpg' // HTTP, not HTTPS

// Good
const avatar = 'https://images.unsplash.com/...' // HTTPS
```

### Issue: Quote text too long

**Cause**: No text truncation implemented
**Solution**: Keep quotes to 1-3 sentences, implement custom truncation if needed

```typescript
// Bad: Too long
quote = 'This product changed our entire workflow and how we manage projects...'

// Good: Concise
quote = 'Reduced project turnaround time by 40%'
```

### Issue: Layout breaks in mobile

**Cause**: No responsive classes on parent
**Solution**: Use grid with responsive columns

```typescript
// Wrong
<div className="flex">
  {testimonials.map(t => <TestimonialCard {...t} />)}
</div>

// Correct
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {testimonials.map(t => <TestimonialCard {...t} />)}
</div>
```

## Migration Guide

### From Custom Testimonial Component

```tsx
// Before: Custom implementation
export function OldTestimonial({ data }) {
  return (
    <div className="text-center">
      <img src={data.photo} className="rounded-full w-15 h-15" />
      <p>{data.text}</p>
      <h3>{data.name}</h3>
    </div>
  )
}

// After: Using TestimonialCard
;<TestimonialCard
  avatar={data.photo}
  quote={data.text}
  author={data.name}
  title={data.role}
  company={data.company}
/>
```

## Future Enhancements

- [ ] Video testimonial support
- [ ] Star rating integration
- [ ] Verified badge support
- [ ] Animation variants
- [ ] Custom quote styling
- [ ] RTL support
- [ ] Avatar badge/icons

## Related Documentation

- [Card Component](../Card/Technical-Documentation.md)
- [Rating Component](../../atoms/Rating/Technical-Documentation.md)
- [Design System](../../../docs/design-system.md)
