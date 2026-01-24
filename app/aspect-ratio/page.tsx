'use client'

import { ExternalLink } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function AspectRatioPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Aspect Ratio
              </h1>
              <p className="text-base text-muted-foreground">
                Displays content within a desired ratio.
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
                href="https://ui.shadcn.com/docs/components/aspect-ratio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Aspect Ratio examples container */}
          <div className="space-y-8">
            {/* 16:9 - Standard Video */}
            <div>
              <h3 className="text-sm font-medium mb-4">16:9 - Standard Video</h3>
              <div className="w-full max-w-3xl">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="16:9 aspect ratio example"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Common for YouTube videos, HD television, and modern displays
              </p>
            </div>

            {/* 4:3 - Classic */}
            <div>
              <h3 className="text-sm font-medium mb-4">4:3 - Classic</h3>
              <div className="w-full max-w-2xl">
                <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&dpr=2&q=80"
                    alt="4:3 aspect ratio example"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Traditional TV and computer monitor format
              </p>
            </div>

            {/* 1:1 - Square */}
            <div>
              <h3 className="text-sm font-medium mb-4">1:1 - Square</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&dpr=2&q=80"
                    alt="Square aspect ratio 1"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
                <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&dpr=2&q=80"
                    alt="Square aspect ratio 2"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
                <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&dpr=2&q=80"
                    alt="Square aspect ratio 3"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Perfect for Instagram posts and profile pictures
              </p>
            </div>

            {/* 21:9 - Ultra Wide */}
            <div>
              <h3 className="text-sm font-medium mb-4">21:9 - Ultra Wide</h3>
              <div className="w-full">
                <AspectRatio ratio={21 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=1200&dpr=2&q=80"
                    alt="21:9 aspect ratio example"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Cinematic format, ultra-wide monitors
              </p>
            </div>

            {/* 2:3 - Portrait */}
            <div>
              <h3 className="text-sm font-medium mb-4">2:3 - Portrait</h3>
              <div className="w-full max-w-md">
                <AspectRatio ratio={2 / 3} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=600&dpr=2&q=80"
                    alt="2:3 portrait aspect ratio"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Common for portrait photography and mobile content
              </p>
            </div>

            {/* 9:16 - Vertical Video */}
            <div>
              <h3 className="text-sm font-medium mb-4">9:16 - Vertical Video</h3>
              <div className="flex gap-4">
                <div className="w-full max-w-[250px]">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=400&dpr=2&q=80"
                      alt="9:16 vertical video 1"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="w-full max-w-[250px]">
                  <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=400&dpr=2&q=80"
                      alt="9:16 vertical video 2"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                TikTok, Instagram Reels, YouTube Shorts format
              </p>
            </div>

            {/* Custom Aspect Ratio */}
            <div>
              <h3 className="text-sm font-medium mb-4">Custom - 3:2</h3>
              <div className="w-full max-w-2xl">
                <AspectRatio ratio={3 / 2} className="bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=800&dpr=2&q=80"
                    alt="3:2 aspect ratio example"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                35mm film and DSLR camera standard
              </p>
            </div>

            {/* With Placeholder */}
            <div>
              <h3 className="text-sm font-medium mb-4">With Placeholder Content</h3>
              <div className="w-full max-w-3xl">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                  <div className="flex h-full items-center justify-center p-6">
                    <div className="text-center space-y-2">
                      <div className="text-6xl">📸</div>
                      <p className="text-sm font-medium">16:9 Aspect Ratio</p>
                      <p className="text-xs text-muted-foreground">
                        Placeholder content for demonstration
                      </p>
                    </div>
                  </div>
                </AspectRatio>
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
