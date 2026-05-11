import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, HeartHandshake, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import team from "@/assets/team.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Upright Accounting Solutions" },
      { name: "description", content: "For 15+ years, Upright Accounting Solutions has delivered values-driven accounting, tax, audit and advisory services to clients across Pretoria, South Africa." },
      { property: "og:title", content: "About Upright Accounting Solutions" },
      { property: "og:description", content: "A values-oriented Pretoria accounting firm dedicated to Trust and Excellence." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", text: "Dedicated to Trust and Excellence. We are laser focused on helping our clients succeed and work hard to earn the right to be your trusted adviser." },
  { icon: HeartHandshake, title: "Commitment", text: "Personalised services tailored to the specific requirements of each client. We are fully vested in the success of each client and our communities." },
  { icon: Sparkles, title: "Experience", text: "Outstanding technical expertise combined with extensive industry experience and a passion for excellence — for a wide spectrum of clients." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <span className="eyebrow">About Us</span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
              Dedicated to <span className="text-brand">Trust and Excellence.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              We sincerely believe you'll find Upright Accounting Solutions exactly the kind of accounting
              firm you've been looking for — values-oriented, world-class in service, and personally
              committed to your business and our communities.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              For 15 years we've been providing businesses and individuals throughout Pretoria with
              accounting, tax, assurance and advisory services that help them achieve their goals and
              advance their success. Our clients range from large public companies and major nonprofits to
              closely held businesses, professional practices and successful individuals.
            </p>
          </div>
          <img src={team} alt="The Upright team" className="aspect-[5/6] w-full rounded-3xl object-cover" loading="lazy" />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
        <img src={about} alt="Financial documents" className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
        <div>
          <span className="eyebrow">Memberships</span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Backed by South Africa's leading professional bodies.</h2>
          <p className="mt-5 text-lg text-ink-soft">
            Our team is registered with the institutions that set the standard for accounting,
            tax and management excellence in South Africa.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4">
            {[
              { k: "SAICA", v: "South African Institute of Chartered Accountants" },
              { k: "SAIT", v: "South African Institute of Tax Professionals" },
              { k: "SAIBA", v: "Southern African Institute for Business Accountants" },
              { k: "CIMA", v: "Chartered Institute of Management Accountants" },
            ].map((m) => (
              <li key={m.k} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-display text-xl font-bold text-brand">{m.k}</div>
                <div className="mt-1 text-xs text-ink-soft">{m.v}</div>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:brightness-110">
            Start the conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
