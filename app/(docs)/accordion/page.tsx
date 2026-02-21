'use client'

import { ExternalLink } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Accordion
              </h1>
              <p className="text-base text-muted-foreground">
                A vertically stacked set of interactive headings that each reveal a section of content.
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
                href="https://ui.shadcn.com/docs/components/accordion"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Accordion component */}
          <div className="rounded-xl border border-dashed border-border p-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm font-medium">
                  Product Information
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground space-y-4">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek design.
                    Built with premium materials, it offers unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an intuitive user
                    interface designed for both beginners and experts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm font-medium">
                  Shipping Details
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground">
                  <p>
                    We offer free standard shipping on all orders over $50. Express shipping
                    options are available at checkout for faster delivery.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm font-medium">
                  Return Policy
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground">
                  <p>
                    We accept returns within 30 days of purchase. Items must be unused and in
                    their original packaging. Return shipping is free for defective items.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
