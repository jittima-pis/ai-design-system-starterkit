'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { modeColors, colors } from '@/lib/design-tokens'
import {
  getAllModes,
  getModeDisplayName,
  getModeDescription,
  getFigmaModeId,
  getModeColor,
  compareColorAcrossModes,
} from '@/lib/mode-utils'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ModeColorsPage() {
  const modes = getAllModes()
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const colorNames = Object.keys(modeColors.light) as Array<keyof typeof modeColors.light>

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopiedColor(color)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10 mb-8">
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Mode Color Comparison
              </h1>
              <p className="text-base text-muted-foreground w-full">
                Compare colors across Light, Dark, and Primary modes
              </p>
            </div>
          </div>

          <Separator />

          {/* Mode Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <Card key={mode}>
                <CardHeader>
                  <CardTitle className="text-lg">{getModeDisplayName(mode)}</CardTitle>
                  <CardDescription>Figma ID: {getFigmaModeId(mode)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {getModeDescription(mode)}
                  </p>
                  <div className="flex gap-2">
                    <div
                      className="h-12 flex-1 rounded border"
                      style={{ background: getModeColor(mode, 'background') }}
                    />
                    <div
                      className="h-12 flex-1 rounded border"
                      style={{ background: getModeColor(mode, 'primary') }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Color Comparison Table */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Color Values by Mode</h2>
            <p className="text-sm text-muted-foreground">
              Click any color to copy its value
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            {colorNames.map((colorName) => {
              const comparison = compareColorAcrossModes(colorName)

              return (
                <div key={colorName} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-medium capitalize min-w-[200px]">
                      {colorName.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <Badge variant="outline" className="font-mono text-xs">
                      --{colorName.replace(/([A-Z])/g, '-$1').toLowerCase()}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {modes.map((mode) => (
                      <div
                        key={mode}
                        className="group relative rounded-lg border border-border overflow-hidden cursor-pointer hover:ring-2 hover:ring-ring transition-all"
                        onClick={() => copyColor(comparison[mode])}
                      >
                        {/* Color Preview */}
                        <div
                          className="h-24"
                          style={{ background: comparison[mode] }}
                        />

                        {/* Info */}
                        <div className="p-3 bg-card">
                          <div className="text-xs font-medium mb-1 capitalize">
                            {mode}
                          </div>
                          <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                            <span className="flex-1 truncate">{comparison[mode]}</span>
                            {copiedColor === comparison[mode] ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Brown & Orange Scales (Primary Mode) */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Primary Mode Color Scales</h2>
            <p className="text-sm text-muted-foreground">
              Brown and orange scales used in Primary mode from Figma
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-medium mb-4">Brown Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(colors.brown).map(([shade, color]) => (
                <div
                  key={shade}
                  className="space-y-2 cursor-pointer group"
                  onClick={() => copyColor(color)}
                >
                  <div
                    className="h-20 rounded-lg border border-border relative overflow-hidden group-hover:ring-2 group-hover:ring-ring transition-all"
                    style={{ background: color }}
                  >
                    {copiedColor === color && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-xs font-mono text-center">{shade}</div>
                  <div className="text-xs text-muted-foreground text-center font-mono">
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-medium mb-4">Orange Scale (Charts)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(colors.orange).map(([shade, color]) => (
              <div
                key={shade}
                className="space-y-2 cursor-pointer group"
                onClick={() => copyColor(color)}
              >
                <div
                  className="h-20 rounded-lg border border-border relative overflow-hidden group-hover:ring-2 group-hover:ring-ring transition-all"
                  style={{ background: color }}
                >
                  {copiedColor === color && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                  <div className="text-xs font-mono text-center">{shade}</div>
                  <div className="text-xs text-muted-foreground text-center font-mono">
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            💡 Tip: Click any color swatch to copy its value to clipboard
          </div>
        </div>

        {/* Usage Examples */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Usage in Code</h2>
            <p className="text-sm text-muted-foreground">
              How to use these colors in your components
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-medium">CSS Variables</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`.my-element {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}

/* Automatically changes with mode */`}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">Tailwind Classes</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`<div className="bg-primary text-primary-foreground">
  Primary Button
</div>

<div className="bg-card text-card-foreground border-border">
  Card Content
</div>`}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">TypeScript with Design Tokens</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`import { getModeColor, getAllModeColors, getBrownColor, getOrangeColor } from '@/lib/mode-utils'
import { colors } from '@/lib/design-tokens'

// Get specific color
const primaryColor = getModeColor('primary', 'primary')

// Get all colors for a mode
const primaryModeColors = getAllModeColors('primary')

// Use brown scale (Primary mode)
const brownColor = getBrownColor('12')  // #3E332E

// Use orange scale (Charts)
const orangeColor = getOrangeColor('9')  // #F76B15`}
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
