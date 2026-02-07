"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// 1. Basic Radio Group - Default, Comfortable, Compact
export function RadioGroupBasic() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Radio Group</h3>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="default" />
          <Label htmlFor="default" className="font-normal">
            Default
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="comfortable" />
          <Label htmlFor="comfortable" className="font-normal">
            Comfortable
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="compact" />
          <Label htmlFor="compact" className="font-normal">
            Compact
          </Label>
        </div>
      </RadioGroup>
      <p className="text-xs text-muted-foreground">
        A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
      </p>
    </div>
  )
}

// 2. Form with Radio Group - Notify me about...
export function RadioGroupForm() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Form with Radio Group</h3>
      <form className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base">Notify me about...</Label>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="font-normal">
                All new messages
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mentions" id="mentions" />
              <Label htmlFor="mentions" className="font-normal">
                Direct messages and mentions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nothing" id="nothing" />
              <Label htmlFor="nothing" className="font-normal">
                Nothing
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <p className="text-xs text-muted-foreground">
        Form example with radio group selection and submit button
      </p>
    </div>
  )
}
