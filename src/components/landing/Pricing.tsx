import { Check, Zap, Shield, Building2 } from "lucide-react";

const plans = [
    {
        name: "Single Pulse",
        price: "$49",
        period: "one-time",
        description: "One-time scan for an MVP launch.",
        icon: Zap,
        popular: false,
        features: [
            "1 Surface Scan + Deep Audit",
            "Full Kill Chain Report",
            "Executive Summary",
            "Code Patches (JS, PHP, C#)",
            "Leaked API Key Detection",
            "PDF Export",
        ],
    },
    {
        name: "Growth Shield",
        price: "$199",
        period: "/month",
        description: "2 Deep Scans per month + 'Verified' footer badge.",
        icon: Shield,
        popular: true,
        features: [
            "2 Deep Scans per month",
            "Everything in Single Pulse",
            "Continuous Monitoring",
            "\"Verified Secure\" Badge",
            "Priority Scan Queue",
            "Slack/Discord Alerts",
            "Dedicated Support",
        ],
    },
    {
        name: "Enterprise Triage",
        price: "$999",
        period: "+",
        description: "Custom human-in-the-loop verification.",
        icon: Building2,
        popular: false,
        features: [
            "Unlimited Deep Scans",
            "Everything in Growth Shield",
            "Human-in-the-Loop Review",
            "Custom Pentest Scope",
            "Compliance Reporting",
            "SLA Guarantee",
            "Dedicated Security Engineer",
            "Private Deployment Option",
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-secure/10 border border-secure/20 px-4 py-1.5 mb-6">
                        <span className="text-xs font-medium text-secure">Pricing</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Invest in Security,{" "}
                        <span className="text-secure text-glow">Not Regret</span>
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        Credit-based pricing that scales with your needs. No hidden fees,
                        cancel anytime.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        return (
                            <div
                                key={plan.name}
                                className={`relative glass rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 hover:bg-surface-hover ${plan.popular
                                        ? "border-secure/30 border-glow md:scale-105"
                                        : ""
                                    }`}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex items-center rounded-full bg-secure px-3 py-1 text-xs font-bold text-background">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Icon & Name */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${plan.popular
                                                ? "bg-secure/20 border border-secure/30"
                                                : "bg-surface border border-border-subtle"
                                            }`}
                                    >
                                        <Icon
                                            className={`h-5 w-5 ${plan.popular ? "text-secure" : "text-muted"
                                                }`}
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                                </div>

                                {/* Price */}
                                <div className="mb-2">
                                    <span className="text-4xl font-bold text-foreground">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm text-muted ml-1">
                                        {plan.period}
                                    </span>
                                </div>
                                <p className="text-sm text-muted mb-6">{plan.description}</p>

                                {/* CTA */}
                                <button
                                    className={`w-full h-11 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95 mb-6 ${plan.popular
                                            ? "bg-secure text-background hover:bg-secure-dim"
                                            : "bg-surface border border-border-subtle text-foreground hover:border-secure/30 hover:bg-surface-hover"
                                        }`}
                                >
                                    {plan.name === "Enterprise Triage"
                                        ? "Contact Sales"
                                        : "Get Started"}
                                </button>

                                {/* Features */}
                                <ul className="space-y-3 flex-1">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5 text-sm"
                                        >
                                            <Check
                                                className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-secure" : "text-muted"
                                                    }`}
                                            />
                                            <span className="text-muted">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
