"use client"

import { Bold, Italic, Underline } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

// 1. Default Toggle
export function ToggleDefault() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Default</h3>
      <div className="flex items-center gap-2">
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Default toggle button
      </p>
    </div>
  )
}

// 2. Outline Toggle
export function ToggleOutline() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Outline</h3>
      <div className="flex items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Outline variant toggle button
      </p>
    </div>
  )
}

// 3. Toggle with Text
export function ToggleWithText() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Text</h3>
      <div className="flex items-center gap-2">
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
          Italic
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Toggle button with text label
      </p>
    </div>
  )
}

// 4. Small Toggle
export function ToggleSmall() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Small</h3>
      <div className="flex items-center gap-2">
        <Toggle size="sm" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Small size toggle button
      </p>
    </div>
  )
}

// 5. Large Toggle
export function ToggleLarge() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Large</h3>
      <div className="flex items-center gap-2">
        <Toggle size="lg" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Large size toggle button
      </p>
    </div>
  )
}

// 6. Disabled Toggle
export function ToggleDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Disabled</h3>
      <div className="flex items-center gap-2">
        <Toggle aria-label="Toggle italic" disabled>
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Disabled toggle button
      </p>
    </div>
  )
}
