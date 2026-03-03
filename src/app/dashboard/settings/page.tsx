"use client";

import { useState } from "react";
import { User, Bell, Shield, Key, Save } from "lucide-react";

export default function SettingsPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [notifications, setNotifications] = useState({ email: true, slack: false, discord: false });

    return (
        <div className="space-y-8 max-w-2xl">
            <div>
                <h1 className="text-2xl font-bold tracking-tight mb-1">Settings</h1>
                <p className="text-sm text-muted">Manage your account preferences.</p>
            </div>

            {/* Profile */}
            <div className="glass rounded-xl p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-4"><User className="h-4 w-4 text-secure" /> Profile</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted mb-1.5">Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                            className="w-full h-10 px-3 rounded-lg bg-surface border border-border-subtle text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-secure/40 focus:ring-1 focus:ring-secure/20 transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted mb-1.5">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@startup.com"
                            className="w-full h-10 px-3 rounded-lg bg-surface border border-border-subtle text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-secure/40 focus:ring-1 focus:ring-secure/20 transition-all" />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="glass rounded-xl p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-4"><Bell className="h-4 w-4 text-secure" /> Notifications</h3>
                <div className="space-y-3">
                    {([["email", "Email Notifications"], ["slack", "Slack Alerts"], ["discord", "Discord Alerts"]] as const).map(([key, label]) => (
                        <label key={key} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border-subtle hover:bg-surface-hover transition-colors cursor-pointer">
                            <span className="text-sm">{label}</span>
                            <button type="button" onClick={() => setNotifications(p => ({ ...p, [key]: !p[key] }))}
                                className={`w-10 h-6 rounded-full transition-all ${notifications[key] ? "bg-secure" : "bg-muted/30"}`}>
                                <div className={`w-4 h-4 rounded-full bg-white transition-transform mx-1 ${notifications[key] ? "translate-x-4" : ""}`} />
                            </button>
                        </label>
                    ))}
                </div>
            </div>

            {/* API Keys */}
            <div className="glass rounded-xl p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-4"><Key className="h-4 w-4 text-secure" /> API Keys</h3>
                <p className="text-sm text-muted mb-4">Generate API keys to integrate Hardener AI into your CI/CD pipeline.</p>
                <button className="h-9 px-4 rounded-lg bg-surface border border-border-subtle text-sm font-medium text-muted hover:text-foreground hover:border-secure/30 transition-all">
                    Generate New Key
                </button>
            </div>

            {/* Security */}
            <div className="glass rounded-xl p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-4"><Shield className="h-4 w-4 text-secure" /> Security</h3>
                <div className="space-y-3">
                    <button className="w-full text-left p-3 rounded-lg bg-surface border border-border-subtle hover:bg-surface-hover transition-colors">
                        <p className="text-sm font-medium">Change Password</p>
                        <p className="text-xs text-muted">Update your account password</p>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg bg-surface border border-border-subtle hover:bg-surface-hover transition-colors">
                        <p className="text-sm font-medium">Two-Factor Authentication</p>
                        <p className="text-xs text-muted">Add an extra layer of security</p>
                    </button>
                </div>
            </div>

            <button className="h-11 px-6 rounded-lg bg-secure text-background font-semibold text-sm inline-flex items-center gap-2 transition-all hover:bg-secure-dim active:scale-95">
                <Save className="h-4 w-4" /> Save Changes
            </button>
        </div>
    );
}
