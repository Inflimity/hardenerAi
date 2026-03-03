import { Globe, Cpu, FileText, ArrowRight } from "lucide-react";

const steps = [
    {
        step: "01",
        icon: Globe,
        title: "Enter Your URL",
        description:
            "Paste your site URL into the scanner. Verify domain ownership via a DNS TXT record — takes 30 seconds.",
    },
    {
        step: "02",
        icon: Cpu,
        title: "AI Scans Autonomously",
        description:
            "Shannon Engine deploys in an isolated Docker container. It probes, exploits, and documents every vulnerability it finds.",
    },
    {
        step: "03",
        icon: FileText,
        title: "Get Your Hardened Report",
        description:
            "Receive a kill-chain report with threat scores, executive summaries, and one-click code patches. Ship with confidence.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 lg:py-32 bg-surface/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-secure/10 border border-secure/20 px-4 py-1.5 mb-6">
                        <span className="text-xs font-medium text-secure">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Three Steps to a{" "}
                        <span className="text-secure text-glow">Secure</span> App
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        No security expertise required. Just a URL and 10 minutes.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border-subtle" />

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.step} className="relative text-center group">
                                {/* Step number */}
                                <div className="relative z-10 mx-auto mb-6">
                                    <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-surface border border-border-subtle transition-all duration-300 group-hover:border-secure/30 group-hover:bg-secure/5">
                                        <Icon className="h-6 w-6 text-secure" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-secure text-background text-xs font-bold">
                                        {step.step}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>

                                {/* Arrow between steps (desktop) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:flex absolute top-16 -right-4 z-10">
                                        <ArrowRight className="h-4 w-4 text-secure/40" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
