# FAQSection Component Learning Guide

## Overview

The FAQSection is an accordion-style component that displays frequently asked questions with expandable answers. It helps organize content, reduce page length, and improve user experience by allowing users to find answers at their own pace.

## Key Concepts

### Accordion Behavior

- **Expandable Items** - Click to expand/collapse answers
- **Single/Multiple Open** - Control whether one or multiple items can be open
- **Animated Transitions** - Smooth height animations
- **Keyboard Navigation** - Full keyboard support (Enter/Space/Arrows)

### FAQItem Structure

```typescript
interface FAQItem {
  id: string // Unique identifier
  question: string // Question text
  answer: string // Answer content
}
```

### State Management

- **Expanded Items** - Track which items are open
- **Allow Multiple** - Configuration option for behavior
- **Animation States** - Managed internally

## Common Usage Patterns

### Basic FAQ Section

```tsx
import { FAQSection } from '@/components/organisms'

export function BasicFAQ() {
  return (
    <FAQSection
      title="Frequently Asked Questions"
      items={[
        {
          id: '1',
          question: 'How do I get started?',
          answer: 'Simply sign up and follow the onboarding guide.',
        },
        {
          id: '2',
          question: "What's the pricing?",
          answer: 'We offer flexible pricing plans starting at...',
        },
      ]}
    />
  )
}
```

### With Single Item Open (Accordion Mode)

```tsx
<FAQSection
  title="Common Questions"
  subtitle="Find answers to your questions"
  items={faqs}
  allowMultipleOpen={false} // Only one open at a time
/>
```

### With Multiple Items Open

```tsx
<FAQSection
  title="Help & Support"
  items={faqs}
  allowMultipleOpen={true} // Multiple items can be open
/>
```

### With Custom Styling

```tsx
<FAQSection
  title="FAQ"
  items={faqs}
  className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
/>
```

## Best Practices

### Writing FAQ Content

**Do:**

- Be concise and clear
- Answer the specific question
- Use simple language
- Provide actionable information

```tsx
{
  question: "Can I upgrade or downgrade anytime?",
  answer: "Yes, you can change your plan anytime from your account settings."
}
```

**Don't:**

- Be vague or evasive
- Provide irrelevant information
- Use jargon without explanation
- Write walls of text

```tsx
// Bad
{
  question: "How does it work?",
  answer: "It works in various ways depending on many factors..."
}
```

### Organization

1. **Group by Topic** - Related questions together
2. **Order by Frequency** - Most asked questions first
3. **Logical Flow** - Follow user journey
4. **Clear Questions** - State complete questions

### Content Length

- **Short Answers** - 1-3 sentences ideal
- **Medium Answers** - Up to 5-7 sentences acceptable
- **Long Answers** - Consider splitting into multiple Q&As
- **Links** - Use for referencing other resources

## Keyboard Navigation

### Supported Keys

```
Tab       - Navigate between items
Enter     - Toggle item (when focused)
Space     - Toggle item (when focused)
ArrowUp   - Previous item (optional)
ArrowDown - Next item (optional)
Home      - First item (optional)
End       - Last item (optional)
```

### Focus Management

```tsx
// Component handles focus automatically
// Just use Tab to navigate through items
```

## Accessibility Best Practices

1. **Semantic HTML** - Proper heading hierarchy
2. **ARIA Attributes** - aria-expanded, aria-controls
3. **Keyboard Access** - All functionality keyboard accessible
4. **Screen Readers** - Announces item state changes
5. **Color Independence** - Chevron rotation provides state feedback

## Design System Integration

### Layout

- Items displayed as cards or list items
- Chevron icon indicates expandable state
- Smooth transitions with animation
- Proper spacing between items

### Typography

- **Title**: h2 heading, bold
- **Subtitle**: Optional secondary text
- **Question**: h3 heading, clickable region
- **Answer**: Regular text, readable size

### Colors

- **Question**: Default text color
- **Chevron**: Rotates when expanded
- **Hover**: Subtle background change
- **Focus**: Outline for keyboard navigation

## Common Pitfalls

### ❌ Too Many Items

```tsx
// Wrong - difficult to navigate with 30+ items
<FAQSection items={30itemArray} />

// Correct - group into multiple sections or paginate
<FAQSection items={faqs.slice(0, 8)} />
```

### ❌ Long Answers

```tsx
// Wrong - overwhelming when expanded
{
  question: "...",
  answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. " +
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
}

// Correct - concise, actionable
{
  question: "...",
  answer: "Visit our pricing page for detailed information."
}
```

### ❌ Unclear Questions

```tsx
// Wrong - ambiguous
{
  question: "What about it?",
  answer: "..."
}

// Correct - specific question
{
  question: "Can I use this on mobile devices?",
  answer: "..."
}
```

### ❌ No Title/Organization

```tsx
// Wrong - confusing context
<FAQSection items={randomItems} />

// Correct - clear purpose
<FAQSection
  title="Billing Questions"
  items={billingFAQs}
/>
```

## Real-World Examples

### Product Pricing FAQ

```tsx
export function PricingFAQ() {
  return (
    <FAQSection
      title="Pricing & Billing"
      subtitle="Get answers about our plans"
      items={[
        {
          id: 'pricing-1',
          question: 'Can I change my plan anytime?',
          answer: 'Yes, upgrade or downgrade your plan anytime.',
        },
        {
          id: 'pricing-2',
          question: 'Is there a free trial?',
          answer: 'Yes, we offer a 14-day free trial.',
        },
      ]}
      allowMultipleOpen={false}
    />
  )
}
```

### Product Support FAQ

```tsx
export function ProductFAQ() {
  return (
    <FAQSection
      title="Get Help"
      items={[
        {
          id: 'support-1',
          question: 'How do I reset my password?',
          answer: "Click 'Forgot Password' on the login page.",
        },
        {
          id: 'support-2',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards and PayPal.',
        },
      ]}
      allowMultipleOpen={true}
    />
  )
}
```

## Testing Strategies

The component includes 24 comprehensive tests covering:

- Item rendering and expansion
- Keyboard navigation (Enter/Space)
- Multiple item management
- Animation behavior
- Accessibility compliance
- Custom styling
- State management

## Performance Considerations

- Lightweight component (~1.5KB)
- Efficient state management
- Smooth animations (no janky transitions)
- No external dependencies beyond React
- Handles large question lists efficiently

## Data Structure

### TypeScript Types

```typescript
interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  allowMultipleOpen?: boolean
  className?: string
}
```

## Related Components

- **Card** - For standalone Q&A display
- **Collapse** - Similar accordion behavior
- **Button** - For custom actions within FAQ
- **Icon** - For decorative chevron
