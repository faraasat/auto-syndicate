"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { CompositionChart } from "@/components/charts/CompositionChart";
import Link from "next/link";

export default function CapitalAllocationResultsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allocations, setAllocations] = useState<any[]>([]);

  useEffect(() => {
    async function runAnalysis() {
      setIsLoading(true);
      try {
        // In reality, this would be a POST to /api/allocate with loan data
        // For the demo, we'll fetch results that simulate the AI agent's output
        await new Promise((r) => setTimeout(r, 2000)); // Simulate AI processing

        setAllocations([
          {
            lenderId: "L1",
            lenderName: "Global Capital Partners",
            amount: 150000000,
            percentage: 30,
            confidence: 94,
            reasoning:
              "Strong alignment with infrastructure mandate. Portfolio is currently underweight in UK energy projects. Return profile exceeds their 7.5% hurdle rate.",
            matchScore: 0.94,
            tags: ["High ESG Match", "Mandate Aligned"],
          },
          {
            lenderId: "L2",
            lenderName: "Mega Bank Institutional",
            amount: 125000000,
            percentage: 25,
            confidence: 87,
            reasoning:
              "Historical relationship with borrower (Alpha Ltd). Risk rating BBB+ is within their tolerance for senior debt positions. Concentration risk is low.",
            matchScore: 0.87,
            tags: ["Relationship Bonus", "Risk Compliant"],
          },
          {
            lenderId: "L3",
            lenderName: "Nexus Private Credit",
            amount: 100000000,
            percentage: 20,
            confidence: 82,
            reasoning:
              "Aggressive yield target perfectly matched. High diversification benefit for their existing tech-heavy portfolio.",
            matchScore: 0.82,
            tags: ["Yield Seeker", "Diversifier"],
          },
          {
            lenderId: "L4",
            lenderName: "Sustainable Finance DFI",
            amount: 75000000,
            percentage: 15,
            confidence: 91,
            reasoning:
              "SLL (Sustainability Linked Loan) structure is a primary requirement. Borrower's carbon reduction KPI meets their ESG impact framework.",
            matchScore: 0.91,
            tags: ["ESG Specialist"],
          },
          {
            lenderId: "L5",
            lenderName: "Horizon Pension Fund",
            amount: 50000000,
            percentage: 10,
            confidence: 76,
            reasoning:
              "Lower tier allocation recommended due to pending sector concentration review. Solid fit otherwise.",
            matchScore: 0.76,
            tags: ["Long-term Hold"],
          },
        ]);
      } catch (error) {
        console.error("Allocation error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    runAnalysis();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">🤖</div>
          <div className="text-neon-cyan font-mono animate-pulse tracking-widest uppercase">
            Running AI Allocation Engine...
          </div>
          <div className="text-xs text-muted-foreground max-w-xs mx-auto">
            Analyzing 45 lender mandates, risk profiles, and historical
            performance benchmarks
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/marketplace" className="hover:text-neon-cyan">
                  Marketplace
                </Link>
                <span>/</span>
                <span className="text-white">AI Allocation Results</span>
              </div>
              <h1 className="text-4xl font-bold">
                Optimized <span className="text-gradient">Syndicate</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Project Alpha: £500,000,000 Facility • AI Match Report
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Adjust Constraints</Button>
              <Button>Send Invitations</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recommendations List */}
            <div className="lg:col-span-2 space-y-4">
              {allocations.map((alloc, index) => (
                <Card
                  key={alloc.lenderId}
                  className="hover:border-neon-cyan/40 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/10 group-hover:border-neon-cyan/50">
                          {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            {alloc.lenderName}
                          </h3>
                          <div className="flex gap-2 mt-1">
                            {alloc.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gradient">
                          {Math.round(alloc.matchScore * 100)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Match Score
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 py-4 border-y border-white/5">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          Recommended Allocation
                        </div>
                        <div className="text-lg font-semibold text-neon-cyan">
                          £{(alloc.amount / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {alloc.percentage}% of total
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          AI Confidence
                        </div>
                        <div className="text-lg font-semibold text-neon-purple">
                          {alloc.confidence}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Verification verified
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          Impact on Portfolio
                        </div>
                        <div className="text-lg font-semibold text-neon-green">
                          +{(Math.random() * 2).toFixed(2)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Diversification gain
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3 items-start">
                      <div className="text-lg">🤖</div>
                      <div className="text-sm text-slate-300 leading-relaxed italic">
                        "{alloc.reasoning}"
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card className="border-neon-cyan/20">
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-neon-cyan">
                    Syndicate Composition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <CompositionChart />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-neon-purple">
                    Syndicate Risk Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">
                        Weighted Credit Rating
                      </span>
                      <span className="text-white">BBB+</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-neon-purple w-[75%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">
                        Bank Participation
                      </span>
                      <span className="text-white">65%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-neon-cyan w-[65%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">
                        Non-Bank Participation
                      </span>
                      <span className="text-white">35%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-neon-pink w-[35%]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-neon-cyan/10 to-transparent border-neon-cyan/20">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-gradient">92/100</div>
                  <div className="text-sm font-semibold text-neon-cyan">
                    AI OPTIMIZATION SCORE
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This syndicate structure balances yield, risk-sharing, and
                    ESG compliance with 92% efficiency based on current market
                    liquidity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
