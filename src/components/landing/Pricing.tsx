export default function Pricing() {
    const tiers = [
        {
            name: "Pulse Check",
            price: "$0",
            period: "/scan",
            features: ["Surface Scan", "Tech Stack Analysis", "Header Audit", "Basic Report"],
            cta: "Start Free",
            highlight: false,
            dotSize: "w-1 h-1",
            textColor: "text-slate-400",
        },
        {
            name: "Deep Audit",
            price: "$49",
            period: "/scan",
            features: ["Shannon Autonomous Scan", "Exploit Proof Logs", "Code Fix Snippets", "Priority Queue", "PDF for Investors"],
            cta: "Run Audit",
            highlight: true,
            dotSize: "w-1.5 h-1.5",
            textColor: "text-slate-200",
        },
        {
            name: "Enterprise",
            price: "$299",
            period: "/mo",
            features: ["Monthly Deep Audits", "Managed PR Submission", "Security Badge", "Vulnerability Monitor"],
            cta: "Contact Sales",
            highlight: false,
            dotSize: "w-1 h-1",
            textColor: "text-slate-400",
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-[#01040f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Pricing</h2>
                <p className="text-slate-500 mb-20 uppercase tracking-widest text-xs font-bold">
                    Global Scale. Simple Rates.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`p-10 rounded-xl text-left flex flex-col relative ${tier.highlight
                                    ? "bg-slate-900 border-2 border-emerald-600 shadow-2xl"
                                    : "bg-slate-900/50 border border-slate-800"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                                    Popular
                                </div>
                            )}
                            <h3
                                className={`text-sm font-bold uppercase tracking-widest mb-4 ${tier.highlight ? "text-emerald-500" : "text-slate-400"
                                    }`}
                            >
                                {tier.name}
                            </h3>
                            <p className="text-4xl font-bold text-white mb-8">
                                {tier.price}
                                <span className="text-xs font-normal text-slate-500 ml-1 tracking-normal">
                                    {tier.period}
                                </span>
                            </p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((item) => (
                                    <li
                                        key={item}
                                        className={`flex items-center gap-3 text-sm ${tier.textColor}`}
                                    >
                                        <div
                                            className={`${tier.dotSize} rounded-full bg-emerald-500`}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-lg font-bold transition-all ${tier.highlight
                                        ? "bg-emerald-600 hover:bg-emerald-500 text-white py-4"
                                        : "bg-slate-800 hover:bg-slate-700 text-white"
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
