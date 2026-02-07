"use client"

import { Bold, Italic, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// 1. Default Toggle Group
export function ToggleGroupDefault() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Default</h3>
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Default toggle group with formatting options
      </p>
    </div>
  )
}

// 2. Outline Toggle Group
export function ToggleGroupOutline() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Outline</h3>
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Outline variant toggle group
      </p>
    </div>
  )
}

// 3. Outline with Spacing
export function ToggleGroupOutlineSpacing() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Outline with Spacing</h3>
      <ToggleGroup type="single" variant="outline" spacing={4}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Outline variant with spacing between buttons
      </p>
    </div>
  )
}

// 4. Small Toggle Group
export function ToggleGroupSmall() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Small</h3>
      <ToggleGroup type="single" size="sm" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Small size toggle group
      </p>
    </div>
  )
}

// 5. Large Toggle Group
export function ToggleGroupLarge() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Large</h3>
      <ToggleGroup type="single" size="lg" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Large size toggle group
      </p>
    </div>
  )
}

// 6. Disabled Toggle Group
export function ToggleGroupDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Disabled</h3>
      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-muted-foreground">
        Disabled toggle group
      </p>
    </div>
  )
}
