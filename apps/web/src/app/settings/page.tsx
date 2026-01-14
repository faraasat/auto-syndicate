"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gradient">
              AutoSyndicate™
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="hover:text-neon-cyan transition-colors">Dashboard</Link>
              <Link href="/analytics" className="hover:text-neon-cyan transition-colors">Analytics</Link>
              <Link href="/settings" className="text-neon-cyan">Settings</Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Settings & <span className="text-gradient">Preferences</span>
            </h1>
            <p className="text-muted-foreground">
              Manage your account and platform preferences
            </p>
          </div>

          {/* Settings Tabs */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="space-y-2">
              {[
                { name: "Profile", icon: "👤" },
                { name: "Account", icon: "⚙️" },
                { name: "Notifications", icon: "🔔" },
                { name: "Security", icon: "🔒" },
                { name: "Billing", icon: "💳" },
                { name: "API Keys", icon: "🔑" },
                { name: "Integrations", icon: "🔗" },
                { name: "Privacy", icon: "🛡️" },
              ].map((tab) => (
                <button
                  key={tab.name}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-left"
                >
                  <span>{tab.icon}</span>
                  <span className={tab.name === "Profile" ? "text-neon-cyan font-semibold" : ""}>
                    {tab.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
                    <Button variant="outline">Change Avatar</Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input defaultValue="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input defaultValue="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" defaultValue="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input defaultValue="Investment Fund LLC" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Role</label>
                    <select className="w-full h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                      <option>Portfolio Manager</option>
                      <option>Analyst</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea 
                      className="w-full h-24 rounded-lg glass border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-cyan resize-none"
                      placeholder="Tell us about yourself"
                      defaultValue="Senior investment professional with 15+ years of experience in institutional lending."
                    />
                  </div>

                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              {/* Notification Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Covenant Breaches", desc: "Get notified immediately" },
                    { label: "New Opportunities", desc: "Weekly digest of new loans" },
                    { label: "Portfolio Updates", desc: "Daily performance summary" },
                    { label: "ESG Alerts", desc: "When ESG score changes" },
                    { label: "System Notifications", desc: "Important platform updates" },
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div>
                        <div className="font-semibold text-sm">{pref.label}</div>
                        <div className="text-xs text-muted-foreground">{pref.desc}</div>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="mr-2" />
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Security */}
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="font-semibold text-sm">Two-Factor Authentication</div>
                        <div className="text-xs text-muted-foreground">Added an extra layer of security</div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-sm">Change Password</div>
                        <div className="text-xs text-muted-foreground">Last changed 3 months ago</div>
                      </div>
                      <Button variant="outline">Update</Button>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-sm">Active Sessions</div>
                        <div className="text-xs text-muted-foreground">Manage your login sessions</div>
                      </div>
                      <Button variant="outline">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="border-neon-pink/30">
                <CardHeader>
                  <CardTitle className="text-neon-pink">Danger Zone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                    <div className="font-semibold text-sm mb-2">Delete Account</div>
                    <p className="text-sm text-muted-foreground mb-4">
                      This action cannot be undone. Please be certain.
                    </p>
                    <Button variant="outline" className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
