"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

// Aspect Ratio - Simple 16:9 example
export function AspectRatioDemo() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Aspect Ratio</h3>
      <div className="w-full max-w-md">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <p className="text-xs text-muted-foreground">
        Image displayed in 16:9 aspect ratio
      </p>
    </div>
  )
}
