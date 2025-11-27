import React from 'react';
import type { IconName } from '@/components/atoms/Icon/Icon';
export interface AlertProps {
    /** Alert variant/severity */
    variant?: 'info' | 'success' | 'warning' | 'error';
    /** Optional title */
    title?: string;
    /** Alert message */
    message: string;
    /** Custom icon (overrides default) */
    icon?: IconName;
    /** Show close button */
    dismissible?: boolean;
    /** Callback when dismissed */
    onDismiss?: () => void;
    /** Custom className */
    className?: string;
}
export declare function Alert({ variant, title, message, icon, dismissible, onDismiss, className, }: AlertProps): React.JSX.Element | null;
//# sourceMappingURL=Alert.d.ts.map