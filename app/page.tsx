import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Calendar, Pill, Users, Clock, Shield } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" />
                <span>Empowering Chronic Care Management</span>
              </div>
              <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-7xl">
                Healthcare with{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AHC</span>
              </h1>
              <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Real-time medication tracking, seamless appointment booking, and community support for chronically ill
                patients. Your health journey, simplified.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/login/patient">Patient Portal</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/login/admin">Admin Access</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/modern-healthcare-professional-with-patient-in-bri.jpg"
                  alt="Healthcare professional consulting with patient"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-48 w-48 overflow-hidden rounded-xl border-4 border-background shadow-xl">
                <Image
                  src="/medical-professional-checking-medication-inventory.jpg"
                  alt="Medication tracking"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Comprehensive Care Solutions</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Everything you need to manage chronic care in one platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Pill className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Real-Time Medication Tracking</h3>
            <p className="leading-relaxed text-muted-foreground">
              Know when your medication is in stock. Get alerts for nearby clinics or delivery options when unavailable.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Smart Appointment Booking</h3>
            <p className="leading-relaxed text-muted-foreground">
              Book appointments with specific doctors, view available slots, and get automatic reminders for upcoming
              visits.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Community Support</h3>
            <p className="leading-relaxed text-muted-foreground">
              Connect with other patients, share resources, and participate in the Favour Bank to help each other.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Emergency Slots</h3>
            <p className="leading-relaxed text-muted-foreground">
              Priority access for chronic patients who missed appointments. Fast-track queues for students and urgent
              cases.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">30-Day Emergency Supply</h3>
            <p className="leading-relaxed text-muted-foreground">
              Chronic care refill policy ensures you always have emergency medication available when you need it most.
            </p>
          </Card>

          <Card className="p-6 transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Personal Care Guides</h3>
            <p className="leading-relaxed text-muted-foreground">
              Trained, empathetic guides to help with logistical and emotional burdens of chronic illness management.
            </p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/doctor-reviewing-patient-medical-records-on-comput.jpg"
              alt="Digital health records"
              width={400}
              height={400}
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="mb-2 text-xl font-semibold">Digital Health Records</h3>
              <p className="text-sm text-white/90">Access your complete medical history anytime</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/pharmacist-organizing-medication-bottles-in-modern.jpg"
              alt="Medication management"
              width={400}
              height={400}
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="mb-2 text-xl font-semibold">Medication Management</h3>
              <p className="text-sm text-white/90">Track prescriptions and refills effortlessly</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/diverse-group-of-patients-in-support-group-meeting.jpg"
              alt="Community support"
              width={400}
              height={400}
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="mb-2 text-xl font-semibold">Community Connection</h3>
              <p className="text-sm text-white/90">Join a supportive network of patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="mb-8 text-pretty text-lg leading-relaxed opacity-90">
            Join thousands of patients managing their chronic care with confidence
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/login/patient">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              <Link href="/education">Medical Education</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AHC Healthcare Platform. Empowering chronic care management.</p>
        </div>
      </footer>
    </div>
  )
}
