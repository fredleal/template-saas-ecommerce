// types.ts - AuthForm TypeScript interfaces
// Generated with design patterns from Ollama analysis

export type AuthMode = 'login' | 'signup'

export type AuthFormState =
  | 'idle'
  | 'validating'
  | 'submitting'
  | 'success'
  | 'error'

export interface AuthFormData {
  email: string
  password: string
  confirmPassword?: string
}

export interface AuthFormErrors {
  email?: string
  password?: string
  confirmPassword?: string
  general?: string
}

export interface AuthFormProps {
  mode: AuthMode
  onSubmit: (data: AuthFormData) => Promise<void>
  onModeSwitch?: () => void
  isLoading?: boolean
  error?: string
  successMessage?: string
  className?: string
}
