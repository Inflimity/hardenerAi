import { ShieldCheck, Github, Lock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            <span className="text-xl font-bold text-white tracking-tight">
                                HardenerAI
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
                            Autonomous security audits for the modern software era. Based on
                            Shannon AI benchmarks.
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
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white transition-all"
                        >
                            <Lock className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-16 text-center text-slate-700 text-[10px] uppercase tracking-[0.3em] font-bold">
                    &copy; 2026 Hardener AI // Developed Globally.
                </div>
            </div>
        </footer>
    );
}
