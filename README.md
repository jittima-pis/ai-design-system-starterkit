# 🎨 shadcn/ui Design System with Figma Integration

A production-ready Next.js starter with [shadcn/ui](https://ui.shadcn.com) components, Figma design tokens sync, and comprehensive documentation site.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## ✨ Features

- 🎨 **56+ shadcn/ui Components** - Fully implemented with live examples
- 🔄 **Figma Sync** - Auto-sync design tokens from Figma (147 styles)
- 🎭 **Design System** - Complete design tokens and Tailwind configuration
- 🌗 **Dark Mode** - Built-in theme switching with CSS variables
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - ARIA compliant components
- 🪝 **Custom Hooks** - Utility hooks for common patterns
- 📦 **TypeScript** - Full TypeScript support
- ✅ **ESLint** - Code quality and linting configured
- 📖 **Documentation Site** - Complete component documentation with sidebar navigation
- 🚀 **Fast** - Next.js 16 with Turbopack

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Sync design tokens from Figma
npm run sync-figma-tokens

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component documentation.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + design tokens (CSS variables)
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── design-tokens.ts    # Design system tokens
│   └── constants.ts        # Application constants
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   ├── use-debounce.ts     # Debounce hook
│   ├── use-local-storage.ts # localStorage hook
│   └── use-clipboard.ts    # Clipboard hook
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
└── components.json         # shadcn/ui configuration
```

## 🎨 Design System with Figma Integration

This project integrates with Figma design tokens for seamless design-to-code workflow.

### Figma Connection

- **File**: nook@shadcn_ui components with variables & Tailwind classes
- **File Key**: `sdA9LFFgl6VNgmrHKdIMf9`
- **Total Styles**: 147 (text, shadows, blur effects)
- **Variable Modes**: Light (372:1), Dark (373:0), Primary (5248:0)

#### Mode Features
- 🌞 **Light Mode** - Default light theme with high contrast
- 🌙 **Dark Mode** - Dark theme for low-light environments
- 🎨 **Primary Mode** - Brown/warm earth tone theme with natural colors
- ✅ Auto-switch CSS variables
- ✅ Persistent mode selection
- ✅ Mode switcher component

### Sync Design Tokens from Figma

```bash
npm run sync-figma-tokens
```

This command:
1. ✅ Fetches all 147 styles from Figma API
2. ✅ Parses text styles (13 sizes × 9 weights)
3. ✅ Parses effect styles (12 shadows, 16 blur effects)
4. ✅ Generates `lib/design-tokens.ts` automatically

[Learn more about Figma sync →](./docs/FIGMA_SYNC.md)

### Design Token Categories

#### Colors

Available color tokens in `lib/design-tokens.ts`:

- **Primary**: Used for main actions and highlights (10 shades)
- **Secondary**: Alternative color for supporting actions
- **Destructive**: For dangerous actions (delete, etc.)
- **Muted**: For disabled or less important states
- **Accent**: For call-to-attention elements
- **Semantic**: success, warning, error, info (oklch)
- **Gray Scale**: 50-950 (10 shades)

#### Typography

**Text Styles from Figma** (117 total):
- **Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
- **Weights**: Thin, Extra Light, Light, Regular, Medium, Semi Bold, Bold, Extra Bold, Black
- **Fonts**: Geist Sans (default), Geist Mono

Example: `Text-lg/Semi Bold`, `Text-xl/Medium`

#### Shadows

**Box Shadow Styles** (12 from Figma):
- `shadow-2xs`, `shadow-xs`, `shadow-sm`, `shadow-md`
- `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`
- `shadow-none`, `Focus ring`, `Destructive`

#### Effects

**Blur Effects** (8 from Figma):
- `blur-none`, `blur-sm`, `blur`, `blur-md`
- `blur-lg`, `blur-xl`, `blur-2xl`, `blur-3xl`

**Backdrop Blur** (8 from Figma):
- `backdrop-blur-none`, `backdrop-blur-sm`, `backdrop-blur`
- `backdrop-blur-md`, `backdrop-blur-lg`, `backdrop-blur-xl`
- `backdrop-blur-2xl`, `backdrop-blur-3xl`

#### Spacing

Consistent spacing scale from 0 to 24 (0-6rem):

```typescript
spacing: {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  // ... up to 24: '6rem'
}
```

#### Border Radius

Tokens for consistent rounded corners:

- `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `full`

[View full design system guide →](./DESIGN_SYSTEM.md)

## 📦 Available Components (56 Total)

All components include:
- ✅ Live demos and examples
- ✅ Multiple variations matching Figma
- ✅ Dark mode support
- ✅ Full TypeScript types
- ✅ Accessible (ARIA)

### Component Categories

#### Layout
Aspect Ratio • Separator • Scroll Area • Sidebar

#### Navigation
Breadcrumb • Menubar • Navigation Menu • Pagination • Tabs

#### Forms & Inputs
Button • Button Group • Input • Input Group • Input OTP • Textarea • Select • Native Select • Combobox • Command • Checkbox • Radio Group • Switch • Slider • Toggle • Toggle Group • Label • Field

#### Display & Feedback
Alert • Alert Dialog • Badge • Avatar • Card • Empty • Item • KBD • Skeleton • Spinner • Toast (Sonner)

#### Dialogs & Overlays
Dialog • Drawer • Sheet • Popover • Tooltip • Hover Card • Dropdown Menu • Context Menu

#### Data
Table • Data Table • Chart • Calendar • Date Picker • Progress

#### Utilities
Collapsible • Carousel • Login Card

[View all components with live demos →](http://localhost:3000)

## Custom Hooks

### `useMobile()`

Detect if the screen is mobile-sized (default: < 768px):

```typescript
import { useMobile } from '@/hooks'

export function MyComponent() {
  const isMobile = useMobile()
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

### `useDebounce()`

Debounce a value with configurable delay:

```typescript
import { useDebounce } from '@/hooks'

export function SearchComponent() {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  // Use debouncedValue for API calls
}
```

### `useLocalStorage()`

Sync state with localStorage:

```typescript
import { useLocalStorage } from '@/hooks'

export function MyComponent() {
  const { value, setValue, removeValue, isLoading } = useLocalStorage('key', 'default')
  return <div>{value}</div>
}
```

### `useClipboard()`

Copy text to clipboard:

```typescript
import { useClipboard } from '@/hooks'

export function CopyButton() {
  const { isCopied, copy } = useClipboard()
  return (
    <button onClick={() => copy('Text to copy')}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  )
}
```

## Customization

### Changing the Theme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... */
}
```

### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

### Extending Tailwind

Modify `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    // Add custom colors
  },
  spacing: {
    // Add custom spacing
  },
}
```

## Configuration Files

- `tailwind.config.ts` - Tailwind CSS theme configuration
- `components.json` - shadcn/ui CLI configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration

## 🛠️ Development

### Available Scripts

```bash
npm run dev                    # Start development server
npm run build                  # Build for production
npm run start                  # Start production server
npm run lint                   # Run ESLint
npm run sync-figma-tokens      # Sync design tokens from Figma
```

### Code Quality

```bash
npm run lint  # Run ESLint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Design Token Workflow

1. Update design in Figma
2. Run `npm run sync-figma-tokens`
3. Design tokens automatically update
4. Components reflect new design

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## 📚 Documentation

- [Design System Guide](./DESIGN_SYSTEM.md) - Complete design system documentation
- [Figma Sync Guide](./docs/FIGMA_SYNC.md) - How to sync with Figma
- [Component Demos](http://localhost:3000) - Live component examples
- [Design Tokens Showcase](http://localhost:3000/design-tokens) - View all tokens

## 📖 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Figma Variables](https://help.figma.com/hc/en-us/articles/15339657135383)
- [Geist Font](https://vercel.com/font)

## 🌐 Tech Stack

- **Framework**: Next.js 16.1.4 (App Router + Turbopack)
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **State**: React 19.2.3
- **Theme**: next-themes
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Toast**: Sonner
- **Design Tokens**: Figma API + Style Dictionary

## License

MIT

## Support

For issues and questions:
- [shadcn/ui GitHub Issues](https://github.com/shadcn-ui/ui/issues)
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)
