"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  ArrowLeft,
  Play,
  AlertTriangle,
  Activity,
  Droplets,
  Brain,
  Scale,
  Bug,
  Dna,
  BookOpen,
  ExternalLink,
} from "lucide-react"
import { useState } from "react"

const illnesses = [
  {
    id: "hypertension",
    title: "Hypertension (High Blood Pressure)",
    subtitle: "The Silent Killer",
    icon: Activity,
    color: "bg-red-500/10 text-red-600",
    badgeColor: "bg-red-100 text-red-700",
    stats: "1 in 3 South African adults affected",
    problem:
      "Over one in three South African adults has hypertension. Because it rarely shows symptoms, more than half of those affected are completely unaware of their condition.",
    risk: "Left untreated, it is the leading cause of sudden strokes and heart attacks in the country.",
    watchFor: "Frequent headaches or blurred vision",
    videos: [
      {
        title: "Understanding High Blood Pressure",
        videoId: "XbS0cpLfEP4",
        description: "Learn what blood pressure is and why it matters",
      },
      {
        title: "How to Lower Blood Pressure Naturally",
        videoId: "bMJdMgqRods",
        description: "Lifestyle changes that can help manage hypertension",
      },
      {
        title: "Signs and Symptoms of High Blood Pressure",
        videoId: "4DvR0J4eTUE",
        description: "Recognize the warning signs early",
      },
    ],
  },
  {
    id: "diabetes",
    title: "Diabetes Mellitus",
    subtitle: "The Missing Millions",
    icon: Droplets,
    color: "bg-blue-500/10 text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
    stats: "Leading natural cause of death for women in SA",
    problem:
      'Many South Africans mistake early symptoms (like constant thirst or fatigue) for general exhaustion or "getting older."',
    risk: 'By the time many people are diagnosed, they already have "silent" complications like kidney damage or vision loss.',
    watchFor: "Slow-healing sores or extreme thirst",
    videos: [
      {
        title: "What is Diabetes?",
        videoId: "wZAjVQWbMlE",
        description: "A comprehensive overview of diabetes types and causes",
      },
      {
        title: "Managing Type 2 Diabetes",
        videoId: "4SZGM1FPuXs",
        description: "Tips for living well with diabetes",
      },
      {
        title: "Diabetes Warning Signs",
        videoId: "X9ivR4y43Xo",
        description: "Early symptoms you should not ignore",
      },
    ],
  },
  {
    id: "fgs",
    title: "Female Genital Schistosomiasis (FGS)",
    subtitle: "The Misdiagnosed Disease",
    icon: Bug,
    color: "bg-purple-500/10 text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
    stats: "Common in KZN, Mpumalanga, and Limpopo",
    problem:
      "It is caused by a parasitic worm found in fresh water (rivers and dams). The symptoms—pain, spotting, and discharge—are almost identical to STIs.",
    risk: "Many women are treated for STIs repeatedly with no success because the actual cause is a water-borne parasite that requires a specific, simple tablet to cure.",
    watchFor: "Pelvic pain after swimming in river water",
    videos: [
      {
        title: "Understanding Schistosomiasis",
        videoId: "F4T7U6Gzo0E",
        description: "Learn about this neglected tropical disease",
      },
      {
        title: "FGS Awareness",
        videoId: "qKxsZvT0VCs",
        description: "Why this disease is often misdiagnosed",
      },
    ],
  },
  {
    id: "rare-diseases",
    title: "Rare Diseases & Congenital Disorders",
    subtitle: "The Overlooked Conditions",
    icon: Dna,
    color: "bg-green-500/10 text-green-600",
    badgeColor: "bg-green-100 text-green-700",
    stats: "1 in 15 South Africans (4.1 million people)",
    problem:
      'There is a common myth that "rare diseases" only happen in other parts of the world. Approximately 1 in 15 South Africans are affected.',
    risk: "Due to a lack of specialized training and testing facilities, patients often spend years visiting different doctors before getting a correct diagnosis.",
    watchFor: "Unusual symptoms that persist without explanation",
    videos: [
      {
        title: "What are Rare Diseases?",
        videoId: "WlSvF4V1C8k",
        description: "Understanding rare and genetic conditions",
      },
      {
        title: "Living with a Rare Disease",
        videoId: "Fdt0zTXhHqE",
        description: "Patient stories and coping strategies",
      },
    ],
  },
  {
    id: "obesity",
    title: "Obesity as a Disease",
    subtitle: "Beyond Lifestyle Choice",
    icon: Scale,
    color: "bg-orange-500/10 text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
    stats: "Up to 70% genetic component",
    problem:
      'In 2026, medical guidelines in South Africa officially recognized obesity as a chronic disease, yet many citizens still view it purely as a result of "eating too much."',
    risk: "It acts as a gateway to dozens of other conditions, including 13 types of cancer and sleep apnea, which often go untreated because the root cause is not managed as a medical illness.",
    watchFor: "Waking up tired even after a full night of sleep (sleep apnea)",
    videos: [
      {
        title: "Obesity: A Medical Condition",
        videoId: "8K3WSOYDyaw",
        description: "Why obesity is now classified as a disease",
      },
      {
        title: "The Science of Weight Management",
        videoId: "GQJ0Z0DRj8E",
        description: "Understanding metabolism and weight",
      },
    ],
  },
  {
    id: "mental-health",
    title: "Mental Health Conditions",
    subtitle: "The Hidden Pandemic",
    icon: Brain,
    color: "bg-pink-500/10 text-pink-600",
    badgeColor: "bg-pink-100 text-pink-700",
    stats: "Widespread but often masked by physical symptoms",
    problem:
      'Conditions like Depression, Anxiety, and PTSD are widespread but often masked by physical symptoms. In many communities, mental health struggles are dismissed as "stress" or spiritual issues.',
    risk: "People seek help for physical pains (like headaches or stomach issues) while the underlying mental illness goes untreated.",
    watchFor: "Persistent physical symptoms without medical cause",
    videos: [
      {
        title: "Understanding Depression",
        videoId: "z-IR48Mb3W0",
        description: "Signs, symptoms, and treatment options",
      },
      {
        title: "Managing Anxiety",
        videoId: "WWloIAQpMcQ",
        description: "Coping strategies and when to seek help",
      },
      {
        title: "Breaking Mental Health Stigma",
        videoId: "CY3Fq1hB0lg",
        description: "Why talking about mental health matters",
      },
    ],
  },
]

export default function MedicalEducationPage() {
  const [activeIllness, setActiveIllness] = useState(illnesses[0])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AHC</span>
            </div>
          </div>
          <h1 className="text-lg font-semibold">Medical Education</h1>
          <Button asChild>
            <Link href="/login/patient">Patient Portal</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              <BookOpen className="mr-1 h-3 w-3" />
              Health Education Resources
            </Badge>
            <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Understanding South Africa&apos;s Silent Health Threats
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Learn about the most significant underdiagnosed conditions affecting South Africans. Knowledge is the
              first step toward better health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary Alert */}
      <section className="container mx-auto px-4 py-8">
        <Card className="border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h3 className="mb-2 font-semibold text-amber-800 dark:text-amber-200">Important Health Tip</h3>
              <p className="text-amber-700 dark:text-amber-300">
                If you have not had your blood pressure and sugar levels checked in the last year, it is worth a quick
                trip to a local pharmacy or clinic. Most of these &quot;silent&quot; conditions are easily managed if
                caught early!
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hypertension" className="space-y-8">
          <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
            {illnesses.map((illness) => {
              const Icon = illness.icon
              return (
                <TabsTrigger
                  key={illness.id}
                  value={illness.id}
                  onClick={() => setActiveIllness(illness)}
                  className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{illness.title.split(" ")[0]}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {illnesses.map((illness) => {
            const Icon = illness.icon
            return (
              <TabsContent key={illness.id} value={illness.id} className="space-y-8">
                {/* Illness Overview */}
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <Card className="p-6">
                      <div className="mb-6 flex items-start gap-4">
                        <div className={`rounded-xl p-3 ${illness.color}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <Badge className={illness.badgeColor}>{illness.subtitle}</Badge>
                          <h2 className="mt-2 text-2xl font-bold">{illness.title}</h2>
                          <p className="text-muted-foreground">{illness.stats}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="mb-2 font-semibold text-foreground">The Problem</h3>
                          <p className="leading-relaxed text-muted-foreground">{illness.problem}</p>
                        </div>

                        <div>
                          <h3 className="mb-2 font-semibold text-foreground">The Risk</h3>
                          <p className="leading-relaxed text-muted-foreground">{illness.risk}</p>
                        </div>

                        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                          <h3 className="mb-2 font-semibold text-primary">Key Sign to Watch For</h3>
                          <p className="text-foreground">{illness.watchFor}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Quick Facts Sidebar */}
                  <div className="space-y-4">
                    <Card className="p-4">
                      <h3 className="mb-3 font-semibold">Why It&apos;s &quot;Unknown&quot;</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {illness.id === "hypertension" && "Has no visible symptoms until a major event occurs."}
                        {illness.id === "diabetes" &&
                          "Early symptoms are often attributed to aging or general fatigue."}
                        {illness.id === "fgs" && "Symptoms are almost identical to STIs, leading to repeated misdiagnosis."}
                        {illness.id === "rare-diseases" &&
                          "Lack of specialized testing facilities and trained specialists."}
                        {illness.id === "obesity" && "Still viewed as a lifestyle choice rather than a medical condition."}
                        {illness.id === "mental-health" &&
                          "Cultural stigma leads to dismissal as stress or spiritual issues."}
                      </p>
                    </Card>

                    <Card className="bg-gradient-to-br from-primary to-secondary p-4 text-primary-foreground">
                      <h3 className="mb-2 font-semibold">Take Action</h3>
                      <p className="mb-4 text-sm opacity-90">
                        Schedule a check-up to screen for this condition.
                      </p>
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <Link href="/patient/appointments/book">Book Appointment</Link>
                      </Button>
                    </Card>
                  </div>
                </div>

                {/* Video Section */}
                <div>
                  <h3 className="mb-6 text-xl font-bold">Educational Videos</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {illness.videos.map((video, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="relative aspect-video bg-muted">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-2 flex items-center gap-2">
                            <Play className="h-4 w-4 text-primary" />
                            <h4 className="font-semibold">{video.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </section>

      {/* Summary Table */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">Quick Reference Guide</h2>
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Disease</th>
                  <th className="px-6 py-4 text-left font-semibold">Why It&apos;s &quot;Unknown&quot;</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Sign to Watch For</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium">Hypertension</td>
                  <td className="px-6 py-4 text-muted-foreground">Has no visible symptoms</td>
                  <td className="px-6 py-4 text-muted-foreground">Frequent headaches or blurred vision</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium">Diabetes</td>
                  <td className="px-6 py-4 text-muted-foreground">Symptoms are often ignored</td>
                  <td className="px-6 py-4 text-muted-foreground">Slow-healing sores or extreme thirst</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium">FGS (Parasite)</td>
                  <td className="px-6 py-4 text-muted-foreground">Misdiagnosed as an STI</td>
                  <td className="px-6 py-4 text-muted-foreground">Pelvic pain after swimming in river water</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium">Sleep Apnea</td>
                  <td className="px-6 py-4 text-muted-foreground">Dismissed as &quot;just snoring&quot;</td>
                  <td className="px-6 py-4 text-muted-foreground">Waking up tired after full night&apos;s sleep</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">Knowledge Saves Lives</h2>
          <p className="mb-8 text-pretty text-lg opacity-90">
            Early detection is key. Schedule your health screening today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/patient/appointments/book">Book a Screening</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/login/patient">Access Patient Portal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">Additional Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4 transition-all hover:shadow-md">
            <a
              href="https://www.who.int/health-topics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">World Health Organization</h3>
                <p className="text-sm text-muted-foreground">Global health information and guidelines</p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </a>
          </Card>
          <Card className="p-4 transition-all hover:shadow-md">
            <a
              href="https://www.health.gov.za"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">SA Department of Health</h3>
                <p className="text-sm text-muted-foreground">Local healthcare resources and programs</p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </a>
          </Card>
          <Card className="p-4 transition-all hover:shadow-md">
            <a
              href="https://www.heartfoundation.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">Heart Foundation SA</h3>
                <p className="text-sm text-muted-foreground">Cardiovascular health support</p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AHC Healthcare Platform. Empowering health education.</p>
        </div>
      </footer>
    </div>
  )
}
