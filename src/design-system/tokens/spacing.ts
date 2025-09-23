// src/design-system/tokens/spacing.ts

export const spacing = {
  // Base spacing scale (baseado em 4px)
  0: '0px',
  px: '1px',
  0.5: '2px', // 0.5 * 4px
  1: '4px', // 1 * 4px
  1.5: '6px', // 1.5 * 4px
  2: '8px', // 2 * 4px
  2.5: '10px', // 2.5 * 4px
  3: '12px', // 3 * 4px
  3.5: '14px', // 3.5 * 4px
  4: '16px', // 4 * 4px - base
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
} as const

// Spacing semântico para componentes
export const semanticSpacing = {
  // Container spacing
  container: {
    padding: spacing[4], // 16px
    paddingLg: spacing[6], // 24px
    paddingXl: spacing[8], // 32px
  },

  // Component spacing
  component: {
    xs: spacing[1], // 4px
    sm: spacing[2], // 8px
    md: spacing[4], // 16px
    lg: spacing[6], // 24px
    xl: spacing[8], // 32px
    xxl: spacing[12], // 48px
  },

  // Card spacing
  card: {
    padding: spacing[4], // 16px
    paddingLg: spacing[6], // 24px
    gap: spacing[4], // 16px entre elementos
    headerPadding: spacing[3], // 12px para headers
  },

  // Button spacing
  button: {
    paddingX: {
      sm: spacing[3], // 12px
      md: spacing[4], // 16px
      lg: spacing[6], // 24px
    },
    paddingY: {
      sm: spacing[2], // 8px
      md: spacing[2.5], // 10px
      lg: spacing[3], // 12px
    },
  },

  // Form spacing
  form: {
    fieldGap: spacing[4], // 16px entre campos
    labelGap: spacing[2], // 8px entre label e input
    groupGap: spacing[6], // 24px entre grupos
    inputPadding: spacing[3], // 12px interno do input
  },

  // Layout spacing
  layout: {
    sectionGap: spacing[16], // 64px entre seções
    contentGap: spacing[8], // 32px entre blocos de conteúdo
    headerHeight: spacing[16], // 64px altura do header
    footerPadding: spacing[12], // 48px padding do footer
  },

  // E-commerce específico
  product: {
    gridGap: spacing[4], // 16px entre produtos
    cardPadding: spacing[4], // 16px interno do card
    imageGap: spacing[2], // 8px entre imagem e texto
    priceGap: spacing[1], // 4px entre preço original e promocional
  },
} as const
