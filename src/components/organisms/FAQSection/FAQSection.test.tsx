import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { FAQSection } from './FAQSection'

describe('FAQSection', () => {
  const defaultProps = {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions',
    items: [
      {
        id: '1',
        question: 'What is this product?',
        answer: 'This is an amazing product that solves your problems.',
      },
      {
        id: '2',
        question: 'How much does it cost?',
        answer: 'It costs $29 per month with a 7-day free trial.',
      },
      {
        id: '3',
        question: 'Is there support?',
        answer: 'Yes, we provide 24/7 customer support.',
      },
    ],
  }

  describe('Rendering', () => {
    it('renders title', () => {
      render(<FAQSection {...defaultProps} />)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        'Frequently Asked Questions'
      )
    })

    it('renders subtitle', () => {
      render(<FAQSection {...defaultProps} />)
      expect(
        screen.getByText('Find answers to common questions')
      ).toBeInTheDocument()
    })

    it('renders all FAQ questions', () => {
      render(<FAQSection {...defaultProps} />)
      expect(screen.getByText('What is this product?')).toBeInTheDocument()
      expect(screen.getByText('How much does it cost?')).toBeInTheDocument()
      expect(screen.getByText('Is there support?')).toBeInTheDocument()
    })

    it('does not render answers by default', () => {
      render(<FAQSection {...defaultProps} />)
      expect(
        screen.queryByText(
          'This is an amazing product that solves your problems.'
        )
      ).not.toBeInTheDocument()
    })

    it('renders without subtitle when not provided', () => {
      const { subtitle, ...props } = defaultProps
      render(<FAQSection {...props} />)
      expect(
        screen.queryByText('Find answers to common questions')
      ).not.toBeInTheDocument()
    })
  })

  describe('Expand/Collapse', () => {
    it('expands item when clicked', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      await user.click(button)

      expect(
        screen.getByText(
          'This is an amazing product that solves your problems.'
        )
      ).toBeInTheDocument()
    })

    it('collapses item when clicked again', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      await user.click(button)
      await user.click(button)

      expect(
        screen.queryByText(
          'This is an amazing product that solves your problems.'
        )
      ).not.toBeInTheDocument()
    })

    it('collapses other items when allowMultipleOpen is false', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} allowMultipleOpen={false} />)

      const button1 = screen.getByRole('button', {
        name: 'What is this product?',
      })
      const button2 = screen.getByRole('button', {
        name: 'How much does it cost?',
      })

      await user.click(button1)
      expect(
        screen.getByText(
          'This is an amazing product that solves your problems.'
        )
      ).toBeInTheDocument()

      await user.click(button2)
      expect(
        screen.queryByText(
          'This is an amazing product that solves your problems.'
        )
      ).not.toBeInTheDocument()
      expect(
        screen.getByText('It costs $29 per month with a 7-day free trial.')
      ).toBeInTheDocument()
    })

    it('keeps multiple items open when allowMultipleOpen is true', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} allowMultipleOpen={true} />)

      const button1 = screen.getByRole('button', {
        name: 'What is this product?',
      })
      const button2 = screen.getByRole('button', {
        name: 'How much does it cost?',
      })

      await user.click(button1)
      await user.click(button2)

      expect(
        screen.getByText(
          'This is an amazing product that solves your problems.'
        )
      ).toBeInTheDocument()
      expect(
        screen.getByText('It costs $29 per month with a 7-day free trial.')
      ).toBeInTheDocument()
    })
  })

  describe('Keyboard Navigation', () => {
    it('expands item with Enter key', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      button.focus()
      await user.keyboard('{Enter}')

      expect(
        screen.getByText(
          'This is an amazing product that solves your problems.'
        )
      ).toBeInTheDocument()
    })

    it('expands item with Space key', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      button.focus()
      await user.keyboard(' ')

      expect(
        screen.getByText(
          'This is an amazing product that solves your problems.'
        )
      ).toBeInTheDocument()
    })

    it('does not expand with other keys', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      button.focus()
      await user.keyboard('a')

      expect(
        screen.queryByText(
          'This is an amazing product that solves your problems.'
        )
      ).not.toBeInTheDocument()
    })
  })

  describe('ARIA Attributes', () => {
    it('sets aria-expanded to false by default', () => {
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('sets aria-expanded to true when expanded', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      await user.click(button)
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('sets aria-controls on button', () => {
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })
      expect(button).toHaveAttribute('aria-controls', 'faq-answer-1')
    })

    it('sets matching id on answer content', async () => {
      const user = userEvent.setup()
      render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })

      await user.click(button)
      const answer = screen.getByText(
        'This is an amazing product that solves your problems.'
      )
      expect(answer.closest('div')).toHaveAttribute('id', 'faq-answer-1')
    })
  })

  describe('Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <FAQSection {...defaultProps} className="custom-class" />
      )
      const section = container.querySelector('section')
      expect(section).toHaveClass('custom-class')
    })

    it('rotates chevron icon when expanded', async () => {
      const user = userEvent.setup()
      const { container } = render(<FAQSection {...defaultProps} />)
      const button = screen.getByRole('button', {
        name: 'What is this product?',
      })
      const svg = button.querySelector('svg')

      expect(svg).not.toHaveClass('rotate-180')

      await user.click(button)
      expect(svg).toHaveClass('rotate-180')
    })
  })

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <FAQSection
          title="FAQ"
          items={[
            {
              id: '1',
              question: 'Question?',
              answer: 'Answer.',
            },
          ]}
        />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('uses semantic heading for title', () => {
      render(<FAQSection {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
    })

    it('renders buttons for questions', () => {
      render(<FAQSection {...defaultProps} />)
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBe(defaultProps.items.length)
    })
  })

  describe('Empty State', () => {
    it('renders with empty items array', () => {
      render(<FAQSection title="FAQ" items={[]} />)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('FAQ')
      expect(screen.queryAllByRole('button')).toHaveLength(0)
    })
  })

  describe('Responsive Design', () => {
    it('applies responsive padding', () => {
      const { container } = render(<FAQSection {...defaultProps} />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('py-12', 'md:py-16')
    })

    it('applies responsive text sizing', () => {
      render(<FAQSection {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass('text-3xl', 'md:text-4xl')
    })
  })
})
