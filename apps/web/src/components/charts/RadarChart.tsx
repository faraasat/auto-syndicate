"use client";

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { SkeletonChart } from "@/components/loading";
import { useState, useEffect } from "react";

interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export function RadarChart() {
  const [data, setData] = useState<RadarDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setData([
        { subject: "Credit", A: 120, fullMark: 150 },
        { subject: "Market", A: 98, fullMark: 150 },
        { subject: "Liquidity", A: 86, fullMark: 150 },
        { subject: "Operational", A: 99, fullMark: 150 },
        { subject: "ESG", A: 85, fullMark: 150 },
        { subject: "Legal", A: 65, fullMark: 150 },
      ]);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonChart />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="rgba(255,255,255,0.1)" />
        <PolarAngleAxis
          dataKey="subject"
          stroke="rgba(255,255,255,0.5)"
          fontSize={12}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          stroke="rgba(255,255,255,0.1)"
          tick={false}
          axisLine={false}
        />
        <Radar
          name="Risk Profile"
          dataKey="A"
          stroke="#00f3ff"
          strokeWidth={2}
          fill="#00f3ff"
          fillOpacity={0.3}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "8px",
            backdropFilter: "blur(4px)",
          }}
          itemStyle={{ color: "#00f3ff" }}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}
