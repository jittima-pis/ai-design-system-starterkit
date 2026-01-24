'use client'

import { ExternalLink } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function AvatarPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Avatar
              </h1>
              <p className="text-base text-muted-foreground">
                An image element with a fallback for representing the user.
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
                href="https://ui.shadcn.com/docs/components/avatar"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Avatar examples container */}
          <div className="space-y-8">
            {/* Circle Avatars */}
            <div>
              <h3 className="text-sm font-medium mb-4">Circle</h3>
              <div className="flex items-center gap-4">
                {/* With Image */}
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                {/* Fallback - Different sizes */}
                <Avatar className="size-10">
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    AB
                  </AvatarFallback>
                </Avatar>

                <Avatar className="size-12">
                  <AvatarFallback className="bg-green-100 text-green-600">
                    JD
                  </AvatarFallback>
                </Avatar>

                <Avatar className="size-14">
                  <AvatarFallback className="bg-purple-100 text-purple-600">
                    MK
                  </AvatarFallback>
                </Avatar>

                <Avatar className="size-16">
                  <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <Separator />

            {/* Square Avatars */}
            <div>
              <h3 className="text-sm font-medium mb-4">Square</h3>
              <div className="flex items-center gap-4">
                {/* Square avatars with rounded corners */}
                <Avatar className="size-10 rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Avatar className="size-10 rounded-md">
                  <AvatarFallback className="bg-orange-100 text-orange-600">
                    TW
                  </AvatarFallback>
                </Avatar>

                <Avatar className="size-12 rounded-md">
                  <AvatarFallback className="bg-pink-100 text-pink-600">
                    UI
                  </AvatarFallback>
                </Avatar>

                <Avatar className="size-14 rounded-md">
                  <AvatarFallback className="bg-indigo-100 text-indigo-600">
                    DX
                  </AvatarFallback>
                </Avatar>

                <Avatar className="size-16 rounded-md">
                  <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <Separator />

            {/* Avatar Group */}
            <div>
              <h3 className="text-sm font-medium mb-4">Avatar Group</h3>
              <div className="flex items-center">
                {/* Overlapping avatars */}
                <Avatar className="size-10 border-2 border-background relative z-30">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background -ml-3 relative z-20">
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    U2
                  </AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background -ml-3 relative z-10">
                  <AvatarFallback className="bg-green-100 text-green-600">
                    U3
                  </AvatarFallback>
                </Avatar>
                <Avatar className="size-10 border-2 border-background -ml-3">
                  <AvatarFallback className="bg-purple-100 text-purple-600">
                    U4
                  </AvatarFallback>
                </Avatar>
                <div className="size-10 rounded-full border-2 border-background -ml-3 flex items-center justify-center bg-muted text-xs font-medium">
                  +5
                </div>
              </div>
            </div>

            <Separator />

            {/* Different States */}
            <div>
              <h3 className="text-sm font-medium mb-4">With Status Indicator</h3>
              <div className="flex items-center gap-6">
                {/* Online */}
                <div className="relative">
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Online" />
                    <AvatarFallback>ON</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                </div>

                {/* Away */}
                <div className="relative">
                  <Avatar className="size-12">
                    <AvatarFallback className="bg-amber-100 text-amber-600">
                      AW
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
                </div>

                {/* Offline */}
                <div className="relative">
                  <Avatar className="size-12">
                    <AvatarFallback className="bg-slate-100 text-slate-600">
                      OF
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-400 ring-2 ring-background" />
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
