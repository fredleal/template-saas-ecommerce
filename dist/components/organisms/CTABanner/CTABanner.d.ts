import React from 'react';
export interface CTABannerProps {
    /** Main headline text */
    title: string;
    /** Supporting description text */
    description?: string;
    /** Optional badge/label above title */
    badge?: {
        text: string;
        variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
    };
    /** Primary call-to-action button */
    primaryCTA: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    /** Optional secondary call-to-action */
    secondaryCTA?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    /** Layout variant */
    variant?: 'centered' | 'split';
    /** Background color variant */
    background?: 'primary' | 'secondary' | 'gradient' | 'light' | 'dark';
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
}
export declare const CTABanner: React.FC<CTABannerProps>;
//# sourceMappingURL=CTABanner.d.ts.map