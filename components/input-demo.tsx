"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// 1. Default Input
export function DefaultInput() {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="h-9 w-[320px]"
    />
  )
}

// 2. File Input
export function FileInput() {
  return (
    <div className="flex flex-col gap-3 w-[320px]">
      <Label htmlFor="picture" className="text-sm font-medium">
        Picture
      </Label>
      <div className="flex items-center h-9 border rounded-md px-3 border-input bg-background">
        <div className="flex flex-col items-center pr-1">
          <div className="flex items-center px-1.5 py-px">
            <label
              htmlFor="picture"
              className="text-sm font-medium cursor-pointer"
            >
              Choose File
            </label>
            <input
              id="picture"
              type="file"
              className="hidden"
            />
          </div>
        </div>
        <span className="text-sm text-muted-foreground">No file chosen</span>
      </div>
    </div>
  )
}

// 3. Disabled Input
export function DisabledInput() {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="h-9 w-[320px]"
      disabled
    />
  )
}

// 4. With Label - Default State
export function WithLabelDefault() {
  return (
    <div className="flex flex-col gap-3 w-[320px]">
      <Label htmlFor="email-label" className="text-sm font-medium">
        Email
      </Label>
      <Input
        id="email-label"
        type="email"
        placeholder="Email"
        className="h-9"
      />
    </div>
  )
}

// 5. With Label - Active State (Focused)
export function WithLabelActive() {
  return (
    <div className="flex flex-col gap-3 w-[320px]">
      <Label htmlFor="email-label-active" className="text-sm font-medium">
        Email
      </Label>
      <Input
        id="email-label-active"
        type="email"
        placeholder="Email"
        className="h-9 ring-2 ring-ring ring-offset-0 border-ring"
      />
    </div>
  )
}

// 6. With Button - Default State
export function WithButtonDefault() {
  return (
    <div className="flex gap-2 items-center">
      <Input
        type="email"
        placeholder="Email"
        className="h-9 w-[320px]"
      />
      <Button variant="outline" className="h-9 shrink-0">
        Subscribe
      </Button>
    </div>
  )
}

// 7. With Button - Active State
export function WithButtonActive() {
  return (
    <div className="flex gap-2 items-center">
      <Button variant="outline" className="h-9 shrink-0">
        Subscribe
      </Button>
      <Input
        type="email"
        placeholder="Email"
        className="h-9 w-[320px] ring-2 ring-ring ring-offset-0 border-ring"
      />
    </div>
  )
}

// 8. Form - Default State
export function FormDefault() {
  return (
    <div className="flex flex-col w-[428px]">
      <div className="flex flex-col gap-2 pb-6">
        <Label htmlFor="username" className="text-sm font-medium">
          Username
        </Label>
        <Input
          id="username"
          defaultValue="shadcn"
          className="h-9"
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name.
        </p>
      </div>
      <Button className="h-9 w-fit">Submit</Button>
    </div>
  )
}

// 9. Form - Active State
export function FormActive() {
  return (
    <div className="flex flex-col w-[428px]">
      <div className="flex flex-col gap-2 pb-6">
        <Label htmlFor="username-active" className="text-sm font-medium">
          Username
        </Label>
        <Input
          id="username-active"
          defaultValue="shadcn"
          className="h-9 ring-2 ring-ring ring-offset-0 border-ring"
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name.
        </p>
      </div>
      <Button className="h-9 w-fit">Submit</Button>
    </div>
  )
}
