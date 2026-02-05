'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  EditProfileButton,
  EditProfileDialog,
  ShareButton,
  ShareDialog,
} from '@/components/dialog-demo'

export default function DialogPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2 max-w-lg">
              <h1 className="text-4xl font-semibold tracking-tight">
                Dialog
              </h1>
              <p className="text-base text-muted-foreground">
                A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
              </p>
            </div>

            {/* View in Shadcn button */}
            <Button
              variant="secondary"
              size="sm"
              className="gap-1.5 shadow-sm"
              asChild
            >
              <a
                href="https://ui.shadcn.com/docs/components/dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Separator className="my-10" />

          {/* Edit Profile Dialog */}
          <div className="mb-10">
            <EditProfileButton />
          </div>
          <div className="mb-10">
            <EditProfileDialog />
          </div>

          <Separator className="my-10" />

          {/* Share Link Dialog */}
          <div className="mb-10">
            <ShareButton />
          </div>
          <div>
            <ShareDialog />
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
