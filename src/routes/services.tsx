import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Upright Accounting Solutions" },
      { name: "description", content: "Accounting, Auditing, Reviews, Taxation, BEE Verifications, Payroll, Advisory and more — full-service financial expertise from Upright Accounting Solutions in Pretoria." },
      { property: "og:title", content: "Our Services — Upright Accounting Solutions" },
      { property: "og:description", content: "Full-service accounting, audit, tax and advisory in Pretoria, South Africa." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    eyebrow: "Compliance & Reporting",
    title: "Accounting & Bookkeeping",
    body: "Complete management of receivables, payables and payroll. We prepare GAAP-compliant financial statements for banks, investors and third parties — plus custom reports for internal use.",
    items: ["Bookkeeping & write-up", "Management accounts", "Annual financial statements", "Bank reconciliations"],
  },
  {
    eyebrow: "Assurance",
    title: "Auditing, Reviews & Attest Services",
    body: "Independent assurance you can stand behind. From limited reviews to full-scope audits, we deliver cost-efficient attest services in line with your mandatory reporting deadlines.",
    items: ["Independent audits", "Limited reviews", "Compilations", "Internal controls evaluation"],
  },
  {
    eyebrow: "Tax",
    title: "Taxation & Planning",
    body: "Year-round tax planning to minimise your total tax burden. We prepare returns for individuals and businesses and resolve tax issues with SARS on your behalf.",
    items: ["Tax planning & strategy", "Income tax returns", "VAT & PAYE", "SARS dispute resolution"],
  },
  {
    eyebrow: "Empowerment",
    title: "BEE Verifications",
    body: "Detailed assessments of ownership, management, employment equity, skills development, socio-economic development and preferential procurement to determine your B-BBEE status.",
    items: ["B-BBEE scorecard analysis", "Verification certificates", "Skills development reporting", "Ownership structuring"],
  },
  {
    eyebrow: "Advisory",
    title: "Management Advisory",
    body: "Strategic guidance for growth — systems implementation, cost controls, employee benefit plans and much more. We become an extension of your management team.",
    items: ["Cash flow & budgeting", "Financial forecasting", "Cost controls", "Benefit plan restructuring"],
  },
  {
    eyebrow: "Operations",
    title: "Payroll & Software",
    body: "Complete payroll preparation and tax reporting, plus accounting software selection, implementation and training so your finance function runs smoothly.",
    items: ["Payroll & EMP returns", "Software selection", "Implementation & training", "Electronic filing"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <span className="eyebrow">Our Services</span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Financial expertise, <span className="text-brand">tailored to you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Just as restaurants differ greatly in menu choices and quality, accounting firms differ in the
            range and quality of services they provide. Here's what makes us different.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <article key={g.title} className="group flex flex-col rounded-3xl border border-border bg-card p-10 transition hover:border-brand hover:shadow-xl">
              <span className="eyebrow">{g.eyebrow}</span>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">{g.title}</h2>
              <p className="mt-4 text-ink-soft">{g.body}</p>
              <ul className="mt-6 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand" />
                    <span className="text-ink">{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-10 text-white md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Not sure which service you need?</h2>
            <p className="mt-3 max-w-lg text-white/70">Tell us about your business and we'll recommend the right combination — no obligation.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground hover:brightness-95">
            Talk to an advisor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
