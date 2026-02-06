'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  MenuBarDefault,
  MenuBarHover,
  MenuBarEdit,
  MenuBarView,
  MenuBarProfiles,
  MenuBarShareSubmenu,
  MenuBarKeyboardShortcuts,
  MenuBarSeparators,
  MenuBarAllMenus,
  MenuBarComplete,
} from '@/components/menubar-demo'

export default function MenuBarPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                MenuBar
              </h1>
              <p className="text-base text-muted-foreground w-full">
                A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
              </p>
            </div>

            {/* View in Shadcn button */}
            <Button
              variant="secondary"
              size="sm"
              className="gap-1.5 shadow-sm h-8 px-3"
              asChild
            >
              <a
                href="https://ui.shadcn.com/docs/components/menubar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline flex items-center gap-1.5"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Separator />

          {/* 1. MenuBar - Default State (from Figma) */}
          <MenuBarDefault />

          <Separator />

          {/* 2. MenuBar - Hover State with File Menu Open (Exact Figma Design) */}
          <MenuBarHover />

          <Separator />

          {/* 3. MenuBar - Edit Menu Example */}
          <MenuBarEdit />

          <Separator />

          {/* 4. MenuBar - View Menu Example */}
          <MenuBarView />

          <Separator />

          {/* 5. MenuBar - Profiles Menu Example */}
          <MenuBarProfiles />

          <Separator />

          {/* 6. MenuBar - Share Submenu Example */}
          <MenuBarShareSubmenu />

          <Separator />

          {/* 7. MenuBar - Keyboard Shortcuts */}
          <MenuBarKeyboardShortcuts />

          <Separator />

          {/* 8. MenuBar - Separators */}
          <MenuBarSeparators />

          <Separator />

          {/* 9. MenuBar - All Menus */}
          <MenuBarAllMenus />

          <Separator />

          {/* 10. MenuBar - Complete Example (Figma Design) */}
          <MenuBarComplete />
        </div>

        {/* Back to Home button */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
