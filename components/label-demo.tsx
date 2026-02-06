"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// 1. Default Label with Checkbox (Unchecked)
export function DefaultLabelWithCheckbox() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Default State (Unchecked)</h3>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <Label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}

// 2. Checked Label with Checkbox
export function CheckedLabelWithCheckbox() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Checked State</h3>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" defaultChecked />
        <Label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}

// 3. Multiple Checkboxes with Labels
export function MultipleCheckboxesWithLabels() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Multiple Options</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="option1" defaultChecked />
          <Label htmlFor="option1" className="text-sm font-medium">
            I agree to the terms and conditions
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="option2" />
          <Label htmlFor="option2" className="text-sm font-medium">
            Subscribe to newsletter
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="option3" />
          <Label htmlFor="option3" className="text-sm font-medium">
            Enable notifications
          </Label>
        </div>
      </div>
    </div>
  )
}

// 4. Disabled Checkbox with Label
export function DisabledCheckboxWithLabel() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Disabled State</h3>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms3" disabled />
        <Label
          htmlFor="terms3"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}

// 5. Label with Input Field
export function LabelWithInput() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Label with Input</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    </div>
  )
}

// 6. Label with Required Field
export function LabelWithRequired() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Required Field</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input type="text" id="name" placeholder="Enter your name" />
      </div>
    </div>
  )
}

// 7. Label with Textarea
export function LabelWithTextarea() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Label with Textarea</h3>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    </div>
  )
}

// 8. Label with Helper Text
export function LabelWithHelperText() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Label with Helper Text</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" placeholder="@username" />
        <p className="text-xs text-muted-foreground">
          This is your public display name.
        </p>
      </div>
    </div>
  )
}

// 9. Inline Labels
export function InlineLabels() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Inline Labels</h3>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="inline1" defaultChecked />
          <Label htmlFor="inline1" className="text-sm font-medium">
            Option 1
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="inline2" />
          <Label htmlFor="inline2" className="text-sm font-medium">
            Option 2
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="inline3" />
          <Label htmlFor="inline3" className="text-sm font-medium">
            Option 3
          </Label>
        </div>
      </div>
    </div>
  )
}

// 10. Form with Labels
export function FormWithLabels() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Complete Form</h3>
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" placeholder="John Doe" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email-form">Email</Label>
          <Input id="email-form" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter" className="text-sm font-medium">
            Subscribe to our newsletter
          </Label>
        </div>
      </div>
    </div>
  )
}
