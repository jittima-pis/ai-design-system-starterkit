"use client"

import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// 1. Move Goal Drawer - Button (Closed State)
export function MoveGoalButton() {
  return (
    <Button variant="outline" className="h-9">
      Open Drawer
    </Button>
  )
}

// 1. Move Goal Drawer - Open State (Static Display)
export function MoveGoalDrawer() {
  return (
    <div className="relative flex items-end justify-center h-[500px] w-full bg-black/30 rounded-lg">
      <div className="bg-background border-t rounded-t-[10px] shadow-lg w-full max-w-md flex flex-col">
        {/* Drag Handle */}
        <div className="flex items-center justify-center pt-4 pb-2">
          <div className="w-[100px] h-[4px] bg-muted rounded-full" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Move Goal</h2>
            <p className="text-sm text-muted-foreground">
              Set your daily activity goal.
            </p>
          </div>

          {/* Goal Display */}
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="flex flex-col items-center gap-2">
              <div className="text-7xl font-bold">350</div>
              <div className="text-xs text-muted-foreground tracking-wide">
                CALORIES/DAY
              </div>
            </div>

            {/* Plus/Minus Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="flex items-end justify-between gap-2 h-[100px] px-4">
            {[
              { label: "M", height: "50%", active: false },
              { label: "T", height: "70%", active: false },
              { label: "W", height: "85%", active: true },
              { label: "T", height: "40%", active: false },
              { label: "F", height: "60%", active: false },
              { label: "S", height: "75%", active: false },
              { label: "S", height: "55%", active: false },
            ].map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full bg-muted rounded-t flex items-end" style={{ height: day.height }}>
                  <div
                    className={`w-full rounded-t transition-all ${
                      day.active ? "bg-primary" : "bg-muted-foreground/20"
                    }`}
                    style={{ height: "100%" }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{day.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 h-9">
              Cancel
            </Button>
            <Button className="flex-1 h-9">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// 2. Edit Profile Drawer - Button (Closed State)
export function EditProfileDrawerButton() {
  return (
    <Button variant="outline" className="h-9">
      Edit Profile
    </Button>
  )
}

// 2. Edit Profile Drawer - Open State (Static Display)
export function EditProfileDrawer() {
  return (
    <div className="relative flex items-end justify-center h-[450px] w-full bg-black/30 rounded-lg">
      <div className="bg-background border-t rounded-t-[10px] shadow-lg w-full max-w-md flex flex-col">
        {/* Drag Handle */}
        <div className="flex items-center justify-center pt-4 pb-2">
          <div className="w-[100px] h-[4px] bg-muted rounded-full" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
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

          {/* Action Button */}
          <div className="flex justify-end pt-2">
            <Button className="h-9">Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
