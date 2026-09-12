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
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Six practices. One <em className="font-serif italic text-brand-500">execution</em> engine.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/services"
              data-testid="bento-view-all"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-brand-600"
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
                  className="card-white group relative flex h-full flex-col justify-between overflow-hidden p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_24px_48px_-16px_rgba(117,112,212,0.22)]"
                >
                  {i === 0 && (
                    <>
                      <img
                        src={IMAGES.arch3}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30" />
                    </>
                  )}
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/25 bg-brand-500/[0.07] text-brand-500 transition-[box-shadow,border-color,background-color] duration-500 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 group-hover:shadow-[0_8px_25px_-4px_rgba(117,112,212,0.35)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-slate-300 transition-colors duration-500 group-hover:text-brand-400">
                        /{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                  </div>
                  <div className="relative mt-6 flex flex-wrap items-center gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                    <span className="ml-auto inline-flex -translate-x-2 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-600 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:opacity-100">
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
    <section className="relative bg-slate-50/60 px-6 py-24 lg:px-12 lg:py-32" data-testid="advantage-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(117,112,212,0.05), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="02" label="The Gaussians Advantage" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Execution over advice. <em className="font-serif italic text-brand-500">Always.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                className="card-white group h-full p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_20px_40px_-15px_rgba(117,112,212,0.18)]"
                data-testid={`pillar-card-${i}`}
              >
                <span className="font-mono text-xs tracking-[0.25em] text-brand-500">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="card-white overflow-x-auto shadow-[0_10px_30px_-5px_rgba(15,23,42,0.05)]" data-testid="comparison-matrix">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="px-6 py-5 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">Dimension</th>
                  {MATRIX.columns.map((c, i) => (
                    <th key={c} className={`px-6 py-5 ${i === 0 ? "bg-brand-500/[0.06]" : ""}`}>
                      <span
                        className={`inline-flex items-center gap-2 font-display text-sm font-semibold ${
                          i === 0 ? "text-brand-600" : "text-slate-500"
                        }`}
                      >
                        {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-dot" />}
                        {c}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-slate-100 transition-colors duration-300 last:border-0 hover:bg-slate-50/60">
                    <td className="px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">{row[0]}</td>
                    {row.slice(1).map((cell, ci) => (
                      <td key={ci} className={`px-6 py-4 text-sm ${ci === 0 ? "bg-brand-500/[0.04]" : ""}`}>
                        <span className={`inline-flex items-start gap-2 ${ci === 0 ? "font-medium text-slate-800" : "text-slate-400"}`}>
                          {ci === 0 ? (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                          ) : ci === 1 ? (
                            <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                          ) : (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-200" />
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
