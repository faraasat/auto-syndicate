"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { useToast } from "@/lib/toast-context";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

interface Scenario {
  id: string;
  name: string;
  description: string;
  impact: "CRITICAL" | "MODERATE" | "STABLE";
  color: string;
}

const scenarios: Scenario[] = [
  {
    id: "base",
    name: "Base Case",
    description: "Current market conditions with mild growth.",
    impact: "STABLE",
    color: "#39ff14",
  },
  {
    id: "hike",
    name: "Rate Hikes (+200bps)",
    description: "Aggressive central bank tightening.",
    impact: "MODERATE",
    color: "#bc13fe",
  },
  {
    id: "recession",
    name: "Global Recession",
    description: "Deep economic downturn with default spikes.",
    impact: "CRITICAL",
    color: "#ff0080",
  },
  {
    id: "esg_shock",
    name: "ESG Policy Shift",
    description: "Rapid transition to green standards.",
    impact: "MODERATE",
    color: "#00f3ff",
  },
];

export default function StressTestPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>("base");
  const [interestRate, setInterestRate] = useState(5.5);
  const [defaultProb, setDefaultProb] = useState(1.2);
  const { addToast } = useToast();

  const impactData = useMemo(() => {
    const factor =
      selectedScenario === "recession"
        ? 0.7
        : selectedScenario === "hike"
        ? 0.85
        : 1.0;
    return [
      { name: "Portfolio NAV", current: 45.2, stressed: 45.2 * factor },
      {
        name: "Yield (bps)",
        current: 6.8,
        stressed: 6.8 * factor + (selectedScenario === "hike" ? 2.0 : 0),
      },
      { name: "Liquidity", current: 85, stressed: 85 * (factor * 0.9) },
    ];
  }, [selectedScenario]);

  const handleRunSimulation = () => {
    addToast(
      `Running ${
        scenarios.find((s) => s.id === selectedScenario)?.name
      } simulation...`,
      "info"
    );
    setTimeout(() => {
      addToast("Stress test complete. Impact reports generated.", "success");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                AI Stress <span className="text-gradient">Testing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Model portfolio resilience across complex macro-economic
                scenarios
              </p>
            </div>
            <Button variant="default" onClick={handleRunSimulation}>
              Run New Simulation
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-white/5">
                <CardHeader>
                  <CardTitle className="text-lg">Scenarios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                  {scenarios.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedScenario(s.id)}
                      className={`w-full text-left p-4 transition-all border-l-4 ${
                        selectedScenario === s.id
                          ? "bg-white/5 border-neon-cyan"
                          : "border-transparent hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="font-bold mb-1">{s.name}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {s.description}
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-white/5">
                <CardHeader>
                  <CardTitle className="text-lg">Macro Levers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">
                        Benchmark Rate
                      </span>
                      <span className="font-mono text-neon-cyan">
                        {interestRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.25"
                      value={interestRate}
                      onChange={(e) =>
                        setInterestRate(parseFloat(e.target.value))
                      }
                      className="w-full accent-neon-cyan"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">
                        Avg Default Prob
                      </span>
                      <span className="font-mono text-neon-pink">
                        {defaultProb}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.1"
                      value={defaultProb}
                      onChange={(e) =>
                        setDefaultProb(parseFloat(e.target.value))
                      }
                      className="w-full accent-neon-pink"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Dashboard */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {impactData.map((data, i) => (
                  <Card key={i} className="border-white/5 overflow-hidden">
                    <CardContent className="pt-6">
                      <div className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">
                        {data.name}
                      </div>
                      <div className="flex items-end gap-3 mb-2">
                        <div className="text-3xl font-bold">
                          {data.stressed.toFixed(1)}
                        </div>
                        <div
                          className={`text-xs pb-1 font-bold ${
                            data.stressed < data.current
                              ? "text-red-500"
                              : "text-neon-green"
                          }`}
                        >
                          {(
                            ((data.stressed - data.current) / data.current) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-1000"
                          style={{
                            width: `${
                              (data.stressed /
                                Math.max(data.current, data.stressed)) *
                              100
                            }%`,
                            backgroundColor:
                              scenarios.find((s) => s.id === selectedScenario)
                                ?.color || "#00f3ff",
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-white/5">
                <CardHeader>
                  <CardTitle>Scenario Impact Sensitivity</CardTitle>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={impactData}
                      layout="vertical"
                      margin={{ left: 50, right: 30 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.05)"
                      />
                      <XAxis type="number" hide />
                      <YAxis
                        dataKey="name"
                        type="category"
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={12}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                      <Bar
                        dataKey="stressed"
                        radius={[0, 4, 4, 0]}
                        barSize={40}
                      >
                        {impactData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              index === 0
                                ? "#00f3ff"
                                : index === 1
                                ? "#bc13fe"
                                : "#ff0080"
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-white/5">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold">
                      AI Risk Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-white/5 text-sm leading-relaxed text-slate-300 italic">
                      "Under the{" "}
                      <span className="text-neon-cyan font-bold capitalize">
                        {selectedScenario}
                      </span>{" "}
                      scenario, the portfolio exhibits higher-than-average
                      sensitivity to energy sector volatility. We recommend
                      hedging 15% of the position if the rate hikes continue
                      beyond Q3."
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/5">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold">
                      Recommended Mitigations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      "Increase tech-sector allocation for resilience",
                      "Accelerate deleveraging on BBB- holdings",
                      "Lock long-term fixed rates where applicable",
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="flex gap-3 text-xs text-muted-foreground"
                      >
                        <span className="text-neon-cyan">•</span> {m}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
