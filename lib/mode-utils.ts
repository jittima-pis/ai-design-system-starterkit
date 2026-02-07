/**
 * Mode Utilities
 *
 * Helper functions for working with Figma variable modes
 */

import { modeColors, colors } from './design-tokens'

export type Mode = 'light' | 'dark' | 'primary'

/**
 * Get color value for a specific mode and color name
 *
 * @example
 * getModeColor('primary', 'background') // Returns oklch value
 */
export function getModeColor(mode: Mode, colorName: keyof typeof modeColors.light): string {
  return modeColors[mode][colorName]
}

/**
 * Get all colors for a specific mode
 */
export function getAllModeColors(mode: Mode) {
  return modeColors[mode]
}

/**
 * Compare color between modes
 */
export function compareColorAcrossModes(colorName: keyof typeof modeColors.light) {
  return {
    light: modeColors.light[colorName],
    dark: modeColors.dark[colorName],
    primary: modeColors.primary[colorName],
  }
}

/**
 * Get CSS variable name for a color
 */
export function getCssVariableName(colorName: string): string {
  // Convert camelCase to kebab-case
  const kebabCase = colorName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return `--${kebabCase}`
}

/**
 * Generate CSS for a specific mode
 */
export function generateModeCSS(mode: Mode): string {
  const colors = getAllModeColors(mode)
  const className = mode === 'light' ? ':root' : `.${mode}`

  const cssVars = Object.entries(colors)
    .map(([key, value]) => {
      const varName = getCssVariableName(key)
      return `  ${varName}: ${value};`
    })
    .join('\n')

  return `${className} {\n${cssVars}\n}`
}

/**
 * Get mode display name
 */
export function getModeDisplayName(mode: Mode): string {
  const names: Record<Mode, string> = {
    light: 'Light Mode',
    dark: 'Dark Mode',
    primary: 'Primary Mode',
  }
  return names[mode]
}

/**
 * Get mode description
 */
export function getModeDescription(mode: Mode): string {
  const descriptions: Record<Mode, string> = {
    light: 'Default light theme with high contrast and clean backgrounds',
    dark: 'Dark theme optimized for low-light environments',
    primary: 'Brown/warm earth tone theme with natural colors',
  }
  return descriptions[mode]
}

/**
 * Get Figma mode ID
 */
export function getFigmaModeId(mode: Mode): string {
  const ids: Record<Mode, string> = {
    light: '372:1',
    dark: '373:0',
    primary: '5248:0',
  }
  return ids[mode]
}

/**
 * Get mode icon (for UI)
 */
export function getModeIcon(mode: Mode): string {
  const icons: Record<Mode, string> = {
    light: 'sun',
    dark: 'moon',
    primary: 'palette',
  }
  return icons[mode]
}

/**
 * Check if color is light or dark (for contrast)
 */
export function isLightColor(oklchColor: string): boolean {
  // Extract lightness from oklch(L C H)
  const match = oklchColor.match(/oklch\(([0-9.]+)/)
  if (!match) return false

  const lightness = parseFloat(match[1])
  return lightness > 0.5
}

/**
 * Get contrast color (foreground) for a background
 */
export function getContrastColor(mode: Mode, colorName: keyof typeof modeColors.light): string {
  const bgColor = getModeColor(mode, colorName)
  const isLight = isLightColor(bgColor)

  return isLight
    ? modeColors[mode].foreground
    : modeColors[mode].background
}

/**
 * Get brown color from scale
 */
export function getBrownColor(shade: keyof typeof colors.brown): string {
  return colors.brown[shade]
}

/**
 * Get orange color from scale (charts)
 */
export function getOrangeColor(shade: keyof typeof colors.orange): string {
  return colors.orange[shade]
}

/**
 * Get all available modes
 */
export function getAllModes(): Mode[] {
  return ['light', 'dark', 'primary']
}

/**
 * Validate mode
 */
export function isValidMode(mode: string): mode is Mode {
  return ['light', 'dark', 'primary'].includes(mode)
}

/**
 * Get next mode (for cycling)
 */
export function getNextMode(currentMode: Mode): Mode {
  const modes: Mode[] = ['light', 'dark', 'primary']
  const currentIndex = modes.indexOf(currentMode)
  const nextIndex = (currentIndex + 1) % modes.length
  return modes[nextIndex]
}

/**
 * Get previous mode (for cycling)
 */
export function getPreviousMode(currentMode: Mode): Mode {
  const modes: Mode[] = ['light', 'dark', 'primary']
  const currentIndex = modes.indexOf(currentMode)
  const prevIndex = (currentIndex - 1 + modes.length) % modes.length
  return modes[prevIndex]
}

/**
 * Generate Tailwind config for mode
 */
export function generateTailwindConfig(mode: Mode) {
  const colors = getAllModeColors(mode)

  return {
    colors: Object.fromEntries(
      Object.entries(colors).map(([key, value]) => [
        key.replace(/([A-Z])/g, '-$1').toLowerCase(),
        value,
      ])
    ),
  }
}

/**
 * Mode metadata
 */
export const modeMetadata = {
  light: {
    name: 'Light Mode',
    id: '372:1',
    description: 'Default light theme',
    icon: 'sun',
    primaryColor: modeColors.light.primary,
    backgroundColor: modeColors.light.background,
  },
  dark: {
    name: 'Dark Mode',
    id: '373:0',
    description: 'Dark theme for low-light',
    icon: 'moon',
    primaryColor: modeColors.dark.primary,
    backgroundColor: modeColors.dark.background,
  },
  primary: {
    name: 'Primary Mode',
    id: '5248:0',
    description: 'Brown/warm earth tone theme',
    icon: 'palette',
    primaryColor: modeColors.primary.primary,
    backgroundColor: modeColors.primary.background,
  },
} as const
