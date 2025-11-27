'use client'
import React, { useRef, useState } from 'react'
import {
  useResponsiveValue,
  useCarouselNavigation,
  useVisibilityWithTabCheck,
  useSlideWidth,
  useAutoSlide,
} from '@/hooks'
import { Wrapper, CarouselSlide, CarouselArrows, CarouselDots } from '@/components/molecules'

export interface CarouselProps<T> {
  /** Array of items to display */
  items: T[]
  /** Function to render each item */
  renderItem: (item: T, index: number) => React.ReactNode
  /** Function to generate unique keys */
  getItemKey?: (item: T, index: number) => string | number
  /** Visual variant */
  variant?: 'primary' | 'secondary'
  /** Slides to show on mobile */
  slidesToShowMobile?: number
  /** Slides to show on tablet */
  slidesToShowTablet?: number
  /** Slides to show on desktop */
  slidesToShowDesktop?: number
  /** Gap between slides in pixels */
  gap?: number
  /** Enable infinite loop */
  infinite?: boolean
  /** Enable auto-play */
  autoplay?: boolean
  /** Pause on hover */
  pauseOnHover?: boolean
  /** Show navigation arrows */
  showArrows?: boolean
  /** Show dots */
  showDots?: boolean
  /** Controlled index */
  currentIndex?: number
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void
  /** Custom className */
  className?: string
}

export function Carousel<T>({
  items,
  renderItem,
  getItemKey,
  variant = 'primary',
  slidesToShowMobile = 1,
  slidesToShowTablet = 2,
  slidesToShowDesktop = 3,
  gap = 16,
  infinite = false,
  autoplay = false,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  currentIndex: controlledIndex,
  onSlideChange,
  className = '',
}: CarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Empty or single item handling
  if (!items || items.length === 0) return null

  const isSingleSlide = items.length === 1

  // Responsive slides to show
  const slidesToShow = useResponsiveValue({
    mobile: slidesToShowMobile,
    tablet: slidesToShowTablet,
    desktop: slidesToShowDesktop,
  })

  // Visibility detection
  const { ref: visibilityRef, isTabVisible, isElementVisible } = useVisibilityWithTabCheck()

  // Slide width calculation
  const slideWidth = useSlideWidth({
    containerRef: containerRef as React.RefObject<HTMLElement>,
    slidesToShow,
    gap,
  })

  // Navigation logic
  const { currentIndex, handleNext, handlePrev, goToSlide, maxIndex } = useCarouselNavigation({
    totalSlides: items.length,
    slidesToShow,
    infiniteLoop: infinite,
    currentIndex: controlledIndex,
    onSlideChange,
  })

  // Auto-play
  useAutoSlide({
    isTabVisible,
    isBannerVisible: isElementVisible,
    isHovered: pauseOnHover ? isHovered : false,
    goToNextSlide: handleNext,
    enabled: autoplay && !isSingleSlide,
    interval: 5000,
  })

  // Touch handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diffX = touchStartX.current - e.changedTouches[0].clientX

    if (diffX > 50) handleNext()
    else if (diffX < -50) handlePrev()

    touchStartX.current = null
  }

  // Single slide optimization
  if (isSingleSlide) {
    return (
      <div ref={visibilityRef} className={className}>
        <Wrapper variantWidth="primary" containerRef={containerRef}>
          <CarouselSlide
            key={getItemKey ? getItemKey(items[0], 0) : 'slide-0'}
            item={items[0]}
            index={0}
            renderItem={renderItem}
            width={slideWidth}
            gap={0}
            isLast
          />
        </Wrapper>
      </div>
    )
  }

  const translateX = currentIndex * (slideWidth + gap)
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex === maxIndex

  return (
    <div
      ref={visibilityRef}
      className={`relative ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={pauseOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsHovered(false) : undefined}
    >
      {/* Arrows */}
      {showArrows && (
        <CarouselArrows
          showPrev={infinite || !isAtStart}
          showNext={infinite || !isAtEnd}
          onPrev={handlePrev}
          onNext={handleNext}
          disabledPrev={!infinite && isAtStart}
          disabledNext={!infinite && isAtEnd}
          variant={variant}
        />
      )}

      {/* Slides */}
      <Wrapper
        containerRef={containerRef}
        translateX={translateX}
        transition="transform 0.3s ease"
        overflowHidden
        variantWidth="primary"
      >
        {items.map((item, index) => (
          <CarouselSlide
            key={getItemKey ? getItemKey(item, index) : `slide-${index}`}
            item={item}
            index={index}
            renderItem={renderItem}
            width={slideWidth}
            gap={gap}
            isLast={index === items.length - 1}
          />
        ))}
      </Wrapper>

      {/* Dots */}
      {showDots && items.length > slidesToShow && (
        <CarouselDots
          total={maxIndex + 1}
          currentIndex={currentIndex}
          onDotClick={goToSlide}
          variant={variant}
        />
      )}
    </div>
  )
}
