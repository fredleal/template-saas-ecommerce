export const buttonSchema = {
    title: 'Button',
    description: 'A flexible button component with multiple variants and sizes',
    type: 'object',
    properties: {
        children: {
            type: 'string',
            title: 'Text',
            description: 'The button text content',
        },
        variant: {
            type: 'string',
            title: 'Variant',
            description: 'Visual variant of the button',
            enum: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
            enumNames: [
                'Primary (Blue)',
                'Secondary (Purple)',
                'Outline',
                'Ghost',
                'Danger (Red)',
            ],
        },
        size: {
            type: 'string',
            title: 'Size',
            description: 'Button size',
            enum: ['sm', 'md', 'lg'],
            enumNames: ['Small', 'Medium', 'Large'],
        },
        disabled: {
            type: 'boolean',
            title: 'Disabled',
            description: 'Whether the button is disabled',
            default: false,
        },
        fullWidth: {
            type: 'boolean',
            title: 'Full Width',
            description: 'Whether the button takes full width',
            default: false,
        },
        onClick: {
            type: 'string',
            title: 'Click Handler',
            description: 'Function to call on click (for admin preview only)',
        },
    },
    required: ['children', 'variant'],
};
//# sourceMappingURL=button.schema.js.map