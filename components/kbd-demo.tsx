"use client"

import { Search } from "lucide-react"
import { Kbd } from "@/components/ui/kbd"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// 1. Mac Symbol Keys
export function MacSymbolKeys() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Mac Symbol Keys</h3>
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </div>
      <p className="text-xs text-muted-foreground">
        Command, Shift, Option, Control symbols
      </p>
    </div>
  )
}

// 2. Text Keys (Windows/Standard)
export function TextKeys() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Text Keys</h3>
      <div className="flex items-center gap-1 flex-wrap">
        <Kbd>Ctrl</Kbd>
        <Kbd>Esc</Kbd>
        <Kbd>A</Kbd>
        <Kbd>B</Kbd>
        <Kbd>⏎</Kbd>
        <Kbd>Tab</Kbd>
        <Kbd>Alt</Kbd>
      </div>
      <p className="text-xs text-muted-foreground">
        Standard keyboard keys with text labels
      </p>
    </div>
  )
}

// 3. Key Combinations with Separator
export function KeyCombinationsWithSeparator() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Key Combinations (Separated)</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <Kbd keys={["Ctrl", "B"]} />
        </div>
        <div className="flex items-center gap-1">
          <Kbd keys={["Ctrl", "K"]} />
        </div>
        <div className="flex items-center gap-1">
          <Kbd keys={["⌘", "K"]} />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Multiple keys with + separator
      </p>
    </div>
  )
}

// 4. Key Combinations Inline
export function KeyCombinationsInline() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Key Combinations (Inline)</h3>
      <div className="flex flex-col gap-2">
        <Kbd>Ctrl + B</Kbd>
        <Kbd>Ctrl + K</Kbd>
        <Kbd>⌘K</Kbd>
      </div>
      <p className="text-xs text-muted-foreground">
        Shortcuts as single kbd element
      </p>
    </div>
  )
}

// 5. Inline Text with Kbd
export function InlineTextWithKbd() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Inline Text with Kbd</h3>
      <p className="text-sm">
        Use{" "}
        <Kbd>Ctrl + B</Kbd>{" "}
        <Kbd>Ctrl + K</Kbd>{" "}
        to open the command palette
      </p>
      <p className="text-sm">
        Press{" "}
        <Kbd>Esc</Kbd>{" "}
        to close or{" "}
        <Kbd>⏎</Kbd>{" "}
        to confirm
      </p>
    </div>
  )
}

// 6. Buttons with Kbd
export function ButtonsWithKbd() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Buttons with Kbd</h3>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Accept
          <Kbd className="ml-2">⏎</Kbd>
        </Button>
        <Button variant="outline" size="sm">
          Cancel
          <Kbd className="ml-2">Esc</Kbd>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="default" size="sm">
          Save
          <Kbd className="ml-2 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            ⌘S
          </Kbd>
        </Button>
        <Button variant="secondary" size="sm">
          Search
          <Kbd className="ml-2">⌘K</Kbd>
        </Button>
      </div>
    </div>
  )
}

// 7. Tooltip with Kbd
export function TooltipWithKbd() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Tooltip with Kbd</h3>
      <div className="relative">
        <Button variant="outline">Hover me</Button>
        <div className="absolute top-full left-0 mt-2 px-3 py-2 bg-popover text-popover-foreground rounded-md border border-border shadow-md z-50">
          <div className="flex items-center gap-2 text-xs">
            <span>Save Changes</span>
            <Kbd className="bg-background">S</Kbd>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground pt-12">
        Tooltips showing keyboard shortcuts
      </p>
    </div>
  )
}

// 8. Input Field with Kbd
export function InputFieldWithKbd() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Input Field with Kbd</h3>
      <div className="relative">
        <div className="flex items-center border border-border rounded-md h-9 overflow-hidden bg-background">
          <div className="flex items-center pl-3 py-1.5">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            placeholder="Search..."
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-full"
          />
          <div className="flex items-center gap-1 pr-3 py-1.5">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Search inputs with shortcut indicators
      </p>
    </div>
  )
}

// 9. All Symbol Keys
export function AllSymbolKeys() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Common Symbol Keys</h3>
      <div className="flex items-center gap-1 flex-wrap">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
        <Kbd>⏎</Kbd>
        <Kbd>⌫</Kbd>
        <Kbd>⌦</Kbd>
        <Kbd>⇥</Kbd>
        <Kbd>⎋</Kbd>
      </div>
      <p className="text-xs text-muted-foreground">
        Arrow keys and special characters
      </p>
    </div>
  )
}

// 10. Multiple Shortcut Examples
export function MultipleShortcutExamples() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Common Shortcuts</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span>Copy</span>
          <Kbd keys={["Ctrl", "C"]} />
        </div>
        <div className="flex items-center justify-between">
          <span>Paste</span>
          <Kbd keys={["Ctrl", "V"]} />
        </div>
        <div className="flex items-center justify-between">
          <span>Undo</span>
          <Kbd keys={["Ctrl", "Z"]} />
        </div>
        <div className="flex items-center justify-between">
          <span>Redo</span>
          <Kbd keys={["Ctrl", "Shift", "Z"]} />
        </div>
        <div className="flex items-center justify-between">
          <span>Select All</span>
          <Kbd keys={["Ctrl", "A"]} />
        </div>
      </div>
    </div>
  )
}
