import React from 'react'

interface ProseProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Prose = ({
  children,
  className = '',
  size = 'md',
}: ProseProps) => {
  const baseClasses = `
    prose
    prose-headings:font-bold
    prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-4
    prose-h2:text-3xl prose-h2:mt-6 prose-h2:mb-3
    prose-h3:text-2xl prose-h3:mt-5 prose-h3:mb-2
    prose-h4:text-xl prose-h4:mt-4 prose-h4:mb-2
    prose-p:text-base prose-p:leading-7 prose-p:mb-4
    prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
    prose-strong:font-bold
    prose-em:italic
    prose-ul:list-disc prose-ul:list-inside prose-ul:mb-4
    prose-ol:list-decimal prose-ol:list-inside prose-ol:mb-4
    prose-li:mb-2
    prose-code:bg-gray-100 prose-code:text-red-600 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
    prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:mb-4
    prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:mb-4
    prose-img:rounded-lg prose-img:mb-4
    prose-table:border-collapse prose-table:w-full prose-table:mb-4
    prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-bold
    prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2
    prose-hr:my-8 prose-hr:border-gray-300
  `

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${className}`

  return <div className={finalClasses}>{children}</div>
}
