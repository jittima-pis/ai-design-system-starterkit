"use client"

import { NativeSelect } from "@/components/ui/native-select"
import { Label } from "@/components/ui/label"

// 1. Default Native Select
export function DefaultNativeSelect() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Default State</h3>
      <div className="w-full max-w-sm">
        <NativeSelect>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </NativeSelect>
      </div>
      <p className="text-xs text-muted-foreground">
        Basic native select with default styling
      </p>
    </div>
  )
}

// 2. Native Select with Label
export function NativeSelectWithLabel() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Label</h3>
      <div className="w-full max-w-sm space-y-2">
        <Label htmlFor="select-label">Country</Label>
        <NativeSelect id="select-label">
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </NativeSelect>
      </div>
      <p className="text-xs text-muted-foreground">
        Native select with label for accessibility
      </p>
    </div>
  )
}

// 3. Native Select with Placeholder
export function NativeSelectWithPlaceholder() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Placeholder</h3>
      <div className="w-full max-w-sm">
        <NativeSelect defaultValue="">
          <option value="" disabled>
            Choose your option...
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </NativeSelect>
      </div>
      <p className="text-xs text-muted-foreground">
        Placeholder text as disabled first option
      </p>
    </div>
  )
}

// 4. Disabled Native Select
export function DisabledNativeSelect() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Disabled State</h3>
      <div className="w-full max-w-sm">
        <NativeSelect disabled defaultValue="option2">
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </NativeSelect>
      </div>
      <p className="text-xs text-muted-foreground">
        Disabled select with reduced opacity
      </p>
    </div>
  )
}

// 5. Native Select with Error State
export function NativeSelectWithError() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Error State</h3>
      <div className="w-full max-w-sm space-y-2">
        <Label htmlFor="select-error">Category</Label>
        <NativeSelect id="select-error" error defaultValue="">
          <option value="">Select a category</option>
          <option value="cat1">Category 1</option>
          <option value="cat2">Category 2</option>
          <option value="cat3">Category 3</option>
        </NativeSelect>
        <p className="text-xs text-destructive">Please select a category</p>
      </div>
      <p className="text-xs text-muted-foreground">
        Error state with red border and error message
      </p>
    </div>
  )
}

// 6. Native Select with Helper Text
export function NativeSelectWithHelper() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Helper Text</h3>
      <div className="w-full max-w-sm space-y-2">
        <Label htmlFor="select-helper">Language</Label>
        <NativeSelect id="select-helper">
          <option value="">Select a language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </NativeSelect>
        <p className="text-xs text-muted-foreground">
          Choose your preferred language for communication
        </p>
      </div>
      <p className="text-xs text-muted-foreground">
        Helper text provides additional context
      </p>
    </div>
  )
}

// 7. Native Select with Required Field
export function NativeSelectRequired() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Required Field</h3>
      <div className="w-full max-w-sm space-y-2">
        <Label htmlFor="select-required">
          Department <span className="text-destructive">*</span>
        </Label>
        <NativeSelect id="select-required" required>
          <option value="">Select a department</option>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="support">Support</option>
        </NativeSelect>
      </div>
      <p className="text-xs text-muted-foreground">
        Required field with asterisk indicator
      </p>
    </div>
  )
}

// 8. Native Select with Multiple Options
export function NativeSelectMultiple() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Multiple Select</h3>
      <div className="w-full max-w-sm space-y-2">
        <Label htmlFor="select-multiple">Skills</Label>
        <select
          id="select-multiple"
          multiple
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
          <option value="nextjs">Next.js</option>
        </select>
        <p className="text-xs text-muted-foreground">Hold Cmd/Ctrl to select multiple</p>
      </div>
      <p className="text-xs text-muted-foreground">
        Native multiple select for choosing several options
      </p>
    </div>
  )
}

// 9. Native Select with Grouped Options
export function NativeSelectGrouped() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Grouped Options</h3>
      <div className="w-full max-w-sm space-y-2">
        <Label htmlFor="select-grouped">Vehicle</Label>
        <NativeSelect id="select-grouped">
          <option value="">Select a vehicle</option>
          <optgroup label="Cars">
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="coupe">Coupe</option>
          </optgroup>
          <optgroup label="Motorcycles">
            <option value="sport">Sport</option>
            <option value="cruiser">Cruiser</option>
            <option value="touring">Touring</option>
          </optgroup>
          <optgroup label="Trucks">
            <option value="pickup">Pickup</option>
            <option value="van">Van</option>
          </optgroup>
        </NativeSelect>
      </div>
      <p className="text-xs text-muted-foreground">
        Options organized with optgroup elements
      </p>
    </div>
  )
}

// 10. Form with Multiple Native Selects
export function FormWithNativeSelects() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Form Example</h3>
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <Label htmlFor="select-country">Country</Label>
          <NativeSelect id="select-country">
            <option value="">Select country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="select-state">State/Province</Label>
          <NativeSelect id="select-state">
            <option value="">Select state</option>
            <option value="ca">California</option>
            <option value="ny">New York</option>
            <option value="tx">Texas</option>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="select-timezone">Timezone</Label>
          <NativeSelect id="select-timezone">
            <option value="">Select timezone</option>
            <option value="pst">PST (UTC-8)</option>
            <option value="mst">MST (UTC-7)</option>
            <option value="cst">CST (UTC-6)</option>
            <option value="est">EST (UTC-5)</option>
          </NativeSelect>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Complete form with multiple select fields
      </p>
    </div>
  )
}
