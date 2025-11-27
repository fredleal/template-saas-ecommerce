import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useAutoSlide } from '../../Carousel/useAutoSlide'

describe('useAutoSlide', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Auto-slide Behavior', () => {
    it('should call goToNextSlide when all conditions are met', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      vi.advanceTimersByTime(1000)

      expect(goToNextSlide).toHaveBeenCalledTimes(1)
    })

    it('should call goToNextSlide multiple times at specified interval', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      vi.advanceTimersByTime(3000)

      expect(goToNextSlide).toHaveBeenCalledTimes(3)
    })

    it('should use default interval of 7000ms', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: true,
        })
      )

      vi.advanceTimersByTime(6999)
      expect(goToNextSlide).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1)
      expect(goToNextSlide).toHaveBeenCalledTimes(1)
    })
  })

  describe('Conditional Execution', () => {
    it('should not run when enabled is false', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: false,
          interval: 1000,
        })
      )

      vi.advanceTimersByTime(5000)

      expect(goToNextSlide).not.toHaveBeenCalled()
    })

    it('should not run when isHovered is true', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: true,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      vi.advanceTimersByTime(5000)

      expect(goToNextSlide).not.toHaveBeenCalled()
    })

    it('should not run when isTabVisible is false', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: false,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      vi.advanceTimersByTime(5000)

      expect(goToNextSlide).not.toHaveBeenCalled()
    })

    it('should not run when isBannerVisible is false', () => {
      const goToNextSlide = vi.fn()

      renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: false,
          isHovered: false,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      vi.advanceTimersByTime(5000)

      expect(goToNextSlide).not.toHaveBeenCalled()
    })
  })

  describe('Dynamic Updates', () => {
    it('should stop auto-slide when enabled changes to false', () => {
      const goToNextSlide = vi.fn()

      const { rerender } = renderHook(
        ({ enabled }) =>
          useAutoSlide({
            isTabVisible: true,
            isBannerVisible: true,
            isHovered: false,
            goToNextSlide,
            enabled,
            interval: 1000,
          }),
        { initialProps: { enabled: true } }
      )

      vi.advanceTimersByTime(1000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1)

      rerender({ enabled: false })

      vi.advanceTimersByTime(5000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1) // Should not increase
    })

    it('should pause auto-slide when isHovered changes to true', () => {
      const goToNextSlide = vi.fn()

      const { rerender } = renderHook(
        ({ isHovered }) =>
          useAutoSlide({
            isTabVisible: true,
            isBannerVisible: true,
            isHovered,
            goToNextSlide,
            enabled: true,
            interval: 1000,
          }),
        { initialProps: { isHovered: false } }
      )

      vi.advanceTimersByTime(1000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1)

      rerender({ isHovered: true })

      vi.advanceTimersByTime(5000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1) // Should not increase
    })

    it('should resume auto-slide when isHovered changes back to false', () => {
      const goToNextSlide = vi.fn()

      const { rerender } = renderHook(
        ({ isHovered }) =>
          useAutoSlide({
            isTabVisible: true,
            isBannerVisible: true,
            isHovered,
            goToNextSlide,
            enabled: true,
            interval: 1000,
          }),
        { initialProps: { isHovered: true } }
      )

      vi.advanceTimersByTime(2000)
      expect(goToNextSlide).not.toHaveBeenCalled()

      rerender({ isHovered: false })

      vi.advanceTimersByTime(1000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1)
    })

    it('should update interval when it changes', () => {
      const goToNextSlide = vi.fn()

      const { rerender } = renderHook(
        ({ interval }) =>
          useAutoSlide({
            isTabVisible: true,
            isBannerVisible: true,
            isHovered: false,
            goToNextSlide,
            enabled: true,
            interval,
          }),
        { initialProps: { interval: 1000 } }
      )

      vi.advanceTimersByTime(1000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1)

      rerender({ interval: 2000 })

      vi.advanceTimersByTime(1000)
      expect(goToNextSlide).toHaveBeenCalledTimes(1) // Should not increase yet

      vi.advanceTimersByTime(1000)
      expect(goToNextSlide).toHaveBeenCalledTimes(2) // Now it should
    })
  })

  describe('Cleanup', () => {
    it('should clear interval on unmount', () => {
      const goToNextSlide = vi.fn()
      const clearIntervalSpy = vi.spyOn(global, 'clearInterval')

      const { unmount } = renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      unmount()

      expect(clearIntervalSpy).toHaveBeenCalled()
    })

    it('should not call goToNextSlide after unmount', () => {
      const goToNextSlide = vi.fn()

      const { unmount } = renderHook(() =>
        useAutoSlide({
          isTabVisible: true,
          isBannerVisible: true,
          isHovered: false,
          goToNextSlide,
          enabled: true,
          interval: 1000,
        })
      )

      unmount()

      vi.advanceTimersByTime(5000)

      expect(goToNextSlide).not.toHaveBeenCalled()
    })
  })
})
