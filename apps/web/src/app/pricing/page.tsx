import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small lenders getting started",
      features: [
        "Up to 10 active loans",
        "Basic AI document parsing",
        "Capital allocation recommendations",
        "Email support",
        "Standard reporting",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "/month",
      description: "For growing institutions",
      features: [
        "Up to 50 active loans",
        "Advanced AI with CrewAI agents",
        "Real-time covenant monitoring",
        "Priority support (24/7)",
        "Custom ESG reporting",
        "Secondary market access",
        "Advanced analytics dashboard",
        "Dedicated account manager",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large institutions and arrangers",
      features: [
        "Unlimited loans",
        "Full AI agent suite",
        "White-label options",
        "On-premise deployment",
        "Custom integrations",
        "SLA guarantees",
        "Dedicated infrastructure",
        "Training & onboarding",
        "Regulatory compliance support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const addons = [
    { name: "Additional AI Document Processing", price: "$99/month", description: "500 extra documents/month" },
    { name: "Advanced ESG Analytics", price: "$499/month", description: "Comprehensive sustainability tracking" },
    { name: "API Premium Tier", price: "$299/month", description: "Higher rate limits & priority" },
    { name: "Compliance Module", price: "$799/month", description: "Regulatory reporting automation" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include 14-day free trial with no credit card required.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.popular ? 'border-gradient scale-105' : 'hover:border-neon-cyan/30'} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link 
                    href="/signup"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all mb-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 glow-cyan' 
                        : 'glass border border-white/20 hover:border-neon-cyan/50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-green mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-gradient">Add-ons</span> & Extensions
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Enhance your plan with additional capabilities
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, idx) => (
                <Card key={idx} className="hover:border-neon-cyan/30 transition-colors">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{addon.name}</h3>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-bold text-neon-cyan">{addon.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans."
                },
                {
                  q: "Is there a long-term commitment?",
                  a: "No, all plans are month-to-month. Cancel anytime with no penalties or fees."
                },
                {
                  q: "Do you offer volume discounts?",
                  a: "Yes! Enterprise plans include custom pricing based on your specific needs and volume. Contact our sales team for details."
                },
              ].map((faq, idx) => (
                <Card key={idx} className="hover:border-neon-cyan/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block max-w-2xl border-gradient">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Get <span className="text-gradient">Started?</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Start your 14-day free trial today. No credit card required.
                </p>
                <Link 
                  href="/signup"
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity font-semibold text-lg glow-cyan"
                >
                  Start Free Trial
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  Questions? <Link href="/contact" className="text-neon-cyan hover:underline">Contact our sales team</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
