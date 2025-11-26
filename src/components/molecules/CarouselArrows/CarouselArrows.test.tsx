import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarouselArrows } from './CarouselArrows'

describe('CarouselArrows', () => {
  describe('Rendering', () => {
    it('should render both arrows when showPrev and showNext are true', () => {
      render(
        <CarouselArrows
          showPrev={true}
          showNext={true}
          onPrev={vi.fn()}
          onNext={vi.fn()}
        />
      )

      expect(
        screen.getByRole('button', { name: /previous slide/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /next slide/i })
      ).toBeInTheDocument()
    })

    it('should render only prev arrow when showNext is false', () => {
      render(
        <CarouselArrows
          showPrev={true}
          showNext={false}
          onPrev={vi.fn()}
          onNext={vi.fn()}
        />
      )

      expect(
        screen.getByRole('button', { name: /previous slide/i })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /next slide/i })
      ).not.toBeInTheDocument()
    })

    it('should render only next arrow when showPrev is false', () => {
      render(
        <CarouselArrows
          showPrev={false}
          showNext={true}
          onPrev={vi.fn()}
          onNext={vi.fn()}
        />
      )

      expect(
        screen.queryByRole('button', { name: /previous slide/i })
      ).not.toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /next slide/i })
      ).toBeInTheDocument()
    })

    it('should not render any arrows when both are false', () => {
      render(
        <CarouselArrows
          showPrev={false}
          showNext={false}
          onPrev={vi.fn()}
          onNext={vi.fn()}
        />
      )

      expect(
        screen.queryByRole('button', { name: /previous slide/i })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /next slide/i })
      ).not.toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('should call onPrev when prev arrow is clicked', async () => {
      const user = userEvent.setup()
      const onPrev = vi.fn()
      const onNext = vi.fn()

      render(
        <CarouselArrows
          showPrev={true}
          showNext={true}
          onPrev={onPrev}
          onNext={onNext}
        />
      )

      await user.click(screen.getByRole('button', { name: /previous slide/i }))

      expect(onPrev).toHaveBeenCalledTimes(1)
      expect(onNext).not.toHaveBeenCalled()
    })

    it('should call onNext when next arrow is clicked', async () => {
      const user = userEvent.setup()
      const onPrev = vi.fn()
      const onNext = vi.fn()

      render(
        <CarouselArrows
          showPrev={true}
          showNext={true}
          onPrev={onPrev}
          onNext={onNext}
        />
      )

      await user.click(screen.getByRole('button', { name: /next slide/i }))

      expect(onNext).toHaveBeenCalledTimes(1)
      expect(onPrev).not.toHaveBeenCalled()
    })

    it('should not call onPrev when prev arrow is disabled', async () => {
      const user = userEvent.setup()
      const onPrev = vi.fn()

      render(
        <CarouselArrows
          showPrev={true}
          showNext={false}
          onPrev={onPrev}
          onNext={vi.fn()}
          disabledPrev={true}
        />
      )

      const prevButton = screen.getByRole('button', { name: /previous slide/i })
      expect(prevButton).toBeDisabled()

      await user.click(prevButton)

      expect(onPrev).not.toHaveBeenCalled()
    })

    it('should not call onNext when next arrow is disabled', async () => {
      const user = userEvent.setup()
      const onNext = vi.fn()

      render(
        <CarouselArrows
          showPrev={false}
          showNext={true}
          onPrev={vi.fn()}
          onNext={onNext}
          disabledNext={true}
        />
      )

      const nextButton = screen.getByRole('button', { name: /next slide/i })
      expect(nextButton).toBeDisabled()

      await user.click(nextButton)

      expect(onNext).not.toHaveBeenCalled()
    })
  })

  describe('Custom Icons', () => {
    it('should render custom left icon when provided', () => {
      const customIcon = <span data-testid="custom-left-icon">←</span>

      render(
        <CarouselArrows
          showPrev={true}
          showNext={false}
          onPrev={vi.fn()}
          onNext={vi.fn()}
          iconLeft={customIcon}
        />
      )

      expect(screen.getByTestId('custom-left-icon')).toBeInTheDocument()
    })

    it('should render custom right icon when provided', () => {
      const customIcon = <span data-testid="custom-right-icon">→</span>

      render(
        <CarouselArrows
          showPrev={false}
          showNext={true}
          onPrev={vi.fn()}
          onNext={vi.fn()}
          iconRight={customIcon}
        />
      )

      expect(screen.getByTestId('custom-right-icon')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper aria-labels', () => {
      render(
        <CarouselArrows
          showPrev={true}
          showNext={true}
          onPrev={vi.fn()}
          onNext={vi.fn()}
        />
      )

      expect(
        screen.getByRole('button', { name: /previous slide/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /next slide/i })
      ).toBeInTheDocument()
    })

    it('should accept custom aria-labels', () => {
      render(
        <CarouselArrows
          showPrev={true}
          showNext={true}
          onPrev={vi.fn()}
          onNext={vi.fn()}
          ariaLabelPrev="Go to previous item"
          ariaLabelNext="Go to next item"
        />
      )

      expect(
        screen.getByRole('button', { name: /go to previous item/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /go to next item/i })
      ).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should apply custom className to left arrow', () => {
      render(
        <CarouselArrows
          showPrev={true}
          showNext={false}
          onPrev={vi.fn()}
          onNext={vi.fn()}
          classNameLeft="custom-left-class"
        />
      )

      const prevButton = screen.getByRole('button', { name: /previous slide/i })
      expect(prevButton).toHaveClass('custom-left-class')
    })

    it('should apply custom className to right arrow', () => {
      render(
        <CarouselArrows
          showPrev={false}
          showNext={true}
          onPrev={vi.fn()}
          onNext={vi.fn()}
          classNameRight="custom-right-class"
        />
      )

      const nextButton = screen.getByRole('button', { name: /next slide/i })
      expect(nextButton).toHaveClass('custom-right-class')
    })
  })
})
