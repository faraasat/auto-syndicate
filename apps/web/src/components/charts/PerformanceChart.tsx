"use client";

import { useState, useEffect } from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SkeletonChart } from "@/components/loading";

interface PerformanceDataPoint {
  date: string;
  value: number;
  yield: number;
  name: string;
  displayValue: string;
}

export function PerformanceChart() {
  const [data, setData] = useState<PerformanceDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/analytics/performance");
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();

        // Format dates for display (e.g., "Jan 26")
        const formattedData = json.map(
          (item: { date: string; value: number; yield: number }) => {
            const date = new Date(item.date);
            return {
              ...item,
              name: date.toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
              }),
              displayValue: (item.value / 1000000).toFixed(1), // Convert to millions
            };
          }
        );

        setData(formattedData);
      } catch (error) {
        console.error("Chart data fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <SkeletonChart />;
  }

  return (
    <div className="h-full w-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--neon-cyan)"
                stopOpacity={0.3}
              />
              <stop offset="95%" stopColor="var(--neon-cyan)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--neon-purple)"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="var(--neon-purple)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(255,255,255,0.05)"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10 }}
            tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(10, 10, 10, 0.9)",
              border: "1px solid rgba(0, 255, 255, 0.2)",
              borderRadius: "8px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
            }}
            itemStyle={{ color: "var(--neon-cyan)" }}
            formatter={(
              value: number | undefined,
              name: string | undefined
            ) => {
              if (!value) return [0, name || "Value"];
              if (name === "value")
                return [`$${(value / 1000000).toFixed(2)}M`, "Total Value"];
              if (name === "yield") return [`${value}%`, "Avg Yield"];
              return [value, name || "Value"];
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--neon-cyan)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={2000}
          />
          <Area
            type="monotone"
            dataKey="yield"
            stroke="var(--neon-purple)"
            strokeWidth={2}
            fillOpacity={0.5}
            fill="url(#colorYield)"
            animationDuration={2500}
            strokeDasharray="5 5"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
