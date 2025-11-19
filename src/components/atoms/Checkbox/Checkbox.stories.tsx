import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente Checkbox com suporte a estado indeterminado, labels customizáveis e 3 tamanhos. Ideal para formulários e seleções múltiplas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado controlado do checkbox',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado (para seleção parcial)',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o checkbox',
    },
    label: {
      control: 'text',
      description: 'Texto do label',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posição do label',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do checkbox',
    },
    onChange: {
      action: 'changed',
      description: 'Callback quando o estado muda',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Aceito os termos e condições',
  },
}

export const Checked: Story = {
  args: {
    label: 'Checkbox marcado',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Seleção parcial',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Checkbox desabilitado',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Desabilitado e marcado',
    defaultChecked: true,
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium (default)" />
      <Checkbox size="lg" label="Large" />
    </div>
  ),
}

export const LabelPositions: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Label à direita (default)" labelPosition="right" />
      <Checkbox label="Label à esquerda" labelPosition="left" />
    </div>
  ),
}

export const WithoutLabel: Story = {
  args: {},
}

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 max-w-md">
      <div className="border-b pb-4">
        <h3 className="font-medium mb-3">Preferências de Notificação</h3>
        <div className="space-y-2">
          <Checkbox label="Receber emails promocionais" defaultChecked />
          <Checkbox label="Notificações push" defaultChecked />
          <Checkbox label="SMS marketing" />
        </div>
      </div>

      <div className="border-b pb-4">
        <h3 className="font-medium mb-3">Interesses</h3>
        <div className="space-y-2">
          <Checkbox label="Tecnologia" defaultChecked />
          <Checkbox label="Design" />
          <Checkbox label="Negócios" defaultChecked />
          <Checkbox label="Educação" />
        </div>
      </div>

      <Checkbox label="Aceito os termos de uso e política de privacidade" />
    </form>
  ),
}

export const IndeterminateExample: Story = {
  render: () => (
    <div className="border p-4 rounded-lg">
      <Checkbox
        label="Selecionar todos"
        indeterminate
        size="md"
        className="mb-3"
      />
      <div className="ml-8 space-y-2">
        <Checkbox label="Item 1" defaultChecked />
        <Checkbox label="Item 2" defaultChecked />
        <Checkbox label="Item 3" />
        <Checkbox label="Item 4" />
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-2">Normal</h4>
        <div className="space-y-2">
          <Checkbox label="Desmarcado" />
          <Checkbox label="Marcado" defaultChecked />
          <Checkbox label="Indeterminado" indeterminate />
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Disabled</h4>
        <div className="space-y-2">
          <Checkbox label="Desmarcado" disabled />
          <Checkbox label="Marcado" defaultChecked disabled />
          <Checkbox label="Indeterminado" indeterminate disabled />
        </div>
      </div>
    </div>
  ),
}
