import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      category: "AI-Powered Loan Processing",
      icon: "🤖",
      items: [
        {
          title: "Intelligent Document Parsing",
          description:
            "Leverage Google Gemini to extract structured data from CIMs, term sheets, and credit agreements with 95%+ accuracy.",
          tech: "Gemini 1.5 Pro, LangChain",
        },
        {
          title: "Natural Language Understanding",
          description:
            "Extract covenants, risk factors, and key terms automatically using advanced NLP and document understanding.",
          tech: "GroqCloud, CrewAI",
        },
        {
          title: "Multi-Format Support",
          description:
            "Process PDFs, Word documents, Excel spreadsheets, and scanned documents seamlessly.",
          tech: "Vision AI, OCR",
        },
      ],
    },
    {
      category: "Capital Allocation Engine",
      icon: "🎯",
      items: [
        {
          title: "ML-Driven Matching",
          description:
            "Match loans to lenders based on risk appetite, sector preferences, and historical performance using machine learning.",
          tech: "scikit-learn, AutoGen",
        },
        {
          title: "Confidence Scoring",
          description:
            "Each allocation comes with AI-generated confidence scores and detailed reasoning for transparency.",
          tech: "Neural Networks",
        },
        {
          title: "Portfolio Optimization",
          description:
            "Optimize capital allocation across multiple loans to maximize returns while managing risk exposure.",
          tech: "Optimization Algorithms",
        },
      ],
    },
    {
      category: "Real-Time Monitoring",
      icon: "⚡",
      items: [
        {
          title: "Covenant Tracking",
          description:
            "Automated monitoring of financial and operational covenants with proactive breach prediction.",
          tech: "Time Series Analysis",
        },
        {
          title: "Early Warning System",
          description:
            "AI predicts potential covenant breaches 90 days in advance with remediation suggestions.",
          tech: "Predictive Analytics",
        },
        {
          title: "Real-Time Alerts",
          description:
            "Instant notifications via email, SMS, and in-app for critical events and threshold breaches.",
          tech: "WebSocket, SSE",
        },
      ],
    },
    {
      category: "ESG Integration",
      icon: "🌱",
      items: [
        {
          title: "Sustainability Scoring",
          description:
            "Calculate comprehensive ESG scores aligned with UNEP FI Principles for Responsible Banking.",
          tech: "ESG Frameworks",
        },
        {
          title: "Carbon Tracking",
          description:
            "Monitor portfolio carbon intensity and track progress toward net-zero commitments.",
          tech: "Climate Analytics",
        },
        {
          title: "Impact Reporting",
          description:
            "Generate detailed impact reports for stakeholders with visualizations and benchmarks.",
          tech: "Data Visualization",
        },
      ],
    },
    {
      category: "Secondary Trading",
      icon: "🔄",
      items: [
        {
          title: "Automated Due Diligence",
          description:
            "AI-powered due diligence reports generated in minutes instead of weeks.",
          tech: "CrewAI Agents",
        },
        {
          title: "Price Discovery",
          description:
            "Real-time pricing based on market conditions, credit quality, and comparable transactions.",
          tech: "Market Data",
        },
        {
          title: "Smart Contracts",
          description:
            "Automated settlement and transfer documentation for faster, error-free transactions.",
          tech: "Workflow Automation",
        },
      ],
    },
    {
      category: "Document Generation",
      icon: "✍️",
      items: [
        {
          title: "Agreement Automation",
          description:
            "Generate participation agreements, commitment letters, and transfer documents automatically.",
          tech: "LangChain, Templates",
        },
        {
          title: "Compliance Checking",
          description:
            "Ensure all generated documents comply with regulatory requirements and industry standards.",
          tech: "Rule Engine",
        },
        {
          title: "Version Control",
          description:
            "Track all document versions with audit trails and approval workflows.",
          tech: "Git-like Versioning",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Platform <span className="text-gradient">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered features transforming every aspect of
              institutional loan syndication
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-12">
            {features.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((feature, i) => (
                    <Card
                      key={i}
                      className="hover:border-neon-cyan/30 transition-all hover:scale-105"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                        <div className="text-xs text-neon-purple font-mono">
                          {feature.tech}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Card className="inline-block max-w-2xl border-gradient">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Experience the{" "}
                  <span className="text-gradient">Future?</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  See how AutoSyndicate™ can transform your loan operations
                </p>
                <Link
                  href="/signup"
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity font-semibold text-lg glow-cyan"
                >
                  Start Free Trial
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
