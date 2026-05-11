import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Upright Accounting Solutions" },
      { name: "description", content: "Speak to Upright Accounting Solutions in Pretoria. Call +27 76 551 0687 or email admin@uprightaccountingsolution.org.za for accounting, tax and audit enquiries." },
      { property: "og:title", content: "Contact Upright Accounting Solutions" },
      { property: "og:description", content: "Pretoria-based accountants — call, email or send us a message." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "admin@uprightaccountingsolution.org.za", href: "mailto:admin@uprightaccountingsolution.org.za" },
  { icon: Phone, label: "Phone", value: "+27 76 551 0687", href: "tel:+27765510687" },
  { icon: MapPin, label: "Office", value: "271 Francis Baard Street, Office 13A Bothogo Plaza West, Pretoria 0001" },
  { icon: Clock, label: "Hours", value: "Mon – Fri · 08:00 – 17:00" },
];

const serviceOptions = [
  "Accounting & Bookkeeping",
  "Auditing & Reviews",
  "Taxation",
  "BEE Verifications",
  "Management Advisory",
  "Payroll Services",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Let's discuss <span className="text-brand">your numbers.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Whether you need a specific service or want to explore our full offering, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-5">
        <div className="space-y-6 md:col-span-2">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-soft text-ink">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{label}</div>
                {href ? (
                  <a href={href} className="mt-1 block break-words text-base font-semibold text-ink hover:text-brand">{value}</a>
                ) : (
                  <div className="mt-1 text-base font-semibold text-ink">{value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-5 rounded-3xl border border-border bg-card p-8 md:col-span-3 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" required />
            <Field label="Email Address" name="email" type="email" required />
            <Field label="Company / Entity" name="company" />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Service Required</label>
            <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none">
              <option value="">Select a service</option>
              {serviceOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Your Message</label>
            <textarea rows={5} required className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none" />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground transition hover:brightness-95 sm:w-auto"
          >
            <Send className="h-4 w-4" /> Send enquiry
          </button>
          {sent && <p className="text-sm text-brand">Thanks — we'll respond within 24 hours.</p>}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none"
      />
    </div>
  );
}
