import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[980px] flex-col items-start gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build your component library
        </h1>
        <p className="text-xl text-muted-foreground max-w-[750px]">
          Beautifully designed components built with Radix UI and Tailwind CSS.
          Accessible. Customizable. Open Source.
        </p>
      </div>

      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/button">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://github.com/shadcn/ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Button>
      </div>

      <div className="mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/button"
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold">Button</h3>
            <p className="text-sm text-muted-foreground">
              Displays a button or a component that looks like a button.
            </p>
          </Link>
          <Link
            href="/input"
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold">Input</h3>
            <p className="text-sm text-muted-foreground">
              Displays a form input field or a component that looks like an input field.
            </p>
          </Link>
          <Link
            href="/select"
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold">Select</h3>
            <p className="text-sm text-muted-foreground">
              Displays a list of options for the user to pick from—triggered by a button.
            </p>
          </Link>
          <Link
            href="/dialog"
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold">Dialog</h3>
            <p className="text-sm text-muted-foreground">
              A window overlaid on either the primary window or another dialog window.
            </p>
          </Link>
          <Link
            href="/table"
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold">Table</h3>
            <p className="text-sm text-muted-foreground">
              A responsive table component.
            </p>
          </Link>
          <Link
            href="/tabs"
            className="group flex flex-col gap-2 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold">Tabs</h3>
            <p className="text-sm text-muted-foreground">
              A set of layered sections of content—known as tab panels—that are displayed one at a time.
            </p>
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            View all 56 components in the sidebar →
          </p>
        </div>
      </div>
    </div>
  )
}
