<div align="center">
  <img src="file:///Users/seyimusibau/.gemini/antigravity/brain/6e8866d4-ed98-4139-a8e9-70218b96a639/hardener_plus_banner_1774913605276.png" width="100%" alt="Hardener Plus Banner">
  
  <h1>🛡️ Hardener Plus</h1>
  
  <p align="center">
    <strong>Modern App Development Requires Modern Security.</strong><br />
    Advanced static analysis and dynamic profiling to audit, verify, and harden your codebase.
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Structure</a> •
    <a href="#security-standards">Security</a>
  </p>

  <img src="https://img.shields.io/badge/version-0.1.0-emerald?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Next.js-16+-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/Supabase-Enabled-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase">
  <img src="https://img.shields.io/badge/Tailwind-CSS%204-06B6D4?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
</div>

---

## 🚀 Overview

**Hardener Plus** is a professional-grade security auditing platform designed for modern web architectures. It goes beyond simple static rules, employing advanced heuristics and dynamic profiling to detect logical bypasses, injection vulnerabilities, and business-logic flaws that traditional tools often miss.

> [!IMPORTANT]
> This platform provides both surface-level "Pulse Checks" and deep repository audits to ensure your application meets production-grade safety standards.

---

## ✨ Features

- **🔍 Pulse Check Scan**: Run non-invasive surface audits on any URL to analyze stack headers and common misconfigurations.
- **🛡️ Deep Audit Engine**: Advanced heuristics to identify sophisticated logical bypasses and injection points.
- **🛠️ Automated Patching**: Receive tested code snippets and automated Pull Requests tailored to your specific framework (Node.js, Python, Rust, Go, etc.).
- **📊 Safety Score Dashboard**: Interactive visualization of your application's security posture against global benchmarks.
- **🚀 CI/CD Integration**: Enterprise-grade GitHub/GitLab actions to block vulnerable deployments automatically.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend/Database**: [Supabase](https://supabase.com/) (PostgreSQL + SSR)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Class Variance Authority](https://cva.style/) & [Tailwind Merge](https://github.com/dcastil/tailwind-merge)

---

## 🚦 Getting Started

### Prerequisites

- Node.js 20+ 
- npm / pnpm / yarn / bun
- A Supabase Project (for database and authentication)

### Installation

1. **Clone the repository & install dependencies:**
   ```bash
   git clone https://github.com/seyimusibau/hardener.git
   cd hardener
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

---

## 📁 Project Structure

```text
hardener/
├── src/
│   ├── app/            # Next.js App Router (Pages & Layouts)
│   │   ├── admin/      # Admin Dashboard
│   │   ├── signup/     # User Onboarding
│   │   └── globals.css  # Global Stylings (Tailwind 4)
│   ├── components/     # Reusable UI Components
│   └── lib/            # Utility functions & Supabase Client
├── supabase/           # Database Migrations & Seed Data
├── public/             # Static Assets
└── package.json        # Dependencies & Scripts
```

---

## 🔒 Security Standards

Hardener Plus adheres to industry-leading security benchmarks. Our "Safety Score" is calculated based on:
- **Injection Protection** (SQLi, XSS, NoSQLi)
- **Authentication Resilience** (MFA, Session Management)
- **Data Integrity** (Encryption at rest/transition)
- **Logical Flow Verification** (Role-based access controls)

---

## 📄 License

This project is proprietary. Developed by **Inflimity / Hardener Plus Team**.

---

<div align="center">
  <p>Developed with ❤️ for a more secure web.</p>
  <sub>&copy; 2026 Hardener Plus // Global Security Auditing</sub>
</div>
