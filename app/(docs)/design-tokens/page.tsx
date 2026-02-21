'use client'

import { ExternalLink, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { typography, effects, colors } from '@/lib/design-tokens'
import {
  getAllTextSizes,
  getTextWeights,
  getAllShadowVariants,
  getAllBlurVariants,
  getFigmaFileUrl,
  figmaMetadata,
} from '@/lib/figma-styles'
import { ModeIndicator } from '@/components/mode-switcher'

export default function DesignTokensPage() {
  const textSizes = getAllTextSizes()
  const shadowVariants = getAllShadowVariants()
  const blurVariants = getAllBlurVariants()

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10 mb-8">
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <div className="flex items-start gap-3 w-full">
                <h1 className="text-4xl font-semibold tracking-tight flex-1">
                  Design Tokens
                </h1>
                <ModeIndicator />
              </div>
              <p className="text-base text-muted-foreground w-full">
                Design tokens synced from Figma - {figmaMetadata.totalStyles} styles available
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 shadow-sm h-8 px-3"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="h-4 w-4" />
                Sync
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 shadow-sm h-8 px-3"
                asChild
              >
                <a
                  href={getFigmaFileUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline flex items-center gap-1.5"
                >
                  View in Figma
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <Separator />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold">{textSizes.length}</div>
              <div className="text-sm text-muted-foreground">Text Sizes</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold">{shadowVariants.length}</div>
              <div className="text-sm text-muted-foreground">Shadow Styles</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold">{blurVariants.length}</div>
              <div className="text-sm text-muted-foreground">Blur Effects</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm text-muted-foreground">Color Variables</div>
            </div>
          </div>
        </div>

        {/* Typography Tokens */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Typography Tokens</h2>
            <p className="text-sm text-muted-foreground">
              Text styles from Figma with multiple weights
            </p>
          </div>

          <Separator />

          <div className="space-y-8">
            {textSizes.map((size) => {
              const weights = getTextWeights(size)
              return (
                <div key={size} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium capitalize">
                      {size.replace('text-', '')}
                    </h3>
                    <Badge variant="secondary">{weights.length} weights</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {weights.map((weight) => (
                      <div
                        key={`${size}-${weight}`}
                        className="p-4 border border-border rounded-lg bg-muted/30"
                      >
                        <div className="text-sm text-muted-foreground mb-2 font-mono">
                          {size}/{weight}
                        </div>
                        <div className="text-foreground capitalize">
                          {weight.replace(/-/g, ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Shadow Tokens */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Shadow Tokens</h2>
            <p className="text-sm text-muted-foreground">
              Box shadow styles from Figma
            </p>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shadowVariants.map((variant) => (
              <div
                key={variant}
                className="p-6 border border-border rounded-lg bg-background"
                style={{
                  boxShadow:
                    variant === 'shadow-2xs'
                      ? '0 1px 1px 0 rgb(0 0 0 / 0.05)'
                      : variant === 'shadow-xs'
                        ? '0 1px 2px 0 rgb(0 0 0 / 0.05)'
                        : variant === 'shadow-sm'
                          ? '0 1px 2px 0 rgb(0 0 0 / 0.05)'
                          : variant === 'shadow-md'
                            ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                            : variant === 'shadow-lg'
                              ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                              : variant === 'shadow-xl'
                                ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                                : variant === 'shadow-2xl'
                                  ? '0 25px 50px -12px rgb(0 0 0 / 0.25)'
                                  : variant === 'shadow-inner'
                                    ? 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
                                    : 'none',
                }}
              >
                <div className="font-mono text-sm mb-2">{variant}</div>
                <div className="text-xs text-muted-foreground">
                  Hover to see effect
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Tokens */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Color Tokens</h2>
            <p className="text-sm text-muted-foreground">
              Semantic colors using oklch color space
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            {/* Semantic Colors */}
            <div>
              <h3 className="text-lg font-medium mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div
                    className="h-24 rounded-lg border border-border"
                    style={{ background: colors.success }}
                  />
                  <div className="text-sm font-mono">success</div>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-24 rounded-lg border border-border"
                    style={{ background: colors.warning }}
                  />
                  <div className="text-sm font-mono">warning</div>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-24 rounded-lg border border-border"
                    style={{ background: colors.error }}
                  />
                  <div className="text-sm font-mono">error</div>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-24 rounded-lg border border-border"
                    style={{ background: colors.info }}
                  />
                  <div className="text-sm font-mono">info</div>
                </div>
              </div>
            </div>

            {/* Primary Scale */}
            <div>
              <h3 className="text-lg font-medium mb-4">Primary Scale</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {Object.entries(colors.primary).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div
                      className="h-16 rounded-lg border border-border"
                      style={{ background: value as string }}
                    />
                    <div className="text-xs font-mono text-center">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gray Scale */}
            <div>
              <h3 className="text-lg font-medium mb-4">Gray Scale</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {Object.entries(colors.gray).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div
                      className="h-16 rounded-lg border border-border"
                      style={{ background: value as string }}
                    />
                    <div className="text-xs font-mono text-center">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Usage Example</h2>
            <p className="text-sm text-muted-foreground">
              How to use design tokens in your components
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Import Design Tokens</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`import { colors, typography, effects } from '@/lib/design-tokens'
import { getFigmaTextStyle } from '@/lib/figma-styles'`}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">Use in Components</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`// Using colors
<div style={{ color: colors.primary[500] }}>Text</div>

// Using Tailwind classes
<div className="text-primary shadow-md rounded-lg">
  Content
</div>

// Using CSS variables
<div style={{ background: 'var(--background)' }}>
  Background
</div>`}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">Sync from Figma</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`npm run sync-figma-tokens`}
              </pre>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
