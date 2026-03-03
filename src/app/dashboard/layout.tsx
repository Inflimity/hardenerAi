"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Shield,
    LayoutDashboard,
    Scan,
    FileText,
    CreditCard,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Bell,
    User,
} from "lucide-react";

const sidebarLinks = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "New Scan",
        href: "/dashboard/scan",
        icon: Scan,
    },
    {
        label: "Reports",
        href: "/dashboard/reports",
        icon: FileText,
    },
    {
        label: "Billing",
        href: "/dashboard/billing",
        icon: CreditCard,
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Sidebar */}
            <aside
                className={`flex flex-col border-r border-border-subtle bg-surface/50 transition-all duration-300 ${collapsed ? "w-16" : "w-60"
                    }`}
            >
                {/* Logo */}
                <div className="flex h-16 items-center justify-between px-4 border-b border-border-subtle">
                    {!collapsed && (
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secure/10 border border-secure/20">
                                <Shield className="h-4 w-4 text-secure" />
                            </div>
                            <span className="text-sm font-bold tracking-tight">
                                Hardener<span className="text-secure">AI</span>
                            </span>
                        </Link>
                    )}
                    {collapsed && (
                        <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-lg bg-secure/10 border border-secure/20">
                            <Shield className="h-4 w-4 text-secure" />
                        </div>
                    )}
                </div>

                {/* Nav links */}
                <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-secure/10 text-secure border border-secure/20"
                                        : "text-muted hover:text-foreground hover:bg-surface-hover"
                                    } ${collapsed ? "justify-center" : ""}`}
                                title={collapsed ? link.label : undefined}
                            >
                                <Icon className="h-4.5 w-4.5 flex-shrink-0" />
                                {!collapsed && <span>{link.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom section */}
                <div className="border-t border-border-subtle p-2 space-y-1">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface-hover transition-all duration-200 w-full"
                    >
                        {collapsed ? (
                            <ChevronRight className="h-4 w-4 mx-auto" />
                        ) : (
                            <>
                                <ChevronLeft className="h-4 w-4" />
                                <span>Collapse</span>
                            </>
                        )}
                    </button>
                    <button
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full ${collapsed ? "justify-center" : ""
                            }`}
                    >
                        <LogOut className="h-4 w-4 flex-shrink-0" />
                        {!collapsed && <span>Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top bar */}
                <header className="flex h-16 items-center justify-between border-b border-border-subtle px-6 bg-surface/30">
                    <div>
                        <h2 className="text-sm font-semibold text-foreground">
                            {sidebarLinks.find((l) => l.href === pathname)?.label ||
                                "Dashboard"}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-muted hover:text-foreground hover:border-border-hover transition-all">
                            <Bell className="h-4 w-4" />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-secure/10 border border-secure/20 text-secure">
                            <User className="h-4 w-4" />
                        </button>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    );
}
