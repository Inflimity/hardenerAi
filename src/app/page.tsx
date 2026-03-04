"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = url.trim();
        if (!trimmed) return;

        setIsScanning(true);
        setScanProgress(0);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isScanning && scanProgress < 100) {
            interval = setInterval(() => {
                setScanProgress((prev) => {
                    const next = prev + Math.floor(Math.random() * 3) + 1;
                    if (next >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            setIsScanning(false);
                            alert(`Surface scan complete for ${url}. 3 potential vulnerabilities found.`);
                        }, 800);
                        return 100;
                    }
                    return next;
                });
            }, 40);
        }
        return () => clearInterval(interval);
    }, [isScanning, url, scanProgress]);

    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#020617] border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 text-emerald-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shield-check"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Hardener<span className="text-emerald-500">AI</span>
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                            <a href="#how" className="text-slate-400 hover:text-white transition-colors">
                                How it Works
                            </a>
                            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                                Pricing
                            </a>
                            <a href="#security" className="text-slate-400 hover:text-white transition-colors">
                                Safety Standard
                            </a>
                            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg font-semibold transition-all">
                                Get Started
                            </button>
                        </div>

                        <button className="md:hidden text-slate-400" id="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-menu"
                                id="menu-icon"
                            >
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-4`} id="mobile-menu">
                    <a href="#how" className="block text-slate-400 hover:text-white transition-colors">
                        How it Works
                    </a>
                    <a href="#pricing" className="block text-slate-400 hover:text-white transition-colors">
                        Pricing
                    </a>
                    <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 mb-8">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            Trusted by Global Vibe Coders
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Did AI build your app?<br />
                        <span className="text-emerald-500">Let AI Secure It.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Clean architecture for the AI era. We use autonomous agents to audit, verify, and harden your generated code against production-grade threats.
                    </p>

                    {/* Scanner Input Area */}
                    <div className="max-w-2xl mx-auto">
                        <div className="p-1 bg-slate-900 rounded-xl border border-slate-800 shadow-xl">
                            <form id="scan-form" className="flex flex-col sm:flex-row gap-1" onSubmit={handleScan}>
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect width="20" height="14" x="2" y="3" rx="2" />
                                            <line x1="8" x2="16" y1="21" y2="21" />
                                            <line x1="12" x2="12" y1="17" y2="21" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="url-input"
                                        placeholder="Enter your app URL (e.g. vibe-app.vercel.app)"
                                        className="w-full bg-slate-950 border-none rounded-lg py-4 pl-12 pr-4 text-white focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm"
                                        required
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    id="scan-btn"
                                    disabled={isScanning}
                                    className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                                >
                                    <span>{isScanning ? "Scanning..." : "Start Free Scan"}</span>
                                    {!isScanning && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-right"
                                        >
                                            <line x1="5" x2="19" y1="12" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Scan Progress Bar */}
                        <div id="progress-container" className={`mt-8 animate-in fade-in ${isScanning ? "block" : "hidden"}`}>
                            <div className="flex justify-between text-[10px] text-slate-500 mb-2 font-mono uppercase tracking-widest">
                                <span>Analyzing Stack</span>
                                <span id="progress-text">{scanProgress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    id="progress-bar"
                                    className="h-full bg-emerald-500 transition-all duration-200"
                                    style={{ width: `${scanProgress}%` }}
                                ></div>
                            </div>
                        </div>

                        <p className="mt-6 text-xs text-slate-500 italic">
                            Non-invasive surface audit. No login required for initial scan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="how" className="py-24 bg-[#01040f] border-y border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-white mb-4">Engineered for Reliability</h2>
                        <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">The Last Mile of Development</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-10 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all">
                            <div className="text-emerald-500 mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Shannon Engine</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Utilizes autonomous agent logic to identify logical bypasses that static analysis tools miss.
                            </p>
                        </div>

                        <div className="p-10 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all">
                            <div className="text-emerald-500 mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Founders Report</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Clean, actionable summaries. We prioritize fixes based on business impact, not just CVSS scores.
                            </p>
                        </div>

                        <div className="p-10 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all">
                            <div className="text-emerald-500 mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Direct Hardening</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Receive tested code snippets for your specific stack (PHP, C#, Node) to close vulnerabilities immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="border-b border-slate-800 p-5 flex items-center justify-between bg-slate-950/50">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                            </div>
                            <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                                Console // Audit_Output
                            </div>
                        </div>

                        <div className="p-8 md:p-16 grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="mb-10">
                                    <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">Audit Summary</h4>
                                    <p className="text-slate-500 text-sm">
                                        Target: <span className="text-emerald-500 font-mono">pathfinder.io</span>
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 p-5 rounded-lg bg-slate-950 border-l-4 border-amber-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-amber-500 shrink-0"
                                        >
                                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                            <line x1="12" x2="12" y1="9" y2="13" />
                                            <line x1="12" x2="12.01" y1="17" y2="17" />
                                        </svg>
                                        <div>
                                            <p className="text-white font-bold text-sm">Key Leakage</p>
                                            <p className="text-slate-500 text-xs">Unencrypted keys found in client JS.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-5 rounded-lg bg-slate-950 border-l-4 border-emerald-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-emerald-500 shrink-0"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <div>
                                            <p className="text-white font-bold text-sm">SQL Sanitization</p>
                                            <p className="text-slate-500 text-xs">Parameterization verified across all inputs.</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-10 w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                                    <span>Apply Hardening Patch</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="fill-current"
                                    >
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col items-center justify-center py-10">
                                <div className="relative mb-8">
                                    <svg className="w-56 h-56" viewBox="0 0 224 224">
                                        <circle
                                            cx="112"
                                            cy="112"
                                            r="100"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            fill="transparent"
                                            className="text-slate-800"
                                        />
                                        <circle
                                            cx="112"
                                            cy="112"
                                            r="100"
                                            stroke="currentColor"
                                            strokeWidth="12"
                                            fill="transparent"
                                            strokeDasharray="628.3"
                                            strokeDashoffset="94.24"
                                            className="text-emerald-500 progress-ring__circle"
                                            strokeLinecap="butt"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-6xl font-bold text-white tracking-tighter">85</span>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
                                            Safety Score
                                        </span>
                                    </div>
                                </div>
                                <p className="text-center text-slate-500 text-sm max-w-xs leading-relaxed font-medium italic">
                                    &quot;Your application architecture meets 85% of our security hardening benchmarks.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-[#01040f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Pricing</h2>
                    <p className="text-slate-500 mb-20 uppercase tracking-widest text-xs font-bold">
                        Global Scale. Simple Rates.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="p-10 rounded-xl bg-slate-900/50 border border-slate-800 text-left flex flex-col transition-all hover:border-slate-700">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Pulse Check</h3>
                            <p className="text-4xl font-bold text-white mb-8">
                                $0<span className="text-xs font-normal text-slate-500 ml-1 tracking-normal">/scan</span>
                            </p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Surface Scan
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Tech Stack Analysis
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Header Audit
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Basic Report
                                </li>
                            </ul>
                            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-bold transition-all">
                                Start Free
                            </button>
                        </div>

                        {/* Pro Tier */}
                        <div className="p-10 rounded-xl bg-slate-900 border-2 border-emerald-600 text-left flex flex-col relative shadow-2xl">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                                Popular
                            </div>
                            <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">Deep Audit</h3>
                            <p className="text-4xl font-bold text-white mb-8">
                                $49<span className="text-xs font-normal text-slate-500 ml-1 tracking-normal">/scan</span>
                            </p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 text-sm text-slate-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Shannon Autonomous Scan
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Exploit Proof Logs
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Code Fix Snippets
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Priority Queue
                                </li>
                            </ul>
                            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-lg font-bold transition-all">
                                Run Audit
                            </button>
                        </div>

                        {/* Managed Tier */}
                        <div className="p-10 rounded-xl bg-slate-900/50 border border-slate-800 text-left flex flex-col transition-all hover:border-slate-700">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Enterprise</h3>
                            <p className="text-4xl font-bold text-white mb-8">
                                $299<span className="text-xs font-normal text-slate-500 ml-1 tracking-normal">/mo</span>
                            </p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Monthly Deep Audits
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Managed PR Submission
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Security Badge
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div> Vulnerability Monitor
                                </li>
                            </ul>
                            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-bold transition-all">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-emerald-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-white tracking-tight">HardenerAI</span>
                            </div>
                            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed font-medium">
                                Autonomous security audits for the modern software era. Based on Shannon AI benchmarks.
                            </p>
                        </div>

                        <div className="flex gap-12 text-xs text-slate-500 font-bold uppercase tracking-widest">
                            <a href="#" className="hover:text-white transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Terms
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Security
                            </a>
                        </div>

                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 text-center text-slate-700 text-[10px] uppercase tracking-[0.3em] font-bold">
                        &copy; 2026 Hardener AI // Developed Globally.
                    </div>
                </div>
            </footer>
        </>
    );
}
