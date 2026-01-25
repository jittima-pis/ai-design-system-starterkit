'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

export default function ButtonGroupPage() {
  const [selected1, setSelected1] = useState('left')
  const [selected2, setSelected2] = useState('horizontal')
  const [selected3, setSelected3] = useState('small')

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main container matching Figma design */}
        <div className="rounded-3xl border border-border bg-card p-14">
          {/* Title section */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">
                Button Group
              </h1>
              <p className="text-base text-muted-foreground">
                A set of related buttons grouped together.
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
                href="https://ui.shadcn.com/docs/components/button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Shadcn
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Button Group component matching Figma design */}
          <div className="rounded-xl border border-dashed border-border p-8">
            <div className="space-y-10">
              {/* Default Button Group */}
              <div>
                <p className="text-xs text-muted-foreground mb-3">Button Group</p>
                <div className="inline-flex rounded-md" role="group">
                  <Button
                    variant={selected1 === 'left' ? 'default' : 'outline'}
                    className="rounded-r-none"
                    onClick={() => setSelected1('left')}
                  >
                    Button
                  </Button>
                  <Button
                    variant={selected1 === 'center' ? 'default' : 'outline'}
                    className="rounded-none border-l-0"
                    onClick={() => setSelected1('center')}
                  >
                    Button
                  </Button>
                  <Button
                    variant={selected1 === 'right' ? 'default' : 'outline'}
                    className="rounded-l-none border-l-0"
                    onClick={() => setSelected1('right')}
                  >
                    Button
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Orientation - Horizontal and Vertical */}
              <div>
                <p className="text-xs text-muted-foreground mb-3">Orientation</p>
                <div className="flex gap-8">
                  {/* Horizontal */}
                  <div className="inline-flex rounded-md" role="group">
                    <Button
                      variant={selected2 === 'horizontal' ? 'default' : 'outline'}
                      className="rounded-r-none"
                      onClick={() => setSelected2('horizontal')}
                    >
                      Button
                    </Button>
                    <Button
                      variant={selected2 === 'horizontal2' ? 'default' : 'outline'}
                      className="rounded-none border-l-0"
                      onClick={() => setSelected2('horizontal2')}
                    >
                      Button
                    </Button>
                    <Button
                      variant={selected2 === 'horizontal3' ? 'default' : 'outline'}
                      className="rounded-l-none border-l-0"
                      onClick={() => setSelected2('horizontal3')}
                    >
                      Button
                    </Button>
                  </div>

                  {/* Vertical */}
                  <div className="inline-flex flex-col rounded-md" role="group">
                    <Button
                      variant={selected2 === 'vertical' ? 'default' : 'outline'}
                      className="rounded-b-none"
                      onClick={() => setSelected2('vertical')}
                    >
                      Button
                    </Button>
                    <Button
                      variant={selected2 === 'vertical2' ? 'default' : 'outline'}
                      className="rounded-none border-t-0"
                      onClick={() => setSelected2('vertical2')}
                    >
                      Button
                    </Button>
                    <Button
                      variant={selected2 === 'vertical3' ? 'default' : 'outline'}
                      className="rounded-t-none border-t-0"
                      onClick={() => setSelected2('vertical3')}
                    >
                      Button
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Different Sizes */}
              <div>
                <p className="text-xs text-muted-foreground mb-3">Button Sizes</p>
                <div className="space-y-4">
                  {/* Small */}
                  <div className="inline-flex rounded-md" role="group">
                    <Button
                      variant={selected3 === 'small' ? 'default' : 'outline'}
                      size="sm"
                      className="rounded-r-none"
                      onClick={() => setSelected3('small')}
                    >
                      Button
                    </Button>
                    <Button
                      variant={selected3 === 'small2' ? 'default' : 'outline'}
                      size="sm"
                      className="rounded-none border-l-0"
                      onClick={() => setSelected3('small2')}
                    >
                      Button
                    </Button>
                    <Button
                      variant={selected3 === 'small3' ? 'default' : 'outline'}
                      size="sm"
                      className="rounded-l-none border-l-0"
                      onClick={() => setSelected3('small3')}
                    >
                      Button
                    </Button>
                  </div>

                  {/* Default */}
                  <div className="inline-flex rounded-md" role="group">
                    <Button
                      variant="outline"
                      className="rounded-r-none"
                    >
                      Button
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-none border-l-0"
                    >
                      Button
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-l-none border-l-0"
                    >
                      Button
                    </Button>
                  </div>

                  {/* Large */}
                  <div className="inline-flex rounded-md" role="group">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-r-none"
                    >
                      Button
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-none border-l-0"
                    >
                      Button
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-l-none border-l-0"
                    >
                      Button
                    </Button>
                  </div>
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
