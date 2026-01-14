"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { useState } from "react"

export default function MarketplacePage() {
  const [filter, setFilter] = useState("all")
  
  const loans = [
    {
      id: "1",
      borrower: "TechCorp Industries",
      amount: "$25,000,000",
      term: "36 months",
      rate: "5.5%",
      purpose: "Working Capital",
      status: "Syndication",
      remaining: "$8.5M",
      minInvestment: "$1M",
      esgScore: 78,
      riskRating: "BBB+",
      sector: "Technology",
      covenant: "1.25x DSCR",
    },
    {
      id: "2",
      borrower: "Green Energy Solutions",
      amount: "$50,000,000",
      term: "60 months",
      rate: "4.8%",
      purpose: "Solar Farm Development",
      status: "Syndication",
      remaining: "$30M",
      minInvestment: "$2M",
      esgScore: 92,
      riskRating: "A-",
      sector: "Renewable Energy",
      covenant: "1.5x DSCR",
    },
    {
      id: "3",
      borrower: "Healthcare Partners LLC",
      amount: "$30,000,000",
      term: "48 months",
      rate: "5.2%",
      purpose: "Facility Expansion",
      status: "Active",
      remaining: "$12M",
      minInvestment: "$1.5M",
      esgScore: 85,
      riskRating: "BBB",
      sector: "Healthcare",
      covenant: "1.35x DSCR",
    },
    {
      id: "4",
      borrower: "Manufacturing Corp",
      amount: "$40,000,000",
      term: "42 months",
      rate: "6.1%",
      purpose: "Equipment Purchase",
      status: "Syndication",
      remaining: "$25M",
      minInvestment: "$2.5M",
      esgScore: 72,
      riskRating: "BB+",
      sector: "Manufacturing",
      covenant: "1.2x DSCR",
    },
    {
      id: "5",
      borrower: "Retail Holdings Inc",
      amount: "$20,000,000",
      term: "36 months",
      rate: "5.8%",
      purpose: "Store Renovations",
      status: "Syndication",
      remaining: "$15M",
      minInvestment: "$1M",
      esgScore: 68,
      riskRating: "BBB-",
      sector: "Retail",
      covenant: "1.3x DSCR",
    },
    {
      id: "6",
      borrower: "Clean Water Initiative",
      amount: "$35,000,000",
      term: "72 months",
      rate: "4.5%",
      purpose: "Infrastructure Project",
      status: "Active",
      remaining: "$5M",
      minInvestment: "$1M",
      esgScore: 95,
      riskRating: "A",
      sector: "Infrastructure",
      covenant: "1.4x DSCR",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Loan <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover institutional loan opportunities powered by AI-driven matching
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Input placeholder="Search loans..." />
                <select className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                  <option value="all">All Sectors</option>
                  <option value="tech">Technology</option>
                  <option value="energy">Energy</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
                <select className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                  <option value="all">All Statuses</option>
                  <option value="syndication">Syndication</option>
                  <option value="active">Active</option>
                </select>
                <select className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                  <option value="all">ESG Score</option>
                  <option value="high">High (80+)</option>
                  <option value="medium">Medium (60-80)</option>
                  <option value="low">Low (&lt;60)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">24</div>
                <div className="text-sm text-muted-foreground">Active Loans</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">$1.2B</div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">5.6%</div>
                <div className="text-sm text-muted-foreground">Avg Rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-1">82</div>
                <div className="text-sm text-muted-foreground">Avg ESG Score</div>
              </CardContent>
            </Card>
          </div>

          {/* Loans Grid */}
          <div className="space-y-4">
            {loans.map((loan) => (
              <Card key={loan.id} className="hover:border-neon-cyan/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{loan.borrower}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{loan.sector}</span>
                            <span>•</span>
                            <span>{loan.purpose}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          loan.status === "Syndication" 
                            ? "bg-neon-cyan/20 text-neon-cyan" 
                            : "bg-neon-green/20 text-neon-green"
                        }`}>
                          {loan.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div>
                          <div className="text-xs text-muted-foreground">Total Amount</div>
                          <div className="font-semibold">{loan.amount}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Term</div>
                          <div className="font-semibold">{loan.term}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Interest Rate</div>
                          <div className="font-semibold text-neon-cyan">{loan.rate}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Risk Rating</div>
                          <div className="font-semibold">{loan.riskRating}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                        <div>
                          <div className="text-xs text-muted-foreground">Remaining</div>
                          <div className="font-semibold text-neon-purple">{loan.remaining}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Min Investment</div>
                          <div className="font-semibold">{loan.minInvestment}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">ESG Score</div>
                          <div className="font-semibold text-neon-green">{loan.esgScore}/100</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Covenant</div>
                          <div className="font-semibold text-xs">{loan.covenant}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2 md:w-40">
                      <Button className="flex-1" variant="default">
                        View Details
                      </Button>
                      <Button className="flex-1" variant="outline">
                        Express Interest
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="neon" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
