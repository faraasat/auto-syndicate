"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { signOut } from "next-auth/react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    { name: "Profile", icon: "👤" },
    { name: "Account", icon: "⚙️" },
    { name: "Notifications", icon: "🔔" },
    { name: "Security", icon: "🔒" },
    { name: "Billing", icon: "💳" },
    { name: "API Keys", icon: "🔑" },
    { name: "Integrations", icon: "🔗" },
    { name: "Privacy", icon: "🛡️" },
  ];

  return (
    <div className="min-h-screen">
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
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-left ${
                    activeTab === tab.name
                      ? "bg-white/10 text-neon-cyan font-semibold"
                      : "hover:bg-white/5 text-slate-300"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors text-left"
                >
                  <span>🚪</span>
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              {activeTab === "Profile" && (
                <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <CardHeader>
                    <CardTitle>Institutional Profile & Mandate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Legal Entity Name
                        </label>
                        <Input defaultValue="Investment Fund LLC" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          LEI Code
                        </label>
                        <Input defaultValue="549300LZ1B6R2V7N1V22" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Investment Mandate
                      </label>
                      <textarea
                        className="w-full h-24 rounded-lg glass border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-cyan resize-none bg-background text-white"
                        defaultValue="Institutional focus on ESG-compliant infrastructure and technology debt across EMEA markets. Target yield 5.5% - 8.0%."
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Update Mandate</Button>
                      <Button variant="outline" size="sm">
                        Export KYC Pack
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "API Keys" && (
                <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <CardHeader>
                    <CardTitle>Developer & API Access</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs break-all">
                      <div className="text-muted-foreground mb-2">
                        Primary API Key (Test)
                      </div>
                      <div className="text-neon-cyan mb-2">
                        your-api-key-1234567890abcdef
                      </div>
                      <div className="flex gap-2 mt-4 text-[10px]">
                        <button className="text-neon-cyan hover:underline">
                          Revoke Key
                        </button>
                        <button className="text-neon-cyan hover:underline">
                          Regenerate
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div>
                        <div className="font-semibold text-sm">
                          Webhook Integration
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Receive real-time breach alerts via webhook
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "Notifications" && (
                <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        label: "Covenant Breaches",
                        desc: "Get notified immediately",
                      },
                      {
                        label: "New Opportunities",
                        desc: "Weekly digest of new loans",
                      },
                      {
                        label: "Portfolio Updates",
                        desc: "Daily performance summary",
                      },
                      { label: "ESG Alerts", desc: "When ESG score changes" },
                      {
                        label: "System Notifications",
                        desc: "Important platform updates",
                      },
                    ].map((pref, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                      >
                        <div>
                          <div className="font-semibold text-sm">
                            {pref.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {pref.desc}
                          </div>
                        </div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mr-2"
                          />
                        </label>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {activeTab === "Security" && (
                <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="font-semibold text-sm">
                            Two-Factor Authentication
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Added an extra layer of security
                          </div>
                        </div>
                        <Button variant="outline">Enable</Button>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-sm">
                            Change Password
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Last changed 3 months ago
                          </div>
                        </div>
                        <Button variant="outline">Update</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === "Account" && (
                <Card className="border-neon-pink/30 animate-in fade-in slide-in-from-right-4 duration-300">
                  <CardHeader>
                    <CardTitle className="text-neon-pink">
                      Danger Zone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                      <div className="font-semibold text-sm mb-2">
                        Delete Account
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        This action cannot be undone. Please be certain.
                      </p>
                      <Button
                        variant="outline"
                        className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {["Billing", "Integrations", "Privacy"].includes(activeTab) && (
                <Card className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <CardHeader>
                    <CardTitle>{activeTab}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      {activeTab} module is coming soon in the next update.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
