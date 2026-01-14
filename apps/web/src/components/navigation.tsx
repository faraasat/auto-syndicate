"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gradient">
            AutoSyndicate™
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-neon-cyan transition-colors",
                  pathname === item.href && "text-neon-cyan"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
