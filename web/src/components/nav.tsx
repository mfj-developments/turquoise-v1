"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Mail } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ThemeControls from "@/components/theme-controls";
import { Tooltip } from "@/components/tooltip";

type NavProps = {
  hasProjects?: boolean;
};

export default function Nav({ hasProjects = true }: NavProps) {
  const [open, setOpen] = useState(false);

  const linkDefinitions = [
    { href: "/services", label: "Services", requiresProjects: false },
    { href: "/portfolio", label: "Portfolio", requiresProjects: true },
    { href: "/journal", label: "Journal", requiresProjects: false },
    { href: "/about", label: "About", requiresProjects: false },
    { href: "/contact", label: "Contact", requiresProjects: false },
  ] as const;

  const activeLinks = linkDefinitions.filter((link) => (link.requiresProjects ? hasProjects : true));

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 supports-[backdrop-filter]:bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3 text-foreground">
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight transition-colors group-hover:text-primary">
            Kathryn J. LeMaster
          </span>
          <span className="hidden md:inline text-xs text-muted-foreground tracking-widest uppercase">Art & Design</span>
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {activeLinks.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <Link href={l.href} className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-3 text-foreground/80">
          <Tooltip label="Instagram">
            <Link aria-label="Instagram" href="https://instagram.com/kathrynjlemaster" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </Tooltip>
          <Tooltip label="Facebook">
            <Link aria-label="Facebook" href="https://facebook.com/kathrynjlemaster" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </Tooltip>
          <Tooltip label="Email">
            <Link aria-label="Email" href="mailto:kathryn@kathrynjlemaster.com" className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </Tooltip>
          <ThemeControls />
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Open menu">Menu</Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs p-6 pt-16"
              onOpenAutoFocus={(event) => event.preventDefault()}
            >
              <div className="flex h-full flex-col gap-8">
                <nav className="flex flex-col gap-4">
                  {activeLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl border px-4 py-3 text-lg font-medium text-foreground/90 transition-colors hover:bg-accent/20"
                    >
                      {l.label}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-6">
                  <div className="flex justify-between gap-3">
                    <Link aria-label="Instagram" href="https://instagram.com/kathrynjlemaster" target="_blank" rel="noreferrer" className="flex h-12 flex-1 items-center justify-center rounded-xl border text-foreground/80 transition-colors hover:text-primary">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link aria-label="Facebook" href="https://facebook.com/kathrynjlemaster" target="_blank" rel="noreferrer" className="flex h-12 flex-1 items-center justify-center rounded-xl border text-foreground/80 transition-colors hover:text-primary">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link aria-label="Email" href="mailto:kathryn@kathrynjlemaster.com" className="flex h-12 flex-1 items-center justify-center rounded-xl border text-foreground/80 transition-colors hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="rounded-2xl border px-4 py-5">
                    <ThemeControls withLabels />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
