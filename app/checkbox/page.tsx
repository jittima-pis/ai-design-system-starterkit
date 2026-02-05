'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DefaultCheckbox,
  CheckboxWithSubtext,
  DisabledCheckbox,
  CheckboxCardsDemo,
  SidebarForm,
} from '@/components/checkbox-demos'

export default function CheckboxPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Checkbox
              </h1>
              <p className="text-base text-muted-foreground">
                A control that allows the user to toggle between checked and not checked.
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
                href="https://ui.shadcn.com/docs/components/checkbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Default Checkbox */}
          <div className="mb-10">
            <DefaultCheckbox />
          </div>

          <Separator className="my-10" />

          {/* Checkbox with Subtext */}
          <div className="mb-10">
            <CheckboxWithSubtext />
          </div>

          <Separator className="my-10" />

          {/* Disabled Checkbox */}
          <div className="mb-10">
            <DisabledCheckbox />
          </div>

          <Separator className="my-10" />

          <Separator className="my-10" />

          {/* Checkbox Cards */}
          <div className="mb-10">
            <CheckboxCardsDemo />
          </div>

          <Separator className="my-10" />

          {/* Sidebar Form */}
          <div>
            <SidebarForm />
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
