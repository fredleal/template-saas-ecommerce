/* eslint-disable no-undef */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useDevice } from '../useDevice'

describe('useDevice', () => {
  let originalInnerWidth: number

  beforeEach(() => {
    originalInnerWidth = window.innerWidth
  })

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    })
    vi.clearAllMocks()
  })

  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
  }

  describe('Initial Detection', () => {
    it('should detect phone device (width <= 640)', () => {
      setWindowWidth(640)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('phone')
      expect(result.current.isPhone).toBe(true)
      expect(result.current.isMobile).toBe(true)
      expect(result.current.isTablet).toBe(false)
      expect(result.current.isDesktop).toBe(false)
    })

    it('should detect tablet device (641 <= width <= 1024)', () => {
      setWindowWidth(768)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('tablet')
      expect(result.current.isPhone).toBe(false)
      expect(result.current.isMobile).toBe(true)
      expect(result.current.isTablet).toBe(true)
      expect(result.current.isDesktop).toBe(false)
    })

    it('should detect desktop device (width > 1024)', () => {
      setWindowWidth(1920)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('desktop')
      expect(result.current.isPhone).toBe(false)
      expect(result.current.isMobile).toBe(false)
      expect(result.current.isTablet).toBe(false)
      expect(result.current.isDesktop).toBe(true)
    })
  })

  describe('Breakpoint Boundaries', () => {
    it('should detect phone at exactly 640px', () => {
      setWindowWidth(640)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('phone')
    })

    it('should detect tablet at exactly 641px', () => {
      setWindowWidth(641)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('tablet')
    })

    it('should detect tablet at exactly 1024px', () => {
      setWindowWidth(1024)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('tablet')
    })

    it('should detect desktop at exactly 1025px', () => {
      setWindowWidth(1025)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('desktop')
    })
  })

  describe('Resize Events', () => {
    it('should update device type on resize from phone to tablet', async () => {
      setWindowWidth(640)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('phone')

      act(() => {
        setWindowWidth(768)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current.deviceType).toBe('tablet')
      })
    })

    it('should update device type on resize from tablet to desktop', async () => {
      setWindowWidth(768)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('tablet')

      act(() => {
        setWindowWidth(1920)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current.deviceType).toBe('desktop')
      })
    })

    it('should update device type on resize from desktop to phone', async () => {
      setWindowWidth(1920)
      const { result } = renderHook(() => useDevice())

      expect(result.current.deviceType).toBe('desktop')

      act(() => {
        setWindowWidth(375)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current.deviceType).toBe('phone')
      })
    })

    it('should not update if device type remains the same', async () => {
      setWindowWidth(800)
      const { result } = renderHook(() => useDevice())

      const initialDeviceType = result.current.deviceType
      expect(initialDeviceType).toBe('tablet')

      act(() => {
        setWindowWidth(900)
        window.dispatchEvent(new Event('resize'))
      })

      await waitFor(() => {
        expect(result.current.deviceType).toBe(initialDeviceType)
      })
    })
  })

  describe('Boolean Properties', () => {
    it('should set isMobile true for phone and tablet', () => {
      setWindowWidth(640)
      const { result: phoneResult } = renderHook(() => useDevice())
      expect(phoneResult.current.isMobile).toBe(true)

      setWindowWidth(768)
      const { result: tabletResult } = renderHook(() => useDevice())
      expect(tabletResult.current.isMobile).toBe(true)

      setWindowWidth(1920)
      const { result: desktopResult } = renderHook(() => useDevice())
      expect(desktopResult.current.isMobile).toBe(false)
    })
  })

  describe('Cleanup', () => {
    it('should remove resize listener on unmount', () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

      setWindowWidth(768)
      const { unmount } = renderHook(() => useDevice())

      unmount()

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      )
    })
  })
})
