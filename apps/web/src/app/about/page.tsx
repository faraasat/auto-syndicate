import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    { name: "AI Parser Agent", role: "Document Understanding", icon: "📄" },
    { name: "Allocator Agent", role: "Capital Optimization", icon: "🎯" },
    { name: "Monitor Agent", role: "Covenant Tracking", icon: "⚡" },
    { name: "ESG Agent", role: "Sustainability Analysis", icon: "🌱" },
  ];

  const stats = [
    { value: "$5B+", label: "Loans Processed" },
    { value: "500+", label: "Active Lenders" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "10x", label: "Faster Processing" },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Institutional{" "}
              <span className="text-gradient">Loan Markets</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our platform? We&apos;re here to help you
              transform your syndication workflow.
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-16 border-gradient">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    AutoSyndicate™ was founded to solve the fragmentation and
                    inefficiency in the private debt markets. By leveraging
                    advanced AI and institutional-grade technology, we're
                    building the operating system for the next generation of
                    lending.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-neon-cyan">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/10 flex items-center justify-center text-8xl grayscale hover:grayscale-0 transition-all duration-700">
                    🏛️
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet the <span className="text-gradient">AI Agents</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <Card
                  key={i}
                  className="hover:border-neon-cyan/30 transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{member.icon}</div>
                    <h3 className="font-bold mb-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Built for Scale</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our technology stack combines the security of institutional
                finance with the agility of modern AI. Every component is
                designed for maximum reliability and regulatory compliance.
              </p>
              <ul className="space-y-3">
                {[
                  "LMA-standard document understanding",
                  "Real-time market liquidity mapping",
                  "Advanced credit risk modeling",
                  "Blockchain-ready settlement layer",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-neon-cyan">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Institutional Security</h3>
                  <p className="text-sm text-muted-foreground">
                    SOC2 Type II compliant infrastructure with multi-layer
                    encryption and biometric access controls.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Regulatory Framework</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed around MiFID II and AIFMD guidelines for automated
                    compliance and audit trail management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join the <span className="text-gradient">Lending Revolution</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ready to see how AutoSyndicate™ can transform your business? Start
              your trial today.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple font-bold hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg glass border border-white/20 font-bold hover:bg-white/5 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
