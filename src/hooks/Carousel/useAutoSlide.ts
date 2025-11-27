'use client'
import { useEffect } from 'react'

export interface UseAutoSlideProps {
  isTabVisible: boolean
  isBannerVisible: boolean
  isHovered: boolean
  goToNextSlide: () => void
  enabled: boolean
  interval?: number
}

export const useAutoSlide = ({
  isTabVisible,
  isBannerVisible,
  isHovered,
  goToNextSlide,
  enabled,
  interval = 7000,
}: UseAutoSlideProps): void => {
  useEffect(() => {
    if (!enabled || isHovered || !isTabVisible || !isBannerVisible) {
      return
    }

    const timer = setInterval(() => {
      goToNextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [
    enabled,
    isHovered,
    isTabVisible,
    isBannerVisible,
    goToNextSlide,
    interval,
  ])
}
