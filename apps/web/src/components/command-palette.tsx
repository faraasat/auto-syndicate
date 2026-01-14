"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const commands = [
    {
      id: "1",
      label: "Marketplace",
      section: "Navigation",
      href: "/marketplace",
      icon: "🌐",
    },
    {
      id: "2",
      label: "Portfolio Hub",
      section: "Navigation",
      href: "/portfolio",
      icon: "📊",
    },
    {
      id: "3",
      label: "Secondary Trading",
      section: "Navigation",
      href: "/secondary",
      icon: "⚖️",
    },
    {
      id: "4",
      label: "Stress Testing",
      section: "Risk",
      href: "/portfolio/stress-test",
      icon: "⚠️",
    },
    {
      id: "5",
      label: "Institutional Settings",
      section: "Settings",
      href: "/settings",
      icon: "⚙️",
    },
    {
      id: "6",
      label: "Alpha Infrastructure (LMA-001)",
      section: "Deals",
      href: "/documents/review",
      icon: "📄",
    },
    {
      id: "7",
      label: "TechCorp Debt (LMA-002)",
      section: "Deals",
      href: "/documents/review",
      icon: "📄",
    },
  ];

  const filtered = query
    ? commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-slate-900/90 border border-white/10 rounded-xl shadow-2xl shadow-neon-cyan/20 overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <input
            autoFocus
            placeholder="Search commands, deals, or sections (CMD+K)..."
            className="w-full bg-transparent border-none outline-none text-lg text-white placeholder:text-muted-foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No results found.
            </div>
          ) : (
            <div className="space-y-4">
              {["Navigation", "Risk", "Settings", "Deals"].map((section) => {
                const sectionItems = filtered.filter(
                  (f) => f.section === section
                );
                if (sectionItems.length === 0) return null;
                return (
                  <div key={section}>
                    <div className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      {section}
                    </div>
                    {sectionItems.map((item) => (
                      <button
                        key={item.id}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-left"
                        onClick={() => {
                          router.push(item.href);
                          setIsOpen(false);
                        }}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            {item.label}
                          </div>
                        </div>
                        <span className="text-[10px] text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded uppercase">
                          Enter
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-3 bg-white/5 border-t border-white/5 flex gap-4 text-[10px] text-muted-foreground">
          <span>
            <kbd className="bg-white/10 px-1 rounded">↑↓</kbd> to navigate
          </span>
          <span>
            <kbd className="bg-white/10 px-1 rounded">↵</kbd> to select
          </span>
          <span>
            <kbd className="bg-white/10 px-1 rounded">esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
