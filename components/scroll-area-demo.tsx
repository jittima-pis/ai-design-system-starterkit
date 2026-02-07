"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// 1. Vertical Scroll Area - Tags with versions
export function ScrollAreaVertical() {
  const tags = [
    "v1.2.0-beta.50",
    "v1.2.0-beta.49",
    "v1.2.0-beta.48",
    "v1.2.0-beta.47",
    "v1.2.0-beta.46",
    "v1.2.0-beta.45",
    "v1.2.0-beta.44",
    "v1.2.0-beta.43",
    "v1.2.0-beta.42",
    "v1.2.0-beta.41",
    "v1.2.0-beta.40",
    "v1.2.0-beta.39",
    "v1.2.0-beta.38",
    "v1.2.0-beta.37",
    "v1.2.0-beta.36",
    "v1.2.0-beta.35",
  ]

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Vertical Scroll Area</h3>
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
      <p className="text-xs text-muted-foreground">
        Vertical scrolling area showing version tags
      </p>
    </div>
  )
}

// 2. Horizontal Scroll Area - Artwork with credits
export function ScrollAreaHorizontal() {
  const artworks = [
    {
      artist: "Ornella Binni",
      art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Tom Byrom",
      art: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Vladimir Malyavko",
      art: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=300&q=80",
    },
  ]

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Horizontal Scroll Area</h3>
      <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {artworks.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <p className="text-xs text-muted-foreground">
        Horizontal scrolling area showing artwork with photo credits
      </p>
    </div>
  )
}
