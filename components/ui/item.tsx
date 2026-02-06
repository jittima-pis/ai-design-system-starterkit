"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "muted"
  size?: "default" | "compact"
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "rounded-[6px] flex flex-col",
          // Padding based on size
          size === "compact" ? "px-4 py-3 gap-2.5" : "p-4 gap-4",
          // Variant styles
          variant === "outline" && "border border-border",
          variant === "muted" && "bg-[rgba(245,245,245,0.5)]",
          className
        )}
        {...props}
      />
    )
  }
)
Item.displayName = "Item"

const ItemHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-start gap-4", className)}
    {...props}
  />
))
ItemHeader.displayName = "ItemHeader"

const ItemIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("shrink-0", className)}
    {...props}
  />
))
ItemIcon.displayName = "ItemIcon"

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 space-y-1", className)}
    {...props}
  />
))
ItemContent.displayName = "ItemContent"

const ItemTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
ItemTitle.displayName = "ItemTitle"

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
ItemDescription.displayName = "ItemDescription"

const ItemActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
))
ItemActions.displayName = "ItemActions"

export {
  Item,
  ItemHeader,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
}
