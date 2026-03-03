"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const terminalLines = [
    { text: "$ hardener scan --target https://example.com", type: "command" as const },
    { text: "[INFO] Initializing Shannon Engine v3.2...", type: "info" as const },
    { text: "[SCAN] Running Nmap port discovery...", type: "info" as const },
    { text: "[SCAN] Enumerating web technologies (WhatWeb)...", type: "info" as const },
    { text: "[VULN] SQL Injection found in /api/login", type: "vuln" as const },
    { text: "[VULN] Exposed API key: sk-proj-xxxx...xxxx", type: "vuln" as const },
    { text: "[VULN] Missing CSP header on all routes", type: "vuln" as const },
    { text: "[SAFE] TLS 1.3 configured correctly", type: "safe" as const },
    { text: "[SAFE] HSTS header present", type: "safe" as const },
    { text: "[REPORT] Threat Score: 72/100 — HIGH RISK", type: "vuln" as const },
    { text: "[DONE] Full report generated. 3 critical, 2 medium, 1 low.", type: "info" as const },
];

export default function Hero() {
    const [visibleLines, setVisibleLines] = useState(0);
    const [url, setUrl] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev >= terminalLines.length) {
                    // Reset after a pause
                    setTimeout(() => setVisibleLines(0), 3000);
                    return prev;
                }
                return prev + 1;
            });
        }, 600);
        return () => clearInterval(timer);
    }, []);

    const getLineColor = (type: string) => {
        switch (type) {
            case "command":
                return "text-secure";
            case "vuln":
                return "text-vulnerable";
            case "safe":
                return "text-secure";
            default:
                return "text-muted";
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-16">
            {/* Background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Copy */}
                    <div className="space-y-8 animate-fade-in">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-secure/10 border border-secure/20 px-4 py-1.5">
                            <Zap className="h-3.5 w-3.5 text-secure" />
                            <span className="text-xs font-medium text-secure">
                                Powered by Shannon Engine
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            Did AI Build Your App?{" "}
                            <span className="text-secure text-glow">
                                Let AI Secure It
                            </span>{" "}
                            Before Hackers Do.
                        </h1>

                        <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
                            A 96% success rate autonomous pentesting engine wrapped in a
                            beautiful interface for founders who value their data.
                        </p>

                        {/* URL Input */}
                        <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                                <input
                                    type="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="Enter your site URL..."
                                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-surface border border-border-subtle text-foreground placeholder:text-muted/60 text-sm focus:outline-none focus:border-secure/40 focus:ring-1 focus:ring-secure/20 transition-all"
                                />
                            </div>
                            <button className="h-12 px-6 rounded-lg bg-secure text-background font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-secure-dim active:scale-95 whitespace-nowrap">
                                Scan Now
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <div className="flex items-center gap-1.5 text-xs text-muted">
                                <ShieldCheck className="h-4 w-4 text-secure/60" />
                                Enterprise-Grade Security
                            </div>
                            <div className="h-4 w-px bg-border-subtle" />
                            <div className="flex items-center gap-1.5 text-xs text-muted">
                                <ShieldCheck className="h-4 w-4 text-secure/60" />
                                SOC 2 Compliant
                            </div>
                            <div className="h-4 w-px bg-border-subtle" />
                            <div className="flex items-center gap-1.5 text-xs text-muted">
                                <ShieldCheck className="h-4 w-4 text-secure/60" />
                                No Data Stored
                            </div>
                        </div>
                    </div>

                    {/* Right — Terminal Animation */}
                    <div className="animate-slide-up stagger-2">
                        <div className="glass rounded-xl overflow-hidden border-glow">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-surface/50 border-b border-border-subtle">
                                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-muted font-mono">
                                    hardener-ai — scan session
                                </span>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-4 font-mono text-xs sm:text-sm leading-6 min-h-[320px] max-h-[400px] overflow-hidden">
                                {terminalLines.slice(0, visibleLines).map((line, i) => (
                                    <div
                                        key={i}
                                        className={`${getLineColor(line.type)} animate-fade-in`}
                                        style={{ animationDelay: `${i * 0.05}s` }}
                                    >
                                        {line.text}
                                    </div>
                                ))}
                                {visibleLines < terminalLines.length && (
                                    <span className="inline-block w-2 h-4 bg-secure animate-terminal-blink" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
