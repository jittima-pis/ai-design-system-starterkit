"use client"

import { Check, ChevronRight } from "lucide-react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

// Context Menu - Closed State (Static)
export function ContextMenuClosed() {
  return (
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm font-medium">
      Right click here
    </div>
  )
}

// Context Menu - Open State (Static Display)
export function ContextMenuOpen() {
  return (
    <div className="flex h-[150px] w-[300px] items-start gap-0.5">
      <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed text-sm font-medium">
        Right click here
      </div>
      <div className="w-[208px] rounded-md border bg-popover p-1 shadow-md">
        <div className="space-y-0">
          {/* Back, Forward, Reload, More Tools */}
          <div className="py-1">
            <div className="flex items-center justify-between rounded px-2 py-1.5 pl-8 text-sm">
              <span>Back</span>
              <span className="text-xs text-muted-foreground">⌘[</span>
            </div>
            <div className="flex items-center justify-between rounded px-2 py-1.5 pl-8 text-sm opacity-50">
              <span>Forward</span>
              <span className="text-xs text-muted-foreground">⌘]</span>
            </div>
            <div className="flex items-center justify-between rounded px-2 py-1.5 pl-8 text-sm">
              <span>Reload</span>
              <span className="text-xs text-muted-foreground">⌘R</span>
            </div>
            <div className="flex items-center justify-between rounded px-2 py-1.5 pl-8 text-sm">
              <span>More Tools</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Show Bookmarks Bar & Show Full URLs */}
          <div className="py-1">
            <div className="flex items-center rounded px-2 py-1.5 text-sm">
              <Check className="mr-2 h-4 w-4" />
              <span>Show Bookmarks Bar</span>
            </div>
            <div className="flex items-center rounded px-2 py-1.5 pl-8 text-sm">
              <span>Show Full URLs</span>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* People Header */}
          <div className="px-2 py-1.5 pl-8 text-sm font-semibold">
            People
          </div>

          <div className="h-px bg-border" />

          {/* Pedro Duarte & Colm Tuite */}
          <div className="py-1">
            <div className="flex items-center rounded px-2 py-1.5 text-sm">
              <div className="mr-2 flex h-4 w-4 items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-foreground" />
              </div>
              <span>Pedro Duarte</span>
            </div>
            <div className="flex items-center rounded px-2 py-1.5 pl-8 text-sm">
              <span>Colm Tuite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Interactive Context Menu Demo
export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>People</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
