"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

// 1. Basic Spinner - Processing payment
export function SpinnerBasic() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Spinner</h3>
      <div className="flex items-center justify-between border rounded-lg p-4 w-80">
        <div className="flex items-center gap-3">
          <Spinner size={16} />
          <span className="text-sm">Processing payment...</span>
        </div>
        <span className="text-sm font-medium">$100.00</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Spinner with payment processing message
      </p>
    </div>
  )
}

// 2. Loader Icon
export function SpinnerLoader() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Loader</h3>
      <div>
        <Spinner size={16} />
      </div>
      <p className="text-xs text-muted-foreground">
        Basic loader icon (16px)
      </p>
    </div>
  )
}

// 3. Size Variations
export function SpinnerSizes() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Size</h3>
      <div className="flex items-center gap-4">
        <Spinner size={12} />
        <Spinner size={16} />
        <Spinner size={24} />
        <Spinner size={32} />
      </div>
      <p className="text-xs text-muted-foreground">
        Spinner sizes: 12px, 16px, 24px, 32px
      </p>
    </div>
  )
}

// 4. Color Variations
export function SpinnerColors() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Color</h3>
      <div className="flex items-center gap-4">
        <Spinner size={16} className="text-red-500" />
        <Spinner size={16} className="text-green-500" />
        <Spinner size={16} className="text-blue-500" />
        <Spinner size={16} className="text-yellow-500" />
      </div>
      <p className="text-xs text-muted-foreground">
        Spinner colors: Red, Green, Blue, Yellow
      </p>
    </div>
  )
}

// 5. Button with Spinner
export function SpinnerButton() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Button</h3>
      <div className="flex flex-col gap-2">
        <Button disabled>
          <Spinner size={16} className="mr-2" />
          Loading...
        </Button>
        <Button variant="outline" disabled>
          <Spinner size={16} className="mr-2" />
          Loading...
        </Button>
        <Button variant="secondary" disabled>
          <Spinner size={16} className="mr-2" />
          Loading...
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Spinner in buttons: Default, Outline, Secondary
      </p>
    </div>
  )
}

// 6. Badge with Spinner
export function SpinnerBadge() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Badge</h3>
      <div className="flex items-center gap-2">
        <Badge>
          <Spinner size={12} className="mr-1.5" />
          Syncing
        </Badge>
        <Badge variant="secondary">
          <Spinner size={12} className="mr-1.5" />
          Updating
        </Badge>
        <Badge variant="outline">
          <Spinner size={12} className="mr-1.5" />
          Processing
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground">
        Spinner in badges: Syncing, Updating, Processing
      </p>
    </div>
  )
}

// 7. Input Group with Spinner
export function SpinnerInputGroup() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Input Group</h3>
      <div className="flex flex-col gap-2 max-w-md">
        <div className="relative">
          <Input placeholder="Send a message..." className="pr-10" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Spinner size={16} />
          </div>
        </div>
        <div className="relative">
          <Input placeholder="Send a message..." className="pr-10" disabled />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Spinner size={16} />
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Spinner in input fields with loading state
      </p>
    </div>
  )
}

// 8. Empty State with Spinner
export function SpinnerEmpty() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Empty State</h3>
      <div className="border rounded-lg p-8 flex flex-col items-center justify-center gap-4 max-w-lg">
        <Spinner size={32} />
        <div className="text-center space-y-2">
          <h4 className="text-base font-semibold">Processing your request</h4>
          <p className="text-sm text-muted-foreground">
            Please wait while we process your request. Do not refresh the page.
          </p>
        </div>
        <Button variant="outline">Cancel</Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Empty state with spinner, message, and cancel action
      </p>
    </div>
  )
}

// 9. Download Item with Spinner
export function SpinnerItem() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Item</h3>
      <div className="border rounded-lg p-4 flex items-center gap-4 max-w-md">
        <Spinner size={24} />
        <div className="flex-1 space-y-1">
          <div className="text-sm font-medium">Downloading...</div>
          <div className="text-xs text-muted-foreground">129 MB / 1000 MB</div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[13%]" />
          </div>
        </div>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Download progress item with spinner and progress bar
      </p>
    </div>
  )
}
