"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Input } from "@/components/input"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select 
                      id="subject"
                      className="w-full h-12 rounded-lg glass border border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full rounded-lg glass border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-cyan resize-none"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:border-neon-cyan/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        For general inquiries and support
                      </p>
                      <a href="mailto:hello@autosyndicate.ai" className="text-neon-cyan hover:underline">
                        hello@autosyndicate.ai
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neon-purple/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💼</div>
                    <div>
                      <h3 className="font-semibold mb-1">Sales</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Interested in enterprise solutions?
                      </p>
                      <a href="mailto:sales@autosyndicate.ai" className="text-neon-cyan hover:underline">
                        sales@autosyndicate.ai
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neon-green/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🛠️</div>
                    <div>
                      <h3 className="font-semibold mb-1">Technical Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Need help with the platform?
                      </p>
                      <a href="mailto:support@autosyndicate.ai" className="text-neon-cyan hover:underline">
                        support@autosyndicate.ai
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neon-pink/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🤝</div>
                    <div>
                      <h3 className="font-semibold mb-1">Partnerships</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Explore collaboration opportunities
                      </p>
                      <a href="mailto:partners@autosyndicate.ai" className="text-neon-cyan hover:underline">
                        partners@autosyndicate.ai
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office */}
              <Card className="border-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Office</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    AutoSyndicate™ Technologies<br />
                    Financial District<br />
                    New York, NY 10004<br />
                    United States
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday - Sunday: Closed
                  </p>
                </CardContent>
              </Card>

              {/* Social */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-neon-cyan/50 flex items-center justify-center transition-colors">
                      𝕏
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-neon-cyan/50 flex items-center justify-center transition-colors">
                      in
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-neon-cyan/50 flex items-center justify-center transition-colors">
                      📘
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-neon-cyan/50 flex items-center justify-center transition-colors">
                      📷
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
