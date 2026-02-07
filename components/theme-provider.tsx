"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

/**
 * Theme Provider
 *
 * Supports Figma variable modes:
 * - light (372:1) - Light mode
 * - dark (373:0) - Dark mode
 * - primary (5248:0) - Primary mode
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      themes={['light', 'dark', 'primary']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
