'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  FrameworkComboboxClosed,
  FrameworkComboboxOpen,
  StatusPopoverClosed,
  StatusPopoverOpen,
  LanguageFormClosed,
  LanguageFormOpen,
  DropdownMenuClosed,
  DropdownMenuOpen,
} from '@/components/combobox-demos'

export default function ComboboxPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Combobox
              </h1>
              <p className="text-base text-muted-foreground">
                Autocomplete input and command palette with a list of suggestions.
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
                href="https://ui.shadcn.com/docs/components/combobox"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Framework Combobox - Both states */}
          <div className="flex gap-8 items-start mb-10">
            <FrameworkComboboxClosed />
            <FrameworkComboboxOpen />
          </div>

          <Separator className="my-10" />

          {/* Status Popover - Both states */}
          <div className="flex gap-8 items-start mb-10">
            <StatusPopoverClosed />
            <StatusPopoverOpen />
          </div>

          <Separator className="my-10" />

          {/* Dropdown Menu - Both states */}
          <div className="flex flex-col gap-4 mb-10">
            <DropdownMenuClosed />
            <DropdownMenuOpen />
          </div>

          <Separator className="my-10" />

          {/* Language Form - Both states */}
          <div className="flex gap-8 items-start">
            <LanguageFormClosed />
            <LanguageFormOpen />
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
