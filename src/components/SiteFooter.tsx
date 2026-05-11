import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Upright Accounting Solutions" className="h-12 w-12 rounded-md bg-white/5 p-1" />
            <div>
              <div className="font-display text-base font-bold text-white">UPRIGHT</div>
              <div className="text-[10px] tracking-[0.22em] text-white/60">ACCOUNTING SOLUTIONS</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            A values-oriented accounting firm dedicated to trust and excellence — providing personalised
            accounting, tax, audit and advisory services across South Africa.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>271 Francis Baard Street</li>
            <li>Office 13A, Bothogo Plaza West, Pretoria 0001</li>
            <li>+27 76 551 0687</li>
            <li>admin@uprightaccountingsolution.org.za</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Upright Accounting Solutions. Reg 2012/002703/07.</p>
          <p>Dedicated to Trust and Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
