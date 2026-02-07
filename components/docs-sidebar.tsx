"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

const components = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/accordion" },
      { title: "Alert", href: "/alert" },
      { title: "Alert Dialog", href: "/alert-dialog" },
      { title: "Aspect Ratio", href: "/aspect-ratio" },
      { title: "Avatar", href: "/avatar" },
      { title: "Badge", href: "/badge" },
      { title: "Breadcrumb", href: "/breadcrumb" },
      { title: "Button", href: "/button" },
      { title: "Button Group", href: "/button-group" },
      { title: "Calendar", href: "/calendar" },
      { title: "Carousel", href: "/carousel" },
      { title: "Chart", href: "/chart" },
      { title: "Checkbox", href: "/checkbox" },
      { title: "Collapsible", href: "/collapsible" },
      { title: "Combobox", href: "/combobox" },
      { title: "Command", href: "/command" },
      { title: "Context Menu", href: "/context-menu" },
      { title: "Data Table", href: "/data-table" },
      { title: "Date Picker", href: "/date-picker" },
      { title: "Dialog", href: "/dialog" },
      { title: "Drawer", href: "/drawer" },
      { title: "Dropdown Menu", href: "/dropdown-menu" },
      { title: "Empty", href: "/empty" },
      { title: "Field", href: "/field" },
      { title: "Hover Card", href: "/hover-card" },
      { title: "Input", href: "/input" },
      { title: "Input Group", href: "/input-group" },
      { title: "Input OTP", href: "/input-otp" },
      { title: "Item", href: "/item" },
      { title: "KBD", href: "/kbd" },
      { title: "Label", href: "/label" },
      { title: "Login Card", href: "/login-card" },
      { title: "Menubar", href: "/menubar" },
      { title: "Native Select", href: "/native-select" },
      { title: "Navigation Menu", href: "/navigation-menu" },
      { title: "Pagination", href: "/pagination" },
      { title: "Popover", href: "/popover" },
      { title: "Progress", href: "/progress" },
      { title: "Radio Group", href: "/radio-group" },
      { title: "Scroll Area", href: "/scroll-area" },
      { title: "Select", href: "/select" },
      { title: "Separator", href: "/separator" },
      { title: "Sheet", href: "/sheet" },
      { title: "Sidebar", href: "/sidebar" },
      { title: "Skeleton", href: "/skeleton" },
      { title: "Slider", href: "/slider" },
      { title: "Sonner", href: "/sonner" },
      { title: "Spinner", href: "/spinner" },
      { title: "Switch", href: "/switch" },
      { title: "Table", href: "/table" },
      { title: "Tabs", href: "/tabs" },
      { title: "Textarea", href: "/textarea" },
      { title: "Toggle", href: "/toggle" },
      { title: "Toggle Group", href: "/toggle-group" },
      { title: "Tooltip", href: "/tooltip" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <ScrollArea className="h-[calc(100vh-3.5rem)] py-6 pl-8 pr-6">
        <div className="space-y-6">
          {components.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 px-2 text-sm font-semibold">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
