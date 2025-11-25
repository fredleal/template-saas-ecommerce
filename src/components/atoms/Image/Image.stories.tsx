import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta = {
  title: 'Design System/Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Image otimizado que suporta diferentes estratégias de loading, object-fit, e dimensões responsivas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL da imagem',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para acessibilidade',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: 'number',
      description: 'Largura da imagem em pixels',
      table: {
        type: { summary: 'number | string' },
      },
    },
    height: {
      control: 'number',
      description: 'Altura da imagem em pixels',
      table: {
        type: { summary: 'number | string' },
      },
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'Como a imagem deve se ajustar ao container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'cover' },
      },
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
      description: 'Estratégia de carregamento da imagem',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lazy' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

// Default story with placeholder image
export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    alt: 'Profile picture',
    width: 400,
    height: 400,
  },
}

// Object fit variants
export const ObjectFitCover: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop',
    alt: 'Landscape with cover fit',
    width: 400,
    height: 300,
    objectFit: 'cover',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Object-fit: cover - A imagem preenche todo o container, cortando se necessário.',
      },
    },
  },
}

export const ObjectFitContain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop',
    alt: 'Landscape with contain fit',
    width: 400,
    height: 300,
    objectFit: 'contain',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Object-fit: contain - A imagem é redimensionada para caber dentro do container.',
      },
    },
  },
}

export const ObjectFitFill: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop',
    alt: 'Landscape with fill fit',
    width: 400,
    height: 300,
    objectFit: 'fill',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Object-fit: fill - A imagem é esticada para preencher o container.',
      },
    },
  },
}

// Loading strategies
export const LazyLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    alt: 'Lazy loaded image',
    width: 400,
    height: 400,
    loading: 'lazy',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Lazy loading - A imagem só é carregada quando entra no viewport (padrão).',
      },
    },
  },
}

export const EagerLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    alt: 'Eager loaded image',
    width: 400,
    height: 400,
    loading: 'eager',
  },
  parameters: {
    docs: {
      description: {
        story: 'Eager loading - A imagem é carregada imediatamente.',
      },
    },
  },
}

// Different dimensions
export const Square: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
    alt: 'Square image',
    width: 400,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: 'Imagem quadrada 400x400.',
      },
    },
  },
}

export const Landscape: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
    alt: 'Landscape image',
    width: 600,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: 'Imagem paisagem 600x400.',
      },
    },
  },
}

export const Portrait: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    alt: 'Portrait image',
    width: 400,
    height: 600,
  },
  parameters: {
    docs: {
      description: {
        story: 'Imagem retrato 400x600.',
      },
    },
  },
}

// Styled variants
export const Rounded: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    alt: 'Rounded image',
    width: 400,
    height: 400,
    className: 'rounded-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Imagem com bordas arredondadas usando className.',
      },
    },
  },
}

export const Circle: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    alt: 'Circle image',
    width: 400,
    height: 400,
    className: 'rounded-full',
  },
  parameters: {
    docs: {
      description: {
        story: 'Imagem circular usando rounded-full.',
      },
    },
  },
}

export const WithShadow: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    alt: 'Image with shadow',
    width: 400,
    height: 400,
    className: 'rounded-lg shadow-lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Imagem com sombra e bordas arredondadas.',
      },
    },
  },
}

// Responsive example
export const Responsive: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    alt: 'Responsive image',
    className: 'w-full h-auto rounded-md',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Imagem responsiva que se adapta ao container (w-full h-auto).',
      },
    },
  },
}

// Product showcase example
export const ProductShowcase: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    alt: 'Product watch',
    width: 500,
    height: 500,
    objectFit: 'contain',
    className: 'bg-gray-100 rounded-lg p-4',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de showcase de produto com background e padding.',
      },
    },
  },
}
