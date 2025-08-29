// Services Component
// Generated: 2025-08-29T08:54:06.897Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Shield,
  Rocket,
  Globe,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "web-development",
      title: "Custom Web Development",
      description: "Full-stack web applications built with cutting-edge technologies like React, Node.js, and cloud-native architectures.",
      icon: Code2,
      badge: "Most Popular",
      features: ["React & Next.js", "API Development", "Cloud Deployment"],
      link: "/services/web-development"
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
      icon: Smartphone,
      features: ["Native iOS/Android", "React Native", "App Store Optimization"],
      link: "/services/mobile-development"
    },
    {
      id: "cloud-solutions",
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure on AWS, Azure, and GCP with DevOps automation and microservices architecture.",
      icon: Cloud,
      badge: "Enterprise",
      features: ["AWS/Azure/GCP", "DevOps Pipeline", "Auto-scaling"],
      link: "/services/cloud-architecture"
    },
    {
      id: "ui-ux-design",
      title: "Product Design",
      description: "User-centered design that converts visitors into customers through strategic UX research and modern UI patterns.",
      icon: Palette,
      features: ["UX Research", "Design Systems", "Conversion Optimization"],
      link: "/services/product-design"
    },
    {
      id: "api-development",
      title: "API & Backend",
      description: "Robust backend systems and RESTful APIs that power your applications with security and performance in mind.",
      icon: Database,
      features: ["REST & GraphQL", "Database Design", "Security First"],
      link: "/services/backend-development"
    },
    {
      id: "tech-consulting",
      title: "Technology Consulting",
      description: "Strategic technology guidance to help you make informed decisions about your software architecture and tech stack.",
      icon: Shield,
      features: ["Architecture Review", "Tech Stack Planning", "Code Audits"],
      link: "/services/tech-consulting"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Software Solutions That
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From startups to enterprises, we deliver custom software development services 
            that drive growth and innovation in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your unique requirements?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Request Project Quote
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}