'use client'

import { ExternalLink, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function BadgePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Badge
              </h1>
              <p className="text-base text-muted-foreground">
                Displays a badge or a component that looks like a badge.
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
                href="https://ui.shadcn.com/docs/components/badge"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Badge component set matching Figma design */}
          <div className="rounded-xl border border-dashed border-border p-8">
            <div className="grid grid-cols-2 gap-x-20 gap-y-8 max-w-sm">
              {/* Row 1: Default and Secondary */}
              <div className="flex items-center">
                <Badge>Default</Badge>
              </div>
              <div className="flex items-center">
                <Badge variant="secondary">Secondary</Badge>
              </div>

              {/* Row 2: Destructive and Outline */}
              <div className="flex items-center">
                <Badge variant="destructive">Destructive</Badge>
              </div>
              <div className="flex items-center">
                <Badge variant="outline">Outline</Badge>
              </div>

              {/* Row 3: Secondary with icon and Default with number */}
              <div className="flex items-center">
                <Badge variant="secondary">
                  <Check className="h-3 w-3" />
                  Secondary
                </Badge>
              </div>
              <div className="flex items-center">
                <Badge>2</Badge>
              </div>

              {/* Row 4: Destructive with number and Secondary with number */}
              <div className="flex items-center">
                <Badge variant="destructive">12</Badge>
              </div>
              <div className="flex items-center">
                <Badge variant="secondary">100</Badge>
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
