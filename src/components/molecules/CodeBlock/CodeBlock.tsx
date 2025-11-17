'use client'

import React, { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopyButton?: boolean
  className?: string
  title?: string
}

export const CodeBlock = ({
  code,
  language = 'javascript',
  showLineNumbers = true,
  showCopyButton = true,
  className = '',
  title,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const baseClasses =
    'rounded-lg border border-gray-200 bg-gray-900 overflow-hidden'
  const finalClasses = `${baseClasses} ${className}`

  const lines = code.split('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={finalClasses}>
      {/* Header */}
      {(title || showCopyButton || language) && (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            {language && (
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {language}
              </span>
            )}
            {title && <span className="text-sm text-gray-300">{title}</span>}
          </div>

          {showCopyButton && (
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
              aria-label="Copy code to clipboard"
            >
              {copied ? (
                <>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Code Content */}
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm text-gray-100 leading-relaxed">
          {lines.map((line, index) => (
            <div
              key={index}
              className="flex gap-4"
              data-testid={`code-line-${index}`}
            >
              {showLineNumbers && (
                <span className="inline-flex w-8 flex-shrink-0 select-none text-right text-gray-500">
                  {index + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
