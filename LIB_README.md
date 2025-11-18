# @fredleal/saas-components

A comprehensive React component library built with TypeScript, Tailwind CSS, and Atomic Design principles. This library provides a complete set of reusable components for building modern SaaS and e-commerce applications.

## Features

✨ **Atomic Design System** - Components organized in atoms, molecules, and organisms
🎨 **Customizable Schemas** - JSON Schema definitions for each component
📱 **Fully Responsive** - Mobile-first design approach
♿ **Accessible** - WCAG 2.1 AA compliant
🔒 **Type Safe** - Built with TypeScript
🎯 **Zero Dependencies** - Only React and React DOM as peer dependencies

## Installation

```bash
npm install @fredleal/saas-components
```

## Usage

### Import Components

```tsx
import { Button, Card, FeatureCard } from '@fredleal/saas-components'

export function MyComponent() {
  return (
    <Card>
      <h2>Welcome</h2>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

### Import Schemas (for admin panels)

```tsx
import {
  heroSchema,
  featureCardSchema,
} from '@fredleal/saas-components/schemas'
import Form from '@rjsf/core'

export function AdminPanel() {
  return <Form schema={heroSchema} onSubmit={data => console.log(data)} />
}
```

### Import by Category

```tsx
// Import only atoms
import { Button, Input, Badge } from '@fredleal/saas-components/atoms'

// Import only molecules
import {
  Card,
  FeatureCard,
  PostCard,
} from '@fredleal/saas-components/molecules'

// Import only organisms
import { Section } from '@fredleal/saas-components/organisms'

// Import only schemas
import { schemaRegistry } from '@fredleal/saas-components/schemas'
```

## Components

### Atoms

- **Button** - Primary, secondary, outline, ghost, danger variants
- **Input** - Text input with validation support
- **Badge** - Status, variant, and color options
- **Icon** - Scalable icon component

### Molecules

- **Card** - Container with shadow and padding
- **FeatureCard** - Feature showcase with icon and description
- **Rating** - Star rating display
- **TestimonialCard** - Testimonial with author info
- **PostCard** - Blog post card preview
- **Prose** - Rich text content styling
- **CodeBlock** - Syntax highlighted code
- **TableOfContents** - Auto-generated TOC

### Organisms

- Coming soon...

## Schemas

Each component has a corresponding JSON Schema that defines its customizable props. These schemas are used to:

1. **Generate admin forms** - Create forms for editing component props
2. **Validate props** - Ensure data conforms to expected structure
3. **Document props** - Self-documenting component APIs

```tsx
import { schemaRegistry } from '@fredleal/saas-components/schemas'

// Access any component schema
const buttonSchema = schemaRegistry.Button
const heroSchema = schemaRegistry.Hero
```

## Development

### Local Development

```bash
npm run dev
```

### Building

```bash
npm run build
npm run build:lib
```

### Testing

```bash
npm test
npm run test:watch
npm run test:ui
npm run test:coverage
```

### Linting & Formatting

```bash
npm run lint
npm run lint:check
npm run format
npm run format:check
```

## Publishing to NPM

```bash
# Ensure everything is working
npm run lint:check
npm test
npm run build

# Bump version
npm version patch|minor|major

# Publish
npm publish
```

## TypeScript

Full TypeScript support with type definitions included.

```tsx
import type { ButtonProps, FeatureCardProps } from '@fredleal/saas-components'

interface MyProps extends ButtonProps {
  customProp: string
}
```

## Tailwind CSS

This library uses Tailwind CSS. Make sure your project has Tailwind configured:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
module.exports = {
  content: ['./node_modules/@fredleal/saas-components/**/*.{js,jsx,ts,tsx}'],
}
```

## Design System

- **Colors**: Primary (blue), Secondary (purple), Accent (teal), Semantic (success, warning, error, info), Neutral (gray)
- **Typography**: Display, Heading, Body, Caption sizes
- **Spacing**: Consistent spacing scale
- **Shadows**: Multiple elevation levels
- **Animations**: Smooth transitions and keyframe animations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © 2025 Fred Leal

## Links

- [GitHub Repository](https://github.com/fredleal/template-saas-ecommerce)
- [Documentation](https://github.com/fredleal/template-saas-ecommerce/docs)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
