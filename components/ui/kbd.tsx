"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  keys?: string[]
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, keys, children, ...props }, ref) => {
    if (keys && keys.length > 0) {
      return (
        <span className="inline-flex items-center gap-1">
          {keys.map((key, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="text-sm text-muted-foreground">+</span>
              )}
              <kbd
                className={cn(
                  "pointer-events-none inline-flex h-5 min-w-[20px] select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-normal text-muted-foreground",
                  className
                )}
              >
                {key}
              </kbd>
            </React.Fragment>
          ))}
        </span>
      )
    }

    return (
      <kbd
        ref={ref}
        className={cn(
          "pointer-events-none inline-flex h-5 min-w-[20px] select-none items-center justify-center rounded border border-border bg-muted px-1 font-mono text-xs font-normal text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </kbd>
    )
  }
)
Kbd.displayName = "Kbd"

export { Kbd }
