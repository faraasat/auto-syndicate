"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import Link from "next/link";

export default function DocumentReviewPage() {
  const [isSaving, setIsSaving] = useState(false);

  // Mock extracted data
  const [data, setData] = useState({
    borrower: { value: "Alpha Infrastructure Ltd", confidence: 98 },
    amount: { value: "500,000,000", confidence: 95 },
    currency: { value: "GBP", confidence: 99 },
    interestRate: { value: "SONIA + 2.75%", confidence: 92 },
    maturityDate: { value: "2029-12-31", confidence: 96 },
    leverageCovenant: { value: "≤ 3.5x", confidence: 88 },
    dscrCovenant: { value: "≥ 1.25x", confidence: 91 },
  });

  const handleChange = (key: string, newValue: string) => {
    setData((prev) => ({
      ...prev,
      [key]: { ...prev[key as keyof typeof prev], value: newValue },
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save delay
    await new Promise((r) => setTimeout(r, 1500));
    setIsSaving(false);
    window.location.href = "/dashboard?sync=success";
  };

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/dashboard" className="hover:text-neon-cyan">
                  Dashboard
                </Link>
                <span>/</span>
                <span className="text-white">Document Review</span>
              </div>
              <h1 className="text-4xl font-bold">
                Review <span className="text-gradient">Extraction</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Project Alpha Facility Agreement • LMA Standard
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Re-parse Document</Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Approve & Sync"}
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: Document Preview */}
            <Card className="h-[800px] overflow-hidden flex flex-col">
              <CardHeader className="border-b border-white/5 bg-white/5">
                <CardTitle className="text-sm font-medium">
                  Original Document (Preview)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-8 overflow-y-auto bg-slate-900/50">
                <div className="space-y-6 font-serif text-slate-300">
                  <div className="text-center font-bold text-xl mb-12 text-white">
                    FACILITY AGREEMENT
                  </div>

                  <section className="space-y-2">
                    <p className="font-bold text-white uppercase underline">
                      1. DEFINITIONS AND INTERPRETATIONS
                    </p>
                    <p>In this Agreement:</p>
                    <div className="pl-4 space-y-4">
                      <p>
                        <span className="font-bold text-neon-cyan">
                          &ldquo;Borrower&rdquo;
                        </span>{" "}
                        means Alpha Infrastructure Ltd, a company incorporated
                        in England and Wales with registered number 01234567.
                      </p>
                      <p>
                        <span className="font-bold text-neon-cyan">
                          &ldquo;Interest Rate&rdquo;
                        </span>{" "}
                        means the aggregate of the applicable SONIA and a Margin
                        of 2.75 per cent. per annum.
                      </p>
                      <p>
                        <span className="font-bold text-neon-cyan">
                          &ldquo;Total Facility&rdquo;
                        </span>{" "}
                        means £500,000,000.
                      </p>
                      <p>
                        <span className="font-bold text-neon-purple">
                          &ldquo;Leverage Ratio&rdquo;
                        </span>{" "}
                        has the meaning given to it in Clause 21 (Financial
                        Covenants).
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4 pt-8">
                    <p className="font-bold text-white uppercase underline">
                      12. REPAYMENT
                    </p>
                    <p>
                      The Borrower shall repay the Facility in full on the
                      Terminal Date, being 31 December 2029.
                    </p>
                  </section>

                  <div className="opacity-20 select-none pointer-events-none">
                    <p>
                      Additional complex legal text here that the AI has
                      parsed...
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <p key={i}>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Column: Structured Data */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Core Terms</CardTitle>
                    <span className="text-xs text-neon-green bg-neon-green/10 px-2 py-1 rounded">
                      High Confidence Overall
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label className="text-muted-foreground">
                        Borrower Entity
                      </label>
                      <span className="text-neon-cyan">
                        {data.borrower.confidence}% Confidence
                      </span>
                    </div>
                    <Input
                      value={data.borrower.value}
                      onChange={(e) => handleChange("borrower", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <label className="text-muted-foreground">
                          Total Amount
                        </label>
                        <span className="text-neon-cyan">
                          {data.amount.confidence}%
                        </span>
                      </div>
                      <Input
                        value={data.amount.value}
                        onChange={(e) => handleChange("amount", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <label className="text-muted-foreground">
                          Currency
                        </label>
                        <span className="text-neon-cyan">
                          {data.currency.confidence}%
                        </span>
                      </div>
                      <Input
                        value={data.currency.value}
                        onChange={(e) =>
                          handleChange("currency", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <label className="text-muted-foreground">
                          Interest Rate
                        </label>
                        <span className="text-neon-purple">
                          {data.interestRate.confidence}% Confidence
                        </span>
                      </div>
                      <Input
                        value={data.interestRate.value}
                        onChange={(e) =>
                          handleChange("interestRate", e.target.value)
                        }
                        className="border-neon-purple/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <label className="text-muted-foreground">
                          Maturity Date
                        </label>
                        <span className="text-neon-cyan">
                          {data.maturityDate.confidence}%
                        </span>
                      </div>
                      <Input
                        type="date"
                        value={data.maturityDate.value}
                        onChange={(e) =>
                          handleChange("maturityDate", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Financial Covenants</CardTitle>
                    <span className="text-xs text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                      Review Needed
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label className="text-muted-foreground">
                        Leverage Ratio Limit
                      </label>
                      <span className="text-yellow-500">
                        {data.leverageCovenant.confidence}% Confidence
                      </span>
                    </div>
                    <Input
                      value={data.leverageCovenant.value}
                      onChange={(e) =>
                        handleChange("leverageCovenant", e.target.value)
                      }
                      className="border-yellow-500/30"
                    />
                    <p className="text-[10px] text-muted-foreground">
                      AI Note: Definition found in Clause 21.1. Calculation
                      includes Net Debt / EBITDA.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label className="text-muted-foreground">
                        DSCR Limit
                      </label>
                      <span className="text-neon-cyan">
                        {data.dscrCovenant.confidence}% Confidence
                      </span>
                    </div>
                    <Input
                      value={data.dscrCovenant.value}
                      onChange={(e) =>
                        handleChange("dscrCovenant", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neon-cyan/20 bg-neon-cyan/5">
                <CardContent className="p-4 flex items-start gap-4 text-sm">
                  <div className="text-xl">🤖</div>
                  <div>
                    <p className="font-semibold text-neon-cyan mb-1">
                      AI Assistant Recommendation
                    </p>
                    <p className="text-muted-foreground">
                      I have extracted 12 key fields from the document. The
                      interest rate formula matches the LMA standard for
                      SONIA-based facilities. I recommend verifying the Leverage
                      Ratio definition as it includes a specific &ldquo;Adjusted
                      EBITDA&rdquo; carve-out on page 42.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Deal Q&A Section */}
              <Card className="border-white/10 shadow-xl overflow-hidden">
                <CardHeader className="bg-white/5 border-b border-white/5">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <span>💬</span> Deal Q&A (LMA Expert)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col h-[300px]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-neon-cyan/20 flex items-center justify-center text-[10px]">
                        AI
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-xs text-slate-300 max-w-[85%]">
                        Hello! I've indexed this 85-page Facility Agreement. Ask
                        me anything about specific clauses or obligations.
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-white/5 bg-black/40">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ask about Change of Control, EBITDA definition..."
                        className="h-9 text-xs"
                      />
                      <Button size="sm" className="h-9 px-3">
                        Ask
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
