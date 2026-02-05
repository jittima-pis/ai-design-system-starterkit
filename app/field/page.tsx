'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  FieldDemo,
  InputDemo,
  TextareaDemo,
  SelectDemo,
  SliderDemo,
  FieldsetDemo,
  CheckboxDemo,
  RadioDemo,
  SwitchDemo,
  ChoiceCard,
  FieldGroup,
  ResponsiveLayout,
} from '@/components/field-demo'

export default function FieldPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2 max-w-lg">
              <h1 className="text-4xl font-semibold tracking-tight">
                Field
              </h1>
              <p className="text-base text-muted-foreground">
                Combine labels, controls, and help text to compose accessible form fields and grouped inputs.
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
                href="https://ui.shadcn.com/docs/components/field"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Separator className="my-10" />

          {/* 1. Field - Payment Form */}
          <FieldDemo />

          <Separator className="my-10" />

          {/* 2. Input */}
          <InputDemo />

          <Separator className="my-10" />

          {/* 3. Textarea */}
          <TextareaDemo />

          <Separator className="my-10" />

          {/* 4. Select */}
          <SelectDemo />

          <Separator className="my-10" />

          {/* 5. Slider */}
          <SliderDemo />

          <Separator className="my-10" />

          {/* 6. Fieldset */}
          <FieldsetDemo />

          <Separator className="my-10" />

          {/* 7. Checkbox */}
          <CheckboxDemo />

          <Separator className="my-10" />

          {/* 8. Radio */}
          <RadioDemo />

          <Separator className="my-10" />

          {/* 9. Switch */}
          <SwitchDemo />

          <Separator className="my-10" />

          {/* 10. Choice Card */}
          <ChoiceCard />

          <Separator className="my-10" />

          {/* 11. Field Group */}
          <FieldGroup />

          <Separator className="my-10" />

          {/* 12. Responsive Layout */}
          <ResponsiveLayout />
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
