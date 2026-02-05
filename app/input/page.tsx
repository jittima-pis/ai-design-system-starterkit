'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DefaultInput,
  FileInput,
  DisabledInput,
  WithLabelDefault,
  WithLabelActive,
  WithButtonDefault,
  WithButtonActive,
  FormDefault,
  FormActive,
} from '@/components/input-demo'

export default function InputPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2 max-w-lg">
              <h1 className="text-4xl font-semibold tracking-tight">
                Input
              </h1>
              <p className="text-base text-muted-foreground">
                Displays a form input field or a component that looks like an input field.
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
                href="https://ui.shadcn.com/docs/components/input"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Separator className="my-10" />

          {/* Default Input */}
          <div className="mb-10">
            <DefaultInput />
          </div>

          <Separator className="my-10" />

          {/* File Input */}
          <FileInput />

          <Separator className="my-10" />

          {/* Disabled Input */}
          <div className="mb-10">
            <DisabledInput />
          </div>

          <Separator className="my-10" />

          {/* With Label - Both States */}
          <div className="flex gap-8 mb-10">
            <WithLabelDefault />
            <WithLabelActive />
          </div>

          <Separator className="my-10" />

          {/* With Button - Both States */}
          <div className="flex flex-col gap-4 mb-10">
            <WithButtonDefault />
            <WithButtonActive />
          </div>

          <Separator className="my-10" />

          {/* Form - Both States */}
          <div className="flex flex-col gap-8">
            <FormDefault />
            <FormActive />
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
