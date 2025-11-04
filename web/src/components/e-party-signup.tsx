"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type EPartySignupProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  eBookTitle?: string;
};

export default function EPartySignup({
  title = "Join the E-Party!",
  description = "Want design tips, trend updates, and exclusive content delivered right to your inbox? Sign up for my email list and get a FREE guide to creating a welcoming entryway!",
  buttonText = "YES, I'D LIKE A PARTY FAVOR!",
  eBookTitle = "Creating a Welcoming Entryway: A Designer's Guide",
}: EPartySignupProps) {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // Honeypot field
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (hp) {
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("sent");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
    }
  };

  return (
    <section
      className="relative overflow-hidden rounded-3xl border p-8 md:p-12"
      style={{
        background:
          "linear-gradient(135deg, var(--cta-gradient-start) 0%, var(--cta-gradient-end) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow-primary) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow-secondary) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Gift className="h-8 w-8 text-primary" />
          </div>
        </motion.div>

        <motion.h2
          className="heading-lg mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="body-lg text-foreground/80 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background/60 backdrop-blur-sm"
          >
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <h3 className="heading-sm">Welcome to the E-Party!</h3>
            <p className="text-muted-foreground">
              Check your inbox for your free guide: <strong>{eBookTitle}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Don't forget to check your spam folder!
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              className="hidden"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 h-12"
                disabled={status === "sending"}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Joining..." : buttonText}
            </Button>
          </motion.form>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-destructive">{error}</p>
        )}

        {status === "idle" && (
          <p className="mt-4 text-xs text-muted-foreground">
            Free eBook • No spam • Unsubscribe anytime
          </p>
        )}
      </div>
    </section>
  );
}
