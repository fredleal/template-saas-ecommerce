'use client'
import React from 'react'
import { Text, Icon } from '../../atoms'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  icon:
    | 'CartIcon'
    | 'HeartIcon'
    | 'SearchIcon'
    | 'MenuIcon'
    | 'PlusIcon'
    | 'StarIcon'
    | 'UserIcon'
    | 'FilterIcon'
    | 'CheckIcon'
    | 'XIcon'
  href: string
  label: string
}

export interface FooterProps {
  companyName: string
  companyDescription?: string
  sections: FooterSection[]
  socialLinks?: SocialLink[]
  copyrightYear?: number
  legalLinks?: FooterLink[]
  className?: string
}

export const Footer = ({
  companyName,
  companyDescription,
  sections,
  socialLinks = [],
  copyrightYear = new Date().getFullYear(),
  legalLinks = [],
  className = '',
}: FooterProps) => {
  return (
    <footer
      className={`bg-gray-900 text-gray-300 border-t border-gray-800 ${className}`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info Section */}
            <div className="col-span-1">
              <Text weight="bold" size="lg" className="text-white mb-4">
                {companyName}
              </Text>
              {companyDescription && (
                <Text size="sm" className="text-gray-400 mb-6 line-clamp-3">
                  {companyDescription}
                </Text>
              )}
              {socialLinks.length > 0 && (
                <div className="flex gap-4">
                  {socialLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-label={link.label}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={link.icon} size="md" decorative />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Sections */}
            {sections.map((section, idx) => (
              <div key={`section-${idx}`} className="col-span-1">
                <Text weight="bold" size="base" className="text-white mb-4">
                  {section.title}
                </Text>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={`${idx}-link-${linkIdx}`}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
                      >
                        <Text size="sm" className="inline">
                          {link.label}
                        </Text>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom / Legal */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <Text size="sm" className="text-gray-500">
              © {copyrightYear} {companyName}. All rights reserved.
            </Text>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-4 md:gap-6">
                {legalLinks.map((link, legalIdx) => (
                  <li key={`legal-${legalIdx}`}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
