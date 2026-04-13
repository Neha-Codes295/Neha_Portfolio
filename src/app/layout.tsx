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
  title: {
    default: `${site.name} — Full Stack Developer`,
    template: `%s — ${site.name}`,
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
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — Full Stack Developer`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack Developer`,
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
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
