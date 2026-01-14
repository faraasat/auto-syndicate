"use client";

import { useState, useEffect } from "react";
import { useWebSocket } from "@/lib/websocket-context";

export function Notifications() {
  const { notifications } = useWebSocket();
  const [isOpen, setIsOpen] = useState(false);
  const [seenCount, setSeenCount] = useState(0);

  const hasNew = notifications.length > seenCount;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setSeenCount(notifications.length);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="p-2 rounded-full hover:bg-white/10 relative transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        {hasNew && (
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          <div className="p-3 border-b border-white/10 flex justify-between items-center bg-white/5">
            <h3 className="font-semibold text-sm">Notifications</h3>
            <span className="text-xs text-muted-foreground">
              {notifications.length} New
            </span>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground text-sm">
                No new notifications
              </div>
            ) : (
              notifications.map((note, i) => (
                <div
                  key={i}
                  className="p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 text-sm flex gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-neon-cyan mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-white/90">{note}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Just now
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
