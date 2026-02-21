'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CommandTrigger, CommandDemo } from '@/components/command-demo'

export default function CommandPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2 max-w-sm">
              <h1 className="text-4xl font-semibold tracking-tight">
                Command
              </h1>
              <p className="text-base text-muted-foreground">
                Fast, composable, unstyled command menu for React.
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
                href="https://ui.shadcn.com/docs/components/command"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Command Trigger (Closed State) */}
          <div className="mb-10">
            <CommandTrigger />
          </div>

          {/* Command Demo (Open State) */}
          <div className="flex justify-center">
            <CommandDemo />
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
