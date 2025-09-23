# Template SaaS E-commerce Design System

A modern, TypeScript-first design system built with Next.js 15, Tailwind CSS, and atomic design principles. Features production-ready components for SaaS and e-commerce applications.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.0+-black)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-06B6D4)

## Features

- **🧩 Atomic Design**: Systematic component architecture (Atoms, Molecules, Organisms)
- **🎨 Design Tokens**: Consistent spacing, colors, and typography
- **♿ Accessibility First**: WCAG AA compliant components
- **📱 Responsive**: Mobile-first design approach
- **🔧 TypeScript**: Full type safety and developer experience
- **⚡ Performance**: Optimized bundle size and tree-shaking
- **🎯 E-commerce Ready**: Rating systems, pricing, product cards

## Quick Start

```bash
# Clone the repository
git clone https://github.com/fredleal/template-saas-ecommerce.git

# Install dependencies
cd template-saas-ecommerce
npm install

# Start development server
npm run dev

# Visit http://localhost:3000 to see the design system showcase
```

## Component Library

### Atoms (14 components)
```typescript
// Typography
import { Text, Heading } from '@/components/atoms'

// Form Controls  
import { Button, Input } from '@/components/atoms'

// Visual Elements
import { Badge, Icon, Price } from '@/components/atoms'

// Icons (9 available)
import { Icon } from '@/components/atoms'
// CartIcon, HeartIcon, SearchIcon, MenuIcon, PlusIcon, StarIcon
// UserIcon, FilterIcon, CheckIcon (coming soon)
```

### Molecules (3 components)
```typescript
// Layout
import { Card } from '@/components/molecules'

// E-commerce
import { ProductCard, Rating } from '@/components/molecules'
```

## Usage Examples

### Basic Components
```typescript
import { Button, Text, Badge, Icon } from '@/components/atoms'
import { Card, Rating } from '@/components/molecules'

export function ProductExample() {
  return (
    <Card variant="elevated" title="Premium Product">
      <Rating value={4.8} showValue showCount count={1247} />
      <Text size="sm" color="muted">
        High-quality product with excellent reviews
      </Text>
      <div className="flex gap-2 mt-4">
        <Badge variant="success" size="sm">In Stock</Badge>
        <Badge variant="info" size="sm">Free Shipping</Badge>
      </div>
      <Button variant="primary" className="mt-4">
        <Icon name="CartIcon" size="sm" decorative />
        Add to Cart
      </Button>
    </Card>
  )
}
```

### E-commerce Features
```typescript
import { Price, Rating, Badge } from '@/components/atoms'

// Pricing with discounts
<Price value={299.99} size="2xl" />
<Price value={399.99} size="lg" isDiscounted />

// Product ratings
<Rating value={4.5} showValue showCount count={892} />

// Status indicators
<Badge variant="warning" size="sm">Last 3 items</Badge>
```

## Architecture

### Atomic Design Structure
```
src/
├── components/
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Component combinations  
│   └── organisms/      # Complex sections (planned)
├── assets/
│   └── icons/          # Icon system by category
└── styles/
    └── globals.css     # Design tokens
```

### Icon System
Icons are organized by purpose:
- `ecommerce/` - CartIcon, HeartIcon
- `navigation/` - SearchIcon, MenuIcon  
- `actions/` - PlusIcon
- `feedback/` - StarIcon
- `social/` - UserIcon (planned)

## Development

### Adding New Components

1. **Atoms**: Place in `src/components/atoms/`
2. **Export**: Add to `src/components/atoms/index.ts`
3. **Showcase**: Demonstrate in `src/app/page.tsx`
4. **Types**: Extend existing patterns for consistency

### Design Tokens
Customize the system via Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* your brand colors */ },
        secondary: { /* your brand colors */ },
      }
    }
  }
}
```

## Testing (Coming Soon)

Testing implementation planned after reaching 9+ components:
- **Unit Tests**: Vitest + Testing Library
- **Coverage Goals**: 80% atoms, 60% molecules
- **Visual Testing**: Storybook integration planned

## Contributing

1. Check [GitHub Projects](https://github.com/users/fredleal/projects/2) for current tasks
2. Follow the issue template for new components
3. Ensure TypeScript compliance and accessibility
4. Add component to main showcase page

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 3.0+
- **Language**: TypeScript 5.0+
- **Icons**: Custom SVG icon system
- **Deployment**: Vercel (recommended)

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Built for modern web applications**