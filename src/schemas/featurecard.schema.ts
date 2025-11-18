import type { ComponentSchema } from './types'

export const featureCardSchema: ComponentSchema = {
  title: 'Feature Card',
  description:
    'A card component to showcase features with icon, title, and description',
  type: 'object',
  properties: {
    icon: {
      type: 'string',
      title: 'Icon',
      description: 'Emoji or icon text',
      maxLength: 5,
    },
    title: {
      type: 'string',
      title: 'Title',
      description: 'Feature title',
      minLength: 1,
      maxLength: 50,
    },
    description: {
      type: 'string',
      title: 'Description',
      description: 'Feature description text',
      maxLength: 200,
    },
    color: {
      type: 'string',
      title: 'Color Accent',
      enum: ['primary', 'secondary', 'accent', 'success', 'warning'],
      enumNames: ['Blue', 'Purple', 'Teal', 'Green', 'Orange'],
      default: 'primary',
    },
    href: {
      type: 'string',
      title: 'Link',
      description: 'Optional link for the card',
      format: 'uri',
    },
    highlighted: {
      type: 'boolean',
      title: 'Highlighted',
      description: 'Whether this card should be highlighted',
      default: false,
    },
  },
  required: ['title', 'description'],
}
