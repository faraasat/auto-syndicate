"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import Link from "next/link"

export default function AnalyticsPage() {
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
              <Link href="/analytics" className="text-neon-cyan">Analytics</Link>
              <Link href="/settings" className="hover:text-neon-cyan transition-colors">Settings</Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Portfolio <span className="text-gradient">Analytics</span>
            </h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your loan portfolio performance
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Portfolio Value", value: "$450.2M", change: "+12.5%" },
              { label: "Weighted Avg Yield", value: "6.8%", change: "+0.3%" },
              { label: "Portfolio Duration", value: "4.2 years", change: "-0.1 years" },
              { label: "Risk-Adjusted Return", value: "8.2%", change: "+0.8%" },
            ].map((metric, i) => (
              <Card key={i} className="hover:border-neon-cyan/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-3xl font-bold text-gradient mb-1">{metric.value}</div>
                  <div className="text-xs text-neon-green">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analytics Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { sector: "Technology", pct: 28, value: "$126.1M" },
                    { sector: "Healthcare", pct: 22, value: "$99.0M" },
                    { sector: "Energy", pct: 25, value: "$112.6M" },
                    { sector: "Manufacturing", pct: 15, value: "$67.5M" },
                    { sector: "Other", pct: 10, value: "$45.0M" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.sector}</span>
                        <span className="text-neon-cyan">{item.pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{item.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ESG Portfolio Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall ESG Score</span>
                      <span className="text-neon-green font-semibold">82/100</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-green" style={{ width: "82%" }} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-cyan mb-1">78</div>
                      <div className="text-xs text-muted-foreground">Environmental</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-purple mb-1">85</div>
                      <div className="text-xs text-muted-foreground">Social</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-green mb-1">83</div>
                      <div className="text-xs text-muted-foreground">Governance</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm font-semibold mb-3">Carbon Metrics</div>
                    <div className="text-xs text-muted-foreground space-y-2">
                      <div className="flex justify-between">
                        <span>Portfolio Carbon Intensity</span>
                        <span>125.5 tCO₂e/$M</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Green Loan Allocation</span>
                        <span>35% ($157.6M)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Performance Trends (Last 12 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-1 p-4">
                {[65, 72, 68, 75, 71, 79, 77, 82, 80, 85, 83, 88].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-neon-cyan to-neon-purple rounded-t"
                      style={{ height: `${value}%` }}
                    />
                    <div className="text-xs text-muted-foreground mt-2">
                      {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Metrics */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Credit Quality Distribution</div>
                  {[
                    { rating: "AAA/AA", pct: 15 },
                    { rating: "A", pct: 25 },
                    { rating: "BBB", pct: 40 },
                    { rating: "BB", pct: 15 },
                    { rating: "B", pct: 5 },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-xs mb-1">
                      <span>{item.rating}</span>
                      <span className="text-neon-cyan">{item.pct}%</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Covenant Status</div>
                  {[
                    { status: "Compliant", count: 42, color: "neon-green" },
                    { status: "At Risk", count: 5, color: "neon-cyan" },
                    { status: "Breach", count: 1, color: "neon-pink" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-xs mb-2">
                      <span className="flex items-center">
                        <span className={`w-2 h-2 rounded-full bg-${item.color} mr-2`}></span>
                        {item.status}
                      </span>
                      <span>{item.count}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Geographic Distribution</div>
                  {[
                    { region: "North America", pct: 65 },
                    { region: "Europe", pct: 20 },
                    { region: "Asia Pacific", pct: 10 },
                    { region: "Other", pct: 5 },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-xs mb-1">
                      <span>{item.region}</span>
                      <span className="text-neon-cyan">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
