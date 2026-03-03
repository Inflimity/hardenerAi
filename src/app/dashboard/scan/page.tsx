"use client";

import { useState } from "react";
import {
    Search,
    ArrowRight,
    Shield,
    AlertTriangle,
    Info,
    CheckCircle2,
    Loader2,
    Globe,
    Cpu,
    FileText,
} from "lucide-react";

type ScanStep = "input" | "verify" | "scanning" | "complete";

export default function ScanPage() {
    const [url, setUrl] = useState("");
    const [scanType, setScanType] = useState<"surface" | "deep">("surface");
    const [step, setStep] = useState<ScanStep>("input");
    const [verificationCode] = useState(
        `hardener-verify-${Math.random().toString(36).substring(2, 10)}`
    );

    const handleStartScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;
        if (scanType === "deep") {
            setStep("verify");
        } else {
            setStep("scanning");
            // TODO: Trigger actual scan
            setTimeout(() => setStep("complete"), 5000);
        }
    };

    const handleVerified = () => {
        setStep("scanning");
        // TODO: Trigger actual scan
        setTimeout(() => setStep("complete"), 5000);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight mb-1">New Scan</h1>
                <p className="text-sm text-muted">
                    Enter a URL to begin your security audit.
                </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-2">
                {(
                    [
                        { key: "input", label: "Target", icon: Globe },
                        { key: "verify", label: "Verify", icon: Shield },
                        { key: "scanning", label: "Scanning", icon: Cpu },
                        { key: "complete", label: "Report", icon: FileText },
                    ] as const
                ).map((s, i, arr) => {
                    const Icon = s.icon;
                    const stepOrder = ["input", "verify", "scanning", "complete"];
                    const currentIdx = stepOrder.indexOf(step);
                    const thisIdx = stepOrder.indexOf(s.key);
                    const isActive = thisIdx === currentIdx;
                    const isDone = thisIdx < currentIdx;

                    return (
                        <div key={s.key} className="flex items-center gap-2 flex-1">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition-all ${isDone
                                        ? "bg-secure/20 border border-secure/30 text-secure"
                                        : isActive
                                            ? "bg-secure/10 border border-secure/20 text-secure"
                                            : "bg-surface border border-border-subtle text-muted"
                                    }`}
                            >
                                {isDone ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                    <Icon className="h-3.5 w-3.5" />
                                )}
                            </div>
                            <span
                                className={`text-xs font-medium hidden sm:block ${isActive ? "text-foreground" : "text-muted"
                                    }`}
                            >
                                {s.label}
                            </span>
                            {i < arr.length - 1 && (
                                <div
                                    className={`flex-1 h-px ${isDone ? "bg-secure/30" : "bg-border-subtle"
                                        }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Step: URL Input */}
            {step === "input" && (
                <form onSubmit={handleStartScan} className="space-y-6">
                    <div className="glass rounded-xl p-6">
                        <label className="block text-sm font-medium mb-3">
                            Target URL
                        </label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted/60" />
                            <input
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://your-app.com"
                                required
                                className="w-full h-12 pl-10 pr-4 rounded-lg bg-surface border border-border-subtle text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-secure/40 focus:ring-1 focus:ring-secure/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Scan Type Toggle */}
                    <div className="glass rounded-xl p-6">
                        <label className="block text-sm font-medium mb-3">Scan Type</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setScanType("surface")}
                                className={`p-4 rounded-lg border text-left transition-all ${scanType === "surface"
                                        ? "border-secure/30 bg-secure/5"
                                        : "border-border-subtle bg-surface hover:bg-surface-hover"
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield
                                        className={`h-4 w-4 ${scanType === "surface" ? "text-secure" : "text-muted"
                                            }`}
                                    />
                                    <span
                                        className={`text-sm font-semibold ${scanType === "surface" ? "text-secure" : "text-foreground"
                                            }`}
                                    >
                                        Surface Scan
                                    </span>
                                </div>
                                <p className="text-xs text-muted">
                                    Quick scan using Nmap & WhatWeb. No verification needed. Free.
                                </p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setScanType("deep")}
                                className={`p-4 rounded-lg border text-left transition-all ${scanType === "deep"
                                        ? "border-vulnerable/30 bg-vulnerable/5"
                                        : "border-border-subtle bg-surface hover:bg-surface-hover"
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle
                                        className={`h-4 w-4 ${scanType === "deep" ? "text-vulnerable" : "text-muted"
                                            }`}
                                    />
                                    <span
                                        className={`text-sm font-semibold ${scanType === "deep"
                                                ? "text-vulnerable"
                                                : "text-foreground"
                                            }`}
                                    >
                                        Deep Shannon Audit
                                    </span>
                                </div>
                                <p className="text-xs text-muted">
                                    Full autonomous pentest. Requires domain verification. Credits
                                    required.
                                </p>
                            </button>
                        </div>
                    </div>

                    {/* Burn estimate for deep scan */}
                    {scanType === "deep" && (
                        <div className="glass rounded-xl p-4 border-vulnerable/20">
                            <div className="flex items-start gap-3">
                                <Info className="h-4 w-4 text-vulnerable mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-vulnerable mb-1">
                                        Estimated Cost: ~$12.50 in credits
                                    </p>
                                    <p className="text-xs text-muted">
                                        Based on average LLM token usage for a standard web app.
                                        Actual cost may vary by 20%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full h-12 rounded-lg bg-secure text-background font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-secure-dim active:scale-95"
                    >
                        {scanType === "surface" ? "Start Surface Scan" : "Continue to Verification"}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </form>
            )}

            {/* Step: Domain Verification */}
            {step === "verify" && (
                <div className="space-y-6">
                    <div className="glass rounded-xl p-6">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-secure" />
                            Domain Verification Required
                        </h3>
                        <p className="text-sm text-muted mb-6">
                            To prove you own <strong className="text-foreground">{url}</strong>
                            , add one of the following verification methods:
                        </p>

                        {/* Method 1: DNS TXT */}
                        <div className="mb-4 p-4 rounded-lg bg-surface border border-border-subtle">
                            <h4 className="text-sm font-medium mb-2">
                                Option 1: DNS TXT Record
                            </h4>
                            <p className="text-xs text-muted mb-2">
                                Add a TXT record to your domain&apos;s DNS settings:
                            </p>
                            <div className="flex items-center gap-2">
                                <code className="flex-1 text-xs bg-background p-2.5 rounded font-mono text-secure border border-border-subtle">
                                    {verificationCode}
                                </code>
                                <button
                                    onClick={() =>
                                        navigator.clipboard.writeText(verificationCode)
                                    }
                                    className="h-9 px-3 rounded-lg bg-surface border border-border-subtle text-xs text-muted hover:text-foreground transition-colors"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>

                        {/* Method 2: security.txt */}
                        <div className="p-4 rounded-lg bg-surface border border-border-subtle">
                            <h4 className="text-sm font-medium mb-2">
                                Option 2: security.txt File
                            </h4>
                            <p className="text-xs text-muted mb-2">
                                Add a file at{" "}
                                <code className="text-secure">/.well-known/security.txt</code>{" "}
                                containing:
                            </p>
                            <div className="flex items-center gap-2">
                                <code className="flex-1 text-xs bg-background p-2.5 rounded font-mono text-secure border border-border-subtle">
                                    # Hardener-Verify: {verificationCode}
                                </code>
                                <button
                                    onClick={() =>
                                        navigator.clipboard.writeText(
                                            `# Hardener-Verify: ${verificationCode}`
                                        )
                                    }
                                    className="h-9 px-3 rounded-lg bg-surface border border-border-subtle text-xs text-muted hover:text-foreground transition-colors"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleVerified}
                        className="w-full h-12 rounded-lg bg-secure text-background font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-secure-dim active:scale-95"
                    >
                        I&apos;ve Added Verification — Start Deep Scan
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            )}

            {/* Step: Scanning */}
            {step === "scanning" && (
                <div className="glass rounded-xl p-8 text-center">
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-secure/10 border border-secure/20 mb-6">
                        <Loader2 className="h-8 w-8 text-secure animate-spin" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Scanning in Progress</h3>
                    <p className="text-sm text-muted mb-6 max-w-md mx-auto">
                        Shannon Engine is autonomously probing{" "}
                        <strong className="text-foreground">{url}</strong>. This typically
                        takes 5–15 minutes for surface scans.
                    </p>

                    {/* Live terminal feed */}
                    <div className="glass rounded-lg p-4 text-left max-w-lg mx-auto">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border-subtle">
                            <div className="h-2 w-2 rounded-full bg-secure animate-pulse-glow" />
                            <span className="text-xs text-muted font-mono">
                                live feed — shannon engine
                            </span>
                        </div>
                        <div className="font-mono text-xs space-y-1 text-muted">
                            <p className="text-secure animate-fade-in">
                                [INIT] Connecting to worker VPS...
                            </p>
                            <p className="animate-fade-in stagger-1">
                                [SCAN] Port discovery in progress...
                            </p>
                            <p className="animate-fade-in stagger-2">
                                [SCAN] Enumerating technologies...
                            </p>
                            <span className="inline-block w-2 h-3.5 bg-secure animate-terminal-blink" />
                        </div>
                    </div>
                </div>
            )}

            {/* Step: Complete */}
            {step === "complete" && (
                <div className="glass rounded-xl p-8 text-center">
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-secure/10 border border-secure/20 mb-6">
                        <CheckCircle2 className="h-8 w-8 text-secure" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Scan Complete</h3>
                    <p className="text-sm text-muted mb-6 max-w-md mx-auto">
                        Your security audit for{" "}
                        <strong className="text-foreground">{url}</strong> is ready. View
                        the full report with threat scores, kill chain, and code patches.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/dashboard/reports"
                            className="inline-flex h-11 items-center justify-center rounded-lg bg-secure px-6 text-sm font-semibold text-background transition-all duration-200 hover:bg-secure-dim active:scale-95 gap-2"
                        >
                            <FileText className="h-4 w-4" />
                            View Report
                        </a>
                        <button
                            onClick={() => {
                                setStep("input");
                                setUrl("");
                            }}
                            className="inline-flex h-11 items-center justify-center rounded-lg bg-surface border border-border-subtle px-6 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-hover"
                        >
                            Scan Another URL
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
