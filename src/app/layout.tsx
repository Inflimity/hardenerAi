import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Hardener AI | Autonomous Security for Vibe Coders",
    description: "Clean architecture for the AI era. We use autonomous agents to audit, verify, and harden your generated code against production-grade threats.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className="bg-[#020617] text-slate-200 selection:bg-emerald-500/30" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                {children}
            </body>
        </html>
    );
}
