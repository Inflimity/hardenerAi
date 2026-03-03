"use client";

import {
    Globe,
    Sword,
    Brain,
    Code2,
    KeyRound,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Vibe-to-Verify",
        description:
            "One URL is all it takes. Enter your site and our autonomous AI agent runs a full security audit — no setup, no config, no expertise required.",
        accent: "secure" as const,
    },
    {
        icon: Sword,
        title: "Kill Chain Report",
        description:
            "See exactly how an attacker would breach your app. Step-by-step exploitation paths documented in real-time by the Shannon engine.",
        accent: "vulnerable" as const,
    },
    {
        icon: Brain,
        title: "AI Triage",
        description:
            "Get two reports in one: a Business Executive Summary for your stakeholders, and a deep Technical Fixes guide for your engineers.",
        accent: "secure" as const,
    },
    {
        icon: Code2,
        title: "One-Click Hardening",
        description:
            "Every vulnerability comes with a ready-to-paste code patch in PHP, C#, or JavaScript. Copy, paste, deploy — you're patched.",
        accent: "vulnerable" as const,
    },
    {
        icon: KeyRound,
        title: "Leaked Key Detection",
        description:
            "Specifically hunts for exposed API keys (OpenAI, Anthropic, Stripe) in your frontend code — the #1 mistake of AI-built apps.",
        accent: "vulnerable" as const,
    },
    {
        icon: ShieldCheck,
        title: "Domain Verification",
        description:
            "Prove you own the target via DNS TXT record or security.txt. No one can scan a domain they don't control.",
        accent: "secure" as const,
    },
];

export default function Features() {
    return (
        <section id="features" className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-secure/10 border border-secure/20 px-4 py-1.5 mb-6">
                        <span className="text-xs font-medium text-secure">
                            Platform Features
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Everything You Need to{" "}
                        <span className="text-secure text-glow">Harden</span> Your App
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        From surface-level scans to deep autonomous pentesting, Hardener AI
                        covers every attack vector so you don&apos;t have to.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        const isVuln = feature.accent === "vulnerable";
                        return (
                            <div
                                key={feature.title}
                                className={`group relative glass rounded-xl p-6 transition-all duration-300 hover:border-${isVuln ? "vulnerable" : "secure"}/20 hover:bg-surface-hover stagger-${i + 1}`}
                            >
                                {/* Icon */}
                                <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-lg mb-4 transition-colors duration-300 ${isVuln
                                            ? "bg-vulnerable/10 border border-vulnerable/20 group-hover:bg-vulnerable/20"
                                            : "bg-secure/10 border border-secure/20 group-hover:bg-secure/20"
                                        }`}
                                >
                                    <Icon
                                        className={`h-5 w-5 ${isVuln ? "text-vulnerable" : "text-secure"
                                            }`}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold mb-2 text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
