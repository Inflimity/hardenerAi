import { ShieldAlert, CheckCircle2, Zap } from "lucide-react";

export default function DashboardPreview() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                    {/* Window chrome */}
                    <div className="border-b border-slate-800 p-5 flex items-center justify-between bg-slate-950/50">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 tracking-widest">
                            CONSOLE // AUDIT_OUTPUT
                        </div>
                    </div>

                    <div className="p-8 md:p-16 grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Audit Summary */}
                        <div>
                            <div className="mb-10">
                                <h4 className="text-2xl font-bold text-white mb-3">
                                    Audit Summary
                                </h4>
                                <p className="text-slate-500 text-sm">
                                    Target:{" "}
                                    <span className="text-emerald-500 font-mono">
                                        pathfinder.io
                                    </span>
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-4 p-5 rounded-lg bg-slate-950 border-l-4 border-amber-500">
                                    <ShieldAlert className="text-amber-500 shrink-0 w-5 h-5" />
                                    <div>
                                        <p className="text-white font-bold text-sm">Key Leakage</p>
                                        <p className="text-slate-500 text-xs">
                                            Unencrypted keys found in client JS.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 rounded-lg bg-slate-950 border-l-4 border-emerald-500">
                                    <CheckCircle2 className="text-emerald-500 shrink-0 w-5 h-5" />
                                    <div>
                                        <p className="text-white font-bold text-sm">
                                            SQL Sanitization
                                        </p>
                                        <p className="text-slate-500 text-xs">
                                            Parameterization verified across all inputs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-10 w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2">
                                Apply Hardening Patch{" "}
                                <Zap className="w-4 h-4 fill-current" />
                            </button>
                        </div>

                        {/* Right: Safety Score Gauge */}
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="relative mb-8">
                                <svg className="w-56 h-56 transform -rotate-90">
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
                                        strokeDasharray={628.3}
                                        strokeDashoffset={628.3 * 0.15}
                                        className="text-emerald-500"
                                        strokeLinecap="butt"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-6xl font-bold text-white">85</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
                                        Safety Score
                                    </span>
                                </div>
                            </div>
                            <p className="text-center text-slate-500 text-sm max-w-xs leading-relaxed font-medium italic">
                                &ldquo;Your application architecture meets 85% of our security
                                hardening benchmarks.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
