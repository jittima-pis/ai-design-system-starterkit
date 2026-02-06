"use client"

import { Search, Info, Link2, Plus, ArrowUp, RefreshCcw, Copy, CornerDownLeft, Check, CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

// InputGroup Type 1: Search with Results
export function SearchInputGroup() {
  return (
    <div className="bg-background border border-border rounded-md shadow-sm w-[344px] h-9 flex items-center">
      <div className="flex items-center pl-3 py-1.5 shrink-0">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex flex-1 items-center px-2 py-1 min-w-0">
        <p className="text-sm text-muted-foreground">Search...</p>
      </div>
      <div className="flex items-center justify-end pr-3 py-1.5 shrink-0">
        <p className="text-sm font-medium text-muted-foreground">12 results</p>
      </div>
    </div>
  )
}

// InputGroup Type 2: URL with Info Icon
export function UrlInputGroup() {
  return (
    <div className="bg-background border border-border rounded-md shadow-sm w-[344px] h-9 flex items-center">
      <div className="flex items-center pl-3 py-1.5 shrink-0">
        <p className="text-sm font-medium text-muted-foreground">https://</p>
      </div>
      <div className="flex flex-1 items-center px-2 py-1 min-w-0">
        <p className="text-sm text-muted-foreground">example.com</p>
      </div>
      <div className="flex items-center justify-end pr-3 py-1.5 shrink-0">
        <Info className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}

// InputGroup Type 3: Chat Interface
export function ChatInputGroup() {
  return (
    <div className="bg-background border border-border rounded-md shadow-sm w-[344px] flex flex-col items-start">
      <div className="flex items-start p-3 w-full h-16">
        <div className="flex flex-1 items-center min-w-0">
          <p className="text-base text-muted-foreground">Ask, Search or Chat...</p>
        </div>
      </div>
      <div className="flex gap-2 items-center px-3 pb-3 pt-1.5 w-full">
        <div className="bg-background border border-border rounded-full size-6 flex items-center justify-center shrink-0">
          <Plus className="h-4 w-4" />
        </div>
        <div className="flex items-center h-6 p-2 shrink-0">
          <p className="text-base font-medium text-muted-foreground">Auto</p>
        </div>
        <div className="flex flex-1 items-center justify-end h-6 min-w-0">
          <p className="text-base font-medium text-muted-foreground">52% used</p>
        </div>
        <div className="h-4 w-0 flex items-center justify-center shrink-0">
          <div className="rotate-90">
            <div className="h-0 w-4 relative">
              <div className="absolute inset-[-1px_0_0_0]">
                <div className="border-t border-border w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-full size-6 flex items-center justify-center shrink-0 shadow-sm">
          <ArrowUp className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
      </div>
    </div>
  )
}

// InputGroup Type 4: Username with Check
export function UsernameInputGroup() {
  return (
    <div className="bg-background border border-border rounded-md shadow-sm w-[344px] h-9 flex items-center">
      <div className="flex flex-1 items-center pl-3 pr-2 py-1 min-w-0">
        <p className="text-sm text-muted-foreground">@shadcn</p>
      </div>
      <div className="flex items-center justify-end pr-3 py-1.5 shrink-0">
        <CircleCheck className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}

// Textarea1: Code Editor
export function CodeEditorTextarea() {
  return (
    <div className="bg-card border border-border rounded-md shadow-sm h-[296px] flex flex-col w-[448px]">
      {/* Header */}
      <div className="flex gap-2 items-center p-3 border-b">
        <div className="flex gap-2 items-center shrink-0">
          <div className="size-4 relative">
            <svg viewBox="0 0 16 16" fill="none" className="size-full">
              <rect x="2.67" y="2.33" width="10.67" height="11.33" rx="1" fill="#F7DF1E" />
              <path d="M5.33 8h1.34v2.67c0 .36-.3.66-.67.66s-.67-.3-.67-.66V8z" fill="#000" />
              <path d="M8 8h1.33c.37 0 .67.3.67.67s-.3.67-.67.67H8v1.33h1.33c.37 0 .67.3.67.67s-.3.66-.67.66H8V8z" fill="#000" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">script.js</p>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button className="rounded-full size-6 flex items-center justify-center hover:bg-muted">
            <RefreshCcw className="h-4 w-4" />
          </button>
        </div>
        <button className="rounded-full size-6 flex items-center justify-center hover:bg-muted">
          <Copy className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex items-start p-3 h-[200px]">
        <p className="text-base text-muted-foreground">{`console.log('Hello, world!');`}</p>
      </div>

      {/* Footer */}
      <div className="flex gap-2 items-center p-3 border-t">
        <p className="text-sm text-muted-foreground">Line 1, Column 1</p>
        <div className="flex-1 flex flex-col items-end justify-center">
          <Button className="h-6 gap-1.5 px-2.5 py-2">
            <span className="text-sm font-medium">Run</span>
            <CornerDownLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Label: Email Input with Info
export function LabelComponent() {
  return (
    <div className="flex flex-col gap-4 w-[384px]">
      {/* Simple @ input */}
      <div className="bg-background border border-border rounded-md shadow-sm h-9 flex items-center">
        <div className="flex items-center pl-3 py-1.5 shrink-0">
          <p className="text-sm text-muted-foreground">@</p>
        </div>
        <div className="flex flex-1 items-center pl-2 pr-3 py-1">
          <p className="text-sm text-muted-foreground">shadcn</p>
        </div>
      </div>

      {/* Email card */}
      <div className="bg-background border border-border rounded-md shadow-sm flex flex-col">
        <div className="flex gap-2 items-center px-3 pt-2.5 pb-1.5">
          <div className="flex items-center justify-center">
            <p className="text-sm font-medium">Email</p>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="size-6 flex items-center justify-center">
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center px-3 pt-1 pb-3">
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground">shadcn@vercel.com</p>
          </div>
          <div className="h-6 w-px" />
        </div>
      </div>
    </div>
  )
}

// ButtonGroup: URL Builder
export function ButtonGroupComponent() {
  return (
    <div className="bg-background border border-border rounded-md overflow-hidden h-9 flex items-center shadow-sm">
      <div className="bg-muted border-r border-border h-9 flex items-center px-4 shrink-0">
        <p className="text-sm font-medium">https://</p>
      </div>
      <div className="flex items-center shrink-0">
        <div className="h-9 w-[190px]" />
        <div className="flex items-center justify-end pr-3 py-1.5 shrink-0">
          <Link2 className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="bg-muted border-l border-border h-9 flex items-center px-4 shrink-0">
        <p className="text-sm">.com</p>
      </div>
    </div>
  )
}

// Textarea: Simple Textarea with Submit
export function TextareaComponent() {
  return (
    <div className="bg-background border border-border rounded-md shadow-sm h-[114px] flex flex-col overflow-hidden w-[384px]">
      <div className="flex items-start px-3 py-2.5 h-16">
        <p className="flex-1 text-sm text-muted-foreground">Autoresize textarea...</p>
      </div>
      <div className="flex items-center px-3 pt-1.5 pb-3">
        <div className="flex-1 flex flex-col items-end justify-center">
          <Button className="h-8 gap-0 px-2.5 py-2">
            <span className="text-sm font-medium">Submit</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
