"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

// 1. Basic Switch - Airplane mode
export function SwitchBasic() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Switch</h3>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane mode</Label>
      </div>
      <p className="text-xs text-muted-foreground">
        Basic switch with Airplane mode label
      </p>
    </div>
  )
}

// 2. Form with Switches - Email Notifications
export function SwitchForm() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Form</h3>
      <form className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="marketing" className="flex flex-col space-y-1">
                <span>Marketing emails</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Receive emails about new products, features, and more.
                </span>
              </Label>
              <Switch id="marketing" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="security" className="flex flex-col space-y-1">
                <span>Security emails</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Receive emails about your account security.
                </span>
              </Label>
              <Switch id="security" />
            </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <p className="text-xs text-muted-foreground">
        Form with email notification switches and descriptions
      </p>
    </div>
  )
}
