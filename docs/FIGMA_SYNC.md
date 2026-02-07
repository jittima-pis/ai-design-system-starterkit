# Figma Design Tokens Sync

This project is integrated with Figma design tokens to maintain consistency between design and development.

## Overview

The design system is synced from Figma file:
- **File**: nook@shadcn_ui components with variables & Tailwind classes
- **File Key**: `sdA9LFFgl6VNgmrHKdIMf9`
- **Variable Collection**: shadcn/ui

## Figma Variables

The Figma file contains the following variable modes:
- **Light Mode** (372:1) - Default light theme
- **Dark Mode** (373:0) - Dark theme
- **Primary** (5248:0) - Brown/warm earth tone theme

## Design Token Categories

### 1. Typography
- Text styles from xs to 9xl
- Font weights: Thin, Extra Light, Light, Regular, Medium, Semi Bold, Bold, Extra Bold, Black
- Font families: Geist Sans, Geist Mono

### 2. Colors
- Primary colors (50-950 scale)
- Semantic colors (success, warning, error, info)
- Gray/neutral colors (50-950 scale)
- Component-specific colors (background, foreground, card, popover, etc.)

### 3. Effects
- Box shadows (xs, sm, md, lg, xl, 2xl)
- Blur effects (none, sm, md, lg, xl, 2xl, 3xl)
- Backdrop blur effects

### 4. Spacing
- Scale from 0 to 24rem
- Consistent spacing units

### 5. Border Radius
- From sm to 4xl
- Based on CSS variable `--radius`

## Syncing Design Tokens

### Automatic Sync

To sync design tokens from Figma to your project:

```bash
npm run sync-figma-tokens
```

This command will:
1. Fetch all styles from the Figma file
2. Parse text, color, and effect styles
3. Generate updated `lib/design-tokens.ts` file
4. Preserve existing token structure

### Manual Sync

If you need to manually update tokens:

1. Export design tokens from Figma using a plugin like:
   - [Design Tokens](https://www.figma.com/community/plugin/888356646278934516)
   - [Tokens Studio](https://www.figma.com/community/plugin/843461159747178978)

2. Place the exported JSON in `tokens/figma-tokens.json`

3. Run the sync script

## File Structure

```
project/
├── lib/
│   └── design-tokens.ts        # Auto-generated design tokens
├── scripts/
│   └── sync-figma-tokens.ts    # Sync script
├── app/
│   └── globals.css             # CSS variables
└── tailwind.config.ts          # Tailwind configuration
```

## Usage in Code

### Using Design Tokens

```typescript
import { colors, typography, spacing } from '@/lib/design-tokens'

// In your component
<div style={{ color: colors.primary[500] }}>
  Hello
</div>
```

### Using with Tailwind

The design tokens are automatically available in Tailwind:

```tsx
<div className="text-primary bg-card rounded-lg shadow-md">
  Content
</div>
```

### Using CSS Variables

All tokens are available as CSS variables:

```css
.my-element {
  background: var(--background);
  color: var(--foreground);
  border-radius: var(--radius);
}
```

## Figma Variables Reference

The following Figma variables are mapped to CSS variables:

| Figma Variable | CSS Variable | Usage |
|----------------|--------------|-------|
| background | `--background` | Main background color |
| foreground | `--foreground` | Main text color |
| primary | `--primary` | Primary brand color |
| secondary | `--secondary` | Secondary color |
| muted | `--muted` | Muted backgrounds |
| accent | `--accent` | Accent color |
| destructive | `--destructive` | Error/danger color |
| border | `--border` | Border color |
| input | `--input` | Input border color |
| ring | `--ring` | Focus ring color |

## Theme Switching

The project supports multiple themes through Figma variable modes:

```tsx
// Light mode (default)
<html className="light">

// Dark mode
<html className="dark">
```

## Best Practices

1. **Always sync before making design changes**: Run `npm run sync-figma-tokens` to get the latest tokens
2. **Don't edit generated files**: The `lib/design-tokens.ts` file is auto-generated
3. **Use semantic color names**: Prefer `text-primary` over hardcoded colors
4. **Follow Figma naming conventions**: Keep Figma style names consistent with code
5. **Test both themes**: Check components in light and dark mode

## Troubleshooting

### Sync fails with 403 error

Make sure your Figma token has the required scopes:
- `file_variables:read`
- `file_content:read`

### Tokens not updating

1. Clear Next.js cache: `rm -rf .next`
2. Restart dev server: `npm run dev`
3. Check browser cache

### Variable not found

Make sure the Figma variable is:
1. Published in the variable collection
2. Not hidden from publishing
3. Has a valid name (no special characters)

## Resources

- [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [shadcn/ui Theming](https://ui.shadcn.com/docs/theming)
- [Tailwind CSS Customization](https://tailwindcss.com/docs/configuration)
