import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from './CodeBlock'

const meta = {
  title: 'Molecules/CodeBlock',
  component: CodeBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

const jsCode = "function hello() {\n  console.log('Hello');\n}"

export const Default: Story = { args: { code: jsCode } }
export const TypeScript: Story = {
  args: { code: jsCode, language: 'typescript' },
}
export const WithTitle: Story = { args: { code: jsCode, title: 'hello.js' } }
