"use client";

import { useState } from "react";
import { ArrowRight, ShieldAlert } from "lucide-react";

export default function CTA() {
    const [email, setEmail] = useState("");

    return (
        <section className="relative py-24 lg:py-32 bg-surface/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative glass rounded-2xl p-8 sm:p-12 lg:p-16 text-center border-glow overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secure/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-vulnerable/10 border border-vulnerable/20">
                                <ShieldAlert className="h-7 w-7 text-vulnerable" />
                            </div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl mx-auto">
                            Your App is{" "}
                            <span className="text-vulnerable">Vulnerable</span>{" "}
                            Right Now
                        </h2>
                        <p className="text-muted text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                            Every minute without a security audit is a minute hackers have to
                            find what you missed. Get your first scan free.
                        </p>

                        {/* Email capture */}
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@startup.com"
                                className="flex-1 h-12 px-4 rounded-lg bg-surface border border-border-subtle text-foreground placeholder:text-muted/60 text-sm focus:outline-none focus:border-secure/40 focus:ring-1 focus:ring-secure/20 transition-all"
                            />
                            <button className="h-12 px-6 rounded-lg bg-secure text-background font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-secure-dim active:scale-95 whitespace-nowrap">
                                Get Early Access
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <p className="text-xs text-muted/60 mt-4">
                            No credit card required. First surface scan is free.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
