"use client";

import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secure/10 border border-secure/20 transition-all duration-300 group-hover:bg-secure/20 group-hover:border-secure/40">
                            <Shield className="h-5 w-5 text-secure" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground">
                            Hardener<span className="text-secure">AI</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#hero"
                            className="inline-flex h-9 items-center justify-center rounded-lg bg-secure px-4 text-sm font-semibold text-background transition-all duration-200 hover:bg-secure-dim active:scale-95"
                        >
                            Start Free Scan
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-muted transition-colors hover:text-foreground hover:border-border-hover"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-strong border-t border-border-subtle animate-slide-up">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm font-medium text-muted transition-colors hover:text-foreground py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#hero"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center rounded-lg bg-secure px-4 py-2.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-secure-dim"
                        >
                            Start Free Scan
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
