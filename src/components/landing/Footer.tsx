import { Shield, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
    Product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Documentation", href: "#" },
    ],
    Company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Responsible Disclosure", href: "#" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-surface/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secure/10 border border-secure/20">
                                <Shield className="h-4 w-4 text-secure" />
                            </div>
                            <span className="text-lg font-bold tracking-tight">
                                Hardener<span className="text-secure">AI</span>
                            </span>
                        </a>
                        <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
                            Autonomous security scanning powered by the Shannon engine.
                            Built for founders who ship fast and value their users&apos; data.
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-muted transition-all duration-200 hover:text-foreground hover:border-secure/30 hover:bg-secure/5"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold text-foreground mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                        &copy; {new Date().getFullYear()} Hardener AI. All rights reserved.
                    </p>
                    <p className="text-xs text-muted">
                        Powered by{" "}
                        <a
                            href="https://github.com/KeygraphHQ/shannon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secure/70 hover:text-secure transition-colors"
                        >
                            Shannon Engine
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
