"use client"

import { BadgeCheck, ChevronRight, ExternalLink, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemHeader,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item"

// 1. Basic Item (Type 1 - With Border)
export function BasicItemWithBorder() {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </ItemActions>
    </Item>
  )
}

// 2. Compact Item with Icons (Type 2)
export function CompactItemWithIcons() {
  return (
    <Item variant="outline" size="compact">
      <ItemHeader>
        <ItemIcon>
          <BadgeCheck className="h-4 w-4" />
        </ItemIcon>
        <ItemContent className="space-y-0">
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemIcon>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </ItemIcon>
      </ItemHeader>
    </Item>
  )
}

// 3. Default Variant (No Border, No Background)
export function DefaultVariantItem() {
  return (
    <Item variant="default">
      <ItemContent>
        <ItemTitle>Default Variant</ItemTitle>
        <ItemDescription>
          Standard styling with subtle background and borders.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">
          Learn More
        </Button>
      </ItemActions>
    </Item>
  )
}

// 4. Outline Variant (With Border)
export function OutlineVariantItem() {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Outline Variant</ItemTitle>
        <ItemDescription>
          Standard styling with subtle background and borders.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">
          Learn More
        </Button>
      </ItemActions>
    </Item>
  )
}

// 5. Muted Variant (With Background)
export function MutedVariantItem() {
  return (
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>Muted Variant</ItemTitle>
        <ItemDescription>
          Standard styling with subtle background and borders.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">
          Learn More
        </Button>
      </ItemActions>
    </Item>
  )
}

// 6. Default Size
export function DefaultSizeItem() {
  return (
    <Item variant="outline" size="default">
      <ItemContent>
        <ItemTitle>Default Size</ItemTitle>
        <ItemDescription>
          16px padding with 16px item spacing
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 7. Compact Size
export function CompactSizeItem() {
  return (
    <Item variant="outline" size="compact">
      <ItemContent>
        <ItemTitle>Compact Size</ItemTitle>
        <ItemDescription>
          12px vertical padding with 10px item spacing
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

// 8. Item with Icon/Image
export function ItemWithIcon() {
  return (
    <Item variant="outline">
      <ItemHeader>
        <ItemIcon>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
            <BadgeCheck className="h-5 w-5 text-primary" />
          </div>
        </ItemIcon>
        <ItemContent>
          <ItemTitle>Item with Icon</ItemTitle>
          <ItemDescription>
            Icon displayed on the left side
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </ItemActions>
      </ItemHeader>
    </Item>
  )
}

// 9. Item with Single Avatar
export function ItemWithSingleAvatar() {
  return (
    <Item variant="outline">
      <ItemHeader>
        <ItemIcon>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ItemIcon>
        <ItemContent>
          <ItemTitle>John Doe</ItemTitle>
          <ItemDescription>Software Engineer</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            View Profile
          </Button>
        </ItemActions>
      </ItemHeader>
    </Item>
  )
}

// 10. Item with Avatar Group
export function ItemWithAvatarGroup() {
  return (
    <Item variant="outline">
      <ItemHeader>
        <ItemIcon>
          <div className="flex -space-x-2">
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </ItemIcon>
        <ItemContent>
          <ItemTitle>Team Members</ItemTitle>
          <ItemDescription>3 members in this team</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </ItemActions>
      </ItemHeader>
    </Item>
  )
}

// 11. Image Group (3 Avatars)
export function ImageGroup() {
  return (
    <div className="flex gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  )
}

// 12. Group with Separators
export function GroupWithSeparators() {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-3 p-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">john@example.com</p>
        </div>
      </div>
      <div className="border-t border-border" />
      <div className="flex items-center gap-3 p-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-medium">Jane Smith</p>
          <p className="text-xs text-muted-foreground">jane@example.com</p>
        </div>
      </div>
      <div className="border-t border-border" />
      <div className="flex items-center gap-3 p-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-sm font-medium">Alex Brown</p>
          <p className="text-xs text-muted-foreground">alex@example.com</p>
        </div>
      </div>
    </div>
  )
}

// 13. Link Item - Default
export function LinkItemDefault() {
  return (
    <Item variant="default">
      <ItemHeader>
        <ItemContent className="space-y-0">
          <ItemTitle>View Documentation</ItemTitle>
        </ItemContent>
        <ItemIcon>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </ItemIcon>
      </ItemHeader>
    </Item>
  )
}

// 14. Link Item - Outline
export function LinkItemOutline() {
  return (
    <Item variant="outline">
      <ItemHeader>
        <ItemContent className="space-y-0">
          <ItemTitle>Open External Link</ItemTitle>
        </ItemContent>
        <ItemIcon>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </ItemIcon>
      </ItemHeader>
    </Item>
  )
}

// 15. Dropdown - Closed State
export function DropdownClosed() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2.5 hover:bg-muted cursor-pointer">
      <span className="text-sm font-medium">Select Option</span>
      <ChevronDown className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}

// 16. Dropdown - Open State
export function DropdownOpen() {
  return (
    <div className="relative inline-block">
      <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2.5 cursor-pointer">
        <span className="text-sm font-medium">Select Option</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="absolute top-full left-0 mt-1 w-48 rounded-md border border-border bg-background shadow-lg z-50">
        <div className="p-1 space-y-1">
          <div className="px-2 py-1.5 text-sm rounded hover:bg-muted cursor-pointer">
            Option 1
          </div>
          <div className="px-2 py-1.5 text-sm rounded hover:bg-muted cursor-pointer">
            Option 2
          </div>
          <div className="px-2 py-1.5 text-sm rounded hover:bg-muted cursor-pointer">
            Option 3
          </div>
        </div>
      </div>
    </div>
  )
}
