import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck, Calculator, FileSearch, Scale, Award, Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import saicaLogo from "@/assets/memberships/saica.png";
import saitLogo from "@/assets/memberships/sait.png";
import cimaLogo from "@/assets/memberships/cima.jpg";
import saibaLogo from "@/assets/memberships/saiba.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Upright Accounting Solutions — Pretoria Accountants, Auditors & Tax Advisors" },
      { name: "description", content: "Values-driven Pretoria accounting firm offering Accounting, Auditing, Reviews, Taxation and BEE Verification services. Dedicated to Trust and Excellence." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Calculator, title: "Accounting", text: "Comprehensive bookkeeping, management accounts and financial reporting to keep your business compliant and clear-sighted." },
  { icon: FileSearch, title: "Auditing", text: "Independent, objective evaluation of your financial records — internal controls, statements and procedures." },
  { icon: Scale, title: "Reviews", text: "Limited examinations of financial statements to confirm fairness, accuracy and standards compliance." },
  { icon: Briefcase, title: "Taxation", text: "Strategic tax planning and preparation for individuals and businesses, minimising liability and maximising savings." },
  { icon: Award, title: "BEE Verifications", text: "Detailed B-BBEE assessments covering ownership, management, skills development and procurement." },
  { icon: ShieldCheck, title: "Advisory", text: "Tailored management consulting, cash flow & budgeting, and accounting software implementation." },
];

const stats = [
  { v: "15+", l: "Years of Experience", s: "Serving Pretoria & beyond" },
  { v: "500+", l: "Clients Served", s: "From SMEs to corporates" },
  { v: "4", l: "Professional Bodies", s: "SAICA · SAIT · SAIBA · CIMA" },
  { v: "100%", l: "Commitment", s: "Trust and Excellence" },
];

const process = [
  { n: "01", t: "Discovery", d: "We meet to understand your business, goals and the specific challenges you face." },
  { n: "02", t: "Tailored Plan", d: "A scoped engagement built around your industry, structure and reporting needs." },
  { n: "03", t: "Execution", d: "Our accountants, auditors and tax specialists deliver to deadline, every time." },
  { n: "04", t: "Ongoing Partnership", d: "Quarterly reviews and proactive advice — we earn the right to be your trusted adviser." },
];

const memberships = [
  { name: "South African Institute of Chartered Accountants", short: "SAICA", logo: saicaLogo },
  { name: "South African Institute of Tax Professionals", short: "SAIT", logo: saitLogo },
  { name: "Southern African Institute for Business Accountants", short: "SAIBA", logo: saibaLogo },
  { name: "Chartered Institute of Management Accountants", short: "CIMA", logo: cimaLogo },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Accountants at work"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:pb-28">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand">Trust · Excellence · Pretoria</span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl md:text-7xl">
              Accounting that<br />
              <span className="text-brand">moves your business</span> forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Personalised accounting, audit, tax and advisory services from a values-oriented
              firm rooted in the community — for 15+ years and counting.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/30 transition hover:brightness-95"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-brand hover:text-brand"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60 md:block">
          Scroll
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">End-to-end financial expertise</h2>
              <p className="mt-4 text-lg text-ink-soft">
                From day-to-day bookkeeping to BEE verification and complex audits — every service is
                tailored to the requirements of your business.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-soft transition group-hover:text-brand">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl font-extrabold text-brand">{s.v}</div>
              <div className="mt-3 font-semibold">{s.l}</div>
              <div className="mt-1 text-sm text-white/60">{s.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img src={about} alt="Financial planning" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-6 shadow-xl md:block">
              <div className="font-display text-3xl font-extrabold text-brand">15+</div>
              <div className="text-xs uppercase tracking-widest text-ink-soft">Years of trust</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">The kind of accounting firm you've been looking for.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Upright Accounting Solutions is a values-oriented firm that doesn't just deliver world-class
              service — we care about your business and the communities we share. We combine the breadth of
              a corporate firm with the personal commitment of a local partner.
            </p>
            <p className="mt-4 text-ink-soft">
              For 15 years we've helped businesses and individuals across Pretoria with accounting, tax,
              assurance and advisory services that advance their success.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              {memberships.map((m) => (
                <span key={m.short} className="text-sm font-bold tracking-wider text-ink-soft">{m.short}</span>
              ))}
            </div>
            <Link to="/about" className="mt-9 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REGISTERED MEMBER OF */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="eyebrow">Accreditations</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Registered Member Of</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              Our practice is registered with South Africa's leading professional bodies — assuring you
              of the highest standards of competence, ethics and accountability.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {memberships.map((m) => (
              <div
                key={m.short}
                className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="flex h-24 w-full items-center justify-center">
                  <img
                    src={m.logo}
                    alt={`${m.short} — ${m.name}`}
                    className="max-h-20 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 text-center text-xs leading-relaxed text-ink-soft">{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">A simple, transparent process</h2>
            <p className="mt-4 text-lg text-ink-soft">From first meeting to ongoing partnership, here's how we earn the right to be your trusted adviser.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-card p-7">
                <div className="font-display text-5xl font-extrabold text-brand">{p.n}</div>
                <h3 className="mt-4 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_color-mix(in_oklab,var(--brand)_45%,transparent),_transparent_55%)]" />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Ready to put your numbers in order?</h2>
            <p className="mt-3 max-w-xl text-white/70">Speak to a senior advisor today — no obligation, just clear answers.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground shadow-lg hover:brightness-95">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
