import React from 'react';
export interface PricingCardProps {
    /** Name of the pricing plan (e.g., "Free", "Pro", "Enterprise") */
    name: string;
    /** Price value - can be string for "Custom" or number for "$29" */
    price: string | number;
    /** Currency symbol to display before price */
    currency?: string;
    /** Billing period text (e.g., "/month", "/year") */
    period?: string;
    /** Short description of the plan */
    description: string;
    /** List of features included in this plan */
    features: string[];
    /** Mark this plan as popular/recommended */
    popular?: boolean;
    /** Primary call-to-action button configuration */
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
    /** Additional CSS classes */
    className?: string;
}
export declare const PricingCard: React.FC<PricingCardProps>;
//# sourceMappingURL=PricingCard.d.ts.map