import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Minus, X } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { Reveal, Chapter } from "@/components/Reveal";
import { SERVICES, FRAMEWORKS, PILLARS, MATRIX, IMAGES } from "@/data/content";

const SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
];

function Bento() {
  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32" data-testid="capabilities-section">
      <div className="mx-auto max-w-7xl">
        <Chapter index="01" label="Capabilities" />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Six practices. One <em className="font-serif italic text-brand-400">execution</em> engine.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/services"
              data-testid="bento-view-all"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-brand-400"
            >
              Deep-dive services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(230px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.06} className={SPANS[i]}>
                <Link
                  to="/services"
                  data-testid={`bento-card-${s.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-[0_0_36px_rgba(117,112,212,0.14)]"
                >
                  {i === 0 && (
                    <>
                      <img
                        src={IMAGES.mesh}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-25 transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-35"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B101C] via-[#0B101C]/70 to-transparent" />
                    </>
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(135deg, rgba(117,112,212,0.12), transparent 55%)" }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/30 bg-brand-950/40 text-brand-400 transition-[box-shadow,border-color] duration-500 group-hover:border-brand-400/60 group-hover:shadow-[0_0_18px_rgba(117,112,212,0.35)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-slate-600 transition-colors duration-500 group-hover:text-brand-500/80">
                        /{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                  </div>
                  <div className="relative mt-6 flex flex-wrap items-center gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                      Explore <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Advantage() {
  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32" data-testid="advantage-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(117,112,212,0.05), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="02" label="The Gaussians Advantage" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Execution over advice. <em className="font-serif italic text-cyan-400">Always.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                className="group h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-[border-color,box-shadow] duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.12)]"
                data-testid={`pillar-card-${i}`}
              >
                <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="glass-card overflow-x-auto" data-testid="comparison-matrix">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">Dimension</th>
                  {MATRIX.columns.map((c, i) => (
                    <th key={c} className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 font-display text-sm font-semibold ${
                          i === 0 ? "text-brand-400" : "text-slate-400"
                        }`}
                      >
                        {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-dot" />}
                        {c}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-slate-800/60 transition-colors duration-300 last:border-0 hover:bg-slate-800/20">
                    <td className="px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">{row[0]}</td>
                    {row.slice(1).map((cell, ci) => (
                      <td key={ci} className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-start gap-2 ${ci === 0 ? "text-slate-100" : "text-slate-500"}`}>
                          {ci === 0 ? (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                          ) : ci === 1 ? (
                            <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                          ) : (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                          )}
                          {cell}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-testid="home-page"
    >
      <Hero />
      <Marquee items={FRAMEWORKS} />
      <Bento />
      <Advantage />
      <Testimonials />
      <CtaBanner />
    </motion.main>
  );
}
