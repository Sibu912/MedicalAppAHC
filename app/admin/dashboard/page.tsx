import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Users,
  Calendar,
  Pill,
  AlertTriangle,
  TrendingUp,
  Clock,
  Search,
  Bell,
  Settings,
  LogOut,
  UserCheck,
  Activity,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Shield className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">AHC Healthcare</h1>
              <p className="text-xs text-muted-foreground">Admin Portal</p>
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
            <h2 className="mb-2 text-3xl font-bold">Admin Dashboard</h2>
            <p className="text-muted-foreground">Manage patients, appointments, and clinic operations</p>
          </div>
          <div className="relative hidden overflow-hidden rounded-xl lg:block">
            <Image
              src="/medical-staff-reviewing-patient-data-on-digital-da.jpg"
              alt="Admin operations"
              width={400}
              height={120}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Alert Banner */}
        <Card className="mb-6 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
          <CardContent className="flex items-start gap-3 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600 dark:text-red-500" />
            <div className="flex-1">
              <p className="font-medium text-red-900 dark:text-red-100">Critical: 3 medications out of stock</p>
              <p className="text-sm text-red-700 dark:text-red-300">
                Metformin, Lisinopril, and Insulin are currently unavailable. 12 patients affected.
              </p>
            </div>
            <Button size="sm" variant="outline" className="border-red-300 dark:border-red-800 bg-transparent">
              Manage Stock
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+23 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground">8 completed, 26 pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medication Alerts</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">3 critical, 12 low stock</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Upcoming appointments and tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">10:30 AM - Cardiology</p>
                      </div>
                    </div>
                    <Badge>In Progress</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <UserCheck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">11:00 AM - Diabetes</p>
                      </div>
                    </div>
                    <Badge variant="outline">Upcoming</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <UserCheck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">2:00 PM - General</p>
                      </div>
                    </div>
                    <Badge variant="outline">Upcoming</Badge>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    View Full Schedule
                  </Button>
                </CardContent>
              </Card>

              {/* Critical Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Critical Alerts</CardTitle>
                  <CardDescription>Items requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-500" />
                        <p className="font-medium text-red-900 dark:text-red-100">Medication Out of Stock</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">Metformin 500mg - 8 patients affected</p>
                    <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                      Take Action
                    </Button>
                  </div>

                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                        <p className="font-medium text-amber-900 dark:text-amber-100">Missed Appointments</p>
                      </div>
                      <Badge className="bg-amber-600 dark:bg-amber-700">Warning</Badge>
                    </div>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      5 chronic patients missed appointments this week
                    </p>
                    <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                      Review Cases
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <p className="font-medium">Low Stock Alert</p>
                      </div>
                      <Badge variant="secondary">Info</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">4 medications below reorder threshold</p>
                    <Button size="sm" className="mt-3 bg-transparent" variant="outline">
                      View Inventory
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patient Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Patient Statistics</CardTitle>
                <CardDescription>Overview of patient demographics and conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">Chronic Patients</p>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold">847</p>
                    <p className="text-xs text-muted-foreground">68% of total patients</p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">Active Prescriptions</p>
                      <Pill className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold">2,341</p>
                    <p className="text-xs text-muted-foreground">Average 2.8 per patient</p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">Adherence Rate</p>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold">91%</p>
                    <p className="text-xs text-muted-foreground">+3% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Patient Management</CardTitle>
                    <CardDescription>Search and manage patient records</CardDescription>
                  </div>
                  <Button>
                    <Users className="mr-2 h-4 w-4" />
                    Add Patient
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search patients by name, ID, or condition..." className="pl-10" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        SJ
                      </div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">ID: P-2024-1247 • Diabetes, Hypertension</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Active</Badge>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 font-semibold text-secondary">
                        MC
                      </div>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">ID: P-2024-1156 • Diabetes Type 2</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Active</Badge>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-semibold text-accent">
                        ER
                      </div>
                      <div>
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">ID: P-2024-0983 • Asthma, Allergies</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Active</Badge>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Management</CardTitle>
                <CardDescription>Manage and schedule patient appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed appointment management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Medication Inventory</CardTitle>
                <CardDescription>Track and manage medication stock levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Inventory management system coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
