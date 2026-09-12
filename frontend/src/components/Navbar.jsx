import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home", id: "home" },
  { to: "/services", label: "Services", id: "services" },
  { to: "/about", label: "About", id: "about" },
  { to: "/insights", label: "Insights", id: "insights" },
  { to: "/contact", label: "Contact", id: "contact" },
];

export function Logo() {
  return (
    <Link to="/" data-testid="nav-logo" className="group flex items-center gap-2.5">
      <img
        src="/logo-color.png"
        alt="Gaussians"
        className="h-8 w-auto transition-[filter,transform] duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_18px_rgba(117,112,212,0.55)]"
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "border-b border-slate-800/80 bg-[#090D16]/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-12">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.id}
              to={l.to}
              data-testid={`nav-link-${l.id}`}
              className={({ isActive }) =>
                `relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive ? "text-brand-400" : "text-slate-400 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            data-testid="nav-cta-button"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-[#15142E] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_8px_28px_rgba(117,112,212,0.4)]"
          >
            Book Consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-700/80 text-slate-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-slate-800/80 bg-[#090D16]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l) => (
                <NavLink
                  key={l.id}
                  to={l.to}
                  data-testid={`nav-mobile-link-${l.id}`}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 font-display text-base font-medium transition-colors duration-300 ${
                      isActive ? "bg-brand-950/50 text-brand-400" : "text-slate-300 hover:bg-slate-800/60"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                data-testid="nav-mobile-cta"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-display text-sm font-semibold text-[#15142E]"
              >
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
