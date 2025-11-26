import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarouselDots } from './CarouselDots'

describe('CarouselDots', () => {
  describe('Rendering', () => {
    it('should render correct number of dots', () => {
      render(<CarouselDots total={5} currentIndex={0} onDotClick={vi.fn()} />)

      const dots = screen.getAllByRole('button')
      expect(dots).toHaveLength(5)
    })

    it('should render single dot when total is 1', () => {
      render(<CarouselDots total={1} currentIndex={0} onDotClick={vi.fn()} />)

      const dots = screen.getAllByRole('button')
      expect(dots).toHaveLength(1)
    })

    it('should render multiple dots when total is greater than 1', () => {
      render(<CarouselDots total={10} currentIndex={0} onDotClick={vi.fn()} />)

      const dots = screen.getAllByRole('button')
      expect(dots).toHaveLength(10)
    })
  })

  describe('Active State', () => {
    it('should mark first dot as active when currentIndex is 0', () => {
      render(<CarouselDots total={5} currentIndex={0} onDotClick={vi.fn()} />)

      const firstDot = screen.getByRole('button', { name: /go to slide 1/i })
      expect(firstDot).toHaveAttribute('aria-current', 'true')
    })

    it('should mark correct dot as active based on currentIndex', () => {
      render(<CarouselDots total={5} currentIndex={2} onDotClick={vi.fn()} />)

      const thirdDot = screen.getByRole('button', { name: /go to slide 3/i })
      expect(thirdDot).toHaveAttribute('aria-current', 'true')
    })

    it('should only have one active dot at a time', () => {
      render(<CarouselDots total={5} currentIndex={1} onDotClick={vi.fn()} />)

      const activeDots = screen
        .getAllByRole('button')
        .filter(dot => dot.getAttribute('aria-current') === 'true')

      expect(activeDots).toHaveLength(1)
    })
  })

  describe('Interactions', () => {
    it('should call onDotClick with correct index when dot is clicked', async () => {
      const user = userEvent.setup()
      const onDotClick = vi.fn()

      render(
        <CarouselDots total={5} currentIndex={0} onDotClick={onDotClick} />
      )

      const thirdDot = screen.getByRole('button', { name: /go to slide 3/i })
      await user.click(thirdDot)

      expect(onDotClick).toHaveBeenCalledWith(2) // index is 0-based
    })

    it('should call onDotClick when clicking first dot', async () => {
      const user = userEvent.setup()
      const onDotClick = vi.fn()

      render(
        <CarouselDots total={5} currentIndex={2} onDotClick={onDotClick} />
      )

      const firstDot = screen.getByRole('button', { name: /go to slide 1/i })
      await user.click(firstDot)

      expect(onDotClick).toHaveBeenCalledWith(0)
    })

    it('should call onDotClick when clicking last dot', async () => {
      const user = userEvent.setup()
      const onDotClick = vi.fn()

      render(
        <CarouselDots total={5} currentIndex={0} onDotClick={onDotClick} />
      )

      const lastDot = screen.getByRole('button', { name: /go to slide 5/i })
      await user.click(lastDot)

      expect(onDotClick).toHaveBeenCalledWith(4)
    })

    it('should allow clicking active dot', async () => {
      const user = userEvent.setup()
      const onDotClick = vi.fn()

      render(
        <CarouselDots total={5} currentIndex={2} onDotClick={onDotClick} />
      )

      const activeDot = screen.getByRole('button', { name: /go to slide 3/i })
      await user.click(activeDot)

      expect(onDotClick).toHaveBeenCalledWith(2)
    })
  })

  describe('Variants', () => {
    it('should render with primary variant by default', () => {
      const { container } = render(
        <CarouselDots total={3} currentIndex={0} onDotClick={vi.fn()} />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('flex', 'justify-center', 'gap-2', 'mt-4')
    })

    it('should render with secondary variant when specified', () => {
      const { container } = render(
        <CarouselDots
          total={3}
          currentIndex={0}
          onDotClick={vi.fn()}
          variant="secondary"
        />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('flex', 'justify-center', 'gap-3', 'mt-6')
    })
  })

  describe('Accessibility', () => {
    it('should have proper aria-labels for all dots', () => {
      render(<CarouselDots total={3} currentIndex={0} onDotClick={vi.fn()} />)

      expect(
        screen.getByRole('button', { name: /go to slide 1/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /go to slide 2/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /go to slide 3/i })
      ).toBeInTheDocument()
    })

    it('should accept custom aria-label prefix', () => {
      render(
        <CarouselDots
          total={3}
          currentIndex={0}
          onDotClick={vi.fn()}
          ariaLabelPrefix="Navigate to item"
        />
      )

      expect(
        screen.getByRole('button', { name: /navigate to item 1/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /navigate to item 2/i })
      ).toBeInTheDocument()
    })

    it('should have role="group" on container', () => {
      render(<CarouselDots total={3} currentIndex={0} onDotClick={vi.fn()} />)

      const group = screen.getByRole('group', {
        name: /carousel navigation dots/i,
      })
      expect(group).toBeInTheDocument()
    })

    it('should have type="button" on all dots', () => {
      render(<CarouselDots total={3} currentIndex={0} onDotClick={vi.fn()} />)

      const dots = screen.getAllByRole('button')
      dots.forEach(dot => {
        expect(dot).toHaveAttribute('type', 'button')
      })
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className to container', () => {
      const { container } = render(
        <CarouselDots
          total={3}
          currentIndex={0}
          onDotClick={vi.fn()}
          className="custom-dots-class"
        />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('custom-dots-class')
    })
  })
})
