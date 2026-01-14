"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import Link from "next/link";

import { PerformanceChart } from "@/components/charts/PerformanceChart";

export default function DashboardPage() {
  const stats = [
    { label: "Active Loans", value: "12", change: "+2 this month" },
    {
      label: "Total Committed",
      value: "$45.2M",
      change: "+$8.5M this quarter",
    },
    {
      label: "Portfolio Yield",
      value: "6.8%",
      change: "+0.3% from last quarter",
    },
    { label: "ESG Score", value: "82/100", change: "+5 points" },
  ];

  const recentLoans = [
    {
      id: "1",
      borrower: "TechCorp Industries",
      amount: "$25M",
      status: "Active",
      allocation: "15%",
      esgScore: 78,
    },
    {
      id: "2",
      borrower: "Green Energy Solutions",
      amount: "$50M",
      status: "Syndication",
      allocation: "20%",
      esgScore: 92,
    },
    {
      id: "3",
      borrower: "Healthcare Partners LLC",
      amount: "$30M",
      status: "Active",
      allocation: "12%",
      esgScore: 85,
    },
  ];

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
              <Link href="/dashboard" className="text-neon-cyan">
                Dashboard
              </Link>
              <Link
                href="/marketplace"
                className="hover:text-neon-cyan transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/analytics"
                className="hover:text-neon-cyan transition-colors"
              >
                Analytics
              </Link>
              <Link
                href="/settings"
                className="hover:text-neon-cyan transition-colors"
              >
                Settings
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, <span className="text-gradient">Investor</span>
              </h1>
              <p className="text-muted-foreground">
                Here&apos;s what&apos;s happening with your portfolio today
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-red-500/50 text-red-500 hover:bg-red-500/10"
                onClick={async () => {
                  try {
                    const res = await fetch("/api/simulate-breach", {
                      method: "POST",
                    });
                    if (res.ok) {
                      // Notification will be handled by WebSocket component
                      console.log("Breach simulated");
                    }
                  } catch (err) {
                    console.error("Simulation failed", err);
                  }
                }}
              >
                🚨 Simulate Breach
              </Button>
              <Button
                variant="default"
                onClick={() => (window.location.href = "/marketplace")}
              >
                Browse Loans
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="hover:border-neon-cyan/30 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neon-green">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Summary & Recent Loans */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Performance Summary */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Portfolio Performance</CardTitle>
                  <Link
                    href="/analytics"
                    className="text-xs text-neon-cyan hover:underline"
                  >
                    Full Analytics
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="h-[300px]">
                <PerformanceChart />
              </CardContent>
            </Card>

            {/* Quick Stats / Mini Composition */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Loan Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentLoans.map((loan) => (
                    <div
                      key={loan.id}
                      className="p-3 rounded-lg glass border border-white/5 hover:border-neon-cyan/30 transition-colors"
                    >
                      <div className="font-semibold text-sm">
                        {loan.borrower}
                      </div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="text-xs text-muted-foreground">
                          {loan.amount} • {loan.status}
                        </span>
                        <span className="text-xs font-semibold text-neon-cyan">
                          {loan.allocation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View Marketplace
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:border-neon-cyan/30 transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle>New Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get AI-powered capital allocation recommendations
                </p>
                <Button variant="outline" className="w-full">
                  Start Allocation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-neon-purple/30 transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">📊</div>
                <CardTitle>Portfolio Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View detailed performance metrics and insights
                </p>
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-neon-green/30 transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">🌱</div>
                <CardTitle>ESG Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track sustainability metrics and impact
                </p>
                <Button variant="outline" className="w-full">
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
