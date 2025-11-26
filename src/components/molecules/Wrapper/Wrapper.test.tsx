import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wrapper } from './Wrapper'
import { createRef } from 'react'

describe('Wrapper', () => {
  describe('Rendering', () => {
    it('should render children', () => {
      render(
        <Wrapper>
          <div data-testid="child">Child content</div>
        </Wrapper>
      )

      expect(screen.getByTestId('child')).toBeInTheDocument()
      expect(screen.getByText('Child content')).toBeInTheDocument()
    })

    it('should render without children', () => {
      const { container } = render(<Wrapper />)

      const wrapper = container.firstChild
      expect(wrapper).toBeInTheDocument()
    })

    it('should have two-level structure (outer + inner)', () => {
      const { container } = render(
        <Wrapper>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(outer).toBeInTheDocument()
      expect(inner).toBeInTheDocument()
      expect(inner.textContent).toBe('Content')
    })
  })

  describe('Ref Support', () => {
    it('should attach containerRef to outer container', () => {
      const ref = createRef<HTMLDivElement>()

      render(
        <Wrapper containerRef={ref}>
          <div>Content</div>
        </Wrapper>
      )

      expect(ref.current).toBeInstanceOf(HTMLDivElement)
      expect(ref.current?.textContent).toBe('Content')
    })
  })

  describe('Width Variants', () => {
    it('should apply primary variant by default', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      expect(outer).toHaveClass('max-w-7xl', 'mx-auto')
    })

    it('should apply secondary variant when specified', () => {
      const { container } = render(
        <Wrapper variantWidth="secondary">
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      expect(outer).toHaveClass('max-w-full')
      expect(outer).not.toHaveClass('max-w-7xl')
    })

    it('should always have w-full class', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      expect(outer).toHaveClass('w-full')
    })
  })

  describe('Overflow', () => {
    it('should not have overflow-hidden by default', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      expect(outer).not.toHaveClass('overflow-hidden')
    })

    it('should apply overflow-hidden when specified', () => {
      const { container } = render(
        <Wrapper overflowHidden={true}>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      expect(outer).toHaveClass('overflow-hidden')
    })
  })

  describe('TranslateX', () => {
    it('should not have transform by default', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner.style.transform).toBe('')
    })

    it('should apply translateX transform when specified', () => {
      const { container } = render(
        <Wrapper translateX={100}>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner.style.transform).toBe('translateX(-100px)')
    })

    it('should handle zero translateX', () => {
      const { container } = render(
        <Wrapper translateX={0}>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner.style.transform).toBe('translateX(-0px)')
    })
  })

  describe('Transition', () => {
    it('should not have transition by default', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner.style.transition).toBe('')
    })

    it('should apply transition when specified', () => {
      const { container } = render(
        <Wrapper transition="transform 0.3s ease">
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner.style.transition).toBe('transform 0.3s ease')
    })
  })

  describe('Flex', () => {
    it('should have flex class by default', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner).toHaveClass('flex')
    })

    it('should not have flex when isFlex is false', () => {
      const { container } = render(
        <Wrapper isFlex={false}>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner).not.toHaveClass('flex')
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className to outer container', () => {
      const { container } = render(
        <Wrapper className="custom-outer-class">
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      expect(outer).toHaveClass('custom-outer-class')
    })

    it('should apply custom innerClassName to inner wrapper', () => {
      const { container } = render(
        <Wrapper innerClassName="custom-inner-class">
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner).toHaveClass('custom-inner-class')
    })

    it('should apply custom style to outer container', () => {
      const { container } = render(
        <Wrapper style={{ backgroundColor: 'red', padding: '10px' }}>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      expect(outer.style.backgroundColor).toBe('red')
      expect(outer.style.padding).toBe('10px')
    })

    it('should apply custom innerStyle to inner wrapper', () => {
      const { container } = render(
        <Wrapper innerStyle={{ margin: '20px', color: 'blue' }}>
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      expect(inner.style.margin).toBe('20px')
      expect(inner.style.color).toBe('blue')
    })
  })

  describe('Block ID', () => {
    it('should not have id by default', () => {
      const { container } = render(<Wrapper><div>Content</div></Wrapper>)

      const outer = container.firstChild as HTMLElement
      expect(outer).not.toHaveAttribute('id')
    })

    it('should apply blockId as id attribute', () => {
      const { container } = render(
        <Wrapper blockId="my-wrapper">
          <div>Content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      expect(outer).toHaveAttribute('id', 'my-wrapper')
    })
  })

  describe('Combined Props', () => {
    it('should handle multiple props together', () => {
      const ref = createRef<HTMLDivElement>()

      const { container } = render(
        <Wrapper
          containerRef={ref}
          variantWidth="secondary"
          overflowHidden={true}
          translateX={50}
          transition="all 0.5s ease-in-out"
          isFlex={true}
          className="custom-class"
          innerClassName="inner-custom"
          blockId="test-wrapper"
        >
          <div>Combined content</div>
        </Wrapper>
      )

      const outer = container.firstChild as HTMLElement
      const inner = outer?.firstChild as HTMLElement

      // Outer checks
      expect(ref.current).toBe(outer)
      expect(outer).toHaveClass('max-w-full', 'overflow-hidden', 'custom-class')
      expect(outer).toHaveAttribute('id', 'test-wrapper')

      // Inner checks
      expect(inner).toHaveClass('flex', 'inner-custom')
      expect(inner.style.transform).toBe('translateX(-50px)')
      expect(inner.style.transition).toBe('all 0.5s ease-in-out')
    })
  })
})
