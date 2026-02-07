"use client"

import {
  BookOpen,
  Bot,
  ChevronRight,
  Frame,
  History,
  LifeBuoy,
  Map,
  MoreHorizontal,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Star,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// 1. Sidebar - Closed State (Icon Only)
export function SidebarClosed() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">State=Closed</h3>
      <div className="flex h-[608px] w-12 flex-col border-r bg-background">
        {/* Header */}
        <div className="flex h-14 items-center justify-center border-b px-2">
          <Button variant="ghost" size="icon" className="size-8">
            <Frame className="size-4" />
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Button variant="ghost" size="icon" className="size-8">
              <SquareTerminal className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8">
              <Bot className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8">
              <History className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8">
              <Star className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="size-8">
              <Settings2 className="size-4" />
            </Button>
          </nav>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t px-2 py-2">
          <Button variant="ghost" size="icon" className="size-8">
            <Avatar className="size-8">
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Collapsed sidebar showing only icons
      </p>
    </div>
  )
}

// 2. Sidebar - Open State (Full Navigation)
export function SidebarOpen() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">State=Open</h3>
      <div className="flex h-[608px] w-64 flex-col border-r bg-background">
        {/* Header */}
        <div className="flex h-14 items-center border-b px-4">
          <div className="flex items-center gap-2">
            <Frame className="size-5" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Acme Inc</span>
              <span className="text-xs text-muted-foreground">Enterprise</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <SquareTerminal className="size-4" />
              <span>Platform</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Bot className="size-4" />
              <span>Playground</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <History className="size-4" />
              <span>History</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Star className="size-4" />
              <span>Starred</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Settings2 className="size-4" />
              <span>Settings</span>
            </Button>

            <div className="px-2 py-2">
              <h4 className="mb-2 text-xs font-semibold text-muted-foreground">
                Models
              </h4>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <BookOpen className="size-4" />
              <span>Documentation</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Settings2 className="size-4" />
              <span>Settings</span>
            </Button>

            <div className="px-2 py-2">
              <h4 className="mb-2 text-xs font-semibold text-muted-foreground">
                Projects
              </h4>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Frame className="size-4" />
              <span>Design Engineering</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <PieChart className="size-4" />
              <span>Sales &amp; Marketing</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <Map className="size-4" />
              <span>Travel</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              size="sm"
            >
              <MoreHorizontal className="size-4" />
              <span>More</span>
            </Button>
          </nav>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                size="sm"
              >
                <Avatar className="size-6">
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">Shadcn</span>
                  <span className="text-xs text-muted-foreground">
                    m@example.com
                  </span>
                </div>
                <ChevronRight className="ml-auto size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Expanded sidebar with full navigation and user profile
      </p>
    </div>
  )
}
