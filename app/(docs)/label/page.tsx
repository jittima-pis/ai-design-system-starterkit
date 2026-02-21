'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DefaultLabelWithCheckbox,
  CheckedLabelWithCheckbox,
  MultipleCheckboxesWithLabels,
  DisabledCheckboxWithLabel,
  LabelWithInput,
  LabelWithRequired,
  LabelWithTextarea,
  LabelWithHelperText,
  InlineLabels,
  FormWithLabels,
} from '@/components/label-demo'

export default function LabelPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Label
              </h1>
              <p className="text-base text-muted-foreground w-full">
                Renders an accessible label associated with controls.
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
                href="https://ui.shadcn.com/docs/components/label"
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

          {/* 1. Default Label with Checkbox (Unchecked) */}
          <DefaultLabelWithCheckbox />

          <Separator />

          {/* 2. Checked Label with Checkbox */}
          <CheckedLabelWithCheckbox />

          <Separator />

          {/* 3. Multiple Checkboxes with Labels */}
          <MultipleCheckboxesWithLabels />

          <Separator />

          {/* 4. Disabled Checkbox with Label */}
          <DisabledCheckboxWithLabel />

          <Separator />

          {/* 5. Label with Input Field */}
          <LabelWithInput />

          <Separator />

          {/* 6. Label with Required Field */}
          <LabelWithRequired />

          <Separator />

          {/* 7. Label with Textarea */}
          <LabelWithTextarea />

          <Separator />

          {/* 8. Label with Helper Text */}
          <LabelWithHelperText />

          <Separator />

          {/* 9. Inline Labels */}
          <InlineLabels />

          <Separator />

          {/* 10. Form with Labels */}
          <FormWithLabels />
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
