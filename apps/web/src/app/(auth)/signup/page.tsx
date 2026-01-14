"use client"

import Link from "next/link"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"

export default function SignupPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup submitted")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Link href="/" className="text-3xl font-bold text-gradient text-center block mb-2">
            AutoSyndicate™
          </Link>
          <CardTitle className="text-center">Create Your Account</CardTitle>
          <p className="text-center text-muted-foreground text-sm">
            Start your 14-day free trial today
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Role
              </label>
              <select 
                id="role"
                className="w-full h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                required
              >
                <option value="">Select your role</option>
                <option value="lender">Lender</option>
                <option value="borrower">Borrower</option>
                <option value="arranger">Arranger</option>
              </select>
            </div>
            
            <div className="flex items-start">
              <input type="checkbox" className="mr-2 mt-1" required />
              <label className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-neon-cyan hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-neon-cyan hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or sign up with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button">
                Google
              </Button>
              <Button variant="outline" type="button">
                GitHub
              </Button>
            </div>
          </form>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-neon-cyan hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
