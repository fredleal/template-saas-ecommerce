import React from 'react';
export interface FooterLink {
    label: string;
    href: string;
}
export interface FooterSection {
    title: string;
    links: FooterLink[];
}
export interface SocialLink {
    icon: 'CartIcon' | 'HeartIcon' | 'SearchIcon' | 'MenuIcon' | 'PlusIcon' | 'StarIcon' | 'UserIcon' | 'FilterIcon' | 'CheckIcon' | 'XIcon';
    href: string;
    label: string;
}
export interface FooterProps {
    companyName: string;
    companyDescription?: string;
    sections: FooterSection[];
    socialLinks?: SocialLink[];
    copyrightYear?: number;
    legalLinks?: FooterLink[];
    className?: string;
}
export declare const Footer: ({ companyName, companyDescription, sections, socialLinks, copyrightYear, legalLinks, className, }: FooterProps) => React.JSX.Element;
//# sourceMappingURL=Footer.d.ts.map