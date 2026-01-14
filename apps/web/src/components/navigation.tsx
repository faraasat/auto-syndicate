"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Notifications } from "@/components/notifications";
import { useSession, signOut } from "next-auth/react";

export function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryNavItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/secondary", label: "Secondary" },
    { href: "/analytics", label: "Analytics" },
  ];

  const secondaryNavItems = [
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gradient">
              AutoSyndicate™
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {session &&
                primaryNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-neon-cyan",
                      pathname === item.href
                        ? "text-neon-cyan"
                        : "text-slate-300"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors hover:text-neon-cyan",
                    pathname === item.href
                      ? "text-neon-cyan"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4 border-l border-white/10 pl-6">
              {session ? (
                <>
                  <Notifications />
                  <Link
                    href="/settings"
                    className={cn(
                      "w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:scale-105 transition-transform border border-white/20",
                      pathname === "/settings" &&
                        "ring-2 ring-neon-cyan ring-offset-2 ring-offset-black"
                    )}
                  />
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                !["/login", "/signup"].includes(pathname) && (
                  <Link
                    href="/login"
                    className="px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-bold hover:bg-neon-cyan/20 transition-all"
                  >
                    Sign In
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-dark border-b border-white/10 p-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          {session && (
            <div className="space-y-4 pb-4 border-b border-white/5">
              <div className="text-xs font-bold text-neon-cyan uppercase tracking-wider mb-2">
                Management
              </div>
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-lg font-medium",
                    pathname === item.href ? "text-neon-cyan" : "text-slate-300"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="space-y-4 pb-4 border-b border-white/5">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Platform
            </div>
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-lg font-medium",
                  pathname === item.href ? "text-neon-cyan" : "text-slate-300"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            {session ? (
              <>
                <div className="flex items-center gap-4">
                  <Notifications />
                  <Link
                    href="/settings"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple border border-white/20"
                  />
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-6 py-2 rounded-full border border-white/10 text-slate-300 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-neon-cyan text-black font-bold"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
