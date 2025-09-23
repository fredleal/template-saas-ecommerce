// src/assets/icons/base/BaseIcon.ts
export interface BaseIconProps {
  /** Tamanho do ícone - pode ser preset ou valor customizado em pixels */
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Cor semântica do ícone */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'current'
  /** Classes CSS adicionais */
  className?: string
  /** Texto alternativo para acessibilidade */
  'aria-label'?: string
  /** Se verdadeiro, adiciona aria-hidden="true" */
  decorative?: boolean
}

// Mapeamento de tamanhos pré-definidos
export const iconSizes = {
  xs: 12,  // Muito pequeno - badges, indicators
  sm: 16,  // Pequeno - botões pequenos, texto inline
  md: 20,  // Médio - botões normais, cards (padrão)
  lg: 24,  // Grande - headers, botões destacados
  xl: 32,  // Extra grande - avatars, ícones principais
} as const

// Mapeamento de cores semânticas
export const iconColors = {
  primary: 'text-gray-900',      // Cor principal - texto primário
  secondary: 'text-gray-600',    // Cor secundária - texto secundário  
  success: 'text-green-600',     // Sucesso - ações positivas
  error: 'text-red-600',         // Erro - ações destrutivas
  warning: 'text-yellow-600',    // Aviso - atenção necessária
  info: 'text-blue-600',         // Informação - destaques informativos
  current: 'text-current',       // Herda a cor do elemento pai
} as const