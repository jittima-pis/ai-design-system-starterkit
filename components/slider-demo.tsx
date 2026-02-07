"use client"

import { Slider } from "@/components/ui/slider"

// Slider from Figma - Basic slider at ~33% position
export function SliderDemo() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Slider</h3>
      <div className="w-full max-w-md">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <p className="text-xs text-muted-foreground">
        A slider component for selecting a value from a range
      </p>
    </div>
  )
}
