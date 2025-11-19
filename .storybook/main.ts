import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import path from 'path'

const config: StorybookConfig = {
  // 📚 Onde o Storybook vai procurar suas stories (arquivos *.stories.tsx)
  stories: [
    '../src/**/*.mdx', // Documentação em Markdown
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', // Stories dos componentes
  ],

  // 🔌 Addons: plugins que adicionam funcionalidades ao Storybook
  addons: [
    '@storybook/addon-essentials', // Pacote com addons essenciais (Controls, Actions, Docs, etc)
    '@storybook/addon-a11y', // Testa acessibilidade automaticamente
    '@storybook/addon-interactions', // Para testar interações do usuário
  ],

  // ⚛️ Framework: estamos usando React com Vite
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // 📝 Gera documentação automaticamente dos componentes
  docs: {},

  // ⚙️ Configuração customizada do Vite
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // Permite usar @ para importar de src/
          // Ex: import { Button } from '@/components/atoms'
          '@': path.resolve(process.cwd(), 'src'),
        },
      },
    })
  },

  // 🎨 TypeScript: habilita suporte a TypeScript
  typescript: {
    check: false, // Desabilita type-checking para builds mais rápidos
    reactDocgen: 'react-docgen-typescript', // Gera docs das props automaticamente
  },
}

export default config
