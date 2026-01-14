"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/card";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useToast } from "@/lib/toast-context";
import { LoanComparison } from "@/components/loan-comparison";
import { TerminalLog } from "@/components/terminal-log";

interface Loan {
  id: string;
  borrower: string;
  amount: string;
  term: string;
  rate: string;
  purpose: string;
  status: string;
  remaining: string;
  minInvestment: string;
  esgScore: number;
  riskRating: string;
  sector: string;
  covenant: string;
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [esgFilter, setEsgFilter] = useState("all");
  const [sortBy, setSortBy] = useState("esg");
  const [selectedLoans, setSelectedLoans] = useState<string[]>([]);
  const [isComparing, setIsComparing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingLoan, setAnalyzingLoan] = useState<any>(null);
  const { addToast } = useToast();

  const analysisLogs = [
    "> Initializing CrewAI multi-agent workflow...",
    "> Agent [Legal Scraper]: Indexing LMA standard clauses...",
    "> Agent [Credit Analyst]: Running Monte-Carlo sensitivity on DSCR...",
    "  [INFO] Detected SONIA+2.75% margin. Benchmarking against 5-year swap curves...",
    "> Agent [ESG Auditor]: Verifying Carbon Disclosure Project metrics...",
    "  [SUCCESS] ESG Score 92/100 verified via UNEP FI guidelines.",
    "> Agent [Allocator]: Calculating optimal participation for alpha-portfolio...",
    "> Finalizing recommendation: High-Conviction Allocation (7.2%).",
    "  [STATUS] Strategy: Accumulate.",
  ];

  const handleAnalyze = (loan: any) => {
    setAnalyzingLoan(loan);
    setIsAnalyzing(true);
  };

  const loans: Loan[] = [
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
  ];

  const filteredLoans = useMemo(() => {
    let result = loans;

    if (searchQuery) {
      result = result.filter(
        (loan) =>
          loan.borrower.toLowerCase().includes(searchQuery.toLowerCase()) ||
          loan.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
          loan.sector.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sectorFilter !== "all") {
      result = result.filter((loan) =>
        loan.sector.toLowerCase().includes(sectorFilter.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      result = result.filter(
        (loan) => loan.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (esgFilter === "high") {
      result = result.filter((loan) => loan.esgScore >= 80);
    } else if (esgFilter === "medium") {
      result = result.filter(
        (loan) => loan.esgScore >= 60 && loan.esgScore < 80
      );
    } else if (esgFilter === "low") {
      result = result.filter((loan) => loan.esgScore < 60);
    }

    if (sortBy === "esg") {
      result = [...result].sort((a, b) => b.esgScore - a.esgScore);
    } else if (sortBy === "amount") {
      result = [...result].sort((a, b) => {
        const amountA = parseFloat(a.amount.replace(/[$,M]/g, ""));
        const amountB = parseFloat(b.amount.replace(/[$,M]/g, ""));
        return amountB - amountA;
      });
    } else if (sortBy === "rate") {
      result = [...result].sort((a, b) => {
        const rateA = parseFloat(a.rate.replace("%", ""));
        const rateB = parseFloat(b.rate.replace("%", ""));
        return rateB - rateA;
      });
    }

    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, sectorFilter, statusFilter, esgFilter, sortBy]);

  const toggleSelect = (id: string) => {
    setSelectedLoans((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (prev.length >= 3) {
        addToast("You can only compare up to 3 loans", "warning");
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleExpressInterest = (borrower: string) => {
    addToast(
      `Interest expressed for ${borrower}. Our team will contact you shortly.`,
      "success"
    );
  };

  const handleCompare = () => {
    if (selectedLoans.length < 2) {
      addToast("Select at least 2 loans to compare", "info");
      return;
    }
    setIsComparing(true);
  };

  const comparisonLoans = loans.filter((l) => selectedLoans.includes(l.id));

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Loan <span className="text-gradient">Marketplace</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover institutional loan opportunities powered by AI matching
              </p>
            </div>

            {selectedLoans.length > 0 && (
              <div className="flex items-center gap-4 animate-in fade-in slide-in-from-right duration-300">
                <span className="text-sm font-medium text-neon-cyan">
                  {selectedLoans.length} deal
                  {selectedLoans.length > 1 ? "s" : ""} selected
                </span>
                <Button variant="default" onClick={handleCompare}>
                  Compare Selected
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedLoans([])}
                >
                  Clear
                </Button>
              </div>
            )}
          </div>

          {/* Filters */}
          <Card className="mb-8 loan-filters">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-5 gap-4">
                <Input
                  placeholder="Search loans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                  className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                >
                  <option value="all">All Sectors</option>
                  <option value="tech">Technology</option>
                  <option value="energy">Energy</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="infrastructure">Infrastructure</option>
                </select>
                <select
                  className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="syndication">Syndication</option>
                  <option value="active">Active</option>
                </select>
                <select
                  className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  value={esgFilter}
                  onChange={(e) => setEsgFilter(e.target.value)}
                >
                  <option value="all">ESG Score</option>
                  <option value="high">High (80+)</option>
                  <option value="medium">Medium (60-80)</option>
                  <option value="low">Low (&lt;60)</option>
                </select>
                <select
                  className="h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="esg">Sort by ESG</option>
                  <option value="amount">Sort by Amount</option>
                  <option value="rate">Sort by Rate</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <div className="mb-4 text-sm text-muted-foreground marketplace-stats">
            Showing {filteredLoans.length} of {loans.length} loans
          </div>

          {/* Loans Grid */}
          <div className="space-y-4">
            {filteredLoans.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <div className="text-xl font-semibold mb-2">
                    No loans found
                  </div>
                  <div className="text-muted-foreground">
                    Try adjusting your filters or search query
                  </div>
                </CardContent>
              </Card>
            ) : (
              filteredLoans.map((loan) => (
                <Card
                  key={loan.id}
                  className={`transition-all border-l-4 ${
                    selectedLoans.includes(loan.id)
                      ? "border-neon-cyan bg-neon-cyan/5 shadow-lg shadow-neon-cyan/10"
                      : "hover:border-white/20 border-transparent"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedLoans.includes(loan.id)}
                              onChange={() => toggleSelect(loan.id)}
                              className="w-5 h-5 rounded border-white/20 bg-black/40 text-neon-cyan focus:ring-neon-cyan accent-neon-cyan cursor-pointer"
                            />
                            <div>
                              <h3 className="text-xl font-bold mb-1">
                                {loan.borrower}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{loan.sector}</span>
                                <span>•</span>
                                <span>{loan.purpose}</span>
                              </div>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              loan.status === "Syndication"
                                ? "bg-neon-cyan/20 text-neon-cyan"
                                : "bg-neon-green/20 text-neon-green"
                            }`}
                          >
                            {loan.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Total Amount
                            </div>
                            <div className="font-semibold">{loan.amount}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Term
                            </div>
                            <div className="font-semibold">{loan.term}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Interest Rate
                            </div>
                            <div className="font-semibold text-neon-cyan">
                              {loan.rate}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Risk Rating
                            </div>
                            <div className="font-semibold">
                              {loan.riskRating}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Remaining
                            </div>
                            <div className="font-semibold text-neon-purple">
                              {loan.remaining}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Min Investment
                            </div>
                            <div className="font-semibold">
                              {loan.minInvestment}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">
                              ESG Score
                            </div>
                            <div className="font-semibold text-neon-green">
                              {loan.esgScore}/100
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex md:flex-col gap-2 md:w-48">
                        <Button
                          className="flex-1"
                          variant="default"
                          onClick={() =>
                            (window.location.href = `/documents/review?id=${loan.id}`)
                          }
                        >
                          View Details
                        </Button>
                        <Button
                          className="flex-1"
                          variant="outline"
                          onClick={() => handleExpressInterest(loan.borrower)}
                        >
                          Express Interest
                        </Button>
                        <Button
                          className="flex-1 analyze-btn"
                          variant="outline"
                          onClick={() => handleAnalyze(loan)}
                        >
                          Analyze Allocation
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <LoanComparison
        loans={comparisonLoans}
        isOpen={isComparing && comparisonLoans.length > 0}
        onClose={() => setIsComparing(false)}
      />

      {/* AI Analysis Overlay */}
      {isAnalyzing && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
          <div className="w-full max-w-2xl transform animate-in slide-in-from-bottom-10 duration-500">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-neon-cyan">Analyzing</span>{" "}
              {analyzingLoan?.borrower}
            </h2>
            <TerminalLog
              logs={analysisLogs}
              onComplete={() => {
                setTimeout(() => {
                  setIsAnalyzing(false);
                  window.location.href = `/allocate/results?id=${analyzingLoan?.id}`;
                }, 2000);
              }}
            />
            <div className="mt-4 text-center text-[10px] text-muted-foreground uppercase tracking-widest animate-pulse">
              AI Agents Collaborating...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
