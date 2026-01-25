'use client'

import { ExternalLink, Mail, ChevronRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Button
              </h1>
              <p className="text-base text-muted-foreground">
                Displays a button or a component that looks like a button.
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
                href="https://ui.shadcn.com/docs/components/button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Button component set matching Figma design */}
          <div className="rounded-xl border border-dashed border-border p-8">
            <div className="grid grid-cols-2 gap-x-32 gap-y-10 max-w-xl">
              {/* Row 1: Primary */}
              <div className="flex items-center">
                <Button>Primary</Button>
              </div>
              <div className="flex items-center">
                <Button className="hover:bg-primary/90">Primary</Button>
              </div>

              {/* Row 2: Secondary */}
              <div className="flex items-center">
                <Button variant="secondary">Secondary</Button>
              </div>
              <div className="flex items-center">
                <Button variant="secondary" className="hover:bg-secondary/80">Secondary</Button>
              </div>

              {/* Row 3: Destructive */}
              <div className="flex items-center">
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex items-center">
                <Button variant="destructive" className="hover:bg-destructive/90">Destructive</Button>
              </div>

              {/* Row 4: Outline */}
              <div className="flex items-center">
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex items-center">
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">Outline</Button>
              </div>

              {/* Row 5: Ghost */}
              <div className="flex items-center">
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground">Ghost</Button>
              </div>

              {/* Row 6: Link */}
              <div className="flex items-center">
                <Button variant="link">Link</Button>
              </div>
              <div className="flex items-center">
                <Button variant="link" className="hover:underline">Link</Button>
              </div>

              {/* Row 7: Icon */}
              <div className="flex items-center">
                <Button size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center">
                <Button size="icon" className="hover:bg-primary/90">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Row 8: With Icon */}
              <div className="flex items-center">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Login with Email
                </Button>
              </div>
              <div className="flex items-center">
                <Button className="hover:bg-primary/90">
                  <Mail className="mr-2 h-4 w-4" />
                  Login with Email
                </Button>
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
