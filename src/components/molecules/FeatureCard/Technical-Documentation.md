# FeatureCard Component - Technical Documentation

## Component Architecture

### File Structure

```
src/components/molecules/FeatureCard/
├── FeatureCard.tsx           # Main component
├── FeatureCard.test.tsx      # Test suite (11 tests)
├── Learning-Guide.md         # Educational guide
└── Technical-Documentation.md
```

### TypeScript Interface

```typescript
export interface FeatureCardProps {
  icon: IconName
  title: string
  description: string
  iconSize?: 'sm' | 'md' | 'lg'
  iconColor?: 'primary' | 'secondary' | 'current'
  className?: string
}
```

## Props Reference

| Prop          | Type                                    | Default     | Description                |
| ------------- | --------------------------------------- | ----------- | -------------------------- |
| `icon`        | `IconName`                              | Required    | Icon from Icon component   |
| `title`       | `string`                                | Required    | Feature title (h3 heading) |
| `description` | `string`                                | Required    | Feature description text   |
| `iconSize`    | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | Icon size variant          |
| `iconColor`   | `'primary' \| 'secondary' \| 'current'` | `'primary'` | Icon color variant         |
| `className`   | `string`                                | -           | Additional CSS classes     |

### IconName Type

Available icon names:

- `'CartIcon'`
- `'HeartIcon'`
- `'SearchIcon'`
- `'MenuIcon'`
- `'PlusIcon'`
- `'StarIcon'`
- `'UserIcon'`
- `'FilterIcon'`
- `'CheckIcon'`
- `'XIcon'`

## Implementation Details

### Component Structure

```
FeatureCard
├── Icon Container (div)
│   ├── Icon Component (SVG)
├── Title (h3)
└── Description (p)
```

### Class Structure

```typescript
// Root container
'flex flex-col items-center text-center'

// Icon container
'bg-blue-50 p-4 rounded-lg'

// Title
'h3 font-semibold text-lg'

// Description
'text-gray-600 line-clamp-3'
```

## Usage Examples

### Basic Implementation

```tsx
import { FeatureCard } from '@/components/molecules'

export function BasicFeature() {
  return (
    <FeatureCard
      icon="CheckIcon"
      title="Verified"
      description="All components are thoroughly tested and verified"
    />
  )
}
```

### Multiple Cards with TypeScript

```tsx
interface Feature {
  icon: IconName
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'CheckIcon',
    title: 'Quality',
    description: 'Production-ready components',
  },
  {
    icon: 'StarIcon',
    title: 'Performance',
    description: 'Optimized for speed and efficiency',
  },
]

export function FeatureList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}
```

### Advanced Styling

```tsx
// With custom className
<FeatureCard
  icon="PlusIcon"
  title="Customizable"
  description="Extensive styling options available"
  className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
/>

// With size variations
<div className="grid grid-cols-3 gap-4">
  <FeatureCard
    icon="CheckIcon"
    title="Small"
    description="Compact view"
    iconSize="sm"
  />
  <FeatureCard
    icon="StarIcon"
    title="Medium"
    description="Default size"
    iconSize="md"
  />
  <FeatureCard
    icon="PlusIcon"
    title="Large"
    description="Prominent display"
    iconSize="lg"
  />
</div>
```

### With Layout Patterns

```tsx
// 3-column grid (responsive)
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Feature cards */}
</div>

// 2-column grid (responsive)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Feature cards */}
</div>

// Single row with scroll
<div className="flex overflow-x-auto gap-4 pb-4">
  {/* Feature cards */}
</div>
```

## Icon Size and Color Mapping

### Size Variants

| Size | Icon Size | Container Width | Class       |
| ---- | --------- | --------------- | ----------- |
| `sm` | 16px      | 40px            | `w-10 h-10` |
| `md` | 20px      | 48px            | `w-12 h-12` |
| `lg` | 24px      | 56px            | `w-14 h-14` |

### Color Implementation

```typescript
const colorMap: Record<string, string> = {
  primary: 'text-blue-600',
  secondary: 'text-gray-600',
  current: 'text-current',
}
```

## Accessibility Features

### WCAG 2.1 Compliance (AA)

- **Semantic HTML**: Uses h3 for title
- **Color Independence**: Information not reliant on color alone
- **Decorative Icon**: Marked with `aria-hidden="true"`
- **Text Hierarchy**: Clear visual hierarchy with typography

### Screen Reader Experience

```html
<div class="feature-card">
  <div class="icon-container" aria-hidden="true">
    <svg><!-- Icon --></svg>
  </div>
  <h3>Feature Title</h3>
  <p>Feature description provides context</p>
</div>
```

### Keyboard Navigation

- Component is not interactive (no focus states needed)
- Wrap in clickable wrapper if action needed
- Links within description are naturally focusable

## Testing Coverage

### Test Suite: 11 Tests

```
✓ Rendering (4 tests)
  - Renders title and description
  - Renders correct icon
  - Uses proper heading level (h3)
  - Renders with all size variants

✓ Props (3 tests)
  - Applies custom className
  - Handles icon size variants
  - Handles icon color variants

✓ Content (2 tests)
  - Truncates long descriptions (line-clamp-3)
  - Renders title as heading

✓ Accessibility (2 tests)
  - No a11y violations (jest-axe)
  - Icon marked as decorative (aria-hidden)
```

### Running Tests

```bash
npm test -- FeatureCard
npm test -- FeatureCard --coverage
npm test -- FeatureCard --watch
```

## Performance Optimization

### Bundle Size

- Component: ~0.8KB
- With types: ~1.2KB
- Gzipped: ~0.4KB

### Optimization Techniques

- Memoized with React.memo
- Minimal prop calculations
- Uses Tailwind utilities (no CSS-in-JS)
- No external dependencies

### Render Performance

```typescript
// Memoized to prevent unnecessary re-renders
export const FeatureCard = memo(({ icon, title, description, ... }) => {
  // Component implementation
})
```

## Integration with Layout Patterns

### Hero Section Integration

```tsx
export function HeroWithFeatures() {
  return (
    <div>
      <section className="hero">{/* Hero content */}</section>
      <section className="py-12">
        <div className="grid grid-cols-3 gap-8">
          {features.map(f => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>
    </div>
  )
}
```

### Card Grid with Heading

```tsx
export function FeatureShowcase() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Key Features</h2>
        <p className="text-gray-600">Everything you need</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature cards */}
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

### Issue: Icon not displaying

**Cause**: Invalid IconName
**Solution**: Check available icon names in Icon component

```typescript
// Wrong
<FeatureCard icon="Check" ... /> // ❌

// Correct
<FeatureCard icon="CheckIcon" ... /> // ✅
```

### Issue: Long descriptions are cut off awkwardly

**Cause**: Using line-clamp-3 Tailwind class
**Solution**: Keep descriptions to 2-3 short lines

```typescript
// Bad
description = 'This very long description explains many things about...'

// Good
description = 'High-quality, tested components ready for production'
```

### Issue: Icon color not changing

**Cause**: Using invalid color prop value
**Solution**: Use only available color options

```typescript
// Wrong colors
<FeatureCard icon="StarIcon" iconColor="red" ... /> // ❌

// Correct colors
<FeatureCard icon="StarIcon" iconColor="primary" ... /> // ✅
```

### Issue: Text not centered properly

**Cause**: Component already centers - parent override
**Solution**: Don't apply text-left or text-right to parent

```typescript
// Wrong
<div className="text-left">
  <FeatureCard ... /> {/* Will not be centered */}
</div>

// Correct
<div> {/* No text alignment forced */}
  <FeatureCard ... /> {/* Properly centered */}
</div>
```

## Migration Guide

### From Card + Icon Pattern

```tsx
// Before: Custom implementation
export function OldFeature() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-50 p-4 rounded-lg">
        <Icon name="StarIcon" />
      </div>
      <h3 className="font-semibold">Title</h3>
      <p className="text-gray-600">Description</p>
    </div>
  )
}

// After: Using FeatureCard
;<FeatureCard icon="StarIcon" title="Title" description="Description" />
```

### From Custom Component

```tsx
// Before
<CustomFeatureCard feature={feature} />

// After
<FeatureCard
  icon={feature.icon}
  title={feature.title}
  description={feature.description}
/>
```

## Future Enhancements

- [ ] Badge support for labels
- [ ] Link integration for clickable cards
- [ ] Animation variants
- [ ] RTL support
- [ ] Hover effects
- [ ] Icon background color options

## Related Documentation

- [Icon Component](../../atoms/Icon/Technical-Documentation.md)
- [Card Component](../Card/Technical-Documentation.md)
- [Design System](../../../docs/design-system.md)
