import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import React from 'react'

// Import global styles (includes base.css via globals.css)
import '../src/app/globals.css'

// Import brand theme CSS files (loaded in parallel, activated by data-theme attribute)
import '../src/design-system/themes/brand-luxury.css'
import '../src/design-system/themes/brand-modern.css'
import '../src/design-system/themes/brand-classic.css'

/**
 * 🎨 PREVIEW CONFIGURATION
 *
 * Este arquivo configura como as stories aparecem no Storybook.
 * É aqui que você define:
 * - Estilos globais
 * - Decorators (wrappers que envolvem todas as stories)
 * - Parâmetros padrão (backgrounds, viewports, etc)
 * - Theme switching via toolbar dropdown
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
    // Theme switching decorator — adds toolbar dropdown for brand themes
    // Sets data-theme attribute on <html> element to activate brand CSS overrides
    withThemeByDataAttribute({
      themes: {
        Default: '',
        Luxury: 'luxury',
        Modern: 'modern',
        Classic: 'classic',
      },
      defaultTheme: 'Default',
      attributeName: 'data-theme',
    }),
    // Padding wrapper for all stories
    Story => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
}

export default preview
