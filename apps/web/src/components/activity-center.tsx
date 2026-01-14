"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { useWebSocket } from "@/lib/websocket-context";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "ALLOCATION" | "BREACH" | "DOCUMENT" | "SYSTEM" | "INTEREST";
  message: string;
  timestamp: string;
  status: "CRITICAL" | "SUCCESS" | "INFO";
}

export function ActivityCenter() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "init1",
      type: "SYSTEM",
      message: "AI Allocation Engine initialized.",
      timestamp: "2026-01-15T00:00:00.000Z",
      status: "INFO",
    },
    {
      id: "init2",
      type: "DOCUMENT",
      message: "LMA Agreement parsed for TechCorp Industries.",
      timestamp: "2026-01-14T22:30:00.000Z",
      status: "SUCCESS",
    },
  ]);

  const { lastMessage } = useWebSocket();

  useEffect(() => {
    if (lastMessage && lastMessage.type === "BREACH_ALERT") {
      const newActivity: Activity = {
        id: Math.random().toString(36).substr(2, 9),
        type: "BREACH",
        message: lastMessage.message,
        timestamp: new Date().toISOString(),
        status: "CRITICAL",
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActivities((prev) => [newActivity, ...prev]);
    }
  }, [lastMessage]);

  return (
    <Card className="h-full flex flex-col border-white/5">
      <CardHeader className="border-b border-white/5 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Activity Feed</CardTitle>
          <span className="bg-neon-cyan/20 text-neon-cyan text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
            Live
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-0 scrollbar-hide">
        {activities.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            No recent activity.
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="p-4 hover:bg-white/5 transition-colors group cursor-default"
              >
                <div className="flex gap-4">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full mt-1.5 shrink-0",
                      activity.status === "CRITICAL"
                        ? "bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                        : activity.status === "SUCCESS"
                        ? "bg-neon-green"
                        : "bg-neon-cyan"
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        activity.status === "CRITICAL"
                          ? "text-red-400 font-medium"
                          : "text-slate-300"
                      )}
                    >
                      {activity.message}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">
                        {activity.type}
                      </span>
                      <span className="text-[10px] text-white/20">•</span>
                      <span className="text-[10px] text-muted-foreground">
                        {new Date(activity.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
