'use client';
import React, { useState } from 'react';
import { Text, Icon } from '@/components/atoms';
const variantConfig = {
    info: {
        bgColor: 'bg-[var(--color-info-50,#eff6ff)]',
        borderColor: 'border-[var(--color-info-200,#bfdbfe)]',
        iconColor: 'text-[var(--color-info-600,#2563eb)]',
        textColor: 'text-[var(--color-info-900,#1e3a8a)]',
    },
    success: {
        bgColor: 'bg-[var(--color-success-50,#f0fdf4)]',
        borderColor: 'border-[var(--color-success-100,#dcfce7)]',
        iconColor: 'text-[var(--color-success-600,#16a34a)]',
        textColor: 'text-[var(--color-success-900,#14532d)]',
    },
    warning: {
        bgColor: 'bg-[var(--color-warning-50,#fffbeb)]',
        borderColor: 'border-[var(--color-warning-100,#fef3c7)]',
        iconColor: 'text-[var(--color-warning-600,#d97706)]',
        textColor: 'text-[var(--color-warning-900,#78350f)]',
    },
    error: {
        bgColor: 'bg-[var(--color-error-50,#fef2f2)]',
        borderColor: 'border-[var(--color-error-100,#fee2e2)]',
        iconColor: 'text-[var(--color-error-600,#dc2626)]',
        textColor: 'text-[var(--color-error-900,#7f1d1d)]',
    },
};
export function Alert({ variant = 'info', title, message, icon, dismissible = false, onDismiss, className = '', }) {
    const [isVisible, setIsVisible] = useState(true);
    const config = variantConfig[variant];
    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss?.();
    };
    if (!isVisible)
        return null;
    return (<div role="alert" aria-live="polite" aria-atomic="true" className={`
        flex items-start gap-3 p-4 rounded-lg border
        ${config.bgColor} ${config.borderColor}
        ${className}
      `}>
      {/* Icon (optional) */}
      {icon && (<div className={`flex-shrink-0 ${config.iconColor}`}>
          <Icon name={icon} size="md" decorative/>
        </div>)}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (<Text size="sm" weight="semibold" className={`mb-1 ${config.textColor}`}>
            {title}
          </Text>)}
        <Text size="sm" className={config.textColor}>
          {message}
        </Text>
      </div>

      {/* Dismiss button */}
      {dismissible && (<button type="button" onClick={handleDismiss} aria-label="Dismiss alert" className={`
            flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors
            ${config.iconColor}
          `}>
          <Icon name="XIcon" size="sm" decorative/>
        </button>)}
    </div>);
}
//# sourceMappingURL=Alert.jsx.map