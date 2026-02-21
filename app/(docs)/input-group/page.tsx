'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  SearchInputGroup,
  UrlInputGroup,
  ChatInputGroup,
  UsernameInputGroup,
  CodeEditorTextarea,
  LabelComponent,
  ButtonGroupComponent,
  TextareaComponent,
} from '@/components/input-group-demo'

export default function InputGroupPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design exactly */}
        <div className="rounded-3xl border border-border bg-card p-14 flex flex-col gap-10">
          {/* Title section */}
          <div className="flex gap-4 items-start w-full">
            <div className="flex-1 flex-col gap-2 flex items-start min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight w-full">
                Input Group
              </h1>
              <p className="text-base text-muted-foreground w-full">
                Display additional information or actions to an input or textarea.
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
                href="https://ui.shadcn.com/docs/components/input-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline flex items-center gap-1.5"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 1. Search Input Group */}
          <SearchInputGroup />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 2. URL Input Group */}
          <UrlInputGroup />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 3. Chat Input Group */}
          <ChatInputGroup />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 4. Username Input Group */}
          <UsernameInputGroup />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 5. Code Editor Textarea */}
          <CodeEditorTextarea />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 6. Label Component */}
          <LabelComponent />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 7. Button Group Component */}
          <ButtonGroupComponent />

          {/* Divider */}
          <div className="flex flex-col items-start justify-center py-2 w-full">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px border-t border-border" />
            </div>
          </div>

          {/* 8. Textarea Component */}
          <TextareaComponent />
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
