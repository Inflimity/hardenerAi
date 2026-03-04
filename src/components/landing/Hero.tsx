"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Monitor } from "lucide-react";

export default function Hero() {
    const [url, setUrl] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    const handleScan = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;
        setIsScanning(true);
        setScanProgress(0);
    };

    useEffect(() => {
        if (isScanning && scanProgress < 100) {
            const timer = setTimeout(() => setScanProgress((prev) => prev + 1), 40);
            return () => clearTimeout(timer);
        } else if (scanProgress === 100) {
            const timer = setTimeout(() => setIsScanning(false), 800);
            return () => clearTimeout(timer);
        }
    }, [isScanning, scanProgress]);

    return (
        <section className="pt-40 pb-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 mb-8">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Trusted by Global Vibe Coders
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Did AI build your app?
                    <br />
                    <span className="text-emerald-500">Let AI Secure It.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Clean architecture for the AI era. We use autonomous agents to audit,
                    verify, and harden your generated code against production-grade
                    threats.
                </p>

                {/* Scanner Input */}
                <div className="max-w-2xl mx-auto">
                    <div className="p-1 bg-slate-900 rounded-xl border border-slate-800 shadow-xl">
                        <form
                            onSubmit={handleScan}
                            className="flex flex-col sm:flex-row gap-1"
                        >
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Monitor className="h-5 w-5 text-slate-500" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your app URL (e.g. vibe-app.vercel.app)"
                                    className="w-full bg-slate-950 border-none rounded-lg py-4 pl-12 pr-4 text-white focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isScanning}
                                className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                            >
                                {isScanning ? "Scanning..." : "Start Free Scan"}
                                {!isScanning && <ArrowRight className="w-4 h-4" />}
                            </button>
                        </form>
                    </div>

                    {/* Progress Bar */}
                    {isScanning && (
                        <div className="mt-8">
                            <div className="flex justify-between text-[10px] text-slate-500 mb-2 font-mono uppercase tracking-widest">
                                <span>Analyzing Stack</span>
                                <span>{scanProgress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-200"
                                    style={{ width: `${scanProgress}%` }}
                                />
                            </div>
                        </div>
                    )}

                    <p className="mt-6 text-xs text-slate-500 italic">
                        Non-invasive surface audit. No login required for initial scan.
                    </p>
                </div>
            </div>
        </section>
    );
}
