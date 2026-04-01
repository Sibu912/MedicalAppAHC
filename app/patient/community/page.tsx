"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  Users,
  MessageCircle,
  ThumbsUp,
  Share2,
  Bell,
  Settings,
  LogOut,
  ArrowLeft,
  TrendingUp,
  Award,
  HandHeart,
  Search,
  Plus,
} from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
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
              <h1 className="text-lg font-semibold">Community</h1>
              <p className="text-xs text-muted-foreground">Connect & Support</p>
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
        {/* Favour Bank Overview */}
        <Card className="mb-6 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <HandHeart className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Favour Bank</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Help others and earn points. Use points to request help when you need it.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Your Balance</p>
                    <p className="text-3xl font-bold text-primary">127 points</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-semibold">+45 points</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button>Request Help</Button>
                <Button variant="outline" className="bg-transparent">
                  Offer Help
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="feed" className="space-y-6">
          <TabsList>
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="favour-bank">Favour Bank</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle>Share with the Community</CardTitle>
                <CardDescription>Post updates, ask questions, or share resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea placeholder="What's on your mind? Share your experience or ask for advice..." rows={4} />
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Add Image
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Add Resource
                      </Button>
                    </div>
                    <Button>Post</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Posts */}
            <div className="space-y-4">
              {/* Post 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold">Maria Rodriguez</p>
                        <Badge variant="secondary" className="text-xs">
                          Diabetes Support
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed">
                    Just wanted to share that I finally got my A1C below 7! It took 6 months of consistent medication
                    and lifestyle changes, but it's possible. Don't give up, everyone! The medication tracking feature
                    in this app really helped me stay on schedule.
                  </p>
                  <div className="mb-4 flex gap-2">
                    <Badge variant="outline">Success Story</Badge>
                    <Badge variant="outline">Diabetes</Badge>
                  </div>
                  <div className="flex items-center gap-4 border-t pt-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>24</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>8 comments</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Post 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-secondary/10 text-secondary">JW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold">James Wilson</p>
                        <Badge variant="secondary" className="text-xs">
                          Heart Health
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed">
                    Does anyone know where I can find Lisinopril 10mg in the downtown area? My usual pharmacy is out of
                    stock. Would really appreciate any leads!
                  </p>
                  <div className="mb-4 flex gap-2">
                    <Badge variant="outline">Help Needed</Badge>
                    <Badge variant="outline">Medication</Badge>
                  </div>
                  <div className="flex items-center gap-4 border-t pt-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>12</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>15 comments</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Post 3 */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-accent/10 text-accent">LP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <p className="font-semibold">Lisa Patel</p>
                        <Badge variant="secondary" className="text-xs">
                          Care Guide
                        </Badge>
                        <Badge className="bg-primary text-xs">Verified</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed">
                    Reminder: The new 30-day emergency supply policy is now active! If you're a chronic care patient and
                    your medication is out of stock, you can request an emergency refill. Check the medication tracking
                    page for more details.
                  </p>
                  <div className="mb-4 flex gap-2">
                    <Badge variant="outline">Announcement</Badge>
                    <Badge variant="outline">Policy Update</Badge>
                  </div>
                  <div className="flex items-center gap-4 border-t pt-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>56</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>23 comments</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="favour-bank" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Request Help */}
              <Card>
                <CardHeader>
                  <CardTitle>Request Help</CardTitle>
                  <CardDescription>Use your points to ask for assistance from the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-medium">Your Balance</p>
                      <p className="text-2xl font-bold text-primary">127 points</p>
                    </div>
                    <p className="text-sm text-muted-foreground">You have enough points to request help</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">What do you need help with?</label>
                      <Textarea placeholder="Describe what you need..." rows={4} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Points to Offer</label>
                      <Input type="number" placeholder="10" />
                      <p className="mt-1 text-xs text-muted-foreground">
                        Suggested: 10-20 points for small tasks, 30-50 for larger requests
                      </p>
                    </div>
                    <Button className="w-full">Submit Request</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Offer Help */}
              <Card>
                <CardHeader>
                  <CardTitle>Offer Help</CardTitle>
                  <CardDescription>Help others and earn points for your Favour Bank</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium">Need ride to clinic appointment</p>
                          <p className="text-sm text-muted-foreground">Posted by Michael T. • 2 hours ago</p>
                        </div>
                        <Badge className="bg-primary">+15 points</Badge>
                      </div>
                      <p className="mb-3 text-sm">
                        Looking for someone to drive me to my appointment at Central Health Clinic on Friday morning.
                      </p>
                      <Button size="sm" className="w-full">
                        Offer to Help
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium">Help understanding medication schedule</p>
                          <p className="text-sm text-muted-foreground">Posted by Sarah K. • 5 hours ago</p>
                        </div>
                        <Badge className="bg-primary">+10 points</Badge>
                      </div>
                      <p className="mb-3 text-sm">
                        New to managing multiple medications. Could use advice on organizing my schedule.
                      </p>
                      <Button size="sm" className="w-full">
                        Offer to Help
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium">Share diabetes-friendly recipes</p>
                          <p className="text-sm text-muted-foreground">Posted by David L. • 1 day ago</p>
                        </div>
                        <Badge className="bg-primary">+20 points</Badge>
                      </div>
                      <p className="mb-3 text-sm">
                        Looking for easy, healthy recipes that work well for diabetes management.
                      </p>
                      <Button size="sm" className="w-full">
                        Offer to Help
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Your Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Your Favour Bank Activity</CardTitle>
                <CardDescription>Recent transactions and interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <Plus className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Earned 15 points</p>
                      <p className="text-sm text-muted-foreground">Helped another patient find medication</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                      <Plus className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Earned 20 points</p>
                      <p className="text-sm text-muted-foreground">Shared helpful resources with community</p>
                    </div>
                    <span className="text-sm text-muted-foreground">5 days ago</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <HandHeart className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Used 10 points</p>
                      <p className="text-sm text-muted-foreground">Requested appointment scheduling help</p>
                    </div>
                    <span className="text-sm text-muted-foreground">1 week ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Community Resources</CardTitle>
                    <CardDescription>Shared guides, tips, and helpful information</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Share Resource
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search resources..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold">Managing Diabetes: A Beginner's Guide</h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive guide for newly diagnosed patients
                        </p>
                      </div>
                      <Badge variant="secondary">Guide</Badge>
                    </div>
                    <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By Dr. Michael Chen</span>
                      <span>•</span>
                      <span>234 views</span>
                      <span>•</span>
                      <span>45 saves</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        View Resource
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Save
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold">Heart-Healthy Meal Plans</h3>
                        <p className="text-sm text-muted-foreground">Weekly meal plans for cardiovascular health</p>
                      </div>
                      <Badge variant="secondary">Nutrition</Badge>
                    </div>
                    <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By Community Member</span>
                      <span>•</span>
                      <span>189 views</span>
                      <span>•</span>
                      <span>67 saves</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        View Resource
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Save
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold">Medication Adherence Tips</h3>
                        <p className="text-sm text-muted-foreground">Strategies to remember your medications</p>
                      </div>
                      <Badge variant="secondary">Tips</Badge>
                    </div>
                    <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By Care Guide Team</span>
                      <span>•</span>
                      <span>456 views</span>
                      <span>•</span>
                      <span>123 saves</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        View Resource
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Leaderboard</CardTitle>
                <CardDescription>Top contributors this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Top 3 */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950">
                        <Award className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <p className="font-semibold">Maria Rodriguez</p>
                          <Badge className="bg-amber-600 dark:bg-amber-700">1st Place</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Helped 23 community members</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">345</p>
                        <p className="text-xs text-muted-foreground">points earned</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">David Thompson</p>
                        <p className="text-sm text-muted-foreground">Helped 18 community members</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">287</p>
                        <p className="text-xs text-muted-foreground">points earned</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Lisa Chen</p>
                        <p className="text-sm text-muted-foreground">Helped 15 community members</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">234</p>
                        <p className="text-xs text-muted-foreground">points earned</p>
                      </div>
                    </div>
                  </div>

                  {/* Rest of leaderboard */}
                  <div className="space-y-2 border-t pt-4">
                    {[
                      { rank: 4, name: "James Wilson", points: 198 },
                      { rank: 5, name: "Sarah Johnson", points: 176 },
                      { rank: 6, name: "Michael Brown", points: 145 },
                      { rank: 7, name: "Emily Davis", points: 132 },
                      { rank: 8, name: "You (Sarah)", points: 127 },
                    ].map((user) => (
                      <div
                        key={user.rank}
                        className={`flex items-center gap-4 rounded-lg p-3 ${
                          user.name.includes("You") ? "border border-primary/20 bg-primary/5" : "border bg-background"
                        }`}
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium">
                          {user.rank}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{user.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{user.points}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Community Impact</CardTitle>
                <CardDescription>Your contributions this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">People Helped</p>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Points Earned</p>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold">127</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Resources Shared</p>
                      <Share2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold">5</p>
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
