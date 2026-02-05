"use client"

import { ArrowUpRight, Bell, Cloud, FolderCode, Plus, RefreshCcw, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Avatar images (using placeholder paths)
const avatarImage1 = "https://i.pravatar.cc/150?img=1"
const avatarImage2 = "https://i.pravatar.cc/150?img=2"
const avatarImage3 = "https://i.pravatar.cc/150?img=3"

// 1. Empty - No Projects Yet
export function EmptyDefault() {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full">
      <div className="flex flex-col gap-6 items-center w-[384px]">
        {/* Icon and Text */}
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="bg-muted flex items-center justify-center rounded-lg w-10 h-10">
            <FolderCode className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium">No Projects Yet</h3>
          <p className="text-sm text-muted-foreground text-center">
            You haven&apos;t created any projects yet. Get started by creating your first project.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 items-start">
          <Button className="h-8 px-4 py-2">
            Create Project
          </Button>
          <Button variant="outline" className="h-8 px-4 py-2">
            Import Project
          </Button>
        </div>

        {/* Learn More Link */}
        <div className="flex gap-1.5 items-center justify-center h-8 px-2.5 rounded-md">
          <span className="text-sm font-medium text-muted-foreground">
            Learn More
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  )
}

// 2. Outline - Cloud Storage Empty
export function EmptyOutline() {
  return (
    <div className="border border-dashed flex flex-col items-center justify-center p-12 rounded-lg w-full">
      <div className="flex flex-col gap-6 items-center w-[384px]">
        {/* Icon and Text */}
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="bg-muted flex items-center justify-center rounded-lg w-10 h-10">
            <Cloud className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium">Cloud Storage Empty</h3>
          <p className="text-sm text-muted-foreground text-center">
            Upload files to your cloud storage to access them anywhere.
          </p>
        </div>

        {/* Action Button */}
        <Button variant="outline" className="h-8">
          Upload Files
        </Button>
      </div>
    </div>
  )
}

// 3. Background - No Notifications
export function EmptyBackground() {
  return (
    <div className="bg-gradient-to-b from-muted/50 to-muted/30 flex flex-col items-center justify-center p-12 rounded-lg w-full">
      <div className="flex flex-col gap-6 items-center w-[384px]">
        {/* Icon and Text */}
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="bg-muted flex items-center justify-center rounded-lg w-10 h-10">
            <Bell className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium">No Notifications</h3>
          <p className="text-sm text-muted-foreground text-center">
            You&apos;re all caught up. New notifications will appear here.
          </p>
        </div>

        {/* Action Button */}
        <Button variant="outline" className="h-8 gap-3">
          <RefreshCcw className="h-4 w-4" />
          Refresh
        </Button>
      </div>
    </div>
  )
}

// 4. Avatar - User Offline
export function EmptyAvatar() {
  return (
    <div className="flex flex-col items-center justify-center p-12 rounded-lg w-full">
      <div className="flex flex-col gap-6 items-center w-full">
        {/* Icon and Text */}
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="relative rounded-full w-12 h-12 overflow-hidden">
            <img
              src={avatarImage1}
              alt="User avatar"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-medium">User Offline</h3>
          <p className="text-sm text-muted-foreground text-center">
            This user is currently offline. You can leave a message to notify them or try again later.
          </p>
        </div>

        {/* Action Button */}
        <Button className="h-8 px-3 text-xs">
          Leave Message
        </Button>
      </div>
    </div>
  )
}

// 5. Avatar Group - No Team Members
export function EmptyAvatarGroup() {
  return (
    <div className="flex flex-col items-center justify-center p-12 rounded-lg w-full">
      <div className="flex flex-col gap-6 items-center w-full">
        {/* Icon and Text */}
        <div className="flex flex-col gap-2 items-center w-full">
          {/* Avatar Group */}
          <div className="flex items-center pr-2">
            <div className="relative rounded-full w-12 h-12 -mr-2 overflow-hidden">
              <img
                src={avatarImage1}
                alt="Avatar 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-full w-12 h-12 -mr-2 border overflow-hidden">
              <img
                src={avatarImage2}
                alt="Avatar 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-full w-12 h-12 -mr-2 border overflow-hidden">
              <img
                src={avatarImage3}
                alt="Avatar 3"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-lg font-medium">No Team Members</h3>
          <p className="text-sm text-muted-foreground text-center">
            Invite your team to collaborate on this project.
          </p>
        </div>

        {/* Action Button */}
        <Button className="h-8 gap-1.5">
          <Plus className="h-4 w-4" />
          Invite Members
        </Button>
      </div>
    </div>
  )
}

// 6. Input Group - 404 Not Found
export function EmptyInputGroup() {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full">
      <div className="flex flex-col gap-6 items-center w-[384px]">
        {/* Text */}
        <div className="flex flex-col gap-2 items-center w-full">
          <h3 className="text-lg font-medium">404 - Not Found</h3>
          <p className="text-sm text-muted-foreground text-center">
            The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need below.
          </p>
        </div>

        {/* Input and Link */}
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Search Input */}
          <div className="relative w-[288px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Try searching for pages..."
              className="h-9 pl-9 pr-12"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-muted flex items-center justify-center rounded-sm w-6 h-6">
              <span className="text-sm text-muted-foreground">/</span>
            </div>
          </div>

          {/* Help Link */}
          <div className="flex items-center justify-center gap-0">
            <span className="text-sm font-medium text-muted-foreground">Need help?</span>
            <span className="text-sm font-medium text-muted-foreground underline">Contact support</span>
          </div>
        </div>
      </div>
    </div>
  )
}
