import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/card";
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
      <Navigation />

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
              <h2 className="text-3xl font-bold mb-4 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                To transform institutional loan markets from document-centric,
                manual processes to data-driven, intelligent capital allocation
                powered by AI. We&apos;re building the future where loans are
                executable digital assets, not just legal documents.
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="text-center hover:border-neon-cyan/30 transition-colors"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Powered by <span className="text-gradient">Advanced AI</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:border-neon-cyan/30 transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-3">
                    Multi-Agent Architecture
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Leveraging CrewAI and AutoGen to coordinate specialized AI
                    agents for document parsing, capital allocation, covenant
                    monitoring, and ESG analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-cyan/30">
                      CrewAI
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-cyan/30">
                      AutoGen
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-cyan/30">
                      LangChain
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neon-purple/30 transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-3">
                    Ultra-Fast Inference
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Utilizing GroqCloud&apos;s lightning-fast LPU™ inference for
                    Llama 3.2 and Mixtral models, delivering responses 18x
                    faster than traditional GPU-based solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-purple/30">
                      GroqCloud
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-purple/30">
                      Llama 3.2
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-purple/30">
                      Mixtral
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neon-green/30 transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-2xl font-bold mb-3">
                    Document Understanding
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Google Gemini 1.5 Pro with 2M token context window for
                    comprehensive document analysis, extracting structured data
                    from complex financial documents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-green/30">
                      Gemini 1.5 Pro
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-green/30">
                      Vision AI
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-green/30">
                      NLP
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-neon-pink/30 transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-3">ML Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    scikit-learn powered capital allocation engine with
                    predictive analytics for risk assessment and covenant breach
                    prediction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-pink/30">
                      scikit-learn
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-pink/30">
                      NumPy
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-neon-pink/30">
                      Pandas
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Agents Team */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              Meet Our <span className="text-gradient">AI Agents</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Specialized AI agents working together to transform loan
              operations
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {team.map((agent, i) => (
                <Card
                  key={i}
                  className="text-center hover:border-neon-cyan/30 transition-all hover:scale-105"
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="text-5xl mb-4 animate-glow-pulse">
                      {agent.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {agent.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hackathon */}
          <Card className="border-gradient">
            <CardContent className="p-12 text-center">
              <div className="inline-block mb-4 px-4 py-2 rounded-full glass border border-neon-cyan/30 text-sm">
                <span className="text-neon-cyan">●</span> LMA EDGE Hackathon
                2025
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Built for the{" "}
                <span className="text-gradient">Future of Finance</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                AutoSyndicate™ was developed as part of the LMA EDGE Hackathon,
                addressing all five challenge categories: Digital Loans, Loan
                Documents, Transparent Trading, Covenant Monitoring, and ESG
                Integration.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity font-semibold text-lg glow-cyan"
              >
                Join the Revolution
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
