'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ProgressFromFigma } from '@/components/progress-demo'

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Progress
              </h1>
              <p className="text-base text-muted-foreground w-full">
                Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
              </p>
            </div>

            {/* View in Shadcn button */}
            <Button
              variant="secondary"
              size="sm"
              className="gap-1.5 shadow-sm h-8 px-3"
              asChild
            >
              <a
                href="https://ui.shadcn.com/docs/components/progress"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline flex items-center gap-1.5"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Separator />

          {/* Progress from Figma */}
          <ProgressFromFigma />
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
