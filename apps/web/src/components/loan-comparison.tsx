"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";

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

interface LoanComparisonProps {
  loans: Loan[];
  isOpen: boolean;
  onClose: () => void;
}

export function LoanComparison({
  loans,
  isOpen,
  onClose,
}: LoanComparisonProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10">
      <Card className="w-full max-w-6xl h-full flex flex-col border-neon-cyan/30 shadow-2xl shadow-neon-cyan/20 animate-in fade-in zoom-in duration-300">
        <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-4">
          <div>
            <CardTitle className="text-2xl font-bold text-gradient">
              Loan Comparison
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Comparing {loans.length} institutional opportunities
            </p>
          </div>
          <Button variant="ghost" onClick={onClose} className="text-xl">
            ✕
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-0">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="p-4 text-left text-sm font-semibold text-muted-foreground w-1/4">
                  Metric
                </th>
                {loans.map((loan) => (
                  <th
                    key={loan.id}
                    className="p-4 text-left text-lg font-bold text-neon-cyan border-l border-white/5"
                  >
                    {loan.borrower}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { label: "Amount", key: "amount" },
                { label: "Term", key: "term" },
                {
                  label: "Interest Rate",
                  key: "rate",
                  highlight: "text-neon-purple",
                },
                { label: "Sector", key: "sector" },
                {
                  label: "ESG Score",
                  key: "esgScore",
                  suffix: "/100",
                  highlight: "text-neon-green",
                },
                { label: "Risk Rating", key: "riskRating" },
                {
                  label: "Remaining",
                  key: "remaining",
                  highlight: "text-neon-cyan",
                },
                { label: "Min Investment", key: "minInvestment" },
                { label: "Covenant", key: "covenant", small: true },
              ].map((row) => (
                <tr
                  key={row.label}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 text-sm font-medium text-muted-foreground">
                    {row.label}
                  </td>
                  {loans.map((loan) => (
                    <td
                      key={loan.id}
                      className={`p-4 font-semibold border-l border-white/5 ${
                        row.highlight || ""
                      } ${row.small ? "text-xs" : ""}`}
                    >
                      {loan[row.key as keyof Loan]}
                      {row.suffix || ""}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">
                  Purpose
                </td>
                {loans.map((loan) => (
                  <td
                    key={loan.id}
                    className="p-4 text-xs text-slate-300 border-l border-white/5 leading-relaxed"
                  >
                    {loan.purpose}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </CardContent>

        <div className="p-4 border-t border-white/10 flex justify-end gap-3 bg-white/5">
          <Button variant="outline" onClick={() => window.print()}>
            Export Comparison
          </Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Card>
    </div>
  );
}
