"use client"

import { Check, ChevronsUpDown, Search, MoreHorizontal, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// Framework Combobox - Closed State (Static)
export function FrameworkComboboxClosed() {
  return (
    <Button
      variant="outline"
      className="w-[200px] justify-between h-9 font-medium"
    >
      Select framework...
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  )
}

// Framework Combobox - Open State (Static)
export function FrameworkComboboxOpen() {
  const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

  return (
    <div className="flex flex-col gap-1 w-[200px]">
      <Button
        variant="outline"
        className="w-full justify-between h-9 font-medium"
      >
        Next.js
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
      <div className="border rounded-md shadow-md bg-popover">
        <div className="flex items-center border-b px-3">
          <Search className="h-4 w-4 shrink-0 opacity-50" />
          <input
            placeholder="Search framework..."
            className="flex h-9 w-full bg-transparent py-2 px-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            disabled
          />
        </div>
        <div className="p-1">
          <div className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm bg-accent">
            <Check className="h-4 w-4" />
            Next.js
          </div>
          {frameworks.slice(1).map((framework) => (
            <div
              key={framework}
              className="flex items-center px-2 py-1.5 text-sm rounded-sm"
            >
              {framework}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Status Popover - Closed State (Static)
export function StatusPopoverClosed() {
  return (
    <div className="flex items-center gap-4">
      <Label className="text-sm text-muted-foreground">Status</Label>
      <Button variant="outline" className="w-[150px] h-9 font-medium">
        + Set status
      </Button>
    </div>
  )
}

// Status Popover - Open State (Static)
export function StatusPopoverOpen() {
  const statuses = ["Backlog", "Todo", "In Progress", "Done", "Canceled"]

  return (
    <div className="flex items-start gap-1">
      <div className="flex items-center gap-4">
        <Label className="text-sm text-muted-foreground">Status</Label>
        <Button variant="outline" className="w-[150px] h-9 font-medium">
          + Set status
        </Button>
      </div>
      <div className="border rounded-md shadow-md bg-popover w-[198px]">
        <div className="flex items-center border-b px-3">
          <Search className="h-4 w-4 shrink-0 opacity-50" />
          <input
            placeholder="Change status..."
            className="flex h-9 w-full bg-transparent py-2 px-2 text-sm outline-none placeholder:text-muted-foreground"
            disabled
          />
        </div>
        <div className="p-1">
          <div className="px-2 py-1.5 text-sm rounded-sm bg-accent">
            Backlog
          </div>
          {statuses.slice(1).map((status) => (
            <div
              key={status}
              className="px-2 py-1.5 text-sm rounded-sm"
            >
              {status}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Language Form - Closed State (Static)
export function LanguageFormClosed() {
  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <div className="flex flex-col gap-2">
        <Label className="text-sm font-medium">Language</Label>
        <Button
          variant="outline"
          className="w-[200px] justify-between h-9 font-medium"
        >
          Select framework...
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
        <p className="text-sm text-muted-foreground w-[360px]">
          This is the language that will be used in the dashboard.
        </p>
      </div>
      <Button className="h-9 w-fit">Submit</Button>
    </div>
  )
}

// Language Form - Open State (Static)
export function LanguageFormOpen() {
  const languages = [
    "English",
    "French",
    "German",
    "Spanish",
    "Portuguese",
    "Russian",
    "Japanese",
    "Korean",
    "Chinese",
  ]

  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <div className="flex flex-col gap-1">
        <Label className="text-sm font-medium mb-1">Language</Label>
        <div className="flex flex-col gap-1 w-[200px]">
          <Button
            variant="outline"
            className="w-full justify-between h-9 font-medium"
          >
            Select framework...
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
          <div className="border rounded-md shadow-md bg-popover">
            <div className="flex items-center border-b px-3">
              <Search className="h-4 w-4 shrink-0 opacity-50" />
              <input
                placeholder="Search language..."
                className="flex h-9 w-full bg-transparent py-2 px-2 text-sm outline-none placeholder:text-muted-foreground"
                disabled
              />
            </div>
            <div className="p-1 max-h-[200px] overflow-y-auto">
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm bg-accent">
                <Check className="h-4 w-4" />
                English
              </div>
              {languages.slice(1).map((language) => (
                <div
                  key={language}
                  className="px-2 py-1.5 text-sm rounded-sm"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground w-[360px] mt-1">
          This is the language that will be used in the dashboard.
        </p>
      </div>
      <Button className="h-9 w-fit">Submit</Button>
    </div>
  )
}

// Dropdown Menu - Closed State (Static)
export function DropdownMenuClosed() {
  return (
    <div className="flex items-center justify-between border rounded-md px-4 py-3 w-full max-w-2xl bg-background">
      <div className="flex items-center gap-2">
        <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
          feature
        </Badge>
        <span className="text-sm text-muted-foreground">Create a new project</span>
      </div>
      <Button variant="ghost" size="sm" className="h-8 w-9 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  )
}

// Dropdown Menu - Open State (Static)
export function DropdownMenuOpen() {
  return (
    <div className="flex items-start gap-1 w-full max-w-2xl">
      <div className="flex items-center justify-between border rounded-md px-4 py-3 flex-1 bg-background">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
            feature
          </Badge>
          <span className="text-sm text-muted-foreground">Create a new project</span>
        </div>
        <Button variant="ghost" size="sm" className="h-8 w-9 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <div className="border rounded-md shadow-md bg-popover w-[198px]">
        <div className="p-1 pt-1">
          <div className="px-2 py-1.5 text-sm">
            Actions
          </div>
          <div className="px-2 py-1.5 text-sm">
            Assign to...
          </div>
          <div className="px-2 py-1.5 text-sm">
            Set due date...
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="p-1">
          <div className="flex items-center justify-between px-2 py-1.5 text-sm">
            <span>Apply label</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="p-1 pb-1">
          <div className="flex items-center justify-between px-2 py-1.5 text-sm text-destructive">
            <span>Delete</span>
            <div className="flex items-center gap-0.5 opacity-60">
              <span className="text-xs">⌘</span>
              <span className="text-xs">⌫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
