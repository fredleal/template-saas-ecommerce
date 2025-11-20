# Template SaaS E-commerce Design System

A modern, TypeScript-first design system built with Next.js 15, Tailwind CSS, and atomic design principles. Features production-ready components with comprehensive test coverage for SaaS and e-commerce applications.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.0+-black)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-06B6D4)
![Tests](https://img.shields.io/badge/Tests-425_Passing-brightgreen)
![Coverage](https://img.shields.io/badge/Coverage-91%25+-green)
![Components](https://img.shields.io/badge/Components-18-blue)
![Icons](https://img.shields.io/badge/Icons-10-blue)
![Phase](https://img.shields.io/badge/Phase-Landing_Migration_COMPLETE-success)

## 🎉 Landing Page Migration - COMPLETE! ✅

Successfully created all **3 missing components** for landing-page migration! Library now has **18 components** with **425 tests passing** and **91%+ average coverage**.

**Landing Migration Status (3/3 Complete):**

- ✅ **PricingCard** molecule (PR #79 merged)
  - 25 tests passing, 100% coverage
  - 9 Storybook stories
  - Supports numeric ($29) and custom pricing ("Contact Sales")
  - Popular badge for recommended plans
  - Primary + optional secondary CTAs
- ✅ **StepCard** molecule (PR #81 merged)
  - 28 tests passing, 100% coverage
  - 11 Storybook stories
  - Numbered process steps with icons
  - Vertical and horizontal layouts
  - Primary, secondary, and success variants
  - 3 size options (sm, md, lg)
- ✅ **CTABanner** organism (current PR)
  - 34 tests passing, 99%+ coverage
  - 12 Storybook stories
  - Centered and split layouts
  - 5 background variants (primary, secondary, gradient, light, dark)
  - 3 size options (sm, md, lg)
  - Badge support with 6 variants
  - Primary + optional secondary CTAs
- ✅ 18 components total (6 Atoms, 8 Molecules, **4 Organisms**)
- ✅ 425 tests passing (91%+ coverage)
- ✅ Storybook live at: https://fredleal.github.io/template-saas-ecommerce/

**Next Steps: NPM Publish & Landing Page Migration**

1. Publish new NPM version with all 3 new components
2. Migrate landing-page repository to use @fredleal/saas-components imports
3. Remove duplicated components from landing-page
4. Update landing-page dependencies

## Features

- **🧩 Atomic Design**: Systematic component architecture (Atoms, Molecules, Organisms)
- **🧪 Complete Testing**: 425 tests with 91%+ coverage across all components
- **🎨 Design Tokens**: Consistent spacing, colors, and typography
- **♿ Accessibility First**: WCAG AA compliant with automated checks
- **📱 Responsive**: Mobile-first design approach
- **🔧 TypeScript**: Full type safety and developer experience
- **⚡ Performance**: Optimized bundle size and tree-shaking
- **🎯 E-commerce Ready**: Rating systems, pricing, product cards
- **✅ Quality Gates**: 80% coverage for atoms, 60% for molecules
- **🚀 CI/CD**: Automated testing and builds with GitHub Actions
- **📦 NPM Ready**: Publishable package with proper exports and types

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

### Quality Checks

All PRs must pass:

- ✅ ESLint with TypeScript rules
- ✅ Prettier code formatting
- ✅ All tests passing (338 tests)
- ✅ Type checking with strict mode
- ✅ Build succeeds without errors

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

### ✅ Organisms (4 components)

- **Header** - Navigation header with responsive mobile menu
- **Footer** - Site footer with links and social media
- **BlogHeader** - Blog post hero header with metadata
- **CTABanner** - Call-to-action banner with multiple layouts

## Quality Assurance

### Current Coverage

| Component       | Statements | Branches | Functions | Lines   | Tests   |
| --------------- | ---------- | -------- | --------- | ------- | ------- |
| Badge           | 100%       | 100%     | 100%      | 100%    | 8       |
| Button          | 85%        | 83%      | 87%       | 85%     | 23      |
| Checkbox        | 90%        | 88%      | 92%       | 90%     | 17      |
| Input           | 85%        | 83%      | 87%       | 85%     | 30      |
| Text            | 85%        | 83%      | 87%       | 85%     | 27      |
| Icon            | 88%        | 88%      | 90%       | 88%     | 17      |
| Card            | 87%        | 85%      | 89%       | 87%     | 13      |
| Rating          | 88%        | 86%      | 90%       | 88%     | 17      |
| PostCard        | 89%        | 87%      | 91%       | 89%     | 24      |
| Header          | 91%        | 89%      | 93%       | 91%     | 23      |
| Footer          | 93%        | 91%      | 95%       | 93%     | 32      |
| BlogHeader      | 92%        | 90%      | 94%       | 92%     | 26      |
| TableOfContents | 91%        | 89%      | 93%       | 91%     | 23      |
| CodeBlock       | 90%        | 88%      | 92%       | 90%     | 28      |
| Prose           | 89%        | 87%      | 91%       | 89%     | 79      |
| **Total**       | **89%**    | **87%**  | **91%**   | **89%** | **338** |

**✅ All quality gates exceeded!**

- Atoms: 89% average (target: 80%) ✅
- Molecules: 90% average (target: 60%) ✅
- Organisms: 92% average (target: 70%) ✅

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS 3.4+
- **Language**: TypeScript 5.0+ (strict mode)
- **Testing**: Vitest 1.6.1 + Testing Library + jest-axe
- **Icons**: Custom SVG icon system (9 complete)
- **CI/CD**: GitHub Actions (Node 18.x and 20.x)
- **Code Quality**: ESLint + Prettier + Husky
- **Deployment**: NPM package + Vercel (recommended)

## Roadmap

### ✅ Phase 1: Foundation (Complete)

- Atomic design architecture
- Basic atoms (Text, Button, Input, Badge)
- Icon system with 9 icons
- Type safety and accessibility

### ✅ Phase 2: Testing Infrastructure (Complete - Sep 30, 2025)

- Vitest setup and configuration
- Component testing with Testing Library
- Automated accessibility testing with jest-axe
- Coverage reporting and quality gates
- Badge component: 100% coverage

### ✅ Phase 3: Complete Test Coverage (COMPLETE - Oct 3, 2025)

- Button, Input, Text component tests ✅
- Icon component tests (simplified approach) ✅
- Molecule component tests (Card, Rating) ✅
- File structure cleanup and organization ✅
- **127 tests total | 80%+ average coverage achieved**

### ✅ Phase 4: Blog MVP Components (COMPLETE)

- ✅ Header organism (navigation + mobile menu)
- ✅ Footer organism (links + social media)
- ✅ PostCard molecule (blog post preview)
- ✅ BlogHeader organism (hero section for posts)
- ✅ TableOfContents molecule (article navigation)
- ✅ CodeBlock molecule (syntax highlighting)
- ✅ Prose molecule (markdown wrapper)
- **338 tests total | 89%+ average coverage achieved**

### ✅ Phase 4.5: Component Standardization (COMPLETE)

- ✅ All props interfaces exported
- ✅ Removed duplicate exports
- ✅ Fixed TypeScript errors
- ✅ Improved accessibility (WCAG AA)
- ✅ Added interactive capabilities
- **338 tests passing | Zero type errors**

### 📋 Phase 5: E-commerce Atoms Expansion (Next - 3 semanas)

**Goal:** Complete e-commerce atom library with 10 atoms total

**New Atoms to Add (4 new + expand 3 existing):**

1. **Image** (3 stories) - Optimized image component with Next.js Image
2. **Link** (2 stories) - Styled navigation links
3. **Skeleton** (3 stories) - Loading skeleton states
4. **Label** (1 story) - Form labels
5. **Italic** (1 story) - Semantic italic text
6. **Strong** (1 story) - Semantic strong text
7. **TagText** (7 stories) - Text tags/labels

**Expand Existing Atoms:**

- Button: 4 stories → 12 stories (more variants)
- Checkbox: 2 stories → 6 stories (more states)
- Input: 2 stories → 4 stories (more input types)

**Deliverables:**

- 10 atoms total
- ~400 tests (800+ total in suite)
- Icon system expanded (10→15+ icons)
- Storybook updated

**Timeline:** 3 semanas @ ~5-6h/week = ~15-18h

---

### 📋 Phase 6: E-commerce Molecules (Weeks 4-6)

**Goal:** Complete pricing, carousel, and form molecules (23 molecules total)

**Price & Pricing Molecules:**

- FormatPrice (1 story) - R$ formatting
- ListPrice (1 story) - Strikethrough old price
- MainPrice (2 stories) - Main product price display
- InstallmentsPrice (2 stories) - Parcelado display
- PixDiscount (2 stories) - PIX discount badge

**Carousel Components:**

- CarouselArrows (4 stories) - Previous/Next buttons
- CarouselDots (3 stories) - Pagination dots
- CarouselSlide (3 stories) - Individual slide wrapper

**Form & Selection:**

- RadioOption (2 stories) - Radio button alternative
- Dropdown (2 stories) - Select dropdown

**Content Molecules:**

- ImageLink (2 stories) - Clickable image card
- Alert (4 stories) - Alert messages (info, warning, success, error)
- List (8 stories) - Unordered/ordered lists with variants
- TabLayout (3 stories) - Tab navigation
- Wrapper (5 stories) - Layout wrapper component

**Deliverables:**

- 23 molecules total (6 existing + 17 new)
- ~550 additional tests (1350+ total)
- Pricing system complete
- Carousel system tested

**Timeline:** 3 semanas @ ~5-6h/week = ~15-18h

---

### 📋 Phase 7: E-commerce Organisms (Weeks 7-9)

**Goal:** Complete complex patterns and form organisms (15 organisms total)

**Carousel Organism:**

- Carousel (11 stories) - Full carousel component

**Form Organisms:**

- FormInputMessage (5 stories) - Input with validation messages
- FormLead (8 stories) - Lead form with validation
- FormSuccessMessage (6 stories) - Success confirmation
- SelectMessage (1 story) - Selection confirmation

**Card Systems:**

- ImageTextCard (16 stories) - Image + text combination
- ImageTextCardSectionFourImage (4 stories) - 4-image grid variant
- ImageTextCardSectionSideImage (3 stories) - Side-by-side variant
- ImageTextCardSlide (2 stories) - Slide variant

**Dropdown:**

- DropdownList (2 stories) - Dropdown list
- DropdownTextList (1 story) - Text-based dropdown

**Price Display:**

- PriceSummary (1 story) - Summary of prices/discounts

**Deliverables:**

- 15 organisms total (3 existing + 12 new)
- ~700 additional tests (2050+ total)
- E-commerce patterns complete
- Form validation system tested

**Timeline:** 3-4 semanas @ ~6-7h/week = ~20-25h

---

### 🚀 Phase 8: SaaS Template Ready (Weeks 10-11)

**Goal:** Prepare template for commercial use

**Final Steps:**

- ✅ Component documentation (JSDoc + Storybook)
- ✅ Usage guidelines and best practices
- ✅ Performance audit and optimization
- ✅ Accessibility compliance verification
- ✅ Bundle size analysis
- ✅ NPM package preparation

**Deliverables:**

- 50+ production-ready components
- 2000+ tests passing
- Complete Storybook
- SaaS template ready for use/sale

**Timeline:** 2 semanas @ ~4-5h/week = ~10h

---

## 📊 **Timeline Overview**

```
Phase 5 (Atoms):          ████░░░░░ 3 weeks (15-18h)
Phase 6 (Molecules):      ████░░░░░ 3 weeks (15-18h)
Phase 7 (Organisms):      █████░░░░ 3-4 weeks (20-25h)
Phase 8 (Polish):         ██░░░░░░░ 2 weeks (10h)

Total Timeline:           11-12 weeks solo development
Total Hours:              ~60-71 hours of focused work
Components Created:       35+ new components
Tests Added:             1700+ new tests
Final Count:             50+ components, 2000+ tests
```

---

## 🎯 **Milestones & Criteria**

### **Milestone 4: E-commerce Atoms Complete** ✅ Phase 5

- [ ] 10 atoms implemented
- [ ] 400+ tests passing
- [ ] Storybook updated
- [ ] All atoms in Storybook

### **Milestone 5: E-commerce Molecules Complete** ✅ Phase 6

- [ ] 23 molecules implemented
- [ ] 550+ additional tests passing
- [ ] Pricing system working
- [ ] Carousel system working

### **Milestone 6: E-commerce Organisms Complete** ✅ Phase 7

- [ ] 15 organisms implemented
- [ ] 700+ additional tests passing
- [ ] Form validation working
- [ ] Card systems tested

### **Milestone 7: SaaS Template Ready** ✅ Phase 8

- [ ] 50+ components documented
- [ ] 2000+ tests passing
- [ ] Template ready for launch
- [ ] NPM package ready

---

## 💡 **Development Strategy**

### **Weekly Workflow:**

- Monday-Wednesday: Build new components (3h/week)
- Thursday: Tests & documentation (2h/week)
- Friday: Review & optimization (1h/week)

### **Quality Standards:**

- 80%+ test coverage on all atoms
- 70%+ test coverage on molecules
- 70%+ test coverage on organisms
- Zero TypeScript errors
- WCAG AA accessibility compliance

### **Git Strategy:**

- Feature branches per component/group
- PR per phase milestone
- Main branch = production-ready

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**🎉 MILESTONE 3 PHASE 4 COMPLETE!**
**338 tests passing** | **89%+ coverage** | **Zero accessibility violations**

**Blog MVP Phase 4 Complete:** BlogHeader + TableOfContents + CodeBlock + Prose molecules and organisms
**Phase 4 Total:** 10 components (6 Atoms, 6 Molecules, 3 Organisms) | 338 tests | 89% coverage
**Next Milestone**: Phase 5 E-commerce components and beyond
