"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Heart,
  CalendarIcon,
  User,
  Bell,
  Settings,
  LogOut,
  ArrowLeft,
  AlertCircle,
  Video,
  Building,
  CheckCircle2,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BookAppointmentPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<string>("in-person")
  const [reason, setReason] = useState<string>("")
  const [step, setStep] = useState<number>(1)

  const doctors = {
    cardiology: [
      { id: "johnson", name: "Dr. Emily Johnson", specialty: "Cardiology", experience: "15 years" },
      { id: "williams", name: "Dr. James Williams", specialty: "Cardiology", experience: "12 years" },
    ],
    diabetes: [
      { id: "chen", name: "Dr. Michael Chen", specialty: "Diabetes & Endocrinology", experience: "18 years" },
      { id: "kumar", name: "Dr. Anjali Kumar", specialty: "Diabetes & Endocrinology", experience: "10 years" },
    ],
    general: [
      { id: "patel", name: "Dr. Priya Patel", specialty: "General Medicine", experience: "20 years" },
      { id: "brown", name: "Dr. Sarah Brown", specialty: "General Medicine", experience: "8 years" },
    ],
    nephrology: [{ id: "davis", name: "Dr. Robert Davis", specialty: "Nephrology", experience: "16 years" }],
  }

  const timeSlots = {
    morning: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    afternoon: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
  }

  const handleConfirmBooking = () => {
    // In production, this would call an API to book the appointment
    router.push("/patient/appointments")
  }

  const getDoctorsBySpecialty = () => {
    if (!selectedSpecialty) return []
    return doctors[selectedSpecialty as keyof typeof doctors] || []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/patient/appointments">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Book Appointment</h1>
              <p className="text-xs text-muted-foreground">Schedule your visit</p>
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
        <div className="mb-8 relative overflow-hidden rounded-xl">
          <Image
            src="/doctor-consultation-appointment-booking.jpg"
            alt="Book appointment"
            width={1200}
            height={200}
            className="h-48 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <h2 className="text-3xl font-bold text-white">Book Your Appointment</h2>
              <p className="text-white/90">Schedule with your preferred doctor in 3 easy steps</p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 1 ? <CheckCircle2 className="h-5 w-5" /> : "1"}
              </div>
              <span className="text-sm font-medium">Select Doctor</span>
            </div>
            <div className="h-px w-12 bg-border" />
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step > 2 ? <CheckCircle2 className="h-5 w-5" /> : "2"}
              </div>
              <span className="text-sm font-medium">Choose Date & Time</span>
            </div>
            <div className="h-px w-12 bg-border" />
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <span className="text-sm font-medium">Confirm Details</span>
            </div>
          </div>
        </div>

        {/* Step 1: Select Doctor */}
        {step === 1 && (
          <div className="mx-auto max-w-4xl space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Chronic Care Priority Access</p>
                  <p className="text-sm text-muted-foreground">
                    You have access to emergency slots and priority booking as a chronic care patient.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Specialty & Doctor</CardTitle>
                <CardDescription>Choose the medical specialty and your preferred doctor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Medical Specialty *</Label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="diabetes">Diabetes & Endocrinology</SelectItem>
                      <SelectItem value="general">General Medicine</SelectItem>
                      <SelectItem value="nephrology">Nephrology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {selectedSpecialty && (
                  <div className="space-y-3">
                    <Label>Select Doctor *</Label>
                    <RadioGroup value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      {getDoctorsBySpecialty().map((doctor) => (
                        <div
                          key={doctor.id}
                          className={`flex items-start space-x-3 rounded-lg border p-4 transition-colors ${
                            selectedDoctor === doctor.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                          }`}
                        >
                          <RadioGroupItem value={doctor.id} id={doctor.id} className="mt-1" />
                          <label htmlFor={doctor.id} className="flex-1 cursor-pointer">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                                  <Stethoscope className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                  <p className="font-semibold">{doctor.name}</p>
                                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                                  <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                                </div>
                              </div>
                              <Badge variant="secondary">Available</Badge>
                            </div>
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Appointment Type *</Label>
                  <RadioGroup value={appointmentType} onValueChange={setAppointmentType}>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <label htmlFor="in-person" className="flex flex-1 cursor-pointer items-center gap-3">
                        <Building className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">In-Person Visit</p>
                          <p className="text-sm text-muted-foreground">Visit the clinic for your appointment</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="virtual" id="virtual" />
                      <label htmlFor="virtual" className="flex flex-1 cursor-pointer items-center gap-3">
                        <Video className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Virtual Consultation</p>
                          <p className="text-sm text-muted-foreground">Connect via video call from home</p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <RadioGroupItem value="emergency" id="emergency" />
                      <label htmlFor="emergency" className="flex flex-1 cursor-pointer items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Emergency Slot (Priority)</p>
                          <p className="text-sm text-muted-foreground">For chronic care patients with urgent needs</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full" onClick={() => setStep(2)} disabled={!selectedSpecialty || !selectedDoctor}>
                  Continue to Date & Time
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Choose Date & Time */}
        {step === 2 && (
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                  <CardDescription>Choose your preferred appointment date</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </CardContent>
              </Card>

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
                          {timeSlots.morning.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTimeSlot === time ? "default" : "outline"}
                              className="bg-transparent"
                              onClick={() => setSelectedTimeSlot(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-sm font-medium">Afternoon Slots</p>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.afternoon.map((time, index) => (
                            <Button
                              key={time}
                              variant={selectedTimeSlot === time ? "default" : "outline"}
                              className="bg-transparent"
                              onClick={() => setSelectedTimeSlot(time)}
                              disabled={index === 5}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {appointmentType === "emergency" && (
                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                          <div className="mb-2 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-primary" />
                            <p className="font-medium">Emergency Slots Available</p>
                          </div>
                          <p className="mb-3 text-sm text-muted-foreground">
                            Priority slots reserved for chronic care patients
                          </p>
                          <div className="grid grid-cols-3 gap-2">
                            <Button
                              variant={selectedTimeSlot === "12:00 PM" ? "default" : "outline"}
                              className="bg-transparent"
                              onClick={() => setSelectedTimeSlot("12:00 PM")}
                            >
                              12:00 PM
                            </Button>
                            <Button
                              variant={selectedTimeSlot === "5:00 PM" ? "default" : "outline"}
                              className="bg-transparent"
                              onClick={() => setSelectedTimeSlot("5:00 PM")}
                            >
                              5:00 PM
                            </Button>
                          </div>
                        </div>
                      )}
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

            <div className="mt-6 flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button className="flex-1" onClick={() => setStep(3)} disabled={!selectedDate || !selectedTimeSlot}>
                Continue to Confirmation
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm Details */}
        {step === 3 && (
          <div className="mx-auto max-w-2xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Confirm Appointment Details</CardTitle>
                <CardDescription>Review your appointment information before confirming</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <User className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Doctor</p>
                        <p className="font-semibold">
                          {getDoctorsBySpecialty().find((d) => d.id === selectedDoctor)?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {getDoctorsBySpecialty().find((d) => d.id === selectedDoctor)?.specialty}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                      Change
                    </Button>
                  </div>

                  <div className="flex items-start justify-between rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <CalendarIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date & Time</p>
                        <p className="font-semibold">{selectedDate?.toLocaleDateString()}</p>
                        <p className="text-sm text-muted-foreground">{selectedTimeSlot}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                      Change
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2">
                      {appointmentType === "in-person" && <Building className="h-5 w-5 text-muted-foreground" />}
                      {appointmentType === "virtual" && <Video className="h-5 w-5 text-muted-foreground" />}
                      {appointmentType === "emergency" && <AlertCircle className="h-5 w-5 text-primary" />}
                      <p className="font-medium">
                        {appointmentType === "in-person" && "In-Person Visit"}
                        {appointmentType === "virtual" && "Virtual Consultation"}
                        {appointmentType === "emergency" && "Emergency Slot (Priority)"}
                      </p>
                    </div>
                    {appointmentType === "in-person" && (
                      <p className="text-sm text-muted-foreground">Central Health Clinic, Room 204</p>
                    )}
                    {appointmentType === "virtual" && (
                      <p className="text-sm text-muted-foreground">
                        You'll receive a video call link via email 15 minutes before your appointment
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit (Optional)</Label>
                  <Textarea
                    id="reason"
                    placeholder="Briefly describe the reason for your appointment..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <p className="mb-2 text-sm font-medium">Appointment Reminders</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>✓ Email reminder 24 hours before</p>
                    <p>✓ SMS reminder 1 hour before</p>
                    <p>✓ Push notification 15 minutes before</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button className="flex-1" onClick={handleConfirmBooking}>
                Confirm Appointment
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
