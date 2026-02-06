"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

// 1. Basic 6-Digit OTP
export function BasicOTP() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium">Verification Code</Label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Enter the 6-digit code sent to your device
      </p>
    </div>
  )
}

// 2. OTP with Separator (3-3 format)
export function OTPWithSeparator() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium">Authentication Code</Label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Enter code in format: XXX-XXX
      </p>
    </div>
  )
}

// 3. 4-Digit PIN Code
export function FourDigitPIN() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium">PIN Code</Label>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Enter your 4-digit PIN
      </p>
    </div>
  )
}

// 4. 2FA Code with 2-2-2 Format
export function TwoFactorAuth() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium">Two-Factor Authentication</Label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Enter code from your authenticator app
      </p>
    </div>
  )
}

// 5. Disabled State
export function DisabledOTP() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium text-muted-foreground">
        Verification Code (Disabled)
      </Label>
      <InputOTP maxLength={6} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        This field is currently disabled
      </p>
    </div>
  )
}

// 6. Compact 4-Digit Code
export function CompactOTP() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium">SMS Verification</Label>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Check your SMS for the code
      </p>
    </div>
  )
}

// 7. Long Code (8-digit)
export function LongCodeOTP() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-2xl">
      <Label className="text-sm font-medium">Recovery Code</Label>
      <InputOTP maxLength={8}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Enter your 8-digit recovery code
      </p>
    </div>
  )
}

// 8. With Filled Value Example
export function FilledOTP() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Label className="text-sm font-medium">Verification Complete</Label>
      <InputOTP maxLength={6} value="123456">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-green-600">
        ✓ Code verified successfully
      </p>
    </div>
  )
}
