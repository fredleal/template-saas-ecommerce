'use client'
import React, { useState } from 'react'
import { Text, Button, Icon } from '../../atoms'

export interface HeaderProps {
  logoText: string
  links: { label: string; href: string }[]
  currentPath?: string
  className?: string
}

export const Header = ({
  logoText,
  links,
  currentPath,
  className = '',
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => currentPath === href

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--color-background,#ffffff)] border-b border-[var(--color-gray-200,#e5e7eb)] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Text
              weight="bold"
              size="xl"
              className="text-[var(--color-foreground,#171717)]"
            >
              {logoText}
            </Text>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--color-primary-600,#2563eb)]"
              >
                <Text
                  size="sm"
                  weight={isActive(link.href) ? 'bold' : 'normal'}
                  className={
                    isActive(link.href)
                      ? 'text-[var(--color-primary-600,#2563eb)]'
                      : 'text-[var(--color-gray-700,#374151)]'
                  }
                >
                  {link.label}
                </Text>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon
                name={mobileMenuOpen ? 'XIcon' : 'MenuIcon'}
                size="md"
                decorative
              />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-gray-200,#e5e7eb)] bg-[var(--color-background,#ffffff)]">
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 transition-colors hover:bg-[var(--color-surface,#f9fafb)] rounded-lg px-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Text
                  size="base"
                  weight={isActive(link.href) ? 'bold' : 'normal'}
                  className={
                    isActive(link.href)
                      ? 'text-[var(--color-primary-600,#2563eb)]'
                      : 'text-[var(--color-gray-700,#374151)]'
                  }
                >
                  {link.label}
                </Text>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
