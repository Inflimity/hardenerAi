import {
    Shield,
    AlertTriangle,
    Scan,
    FileText,
    ArrowUpRight,
    Activity,
} from "lucide-react";

const stats = [
    {
        label: "Total Scans",
        value: "0",
        change: null,
        icon: Scan,
        color: "secure" as const,
    },
    {
        label: "Vulnerabilities Found",
        value: "0",
        change: null,
        icon: AlertTriangle,
        color: "vulnerable" as const,
    },
    {
        label: "Reports Generated",
        value: "0",
        change: null,
        icon: FileText,
        color: "secure" as const,
    },
    {
        label: "Security Score",
        value: "—",
        change: null,
        icon: Shield,
        color: "secure" as const,
    },
];

const recentScans: {
    id: string;
    url: string;
    status: string;
    score: number | null;
    date: string;
}[] = [];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight mb-1">
                    Security Dashboard
                </h1>
                <p className="text-sm text-muted">
                    Monitor your application security at a glance.
                </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    const isVuln = stat.color === "vulnerable";
                    return (
                        <div
                            key={stat.label}
                            className="glass rounded-xl p-5 transition-all duration-300 hover:bg-surface-hover"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${isVuln
                                            ? "bg-vulnerable/10 border border-vulnerable/20"
                                            : "bg-secure/10 border border-secure/20"
                                        }`}
                                >
                                    <Icon
                                        className={`h-4 w-4 ${isVuln ? "text-vulnerable" : "text-secure"
                                            }`}
                                    />
                                </div>
                                {stat.change && (
                                    <span className="text-xs text-secure flex items-center gap-0.5">
                                        <ArrowUpRight className="h-3 w-3" />
                                        {stat.change}
                                    </span>
                                )}
                            </div>
                            <div className="text-2xl font-bold mb-0.5">{stat.value}</div>
                            <div className="text-xs text-muted">{stat.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                    href="/dashboard/scan"
                    className="glass rounded-xl p-6 group transition-all duration-300 hover:bg-surface-hover hover:border-secure/20 flex items-center gap-4"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secure/10 border border-secure/20 transition-all group-hover:bg-secure/20">
                        <Scan className="h-6 w-6 text-secure" />
                    </div>
                    <div>
                        <h3 className="font-semibold mb-0.5 group-hover:text-secure transition-colors">
                            Start New Scan
                        </h3>
                        <p className="text-sm text-muted">
                            Enter a URL to begin a security audit
                        </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                    href="/dashboard/reports"
                    className="glass rounded-xl p-6 group transition-all duration-300 hover:bg-surface-hover hover:border-secure/20 flex items-center gap-4"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border-subtle transition-all group-hover:bg-secure/10 group-hover:border-secure/20">
                        <FileText className="h-6 w-6 text-muted group-hover:text-secure transition-colors" />
                    </div>
                    <div>
                        <h3 className="font-semibold mb-0.5 group-hover:text-secure transition-colors">
                            View Reports
                        </h3>
                        <p className="text-sm text-muted">
                            Access your security audit history
                        </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>

            {/* Recent Scans */}
            <div className="glass rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-border-subtle">
                    <h3 className="font-semibold flex items-center gap-2">
                        <Activity className="h-4 w-4 text-secure" />
                        Recent Scans
                    </h3>
                </div>

                {recentScans.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-surface border border-border-subtle mb-4">
                            <Scan className="h-6 w-6 text-muted" />
                        </div>
                        <h4 className="font-medium mb-1 text-muted">No scans yet</h4>
                        <p className="text-sm text-muted/60 mb-4">
                            Run your first security scan to see results here.
                        </p>
                        <a
                            href="/dashboard/scan"
                            className="inline-flex h-9 items-center justify-center rounded-lg bg-secure px-4 text-sm font-semibold text-background transition-all duration-200 hover:bg-secure-dim active:scale-95"
                        >
                            Start First Scan
                        </a>
                    </div>
                ) : (
                    <div className="divide-y divide-border-subtle">
                        {recentScans.map((scan) => (
                            <div
                                key={scan.id}
                                className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors"
                            >
                                <div>
                                    <p className="text-sm font-medium">{scan.url}</p>
                                    <p className="text-xs text-muted">{scan.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    {scan.score !== null && (
                                        <span
                                            className={`text-sm font-bold ${scan.score >= 70
                                                    ? "text-vulnerable"
                                                    : scan.score >= 40
                                                        ? "text-yellow-400"
                                                        : "text-secure"
                                                }`}
                                        >
                                            {scan.score}/100
                                        </span>
                                    )}
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${scan.status === "completed"
                                                ? "bg-secure/10 text-secure"
                                                : scan.status === "running"
                                                    ? "bg-vulnerable/10 text-vulnerable"
                                                    : "bg-surface text-muted"
                                            }`}
                                    >
                                        {scan.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
