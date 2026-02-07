'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DefaultNativeSelect,
  NativeSelectWithLabel,
  NativeSelectWithPlaceholder,
  DisabledNativeSelect,
  NativeSelectWithError,
  NativeSelectWithHelper,
  NativeSelectRequired,
  NativeSelectMultiple,
  NativeSelectGrouped,
  FormWithNativeSelects,
} from '@/components/native-select-demo'

export default function NativeSelectPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Native Select
              </h1>
              <p className="text-base text-muted-foreground w-full">
                Native HTML select element with custom styling for dropdown selections.
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
                href="https://ui.shadcn.com"
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

          {/* 1. Default Native Select */}
          <DefaultNativeSelect />

          <Separator />

          {/* 2. Native Select with Label */}
          <NativeSelectWithLabel />

          <Separator />

          {/* 3. Native Select with Placeholder */}
          <NativeSelectWithPlaceholder />

          <Separator />

          {/* 4. Disabled Native Select */}
          <DisabledNativeSelect />

          <Separator />

          {/* 5. Native Select with Error State */}
          <NativeSelectWithError />

          <Separator />

          {/* 6. Native Select with Helper Text */}
          <NativeSelectWithHelper />

          <Separator />

          {/* 7. Native Select with Required Field */}
          <NativeSelectRequired />

          <Separator />

          {/* 8. Native Select with Multiple Options */}
          <NativeSelectMultiple />

          <Separator />

          {/* 9. Native Select with Grouped Options */}
          <NativeSelectGrouped />

          <Separator />

          {/* 10. Form with Multiple Native Selects */}
          <FormWithNativeSelects />
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
