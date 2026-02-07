"use client"

import { Progress } from "@/components/ui/progress"

// Progress from Figma - Single progress bar at ~44%
export function ProgressFromFigma() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Progress</h3>
      <div className="w-full">
        <Progress value={44} className="h-2" />
      </div>
      <p className="text-xs text-muted-foreground">
        Progress indicator showing 44% completion
      </p>
    </div>
  )
}
