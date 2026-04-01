"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  CalendarIcon,
  Clock,
  MapPin,
  User,
  Bell,
  Settings,
  LogOut,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Video,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("")

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
              <h1 className="text-lg font-semibold">Appointments</h1>
              <p className="text-xs text-muted-foreground">Book and manage visits</p>
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
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="book">Book New</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {/* Priority Alert for Chronic Patients */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Chronic Care Priority Access</p>
                  <p className="text-sm text-muted-foreground">
                    As a chronic care patient, you have access to emergency slots and fast-track queues.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Your Upcoming Appointments</CardTitle>
                <CardDescription>Scheduled visits and consultations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Appointment 1 - Soon */}
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="font-semibold">Dr. Emily Johnson</h3>
                        <Badge>In 3 days</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Cardiology Checkup</p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span>Friday, January 25, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>10:30 AM - 11:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Central Health Clinic, Room 204</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span>In-Person Visit</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-background p-3">
                    <p className="mb-2 text-sm font-medium">Appointment Notes</p>
                    <p className="text-sm text-muted-foreground">
                      Regular checkup for blood pressure monitoring. Please bring your medication list.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Reschedule
                    </Button>
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Cancel
                    </Button>
                    <Button className="flex-1">Get Directions</Button>
                  </div>
                </div>

                {/* Appointment 2 */}
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="font-semibold">Dr. Michael Chen</h3>
                        <Badge variant="outline">In 2 weeks</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Diabetes Management</p>
                    </div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span>Wednesday, February 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>2:00 PM - 2:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span>Virtual Consultation</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-3">
                    <p className="mb-2 text-sm font-medium">Appointment Notes</p>
                    <p className="text-sm text-muted-foreground">
                      Follow-up on blood sugar levels. Review recent lab results.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Reschedule
                    </Button>
                    <Button className="flex-1 bg-transparent" variant="outline">
                      Cancel
                    </Button>
                    <Button className="flex-1">Join Video Call</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reminders */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment Reminders</CardTitle>
                <CardDescription>Stay on top of your scheduled visits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">24 hours before appointment</p>
                        <p className="text-xs text-muted-foreground">SMS and email notification</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">1 hour before appointment</p>
                        <p className="text-xs text-muted-foreground">Push notification</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="book" className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold">Ready to book an appointment?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Use our step-by-step booking wizard for a better experience
                </p>
                <Button asChild>
                  <Link href="/patient/appointments/book">Open Booking Wizard</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Book New Appointment</CardTitle>
                  <CardDescription>Schedule a visit with your healthcare provider</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Specialty</label>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="diabetes">Diabetes & Endocrinology</SelectItem>
                        <SelectItem value="general">General Medicine</SelectItem>
                        <SelectItem value="nephrology">Nephrology</SelectItem>
                        <SelectItem value="pulmonology">Pulmonology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Doctor</label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="johnson">Dr. Emily Johnson - Cardiology</SelectItem>
                        <SelectItem value="chen">Dr. Michael Chen - Diabetes</SelectItem>
                        <SelectItem value="patel">Dr. Priya Patel - General Medicine</SelectItem>
                        <SelectItem value="williams">Dr. James Williams - Nephrology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Appointment Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person Visit</SelectItem>
                        <SelectItem value="virtual">Virtual Consultation</SelectItem>
                        <SelectItem value="emergency">Emergency Slot (Chronic Care)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Available Time Slots */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Time Slots</CardTitle>
                  <CardDescription>
                    {selectedDate ? `For ${selectedDate.toLocaleDateString()}` : "Select a date to view slots"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div className="space-y-4">
                      <div>
                        <p className="mb-3 text-sm font-medium">Morning Slots</p>
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline" className="bg-transparent">
                            9:00 AM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            9:30 AM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            10:00 AM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            10:30 AM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            11:00 AM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            11:30 AM
                          </Button>
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-sm font-medium">Afternoon Slots</p>
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline" className="bg-transparent">
                            2:00 PM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            2:30 PM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            3:00 PM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            3:30 PM
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            4:00 PM
                          </Button>
                          <Button variant="outline" className="bg-transparent" disabled>
                            4:30 PM
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-primary" />
                          <p className="font-medium">Priority Access Available</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          As a chronic care patient, you can access emergency slots for urgent needs.
                        </p>
                        <Button className="mt-3 w-full bg-transparent" variant="outline">
                          View Emergency Slots
                        </Button>
                      </div>

                      <Button className="w-full">Confirm Appointment</Button>
                    </div>
                  ) : (
                    <div className="flex h-64 items-center justify-center text-center text-muted-foreground">
                      <div>
                        <CalendarIcon className="mx-auto mb-2 h-12 w-12 opacity-50" />
                        <p>Select a date to view available time slots</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Emergency Slots</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Priority access for chronic patients who missed appointments
                  </p>
                  <Button className="w-full bg-transparent" variant="outline">
                    Request Emergency Slot
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Video className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="mb-2 font-semibold">Virtual Consultation</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Connect with your doctor from the comfort of home
                  </p>
                  <Button className="w-full bg-transparent" variant="outline">
                    Book Virtual Visit
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <User className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold">Care Guide Support</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Get help from your personal care guide with booking
                  </p>
                  <Button className="w-full bg-transparent" variant="outline">
                    Contact Care Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appointment History</CardTitle>
                <CardDescription>Your past visits and consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <p className="font-medium">Dr. Emily Johnson</p>
                          <p className="text-sm text-muted-foreground">Cardiology Checkup</p>
                        </div>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>December 15, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Central Health Clinic</span>
                        </div>
                      </div>
                      <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                        View Notes
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <p className="font-medium">Dr. Michael Chen</p>
                          <p className="text-sm text-muted-foreground">Diabetes Management</p>
                        </div>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>November 28, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4" />
                          <span>Virtual Consultation</span>
                        </div>
                      </div>
                      <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                        View Notes
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <p className="font-medium text-red-900 dark:text-red-100">Dr. Priya Patel</p>
                          <p className="text-sm text-red-700 dark:text-red-300">General Checkup</p>
                        </div>
                        <Badge variant="destructive">Missed</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-red-700 dark:text-red-300">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>November 10, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Westside Medical Center</span>
                        </div>
                      </div>
                      <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                        Reschedule
                      </Button>
                    </div>
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
