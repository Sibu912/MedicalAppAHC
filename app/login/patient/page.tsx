"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, ArrowLeft } from "lucide-react"

export default function PatientLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // Demo login - in production, this would call an API
    if (email && password) {
      // Simulate successful login
      router.push("/patient/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <Image
          src="/healthcare-patient-using-digital-health-app.jpg"
          alt="Patient portal"
          width={960}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Heart className="h-10 w-10" />
              </div>
            </div>
            <h2 className="mb-4 text-4xl font-bold">Welcome to AHC</h2>
            <p className="text-lg text-white/90">
              Manage your healthcare journey with real-time medication tracking, seamless appointment booking, and
              community support
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-4 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="mb-4 flex justify-center lg:hidden">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">Patient Portal</h1>
            <p className="mt-2 text-muted-foreground">Sign in to manage your healthcare</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="patient@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Demo Credentials</span>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm">
                  <p className="font-medium">For testing purposes:</p>
                  <p className="text-muted-foreground">Email: demo@patient.com</p>
                  <p className="text-muted-foreground">Password: any password</p>
                </div>
              </div>

              <div className="mt-6 text-center text-sm">
                <Link href="/login/admin" className="text-primary hover:underline">
                  Admin? Sign in here
                </Link>
                {" · "}
                <Link href="/signup/patient" className="text-primary hover:underline">
                  Create account
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
