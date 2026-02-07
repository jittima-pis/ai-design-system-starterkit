"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

// Sonner Toast from Figma - Event created with Undo action
export function SonnerDemo() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Sonner</h3>
      <div>
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Toast notification with title, description, and action button
      </p>
    </div>
  )
}
