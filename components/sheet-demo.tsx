"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// 1. Sheet - Button State (Closed)
export function SheetButtonState() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">State=Button</h3>
      <div>
        <Button variant="outline">Open</Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Sheet trigger button in closed state
      </p>
    </div>
  )
}

// 2. Sheet - Open State
export function SheetOpenState() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">State=Open</h3>
      <div>
        <Sheet defaultOpen>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <p className="text-xs text-muted-foreground">
        Sheet in open state with edit profile form (Name: Pedro Duarte, Username: @peduarte)
      </p>
    </div>
  )
}
