'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Text } from '@/components/atoms'

export interface DropdownProps {
  /** Dropdown label/trigger text */
  label: string
  /** Content to display when open */
  children: React.ReactNode
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean
  /** Controlled open state */
  isOpen?: boolean
  /** Callback when toggle */
  onToggle?: (isOpen: boolean) => void
  /** Disabled state */
  disabled?: boolean
  /** Custom className */
  className?: string
}

export function Dropdown({
  label,
  children,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
  disabled = false,
  className = '',
}: DropdownProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)
  const detailsRef = useRef<HTMLDetailsElement>(null)

  // Determine if component is controlled
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen

  // Sync controlled state with details element
  useEffect(() => {
    if (detailsRef.current && detailsRef.current.open !== isOpen) {
      detailsRef.current.open = isOpen
    }
  }, [isOpen])

  const handleToggle = (event: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    const newIsOpen = event.currentTarget.open

    if (!isControlled) {
      setInternalIsOpen(newIsOpen)
    }

    onToggle?.(newIsOpen)
  }

  return (
    <details
      ref={detailsRef}
      open={isOpen}
      onToggle={handleToggle}
      className={`
        group border border-gray-200 rounded-lg
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      <summary
        className={`
          flex items-center justify-between px-4 py-3
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}
          select-none transition-colors
          list-none
          [&::-webkit-details-marker]:hidden
        `}
      >
        <Text size="sm" weight="semibold">
          {label}
        </Text>

        {/* Chevron icon */}
        <svg
          className={`
            w-5 h-5 text-gray-500 transition-transform duration-200
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <div className="px-4 py-3 border-t border-gray-100">{children}</div>
    </details>
  )
}
