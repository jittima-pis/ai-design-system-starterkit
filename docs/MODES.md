# 🎨 Figma Variable Modes

A comprehensive guide to using Figma variable modes in your application.

## Overview

This project supports three Figma variable modes that automatically sync with your design tokens:

| Mode | Figma ID | Description | Primary Use Case |
|------|----------|-------------|------------------|
| **Light** | 372:1 | Default light theme | Day time, bright environments |
| **Dark** | 373:0 | Dark theme | Night time, low-light environments |
| **Primary** | 5248:0 | Brown/warm earth tone theme | Natural, warm brand aesthetic |

## Quick Start

### Using the Mode Switcher

```tsx
import { ModeSwitcher } from '@/components/mode-switcher'

function Header() {
  return (
    <header>
      <ModeSwitcher />
    </header>
  )
}
```

### Programmatic Mode Control

```tsx
'use client'

import { useTheme } from 'next-themes'

function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <p>Current mode: {theme}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('primary')}>Primary</button>
    </div>
  )
}
```

## Components

### ModeSwitcher

Full-featured dropdown menu for mode selection.

```tsx
import { ModeSwitcher } from '@/components/mode-switcher'

<ModeSwitcher />
```

**Features:**
- Shows current mode with icon
- Dropdown with all available modes
- Displays Figma mode IDs
- Shows active mode badge

### ModeToggle

Simple icon button that cycles through modes.

```tsx
import { ModeToggle } from '@/components/mode-switcher'

<ModeToggle />
```

**Behavior:**
- Click to cycle: Light → Dark → Primary → Light
- Sun/Moon icon animation
- Compact design

### ModeIndicator

Badge showing the current mode.

```tsx
import { ModeIndicator } from '@/components/mode-switcher'

<ModeIndicator />
```

**Output:**
- `Mode: Light`
- `Mode: Dark`
- `Mode: Primary`

## CSS Variables

Each mode defines a complete set of CSS variables. These automatically change when switching modes.

### Common Variables

```css
/* These variables exist in all modes */
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring
```

### Light Mode Colors

```css
:root {
  --background: oklch(1 0 0);              /* Pure white */
  --foreground: oklch(0.145 0 0);          /* Near black */
  --primary: oklch(0.205 0 0);             /* Dark gray */
  --border: oklch(0.922 0 0);              /* Light gray */
}
```

### Dark Mode Colors

```css
.dark {
  --background: oklch(0.145 0 0);          /* Dark gray */
  --foreground: oklch(0.985 0 0);          /* Off white */
  --primary: oklch(0.922 0 0);             /* Light gray */
  --border: oklch(1 0 0 / 10%);            /* Transparent white */
}
```

### Primary Mode Colors

```css
.primary {
  --background: #F6EEE7;                   /* Warm beige/cream */
  --foreground: #3E332E;                   /* Dark brown */
  --primary: #3E332E;                      /* Dark brown */
  --secondary: #E4CDB7;                    /* Light brown/tan */
  --border: #E5E5E5;                       /* Light gray */
  --chart-1: #EC9455;                      /* Orange chart colors */
  --chart-2: #F76B15;
  --chart-3: #EF5F00;
  --chart-4: #CC4E00;
  --chart-5: #582D1D;
}
```

## Styling for Specific Modes

### Using Tailwind Classes

Tailwind automatically supports dark mode. For primary mode, use custom CSS or inline styles.

```tsx
<div className="bg-background text-foreground dark:bg-slate-900">
  Content adapts to light/dark
</div>
```

### Using CSS Custom Properties

```css
.my-element {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}

/* Mode-specific overrides (optional) */
.light .my-element {
  /* Light mode specific */
}

.dark .my-element {
  /* Dark mode specific */
}

.primary .my-element {
  /* Primary mode specific */
}
```

### Using Inline Styles

```tsx
<div style={{
  background: 'var(--card)',
  color: 'var(--card-foreground)',
  borderColor: 'var(--border)'
}}>
  Content
</div>
```

## Advanced Usage

### Detecting Current Mode

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ModeAwareComponent() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Avoid hydration mismatch
  }

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
    </div>
  )
}
```

### Persisting Mode Selection

Mode selection is automatically persisted to `localStorage` by `next-themes`:

```typescript
// Stored as:
localStorage.setItem('theme', 'primary')

// Retrieved on mount:
const savedTheme = localStorage.getItem('theme')
```

### Server-Side Rendering

Always wrap mode-dependent code in client components:

```tsx
'use client'

import { useTheme } from 'next-themes'

export function ClientOnlyComponent() {
  const { theme } = useTheme()
  // Safe to use theme here
}
```

## Integration with Figma

### Syncing Modes from Figma

The mode definitions are based on Figma variable collections:

```typescript
// From lib/design-tokens.ts
export const figmaVariables = {
  collection: 'shadcn/ui',
  collectionId: 'VariableCollectionId:372:453',
  modes: {
    light: '372:1',
    dark: '373:0',
    primary: '5248:0',
  },
}
```

### Updating Mode Colors

1. Update colors in Figma (in the variable collection)
2. Run sync command:
   ```bash
   npm run sync-figma-tokens
   ```
3. Update `app/globals.css` with new color values
4. Test all three modes

## Best Practices

### 1. Always Use CSS Variables

✅ Good:
```tsx
<div className="bg-primary text-primary-foreground">
  Button
</div>
```

❌ Bad:
```tsx
<div className="bg-brown-500 text-white">
  Button
</div>
```

### 2. Test All Modes

Always test your components in all three modes:
- Light mode (default)
- Dark mode (low light)
- Primary mode (brown/warm theme)

### 3. Avoid Hardcoded Colors

Use semantic color names instead of specific color values:

✅ Good:
```css
.element {
  color: var(--foreground);
  background: var(--background);
}
```

❌ Bad:
```css
.element {
  color: #000000;
  background: #ffffff;
}
```

### 4. Handle Hydration

Always check for `mounted` state before rendering mode-dependent UI:

```tsx
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

if (!mounted) return null
```

## Troubleshooting

### Mode Not Switching

**Problem:** Mode doesn't change when clicking switcher

**Solutions:**
1. Check ThemeProvider is in layout:
   ```tsx
   <ThemeProvider>
     {children}
   </ThemeProvider>
   ```
2. Verify themes are configured:
   ```tsx
   themes={['light', 'dark', 'primary']}
   ```

### Hydration Mismatch

**Problem:** Server/client HTML doesn't match

**Solution:** Use `suppressHydrationWarning` on `<html>`:
```tsx
<html lang="en" suppressHydrationWarning>
```

### Colors Not Changing

**Problem:** CSS variables don't update

**Solution:**
1. Check class is applied to root element
2. Verify CSS variables are defined in `globals.css`
3. Check specificity isn't being overridden

## Resources

- [View Mode Demo](http://localhost:3000/modes)
- [Design Tokens](http://localhost:3000/design-tokens)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)

## API Reference

### useTheme Hook

```typescript
const {
  theme,           // Current theme name
  setTheme,        // Function to change theme
  themes,          // Array of available themes
  systemTheme,     // System preference (not used)
  resolvedTheme,   // Actual theme in use
} = useTheme()
```

### ThemeProvider Props

```typescript
<ThemeProvider
  attribute="class"           // Use class attribute for theming
  defaultTheme="light"        // Default theme
  enableSystem={false}        // Disable system preference
  themes={['light', 'dark', 'primary']}  // Available themes
>
```

---

**Last Updated**: 2026-02-07
