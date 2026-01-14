"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TerminalLogProps {
  logs: string[];
  title?: string;
  onComplete?: () => void;
}

export function TerminalLog({
  logs,
  title = "AI Reasoning Engine (CrewAI-v0.80)",
  onComplete,
}: TerminalLogProps) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < logs.length) {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => [...prev, logs[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 400 + 200);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, logs, onComplete]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <div className="w-full bg-black/95 border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-xs">
      <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none pt-0.5">
          {title}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="h-[300px] overflow-y-auto p-4 space-y-1.5 scrollbar-hide"
      >
        {visibleLogs.map((log, i) => (
          <div
            key={i}
            className={cn(
              "leading-relaxed",
              log.startsWith(">")
                ? "text-neon-cyan font-bold"
                : log.includes("SUCCESS")
                ? "text-neon-green"
                : log.includes("ERROR")
                ? "text-neon-pink"
                : "text-slate-400"
            )}
          >
            <span className="text-white/20 mr-2">
              [{new Date().toLocaleTimeString([], { hour12: false })}]
            </span>
            {log}
          </div>
        ))}
        {currentIndex < logs.length && (
          <div className="text-neon-cyan animate-pulse">_</div>
        )}
      </div>
    </div>
  );
}
