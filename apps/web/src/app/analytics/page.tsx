"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/lib/toast-context";

import { PerformanceChart } from "@/components/charts/PerformanceChart";
import { CompositionChart } from "@/components/charts/CompositionChart";
import { BarChart } from "@/components/charts/BarChart";
import { RadarChart } from "@/components/charts/RadarChart";

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("1Y");
  const { addToast } = useToast();

  const handleExport = () => {
    addToast("Downloading analytics report...", "info");
    setTimeout(() => {
      addToast("Report downloaded successfully", "success");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Portfolio <span className="text-gradient">Analytics</span>
              </h1>
              <p className="text-muted-foreground">
                Comprehensive insights into your loan portfolio performance
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                {["1M", "3M", "6M", "1Y", "ALL"].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      timeframe === tf
                        ? "bg-neon-cyan text-black shadow-lg shadow-neon-cyan/20"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
              <Button variant="outline" onClick={handleExport}>
                Export PDF
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Portfolio Value",
                value: "$450.2M",
                change: "+12.5%",
              },
              { label: "Weighted Avg Yield", value: "6.8%", change: "+0.3%" },
              {
                label: "Portfolio Duration",
                value: "4.2 years",
                change: "-0.1 years",
              },
              { label: "Risk-Adjusted Return", value: "8.2%", change: "+0.8%" },
            ].map((metric, i) => (
              <Card
                key={i}
                className="hover:border-neon-cyan/30 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neon-green">{metric.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Trends */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <PerformanceChart />
            </CardContent>
          </Card>

          {/* Analytics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Composition - Pie */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Portfolio Composition</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <CompositionChart />
              </CardContent>
            </Card>

            {/* Sector Performance - Bar */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Sector Allocation ($M)</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart />
              </CardContent>
            </Card>

            {/* Risk Analysis - Radar */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Risk Profile</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <RadarChart />
              </CardContent>
            </Card>
          </div>

          {/* ESG & Additional Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>ESG Portfolio Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall ESG Score</span>
                      <span className="text-neon-green font-semibold">
                        82/100
                      </span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-green"
                        style={{ width: "82%" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-cyan mb-1">
                        78
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Environmental
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-purple mb-1">
                        85
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Social
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-green mb-1">
                        83
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Governance
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm font-semibold mb-3">
                      Carbon Metrics
                    </div>
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

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                {[
                  { region: "North America", pct: 65 },
                  { region: "Europe", pct: 20 },
                  { region: "Asia Pacific", pct: 10 },
                  { region: "Other", pct: 5 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center mb-4"
                  >
                    <span className="text-sm">{item.region}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neon-cyan"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                        {item.pct}%
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
