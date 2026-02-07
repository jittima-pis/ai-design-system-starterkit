"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

// Custom pagination components matching exact Figma specs
const PaginationButton = ({
  children,
  isActive,
  className,
  ...props
}: {
  children: React.ReactNode
  isActive?: boolean
  className?: string
} & React.ComponentProps<"a">) => {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "h-9 w-9", // 36px × 36px from Figma
        "border border-input bg-background",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive && "border-border bg-background",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

const PaginationPreviousButton = ({
  className,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "h-9 px-3", // 36px height, padding for ~102px width from Figma
        "border border-input bg-background",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "gap-1",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="text-sm font-medium">Previous</span>
    </a>
  )
}

const PaginationNextButton = ({
  className,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "h-9 px-3", // 36px height, padding for ~102px width from Figma
        "border border-input bg-background",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "gap-1",
        className
      )}
      {...props}
    >
      <span className="text-sm font-medium">Next</span>
      <ChevronRight className="h-4 w-4" />
    </a>
  )
}

const PaginationEllipsisButton = () => {
  return (
    <div className="inline-flex items-center justify-center h-9 w-9">
      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}

// Exact Pagination from Figma
// Structure: Previous, 1, 2, 3, ..., Next
export function PaginationFromFigma() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Pagination</h3>
      <Pagination>
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPreviousButton href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationButton href="#">1</PaginationButton>
          </PaginationItem>
          <PaginationItem>
            <PaginationButton href="#" isActive>
              2
            </PaginationButton>
          </PaginationItem>
          <PaginationItem>
            <PaginationButton href="#">3</PaginationButton>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsisButton />
          </PaginationItem>
          <PaginationItem>
            <PaginationNextButton href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground">
        Pagination with page navigation, next and previous links.
      </p>
    </div>
  )
}
