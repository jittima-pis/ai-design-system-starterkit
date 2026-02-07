"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { FileText, Rocket, Settings, Users, Code, BookOpen, Zap } from "lucide-react"

// 1. Basic Navigation Menu
export function BasicNavigationMenu() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Basic Navigation</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Simple navigation with basic links
      </p>
    </div>
  )
}

// 2. Navigation with Dropdown
export function NavigationWithDropdown() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Dropdown Menu</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px]">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Navigation with dropdown content panel
      </p>
    </div>
  )
}

// 3. Navigation with Grid Layout
export function NavigationWithGrid() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Grid Layout Dropdown</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/button" title="Button">
                  Displays a button or a component that looks like a button.
                </ListItem>
                <ListItem href="/card" title="Card">
                  Displays a card with header, content, and footer.
                </ListItem>
                <ListItem href="/input" title="Input">
                  Displays a form input field or a component that looks like an input field.
                </ListItem>
                <ListItem href="/select" title="Select">
                  Displays a list of options for the user to pick from.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/examples" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Examples
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Dropdown with 2-column grid layout
      </p>
    </div>
  )
}

// 4. Navigation with Icons
export function NavigationWithIcons() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Icons</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px]">
                <ListItemWithIcon
                  href="/features/fast"
                  title="Lightning Fast"
                  icon={<Zap className="h-5 w-5" />}
                >
                  Built for performance and speed.
                </ListItemWithIcon>
                <ListItemWithIcon
                  href="/features/secure"
                  title="Secure by Default"
                  icon={<Settings className="h-5 w-5" />}
                >
                  Security best practices built in.
                </ListItemWithIcon>
                <ListItemWithIcon
                  href="/features/scalable"
                  title="Scalable"
                  icon={<Rocket className="h-5 w-5" />}
                >
                  Scales with your application needs.
                </ListItemWithIcon>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Dropdown items with icons
      </p>
    </div>
  )
}

// 5. Full Navigation Example
export function FullNavigationExample() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Complete Navigation</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <BookOpen className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/button" title="Button">
                  Displays a button or a component that looks like a button.
                </ListItem>
                <ListItem href="/card" title="Card">
                  Displays a card with header, content, and footer.
                </ListItem>
                <ListItem href="/input" title="Input">
                  Displays a form input field.
                </ListItem>
                <ListItem href="/select" title="Select">
                  Displays a list of options for the user to pick from.
                </ListItem>
                <ListItem href="/dialog" title="Dialog">
                  A modal dialog that interrupts the user with important content.
                </ListItem>
                <ListItem href="/dropdown" title="Dropdown Menu">
                  Displays a menu to the user triggered by a button.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Full navigation with featured section and multiple dropdowns
      </p>
    </div>
  )
}

// 6. Compact Navigation
export function CompactNavigation() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Compact Layout</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-3 w-[300px]">
                <ListItem href="/products/saas" title="SaaS">
                  Software as a Service solutions
                </ListItem>
                <ListItem href="/products/api" title="API">
                  Developer API platform
                </ListItem>
                <ListItem href="/products/cloud" title="Cloud">
                  Cloud infrastructure services
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Compact navigation with smaller dropdown
      </p>
    </div>
  )
}

// 7. Multi-Column Dropdown
export function MultiColumnDropdown() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Multi-Column Dropdown</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-3 gap-4 p-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Learn</h4>
                  <ul className="space-y-2">
                    <ListItem href="/docs" title="Documentation" />
                    <ListItem href="/guides" title="Guides" />
                    <ListItem href="/tutorials" title="Tutorials" />
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Community</h4>
                  <ul className="space-y-2">
                    <ListItem href="/blog" title="Blog" />
                    <ListItem href="/forum" title="Forum" />
                    <ListItem href="/discord" title="Discord" />
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Support</h4>
                  <ul className="space-y-2">
                    <ListItem href="/help" title="Help Center" />
                    <ListItem href="/contact" title="Contact" />
                    <ListItem href="/status" title="Status" />
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Dropdown with 3-column layout and section headers
      </p>
    </div>
  )
}

// 8. Navigation with Descriptions
export function NavigationWithDescriptions() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">With Descriptions</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[500px]">
                <ListItem
                  href="/solutions/enterprise"
                  title="Enterprise"
                >
                  Complete enterprise solution with advanced features and dedicated support.
                </ListItem>
                <ListItem
                  href="/solutions/teams"
                  title="Teams"
                >
                  Collaboration tools designed for teams of all sizes.
                </ListItem>
                <ListItem
                  href="/solutions/individual"
                  title="Individual"
                >
                  Perfect for individual developers and freelancers.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Items with detailed descriptions
      </p>
    </div>
  )
}

// 9. Simple Link Navigation
export function SimpleLinkNavigation() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Simple Links</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/home" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/features" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Navigation with only simple links (no dropdowns)
      </p>
    </div>
  )
}

// 10. Navigation with Mixed Content
export function NavigationMixedContent() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium">Mixed Content</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                <ListItem href="/products/web" title="Web Platform">
                  Build modern web applications
                </ListItem>
                <ListItem href="/products/mobile" title="Mobile SDK">
                  Native mobile development tools
                </ListItem>
                <ListItem href="/products/api" title="API Services">
                  RESTful and GraphQL APIs
                </ListItem>
                <ListItem href="/products/cloud" title="Cloud Infrastructure">
                  Scalable cloud solutions
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px]">
                <ListItem href="/about" title="About Us">
                  Learn about our mission and team
                </ListItem>
                <ListItem href="/careers" title="Careers">
                  Join our growing team
                </ListItem>
                <ListItem href="/blog" title="Blog">
                  Latest news and updates
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        Combination of simple links and dropdown menus
      </p>
    </div>
  )
}

// Helper Components
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const ListItemWithIcon = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: React.ReactNode }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
            {icon}
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItemWithIcon.displayName = "ListItemWithIcon"
