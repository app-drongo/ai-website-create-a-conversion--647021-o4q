// Features Component
// Generated: 2025-08-29T08:54:06.897Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Smartphone, 
  Globe, 
  Code2, 
  Shield, 
  Zap, 
  Users,
  Database,
  Headphones,
  Rocket
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps built with cutting-edge frameworks for optimal performance and user experience.",
      badge: "Mobile"
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Responsive, scalable web applications using modern technologies like React, Next.js, and Node.js.",
      badge: "Web"
    },
    {
      icon: Code2,
      title: "Custom Software Solutions",
      description: "Tailored software architecture designed specifically for your business requirements and workflows.",
      badge: "Custom"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security implementation with encryption, authentication, and compliance standards.",
      badge: "Security"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick MVP development to validate your ideas and get to market faster than competitors.",
      badge: "Speed"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Experienced developers, designers, and project managers committed to your project's success.",
      badge: "Team"
    },
    {
      icon: Database,
      title: "Cloud Integration",
      description: "Seamless integration with AWS, Azure, and Google Cloud for scalable, reliable infrastructure.",
      badge: "Cloud"
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Comprehensive maintenance, updates, and technical support to keep your applications running smoothly.",
      badge: "Support"
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow with your business and handle increasing user demands.",
      badge: "Growth"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Software Development
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From mobile apps to enterprise web platforms, CodeCraft Solutions delivers 
            comprehensive tech solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to bring your software vision to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Project Quote
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}