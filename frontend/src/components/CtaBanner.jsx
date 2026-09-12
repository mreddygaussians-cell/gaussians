import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative px-6 pb-28 pt-8 lg:px-12" data-testid="cta-banner">
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass-card relative overflow-hidden px-8 py-16 sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 85% 20%, rgba(16,185,129,0.16), transparent 55%), radial-gradient(circle at 10% 90%, rgba(6,182,212,0.12), transparent 50%)",
            }}
          />
          <div className="grid-pattern pointer-events-none absolute inset-0 opacity-15" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-400">Zero-surprise outcomes</p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Compliance, at the <em className="font-serif font-medium italic text-emerald-400">speed</em> of your
                roadmap.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400">
                From rapid SOC 2, ISO 27001, and ISO 42001 readiness to fully managed compliance operations — senior
                practitioners, hands-on execution, relentless velocity.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="cta-banner-button"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-emerald-500 px-8 py-4 font-display text-sm font-semibold text-[#06281c] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_12px_36px_rgba(16,185,129,0.4)]"
            >
              Start the Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
