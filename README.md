# Template SaaS E-commerce Design System

A modern, TypeScript-first design system built with Next.js 15, Tailwind CSS, and atomic design principles. Features production-ready components with comprehensive test coverage for SaaS and e-commerce applications.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.0+-black)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-06B6D4)
![Tests](https://img.shields.io/badge/Tests-391_Passing-brightgreen)
![Coverage](https://img.shields.io/badge/Coverage-90%25+-green)
![Components](https://img.shields.io/badge/Components-17-blue)
![Icons](https://img.shields.io/badge/Icons-10-blue)
![Phase](https://img.shields.io/badge/Phase-Landing_Migration_2/3-blue)


## Features

- **Atomic Design**: Systematic component architecture (Atoms, Molecules, Organisms)
- **Complete Testing**: 391 tests with 90%+ coverage across all components
- **Design Tokens**: Consistent spacing, colors, and typography
- **Accessibility First**: WCAG AA compliant with automated checks
- **Responsive**: Mobile-first design approach
- **TypeScript**: Full type safety and developer experience
- **Performance**: Optimized bundle size and tree-shaking
- **E-commerce Ready**: Rating systems, pricing, product cards
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

### Test Results

```
✓ Badge (8 tests)
✓ Button (23 tests)
✓ Checkbox (17 tests)
✓ Input (30 tests)
✓ Text (27 tests)
✓ Icon (17 tests)
✓ Card (13 tests)
✓ Rating (17 tests)
✓ PostCard (24 tests)
✓ Header (23 tests)
✓ Footer (32 tests)
✓ BlogHeader (26 tests)
✓ TableOfContents (23 tests)
✓ CodeBlock (28 tests)
✓ Prose (79 tests)

 Total: 338 tests passing
 Duration: ~7.5 seconds
 Coverage: 87%+ average
```

### Testing Stack

- **Vitest 2.1.0** - Modern, fast test runner
- **Testing Library** - React component testing
- **jest-axe** - Automated accessibility testing
- **jsdom** - Browser environment simulation

### Coverage Requirements

- **Atoms**: 80% minimum coverage ✅
- **Molecules**: 60% minimum coverage ✅
- **Automated accessibility checks** on all components ✅

## CI/CD Pipeline

### GitHub Actions

Automated workflows run on every push and pull request to the `main` branch:

**Build and Test Workflow** (`.github/workflows/build.yml`):

- ✅ Multi-version testing (Node 18.x and 20.x)
- ✅ Linting with ESLint
- ✅ Full test suite execution (338 tests)
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
- ✅ All tests passing (338 tests)
- ✅ Type checking with strict mode
- ✅ Build succeeds without errors

**✅ All quality gates exceeded!**

- Atoms: 89% average (target: 80%) ✅
- Molecules: 90% average (target: 60%) ✅
- Organisms: 92% average (target: 70%) ✅

## Component Library

### ✅ Atoms (6 components + 9 icons)

- **Badge** - Labels and status indicators
- **Button** - Actions and interactions
- **Checkbox** - Selection control
- **Input** - Form fields
- **Text** - Typography
- **Icon** - 9 complete icons (Cart, Heart, Search, Menu, Filter, Plus, Star, Check, User)

### ✅ Molecules (8 components)

- **Card** - Layout containers
- **Rating** - Star rating system
- **PostCard** - Blog post preview cards
- **TableOfContents** - Article navigation with smooth scroll
- **CodeBlock** - Syntax highlighting with copy button
- **Prose** - Markdown content wrapper with typography
- **PricingCard** - Pricing plans with features and CTAs
- **StepCard** - Numbered process steps with icons

### ✅ Organisms (3 components)

- **Header** - Navigation header with responsive mobile menu
- **Footer** - Site footer with links and social media
- **BlogHeader** - Blog post hero header with metadata



## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS 3.4+
- **Language**: TypeScript 5.0+ (strict mode)
- **Testing**: Vitest 1.6.1 + Testing Library + jest-axe
- **Icons**: Custom SVG icon system (9 complete)
- **CI/CD**: GitHub Actions (Node 18.x and 20.x)
- **Code Quality**: ESLint + Prettier + Husky
- **Deployment**: NPM package + Vercel (recommended)

### **Git Strategy:**

- Feature branches per component/group
- PR per phase milestone
- Main branch = production-ready

## License

MIT License - see [LICENSE](LICENSE) for details.
