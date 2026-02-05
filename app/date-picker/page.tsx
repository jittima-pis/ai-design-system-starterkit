'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DateOfBirthClosed,
  DateOfBirthOpen,
  SubscriptionDateClosed,
  SubscriptionDateOpen,
  DateTimeClosed,
  DateTimeOpen,
  NaturalLanguageClosed,
  NaturalLanguageOpen,
  DatePickerFormClosed,
  DatePickerFormOpen,
} from '@/components/date-picker-demo'

export default function DatePickerPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2 max-w-sm">
              <h1 className="text-4xl font-semibold tracking-tight">
                Date Picker
              </h1>
              <p className="text-base text-muted-foreground">
                A date picker component with range and presets.
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
                href="https://ui.shadcn.com/docs/components/date-picker"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* 1. Date of Birth Picker - Both states */}
          <div className="flex gap-8 items-start mb-10">
            <DateOfBirthClosed />
            <DateOfBirthOpen />
          </div>

          <Separator className="my-10" />

          {/* 2. Subscription Date Picker - Both states */}
          <div className="flex gap-8 items-start mb-10">
            <SubscriptionDateClosed />
            <SubscriptionDateOpen />
          </div>

          <Separator className="my-10" />

          {/* 3. Date and Time Picker - Both states */}
          <div className="flex gap-8 items-start mb-10">
            <DateTimeClosed />
            <DateTimeOpen />
          </div>

          <Separator className="my-10" />

          {/* 4. Natural Language Picker - Both states */}
          <div className="flex gap-8 items-start mb-10">
            <NaturalLanguageClosed />
            <NaturalLanguageOpen />
          </div>

          <Separator className="my-10" />

          {/* 5. Form - Both states */}
          <div className="flex gap-8 items-start">
            <DatePickerFormClosed />
            <DatePickerFormOpen />
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
