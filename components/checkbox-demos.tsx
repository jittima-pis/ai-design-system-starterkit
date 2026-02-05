"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Default Checkbox
export function DefaultCheckbox() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
      >
        Accept terms and conditions
      </Label>
    </div>
  )
}

// Checkbox with Subtext
export function CheckboxWithSubtext() {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id="terms-subtext" className="mt-0.5" />
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="terms-subtext"
          className="text-sm font-medium leading-none"
        >
          Accept terms and conditions
        </Label>
        <p className="text-sm text-muted-foreground leading-5">
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
  )
}

// Disabled Checkbox
export function DisabledCheckbox() {
  return (
    <div className="flex items-center gap-3 opacity-50">
      <Checkbox id="disabled" disabled />
      <Label
        htmlFor="disabled"
        className="text-sm font-medium leading-none"
      >
        Enable notifications
      </Label>
    </div>
  )
}

// Checkbox Card Component
export function CheckboxCard({
  checked = false,
  onCheckedChange,
}: {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border p-3 transition-colors",
        checked
          ? "border-primary bg-accent"
          : "border-border bg-background"
      )}
    >
      <Checkbox
        id="notifications-card"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-0.5"
      />
      <div className="flex flex-1 flex-col gap-2">
        <Label
          htmlFor="notifications-card"
          className="text-sm font-medium leading-5"
        >
          Enable notifications
        </Label>
        <p className="text-sm text-muted-foreground leading-5">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </div>
  )
}

// Checkbox Cards Demo (showing both states)
export function CheckboxCardsDemo() {
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(true)

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <CheckboxCard checked={checked1} onCheckedChange={setChecked1} />
      <CheckboxCard checked={checked2} onCheckedChange={setChecked2} />
    </div>
  )
}

// Sidebar Form with Multiple Checkboxes
export function SidebarForm() {
  const [items, setItems] = React.useState({
    recents: false,
    home: false,
    applications: true,
    desktop: false,
    downloads: true,
    documents: false,
  })

  return (
    <div className="flex flex-col w-full max-w-sm">
      <div className="flex flex-col gap-2 pb-8">
        <div className="flex flex-col pb-4">
          <h3 className="text-base font-medium">Sidebar</h3>
          <p className="text-sm text-muted-foreground leading-5">
            Select the items you want to display in the sidebar.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="recents"
              checked={items.recents}
              onCheckedChange={(checked) =>
                setItems({ ...items, recents: checked as boolean })
              }
            />
            <Label htmlFor="recents" className="text-sm font-medium leading-5">
              Recents
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="home"
              checked={items.home}
              onCheckedChange={(checked) =>
                setItems({ ...items, home: checked as boolean })
              }
            />
            <Label htmlFor="home" className="text-sm font-medium leading-5">
              Home
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="applications"
              checked={items.applications}
              onCheckedChange={(checked) =>
                setItems({ ...items, applications: checked as boolean })
              }
            />
            <Label
              htmlFor="applications"
              className="text-sm font-medium leading-5"
            >
              Applications
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="desktop"
              checked={items.desktop}
              onCheckedChange={(checked) =>
                setItems({ ...items, desktop: checked as boolean })
              }
            />
            <Label htmlFor="desktop" className="text-sm font-medium leading-5">
              Desktop
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="downloads"
              checked={items.downloads}
              onCheckedChange={(checked) =>
                setItems({ ...items, downloads: checked as boolean })
              }
            />
            <Label
              htmlFor="downloads"
              className="text-sm font-medium leading-5"
            >
              Downloads
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="documents"
              checked={items.documents}
              onCheckedChange={(checked) =>
                setItems({ ...items, documents: checked as boolean })
              }
            />
            <Label
              htmlFor="documents"
              className="text-sm font-medium leading-5"
            >
              Documents
            </Label>
          </div>
        </div>
      </div>

      <Button className="h-9">Submit</Button>
    </div>
  )
}
