# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Projects integration with automated workflows
- Issue templates following atomic design principles
- Comprehensive README with usage examples and architecture

### Changed
- Updated issue descriptions to follow new template format

## [0.3.0] - 2025-09-23

### Added
- **StarIcon atom** - Star rating display with filled/outline variants
- **Rating molecule** - Complete star rating system with half-star support
- **Icon system expansion** - Now supports 6 icons total
- **E-commerce showcase** - Product cards with ratings and badges

### Fixed
- **HOTFIX**: Rating component export missing in production build
- **Build error**: Resolved StarIcon dependency issues with inline implementation
- **Export path**: Added Rating to molecules index exports

### Technical
- Implemented CSS clip-path technique for half-star ratings
- Added comprehensive rating system with decimal value support
- Improved component composition patterns

## [0.2.0] - 2025-09-22

### Added
- **Icon System** - Centralized icon architecture with 5 core icons
  - CartIcon, HeartIcon, SearchIcon, MenuIcon, PlusIcon
- **Card molecule** - Flexible layout container with variants
- **ProductCard molecule** - E-commerce specific card component
- **Price atom** - Currency formatting with discount support
- **Icon wrapper component** - Unified API for all icons

### Enhanced
- **Button atom** - Added icon support and composition patterns
- **Badge atom** - Enhanced with semantic color variants
- **Typography system** - Improved Text and Heading components

### Technical
- Icon categorization by purpose (ecommerce, navigation, actions)
- BaseIcon interface for consistent icon props
- Atomic design structure implementation

## [0.1.0] - 2025-09-21

### Added
- **Project Foundation** - Next.js 15 + TypeScript + Tailwind CSS setup
- **Basic Atoms** - Core building blocks
  - Text atom with 8 size variants and semantic colors
  - Button atom with 4 variants and accessibility features
  - Input atom with form integration and error states
  - Badge atom with semantic color system
  - Heading atom with 6 semantic levels

### Technical
- Atomic design architecture foundation
- TypeScript strict mode configuration
- Tailwind CSS design token system
- Component showcase page implementation
- Export organization with centralized index files

### Documentation
- Initial component demonstrations
- Basic usage examples
- Development environment setup

---

## Release Notes

### Version 0.3.0 - Rating System
This release introduces a complete star rating system essential for e-commerce applications. The Rating molecule composes multiple StarIcon atoms to create flexible rating displays with support for decimal values, optional text, and review counts.

**Key Features:**
- Decimal rating support (4.2 stars)
- Half-star rendering with CSS clip-path
- Optional value display and review counts
- Multiple size variants (xs to xl)
- Full accessibility compliance

### Version 0.2.0 - Icon System & Cards
Major expansion with a systematic icon architecture and layout components. The icon system provides a foundation for visual communication across the design system.

**Key Features:**
- 5 core icons with consistent API
- Flexible Card molecule for content organization
- E-commerce ready ProductCard with pricing
- Icon + Button composition patterns

### Version 0.1.0 - Foundation
Initial release establishing the atomic design architecture and core components. Provides essential building blocks for modern web applications.

**Key Features:**
- Typography system with semantic variants
- Interactive Button component
- Form Input with validation states
- Status Badge system

---

## Migration Guide

### From 0.2.x to 0.3.x
- **Rating component**: No breaking changes, new molecule available
- **StarIcon**: Added to icon system, follows existing patterns
- **Card molecule**: Enhanced with rating integration examples

### From 0.1.x to 0.2.x
- **Icon imports**: Update imports to use centralized Icon wrapper
- **Button + Icon**: Use new composition pattern for buttons with icons
- **ProductCard**: New molecule available for e-commerce layouts

## Contributors

- [@fredleal](https://github.com/fredleal) - Design system architecture and implementation

## Acknowledgments

Inspired by industry-leading design systems:
- [Radix UI](https://www.radix-ui.com/) - Accessibility patterns
- [Tailwind UI](https://tailwindui.com/) - Design tokens  
- [Shopify Polaris](https://polaris.shopify.com/) - Component API design