import Link from "next/link";
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass border border-neon-cyan/30 text-sm">
            <span className="text-neon-cyan">●</span> LMA EDGE Hackathon 2025
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-float">
            <span className="text-gradient">
              Intelligent Capital Allocation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform institutional loan markets from document-centric processes to 
            <span className="text-neon-purple"> data-driven</span>, 
            <span className="text-neon-cyan"> AI-powered</span> capital allocation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/signup"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity font-semibold text-lg glow-cyan"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/demo"
              className="px-8 py-4 rounded-lg glass border border-white/20 hover:border-neon-cyan/50 transition-colors font-semibold text-lg"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { value: "10x", label: "Faster Processing" },
              { value: "95%", label: "Accuracy Rate" },
              { value: "$5B+", label: "Loans Processed" },
              { value: "500+", label: "Active Lenders" },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-lg p-6 border border-white/10 hover:border-neon-cyan/30 transition-colors">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Powered by <span className="text-gradient">AI Agents</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Multi-agent architecture leveraging CrewAI, GroqCloud, and Google Gemini for intelligent loan processing
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Intelligent Loan Structuring",
                description: "AI-powered document parsing extracts structured data from CIMs, term sheets, and credit agreements",
                icon: "📄",
                color: "cyan"
              },
              {
                title: "Capital Allocation Engine",
                description: "ML-driven matching between loan characteristics and lender preferences with confidence scoring",
                icon: "🎯",
                color: "purple"
              },
              {
                title: "Automated Document Creation",
                description: "Generate participation agreements and commitment letters with natural language generation",
                icon: "✍️",
                color: "pink"
              },
              {
                title: "Real-time Covenant Monitoring",
                description: "Continuous compliance tracking with proactive alerts and breach prediction",
                icon: "⚡",
                color: "green"
              },
              {
                title: "ESG Integration",
                description: "Track sustainability metrics aligned with UNEP FI Principles for Responsible Banking",
                icon: "🌱",
                color: "cyan"
              },
              {
                title: "Secondary Trading Platform",
                description: "AI-powered due diligence and automated loan transfer documentation",
                icon: "🔄",
                color: "purple"
              },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="glass rounded-xl p-6 border border-white/10 hover:border-neon-cyan/30 transition-all hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:animate-glow-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="glass rounded-2xl p-12 border border-gradient text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-gradient">Loan Operations?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading financial institutions using AutoSyndicate™ to streamline syndication and unlock capital efficiency
            </p>
            <Link 
              href="/signup"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity font-semibold text-lg glow-cyan"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-gradient">AutoSyndicate™</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered institutional loan syndication platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/features" className="hover:text-neon-cyan">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-neon-cyan">Pricing</Link></li>
                <li><Link href="/marketplace" className="hover:text-neon-cyan">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-neon-cyan">About</Link></li>
                <li><Link href="/contact" className="hover:text-neon-cyan">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-neon-cyan">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-neon-cyan">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-neon-cyan">Terms</Link></li>
                <li><Link href="/security" className="hover:text-neon-cyan">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-white/10">
            © 2025 AutoSyndicate™. Built for LMA EDGE Hackathon.
          </div>
        </div>
      </footer>
    </div>
  );
}
