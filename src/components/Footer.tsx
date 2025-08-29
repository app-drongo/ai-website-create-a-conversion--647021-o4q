// Footer Component
// Generated: 2025-08-29T08:54:06.897Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Code2,
  Smartphone,
  Globe
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "E-commerce", href: "#services" },
        { name: "API Development", href: "#services" },
        { name: "Consulting", href: "#services" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Startups", href: "/solutions/startups" },
        { name: "Enterprise", href: "/solutions/enterprise" },
        { name: "E-commerce", href: "/solutions/ecommerce" },
        { name: "SaaS Platforms", href: "/solutions/saas" },
        { name: "Custom Development", href: "/solutions/custom" },
        { name: "Maintenance", href: "/solutions/maintenance" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Tech Blog", href: "/blog" },
        { name: "Development Guide", href: "/guides" },
        { name: "Code Examples", href: "/examples" },
        { name: "Best Practices", href: "/best-practices" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/codecraftsolutions" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/codecraftsolutions" },
    { name: "GitHub", icon: Github, href: "https://github.com/codecraftsolutions" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/codecraftsolutions" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Code2 className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-foreground">CodeCraft Solutions</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming ideas into powerful digital solutions. We specialize in web and mobile development 
                for startups and enterprises, delivering cutting-edge technology with exceptional user experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">hello@codecraftsolutions.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) CODE-123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Tech Hub District, Innovation Center</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Developer Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get tech insights, project updates, and development tips. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 CodeCraft Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-accent fill-current" /> by developers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/portfolio" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/technologies" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Technologies
            </Link>
            <Link href="/process" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Our Process
            </Link>
            <Link href="/partnerships" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Partnerships
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}