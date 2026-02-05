'use client'

import { useState } from 'react'
import { ExternalLink, CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

export default function CalendarPage() {
  const [date, setDate] = useState<Date>()
  const [rangeDate, setRangeDate] = useState<{ from?: Date; to?: Date }>()
  const [dobMonth, setDobMonth] = useState<string>()
  const [dobDay, setDobDay] = useState<string>()
  const [dobYear, setDobYear] = useState<string>()
  const [dateTime, setDateTime] = useState<Date>()
  const [timeValue, setTimeValue] = useState<string>('09:00')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())
  const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString())

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Calendar
              </h1>
              <p className="text-base text-muted-foreground">
                A date field component that allows users to enter and edit date.
              </p>
            </div>

            {/* View in Shadcn button */}
            <Button
              variant="secondary"
              size="sm"
              className="gap-1.5 shadow-sm"
              asChild
            >
              <a
                href="https://ui.shadcn.com/docs/components/calendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Calendar Examples */}
          <div className="space-y-8">
            {/* Basic Calendar */}
            <div className="flex items-start gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
              />
            </div>

            <Separator />

            {/* Persian / Hijri / Jalali Calendar */}
            <div>
              <h3 className="text-lg font-medium mb-4">Persian / Hijri / Jalali Calendar</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                locale={undefined} // Can be configured with date-fns-jalali or similar
              />
            </div>

            <Separator />

            {/* Range Calendar */}
            <div>
              <h3 className="text-lg font-medium mb-4">Range Calendar</h3>
              <Calendar
                mode="range"
                selected={rangeDate}
                onSelect={setRangeDate}
                numberOfMonths={2}
                className="rounded-md border shadow-sm"
              />
            </div>

            <Separator />

            {/* Month and Year Selector */}
            <div>
              <h3 className="text-lg font-medium mb-4">Month and Year Selector</h3>
              <div className="flex gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">State=Default</p>
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                    fromYear={1960}
                    toYear={2030}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">State=Open</p>
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm"
                    fromYear={1960}
                    toYear={2030}
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Date of Birth Picker */}
            <div>
              <h3 className="text-lg font-medium mb-4">Date of Birth Picker</h3>
              <div className="flex gap-4">
                <div className="space-y-4">
                  <p className="text-sm font-medium">State=Default</p>
                  <div className="flex gap-2">
                    <Select value={dobMonth} onValueChange={setDobMonth}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={dobDay} onValueChange={setDobDay}>
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Day" />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((day) => (
                          <SelectItem key={day} value={day}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={dobYear} onValueChange={setDobYear}>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-4">State=Open</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'MMMM d, yyyy') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        captionLayout="dropdown-buttons"
                        selected={date}
                        onSelect={setDate}
                        fromYear={1960}
                        toYear={2030}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <Separator />

            {/* Date and Time Picker */}
            <div>
              <h3 className="text-lg font-medium mb-4">Date and Time Picker</h3>
              <div className="flex gap-4">
                <div className="space-y-4">
                  <p className="text-sm font-medium">State=Default</p>
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-[180px] justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateTime ? format(dateTime, 'MMM d, yyyy') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dateTime}
                          onSelect={setDateTime}
                        />
                      </PopoverContent>
                    </Popover>
                    <Input
                      type="time"
                      value={timeValue}
                      onChange={(e) => setTimeValue(e.target.value)}
                      className="w-[120px]"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-4">State=Open</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateTime ? format(dateTime, 'MMM d, yyyy HH:mm') : 'Pick date and time'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateTime}
                        onSelect={setDateTime}
                      />
                      <div className="p-3 border-t">
                        <Label htmlFor="time" className="text-sm">Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={timeValue}
                          onChange={(e) => setTimeValue(e.target.value)}
                          className="mt-2"
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <Separator />

            {/* Natural Language Picker */}
            <div>
              <h3 className="text-lg font-medium mb-4">Natural Language Picker</h3>
              <div className="flex gap-4">
                <div className="space-y-4">
                  <p className="text-sm font-medium">State=Default</p>
                  <Input
                    type="text"
                    placeholder="e.g., tomorrow, next Friday, 2 weeks from now"
                    className="w-[300px]"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-4">State=Open</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Input
                        type="text"
                        placeholder="e.g., tomorrow, next Friday..."
                        className="w-[300px] cursor-pointer"
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <div className="p-3 space-y-2">
                        <Button variant="ghost" className="w-full justify-start text-sm">
                          Today
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-sm">
                          Tomorrow
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-sm">
                          Next week
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-sm">
                          Next month
                        </Button>
                      </div>
                      <Separator />
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <Separator />

            {/* Form Example */}
            <div>
              <h3 className="text-lg font-medium mb-4">Form</h3>
              <div className="flex gap-4">
                <div className="space-y-4">
                  <p className="text-sm font-medium">State=Default</p>
                  <div className="space-y-4 w-[300px]">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of birth</Label>
                      <Button
                        id="dob"
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : 'Pick a date'}
                      </Button>
                      <p className="text-[0.8rem] text-muted-foreground">
                        Your date of birth is used to calculate your age.
                      </p>
                    </div>
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-4">State=Open</p>
                  <div className="space-y-4 w-[300px]">
                    <div className="space-y-2">
                      <Label htmlFor="dob-open">Date of birth</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="dob-open"
                            variant="outline"
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !date && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, 'PPP') : 'Pick a date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            captionLayout="dropdown-buttons"
                            selected={date}
                            onSelect={setDate}
                            fromYear={1960}
                            toYear={2030}
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-[0.8rem] text-muted-foreground">
                        Your date of birth is used to calculate your age.
                      </p>
                    </div>
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home button */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
