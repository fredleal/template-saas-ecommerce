'use client'
import React, { ReactNode, Ref } from 'react'

export interface WrapperProps {
  /** Child elements */
  children?: ReactNode
  /** Ref for the container div */
  containerRef?: Ref<HTMLDivElement>
  /** Custom className for outer container */
  className?: string
  /** Custom className for inner wrapper */
  innerClassName?: string
  /** Width variant */
  variantWidth?: 'primary' | 'secondary'
  /** HTML id for the container */
  blockId?: string
  /** Whether to apply overflow-hidden */
  overflowHidden?: boolean
  /** Horizontal translation in pixels */
  translateX?: number
  /** CSS transition string */
  transition?: string
  /** Whether inner wrapper should be flex */
  isFlex?: boolean
  /** Custom inline styles for outer container */
  style?: React.CSSProperties
  /** Custom inline styles for inner wrapper */
  innerStyle?: React.CSSProperties
}

export const Wrapper = ({
  children,
  containerRef,
  className = '',
  innerClassName = '',
  variantWidth = 'primary',
  blockId,
  overflowHidden = false,
  translateX,
  transition,
  isFlex = true,
  style,
  innerStyle,
}: WrapperProps) => {
  // Helper to filter and join class names
  const parseClassNames = (classes: Array<string | undefined | null | false>) =>
    classes.filter(Boolean).join(' ')

  // Outer container classes
  const containerClasses = parseClassNames([
    'w-full',
    variantWidth === 'primary' ? 'max-w-7xl mx-auto' : 'max-w-full',
    overflowHidden ? 'overflow-hidden' : '',
    className,
  ])

  // Inner wrapper classes
  const innerClasses = parseClassNames([
    isFlex ? 'flex' : '',
    innerClassName,
  ])

  // Inner wrapper inline styles
  const innerInlineStyle: React.CSSProperties = {
    ...(translateX !== undefined && {
      transform: `translateX(-${translateX}px)`,
    }),
    ...(transition && { transition }),
    ...innerStyle,
  }

  return (
    <div
      ref={containerRef}
      id={blockId}
      className={containerClasses}
      style={style}
    >
      <div className={innerClasses} style={innerInlineStyle}>
        {children}
      </div>
    </div>
  )
}
