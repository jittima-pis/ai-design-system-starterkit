"use client"

import { CalendarDays } from "lucide-react"

// Next.js icon placeholder - using a simple avatar style
const NextJsIcon = () => (
  <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
    <svg width="20" height="20" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black"/>
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="white"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
)

// Button State (Closed)
export function HoverCardButton() {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col h-9 items-center justify-center px-4 py-2 rounded-lg">
        <p className="text-sm font-medium">@nextjs</p>
      </div>
    </div>
  )
}

// Hover State (Open) - Static Display
export function HoverCardOpen() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Button with underline */}
      <div className="flex flex-col h-9 items-center justify-center px-4 py-2 rounded-lg">
        <p className="text-sm font-medium">@nextjs</p>
        <div className="w-full h-[1px] bg-border" />
      </div>

      {/* Hover Card */}
      <div className="bg-popover border rounded-md shadow-md flex items-start p-4 mt-2">
        {/* Icon */}
        <div className="shrink-0">
          <NextJsIcon />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 pl-4 w-[240px]">
          <p className="text-sm font-semibold">@nextjs</p>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <p className="text-xs text-muted-foreground">
            Joined December 2021
          </p>
        </div>
      </div>
    </div>
  )
}
