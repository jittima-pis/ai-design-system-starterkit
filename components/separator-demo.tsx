"use client"

import { Separator } from "@/components/ui/separator"

// Separator example from Figma - showing both horizontal and vertical usage
export function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Separator</h3>
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Horizontal and vertical separators separating content sections and navigation links
      </p>
    </div>
  )
}
