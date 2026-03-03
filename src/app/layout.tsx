import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hardener AI — Autonomous Security for AI-Built Apps",
  description:
    "Did AI build your app? Let AI secure it before hackers do. A 96% success rate autonomous pentesting engine wrapped in a beautiful interface for founders who value their data.",
  keywords: [
    "AI security",
    "penetration testing",
    "vulnerability scanner",
    "cybersecurity",
    "vibe coding",
    "Shannon engine",
    "automated pentesting",
  ],
  openGraph: {
    title: "Hardener AI — Autonomous Security for AI-Built Apps",
    description:
      "A 96% success rate autonomous pentesting engine wrapped in a beautiful interface for founders who value their data.",
    type: "website",
    siteName: "Hardener AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardener AI — Autonomous Security for AI-Built Apps",
    description:
      "A 96% success rate autonomous pentesting engine wrapped in a beautiful interface for founders who value their data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
