"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// 1. Basic Textarea
export function TextareaBasic() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Textarea</h3>
      <Textarea placeholder="Type your message here." />
      <p className="text-xs text-muted-foreground">
        Basic textarea with placeholder
      </p>
    </div>
  )
}

// 2. Disabled Textarea
export function TextareaDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Disabled</h3>
      <Textarea placeholder="Type your message here." disabled />
      <p className="text-xs text-muted-foreground">
        Disabled textarea
      </p>
    </div>
  )
}

// 3. Textarea with Label
export function TextareaWithLabel() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Label</h3>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <p className="text-xs text-muted-foreground">
        Textarea with label
      </p>
    </div>
  )
}

// 4. Textarea with Label and Helper Text
export function TextareaWithText() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Text</h3>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your message</Label>
        <Textarea placeholder="Type your message here." id="message-2" />
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </div>
      <p className="text-xs text-muted-foreground">
        Textarea with label and helper text
      </p>
    </div>
  )
}

// 5. Textarea with Button
export function TextareaWithButton() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Button</h3>
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Textarea with send button
      </p>
    </div>
  )
}

// 6. Bio Form with Complete Elements
export function TextareaForm() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Form Example</h3>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="bio">Bio</Label>
        <Textarea placeholder="Tell us a bit about yourself" id="bio" />
        <p className="text-sm text-muted-foreground">
          You can @mention other users and organizations.
        </p>
      </div>
      <Button className="w-fit">Submit</Button>
      <p className="text-xs text-muted-foreground">
        Complete form with label, helper text, and submit button
      </p>
    </div>
  )
}
