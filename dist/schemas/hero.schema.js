export const heroSchema = {
    title: 'Hero Section',
    description: 'A large, prominent section typically at the top of a page with headline, subtitle, and CTA',
    type: 'object',
    properties: {
        title: {
            type: 'string',
            title: 'Main Title',
            description: 'The main headline text',
            minLength: 1,
            maxLength: 100,
        },
        subtitle: {
            type: 'string',
            title: 'Subtitle',
            description: 'Supporting text below the title',
            maxLength: 200,
        },
        description: {
            type: 'string',
            title: 'Description',
            description: 'Detailed description text',
            maxLength: 500,
        },
        backgroundColor: {
            type: 'string',
            title: 'Background Color',
            description: 'Background color of the hero section',
            enum: ['primary', 'secondary', 'accent', 'white', 'dark'],
            enumNames: [
                'Primary Blue',
                'Secondary Purple',
                'Accent Teal',
                'White',
                'Dark Gray',
            ],
        },
        showGradient: {
            type: 'boolean',
            title: 'Show Gradient Background',
            description: 'Whether to display animated gradient blobs',
            default: true,
        },
        primaryCTA: {
            type: 'object',
            title: 'Primary CTA',
            description: 'Primary call-to-action button',
            properties: {
                text: {
                    type: 'string',
                    title: 'Button Text',
                    maxLength: 30,
                },
                href: {
                    type: 'string',
                    title: 'Button Link',
                    format: 'uri',
                },
            },
        },
        secondaryCTA: {
            type: 'object',
            title: 'Secondary CTA',
            description: 'Secondary call-to-action button',
            properties: {
                text: {
                    type: 'string',
                    title: 'Button Text',
                    maxLength: 30,
                },
                href: {
                    type: 'string',
                    title: 'Button Link',
                    format: 'uri',
                },
            },
        },
        alignment: {
            type: 'string',
            title: 'Text Alignment',
            enum: ['left', 'center', 'right'],
            enumNames: ['Left', 'Center', 'Right'],
            default: 'center',
        },
        minHeight: {
            type: 'string',
            title: 'Minimum Height',
            enum: ['auto', 'screen', 'half-screen'],
            enumNames: ['Auto', 'Full Screen Height', 'Half Screen Height'],
            default: 'screen',
        },
    },
    required: ['title'],
};
//# sourceMappingURL=hero.schema.js.map