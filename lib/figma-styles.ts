/**
 * Figma Styles Helper
 *
 * Utility functions to work with Figma design tokens
 */

import { typography, effects } from './design-tokens'

/**
 * Get Figma text style class name
 *
 * @example
 * getFigmaTextClass('text-lg', 'semi-bold') // Returns figma style reference
 */
export function getFigmaTextStyle(size: string, weight: string) {
  const textStyle = typography.textStyles[size]?.[weight]

  if (!textStyle) {
    console.warn(`Text style not found: ${size}/${weight}`)
    return null
  }

  return textStyle
}

/**
 * Get Figma shadow style
 *
 * @example
 * getFigmaShadow('shadow-md')
 */
export function getFigmaShadow(variant: string) {
  const shadow = effects.shadows[variant]

  if (!shadow) {
    console.warn(`Shadow style not found: ${variant}`)
    return null
  }

  return shadow
}

/**
 * Get Figma blur style
 *
 * @example
 * getFigmaBlur('blur-md')
 */
export function getFigmaBlur(variant: string) {
  const blur = effects.blur[variant]

  if (!blur) {
    console.warn(`Blur style not found: ${variant}`)
    return null
  }

  return blur
}

/**
 * Get Figma backdrop blur style
 *
 * @example
 * getFigmaBackdropBlur('backdrop-blur-md')
 */
export function getFigmaBackdropBlur(variant: string) {
  const backdropBlur = effects.backdropBlur[variant]

  if (!backdropBlur) {
    console.warn(`Backdrop blur style not found: ${variant}`)
    return null
  }

  return backdropBlur
}

/**
 * Get all text styles for a specific size
 *
 * @example
 * getTextStylesBySize('text-lg') // Returns all weights for lg size
 */
export function getTextStylesBySize(size: string) {
  return typography.textStyles[size] || {}
}

/**
 * Get all available text sizes
 */
export function getAllTextSizes(): string[] {
  return Object.keys(typography.textStyles)
}

/**
 * Get all available text weights for a size
 */
export function getTextWeights(size: string): string[] {
  const styles = typography.textStyles[size]
  return styles ? Object.keys(styles) : []
}

/**
 * Get all available shadow variants
 */
export function getAllShadowVariants(): string[] {
  return Object.keys(effects.shadows)
}

/**
 * Get all available blur variants
 */
export function getAllBlurVariants(): string[] {
  return Object.keys(effects.blur)
}

/**
 * Get all available backdrop blur variants
 */
export function getAllBackdropBlurVariants(): string[] {
  return Object.keys(effects.backdropBlur)
}

/**
 * Figma style metadata
 */
export const figmaMetadata = {
  file: 'nook@shadcn_ui components with variables & Tailwind classes',
  fileKey: 'sdA9LFFgl6VNgmrHKdIMf9',
  collection: 'shadcn/ui',
  collectionId: 'VariableCollectionId:372:453',
  modes: {
    light: {
      id: '372:1',
      name: 'Light Mode',
      description: 'Default light theme',
      cssClass: 'light',
    },
    dark: {
      id: '373:0',
      name: 'Dark Mode',
      description: 'Dark theme for low-light',
      cssClass: 'dark',
    },
    primary: {
      id: '5248:0',
      name: 'Primary Mode',
      description: 'Purple-tinted brand theme',
      cssClass: 'primary',
    },
  },
  totalStyles: 147,
  lastSynced: null as string | null,
}

/**
 * Get Figma file URL
 */
export function getFigmaFileUrl(): string {
  return `https://www.figma.com/design/${figmaMetadata.fileKey}/`
}

/**
 * Get Figma node URL
 */
export function getFigmaNodeUrl(nodeId: string): string {
  return `${getFigmaFileUrl()}?node-id=${nodeId}`
}

/**
 * Format Figma style for display
 */
export function formatStyleName(name: string): string {
  return name
    .split('/')
    .map(part => part.trim())
    .join(' / ')
}

/**
 * Get all available mode names
 */
export function getAllModeNames(): string[] {
  return Object.keys(figmaMetadata.modes)
}

/**
 * Get mode info by name
 */
export function getModeInfo(modeName: string) {
  return figmaMetadata.modes[modeName as keyof typeof figmaMetadata.modes]
}

/**
 * Get CSS class for a mode
 */
export function getModeCssClass(modeName: string): string {
  const mode = getModeInfo(modeName)
  return mode?.cssClass || modeName
}

/**
 * Check if a mode name is valid
 */
export function isValidMode(modeName: string): boolean {
  return modeName in figmaMetadata.modes
}

/**
 * Figma style type guards
 */
export const is = {
  textStyle: (style: any): boolean => {
    return style && typeof style.id === 'string' && typeof style.name === 'string'
  },
  shadowStyle: (style: any): boolean => {
    return style && typeof style.id === 'string' && style.name?.includes('shadow')
  },
  blurStyle: (style: any): boolean => {
    return style && typeof style.id === 'string' && style.name?.includes('blur')
  },
  validMode: (modeName: any): modeName is 'light' | 'dark' | 'primary' => {
    return typeof modeName === 'string' && isValidMode(modeName)
  },
}
