import { describe, it, expect } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { BlogHeader } from './BlogHeader'

expect.extend(toHaveNoViolations)

describe('BlogHeader', () => {
  const defaultProps = {
    title: 'Getting Started with React',
    description: 'Learn the fundamentals of building modern applications',
    author: 'John Doe',
    date: '2025-01-15',
    readTime: '5',
  }

  describe('Rendering', () => {
    it('should render the title', () => {
      render(<BlogHeader {...defaultProps} />)
      expect(screen.getByText('Getting Started with React')).toBeInTheDocument()
    })

    it('should render the description', () => {
      render(<BlogHeader {...defaultProps} />)
      expect(
        screen.getByText(
          'Learn the fundamentals of building modern applications'
        )
      ).toBeInTheDocument()
    })

    it('should render the author name', () => {
      render(<BlogHeader {...defaultProps} />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should render the formatted date', () => {
      render(<BlogHeader {...defaultProps} />)
      const dateElement = screen.getByText(/January (14|15), 2025/)
      expect(dateElement).toBeInTheDocument()
    })

    it('should render the read time', () => {
      render(<BlogHeader {...defaultProps} />)
      expect(screen.getByText('5 min read')).toBeInTheDocument()
    })

    it('should render without description', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { description, ...props } = defaultProps
      render(<BlogHeader {...props} />)
      expect(screen.getByText('Getting Started with React')).toBeInTheDocument()
      expect(
        screen.queryByText(
          'Learn the fundamentals of building modern applications'
        )
      ).not.toBeInTheDocument()
    })
  })

  describe('Tags', () => {
    it('should render tags when provided', () => {
      const tags = ['React', 'JavaScript', 'Web Development']
      render(<BlogHeader {...defaultProps} tags={tags} />)
      tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument()
      })
    })

    it('should not render tags section when no tags provided', () => {
      render(<BlogHeader {...defaultProps} tags={[]} />)
      // Check that tag container is not present
      const article = screen.getByRole('article')
      const tagElements = article.querySelectorAll('[class*="bg-blue-100"]')
      expect(tagElements.length).toBe(0)
    })

    it('should render multiple tags correctly', () => {
      const tags = ['React', 'TypeScript', 'Testing']
      render(<BlogHeader {...defaultProps} tags={tags} />)
      const tagElements = screen.getAllByText(/React|TypeScript|Testing/)
      expect(tagElements.length).toBeGreaterThanOrEqual(tags.length)
    })
  })

  describe('Hero Image', () => {
    it('should render hero image when provided', () => {
      const heroImage = 'https://example.com/hero.jpg'
      render(
        <BlogHeader
          {...defaultProps}
          heroImage={heroImage}
          heroImageAlt="Blog hero"
        />
      )
      const img = screen.getByAltText('Blog hero')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', heroImage)
    })

    it('should not render hero image when not provided', () => {
      render(<BlogHeader {...defaultProps} />)
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('should use default alt text for hero image', () => {
      render(
        <BlogHeader
          {...defaultProps}
          heroImage="https://example.com/hero.jpg"
        />
      )
      expect(screen.getByAltText('Blog post hero image')).toBeInTheDocument()
    })
  })

  describe('Metadata', () => {
    it('should render author initial in avatar', () => {
      render(<BlogHeader {...defaultProps} author="Jane Smith" />)
      expect(screen.getByText('J')).toBeInTheDocument()
    })

    it('should render correct author initial for different names', () => {
      render(<BlogHeader {...defaultProps} author="Alice Johnson" />)
      expect(screen.getByText('A')).toBeInTheDocument()
    })

    it('should have time element with datetime attribute', () => {
      render(<BlogHeader {...defaultProps} />)
      const timeElement = screen
        .getByText(/January (14|15), 2025/)
        .closest('time')
      expect(timeElement).toHaveAttribute('dateTime', '2025-01-15')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <BlogHeader {...defaultProps} className="custom-class" />
      )
      const article = container.querySelector('article')
      expect(article).toHaveClass('custom-class')
    })

    it('should have responsive classes for title', () => {
      const { container } = render(<BlogHeader {...defaultProps} />)
      const article = container.querySelector('article')
      expect(article).toHaveClass('w-full')
    })
  })

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<BlogHeader {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading hierarchy', () => {
      render(<BlogHeader {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Getting Started with React')
    })

    it('should have semantic article element', () => {
      render(<BlogHeader {...defaultProps} />)
      expect(screen.getByRole('article')).toBeInTheDocument()
    })

    it('should have proper image alt text', () => {
      render(
        <BlogHeader
          {...defaultProps}
          heroImage="https://example.com/hero.jpg"
          heroImageAlt="Hero image for React tutorial"
        />
      )
      expect(
        screen.getByAltText('Hero image for React tutorial')
      ).toBeInTheDocument()
    })
  })

  describe('Date Formatting', () => {
    it('should format date correctly', () => {
      render(<BlogHeader {...defaultProps} date="2025-12-25" />)
      expect(screen.getByText(/December (24|25), 2025/)).toBeInTheDocument()
    })

    it('should handle different date formats', () => {
      render(<BlogHeader {...defaultProps} date="2025-01-01" />)
      expect(
        screen.getByText(/December 31, 2024|January 1, 2025/)
      ).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long title', () => {
      const longTitle =
        'This is a very long blog post title that might wrap to multiple lines in the UI'
      render(<BlogHeader {...defaultProps} title={longTitle} />)
      expect(screen.getByText(longTitle)).toBeInTheDocument()
    })

    it('should handle empty tags array', () => {
      render(<BlogHeader {...defaultProps} tags={[]} />)
      expect(screen.getByText('Getting Started with React')).toBeInTheDocument()
    })

    it('should render with large read time number', () => {
      render(<BlogHeader {...defaultProps} readTime="45" />)
      expect(screen.getByText('45 min read')).toBeInTheDocument()
    })
  })
})
