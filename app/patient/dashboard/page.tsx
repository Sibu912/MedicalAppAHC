import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Pill,
  Calendar,
  Users,
  Clock,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PatientDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">AHC Healthcare</h1>
              <p className="text-xs text-muted-foreground">Patient Portal</p>
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
        {/* Welcome Section */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-2 text-3xl font-bold">Welcome back, Sarah</h2>
            <p className="text-muted-foreground">Here's your health overview for today</p>
          </div>
          <div className="relative hidden overflow-hidden rounded-xl lg:block">
            <Image
              src="/happy-patient-using-health-app-on-smartphone.jpg"
              alt="Patient wellness"
              width={400}
              height={120}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Alert Banner */}
        <Card className="mb-6 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
          <CardContent className="flex items-start gap-3 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-500" />
            <div className="flex-1">
              <p className="font-medium text-amber-900 dark:text-amber-100">
                Your Metformin prescription is running low
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Only 5 doses remaining. Check availability at nearby clinics or request delivery.
              </p>
            </div>
            <Button size="sm" variant="outline" className="border-amber-300 dark:border-amber-800 bg-transparent">
              View Options
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 in stock, 1 low</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 days</div>
              <p className="text-xs text-muted-foreground">Dr. Johnson - Cardiology</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Adherence Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <Progress value={94} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community Points</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">Favour Bank balance</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Today's Medications */}
              <Card>
                <CardHeader>
                  <CardTitle>Today's Medications</CardTitle>
                  <CardDescription>Your medication schedule for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium">Lisinopril 10mg</p>
                        <p className="text-sm text-muted-foreground">8:00 AM - Taken</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Metformin 500mg</p>
                        <p className="text-sm text-muted-foreground">12:00 PM - Upcoming</p>
                      </div>
                    </div>
                    <Badge>Due Soon</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Pill className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Atorvastatin 20mg</p>
                        <p className="text-sm text-muted-foreground">8:00 PM - Scheduled</p>
                      </div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled visits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <p className="font-medium">Dr. Emily Johnson</p>
                        <p className="text-sm text-muted-foreground">Cardiology Checkup</p>
                      </div>
                      <Badge>In 3 days</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 25, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>10:30 AM</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-transparent" variant="outline">
                      View Details
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <p className="font-medium">Dr. Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Diabetes Management</p>
                      </div>
                      <Badge variant="outline">In 2 weeks</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Feb 5, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full bg-transparent" variant="outline">
                      View Details
                    </Button>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/patient/appointments/book">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book New Appointment
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest health updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Medication taken on time</p>
                      <p className="text-sm text-muted-foreground">Lisinopril 10mg - Today at 8:00 AM</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2h ago</span>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Appointment confirmed</p>
                      <p className="text-sm text-muted-foreground">Dr. Johnson - Jan 25, 10:30 AM</p>
                    </div>
                    <span className="text-sm text-muted-foreground">1d ago</span>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Community points earned</p>
                      <p className="text-sm text-muted-foreground">+15 points for helping another patient</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2d ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications">
            <Card>
              <CardHeader>
                <CardTitle>Medication Management</CardTitle>
                <CardDescription>Track and manage your prescriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 text-center">
                  <p className="mb-4 text-muted-foreground">
                    View detailed medication tracking, check availability at nearby clinics, and manage your
                    prescriptions.
                  </p>
                  <Button asChild>
                    <Link href="/patient/medications">
                      <Pill className="mr-2 h-4 w-4" />
                      Go to Medication Tracking
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Booking</CardTitle>
                <CardDescription>Schedule and manage your appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 text-center">
                  <p className="mb-4 text-muted-foreground">
                    Book new appointments, view upcoming visits, and access priority slots for chronic care patients.
                  </p>
                  <Button asChild>
                    <Link href="/patient/appointments">
                      <Calendar className="mr-2 h-4 w-4" />
                      Go to Appointments
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Community & Favour Bank</CardTitle>
                <CardDescription>Connect with other patients and share support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 text-center">
                  <p className="mb-4 text-muted-foreground">
                    Join the community, earn points by helping others, and access the Favour Bank for support when you
                    need it.
                  </p>
                  <Button asChild>
                    <Link href="/patient/community">
                      <Users className="mr-2 h-4 w-4" />
                      Go to Community
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
