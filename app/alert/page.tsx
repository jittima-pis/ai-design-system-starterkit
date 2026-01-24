'use client'

import { ExternalLink, Terminal, AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function AlertPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Alert
              </h1>
              <p className="text-base text-muted-foreground">
                Displays a callout for user attention.
              </p>
            </div>

            {/* View in Shadcn button */}
            <Button
              variant="secondary"
              size="sm"
              className="gap-1.5 shadow-sm"
              asChild
            >
              <a
                href="https://ui.shadcn.com/docs/components/alert"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Alert examples container */}
          <div className="space-y-6">
            {/* Default Alert */}
            <div>
              <h3 className="text-sm font-medium mb-4">Default</h3>
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>

            <Separator />

            {/* Title Only */}
            <div>
              <h3 className="text-sm font-medium mb-4">Title Only</h3>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
              </Alert>
            </div>

            <Separator />

            {/* Destructive */}
            <div>
              <h3 className="text-sm font-medium mb-4">Destructive</h3>
              <Alert variant="destructive">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>

            <Separator />

            {/* Additional Examples */}
            <div>
              <h3 className="text-sm font-medium mb-4">More Examples</h3>
              <div className="space-y-4">
                {/* Success-like Alert */}
                <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-100">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    Your changes have been saved successfully.
                  </AlertDescription>
                </Alert>

                {/* Info Alert */}
                <Alert className="border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100">
                  <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <AlertTitle>Note</AlertTitle>
                  <AlertDescription className="text-blue-800 dark:text-blue-200">
                    This feature is currently in beta. Some functionality may be limited.
                  </AlertDescription>
                </Alert>

                {/* Warning Alert */}
                <Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription className="text-amber-800 dark:text-amber-200">
                    Your storage is almost full. Please upgrade your plan to continue.
                  </AlertDescription>
                </Alert>

                {/* No Icon Alert */}
                <Alert>
                  <AlertTitle>Simple Alert</AlertTitle>
                  <AlertDescription>
                    This is a simple alert without an icon.
                  </AlertDescription>
                </Alert>

                {/* Description Only */}
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertDescription>
                    This alert only has a description with an icon, no title.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home button */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
