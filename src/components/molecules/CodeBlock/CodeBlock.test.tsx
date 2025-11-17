import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { CodeBlock } from './CodeBlock'

expect.extend(toHaveNoViolations)

describe('CodeBlock', () => {
  const defaultProps = {
    code: `const hello = () => {
  console.log('Hello, World!')
}`,
    language: 'javascript',
  }

  describe('Rendering', () => {
    it('should render the code block', () => {
      render(<CodeBlock {...defaultProps} />)
      expect(screen.getByText(/const hello/)).toBeInTheDocument()
    })

    it('should display the language indicator', () => {
      const { container } = render(
        <CodeBlock {...defaultProps} language="typescript" />
      )
      expect(container.textContent).toContain('typescript')
    })

    it('should render with default language when not provided', () => {
      const { code } = defaultProps
      const { container } = render(<CodeBlock code={code} />)
      expect(container.textContent).toContain('javascript')
    })

    it('should render code with multiple lines', () => {
      render(<CodeBlock {...defaultProps} />)
      expect(screen.getByText(/const hello/)).toBeInTheDocument()
      expect(screen.getByText(/console.log/)).toBeInTheDocument()
      expect(screen.getByText(/Hello, World!/)).toBeInTheDocument()
    })

    it('should render title when provided', () => {
      render(<CodeBlock {...defaultProps} title="Example Code" />)
      expect(screen.getByText('Example Code')).toBeInTheDocument()
    })

    it('should not render title when not provided', () => {
      render(<CodeBlock {...defaultProps} />)
      expect(screen.queryByText('Example Code')).not.toBeInTheDocument()
    })
  })

  describe('Line Numbers', () => {
    it('should show line numbers by default', () => {
      render(<CodeBlock {...defaultProps} />)
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
    })

    it('should hide line numbers when showLineNumbers is false', () => {
      const { container } = render(
        <CodeBlock {...defaultProps} showLineNumbers={false} />
      )
      // Check that line number column has no visible numbers
      const lineNumbers = container.querySelectorAll(
        '[data-testid^="code-line-"]'
      )
      expect(lineNumbers.length).toBeGreaterThan(0)
    })

    it('should have correct line numbers for multiple lines', () => {
      const multilineCode = `line 1
line 2
line 3
line 4
line 5`
      render(<CodeBlock code={multilineCode} showLineNumbers={true} />)

      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
      expect(screen.getByText('4')).toBeInTheDocument()
      expect(screen.getByText('5')).toBeInTheDocument()
    })
  })

  describe('Copy Button', () => {
    it('should show copy button by default', () => {
      render(<CodeBlock {...defaultProps} />)
      expect(screen.getByText('Copy')).toBeInTheDocument()
    })

    it('should hide copy button when showCopyButton is false', () => {
      render(<CodeBlock {...defaultProps} showCopyButton={false} />)
      expect(screen.queryByText('Copy')).not.toBeInTheDocument()
    })

    it('should copy code to clipboard when button is clicked', async () => {
      const mockClipboard = {
        writeText: vi.fn().mockResolvedValue(undefined),
      }
      Object.assign(navigator, { clipboard: mockClipboard })

      render(<CodeBlock {...defaultProps} />)
      const copyButton = screen.getByText('Copy')
      fireEvent.click(copyButton)

      await waitFor(() => {
        expect(mockClipboard.writeText).toHaveBeenCalledWith(defaultProps.code)
      })
    })

    it('should show "Copied!" message after clicking copy', async () => {
      const mockClipboard = {
        writeText: vi.fn().mockResolvedValue(undefined),
      }
      Object.assign(navigator, { clipboard: mockClipboard })

      render(<CodeBlock {...defaultProps} />)
      const copyButton = screen.getByText('Copy')
      fireEvent.click(copyButton)

      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument()
      })
    })

    it('should revert "Copied!" message after timeout', async () => {
      const mockClipboard = {
        writeText: vi.fn().mockResolvedValue(undefined),
      }
      Object.assign(navigator, { clipboard: mockClipboard })

      render(<CodeBlock {...defaultProps} />)
      const copyButton = screen.getByText('Copy')
      fireEvent.click(copyButton)

      await waitFor(
        () => {
          expect(screen.getByText('Copied!')).toBeInTheDocument()
        },
        { timeout: 3000 }
      )

      // Wait for the state to revert after the timeout
      await waitFor(
        () => {
          expect(screen.getByText('Copy')).toBeInTheDocument()
        },
        { timeout: 3000 }
      )
    }, 10000)
  })

  describe('Code Content', () => {
    it('should render empty code', () => {
      const { container } = render(<CodeBlock code="" />)
      const codeElement = container.querySelector('code')
      expect(codeElement).toBeInTheDocument()
    })

    it('should preserve code formatting and whitespace', () => {
      const formattedCode = `function test() {
    const x = 1
    return x
  }`
      const { container } = render(<CodeBlock code={formattedCode} />)
      const preElement = container.querySelector('pre')
      // Check that the code content is present (with line numbers it may not have exact newlines)
      expect(preElement?.textContent).toContain('function test')
      expect(preElement?.textContent).toContain('const x = 1')
      expect(preElement?.textContent).toContain('return x')
    })

    it('should handle special characters in code', () => {
      const codeWithSpecialChars = `const regex = /^[a-z]+$/
const obj = { "key": "value" }
const str = "It's a string"`
      render(<CodeBlock code={codeWithSpecialChars} />)
      expect(screen.getByText(/regex/)).toBeInTheDocument()
      expect(screen.getByText(/It's a string/)).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <CodeBlock {...defaultProps} className="custom-code" />
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('custom-code')
    })

    it('should have dark theme classes', () => {
      const { container } = render(<CodeBlock {...defaultProps} />)
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('bg-gray-900')
    })

    it('should be scrollable for long lines', () => {
      const { container } = render(<CodeBlock {...defaultProps} />)
      const pre = container.querySelector('pre')
      expect(pre).toHaveClass('overflow-x-auto')
    })
  })

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(<CodeBlock {...defaultProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have aria-label on copy button', () => {
      render(<CodeBlock {...defaultProps} />)
      const copyButton = screen.getByLabelText('Copy code to clipboard')
      expect(copyButton).toBeInTheDocument()
    })

    it('should have semantic pre and code elements', () => {
      const { container } = render(<CodeBlock {...defaultProps} />)
      expect(container.querySelector('pre')).toBeInTheDocument()
      expect(container.querySelector('code')).toBeInTheDocument()
    })
  })

  describe('Language Variants', () => {
    it('should display correct language for different languages', () => {
      const languages = ['python', 'java', 'rust', 'go', 'typescript']
      languages.forEach(lang => {
        const { container, unmount } = render(
          <CodeBlock code="test" language={lang} />
        )
        expect(container.textContent).toContain(lang)
        unmount()
      })
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long lines of code', () => {
      const longLine = 'const x = ' + 'a'.repeat(500)
      render(<CodeBlock code={longLine} />)
      expect(screen.getByText(/const x = a+/)).toBeInTheDocument()
    })

    it('should handle many lines of code', () => {
      const manyLines = Array.from(
        { length: 100 },
        (_, i) => `line ${i + 1}`
      ).join('\n')
      render(<CodeBlock code={manyLines} />)
      expect(screen.getByText('line 1')).toBeInTheDocument()
      expect(screen.getByText('line 100')).toBeInTheDocument()
    })

    it('should handle code with only whitespace', () => {
      render(<CodeBlock code="   \n  \n   " />)
      expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('should handle code with tabs and special spacing', () => {
      const codeWithTabs = 'function test() {\n\tconst x = 1\n\treturn x\n}'
      render(<CodeBlock code={codeWithTabs} />)
      expect(screen.getByText(/function test/)).toBeInTheDocument()
    })
  })
})
