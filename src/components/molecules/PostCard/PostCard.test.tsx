import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import { PostCard, PostCardProps } from './PostCard'

expect.extend(toHaveNoViolations)

const defaultProps: PostCardProps = {
  title: 'Getting Started with React Hooks',
  excerpt:
    'Learn how to use React Hooks to manage state and side effects in your functional components.',
  date: '2025-01-15',
  author: 'John Doe',
  category: 'React',
  readTime: 5,
}

describe('PostCard Component', () => {
  // ========== RENDERING TESTS (4) ==========
  describe('Rendering', () => {
    it('should render with required props', () => {
      render(<PostCard {...defaultProps} />)
      expect(
        screen.getByText('Getting Started with React Hooks')
      ).toBeInTheDocument()
    })

    it('should render all content sections', () => {
      render(<PostCard {...defaultProps} />)
      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText(/Jan.*2025/)).toBeInTheDocument()
    })

    it('should render as article element', () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const article = container.querySelector('article')
      expect(article).toBeInTheDocument()
      expect(article).toHaveAttribute('role', 'article')
    })

    it('should render optional read time when provided', () => {
      render(<PostCard {...defaultProps} readTime={8} />)
      expect(screen.getByText('8 min read')).toBeInTheDocument()
    })
  })

  // ========== IMAGE TESTS (2) ==========
  describe('Image Handling', () => {
    it('should render image when imageUrl provided', () => {
      render(
        <PostCard {...defaultProps} imageUrl="https://example.com/image.jpg" />
      )
      const img = screen.getByAltText('Getting Started with React Hooks')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
    })

    it('should not render image when imageUrl not provided', () => {
      render(<PostCard {...defaultProps} />)
      const img = screen.queryByAltText('Getting Started with React Hooks')
      expect(img).not.toBeInTheDocument()
    })
  })

  // ========== FEATURED TESTS (2) ==========
  describe('Featured Post', () => {
    it('should display featured badge when featured=true with image', () => {
      render(
        <PostCard
          {...defaultProps}
          featured={true}
          imageUrl="https://example.com/image.jpg"
        />
      )
      expect(screen.getByText('Featured')).toBeInTheDocument()
    })

    it('should apply featured styling with ring-2', () => {
      const { container } = render(
        <PostCard {...defaultProps} featured={true} />
      )
      const article = container.querySelector('article')
      expect(article).toHaveClass('ring-2')
      expect(article).toHaveClass('ring-blue-500')
    })
  })

  // ========== INTERACTION TESTS (2) ==========
  describe('Interactions', () => {
    it('should call onClick handler when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<PostCard {...defaultProps} onClick={handleClick} />)

      const article = screen.getByRole('article')
      await user.click(article)

      expect(handleClick).toHaveBeenCalledOnce()
    })

    it('should have cursor-pointer class', () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const article = container.querySelector('article')
      expect(article).toHaveClass('cursor-pointer')
    })
  })

  // ========== STYLING TESTS (2) ==========
  describe('Styling and Hover Effects', () => {
    it('should have hover shadow and border effects', () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const article = container.querySelector('article')
      expect(article).toHaveClass('hover:shadow-lg')
      expect(article).toHaveClass('hover:border-blue-300')
    })

    it('should accept custom className', () => {
      const { container } = render(
        <PostCard {...defaultProps} className="custom-class" />
      )
      const article = container.querySelector('article')
      expect(article).toHaveClass('custom-class')
    })
  })

  // ========== CONTENT TESTS (3) ==========
  describe('Content Display', () => {
    it('should display formatted date correctly', () => {
      render(<PostCard {...defaultProps} date="2025-06-20" />)
      expect(screen.getByText(/Jun.*2025/)).toBeInTheDocument()
    })

    it('should display category badge with correct variant', () => {
      render(<PostCard {...defaultProps} category="TypeScript" />)
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
    })

    it('should display author name', () => {
      render(<PostCard {...defaultProps} author="Jane Smith" />)
      expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    })
  })

  // ========== METADATA TESTS (2) ==========
  describe('Metadata Display', () => {
    it('should display all metadata elements', () => {
      render(<PostCard {...defaultProps} readTime={7} />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('7 min read')).toBeInTheDocument()
    })

    it('should not display read time when not provided', () => {
      const { readTime, ...propsWithoutReadTime } = defaultProps
      render(<PostCard {...propsWithoutReadTime} />)
      expect(screen.queryByText(/min read/)).not.toBeInTheDocument()
    })
  })

  // ========== TEXT TRUNCATION TESTS (2) ==========
  describe('Text Truncation', () => {
    it('should render title with text truncation styles', () => {
      render(<PostCard {...defaultProps} />)
      const title = screen.getByText('Getting Started with React Hooks')
      expect(title).toBeInTheDocument()
    })

    it('should render excerpt with text truncation styles', () => {
      render(<PostCard {...defaultProps} />)
      expect(
        screen.getByText(
          /Learn how to use React Hooks to manage state and side effects/
        )
      ).toBeInTheDocument()
    })
  })

  // ========== RESPONSIVE TESTS (2) ==========
  describe('Responsive Design', () => {
    it('should have responsive gap classes in metadata', () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const metadataContainer = container.querySelector('.flex.flex-wrap.gap-4')
      expect(metadataContainer).toBeInTheDocument()
    })

    it('should maintain structure on all breakpoints', () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const article = container.querySelector('article')
      expect(article).toHaveClass('rounded-lg')
      expect(article).toHaveClass('border')
    })
  })

  // ========== ACCESSIBILITY TESTS (3) ==========
  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have semantic article element', () => {
      const { container } = render(<PostCard {...defaultProps} />)
      const article = container.querySelector('article[role="article"]')
      expect(article).toBeInTheDocument()
    })

    it('should have alt text for images', () => {
      render(
        <PostCard {...defaultProps} imageUrl="https://example.com/image.jpg" />
      )
      const img = screen.getByAltText(defaultProps.title)
      expect(img).toHaveAttribute('alt')
    })
  })
})
