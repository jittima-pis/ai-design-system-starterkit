'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  BasicItemWithBorder,
  CompactItemWithIcons,
  DefaultVariantItem,
  OutlineVariantItem,
  MutedVariantItem,
  DefaultSizeItem,
  CompactSizeItem,
  ItemWithIcon,
  ItemWithSingleAvatar,
  ItemWithAvatarGroup,
  ImageGroup,
  GroupWithSeparators,
  LinkItemDefault,
  LinkItemOutline,
  DropdownClosed,
  DropdownOpen,
} from '@/components/item-demo'

export default function ItemPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Item
              </h1>
              <p className="text-base text-muted-foreground w-full">
                Reusable item components with multiple variants and composition patterns.
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
                href="https://ui.shadcn.com"
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

          {/* Basic Items */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Basic Item with Border</h3>
            <BasicItemWithBorder />
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Compact Item with Icons</h3>
            <CompactItemWithIcons />
          </div>

          <Separator />

          {/* Style Variants */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Style Variants</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Default Variant</p>
                <DefaultVariantItem />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Outline Variant</p>
                <OutlineVariantItem />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Muted Variant</p>
                <MutedVariantItem />
              </div>
            </div>
          </div>

          <Separator />

          {/* Size Variants */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Size Variants</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Default Size (16px padding)</p>
                <DefaultSizeItem />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Compact Size (12px/16px padding)</p>
                <CompactSizeItem />
              </div>
            </div>
          </div>

          <Separator />

          {/* With Icon */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Item with Icon</h3>
            <ItemWithIcon />
          </div>

          <Separator />

          {/* With Avatar */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Items with Avatar</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Single Avatar</p>
                <ItemWithSingleAvatar />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Avatar Group</p>
                <ItemWithAvatarGroup />
              </div>
            </div>
          </div>

          <Separator />

          {/* Image Group */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Image Group</h3>
            <ImageGroup />
          </div>

          <Separator />

          {/* Group with Separators */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Group with Separators</h3>
            <div className="border border-border rounded-[6px] overflow-hidden">
              <GroupWithSeparators />
            </div>
          </div>

          <Separator />

          {/* Link Items */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Link Items</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Default Link</p>
                <LinkItemDefault />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Outline Link</p>
                <LinkItemOutline />
              </div>
            </div>
          </div>

          <Separator />

          {/* Dropdown */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Dropdown States</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Closed State</p>
                <DropdownClosed />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Open State</p>
                <div className="pb-32">
                  <DropdownOpen />
                </div>
              </div>
            </div>
          </div>
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
