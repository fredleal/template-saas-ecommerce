'use client'
import React from 'react'

type ListTag = 'ul' | 'ol'

export interface ListProps<T extends ListTag, ItemType> {
  /** HTML tag to render (ul or ol) */
  as?: T
  /** Optional title for the list */
  title?: string
  /** List items array */
  items?: ItemType[]
  /** Render function for each item */
  renderItem?: (item: ItemType, index: number) => React.ReactNode
  /** Function to generate unique keys */
  getKey?: (item: ItemType, index: number) => string
  /** List direction */
  direction?: 'row' | 'column'
  /** Visual variant */
  variant?: 'primary' | 'secondary'
  /** Custom className */
  className?: string
  /** Additional props for the list element */
  listProps?: React.ComponentPropsWithoutRef<T>
}

export function List<T extends ListTag = 'ul', ItemType = string | React.ReactNode>({
  as,
  title,
  items = [],
  renderItem,
  getKey,
  direction = 'column',
  variant = 'primary',
  className = '',
  listProps,
}: ListProps<T, ItemType>) {
  const Tag = (as ?? 'ul') as T

  // Base classes
  const baseClasses = 'list-none m-0 p-0'

  // Direction classes
  const directionClasses = direction === 'row'
    ? 'flex flex-row gap-2'
    : 'flex flex-col gap-1'

  // Variant classes
  const variantClasses = {
    primary: '',
    secondary: 'text-gray-600',
  }

  const listClass = `${baseClasses} ${directionClasses} ${variantClasses[variant]} ${className}`

  return (
    <>
      {title && (
        <h3 className="text-lg font-semibold mb-3">
          {title}
        </h3>
      )}
      <Tag className={listClass} {...(listProps as any)}>
        {items.map((item, index) => (
          <li
            key={getKey ? getKey(item, index) : `list-item-${index}`}
            className="list-item"
          >
            {renderItem ? renderItem(item, index) : (item as React.ReactNode)}
          </li>
        ))}
      </Tag>
    </>
  )
}
