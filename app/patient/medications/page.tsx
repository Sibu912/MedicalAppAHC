"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Search,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Clock,
  Bell,
  Settings,
  LogOut,
  ArrowLeft,
  Package,
  Truck,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MedicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/patient/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Medication Tracking</h1>
              <p className="text-xs text-muted-foreground">Real-time availability</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Image Banner */}
        <div className="mb-6 relative overflow-hidden rounded-xl">
          <Image
            src="/pharmacy-medication-shelves-organized.jpg"
            alt="Medication management"
            width={1200}
            height={200}
            className="h-48 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <h2 className="text-3xl font-bold text-white">Medication Tracking</h2>
              <p className="text-white/90">Real-time stock monitoring and availability</p>
            </div>
          </div>
        </div>

        {/* Critical Alert */}
        <Card className="mb-6 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
          <CardContent className="flex items-start gap-3 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-500" />
            <div className="flex-1">
              <p className="font-medium text-amber-900 dark:text-amber-100">
                Metformin 500mg is running low (5 doses left)
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Check availability at nearby clinics or request delivery below
              </p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="my-medications" className="space-y-6">
          <TabsList>
            <TabsTrigger value="my-medications">My Medications</TabsTrigger>
            <TabsTrigger value="availability">Check Availability</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="my-medications" className="space-y-6">
            {/* Active Medications */}
            <Card>
              <CardHeader>
                <CardTitle>Active Prescriptions</CardTitle>
                <CardDescription>Your current medication schedule and stock levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Medication 1 - Low Stock */}
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-semibold">Metformin 500mg</h3>
                        <Badge className="bg-amber-600 dark:bg-amber-700">Low Stock</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">For Type 2 Diabetes</p>
                      <p className="mt-1 text-sm text-muted-foreground">Prescribed by Dr. Michael Chen</p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Stock Level</span>
                      <span className="font-medium text-amber-700 dark:text-amber-300">5 doses remaining</span>
                    </div>
                    <Progress value={16} className="h-2" />
                    <p className="text-xs text-muted-foreground">Estimated to last 2.5 days</p>
                  </div>

                  <div className="mb-4 rounded-lg bg-background p-3">
                    <p className="mb-2 text-sm font-medium">Dosage Schedule</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Morning (8:00 AM)</span>
                        <Badge variant="secondary" className="text-xs">
                          1 tablet
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Evening (8:00 PM)</span>
                        <Badge variant="secondary" className="text-xs">
                          1 tablet
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      <MapPin className="mr-2 h-4 w-4" />
                      Find Nearby
                    </Button>
                    <Button className="flex-1">
                      <Truck className="mr-2 h-4 w-4" />
                      Request Delivery
                    </Button>
                  </div>
                </div>

                {/* Medication 2 - In Stock */}
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-semibold">Lisinopril 10mg</h3>
                        <Badge variant="secondary">In Stock</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">For Hypertension</p>
                      <p className="mt-1 text-sm text-muted-foreground">Prescribed by Dr. Emily Johnson</p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Stock Level</span>
                      <span className="font-medium text-green-700 dark:text-green-400">28 doses remaining</span>
                    </div>
                    <Progress value={93} className="h-2" />
                    <p className="text-xs text-muted-foreground">Estimated to last 28 days</p>
                  </div>

                  <div className="mb-4 rounded-lg bg-muted p-3">
                    <p className="mb-2 text-sm font-medium">Dosage Schedule</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Morning (8:00 AM)</span>
                        <Badge variant="secondary" className="text-xs">
                          1 tablet
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      View Details
                    </Button>
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Set Reminder
                    </Button>
                  </div>
                </div>

                {/* Medication 3 - In Stock */}
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-semibold">Atorvastatin 20mg</h3>
                        <Badge variant="secondary">In Stock</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">For High Cholesterol</p>
                      <p className="mt-1 text-sm text-muted-foreground">Prescribed by Dr. Emily Johnson</p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Stock Level</span>
                      <span className="font-medium text-green-700 dark:text-green-400">25 doses remaining</span>
                    </div>
                    <Progress value={83} className="h-2" />
                    <p className="text-xs text-muted-foreground">Estimated to last 25 days</p>
                  </div>

                  <div className="mb-4 rounded-lg bg-muted p-3">
                    <p className="mb-2 text-sm font-medium">Dosage Schedule</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Evening (8:00 PM)</span>
                        <Badge variant="secondary" className="text-xs">
                          1 tablet
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      View Details
                    </Button>
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Set Reminder
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adherence Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Medication Adherence</CardTitle>
                <CardDescription>Your medication-taking consistency this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">94%</p>
                    <p className="text-sm text-muted-foreground">Overall adherence rate</p>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                    <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <Progress value={94} className="mb-4 h-3" />
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <p className="text-sm text-muted-foreground">Doses Taken</p>
                    <p className="text-2xl font-bold">85</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="text-sm text-muted-foreground">Doses Missed</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="text-sm text-muted-foreground">On-Time Rate</p>
                    <p className="text-2xl font-bold">91%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Check Medication Availability</CardTitle>
                <CardDescription>Find your medications at nearby clinics and pharmacies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search for medication..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Location 1 - In Stock */}
                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Central Health Clinic</h3>
                          <Badge className="bg-green-600 dark:bg-green-700">In Stock</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Metformin 500mg available</p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>1.2 km away • 123 Main Street</span>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-sm">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-green-700 dark:text-green-400">50+ units available</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-transparent" variant="outline">
                        Get Directions
                      </Button>
                      <Button className="flex-1">Reserve Now</Button>
                    </div>
                  </div>

                  {/* Location 2 - Low Stock */}
                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Westside Pharmacy</h3>
                          <Badge className="bg-amber-600 dark:bg-amber-700">Low Stock</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Metformin 500mg available</p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>2.8 km away • 456 West Avenue</span>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-sm">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-amber-700 dark:text-amber-400">8 units available</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-transparent" variant="outline">
                        Get Directions
                      </Button>
                      <Button className="flex-1">Reserve Now</Button>
                    </div>
                  </div>

                  {/* Location 3 - Out of Stock */}
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold text-red-900 dark:text-red-100">Eastside Medical Center</h3>
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                        <p className="text-sm text-red-700 dark:text-red-300">Metformin 500mg unavailable</p>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-sm text-red-700 dark:text-red-300">
                      <MapPin className="h-4 w-4" />
                      <span>3.5 km away • 789 East Boulevard</span>
                    </div>
                    <div className="mb-3 flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-red-600 dark:text-red-500" />
                      <span className="font-medium text-red-700 dark:text-red-300">Expected restock in 3-5 days</span>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline" disabled>
                      Currently Unavailable
                    </Button>
                  </div>
                </div>

                {/* Delivery Option */}
                <Card className="mt-6 border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Can't find your medication nearby?</p>
                        <p className="text-sm text-muted-foreground">
                          Request delivery from our partner pharmacies. Delivery within 24-48 hours.
                        </p>
                        <Button className="mt-3">Request Delivery Service</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Medication History</CardTitle>
                <CardDescription>Your past prescriptions and refills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Lisinopril 10mg - Refilled</p>
                      <p className="text-sm text-muted-foreground">30-day supply • Central Health Clinic</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Metformin 500mg - Refilled</p>
                      <p className="text-sm text-muted-foreground">30-day supply • Westside Pharmacy</p>
                    </div>
                    <span className="text-sm text-muted-foreground">15 days ago</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Atorvastatin 20mg - Refilled</p>
                      <p className="text-sm text-muted-foreground">30-day supply • Central Health Clinic</p>
                    </div>
                    <span className="text-sm text-muted-foreground">20 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
