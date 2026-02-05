"use client"

import { Calendar as CalendarIcon, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

// Reusable Calendar Component
function CalendarPopup({ selectedDate = 27 }: { selectedDate?: number }) {
  return (
    <div className="rounded-md border bg-popover shadow-md p-3 w-[250px]">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" className="h-8 px-2 pr-1 text-sm font-medium">
            Jun
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-2 pr-1 text-sm font-medium">
            2025
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="flex flex-col">
        {/* Day Headers */}
        <div className="flex">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="w-8 h-[21px] flex items-center justify-center text-xs text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="flex flex-col mt-2 gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5, 6, 7].map((date) => (
              <div
                key={date}
                className={`w-8 h-8 flex items-center justify-center text-sm rounded-md ${
                  date === selectedDate ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {date}
              </div>
            ))}
          </div>
          <div className="flex">
            {[8, 9, 10, 11, 12, 13, 14].map((date) => (
              <div
                key={date}
                className={`w-8 h-8 flex items-center justify-center text-sm rounded-md ${
                  date === selectedDate ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {date}
              </div>
            ))}
          </div>
          <div className="flex">
            {[15, 16, 17, 18, 19, 20, 21].map((date) => (
              <div
                key={date}
                className={`w-8 h-8 flex items-center justify-center text-sm rounded-md ${
                  date === selectedDate ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {date}
              </div>
            ))}
          </div>
          <div className="flex">
            {[22, 23, 24, 25, 26, 27, 28].map((date) => (
              <div
                key={date}
                className={`w-8 h-8 flex items-center justify-center text-sm rounded-md ${
                  date === selectedDate ? 'bg-primary text-primary-foreground' : date === 27 && selectedDate !== 27 ? 'bg-muted' : ''
                }`}
              >
                {date}
              </div>
            ))}
          </div>
          <div className="flex">
            {[29, 30].map((date) => (
              <div key={date} className="w-8 h-8 flex items-center justify-center text-sm rounded-md">
                {date}
              </div>
            ))}
            {[1, 2, 3, 4, 5].map((date) => (
              <div key={`next-${date}`} className="w-8 h-8 flex items-center justify-center text-sm rounded-md opacity-50 text-muted-foreground">
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 1. Date of Birth Picker - Closed State
export function DateOfBirthClosed() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="text-sm font-medium">Date of Birth</Label>
      <Button
        variant="outline"
        className="w-[192px] justify-between h-9 font-normal"
      >
        Select a date
        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
      </Button>
    </div>
  )
}

// 1. Date of Birth Picker - Open State
export function DateOfBirthOpen() {
  return (
    <div className="flex flex-col gap-1 w-[250px]">
      <Label className="text-sm font-medium mb-2">Date of Birth</Label>
      <Button
        variant="outline"
        className="w-[192px] justify-between h-9 font-normal"
      >
        Select a date
        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
      </Button>
      <CalendarPopup selectedDate={27} />
    </div>
  )
}

// 2. Subscription Date Picker - Closed State
export function SubscriptionDateClosed() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="text-sm font-medium">Subscription Date</Label>
      <div className="flex items-center justify-between w-[224px] h-9 rounded-md border px-3 py-1">
        <span className="text-sm">June 01, 2025</span>
        <CalendarIcon className="h-4 w-4" />
      </div>
    </div>
  )
}

// 2. Subscription Date Picker - Open State
export function SubscriptionDateOpen() {
  return (
    <div className="flex flex-col gap-1 items-end w-full">
      <div className="flex items-center w-[224px]">
        <Label className="text-sm font-medium">Subscription Date</Label>
      </div>
      <div className="flex items-center justify-between w-[224px] h-9 rounded-md border px-3 py-1">
        <span className="text-sm">June 01, 2025</span>
        <CalendarIcon className="h-4 w-4" />
      </div>
      <CalendarPopup selectedDate={1} />
    </div>
  )
}

// 3. Date and Time Picker - Closed State
export function DateTimeClosed() {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col gap-3">
        <Label className="text-sm font-medium px-1">Date of birth</Label>
        <Button
          variant="outline"
          className="w-[128px] justify-between h-9 px-3 font-normal text-sm"
        >
          Select a date
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <Label className="text-sm font-medium px-1">Time</Label>
        <div className="flex items-center justify-center w-[91px] h-9 rounded-md border px-3">
          <span className="text-sm">10:30:00</span>
        </div>
      </div>
    </div>
  )
}

// 3. Date and Time Picker - Open State
export function DateTimeOpen() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-4">
        <div className="flex flex-col gap-3">
          <Label className="text-sm font-medium px-1">Date of birth</Label>
          <Button
            variant="outline"
            className="w-[128px] justify-between h-9 px-3 font-normal text-sm"
          >
            Select a date
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-sm font-medium px-1">Time</Label>
          <div className="flex items-center justify-center w-[91px] h-9 rounded-md border px-3">
            <span className="text-sm">10:30:00</span>
          </div>
        </div>
      </div>
      <CalendarPopup selectedDate={27} />
    </div>
  )
}

// 4. Natural Language Picker - Closed State
export function NaturalLanguageClosed() {
  return (
    <div className="flex flex-col gap-3 w-[300px]">
      <Label className="text-sm font-medium px-1">Schedule Date</Label>
      <div className="flex items-center justify-between h-9 rounded-md border px-3 py-2">
        <span className="text-sm">In 2 days</span>
        <div className="flex items-center justify-center w-6 h-6">
          <CalendarIcon className="h-3.5 w-3.5" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Your post will be published on <span className="font-medium">June 21, 2025.</span>
      </p>
    </div>
  )
}

// 4. Natural Language Picker - Open State
export function NaturalLanguageOpen() {
  return (
    <div className="flex flex-col gap-3 w-[300px]">
      <Label className="text-sm font-medium px-1">Schedule Date</Label>
      <div className="flex flex-col gap-1 items-end">
        <div className="flex items-center justify-between w-full h-9 rounded-md border px-3 py-2">
          <span className="text-sm">In 2 days</span>
          <div className="flex items-center justify-center w-6 h-6">
            <CalendarIcon className="h-3.5 w-3.5" />
          </div>
        </div>
        <CalendarPopup selectedDate={27} />
      </div>
      <p className="text-sm text-muted-foreground">
        Your post will be published on <span className="font-medium">June 21, 2025.</span>
      </p>
    </div>
  )
}

// 5. Form - Closed State
export function DatePickerFormClosed() {
  return (
    <div className="flex flex-col w-[314px]">
      <div className="flex flex-col gap-2 mb-8">
        <Label className="text-sm font-medium">Date of birth</Label>
        <div className="flex items-center justify-between h-9 rounded-md border px-3 py-2">
          <span className="text-sm text-muted-foreground opacity-50">Pick a date</span>
          <CalendarIcon className="h-4 w-4 opacity-50" />
        </div>
        <p className="text-sm text-muted-foreground">
          Your date of birth is used to calculate your age.
        </p>
      </div>
      <Button className="h-9 w-fit">Submit</Button>
    </div>
  )
}

// 5. Form - Open State
export function DatePickerFormOpen() {
  return (
    <div className="flex flex-col w-[314px]">
      <div className="flex flex-col gap-2 mb-8 relative">
        <Label className="text-sm font-medium">Date of birth</Label>
        <div className="flex flex-col gap-1 items-end">
          <div className="flex items-center justify-between w-full h-9 rounded-md border px-3 py-2">
            <span className="text-sm text-muted-foreground opacity-50">Pick a date</span>
            <CalendarIcon className="h-4 w-4 opacity-50" />
          </div>
          <CalendarPopup selectedDate={27} />
        </div>
        <p className="text-sm text-muted-foreground">
          Your date of birth is used to calculate your age.
        </p>
      </div>
      <Button className="h-9 w-fit">Submit</Button>
    </div>
  )
}
