"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// 1. Edit Profile Dialog - Button (Closed State)
export function EditProfileButton() {
  return (
    <Button variant="outline" className="h-9">
      Open Dialog
    </Button>
  )
}

// 1. Edit Profile Dialog - Open State (Static Display)
export function EditProfileDialog() {
  return (
    <div className="relative flex items-center justify-center h-[400px] w-full bg-black/30 rounded-lg">
      <div className="bg-background border rounded-lg shadow-lg p-6 w-[423px] flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Edit profile</h2>
          <X className="h-4 w-4 opacity-70" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">
          Make changes to your profile here. Click save when you&apos;re done.
        </p>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">Name</Label>
            <Input value="Pedro Duarte" className="h-9" readOnly />
          </div>

          {/* Username Field */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">Username</Label>
            <Input value="@peduarte" className="h-9" readOnly />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" className="h-9">
            Cancel
          </Button>
          <Button className="h-9">
            Save changes
          </Button>
        </div>
      </div>
    </div>
  )
}

// 2. Share Link Dialog - Button (Closed State)
export function ShareButton() {
  return (
    <Button variant="outline" className="h-9">
      Share
    </Button>
  )
}

// 2. Share Link Dialog - Open State (Static Display)
export function ShareDialog() {
  return (
    <div className="relative flex items-center justify-center h-[400px] w-full bg-black/30 rounded-lg">
      <div className="bg-background border rounded-lg shadow-lg p-6 w-[423px] flex flex-col gap-4 items-end">
        {/* Header and Description */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Share link</h2>
            <X className="h-4 w-4 opacity-70" />
          </div>
          <p className="text-sm text-muted-foreground">
            Anyone who has this link will be able to view this.
          </p>
        </div>

        {/* URL Input */}
        <Input
          value="https://ui.shadcn.com/docs/installation"
          className="h-9 w-full"
          readOnly
        />

        {/* Close Button */}
        <Button variant="secondary" className="h-9">
          Close
        </Button>
      </div>
    </div>
  )
}
