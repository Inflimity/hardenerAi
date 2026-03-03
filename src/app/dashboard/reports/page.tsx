import { FileText, Search, Filter, Scan } from "lucide-react";

const reports: {
    id: string;
    url: string;
    scanType: string;
    score: number;
    status: string;
    vulns: { critical: number; medium: number; low: number };
    date: string;
}[] = [];

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight mb-1">Reports</h1>
                    <p className="text-sm text-muted">
                        View and download your security audit reports.
                    </p>
                </div>
                <a
                    href="/dashboard/scan"
                    className="inline-flex h-9 items-center justify-center rounded-lg bg-secure px-4 text-sm font-semibold text-background transition-all duration-200 hover:bg-secure-dim active:scale-95 gap-1.5"
                >
                    <Scan className="h-3.5 w-3.5" />
                    New Scan
                </a>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted/60" />
                    <input
                        type="text"
                        placeholder="Search reports by URL..."
                        className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface border border-border-subtle text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-secure/40 focus:ring-1 focus:ring-secure/20 transition-all"
                    />
                </div>
                <button className="h-10 px-4 rounded-lg bg-surface border border-border-subtle text-sm text-muted hover:text-foreground hover:border-border-hover transition-all inline-flex items-center gap-2">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                </button>
            </div>

            {/* Reports List */}
            {reports.length === 0 ? (
                <div className="glass rounded-xl p-16 text-center">
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-surface border border-border-subtle mb-4">
                        <FileText className="h-7 w-7 text-muted" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No reports yet</h3>
                    <p className="text-sm text-muted mb-6 max-w-sm mx-auto">
                        Run your first security scan to generate a detailed vulnerability
                        report with threat scores, kill chains, and code patches.
                    </p>
                    <a
                        href="/dashboard/scan"
                        className="inline-flex h-10 items-center justify-center rounded-lg bg-secure px-5 text-sm font-semibold text-background transition-all duration-200 hover:bg-secure-dim active:scale-95"
                    >
                        Start First Scan
                    </a>
                </div>
            ) : (
                <div className="space-y-3">
                    {reports.map((report) => (
                        <div
                            key={report.id}
                            className="glass rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-200 hover:bg-surface-hover"
                        >
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold truncate mb-0.5">
                                    {report.url}
                                </h4>
                                <div className="flex items-center gap-3 text-xs text-muted">
                                    <span>{report.scanType}</span>
                                    <span>·</span>
                                    <span>{report.date}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* Vuln counts */}
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-medium">
                                        {report.vulns.critical}C
                                    </span>
                                    <span className="px-2 py-0.5 rounded bg-vulnerable/10 text-vulnerable font-medium">
                                        {report.vulns.medium}M
                                    </span>
                                    <span className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 font-medium">
                                        {report.vulns.low}L
                                    </span>
                                </div>

                                {/* Score */}
                                <div
                                    className={`text-lg font-bold ${report.score >= 70
                                            ? "text-red-400"
                                            : report.score >= 40
                                                ? "text-vulnerable"
                                                : "text-secure"
                                        }`}
                                >
                                    {report.score}
                                </div>

                                <a
                                    href={`/dashboard/reports/${report.id}`}
                                    className="h-8 px-3 rounded-lg bg-surface border border-border-subtle text-xs font-medium text-muted hover:text-foreground hover:border-border-hover transition-all inline-flex items-center"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
