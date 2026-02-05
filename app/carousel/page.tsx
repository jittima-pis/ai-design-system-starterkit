'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DefaultCarousel,
  CarouselWithCounter,
  CarouselSizes,
  CarouselOrientation,
} from '@/components/carousel-demos'

export default function CarouselPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Carousel
              </h1>
              <p className="text-base text-muted-foreground">
                A carousel with motion and swipe built using Embla.
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
                href="https://ui.shadcn.com/docs/components/carousel"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Default Carousel */}
          <div className="flex items-center justify-center mb-10">
            <DefaultCarousel />
          </div>

          <Separator className="my-10" />

          {/* Sizes - Multiple slides */}
          <div className="flex items-center justify-center mb-10">
            <CarouselSizes />
          </div>

          <Separator className="my-10" />

          {/* Orientation - Vertical */}
          <div className="flex items-center justify-center mb-10">
            <CarouselOrientation />
          </div>

          <Separator className="my-10" />

          {/* API - With slide counter */}
          <div className="flex items-center justify-center">
            <CarouselWithCounter />
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
