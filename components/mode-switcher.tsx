'use client'

import * as React from 'react'
import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

/**
 * Figma Variable Mode Switcher
 *
 * Switches between Figma variable modes:
 * - Light Mode (372:1) - Default light theme
 * - Dark Mode (373:0) - Dark theme
 * - Primary Mode (5248:0) - Primary color theme
 */
export function ModeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const modes = [
    {
      value: 'light',
      label: 'Light Mode',
      description: 'Figma Mode: 372:1',
      icon: Sun,
    },
    {
      value: 'dark',
      label: 'Dark Mode',
      description: 'Figma Mode: 373:0',
      icon: Moon,
    },
    {
      value: 'primary',
      label: 'Primary Mode',
      description: 'Warm/Brown Theme - 5248:0',
      icon: Palette,
    },
  ]

  const currentMode = modes.find((mode) => mode.value === theme) || modes[0]
  const CurrentIcon = currentMode.icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <CurrentIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{currentMode.label}</span>
          <Badge variant="secondary" className="hidden md:inline-flex">
            Mode
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Variable Modes
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {modes.map((mode) => {
          const Icon = mode.icon
          const isActive = theme === mode.value

          return (
            <DropdownMenuItem
              key={mode.value}
              onClick={() => setTheme(mode.value)}
              className="flex flex-col items-start gap-1 cursor-pointer"
            >
              <div className="flex items-center gap-2 w-full">
                <Icon className="h-4 w-4" />
                <span className="font-medium">{mode.label}</span>
                {isActive && (
                  <Badge variant="default" className="ml-auto text-xs">
                    Active
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground ml-6">
                {mode.description}
              </span>
            </DropdownMenuItem>
          )
        })}
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5 text-xs text-muted-foreground">
          Synced from Figma Variable Collection
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * Simple inline mode toggle (compact version)
 */
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleMode = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('primary')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      className="relative"
      title={`Current: ${theme} mode`}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

/**
 * Mode indicator badge (shows current mode)
 */
export function ModeIndicator() {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const modeLabels: Record<string, string> = {
    light: 'Light',
    dark: 'Dark',
    primary: 'Primary',
  }

  return (
    <Badge variant="outline" className="font-mono text-xs">
      Mode: {modeLabels[theme || 'light'] || 'Unknown'}
    </Badge>
  )
}
