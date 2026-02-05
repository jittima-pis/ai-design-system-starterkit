import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-sm">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm" className="h-9">
            Sign up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="h-9"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <button className="text-sm text-foreground hover:underline">
              Forgot password?
            </button>
          </div>
          <Input id="password" type="password" className="h-9" />
        </div>
        <div className="space-y-2">
          <Button variant="default" size="default" className="w-full h-9">
            Login
          </Button>
          <Button variant="secondary" size="default" className="w-full h-9">
            Login with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
