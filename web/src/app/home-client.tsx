"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ExternalLink,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  Sparkles,
  GraduationCap,
  Home,
  ChevronRight,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import EPartySignup from "@/components/e-party-signup";

type HomeClientProps = {
  projects: Project[];
  settings: any;
  about: any;
};

// Helper to get icon component from string name
function getIcon(iconName: string) {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || Sparkles; // fallback to Sparkles if icon not found
}

export default function HomeClient({ projects, settings, about }: HomeClientProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clientType, setClientType] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const hasProjects = projects.length > 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, clientType, message, hp }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setStatus("sent");
      setName("");
      setEmail("");
      setClientType("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
    }
  };

  // Featured projects
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden rounded-3xl border p-10 md:p-16 lg:p-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--panel-gradient-start) 0%, var(--panel-gradient-end) 100%)",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, var(--glow-primary) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 -bottom-28 h-[360px] w-[360px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle at center, var(--glow-secondary) 0%, transparent 60%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-2 justify-center mb-6">
            {settings?.heroBadges?.map((badge: string, i: number) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-accent/40 text-foreground eyebrow-text"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.h1
          className="heading-xl font-serif tracking-tight mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <Balancer>
            {settings?.heroHeading || "Designing Spaces Into Happy Places!"}
          </Balancer>
        </motion.h1>

        {settings?.heroSubheading && (
          <motion.p
            className="text-xl md:text-2xl text-primary font-medium mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {settings.heroSubheading}
          </motion.p>
        )}

        <motion.p
          className="body-lg text-foreground/80 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <Balancer>
            {settings?.heroBio ||
              "I believe in happy spaces. Where we live and where we work should not only be practical and functional, but also tell our stories and be an extension of who we are and what we love."}
          </Balancer>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio" className="inline-flex items-center gap-2">
              View Portfolio <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Stat Cards */}
        {settings?.statCards && settings.statCards.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            {settings.statCards.map((card: any, i: number) => {
              const Icon = getIcon(card.icon);
              return (
                <div
                  key={i}
                  className="rounded-xl border bg-background/60 px-4 py-4 flex flex-col items-center text-center gap-2"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="font-semibold text-sm">{card.title}</p>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* Featured Projects */}
      {hasProjects && featuredProjects.length > 0 && (
        <section id="portfolio" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow-text text-primary mb-3">Portfolio</p>
            <h2 className="heading-lg font-serif mb-4">Recent Projects</h2>
            <p className="body-base text-muted-foreground">
              Take a look at some of my recent interior design transformations. Each project
              is uniquely tailored to reflect my clients' personalities and lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
              >
                {project.image && (
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.summary && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.summary}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio" className="inline-flex items-center gap-2">
                View Full Portfolio <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section id="services" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow-text text-primary mb-3">Services</p>
          <h2 className="heading-lg font-serif mb-4">How I Can Help</h2>
          <p className="body-base text-muted-foreground">
            Whether you're a homeowner looking to transform your space or a builder needing
            professional design services, I offer tailored solutions to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Interior Design Services */}
          <div className="relative overflow-hidden rounded-2xl border p-8 bg-background hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2">
                  Interior Design Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Full-service interior design from concept to completion for homeowners.
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Design-it-Together: Collaborative DIY approach</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Design-it-for-Me: Full-service implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Refresh-it: Quick room updates</span>
              </li>
            </ul>

            <Button variant="outline" asChild className="w-full">
              <Link href="/services/interior-design">Learn More</Link>
            </Button>
          </div>

          {/* Production Design Services */}
          <div className="relative overflow-hidden rounded-2xl border p-8 bg-background hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium mb-2">
                  Production Design Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Professional design for builders, developers, and real estate professionals.
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Model Home Design</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Spec Home Styling</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Real Estate Staging</span>
              </li>
            </ul>

            <Button variant="outline" asChild className="w-full">
              <Link href="/services/production-design">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* E-Party Signup */}
      <EPartySignup
        title={settings?.ePartyTitle}
        description={settings?.ePartyDescription}
        buttonText={settings?.ePartyButtonText}
        eBookTitle={settings?.eBookTitle}
      />

      {/* About Section */}
      <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="eyebrow-text text-primary mb-3">About</p>
          <h2 className="heading-lg font-serif mb-6">Meet Kathryn</h2>
          <div className="prose prose-lg">
            <p className="body-lg text-foreground/80 mb-4">
              {about?.bioText ||
                "Hi there! I am an interior designer and entrepreneur, and among the many things I love, I most especially love helping people live happily in their homes!"}
            </p>
            <p className="body-base text-muted-foreground mb-6">
              I believe for the happiest space, where we live and work should be extension of
              who we are, reflecting our personalities and telling our stories.
            </p>
          </div>

          {about?.badges && about.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {about.badges.map((badge: any, i: number) => {
                const Icon = getIcon(badge.icon);
                return (
                  <Badge key={i} variant="secondary" className="py-2">
                    <Icon className="mr-1 h-3.5 w-3.5" /> {badge.label}
                  </Badge>
                );
              })}
            </div>
          )}

          <Button asChild>
            <Link href="/about">More About Me</Link>
          </Button>
        </div>

        <div className="order-1 md:order-2">
          {about?.headshotImage ? (
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={about.headshotImage}
                alt="Kathryn J. LeMaster"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Headshot placeholder</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="grid gap-8 lg:grid-cols-5">
        <div
          className="lg:col-span-2 rounded-2xl border p-8"
          style={{
            background:
              "linear-gradient(135deg, var(--panel-gradient-start) 0%, var(--panel-gradient-end) 100%)",
          }}
        >
          <h2 className="heading-md font-serif mb-4">Let's Connect</h2>
          <p className="body-base text-muted-foreground mb-6">
            Ready to transform your space? I'd love to hear about your project. I respond
            within 1–2 business days.
          </p>

          <div className="space-y-3">
            <Link
              href="mailto:kathryn@kathrynjlemaster.com"
              className="flex w-full items-center gap-3 rounded-xl border bg-background/60 px-4 py-3 text-sm transition-colors hover:bg-accent"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>Email Me</span>
            </Link>
            <Link
              href="https://instagram.com/kathrynjlemaster"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-3 rounded-xl border bg-background/60 px-4 py-3 text-sm transition-colors hover:bg-accent"
            >
              <Instagram className="h-5 w-5 text-primary" />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://facebook.com/kathrynjlemaster"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center gap-3 rounded-xl border bg-background/60 px-4 py-3 text-sm transition-colors hover:bg-accent"
            >
              <Facebook className="h-5 w-5 text-primary" />
              <span>Facebook</span>
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Northwest Arkansas</p>
                <p>Serving AR, TX, OK & Beyond</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-2xl border bg-background/60 p-8">
          <h3 className="heading-sm font-serif mb-6">Send a Message</h3>
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="sr-only" htmlFor="website">
              Website
            </label>
            <input
              id="website"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
            />

            <div className="grid gap-1">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-sm font-medium" htmlFor="clientType">
                I am a...
              </label>
              <select
                id="clientType"
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select one</option>
                <option value="homeowner-new">Homeowner - New Construction</option>
                <option value="homeowner-renovation">Homeowner - Renovation</option>
                <option value="homeowner-refresh">Homeowner - Room Refresh</option>
                <option value="builder">Builder/Developer</option>
                <option value="realtor">Real Estate Professional</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid gap-1">
              <label className="text-sm font-medium" htmlFor="message">
                Tell me about your project
              </label>
              <Textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="What space are you looking to transform?"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
              {status === "sent" && (
                <span className="text-sm text-primary">
                  Message sent! I'll reply soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-destructive">{error}</span>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
