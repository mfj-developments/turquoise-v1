import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { Analytics } from "@vercel/analytics/next";
import { projects } from "@/data/projects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kathrynjlemaster.com"),
  title: {
    default: "Kathryn J. LeMaster | Art & Design — Interior Designer",
    template: "%s | Kathryn J. LeMaster",
  },
  description:
    "NCIDQ certified interior designer in Northwest Arkansas creating personalized, functional spaces. Specializing in residential interior design and production design services.",
  keywords: [
    "Interior Designer Northwest Arkansas",
    "NCIDQ Certified Designer",
    "Residential Interior Design",
    "Production Design Services",
    "Home Staging Arkansas",
    "Interior Design Bentonville",
    "Interior Design Fayetteville",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Kathryn J. LeMaster | Art & Design — Interior Designer",
    description:
      "NCIDQ certified interior designer creating personalized, functional spaces in Northwest Arkansas and beyond.",
    url: "/",
    siteName: "Kathryn J. LeMaster | Art & Design",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kat.png",
        width: 1200,
        height: 630,
        alt: "Kathryn J. LeMaster — Interior Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathryn J. LeMaster — Interior Designer",
    description:
      "NCIDQ certified interior designer in Northwest Arkansas creating personalized, functional spaces.",
    images: ["/images/kat.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en" suppressHydrationWarning data-mode="light" data-theme="palette-kathryn">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const root=document.documentElement;const storedMode=localStorage.getItem("kat-theme-mode");const storedPalette=localStorage.getItem("kat-theme-palette");const mode=storedMode||"light";root.dataset.mode=mode;root.classList.toggle("dark",mode==="dark");root.dataset.theme=storedPalette||"palette-kathryn";}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-dvh flex flex-col bg-background text-foreground relative font-sans`}>
        <ThemeProvider>
          <AuthProvider>
            {/* Background layers: gradient + subtle noise */}
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 -z-10"
              style={{ background: "linear-gradient(to bottom, var(--gradient-top), var(--gradient-bottom))" }}
            />
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(1000px 600px at 10% -10%, var(--gradient-radial-1) 0%, transparent 60%), radial-gradient(800px 400px at 90% -10%, var(--gradient-radial-2) 0%, transparent 55%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] mix-blend-overlay bg-[url('/noise.svg')]"
            />

            <Nav hasProjects={projects.length > 0} />
            <main className="flex-1 container mx-auto px-4 py-10 sm:py-12">{children}</main>
            <Footer />
            {isProduction && <Analytics />}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
