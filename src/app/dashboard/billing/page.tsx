import { CreditCard, Zap, Shield, Building2, Check, Plus } from "lucide-react";

const plans = [
    {
        name: "Single Pulse", price: "$49", period: "one-time", icon: Zap, popular: false,
        features: ["1 Deep Audit", "Kill Chain Report", "Code Patches", "PDF Export"]
    },
    {
        name: "Growth Shield", price: "$199", period: "/month", icon: Shield, popular: true,
        features: ["2 Deep Scans/mo", "Continuous Monitoring", "Verified Badge", "Priority Queue", "Slack Alerts"]
    },
    {
        name: "Enterprise", price: "$999", period: "+", icon: Building2, popular: false,
        features: ["Unlimited Scans", "Human Review", "Custom Scope", "SLA Guarantee", "Dedicated Engineer"]
    },
];

export default function BillingPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold tracking-tight mb-1">Billing</h1>
                <p className="text-sm text-muted">Manage your plan and credits.</p>
            </div>

            {/* Current Plan */}
            <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-secure" /> Current Plan
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border-subtle text-muted font-medium">Free</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-surface border border-border-subtle">
                        <p className="text-xs text-muted mb-1">Scans Used</p>
                        <p className="text-2xl font-bold">0<span className="text-sm text-muted font-normal">/1</span></p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface border border-border-subtle">
                        <p className="text-xs text-muted mb-1">Credits Remaining</p>
                        <p className="text-2xl font-bold">$0.00</p>
                    </div>
                </div>
            </div>

            {/* Buy Credits */}
            <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2"><Plus className="h-4 w-4 text-secure" /> Buy Credits</h3>
                <div className="grid grid-cols-3 gap-3">
                    {[{ amount: 25, bonus: null }, { amount: 50, bonus: "+$5 free" }, { amount: 100, bonus: "+$15 free" }].map((o) => (
                        <button key={o.amount} className="p-4 rounded-lg bg-surface border border-border-subtle hover:border-secure/30 hover:bg-surface-hover transition-all text-center">
                            <p className="text-xl font-bold mb-0.5">${o.amount}</p>
                            {o.bonus && <p className="text-xs text-secure">{o.bonus}</p>}
                        </button>
                    ))}
                </div>
            </div>

            {/* Upgrade Plans */}
            <div>
                <h3 className="font-semibold mb-4">Upgrade Plan</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        return (
                            <div key={plan.name} className={`glass rounded-xl p-5 flex flex-col transition-all duration-300 hover:bg-surface-hover ${plan.popular ? "border-secure/30 border-glow" : ""}`}>
                                {plan.popular && <span className="text-xs font-bold text-secure mb-3">MOST POPULAR</span>}
                                <div className="flex items-center gap-2 mb-3">
                                    <Icon className={`h-4 w-4 ${plan.popular ? "text-secure" : "text-muted"}`} />
                                    <span className="text-sm font-semibold">{plan.name}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-2xl font-bold">{plan.price}</span>
                                    <span className="text-xs text-muted ml-1">{plan.period}</span>
                                </div>
                                <ul className="space-y-2 mb-4 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-xs text-muted">
                                            <Check className="h-3 w-3 text-secure flex-shrink-0" />{f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full h-9 rounded-lg text-sm font-medium transition-all active:scale-95 ${plan.popular ? "bg-secure text-background hover:bg-secure-dim" : "bg-surface border border-border-subtle text-foreground hover:border-secure/30"}`}>
                                    {plan.name === "Enterprise" ? "Contact" : "Upgrade"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
