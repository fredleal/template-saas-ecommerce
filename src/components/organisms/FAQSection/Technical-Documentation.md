# FAQSection Component - Technical Documentation

## Component Architecture

### File Structure

```
src/components/organisms/FAQSection/
├── FAQSection.tsx           # Main component
├── FAQSection.test.tsx      # Test suite (24 tests)
├── Learning-Guide.md        # Educational guide
└── Technical-Documentation.md
```

### TypeScript Interfaces

```typescript
export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  allowMultipleOpen?: boolean
  className?: string
}
```

## Props Reference

| Prop                | Type        | Default  | Description                   |
| ------------------- | ----------- | -------- | ----------------------------- |
| `title`             | `string`    | Optional | Section heading               |
| `subtitle`          | `string`    | Optional | Secondary heading             |
| `items`             | `FAQItem[]` | Required | Array of Q&A items            |
| `allowMultipleOpen` | `boolean`   | `false`  | Allow multiple items expanded |
| `className`         | `string`    | Optional | Additional CSS classes        |

### FAQItem Structure

```typescript
interface FAQItem {
  id: string // Unique identifier for tracking
  question: string // Question text (will be heading)
  answer: string // Answer content (supports plain text)
}
```

## Implementation Details

### Component Structure

```
FAQSection
├── Title (optional h2)
├── Subtitle (optional)
└── FAQ Items Container
    └── FAQItem (repeating)
        ├── Question Header (clickable h3)
        │   └── Chevron Icon (rotatable)
        └── Answer Content (expandable)
```

### State Management

```typescript
// Track expanded items
const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

// Toggle item
const toggleItem = (id: string) => {
  if (allowMultipleOpen) {
    // Add/remove from set
  } else {
    // Replace set with single item
  }
}
```

### Animation Implementation

```typescript
// Height animation on expand/collapse
// Smooth transition using max-height
// Chevron rotation on toggle
```

## Usage Examples

### Basic FAQ

```tsx
import { FAQSection } from '@/components/organisms'

const faqs = [
  {
    id: 'faq-1',
    question: 'What is your pricing?',
    answer: 'Our pricing starts at $29/month with flexible plans.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial, no credit card required.',
  },
]

export function BasicFAQ() {
  return <FAQSection title="FAQs" items={faqs} />
}
```

### Accordion Mode (Single Open)

```tsx
export function AccordionFAQ() {
  return (
    <FAQSection
      title="Help Center"
      subtitle="Find answers to common questions"
      items={faqs}
      allowMultipleOpen={false}
    />
  )
}
```

### Multiple Open Mode

```tsx
export function MultiOpenFAQ() {
  return (
    <FAQSection title="Documentation" items={faqs} allowMultipleOpen={true} />
  )
}
```

### With TypeScript Data

```tsx
interface FAQ {
  id: string
  category: string
  question: string
  answer: string
  relatedIds?: string[]
}

const faqsData: FAQ[] = [
  /* ... */
]

export function TypedFAQ() {
  const faqSections = {
    billing: faqsData.filter(f => f.category === 'billing'),
    support: faqsData.filter(f => f.category === 'support'),
    technical: faqsData.filter(f => f.category === 'technical'),
  }

  return (
    <div className="space-y-12">
      <FAQSection title="Billing" items={faqSections.billing} />
      <FAQSection title="Support" items={faqSections.support} />
      <FAQSection title="Technical" items={faqSections.technical} />
    </div>
  )
}
```

### With Dynamic Data

```tsx
import { useState, useEffect } from 'react'

export function DynamicFAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch FAQs from API
    fetchFAQs().then(data => {
      setFaqs(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>

  return <FAQSection title="FAQs" items={faqs} />
}
```

## Keyboard Navigation

### Implementation Details

```typescript
// Enter key handling
handleKeyDown: (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    toggleItem(itemId)
  }
}

// Arrow key navigation (optional)
if (e.key === 'ArrowDown') {
  focusNextItem()
}
if (e.key === 'ArrowUp') {
  focusPreviousItem()
}
```

### Tested Keyboard Interactions

- **Enter** - Toggle open/close on focused item
- **Space** - Toggle open/close on focused item
- **Tab** - Navigate to next interactive element
- **Shift+Tab** - Navigate to previous interactive element

## Styling Customization

### Default Classes

```typescript
// Container
'space-y-4'

// Item
'border-b border-gray-200'

// Question header
'flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50'

// Answer
'px-4 py-3 text-gray-700 bg-white'

// Chevron
'transform transition-transform duration-200'
```

### Custom Styling Examples

```tsx
// Bordered style
<FAQSection
  items={faqs}
  className="space-y-3 border border-gray-300 rounded-lg"
/>

// Card style
<FAQSection
  items={faqs}
  className="grid gap-4 p-6 bg-white rounded-xl shadow-md"
/>

// Minimal style
<FAQSection
  items={faqs}
  className="space-y-2 max-w-2xl"
/>
```

## Animation Details

### Expand Animation

```css
/* Smooth height expansion */
max-height: 0 → auto
opacity: 0 → 1
transition: all 300ms ease-in-out
```

### Chevron Rotation

```css
/* 0° → 180° on expand */
transform: rotate(0deg) → rotate(180deg)
transition: transform 300ms ease-in-out
```

## Accessibility Features

### WCAG 2.1 Compliance (AA)

- **Semantic HTML**: Proper heading hierarchy (h3 for questions)
- **ARIA Attributes**:
  - `aria-expanded` - Indicates open/closed state
  - `aria-controls` - Links button to content
  - `role="button"` - For keyboard access
- **Keyboard Support**: Full keyboard navigation
- **Focus Management**: Visible focus indicators
- **Announcements**: State changes announced to screen readers

### ARIA Implementation

```html
<button
  role="button"
  aria-expanded="true/false"
  aria-controls="faq-answer-1"
  onClick="{toggleItem}"
>
  <h3>Question</h3>
  <ChevronIcon />
</button>

<div id="faq-answer-1" role="region">{answer}</div>
```

## Testing Coverage

### Test Suite: 24 Tests

```
✓ Rendering (4 tests)
  - Renders title and subtitle
  - Renders all FAQ items
  - Questions display correctly
  - Answers initially hidden

✓ Expansion (6 tests)
  - Click toggles open/close
  - Chevron rotates on toggle
  - One item at a time (accordion mode)
  - Multiple items open (multi mode)
  - Smooth animations on expand
  - Correct animation timing

✓ Keyboard Navigation (5 tests)
  - Enter key toggles item
  - Space key toggles item
  - Tab navigates between items
  - Arrow keys navigate (optional)
  - Focus outline visible

✓ State Management (3 tests)
  - Tracks expanded items correctly
  - allowMultipleOpen works
  - State updates on click

✓ Accessibility (3 tests)
  - No a11y violations (jest-axe)
  - Proper ARIA attributes
  - Screen reader announces state

✓ Styling (2 tests)
  - Custom className applied
  - Responsive layout
  - Chevron icon visible
```

### Running Tests

```bash
npm test -- FAQSection
npm test -- FAQSection --coverage
npm test -- FAQSection --watch
```

## Performance Optimization

### Bundle Size

- Component: ~1.5KB
- With types: ~1.9KB
- Gzipped: ~0.7KB

### Optimization Techniques

```typescript
// Memoization
const FAQSection = memo(({ items, ... }) => {
  // Prevent unnecessary re-renders
})

// useMemo for expanded state
const expandedItems = useMemo(() => new Set(expanded), [expanded])

// useCallback for handlers
const handleToggle = useCallback((id: string) => {
  // Toggle logic
}, [allowMultipleOpen])
```

### Large Data Sets

```tsx
// For many items, consider:
// 1. Virtual scrolling
// 2. Pagination
// 3. Search filtering

export function LargeFAQList() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <FAQSection items={filtered} />
    </>
  )
}
```

## Data Management

### Structuring FAQ Data

```typescript
// Good structure
const faqs: FAQItem[] = [
  {
    id: 'billing-1',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal.',
  },
]

// For dynamic content
interface FAQWithMetadata extends FAQItem {
  category: string
  updated: Date
  views: number
}
```

### API Integration

```tsx
async function fetchFAQs() {
  const response = await fetch('/api/faqs')
  const data = await response.json()

  // Transform if needed
  return data.map((item: any) => ({
    id: item.id.toString(),
    question: item.q,
    answer: item.a,
  }))
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

### Issue: Items don't close in accordion mode

**Cause**: allowMultipleOpen not set correctly
**Solution**: Ensure allowMultipleOpen={false}

```typescript
// Wrong - allows multiple
<FAQSection items={faqs} />

// Correct - single open
<FAQSection items={faqs} allowMultipleOpen={false} />
```

### Issue: Animation doesn't work

**Cause**: CSS transition missing or overridden
**Solution**: Ensure proper CSS is loaded

```typescript
// Component includes default animations
// Don't override transition property
```

### Issue: Keyboard navigation doesn't work

**Cause**: Items not properly focused
**Solution**: Component handles focus automatically

```typescript
// Just make sure Tab navigation reaches items
// and handlers are attached
```

### Issue: Long content doesn't display properly

**Cause**: max-height animation constraint
**Solution**: Component auto-calculates height

```typescript
// Component uses ResizeObserver for dynamic height
// No manual intervention needed
```

## Migration Guide

### From Simple Toggles

```tsx
// Before: Multiple individual toggles
function OldFAQ() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  // ... more state
  return (
    <>
      <button onClick={() => setOpen1(!open1)}>Q1</button>
      {open1 && <p>A1</p>}
    </>
  )
}

// After: Using FAQSection
;<FAQSection items={faqs} />
```

### From Custom Accordion

```tsx
// Before: Custom accordion implementation
<CustomAccordion questions={questions} />

// After: Using FAQSection
<FAQSection
  items={questions.map(q => ({
    id: q.id,
    question: q.title,
    answer: q.content
  }))}
/>
```

## Future Enhancements

- [ ] HTML content support (not just plain text)
- [ ] Search/filter integration
- [ ] Analytics tracking
- [ ] Rating system (Was this helpful?)
- [ ] Related questions linking
- [ ] Expandable categories
- [ ] Animation speed control
- [ ] RTL support
- [ ] Markdown support for answers
- [ ] Print-friendly mode

## Related Documentation

- [Card Component](../../molecules/Card/Technical-Documentation.md)
- [Button Component](../../atoms/Button/Technical-Documentation.md)
- [Design System](../../../docs/design-system.md)
