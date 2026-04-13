import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/data/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  applicationName: "Neha's Portfolio",
  title: {
    default: "Neha's Portfolio",
    template: `%s | Neha's Portfolio`,
  },
  description: site.tagline,
  keywords: [
    "Neha",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "IIIT Una",
    "Stylumia",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: "Neha's Portfolio",
    title: "Neha's Portfolio",
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha's Portfolio",
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} relative min-h-screen bg-background font-sans text-[15px] leading-relaxed antialiased text-foreground sm:text-base`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-background focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to content
        </a>
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
