"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const portfolioData = [
  { month: "Jan", balance: 35.2, yield: 6.2 },
  { month: "Feb", balance: 38.5, yield: 6.4 },
  { month: "Mar", balance: 40.1, yield: 6.5 },
  { month: "Apr", balance: 42.8, yield: 6.7 },
  { month: "May", balance: 45.2, yield: 6.8 },
];

const sectorData = [
  { name: "Technology", value: 35, color: "#00f3ff" },
  { name: "Energy", value: 25, color: "#bc13fe" },
  { name: "Healthcare", value: 20, color: "#ff0080" },
  { name: "Manufacturing", value: 15, color: "#39ff14" },
  { name: "Infrastructure", value: 5, color: "#faff00" },
];

const holdingData = [
  {
    id: "1",
    borrower: "TechCorp Industries",
    committed: "$8.5M",
    yield: "5.5%",
    term: "36m",
    esg: 78,
    status: "Active",
  },
  {
    id: "2",
    borrower: "Green Energy Solutions",
    committed: "$12.0M",
    yield: "4.8%",
    term: "60m",
    esg: 92,
    status: "Active",
  },
  {
    id: "3",
    borrower: "Healthcare Partners",
    committed: "$6.5M",
    yield: "5.2%",
    term: "48m",
    esg: 85,
    status: "Active",
  },
  {
    id: "4",
    borrower: "Infrastructure Fund",
    committed: "$10.0M",
    yield: "6.1%",
    term: "42m",
    esg: 88,
    status: "Pending",
  },
  {
    id: "5",
    borrower: "Retail Holdings",
    committed: "$8.2M",
    yield: "5.8%",
    term: "36m",
    esg: 72,
    status: "Active",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Strategic <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your institutional holdings and risk exposure
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Download Report</Button>
              <Button variant="default">Rebalance Portfolio</Button>
            </div>
          </div>

          {/* Key Portfolio Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Asset Value", value: "$45.2M", change: "+12.8%" },
              { label: "Weighted Avg Yield", value: "6.8%", change: "+0.2%" },
              {
                label: "Portfolio ESG Score",
                value: "82/100",
                change: "+4 pts",
              },
              {
                label: "Active Positions",
                value: "8",
                change: "+2 from target",
              },
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

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Balance Growth Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Portfolio Growth & Yield</CardTitle>
              </CardHeader>
              <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioData}>
                    <defs>
                      <linearGradient
                        id="colorBalance"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#00f3ff"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#00f3ff"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" />
                    <YAxis stroke="rgba(255,255,255,0.3)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      itemStyle={{ color: "#00f3ff" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#00f3ff"
                      fillOpacity={1}
                      fill="url(#colorBalance)"
                      strokeWidth={3}
                    />
                    <Area
                      type="monotone"
                      dataKey="yield"
                      stroke="#bc13fe"
                      fill="transparent"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sector Allocation Heatmap/Pie */}
            <Card>
              <CardHeader>
                <CardTitle>Sector Exposure</CardTitle>
              </CardHeader>
              <CardContent className="h-[350px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Holdings Breakdown Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Current Holdings</CardTitle>
              <div className="flex gap-2">
                <Input placeholder="Search holdings..." className="w-64" />
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 pt-0 font-medium text-muted-foreground">
                        Borrower
                      </th>
                      <th className="pb-4 pt-0 font-medium text-muted-foreground">
                        Committed
                      </th>
                      <th className="pb-4 pt-0 font-medium text-muted-foreground">
                        Yield
                      </th>
                      <th className="pb-4 pt-0 font-medium text-muted-foreground">
                        Term
                      </th>
                      <th className="pb-4 pt-0 font-medium text-muted-foreground">
                        ESG
                      </th>
                      <th className="pb-4 pt-0 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="pb-4 pt-0 text-right font-medium text-muted-foreground">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {holdingData.map((holding) => (
                      <tr
                        key={holding.id}
                        className="group hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4">
                          <div className="font-semibold">
                            {holding.borrower}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Position ID: {holding.id}
                          </div>
                        </td>
                        <td className="py-4 font-mono font-bold text-neon-cyan">
                          {holding.committed}
                        </td>
                        <td className="py-4 text-neon-purple">
                          {holding.yield}
                        </td>
                        <td className="py-4">{holding.term}</td>
                        <td className="py-4 text-neon-green">
                          {holding.esg}/100
                        </td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                              holding.status === "Active"
                                ? "bg-neon-green/20 text-neon-green"
                                : "bg-neon-cyan/20 text-neon-cyan"
                            }`}
                          >
                            {holding.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Manage
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
