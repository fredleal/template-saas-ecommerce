# Checkbox Component Learning Guide

## Overview

The Checkbox component is a fundamental atomic element that provides an accessible way for users to toggle between two states (checked/unchecked). It supports both controlled and uncontrolled modes, with additional features like indeterminate state for partial selections.

## Key Concepts

### Controlled vs Uncontrolled

- **Controlled**: Parent component manages the `checked` state via `onChange` callback
- **Uncontrolled**: Component manages its own state with optional `defaultChecked` initialization

### States

1. **Unchecked** (default) - Boolean false state
2. **Checked** - Boolean true state
3. **Indeterminate** - Partial selection state (useful for parent checkboxes with multiple children)

### Size Variants

- `sm` - Small checkbox (16px)
- `md` - Medium checkbox (20px, default)
- `lg` - Large checkbox (24px)

## Common Usage Patterns

### Basic Checkbox

```tsx
import { Checkbox } from '@/components/atoms'

export function BasicCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
      label="Accept terms"
    />
  )
}
```

### With Label and Position

```tsx
<Checkbox
  label="I agree to the terms"
  labelPosition="right" // 'left' or 'right'
  disabled={false}
/>
```

### Indeterminate State

```tsx
const [parentChecked, setParentChecked] = useState(false)
const [childrenChecked, setChildrenChecked] = useState([false, false])
const allChecked = childrenChecked.every(Boolean)
const someChecked = childrenChecked.some(Boolean)

return (
  <>
    <Checkbox
      checked={allChecked}
      indeterminate={someChecked && !allChecked}
      onChange={() => setChildrenChecked([!allChecked, !allChecked])}
      label="Select all"
    />
    <div style={{ marginLeft: '1.5rem' }}>
      {childrenChecked.map((checked, i) => (
        <Checkbox
          key={i}
          checked={checked}
          onChange={e => {
            const newChecked = [...childrenChecked]
            newChecked[i] = e.target.checked
            setChildrenChecked(newChecked)
          }}
          label={`Option ${i + 1}`}
        />
      ))}
    </div>
  </>
)
```

### Size Variations

```tsx
<>
  <Checkbox size="sm" label="Small" />
  <Checkbox size="md" label="Medium" />
  <Checkbox size="lg" label="Large" />
</>
```

## Accessibility Best Practices

1. **Always provide labels** - Use `label` prop for screen readers
2. **Keyboard navigation** - Space/Enter to toggle, Tab to navigate
3. **ARIA attributes** - Component auto-generates appropriate ARIA labels
4. **Color contrast** - Labels meet WCAG AA standards
5. **Focus states** - Visible focus indicator for keyboard users

## Design System Integration

### Tailwind Classes

- Uses utility classes for sizing and spacing
- Responsive design support via `className` prop
- Color palette: `bg-blue-600`, `border-gray-300`

### Theme Customization

```tsx
// Custom styling
<Checkbox className="custom-checkbox-class" label="Custom styled" />
```

## Common Pitfalls

### ❌ Forgetting onChange Handler

```tsx
// Wrong - state won't update
<Checkbox checked={true} />

// Correct
<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```

### ❌ Mixing Controlled and Uncontrolled

```tsx
// Wrong - don't mix modes
<Checkbox checked={true} defaultChecked={false} />

// Correct - use one approach
<Checkbox checked={true} onChange={handleChange} />
```

### ❌ Not Handling Indeterminate

```tsx
// Indeterminate won't persist without explicit handling
<Checkbox indeterminate={true} />

// Correct - manage state
<Checkbox
  checked={allSelected}
  indeterminate={someSelected && !allSelected}
/>
```

## Testing

The component includes 17 comprehensive tests covering:

- Rendering with labels and sizes
- State management (checked, unchecked, indeterminate)
- User interactions and onChange callbacks
- Accessibility compliance (WCAG AA)
- Keyboard navigation (Space/Enter keys)
- Custom styling and disabled states

## Performance Considerations

- Component is lightweight (~0.5KB gzipped)
- Memoized to prevent unnecessary re-renders
- No external dependencies beyond React
- Efficient event handling with synthetic events

## Related Components

- **Button** - For primary actions
- **Toggle** - For immediate state changes without explicit submit
- **RadioGroup** - For mutually exclusive selections
