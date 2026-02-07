"use client"

import { Skeleton } from "@/components/ui/skeleton"

// 1. Basic Skeleton - Circle + Text Lines
export function SkeletonBasic() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Skeleton</h3>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Basic skeleton with circle avatar and text lines
      </p>
    </div>
  )
}

// 2. Card Skeleton - Image Area + Text Lines
export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Card Skeleton</h3>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Card skeleton with image placeholder and text lines
      </p>
    </div>
  )
}
