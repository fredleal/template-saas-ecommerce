import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/app/globals.css' // Importa Tailwind CSS

/**
 * 🎨 PREVIEW CONFIGURATION
 *
 * Este arquivo configura como as stories aparecem no Storybook.
 * É aqui que você define:
 * - Estilos globais
 * - Decorators (wrappers que envolvem todas as stories)
 * - Parâmetros padrão (backgrounds, viewports, etc)
 */

const preview: Preview = {
  // 📋 PARAMETERS: Configurações globais
  parameters: {
    // 🎬 Actions: Captura eventos do componente (onClick, onChange, etc)
    actions: { argTypesRegex: '^on[A-Z].*' },

    // 🎛️ Controls: Controles interativos para props
    controls: {
      matchers: {
        color: /(background|color)$/i, // Props com 'background' ou 'color' viram color picker
        date: /Date$/i, // Props terminando em 'Date' viram date picker
      },
    },

    // 🎨 Backgrounds: Permite trocar cor de fundo da story
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a202c',
        },
        {
          name: 'gray',
          value: '#f7fafc',
        },
      ],
    },

    // 📱 Viewport: Testa responsividade
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },

    // 📚 Docs: Configuração da página de documentação
    docs: {
      toc: true, // Table of contents
    },
  },

  // 🎭 DECORATORS: Wrappers que envolvem todas as stories
  decorators: [
    Story => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
}

export default preview
