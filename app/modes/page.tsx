'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { ModeIndicator, ModeSwitcher } from '@/components/mode-switcher'
import { InfoIcon, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'

export default function ModesPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10 mb-8">
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <div className="flex items-center gap-3 w-full">
                <h1 className="text-4xl font-semibold tracking-tight">
                  Variable Modes
                </h1>
                <ModeIndicator />
              </div>
              <p className="text-base text-muted-foreground w-full">
                Switch between Light, Dark, and Primary modes from Figma variables
              </p>
            </div>

            <ModeSwitcher />
          </div>

          <Separator />

          {/* Mode Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Light Mode</CardTitle>
                <CardDescription>Figma ID: 372:1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Default light theme with high contrast and clean backgrounds
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dark Mode</CardTitle>
                <CardDescription>Figma ID: 373:0</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dark theme optimized for low-light environments
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Primary Mode</CardTitle>
                <CardDescription>Figma ID: 5248:0</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Brown/warm earth tone theme with natural colors
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Component Showcase */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Components in Current Mode</h2>
            <p className="text-sm text-muted-foreground">
              See how components adapt to different modes
            </p>
          </div>

          <Separator />

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Alerts */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Alerts</h3>
            <div className="grid gap-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert in the current mode.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  This is a destructive alert showing an error state.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Form Elements</h3>
            <div className="grid gap-6 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>

              <div className="space-y-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    This card adapts to the current theme mode automatically.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Featured Card</CardTitle>
                  <CardDescription>With primary accent</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    This card uses primary color for emphasis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Color Variables */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">CSS Variables in Current Mode</h2>
            <p className="text-sm text-muted-foreground">
              These colors change based on the active mode
            </p>
          </div>

          <Separator />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'background', var: '--background' },
              { name: 'foreground', var: '--foreground' },
              { name: 'primary', var: '--primary' },
              { name: 'secondary', var: '--secondary' },
              { name: 'muted', var: '--muted' },
              { name: 'accent', var: '--accent' },
              { name: 'destructive', var: '--destructive' },
              { name: 'border', var: '--border' },
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-24 rounded-lg border border-border"
                  style={{ background: `var(${color.var})` }}
                />
                <div className="text-sm font-mono">{color.name}</div>
                <div className="text-xs text-muted-foreground">{color.var}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guide */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">How to Use Modes</h2>
            <p className="text-sm text-muted-foreground">
              Implementing mode switching in your application
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-medium">1. Import Mode Switcher</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`import { ModeSwitcher } from '@/components/mode-switcher'

// In your component
<ModeSwitcher />`}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">2. Use Mode in Components</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`import { useTheme } from 'next-themes'

function MyComponent() {
  const { theme } = useTheme()

  return (
    <div>Current mode: {theme}</div>
  )
}`}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-medium">3. Mode-specific Styles</h3>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
                {`/* In your CSS */
.light .my-element {
  /* Light mode styles */
}

.dark .my-element {
  /* Dark mode styles */
}

.primary .my-element {
  /* Primary mode styles */
}`}
              </pre>
            </div>

            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                All CSS variables automatically change when switching modes. Use{' '}
                <code className="text-sm bg-muted px-1 py-0.5 rounded">var(--primary)</code>,{' '}
                <code className="text-sm bg-muted px-1 py-0.5 rounded">var(--background)</code>, etc.
                for automatic theme support.
              </AlertDescription>
            </Alert>
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
