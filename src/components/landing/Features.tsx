import { Zap, FileText, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Shannon Engine",
        description:
            "Utilizes autonomous agent logic to identify logical bypasses that static analysis tools miss.",
    },
    {
        icon: FileText,
        title: "Founders Report",
        description:
            "Clean, actionable summaries. We prioritize fixes based on business impact, not just CVSS scores.",
    },
    {
        icon: CheckCircle2,
        title: "Direct Hardening",
        description:
            "Receive tested code snippets for your specific stack (PHP, C#, Node) to close vulnerabilities immediately.",
    },
];

export default function Features() {
    return (
        <section
            id="how"
            className="py-24 bg-[#01040f] border-y border-slate-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Engineered for Reliability
                    </h2>
                    <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                        The Last Mile of Development
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="p-10 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all"
                            >
                                <Icon className="text-emerald-500 w-8 h-8 mb-8" />
                                <h3 className="text-lg font-bold text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
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
