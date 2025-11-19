import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input } from './Input'

/**
 * 📝 INPUT COMPONENT
 *
 * O componente Input é um campo de entrada reutilizável que suporta:
 * - Múltiplos tipos (text, email, password, number, tel, url)
 * - 3 tamanhos (sm, md, lg)
 * - Estados de erro com mensagens
 * - Estados disabled e readOnly
 * - Acessibilidade (ARIA attributes)
 */

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo de entrada (input) reutilizável com suporte a múltiplos tipos, tamanhos, estados de erro e acessibilidade completa.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Type
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Tipo do input (text, email, password, etc)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },

    // Size
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },

    // Content
    placeholder: {
      control: 'text',
      description: 'Texto placeholder (dica visual)',
    },

    value: {
      control: 'text',
      description: 'Valor do input (modo controlado)',
    },

    defaultValue: {
      control: 'text',
      description: 'Valor inicial (modo não-controlado)',
    },

    // States
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    readOnly: {
      control: 'boolean',
      description: 'Input somente leitura',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    required: {
      control: 'boolean',
      description: 'Campo obrigatório',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    error: {
      control: 'boolean',
      description: 'Estado de erro (borda vermelha)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    errorMessage: {
      control: 'text',
      description: 'Mensagem de erro (aparece abaixo do input)',
    },

    // Events
    onChange: {
      action: 'changed',
      description: 'Callback executado quando o valor muda',
    },

    onFocus: {
      action: 'focused',
      description: 'Callback executado quando o input recebe foco',
    },

    onBlur: {
      action: 'blurred',
      description: 'Callback executado quando o input perde foco',
    },

    // Attributes
    name: {
      control: 'text',
      description: 'Atributo name do input (para forms)',
    },

    id: {
      control: 'text',
      description: 'ID do input (para labels)',
    },

    maxLength: {
      control: 'number',
      description: 'Número máximo de caracteres',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 🎨 STORIES
 */

// 1️⃣ DEFAULT: Input padrão (text)
export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
}

// 2️⃣ WITH VALUE: Input com valor inicial
export const WithValue: Story = {
  args: {
    defaultValue: 'Texto pré-preenchido',
    placeholder: 'Digite algo...',
  },
}

// 3️⃣ EMAIL: Input de email
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'seu@email.com',
  },
}

// 4️⃣ PASSWORD: Input de senha
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Digite sua senha',
  },
}

// 5️⃣ NUMBER: Input numérico
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '123',
  },
}

// 6️⃣ TELEPHONE: Input de telefone
export const Telephone: Story = {
  args: {
    type: 'tel',
    placeholder: '(11) 98765-4321',
  },
}

// 7️⃣ URL: Input de URL
export const URL: Story = {
  args: {
    type: 'url',
    placeholder: 'https://exemplo.com',
  },
}

// 8️⃣ SIZES: Mostra os 3 tamanhos
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Small</label>
        <Input size="sm" placeholder="Small input" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Medium (default)
        </label>
        <Input size="md" placeholder="Medium input" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Large</label>
        <Input size="lg" placeholder="Large input" />
      </div>
    </div>
  ),
}

// 9️⃣ WITH ERROR: Input com erro
export const WithError: Story = {
  args: {
    placeholder: 'Digite seu email',
    error: true,
    errorMessage: 'Este campo é obrigatório',
    id: 'email-input',
  },
}

// 🔟 DISABLED: Input desabilitado
export const Disabled: Story = {
  args: {
    placeholder: 'Input desabilitado',
    disabled: true,
    defaultValue: 'Não pode editar',
  },
}

// 1️⃣1️⃣ READ ONLY: Input somente leitura
export const ReadOnly: Story = {
  args: {
    defaultValue: 'Somente leitura',
    readOnly: true,
  },
}

// 1️⃣2️⃣ REQUIRED: Campo obrigatório
export const Required: Story = {
  args: {
    placeholder: 'Campo obrigatório *',
    required: true,
  },
}

// 1️⃣3️⃣ MAX LENGTH: Limite de caracteres
export const MaxLength: Story = {
  args: {
    placeholder: 'Máximo 10 caracteres',
    maxLength: 10,
  },
}

// 1️⃣4️⃣ FORM EXAMPLE: Exemplo de formulário completo
export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-md">
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome Completo *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="João Silva"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="joao@exemplo.com"
          required
        />
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Telefone
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(11) 98765-4321"
        />
      </div>

      {/* Senha */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Senha *
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Mínimo 8 caracteres"
          required
        />
      </div>

      {/* Botão (usando button HTML nativo por enquanto) */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Enviar
      </button>
    </form>
  ),
}

// 1️⃣5️⃣ VALIDATION STATES: Todos os estados de validação
export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Normal */}
      <div>
        <label className="block text-sm font-medium mb-2">Estado Normal</label>
        <Input placeholder="Digite algo..." />
      </div>

      {/* Com erro */}
      <div>
        <label className="block text-sm font-medium mb-2">Com Erro</label>
        <Input
          placeholder="Digite algo..."
          error={true}
          errorMessage="Este campo é obrigatório"
          id="error-example"
        />
      </div>

      {/* Desabilitado */}
      <div>
        <label className="block text-sm font-medium mb-2">Desabilitado</label>
        <Input
          placeholder="Input desabilitado"
          disabled={true}
          defaultValue="Não pode editar"
        />
      </div>

      {/* Somente leitura */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Somente Leitura
        </label>
        <Input defaultValue="Valor fixo" readOnly={true} />
      </div>
    </div>
  ),
}

// 1️⃣6️⃣ ALL TYPES: Todos os tipos de input
export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Text</label>
        <Input type="text" placeholder="Texto normal" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input type="email" placeholder="seu@email.com" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <Input type="password" placeholder="Senha secreta" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Number</label>
        <Input type="number" placeholder="123" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Telephone</label>
        <Input type="tel" placeholder="(11) 98765-4321" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">URL</label>
        <Input type="url" placeholder="https://exemplo.com" />
      </div>
    </div>
  ),
}

/**
 * 💡 COMO USAR:
 *
 * // Exemplo básico
 * <Input placeholder="Digite algo..." />
 *
 * // Com label e ID (acessibilidade)
 * <label htmlFor="email">Email</label>
 * <Input id="email" type="email" placeholder="seu@email.com" />
 *
 * // Com erro
 * <Input
 *   error={true}
 *   errorMessage="Email inválido"
 *   id="email"
 * />
 *
 * // Controlado (React state)
 * const [value, setValue] = useState('')
 * <Input
 *   value={value}
 *   onChange={(newValue) => setValue(newValue)}
 * />
 *
 * // Não-controlado (defaultValue)
 * <Input defaultValue="Valor inicial" />
 */
