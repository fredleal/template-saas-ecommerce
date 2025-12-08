# Template SaaS E-commerce Design System

A modern, TypeScript-first design system built with Next.js 15, Tailwind CSS, and atomic design principles. Features production-ready components with comprehensive test coverage for SaaS and e-commerce applications.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.0+-black)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0+-06B6D4)
![Tests](https://img.shields.io/badge/Tests-1144_Passing-brightgreen)
![Coverage](https://img.shields.io/badge/Coverage-85%25+-green)
![Components](https://img.shields.io/badge/Components-48-blue)
![Atoms](https://img.shields.io/badge/Atoms-17-purple)
![Molecules](https://img.shields.io/badge/Molecules-24-orange)
![Organisms](https://img.shields.io/badge/Organisms-7-red)

## Features

- **Atomic Design**: Systematic component architecture (17 Atoms, 24 Molecules, 7 Organisms)
- **Complete Testing**: 1144 tests with 85%+ coverage across all components
- **Design Tokens**: Consistent spacing, colors, and typography
- **Accessibility First**: WCAG AA compliant with automated checks
- **Responsive**: Mobile-first design approach
- **TypeScript**: Full type safety and developer experience
- **Performance**: Optimized bundle size and tree-shaking
- **E-commerce Ready**: Price display (PIX, installments), product cards, carousels
- **Brazilian E-commerce**: PIX discount, installment pricing, stock badges
- **Quality Gates**: 80% coverage for atoms, 60% for molecules
- **CI/CD**: Automated testing and builds with GitHub Actions
- **NPM Ready**: Publishable package with proper exports and types

## Quick Start

```bash
# Clone the repository
git clone https://github.com/fredleal/template-saas-ecommerce.git

# Install dependencies
cd template-saas-ecommerce
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# View coverage report
npm run test:coverage
```

## Testing

### Test Summary

```
Test Files  54 passed (54)
     Tests  1144 passed (1144)
  Duration  ~7.5 seconds
```

### Testing Stack

- **Vitest 2.1.0** - Modern, fast test runner
- **Testing Library** - React component testing
- **jest-axe** - Automated accessibility testing
- **jsdom** - Browser environment simulation

### Coverage Requirements

- **Atoms**: 80% minimum coverage
- **Molecules**: 60% minimum coverage
- **Organisms**: 70% minimum coverage
- **Automated accessibility checks** on all components

## CI/CD Pipeline

### GitHub Actions

Automated workflows run on every push and pull request to the `main` branch:

**Build and Test Workflow** (`.github/workflows/build.yml`):

- ✅ Multi-version testing (Node 18.x and 20.x)
- ✅ Linting with ESLint
- ✅ Full test suite execution (1144 tests)
- ✅ Library build verification
- ✅ Type checking with TypeScript strict mode

### Deployment

The library is configured for NPM publishing with:

- Proper package exports (CommonJS + ESM)
- TypeScript declaration files
- Pre-publish checks (tests + lint + build)
- Semantic versioning

```bash
# Publish to NPM (requires auth)
npm publish
```

## Quality Assurance

All PRs must pass:

- ✅ ESLint with TypeScript rules
- ✅ Prettier code formatting
- ✅ All tests passing (1144 tests)
- ✅ Type checking with strict mode
- ✅ Build succeeds without errors

## Component Library

### Atoms (17 components)

| Component            | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| **Badge**            | Labels and status indicators                                                 |
| **Button**           | Actions and interactions                                                     |
| **Checkbox**         | Selection control with indeterminate state                                   |
| **DiscountLabel**    | Percentage discount badges                                                   |
| **Icon**             | SVG icon system (Cart, Heart, Search, Menu, Filter, Plus, Star, Check, User) |
| **Image**            | Responsive images with fallback                                              |
| **Input**            | Form fields with validation                                                  |
| **Label**            | Form labels with required indicator                                          |
| **Link**             | Navigation with external link support                                        |
| **ListPrice**        | Original price (strikethrough)                                               |
| **MainPrice**        | Current/sale price display                                                   |
| **PriceTag**         | Complete price display                                                       |
| **QuantitySelector** | Increment/decrement controls                                                 |
| **Skeleton**         | Loading placeholders                                                         |
| **StockBadge**       | Inventory status indicators                                                  |
| **TagText**          | Inline text tags                                                             |
| **Text**             | Typography component                                                         |

### Molecules (24 components)

| Component             | Description                     |
| --------------------- | ------------------------------- |
| **Alert**             | Notification messages           |
| **Card**              | Layout containers               |
| **CarouselArrows**    | Navigation arrows for carousels |
| **CarouselDots**      | Pagination dots for carousels   |
| **CarouselSlide**     | Individual slide wrapper        |
| **CodeBlock**         | Syntax highlighting with copy   |
| **Dropdown**          | Select menus                    |
| **FeatureCard**       | Feature highlight cards         |
| **FormatPrice**       | Currency formatting utility     |
| **ImageLink**         | Clickable image banners         |
| **InstallmentsPrice** | Installment payment display     |
| **List**              | Structured list component       |
| **PixDiscount**       | PIX payment discount display    |
| **PostCard**          | Blog post preview cards         |
| **PricingCard**       | Pricing plans with CTAs         |
| **ProductCard**       | E-commerce product cards        |
| **Prose**             | Markdown content wrapper        |
| **RadioOption**       | Radio button options            |
| **Rating**            | Star rating system              |
| **StepCard**          | Process step cards              |
| **TabLayout**         | Tab navigation                  |
| **TableOfContents**   | Article navigation              |
| **TestimonialCard**   | Customer testimonials           |
| **Wrapper**           | Layout wrapper utilities        |

### Organisms (7 components)

| Component        | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| **BlogHeader**   | Blog post hero with metadata                                  |
| **Carousel**     | Full carousel with touch support                              |
| **FAQSection**   | Expandable FAQ accordions                                     |
| **Footer**       | Site footer with links                                        |
| **Header**       | Navigation with mobile menu                                   |
| **HeroSection**  | Landing page hero sections                                    |
| **PriceSummary** | Complete price display (original, current, PIX, installments) |

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript 5.0+ (strict mode)
- **Testing**: Vitest 2.1.0 + Testing Library + jest-axe
- **Icons**: Custom SVG icon system
- **CI/CD**: GitHub Actions (Node 18.x and 20.x)
- **Code Quality**: ESLint + Prettier + Husky
- **Deployment**: NPM package + Vercel (recommended)

## Git Strategy

- Feature branches per component/group
- PR per phase milestone
- Main branch = production-ready

## Documentation

Full component documentation available in the Obsidian vault:

- Technical Documentation for each component
- Learning Guides with usage patterns
- Brazilian e-commerce specific patterns

## License

MIT License - see [LICENSE](LICENSE) for details.
