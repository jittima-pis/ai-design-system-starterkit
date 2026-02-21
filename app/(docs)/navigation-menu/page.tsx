'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  BasicNavigationMenu,
  NavigationWithDropdown,
  NavigationWithGrid,
  NavigationWithIcons,
  FullNavigationExample,
  CompactNavigation,
  MultiColumnDropdown,
  NavigationWithDescriptions,
  SimpleLinkNavigation,
  NavigationMixedContent,
} from '@/components/navigation-menu-demo'

export default function NavigationMenuPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Navigation Menu
              </h1>
              <p className="text-base text-muted-foreground w-full">
                A collection of links for navigating websites with dropdown menus and advanced layouts.
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
                href="https://ui.shadcn.com/docs/components/navigation-menu"
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

          {/* 1. Basic Navigation Menu */}
          <BasicNavigationMenu />

          <Separator />

          {/* 2. Navigation with Dropdown */}
          <NavigationWithDropdown />

          <Separator />

          {/* 3. Navigation with Grid Layout */}
          <NavigationWithGrid />

          <Separator />

          {/* 4. Navigation with Icons */}
          <NavigationWithIcons />

          <Separator />

          {/* 5. Full Navigation Example */}
          <FullNavigationExample />

          <Separator />

          {/* 6. Compact Navigation */}
          <CompactNavigation />

          <Separator />

          {/* 7. Multi-Column Dropdown */}
          <MultiColumnDropdown />

          <Separator />

          {/* 8. Navigation with Descriptions */}
          <NavigationWithDescriptions />

          <Separator />

          {/* 9. Simple Link Navigation */}
          <SimpleLinkNavigation />

          <Separator />

          {/* 10. Navigation with Mixed Content */}
          <NavigationMixedContent />
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
