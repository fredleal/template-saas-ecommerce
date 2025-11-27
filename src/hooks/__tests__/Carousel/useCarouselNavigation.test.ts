import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCarouselNavigation } from '../../Carousel/useCarouselNavigation'

describe('useCarouselNavigation', () => {
  describe('Initialization', () => {
    it('should initialize with default index', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      expect(result.current.currentIndex).toBe(0)
    })

    it('should initialize with custom default index', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          defaultIndex: 2,
        })
      )

      expect(result.current.currentIndex).toBe(2)
    })

    it('should calculate maxIndex correctly for fractional slides', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      // maxIndex = totalSlides - slidesToShow = 10 - 3 = 7
      expect(result.current.maxIndex).toBe(7)
      expect(result.current.isFractional).toBe(true)
    })

    it('should calculate maxIndex correctly for non-fractional slides', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 3,
          slidesToShow: 5,
        })
      )

      // maxIndex = totalSlides - 1 = 3 - 1 = 2 (when totalSlides <= slidesToShow)
      expect(result.current.maxIndex).toBe(2)
      expect(result.current.isFractional).toBe(false)
    })
  })

  describe('Controlled vs Uncontrolled', () => {
    it('should work in uncontrolled mode', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      expect(result.current.currentIndex).toBe(0)

      act(() => {
        result.current.handleNext()
      })

      expect(result.current.currentIndex).toBe(1)
    })

    it('should work in controlled mode', () => {
      const onSlideChange = vi.fn()
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          currentIndex: 2,
          onSlideChange,
        })
      )

      expect(result.current.currentIndex).toBe(2)

      act(() => {
        result.current.handleNext()
      })

      expect(onSlideChange).toHaveBeenCalledWith(3)
    })

    it('should sync internal state with controlled index changes', () => {
      const { result, rerender } = renderHook(
        ({ currentIndex }) =>
          useCarouselNavigation({
            totalSlides: 10,
            slidesToShow: 3,
            currentIndex,
          }),
        { initialProps: { currentIndex: 0 } }
      )

      expect(result.current.currentIndex).toBe(0)

      rerender({ currentIndex: 5 })

      expect(result.current.currentIndex).toBe(5)
    })
  })

  describe('Navigation - No Infinite Loop', () => {
    it('should navigate to next slide', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      act(() => {
        result.current.handleNext()
      })

      expect(result.current.currentIndex).toBe(1)
    })

    it('should navigate to previous slide', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          defaultIndex: 5,
        })
      )

      act(() => {
        result.current.handlePrev()
      })

      expect(result.current.currentIndex).toBe(4)
    })

    it('should not go beyond maxIndex', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          defaultIndex: 7, // maxIndex
        })
      )

      act(() => {
        result.current.handleNext()
      })

      expect(result.current.currentIndex).toBe(7)
    })

    it('should not go below 0', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      act(() => {
        result.current.handlePrev()
      })

      expect(result.current.currentIndex).toBe(0)
    })

    it('should navigate using goToSlide', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      act(() => {
        result.current.goToSlide(5)
      })

      expect(result.current.currentIndex).toBe(5)
    })

    it('should clamp goToSlide to valid range', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
        })
      )

      act(() => {
        result.current.goToSlide(10)
      })

      expect(result.current.currentIndex).toBe(7) // maxIndex

      act(() => {
        result.current.goToSlide(-5)
      })

      expect(result.current.currentIndex).toBe(0)
    })
  })

  describe('Navigation - With Infinite Loop', () => {
    it('should wrap to start when going next from maxIndex', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          infiniteLoop: true,
          defaultIndex: 7, // maxIndex
        })
      )

      act(() => {
        result.current.handleNext()
      })

      expect(result.current.currentIndex).toBe(0)
    })

    it('should wrap to end when going prev from 0', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          infiniteLoop: true,
        })
      )

      act(() => {
        result.current.handlePrev()
      })

      expect(result.current.currentIndex).toBe(7) // maxIndex
    })

    it('should wrap using goToSlide with negative index', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          infiniteLoop: true,
        })
      )

      act(() => {
        result.current.goToSlide(-1)
      })

      expect(result.current.currentIndex).toBe(7) // maxIndex
    })

    it('should wrap using goToSlide with index beyond maxIndex', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          infiniteLoop: true,
        })
      )

      act(() => {
        result.current.goToSlide(10)
      })

      expect(result.current.currentIndex).toBe(0)
    })
  })

  describe('Callbacks', () => {
    it('should call onSlideChange when slide changes', () => {
      const onSlideChange = vi.fn()
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          onSlideChange,
        })
      )

      act(() => {
        result.current.handleNext()
      })

      expect(onSlideChange).toHaveBeenCalledWith(1)
      expect(onSlideChange).toHaveBeenCalledTimes(1)
    })

    it('should not call onSlideChange when index does not change', () => {
      const onSlideChange = vi.fn()
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          onSlideChange,
        })
      )

      act(() => {
        result.current.handlePrev() // Already at 0, should not change
      })

      expect(onSlideChange).not.toHaveBeenCalled()
    })

    it('should call onSlideChange with correct index on goToSlide', () => {
      const onSlideChange = vi.fn()
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 10,
          slidesToShow: 3,
          onSlideChange,
        })
      )

      act(() => {
        result.current.goToSlide(5)
      })

      expect(onSlideChange).toHaveBeenCalledWith(5)
    })
  })

  describe('Edge Cases', () => {
    it('should handle single slide', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 1,
          slidesToShow: 1,
        })
      )

      expect(result.current.maxIndex).toBe(0)
      expect(result.current.isFractional).toBe(false)

      act(() => {
        result.current.handleNext()
      })

      expect(result.current.currentIndex).toBe(0)
    })

    it('should handle more slidesToShow than totalSlides', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 3,
          slidesToShow: 5,
        })
      )

      expect(result.current.isFractional).toBe(false)
      expect(result.current.maxIndex).toBe(2)
    })

    it('should handle sequential navigation', () => {
      const { result } = renderHook(() =>
        useCarouselNavigation({
          totalSlides: 5,
          slidesToShow: 1,
        })
      )

      act(() => {
        result.current.handleNext()
      })

      act(() => {
        result.current.handleNext()
      })

      act(() => {
        result.current.handleNext()
      })

      expect(result.current.currentIndex).toBe(3)

      act(() => {
        result.current.handlePrev()
      })

      expect(result.current.currentIndex).toBe(2)
    })
  })
})
