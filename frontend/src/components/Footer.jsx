import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/Navbar";
import { CONTACT } from "@/data/content";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const BADGES = ["SOC 2", "ISO 27001", "ISO 42001", "NIST CSF 2.0", "PCI DSS", "HIPAA", "GDPR", "CMMC"];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-[#070B12]" data-testid="footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Security engineered for velocity. Compliance built for scale. Hands-on GRC execution for organizations
              that refuse to slow down.
            </p>
            <div className="mt-6">
              <span className="status-pill" data-testid="footer-status-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Explore</h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    data-testid={`footer-link-${n.label.toLowerCase()}`}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Frameworks</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span key={b} className="chip">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Global Hub</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="transition-colors duration-300 hover:text-emerald-400">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} data-testid="footer-phone" className="transition-colors duration-300 hover:text-emerald-400">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-slate-800/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wider text-slate-500">© 2026 GAUSSIANS. ALL RIGHTS RESERVED.</p>
          <p className="font-mono text-[11px] tracking-wider text-slate-500">GURGAON HQ — NORTH AMERICA · EMEA · APAC</p>
        </div>
      </div>
    </footer>
  );
}
