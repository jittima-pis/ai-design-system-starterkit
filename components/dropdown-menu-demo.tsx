"use client"

import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// 1. Main Dropdown Menu - Button (Closed State)
export function DropdownMenuButton() {
  return (
    <Button variant="outline" className="h-9">
      Open
    </Button>
  )
}

// 1. Main Dropdown Menu - Open State (Static Display)
export function DropdownMenuOpen() {
  return (
    <div className="flex flex-col gap-1">
      <Button variant="outline" className="h-9 w-fit">
        Open
      </Button>
      <div className="bg-popover border rounded-md shadow-md w-[224px] flex flex-col">
        {/* My account section */}
        <div className="flex flex-col pt-1 px-1">
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm font-medium">My account</p>
          </div>
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Profile</p>
            <span className="text-xs text-muted-foreground">⇧⌘P</span>
          </div>
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Billing</p>
            <span className="text-xs text-muted-foreground">⌘B</span>
          </div>
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Settings</p>
            <span className="text-xs text-muted-foreground">⌘S</span>
          </div>
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Keyboard shortcuts</p>
            <span className="text-xs text-muted-foreground">⌘K</span>
          </div>
        </div>

        <Separator className="my-1" />

        {/* Team section */}
        <div className="flex flex-col px-1">
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Team</p>
          </div>
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Invite Users</p>
            <ChevronRight className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">New Team</p>
            <span className="text-xs text-muted-foreground">⌘+T</span>
          </div>
        </div>

        <Separator className="my-1" />

        {/* Links section */}
        <div className="flex flex-col px-1">
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Github</p>
          </div>
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Support</p>
          </div>
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm opacity-50">
            <p className="text-sm">API</p>
          </div>
        </div>

        <Separator className="my-1" />

        {/* Logout section */}
        <div className="flex flex-col pb-1 px-1">
          <div className="flex items-center justify-between h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm">Log out</p>
            <span className="text-xs text-muted-foreground">⇧⌘Q</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 2. Checkboxes Menu - Button (Closed State)
export function CheckboxMenuButton() {
  return (
    <Button variant="outline" className="h-9">
      Open
    </Button>
  )
}

// 2. Checkboxes Menu - Open State (Static Display)
export function CheckboxMenuOpen() {
  return (
    <div className="flex flex-col gap-1">
      <Button variant="outline" className="h-9 w-fit">
        Open
      </Button>
      <div className="bg-popover border rounded-md shadow-md w-[224px] flex flex-col">
        {/* Header */}
        <div className="flex flex-col pt-1 px-1">
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm font-medium">Appearance</p>
          </div>
        </div>

        <Separator className="my-1" />

        {/* Checkbox items */}
        <div className="flex flex-col pb-1 px-1">
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <div className="flex items-center justify-center w-4 h-4 mr-2">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-sm">Status Bar</p>
          </div>
          <div className="flex items-center h-8 pl-8 pr-2 py-1.5 rounded-sm opacity-50">
            <p className="text-sm">Activity Bar</p>
          </div>
          <div className="flex items-center h-8 pl-8 pr-2 py-1.5 rounded-sm">
            <p className="text-sm">Panel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 3. Radio Group Menu - Button (Closed State)
export function RadioMenuButton() {
  return (
    <Button variant="outline" className="h-9">
      Open
    </Button>
  )
}

// 3. Radio Group Menu - Open State (Static Display)
export function RadioMenuOpen() {
  return (
    <div className="flex flex-col gap-1">
      <Button variant="outline" className="h-9 w-fit">
        Open
      </Button>
      <div className="bg-popover border rounded-md shadow-md w-[224px] flex flex-col">
        {/* Header */}
        <div className="flex flex-col pt-1 px-1">
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <p className="text-sm font-medium">Panel Position</p>
          </div>
        </div>

        <Separator className="my-1" />

        {/* Radio items */}
        <div className="flex flex-col pb-1 px-1">
          <div className="flex items-center h-8 pl-8 pr-2 py-1.5 rounded-sm">
            <p className="text-sm">Top</p>
          </div>
          <div className="flex items-center h-8 px-2 py-1.5 rounded-sm">
            <div className="flex items-center justify-center w-[14px] h-[14px] mr-2">
              <div className="bg-foreground rounded-full w-2 h-2" />
            </div>
            <p className="text-sm">Bottom</p>
          </div>
          <div className="flex items-center h-8 pl-8 pr-2 py-1.5 rounded-sm">
            <p className="text-sm">Right</p>
          </div>
        </div>
      </div>
    </div>
  )
}
