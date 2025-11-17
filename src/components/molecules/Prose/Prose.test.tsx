import { describe, it, expect } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Prose } from './Prose'

expect.extend(toHaveNoViolations)

describe('Prose', () => {
  describe('Rendering', () => {
    it('should render the prose wrapper', () => {
      const { container } = render(
        <Prose>
          <p>Test content</p>
        </Prose>
      )
      expect(container.querySelector('div')).toBeInTheDocument()
    })

    it('should render children content', () => {
      const { getByText } = render(
        <Prose>
          <p>Test paragraph</p>
        </Prose>
      )
      expect(getByText('Test paragraph')).toBeInTheDocument()
    })

    it('should render multiple children', () => {
      const { getByText } = render(
        <Prose>
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <p>Third paragraph</p>
        </Prose>
      )
      expect(getByText('First paragraph')).toBeInTheDocument()
      expect(getByText('Second paragraph')).toBeInTheDocument()
      expect(getByText('Third paragraph')).toBeInTheDocument()
    })
  })

  describe('Markdown Elements', () => {
    it('should style headings', () => {
      const { container } = render(
        <Prose>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
        </Prose>
      )
      const h1 = container.querySelector('h1')
      const h2 = container.querySelector('h2')
      const h3 = container.querySelector('h3')

      expect(h1).toBeInTheDocument()
      expect(h2).toBeInTheDocument()
      expect(h3).toBeInTheDocument()
    })

    it('should style paragraphs', () => {
      const { getByText } = render(
        <Prose>
          <p>This is a paragraph with text content</p>
        </Prose>
      )
      const paragraph = getByText('This is a paragraph with text content')
      expect(paragraph.tagName).toBe('P')
    })

    it('should style lists', () => {
      const { container } = render(
        <Prose>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Prose>
      )
      const list = container.querySelector('ul')
      expect(list).toBeInTheDocument()
      expect(list?.querySelectorAll('li').length).toBe(3)
    })

    it('should style ordered lists', () => {
      const { container } = render(
        <Prose>
          <ol>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ol>
        </Prose>
      )
      const list = container.querySelector('ol')
      expect(list).toBeInTheDocument()
      expect(list?.querySelectorAll('li').length).toBe(3)
    })

    it('should style links', () => {
      const { getByRole } = render(
        <Prose>
          <a href="https://example.com">Example Link</a>
        </Prose>
      )
      const link = getByRole('link')
      expect(link).toHaveAttribute('href', 'https://example.com')
      expect(link).toHaveTextContent('Example Link')
    })

    it('should style code blocks', () => {
      const { container } = render(
        <Prose>
          <pre>
            <code>const x = 1</code>
          </pre>
        </Prose>
      )
      const codeBlock = container.querySelector('pre code')
      expect(codeBlock).toBeInTheDocument()
      expect(codeBlock?.textContent).toContain('const x = 1')
    })

    it('should style inline code', () => {
      const { container } = render(
        <Prose>
          <p>
            Use the <code>useState</code> hook for state management
          </p>
        </Prose>
      )
      const inlineCode = container.querySelector('code')
      expect(inlineCode).toBeInTheDocument()
      expect(inlineCode?.textContent).toContain('useState')
    })

    it('should style blockquotes', () => {
      const { container } = render(
        <Prose>
          <blockquote>
            <p>This is a quote</p>
          </blockquote>
        </Prose>
      )
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toBeInTheDocument()
    })

    it('should style strong/bold text', () => {
      const { container } = render(
        <Prose>
          <p>
            This is <strong>bold text</strong> in a paragraph
          </p>
        </Prose>
      )
      const strong = container.querySelector('strong')
      expect(strong).toBeInTheDocument()
      expect(strong?.textContent).toContain('bold text')
    })

    it('should style italic/em text', () => {
      const { container } = render(
        <Prose>
          <p>
            This is <em>italic text</em> in a paragraph
          </p>
        </Prose>
      )
      const em = container.querySelector('em')
      expect(em).toBeInTheDocument()
      expect(em?.textContent).toContain('italic text')
    })

    it('should style tables', () => {
      const { container } = render(
        <Prose>
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
              </tr>
            </tbody>
          </table>
        </Prose>
      )
      const table = container.querySelector('table')
      expect(table).toBeInTheDocument()
      expect(container.querySelector('th')).toBeInTheDocument()
      expect(container.querySelector('td')).toBeInTheDocument()
    })

    it('should style images', () => {
      const { container } = render(
        <Prose>
          <img src="https://example.com/image.jpg" alt="Example" />
        </Prose>
      )
      const img = container.querySelector('img')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
      expect(img).toHaveAttribute('alt', 'Example')
    })

    it('should style horizontal rule', () => {
      const { container } = render(
        <Prose>
          <p>Before</p>
          <hr />
          <p>After</p>
        </Prose>
      )
      const hr = container.querySelector('hr')
      expect(hr).toBeInTheDocument()
    })
  })

  describe('Size Variants', () => {
    it('should apply small size classes', () => {
      const { container } = render(
        <Prose size="sm">
          <p>Small text</p>
        </Prose>
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('text-sm')
    })

    it('should apply medium size classes by default', () => {
      const { container } = render(
        <Prose>
          <p>Medium text</p>
        </Prose>
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('text-base')
    })

    it('should apply large size classes', () => {
      const { container } = render(
        <Prose size="lg">
          <p>Large text</p>
        </Prose>
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('text-lg')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <Prose className="custom-prose">
          <p>Content</p>
        </Prose>
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('custom-prose')
    })

    it('should apply prose base classes', () => {
      const { container } = render(
        <Prose>
          <p>Content</p>
        </Prose>
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('prose')
    })
  })

  describe('Complex Content', () => {
    it('should render complex markdown-like content', () => {
      const { getByText, container } = render(
        <Prose>
          <h1>Main Title</h1>
          <p>
            This is a paragraph with <strong>bold text</strong> and{' '}
            <a href="#section">a link</a>.
          </p>
          <h2>Section Title</h2>
          <p>More content here.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <blockquote>
            <p>A quote</p>
          </blockquote>
          <pre>
            <code>code block</code>
          </pre>
        </Prose>
      )

      expect(getByText('Main Title')).toBeInTheDocument()
      expect(getByText('Section Title')).toBeInTheDocument()
      expect(getByText('bold text')).toBeInTheDocument()
      expect(container.querySelector('a')).toHaveAttribute('href', '#section')
      expect(container.querySelector('blockquote')).toBeInTheDocument()
      expect(container.querySelector('pre')).toBeInTheDocument()
    })

    it('should handle nested elements', () => {
      const { container } = render(
        <Prose>
          <div>
            <h1>Nested Title</h1>
            <p>Nested paragraph</p>
            <ul>
              <li>
                Nested list item with <strong>bold</strong>
              </li>
            </ul>
          </div>
        </Prose>
      )
      const wrapper = container.querySelector('div > div')
      expect(wrapper).toBeInTheDocument()
      expect(wrapper?.querySelector('h1')).toBeInTheDocument()
      expect(wrapper?.querySelector('p')).toBeInTheDocument()
      expect(wrapper?.querySelector('strong')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <Prose>
          <h1>Title</h1>
          <p>Content</p>
          <a href="https://example.com">Link</a>
        </Prose>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should maintain semantic HTML structure', () => {
      const { container } = render(
        <Prose>
          <h1>Heading</h1>
          <p>Paragraph</p>
          <ul>
            <li>Item</li>
          </ul>
        </Prose>
      )
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('p')).toBeInTheDocument()
      expect(container.querySelector('ul')).toBeInTheDocument()
    })

    it('should have proper heading hierarchy', () => {
      const { container } = render(
        <Prose>
          <h1>Level 1</h1>
          <h2>Level 2</h2>
          <h3>Level 3</h3>
        </Prose>
      )
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h2')).toBeInTheDocument()
      expect(container.querySelector('h3')).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      const { container } = render(<Prose>{}</Prose>)
      expect(container.querySelector('div')).toBeInTheDocument()
    })

    it('should handle text nodes', () => {
      const { getByText } = render(<Prose>Plain text content</Prose>)
      expect(getByText('Plain text content')).toBeInTheDocument()
    })

    it('should handle very long content', () => {
      const longText = 'a'.repeat(1000)
      const { getByText } = render(
        <Prose>
          <p>{longText}</p>
        </Prose>
      )
      expect(getByText(longText)).toBeInTheDocument()
    })

    it('should handle special characters', () => {
      const { getByText } = render(
        <Prose>
          <p>Special characters: &lt; &gt; &amp; &quot; &#39;</p>
        </Prose>
      )
      expect(getByText(/Special characters/)).toBeInTheDocument()
    })
  })
})
