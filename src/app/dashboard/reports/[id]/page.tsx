"use client";

import { useState } from "react";
import { ArrowLeft, Download, Copy, CheckCircle2, AlertTriangle, XCircle, Info, Shield, Code2, ExternalLink } from "lucide-react";

// Mock report data for UI demonstration
const mockReport = {
    url: "https://example-startup.com",
    scanDate: "2026-03-03T18:00:00Z",
    scanType: "Deep Shannon Audit",
    score: 72,
    summary: {
        executive: "Your application has 3 critical vulnerabilities that could allow unauthorized access to your database and user data. The most severe issue is an SQL injection in your authentication endpoint that can be exploited in under 60 seconds. Immediate action is required.",
        technical: "The scan identified misconfigurations in authentication, input validation, and header security. The application leaks server information via response headers and has no Content Security Policy configured.",
    },
    vulnerabilities: [
        {
            id: "V-001", severity: "critical" as const, title: "SQL Injection in /api/login", description: "The login endpoint accepts unsanitized user input directly in SQL queries, allowing authentication bypass.", location: "src/api/login.php:18",
            patch: `// BEFORE (Vulnerable)\n$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";\n$result = mysqli_query($conn, $query);\n\n// AFTER (Patched with Prepared Statements)\n$stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");\n$stmt->bind_param("ss", $email, $password);\n$stmt->execute();\n$result = $stmt->get_result();`
        },
        {
            id: "V-002", severity: "critical" as const, title: "Exposed OpenAI API Key in Frontend", description: "An OpenAI API key (sk-proj-xxxx) was found hardcoded in the client-side JavaScript bundle.", location: "src/utils/ai.js:3",
            patch: `// BEFORE (Vulnerable)\nconst OPENAI_KEY = "sk-proj-abc123...";\n\n// AFTER (Use environment variable + server-side proxy)\n// 1. Move to .env.local\n// OPENAI_API_KEY=sk-proj-abc123...\n\n// 2. Create API route: /api/ai\nexport async function POST(req) {\n  const { prompt } = await req.json();\n  const res = await fetch("https://api.openai.com/v1/...", {\n    headers: { Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\` }\n  });\n  return Response.json(await res.json());\n}`
        },
        {
            id: "V-003", severity: "critical" as const, title: "Missing CSRF Protection", description: "No CSRF tokens found on state-changing forms, allowing cross-site request forgery attacks.", location: "Global",
            patch: `// Add CSRF token middleware\nimport { csrf } from 'csrf-protection';\napp.use(csrf({ cookie: true }));`
        },
        {
            id: "V-004", severity: "medium" as const, title: "Missing Content-Security-Policy", description: "No CSP header configured. The application is vulnerable to XSS via inline scripts.", location: "next.config.js",
            patch: `// Add to next.config.js\nconst securityHeaders = [\n  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'" }\n];\nmodule.exports = {\n  async headers() { return [{ source: '/:path*', headers: securityHeaders }]; }\n};`
        },
        {
            id: "V-005", severity: "low" as const, title: "Server Information Disclosure", description: "X-Powered-By header reveals server technology (Express).", location: "server.js",
            patch: `// Add early in your Express app\napp.disable('x-powered-by');`
        },
    ],
    killChain: [
        { step: 1, action: "Reconnaissance", detail: "Identified Express.js backend via X-Powered-By header" },
        { step: 2, action: "Discovery", detail: "Found /api/login endpoint accepting POST with email/password" },
        { step: 3, action: "Exploitation", detail: "SQL injection: ' OR 1=1 -- bypassed authentication" },
        { step: 4, action: "Privilege Escalation", detail: "Accessed admin panel via /admin with bypassed auth" },
        { step: 5, action: "Data Exfiltration", detail: "Dumped users table: 2,847 records with plaintext passwords" },
    ],
};

export default function ReportDetailPage() {
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const report = mockReport;

    const copyPatch = (id: string, code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const sevColor = (s: string) => s === "critical" ? "text-red-400" : s === "medium" ? "text-vulnerable" : "text-yellow-400";
    const sevBg = (s: string) => s === "critical" ? "bg-red-500/10" : s === "medium" ? "bg-vulnerable/10" : "bg-yellow-500/10";

    // Gauge angle: score 0-100 maps to 0-180 degrees
    const gaugeAngle = (report.score / 100) * 180;

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* Back + Header */}
            <div className="flex items-center justify-between">
                <a href="/dashboard/reports" className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Reports
                </a>
                <button className="h-9 px-4 rounded-lg bg-surface border border-border-subtle text-sm text-muted hover:text-foreground transition-all inline-flex items-center gap-1.5">
                    <Download className="h-3.5 w-3.5" /> Export PDF
                </button>
            </div>

            {/* Report Header */}
            <div className="glass rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-bold mb-1 flex items-center gap-2">{report.url} <ExternalLink className="h-4 w-4 text-muted" /></h1>
                        <p className="text-xs text-muted">{report.scanType} · {new Date(report.scanDate).toLocaleDateString()}</p>
                    </div>
                    {/* Threat Score Gauge */}
                    <div className="text-center">
                        <div className="relative w-28 h-16 mx-auto overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 h-28 w-28 rounded-full border-8 border-surface" />
                            <div className="absolute bottom-0 left-0 right-0 h-28 w-28 rounded-full border-8 border-transparent" style={{
                                borderTopColor: report.score >= 70 ? "#f87171" : report.score >= 40 ? "#F59E0B" : "#39FF14",
                                borderRightColor: report.score >= 50 ? (report.score >= 70 ? "#f87171" : "#F59E0B") : "transparent",
                                transform: `rotate(${gaugeAngle}deg)`, transformOrigin: "bottom center",
                            }} />
                        </div>
                        <p className={`text-3xl font-bold -mt-2 ${report.score >= 70 ? "text-red-400" : report.score >= 40 ? "text-vulnerable" : "text-secure"}`}>{report.score}</p>
                        <p className="text-xs text-muted">Threat Score</p>
                    </div>
                </div>
            </div>

            {/* Executive Summary */}
            <div className="glass rounded-xl p-6">
                <h2 className="font-semibold mb-3 flex items-center gap-2"><Info className="h-4 w-4 text-secure" /> Executive Summary</h2>
                <p className="text-sm text-muted leading-relaxed">{report.summary.executive}</p>
            </div>

            {/* Kill Chain */}
            <div className="glass rounded-xl p-6">
                <h2 className="font-semibold mb-4 flex items-center gap-2"><Shield className="h-4 w-4 text-vulnerable" /> Kill Chain</h2>
                <div className="space-y-3">
                    {report.killChain.map((s) => (
                        <div key={s.step} className="flex gap-4 items-start">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-vulnerable/10 border border-vulnerable/20 text-xs font-bold text-vulnerable flex-shrink-0">{s.step}</div>
                            <div>
                                <p className="text-sm font-medium text-vulnerable">{s.action}</p>
                                <p className="text-xs text-muted">{s.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vulnerabilities + Patches */}
            <div>
                <h2 className="font-semibold mb-4 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-vulnerable" /> Vulnerabilities ({report.vulnerabilities.length})</h2>
                <div className="space-y-4">
                    {report.vulnerabilities.map((v) => (
                        <div key={v.id} className="glass rounded-xl overflow-hidden">
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <div className="flex items-center gap-2">
                                        {v.severity === "critical" ? <XCircle className="h-4 w-4 text-red-400" /> : v.severity === "medium" ? <AlertTriangle className="h-4 w-4 text-vulnerable" /> : <Info className="h-4 w-4 text-yellow-400" />}
                                        <h3 className="text-sm font-semibold">{v.title}</h3>
                                    </div>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sevBg(v.severity)} ${sevColor(v.severity)}`}>{v.severity}</span>
                                </div>
                                <p className="text-xs text-muted mb-2">{v.description}</p>
                                <p className="text-xs text-muted/60">Location: <code className="text-secure/70">{v.location}</code></p>
                            </div>
                            {/* Code Patch */}
                            <div className="border-t border-border-subtle bg-surface/50 p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-secure" /> One-Click Fix</span>
                                    <button onClick={() => copyPatch(v.id, v.patch)} className="text-xs text-muted hover:text-foreground transition-colors flex items-center gap-1">
                                        {copiedId === v.id ? <><CheckCircle2 className="h-3 w-3 text-secure" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
                                    </button>
                                </div>
                                <pre className="text-xs font-mono text-muted bg-background p-3 rounded-lg overflow-x-auto border border-border-subtle leading-5">{v.patch}</pre>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
