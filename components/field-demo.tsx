"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// 1. Field - Payment Form
export function FieldDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-6 w-[448px]">
        {/* Payment Method Section */}
        <div className="flex flex-col">
          <h3 className="text-base font-medium pb-3">Payment Method</h3>
          <p className="text-sm text-muted-foreground">
            All transactions are secure and encrypted
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {/* Name on Card */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">Name on Card</Label>
            <Input defaultValue="Evil Rabbit" className="h-9" />
          </div>

          {/* Card Number */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">Card Number</Label>
            <Input defaultValue="1234 1234 1234 1234" className="h-9" />
            <p className="text-sm text-muted-foreground">
              Enter your 16-digit number.
            </p>
          </div>

          {/* Month, Year, CVV */}
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-3">
              <Label className="text-sm font-medium">Month</Label>
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">01</SelectItem>
                  <SelectItem value="02">02</SelectItem>
                  <SelectItem value="03">03</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label className="text-sm font-medium">Year</Label>
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label className="text-sm font-medium">CVV</Label>
              <Input defaultValue="123" className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t h-5 w-[448px]" />

      {/* Billing Address Section */}
      <div className="flex flex-col gap-6 w-[448px]">
        <div className="flex flex-col">
          <h3 className="text-base font-medium pb-3">Billing Address</h3>
          <p className="text-sm text-muted-foreground">
            The billing address associated with your payment method
          </p>
        </div>

        <div className="flex items-center h-5">
          <Checkbox id="billing" defaultChecked />
          <Label htmlFor="billing" className="pl-2 text-sm font-normal cursor-pointer">
            Same as shipping address
          </Label>
        </div>
      </div>

      <div className="border-t h-5 w-[448px]" />

      {/* Comments */}
      <div className="flex flex-col gap-3 w-[448px]">
        <Label className="text-sm font-medium">Comments</Label>
        <Textarea
          placeholder="Add any additional comments"
          className="h-[65px] resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-[448px]">
        <Button className="h-9 px-4 py-2 text-xs">Submit</Button>
        <Button variant="outline" className="h-9 px-4 py-2">
          Cancel
        </Button>
      </div>
    </div>
  )
}

// 2. Input - Basic Input Examples
export function InputDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-6 w-[448px]">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="h-9"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="email-helper" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email-helper"
            type="email"
            defaultValue="m@example.com"
            className="h-9"
          />
          <p className="text-sm text-muted-foreground">
            We&apos;ll never share your email.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="email-disabled" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email-disabled"
            type="email"
            defaultValue="m@example.com"
            className="h-9"
            disabled
          />
          <p className="text-sm text-muted-foreground">
            This email is disabled.
          </p>
        </div>
      </div>
    </div>
  )
}

// 3. Textarea - Multiline Text Input
export function TextareaDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-3 w-[448px]">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Leave a comment..."
          className="min-h-[100px] resize-none"
        />
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </div>
    </div>
  )
}

// 4. Select - Dropdown Selection
export function SelectDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-3 w-[448px]">
        <Label htmlFor="select-demo" className="text-sm font-medium">
          Select an option
        </Label>
        <Select>
          <SelectTrigger id="select-demo" className="h-9">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          You can manage options in your settings.
        </p>
      </div>
    </div>
  )
}

// 5. Slider - Range Input
export function SliderDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-3 w-[448px]">
        <Label className="text-sm font-medium">Brightness</Label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
        <p className="text-sm text-muted-foreground">
          Adjust the brightness level.
        </p>
      </div>
    </div>
  )
}

// 6. Fieldset - Grouped Form Fields
export function FieldsetDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <fieldset className="flex flex-col gap-6 w-[448px]">
        <div className="flex flex-col">
          <legend className="text-base font-medium pb-3">Profile Settings</legend>
          <p className="text-sm text-muted-foreground">
            Update your profile information.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="username-fieldset" className="text-sm font-medium">
            Username
          </Label>
          <Input id="username-fieldset" placeholder="@username" className="h-9" />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="bio-fieldset" className="text-sm font-medium">
            Bio
          </Label>
          <Textarea
            id="bio-fieldset"
            placeholder="Tell us about yourself"
            className="min-h-[80px] resize-none"
          />
        </div>
      </fieldset>
    </div>
  )
}

// 7. Checkbox - Checkboxes
export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-6 w-[448px]">
        <div className="flex flex-col">
          <h3 className="text-base font-medium pb-3">Preferences</h3>
          <p className="text-sm text-muted-foreground">
            Manage your notification preferences.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center h-5">
            <Checkbox id="checkbox1" defaultChecked />
            <Label htmlFor="checkbox1" className="pl-2 text-sm font-normal cursor-pointer">
              Email notifications
            </Label>
          </div>
          <div className="flex items-center h-5">
            <Checkbox id="checkbox2" />
            <Label htmlFor="checkbox2" className="pl-2 text-sm font-normal cursor-pointer">
              SMS notifications
            </Label>
          </div>
          <div className="flex items-center h-5">
            <Checkbox id="checkbox3" defaultChecked />
            <Label htmlFor="checkbox3" className="pl-2 text-sm font-normal cursor-pointer">
              Push notifications
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

// 8. Radio - Radio Group
export function RadioDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-6 w-[448px]">
        <div className="flex flex-col">
          <h3 className="text-base font-medium pb-3">Notify me via</h3>
          <p className="text-sm text-muted-foreground">
            Choose your preferred notification method.
          </p>
        </div>

        <RadioGroup defaultValue="email">
          <div className="flex items-center h-5 gap-2">
            <RadioGroupItem value="email" id="radio-email" />
            <Label htmlFor="radio-email" className="text-sm font-normal cursor-pointer">
              Email
            </Label>
          </div>
          <div className="flex items-center h-5 gap-2">
            <RadioGroupItem value="phone" id="radio-phone" />
            <Label htmlFor="radio-phone" className="text-sm font-normal cursor-pointer">
              Phone
            </Label>
          </div>
          <div className="flex items-center h-5 gap-2">
            <RadioGroupItem value="none" id="radio-none" />
            <Label htmlFor="radio-none" className="text-sm font-normal cursor-pointer">
              None
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

// 9. Switch - Toggle Switch
export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex gap-3 items-start justify-end w-[448px]">
        <div className="flex-1 flex flex-col gap-1.5">
          <p className="text-sm font-medium pb-0.5">Marketing emails</p>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products, features, and more.
          </p>
        </div>
        <Switch defaultChecked />
      </div>
    </div>
  )
}

// 10. Choice Card - Radio Cards
export function ChoiceCard() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-3 w-[448px]">
        <div className="flex flex-col pb-3">
          <h3 className="text-sm font-medium">Plan</h3>
          <p className="text-sm text-muted-foreground">
            Select the plan that works best for you.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="bg-accent border-2 border-primary flex gap-3 items-center p-3 rounded-lg cursor-pointer">
            <RadioGroup defaultValue="free">
              <RadioGroupItem value="free" />
            </RadioGroup>
            <div className="flex-1 flex flex-col gap-1.5">
              <p className="text-sm font-medium">Free</p>
              <p className="text-sm text-muted-foreground">
                Perfect for trying out the service.
              </p>
            </div>
          </div>

          <div className="bg-background border border-border flex gap-3 items-center p-3 rounded-lg cursor-pointer hover:bg-accent">
            <RadioGroup>
              <RadioGroupItem value="pro" />
            </RadioGroup>
            <div className="flex-1 flex flex-col gap-1.5">
              <p className="text-sm font-medium">Pro</p>
              <p className="text-sm text-muted-foreground">
                For professionals and growing teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 11. Field Group - Notification Settings
export function FieldGroup() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-7 w-[448px]">
        {/* Responses */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium">Responses</h3>
          <p className="text-sm text-muted-foreground">
            Get notified when ChatGPT responds to requests that take time, like research or image generation.
          </p>
          <div className="flex gap-3 items-center opacity-50">
            <Checkbox id="responses-push" defaultChecked disabled />
            <Label htmlFor="responses-push" className="text-sm font-normal cursor-pointer">
              Push notifications
            </Label>
          </div>
        </div>

        <div className="border-t py-2" />

        {/* Tasks */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium">Tasks</h3>
          <div className="flex items-start gap-1">
            <p className="text-sm text-muted-foreground">
              Get notified when tasks you&apos;ve created have updates.
            </p>
            <a href="#" className="text-sm text-muted-foreground underline whitespace-nowrap">
              Manage tasks
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Checkbox id="tasks-push" />
              <Label htmlFor="tasks-push" className="text-sm font-normal cursor-pointer">
                Push notifications
              </Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="tasks-email" />
              <Label htmlFor="tasks-email" className="text-sm font-normal cursor-pointer">
                Email notifications
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 12. Responsive Layout - Profile Form
export function ResponsiveLayout() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col pb-3">
          <h3 className="text-base font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Fill in your profile information.
          </p>
        </div>

        <div className="border-t h-5" />

        <div className="flex flex-col gap-7">
          {/* Name */}
          <div className="flex gap-3 items-start w-full">
            <div className="flex-1 flex flex-col gap-1.5">
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">
                Provide your full name for identification
              </p>
            </div>
            <div className="w-[195px]">
              <Input defaultValue="Evil Rabbit" className="h-9" />
            </div>
          </div>

          <div className="border-t h-5" />

          {/* Message */}
          <div className="flex gap-3 items-start w-full">
            <div className="flex-1 flex flex-col gap-1.5">
              <p className="text-sm font-medium">Message</p>
              <p className="text-sm text-muted-foreground">
                You can write your message here. Keep it short, preferably under 100 characters.
              </p>
            </div>
            <div className="flex-1">
              <Textarea
                defaultValue="Hello, world!"
                className="h-20 resize-none"
              />
            </div>
          </div>

          <div className="border-t h-5" />

          {/* Buttons */}
          <div className="flex gap-3">
            <Button className="h-9 px-4 py-2 text-xs">Submit</Button>
            <Button variant="outline" className="h-9 px-4 py-2">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
