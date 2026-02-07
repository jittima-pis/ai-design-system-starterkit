# 🎨 Design System Documentation

ระบบดีไซน์ที่เชื่อมต่อระหว่าง Figma และ Code โดยอัตโนมัติ

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Figma Setup](#figma-setup)
- [Token Sync](#token-sync)
- [Usage](#usage)
- [Customization](#customization)

---

## 🎯 Overview

โปรเจคนี้ใช้ระบบ Design Tokens ที่เชื่อมต่อกับ Figma Variables เพื่อให้การดีไซน์และการพัฒนาสอดคล้องกัน

### Key Features

✅ **Auto-sync with Figma** - ซิงค์ design tokens จาก Figma อัตโนมัติ
✅ **Type-safe tokens** - TypeScript support สำหรับ design tokens
✅ **Theme switching** - รองรับ light/dark mode
✅ **Tailwind integration** - ใช้งานผ่าน Tailwind CSS classes
✅ **Component library** - shadcn/ui components ที่ใช้ design tokens

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                   FIGMA                         │
│  ┌─────────────────────────────────────┐       │
│  │  Variable Collection: shadcn/ui     │       │
│  │  - Light Mode (372:1)               │       │
│  │  - Dark Mode (373:0)                │       │
│  │  - Primary (5248:0)                 │       │
│  └─────────────────────────────────────┘       │
│  ┌─────────────────────────────────────┐       │
│  │  Styles (147 total)                 │       │
│  │  - Text styles (13 categories)      │       │
│  │  - Shadow styles (12)               │       │
│  │  - Blur effects (8)                 │       │
│  │  - Backdrop blur (8)                │       │
│  └─────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘
                      ↓
            [Figma REST API]
                      ↓
┌─────────────────────────────────────────────────┐
│         scripts/sync-figma-tokens.ts            │
│  - Fetch styles from Figma                      │
│  - Parse and transform                          │
│  - Generate design-tokens.ts                    │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│            lib/design-tokens.ts                 │
│  - Typography tokens                            │
│  - Color tokens                                 │
│  - Effect tokens (shadows, blur)                │
│  - Spacing, border radius, z-index              │
└─────────────────────────────────────────────────┘
           ↓                    ↓
┌──────────────────┐  ┌──────────────────────────┐
│  app/globals.css │  │   tailwind.config.ts     │
│  - CSS variables │  │   - Extend Tailwind      │
│  - :root, .dark  │  │   - Map to CSS vars      │
└──────────────────┘  └──────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│              COMPONENTS                         │
│  - Use Tailwind classes                         │
│  - Use CSS variables                            │
│  - Type-safe design tokens                      │
└─────────────────────────────────────────────────┘
```

---

## 🎨 Figma Setup

### Figma File Information

- **File**: `nook@shadcn_ui components with variables & Tailwind classes`
- **File Key**: `sdA9LFFgl6VNgmrHKdIMf9`
- **URL**: [View in Figma](https://www.figma.com/design/sdA9LFFgl6VNgmrHKdIMf9/)

### Variable Collection: shadcn/ui

| Mode | Mode ID | Description |
|------|---------|-------------|
| Light Mode | 372:1 | Default light theme |
| Dark Mode | 373:0 | Dark theme colors |
| Primary | 5248:0 | Brown/warm earth tone theme |

### Design Tokens Structure

#### 1. Typography (Text Styles)

13 size categories × 9 weight variants = **117 text styles**

**Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
**Weights**: Black, Extra Bold, Bold, Semi Bold, Medium, Regular, Light, Extra Light, Thin

Example: `Text-sm/Medium`, `Text-xl/Bold`

#### 2. Effects (Shadow & Blur Styles)

**Box Shadows** (12 styles):
- `shadow-2xs`, `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`
- `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`
- `Focus ring`, `Destructive`

**Blur Effects** (8 styles):
- `blur-none`, `blur-sm`, `blur`, `blur-md`, `blur-lg`
- `blur-xl`, `blur-2xl`, `blur-3xl`

**Backdrop Blur** (8 styles):
- `backdrop-blur-none`, `backdrop-blur-sm`, `backdrop-blur`
- `backdrop-blur-md`, `backdrop-blur-lg`, `backdrop-blur-xl`
- `backdrop-blur-2xl`, `backdrop-blur-3xl`

---

## 🔄 Token Sync

### Automatic Sync Command

```bash
npm run sync-figma-tokens
```

This will:
1. ✅ Connect to Figma API
2. ✅ Fetch all 147 styles
3. ✅ Parse text, effect, and color styles
4. ✅ Generate `lib/design-tokens.ts`
5. ✅ Preserve existing token structure

### What Gets Synced

| Category | Source | Output |
|----------|--------|--------|
| Text Styles | Figma Styles | `typography.textStyles` |
| Box Shadows | Figma Effects | `effects.shadows` |
| Blur Effects | Figma Effects | `effects.blur` |
| Backdrop Blur | Figma Effects | `effects.backdropBlur` |
| Colors | Manual + Figma | `colors` object |
| Spacing | Manual | `spacing` object |
| Border Radius | Manual | `borderRadius` object |

### Figma API Configuration

The sync script uses:
- **Token**: Stored in `scripts/sync-figma-tokens.ts`
- **File Key**: `sdA9LFFgl6VNgmrHKdIMf9`
- **API Base**: `https://api.figma.com/v1`

---

## 💻 Usage

### 1. Using with Tailwind CSS

All design tokens are available as Tailwind classes:

```tsx
// Colors
<div className="bg-primary text-primary-foreground">
  Primary Button
</div>

<div className="bg-card text-card-foreground border border-border">
  Card Component
</div>

// Typography
<h1 className="text-4xl font-semibold">
  Heading
</h1>

// Shadows
<div className="shadow-md hover:shadow-lg transition-shadow">
  Card with shadow
</div>

// Border Radius
<button className="rounded-lg">
  Rounded Button
</button>
```

### 2. Using CSS Variables

Direct access to CSS variables:

```css
.my-component {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
```

### 3. Using TypeScript Tokens

Import and use design tokens directly:

```typescript
import { colors, typography, spacing, effects } from '@/lib/design-tokens'

// In your code
const primaryColor = colors.primary[500]
const textStyle = typography.textStyles['text-lg']['semi-bold']
const boxShadow = effects.shadows['shadow-md']
```

### 4. Theme Switching

```tsx
import { useTheme } from 'next-themes'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

---

## 🎨 Color System

### CSS Variables Mapping

| CSS Variable | Light Mode | Dark Mode | Usage |
|--------------|------------|-----------|-------|
| `--background` | `oklch(1 0 0)` | `oklch(0.145 0 0)` | Page background |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Text color |
| `--primary` | `oklch(0.205 0 0)` | `oklch(0.922 0 0)` | Primary brand |
| `--secondary` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Secondary color |
| `--muted` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Muted backgrounds |
| `--accent` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Accent color |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Error/danger |
| `--border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Border color |
| `--ring` | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` | Focus ring |

### Semantic Colors

```typescript
{
  success: 'oklch(0.646 0.222 41.116)',   // Green
  warning: 'oklch(0.828 0.189 84.429)',   // Yellow
  error: 'oklch(0.577 0.245 27.325)',     // Red
  info: 'oklch(0.6 0.118 184.704)',       // Blue
}
```

---

## ⚙️ Customization

### Updating Color Values

Edit `app/globals.css`:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... other colors ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... other colors ... */
}
```

### Adding New Tokens

Add to `lib/design-tokens.ts`:

```typescript
export const customTokens = {
  myColor: 'oklch(0.5 0.2 180)',
  mySpacing: '2.5rem',
  myAnimation: '300ms ease-in-out',
}
```

### Extending Tailwind

Add to `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'my-color': 'var(--my-custom-color)',
    },
  },
}
```

---

## 📚 Resources

### Documentation
- [Figma Sync Guide](./docs/FIGMA_SYNC.md)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

### Figma Resources
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Figma REST API](https://www.figma.com/developers/api)

### Related Tools
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Token Transformer](https://github.com/tokens-studio/figma-plugin)

---

## 🚀 Quick Start

1. **Sync tokens from Figma**
   ```bash
   npm run sync-figma-tokens
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **View components**
   Open [http://localhost:3000](http://localhost:3000)

4. **Make changes**
   - Update Figma variables
   - Run sync command
   - Tokens update automatically

---

## 🔧 Troubleshooting

### Sync Issues

**Problem**: 403 Error from Figma API
**Solution**: Check Figma token permissions in `scripts/sync-figma-tokens.ts`

**Problem**: Tokens not updating in browser
**Solution**: Clear Next.js cache and restart dev server
```bash
rm -rf .next
npm run dev
```

**Problem**: CSS variables not working
**Solution**: Make sure `globals.css` is imported in `app/layout.tsx`

---

## 📝 Best Practices

1. ✅ Always sync before making design changes
2. ✅ Use semantic color names (e.g., `text-primary` not `text-gray-900`)
3. ✅ Test in both light and dark modes
4. ✅ Keep Figma style names consistent
5. ✅ Document custom tokens in code comments
6. ✅ Run sync after Figma updates
7. ✅ Commit generated `design-tokens.ts` to version control

---

## 📊 Statistics

- **Total Figma Styles**: 147
- **Text Style Categories**: 13 (xs → 9xl)
- **Text Style Variants**: 117 (13 × 9 weights)
- **Shadow Styles**: 12
- **Blur Effects**: 8
- **Backdrop Blur Effects**: 8
- **Color Variables**: 30+
- **Components**: 56

---

## 🤝 Contributing

เมื่อเพิ่ม component หรือ style ใหม่:

1. เพิ่มใน Figma file
2. ตั้งชื่อตาม convention (เช่น `Text-size/weight`)
3. Publish variables
4. รัน `npm run sync-figma-tokens`
5. Test component
6. Commit changes

---

**Last Updated**: 2026-02-07
**Maintained by**: Design System Team
