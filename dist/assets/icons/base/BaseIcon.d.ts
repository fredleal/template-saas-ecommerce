export interface BaseIconProps {
    /** Tamanho do ícone - pode ser preset ou valor customizado em pixels */
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Cor semântica do ícone */
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'current';
    /** Classes CSS adicionais */
    className?: string;
    /** Texto alternativo para acessibilidade */
    'aria-label'?: string;
    /** Se verdadeiro, adiciona aria-hidden="true" */
    decorative?: boolean;
}
export declare const iconSizes: {
    readonly xs: 12;
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 24;
    readonly xl: 32;
};
export declare const iconColors: {
    readonly primary: "text-gray-900";
    readonly secondary: "text-gray-600";
    readonly success: "text-green-600";
    readonly error: "text-red-600";
    readonly warning: "text-yellow-600";
    readonly info: "text-blue-600";
    readonly current: "text-current";
};
//# sourceMappingURL=BaseIcon.d.ts.map