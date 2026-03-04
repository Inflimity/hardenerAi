"use client";

import { useState } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";

const navLinks = [
    { label: "How it Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Safety Standard", href: "#security" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#020617] border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <a href="#" className="flex items-center gap-2">
                        <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Hardener<span className="text-emerald-500">AI</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all">
                            Get Started
                        </button>
                    </div>

                    <button
                        className="md:hidden text-slate-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#020617] border-t border-slate-800">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all text-center"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
