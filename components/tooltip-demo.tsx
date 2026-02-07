"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Tooltip from Figma - Hover to show "Add to library"
export function TooltipDemo() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Tooltip</h3>
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-xs text-muted-foreground">
        Hover over the button to see the tooltip
      </p>
    </div>
  )
}
