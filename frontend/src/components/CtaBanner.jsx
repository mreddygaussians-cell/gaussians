import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative px-6 pb-28 pt-8 lg:px-12" data-testid="cta-banner">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 85% 20%, rgba(117,112,212,0.28), transparent 55%), radial-gradient(circle at 10% 90%, rgba(117,112,212,0.12), transparent 50%)",
            }}
          />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-300">Connect With Us</p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Take the next step with <em className="font-serif font-medium italic text-brand-300">clarity and confidence.</em>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400">
                Whether you are preparing for an audit, building a compliance program, improving your cybersecurity posture, managing third-party risk, or looking for advisory support, our team is ready to become an extension of your team.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="cta-banner-button"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-8 py-4 font-display text-sm font-semibold text-slate-900 transition-[background-color,color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white hover:shadow-[0_12px_36px_rgba(117,112,212,0.45)]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
